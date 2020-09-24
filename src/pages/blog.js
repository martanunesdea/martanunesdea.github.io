import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.css';

import { Button, Collapse} from "react-bootstrap";
import { useState, useEffect } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


const CustomMain = styled.main`
  margin: 0 auto;
  max-width: 70vw;
`
const CleanLink = styled(props => <Link {...props} />)`
    color: black;
    text-decoration: none;
    box-shadow: none;
    :hover{
      text-decoration: underline;
      color: black;
    }
`

const ArticlesPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <CustomMain>
    <h1>Articles</h1>
    <CardDeck>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Card>
        <CleanLink to={node.fields.slug}>
        <Card.Body>
          <Card.Title>{node.frontmatter.title}</Card.Title>
          <Card.Text>
            {node.frontmatter.description}
          </Card.Text>
        </Card.Body>
        </CleanLink>
      </Card>
    ))}
    </CardDeck>

    </CustomMain>
  </Layout>
)

export default ArticlesPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date],
        order: DESC },
      filter: {
        frontmatter: {type: {eq: "blog"}}
      }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
