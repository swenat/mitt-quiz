import React, { useState } from "react";
import styled from "styled-components";
import Question from "./Question";
const questions = [
	//Array containing quiz questions with correct answers //
	{
		question:
			"In what country did the first Starbucks open outside of North America?",
		choices: ["London", "Paris", "Japan"],
		answer: "Japan",
	},
	{
		question: "In a website browser adress bar what does www stand for?",
		choices: ["Wide Wonders Web", "World Web Wing", "World Wide Web"],
		answer: "World Wide Web",
	},
	{
		question: "Pocahontas was baptized and given what English name?",
		choices: ["Rebecca", "Dahlia", "Rose"],
		answer: "Rebecca",
	},
	{
		question: "What kind of product did Amazon originally sell?",
		choices: ["Drills", "Laptops", "Books"],
		answer: "Books",
	},
	{
		question: "In what year was the internet opened to the public?",
		choices: ["1990", "1993", "1989"],
		answer: "1993",
	},
	{
		question:
			"What is the last name of the business tycoon behind the No.5 perfume?",
		choices: ["Chanel", "Dior", "Maybelline"],
		answer: "Chanel",
	},
	{
		question: "Which is the highest-grossing R-rated film in North America",
		choices: ["The Godfather", "Titanic", "The Passion of the Christ"],
		answer: "The Passion of the Christ",
	},
	{
		question: "What was the coffee shop named in the hit TV show Friends?",
		choices: ["Coffeland", "Central Park Café", "Central Perk"],
		answer: "Central Perk",
	},
	{
		question:
			"How old was Rose in the Titanic movie when she was recounting her story?",
		choices: ["90", "102", "100"],
		answer: "100",
	},
	{
		question:
			"What was the first Disney animated feature movie that was not based on an already existing story?",
		choices: ["The Lion King", "Little Mermaid", "Pinocchio"],
		answer: "The Lion King",
	},
];
const QuizContainer = styled.div`
	text-align: center;
`;
const QuizTitle = styled.h1`
	font-size: 2rem;
	margin-bottom: 2rem;
`;
// Defining Quiz as functional component
const Quiz: React.FC = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0); //state variables for current question and users score
	const [score, setScore] = useState(0); //reacthooks
	const manageAnswer = (answer: string) => {
		//manage answer and update score
		if (answer === questions[currentQuestion].answer) {
			setScore((prevScore) => prevScore + 1); //if answer correct increase with one
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			const resultMessage = `You have finished the Quiz! This Quiz will restart by pressing this alert. Your score is ${
				score + 1
			}/${questions.length}`;
			alert(resultMessage);
		}
	};
	return (
		<QuizContainer>
			<QuizTitle>My Quiz</QuizTitle>
			{currentQuestion < questions.length ? (
				<Question
					question={questions[currentQuestion].question}
					choices={questions[currentQuestion].choices}
					onAnswer={manageAnswer}
				/>
			) : null}
		</QuizContainer>
	);
};
export default Quiz;
