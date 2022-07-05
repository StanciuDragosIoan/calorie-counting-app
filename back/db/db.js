import { config } from "dotenv";
const { mongoURI } = config().parsed;
import mongoose from "mongoose";

/*
 * opens DB connection
 */
export const connectDB = () => {
  try {
    mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.log(err);
  }
};

/*
 * adds item to the Meals table
 *
 * @params:
 * {
 *  payload (contains data used to create new DB meal item)
 *  model: mongoose model (MealItem)
 * }
 */
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

/*
 * gets meal items from DB
 *
 * @params:
 * {
 *    model: mongoose model (MealItem)
 * }
 */
export const getItems = async (model) => {
  connectDB();
  try {
    const meals = await model.find({});
    return meals;
  } catch (err) {
    console.log(err);
  }
};

/*
 * clears meal items from DB
 *
 * @params:
 * {
 *    model: mongoose model (MealItem)
 * }
 */
export const clearItems = async (model) => {
  connectDB();
  try {
    await model.deleteMany({});
  } catch (err) {
    console.log(err);
  }
};

/*
 * removes 1 meal item from DB
 *
 * @params:
 * {
 *  id: string (id used to find the item to remove)
 *  model: mongoose model (MealItem)
 * }
 */
export const removeItem = async (id, model) => {
  connectDB();
  try {
    await model.remove({ _id: id });
  } catch (err) {
    console.log(err);
  }
};

/*
 * edits 1 meal item from DB
 *
 * @params:
 * {
 *  payload (contains id and data used to update DB meal item)
 *  model: mongoose model (MealItem)
 * }
 */
export const editItem = async (payload, model) => {
  connectDB();
  const { idToEdit: _id, mealItem, mealQty, mealCals, mealProtein } = payload;
  try {
    await model.findOneAndUpdate(
      { _id },
      { mealItem, mealQty, mealCals, mealProtein }
    );
  } catch (err) {
    console.log(err);
  }
};
