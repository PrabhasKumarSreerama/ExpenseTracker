import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import TransactionRouters from "./routes/transactions.js";
import connect from "./database/mangodb.js";

const PORT = 4000;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello EverOne!");
});

app.use("/transaction", TransactionRouters);

await connect();

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
