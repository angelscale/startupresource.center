import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { useMediaQuery, ImageList, ImageListItem } from '@mui/material';

import { Image } from 'components/atoms';

const useStyles = makeStyles(() => ({
  image: {
    objectFit: 'cover',
  },
}));

const Gallery = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <ImageList cellHeight={isMd ? 300 : 100} cols={4} spacing={0}>
        {data.map((item, index) => (
          <ImageListItem key={index} cols={item.cols || 1}>
            <Image
              {...item.image}
              alt={item.title}
              lazyProps={{ width: '100%', height: '100%' }}
              className={classes.image}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

Gallery.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Gallery;
