import Grid from "@mui/material/Grid";
import { StyledTextField } from "./StyledTextField";

/*
 * @CustomTextField (functional component)
 *
 * @props: {
 *  id: string,
 *  placeholder: string,
 *  type: string,
 *  changeHandler: function
 * }
 *
 * @returns an instance of the StyledTextField component
 * and passes all the props down to it
 */

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
        color="outlineColor"
        type={type}
        onChange={changeHandler}
        value={typeof value === "string" || value > 0 ? value : ""}
      />
    </Grid>
  );
};
