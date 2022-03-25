import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';

import {
  Create,
  DeviceHub,
  FlightTakeoff,
  TrendingUp,
} from '@mui/icons-material';

import SectionLabel from 'components/SectionLabel';
import CategoryCard from './CategoryCard';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(0, 2),
    padding: theme.spacing(1, 0, 4, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(0),
    },
  },
  root: {
    [theme.breakpoints.down('lg')]: {
      margin: '0 auto',
    },
  },
}));

const Categories = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <SectionLabel
          title="Courses by Categories"
          subtitle="Id cupidatat incididunt exercitation deserunt ipsum dolor non."
        />
      </div>
      <div className={classes.container}>
        <div className={clsx(classes.root, className)} {...rest}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6} lg={3} data-aos="fade-up">
              <CategoryCard
                category="Plan"
                data={data}
                icon={<Create fontSize="large" />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} data-aos="fade-up">
              <CategoryCard
                category="Launch"
                data={data}
                icon={<FlightTakeoff fontSize="large" />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} data-aos="fade-up">
              <CategoryCard
                category="Manage"
                data={data}
                icon={<DeviceHub fontSize="large" />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} data-aos="fade-up">
              <CategoryCard
                category="Grow"
                data={data}
                icon={<TrendingUp fontSize="large" />}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

Categories.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Categories;
