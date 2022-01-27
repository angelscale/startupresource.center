import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import ProductsView from 'views/products.view';

const Products = () => {
  return <WithLayout component={ProductsView} layout={Main} />;
};

export default Products;
