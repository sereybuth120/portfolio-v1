import { makeStyles } from '@material-ui/core';

export const useLinkStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'underline',
    color: 'inherit',
    '&&:hover': {
      textDecoration: 'underline',
      color: 'inherit',
    },
  },
  withUnderline: {
    textDecoration: 'underline',
    textDecorationColor: theme.palette.secondary.main,
  },
  noUnderline: {
    textDecoration: 'none',
  },
  noUnderlineOnHover: {
    '&&:hover': {
      textDecoration: 'none',
    },
  },
}));
