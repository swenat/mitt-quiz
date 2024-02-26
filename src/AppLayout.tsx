import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";

function AppLayout() {
	return (
		<div>
			<header className="container my-5"></header>
			<main>
				<Outlet />
				<Link to="/">Back to Welcomepage</Link>
			</main>
		</div>
	);
}

export default AppLayout;
