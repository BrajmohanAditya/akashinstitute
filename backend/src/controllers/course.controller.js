import cloudinary from "../config/cloudinary.js";

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