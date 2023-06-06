import React from "react";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Cookies from "universal-cookie";
import Auth from "./pages/auth/auth";

const cookies = new Cookies();
const authCookie = cookies.get("user");

function App() {
	return (
		<Provider store={store}>
			{authCookie ? <>exist de token </> : <Auth />}
		</Provider>
	);
}

export default App;
