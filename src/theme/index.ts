import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const lightTheme = {
  body: '#F3F1F5',
  fontColor: 'black',
  headerColor: '#8FC1D4',
};
export const darkTheme = {
  body: '#212121',
  headerColor: '#334756',
  fontColor: 'white',
};
export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  body{
    background-color:${(props: any) => props.theme.body};
  }
`;
