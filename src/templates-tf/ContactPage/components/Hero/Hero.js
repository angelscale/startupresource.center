import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

import Test from 'assets/images/people.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    // background: `url(https://assets.maccarianagency.com/the-front/illustrations/contact-cover.svg) no-repeat #3F50B5`,
    background: `url(${Test}) no-repeat #3F50B5`,
    overflow: 'hidden',
    minHeight: 400,
    backgroundSize: 'cover',
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'right -400px top',
      backgroundSize: 'contain',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundPosition: 'right -250px top',
    },
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 0,
    background: 'rgba(0,0,0,.4)',
    [theme.breakpoints.up('md')]: {
      background: 'none',
    },
  },
  sectionHeader: {
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section className={classes.section}>
        <SectionHeader
          title="Contact us"
          subtitle="Have questions or requests? Our business experts are here to help!"
          align="left"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h3',
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
          className={classes.sectionHeader}
        />
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
