import React from "react";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import { Navigation } from "../components/Navigation/Navigation";

/*
 * @DefaultRoutePage (contents of the page)
 *
 */

export const Test = () => {
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
          Test Route Here
        </Typography>
      </div>
    </Box>
  );
};
