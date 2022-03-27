import React from 'react';
import { graphql } from 'gatsby';

import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

import { Container } from 'components';
import {
  Content,
  Hero,
  SidebarArticles,
  SimilarStories,
} from './article-components';

const ArticleTemplate = ({ data }) => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div>
      <Box>
        <Hero data={data} />
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Content data={data} />
            </Grid>
            <Grid item xs={12} md={4}>
              {isMd ? (
                <Box marginBottom={4}>
                  <SidebarArticles />
                </Box>
              ) : null}
            </Grid>
          </Grid>
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <SimilarStories />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </div>
  );
};

export default ArticleTemplate;

export const postQuery = graphql`
  query ($id: String!) {
    allArticles(filter: { id: { eq: $id } }) {
      nodes {
        id
        name
        status
        category
        subcategory
        header_image
        images
        content
        create_date
      }
    }
  }
`;
