import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    fontFamily: string;
    colors: {
      secondaryText: string;
      inputBackground: string;
      placeholder: any;
      background: string;
      text: string;
      primary: string;
      secondary: string;
      border: string;
      card: string;
      error: string;
      highlight: string;
      muted: string;
      buttonText: string;
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    borderRadius: {
      xxl: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      full: number;
    };
    fontSize: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
  }
}
