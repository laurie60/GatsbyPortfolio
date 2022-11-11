import { Link } from "gatsby"
import React from "react"
import setupTags from "../utils/setupTech"

const TagsList = ({ projects }) => {
  const newTags = setupTags(projects)

  return (
    <div className="tag-container">
      <h4>Projects</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
