import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import { Button } from '@mui/material';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  textWhite: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const Adidas = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={<span className={classes.textWhite}>ADIDAS</span>}
        titleVariant="h1"
        subtitle={
          <span className={classes.textWhite}>
            All Day I Dream About Sport
          </span>
        }
        ctaGroup={[
          <Button variant="outlined" color="secondary" size="large">
            See portfolio
          </Button>,
        ]}
        disableGutter
        data-aos="fade-up"
      />
    </div>
  );
};

Adidas.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Adidas;
