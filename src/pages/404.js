import React from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"

const Error = () => {
  return (
    <Layout>
      <Head title={"Error"} />
      <main classname="error-page">
        <section>
          <h1>404</h1>
          <h3>page not found</h3>
        </section>
      </main>
    </Layout>
  )
}

export default Error
