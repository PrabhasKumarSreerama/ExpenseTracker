import mongoose from "mongoose";

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://sreeramaprabhaskumar:expensetracker@cluster0.wdbhiqx.mongodb.net/?retryWrites=true&w=majority"
  );

  console.log("MongoDB connection is successful");
};

export default connect;
