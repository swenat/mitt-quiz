import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LostContainer = styled.div`
	text-align: center;
	margin-top: 50px;
`;

const LostTitle = styled.h3`
	font-size: 50px;
	color: #ff0000;
	margin-bottom: 2px;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

	span {
		color: #000;
	}
`;

const BackToHomeLink = styled(Link)`
	display: block;
	margin-top: 16px;
	text-decoration: none;
	color: #007bff; /* Bootstraps primary color */
	font-weight: bold;

	&:hover {
		text-decoration: underline;
	}
`;

const LostPage: React.FC = () => {
	return (
		<LostContainer>
			<LostTitle>
				Time's up! <span>You lost!</span>
			</LostTitle>
			<p>Try again!</p>
			<BackToHomeLink to="/">Back to Home</BackToHomeLink>
		</LostContainer>
	);
};

export default LostPage;
