import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      bgexpenses: string;
      primary: string;
      secondary: string;
      tertiary: string;
    };
  }
}
