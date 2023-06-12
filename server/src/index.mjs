import express from "express";
import { AuthRoute } from "./routes/AuthRoute.mjs";
import http from "http";
import { tradingRoute } from "./routes/tradingRoute.mjs";
import { processMessageRoute } from "./routes/processMessageRoute.mjs";
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import sessionMiddleware from "./middleware/session.mjs";
import { Server } from "socket.io";

config();
const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);
export const io = new Server(server);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(sessionMiddleware);

app.use("/api/userRequest", AuthRoute);
app.use("/api/trading", tradingRoute);
app.use("/api/processMessage", processMessageRoute);

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
