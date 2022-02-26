import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Typography, Grid, Box, Button } from '@mui/material';
import { Image } from 'components/atoms';
import { Rating } from '@mui/material';
import { Link } from 'gatsby';
import clsx from 'clsx';

import scrollToElement from 'scroll-to-element';

import LaunchIcon from '@mui/icons-material/Launch';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fff',
    paddingTop: theme.spacing(2),
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
    [theme.breakpoints.up('sm')]: {
      position: 'sticky',
      top: 0,
      zIndex: 5,
    },
  },
  container: {
    margin: '0 auto',
    maxWidth: theme.layout.contentWidth,
  },
  content: {
    paddingInline: theme.spacing(2),
  },
  img_wrapper: {
    height: '100px',
    width: '100px',
    borderRadius: '4px',
    padding: theme.spacing(1, 1, 1, 1),
    border: '1px solid rgba(0,0,0,0.05)',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      height: '120px',
      width: '120px',
      marginRight: theme.spacing(4),
      marginBottom: 0,
    },
  },
  info_wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  },
  title: {
    fontSize: '1.75rem',
    lineHeight: '2.25rem',
    fontWeight: '700',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    justifyContent: 'center',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
      marginBottom: 0,
    },
  },
  link: {
    width: '100%',
    '& button': {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      '& button': {
        width: 'auto',
      },
    },
  },
  tab_wrapper: {
    padding: theme.spacing(2, 2, 0),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(3),
    listStyle: 'none',
    '& li': {
      '& a': {
        display: 'inline-block',
        color: theme.palette.text.primary,
        fontWeight: 600,
        paddingBottom: theme.spacing(2),
        borderBottom: '2px solid transparent',
        cursor: 'pointer',
        '&:hover': {
          borderBottomColor: theme.palette.primary.light,
        },
      },
    },
    [theme.breakpoints.up('sm')]: {
      gap: theme.spacing(4),
    },
  },
  active: {
    '& a': {
      borderBottomColor: theme.palette.primary.main + ' !important',
    },
  },
  sticky: {
    position: 'fixed',
    top: 0,
    zIndex: 5,
    background: '#fff',
    width: '100%',
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
  },
  placeholder: {
    height: '54.02px',
  },
}));

const Header = ({ data, location }) => {
  const classes = useStyles();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onScroll = () => {
    if (window.innerWidth < 600) {
      if (window.scrollY > 348) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  const isActive = (_hash) => {
    let current = 'overview';
    if (location.hash !== '')
      current = location.hash.substring(1, location.hash.length);

    return current === _hash;
  };

  const handleClick = (_id) => {
    scrollToElement(_id, {
      offset: -190,
      ease: 'inQuad',
      duration: 800,
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container className={classes.content} justifyContent="center">
          <Grid item xs={'auto'} className={classes.img_wrapper}>
            <Image
              src={data.imgPath}
              alt="card"
              lazyProps={{
                width: '100%',
                height: '100%',
              }}
            />
          </Grid>
          <Grid item xs={12} sm className={classes.info_wrapper}>
            <div>
              <Typography variant="h2" className={classes.title}>
                {data.title}
              </Typography>
              <Box className={classes.rating}>
                <Rating
                  name="read-only"
                  precision={0.5}
                  value={data.rating}
                  readOnly
                  size="small"
                />
                <Typography variant="body1">
                  <strong>{data.rating}</strong> / <span>5</span>
                </Typography>
              </Box>
            </div>
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <Button
                variant="outlined"
                startIcon={<LaunchIcon />}
                color="primary"
              >
                Visit Website
              </Button>
            </a>
          </Grid>
        </Grid>
        <ul
          className={clsx(classes.tab_wrapper, { [classes.sticky]: isSticky })}
        >
          <li className={clsx({ [classes.active]: isActive('overview') })}>
            <Link to={`#overview`} onClick={() => handleClick('#overview')}>
              Product Overview
            </Link>
          </li>
          <li className={clsx({ [classes.active]: isActive('about') })}>
            <Link to={`#about`} onClick={() => handleClick('#about')}>
              About
            </Link>
          </li>
          <li className={clsx({ [classes.active]: isActive('pricing') })}>
            <Link to={`#pricing`} onClick={() => handleClick('#pricing')}>
              Pricing
            </Link>
          </li>
          {/* <li className={clsx({ [classes.active]: isActive('test4') })}>
            <Link to="#test4">Review</Link>
          </li> */}
        </ul>
        {isSticky && <div className={classes.placeholder} />}
      </div>
    </div>
  );
};

export default Header;
