module.exports = {
  siteMetadata: {
    title: `Transformación digital para academias e instituciones`,
    description: `Desarrollamos plataformas y sistemas personalizados para adaptar la educación presencial a una modalidad online con foco en el aprendizaje.`,
    author: `@impulsados.cl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
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
        icon: `src/images/icons/impulsados.jpeg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Raleway:400,700", "Proxima Nova", "Avenir", "Anton"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-linkedin-insight`,
      options: {
        partnerId: `1735850`,

        // Include LinkedIn Insight in development.
        // Defaults to false meaning LinkedIn Insight will only be loaded in production.
        includeInDevelopment: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: `1067824506927216`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
