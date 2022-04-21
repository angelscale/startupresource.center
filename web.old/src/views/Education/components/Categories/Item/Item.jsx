import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
    transition:
      'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      boxShadow:
        '0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important',
      transform: 'translate3d(0,-5px,0)',
    },
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
  },
  title: {
    '& a': {
      color: theme.palette.text.primary,
    },
  },
  hours: {
    fontSize: '0.875rem',
    fontWeight: 600,
  },
  cost: {
    fontSize: '1.25rem',
    fontWeight: 900,
  },
}));

const Item = ({ data }) => {
  const { title, link, hours, cost } = data;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" align="left">
          <a href={link}>{title}</a>
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={3}
        >
          <Typography
            className={classes.hours}
            color="secondary"
          >{`${hours} hour${hours > 1 ? 's' : ''}`}</Typography>
          <Typography
            className={classes.cost}
            color="primary"
          >{`$${cost}`}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Item;
