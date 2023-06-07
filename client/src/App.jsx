import React from "react";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Cookies from "universal-cookie";
import { RouterProvider } from "react-router-dom";
import { router_auth } from "./setup/routes-manager/router_auth";
import { router_main } from "./setup/routes-manager/router_main";

const cookies = new Cookies();
const authCookie = cookies.get("user");

function App() {
	const router = authCookie ? router_main : router_auth;
	return (
		<Provider store={store}>
			{" "}
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
