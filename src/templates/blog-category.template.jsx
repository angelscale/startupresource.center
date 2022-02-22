import React from 'react';
import BlogTagView from 'views/blog-tag.view';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { graphql } from 'gatsby';

const BlogCategoryTemplate = ({ data, location }) => {
  return (
    <WithLayout
      data={data}
      component={BlogTagView}
      layout={Main}
      location={location}
    />
  );
};

export default BlogCategoryTemplate;

// export const postQuery = graphql`
//   query ($tags: [String!], $skip: Int!, $limit: Int!) {
//     allGhostPost(
//       filter: { tags: { elemMatch: { slug: { in: $tags } } } }
//       sort: { fields: published_at, order: ASC }
//       skip: $skip
//       limit: $limit
//     ) {
//       edges {
//         node {
//           ...GhostPostFields
//         }
//       }
//     }
//   }
// `;
