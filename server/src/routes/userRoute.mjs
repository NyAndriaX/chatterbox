import { Router } from "express";
import { login, signup, usersOnline } from "../controlleurs/Auth.mjs";

export const userRoute = Router();

userRoute.post("/login", login);
userRoute.post("/signup", signup);
userRoute.get("/users/online", usersOnline);
