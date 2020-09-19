import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import "./layout.css"

const StyledFooter = styled.footer`
  font-size: 12px;
  margin: 7vh 5vw;
  border-top: 1px solid black;
  padding-top: 10px;
  text-align: center;
`

const CustomItem = styled.div`
  padding: 5px;
  display: inline;
`
const StyledLink = styled.a`
  color: black;
`

const Footer = ({ })=> {
  return (
    <StyledFooter>
    <CustomItem>
      <StyledLink href="https://github.com/martanunesdea">
        <FontAwesomeIcon icon={faGithub} size="2x"/>
      </StyledLink>
    </CustomItem>
    <CustomItem>
      <StyledLink href="https://twitter.com/martanunesdea">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </StyledLink>
    </CustomItem>
    <CustomItem>
      <StyledLink href="https://www.linkedin.com/in/martanunesdea/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </StyledLink>
    </CustomItem>
    <p>Copyright © {new Date().getFullYear()}</p>
    </StyledFooter>

  )
}

export default Footer
