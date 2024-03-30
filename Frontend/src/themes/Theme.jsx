/** @format */

import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#c90003',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#000000',
    },
    divider: 'rgba(255,0,0,0)',
    text: {
      hint: '#65ffff',
      disabled: '#aaaaaa',
      secondary: '#ffffff',
      primary: '#000000',
    },
  },
  props: {
    MuiButton: {
      size: 'small',
    },
  },
  typography: {
    fontFamily: 'Lumanosimo',
    color: 'palette.text.primary',
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    // Define other typography variants as needed
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            borderColor: '#c90003',
            color: '#c90003',
          },
        },
        // Define other button variants as needed
      ],
    },
  },
  shape: {
    borderRadius: 10,
  },
});
