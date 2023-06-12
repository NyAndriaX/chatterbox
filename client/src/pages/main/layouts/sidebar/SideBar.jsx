import React from "react";
import { Stack, IconButton, Box, Typography, Paper } from "@mui/material";
import { Home, Search, MessageSquare, Settings } from "react-feather";

const SideBar = () => {
	return (
		<Paper sx={{ height: "95vh", py: 2 }}>
			<Paper
				sx={{
					backgroundColor: "#625EF1",
					textAlign: "center",
					mx: 2,
					py: 0.5,
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "8px",
				}}>
				<Typography
					variant="h5"
					sx={{
						paddingTop: "3px",
						color: "white",
						fontWeight: "bold",
					}}>
					Q
				</Typography>
			</Paper>

			<Stack
				mt={"2.5rem"}
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={2}>
				<IconButton>
					<Home fontSize="3rem" />
				</IconButton>
				<IconButton>
					<MessageSquare fontSize="3rem" />
				</IconButton>
				<IconButton>
					<Settings fontSize="3rem" />
				</IconButton>
				<IconButton>
					<Search fontSize="3rem" sx={{ color: "black" }} />
				</IconButton>
			</Stack>
		</Paper>
	);
};

export default SideBar;
