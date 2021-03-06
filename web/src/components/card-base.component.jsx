import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Card, CardContent, styled } from '@mui/material';

const PREFIX = 'CardBase';

const classes = {
  root: `${PREFIX}-root`,
  withShadow: `${PREFIX}-withShadow`,
  noShadow: `${PREFIX}-noShadow`,
  noBorder: `${PREFIX}-noBorder`,
  noBg: `${PREFIX}-noBg`,
  liftUp: `${PREFIX}-liftUp`,
  content: `${PREFIX}-content`,
  left: `${PREFIX}-left`,
  right: `${PREFIX}-right`,
  center: `${PREFIX}-center`,
};

const StyledCard = styled(Card)(({ theme }) => ({
  [`&.${classes.root}`]: {
    height: '100%',
    width: '100%',
  },

  [`& .${classes.withShadow}`]: {
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
  },

  [`& .${classes.noShadow}`]: {
    boxShadow: 'none',
  },

  [`& .${classes.noBorder}`]: {
    border: 0,
  },

  [`& .${classes.noBg}`]: {
    background: 'transparent',
  },

  [`&.${classes.liftUp}`]: {
    transition:
      'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      boxShadow:
        '0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important',
      transform: 'translate3d(0,-5px,0)',
    },
  },

  [`& .${classes.content}`]: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 2),
    '&:last-child': {
      padding: theme.spacing(4, 2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 3),
      '&:last-child': {
        padding: theme.spacing(6, 3),
      },
    },
  },

  [`& .${classes.left}`]: {
    alignItems: 'flex-start',
  },

  [`& .${classes.right}`]: {
    alignItems: 'flex-end',
  },

  [`& .${classes.center}`]: {
    alignItems: 'center',
  },
}));

/**
 * Component to display the basic card
 *
 * @param {Object} props
 * @return {Object}
 */
const CardBase = (props) => {
  const {
    withShadow,
    noShadow,
    noBorder,
    noBg,
    liftUp,
    children,
    align,
    className,
    cardContentProps,
    ...rest
  } = props;

  return (
    <StyledCard
      className={clsx(
        'card-base',
        classes.root,
        withShadow ? classes.withShadow : {},
        noShadow ? classes.noShadow : {},
        noBorder ? classes.noBorder : {},
        noBg ? classes.noBg : {},
        liftUp ? classes.liftUp : {},
        className,
      )}
      {...rest}
    >
      <CardContent
        className={clsx('card-base__content', classes.content, classes[align])}
        {...cardContentProps}
      >
        {children}
      </CardContent>
    </StyledCard>
  );
};

CardBase.defaultProps = {
  align: 'center',
  cardContentProps: {},
};

CardBase.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The children content of the basic card
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether to show custom shadow
   */
  withShadow: PropTypes.bool,
  /**
   * Whether to render the card without shadow
   */
  noShadow: PropTypes.bool,
  /**
   * Whether to hide the card borders
   */
  noBorder: PropTypes.bool,
  /**
   * Whether to show transparent background
   */
  noBg: PropTypes.bool,
  /**
   * Whether to lift up on hover
   */
  liftUp: PropTypes.bool,
  /**
   * The content alignment
   */
  align: PropTypes.oneOf(['left', 'right', 'center']),
  /**
   * Additional props to pass to the CardContent component
   */
  cardContentProps: PropTypes.object,
};

export default CardBase;
