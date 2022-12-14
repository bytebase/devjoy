import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html className="bg-accent antialiased" lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Noto+Sans+SC:wght@100..900&display=swap"
        />
        <script defer data-domain="devjoy.org" src="https://plausible.io/js/plausible.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
