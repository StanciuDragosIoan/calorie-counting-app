import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { BasicButton } from "../BasicButton";
import { mealStyles, btnStyles } from "./MealItemStyles";
export const MealItem = ({ item, deleteItem, editItem }) => {
  return (
    <Grid style={mealStyles} item xs={12} md={7}>
      <Typography variant="h5" component="div">
        {item.mealItem}
      </Typography>
      <Typography variant="h6" component="div">
        Qty: {item.mealQty} g
      </Typography>
      <Typography variant="h6" component="div">
        Cal: {item.mealCals}
      </Typography>
      <Typography variant="h6" component="div">
        Protein: {item.mealProtein}
      </Typography>
      <BasicButton
        caption="Delete"
        color="error"
        style={btnStyles}
        startIcon={<DeleteIcon />}
        variant="outlined"
        clickHandler={() => deleteItem(item._id)}
      />
      <BasicButton
        caption="Edit"
        color="primary"
        style={btnStyles}
        startIcon={<EditIcon />}
        variant="outlined"
        clickHandler={() => editItem(item)}
      />
    </Grid>
  );
};
