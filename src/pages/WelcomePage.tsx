import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	text-align: center;
`;
const WelcomeTitle = styled.h1`
	font-size: 80px;
	color: #007bff;
	margin-bottom: 2px;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	span {
		color: #000;
	}
`;
const EnterQuizButtonLink = styled(Link)`
	display: inline-block;
	margin-top: 16px;
	padding: 8px 16px;
	background-color: #1e90ff;
	color: #fff;
	font-size: 20px;
	text-decoration: none;
	border-radius: 7px;

	&:hover {
		background-color: #0039a6;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	}
`;

const WelcomePage: React.FC = () => {
	return (
		<Container>
			<WelcomeTitle>
				Welcome to <span>Quiztime</span>
			</WelcomeTitle>
			<EnterQuizButtonLink to="/quiz">Enter Quiz</EnterQuizButtonLink>
		</Container>
	);
};

export default WelcomePage;
