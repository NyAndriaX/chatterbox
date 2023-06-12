import { Box, IconButton } from "@mui/material";
import React from "react";
import { Typography, Stack } from "@mui/material";
import { MoreVertical } from "react-feather";

export const Headers = () => {
	return (
		<Box sx={{ p: 2, borderBottom: "1px solid #eaeaea" }}>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems={"center"}>
				<Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
					Profile
				</Typography>
				<MoreVertical fontSize="1rem" />
			</Stack>
		</Box>
	);
};
