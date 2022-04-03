import { buildProperty, buildSchema } from '@camberi/firecms';

import { navigation } from '../navigation';

const categories: { [index: string]: any } = {};

navigation.forEach((category: any) => {
  categories[category.slug] ||= new Map();
  category.subCategories.forEach((subcategory: any) => {
    categories[category.slug].set(subcategory.slug, subcategory.title);
  });
});

type Product = {
  name: string;
  logo: string;
  status: string;
  images: string[];
  description: string;
  product_features: string;
  differentiator: string;
  best_for: string;
  pricing: string;
  company_info: string;
  affiliate: boolean;
  affiliate_link: string;
  category: string;
  subcategory: string;
  create_date: Date;
  publish_date: Date;
  updated_date: Date;
  views: number;
};

const ProductSchema = buildSchema<Product>({
  name: 'Product',
  properties: {
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
    name: {
      title: 'Name',
      validation: { required: true },
      dataType: 'string',
    },
    logo: {
      title: 'Logo',
      dataType: 'string',
      config: {
        storageMeta: {
          mediaType: 'image',
          storagePath: 'images/products',
          acceptedFiles: ['image/*'],
          metadata: {
            cacheControl: 'max-age=1000000',
          },
        },
      },
    },
    affiliate: {
      title: 'Affiliate?',
      dataType: 'boolean',
    },
    affiliate_link: {
      title: 'Affiliate Link',
      dataType: 'string',
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
    description: {
      title: 'Description',
      dataType: 'string',
      config: {
        markdown: true,
      },
    },
    product_features: {
      title: 'Product Features',
      dataType: 'string',
      config: {
        markdown: true,
      },
    },
    differentiator: {
      title: 'What makes this unique?',
      dataType: 'string',
      config: {
        markdown: true,
      },
    },
    best_for: {
      title: 'Best Suited For',
      dataType: 'string',
      config: {
        markdown: true,
      },
    },
    pricing: {
      title: 'Pricing',
      dataType: 'string',
      config: {
        markdown: true,
      },
    },
    company_info: {
      title: 'Company Info',
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

export default ProductSchema;
