import React from 'react';
import { graphql } from 'gatsby';

import ArticleDetailContent from 'contents/ArticleDetailContent';

const ArticleTemplate = ({ data }) => {
  return (
    <div>
      <ArticleDetailContent data={data} />
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
