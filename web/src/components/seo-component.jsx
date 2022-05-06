import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ data }) => (
  <Helmet>
    <title>{data.title_tag || `${data.name} - Startup Resource Center`}</title>
    <meta charSet="utf-8" />
    <meta name="description" content={data.meta_description} />
  </Helmet>
);

export default SEO;
