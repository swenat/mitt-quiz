import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
	text-align: center;
`;
const Title = styled.h1`
	font-size: 5rem;
	color: #007bff;
	span {
		color: #000;
	}
`;
const EnterQuizButton = styled(Link)`
	display: inline-block;
	margin-top: 1rem;
	padding: 0.5rem 1rem;
	background-color: #007bff;
	color: #fff;
	text-decoration: none;
	border-radius: 4px;
`;
const WelcomePage: React.FC = () => {
	return (
		<Container>
			<Title>
				Welcome to <span>Quiztime</span>
			</Title>
			<EnterQuizButton to="/quiz">Enter Quiz</EnterQuizButton>
		</Container>
	);
};
export default WelcomePage;
