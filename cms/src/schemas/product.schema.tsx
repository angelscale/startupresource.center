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
  meta_description: string;
  title_tag: string;
  slug: string;
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
    slug: {
      title: 'Slug',
      dataType: 'string',
    },
    logo: ({ entityId }) => ({
      title: 'Logo',
      dataType: 'string',
      config: {
        storageMeta: {
          mediaType: 'image',
          storagePath: `images/products/${entityId}`,
          acceptedFiles: ['image/*'],
          metadata: {
            cacheControl: 'max-age=1000000',
          },
        },
      },
    }),
    affiliate: {
      title: 'Affiliate?',
      dataType: 'boolean',
    },
    affiliate_link: {
      title: 'Affiliate Link',
      dataType: 'string',
    },
    images: ({ entityId }) => ({
      title: 'Images',
      dataType: 'array',
      of: buildProperty({
        dataType: 'string',
        config: {
          storageMeta: {
            mediaType: 'image',
            storagePath: `images/products/${entityId}`,
            acceptedFiles: ['image/*'],
            metadata: {
              cacheControl: 'max-age=1000000',
            },
          },
        },
      }),
    }),
    description: {
      title: 'Description',
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
