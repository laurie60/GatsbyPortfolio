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
            <h2>Hello</h2>

            <p>
              I am a coder who has recently completed a software engineering
              course at{" "}
              <a href="https://northcoders.com/our-courses/coding-bootcamp">
                Northcoders
              </a>{" "}
              which is an industry leading TechEd provider based in Manchester.
              Since completing the course I have created various projects which
              you can find out more about on this website. I have also started
              to contribute to open source projects via GitHub, including to{" "}
              <a href="https://thecodingtrain.com">the Coding Train website</a>{" "}
              .
            </p>
            <a href="https://github.com/laurie60" className="btn">
              My GitHub
            </a>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Matisse Still Life"
            className="about-img"
            placeholder="tracedSVG"
          ></StaticImage>
        </section>
        <section className="featured-project">
          <h5>My Projects!</h5>
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
