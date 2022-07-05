import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
/*
 * @MealItemStyles
 * custom created style objects
 */

export const mealStyles = {
  border: "2px solid #fff",
  borderRadius: "15px",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export const btnStyles = {
  backgroundColor: "#fff",
  display: "inline-block",
  margin: "0.5rem",
  width: "8rem",
};

export const DeleteBtn = styled(DeleteIcon)`
  background-color: white;
  padding: 0.5rem;
  color: red;
  &:active {
    opacity: 0.9;
  }
  &:hover {
    cursor: pointer;
    background-color: red;
    color: white;
    transition: 0.3s;
  }
  border-radius: 100%;
  margin-bottom: 0.5rem;
`;

export const EditBtn = styled(EditIcon)`
  background-color: white;
  padding: 0.5rem;
  color: #4141d8;
  &:active {
    opacity: 0.9;
  }
  &:hover {
    cursor: pointer;
    background-color: #4141d8;
    color: white;
    transition: 0.3s;
  }
  border-radius: 100%;
  margin-bottom: 0.5rem;
`;
