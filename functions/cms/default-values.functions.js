const functions = require('firebase-functions');
const { slugify } = require('../utils/helpers');

exports.setDefaultArticlesFields = functions.firestore
  .document(`articles/{articleId}`)
  .onWrite(async (document) => {
    // Slug
    if (!document.after.data().slug || document.after.data().slug == '') {
      document.after.ref.set({
        ...document.after.data(),
        slug: slugify(document.after.data().name),
      });
    } else if (
      document.after.data().slug != slugify(document.after.data().slug)
    ) {
      document.after.ref.set({
        ...document.after.data(),
        slug: slugify(document.after.data().slug),
      });
    }
    // Title Tag
    if (
      !document.after.data().title_tag ||
      document.after.data().title_tag == ''
    ) {
      document.after.ref.set({
        ...document.after.data(),
        title_tag: `${document.after.data().name} - Startup Resource Center`,
      });
    }
  });

exports.setDefaultProductFields = functions.firestore
  .document(`products/{productId}`)
  .onWrite(async (document) => {
    // Slug
    if (!document.after.data().slug || document.after.data().slug == '') {
      document.after.ref.set({
        ...document.after.data(),
        slug: slugify(document.after.data().name),
      });
    } else if (
      document.after.data().slug != slugify(document.after.data().slug)
    ) {
      document.after.ref.set({
        ...document.after.data(),
        slug: slugify(document.after.data().slug),
      });
    }
    // Title Tag
    if (
      !document.after.data().title_tag ||
      document.after.data().title_tag == ''
    ) {
      document.after.ref.set({
        ...document.after.data(),
        title_tag: `${document.after.data().name} - Startup Resource Center`,
      });
    }
  });

exports.setDefaultPeopleFields = functions.firestore
  .document(`people/{peopleId}`)
  .onWrite(async (document) => {
    // Slug
    if (!document.after.data().slug || document.after.data().slug == '') {
      document.after.ref.set({
        ...document.after.data(),
        slug: slugify(document.after.data().name),
      });
    } else if (
      document.after.data().slug != slugify(document.after.data().slug)
    ) {
      document.after.ref.set({
        ...document.after.data(),
        slug: slugify(document.after.data().slug),
      });
    }
  });
