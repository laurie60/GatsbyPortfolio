import { graphql } from "gatsby"
import React from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"
import ProjectsList from "../components/ProjectsList"

const TagTemplate = ({ data, pageContext }) => {
  const projects = data.allContentfulProject.nodes
  console.log(projects)
  return (
    <Layout>
      <Head title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-projects">
          <ProjectsList projects={projects} />
        </div>
      </main>
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
