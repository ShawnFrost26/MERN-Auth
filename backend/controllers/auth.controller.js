import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const verificationToken =  Math.floor(100000 + Math.random() * 90000).toString();
    console.log("verificationToken: ", verificationToken);
    

    const user = new User({
      email,
      password: hashedpassword,
      name,
      verificationToken: verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save();

    //jwt
    generateTokenAndSetCookie(res, user._id);

res.status(201).json({
    success: true,
    message: "User created successfully",
    user: {
        ...user._doc,
        password: undefined,
    }
})

  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
export const login = async (req, res) => {
  res.send("login Route");
};
export const logout = async (req, res) => {
  res.send("logout Route");
};
