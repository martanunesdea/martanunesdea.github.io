import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.css';

import { Button, Collapse} from "react-bootstrap";
import { useState, useEffect, useContext } from 'react';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {Card, CardDeck } from 'react-bootstrap'

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

const CustomCard = styled(Card)`
  margin-bottom: 10px;
`

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <CustomMain>
    <h1>Projects Repository</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <CustomCard>
        <Card.Body>
        <Card.Title>{node.frontmatter.title}</Card.Title>
          <Card.Text>
            {node.excerpt}
          </Card.Text>
        </Card.Body>
      </CustomCard>
      ))}

    </CustomMain>
  </Layout>
)



export default ProjectsPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          excerpt
        }
      }
    }
  }
`
