import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Passion Projects</h1>
    <p>Welcome to page 2</p>
    <table>
      <tr>
        <th>test 1</th>
        <th>test 2</th>
        <th>test 3</th>
      </tr>
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>
    </table>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
