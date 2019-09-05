import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#666666`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        justifyItems: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#87C533`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3>
        <a
          href="https://drive.google.com/file/d/0B1cW-VByifadUTVPU2J0d3hoRWFPa1luakZVUTU5Z3IyZXRV/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="asset"
        >
          Resume
        </a>

        <a
          href="https://www.linkedin.com/in/d-v-dlee/"
          target="_blank"
          rel="noopener noreferrer"
          className="asset"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/d-v-dlee"
          target="_blank"
          rel="noopener noreferrer"
          className="asset"
          // style={{
          //   color: `#85B445`,
          //   textDecoration: `none`,
          // }}
        >
          GitHub
        </a>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
