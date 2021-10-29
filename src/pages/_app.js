import Head from 'next/head';

import '@styles/global.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          content="width=device-width,initial-scale=1,viewport-fit=cover"
          name="viewport"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
