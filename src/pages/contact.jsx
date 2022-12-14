import { graphql } from "gatsby"
import React from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"
import ProjectsList from "../components/ProjectsList"

const Contact = ({
  data: {
    allContentfulProject: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <Head title={"Contact"} />

      <main className="page">
        <section className="contact-page">
          <article>
            {" "}
            <h3>Want to get in touch?</h3>
            <p>
              Please use the form on the right to send me email, alternatively
              please contact me via{" "}
              <a href="https://www.linkedin.com/in/laurence-morris-moody/">
                LinkedIn
              </a>
              .
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/maykkgwb"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                {/* <input type="text" name="message" id="message" /> */}
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn-block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-project">
          <h5>Check out these Projects!</h5>
          <ProjectsList projects={projects} />
        </section>
      </main>
    </Layout>
  )
}

export default Contact

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
