const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
// const _ = require('lodash');

// const remark = import(`remark`);
// const html = import(`remark-html`);

const { navigation } = require('./src/navigation');

const firebaseAdminCredentials = JSON.parse(
  process.env.FIREBASE_ADMIN_CREDENTIALS,
);

const firebaseConfig = {
  apiKey: 'AIzaSyC6O3jawP6T71_CE1SX76iMmvo-TuzE6oI',
  authDomain: 'startupresourcecenter.firebaseapp.com',
  databaseURL: 'https://startupresourcecenter-default-rtdb.firebaseio.com',
  projectId: 'startupresourcecenter',
  storageBucket: 'startupresourcecenter.appspot.com',
  messagingSenderId: '245708595165',
  appId: '1:245708595165:web:28b476cc67ce4aa26e6034',
  measurementId: 'G-PJ0S60P5TT',
  credential: cert(firebaseAdminCredentials),
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
  if (
    node.internal.type === 'articles' ||
    node.internal.type === 'products' ||
    node.internal.type === 'people'
  ) {
    createNodeField({
      node,
      name: 'slug',
      value: node.name.replace(/[^A-Z0-9]+/gi, '-').toLowerCase(),
    });

    // Process Images
    const logo_image = node.logo ? [{ id: 'logo', image: node.logo }] : [];
    const header_image = node.header_image
      ? [{ id: 'header', image: node.header_image }]
      : [];
    const headshot_image = node.image
      ? [{ id: 'headshot', image: node.image }]
      : [];
    const images_arr = node.images
      ? node.images.map((image, index) => ({
          id: `image${index + 1}`,
          image,
        }))
      : [];
    const images = await createImageNodesFromStorage({
      images: [
        ...header_image,
        ...logo_image,
        ...headshot_image,
        ...images_arr,
      ],
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
    type people implements Node {
      headshotImage: File @link(from: "fields.images.headshot")
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
      allPeople {
        nodes {
          id
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
  const people = result.data.allPeople.nodes;

  // Create article pages
  articles.forEach((node) => {
    createPage({
      path: `${node.category}/${node.subcategory}/${node.fields.slug}`,
      component: require.resolve(`./src/templates/article.template.jsx`),
      context: {
        id: node.id,
      },
    });
  });

  // Create product pages
  products.forEach(async (node) => {
    createPage({
      path: `${node.category}/${node.subcategory}/core-four/${node.fields.slug}`,
      component: require.resolve(`./src/templates/product.template.jsx`),
      context: {
        id: node.id,
      },
    });
  });

  // Create person pages
  people.forEach(async (node) => {
    createPage({
      path: `about-us/${node.fields.slug}`,
      component: require.resolve(`./src/templates/person.template.jsx`),
      context: {
        id: node.id,
      },
    });
  });
  // _.sortBy(products, ['category', 'subcategory']).forEach((item) => {});

  // Create category pages
  navigation.forEach((category) => {
    createPage({
      path: `/${category.slug}`,
      component: require.resolve(`./src/templates/category.template.jsx`),
      context: {
        category: category.slug,
      },
    });

    // Create subcategory pages
    category.subCategories.forEach((subcategory) => {
      createPage({
        path: `/${category.slug}/${subcategory.slug}`,
        component: require.resolve(`./src/templates/category.template.jsx`),
        context: {
          category: category.slug,
          subcategory: subcategory.slug,
        },
      });
      createPage({
        path: `/${category.slug}/${subcategory.slug}/core-four`,
        component: require.resolve(`./src/templates/core-four.template.jsx`),
        context: {
          category: category.slug,
          subcategory: subcategory.slug,
        },
      });
    });
  });
};
