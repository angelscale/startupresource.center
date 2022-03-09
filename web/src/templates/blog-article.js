import React from 'react';
import BlogArticle from './BlogArticle';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { graphql } from 'gatsby';

const BlogArticlePage = ({ data, location }) => {
  console.log(data);
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

// export const postQuery = graphql`
//   query ($slug: String!) {
//     ghostPost(slug: { eq: $slug }) {
//       ...GhostPostFields
//     }
//   }
// `;

export const postQuery = graphql`
  query ($id: String!) {
    allArticles(filter: { id: { eq: $id } }) {
      nodes {
        name
        status
        subcategory
        id
        header_image
        content
        category
        create_date
      }
    }
  }
`;
