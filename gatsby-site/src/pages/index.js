import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Hi, I'm Marta. A tech and business enthusiast currently working as a full-time software engineer.</h3>

    <h4>Embedded Systems experience</h4>
    <ul>
      <li>Environments: Command line tools, Code Composer Studio, IAR Embedded Workbench</li>
      <li>Processors: ESP32, TI-CC2650, ARM Cortex M</li>
      <li>Protocols: Bluetooth Low Energy, WiFi, UART, SPI, I2C</li>
      <li>Operating systems: FreeRTOS, Bare-metal</li>
      <li>Standards: MISRA C 2004, ISO 13485 and ISO 14972</li>
    </ul>
    <h4>Software Engineering skills</h4>
    <ul>
        <li>Languages: C++, Python, Go, Javascript</li>
        <li>Paradigms: Procedural programming, Object-oriented, Test-driven development</li>
        <li>Tools: MySQL, AWS, React, Docker, Enterprise Architect</li>
    </ul>
    <h4>I don't only talk to machines!</h4>
    <ul>
      <li>Fluent in Spanish and Portuguese</li>
      <li>Sailor, skiier and tennis aficionado</li>
      <li>Advocate for circular economics</li>
      <li>Avid reader and amateur writer</li>
    </ul>
    <br />

    <Link to="/page-2/">Projects</Link> <br />
    <Link to="/using-typescript/">Blog</Link> <br />
    <Link to="/">About</Link>

  </Layout>
)

export default IndexPage
