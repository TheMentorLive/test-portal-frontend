import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link to the favicon */}
        <link rel="icon" href="/placeholder.svg" />
        {/* Default title if not set on specific pages */}
        <title>GenAI Learning</title>
        {/* You can add other meta tags or link tags here if needed */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
