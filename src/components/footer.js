import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `#2b8a9d`,
      color: `#fff`,
      padding: `2px 10px`,
      textAlign: `center`
    }}
  >
    © {new Date().getFullYear()}, Built with Love &hearts;
  </footer>
)

export default Footer
