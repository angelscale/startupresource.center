import React from 'react';

import { Grid } from '@mui/material';
import { ProductCard } from './components';
import { SectionHeader } from 'components/molecules';

const Products = ({ productList }) => {
  console.log(productList);
  return (
    <div>
      <SectionHeader title="Products" data-aos="fade-up" align="left" />
      <Grid container spacing={4}>
        {productList.map((item, i) => (
          <Grid item key={i} xs={12} data-aos="fade-up">
            <ProductCard data={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
