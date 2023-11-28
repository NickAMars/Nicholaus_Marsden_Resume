import { ThemeProvider, createTheme } from '@mui/material/styles';



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
    },
})