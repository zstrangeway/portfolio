import { AppProps } from "next/app";
import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
