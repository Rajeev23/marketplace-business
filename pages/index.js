import Head from 'next/head'
import { Container, Row } from 'reactstrap'
import { useState, useEffect, lazy } from 'react';
import dynamic from 'next/dynamic'
import axios from 'axios';
import Fade from 'react-reveal/Fade';
// import {
  
// } from '../component/home/index';
import CampaignImapact from '../component/missions/campaignImapact'
import  Quantity from '../component/core/test'
// import NavTest from '../component/layout/testheader';

export default function Home(props) {


  return (
    <Container fluid  >
      <Head>
        <title>Home</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <link rel="icon" href="/images/homepage/servies/strategy.png" /> */}

        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <main>
      <h1>this is me 

      </h1>
      </main>
      <style jsx>{`
        .my{
          color: blue;
          animation-delay: 2s;
        }
        
      `}</style>
    </Container>
  )
}




