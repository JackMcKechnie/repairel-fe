// import Head from 'next/head';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    dark: 'black',
    light: 'white',
  },
};

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
