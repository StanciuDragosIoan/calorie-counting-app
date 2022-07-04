import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { MealItem } from "./MealItem/MealItem";

export const MealItems = ({ items = [], deleteItem, editItem }) => {
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
            <MealItem
              item={i}
              deleteItem={deleteItem}
              editItem={editItem}
              key={i._id}
            />
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
