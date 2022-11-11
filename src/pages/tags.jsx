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

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {niceTags.map((tag, index) => {
            const [text, number] = tag
            return (
              <Link to={`/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{number} project</p>
              </Link>
            )
          })}
        </section>
      </main>
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
