import React from "react";
import styled from "styled-components";
interface Props {
	question: string;
	choices: string[];
	onAnswer: (answer: string) => void;
}
// Styled components for the Question component
const QuestionContainer = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
`;
const QuestionTitle = styled.h2`
	font-family: "Georgia";
	font-size: 20px;
`;
const ChoicesContainer = styled.div``;
const ChoiceButton = styled.button`
	background-color: #007bff;
	color: #fff;
	margin: 8px;
	margin-top: 25px;
	padding: 8px 16px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-weight: bold;
	font-size: 18px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

	&:hover {
		background-color: #0039a6;
		font-weight: bold;
	}
`;
//question as functional component with react
const Question: React.FC<Props> = ({ question, choices, onAnswer }) => {
	return (
		<QuestionContainer>
			<QuestionTitle>{question}</QuestionTitle>
			<ChoicesContainer>
				{choices.map((choice) => (
					<ChoiceButton key={choice} onClick={() => onAnswer(choice)}>
						{choice}
					</ChoiceButton>
				))}
			</ChoicesContainer>
		</QuestionContainer>
	);
};
export default Question;
