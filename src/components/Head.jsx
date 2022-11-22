import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

const Head = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  return (
    <>
      <meta description={metaDescription} charSet="utf-8" />
      <htmlAttributes></htmlAttributes>
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
    </>
  )
}

export default Head
