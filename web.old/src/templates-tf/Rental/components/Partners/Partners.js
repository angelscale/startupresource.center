import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import { Grid } from '@mui/material';
import { Image } from 'components/atoms';

const useStyles = makeStyles((theme) => ({
  promoLogo: {
    maxWidth: 120,
  },
}));

const Partners = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container justifyContent="space-between">
        {data.map((partner, index) => (
          <Grid
            item
            container
            justifyContent="center"
            xs={6}
            sm={2}
            key={index}
            data-aos="fade-up"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              className={classes.promoLogo}
              lazy={false}
            />
          </Grid>
        ))}
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
