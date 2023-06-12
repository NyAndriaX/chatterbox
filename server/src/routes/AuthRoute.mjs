import { Router } from "express";
import { login, signup, usersOnline } from "../controlleurs/Auth.mjs";

export const AuthRoute = Router();

AuthRoute.post("/login", login);
AuthRoute.post("/signup", signup);
AuthRoute.get("/users/online", usersOnline);
