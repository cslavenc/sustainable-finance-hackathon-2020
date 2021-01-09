module.exports = {
  siteMetadata: {
    title: `Synaptor v3`,
    description: `Hackathon fun project november 20`,
    author: `@cslavenc, @elsiga, @Luc-AI, @gempo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: { dbName: `hackathon-sfh20`, collection: [`companyData`] },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // and also: gatsby-plugin-manifest (check out Web App Manifest)
  ],
}
