import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
   type: String,
   required: true,
  },
  email:{
    type: String,
    required: true,
  },
  dob: {
   type: Date,
   required: true,
  },
  gender: {
   type: String,
   required: true,
  },
  city: {
   type: String,
   required: true,
  },
   photo: {
   type: String,
   required: true,
  }
});

const userModel = mongoose.model("users", userSchema);

export default userModel;