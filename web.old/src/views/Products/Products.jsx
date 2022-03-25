import React from 'react';

import { Grid } from '@mui/material';
import { ProductCard } from './components';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const Products = ({ data }) => {
  return (
    <Section>
      <SectionHeader title="Products" data-aos="fade-up" align="left" />
      <Grid container spacing={4}>
        {data.map((item, i) => (
          <Grid item key={i} xs={12} data-aos="fade-up">
            <ProductCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Products;
