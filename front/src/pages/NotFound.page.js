import React from "react";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import { ToggleSwitch } from "../components/ToggleSwitch/ToggleSwitch";

/*
 * @NotFoundPage (contents of the page)
 *
 */

export const NotFoundPage = () => {
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
        <ToggleSwitch />
        <Typography variant="h3" gutterBottom align="center" color="white">
          Page Not Found &#x1F635;
        </Typography>
      </div>
    </Box>
  );
};
