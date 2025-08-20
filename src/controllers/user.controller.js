import User from "../models/User.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const generate_token = async (user) => {
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
  user.refresh_token = refreshToken;
  await user.save();
  return { accessToken, refreshToken };
};


const createUser = async (req , res) => {
    
}
