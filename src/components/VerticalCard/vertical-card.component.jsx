import React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography, Divider } from '@material-ui/core';
import { Image } from 'components/atoms';
import BlogCard from 'components/BlogCard/blog-card.component';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
      margin: '0 auto',
    },
  },
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderRadius: theme.spacing(1),
    cursor: 'pointer',
    '& .card-product__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  image: {
    objectFit: 'cover',
    borderRadius: theme.spacing(0, 0, 20, 0),
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  button: {
    minWidth: '100%',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      minWidth: 420,
    },
  },
  answerCount: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1),
    background: theme.palette.secondary.light,
    color: 'white',
    fontWeight: 300,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tag: {
    padding: theme.spacing(1 / 2, 1),
    borderRadius: theme.spacing(1 / 2),
    background: theme.palette.secondary.light,
    color: 'white',
    margin: theme.spacing(0, 1, 1, 0),
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
}));

const VerticalCard = ({ item }) => {
  const classes = useStyles();

  const tags = _.map(item.tags, 'slug');
  const type = tags.includes('hash-article')
    ? 'article'
    : tags.includes('hash-review')
    ? 'review'
    : 'unknown';

  const BlogMediaContent = (props) => (
    <Image
      {...props}
      className={classes.image}
      lazyProps={{ width: '100%', height: '100%' }}
    />
  );

  const BlogContent = ({ title, subtitle, author, date, tags }) => (
    <div className={classes.blogContent}>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {subtitle}
      </Typography>
      <div className={classes.tags}>
        {tags.map((tag, index) =>
          tag.visibility === 'public' ? (
            <Typography
              component={Link}
              to={`/${tag.category}/${tag.slug}`}
              variant="caption"
              color="primary"
              className={classes.tag}
              key={index}
            >
              {tag.name}
            </Typography>
          ) : null,
        )}
      </div>
      <div style={{ flexGrow: 1 }} />
      <Divider className={classes.divider} />
      <div className={classes.list}>
        <div className={classes.avatarContainer}>
          <Avatar {...author.photo} className={classes.avatar} />
          <Typography variant="body2" color="textPrimary">
            {author.name}
          </Typography>
        </div>
        <Typography variant="overline" color="textSecondary">
          {date}
        </Typography>
      </div>
    </div>
  );

  return (
    <BlogCard
      withShadow
      liftUp
      className={classes.cardProduct}
      to={`/${type}/${item.slug}`}
      mediaContent={
        <BlogMediaContent src={item.feature_image} alt={item.title} />
      }
      cardContent={
        <BlogContent
          title={item.title}
          subtitle={item.custom_excerpt}
          author={{
            name: item.primary_author.name,
            src: item.primary_author.profile_image,
          }}
          tags={item.tags}
          date={item.published_at_pretty}
        />
      }
    />
  );
};

export default VerticalCard;
