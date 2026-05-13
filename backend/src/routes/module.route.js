import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import { createModule } from "../controllers/module.controller.js";
import { videoUpload } from "../middleware/videoUpload.js";

const moduleRoute = express.Router()

moduleRoute.post('/createModule', protectRoute, adminRoute, videoUpload.single('video'), createModule)

export default moduleRoute