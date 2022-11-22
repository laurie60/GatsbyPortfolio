import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Head = ({ title, description }) => {
  return (
    <>
      <meta description={description} charSet="utf-8" />
      <htmlAttributes></htmlAttributes>
      <title>{title}</title>
    </>
  )
}

export default Head
