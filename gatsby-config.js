const path = require(`path`);

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

let ghostConfig;

try {
  ghostConfig = require(`./.ghost`);
} catch (e) {
  ghostConfig = {
    production: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY,
    },
  };
} finally {
  const { apiUrl, contentApiKey } =
    process.env.NODE_ENV === `development`
      ? ghostConfig.development
      : ghostConfig.production;

  if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
    throw new Error(
      `GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`,
    ); // eslint-disable-line
  }
}

if (
  process.env.NODE_ENV === `production` &&
  siteMetadata.siteUrl === `http://localhost:8000` &&
  !process.env.SITEURL
) {
  throw new Error(
    `siteUrl can't be localhost and needs to be configured in siteConfig. Check the README.`,
  ); // eslint-disable-line
}

module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
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
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-force-trailing-slashes`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `assets`, `images`),
        name: `images`,
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
    {
      resolve: `gatsby-plugin-ghost-images`,
      options: {
        lookup: [
          {
            type: `GhostPost`,
            imgTags: [`feature_image`],
          },
        ],
        exclude: (node) => node.ghostId === undefined,
        verbose: false,
        disable: false,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-try-ghost`,
      options: {
        ghostConfig: {
          apiUrl: ghostConfig.production.apiUrl,
          contentApiKey: ghostConfig.production.contentApiKey,
        },
        cacheResponse: true,
        verbose: false,
      },
    },
    {
      resolve: `gatsby-transformer-rehype`,
      options: {
        filter: (node) => node.internal.type === `GhostPost`,
        source: (node) => node.html,
        fragment: true,
        space: `html`,
        emitParseErrors: true,
        verbose: true,
        plugins: [
          { resolve: `gatsby-rehype-ghost-links` },
          {
            resolve: `gatsby-rehype-inline-images`,
            options: {
              withWebp: true,
              useImageCache: true,
            },
          },
        ],
      },
    },
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
            file: 'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap',
          },
        ],
      },
    },
  ],
  siteMetadata: siteMetadata,
};
