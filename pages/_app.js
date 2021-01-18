import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { useRouter } from 'next/router';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const [getPathName, setGetPathName] = useState();

  useEffect(() => {
    if (router.pathname === '/') {
      setGetPathName('Forside');
    } else if (router.pathname === '/bruktbiler') {
      setGetPathName('Bruktbiler');
    } else if (router.pathname === '/bildeler') {
      setGetPathName('Bildeler');
    } else if (router.pathname === '/contact') {
      setGetPathName('Kontakt Oss');
    }
  }, [router]);
  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ruda:wght@900&display=swap"
          rel="stylesheet"
        />
        <title>{getPathName} | FLISA BIL AS</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
