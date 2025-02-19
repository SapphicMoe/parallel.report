import { type Entry } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export interface Link {
  link: string;
  icon: `mdi:${string}`;
  text: string;
  alt?: string;
}

export type Resource = Entry<(typeof keystaticConfig)['collections']['resources']>;
