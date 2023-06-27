import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000;

const app = express();

app.use(cors);

app.get("/", (req, res) => {
  res.send("Hello EverOne!");
});

await mongoose.connect(
  "mongodb+srv://sreeramaprabhaskumar:expensetracker@cluster0.wdbhiqx.mongodb.net/?retryWrites=true&w=majority"
);
console.log("MongoDB connection is successful");

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
