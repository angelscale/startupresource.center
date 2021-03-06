import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from '@mui/material';

import { Image } from 'components/atoms';

const useStyles = makeStyles(() => ({
  fontWeight700: {
    fontWeight: 700,
  },
  image: {
    maxWidth: 100,
  },
}));

const Partners = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            color="textSecondary"
            align="center"
            className={classes.fontWeight700}
          >
            Our work has been featured in:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between">
            {data.map((partner, index) => (
              <Grid
                item
                container
                justifyContent="center"
                xs={6}
                sm={2}
                key={index}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  className={classes.image}
                  lazy={false}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Partners;
