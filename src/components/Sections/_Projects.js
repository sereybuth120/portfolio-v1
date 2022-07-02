import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { workContent } from "config/projects";

const useStyles = makeStyles((theme) => ({
  root: {
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
    margin: "35px 0 10px 0",
  },
  img: {
    borderRadius: "4px 4px 0 0",
    width: "100%",
    minHeight: "160px",
  },
  card: {
    margin: "7 0 4 0",
    minHeight: "468px",
    paddingBottom: 1,
    borderRadius: "6px",
    transition: "0.2s",
    border: `${theme.palette.primary.main} 1px solid`,
    "&:hover": {
      transition: "0.2s",
      transform: "scale(1.05)",
      boxShadow: `0px 0px 13px 3px #ba781c`,
      border: "none",
      borderRadius: "6px",
    },
  },
  center: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box component={Grid} container paddingX={{ sm: 2, md: 4 }}>
        <Grid xs={12} className={classes.container}>
          <Typography variant="h4" className={classes.title}>
            <strong>
              <span className={classes.colorPrimary}>Project </span>
              <span className={classes.colorWhite}>I been part of </span>
            </strong>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            {workContent.map((item, index) => (
              <Box
                component={Grid}
                paddingX={{ xs: 1, lg: 2.5 }}
                paddingY={{ xs: 2.5, lg: 2.5 }}
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
              >
                <div className={classes.card}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className={classes.img}
                  />
                  <Box marginX={3} marginY={3} minHeight="200px">
                    <Typography variant="h5" className={classes.colorPrimary}>
                      <strong>{item.title}</strong>
                    </Typography>
                    <Box marginY={2}>
                      <Typography
                        variant="body1"
                        className={classes.colorWhite}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    marginTop={5}
                    marginX={3}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.colorPrimary}
                    >
                      Learn More
                    </a>
                  </Box>
                </div>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Projects;
