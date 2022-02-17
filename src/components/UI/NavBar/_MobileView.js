import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { makeStyles } from '@material-ui/core/styles';

import { useLinkStyles } from 'components/UI/Link/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.primary.dark,
  },
  menuButton: {
    float: 'right',
  },
  logo: {
    width: '119px',
  },
  nav: {
    color: '#fff',
    padding: '10px 0',
  },
  navMenu: {
    fontWeight: 700,
    fontSize: '13px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  navMenuItem: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

const MobileNavView = ({ selectedElements, scrollSmoothHandler }) => {
  const classes = useStyles();
  const linkClasses = useLinkStyles();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Grid container>
          <Grid item xs={3} md={3}>
            <h6>ogo</h6>
          </Grid>
          <Grid item xs={9} md={9}>
            <Box>
              <IconButton className={classes.menuButton} color="inherit" aria-label="open drawer">
                <MenuOutlinedIcon color="primary" onClick={() => setIsOpen(!isOpen)} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={3} md={3}></Grid>
          <Grid item xs={12} md={9}>
            <Collapse in={isOpen}>
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
            </Collapse>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MobileNavView;
