import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Section } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { BgImage } from 'gbimage-bridge';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    borderBottomRightRadius: '150px',
    overflow: 'hidden',
  },
  heroWrapper: {
    width: '100%',
    color: 'white',
    backgroundColor: '#00000020',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
  },
  buttonCta: {
    borderColor: 'white',
    color: 'white',
  },
}));

const Hero = ({ title, subtitle, children, image }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BgImage
        image={image}
        className={classes.heroImage}
        backgroundColor={`#040e18`}
      >
        <div className={classes.heroWrapper}>
          <Section>
            <SectionHeader
              title={title}
              subtitle={subtitle}
              align="left"
              titleProps={{
                className: classes.title,
                variant: 'h3',
              }}
              subtitleProps={{
                className: classes.subtitle,
              }}
            />
            {children}
            <Button
              variant="outlined"
              size="large"
              className={classes.buttonCta}
            >
              Learn more
            </Button>
          </Section>
        </div>
      </BgImage>
    </div>
  );
};

export default Hero;
