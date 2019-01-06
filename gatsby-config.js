module.exports = {
  siteMetadata: {
    title: `Familie Simons, Aachen`,
    description: `Homepage der Familie Simons aus Aachen.`,
    author: `Michael J. Simons`,
    authorTwitter: `@rotnroll666`
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }
  ]
}