export default {
    type: 'object',
    name: 'heroText',
    title: 'Hero Text',
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading',
      },
      {
        name: 'tagline',
        type: 'string',
        title: 'Tagline',
      },
      {
          name: 'text',
          type: 'simplePortableText',
          title: 'Text'
      }
    ],
    preview: {
      select: {
        title: 'heading',
      },
      prepare({ title }) {
        return {
          title,
          subtitle: 'Hero Text'
        };
      },
    },
  };