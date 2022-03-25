import React from 'react';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { useMediaQuery, Grid } from '@mui/material';
import { Section, SectionAlternate } from 'components/organisms';
import {
  Archive,
  FeaturedArticles,
  FooterNewsletter,
  Hero,
  LatestStories,
  MostViewedArticles,
  PopularNews,
  SidebarArticles,
  SidebarNewsletter,
  Tags,
} from './components';

import {
  popularNews,
  featuredArticles,
  latestStories,
  sidebarArticles,
  mostViewedArticles,
  archive,
  tags,
} from './data';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sidebarNewsletter: {
    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(3),
    },
  },
  footerNewsletterSection: {
    background: theme.palette.primary.dark,
  },
}));

const BlogNewsroom = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Hero />
      <Section>
        <PopularNews data={popularNews} />
      </Section>
      <SectionAlternate>
        <FeaturedArticles data={featuredArticles} />
      </SectionAlternate>
      <Section>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
            <LatestStories data={latestStories} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarArticles data={sidebarArticles} />
          </Grid>
        </Grid>
      </Section>
      <SectionAlternate>
        <Grid container spacing={isMd ? 4 : 0}>
          <Grid item xs={12} md={8}>
            <MostViewedArticles data={mostViewedArticles} />
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarNewsletter className={classes.sidebarNewsletter} />
          </Grid>
        </Grid>
      </SectionAlternate>
      <Section>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
            <Archive data={archive} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Tags data={tags} />
          </Grid>
        </Grid>
      </Section>
      <SectionAlternate className={classes.footerNewsletterSection}>
        <FooterNewsletter />
      </SectionAlternate>
    </div>
  );
};

export default BlogNewsroom;
