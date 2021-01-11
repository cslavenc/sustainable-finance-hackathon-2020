module.exports = {
  siteMetadata: {
    title: `Hackathon fun project november 20`,
    description: `Hackathon fun project november 20`,
    author: `@cslavenc, @elsiga, @Luc-AI, @gampo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: { dbName: `hackathon-sfh20`, collection: [`companyMockData`] },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // and also: gatsby-plugin-manifest (check out Web App Manifest)
  ],
}
