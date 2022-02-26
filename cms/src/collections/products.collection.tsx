import { buildCollection } from '@camberi/firecms';

import ProductSchema from '../schemas/product.schema';

const ProductsCollection = buildCollection({
  path: 'products',
  schema: ProductSchema,
  name: 'Products',
  permissions: ({ authController }) => ({
    edit: true,
    create: true,
    delete: false,
  }),
  textSearchEnabled: true,
  defaultSize: 's',
  group: 'Content',
});

export default ProductsCollection;
