import React from "react"
import setupTags from "../utils/setupTech"
const TagsList = ({ projects }) => {
  const newTags = setupTags(projects)
  console.log(newTags, "should be alpha")
  return <div>this is tagslist</div>
}

export default TagsList
