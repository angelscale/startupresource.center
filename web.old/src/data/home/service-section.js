import React from 'react';
import {
  Create,
  DeviceHub,
  FlightTakeoff,
  TrendingUp,
} from '@mui/icons-material';

export const mockServices = [
  {
    icon: <Create />,
    title: 'Plan',
    subtitle:
      'Got an idea for a business, but don’t know where to start? In our Plan section, you’ll find everything you need to know to get your business off the ground.',
  },
  {
    icon: <FlightTakeoff />,
    title: 'Launch',
    subtitle:
      'In our Launch hub, you’ll find everything you need to get your new business running, broken down into easy-to-navigate categories.',
  },
  {
    icon: <DeviceHub />,
    title: 'Manage',
    subtitle: 'Keep your business operating smoothly with our expert advice.',
  },
  {
    icon: <TrendingUp />,
    title: 'Grow',
    subtitle:
      'Building your business brand and market it for maximum growth with these tips. ',
  },
];
