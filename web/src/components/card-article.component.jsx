import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import makeStyles from '@mui/styles/makeStyles';
import {
  Badge,
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from '@mui/material';
import { LearnMoreLink } from 'components';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  withShadow: {
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
  },
  noShadow: {
    boxShadow: 'none',
  },
  noBorder: {
    border: 0,
  },
  noBg: {
    background: 'transparent',
  },
  liftUp: {
    transition:
      'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      boxShadow:
        '0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important',
      transform: 'translate3d(0,-5px,0)',
    },
  },
  media: {
    position: 'relative',
    height: 300,
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 2),
    '&:last-child': {
      padding: theme.spacing(4, 2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 3),
      '&:last-child': {
        padding: theme.spacing(6, 3),
      },
    },
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  center: {
    alignItems: 'center',
  },
}));

const BlogMedia = styled(GatsbyImage)(({ theme }) => ({
  width: '100%',
  height: '100%',
  [`& img`]: {
    objectFit: 'cover',
    borderRadius: theme.spacing(0, 0, 20, 0),
  },
}));

const BlogContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 31,
    top: 13,
    padding: '0 4px',
  },
}));

/**
 * Component to display the product card
 *
 * @param {Object} props
 * @return {Object}
 */
const ArticleCard = (props) => {
  const {
    withShadow,
    noShadow,
    noBorder,
    noBg,
    liftUp,
    align,
    className,
    data,
    ...rest
  } = props;

  const classes = useStyles();

  const FeaturedCheck = ({ data, children }) =>
    data.status === 'featured' ? (
      <StyledBadge badgeContent="Featured" color="primary">
        {children}
      </StyledBadge>
    ) : (
      <>{children}</>
    );

  if (!data) {
    return null;
  }
  return (
    <FeaturedCheck data={data}>
      <Card
        className={clsx(
          'card-blog',
          classes.root,
          withShadow ? classes.withShadow : {},
          noShadow ? classes.noShadow : {},
          noBorder ? classes.noBorder : {},
          noBg ? classes.noBg : {},
          liftUp ? classes.liftUp : {},
          className,
        )}
        {...rest}
      >
        <CardMedia className={clsx('card-blog__media', classes.media)}>
          <Link to={`/${data.category}/${data.subcategory}/${data.slug}`}>
            <BlogMedia image={getImage(data.headerImage)} alt={data.name} />
          </Link>
        </CardMedia>
        <CardContent
          className={clsx(
            'card-blog__content',
            classes.content,
            classes[align],
          )}
        >
          <BlogContent>
            <Link to={`/${data.category}/${data.subcategory}/${data.slug}`}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {data.name}
              </Typography>
            </Link>
            <Typography variant="body1" color="textSecondary">
              {data.excerpt}
            </Typography>

            <LearnMoreLink
              title="Read More"
              to={`/${data.category}/${data.subcategory}/${data.slug}`}
              typographyProps={{ variant: 'h6' }}
            />
          </BlogContent>
        </CardContent>
      </Card>
    </FeaturedCheck>
  );
};

export default ArticleCard;
