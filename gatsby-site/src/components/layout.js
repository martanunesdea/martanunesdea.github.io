/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const CustomMain = styled.main`
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: 0;
  font-family: "Hind";

  ul, li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  h4 {
    padding: 0;
    margin: 1vh 0;
    margin-top: 5vh;
  }

  h3 {
    padding: 0;
    margin: 10vh 0;
  }

`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks}  />
      <div>
        <CustomMain>{children}</CustomMain>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
