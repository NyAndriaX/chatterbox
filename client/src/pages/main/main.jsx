import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import SideBar from "./layouts/sidebar/SideBar";
import MessageList from "./layouts/MessageList/MessageList";
import CompanionShipeProfile from "./layouts/Profile/CompanionShipeProfile";
import Message from "./layouts/Message/Message";
import { fetchMembersTeam } from "../../store/reducers/tradingSlice";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
	const dispatch = useDispatch();
	const uid = useSelector((state) => state.auth.user.userConnect.id);

	useEffect(() => {
		const fetchData = async () => {
			try {
				await dispatch(fetchMembersTeam(uid));
			} catch (error) {
				// Gérer les erreurs ici
			}
		};

		fetchData();
	}, [dispatch, uid]);

	return (
		<Grid container alignItems={"center"} justifyContent={"center"}>
			<Grid xs={0.8}>
				<SideBar />
			</Grid>
			<Grid xs={2.5}>
				<MessageList />
			</Grid>
			<Grid xs={6.2}>
				<Message />
			</Grid>
			<Grid xs={2.5}>
				<CompanionShipeProfile />
			</Grid>
		</Grid>
	);
};

export default Main;
