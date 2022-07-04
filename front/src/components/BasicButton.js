import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
export const BasicButton = ({
  clickHandler,
  color = "secondary",
  caption = "Add Meal",
  startIcon,
  style,
  variant = "contained",
}) => {
  return (
    <Grid>
      <Button
        onClick={clickHandler}
        variant={variant}
        color={color}
        size="large"
        style={{ ...style, minWidth: "9rem" }}
        startIcon={startIcon}
      >
        {caption}
      </Button>
    </Grid>
  );
};
