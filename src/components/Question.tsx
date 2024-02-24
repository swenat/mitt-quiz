import React from "react";

interface Props {
	question: string;
	choices: string[];
	onAnswer: (answer: string) => void;
}
//question as functional component with react
const Question: React.FC<Props> = ({ question, choices, onAnswer }) => {
	return (
		<div className="d-flex align-center text-center justify-content-center flex-column flex-wrap">
			<h2 className="">{question}</h2>
			<div className="">
				{choices.map((choice) => (
					<button
						className="btn btn-primary m-2"
						onClick={() => onAnswer(choice)}
					>
						{choice}
					</button>
				))}
			</div>
		</div>
	);
};

export default Question;
