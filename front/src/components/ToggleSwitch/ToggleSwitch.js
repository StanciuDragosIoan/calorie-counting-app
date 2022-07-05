import React, { useContext, useEffect } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Switch from "@mui/material/Switch";

import { UIContext } from "../../state/UI.module";

import { getItem } from "../../services/ClientStorage";

import { emojiStyle, switchStyle } from "./ToggleSwitchStyles";

/*
 * @ToggleSwitch (functional component)
 *
 */

export function ToggleSwitch() {
  const {
    state,
    setState,
    placeholder,
    setPlaceholder,
    changePlaceholder,
    setThemeMode,
  } = useContext(UIContext);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    changePlaceholder();

    setThemeMode(placeholder);
  };

  useEffect(() => {
    const clientMode = getItem("caloriesMode");
    if (clientMode) {
      setPlaceholder(clientMode);
      if (clientMode === "dark") {
        setState({ ...state, checked: true });
      } else {
        setState({ ...state, checked: false });
      }
    }
  }, []);
  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup style={switchStyle}>
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
