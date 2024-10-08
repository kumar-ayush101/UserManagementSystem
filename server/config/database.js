import mongoose from "mongoose";

const connectingToMongo = async () => {
  const resp = await mongoose.connect("mongodb://localhost:27017/usermanahgementsystemproject");
  if(resp){
    console.log("connected to mongodb successfully");
  }
}

export default connectingToMongo;