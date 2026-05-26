import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { ENV } from "../config/env.js";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { name, email, password,mobileNo } = req.body;

    if (!name || !email || !password || !mobileNo) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashPassword = await bcryptjs.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      mobileNo,
      password: hashPassword,
    });

    const token = jwt.sign({ userId: newUser._id }, ENV.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(201)
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      })
      .json({
        message: `welcome ${newUser.name} to Akash Institute`,
        success: true,
        user: newUser,
      });
  } catch (error) {
    console.log(`error in register controller ${error}`);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false,
      });
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false,
      });
    }

    const token = jwt.sign({ userId: user._id }, ENV.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    // Remove password before sending to frontend
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    if (user.role === "admin") {
      return res.status(201).json({
        message: `welcome ${user.name}`,
        success: true,
        user: userWithoutPassword,
      });
    }

    return res.status(201).json({
      message: `welcome ${user.name}`,
      success: true,
      user: userWithoutPassword,
    });
  } catch (error) {
    console.log(`error in login controller ${error}`);
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found",
        success: false,
      });
    }
    return res.status(201).json({
      message: "User found",
      success: true,
      user: user,
    });
  } catch (error) {
    console.log(`error in get all users controller ${error}`);
  }
};

export const logout = async (req, res) => {
  try {
    // Use clearCookie with the exact same options you used in Login/Register
    return res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    }).status(200).json({
      message: "User logged out",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

