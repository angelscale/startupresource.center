import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid, Button } from '@mui/material';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';

const Subscription = props => {
  const { className, ...rest } = props;

  return (
    <div className={className} {...rest}>
      <CardBase withShadow data-aos="fade-up">
        <SectionHeader
          title="Subscribe To Our Newsletter"
          subtitle="Don't lose a chance to be among the firsts to know about our upcoming news and updates."
          fadeUp
        />
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={9}>
            <TextField
              size="small"
              fullWidth
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button fullWidth variant="contained" color="primary" size="large">
              subscribe
            </Button>
          </Grid>
        </Grid>
      </CardBase>
    </div>
  );
};

Subscription.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Subscription;
