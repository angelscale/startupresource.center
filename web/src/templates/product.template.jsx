import React from 'react';
import { graphql } from 'gatsby';

import ProductDetailContent from 'contents/ProductDetailContent';

const ProductTemplate = ({ data, location }) => {
  return (
    <div>
      <ProductDetailContent data={data} location={location} />
    </div>
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
        logoImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        description
        create_date
        affiliate
      }
    }
  }
`;
