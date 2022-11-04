import React, { useContext } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";

import { Navigation } from "./Navigation/Navigation";

import { UserContext } from "../state/User.module";

/*
 * @AppContainer (functional component)
 *
 */
export const AppContainer = () => {

  const { token } = useContext(UserContext);
 
  return (
    <Box
      component="div"
      sx={{
        bgcolor: "background.defaultColor",
        p: 0,
        m: -1,
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        height: "auto",
        minHeight: "100vh",
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
      {token ? (
        <Typography color="#fff" component="h3">
          Welcome User!
        </Typography>
      ) : (
        <>
          <br />
          <LoginForm />
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
        </>
      )}

    </Box>
  );
};
