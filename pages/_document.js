import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to the favicon */}
        <link rel="icon" href="/placeholder.svg" />
        {/* You can add other meta tags or link tags here if needed */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
