import React, { useState, useContext } from "react";
import { Item } from "./MainCard/Item";
import FormGroup from "@mui/material/FormGroup";
import { CustomTextField } from "./CustomTextField/CustomTextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

import { UserContext } from "../state/User.module";

/*
 * @LoginForm (functional component)
 */
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(UserContext);

  const logIn = () => {
    const userCredentials = {
      email,
      password,
    };
    console.log(userCredentials);
    setToken("someToken");
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
