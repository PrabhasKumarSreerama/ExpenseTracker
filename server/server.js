import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import TransactionRouters from "./routes/transactionApi.js";
import connect from "./database/mangodb.js";
import AuthApi from "./routes/authApi.js";
import UserApi from "./routes/UserApi.js";
import passport from "passport";
import passportConfig from "./config/passport.js";
import * as dotenv from "dotenv";

dotenv.config();

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
app.use("/user", UserApi);

await connect();

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
