import React from 'react';

const TagPage = ({ pageContext }) => {
  return (
    <div>
      Category: {pageContext.category} Tag: {pageContext.tag}
    </div>
  );
};

export default TagPage;
