import { graphql } from "gatsby"
import React from "react"

const Testing = ({ data }) => {
  return (
    <div>
      {console.log(data)}

      <h2>testing</h2>
    </div>
  )
}

export default Testing

export const data = graphql`
  {
    allContentfulProject(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        id
        tags
        langsFrames
        projectImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
