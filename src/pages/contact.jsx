import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"

const Contact = ({
  data: {
    allContentfulProject: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article>
            {" "}
            <h3>Want to get in touch?</h3>
            <p>
              I'm baby try-hard crucifix semiotics keytar intelligentsia
              everyday carry. Pork belly poutine mlkshk church-key bushwick air
              plant banh mi iceland readymade twee pok pok. Fit Brooklyn pug,
              knausgaard fanny pack meditation farm-to-table irony big mood
              subway tile chicharrones. Succulents yuccie authentic yr.
              Gochujang kogi unicorn, stumptown distillery man bun viral man
              braid echo park keffiyeh. Cray subway tile iPhone single-origin
              coffee banjo. Cronut tumblr subway tile banjo la croix meh. Vice
              prism yuccie dreamcatcher meditation mumblecore gluten-free
              whatever cliche put a bird on it. Williamsburg umami wolf, cliche
              enamel pin lomo poutine +1 air plant yuccie fit roof party tofu
              mumblecore palo santo.
            </p>
            <p>
              Kinfolk green juice mumblecore ennui umami gochujang kogi put a
              bird on it praxis. Pop-up biodiesel vaporware affogato master
              cleanse, hot chicken banjo kickstarter portland venmo art party
              glossier big mood godard. Selvage copper mug lumbersexual,
              church-key fingerstache lo-fi twee beard four loko biodiesel
              disrupt aesthetic. Gochujang slow-carb scenester, portland
              meditation tacos umami pinterest gluten-free ethical man bun
              cold-pressed yuccie blog humblebrag. Normcore 90's green juice,
              hammock vice shabby chic mlkshk kogi bodega boys ethical semiotics
              ascot tumeric.
            </p>
            <p>
              I'm baby gatekeep prism mukbang intelligentsia raw denim twee.
              Ethical bodega boys bushwick gochujang affogato yr tilde echo park
              fanny pack ascot. Fam PBR&B banjo jean shorts trust fund, butcher
              squid plaid. Portland health goth DIY YOLO neutra post-ironic.
              Quinoa tote bag 90's glossier. Tote bag sus forage bespoke
              succulents. Snackwave occupy ennui meditation cliche.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <input type="text" name="message" id="message" />
              </div>
              <button type="submit" className="btn-block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipe">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList projects={projects} />
        </section>
      </main>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  {
    allContentfulProject(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        title
        id
        tags
        langsFrames
        projectImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
