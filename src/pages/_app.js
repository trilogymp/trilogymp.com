import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import '@styles/global.scss';

import SEOConfig from '../../next-seo.config';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          content="width=device-width,initial-scale=1,viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <DefaultSeo {...SEOConfig} />
      <Component {...pageProps} />
    </>
  );
}
