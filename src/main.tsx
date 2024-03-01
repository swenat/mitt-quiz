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
import QuotePage from "./pages/Quotepage.tsx";
import ResultPage from "./pages/ResultPage";
import WelcomePage from "./pages/WelcomePage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AppLayout />}>
			<Route index element={<WelcomePage />} />
			<Route path="Quiz" element={<Quiz />} />
			<Route path="ResultPage" element={<ResultPage />} />
			<Route path="LostPage" element={<LostPage />} />
			<Route path="QuotePage" element={<QuotePage />} />
			<Route path="*" element={<span>The page does not exist..</span>} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
