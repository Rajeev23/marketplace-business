import React from 'react';
import '../scss/index.scss'
import '../index.scss';
import Layout from '../component/layout/layout'
import useDarkMode from 'use-dark-mode'; 
//  un comment out for dark  mode
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Head from 'next/head'
import CookieConsent, { Cookies } from "react-cookie-consent";
// import { ReactBot } from '@cozimacode/react-bot';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  
  const darkMode = useDarkMode(false);

  // const handleUserInput = (input) => {
  
  // };

  return <div>
    <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta charSet="UTF-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <link rel="icon" sizes="32x32" href="" type="image/png" />
          <link rel="icon" sizes="16x16" href="" type="image/png" />
          <link rel="stylesheet" href="../../" />
          {/* <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> */}
          {/* <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="noflash.js" /> 
      </Head>
  <Layout 
  {...{darkMode}} 
   >
  <DefaultSeo {...SEO} />
  <Component {...pageProps}  />
  {/* <CookieConsent
  location="bottom"
  buttonText="I Understant"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#54AEEF" }}
  buttonStyle={{ color: "#ffffff", fontSize: "16px", backgroundColor: '#00B5F2'}}
  expires={150}
>
  This website uses cookies to enhance the user experience.
</CookieConsent> */}
{/* <ReactBot
        handleUserInput={this.handleUserInput}
        customLauncherIcon="x"
        title="ReactBot"
        messagePlaceHolder="Type something here..."
      /> */}

  </Layout>
</div>
}