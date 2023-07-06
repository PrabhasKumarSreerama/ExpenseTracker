import { Router } from "express";
import AuthApi from "./authApi.js";
import UserApi from "./UserApi.js";
import TransactionRouters from "./transactionApi.js";

const router = Router();

router.use("/transaction", TransactionRouters);
router.use("/auth", AuthApi);
router.use("/user", UserApi);

export default router;
