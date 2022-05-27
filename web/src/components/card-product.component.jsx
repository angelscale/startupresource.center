import React, { useEffect, useState, createElement, Fragment } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import clsx from 'clsx';

import rehypeReact from 'rehype-react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

// components
import { Grid, Button, Typography, Box, styled } from '@mui/material';

// assets
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// utils
import { extractProductContent } from 'utils/helpers';

const PREFIX = 'ProductCard';

const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  logoWrapper: `${PREFIX}-logoWrapper`,
  subTitle: `${PREFIX}-subTitle`,
  listWrapper: `${PREFIX}-listWrapper`,
  itemWrapper: `${PREFIX}-itemWrapper`,
  clamp1Line: `${PREFIX}-clamp1Line`,
  clamp3Line: `${PREFIX}-clamp3Line`,
  readMoreBtn: `${PREFIX}-readMoreBtn`,
};

const Root = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(4, 2, 0),
    height: '100%',
  },

  [`& .${classes.title}`]: {
    fontSize: '1rem',
    lineHeight: '1.25rem',
    fontWeight: '700',
    color: '#2d3748',
  },

  [`& .${classes.logoWrapper}`]: {
    height: '60px',
    width: '60px',
    borderRadius: '4px',
    padding: theme.spacing(1, 1, 1, 1),
    border: '1px solid rgba(0,0,0,0.05)',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      height: '80px',
      width: '80px',
      marginRight: theme.spacing(4),
      marginBottom: 0,
    },
  },

  [`& .${classes.subTitle}`]: {
    fontSize: '1.125rem',
    lineHeight: '1.125rem',
    fontWeight: '700',
  },

  [`& .${classes.listWrapper}`]: {
    listStyle: 'none',
    marginTop: '.75rem',
  },

  [`& .${classes.itemWrapper}`]: {
    display: 'flex',
    alignItems: 'flex-start',

    '& span': {
      fontSize: '.875rem',
      lineHeight: '1.25rem',
      marginRight: '8px',
      fontWeight: '600',
    },

    '& svg': {
      '&:last-child': {
        width: '16px',
        height: '16px',
        color: '#4051B5',
      },
    },
  },

  [`& .${classes.clamp3Line}`]: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': '3',
    '-webkit-box-orient': 'vertical',
  },

  [`& .${classes.clamp1Line}`]: {
    '-webkit-line-clamp': '1 !important',
  },

  [`& .${classes.readMoreBtn}`]: {
    display: 'block',
    maxWidth: 'fit-content',
    marginLeft: 'auto',
    marginBlock: 'auto 1rem',
  },
}));

const ProductCard = ({ data }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (data) {
      unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(rehypeReact, {
          createElement,
          Fragment,
        })
        .process(data.description)
        .then((file) => {
          setContent(extractProductContent(file.result));
        });
    }
  }, [data]);

  if (!content) return null;

  const logo = getImage(data.logoImage);

  const features = content.features.filter((item) => item !== '\n');
  const prices = content.pricing.filter((item) => item !== '\n');

  return (
    <Root className={classes.root}>
      <Grid container alignItems="flex-start">
        <Grid item xs={8}>
          <Link
            to={`/${data.category}/${data.subcategory}/core-four/${data.slug}`}
          >
            <GatsbyImage
              image={logo}
              alt={data.name}
              className={classes.logoWrapper}
              objectFit="contain"
            />
            <Typography variant="h2" className={classes.title}>
              {data.name}
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={4}
          container
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Button
            variant="contained"
            startIcon={<LaunchIcon />}
            color="primary"
            size="small"
            component={'a'}
            href={data.affiliate_link}
            target="_blank"
          >
            Visit
          </Button>
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 2 }}>
        <Grid xs={12}>
          <Box>
            <Typography variant="h2" className={classes.subTitle}>
              Pricing
            </Typography>
            <ul className={classes.listWrapper} style={{ minHeight: '72px' }}>
              {prices.splice(0, 3).map((price, i) => (
                <li className={classes.itemWrapper}>
                  <ArrowRightIcon />
                  <span
                    className={clsx(classes.clamp3Line, {
                      [classes.clamp1Line]: prices.length > 1,
                    })}
                  >
                    {price}
                  </span>
                  {/* <CheckCircleOutlineIcon /> */}
                </li>
              ))}
            </ul>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h2" className={classes.subTitle}>
              Features
            </Typography>
            <ul className={classes.listWrapper}>
              {features.splice(0, 3).map((feature, i) => (
                <li key={i} className={classes.itemWrapper}>
                  <ArrowRightIcon />
                  <span
                    className={clsx(classes.clamp3Line, {
                      [classes.clamp1Line]: prices.length > 2,
                    })}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h2" className={classes.subTitle}>
          Best For
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '.875rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {content.bestFor}
        </Typography>
      </Box>

      <Button
        variant="text"
        color="primary"
        size="small"
        component={Link}
        href={`/${data.category}/${data.subcategory}/core-four/${data.slug}`}
        className={classes.readMoreBtn}
      >
        Read More
      </Button>
    </Root>
  );
};

export default ProductCard;
