import mongoose from "mongoose";

/*
 * User (object schema for the User element)
 */
const UserSchema = {
  userId: String,
  email: { type: String, index: { unique: true } },
  password: String,
};

//export the model and define table for mongoDB Atlas
export const User = mongoose.model("Users", UserSchema);
