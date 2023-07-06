import { Router } from "express";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = Router();
import passport from "passport";
import * as UserController from "../controller/UserController.js";

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  UserController.index
);

export default router;
