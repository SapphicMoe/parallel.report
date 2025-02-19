import { config } from '@keystatic/core';

import collections from '@utils/keystatic/collections';
import { IS_PRODUCTION } from '@utils/helpers';

export default config({
  storage: IS_PRODUCTION
    ? {
        kind: 'github',
        repo: 'SapphicMoe/parallel.report',
      }
    : { kind: 'local' },

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
