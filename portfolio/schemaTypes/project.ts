import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Programming Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables UI for cropping and standardizing images
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'release',
      title: 'Release Date / Status',
      type: 'string',
      description: 'e.g., "2024" or "قريباً"',
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'release',
    },
  },
})
