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
    site {
      info: siteMetadata {
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
        simpleData
      }
    }
  }
`
