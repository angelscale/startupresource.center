import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { useMediaQuery, Grid } from '@mui/material';

import Content from './Content';
import MediaContent from './MediaContent';
import { CardProduct } from 'components/organisms';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    height: '100%',
    borderRadius: theme.spacing(1),
    '& .card-product__content, & .card-product__media': {
      flex: '1 1 50%',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column !important',
      '& .card-product__content, & .card-product__media': {
        flex: '1 1 100%',
      },
    },
  },
  cardReverse: {
    flexDirection: 'row-reverse',
    '& .card-product__media img': {
      borderRadius: theme.spacing(0, 0, 0, 20),
    },
  },
}));

const ArticleFeatured = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid item xs={12} key={index} data-aos="fade-up">
            <CardProduct
              withShadow
              liftUp
              className={clsx(
                classes.card,
                index % 2 !== 0 ? classes.cardReverse : {},
              )}
              mediaContent={<MediaContent {...item.cover} alt={item.title} />}
              cardContent={
                <Content
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

ArticleFeatured.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default ArticleFeatured;
