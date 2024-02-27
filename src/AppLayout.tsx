import { Link, Outlet } from "react-router-dom";
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

const BackLink = styled(Link)`
	display: block;
	margin-top: 16px;
	text-decoration: none;
	color: #007bff; /* Bootstrap's primary color */
	font-weight: bold;
	&:hover {
		text-decoration: underline;
	}
`;

function AppLayout() {
	return (
		<>
			<Container>
				<Header>{/* Your header content goes here */}</Header>
				<Main>
					<Outlet />
					<BackLink to="/">Back to Welcomepage</BackLink>
				</Main>
			</Container>
		</>
	);
}
export default AppLayout;
