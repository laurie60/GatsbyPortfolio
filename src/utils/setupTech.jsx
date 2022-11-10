const setupTags = projects => {
  const allTags = {}
  projects.forEach(project => {
    project.technologies.forEach((tag = []) => {
      allTags[tag] ? (allTags[tag] += 1) : (allTags[tag] = 1)
    })
  })

  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a //array destructiuring, getting the first ele of the array
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })

  return newTags
}

export default setupTags
