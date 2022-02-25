const { paginate } = require(`gatsby-awesome-pagination`);
const _ = require(`lodash`);

const { navigation } = require(`./src/layouts/navigation`);

// mockup products
const products = [
  {
    slug: 'constant-contact',
  },
  {
    slug: 'routee',
  },
  {
    slug: 'bitrix24',
  },
];

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create Home Page
  // createPage({
  //   path: '/',
  //   component: require.resolve(`./src/templates/home-page.js`),
  //   context: {},
  // });

  // Create Error Pages
  ['400', '401', '403', '404', '500'].forEach((e) => {
    createPage({
      path: e,
      component: require.resolve(`./src/templates/_error.js`),
      context: {
        code: e,
      },
    });
  });

  // const result = await graphql(`
  //   {
  //     site {
  //       siteMetadata {
  //         postsPerPage
  //       }
  //     }
  //     allGhostPost(sort: { order: ASC, fields: published_at }) {
  //       edges {
  //         node {
  //           slug
  //           tags {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //     allGhostTag {
  //       edges {
  //         node {
  //           slug
  //           count {
  //             posts
  //           }
  //         }
  //       }
  //     }
  //     allGhostAuthor(sort: { order: ASC, fields: name }) {
  //       edges {
  //         node {
  //           slug
  //           url
  //         }
  //       }
  //     }
  //   }
  // `);

  // Check for any errors
  // if (result.errors) {
  //   throw new Error(result.errors);
  // }

  // Extract query results
  // const tags = result.data.allGhostTag.edges;
  // const authors = result.data.allGhostAuthor.edges;
  // const posts = result.data.allGhostPost.edges;
  // const postsPerPage = result.data.site.siteMetadata.postsPerPage;

  // Create tag pages
  // Object.keys(navigation).forEach((category) => {
  //   if (!navigation[category].href) {
  //     const categoryPostCount = Object.values(navigation[category].tags).reduce(
  //       (accumulator, currentValue) =>
  //         accumulator +
  //         (tags[currentValue.id] ? tags[currentValue.id].postCount : 0),
  //     );
  //     paginate({
  //       createPage,
  //       items: Array.from({ length: categoryPostCount || 0 }),
  //       itemsPerPage: postsPerPage,
  //       component: require.resolve(
  //         `./src/templates/blog-category.template.jsx`,
  //       ),
  //       pathPrefix: ({ pageNumber }) =>
  //         pageNumber === 0 ? category : `${category}/page`,
  //       context: {
  //         category: category,
  //         tags: Object.keys(navigation[category].tags),
  //       },
  //     });
  //     Object.keys(navigation[category].tags).forEach((tag) => {
  //       paginate({
  //         createPage,
  //         items: Array.from({ length: tags[tag] ? tags[tag].postCount : 0 }),
  //         itemsPerPage: postsPerPage,
  //         component: require.resolve(`./src/templates/blog-tag.template.jsx`),
  //         pathPrefix: ({ pageNumber }) =>
  //           pageNumber === 0 ? `${category}/${tag}` : `${category}/${tag}/page`,
  //         context: {
  //           category: category,
  //           tag: tag,
  //         },
  //       });
  //     });
  //   }
  // });

  // Create author pages
  // authors.forEach(({ node }) => {
  //   const totalPosts = node.postCount !== null ? node.postCount : 0;

  //   // This part here defines, that our author pages will use
  //   // a `/author/:slug/` permalink.
  //   const url = `/author/${node.slug}`;

  //   const items = Array.from({ length: totalPosts });

  //   paginate({
  //     createPage,
  //     items: items,
  //     itemsPerPage: postsPerPage,
  //     component: require.resolve(`./src/templates/author.js`),
  //     pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? url : `${url}/page`),
  //     context: {
  //       slug: node.slug,
  //     },
  //   });
  // });

  // Create article pages
  // posts.forEach(({ node }) => {
  //   const tags = _.map(node.tags, 'slug');
  //   const type = tags.includes('hash-article')
  //     ? 'article'
  //     : tags.includes('hash-review')
  //     ? 'review'
  //     : tags.includes('hash-overview')
  //     ? 'overview'
  //     : 'unknown';
  //   createPage({
  //     path: `/${type}/${node.slug}`,
  //     component: require.resolve(`./src/templates/blog-article.js`),
  //     context: {
  //       slug: node.slug,
  //     },
  //   });
  // });

  // Create product page
  // products.forEach((item) => {
  //   createPage({
  //     path: `/product/${item.slug}`,
  //     component: require.resolve(`./src/templates/product.template.jsx`),
  //     context: {
  //       slug: item.slug,
  //     },
  //   });
  // });
};
