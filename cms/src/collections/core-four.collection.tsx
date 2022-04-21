import { buildCollection } from '@camberi/firecms';

import CoreFourSchema from '../schemas/core-four.schema';

const CoreFourCollection = buildCollection({
  path: 'corefour',
  schema: CoreFourSchema,
  name: 'Core Four',
  permissions: ({ authController }) => ({
    edit: true,
    create: true,
    delete: false,
  }),
  textSearchEnabled: true,
  defaultSize: 's',
  group: 'Pages',
});

export default CoreFourCollection;
