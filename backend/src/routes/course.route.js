import express from 'express'
import { adminRoute, protectRoute } from '../middlewares/auth.middleware.js'
import upload from '../middlewares/multer.js'
import { createCourse, getCourse, getSingleCourse } from '../controllers/course.controller.js'


const courseRoute = express.Router()


courseRoute.post('/createCourse', protectRoute, adminRoute, upload.single("thumbnail"), createCourse)
courseRoute.get('/getCourse', getCourse),
courseRoute.get('/getSingleCourse/:id', getSingleCourse)




export default courseRoute

