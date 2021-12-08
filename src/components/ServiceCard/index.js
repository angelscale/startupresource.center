import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.main,
    paddingTop: theme.spacing(6),
    textAlign: 'center',
    '& svg': {
      fontSize: '3rem',
    },
  },
  item: {
    position: 'relative',
    overflow: 'hidden',
    boxShadow: `0 1.5rem 4rem rgba(22,28,45,.05)`,
    borderRadius: theme.spacing(2),
  },
  subtitle: {
    textTransform: 'capitalize',
    margin: theme.spacing(1, 0),
  },
  title: {
    fontWeight: 'bold',
  },
  wrapper: {
    padding: theme.spacing(4),
  },
}));

const ServiceCard = ({ icon, title, subtitle }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <div className={classes.item} data-aos="fade-up">
        <div className={classes.icon}>{icon}</div>
        <div className={clsx('folio__info-wrapper', classes.wrapper)}>
          <div>
            <Typography
              variant="h5"
              className={classes.title}
              color="textPrimary"
              align="center"
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              className={classes.subtitle}
              color="textSecondary"
              align="center"
            >
              {subtitle}
            </Typography>
          </div>
        </div>
      </div>
    </Grid>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.element,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default ServiceCard;
