import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Avatar,
  Box,
  Typography,
  Grid,
  Divider,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { CardProduct } from 'components/organisms';

const useStyles = makeStyles((theme) => ({
  cardProduct: {
    display: 'flex',
    height: '100%',
    borderRadius: theme.spacing(1),
    '& .card-product__content, & .card-product__media': {
      flex: '1 1 50%',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column !important',
      '& .card-product__content, & .card-product__media': {
        flex: '1 1 100%',
      },
    },
  },
  cardProductReverse: {
    flexDirection: 'row-reverse',
    '& .card-product__media img': {
      borderRadius: theme.spacing(0, 0, 0, 20),
    },
  },
  image: {
    objectFit: 'cover',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
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
  svg: {
    position: 'absolute',
    bottom: 0,
    top: '150%',
    right: 0,
    color: theme.palette.background.paper,
    transform: 'scale(2) rotate(180deg)',
    height: '100%',
    width: 'auto',
    transformOrigin: 'top center',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));

const Horizontal = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const BlogMediaContent = (props) => (
    <div className={classes.imageContainer}>
      <Image
        {...props}
        className={classes.image}
        lazyProps={{ width: '100%', height: '100%' }}
      />
      <Box
        component={'svg'}
        viewBox="0 0 112 690"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.svg}
      >
        <path
          d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
          fill="currentColor"
        />
      </Box>
    </div>
  );

  const BlogContent = (props) => (
    <div className={classes.blogContent}>
      <Typography variant="h5" color="textPrimary" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {props.subtitle}
      </Typography>
      <div className={classes.tags}>
        {props.tags.map((item, index) => (
          <Typography
            variant="caption"
            color="primary"
            className={classes.tag}
            key={index}
          >
            {item}
          </Typography>
        ))}
      </div>
      <div style={{ flexGrow: 1 }} />
      <Divider className={classes.divider} />
      <div className={classes.list}>
        <div className={classes.avatarContainer}>
          <Avatar {...props.author.photo} className={classes.avatar} />
          <Typography variant="body2" color="textPrimary">
            {props.author.name}
          </Typography>
        </div>
        <Typography variant="overline" color="textSecondary">
          {props.date}
        </Typography>
      </div>
    </div>
  );

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} key={index} data-aos="fade-up">
            <CardProduct
              withShadow
              liftUp
              className={clsx(
                classes.cardProduct,
                index % 2 !== 0 ? classes.cardProductReverse : {},
              )}
              mediaContent={
                <BlogMediaContent {...item.cover} alt={item.title} />
              }
              cardContent={
                <BlogContent
                  title={item.title}
                  subtitle={item.subtitle}
                  tags={item.tags}
                  author={item.author}
                  date={item.date}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Horizontal.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Horizontal;
