import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const emojiStyle = {
  display: "inline-block",
  position: "absolute",
  top: 10,
  left: 40,
};

export function ToggleSwitch({ setThemeMode }) {
  const [state, setState] = useState({
    checked: false,
  });

  const [placeholder, setPlaceholder] = useState("light");

  const changePlaceholder = () => {
    placeholder === "light" ? setPlaceholder("dark") : setPlaceholder("light");
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    changePlaceholder();

    setThemeMode(placeholder);
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={state.checked}
              onChange={handleChange}
              name="checked"
              color="toggleSwitch"
            />
          }
        />
        {placeholder === "dark" && <span style={emojiStyle}>&#x1F31A;</span>}
        {placeholder === "light" && <span style={emojiStyle}>&#x1F31E;</span>}
      </FormGroup>
    </FormControl>
  );
}
