import { defineField, defineType } from 'sanity'

export const statsSection = defineType({
  name: 'statsSection',
  title: 'Stats Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'localeString',
    }),
    defineField({
      name: 'description',
      title: 'Descripcion',
      type: 'localeText',
    }),
    defineField({
      name: 'stats',
      title: 'Estadísticas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Valor', type: 'string' },
            { name: 'label', title: 'Etiqueta', type: 'localeString' },
          ],
        },
      ],
    }),
  ],
})