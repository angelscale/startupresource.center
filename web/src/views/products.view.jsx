import React from 'react';

import { Products } from 'templates-tf/Products';
import { Section } from 'components/organisms';

// products
// import { products } from 'templates-tf/Products/data';

const ProductsView = ({ data }) => {
  return (
    <div>
      <Section>
        <Products productList={data} />
      </Section>
    </div>
  );
};

export default ProductsView;
