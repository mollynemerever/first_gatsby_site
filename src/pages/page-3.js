import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Me</h1>
    <p>Welcome to page 3</p>
    <form action="https://formspree.io/davidlee327@gmail.com" method="POST">
      <label>
        <input placeholder="Name" type="text" required="required" name="name" />
      </label>{" "}
      <br />
      <label>
        <input
          placeholder="Email"
          type="email"
          name="_replyto"
          required="required"
        />
      </label>
      <br />
      <label>
        <input
          placeholder="Message"
          type="text"
          required="required"
          name="message"
        />
      </label>
      <br />
      <button type="submit" value="Send">
        {" "}
        Send{" "}
      </button>
    </form>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
