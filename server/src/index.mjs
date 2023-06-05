import express from "express";
import { userRoute } from "./routes/userRoute.mjs";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/userRequest", userRoute);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
