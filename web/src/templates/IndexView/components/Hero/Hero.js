import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import { Button, Typography } from '@mui/material';

import homeImage from '../../../../assets/images/home-image.jpg';
import { SectionHeader, TypedText } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles((theme) => ({
  fontWeight900: {
    fontWeight: 900,
  },
  leftSideContent: {
    '& .section-header__cta-container': {
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:last-child': {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
    },
  },
  heroShaped: {
    '& .hero-shaped__image': {
      backgroundColor: theme.palette.alternate.main,
    },
    [theme.breakpoints.down('lg')]: {
      '& .hero-shaped__image': {
        position: 'relative',
      },
      '& .hero-shaped__wrapper': {
        flexDirection: 'column',
      },
    },
  },
  imageAnimation: {
    background: `url(${homeImage})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.alternate.dark,
  },
}));

const Hero = ({ className, ...rest }) => {
  const classes = useStyles();

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Helping you connect the dots for your Startup
      <br />
      <TypedText
        component="span"
        variant="h2"
        color="primary"
        className={classes.fontWeight900}
        typedProps={{
          strings: ['Plan', 'Launch', 'Manage', 'Grow'],
          typeSpeed: 100,
          loop: true,
        }}
      />
    </Typography>
  );

  const subtitle = 'Everything you need to get your business idea off the ground, just a click away';

  const ctaButton = (
    <Button
      size="large"
      variant="contained"
      color="primary"
      component="a"
      href="/home"
    >
      Get started
    </Button>
  );

  const leftSideContent = (
    <SectionHeader
      title={title}
      subtitle={subtitle}
      align="left"
      titleProps={{
        variant: 'h2',
        color: 'textPrimary',
      }}
      ctaGroup={[ctaButton]}
      data-aos="fade-right"
      disableGutter
      className={classes.leftSideContent}
    />
  );
  return (
    <div className={className} {...rest}>
      <HeroShaped
        className={classes.heroShaped}
        leftSide={leftSideContent}
        rightSide={<div className={clsx(classes.imageAnimation)} />}
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
