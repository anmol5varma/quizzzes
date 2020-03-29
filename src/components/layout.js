/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Particles from 'react-particles-js';

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Particles
        className="particle-js"
        height={"90%"}
        style={{
          position: 'absolute',
          top: 50,
        }}
        params={{
          particles: {
            color: {
              value: "#2b8a9d"
            },
            size: {
              value: "2"
            },
            number: {
              value: "150"
            },
            line_linked: {
              enable: {
                auto: true
              },
              distance: "150",
              color: "#2b8a9d",
              opacity: "0.4",
              width: "1"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
      <div className="background">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
