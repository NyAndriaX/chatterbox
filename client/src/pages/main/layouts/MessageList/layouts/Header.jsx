import { Box, Stack, Typography, Paper } from "@mui/material";
import React from "react";
import { ChevronDown, Plus } from "react-feather";

const Header = () => {
	return (
		<Box sx={{ p: 2, borderBottom: "1px solid #eaeaea" }}>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems={"center"}>
				<Stack
					direction="row"
					justifyContent="center"
					alignItems={"center"}
					spacing={1}>
					<Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
						Messages
					</Typography>
					<ChevronDown />
					<Typography
						variant="caption"
						sx={{
							borderRadius: "14px",
							backgroundColor: "#eaeaea",
							px: 1,
							pt: 0.5,
							pb: 0.3,
							textAlign: "center",
						}}>
						12
					</Typography>
				</Stack>
				<Paper
					sx={{
						backgroundColor: "#625EF1",
						height: "2rem",
						width: "2rem",
						borderRadius: "100%",
						justifyContent: "center",
						display: "grid",
						alignItems: "center",
					}}>
					<Plus
						fontSize="2rem"
						style={{ color: "white", fontWeight: "bold" }}
					/>
				</Paper>
			</Stack>
		</Box>
	);
};

export default Header;
