const withSass = require('@zeit/next-sass');
module.exports = withSass({})
require('dotenv').config();

module.exports = withSass({
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    // if (publicRuntimeConfig){
    //   require('CDN_URL: process.env.CDN_URL');
    // }
  
    return config;
  }
  
})



// publicRuntimeConfig: {
//   CDN_URL: process.env.CDN_URL
// }u7830332