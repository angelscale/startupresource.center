import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// components
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: '.875rem',
    lineHeight: '1.125rem',
    fontWeight: 400,
    letterSpacing: '0.4px',
    whiteSpace: 'pre-line',
  },
}));

const Text = ({ text, className }) => {
  const classes = useStyles();
  return (
    <Typography variant="body1" className={clsx(classes.text, className)}>
      {text}
    </Typography>
  );
};

export default Text;
