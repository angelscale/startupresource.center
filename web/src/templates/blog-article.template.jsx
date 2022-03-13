import React from 'react';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import BlogArticle from 'views/BlogArticle';

const SingleBlogArticleTemplate = () => {
  return <WithLayout component={BlogArticle} layout={Main} />;
};

export default SingleBlogArticleTemplate;
