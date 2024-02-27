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
const QuestionTitle = styled.h2``;
const ChoicesContainer = styled.div``;
const ChoiceButton = styled.button`
	background-color: #007bff; /* Bootstrap's primary color */
	color: #fff;
	margin: 0.5rem;
	padding: 0.5rem 1rem;
	border: none;
	border-radius: 4px;
	cursor: pointer;
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
