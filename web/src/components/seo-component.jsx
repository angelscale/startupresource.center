import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ data }) => (
  <Helmet>
    <title>{data.title_tag}</title>
    <meta charSet="utf-8" />
    <meta name="description" content={data.meta_description} />
  </Helmet>
);

export default SEO;
