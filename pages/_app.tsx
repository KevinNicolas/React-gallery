import Head from "next/head";
import { GlobalStyles } from "../styles";

function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        {/* <meta name="viewport" content="viewport-fit=cover" /> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
        <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');</style>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
