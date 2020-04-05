import React, { Component } from "react"

import Template from "../components/template"
class Index extends Component {

  renderPage = () => (
    <Template />
  )

  render() {
    return this.renderPage();
  }
}

export default Index
