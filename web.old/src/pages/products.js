import React from 'react';
import { graphql } from 'gatsby';
import WithLayout from 'WithLayout';

import Main from 'layouts/Main';
import ProductsView from 'views/Products';

const Products = ({ data }) => {
  return (
    <WithLayout
      data={data?.allProducts?.nodes || []}
      component={ProductsView}
      layout={Main}
    />
  );
};

export default Products;

export const postQuery = graphql`
  query {
    allProducts {
      nodes {
        name
        category
        subcategory
        logo
        description
      }
    }
  }
`;
