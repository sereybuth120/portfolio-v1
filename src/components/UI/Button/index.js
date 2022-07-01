import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    border: `2px solid ${theme.palette.primary.main}`,
    width: "147px",
    padding: "12px 30px",
    fontSize: "1rem",
    fontWeight: 400,
    color: theme.palette.primary.main,
    borderRadius: "6px",
    transition: "0.2s",
    "&:hover": {
      color: theme.palette.primary.white,
      background: theme.palette.primary.main,
    },
  },
}));
export default function Button({ children, ...props }) {
  const classes = useStyles();
  return (
    <ButtonBase className={classes.button} {...props}>
      {children}
    </ButtonBase>
  );
}
