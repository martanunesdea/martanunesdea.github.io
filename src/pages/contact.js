import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.css';

import { Button, Collapse} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import { useState, useEffect, useContext } from 'react';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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


const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <CustomMain>
    <h1>Contact</h1>
    <p><a href="mailto:martanunesdea@icloud.com">Email me</a> for feedback and engagement opportunities</p>
    <p><a href="https://www.twitter.com/martanunesdea">Follow me</a> on Twitter or <a href="https://www.linkedin.com/in/martanunesdea">connect with me</a> on Linkedin to keep in touch</p>
    <p>Drop me a comment below with your feedback! Thanks for reading along</p>
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Your name here" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment</Form.Label>
        <Form.Control as="textarea" rows={2} placeholder="Your comments here" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Optional" />
        <Form.Text className="text-muted">
        Your email will not be shared with anyone else.
    </Form.Text>
      <Form.Check type="checkbox" label="Contact me for a follow-up from my comments" />
      </Form.Group>
       <Button variant="primary" type="submit">
         Submit
       </Button>
    </Form>
    </CustomMain>
  </Layout>
)



export default ProjectsPage
