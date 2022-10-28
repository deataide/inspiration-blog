import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tetiary: string;

      background: string;
      backgroundTwo: string;
      text: string;
    };
  }
}
