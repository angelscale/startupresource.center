import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';

import { Image } from 'components/atoms';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    objectFit: 'cover',
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

const MediaContent = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
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
};

export default MediaContent;
