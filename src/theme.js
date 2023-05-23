import { createTheme } from '@mui/material/styles';
// import { purple, red } from '@mui/material/colors';

// const primary = red[500]; // #f44336
// const accent = purple['A200']; // #e040fb

export const theme = createTheme({
  palette: {
    primary: {
      light: '#474759',
      main: '#616161',
      dark: '#424242',
      //   contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
