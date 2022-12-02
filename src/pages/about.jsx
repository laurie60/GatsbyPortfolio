import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"
import ProjectsList from "../components/ProjectsList"

const about = ({
  data: {
    allContentfulProject: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <Head title={"About"} description={"About Page"} />

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
        <section className="featured-project">
          <h5>Look at this Awesomesouce!</h5>
          <ProjectsList projects={projects} />
        </section>
      </main>
    </Layout>
  )
}

export default about

export const query = graphql`
  {
    allContentfulProject(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        type
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
