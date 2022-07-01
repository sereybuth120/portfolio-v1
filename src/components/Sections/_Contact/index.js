import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ContactForm from './ContactForm';
import { socials } from 'config/socials';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorWhite: {
    color: theme.palette.primary.white,
  },
  iconContainer: {
    display: 'flex',
    gap: '25px',
    margin: '15px 0px',
    justifyContent: 'center',
  },
  icon: {
    width: '30px',
    height: '30px',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  social: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box component={Grid} container paddingX={{ sm: 2, md: 4 }}>
        <Grid item xs={12} md={6} className={classes.container}>
          <Box>
            <Typography variant="h3">
              <strong className={classes.colorPrimary}>Let's</strong>
              <strong className={classes.colorWhite}> Talk</strong>
            </Typography>
            <Typography variant="body1" className={classes.colorWhite}>
              Got any questions? Feel free to reach out 📬
            </Typography>
          </Box>
          <Box className={classes.social}>
            <Typography variant="h3" className={classes.colorPrimary}>
              <strong className={classes.colorPrimary}>Find</strong>
              <strong className={classes.colorWhite}> Me At</strong>
            </Typography>
            <Box className={classes.iconContainer}>
              {socials.map((item, index) => (
                <div key={index} className={classes.icon}>
                  {item.icon}
                </div>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Box>
    </div>
  );
}
