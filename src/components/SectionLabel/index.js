import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  sectionLabel: {
    margin: theme.spacing(8, 0, 2, 0),
  },
  sectionLabelTitle: {
    fontWeight: 700,
  },
}));

const SectionLabel = ({ align = 'left', title, subtitle }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.sectionLabel}>
        <Typography
          variant={'h6'}
          gutterBottom
          className={classes.sectionLabelTitle}
          align={align}
        >
          {title}
        </Typography>
        <Typography color="textSecondary" align={align}>{subtitle}</Typography>
      </Box>
    </>
  );
};

export default SectionLabel;
