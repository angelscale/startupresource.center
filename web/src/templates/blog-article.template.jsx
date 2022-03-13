import React from 'react';
import { graphql } from 'gatsby';
import WithLayout from 'WithLayout';

import Main from 'layouts/Main';
import BlogArticle from 'views/BlogArticle';

const SingleBlogArticleTemplate = ({ data }) => {
  return (
    <WithLayout
      data={data?.allArticles?.nodes[0] || null}
      component={BlogArticle}
      layout={Main}
    />
  );
};

export default SingleBlogArticleTemplate;

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
