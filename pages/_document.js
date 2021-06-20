import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class extends Document {

  render() {


    return (
      <Html>
        <Head>


        </Head>
        <body>
          <script href="./noflash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}