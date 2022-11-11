import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
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
  const { title, langsFrames = [], projectImage, technologies } = project

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
            <div className="recipe-icons">
              <article>
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
                      </article>
                    )
                  if (language === "Gatsby") return <SiGatsby />
                  if (language === "React") return <SiReact />
                  if (language === "Express") return <SiExpress />
                })}
              </article>
            </div>
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
