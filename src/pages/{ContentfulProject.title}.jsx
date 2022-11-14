import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { Fragment } from "react"
import Layout from "../components/Layout"
import {
  SiReact,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiGatsby,
} from "react-icons/si"

const ProjectTemplate = ({ data: { contentfulProject: project } }) => {
  const { title, langsFrames = ["HTML5"], projectImage, technologies } = project

  const pathToImage = getImage(projectImage)
  console.log(langsFrames, "langsFrames")

  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>
                I'm baby shoreditch fashion axe asymmetrical umami +1.
                Sustainable PBR&B la croix you probably haven't heard of them
                snackwave. Master cleanse thundercats poke 90's, twee church-key
                yr vaporware. Blog woke church-key DSA, coloring book vaporware
                blue bottle vexillologist echo park polaroid venmo. Irony
                freegan bicycle rights echo park leggings +1 green juice art
                party vexillologist copper mug cornhole banh mi taxidermy offal.
              </p>
            </article>
            {langsFrames && (
              <div className="recipe-icons">
                {langsFrames.map((language, index) => {
                  if (language === "CSS3")
                    return (
                      <article>
                        <SiCss3 />
                        <h5>CSS3</h5>
                      </article>
                    )
                  if (language === "HTML5")
                    return (
                      <article>
                        <SiHtml5 />
                        <h5>HTML5</h5>
                      </article>
                    )
                  if (language === "JavaScript")
                    return (
                      <article>
                        <SiJavascript />
                        <h5>JavaScript</h5>
                      </article>
                    )
                  if (language === "Gatsby")
                    return (
                      <article>
                        <SiGatsby />
                        <h5>Gatsby</h5>
                      </article>
                    )
                  if (language === "React")
                    return (
                      <article>
                        <SiReact />
                        <h5>React</h5>
                      </article>
                    )
                  if (language === "Express")
                    return (
                      <article>
                        <SiExpress />
                        <h5>Express</h5>
                      </article>
                    )
                })}
              </div>
            )}
            <p className="recipe-tags">
              Technologies :{" "}
              {technologies.map((tech, index) => {
                return (
                  <Link to={`/${tech}`} key={index}>
                    {tech}
                  </Link>
                )
              })}
            </p>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($title: String) {
    contentfulProject(title: { eq: $title }) {
      title
      langsFrames
      technologies
      projectImage {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
  }
`

export default ProjectTemplate
