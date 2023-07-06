import { Router } from "express";
import Transaction from "../models/Transaction.js";
import * as TransactionController from "../controller/TransactionController.js";
import passport from "passport";

const router = Router();

router.get(
  "/",
  // passport.authenticate("jwt", { session: false }),
  TransactionController.index
);

router.post("/", TransactionController.create);

router.patch("/:id", TransactionController.update);

router.delete("/:id", TransactionController.destroy);

export default router;
