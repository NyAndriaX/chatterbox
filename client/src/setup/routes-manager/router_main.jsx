import * as React from "react";
import { createHashRouter } from "react-router-dom";
import Main from "../../pages/main/main";
import MessageSection from "../../pages/main/page/Message";
import { messageLoader } from "../../pages/main/page/Message/MessageLoaders";
import { mainLoader } from "../../pages/main/mainLoader";

export const router_main = createHashRouter([
	{
		path: "/",
		element: <Main />,
		loader: mainLoader,
		children: [
			{
				path: "/",
				element: <MessageSection />,
				loader: messageLoader,
			},
		],
	},
]);
