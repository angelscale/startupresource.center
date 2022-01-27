import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
