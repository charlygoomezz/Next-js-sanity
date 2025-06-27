import { defineField, defineType } from 'sanity'

export const aboutMantra = defineType({
  name: 'aboutMantra',
  title: 'About Mantra Section',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'localeString',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'localeString',
    }),
    defineField({
      name: 'items',
      title: 'Bloques de Mantra',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'iconImage',
              title: 'Icono personalizado (opcional)',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'title',
              title: 'Título',
              type: 'localeString',
            },
            {
              name: 'description',
              title: 'Descripción',
              type: 'localeText',
            },
          ],
        },
      ],
    }),
  ],
})