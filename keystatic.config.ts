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
        author: fields.text({ label: 'Author' }),
        description: fields.text({ label: 'Description', multiline: true }),
        poster: fields.image({
          label: 'Poster Image',
          // Storing image in the same directory as the markdown file
          directory: 'src/content/insights/*/',
          publicPath: '',
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
