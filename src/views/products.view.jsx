import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { Products } from 'templates-tf/Products';
import { Section } from 'components/organisms';

// products
import { products } from 'templates-tf/Products/data';

const ProductsView = () => {
  return (
    <div>
      <Section>
        <Products productList={products} />
      </Section>
    </div>
  );
};

export default ProductsView;
