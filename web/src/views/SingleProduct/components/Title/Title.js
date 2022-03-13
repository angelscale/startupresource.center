import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

// components
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '1.125rem',
    lineHeight: '1.25rem',
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
}));

const Title = ({ text, className }) => {
  const classes = useStyles();
  return (
    <Typography variant="h2" className={clsx(classes.title, className)}>
      {text}
    </Typography>
  );
};

export default Title;
