import React from 'react';
import { Box, Typography } from '@material-ui/core';

const GrowView = () => {
  return (
    <Box sx={{ height: 'calc(100vh - 311px)' }}>
      <Box sx={{ pt: 4 }}>
        <Typography variant="h5" component="h2">
          Grow View
        </Typography>
      </Box>
    </Box>
  );
};

export default GrowView;
