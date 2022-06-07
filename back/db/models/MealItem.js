import mongoose from "mongoose";

const MealItemSchema = {
  mealItem: String,
  mealQty: Number,
  mealCals: Number,
  mealProtein: Number,
};

export const MealItem = mongoose.model("Meals", MealItemSchema);
