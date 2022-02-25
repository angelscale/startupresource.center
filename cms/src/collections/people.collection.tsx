import { buildCollection } from '@camberi/firecms';

import PersonSchema from '../schemas/person.schema';

const PeopleCollection = buildCollection({
  path: 'people',
  schema: PersonSchema,
  name: 'People',
  permissions: ({ authController }) => ({
    edit: true,
    create: true,
    delete: false,
  }),
  textSearchEnabled: true,
  group: 'People',
});

export default PeopleCollection;
