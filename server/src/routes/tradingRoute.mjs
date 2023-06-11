import { Router } from "express";
import {
	CustomerRequest,
	getCustomerRequest,
	deleteCustomerRequest,
	validationCustomerRequest,
	getUsersNotFriends,
} from "../controlleurs/ClientTrading.mjs";

export const tradingRoute = Router();

tradingRoute.post("/customerRequest", CustomerRequest);
tradingRoute.get("/getCustomerRequest/:IdSource", getCustomerRequest);
tradingRoute.get("/deleteCustomerRequest/:IdAsk", deleteCustomerRequest);
tradingRoute.get(
	"/validationCustomerRequest/:IdAsk",
	validationCustomerRequest
);
tradingRoute.get("/getUsersNotFriends/:IdSource", getUsersNotFriends);
