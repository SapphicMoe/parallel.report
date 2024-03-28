import { fields } from '@keystatic/core';

export default {
  name: fields.text({
    label: 'Name',
    description: 'Name of the contributor',
    validation: {
      length: {
        min: 1,
      },
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
