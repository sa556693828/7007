import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/digital-numbers"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inconsolata:wght@200..900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/iconB.png" type="image/x-icon" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000" />
        <meta property="og:title" content="7007 Studio" />
        <meta property="og:site_name" content="7007" />
        <meta
          property="og:description"
          content="trustless standard for AI NFTs and Inference assets on Ethereum."
        />
        <meta property="og:url" content="https://www.7007.ai/main.png" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.7007.ai/main.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="7007.ai" />
        <meta property="twitter:url" content="https://www.7007.ai/" />
        <meta name="twitter:title" content="7007 Studio" />
        <meta
          name="twitter:description"
          content="trustless standard for AI NFTs and Inference assets on Ethereum."
        />
        <meta name="twitter:image" content="https://www.7007.ai/main.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
