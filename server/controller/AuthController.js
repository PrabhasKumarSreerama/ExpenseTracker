import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  //   console.log(req.body);
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(406).json({ message: "User already exists" });
    return;
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hashedPassword = await bcrypt.hashSync(password, salt);
  //   console.log(hashedPassword);

  const user = await User({
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });
  await user.save();
  res.status(201).json({ message: "user is created" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(406).json({ message: "credentials not found" });
    return;
  }

  const matched = await bcrypt.compareSync(password, user.password);
  if (!matched) {
    res.status(406).json({ message: "credentials not found" });
    return;
  }

  const payload = {
    username: email,
    _id: user._id,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);
  res.json({ message: "successfully logged in.", token, user });
};
