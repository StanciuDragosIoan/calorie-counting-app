import mongoose from "mongoose";

/*
 * MealItemSchema (object schema for the MealItem element)
 */
const MealItemSchema = {
  userId: String,
  mealItem: String,
  mealQty: Number,
  mealCals: Number,
  mealProtein: Number,
};

//export the model and define table for mongoDB Atlas
export const MealItem = mongoose.model("Meals", MealItemSchema);
