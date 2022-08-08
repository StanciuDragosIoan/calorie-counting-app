import React, { useState } from "react";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";

import { Navigation } from "../components/Navigation/Navigation";
import { CustomTextField } from "../components/CustomTextField/CustomTextField";
import { Item } from "../components/MainCard/Item";

/*
 * @SignUp Page (contents of the page)
 *
 */

export const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
              changeHandler={setPassword}
              value={password}
            />
            <div>
              <Button
                sx={{ bgcolor: "submitBtnColor.main", width: "12.5rem" }}
                variant="contained"
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
