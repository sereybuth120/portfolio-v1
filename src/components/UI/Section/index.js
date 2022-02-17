import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      padding: '0 350px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0 100px',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: '0 50px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 15px',
    },
  },
  primaryBG: {
    // background: theme.palette.background.darkPrimary,
    background: '#000000',
  },
  secondaryBG: {
    // background: theme.palette.background.darkSecondary,
    background: theme.palette.background.darkPrimary,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Section = forwardRef(({ id, children, backgroundColor = 'primary', isCenter, ...props }, ref) => {
  const classes = useStyles();
  return (
    <div
      id={id}
      ref={ref}
      className={clsx(classes.root, {
        [classes.primaryBG]: backgroundColor === 'primary',
        [classes.secondaryBG]: backgroundColor === 'secondary',
        [classes.center]: isCenter,
      })}
      {...props}
    >
      {children}
    </div>
  );
});

export default Section;
