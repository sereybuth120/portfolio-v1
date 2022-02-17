import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    // width: '25%',
  },
  step: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'cream',
  },
  vStepper: {
    position: 'relative',
  },
  circle: {
    backgroundColor: theme.palette.primary.main,
    border: `3px solid ${theme.palette.primary.main}`,
    borderRadius: '100%',
    width: '20px',
    height: '20px',
    display: 'inline-block',
  },
  line: {
    top: '20px',
    left: '8.2px',
    height: '85%',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },
  content: {
    marginLeft: '20px',
    display: 'inline-block',
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorWhite: {
    color: theme.palette.primary.white,
  },
}));
const WorkExperience = ({ content }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {content.map((item, index) => (
        <div className={clsx(classes.step)} key={index}>
          <div className={classes.vStepper}>
            <div className={clsx(classes.circle)}></div>
            <div className={clsx(classes.line)}></div>
          </div>

          <div className={classes.content}>
            <Box component={Typography} variant="h5" paddingBottom={1} className={classes.colorPrimary}>
              <strong>{item.title}</strong>
            </Box>
            <Box fontSize="19px" fontWeight="500" paddingBottom={1}>
              <span className={classes.colorPrimary}>{item.company}</span> -{' '}
              <span className={classes.colorPrimary}>{item.date}</span>
            </Box>
            <Typography variant="body1" className={classes.colorWhite} paragraph paddingY={1}>
              {item.desc}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
