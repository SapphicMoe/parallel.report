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

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export type Resource = Writeable<Entry<(typeof keystaticConfig)['collections']['resources']>>;

export interface ResourcesCollection {
  slug: string;
  entry: Resource;
}
