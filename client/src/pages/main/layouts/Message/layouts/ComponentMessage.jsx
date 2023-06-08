import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Profile from "../../../../../assets/images/image-04.jpg";

const ComponentMessage = () => {
	return (
		<Box sx={{ height: "79vh" }}>
			<Stack
				direction="row"
				justifyContent="start"
				spacing={1}
				p={2}
				sx={{ paddingRight: "150px" }}>
				<Box
					component={"img"}
					src={Profile}
					alt="profile"
					sx={{ height: "30px", width: "30px", borderRadius: "8px" }}
				/>
				<Typography
					variant="caption"
					sx={{
						color: "#A4A4A4",
						backgroundColor: "#eaeaea",
						pt: 0.7,
						px: 1,
						borderRadius: "10px",
						color: "black",
						fontSize: "12px",
					}}>
					Bonjours !
				</Typography>
			</Stack>
			<Stack
				direction="row"
				justifyContent="end"
				spacing={1}
				p={2}
				sx={{ paddingLeft: "150px" }}>
				<Typography
					variant="caption"
					sx={{
						color: "#A4A4A4",
						backgroundColor: "#625EF1",
						pt: 0.7,
						px: 1,
						borderRadius: "10px",
						color: "white",
						fontSize: "12px",
					}}>
					Si vous souhaitez changer les variantes (par exemple, la taille ou
					l'épaisseur) des icônes de React Feather, vous pouvez utiliser les
					classes CSS générées par la bibliothèque feather-icons-react pour
					appliquer les variantes souhaitées. Voici comment procéder :
				</Typography>
				<Box
					component={"img"}
					src={Profile}
					alt="profile"
					sx={{ height: "30px", width: "30px", borderRadius: "8px" }}
				/>
			</Stack>
		</Box>
	);
};

export default ComponentMessage;
