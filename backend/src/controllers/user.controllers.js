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
                message : `welcome ${newUser.name} to Akash Institute, you are admin`,
                success : true,
                user : newUser,
            })
        }

        return res.status(201).cookie("token", token, {
            maxAge : 24 * 60 * 60 * 1000,
            httpOnly : true,
            secure : true,
            sameSite : "none"
        }).json({
            message : `welcome ${newUser.name} to Akash Institute`,
            success : true,
            user : newUser
        })
        
    } catch (error) {
        console.log(`error in register controller ${error}`)
    }
}


export const Login = async(req, res)=>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(401).json({
                message : "All fields are required",
                success : false
            })
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message : "Invalid credentials",
                success : false
            })
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password);

        if(!isPasswordCorrect){
            return res.status(401).json({
                message : "Invalid credentials",
                success : false
            })
        }

        if(user.email === ENV.ADMIN_EMAIL){
            user.admin = true,
            await user.save()
        }

        const token = await jwt.sign({userId: user._id}, ENV.JWT_SECRET, {
            expiresIn : "1d"
        })


        res.cookie("token", token, {
            maxAge : 24 * 60 * 60 * 1000,
            httpOnly : true,
            secure : true,
            sameSite : "none"
        })

        if(user.admin){
            return res.status(201).json({
                message : `welcome ${user.name} to Akash Institute, you are admin`,
                success : true,
                user : user
            })
        }

        return res.status(201).json({
            message : `welcome ${user.name} to Akash Institute`,
            success : true,
            user : user
        })

    } catch (error) {
        console.log(`error in login controller ${error}`)
    }
}