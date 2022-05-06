const functions = require('firebase-functions');
const { slugify } = require('../utils/helpers');

exports.setDefaultArticlesFields = functions.firestore
  .document(`articles/{articleId}`)
  .onCreate(async (document) => {
    // Slug
    if (!document.data().slug || document.data().slug == '') {
      document.ref.set({
        ...document.data(),
        slug: slugify(document.data().title),
      });
    }
    // Title Tag
    if (!document.data().title_tag || document.data().title_tag == '') {
      document.ref.set({
        ...document.data(),
        title_tag: `${document.data().title} - Startup Resource Center`,
      });
    }
  });

exports.setDefaultProductFields = functions.firestore
  .document(`products/{productId}`)
  .onCreate(async (document) => {
    // Slug
    if (!document.data().slug || document.data().slug == '') {
      document.ref.set({
        ...document.data(),
        slug: slugify(document.data().title),
      });
    }
    // Title Tag
    if (!document.data().title_tag || document.data().title_tag == '') {
      document.ref.set({
        ...document.data(),
        title_tag: `${document.data().title} - Startup Resource Center`,
      });
    }
  });
