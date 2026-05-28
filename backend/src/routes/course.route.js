import express from "express";
import { adminRoute, isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.js";
import {
  createCourse,
  deleteCourse,
  getAllPurchasedCourse,
  getCourse,
  getSingleCourse,
  getSinglePurchasedCourse,
} from "../controllers/course.controller.js";

const courseRoute = express.Router();
courseRoute.post(
  "/createCourse",
  isLoggedIn,
  adminRoute,
  upload.single("thumbnail"),
  createCourse,
);
courseRoute.get("/getCourse", getCourse);
courseRoute.get("/getSingleCourse/:id", getSingleCourse);
courseRoute.get("/getAllPurchasedCourse", isLoggedIn, getAllPurchasedCourse);
courseRoute.get(
  "/getSinglePurchasedCourse/:id",
  isLoggedIn,
  getSinglePurchasedCourse,
);
courseRoute.delete("/deleteCourse/:id", isLoggedIn, adminRoute, deleteCourse);

export default courseRoute;
