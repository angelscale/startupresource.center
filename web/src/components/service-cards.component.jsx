import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Grid, Typography, styled } from '@mui/material';

const PREFIX = 'ServiceCards';

const classes = {
  folioItem: `${PREFIX}-folioItem`,
  image: `${PREFIX}-image`,
  folioInfoWrapper: `${PREFIX}-folioInfoWrapper`,
  folioTitle: `${PREFIX}-folioTitle`,
  folioSubtitle: `${PREFIX}-folioSubtitle`,
  folioIcon: `${PREFIX}-folioIcon`,
  gridContainer: `${PREFIX}-gridContainer`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.folioItem}`]: {
    position: 'relative',
    overflow: 'hidden',
    boxShadow: `0 1.5rem 4rem rgba(22,28,45,.05)`,
    borderRadius: theme.spacing(2),
  },

  [`& .${classes.image}`]: {
    objectFit: 'cover',
    height: 450,
  },

  [`& .${classes.folioInfoWrapper}`]: {
    padding: theme.spacing(4),
  },

  [`& .${classes.folioTitle}`]: {
    fontWeight: 'bold',
  },

  [`& .${classes.folioSubtitle}`]: {
    textTransform: 'capitalize',
    margin: theme.spacing(1, 0),
  },

  [`& .${classes.folioIcon}`]: {
    color: theme.palette.primary.main,
    paddingTop: theme.spacing(6),
    textAlign: 'center',
    '& svg': {
      fontSize: '3rem',
    },
  },

  [`& .${classes.gridContainer}`]: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0),
    },
  }
}));

const ServiceCards = (props) => {
  const { data, className, ...rest } = props;


  const gridData = data.slice(0, 4);

  return (
    <Root>
      <div className={clsx(classes.card, className)} {...rest}>
        <Grid container spacing={4} className={classes.gridContainer}>
          {gridData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={6} lg={3}>
              <div className={classes.folioItem} data-aos="fade-up">
                <div className={classes.folioIcon}>{item.icon}</div>
                <div
                  className={clsx(
                    'folio__info-wrapper',
                    classes.folioInfoWrapper,
                  )}
                >
                  <div>
                    <Typography
                      variant="h5"
                      className={classes.folioTitle}
                      color="textPrimary"
                      align="center"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.folioSubtitle}
                      color="textSecondary"
                      align="center"
                    >
                      {item.subtitle}
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Root>
  );
};

ServiceCards.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default ServiceCards;
