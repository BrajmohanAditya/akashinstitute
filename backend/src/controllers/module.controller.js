import { Course } from "../models/course.model.js";
import { Modules } from "../models/module.model.js";
export const createModule = async(req,res)=>{
    try {
        const {courseId,  title}= req.body;
        if(!courseId || !title){
            return res.status(401).json({
                message:"Please provide all the details"
            })
        }

        if(!req.file){
            return res.status(401).json({
                message:"Please provide video"
            })
        }

        const videoUrl = req.file.path
        const publicId = req.file.filename

        const module = await Modules.create({
            courseId,
            title,
            video:videoUrl,
            videoPublicUrl :publicId
        })
        module.save()

        await Course.findByIdAndUpdate(courseId,{
            $push:{modules:module._id}
        })


        return res.status(201).json(module)
    } catch (error) {
        console.log(`error from create module, ${error}`)
    }
}