import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'


export default class extends Document {

  render() {


    return (
      <html>
        <Head>                   

         
        </Head>
        <body>
        <script href="./noflash.js" />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}