import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { styled } from '@mui/material';
const PREFIX = 'Section';

const classes = {
  root: `${PREFIX}-root`,
  fullWidth: `${PREFIX}-fullWidth`,
  disablePadding: `${PREFIX}-disablePadding`,
  narrow: `${PREFIX}-narrow`,
};

const Root = styled('section')(({ theme }) => ({
  [`&.${classes.root}`]: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 8),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 8),
    },
  },

  [`& .${classes.fullWidth}`]: {
    maxWidth: '100%',
  },

  [`&.${classes.disablePadding}`]: {
    padding: 0,
  },

  [`& .${classes.narrow}`]: {
    maxWidth: 800,
  },
}));

/**
 * Component to display the sections
 *
 * @param {Object} props
 */
const Section = (props) => {
  const { children, fullWidth, narrow, disablePadding, className, ...rest } =
    props;

  return (
    <Root
      className={clsx(
        'section',
        classes.root,
        fullWidth ? classes.fullWidth : {},
        narrow ? classes.narrow : {},
        disablePadding ? classes.disablePadding : {},
        className,
      )}
      {...rest}
    >
      {children}
    </Root>
  );
};

Section.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section
   */
  children: PropTypes.node,
  /**
   * Should show narrow sections
   */
  narrow: PropTypes.bool,
  /**
   * Should the section be full width
   */
  fullWidth: PropTypes.bool,
  /**
   * Should the section render with no padding
   */
  disablePadding: PropTypes.bool,
};

export default Section;
