import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Head from 'next/head';
// import { Router, Route } from 'react-router'
import Router from 'next/router';
// import HeaderOverlay from './headerOverlay';
// import Nav from './searj';


const Layout = ({ 
  darkMode, 
  children }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //     hideLayout: false

  //   } 
  // }
  // componentDidMount() {
  //   if (window.location.pathname === '/') {
  //     this.setState({hideLayout: true});
  //   }
  // }


  return (
    <div>
       <Head>

       </Head>
       {/* { !this.state.hideLayout ? */}
          <Header navPosition="right" className="reveal-from-bottom"
            style={{ overflow: 'hidden' }}    
            {...{ darkMode }}
            // user={user} loading={loading}
          />
          {/* : ''} */}
        <main className="site-content" style={{}}>
          {children}
        </main>
        <Footer className="fadeInUp" {...{ darkMode }} style={{ animationDelay: '2s' }} />
    </div>
  )
}

export default Layout
