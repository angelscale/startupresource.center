import { buildSchema, EntityReference } from '@camberi/firecms';

import { navigation } from '../navigation';

const categories: { [index: string]: any } = {};

navigation.forEach((category: any) => {
  categories[category.slug] ||= new Map();
  category.subCategories.forEach((subcategory: any) => {
    categories[category.slug].set(subcategory.slug, subcategory.title);
  });
});

type CoreFour = {
  name: string;
  status: string;
  header_image: string;
  description: string;
  products: EntityReference[];
  category: string;
  subcategory: string;
  create_date: Date;
  publish_date: Date;
  updated_date: Date;
  views: number;
};

const CoreFourSchema = buildSchema<CoreFour>({
  name: 'CoreFour',
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
        previewAsTag: true,
        enumValues: {
          draft: 'Draft',
          review: 'Needs Review',
          revision: 'Needs Revision',
          published: 'Published',
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
    header_image: {
      title: 'Header Image',
      dataType: 'string',
      config: {
        storageMeta: {
          mediaType: 'image',
          storagePath: 'images/products/corefour',
          acceptedFiles: ['image/*'],
          metadata: {
            cacheControl: 'max-age=1000000',
          },
        },
      },
    },
    description: {
      title: 'Description',
      dataType: 'string',
      config: {
        markdown: true,
      },
    },
    products: {
      title: 'Products',
      dataType: 'array',
      of: {
        dataType: 'reference',
        path: 'products',
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

export default CoreFourSchema;
