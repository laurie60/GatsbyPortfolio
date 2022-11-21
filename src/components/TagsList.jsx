import { Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import setupTags from "../utils/setupTags"

const TagsList = ({ projects }) => {
  const newTags = setupTags(projects)

  return (
    <div className="tag-container">
      <h4>Projects</h4>
      <div className="tags-list">
        s
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
