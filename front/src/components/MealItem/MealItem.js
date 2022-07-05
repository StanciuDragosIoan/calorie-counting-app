import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { MealItemsContext } from "../../state/MealItems.module";

import { mealStyles, DeleteBtn, EditBtn } from "./MealItemStyles";

/*
 * @MealItem (functional component)
 *
 * @props: {
 *  item: object,
 * }
 *
 * @returns MealItem instance displaying the meals and the associated data
 */
export const MealItem = ({ item }) => {
  const { deleteItem, editItem, idToEdit } = useContext(MealItemsContext);

  return (
    <Grid container style={mealStyles} item xs={12} md={7}>
      {idToEdit === item._id && (
        <Grid item xs={12}>
          <Typography
            style={{
              backgroundColor: "orange",
              borderRadius: "5px",
              margin: "0.5rem",
            }}
            variant="h5"
            component="div"
          >
            Item Is being Edited
          </Typography>
        </Grid>
      )}
      <Grid item xs={2}>
        <EditBtn
          onClick={() => {
            editItem(item);
          }}
        />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h5" component="div">
          {item.mealItem}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <DeleteBtn onClick={() => deleteItem(item._id)} />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" component="div">
          Qty: {item.mealQty.toFixed()} g
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" component="div">
          Cal: {item.mealCals.toFixed()}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6" component="div">
          Protein: {item.mealProtein.toFixed()}
        </Typography>
      </Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
};
