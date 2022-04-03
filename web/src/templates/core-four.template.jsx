import React from 'react';
import { graphql } from 'gatsby';
import { Typography, ListItemText, styled, Link } from '@mui/material';

// components
import { Breadcrumb, Container } from 'components';

const Root = styled('div')(({ theme }) => ({
  margin: '0 auto',
}));

const CoreFourTemplate = ({ data, location }) => {
  console.log(data);

  return (
    <Root>
      <Breadcrumb location={location} />
      <Container>
        <Typography variant="h2">Core Four!</Typography>
      </Container>
    </Root>
  );
};

export default CoreFourTemplate;

export const postQuery = graphql`
  query ($id: String!) {
    allCorefour(filter: { id: { eq: $id } }) {
      nodes {
        name
        category
        subcategory
        header_image
        description
        products
        create_date
      }
    }
  }
`;
