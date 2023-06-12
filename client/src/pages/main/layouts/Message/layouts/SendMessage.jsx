import React from "react";
import { Stack, Box } from "@mui/material";
import { Send } from "react-feather";

const SendMessage = () => {
	return (
		<Stack justifyContent={"center"} alignItems={"center"}>
			<Box
				sx={{
					position: "relative",
					display: "grid",
					justifyContent: "center",
				}}>
				<Box
					component={"input"}
					type="text"
					placeholder="type a message"
					fullWidth
					sx={{
						mt: 0.7,
						py: 1.6,
						px: 2,
						pr: "30px",
						borderRadius: "8px",
						width: "35vw",
					}}
				/>
				<Box
					component={"li"}
					sx={{
						position: "absolute",
						top: "57%",
						transform: " translateY(-50%)",
						right: "10px",
						color: " #999",
						listStyleType: "none",
					}}>
					<Send fontSize={"2rem"} style={{ color: "blue" }} />
				</Box>
			</Box>
		</Stack>
	);
};

export default SendMessage;
