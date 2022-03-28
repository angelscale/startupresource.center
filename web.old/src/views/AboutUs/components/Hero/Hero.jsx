import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import makeStyles from "@mui/styles/makeStyles";
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";
import { Section } from "components/organisms";

// assets
// import HeroImg from '../../../../assets/images/about/hero.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden",
  },
  image: {
    // minHeight: 400,
    maxHeight: 400,
    objectFit: "cover",
    objectPosition: "center",
    [theme.breakpoints.down("lg")]: {
      // width: 'auto',
      // minHeight: 250,
    },
  },
  textWhite: {
    color: "white",
  },
  textDarkGray: {
    color: "#1a202c",
  },
  title: {
    fontWeight: "bold",
  },
  section: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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
        src="https://logobly.com/wp-content/uploads/97_amazing_freebie_sites_for_founders_logobly_03.jpg"
        srcSet="https://logobly.com/wp-content/uploads/97_amazing_freebie_sites_for_founders_logobly_03.jpg"
        alt="About"
        className={classes.image}
        lazyProps={{
          width: "100%",
          height: "100%",
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
            variant: "h3",
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
