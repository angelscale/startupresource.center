import React from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'gatsby';
import makeStyles from '@mui/styles/makeStyles';

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
    textTransform: 'capitalize',
  },
  textGray: {
    color: '#718096',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Breadcrumb = ({ location }) => {
  const classes = useStyles();

  const crumbs = location.pathname.split('/').map((crumb) =>
    crumb.length > 1 ? (
      <Link
        key={crumb}
        to={location.pathname.slice(
          0,
          location.pathname.indexOf(crumb) + crumb.length,
        )}
      >
        <Typography className={classes.label}>
          {crumb.replace('-', ' ')}
        </Typography>
      </Link>
    ) : null,
  );

  return (
    <div role="presentation" className={classes.container}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">
          <Typography className={classes.label}>Home</Typography>
        </Link>
        {crumbs}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
