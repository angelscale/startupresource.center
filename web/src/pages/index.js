import React from 'react';
import clsx from 'clsx';
import { colors, Button, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import {
  Create,
  DeviceHub,
  FlightTakeoff,
  TrendingUp,
} from '@mui/icons-material';

import {
  HeroShaped,
  SectionHeader,
  SectionLabel,
  TypedText,
  ServiceCards,
} from 'components';

import HomeImage from 'assets/images/home-image.jpg';

// import ServiceSectionView from './Home/service-section';
// import ArticlesSectionView from './Home/article-section';

// import { services_data, featured, articles } from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '45rem',
    width: '100%',
  },
  header: {
    fontSize: '1.4em',
    fontStyle: 'italic',
    fontWeight: 400,
    marginBottom: theme.spacing(2),
  },
  text: {
    padding: theme.spacing(4),
    fontSize: '1.4em',
    fontWeight: 600,
  },
  intro: {
    background: colors.blueGrey[100] + '40',
  },
  content: {
    margin: '0 auto',
    maxWidth: theme.layout.contentWidth,
  },
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
    background: `url(${HomeImage})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.alternate.dark,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeroShaped
        className={classes.heroShaped}
        leftSide={
          <SectionHeader
            title={
              <Typography
                variant="h2"
                component="span"
                className={classes.fontWeight900}
              >
                Helping you
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
                <br />
                your Startup
              </Typography>
            }
            subtitle="Everything you need to get your business idea off the ground, just a click away"
            align="left"
            titleProps={{
              variant: 'h2',
              color: 'textPrimary',
            }}
            ctaGroup={[
              <Button
                size="large"
                variant="contained"
                color="primary"
                component="a"
                href="/home"
              >
                Get started
              </Button>,
            ]}
            data-aos="fade-right"
            disableGutter
            className={classes.leftSideContent}
          />
        }
        // rightSide={<div className={clsx(classes.imageAnimation)} />}
      />
      <div className={classes.content}>
        <SectionLabel align="center" title="Our Services" />
        <ServiceCards
          data={[
            {
              icon: <Create />,
              title: 'Plan',
              subtitle: `Got an idea for a business, but don't know where to start? In our Plan section, you'll find everything you need to know to get your business off the ground.`,
            },
            {
              icon: <FlightTakeoff />,
              title: 'Launch',
              subtitle: `In our Launch hub, you'll find everything you need to get your new business running, broken down into easy-to-navigate categories.`,
            },
            {
              icon: <DeviceHub />,
              title: 'Manage',
              subtitle: `Keep your business operating smoothly with our expert advice.`,
            },
            {
              icon: <TrendingUp />,
              title: 'Grow',
              subtitle: `Building your business brand and market it for maximum growth with these tips.`,
            },
          ]}
        />
        {/* <Articles featuredData={featured} articlesData={articles} /> */}
        {/* <ServiceSectionView />
        <ArticlesSectionView /> */}
      </div>
    </div>
  );
};

export default HomePage;
