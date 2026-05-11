import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    insights: collection({
      label: 'Insights',
      slugField: 'title',
      path: 'src/content/insights/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishDate: fields.datetime({
          label: 'Publish Date & Time',
          description: 'Pick a future date and time to schedule this post.',
          defaultValue: { kind: 'now' },
        }),
        author: fields.text({ 
          label: 'Author',
          validation: { length: { min: 1 } }
        }),
        description: fields.text({ 
          label: 'Description', 
          multiline: true,
          validation: { length: { min: 1 } }
        }),
        poster: fields.image({
          label: 'Poster Image',
          publicPath: '',
          validation: { isRequired: true }
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: props => props.value
        }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
        }),
      },
    }),
  },
});
