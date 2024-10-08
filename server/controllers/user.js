import userModel from "../models/user.js";


class userController {
  static getUsers = async (req, res) => {
    const fetchUsers = await userModel.find({});
    return res.status(200).json(fetchUsers);
  };
  static createUser = async (req, res) => {
   const {name, email, dob, gender, city} = req.body;
   try{
     if(name && email && dob && gender && city){
      const isEmail = await userModel.findOne({ email: email });
      if(!isEmail){
       const newUser = userModel({
        name,
        email,
        dob,
        gender,
        city,
        photo: req.file.filename,
       });

       const response = await newUser.save();
       if(response){
        return res.status(200).json({ message: "successfully registered" });
       }
      }
      else{
        return res.status(400).json({ message: "user already exists" });
      }
     }
     else{
       return res.status(400).json({message: "all fields are required"});
     }
   } catch(error){
    return res.status(400).json({message: error.message });
   }
  };
}

export default userController;