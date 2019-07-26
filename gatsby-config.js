module.exports = {
  siteMetadata: {
    title: `GATSBY Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: "solarlabel",
        accessToken:
          "MC5YVHE0ZXhFQUFDQUF5Y2Fn.Re-_ve-_ve-_vSA8Te-_ve-_vQ4lIu-_ve-_ve-_vTbvv70lbCZOJzgmfR5177-9XgshOg",
        path: "/", // (optional, default: /preview)
        previews: true, // (optional, default: false)
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
