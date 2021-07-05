import 'styled-components';

interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      softGray: string,
      lineGray: string,
      textGray: string,
      darkGray: string,
      gray70: string,
      white: string,
      red: string,
    },
    typography: {
      largeFont: string,
      mediumFont: string,
      smallFont: string,
      smallestFont: string,
      tinyFont: string,
      light: string,
      regular: string,
      medium: string,
      bold: string,
    }
  }
}