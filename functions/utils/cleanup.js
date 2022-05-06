exports.maintCreateSlug = functions.https.onRequest(
  async (request, response) => {
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

    const articleCollection = firestore.collection('articles');

    const articleRefs = await articleCollection
      .get()
      .then((snapshot) => snapshot.docs);

    // await articleRefs.forEach((articleRef) => {
    //   const { name, ...rest } = articleRef.data();
    //   articleRef.ref.set({
    //     ...rest,
    //     title: name
    //   });
    // });

    await articleRefs.forEach((articleRef) => {
      const { name, ...rest } = articleRef.data();
      console.log({
        ...rest,
        title: name,
      });
    });

    response.send();
  }
);
