import { defineField, defineType } from 'sanity'

export const aboutStory = defineType({
  name: 'aboutStory',
  title: 'About Story',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'localeString',
    }),
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
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Texto alternativo de la imagen',
      type: 'localeString',
    }),
  ],
})