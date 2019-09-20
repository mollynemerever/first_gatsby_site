import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>
      Data Scientist who enjoys wrangling the "truth" and delivering insights
      out of messy, noisy data. Intensely curious leader and team player with
      experience in healthcare, research, coaching, and startups.
    </p>
    <Link to="/page-2/">Projects</Link>
    <br />
    <Link to="/page-3/">Contact Me</Link>
  </Layout>
)

export default IndexPage
