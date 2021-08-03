import React from 'react';

const CategoryPage = ({ pageContext }) => {
  return <div>Category: {pageContext.category}</div>;
};

export default CategoryPage;
