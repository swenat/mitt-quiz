import React from "react";
import ReactDOM from "react-dom/client";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./AppLayout.tsx";
import Quiz from "./components/Quiz";
import "./main.css";
import LostPage from "./pages/LostPage.tsx";
import ResultPage from "./pages/ResultPage";
import WelcomePage from "./pages/WelcomePage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" Component={AppLayout}>
			<Route index Component={WelcomePage} />
			<Route path="Quiz" Component={Quiz} />
			<Route path="ResultPage" Component={ResultPage} />
			<Route path="LostPage" Component={LostPage} />
			<Route path="*" element={<span>Sidan finns inte...</span>} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
