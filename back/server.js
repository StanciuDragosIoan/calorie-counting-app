import express from "express";
import cors from "cors";
import {
  connectDB,
  addItem,
  getItems,
  clearItems,
  removeItem,
  editItem,
} from "./db/db.js";
import { MealItem } from "./db/models/MealItem.js";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/testRoute", async (req, res) => {
  connectDB();
  return res.end("Test route here...");
});

app.get("/meals", async (req, res) => {
  const meals = await getItems(MealItem);
  return res.send(meals);
});

app.post("/meals", async (req, res) => {
  await addItem(req.body, MealItem);
  res.send(JSON.stringify({ msg: "post successfull" }));
});

app.post("/meals/clearAll", async (req, res) => {
  await clearItems(MealItem);
  res.send(JSON.stringify({ msg: "delete all successfull" }));
});

app.post("/meals/:id", async (req, res) => {
  const { id } = req.params;
  await removeItem(id, MealItem);
  res.send(JSON.stringify({ msg: `id ${id} deleted successfully` }));
});

app.post("/edit/meal", async (req, res) => {
  await editItem(req.body, MealItem);
  const { idToEdit: id } = req.body;
  res.send(JSON.stringify({ msg: `id ${id} edited successfully` }));
});

app.use("*", (req, res) => {
  if (req.method === "POST") {
    res.statusCode = 405;
    return res.send("Method not allowed");
  } else {
    res.statusCode = 404;
    return res.send("Page not found..");
  }
});

app.listen(4000);
