import React from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'gatsby';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0 auto',
    maxWidth: theme.layout.contentWidth,
    padding: theme.spacing(2, 2, 0),
  },
  label: {
    fontSize: '.875rem',
    lineHeight: 1.2,
    color: '#2d3748',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  textGray: {
    color: '#718096',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Breadcrumb = ({ title }) => {
  const classes = useStyles();

  return (
    <div role="presentation" className={classes.container}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">
          <Typography className={classes.label}>Home</Typography>
        </Link>
        <Link to="/products">
          <Typography className={classes.label}>Products</Typography>
        </Link>
        <Typography className={clsx(classes.label, classes.textGray)}>
          {title}
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
