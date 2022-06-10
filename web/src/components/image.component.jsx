import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { styled } from '@mui/material';

const PREFIX = 'Image';

const classes = {
  root: `${PREFIX}-root`,
  dBlock: `${PREFIX}-dBlock`,
};

const Root = styled('img\n')(() => ({
  [`& .${classes.root}`]: {
    width: '100%',
    height: '100%',
  },

  [`& .${classes.dBlock}`]: {
    display: 'block',
  },
}));

/**
 * Component to display the images
 *
 * @param {Object} props
 * @return {Object}
 */
const Image = (props) => {
  const { src, srcSet, alt, lazy, lazyProps, className, ...rest } = props;

  if (lazy) {
    return (
      <LazyLoadImage
        className={clsx('image', classes.root, classes.dBlock, className)}
        alt={alt}
        src={src}
        srcSet={srcSet}
        effect="opacity"
        {...lazyProps}
        {...rest}
      />
    );
  }

  return (
    <Root
      className={clsx('image', classes.root, className)}
      alt={alt}
      src={src}
      srcSet={srcSet}
      {...rest}
    />
  );
};

Image.defaultProps = {
  alt: '...',
  lazy: true,
  lazyProps: {
    width: 'auto',
    height: 'auto',
  },
};

Image.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Source of the image
   */
  src: PropTypes.string.isRequired,
  /**
   * Source set for the responsive images
   */
  srcSet: PropTypes.string,
  /**
   * Image title
   */
  alt: PropTypes.string,
  /**
   * Lazy loading properties
   */
  lazyProps: PropTypes.object,
  /**
   * Should lazy load the image
   */
  lazy: PropTypes.bool,
};

export default Image;
