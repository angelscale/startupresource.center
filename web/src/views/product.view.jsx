import React from 'react';

// component
import { SingleProduct } from 'templates-tf/SingleProduct';

const SingleProductView = ({ data }) => {
  return <SingleProduct data={data.productData} location={data.location} />;
};

export default SingleProductView;
