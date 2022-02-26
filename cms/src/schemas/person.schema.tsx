import { buildSchema } from '@camberi/firecms';

type Person = {
  name: string;
  image: string;
  bio: string;
  staff: boolean;
  member: boolean;
  email: string;
};

const PersonSchema = buildSchema<Person>({
  name: 'Person',
  properties: {
    name: {
      title: 'Name',
      validation: { required: true },
      dataType: 'string',
    },
    image: {
      title: 'Image',
      dataType: 'string',
      validation: {
        required: true,
      },
      config: {
        storageMeta: {
          mediaType: 'image',
          storagePath: 'images/people',
          acceptedFiles: ['image/*'],
          metadata: {
            cacheControl: 'max-age=1000000',
          },
        },
      },
    },
    bio: {
      title: 'Biography',
      dataType: 'string',
      config: {
        markdown: true,
      },
    },
    staff: {
      title: 'Staff?',
      dataType: 'boolean',
    },
    member: {
      title: 'Member?',
      dataType: 'boolean',
    },
    email: {
      title: 'Email Address',
      dataType: 'string',
    },
  },
});

export default PersonSchema;
