import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"

const TagTemplate = ({ data, pageContext }) => {
  const projects = data.allContentfulProject.nodes
  console.log(projects)
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList projects={projects}></RecipesList>
        </div>
      </main>
      <div>
        <h2>tag template page</h2>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query ($tag: String) {
    allContentfulProject(
      sort: { fields: title, order: ASC }
      filter: { tags: { eq: $tag } }
    ) {
      nodes {
        tags
        title
        id
        projectImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default TagTemplate
