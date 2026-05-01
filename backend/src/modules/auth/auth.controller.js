import jwt from "jsonwebtoken";
import prisma from "../../utils/prisma.js";
import { hashPassword, comparePassword, validatepassword } from "../../utils/password.js";
import { env } from "../../config/env.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
        data: null,
      });
    }

    // 2. Find user
    const user = await prismaClient.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
        data: null,
      });
    }

    // 3. Compare password
    const isPasswordCorrect = await comparePassword(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
        data: null,
      });
    }

    // 4. Create JWT token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // 5. Return safe user data
    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const register = async (req, res) => {
  try {
    const { name, password, email, role } = req.body;

    if (!name || !password || !email || !role) {
      return res.status(400).json({
        success: false,
        message: "Name, email, password and role are required",
        data: null,
      });
    }

    const passwordValidation = validatePassword(password);

    if (!passwordValidation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Password validation failed",
        errors: passwordValidation.errors,
      });
    }

    const existingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
        data: null,
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    console.error("Register error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
    });
  }
};

export const logout = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Logout successful",
    data: null,
  });
};

