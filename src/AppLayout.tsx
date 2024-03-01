import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
`;

const Header = styled.header`
	height: 5px;
	border: 5px;
`;

const Line = styled.div`
	height: 3px;
	width: 100%;
	background-color: #007bff;
	margin-top: 5px;
`;

const Main = styled.main`
	margin: 32px 0;
	text-align: center;
`;

function AppLayout() {
	return (
		<>
			<Container>
				<Header>
					<Line></Line>
				</Header>
				<Main>
					<Outlet />
				</Main>
			</Container>
		</>
	);
}

export default AppLayout;
