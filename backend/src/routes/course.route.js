import express from 'express'
import { adminRoute, protectRoute } from '../middlewares/auth.middleware.js'
import upload from '../middlewares/multer.js'
import { createCourse } from '../controllers/course.controller.js'


const courseRoute = express.Router()


courseRoute.post('/createCourse', protectRoute, adminRoute, upload.single("thumbnail"), createCourse)

export default courseRoute

