module.exports = {
  siteMetadata: {
    title: `Matt's Portfolio`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: './src/images/favicon.png',
      },
    },
  ],
};
