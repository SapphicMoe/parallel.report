import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

const collections = reader.collections;

export { collections };
