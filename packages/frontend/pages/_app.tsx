import { AppProps } from "next/app";
import "../styles/globals.scss";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const title = "Zachary Strangeway - Software Engineer";
  const description =
    "Zachary Strangeway's online resume and portfolio of work.";
  const url = "https://zacstrangeway.com/";
  const socialImageUrl = `${url}og.png`;
  const twitterUser = "@Zac38167211";
  const githubUrl = "https://github.com/zstrangeway";
  const linkedinUrl = "https://www.linkedin.com/in/zstrangeway/";

  return (
    <main>
      <Head>
        {/* Start fetching fonts */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />

        {/* The usual meta tags */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Facebook */}
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={url} />
        <meta property="og:see_also" content={githubUrl} />
        <meta property="og:see_also" content={linkedinUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterUser} />
        <meta name="twitter:creator" content={twitterUser} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImageUrl} />
        <meta name="twitter:image:alt" content={title} />

        {/* Favicons */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />

        {/* Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#0B0C10" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
