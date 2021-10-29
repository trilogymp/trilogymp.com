import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    return { ...(await NextDocument.getInitialProps(ctx)) };
  }

  render() {
    return (
      <Html dir="ltr" lang="en">
        <Head>
          <meta property="og:locale" content="en_GB" />
          <meta property="og:site_name" content="Trilogy Multiplayer" />
          <meta property="og:type" content="website" />

          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=block"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
