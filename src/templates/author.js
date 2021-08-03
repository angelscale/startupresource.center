import React from 'react';

const AuthorPage = ({ pageContext }) => {
  return <div>Author: {pageContext.slug}</div>;
};

export default AuthorPage;
