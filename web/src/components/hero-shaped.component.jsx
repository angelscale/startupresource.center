import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Divider, styled } from '@mui/material';
import { Section } from 'components';

const PREFIX = 'HeroShaped';

const classes = {
  root: `${PREFIX}-root`,
  hero: `${PREFIX}-hero`,
  heroLeftSide: `${PREFIX}-heroLeftSide`,
  heroRightSide: `${PREFIX}-heroRightSide`,
  heroCover: `${PREFIX}-heroCover`,
  heroImageContainer: `${PREFIX}-heroImageContainer`,
  heroImage: `${PREFIX}-heroImage`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },

  [`& .${classes.hero}`]: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    maxWidth: theme.layout.contentWidth,
    margin: '0 auto',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column-reverse',
    },
  },

  [`& .${classes.heroLeftSide}`]: {
    padding: theme.spacing(12, 4),
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(3, 8),
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3, 2),
    },
  },

  [`& .${classes.heroRightSide}`]: {
    maxWidth: '50%',
    flex: '0 0 50%',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '100%',
      flex: '0 0 100%',
      height: '300px',
    },
  },

  [`& .${classes.heroCover}`]: {
    position: 'relative',
    width: '50vw',
    height: '100%',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
    },
  },

  [`& .${classes.heroImageContainer}`]: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },

  [`& .${classes.heroImage}`]: {
    position: 'absolute',
    left: '0%',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      shapeOutside: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
      clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
    },
  },
}));

/**
 * Component to display the shaped hero
 *
 * @param {Object} props
 * @return {Object}
 */
const HeroShaped = (props) => {
  const { leftSide, rightSide, hideDivider, className, ...rest } = props;

  return (
    <Root className={clsx(classes.root, 'hero-shaped', className)} {...rest}>
      <div className={clsx('hero-shaped__wrapper', classes.hero)}>
        <Section
          className={clsx('hero-shaped__left-side', classes.heroLeftSide)}
        >
          {leftSide}
        </Section>
        {rightSide && (
          <div
            className={clsx('hero-shaped__right-side', classes.heroRightSide)}
          >
            <div className={clsx('hero-shaped__cover', classes.heroCover)}>
              <div
                className={clsx(
                  'hero-shaped__image-container',
                  classes.heroImageContainer,
                )}
              >
                <div className={clsx('hero-shaped__image', classes.heroImage)}>
                  {rightSide}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {!hideDivider && <Divider />}
    </Root>
  );
};

HeroShaped.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section right side
   */
  rightSide: PropTypes.node.isRequired,
  /**
   * Children to placed inside the section left side
   */
  leftSide: PropTypes.node.isRequired,
};

export default HeroShaped;
