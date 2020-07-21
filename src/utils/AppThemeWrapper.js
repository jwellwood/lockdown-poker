import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

const AppThemeWrapper = ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: { main: '#970004' },
      secondary: { main: '#e7e7e7' },
      background: {
        default:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(134,1,17,1) 0%, rgba(31,9,4,1) 79%)',
        contrastText: '#ffffff',
      },
    },
    typography: {
      useNextVariants: true,
      fontFamily: 'Questrial',
      color: '#1f0904',
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default AppThemeWrapper;
