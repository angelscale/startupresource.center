import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';

import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

import { Image } from 'components/atoms';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  divider: {
    borderBottom: '0.5rem solid white',
    paddingBottom: '0.5rem',
    width: '25vw',
  },
  image: {
    minHeight: 400,
    objectFit: 'cover',
    [theme.breakpoints.down('lg')]: {
      height: 120,
      width: 'auto',
    },
  },
  section: {
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
  },
  strong: {
    fontWeight: 900,
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.35)',
  },
  textWhite: {
    color: 'white',
  },
  title: {
    position: 'absolute',
    top: 0,
    margin: theme.spacing(2, 6),
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Image
        src="./woman-working-optimize.jpg"
        alt="Education"
        className={classes.image}
        lazyProps={{
          width: '100%',
          height: '100%',
        }}
      />
      <Section className={classes.section}>
        <SectionHeader
          title="Startup Training and Education"
          align="left"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: clsx(classes.strong, classes.textWhite),
            variant: 'h3',
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
        />
        <div className={classes.divider} />
      </Section>
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
