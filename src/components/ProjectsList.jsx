import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import slugify from "slugify"

const ProjectsList = ({ projects = [] }) => {
  return (
    <div className="projects-list">
      {projects.map(project => {
        const { id, title, tags, languages, projectImage, type } = project
        const pathToImage = getImage(projectImage)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="project">
            <GatsbyImage
              image={pathToImage}
              className="project-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>{type}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectsList
