module.exports = {
  pathPrefix: "/website",
  siteMetadata: {
    title: `Marta Nunes de Abreu`,
    description: `Hi, I'm Marta. A tech and business enthusiast, currently working as a full-time software engineer.`,
    author: `@gatsbyjs`,
    menuLinks:[
      {
         name:'Projects',
         link:'/projects'
      },
      {
         name:'Blog',
         link:'/blog'
      },
      {
        name: 'Contact',
        link: '/contact'
      },
    ],
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `ubuntu`,
            `hind`
        ],
        display: 'swap'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
