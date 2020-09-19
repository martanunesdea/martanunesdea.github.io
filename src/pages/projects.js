import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.css';

import { Button, Collapse} from "react-bootstrap";
import { useState, useEffect, useContext } from 'react';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {Card, CardDeck, Accordion, AccordionContext, useAccordionToggle } from 'react-bootstrap'

const CustomMain = styled.main`
  margin: 0 auto;
  max-width: 70vw;
  text-align: left;

  h1 {
    text-align: center;
  }
  h5 {
    margin: 0;
    padding: 0;
  }
`

function Example() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
        <h5>Speech recordings with ESP32</h5>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
          <p>Used Espressif's popular chip ESP32 to record speech and transmit it through WiFi for further processing.</p>
          <Button variant="outline-info">Read more</Button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
        <h5>Password generator and manager</h5>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
          <p>Binary application that generates randomly generated passwords and connects to MySQL schema to store the passwords paired to a certain website account.</p>
          <Button variant="outline-info">Read more</Button>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <CustomMain>
    <h1>Projects Repository</h1>
    <Example />
    </CustomMain>
  </Layout>
)



export default ProjectsPage
