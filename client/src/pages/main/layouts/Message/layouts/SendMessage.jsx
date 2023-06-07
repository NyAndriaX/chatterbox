import React from "react";
import { Stack, Box } from "@mui/material";

const SendMessage = () => {
	return (
		<Stack justifyContent={"center"} alignItems={"center"}>
			<Box
				component={"input"}
				type="text"
				placeholder="type a message"
				fullWidth
				sx={{
					mt: 0.7,
					py: 1.6,
					px: 2,
					borderRadius: "8px",
					width: "74%",
				}}
			/>
		</Stack>
	);
};

export default SendMessage;
