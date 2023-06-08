import { Box } from "@mui/material";
import React from "react";
import Headers from "./layouts/Headers";
import ComponentMessage from "./layouts/ComponentMessage";
import SendMessage from "./layouts/SendMessage";

const Message = () => {
	return (
		<Box sx={{ height: "100vh" }}>
			<Headers />
			<ComponentMessage />
			<SendMessage />
		</Box>
	);
};

export default Message;
