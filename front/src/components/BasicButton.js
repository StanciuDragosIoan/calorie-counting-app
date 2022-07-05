import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

/*
 * @BasicButton (functional component)
 *
 * @props: {
 *  clickHandler: function,
 *  color: string,
 *  caption: string,
 *  startIcon: component,
 *  style: object,
 *  variant: string
 * }
 */

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
