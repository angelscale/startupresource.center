import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import ProductView from 'views/product.view';

const ProductTemplate = ({ pageContext, location }) => {
  return (
    <WithLayout
      data={{ pageContext, location }}
      component={ProductView}
      layout={Main}
      fullWidth
    />
  );
};

export default ProductTemplate;
