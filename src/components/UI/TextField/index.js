import React from 'react';
import { TextField as MuiTextField, fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.primary.main}`,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.background.darkPrimary,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    color: '#ffffff',
    '&:hover': {
      backgroundColor: theme.palette.background.darkPrimary,
    },
    '&$focused': {
      backgroundColor: theme.palette.background.darkPrimary,
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      border: 'none',
    },
  },
  focused: {},
}));

export default function TextField(props) {
  const classes = useStylesReddit();

  return <MuiTextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}
