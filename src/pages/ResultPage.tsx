import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const ResultContainer = styled.div`
	text-align: center;
	margin-top: 50px;
`;
const CompleteTitle = styled.h2`
	font-size: 50px;
	color: #007bff;
	margin-bottom: 2px;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	span {
		color: #000;
	}
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
const QuoteLink = styled(Link)`
	display: block;
	margin-top: 16px;
	text-decoration: none;
	color: #007bff; /* Bootstrap's primary color */
	font-weight: bold;
	&:hover {
		text-decoration: underline;
	}
`;

const ResultPage: React.FC = () => {
	const location = useLocation();
	const finalScore = location.state?.score || 0;

	return (
		<ResultContainer>
			<CompleteTitle> Quiz Completed!</CompleteTitle>
			<p>
				Congratulations you have finished the Quiz! Your final score is:{" "}
				{finalScore}
			</p>
			<BackLink to="/">Back to Welcomepage</BackLink>
			<QuoteLink to="/QuotePage">Your price for playing</QuoteLink>
		</ResultContainer>
	);
};

export default ResultPage;
