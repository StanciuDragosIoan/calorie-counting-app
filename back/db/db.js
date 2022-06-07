import { config } from "dotenv";
const { mongoURI } = config().parsed;
import mongoose from "mongoose";

export const connectDB = () => {
  try {
    mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.log(err);
  }
};

export const addItem = async (payload, model) => {
  connectDB();
  const { mealItem, mealQty, mealCals, mealProtein } = payload;
  const newMealItem = new model({
    mealItem,
    mealQty,
    mealCals,
    mealProtein,
  });
  try {
    await newMealItem.save();
  } catch (err) {
    console.log(err);
  }
};

export const getItems = async (model) => {
  connectDB();
  try {
    const meals = await model.find({});
    return meals;
  } catch (err) {
    console.log(err);
  }
};
