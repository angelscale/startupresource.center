// const functions = require('firebase-functions');
// const { firestore } = require('../utils/firebase.admin');
// const { slugify } = require('../utils/helpers');

// exports.maintCreateSlug = functions.https.onRequest(
//   async (request, response) => {
// const productCollection = firestore.collection('products');

// const productRefs = await productCollection
//   .get()
//   .then((snapshot) => snapshot.docs);

// await productRefs.forEach((productRef) => {
//   productRef.ref.set({
//     ...productRef.data(),
//     slug: slugify(productRef.data().name),
//   });
// });

// await productRefs.forEach((productRef) => {
//   console.log({
//     ...productRef.data(),
//     slug: slugify(productRef.data().name),
//   });
// });

// const articleCollection = firestore.collection('articles');

// const articleRefs = await articleCollection
//   .get()
//   .then((snapshot) => snapshot.docs);

// await articleRefs.forEach((articleRef) => {
//   articleRef.ref.set({
//     ...articleRef.data(),
//     slug: slugify(articleRef.data().name),
//   });
// });

// await articleRefs.forEach((articleRef) => {
//   console.log({
//     ...articleRef.data(),
//     slug: slugify(articleRef.data().name),
//   });
// });

//   response.send();
// }
// );

// exports.maintFixTitle = functions.https.onRequest(async (request, response) => {
//   const articleCollection = firestore.collection('articles');

//   const articleRefs = await articleCollection
//     .get()
//     .then((snapshot) => snapshot.docs);

//   await articleRefs.forEach((articleRef) => {
//     const { title, ...rest } = articleRef.data();
//     articleRef.ref.set({
//       name: title,
//       ...rest,
//     });
//   });

//   // await articleRefs.forEach((articleRef) => {
//   //   const { title, ...rest } = articleRef.data();
//   //   console.log({
//   //     name: title,
//   //     ...rest,
//   //   });
//   // });

//   response.send();
// });
