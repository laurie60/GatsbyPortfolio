/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Laurence Morris-Moody",
    description: "MY portfolio and personal website",
    author: "Laurence Morris-Moody",
    person: { name: "harley", age: 23 },
    simpleData: ["item1", "item 2"],
    complexData: [
      { name: "Harley", age: 23 },
      { name: "Marley", age: 98 },
      { name: "Kamina", age: 30 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
