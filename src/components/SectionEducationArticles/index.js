import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import EducationArticleCard from 'components/EducationArticleCard';
import { Typography } from '@material-ui/core';
import {
  Create,
  DeviceHub,
  FlightTakeoff,
  TrendingUp,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
  categoryTitle: {
    fontWeight: 700,
  },
  titleContainer: {
    marginBottom: theme.spacing(2),
    '& svg': {
      color: theme.palette.primary.main,
      marginRight: theme.spacing(1),
    },
  },
}));

const SectionEducationArticles = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6} lg={3} data-aos="fade-up">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.titleContainer}
          >
            <Create fontSize="large" />
            <Typography
              variant="h6"
              align="center"
              className={classes.categoryTitle}
            >
              Plan
            </Typography>
          </Box>
          {data
            .filter(({ category }) => category === 'Plan')
            .map((item, index) => (
              <EducationArticleCard key={index} data={item} />
            ))}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} data-aos="fade-up">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.titleContainer}
          >
            <FlightTakeoff fontSize="large" />
            <Typography
              variant="h6"
              align="center"
              className={classes.categoryTitle}
            >
              Launch
            </Typography>
          </Box>
          {data
            .filter(({ category }) => category === 'Launch')
            .map((item, index) => (
              <EducationArticleCard key={index} data={item} />
            ))}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} data-aos="fade-up">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.titleContainer}
          >
            <DeviceHub fontSize="large" />
            <Typography
              variant="h6"
              align="center"
              className={classes.categoryTitle}
            >
              Manage
            </Typography>
          </Box>
          {data
            .filter(({ category }) => category === 'Manage')
            .map((item, index) => (
              <EducationArticleCard key={index} data={item} />
            ))}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} data-aos="fade-up">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={classes.titleContainer}
          >
            <TrendingUp fontSize="large" />
            <Typography
              variant="h6"
              align="center"
              className={classes.categoryTitle}
            >
              Grow
            </Typography>
          </Box>
          {data
            .filter(({ category }) => category === 'Grow')
            .map((item, index) => (
              <EducationArticleCard key={index} data={item} />
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

SectionEducationArticles.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default SectionEducationArticles;
