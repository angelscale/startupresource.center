import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const PREFIX = 'SectionLabel';

const classes = {
  sectionLabel: `${PREFIX}-sectionLabel`,
  sectionLabelTitle: `${PREFIX}-sectionLabelTitle`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.sectionLabel}`]: {
    margin: theme.spacing(8, 0, 2, 0),
  },

  [`& .${classes.sectionLabelTitle}`]: {
    fontWeight: 700,
  },
}));

const SectionLabel = ({ align = 'left', title, subtitle }) => {
  return (
    <StyledBox className={classes.sectionLabel}>
      <Typography
        variant={'h6'}
        gutterBottom
        className={classes.sectionLabelTitle}
        align={align}
      >
        {title}
      </Typography>
      <Typography color="textSecondary" align={align}>
        {subtitle}
      </Typography>
    </StyledBox>
  );
};

export default SectionLabel;
