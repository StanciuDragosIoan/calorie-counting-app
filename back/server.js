import express from "express";
import cors from "cors";

//routes
import { mealRoutes } from "./routes/meals.js";

//app config
const app = express();
app.use(cors());
app.use(express.json());

//mount mealRoutes
app.use("/", mealRoutes);

//universal request handler
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
