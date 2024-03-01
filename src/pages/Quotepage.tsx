import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	text-align: center;
	margin: 20px;
`;

const Title = styled.h1`
	color: #333;
`;

const QuoteList = styled.ul`
	list-style-type: disc;
	padding: 0;
	text-align: center;
`;

const QuoteItem = styled.li`
	margin: 10px 0;
	font-size: 16px;
	color: #555;
	text-align: left;
`;

const BackLink = styled(Link)`
	display: block;
	margin-top: 16px;
	text-decoration: none;
	color: #007bff; /* Bootstrap's primary color */
	font-weight: bold;
	&:hover {
		text-decoration: underline;
	}
`;

const LoadMoreButton = styled.button`
	display: inline-block;
	margin-top: 16px;
	padding: 8px 16px;
	background-color: #1e90ff;
	color: #fff;
	font-size: 20px;
	text-decoration: none;
	border-radius: 7px;
	border-style: double;
	font-size: 15px;
	cursor: pointer;

	&:hover {
		background-color: #0039a6;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	}
`;

interface Quote {
	text: string;
}

const QuotePage = () => {
	const [quotes, setQuotes] = useState<Quote[]>([]);
	const [visibleQuotes, setVisibleQuotes] = useState<Quote[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://type.fit/api/quotes");
				const data: Quote[] = await response.json();
				setQuotes(data);
				setVisibleQuotes(data.slice(0, 5));
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []); // Empty dependency array ensures the effect runs once when the component mounts

	const loadMoreQuotes = () => {
		// Determine the next set of 5 quotes to display
		const startIndex = visibleQuotes.length;
		const endIndex = startIndex + 5;
		const nextQuotes = quotes.slice(startIndex, endIndex);

		// Update the visible quotes state
		setVisibleQuotes((prevQuotes) => [...prevQuotes, ...nextQuotes]);
	};

	return (
		<Container>
			<Title>Famous Quotes for fun</Title>
			<QuoteList>
				{visibleQuotes.map((quote, index) => (
					<QuoteItem key={index}>{quote.text}</QuoteItem>
				))}
			</QuoteList>
			<LoadMoreButton onClick={loadMoreQuotes}>
				Load for more Quotes
			</LoadMoreButton>
			<BackLink to="/">Back to Welcomepage</BackLink>
		</Container>
	);
};

export default QuotePage;
