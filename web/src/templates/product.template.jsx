import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import ProductView from 'views/product.view';
import { graphql } from 'gatsby';

const ProductTemplate = ({ data, location }) => {
  return (
    <WithLayout
      data={{ productData: data?.allProducts?.nodes[0] || null, location }}
      component={ProductView}
      layout={Main}
      fullWidth
    />
  );
};

export default ProductTemplate;

export const postQuery = graphql`
  query ($id: String!) {
    allProducts(filter: { id: { eq: $id } }) {
      nodes {
        id
        name
        status
        category
        subcategory
        logo
        description
        create_date
        affiliate
      }
    }
  }
`;
