import * as React from "react";
import { createHashRouter } from "react-router-dom";
import Signin from "../../pages/auth/component/SignIn";
import Signup from "../../pages/auth/component/SignUp";
import { signinLoader, signupLoader } from "../../pages/auth/utils";

export const router_auth = createHashRouter([
	{
		path: "/",
		element: <Signin />,
		loader: signinLoader,
	},
	{
		path: "/signup",
		element: <Signup />,
		loader: signupLoader,
	},
]);
