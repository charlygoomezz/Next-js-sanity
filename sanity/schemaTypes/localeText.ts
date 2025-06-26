import { defineField, defineType } from 'sanity'

export const localeText = defineType({
  name: 'localeText',
  title: 'Localized Text',
  type: 'object',
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
    }),
    defineField({
      name: 'es',
      title: 'Español',
      type: 'text',
    }),
  ],
})