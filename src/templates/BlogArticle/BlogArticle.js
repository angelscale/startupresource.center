import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider } from '@material-ui/core';
import rehypeReact from 'rehype-react';

import 'assets/css/ghost.css';

import { Section } from 'components/organisms';
import { Hero } from './components';
import GhostInlineImage from 'components/GhostInlineImage';
import { MetaData } from 'components/meta';
import BlockQuote from 'components/BlockQuote/block-quote.component';

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
    paddingTop: 0,
    paddingBottom: theme.spacing(4),
    fontSize: '1.5em',
  },
}));

const renderAst = new rehypeReact({
  Fragment: React.Fragment,
  createElement: React.createElement,
  components: {
    'img-sharp-inline': GhostInlineImage,
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
        authors={authors}
        published={post.published_at_pretty}
        updated={post.updated_at_pretty}
      />
      <BlockQuote>{post.custom_excerpt || post.meta_description}</BlockQuote>
      <Section className={classes.section}>
        <div className="gh-content">
          {renderAst(post.childHtmlRehype.htmlAst)}
        </div>
      </Section>
    </div>
  );
};

export default BlogArticle;
