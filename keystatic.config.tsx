import { config } from '@keystatic/core';

import collections from '@lib/keystatic/collections';

export default config({
  storage: {
    kind: 'github',
    repo: 'solelychloe/parallel.report',
  },

  ui: {
    brand: {
      name: 'parallel.report',
      mark: () => {
        return (
          <img
            src="https://destinyemblemcollector.b-cdn.net/60f95f3d9155c9bc9b4f1667f759033d.png"
            alt="The Parallel Program emblem icon."
            height={24}
          />
        );
      },
    },
  },

  collections,
});
