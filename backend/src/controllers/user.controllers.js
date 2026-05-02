import {User} from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import {ENV} from "../config/env.js"

export const Register = async(req, res)=>{
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(401).json({
                message : "All fields are required",
                success : false
            });
        }

        const user = await User.findOne({email});

        if(user){
            return res.status(401).json({
                message : "User already exists",
                success : false
            });
        }

        const hashPassword = await bcryptjs.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password : hashPassword
        })

        const token = await jwt.sign({userId: newUser._id}, ENV.JWT_SECRET, {
            expiresIn : "1d"
        })

        if(newUser.email === ENV.ADMIN_EMAIL){
            return res.status(201).cookie("token", token, {
                maxAge : 24 * 60 * 60 * 1000,
                httpOnly : true,
                secure : true,
                sameSite : "none"
            }).json({
                message : "Admin registered successfully",
                success : true,
                user : newUser
            })
        }
        
    } catch (error) {
        console.log(`error in register controller ${error}`)
    }
}