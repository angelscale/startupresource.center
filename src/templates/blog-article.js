import React from 'react';
import BlogArticle from './BlogArticle';
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
  query ($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
