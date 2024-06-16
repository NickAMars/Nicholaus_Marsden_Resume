import { ThemeProvider, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    quaternary: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    quaternary?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    quaternary: true;
  }
}

export const theme = createTheme({
    // light: {
    //     primary: '#FFAE42',
    //     secondary: '#FFF',
    //     tertiary: '#DDD'
    // },
    // dark: {
    //     primary: '#006ECE',
    //     secondary: '#000',
    //     tertiary: '#333'
    // },
    palette: {
        primary: {
          main: '#FFAE42',
        },
        secondary: {
          main: '#FFF',
        },
        tertiary: {
          main: '#1976d2', // blue
        },
    },
})