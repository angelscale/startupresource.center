import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';

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
  content: {
    padding: theme.spacing(1, 2),
  },
}));

const BlogCard = (props) => {
  const { cardContent, mediaContent, to, ...rest } = props;

  const classes = useStyles();

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
        <CardMedia className={classes.media}>{mediaContent}</CardMedia>
        <CardContent className={classes.content}>{cardContent}</CardContent>
      </Wrapper>
    </Card>
  );
};

export default BlogCard;
