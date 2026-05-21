import { razorpay } from "../config/razorpay.js";
import { Course } from "../models/course.model.js";

export const createCheckOutSession = async (req, res) => {
  try {
    const { products } = req.body;

    if (!products) {
      return res.status(401).json({
        message: "Please provide course",
      });
    }

    const courseId = products._id;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(401).json({
        message: "Course not found",
      });
    }

    // 1. Order Options banayein
    const options = {
      amount: Math.round(course.amount * 100), // Amount ko paise mein convert karna zaroori hai
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,

      notes: {
        userId: req.user._id.toString(),
        courseId: courseId.toString(),
        coursePrice: course.amount.toString(),
      },
    };

    // 2. Razorpay se order create karein
    const order = await razorpay.orders.create(options);

    // 3. Frontend ko response bhejein
    return res.status(201).json({
      success: true,
      order: order, // Ye order object hume frontend par chahiye hoga
    });

    // FRONTEND URL = http://localhost:5173
  } catch (error) {
    console.log(error, "from create checkout session");
  }
};
