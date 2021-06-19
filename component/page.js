import React from "react";
import Main from "../database/main";


export default class Page extends React.Component {
 
  static async getInitialProps({ req, res }) {
    let width = 400;

    // if (req && req.logInfo) {
    //   width = Main.getDeviceWidth(req.logInfo.deviceInfo);
    // } else if (window) {
    //   width = window.innerWidth;
    // }
    return {page: width.page}  // here `page` is set by server side routes 

  }
   

    
  }
