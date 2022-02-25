import { buildProperty, buildProperties, buildSchema } from '@camberi/firecms';

import { categories } from './data';

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
  category: {
    primary: string;
    secondary: string;
  };
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
    category: ({ values }) => {
      const properties = buildProperties<any>({
        primary: {
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
      });
      if (values.category) {
        if ((values.category as any).primary === 'plan') {
          properties['secondary'] = buildProperty({
            title: 'SubCategory',
            dataType: 'string',
            config: {
              previewAsTag: true,
              enumValues: categories['plan'],
            },
          });
        } else if ((values.category as any).primary === 'launch') {
          properties['secondary'] = buildProperty({
            title: 'SubCategory',
            dataType: 'string',
            config: {
              previewAsTag: true,
              enumValues: categories['launch'],
            },
          });
        } else if ((values.category as any).primary === 'manage') {
          properties['secondary'] = buildProperty({
            title: 'SubCategory',
            dataType: 'string',
            config: {
              previewAsTag: true,
              enumValues: categories['manage'],
            },
          });
        } else if ((values.category as any).primary === 'grow') {
          properties['secondary'] = buildProperty({
            title: 'SubCategory',
            dataType: 'string',
            config: {
              previewAsTag: true,
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
