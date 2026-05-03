import express from "express";
import { register, login, getUser } from "../controllers/user.controllers.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/getUser", protectRoute, getUser);

export default userRoute;
