import React from "react"
import { Link } from "gatsby"
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

const ArticlesPage = () => (
  <Layout>
    <SEO title="Blog" />
    <CustomMain>
    <h1>Articles</h1>

    <CardDeck>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">#JavaScript #WebDesign</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">#IoT #MedTech</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">#IoT #SmartCities</small>
        </Card.Footer>
      </Card>
    </CardDeck>

    </CustomMain>
  </Layout>
)

export default ArticlesPage
