import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    display: 'block',
  },
}));

const SectionBox = ({ title, children, gutterBottom, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Box marginBottom={gutterBottom ? 4 : 0} className={className} {...rest}>
      <Typography variant="button" color="textSecondary" className={classes.title}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

SectionBox.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The content
   */
  children: PropTypes.node.isRequired,
  /**
   * Show bottom margin
   */
  gutterBottom: PropTypes.bool,
};

export default SectionBox;
