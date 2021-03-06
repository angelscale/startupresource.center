import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography, useMediaQuery } from '@mui/material';

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 700,
  },
}));

const Questions = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <Typography
            variant="h6"
            align="left"
            className={classes.title}
            gutterBottom
            color="textPrimary"
          >
            What is it about?
          </Typography>
          <Typography variant="subtitle1" align="left" color="textSecondary">
            Fill out our standardized application on our platform. Most
            applicants finish in under an hour.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <Typography
            variant="h6"
            align="left"
            className={classes.title}
            gutterBottom
            color="textPrimary"
          >
            Who is it for?
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="left">
            Fill out our standardized application on our platform. Most
            applicants finish in under an hour.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Questions.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Questions;
