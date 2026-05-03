import express from "express";
import { Register, Login, getUser } from "../controllers/user.controllers.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const userRoute = express.Router();

userRoute.post("/register", Register);
userRoute.post("/login", Login);
userRoute.get("/getUser", protectRoute, getUser);

export default userRoute;
