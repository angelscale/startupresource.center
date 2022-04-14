import React from 'react';
import { Link } from 'gatsby';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Typography, IconButton, styled } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const PREFIX = 'LearnMoreLink';

const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  icon: `${PREFIX}-icon`,
};

const ExternalLink = styled('a')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
  },

  [`& .${classes.title}`]: {
    fontWeight: 'bold',
  },

  [`& .${classes.icon}`]: {
    padding: 0,
    marginLeft: theme.spacing(1),
    '&:hover': {
      background: 'transparent',
    },
  },
}));

const InternalLink = styled(Link)(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
  },

  [`& .${classes.title}`]: {
    fontWeight: 'bold',
  },

  [`& .${classes.icon}`]: {
    padding: 0,
    marginLeft: theme.spacing(1),
    '&:hover': {
      background: 'transparent',
    },
  },
}));

/**
 * Component to display the "Learn More" link
 *
 * @param {Object} props
 */
const LearnMoreLink = (props) => {
  const {
    color,
    component,
    variant,
    title,
    href,
    to,
    className,
    iconProps,
    typographyProps,
    ...rest
  } = props;

  const children = (
    <>
      <Typography
        component="span"
        className={clsx('learn-more-link__typography', classes.title)}
        variant={variant}
        color={color || 'primary'}
        {...typographyProps}
      >
        {title}
      </Typography>
      <IconButton
        className={clsx('learn-more-link__icon-button', classes.icon)}
        color={color || 'primary'}
        {...iconProps}
        size="large"
      >
        <ArrowRightAltIcon className="learn-more-link__arrow" />
      </IconButton>
    </>
  );

  return href !== '#' ? (
    <ExternalLink
      href={href}
      className={clsx('learn-more-link', classes.root, className)}
      {...rest}
    >
      {children}
    </ExternalLink>
  ) : (
    <InternalLink
      to={to}
      className={clsx('learn-more-link', classes.root, className)}
      {...rest}
    >
      {children}
    </InternalLink>
  );
};

LearnMoreLink.defaultProps = {
  variant: 'subtitle1',
  href: '#',
  typographyProps: {},
  iconProps: {},
  component: 'a',
};

LearnMoreLink.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The component to load as a main DOM
   */
  component: PropTypes.oneOf(['Link', 'a']),
  /**
   * Title of the link
   */
  title: PropTypes.string.isRequired,
  /**
   * Variant of the link
   */
  variant: PropTypes.oneOf(['h6', 'subtitle1', 'subtitle2', 'body1', 'body2']),
  /**
   * Href of the link
   */
  href: PropTypes.string,
  /**
   * Color of the link
   */
  color: PropTypes.string,
  /**
   * Additional properties to pass to the Icon component
   */
  iconProps: PropTypes.object,
  /**
   * Additional properties to pass to the Typography component
   */
  typographyProps: PropTypes.object,
};

export default LearnMoreLink;
