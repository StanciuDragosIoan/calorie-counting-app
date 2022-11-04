import Typography from "@mui/material/Typography";

export const Alert = ({ msg, color = "orange" }) => {
  if (msg) {
    return (
      <Typography
        variant="h2"
        component="div"
        color="white"
        backgroundColor={color}
        width="20rem"
        margin="2rem auto"
        padding="1rem"
        fontSize="1.5rem"
      >
        {msg}
      </Typography>
    );
  }
};
