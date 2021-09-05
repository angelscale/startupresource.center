import React from 'react';
import { Typography, colors, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(2),
    background: colors.blueGrey[100] + '40',
  },
  content: {
    fontWeight: 600,
    fontSize: '1.5rem',
  },
}));

const BlockQuote = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.content}>{children}</Typography>
    </div>
  );
};

export default BlockQuote;
