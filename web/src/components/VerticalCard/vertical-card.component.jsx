import React from 'react';
import _ from 'lodash';
import makeStyles from '@mui/styles/makeStyles';
import { Avatar, Typography, Divider } from '@mui/material';
// import { Image } from 'components/atoms';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import BlogCard from 'components/BlogCard/blog-card.component';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      maxWidth: 400,
      margin: '0 auto',
    },
  },
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  imageContainer: {
    height: 300,
  },
  image: {
    objectFit: 'contain',
    borderRadius: theme.spacing(0, 0, 20, 0),
    background: 'white',
  },
  blogContent: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    padding: theme.spacing(2),
    // backgroundColor: 'yellow',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
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

const VerticalCard = ({ item, index }) => {
  const classes = useStyles();

  const tags = _.map(item.tags, 'slug');
  const type = tags.includes('hash-article')
    ? 'article'
    : tags.includes('hash-review')
    ? 'review'
    : tags.includes('hash-overview')
    ? 'overview'
    : 'unknown';

  const BlogContent = ({ title, subtitle, author, date, tags }) => (
    <div className={classes.blogContent}>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        {subtitle}
      </Typography>
      {/* <div className={classes.tags}>
        {tags.map((tag, index) =>
          tag.visibility === 'public' ? (
            <Typography
              variant="caption"
              color="primary"
              className={classes.tag}
              key={index}
            >
              {tag.name}
            </Typography>
          ) : null,
        )}
      </div> */}
      {/* <div style={{ flexGrow: 1, backgroundColor: 'blue', height: '1px' }} /> */}
      {/* <Divider className={classes.divider} />
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
      </div> */}
    </div>
  );

  return (
    <BlogCard
      to={`/${type}/${item.slug}`}
      type={type}
      mediaContent={
        item.featureImageSharp ? (
          <GatsbyImage
            alt={item.title}
            loading={index < 6 ? 'eager' : 'lazy'}
            image={getImage(item.featureImageSharp)}
            className={classes.imageContainer}
            imgClassName={classes.image}
            objectFit="cover"
            objectPosition="right"
          />
        ) : (
          <StaticImage
            alt={item.title}
            loading={index < 6 ? 'eager' : 'lazy'}
            src="../../assets/images/placeholder.png"
            className={classes.imageContainer}
            imgClassName={classes.image}
            objectFit="cover"
            objectPosition="right"
          />
        )
      }
      cardContent={
        <BlogContent
          title={item.title}
          subtitle={item.custom_excerpt || item.meta_description}
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
