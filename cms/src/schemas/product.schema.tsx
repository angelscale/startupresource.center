import { buildProperty, buildSchema } from '@camberi/firecms';

const categories: { [index: string]: any } = {
  plan: new Map([
    ['research', 'Research'],
    ['business_funding', 'Business Funding'],
    ['legal', 'Legal'],
    ['accounting_and_finance', 'Accounting & Finance'],
    ['licensing_and_patents', 'Licensing & Patents'],
    ['business_consultants', 'Business Consultants'],
  ]),
  launch: new Map([
    ['business_planning', 'Business Planning'],
    ['create_your_brand', 'Create Your Brand'],
    ['product_packaging_and_design', 'Product Packaging & Design'],
    ['ecommerce_website', 'eCommerce Website'],
    ['website_development', 'Webiste Development'],
    ['networking', 'Networking'],
  ]),
  manage: new Map([
    ['staffing_and_hiring', 'Staffing & Hiring'],
    ['inventory_management', 'Inventory Management'],
    ['shipping', 'Shipping'],
    ['relationship_management', 'Relationship Management'],
    ['operating_software', 'Operating Software'],
  ]),
  grow: new Map([
    ['creative_and_design', 'Creative & Design'],
    ['digital_marketing', 'Digital Marketing'],
    ['influencer_and_affiliate_marketing', 'Influencer & Affiliate Marketing'],
    ['retail_and_event_marketing', 'Retail & Event Marketing'],
    ['ecommerce_and_online_markets', 'eCommerce & Online Markets'],
    ['website_management_and_seo', 'Website Management & SEO'],
  ]),
};

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
