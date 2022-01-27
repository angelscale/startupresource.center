import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ServiceCard from 'components/ServiceCard';
import { mockServices } from 'data/home/service-section';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0),
    },
  },
}));

const ServiceSectionView = () => {
  const classes = useStyles();
  const gridData = mockServices.slice(0, 4);

  return (
    <div>
      <Grid container spacing={4} className={classes.container}>
        {gridData.map(({ icon, subtitle, title }, index) => (
          <ServiceCard
            key={`service-card-${index}`}
            icon={icon}
            title={title}
            subtitle={subtitle}
          />
        ))}
      </Grid>
    </div>
  );
};

export default ServiceSectionView;
