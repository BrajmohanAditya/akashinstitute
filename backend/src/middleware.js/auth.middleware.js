import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";
import User from "../models/user.model.js";

export const protectRoute = async(req, res, next)=>{

    try {
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({message: "Unauthorized"})
        }

        const verifyToken = jwt.verify(token, ENV.JWT_SECRET);

        if(!verifyToken){
            return res.status(401).json({message: "Unauthorized"})
        }

        const user = await User.findById(verifyToken.userId).select("-password");

        if(!user){
            return res.status(401).json({message: "Unauthorized"})
        }

        req.user = user;
        next();

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: "Internal server error"})
    }
}