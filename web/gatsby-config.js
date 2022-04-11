require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const firebaseCredentials = require(`./credentials.json`);

let siteMetadata = {
  title: `Startup Resource Center`,
  description: `Helping you connect the dots for your Startup!`,
  siteUrl: `https://www.startupresource.center`, // Site domain. Do not include a trailing slash!
  siteTitleMeta: `Startup Resource Center`, // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta: `Helping you connect the dots for your Startup!`, // This allows an alternative site description for meta data for pages.
  postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)
  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image
  shortTitle: `SRC`, // Used for App manifest e.g. Mobile Home Screen
  siteIcon: `icon.svg`, // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: `#e9e9e9`, // Used for Offline Manifest
  themeColor: `#15171A`, // Used for Offline Manifest
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-6ES18498KK`],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MVDJJGZ',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
        enableWebVitalsTracking: true,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-plugin-react-leaflet`,
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        failOnError: false,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Startup Resource Center`,
        short_name: `SRC`,
        start_url: `/`,
        background_color: `#e9e9e9`,
        theme_color: `#15171A`,
        display: `standalone`,
        icon: 'src/assets/images/icon.svg',
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-6553710160365970`,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: ['https://font.gstatic.com'],
        web: [
          {
            name: 'Lato',
            file: 'https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-firestore-easy`,
      options: {
        adminCredential: {
          credential: firebaseCredentials,
        },
        collections: ['articles', 'products', 'corefour'],
      },
    },
  ],
  siteMetadata: siteMetadata,
  trailingSlash: 'always',
};
