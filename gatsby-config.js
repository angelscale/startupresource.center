const path = require(`path`);

let siteMetadata = {
  title: `Startup Resource Center`,
  siteUrl: `https://startupresource.center`, // Site domain. Do not include a trailing slash!
  postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)
  siteTitleMeta: `Startup Resource Center`, // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta: `Connecting the dots for your business - Everything you need is here!`, // This allows an alternative site description for meta data for pages.
  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image
  shortTitle: `SRC`, // Used for App manifest e.g. Mobile Home Screen
  siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
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
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
        disableAutoprefixing: true,
        disableMinification: true,
      },
    },
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `src/assets/images/icon.svg`,
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
          {
            type: `GhostPage`,
            imgTags: [`feature_image`],
          },
          {
            type: `GhostSettings`,
            imgTags: [`cover_image`],
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
        emitParseErrors: false,
        verbose: false,
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
  ],
  siteMetadata: siteMetadata,
};
