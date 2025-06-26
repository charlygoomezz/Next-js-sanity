import { defineField, defineType } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
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
    defineField({
      name: 'ctaPrimaryText',
      title: 'Texto del botón principal',
      type: 'localeString',
    }),
    defineField({
      name: 'ctaPrimaryLink',
      title: 'Enlace del botón principal',
      type: 'url',
    }),
    defineField({
      name: 'ctaSecondaryText',
      title: 'Texto del botón secundario',
      type: 'localeString',
    }),
    defineField({
      name: 'ctaSecondaryLink',
      title: 'Enlace del botón secundario',
      type: 'url',
    }),
  ],
})