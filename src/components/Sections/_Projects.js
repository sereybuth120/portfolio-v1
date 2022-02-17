import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Button from 'components/UI/Button';
import { workContent } from 'config/projects';

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: '50px 0',
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorWhite: {
    color: theme.palette.primary.white,
  },
  title: {
    textAlign: 'center',
    margin: '35px 0 10px 0',
  },
  img: {
    width: '100%',
  },
  card: {
    margin: '7 0 4 0',
    paddingBottom: 1,
    transition: '0.2s',
    '&:hover': {
      transition: '0.2s',
      transform: 'scale(1.05)',
      boxShadow: '0 5px 20px rgba(100, 60, 17, 0.39)',
    },
  },
  center: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
              <span className={classes.colorWhite}>I been a part of </span>
            </strong>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            {workContent.map((item, index) => (
              <Box component={Grid} padding={2}  item xs={12} sm={6} md={4} key={index}>
                <div className={classes.card}>
                  <img src={item.img} alt={item.title} className={classes.img} />
                  <Box marginX={2} marginY={2}>
                    <Typography variant="h5" className={classes.colorPrimary}>
                      <strong>{item.title}</strong>
                    </Typography>
                    <Box marginY={2}>
                      <Typography variant="body1" className={classes.colorWhite}>
                        {item.desc}
                      </Typography>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" marginTop={1}>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className={classes.colorPrimary}>
                        <Button>Learn More</Button>
                      </a>
                    </Box>
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
