const title = 'Basic boiler plate for nextjs website';
const description =
  'Learn how to build static and server-rendered applications with Next.js and React.';

const SEO = {
  title,
  description,
  canonical: 'https://marketpalce.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://marketpalce.com',
    title,
    description,
    images: [
      {
        url: '',
        alt: title,
        width: 1200,
        height: 700
      }
    ]
  },
  twitter: {
    handle: '@leeerob',
    site: '@leeerob',
    cardType: 'summary_large_image'
  }
};

export default SEO;
