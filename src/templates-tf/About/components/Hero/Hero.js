import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

// assets
import HeroImg from '../../../../assets/images/about/hero.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    // minHeight: 400,
    maxHeight: 400,
    objectFit: 'cover',
    objectPosition: 'top center',
    [theme.breakpoints.down('sm')]: {
      // width: 'auto',
      // minHeight: 250,
    },
  },
  textWhite: {
    color: 'white',
  },
  textDarkGray: {
    color: '#1a202c',
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
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Image
        // src={HeroImg}
        // srcSet={HeroImg}
        src="https://assets.maccarianagency.com/backgrounds/img1.jpg"
        srcSet="https://assets.maccarianagency.com/backgrounds/img1.jpg"
        // src="https://assets.maccarianagency.com/the-front/photos/about/hero-image.png"
        // srcSet="https://assets.maccarianagency.com/the-front/photos/about/hero-image.png"
        alt="About"
        className={classes.image}
        lazyProps={{
          width: '100%',
          height: '100%',
        }}
      />
      <Section className={classes.section}>
        <SectionHeader
          title="About us"
          // subtitle="We are founded by a leading academic and researcher in the field of Industrial Systems Engineering."
          align="left"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h3',
          }}
          subtitleProps={{
            className: classes.textWhite,
            // className: classes.textDarkGray,
          }}
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
