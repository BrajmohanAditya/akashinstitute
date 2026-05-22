import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { createCheckOutSession, checkoutSuccess } from "../controllers/payment.controller.js";

const paymentRoute = express.Router()

paymentRoute.post('/checkout', protectRoute, createCheckOutSession)
paymentRoute.post('/checkout-success', protectRoute, checkoutSuccess)



export default paymentRoute