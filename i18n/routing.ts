import {defineRouting} from 'next-intl/routing';

export const locales = ['en', 'es'];
export const defaultLocale = 'es';

export const routing = defineRouting({
  locales,
  defaultLocale
});