import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#2b8a9d`,
    }}
  >
    <div
      style={{
        padding: `10px`,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          lineHeight: 1
        }}
      >
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
      {/* <div>
          <Link><img className="header-icon" src={HomeIcon} alt="Home button" /></Link>
          <img className="header-icon" src={ReloadIcon} alt="Refresh button" />
      </div> */}
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
