/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import BlogArticle from 'views/BlogArticle';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { graphql } from 'gatsby';

const BlogArticlePage = ({ data, location }) => {
  return (
    <WithLayout
      data={data}
      component={BlogArticle}
      layout={Main}
      location={location}
    />
  );
};

export default BlogArticlePage;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
