import React from 'react';
import { graphql } from 'gatsby';
import WithLayout from 'WithLayout';

import Main from 'layouts/Main';
import SingleProduct from 'views/SingleProduct';

const SingleProductTemplate = ({ data, location }) => {
  return (
    <WithLayout
      data={{ productData: data?.allProducts?.nodes[0] || null, location }}
      component={SingleProduct}
      layout={Main}
      fullWidth
    />
  );
};

export default SingleProductTemplate;

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
