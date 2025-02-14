import { collection } from '@keystatic/core';
import schema from '@lib/keystatic/schemas/resource';

export default collection({
  label: 'Resources',
  slugField: 'title',
  path: 'src/data/resources/*',
  schema,
  format: { data: 'json' },
  // previewUrl: '/article/{slug}',
});
