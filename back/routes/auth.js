import express from "express";

import { logIn, signUp } from "../db/db.js";

import { User } from "../db/models/User.js";

export const userRoutes = express();

/*
 * POST /signin (logs user in)
 *
 * @payload:
 * {
 *  email: string,
 *  password: string,
 * }
 *
 * @returns success reply
 */
userRoutes.post("/signin", async (req, res) => {
  const resData = await logIn(req.body, User);
  return res.send(resData);
});

/*
 * POST /signup (signs user up)
 *
 * @payload:
 * {
 *  email: string,
 *  password: string,
 * }
 *
 * @returns success reply
 */
userRoutes.post("/signup", (req, res) => {
  signUp(req.body, User)
    .then((msg) => {
      return res.send(msg);
    })
    .catch((err) => {
      console.log(err);
      return res.send({ msg: "some err occurred" });
    });
});
