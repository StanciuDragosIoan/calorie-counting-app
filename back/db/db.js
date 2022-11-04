import { config } from "dotenv";
const { mongoURI } = config().parsed;
import mongoose from "mongoose";
import bcrypt from "bcrypt";
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
  const { mealItem, mealQty, mealCals, mealProtein, userId } = payload;
  const newMealItem = new model({
    userId,
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
 *    userId: string (user id)
 * }
 */
export const getItems = async (model, userId) => {
  connectDB();
  try {
    const meals = await model.find({ userId });
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

/*
 * logs user in
 *
 * @params:
 * {
 *  payload (contains user credentials)
 *  model: mongoose model (User)
 * }
 */
export const logIn = async (credentials, model) => {
  try { 
      const { email, password } = credentials;
      const usr = await model.find({email}).exec();
      const correctPass = await bcrypt.compare(password, usr[0].password);
      if(correctPass){
        return { token: "someTokenHere", userId: usr[0]._id };
      } else {
        return { msg: "bad credentials" };
      }
  
  } catch(err){
    console.log(err);
    return 'someErr';
  }
};

/*
 * signs user up
 *
 * @params:
 * {
 *  payload (contains user credentials)
 *  model: mongoose model (User)
 * }
 */
export const signUp = async (credentials, model) => {
  const { email, password } = credentials;
  const saltRounds = 10;

  const encrptedPass = await bcrypt.hash(password, saltRounds);

  const userId =
    Math.random().toString(12).substring(2, 17) +
    Math.random().toString(12).substring(2, 17);
  const newUser = new model({
    userId,
    email,
    password: encrptedPass,
  });

  try {
    await newUser.save();
    return { msg: "user signed up successfully" };
  } catch (err) {
    console.log(err);
    return { msg: "some error occurred at signUp" };
  }
};
