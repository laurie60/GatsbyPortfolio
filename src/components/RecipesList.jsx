import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import slugify from "slugify"

const RecipesList = ({ projects = [] }) => {
  return (
    <div className="recipes-list">
      {projects.map(project => {
        const { id, title, tags, languages, projectImage } = project
        const pathToImage = getImage(projectImage)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Languages: {languages} | Tags: {tags}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
