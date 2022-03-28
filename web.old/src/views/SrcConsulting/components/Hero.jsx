import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import makeStyles from "@mui/styles/makeStyles";
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";
import { HeroShaped } from "components/organisms";

// assets
import HeroImg from "assets/images/about/src-hero.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "url(https://assets.maccarianagency.com/the-front/illustrations/patterns-bg.svg) no-repeat left bottom",
    backgroundSize: "contain",
    backgroundColor: theme.palette.alternate.main,
  },
  cover: {
    position: "relative",
    zIndex: 9,
    width: "100%",
    height: "100%",
  },
  image: {
    objectFit: "cover",
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <HeroShaped
        leftSide={
          <SectionHeader
            title="Business Consulting Services"
            subtitle="SRC Consulting Services are customized to the specific needs of each client.  We are not professional consultants, but business practitioners who have been there, done that, and helped start-ups navigate the complexities of the unknown, creating a clearer path to success."
            subtitleColor="textPrimary"
            subtitleVariant="body1"
            align="left"
            data-aos="fade-up"
            titleVariant="h3"
          />
        }
        rightSide={
          <div className={classes.cover}>
            <Image
              //   src="https://assets.maccarianagency.com/the-front/photos/logistics/cover.png"
              //   srcSet="https://assets.maccarianagency.com/the-front/photos/logistics/cover@2x.png 2x"
              src={HeroImg}
              srcSet={HeroImg}
              className={classes.image}
              lazyProps={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        }
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
