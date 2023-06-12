import React from "react";
import { Box } from "@mui/material";
import Header from "./layouts/Header";
import MessageSearch from "./layouts/MessageSearch";
import TeamList from "./layouts/TeamList";
import { useSelector } from "react-redux";

const MessageList = () => {
	const error = useSelector((state) => state.members.error);
	const team = useSelector((state) => state.members.membersTeam);

	return (
		<Box sx={{ height: "99vh", borderRight: "1px solid #eaeaea" }}>
			<Header />
			<Box>
				<MessageSearch />
				{error ? (
					<p>{error}</p>
				) : Array.isArray(team) ? (
					team.map((list) => <TeamList key={list.id} team={list} />)
				) : (
					<p>No team members found.</p>
				)}
			</Box>
		</Box>
	);
};

export default MessageList;
