import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { socials } from 'config/socials';
import { CONSTANTS } from 'config/constants';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-Block',
    color: '#FF9800',
    textAlign: 'center',
    borderRadius: '4px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  socialLine: {
    top: '87%',
    left: '11px',
    height: '50%',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    borderLeft: `1px solid ${theme.palette.primary.main}`,
  },
  emailLine: {
    top: '95%',
    left: '15px',
    height: '50%',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    borderLeft: `1px solid ${theme.palette.primary.main}`,
  },
  rightSocial: {
    position: 'fixed',
    right: '30px',
    bottom: '90px',
  },
  leftSocial: {
    position: 'sticky',
    left: '30px',
    bottom: '90px',
  },
  iconContainer: {
    width: '25px',
    height: '25px',
    margin: '35px 0',
  },
  emailContainer: {
    transform: 'rotate(90deg)',
    width: '25px',
    height: '25px',
    margin: '250px 0',
    letterSpacing: '4px',
  },
}));

export const MySocials = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, classes.rightSocial)}>
      <div className={classes.emailContainer}>{CONSTANTS.contact.email}</div>
      <div className={clsx(classes.emailLine)} />
    </div>
  );
};

export const MyEmailSocials = () => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, classes.leftSocial)}>
      {socials.map((item, index) => (
        <div key={index} className={classes.iconContainer}>
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </div>
      ))}
      <div className={clsx(classes.socialLine)} />
    </div>
  );
};
