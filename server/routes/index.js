import { Router } from "express";
import AuthApi from "./authApi.js";
import UserApi from "./UserApi.js";
import TransactionRouters from "./transactionApi.js";
import passport from "passport";

const router = Router();

router.use(
  "/transaction",
  passport.authenticate("jwt", { session: false }),
  TransactionRouters
);
router.use("/auth", AuthApi);
router.use("/user", UserApi);

export default router;
