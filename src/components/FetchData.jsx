import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const getData = graphql`
  query {
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

export default FetchData = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h2>title:{title}</h2>
      {/* <h2>name: {data.site.siteMetaData.person.name}</h2> */}
    </div>
  )
}
