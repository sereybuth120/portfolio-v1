import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Stepper from "components/UI/Stepper";
import { workExperienceContent, educationContent } from "config/experience";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "50px 0",
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorWhite: {
    color: theme.palette.primary.white,
  },
  title: {
    textAlign: "center",
    margin: "35px  0",
  },
}));
const WorkExperience = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component={Grid} container paddingX={{ sm: 2, md: 4 }}>
        <Grid xs={12} className={classes.container}>
          <Typography variant="h4" className={classes.title}>
            <strong>
              <span className={classes.colorWhite}>My </span>{" "}
              <span className={classes.colorPrimary}>Experience</span>
            </strong>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.container}>
          <Box marginY={5}>
            <Typography variant="h5" className={classes.title}>
              <strong>
                <span className={classes.colorWhite}>Work </span>
                <span className={classes.colorPrimary}>Experience</span>
              </strong>
            </Typography>
            <Stepper content={workExperienceContent} />
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.container}>
          <Box marginY={5}>
            <Typography variant="h5" className={classes.title}>
              <strong>
                <span className={classes.colorPrimary}>Education</span>
              </strong>
            </Typography>
            <Stepper content={educationContent} />
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default WorkExperience;
