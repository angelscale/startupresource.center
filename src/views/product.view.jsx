import React, { useState } from 'react';

// component
import { SingleProduct } from 'templates-tf/SingleProduct';

// products
import { products } from 'templates-tf/Products/data';

const SingleProductView = ({ data }) => {
  const [productData] = useState(getProduct(data.pageContext.slug));

  return <SingleProduct data={productData} location={data.location} />;
};

const getProduct = (_slug) => {
  return products.find((product) => product.slug === _slug);
};

export default SingleProductView;
