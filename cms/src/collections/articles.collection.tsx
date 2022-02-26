import { buildCollection } from '@camberi/firecms';

import ArticleSchema from '../schemas/article.schema';

const ArticlesCollection = buildCollection({
  path: 'articles',
  schema: ArticleSchema,
  name: 'Articles',
  permissions: ({ authController }) => ({
    edit: true,
    create: true,
    delete: false,
  }),
  textSearchEnabled: true,
  defaultSize: 's',
  group: 'Content',
});

export default ArticlesCollection;
