const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
// const remark = import(`remark`);
// const html = import(`remark-html`);

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

const createImageNodesFromStorage = async ({
  images,
  node,
  createNode,
  createNodeId,
  getCache,
}) => {
  const expiration = new Date();
  expiration.setMinutes(expiration.getMinutes() + 5);

  const processedImages = {};
  await Promise.all(
    images.map(async ({ id, image }) =>
      storage
        .bucket()
        .file(image)
        .getSignedUrl({
          action: 'read',
          expires: expiration.toString(),
        })
        .then(async (imageURL) => {
          return createRemoteFileNode({
            url: imageURL[0],
            parentNodeId: node.id,
            createNode,
            createNodeId,
            getCache,
            name: id,
          }).then((imageFileNode) => {
            processedImages[id] = imageFileNode.id;
          });
        })
        .catch((error) => console.log(error)),
    ),
  );
  return processedImages;
};

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  // Create slugs
  if (node.internal.type === 'articles' || node.internal.type === 'products') {
    createNodeField({
      node,
      name: 'slug',
      value: node.name.replace(/[^A-Z0-9]+/gi, '-'),
    });

    // Process Images
    const logo_image = node.logo ? [{ id: 'logo', image: node.logo }] : [];
    const header_image = node.header_image
      ? [{ id: 'header', image: node.header_image }]
      : [];
    const images_arr = node.images
      ? node.images.map((image, index) => ({
          id: `image${index + 1}`,
          image,
        }))
      : [];
    const images = await createImageNodesFromStorage({
      images: [...header_image, ...logo_image, ...images_arr],
      node,
      createNode,
      createNodeId,
      getCache,
      createNodeField,
    });

    createNodeField({
      node,
      name: 'images',
      value: images,
    });
  }
};

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createResolverContext } = actions;
//   const getHtml = (md) => remark().use(html).process(md);
//   createResolverContext({ getHtml });
// };

// exports.createSchemaCustomization = ({ actions: { createTypes }, schema }) => {
//   createTypes(
//     schema.buildObjectType({
//       name: 'products',
//       interfaces: ['Node'],
//       fields: {
//         md: {
//           type: 'String!',
//           async resolve(source, args, context, info) {
//             const processed = await context.transformerRemark.getHtml(
//               source.description,
//             );
//             return processed.contents;
//           },
//         },
//       },
//     }),
//   );
// }

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type products implements Node {
      logoImage: File @link(from: "fields.images.logo")
    }
    type articles implements Node {
      headerImage: File @link(from: "fields.images.header")
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

  const result = await graphql(`
    {
      allArticles {
        nodes {
          id
          category
          subcategory
          fields {
            slug
          }
        }
      }
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

  const articles = result.data.allArticles.nodes;
  const products = result.data.allProducts.nodes;

  // Create article template pages
  articles.forEach((node) => {
    createPage({
      path: `${node.category}/${node.subcategory}/${node.fields.slug}`,
      component: require.resolve(`./src/templates/article.template.jsx`),
      context: {
        id: node.id,
      },
    });
  });

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
