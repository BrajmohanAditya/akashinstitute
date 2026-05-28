import express from "express";
import { adminRoute, isLoggedIn } from "../middlewares/auth.middleware.js";
import { createModule } from "../controllers/module.controller.js";
import { videoUpload } from "../middlewares/videoUpload.js";

const moduleRoute = express.Router()

moduleRoute.post('/createModule', isLoggedIn, adminRoute, videoUpload.single('video'), createModule)

export default moduleRoute