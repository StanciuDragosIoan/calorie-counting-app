import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

/*
 * @Item
 * custom created styled component
 */

export const Item = styled(Paper)(() => ({
  textAlign: "center",
  backgroundColor: "#077ae6",
  color: "#fff",
  lineHeight: "60px",
  marginTop: "5rem",
}));
