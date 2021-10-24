import React from 'react';
import Head from 'next/head';
import '@styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
