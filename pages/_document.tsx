import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* General Meta */}
        <meta charSet="UTF-8" />
        <meta name="description" content="Discover my Ikigai – what I love, what I’m good at, what the world needs, and what I can be paid for." />
        <meta name="keywords" content="Ikigai, Purpose, Developer, Indie Maker, FolioRank" />
        <meta name="author" content="Jesutofunmi Olayiwola" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/myikigaii" />
        <meta property="og:title" content="My Ikigai – Crafted with Purpose ✨" />
        <meta property="og:description" content="Here’s how I align what I love, what I'm good at, what the world needs, and what I can be paid for." />
        <meta property="og:image" content="https://yourdomain.com/myikigaii.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Ikigai – Crafted with Purpose ✨" />
        <meta name="twitter:description" content="Discover how I align passion, skills, impact, and income." />
        <meta name="twitter:image" content="https://yourdomain.com/myikigaii.png" />
      </Head>
      <body className="antialiased bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

