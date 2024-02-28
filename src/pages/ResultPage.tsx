import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ResultContainer = styled.div`
	text-align: center;
	margin-top: 50px;
`;

const ResultPage: React.FC = () => {
	const location = useLocation();
	const finalScore = location.state?.score || 0;
	return (
		<ResultContainer>
			<h2>Quiz Completed!</h2>
			<p>Your final score is: {finalScore}</p>
		</ResultContainer>
	);
};

export default ResultPage;
