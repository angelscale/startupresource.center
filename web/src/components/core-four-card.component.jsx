import React from 'react';
import ImageGallery from 'react-image-gallery';

import makeStyles from '@mui/styles/makeStyles';
import { Grid, Button, Typography, Box, styled } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

// [`& .${classes.img_wrapper}`]: {
//     height: '100px',
//     width: '100px',
//     borderRadius: '4px',
//     padding: theme.spacing(1, 1, 1, 1),
//     border: '1px solid rgba(0,0,0,0.05)',
//     marginBottom: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       height: '120px',
//       width: '120px',
//       marginRight: theme.spacing(4),
//       marginBottom: 0,
//     },
//   },

const Logo = styled(GatsbyImage)(({ theme }) => ({
  height: '60px',
  width: '60px',
  borderRadius: '4px',
  padding: theme.spacing(1, 1, 1, 1),
  border: '1px solid rgba(0,0,0,0.05)',
  marginBottom: theme.spacing(2),
  // objectFit: 'contain',
  [theme.breakpoints.up('sm')]: {
    height: '80px',
    width: '80px',
    marginRight: theme.spacing(4),
    marginBottom: 0,
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(4, 2),
  },
  title: {
    fontSize: '1rem',
    lineHeight: '1.25rem',
    fontWeight: '700',
  },
  subTitle: {
    fontSize: '1.125rem',
    lineHeight: '1.125rem',
    fontWeight: '700',
  },
  list: {
    listStyle: 'none',
    marginTop: '.75rem',
  },
  item: {
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
}));

const CoreFourCard = ({ data }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container alignItems="flex-start">
        <Grid item xs={6}>
          <a href={'#'} target="_blank">
            <Logo image={getImage(data.logoImage)} alt={data.name} />
          </a>
        </Grid>
        <Grid
          item
          xs={6}
          container
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Typography variant="h4" className={classes.name}>
            {data.name}
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <Box>
            <Typography variant="h2" className={classes.subTitle}>
              Pricing
            </Typography>
            {/* <ul className={classes.list}>
              <li className={classes.item}>
                <ArrowRightIcon /> <span>Free Trail</span>
                <CheckCircleOutlineIcon />
              </li>
              <li className={classes.item}>
                <ArrowRightIcon /> <span>Free Version</span>
                <CheckCircleOutlineIcon />
              </li>
            </ul> */}
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h2" className={classes.subTitle}>
              Features
            </Typography>
            {/* <ul className={classes.list}>
              {data.content.offer.list.map((item, i) => (
                <li className={classes.item}>
                  <ArrowRightIcon /> <span>{item}</span>
                </li>
              ))}
            </ul> */}
          </Box>
        </Grid>
        {/* <Grid xs={6}>
          <ImageGallery
            items={data.gallery}
            showNav={false}
            showPlayButton={false}
          />
        </Grid> */}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          atque.
        </Typography>
      </Box>
    </Box>
  );
};

export default CoreFourCard;
