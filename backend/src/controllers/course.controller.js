import cloudinary from "../config/cloudinary.js";
import { ENV } from "../config/env.js";
import {Course} from "../models/course.model.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(ENV.GEMINI_API_KEY);
const model = genAi.getGenerativeModel({ model: "gemini-2.5-flash" });

export const CreateCourse = async(req, res)=>{
    try {
        const {title, description, amount} = req.body;
        const thumbnail = req.file;
        if(!title || !description || !amount){
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }
        let imageUrl = "";
        const base64 =  `data:${req.file.mimetype};base64,${thumbnail.buffer.toString("base64")}`

        const uploadRes = await cloudinary.uploader.upload(base64, {folder:"Akash Acadmy"});
        imageUrl = uploadRes.secure_url;

        const newCourse = await Course.create({
            userId:req.user._id,
            title,
            description,
            amount,
            thumbnail:imageUrl, 
        })

        await newCourse.save();
        return res.status(201).json({
            success: true,
            message: "Course created successfully",
        });

        
    } catch (error) {
        console.log(`error from create course.${error}`)
    }
}

export const getCourse = async(req, res)=>{
    try {
        const {search} = req.query; 
        if(!search || !search.trim()===""){
            const allCourses = await Course.find({})
            return res.status(200).json(allCourses);
        }

        const prompt = `you are a intelligent assistant for a learning management 
        platform system. A user is searching for courses. analyze the query and 
        return the most relevant keyword from these catogeries. 

        - Banking 
        - Insurance
        - Accounting
        - Finance

        only reply with one keyword that best matches the query no explanation 

        user query: ${search}
        `

        const result = await model.generateContent(prompt);
        const aiText = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text?.trim()
        .replace(/['"*+-]/g, "") || "";

        const searchTerm = aiText || search;

        const mongoQuery = {
            $or :[
                {title: {$regex: search, $options: "i"}},
                {description: {$regex: search, $options: "i"}},
            ]
        };

        const courses = await Course.find(mongoQuery).lean();


        return res.status(200).json({
            success:true,
            courses,
            searchTerm:search,
            count:courses.length,
        })


        
    } catch (error) {
        console.log(`error from get courses.${error}`)
    }
}

export const getsingleCourse = async(req, res)=>{
    try {
        const courseId = req.params.id;

        const course = await Course.findById(courseId).populate("userId");

        if(!course){
            return res.status(404).json({
                success:false,
                message:"Course not found",
            })
        }
        return res.status(200).json({
            success:true,
            course,
        })
        
    } catch (error) {
        console.log(`error from getsingle course.${error}`)
    }
}

export const getPurchasedCourse = async(req, res) =>{
    try {
        const courseId = req.params.id;
    } catch (error) {
        console.log(`error from get purchased course.${error}`)
    }
}