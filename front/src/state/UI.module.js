import React, { createContext, useEffect, useState } from "react";

import { storeItem, getItem } from "../services/ClientStorage";
export const UIContext = createContext();

export const UIContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const [state, setState] = useState({
    checked: false,
  });

  const [placeholder, setPlaceholder] = useState("light");

  const setThemeMode = (placeholder) => {
    if (mode === "light" && placeholder === "light") {
      setMode("dark");
      storeItem("caloriesMode", "dark");
    } else if (mode === "dark" && placeholder === "dark") {
      setMode("light");
      storeItem("caloriesMode", "light");
    } else {
      storeItem("caloriesMode", placeholder);
      setMode(placeholder);
    }
  };

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

  useEffect(() => {
    const clientMode = getItem("caloriesMode");

    if (clientMode) {
      setMode(clientMode);
      setPlaceholder(clientMode);
    } else {
      setMode("light");
      setPlaceholder("light");
    }
  }, []);

  return (
    <UIContext.Provider
      value={{
        mode,
        setMode,
        placeholder,
        setPlaceholder,
        setThemeMode,
        handleChange,
        state,
        setState,
        changePlaceholder,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
