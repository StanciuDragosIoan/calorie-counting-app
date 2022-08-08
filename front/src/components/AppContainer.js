import React, { useState } from "react";
import { Box } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { CustomTextField } from "./CustomTextField/CustomTextField";
import { Navigation } from "./Navigation/Navigation";
import { Item } from "./MainCard/Item";
/*
 * @AppContainer (functional component)
 *
 */
export const AppContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <Navigation />
      <Typography
        variant="h3"
        component="div"
        color="#fff"
        sx={{ margin: "1rem" }}
      >
        Welcome to
        <br></br>
        <FastfoodIcon sx={{ marginLeft: "2rem" }} /> Meals!
      </Typography>
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
            changeHandler={setEmail}
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
            changeHandler={setPassword}
            value={password}
          />
          <div>
            <Button
              sx={{ bgcolor: "submitBtnColor.main", width: "12.5rem" }}
              variant="contained"
            >
              Sign In
            </Button>
          </div>
        </FormGroup>
      </Item>

      <Typography
        variant="h5"
        component="div"
        color="#fff"
        sx={{ margin: "0.5rem" }}
      >
        No account yet?
      </Typography>
      <div>
        <Button
          sx={{ bgcolor: "submitBtnColor.main", width: "12.5rem" }}
          variant="contained"
        >
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/signup">
            Sign Up
          </Link>
        </Button>
      </div>
    </Box>
  );
};
