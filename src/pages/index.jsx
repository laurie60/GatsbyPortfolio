import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import AllProjects from "../components/AllProjects"
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
              <h1>Projects</h1>
              <h4>Take A Look!</h4>
            </div>
          </div>
        </header>
        <AllProjects />
      </main>
    </Layout>
  )
}
