const { i18n } = require('./next-i18next.config');
const { svgr } = require('./svgr.config');

const nextConfig = {
  svgr,
  i18n,
  reactStrictMode: true,
  env: {
    ENV: process.env.ENV,
    GQL_API_URL: process.env.GQL_API_URL,
    REST_API_URL: process.env.REST_API_URL,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    REACT_APP_GOOGLE_OAUTH_CLIENT_ID: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
    REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET,
  },
  images: {
    domains: [
      'loremflickr.com',
      'd1ozbl7uifqnph.cloudfront.net',
      'd39ng7x1ew3jw9.cloudfront.net',
      'd260djxm8uty7r.cloudfront.net',
      'd1as91cqt03814.cloudfront.net',
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

// eslint-disable-next-line import/order
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = () => {
  return withBundleAnalyzer(nextConfig);
};
