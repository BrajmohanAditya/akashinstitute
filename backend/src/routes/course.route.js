import express from 'express'
import { adminRoute, protectRoute } from '../middleware/auth.middleware.js'
import { upload } from '../middleware/upload.js'
import { createCourse } from '../controllers/course.controller.js'


const courseRoute = express.Router()


courseRoute.post('/createCourse', protectRoute, adminRoute, upload.single("thumbnail"), createCourse)

export default courseRoute