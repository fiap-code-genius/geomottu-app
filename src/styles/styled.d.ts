import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    fontFamily: string;
    colors: {
      background: string;
      text: string;
      primary: string;
    };
  }
}
