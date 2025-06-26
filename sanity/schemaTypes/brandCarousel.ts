import { defineField, defineType } from 'sanity'

export const brandCarousel = defineType({
  name: 'brandCarousel',
  title: 'Brand Carousel',
  type: 'document',
  fields: [
    defineField({
      name: 'introText',
      title: 'Texto introductorio',
      type: 'localeString',
    }),
    defineField({
      name: 'brands',
      title: 'Marcas',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'brand',
          fields: [
            defineField({ name: 'logo', title: 'Logo', type: 'image' }),
            defineField({ name: 'alt', title: 'Texto alternativo', type: 'string' }),
            defineField({ name: 'href', title: 'Enlace (opcional)', type: 'url' }),
            defineField({ name: 'height', title: 'Alto (opcional)', type: 'number' }),
          ],
        },
      ],
    }),
  ],
})