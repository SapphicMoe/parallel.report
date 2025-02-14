import { collection } from '@keystatic/core';
import schema from '@lib/keystatic/schemas/contributor';

export default collection({
  label: 'Contributors',
  slugField: 'name',
  path: 'src/data/contributors/*',
  schema,
  format: { data: 'json' },
  // previewUrl: '/article/{slug}',
});
