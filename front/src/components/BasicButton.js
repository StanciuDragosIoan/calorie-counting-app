import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
export const BasicButton = ({ clickHandler }) => {
  return (
    <Grid>
      <Button
        onClick={clickHandler}
        variant="contained"
        color="secondary"
        size="large"
      >
        Add Meal
      </Button>
    </Grid>
  );
};
