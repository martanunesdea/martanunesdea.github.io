import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  font-size: 12px;
  margin: 5vh 5vw;
  border-top: 1px solid black;
  text-align: center;
`

const Footer = ({ })=> {
  return (
    <StyledFooter>
      Copyright © {new Date().getFullYear()}, Made by Marta.
    </StyledFooter>
  )
}

export default Footer
