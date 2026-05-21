import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import {  createCheckOutSession } from "../controllers/payment.controller.js";


const paymentRoute = express.Router()

paymentRoute.post('/checkout', protectRoute, createCheckOutSession)


export default paymentRoute