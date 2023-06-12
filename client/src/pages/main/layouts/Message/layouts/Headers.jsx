import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Profile from "../../../../../assets/images/image-04.jpg";

const Headers = ({ company }) => {
	return (
		<Box sx={{ p: 2, borderBottom: "1px solid #eaeaea" }}>
			<Stack direction="row" justifyContent="space-between" spacing={2}>
				<Stack direction="row" justifyContent="center" spacing={1}>
					<Box
						component={"img"}
						src={Profile}
						alt="profile"
						sx={{ height: "40px", width: "40px", borderRadius: "8px" }}
					/>
					<Stack direction="column">
						<Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
							{company.name} {company.username}
						</Typography>
						<Typography variant="caption" sx={{ color: "#A4A4A4" }}>
							en ligne il y a 12 m
						</Typography>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Headers;
