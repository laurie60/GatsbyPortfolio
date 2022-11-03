import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"

const about = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>hello from about</h2>
            <p>I'm a babnveh couloring book pioke taxidermy</p>
            <p>hipster yah yah</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Matisse Still Life"
            className="about-img"
            placeholder="tracedSVG"
          ></StaticImage>
        </section>
        <h1>Hello From Aboiut Page</h1>
      </main>
    </Layout>
  )
}

export default about
