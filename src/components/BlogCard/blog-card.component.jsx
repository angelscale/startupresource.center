import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import {
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    background: colors.blueGrey[100] + '40',
    transition:
      'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      boxShadow:
        '0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important',
      transform: 'translate3d(0,-5px,0)',
    },
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
    cursor: 'pointer',
  },
  cardActionArea: {
    width: '100%',
    height: '100%',
  },
  media: {
    height: 300,
  },
  typeContainer: {
    height: 300,
    width: '100%',
    position: 'absolute',
    // top: '100%',
    // left: '50%',
    transform: 'translate(0%, -100%)',
  },
  type: {
    color: 'white',
    fontSize: '1.5em',
    fontWeight: '600',
    padding: theme.spacing(0, 2),
  },
  content: {
    padding: theme.spacing(1, 2),
  },
  overview: {
    backgroundImage:
      'linear-gradient(#9fa8daFF 10%, #9fa8da50 20%, #9fa8da00 30%)',
  },
  review: {
    backgroundImage:
      'linear-gradient(#ab47bcFF 10%, #ab47bc50 20%, #00000000 30%)',
  },
  article: {
    backgroundImage: 'linear-gradient(#1976d250, #1976d2FF)',
  },
}));

const BlogCard = (props) => {
  const { cardContent, mediaContent, type, to, ...rest } = props;

  const classes = useStyles();

  const typePretty = {
    overview: 'Partner Article',
    review: 'SRC Review',
    article: 'SRC Article',
  };

  const Wrapper = ({ to, children }) => {
    if (Boolean(to)) {
      return (
        <CardActionArea
          className={classes.cardActionArea}
          component={Link}
          to={to}
        >
          {children}
        </CardActionArea>
      );
    } else {
      return children;
    }
  };

  return (
    <Card className={classes.root} {...rest}>
      <Wrapper to={to}>
        <CardMedia className={classes.media}>
          {mediaContent}
          <div
            className={clsx(classes.typeContainer, {
              [classes.overview]: type === 'overview',
              [classes.review]: type === 'review',
              [classes.article]: type === 'article',
            })}
          >
            <div className={classes.type}>{typePretty[type]}</div>
          </div>
        </CardMedia>
        <CardContent className={classes.content}>{cardContent}</CardContent>
      </Wrapper>
    </Card>
  );
};

export default BlogCard;
