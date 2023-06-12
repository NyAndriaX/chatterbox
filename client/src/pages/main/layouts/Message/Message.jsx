import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Headers from "./layouts/Headers";
import ComponentMessage from "./layouts/ComponentMessage";
import SendMessage from "./layouts/SendMessage";
import { useSelector } from "react-redux";

const Message = () => {
	const users = useSelector((state) => state.members.membersTeam);
	const [userMessage, setUserMessage] = useState(null);

	useEffect(() => {
		if (Array.isArray(users)) {
			setUserMessage(users.filter((item) => item.id === 47));
		}
	}, [users]);
	return (
		<Box sx={{ height: "100vh" }}>
			{userMessage ? (
				<>
					<Headers company={userMessage[0]} />
					<ComponentMessage />
					<SendMessage />
				</>
			) : (
				<p>pas de company de discute</p>
			)}
		</Box>
	);
};

export default Message;
