import { createMuiTheme } from '@material-ui/core';

// const defaultTheme = createMuiTheme();

export default createMuiTheme({
  palette: {
    primary: {
      main: '#ff9800',
      mainDark: '#CF5300',
      gray: '#333333',
      dark: '#0e0f0f',
      white: '#ffffff',
    },
    danger: {
      main: '#EB5757',
    },
    interpreterStatusColor: {
      available: '#27AE60',
      busy: '#EB5757',
      away: '#C5C5C5',
    },
    background: {
      main: '#ff9800',
      white: '#fff',
      darkPrimary: '#0e0f0f',
      // darkSecondary: '#1c1815',
      darkSecondary: '#231e1a',
    },
    shadow: {
      main: '0px 4px 8px rgba(9, 28, 43, 0.08)',
    },
  },
  overrides: {},
});
