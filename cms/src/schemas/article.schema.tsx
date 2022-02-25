import {
  buildProperty,
  buildProperties,
  buildSchema,
  EntityReference,
} from '@camberi/firecms';

import { categories } from './data';

type Article = {
  status: string;
  category: {
    primary: string;
    secondary: string;
  };
  name: string;
  authors: EntityReference[];
  header_image: string;
  images: string[];
  content: string;
  create_date: Date;
  publish_date: Date;
  updated_date: Date;
  views: number;
};

const ArticleSchema = buildSchema<Article>({
  name: 'Article',
  properties: {
    status: {
      title: 'Status',
      dataType: 'string',
      config: {
        previewAsTag: false,
        enumValues: {
          draft: 'Draft',
          review: 'Needs Review',
          revision: 'Needs Revision',
          published: 'Published',
        },
      },
    },
    category: ({ values }) => {
      const properties = buildProperties<any>({
        primary: {
          title: 'Category',
          dataType: 'string',
          config: {
            previewAsTag: false,
            enumValues: {
              plan: 'Plan',
              launch: 'Launch',
              manage: 'Manage',
              grow: 'Grow',
            },
          },
        },
        secondary: {
          title: 'SubCategory',
          dataType: 'string',
          config: {
            previewAsTag: false,
          },
        },
      });
      if (values.category) {
        if ((values.category as any).primary === 'plan') {
          properties['secondary'] = buildProperty({
            title: 'SubCategory',
            dataType: 'string',
            config: {
              previewAsTag: false,
              enumValues: categories['plan'],
            },
          });
        } else if ((values.category as any).primary === 'launch') {
          properties['secondary'] = buildProperty({
            title: 'SubCategory',
            dataType: 'string',
            config: {
              previewAsTag: false,
              enumValues: categories['launch'],
            },
          });
        } else if ((values.category as any).primary === 'manage') {
          properties['secondary'] = buildProperty({
            title: 'SubCategory',
            dataType: 'string',
            config: {
              previewAsTag: false,
              enumValues: categories['manage'],
            },
          });
        } else if ((values.category as any).primary === 'grow') {
          properties['secondary'] = buildProperty({
            title: 'SubCategory',
            dataType: 'string',
            config: {
              previewAsTag: false,
              enumValues: categories['grow'],
            },
          });
        }
      }
      return {
        dataType: 'map',
        title: 'category',
        properties: properties,
      };
    },
    name: {
      title: 'Name',
      validation: { required: true },
      dataType: 'string',
    },
    authors: {
      title: 'Authors',
      dataType: 'array',
      of: {
        dataType: 'reference',
        path: 'people',
      },
    },
    header_image: {
      title: 'Header Image',
      dataType: 'string',
      config: {
        storageMeta: {
          mediaType: 'image',
          storagePath: 'images/articles',
          acceptedFiles: ['image/*'],
          metadata: {
            cacheControl: 'max-age=1000000',
          },
        },
      },
    },
    images: {
      title: 'Images',
      dataType: 'array',
      of: buildProperty({
        dataType: 'string',
        config: {
          storageMeta: {
            mediaType: 'image',
            storagePath: 'images/articles',
            acceptedFiles: ['image/*'],
            metadata: {
              cacheControl: 'max-age=1000000',
            },
          },
        },
      }),
    },
    content: {
      title: 'Content',
      dataType: 'string',
      config: {
        markdown: true,
      },
    },
    create_date: {
      title: 'Created Date',
      dataType: 'timestamp',
      disabled: {
        hidden: true,
      },
    },
    publish_date: {
      title: 'Published Date',
      dataType: 'timestamp',
      disabled: {
        hidden: true,
      },
    },
    updated_date: {
      title: 'Edited Date',
      dataType: 'timestamp',
      disabled: {
        hidden: true,
      },
    },
    views: {
      title: 'Number of Views',
      dataType: 'number',
      readOnly: true,
    },
  },
  defaultValues: {
    status: 'draft',
    create_date: new Date(),
  },
});

export default ArticleSchema;
