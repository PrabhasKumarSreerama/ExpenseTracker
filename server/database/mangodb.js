import mongoose from "mongoose";

const connect = async () => {
  const username = process.env.MANGO_DB_USERNAME;
  const password = process.env.MANGO_DB_PASSWORD;
  const url = process.env.MANGO_DB_URL;
  await mongoose.connect(
    `mongodb+srv://${username}:${password}@${url}/?retryWrites=true&w=majority`
  );

  console.log("MongoDB connection is successful");
};

export default connect;
