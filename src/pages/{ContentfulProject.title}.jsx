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
import slugify from "slugify"
import Head from "../components/Head"

const ProjectTemplate = ({ data: { contentfulProject: project } }) => {
  const {
    content,
    title,
    langsFrames = ["HTML5"],
    projectImage,
    tags,
  } = project

  console.log(content, "contentssss")
  const { inDepth, descPara } = content
  const pathToImage = getImage(projectImage)

  return (
    <Layout>
      <Head title={title} />
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
              <p>{descPara} </p>
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
                  const slug = slugify(tag, { lower: true })

                  return (
                    <Link to={`/tags/${slug}`} key={index}>
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
