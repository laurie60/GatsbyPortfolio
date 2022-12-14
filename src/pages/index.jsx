import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import AllProjects from "../components/AllProjects"
import Head from "../components/Head"
import Layout from "../components/Layout"
import { HiOutlineArrowDown } from "react-icons/hi"

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
              <h4>
                <HiOutlineArrowDown />
                &nbsp;&nbsp; Take A Look!&nbsp;&nbsp;&nbsp;
                {/* <HiOutlineArrowDown /> */}
              </h4>
            </div>
          </div>
        </header>
        <AllProjects />
      </main>
    </Layout>
  )
}
