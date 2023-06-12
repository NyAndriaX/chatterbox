import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Profile from "../../../../../assets/images/image-04.jpg";

const TeamList = (team) => {
	return (
		<Box py={2} sx={{ display: "grid", justifyContent: "center" }}>
			<Stack direction="row" justifyContent="space-between" spacing={2}>
				<Stack direction="row" justifyContent="center" spacing={1}>
					<Box
						component={"img"}
						src={Profile}
						alt="profile"
						sx={{ height: "50px", width: "50px", borderRadius: "8px" }}
					/>
					<Stack direction="column">
						<Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
							{team.team?.name} {team.team?.username}
						</Typography>
						<Typography variant="caption" sx={{ color: "#A4A4A4" }}>
							{team.team?.text}
						</Typography>
						<Stack direction="row" spacing={1}>
							<Typography
								variant="caption"
								sx={{
									backgroundColor: "#C7F6D6",
									color: "#86CFA3",
									fontWeight: "bold",
									pt: 0.2,
									px: 1,
									borderRadius: "8px",
								}}>
								sexe: M
							</Typography>
							<Typography
								variant="caption"
								sx={{
									backgroundColor: "#FDEAC7",
									color: "#F3C191",
									fontWeight: "bold",
									pt: 0.2,
									px: 1,
									borderRadius: "8px",
								}}>
								age: 26
							</Typography>
						</Stack>
					</Stack>
				</Stack>
				<Typography variant="caption" sx={{ color: "#A4A4A4" }}>
					12 m
				</Typography>
			</Stack>
		</Box>
	);
};

export default TeamList;
