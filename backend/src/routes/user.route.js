import express from "express";
import { Register, Login, getUser, logout, verifyOTP } from "../controllers/user.controllers.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const userRoute = express.Router();

userRoute.post("/register", Register);
userRoute.post("/login", Login);
userRoute.post("/logout",logout);
userRoute.get("/getUser", protectRoute, getUser);
userRoute.post('/verify-otp',verifyOTP);


export default userRoute;
