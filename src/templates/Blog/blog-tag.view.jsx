import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VerticalCard from './components/vertical-card.component';

const articles3 = [
  {
    cover: {
      src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg',
      srcSet:
        'https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg 2x',
    },
    title: 'Adidas will release your favourite shoes',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Fusce pellentesque faucibus lorem at viverra. Integer at feugiat odio. In placerat euismod risus proin erat purus.',
    author: {
      photo: {
        src: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
        srcSet:
          'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x',
      },
      name: 'Akachi Luccini',
    },
    date: '04 Aug',
    tags: ['adidas', 'sport', 'shop', 'training'],
  },
  {
    cover: {
      src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg',
      srcSet:
        'https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg 2x',
    },
    title: 'NIKE Online Store launches the website‎',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Fusce pellentesque faucibus lorem at viverra. Integer at feugiat odio. In placerat euismod risus proin erat purus.',
    author: {
      photo: {
        src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
        srcSet:
          'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x',
      },
      name: 'Jack Smith',
    },
    date: '04 Aug',
    tags: ['nike', 'sport', 'shop', 'training'],
  },
  {
    cover: {
      src: 'https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg',
      srcSet:
        'https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg 2x',
    },
    title: "LARQ | World's First Self-cleaning Water Bottle‎",
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Fusce pellentesque faucibus lorem at viverra. Integer at feugiat odio. In placerat euismod risus proin erat purus.',
    author: {
      photo: {
        src: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg',
        srcSet:
          'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x',
      },
      name: 'Kate Segelson',
    },
    date: '04 Aug',
    tags: ['larq', 'bottle', 'shop', 'drinks', 'eco', 'self washing'],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
  },
}));

const BlogTagView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <VerticalCard data={articles3} />
    </div>
  );
};

export default BlogTagView;
