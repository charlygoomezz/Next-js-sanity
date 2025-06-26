import { defineField, defineType } from 'sanity'

export const aboutHeroSection = defineType({
  name: 'aboutHeroSection',
  title: 'About Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título principal',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'localeText',
    }),
  ],
})