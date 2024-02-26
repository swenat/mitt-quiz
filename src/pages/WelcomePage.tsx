import React from "react";
import { Link } from "react-router-dom";

const WelcomePage: React.FC = () => {
	return (
		<div>
			<h1>Welcome to Quiztime</h1>
			<Link to="/quiz">Enter Quiz</Link>
		</div>
	);
};

export default WelcomePage;
