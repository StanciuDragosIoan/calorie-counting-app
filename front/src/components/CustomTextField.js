import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    background-color: #fff;
  }
`;
export const CustomTextField = ({
  id,
  placeholder,
  type = "text",
  changeHandler,
  value,
}) => {
  return (
    <Grid>
      <StyledTextField
        id={id}
        variant="outlined"
        placeholder={placeholder}
        type={type}
        onChange={changeHandler}
        value={typeof value === "string" ? value : ""}
      />
    </Grid>
  );
};
