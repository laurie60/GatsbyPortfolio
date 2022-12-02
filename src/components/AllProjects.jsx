import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ProjectsList from "./ProjectsList"
import TagsList from "./TagsList"

const query = graphql`
  query {
    allContentfulProject {
      nodes {
        title
        type
        id
        tags
        projectImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        langsFrames
      }
    }
  }
`

const AllProjects = () => {
  const {
    allContentfulProject: { nodes: projects },
  } = useStaticQuery(query)
  console.log(projects)
  return (
    <section className="projects-container">
      <TagsList projects={projects} />
      <ProjectsList projects={projects} />
    </section>
  )
}

export default AllProjects
