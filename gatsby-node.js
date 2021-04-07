const { paginate } = require(`gatsby-awesome-pagination`);

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      site {
        siteMetadata {
          postsPerPage
        }
      }
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
      allGhostTag(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
      allGhostAuthor(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
      allGhostPage(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
            url
          }
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Extract query results
  const tags = result.data.allGhostTag.edges;
  const authors = result.data.allGhostAuthor.edges;
  const pages = result.data.allGhostPage.edges;
  const posts = result.data.allGhostPost.edges;
  const postsPerPage = result.data.site.siteMetadata.postsPerPage;

  // Create Home Page
  createPage({
    path: '/',
    component: require.resolve(`./src/pages/home.js`),
    context: {},
  });

  // Create Error Pages
  createPage({
    path: '/404',
    component: require.resolve(`./src/pages/404.js`),
    context: {},
  });

  createPage({
    path: '/_error',
    component: require.resolve(`./src/pages/_error.js`),
    context: {},
  });

  // Create tag pages
  //   tags.forEach(({ node }) => {
  //     const totalPosts = node.postCount !== null ? node.postCount : 0;

  //     // This part here defines, that our tag pages will use
  //     // a `/tag/:slug/` permalink.
  //     const url = `/tag/${node.slug}`;

  //     const items = Array.from({ length: totalPosts });

  //     // Create pagination
  //     paginate({
  //       createPage,
  //       items: items,
  //       itemsPerPage: postsPerPage,
  //       component: tagsTemplate,
  //       pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? url : `${url}/page`),
  //       context: {
  //         slug: node.slug,
  //       },
  //     });
  //   });

  //   // Create author pages
  //   authors.forEach(({ node }) => {
  //     const totalPosts = node.postCount !== null ? node.postCount : 0;

  //     // This part here defines, that our author pages will use
  //     // a `/author/:slug/` permalink.
  //     const url = `/author/${node.slug}`;

  //     const items = Array.from({ length: totalPosts });

  //     // Create pagination
  //     paginate({
  //       createPage,
  //       items: items,
  //       itemsPerPage: postsPerPage,
  //       component: authorTemplate,
  //       pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? url : `${url}/page`),
  //       context: {
  //         slug: node.slug,
  //       },
  //     });
  //   });

  //   // Create pages
  //   pages.forEach(({ node }) => {
  //     // This part here defines, that our pages will use
  //     // a `/:slug/` permalink.
  //     node.url = `/${node.slug}/`;

  //     createPage({
  //       path: node.url,
  //       component: pageTemplate,
  //       context: {
  //         // Data passed to context is available
  //         // in page queries as GraphQL variables.
  //         slug: node.slug,
  //       },
  //     });
  //   });

  // Create post pages
  posts.forEach(({ node }) => {
    node.url = `/${node.slug}/`;

    createPage({
      path: node.url,
      component: require.resolve(`./src/pages/blog-article.js`),
      context: {
        slug: node.slug,
      },
    });
  });

  // Create pagination
  // paginate({
  //   createPage,
  //   items: posts,
  //   itemsPerPage: postsPerPage,
  //   component: indexTemplate,
  //   pathPrefix: ({ pageNumber }) => {
  //     if (pageNumber === 0) {
  //       return `/`;
  //     } else {
  //       return `/page`;
  //     }
  //   },
  // });
};
