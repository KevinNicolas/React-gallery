import Head from "next/head";
import { GlobalStyles } from "../styles";

function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        {/* <meta name="viewport" content="viewport-fit=cover" /> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
