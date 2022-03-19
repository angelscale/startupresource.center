/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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

  const result = await graphql(`
    {
      allArticles {
        nodes {
          id
          name
          category
          subcategory
        }
      }
      allProducts {
        nodes {
          name
          id
          category
          subcategory
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  const articles = result.data.allArticles.nodes;
  const products = result.data.allProducts.nodes;

  // Create article template pages
  articles.forEach((node) => {
    const slug = node.name.replace(/[^A-Z0-9]+/gi, '-');
    const _path = `${node.category}/${node.subcategory}/${slug}`;

    createPage({
      path: _path,
      component: require.resolve(`./src/templates/blog-article.template.jsx`),
      context: {
        id: node.id,
        slug,
      },
    });
  });

  // Create product template pages
  products.forEach((node) => {
    const slug = node.name.replace(/[^A-Z0-9]+/gi, '-');
    const _path = `${node.category}/${node.subcategory}/core-four/${slug}`;

    createPage({
      path: _path,
      component: require.resolve(`./src/templates/single-product.template.jsx`),
      context: {
        id: node.id,
        slug,
      },
    });
  });
};
