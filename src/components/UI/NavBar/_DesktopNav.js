import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { useLinkStyles } from 'components/UI/Link/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    background: theme.palette.primary.dark,
  },
  navWrapper: {
    width: '100%',
  },
  nav: {
    width: '100%',
    color: 'white',
    '&& a': {
      display: 'block',
      padding: '0 16px',
      lineHeight: 'inherit',
      cursor: 'pointer',
    },
    '&& ul': {
      listStyle: 'none',
      padding: 0,
      marginBottom: 0,
    },
  },
  navMenu: {
    fontWeight: 700,
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navMenuItem: {
    position: 'relative',
    padding: '0 10px',
    cursor: 'pointer',
    color: theme.palette.primary.white,
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '&:active': {
      color: theme.palette.primary.main,
    },
  },
  logoWrapper: {
    color: theme.palette.primary.main,
    fontSize: '12px',
  },
}));

const DesktopNav = ({ selectedElements, scrollSmoothHandler }) => {
  const classes = useStyles();
  const linkClasses = useLinkStyles();
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Tooltip title="Honestly, I cant't decide on which logo to use. So, YEAS.....">
              <div className={classes.logoWrapper}>LOGO</div>
            </Tooltip>
            <Box className={classes.navWrapper}>
              <nav className={classes.nav}>
                <div className={classes.navMenu}>
                  {selectedElements.map((item, i) => (
                    <div key={i} className={classes.navMenuItem}>
                      <span onClick={scrollSmoothHandler(i)} className={linkClasses.noUnderlineOnHover}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </nav>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default DesktopNav;
