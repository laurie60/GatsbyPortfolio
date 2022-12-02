import React from "react"
import AllProjects from "../components/AllProjects"
import Head from "../components/Head"
import Layout from "../components/Layout"

const Recipies = () => {
  return (
    <Layout>
      <Head title={"Projects"} />
      <main className="page">
        <AllProjects />
      </main>
    </Layout>
  )
}

export default Recipies
