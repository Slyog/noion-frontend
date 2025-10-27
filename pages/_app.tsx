import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>noion</title>
        <meta name="description" content="Capture → Connect → Decide. Your thoughts, linked." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noion-frontend.vercel.app" />
        <meta property="og:site_name" content="noion" />
        <meta property="og:title" content="Noion — Your thoughts, linked." />
        <meta property="og:description" content="Capture → Connect → Decide. Your thoughts, linked." />
        <meta property="og:image" content="https://noion-frontend.vercel.app/og/noion_og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Noion — Your thoughts, linked." />
        <meta name="twitter:description" content="Capture → Connect → Decide. Your thoughts, linked." />
        <meta name="twitter:image" content="https://noion-frontend.vercel.app/og/noion_og.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
