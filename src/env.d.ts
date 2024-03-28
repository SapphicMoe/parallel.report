/// <reference path="../.astro/types.d.ts" />
/// <reference types='astro/client' />

declare module '*.txt' {
  export const plainText: string;
}
