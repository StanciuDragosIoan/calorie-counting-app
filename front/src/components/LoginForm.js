import React, { useState, useContext } from "react";
import { Item } from "./MainCard/Item";
import FormGroup from "@mui/material/FormGroup";
import { CustomTextField } from "./CustomTextField/CustomTextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Alert } from "./Alert";
import { postData } from "../services/http";
import { UserContext } from "../state/User.module";
import { validateEmail, validatePassword } from "../utils/utils";
import { storeItem } from "../services/ClientStorage"; 
/*
 * @LoginForm (functional component)
 */
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);
  const { setToken, setUserId } = useContext(UserContext);
 

  //signIn method
  const signIn = async (credentials) => {
    const url = "http://localhost:4000/signin";
    const resData = await postData(url, credentials);
    return resData;
  };



  const logIn = async () => {

    
    const userCredentials = {
      email,
      password,
    };
    if (!email || !password) {
      console.error("no credentials were input! X__X");
      setAlert(
        "Bad email or weak password (1 lowercase char, 1 uppercase, 1 special symbol, 1 digit, minim 5 chars at least)"
      );
    } else {
      if (validateEmail(email) && validatePassword(password)) {
        setAlert(null);
        const resData = await signIn(userCredentials);
     
        if (resData.token) {
          setToken(resData.token);
          setUserId(resData.userId);
          storeItem('userId', resData.userId);
          storeItem('token', resData.token);
          window.location.reload(false);
        } else {
          setAlert("Bad credentials X___X!");
          setTimeout(() => {
            setAlert(null);
          }, 3000);
        }
      }
    }
  };



 

  return (
    <Box
      component="form"
      sx={{
        bgcolor: "background.defaultColor",
        p: 0,
        m: -1,
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        height: "100vh",
        textAlign: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Alert msg={alert} />
      <Item
        sx={{
          maxWidth: "25rem",
          margin: "auto",
          padding: "3rem 1rem",
        }}
      >
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
          <div>
            <Button
              sx={{ bgcolor: "submitBtnColor.main", width: "12.5rem" }}
              variant="contained"
              onClick={logIn}
            >
              Sign In
            </Button>
          </div>
        </FormGroup>
      </Item>
    </Box>
  );
};
