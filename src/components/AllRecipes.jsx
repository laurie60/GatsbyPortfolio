import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"

const query = graphql`
  query {
    allContentfulProject {
      nodes {
        title
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

const AllRecipes = () => {
  const {
    allContentfulProject: { nodes: projects },
  } = useStaticQuery(query)
  console.log(projects)
  return (
    <section className="recipes-container">
      <TagsList projects={projects} />
      <RecipesList projects={projects} />
    </section>
  )
}

export default AllRecipes
