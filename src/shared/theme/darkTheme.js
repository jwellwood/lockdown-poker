import { createMuiTheme } from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#970004' },
    secondary: { main: '#e7e7e7' },
    background: {
      // 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(134,1,17,1) 0%, rgba(31,9,4,1) 79%)',,
      default: '#333',
      contrastText: '#ffffff',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Questrial',
    color: '#1f0904',
  },
});

//color light 1f0904
