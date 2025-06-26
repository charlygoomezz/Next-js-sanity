import { defineField, defineType } from 'sanity'

export const featuresSection = defineType({
  name: 'featuresSection',
  title: 'Features Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'localeText',
    }),
    defineField({
      name: 'features',
      title: 'Características',
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
            { name: 'title', title: 'Título', type: 'localeString' },
            { name: 'description', title: 'Descripción', type: 'localeText' },
          ],
        },
      ],
    }),
  ],
})
