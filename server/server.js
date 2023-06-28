import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Transaction from "./models/Transaction.js";

const PORT = 4000;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello EverOne!");
});

app.get("/transaction", async (req, res) => {
  const transaction = await Transaction.find({}).sort({ createdAt: -1 });
  res.json({ data: transaction });
});

app.post("/transaction", async (req, res) => {
  const { amount, description, date } = req.body;
  const transaction = new Transaction({
    amount,
    description,
    date,
  });
  await transaction.save();
  res.json({ message: "Success" });
});

await mongoose.connect(
  "mongodb+srv://sreeramaprabhaskumar:expensetracker@cluster0.wdbhiqx.mongodb.net/?retryWrites=true&w=majority"
);
console.log("MongoDB connection is successful");

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
