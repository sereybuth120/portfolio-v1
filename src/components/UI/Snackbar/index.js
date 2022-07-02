import React, { useState } from "react";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/core/styles";

import Button from "components/UI/Button";

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#0e0f0f",
    border: `solid 1px ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    height: "auto",
  },
}));

export default function TransitionsSnackbar() {
  const classes = useStyles();
  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  return (
    <div>
      <Button onClick={handleClick(SlideTransition)}>Send</Button>

      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <SnackbarContent
          className={classes.root}
          message={
            <>
              {/* <div>Thank you for contacting. I'll get back to you ASAP</div>
              <div>In the mean time here some fruits to enjoy</div>
              <Box paddingX="10px">
                <Box fontSize="20px">(\__/)</Box>
                <Box fontSize="20px">
                  ({" "}
                  <Box component="span" fontSize="15px">
                    ^
                  </Box>{" "}
                  -{" "}
                  <Box component="span" fontSize="15px">
                    ^
                  </Box>
                  )<Box component="span" fontSize="15px"></Box>
                </Box>
                <Box fontSize="20px">
                  {" "}
                  &nbsp;{"/>"}{" "}
                  <Box component="span" fontSize="20px">
                    ['🍎','🍐','🍊']
                  </Box>
                </Box>
              </Box> */}
              Something went wrong
            </>
          }
        />
      </Snackbar>
    </div>
  );
}

// •
