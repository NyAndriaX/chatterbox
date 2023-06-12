import { Router } from "express";
import {
	CustomerRequest,
	getCustomerRequest,
	deleteCustomerRequest,
	validationCustomerRequest,
	getUsersNotFriends,
	getTeamMembersWithMessages,
} from "../controlleurs/ClientTrading.mjs";

export const tradingRoute = Router();

tradingRoute.get(
	"/getTeamMembersWithMessages/:Uid",
	getTeamMembersWithMessages
);
tradingRoute.post("/customerRequest", CustomerRequest);
tradingRoute.get("/getCustomerRequest/:IdSource", getCustomerRequest);
tradingRoute.get("/deleteCustomerRequest/:IdAsk", deleteCustomerRequest);
tradingRoute.get(
	"/validationCustomerRequest/:IdAsk",
	validationCustomerRequest
);
tradingRoute.get("/getUsersNotFriends/:IdSource", getUsersNotFriends);
