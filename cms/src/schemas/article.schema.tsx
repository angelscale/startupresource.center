import { buildProperty, buildSchema, EntityReference } from '@camberi/firecms';

import { navigation } from '../navigation';

const categories: { [index: string]: any } = {};

navigation.forEach((category: any) => {
  categories[category.slug] ||= new Map();
  category.subCategories.forEach((subcategory: any) => {
    categories[category.slug].set(subcategory.slug, subcategory.title);
  });
});

export type Article = {
  status: string;
  category: string;
  subcategory: string;
  name: string;
  slug: string;
  authors: EntityReference[];
  header_image: string;
  images: string[];
  title_tag: string;
  meta_description: string;
  content: string;
  excerpt: string;
  create_date: Date;
  publish_date: Date;
  updated_date: Date;
  views: number;
};

export const ArticleSchema = buildSchema<Article>({
  name: 'Article',
  properties: {
    name: {
      title: 'Name',
      validation: { required: true },
      dataType: 'string',
    },
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
          featured: 'Featured',
        },
      },
    },
    category: {
      title: 'Category',
      dataType: 'string',
      config: {
        previewAsTag: true,
        enumValues: {
          plan: 'Plan',
          launch: 'Launch',
          manage: 'Manage',
          grow: 'Grow',
        },
      },
    },
    subcategory: ({ values }) => ({
      title: 'SubCategory',
      dataType: 'string',
      config: {
        previewAsTag: true,
        enumValues: values.category
          ? Object.fromEntries(categories[values.category])
          : {},
      },
    }),
    slug: {
      title: 'Slug',
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
    header_image: ({ entityId }) => ({
      title: 'Header Image',
      dataType: 'string',
      config: {
        storageMeta: {
          mediaType: 'image',
          storagePath: `images/articles/${entityId}`,
          acceptedFiles: ['image/*'],
          metadata: {
            cacheControl: 'max-age=1000000',
          },
        },
      },
    }),
    images: ({ entityId }) => ({
      title: 'Images',
      dataType: 'array',
      of: buildProperty({
        dataType: 'string',
        config: {
          storageMeta: {
            mediaType: 'image',
            storagePath: `images/articles/${entityId}`,
            acceptedFiles: ['image/*'],
            metadata: {
              cacheControl: 'max-age=1000000',
            },
          },
        },
      }),
    }),
    content: {
      title: 'Content',
      dataType: 'string',
      config: {
        markdown: true,
      },
    },
    meta_description: {
      title: 'meta:description',
      dataType: 'string',
    },
    title_tag: {
      title: 'Title Tag',
      dataType: 'string',
    },
    excerpt: {
      title: 'Excerpt',
      dataType: 'string',
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
