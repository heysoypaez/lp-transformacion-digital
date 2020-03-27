import React, { Component } from "react"
import Script from "react-load-script"

class CalendlyInline extends Component {
  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError() {
    this.setState({ scriptError: true })
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

  render() {
    return (
      <section className="CalendlyInline">
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/fabian-impulsados"
          style={{
            minWidth: "320px",
            height: "630px",
          }}
        ></div>
        <Script
          url="https://assets.calendly.com/assets/external/widget.js"
          onCreate={this.handleScriptCreate.bind(this)}
          onError={this.handleScriptError.bind(this)}
          onLoad={this.handleScriptLoad.bind(this)}
        />
      </section>
    )
  }
}

export default CalendlyInline
