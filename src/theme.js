import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0c7ff2',
    },
    secondary: {
      main: '#60758a',
    },
    background: {
      default: '#f0f2f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#111418',
      secondary: '#60758a',
    },
    divider: '#dbe0e6',
  },
  typography: {
    fontFamily: '"Inter", "Noto Sans", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;