import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const mealStyles = {
  border: "2px solid #fff",
  borderRadius: "15px",
  marginTop: "1rem",
  marginBottom: "1rem",
};
export const MealItems = ({ items = [] }) => {
  let totalCals = 0;
  let totalP = 0;
  items.map((i) => (totalCals += i.mealCals));
  items.map((i) => (totalP += i.mealProtein));

  if (items.length === 0) {
    return;
  } else {
    return (
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={7}>
          <Typography variant="h4" component="div">
            Meal Items:
          </Typography>
        </Grid>
        {items.map((i) => {
          return (
            <Grid style={mealStyles} item xs={12} md={7} key={Math.random()}>
              <Typography variant="h5" component="div">
                {i.mealItem}
              </Typography>
              <Typography variant="h6" component="div">
                Qty: {i.mealQty} g
              </Typography>
              <Typography variant="h6" component="div">
                Cal: {i.mealCals}
              </Typography>
              <Typography variant="h6" component="div">
                Protein: {i.mealProtein}
              </Typography>
            </Grid>
          );
        })}
        <Grid item xs={12} md={7}>
          <Typography variant="h4" component="div">
            Meals Total Calories: {totalCals.toFixed(2)}
            <br />({totalP.toFixed(2)} g Protein)
          </Typography>
        </Grid>
      </Grid>
    );
  }
};
