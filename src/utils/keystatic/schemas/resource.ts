import { fields } from '@keystatic/core';

export default {
  title: fields.slug({
    name: {
      label: 'Name',
      description: 'Name of the resource.',
      validation: {
        length: {
          min: 1,
        },
      },
    },
    slug: {
      label: 'Slug',
      description: 'Unique slug for the resource. (/resource/slug)',
    },
  }),

  description: fields.text({
    label: 'Description',
    description: 'Description of the resource.',
    validation: {
      length: {
        min: 1,
      },
    },
  }),

  icon: fields.image({
    label: 'Icon',
    description: 'Icon of the resource.',
    directory: 'public/images/resources',
    publicPath: '/images/resources',
  }),

  link: fields.url({
    label: 'Link',
    description: 'URL of the resource.',
    validation: {
      isRequired: true,
    },
  }),

  color: fields.text({
    label: 'Color',
    description: 'HEX color of the resource.',
    validation: {
      isRequired: true,
    },
  }),

  contributors: fields.array(
    fields.object({
      contributor: fields.relationship({
        label: 'Contributor',
        description: 'Add a contributor that you think fits this resource.',
        collection: 'contributors',
        validation: {
          isRequired: true,
        },
      }),
      role: fields.text({
        label: 'Role',
        description: 'Role of the contributor.',
        validation: {
          length: {
            min: 1,
          },
        },
      }),
      maintainer: fields.checkbox({
        label: 'Maintainer',
        description: 'Is this contributor a maintainer?',
      }),
    }),
    {
      label: 'Contributors',
      description: 'Contributors of the resource.',
      itemLabel: (props) => props.fields.contributor.value ?? 'Unknown contributor',
    }
  ),

  tags: fields.array(
    fields.text({
      label: 'Tag',
      description: 'Add a tag that you think fits this resource.',
      validation: {
        length: {
          min: 1,
        },
      },
    }),

    {
      label: 'Tags',
      description: 'Tags that this resource should have.',
      itemLabel: (props) => props.value,
    }
  ),
};
