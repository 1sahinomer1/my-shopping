import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const lightTheme = {
  body: '#B1D0E0',
  fontColor: 'black',
  headerColor: '#6998AB',
};
export const darkTheme = {
  body: '#1A374D',
  headerColor: '#406882',
  fontColor: 'white',
};
export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  body{
    background-color:${(props: any) => props.theme.body};
  }
`;
