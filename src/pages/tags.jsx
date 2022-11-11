import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import setupTags from "../utils/setupTech"

const Tags = ({
  data: {
    allContentfulProject: { nodes: projects },
  },
}) => {
  const niceTags = setupTags(projects)
  console.log(niceTags)
  console.log(projects)
  return (
    <Layout>
      <div>
        <h1>Hello From Tags Page</h1>
        {niceTags.map(tag => {
          const [text, number] = tag
          return (
            <p>
              {text} ({number})
            </p>
          )
        })}
      </div>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query {
    allContentfulProject {
      nodes {
        technologies
      }
    }
  }
`
