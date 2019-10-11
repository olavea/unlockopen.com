require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "UnlockOpen",
    author: "Tobie Langel",
    description:
      "UnlockOpen is a boutique consulting firm that helps organizations understand and leverage the value of contributing to open source.",
    siteUrl: "https://unlockopen.com/",
  },
  // pathPrefix: '/gatsby-starter-blog',
  plugins: [
    //    {
    //        resolve: 'gatsby-source-trello',
    //        options: {
    //          teamId: process.env.TRELLO_TEAM_ID,
    //          apiKey: process.env.TRELLO_API_KEY,
    //          secret: process.env.TRELLO_SECRET
    //        }
    //    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // // `gatsby-plugin-react-next`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/pages`,
    //     name: 'pages',
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 590,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-responsive-iframe`,
    //         options: {
    //           wrapperStyle: `margin-bottom: 1.0725rem`,
    //         },
    //       },
    //       'gatsby-remark-prismjs',
    //       'gatsby-remark-copy-linked-files',
    //       'gatsby-remark-smartypants',
    //     ],
    //   },
    // },

    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    // //    `gatsby-plugin-feed`,
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     workboxConfig: {
    //       importWorkboxFrom: `cdn`,
    //     },
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
  ],
}
