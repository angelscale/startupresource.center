import React from 'react';
import BlogTagView from 'views/blog-tag.view';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { graphql } from 'gatsby';

const BlogTagTemplate = ({ data, location }) => {
  return (
    <WithLayout
      data={data}
      component={BlogTagView}
      layout={Main}
      location={location}
    />
  );
};

export default BlogTagTemplate;

export const postQuery = graphql`
  query ($tag: String!, $skip: Int!, $limit: Int!) {
    allGhostPost(
      filter: { tags: { elemMatch: { slug: { eq: $tag } } } }
      sort: { fields: published_at, order: ASC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
