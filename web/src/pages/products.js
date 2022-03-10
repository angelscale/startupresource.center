import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import ProductsView from 'views/products.view';
import { graphql } from 'gatsby';

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
