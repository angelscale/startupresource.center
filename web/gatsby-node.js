const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');

const firebaseCredentials = require('./credentials.json');

const firebaseConfig = {
  apiKey: 'AIzaSyC6O3jawP6T71_CE1SX76iMmvo-TuzE6oI',
  authDomain: 'startupresourcecenter.firebaseapp.com',
  databaseURL: 'https://startupresourcecenter-default-rtdb.firebaseio.com',
  projectId: 'startupresourcecenter',
  storageBucket: 'startupresourcecenter.appspot.com',
  messagingSenderId: '245708595165',
  appId: '1:245708595165:web:28b476cc67ce4aa26e6034',
  measurementId: 'G-PJ0S60P5TT',
  credential: cert(firebaseCredentials),
};

const firebaseAdmin = initializeApp(firebaseConfig);
const storage = getStorage(firebaseAdmin);

exports.onCreateNode = async ({
  node, // the node that was just created
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  if (node.internal.type === 'products') {
    createNodeField({
      node,
      name: 'slug',
      value: node.name.replace(/[^A-Z0-9]+/gi, '-'),
    });

    const expiration = new Date();
    expiration.setMinutes(expiration.getMinutes() + 5);

    const logoURL = await storage.bucket().file(node.logo).getSignedUrl({
      action: 'read',
      expires: expiration.toString(),
    });

    const logoFileNode = await createRemoteFileNode({
      url: logoURL[0],
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    });
    if (logoFileNode) {
      createNodeField({ node, name: 'logoFile', value: logoFileNode.id });
    }
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type products implements Node {
      logoImage: File @link(from: "fields.logoFile")
    }
  `);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create Error Pages
  ['400', '401', '403', '404', '500'].forEach((e) => {
    createPage({
      path: e,
      component: require.resolve(`./src/templates/error.template.jsx`),
      context: {
        code: e,
      },
    });
  });

  // allArticles {
  //         nodes {
  //           id
  //           name
  //           category
  //           subcategory
  //         }
  //       }
  const result = await graphql(`
    {
      allProducts {
        nodes {
          id
          category
          subcategory
          fields {
            slug
          }
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // const articles = result.data.allArticles.nodes;
  const products = result.data.allProducts.nodes;

  // Create article template pages
  // articles.forEach((node) => {
  //   const slug = node.name.replace(/[^A-Z0-9]+/gi, '-');
  //   const _path = `${node.category}/${node.subcategory}/${slug}`;

  //   createPage({
  //     path: _path,
  //     component: require.resolve(`./src/templates/blog-article.template.jsx`),
  //     context: {
  //       id: node.id,
  //       slug,
  //     },
  //   });
  // });

  // Create product template pages
  products.forEach(async (node) => {
    createPage({
      path: `${node.category}/${node.subcategory}/core-four/${node.fields.slug}`,
      component: require.resolve(`./src/templates/product.template.jsx`),
      context: {
        id: node.id,
      },
    });
  });
};
