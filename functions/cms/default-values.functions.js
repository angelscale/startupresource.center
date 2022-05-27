const functions = require('firebase-functions');
const { slugify } = require('../utils/helpers');
const { bucket } = require('../utils/firebase.admin');
const _ = require('lodash');
const { firestore } = require('firebase-admin');

exports.setDefaultArticlesFields = functions.firestore
  .document(`articles/{articleId}`)
  .onWrite(async (document) => {
    doSlugify(document.after);
    doEnsureTitleTag(document.after);
    doEnsureImagesLocation(document.after, 'header_image');
    doEnsureImagesLocation(document.after, 'images');
    doSetPublishDate(document.after);
  });

exports.setDefaultProductFields = functions.firestore
  .document(`products/{productId}`)
  .onWrite(async (document) => {
    doSlugify(document.after);
    doEnsureTitleTag(document.after);
    doEnsureImagesLocation(document.after, 'logo');
    doSetPublishDate(document.after);
  });

exports.setDefaultPeopleFields = functions.firestore
  .document(`people/{peopleId}`)
  .onWrite(async (document) => {
    doSlugify(document.after);
    doEnsureImagesLocation(document.after, 'image');
    doSetPublishDate(document.after);
  });

const doSlugify = (document) => {
  if (!document.data().slug || document.data().slug == '') {
    document.ref.set({
      ...document.data(),
      slug: slugify(document.data().name),
    });
  } else if (document.data().slug != slugify(document.data().slug)) {
    document.ref.set({
      ...document.data(),
      slug: slugify(document.data().slug),
    });
  }
};

const doEnsureImagesLocation = (document, key) => {
  const data = document.data();
  let images;
  let changed = false;
  if (_.isArray(data[key])) {
    images = data[key].map((oldPath) => {
      const newPath = getImageNewPath(oldPath, document.id);
      if (oldPath !== newPath) {
        changed = true;
        doImageMove(oldPath, newPath);
      }
      return newPath;
    });
  } else {
    const oldPath = data[key];
    const newPath = getImageNewPath(oldPath, document.id);
    if (oldPath !== newPath) {
      changed = true;
      doImageMove(oldPath, newPath);
    }
    images = newPath;
  }

  console.log(key, changed, images);

  if (changed) {
    document.ref.set({
      ...data,
      [key]: images,
    });
  }
};

const getImageNewPath = (oldPath, id) => {
  if (oldPath.includes('/undefined/')) {
    return oldPath.replace('/undefined/', `/${id}/`);
  }
  if (!oldPath.includes(`/${id}/`)) {
    const path = oldPath.split('/');
    const idx = path.length;
    path[idx] = path[idx - 1];
    path[idx - 1] = id;
    return path.join('/');
  }
  return oldPath;
};

const doImageMove = (oldPath, newPath) => {
  if (oldPath !== newPath) {
    console.log(`Moving ${oldPath} to ${newPath}`);
    bucket.file(oldPath).move(newPath);
  }
  return newPath;
};

const doEnsureTitleTag = (document) => {
  if (!document.data().title_tag || document.data().title_tag == '') {
    document.ref.set({
      ...document.data(),
      title_tag: `${document.data().name} - Startup Resource Center`,
    });
  }
};

const doSetPublishDate = (document) => {
  if (!document.data().publish_date || document.data().publish_date == '') {
    document.ref.set({
      ...document.data(),
      publish_date: firestore.Timestamp.now(),
    });
  }
};

// const doSetUpdateTime = (document) => {
//   const before = document.before.data();
//   const after = document.after.data();
//   after.updated_date = before.updated_date;

//   if (!_.isEqual(document.before.data(), document.after.data())) {
//     document.ref.set({
//       ...document.data(),
//       updated_date: firestore.Timestamp.now(),
//     });
//   }
// };
