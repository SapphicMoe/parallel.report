import { fields } from '@keystatic/core';

export default {
  name: fields.slug({
    name: {
      label: 'Name',
      description: 'Name of the contributor',
      validation: {
        length: {
          min: 1,
        },
      },
    },
    slug: {
      label: 'Slug',
      description: 'Unique slug for the contributor. (/contributor/slug)',
    },
  }),

  link: fields.url({
    label: 'Link',
    description: 'URL of the contributor.',
    validation: {
      isRequired: true,
    },
  }),
};
