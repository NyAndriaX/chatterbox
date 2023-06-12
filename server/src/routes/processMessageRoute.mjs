import { Router } from "express";
import {
	receiveMessage,
	sendMessage,
} from "../controlleurs/processMessage.mjs";

export const processMessageRoute = Router();

processMessageRoute.get("/getMessage/:IdTeam", receiveMessage);
processMessageRoute.post("/sendMessage", sendMessage);
