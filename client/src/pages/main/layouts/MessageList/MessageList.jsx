import React from "react";
import { Box } from "@mui/material";
import Header from "./layouts/Header";
import MessageSearch from "./layouts/MessageSearch";
import TeamList from "./layouts/TeamList";

const MessageList = () => {
	return (
		<Box sx={{ height: "99vh", borderRight: "1px solid #eaeaea" }}>
			<Header />
			<Box>
				<MessageSearch />
				<TeamList />
			</Box>
		</Box>
	);
};

export default MessageList;
