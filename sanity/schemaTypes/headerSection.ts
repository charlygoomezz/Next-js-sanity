import { defineField, defineType } from 'sanity'

export const headerSection = defineType({
  name: 'headerSection',
  title: 'Header Section',
  type: 'document',
  fields: [
    defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    defineField({
      name: 'menuItems',
      title: 'Ítems del menú',
      type: 'array',
      of: [
        {
          name: 'menuItem',
          title: 'Menu Item',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Etiqueta',
              type: 'localeString',
            },
            {
              name: 'href',
              title: 'Enlace',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'loginText',
      title: 'Texto del botón Login',
      type: 'localeString',
    }),
    defineField({
      name: 'signupText',
      title: 'Texto del botón Sign Up',
      type: 'localeString',
    }),
  ],
})