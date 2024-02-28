import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
`;
const Header = styled.header`
	margin: 32px 0;
	text-align: center;
`;
const Main = styled.main`
	margin: 32px 0;
	text-align: center;
`;

function AppLayout() {
	return (
		<>
			<Container>
				<Header>{/* klistra in logotyp? */}</Header>
				<Main>
					<Outlet />
				</Main>
			</Container>
		</>
	);
}
export default AppLayout;
