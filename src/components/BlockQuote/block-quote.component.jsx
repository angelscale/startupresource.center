import React from 'react';
import { Typography, colors, makeStyles, Paper } from '@material-ui/core';

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
    fontStyle: 'italic',
  },
}));

const BlockQuote = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.root}>
      <Typography className={classes.content}>{children}</Typography>
    </Paper>
  );
};

export default BlockQuote;
