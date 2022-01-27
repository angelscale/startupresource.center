import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Content from './Content';
import MediaContent from './MediaContent';
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
}));

const ArticleGrid = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

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
              mediaContent={<MediaContent {...item.cover} alt={item.title} />}
              cardContent={
                <Content
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

ArticleGrid.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default ArticleGrid;
