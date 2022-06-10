import React from 'react';
import { Helmet } from 'react-helmet';

const ServerRedirect = ({ pageContext: { toPath } }) => {
  return (
    <Helmet>
      <meta http-equiv="refresh" content={`0;url=/${toPath}`}></meta>;
    </Helmet>
  );
};

export default ServerRedirect;
