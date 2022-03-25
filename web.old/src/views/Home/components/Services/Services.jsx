import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from '@mui/material';

import SectionLabel from 'components/SectionLabel';

const useStyles = makeStyles((theme) => ({
  folioItem: {
    position: 'relative',
    overflow: 'hidden',
    boxShadow: `0 1.5rem 4rem rgba(22,28,45,.05)`,
    borderRadius: theme.spacing(2),
  },
  image: {
    objectFit: 'cover',
    height: 450,
  },
  folioInfoWrapper: {
    padding: theme.spacing(4),
  },
  folioTitle: {
    fontWeight: 'bold',
  },
  folioSubtitle: {
    textTransform: 'capitalize',
    margin: theme.spacing(1, 0),
  },
  folioIcon: {
    color: theme.palette.primary.main,
    paddingTop: theme.spacing(6),
    textAlign: 'center',
    '& svg': {
      fontSize: '3rem',
    },
  },
  gridContainer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0),
    },
  },
}));

const Services = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const gridData = data.slice(0, 4);

  return (
    <div>
      <SectionLabel
        align="center"
        title="Our Services"
        subtitle="Do pariatur velit eu incididunt pariatur non ullamco exercitation eu mollit veniam sint eiusmod."
      />
      <div className={className} {...rest}>
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
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Services;
