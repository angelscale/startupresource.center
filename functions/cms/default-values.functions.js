const functions = require('firebase-functions');
const { slugify } = require('../utils/helpers');
const { bucket } = require('../utils/firebase.admin');
const _ = require('lodash');

exports.setDefaultArticlesFields = functions.firestore
  .document(`articles/{articleId}`)
  .onWrite(async (document) => {
    doSlugify(document.after);
    doEnsureTitleTag(document.after);
    doEnsureImagesLocation(document.after, 'header_image');
    doEnsureImagesLocation(document.after, 'images');
  });

exports.setDefaultProductFields = functions.firestore
  .document(`products/{productId}`)
  .onWrite(async (document) => {
    doSlugify(document.after);
    doEnsureTitleTag(document.after);
    doEnsureImagesLocation(document.after, 'logo');
  });

exports.setDefaultPeopleFields = functions.firestore
  .document(`people/{peopleId}`)
  .onWrite(async (document) => {
    doSlugify(document.after);
    doEnsureImagesLocation(document.after, 'image');
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
