module.exports = {
  projects: {
    app: {
      schema: 'schema.json',
      documents: ['src/**/*.{graphql,gql,js,ts,jsx,tsx}', 'src/graphql/fragments.graphql'],
      extensions: {
        endpoints: {
          default: {
            url: 'http://localhost:3001',
            headers: { Authorization: `Bearer ${' '}` },
          },
        },
      },
    },
  },
};
