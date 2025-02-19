import { type Entry } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export interface Link {
  link: string;
  icon: `mdi:${string}`;
  text: string;
  alt?: string;
}

export interface Credits {
  name: string;
  link: string;
  reason: string;
}

export type Resource = Entry<(typeof keystaticConfig)['collections']['resources']>;

export interface ResourcesCollection {
  slug: string;
  entry: Resource;
}
