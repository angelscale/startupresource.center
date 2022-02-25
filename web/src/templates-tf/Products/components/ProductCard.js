import React from 'react';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Rating } from '@mui/material';
import { Image } from 'components/atoms';
import { Link } from 'gatsby';
import LaunchIcon from '@mui/icons-material/Launch';

const useStyles = makeStyles((theme) => ({
  product_card: {
    borderRadius: '4px',
    boxShadow: 'none',
    display: 'flex',
    gap: '0.5rem',
    [theme.breakpoints.up('sm')]: {
      gap: '1.5rem',
    },
  },
  card_img: {
    height: '60px',
    width: '60px',
    borderRadius: '4px',
    padding: theme.spacing(1, 1, 1, 1),
    border: '1px solid rgba(0,0,0,0.05)',
    flexShrink: '0',
    [theme.breakpoints.up('sm')]: {
      height: '80px',
      width: '80px',
    },
  },
  card_content: {
    padding: '4px 0px !important',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '.75rem',
    lineHeight: '1.25rem',
    fontWeight: '700',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  overview: {
    fontSize: '.75rem',
    lineHeight: '1.25rem',
    color: '#4b587c',
    maxWidth: '780px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
  footer: {
    marginTop: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  category_wrapper: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
  },
  label: {
    fontSize: '12px',
    lineHeight: '20px',
    color: '#4b587c',
  },
  icon_wrapper: {
    width: '42px',
    height: '52px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: '1px solid #d9e1ec',
    borderRadius: '4px',
    margin: theme.spacing(1, 1, 1, 1),
    transition: 'border-color .25s ease',
    flexShrink: '0',
    [theme.breakpoints.up('sm')]: {
      border: '1px solid #d9e1ec',
      background: '#fff',
    },
  },
}));

const ProductCard = ({ data }) => {
  const classes = useStyles();
  return (
    <Link to={`/product/${data.slug}`}>
      <Card className={clsx(classes.product_card, 'productCard-root')}>
        <CardMedia className={clsx(classes.card_img)}>
          <Image
            src={data.imgPath}
            alt="card"
            lazyProps={{
              width: '100%',
              height: '100%',
            }}
          />
        </CardMedia>
        <CardContent className={clsx(classes.card_content)}>
          <div>
            <Typography variant="h3" className={clsx(classes.title)}>
              {data.title}
            </Typography>
            <Typography
              variant="body1"
              className={clsx(classes.overview, 'productCard-overview')}
            >
              {data.tagLine}
            </Typography>
            <div className={clsx(classes.footer)}>
              <Rating
                name="read-only"
                precision={0.5}
                value={data.rating}
                readOnly
                size="small"
              />
              <div className={clsx(classes.category_wrapper)}>
                <Typography variant="body1" className={clsx(classes.label)}>
                  {data.option}
                </Typography>
                <span className={clsx('productCard-dot')}></span>
                <Link>
                  <Typography
                    variant="body1"
                    className={clsx(
                      classes.label,
                      'productCard-category__label',
                    )}
                  >
                    {data.category}
                  </Typography>
                </Link>
              </div>
            </div>
          </div>
          <a
            href={data.url}
            className={clsx(classes.icon_wrapper, 'productCard-link')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LaunchIcon />
          </a>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
