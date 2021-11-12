import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Typography, Grid, Divider } from '@material-ui/core';
import { Image } from 'components/atoms';
import { CardProduct } from 'components/organisms';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
  cardProduct: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderRadius: theme.spacing(1),
    '& .card-product__content': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  image: {
    objectFit: 'cover',
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
  media: {
    objectFit: 'cover',
  },
  mediaContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  svg: {
    position: 'absolute',
    bottom: '0.5rem',
    left: 0,
    color: theme.palette.background.paper,
    transform: 'scale(2)',
    height: 'auto',
    width: '100%',
    transformOrigin: 'center top',
    display: 'block',
  },
}));

const Vertical = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const BlogMediaContent = (props) => (
    <div className={classes.mediaContainer}>
      <Image
        {...props}
        className={classes.media}
        lazyProps={{ width: '100%', height: '100%' }}
      />
      <Box
        component={'svg'}
        viewBox="0 0 2880 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.svg}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
          fill="currentColor"
        />
      </Box>
    </div>
  );

  const BlogContent = (props) => (
    <div className={classes.blogContent}>
      <Typography variant="h6" color="textPrimary" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {props.subtitle}
      </Typography>
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
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4}>
        {data.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            key={index}
            data-aos="fade-up"
          >
            <CardProduct
              withShadow
              liftUp
              className={classes.cardProduct}
              mediaContent={
                <BlogMediaContent {...item.cover} alt={item.title} />
              }
              cardContent={
                <BlogContent
                  title={item.title}
                  subtitle={item.subtitle}
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

Vertical.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Vertical;
