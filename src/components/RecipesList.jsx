import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const RecipesList = ({ projects = [] }) => {
  return (
    <div className="recipes-list">
      {projects.map(project => {
        const { id, title, technologies, languages, projectImage } = project
        const pathToImage = getImage(projectImage)
        return (
          <Link key={id} to={`/{title}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Languages: {languages} | Technologies: {technologies}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
