import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey, amber } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: { main: red['A700'] },
    secondary: { main: grey[900] },
    default: grey[900],
    warning: { main: amber[500] },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Questrial',
    default: grey[900],
  },
  overrides: {},
});
