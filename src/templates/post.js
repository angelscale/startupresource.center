import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import Img from 'gatsby-image';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

// import { Layout } from '../components/common';
import { HeroBackground, SectionAlternate } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { MetaData } from 'components/meta';

const useStyles = makeStyles((theme) => ({
  container: {
    'max-width': '1120px',
    margin: '0 auto',
    padding: '0 4vw',
  },
}));

const ImgSharpInline = ({ parentClassName, className, fluidImg, alt }) => (
  <Img
    className={className}
    fluid={fluidImg && JSON.parse(fluidImg)}
    fadeIn={false}
    alt={alt}
  />
);

const renderAst = new rehypeReact({
  Fragment: React.Fragment,
  createElement: React.createElement,
  components: { 'img-sharp-inline': ImgSharpInline },
}).Compiler;

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const PostView = ({ data, location }) => {
  const post = data.ghostPost;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      {/* <Layout> */}
      <div
        className={clsx({
          [classes.container]: true,
        })}
      >
        <article className="content">
          <HeroBackground
            backgroundImg={post.feature_image}
            backgroundColor={theme.palette.primary.main}
            style={{ color: theme.palette.primary.contrastText }}
          >
            <SectionHeader
              title={post.title}
              titleColor="inherit"
              subtitle={post.excerpt}
              subtitleColor="secondary"
            />
          </HeroBackground>

          {/* The main post content */}
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="caption">Authors:&nbsp;</Typography>
              <Typography variant="caption">
                {post.primary_author.name}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="caption">Updated:&nbsp;</Typography>
              <Typography variant="caption">
                {post.updated_at_pretty}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="caption">Reading Time:&nbsp;</Typography>
              <Typography variant="caption">{post.reading_time}</Typography>
            </Grid>
          </Grid>
          <SectionAlternate>
            {renderAst(post.childHtmlRehype.htmlAst)}
          </SectionAlternate>
        </article>
      </div>
    </>
  );
};

PostView.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      codeinjection_styles: PropTypes.object,
      title: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
      childHtmlRehype: PropTypes.shape({
        htmlAst: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

const Post = (props) => {
  return <WithLayout component={PostView} layout={Main} {...props} />;
};

export default Post;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
