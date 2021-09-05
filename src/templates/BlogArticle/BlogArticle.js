import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider } from '@material-ui/core';
import rehypeReact from 'rehype-react';

import 'assets/css/ghost.css';

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
import BlockQuote from 'components/BlockQuote/block-quote.component';

import { sidebarArticles, similarStories } from './data';

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
  section: {
    paddingTop: theme.spacing(2),
    fontSize: '1.5em',
  },
  paragraph: {
    marginBottom: theme.spacing(2),
  },
}));

const Paragraph = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <p className={classes.paragraph} {...rest}>
      {children}
    </p>
  );
};

const renderAst = new rehypeReact({
  Fragment: React.Fragment,
  createElement: React.createElement,
  components: {
    'img-sharp-inline': GhostInlineImage,
    blockquote: BlockQuote,
    p: Paragraph,
    hr: Divider,
  },
}).Compiler;

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

  console.log(post);
  return (
    <div className={classes.root}>
      <MetaData data={data} location={location} type="article" />
      <Hero
        cover={
          post.featureImageSharp
            ? post.featureImageSharp.childImageSharp.gatsbyImageData
            : null
        }
        title={post.title}
        subtitle={post.custom_excerpt || post.meta_description}
        authors={authors}
        published={post.published_at_pretty}
        updated={post.updated_at_pretty}
      />
      <Section className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <div className="gh-canvas gh-content">
              {renderAst(post.childHtmlRehype.htmlAst)}
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <SidebarArticles data={sidebarArticles} />
            {/* <SidebarNewsletter className={classes.sidebarNewsletter} /> */}
          </Grid>
        </Grid>
      </Section>
      {/* <SectionAlternate>
        <SimilarStories data={similarStories} />
      </SectionAlternate>
      <SectionAlternate className={classes.footerNewsletterSection}>
        <FooterNewsletter />
      </SectionAlternate> */}
    </div>
  );
};

export default BlogArticle;
