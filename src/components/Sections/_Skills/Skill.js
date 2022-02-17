import React, { useState, useRef } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';

import Popover from 'components/UI/Popover';
const useStyles = makeStyles((theme) => ({
  root: {},
  colorPrimary: {
    color: theme.palette.primary.main,
  },
  colorWhite: {
    color: theme.palette.primary.white,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px',
    transition: '0.2s',
    '&:hover': {
      transition: '0.2s',
      transform: 'scale(1.05)',
    },
    width: '100px',
    height: '80px',
    border: 'none',
    boxShadow: 'none ',
    [theme.breakpoints.up('sm')]: {
      width: '190px',
      height: '129px',
      border: `2px solid ${theme.palette.primary.main}`,
      boxShadow: '0 5px 20px rgba(100, 60, 17, 0.39)',
    },
  },
  box: {
    zIndex: 10,
    width: '60px',
    height: '60px',
    [theme.breakpoints.up('sm')]: {
      width: '70px',
      height: '70px',
    },
  },
  popover: {
    pointerEvents: 'none',
  },
  popoverContent: {
    pointerEvents: 'auto',
    borderRadius: '0',
    border: `2px solid ${theme.palette.primary.main}`,
    background: theme.palette.background.darkPrimary,
    display: 'flex',
    alignItems: 'center',
    margin: '30px 0 0 30px',
    padding: '0 15px',
    width: '190px',
    [theme.breakpoints.up('sm')]: {
      width: '190px',
      height: '80px',
    },
  },
  progressBar: {
    height: '10px',
  },
}));
export default function Skill({ name, value, icon }) {
  const classes = useStyles();

  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef(null);

  const popoverEnter = () => {
    setOpenedPopover(true);
  };

  const popoverLeave = () => {
    setOpenedPopover(false);
  };

  return (
    <>
      <Grid
        item
        xs={2}
        className={classes.container}
        ref={popoverAnchor}
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
      >
        <div className={classes.box}>{icon}</div>
      </Grid>
      <Popover
        isOpen={openedPopover}
        disableScrollLock={true}
        anchorEl={popoverAnchor.current}
        PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
        className={classes.popover}
        classes={{
          paper: classes.popoverContent,
        }}
      >
        <Box width="100%">
          <Typography variant="h6">
            <strong className={classes.colorWhite}>{name}</strong>
          </Typography>
          {value && (
            <>
              <LinearProgress variant="determinate" value={value} className={classes.progressBar} />
              <Typography variant="body2" component="span">
                <strong className={classes.colorWhite}>{value}%</strong>
              </Typography>
            </>
          )}
        </Box>
      </Popover>
    </>
  );
}
