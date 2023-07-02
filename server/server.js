import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import TransactionRouters from "./routes/transactions.js";
import connect from "./database/mangodb.js";
import AuthApi from "./routes/authApi.js";
import passport from "passport";
import passportConfig from "./config/passport.js";

const PORT = 4000;

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(passport.initialize());
passportConfig(passport);

app.get("/", (req, res) => {
  res.send("Hello EverOne!");
});

app.use("/transaction", TransactionRouters);
app.use("/auth", AuthApi);

await connect();

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
