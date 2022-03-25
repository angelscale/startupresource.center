import React from 'react';
import { Box, Typography } from '@mui/material';

const LaunchView = () => {
  return (
    <Box sx={{ height: 'calc(100vh - 311px)' }}>
      <Box sx={{ pt: 4 }}>
        <Typography variant="h5" component="h2">
          Launch View
        </Typography>
      </Box>
    </Box>
  );
};

export default LaunchView;
