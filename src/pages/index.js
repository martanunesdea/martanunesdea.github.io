import React from "react"
import styled from "styled-components"

// other components
import Layout from "../components/layout"
import SEO from "../components/seo"

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Collapse} from "react-bootstrap";
import { useState, useEffect } from 'react';

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const CustomMain = styled.main`
  margin: 0 auto;
  max-width: 500px;
  padding: 0;
  text-align: center;
  h1 {
    padding: 0;
    margin: 10vh 0 2vh 0;
  }
  h3 {
    padding: 0;
    margin: 2vh 0 7vh 0;
  }
  h4 {
    padding: 0;
    margin: 0;
  }
  button {
    margin: 2vh 0;
  }
  ul, li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`

const CustomList = styled.div`
  margin: 0 auto;
  max-width: 400px;
  text-align: center;
`

function EmbeddedSystemsText() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="outline-dark"
      >
        <h4>Embedded Systems Experience</h4>
      </Button>
      <Collapse in={open}>
        <CustomList id="example-collapse-text">
          <ul>
            <li>Environments: Command line tools, Code Composer Studio, IAR Embedded Workbench</li>
            <li>Processors: ESP32, TI-CC2650, ARM Cortex M</li>
            <li>Protocols: Bluetooth Low Energy, WiFi, UART, SPI, I2C</li>
            <li>Operating systems: FreeRTOS, Bare-metal</li>
            <li>Standards: MISRA C 2004, ISO 13485 and ISO 14972</li>
          </ul>
        </CustomList>
      </Collapse>
    </>
  );
}

function SoftwareEngineeringText() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="outline-dark"
      >
        <h4>Software Engineering skills</h4>
      </Button>
      <Collapse in={open}>
        <CustomList id="example-collapse-text">
          <ul>
              <li>Languages: C++, Python, Go, Javascript</li>
              <li>Paradigms: Procedural programming, Object-oriented, Test-driven development</li>
              <li>Tools: MySQL, AWS, React, Docker, Enterprise Architect</li>
          </ul>
        </CustomList>
      </Collapse>
    </>
  );
}

function PersonalInterestsText() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="outline-dark"
        size="sm"
      >
        <h4>I don't only talk to machines!</h4>
      </Button>
      <Collapse in={open}>
        <CustomList id="example-collapse-text">
          <ul>
            <li>Fluent in Spanish and Portuguese</li>
            <li>Sailor, skiier and tennis aficionado</li>
            <li>Advocate for circular economics</li>
            <li>Avid reader and amateur writer</li>
          </ul>
        </CustomList>
      </Collapse>
    </>
  );
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CustomMain>
    <h1>Hi, I'm Marta.</h1>
    <h3>A software engineer with an interest in Internet of Things and data security.</h3>
    <EmbeddedSystemsText />
    <SoftwareEngineeringText />
    <PersonalInterestsText />
    </CustomMain>
  </Layout>
)

export default IndexPage
