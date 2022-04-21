import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const ImageMeta = ({ image, width, height }) => {
  if (!image) {
    return null;
  }

  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={width} />
      <meta property="og:image:height" content={height} />
    </Helmet>
  );
};

ImageMeta.propTypes = {
  image: PropTypes.string,
};

export default ImageMeta;
