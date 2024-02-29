import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
	font-size: 24px;
	margin-top: 20px;
`;

const Timer: React.FC<{ duration: number; onTimeout: () => void }> = ({
	duration,
	onTimeout,
}) => {
	const [seconds, setSeconds] = useState(duration);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (seconds === 0) {
			onTimeout();
		}
	}, [seconds, onTimeout]);

	const formattedTime = `${Math.floor(seconds / 60)}:${(
		seconds % 60
	).toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	})}`;

	return <TimerContainer>Time Remaining: {formattedTime}</TimerContainer>;
};

export default Timer;
