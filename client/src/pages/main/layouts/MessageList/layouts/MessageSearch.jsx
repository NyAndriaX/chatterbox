import React from "react";
import { Box } from "@mui/material";

const MessageSearch = () => {
	return (
		<Box py={2} sx={{ display: "grid", justifyContent: "center" }}>
			<Box
				component={"input"}
				placeholder="search Search messages"
				sx={{
					p: 1.3,
					borderRadius: "8px",
					border: "none",
					backgroundColor: " #eaeaea",
				}}
			/>
		</Box>
	);
};

export default MessageSearch;
