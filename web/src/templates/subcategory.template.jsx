import React from 'react';
import { graphql, Link } from 'gatsby';
import { Typography, styled } from '@mui/material';

// components
import { Breadcrumb, Container } from 'components';

const Root = styled('div')(({ theme }) => ({
  margin: '0 auto',
}));

const SubCategoryTemplate = ({ data, location }) => {
  const articles = data.allArticles.nodes.map((node) => (
    <li key={`/${node.category}/${node.subcategory}/${node.fields.slug}`}>
      <Link to={`/${node.category}/${node.subcategory}/${node.fields.slug}`}>
        {node.name}
      </Link>
    </li>
  ));
  const products = data.allProducts.nodes.map((node) => (
    <li
      key={`/${node.category}/${node.subcategory}/core-four/${node.fields.slug}`}
    >
      <Link
        to={`/${node.category}/${node.subcategory}/core-four/${node.fields.slug}`}
      >
        {node.name}
      </Link>
    </li>
  ));

  return (
    <Root>
      <Breadcrumb location={location} />
      <Container>
        <Typography variant="h3">Articles:</Typography>
        <ul>{articles}</ul>
      </Container>
      <Container>
        <Typography variant="h3">Products:</Typography>
        <ul>{products}</ul>
      </Container>
    </Root>
  );
};

export default SubCategoryTemplate;

export const postQuery = graphql`
  query ($category: String!, $subcategory: String!) {
    allArticles(
      filter: { category: { eq: $category }, subcategory: { eq: $subcategory } }
      sort: { fields: create_date, order: ASC }
    ) {
      nodes {
        name
        category
        subcategory
        fields {
          slug
        }
      }
    }
    allProducts(
      filter: { category: { eq: $category }, subcategory: { eq: $subcategory } }
      sort: { fields: create_date, order: ASC }
    ) {
      nodes {
        name
        category
        subcategory
        fields {
          slug
        }
      }
    }
  }
`;
