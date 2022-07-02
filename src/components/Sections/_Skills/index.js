import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Skill from "./Skill";
import { skillsContent, otherSkillsContent, toolsContent } from "config/skills";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "50px",
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorWhite: {
    color: theme.palette.primary.white,
  },
  title: {
    textAlign: "center",
    margin: "35px 0 10px 0",
  },
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title}>
          <strong>
            <span className={classes.colorWhite}>Professional</span>{" "}
            <span className={classes.colorPrimary}>Skills Set</span>
          </strong>
        </Typography>
      </Grid>
      {skillsContent.map((item, index) => (
        <Skill
          key={index}
          name={item.name}
          value={item.value}
          icon={item.icon}
        />
      ))}
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title}>
          <strong>
            <span className={classes.colorWhite}>Other</span>{" "}
            <span className={classes.colorPrimary}>Skills Set</span>
          </strong>
        </Typography>
      </Grid>
      {otherSkillsContent.map((item, index) => (
        <Skill
          key={index}
          name={item.name}
          value={item.value}
          icon={item.icon}
        />
      ))}
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.title}>
          <strong>
            <span className={classes.colorWhite}>Everyday </span>
            <span className={classes.colorPrimary}>Tools</span>
          </strong>
        </Typography>
      </Grid>
      {toolsContent.map((item, index) => (
        <Skill
          key={index}
          name={item.name}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </Grid>
  );
}
