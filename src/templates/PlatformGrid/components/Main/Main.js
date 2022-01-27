import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

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
  folioImage: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(6),
    height: '12.5rem',
    width: '12.rem',
    '& img': {
      width: '12.rem',
      objectFit: 'scale-down',
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

const Main = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4} className={classes.gridContainer}>
        {data &&
          data.map((item, index) => (
            <Grid key={index} item xs={12} sm={12} md={6} lg={6}>
              <div className={classes.folioItem} data-aos="fade-up">
                <div className={classes.folioIcon}>{item.icon}</div>
                <div
                  className={clsx(
                    'folio__info-wrapper',
                    classes.folioInfoWrapper,
                  )}
                >
                  <div>
                    <div className={classes.folioImage}>
                      <img src={item.logo} alt={item.title} />
                    </div>
                    <Typography
                      variant="h5"
                      className={classes.folioTitle}
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.folioSubtitle}
                      color="textSecondary"
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
  );
};

Main.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Main;
