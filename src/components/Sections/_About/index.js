import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ToolTip from "@material-ui/core/ToolTip";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Button from "components/UI/Button";
import Avatar from "assets/Icons/Avatar";
import { JOKES } from "config/constants";
import RESUME from "assets/resume.pdf";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorWhite: {
    color: theme.palette.primary.white,
  },
  linkButton: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.white,
    },
  },
}));

const About = () => {
  const classes = useStyles();
  function getJoke() {
    const index = Math.floor(Math.random() * JOKES.length);
    return JOKES[index];
  }

  return (
    <Box component={Grid} container paddingX={{ sm: 2, md: 4 }}>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" className={classes.colorWhite}>
          Hello There <span className="wave">👋</span>
        </Typography>
        <Box marginY={3}>
          <Typography
            variant="h3"
            display="inline"
            className={classes.colorWhite}
          >
            I'm
          </Typography>
          <Typography
            variant="h3"
            display="inline"
            className={classes.colorPrimary}
          >
            <strong> Sereybuth Hout</strong>
          </Typography>
        </Box>
        <Typography
          variant="h4"
          display="inline"
          noWrap
          className={classes.colorPrimary}
        >
          <strong>Web Developer </strong>
        </Typography>
        <Typography
          variant="h5"
          display="inline"
          className={classes.colorWhite}
        >
          <strong>&&</strong>
        </Typography>
        <Typography
          variant="h4"
          display="inline"
          className={classes.colorPrimary}
        >
          <strong> Web Designer</strong>
        </Typography>
        <Box paddingTop={5} paddingRight={5}>
          <Typography
            variant="body1"
            className={classes.colorWhite}
            gutterBottom
            paragraph
          >
            A little bit about my self, Im{" "}
            <span className={classes.colorPrimary}> 22</span> a year olds geeks
            who moved from{" "}
            <span className={classes.colorPrimary}> Battambang</span> to the big
            city to find a better opportunity for my self. I'm a fresh graduate
            from
            <span className={classes.colorPrimary}>
              {" "}
              Royal University of Phnom Penh
            </span>{" "}
            majoring in{" "}
            <span className={classes.colorPrimary}> Computer Sentence</span>.
            And right now Im working as a{" "}
            <span className={classes.colorPrimary}>Web Developer</span>.
            <br />
            Also a big fan of Star Wars and Anime XD
          </Typography>
        </Box>
        <Box paddingTop="15px">
          <a
            href={RESUME}
            className={classes.linkButton}
            download="Hout Sereybuth Resume.pdf"
          >
            <Button>Resume</Button>
          </a>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <ToolTip title={getJoke()}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="80%"
            paddingTop={{ xs: 3 }}
          >
            <Avatar />
          </Box>
        </ToolTip>
      </Grid>
    </Box>
  );
};

export default About;
