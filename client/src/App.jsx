import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Auth from "./features/auth/Auth";
import Cookies from "universal-cookie";

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
