import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 0;
    font-family: sans-serif;
    
    max-width: 1300px;

  }
  * {
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    dark: 'black',
    light: 'white',
    good: 'hsl(2, 100%, 72%)',
    medium: 'hsl(31, 100%, 61%)',
    bad: 'hsl(93, 88%, 36%)',
  },
};

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

// Docs: https://nextjs.org/docs/advanced-features/custom-app
