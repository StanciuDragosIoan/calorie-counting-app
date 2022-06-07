import express from "express";
import cors from "cors";
import { connectDB, addItem, getItems } from "./db/db.js";
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
