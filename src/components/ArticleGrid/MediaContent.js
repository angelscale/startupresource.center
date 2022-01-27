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
        viewBox="0 0 2880 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.svg}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
          fill="currentColor"
        />
      </Box>
    </div>
  );
};

export default MediaContent;
