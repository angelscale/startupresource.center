import { buildCollection } from '@camberi/firecms';

import { ArticleSchema } from '../schemas/article.schema';

// const articleCallbacks = buildEntityCallbacks({
//   onPreSave: (props: EntityOnSaveProps<Article>) => {
//     console.log('onPreSave', props);
//     return props;
//   },

//   onSaveSuccess: (props: EntityOnSaveProps<Article>) => {
//     console.log('onSaveSuccess', props);
//   },

//   onSaveFailure: (props: EntityOnSaveProps<Article>) => {
//     console.log('onSaveFailure', props);
//   },

//   onPreDelete: (props: EntityOnDeleteProps<Article>) => {
//     console.log('onPreDelete', props);
//   },

//   onDelete: (props: EntityOnDeleteProps<Article>) => {
//     console.log('onDelete', props);
//   },
// });

const ArticlesCollection = buildCollection({
  path: 'articles',
  schema: ArticleSchema,
  name: 'Articles',
  // callbacks: articleCallbacks,
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
