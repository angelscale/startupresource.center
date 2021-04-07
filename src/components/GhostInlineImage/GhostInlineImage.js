import React from 'react';
import Img from 'gatsby-image';

const GhostInlineImage = ({ parentClassName, className, fluidImg, alt }) => (
  <Img
    className={className}
    fluid={fluidImg && JSON.parse(fluidImg)}
    fadeIn={false}
    alt={alt}
  />
);

export default GhostInlineImage;
