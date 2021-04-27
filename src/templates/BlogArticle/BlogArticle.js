import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import rehypeReact from 'rehype-react';

import { Section, SectionAlternate } from 'components/organisms';
import {
  FooterNewsletter,
  Hero,
  SidebarArticles,
  SidebarNewsletter,
  SimilarStories,
} from './components';
import GhostInlineImage from 'components/GhostInlineImage';
import { MetaData } from 'components/meta';

import { sidebarArticles, similarStories } from './data';

const renderAst = new rehypeReact({
  Fragment: React.Fragment,
  createElement: React.createElement,
  components: { 'img-sharp-inline': GhostInlineImage },
}).Compiler;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sidebarNewsletter: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  footerNewsletterSection: {
    background: theme.palette.primary.dark,
  },
}));

const BlogArticle = ({ data, location }) => {
  const classes = useStyles();
  const post = data.ghostPost;

  const authors = {
    primary: {
      name: post.primary_author.name,
      photo: post.primary_author.profile_image,
      slug: post.primary_author.slug,
    },
    secondary: [],
  };

  post.authors.forEach((author) => {
    if (author.slug !== post.primary_author.slug) {
      authors.secondary.push({
        name: author.name,
        photo: author.profile_image,
        slug: author.slug,
      });
    }
  });

  return (
    <div className={classes.root}>
      <MetaData data={data} location={location} type="article" />
      <Hero
        cover={post.feature_image}
        title={post.title}
        subtitle={post.excerpt}
        authors={authors}
        published={post.published_at_pretty}
        updated={post.updated_at_pretty}
      />
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {renderAst(post.childHtmlRehype.htmlAst)}
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarArticles data={sidebarArticles} />
            <SidebarNewsletter className={classes.sidebarNewsletter} />
          </Grid>
        </Grid>
      </Section>
      <SectionAlternate>
        <SimilarStories data={similarStories} />
      </SectionAlternate>
      <SectionAlternate className={classes.footerNewsletterSection}>
        <FooterNewsletter />
      </SectionAlternate>
    </div>
  );
};

export default BlogArticle;
