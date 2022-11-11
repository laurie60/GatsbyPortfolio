import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"

const about = ({
  data: {
    allContentfulProject: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>hello from about</h2>
            <p>I'm a babnveh couloring book pioke taxidermy</p>
            <p>hipster yah yah</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Matisse Still Life"
            className="about-img"
            placeholder="tracedSVG"
          ></StaticImage>
        </section>
        <section className="featured-recipe">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList projects={projects} />
        </section>
      </main>
    </Layout>
  )
}

export default about

export const query = graphql`
  {
    allContentfulProject(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        id
        technologies
        langsFrames
        projectImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
