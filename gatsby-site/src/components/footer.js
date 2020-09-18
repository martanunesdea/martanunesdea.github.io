import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const StyledFooter = styled.footer`
  font-size: 12px;
  margin: 5vh 5vw;
  border-top: 1px solid black;
  text-align: center;
`
const StyledLink = styled.a`
  color: black;
`

const Footer = ({ })=> {
  return (
    <StyledFooter>
    <StyledLink href="https://github.com/martanunesdea"><FontAwesomeIcon icon={faGithub} /></StyledLink>
    <StyledLink href="https://twitter.com/martanunesdea"><FontAwesomeIcon icon={faTwitter} /></StyledLink>
    <StyledLink href="https://www.linkedin.com/in/martanunesdea/"><FontAwesomeIcon icon={faLinkedin} /></StyledLink>
    <p>Copyright © {new Date().getFullYear()}</p>
    </StyledFooter>
  )
}

export default Footer
