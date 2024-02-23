import React, { useState } from "react";
import Question from "./Question";

const questions = [
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

const Quiz: React.FC = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);

	const manageAnswer = (answer: string) => {
		if (answer === questions[currentQuestion].answer) {
			setScore((prevScore) => prevScore + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			alert(
				`You have finished the Quiz. Your score is ${score + 1}/${
					questions.length
				}`
			);
		}
	};

	return (
		<div>
			<h1 className="text-center">My Quiz</h1>
			{currentQuestion < questions.length ? (
				<Question
					question={questions[currentQuestion].question}
					choices={questions[currentQuestion].choices}
					answer={questions[currentQuestion].answer}
					onAnswer={manageAnswer}
				/>
			) : (
				"null"
			)}
		</div>
	);
};

export default Quiz;
