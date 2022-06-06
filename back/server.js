const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/testRoute", (req, res) => {
  return res.end("Test route here...");
});

app.post("/meals", (req, res) => {
  console.log(req.body);
  return res.end(JSON.stringify({ msg: "post successfull" }));
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
