import React from 'react';
import { Breadcrumbs, Typography, styled } from '@mui/material';
import { Link } from 'gatsby';
const PREFIX = 'Breadcrumb';

const classes = {
  container: `${PREFIX}-container`,
  label: `${PREFIX}-label`,
  textGray: `${PREFIX}-textGray`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.container}`]: {
    margin: '0 auto',
    maxWidth: theme.layout.contentWidth,
    padding: theme.spacing(2, 2, 0),
  },

  [`& .${classes.label}`]: {
    fontSize: '.875rem',
    lineHeight: 1.2,
    color: '#2d3748',
    '&:hover': {
      textDecoration: 'underline',
    },
    textTransform: 'capitalize',
  },

  [`& .${classes.textGray}`]: {
    color: '#718096',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Breadcrumb = ({ location }) => {
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
          {crumb.replaceAll('-', ' ')}
        </Typography>
      </Link>
    ) : null,
  );

  return (
    <Root role="presentation" className={classes.container}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">
          <Typography className={classes.label}>Home</Typography>
        </Link>
        {crumbs}
      </Breadcrumbs>
    </Root>
  );
};

export default Breadcrumb;
