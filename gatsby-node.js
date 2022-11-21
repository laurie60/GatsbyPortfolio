const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetTags {
      allContentfulProject {
        nodes {
          tags
        }
      }
    }
  `)

  result.data.allContentfulProject.nodes.forEach(project => {
    project.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/template/tag-template.jsx`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
