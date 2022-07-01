import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import TransitionsSnackbar from "components/UI/Snackbar";
import TextField from "components/UI/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  input: {
    margin: "10px 0px",
  },
}));

export default function ContactForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        label="Name"
        variant="outlined"
        className={classes.input}
        fullWidth
      />
      <TextField
        label="Email"
        variant="outlined"
        className={classes.input}
        fullWidth
      />
      <TextField
        label="Messages"
        variant="outlined"
        className={classes.input}
        fullWidth
        multiline
        rows={4}
      />

      <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <TransitionsSnackbar />
      </Box>
    </form>
  );
}
