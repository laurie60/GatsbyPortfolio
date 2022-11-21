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
  const {
    content,
    title,
    langsFrames = ["HTML5"],
    projectImage,
    tags,
  } = project

  console.log(content, "contentssss")
  const { inDepth } = content
  const pathToImage = getImage(projectImage)

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
              {langsFrames && (
                <div className="recipe-icons">
                  {langsFrames.map((language, index) => {
                    if (language === "CSS3")
                      return (
                        <article key={index}>
                          <SiCss3 />
                          <h5>CSS3</h5>
                        </article>
                      )
                    if (language === "HTML5")
                      return (
                        <article key={index}>
                          <SiHtml5 />
                          <h5>HTML5</h5>
                        </article>
                      )
                    if (language === "JavaScript")
                      return (
                        <article key={index}>
                          <SiJavascript />
                          <h5>JavaScript</h5>
                        </article>
                      )
                    if (language === "Gatsby")
                      return (
                        <article key={index}>
                          <SiGatsby />
                          <h5>Gatsby</h5>
                        </article>
                      )
                    if (language === "React")
                      return (
                        <article key={index}>
                          <SiReact />
                          <h5>React</h5>
                        </article>
                      )
                    if (language === "Express")
                      return (
                        <article key={index}>
                          <SiExpress />
                          <h5>Express</h5>
                        </article>
                      )
                  })}
                </div>
              )}
              <p className="recipe-tags">
                Tags :{" "}
                {tags.map((tag, index) => {
                  return (
                    <Link to={`/${tag}`} key={index}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>In depth</h4>
              {inDepth.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p> {item[0]}</p>
                    </header>
                    <p>{item[1]}</p>
                  </div>
                )
              })}
            </article>
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
      tags
      projectImage {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
      content {
        inDepth
      }
    }
  }
`

export default ProjectTemplate
