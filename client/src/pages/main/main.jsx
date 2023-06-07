import React from "react";
import { Grid } from "@mui/material";
import SideBar from "./layouts/sidebar/SideBar";
import MessageList from "./layouts/MessageList/MessageList";
import CompanionShipeProfile from "./layouts/Profile/CompanionShipeProfile";
import Message from "./layouts/Message/Message";

const Main = () => {
	return (
		<Grid container alignItems={"center"} justifyContent={"center"}>
			<Grid xs={0.8}>
				<SideBar />
			</Grid>
			<Grid xs={2.5}>
				<MessageList />
			</Grid>
			<Grid xs={6.2}>
				<Message />
			</Grid>
			<Grid xs={2.5}>
				<CompanionShipeProfile />
			</Grid>
		</Grid>
	);
};

export default Main;
