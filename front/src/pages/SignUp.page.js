import React, { useState } from "react";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../components/Navigation/Navigation";
import { CustomTextField } from "../components/CustomTextField/CustomTextField";
import { Item } from "../components/MainCard/Item";
import { validateEmail, validatePassword } from "../utils/utils";
import { postData } from "../services/http";
import { Alert } from "../components/Alert";

/*
 * @SignUp Page (contents of the page)
 *
 */

export const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState(null);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/";
    navigate(path);
  };

  const signUp = async () => {
    const userCredentials = {
      email,
      password,
    };
    if (!email || !password || !repeatPassword || password !== repeatPassword) {
      console.error("no credentials or bad credentials were input! X__X");
    } else {
      if (validateEmail(email) && validatePassword(password)) {
        const url = "http://localhost:4000/signup";
        const resData = await postData(url, userCredentials);
        if (resData.msg === "user signed up successfully") {
          setColor("green");
          setTimeout(() => {
            routeChange();
          }, 3000);
        } else {
          setColor("orange");
        }
        setAlert(resData.msg);
      }
    }
  };
  return (
    <Box
      sx={{
        bgcolor: "background.defaultColor",
        p: 0,
        m: -1,
        height: "100vh",
      }}
    >
      <div className="App">
        <Navigation />
        <Typography variant="h3" gutterBottom align="center" color="white">
          Sign Up Page
        </Typography>
        <Alert msg={alert} color={color} />
        <Item sx={{ maxWidth: "25rem", margin: "auto", padding: "3rem 1rem" }}>
          <FormGroup sx={{ textAlign: "center" }}>
            <Typography
              variant="h5"
              component="div"
              color="#fff"
              sx={{ margin: "0.5rem" }}
            >
              Email
            </Typography>
            <CustomTextField
              placeholder="email"
              type="email"
              changeHandler={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Typography
              variant="h5"
              component="div"
              color="#fff"
              sx={{ margin: "0.5rem" }}
            >
              Password
            </Typography>
            <CustomTextField
              placeholder="password"
              type="password"
              changeHandler={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Typography
              variant="h5"
              component="div"
              color="#fff"
              sx={{ margin: "0.5rem" }}
            >
              Confirm Password
            </Typography>
            <CustomTextField
              placeholder="confirm password"
              type="password"
              changeHandler={(e) => setRepeatPassword(e.target.value)}
              value={repeatPassword}
            />
            <div>
              <Button
                sx={{ bgcolor: "submitBtnColor.main", width: "12.5rem" }}
                variant="contained"
                onClick={signUp}
              >
                Sign Up
              </Button>
            </div>
          </FormGroup>
        </Item>
      </div>
    </Box>
  );
};
