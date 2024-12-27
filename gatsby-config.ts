import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `zuccaro-foundation-dot-org`,
    siteUrl: `https://zuccarofoundation.org`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // Only include trackingId if it exists
        trackingIds: process.env.GATSBY_GOOGLE_ANALYTICS_ID ? [process.env.GATSBY_GOOGLE_ANALYTICS_ID] : [],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};

export default config;
