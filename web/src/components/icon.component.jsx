import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { styled, NoSsr } from '@mui/material';

const PREFIX = 'Icon';

const classes = {
  extraSmall: `${PREFIX}-extraSmall`,
  small: `${PREFIX}-small`,
  medium: `${PREFIX}-medium`,
  large: `${PREFIX}-large`
};

const StyledNoSsr = styled(NoSsr)(() => ({
  [`& .${classes.extraSmall}`]: {
    fontSize: 10,
  },

  [`& .${classes.small}`]: {
    fontSize: 20,
  },

  [`& .${classes.medium}`]: {
    fontSize: 30,
  },

  [`& .${classes.large}`]: {
    fontSize: 40,
  }
}));

/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const Icon = (props) => {
  const { fontIconClass, size, fontIconColor, className, ...rest } = props;



  return (
    <StyledNoSsr>
      <i
        className={clsx('icon', fontIconClass, classes[size], className)}
        style={{ color: fontIconColor }}
        {...rest}
      />
    </StyledNoSsr>
  );
};

Icon.defaultProps = {
  size: 'small',
};

Icon.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The classes of the font icon
   */
  fontIconClass: PropTypes.string.isRequired,
  /**
   * Source set for the responsive images
   */
  size: PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large']),
  /**
   * Color of the icon
   */
  fontIconColor: PropTypes.string,
};

export default Icon;
