import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Custom primary color
    },
    secondary: {
      main: '#f50057', // Custom secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1rem',
      color: '#757575',
    },
  },
});

export default theme;