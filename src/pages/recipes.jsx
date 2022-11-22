import React from "react"
import AllRecipes from "../components/AllRecipes"
import Head from "../components/Head"
import Layout from "../components/Layout"

const Recipies = () => {
  return (
    <Layout>
      <Head title={"Projects"} />
      <main className="page">
        <h1>Hello From Recipies Page</h1>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipies
