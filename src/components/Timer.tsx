import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
	font-size: 24px;
	margin-top: 20px;
`;

// Functional component Timer
const Timer: React.FC<{ duration: number; onTimeout: () => void }> = ({
	duration,
	onTimeout,
}) => {
	// State to track the remaining seconds
	const [seconds, setSeconds] = useState(duration);
	// useEffect updates every second and clears the interval when the Timer is no longer in use
	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds - 1);
		}, 1000);
		//Cleanup function
		return () => clearInterval(interval);
	}, []);
	//Triggers onTimeOut callback when seconds reach 0
	useEffect(() => {
		if (seconds === 0) {
			onTimeout();
		}
	}, [seconds, onTimeout]);
	// Format remaining time as "mm:ss"
	const formattedTime = `${Math.floor(seconds / 60)}:${(
		seconds % 60
	).toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	})}`;

	return <TimerContainer>Time Remaining: {formattedTime}</TimerContainer>;
};

export default Timer;
