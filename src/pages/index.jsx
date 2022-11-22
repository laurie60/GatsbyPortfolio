import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import AllRecipes from "../components/AllRecipes"
import Head from "../components/Head"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <Head title={"Home Page"} />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/hero.jpeg"
            alt="matisse abstract"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
