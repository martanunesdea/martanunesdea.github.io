import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.css';

import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { useState, useEffect } from 'react';
import "./layout.css"


const CustomHeader = styled.header`
    margin: 0 auto;
    padding-top: 2rem;
    margin-bottom: 3rem;
    text-align: center;
`

const Section = styled.div`
    padding: 1rem 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MenuOptions = styled.ul`
    margin: 0;
    margin-left: auto;
`

const IndividualMenuOption = styled.li`
    margin: 0;
    width: auto;
    list-style-type: none;
    display: block;
    padding: 0 1rem;
    color: black;
`

const CleanLink = styled(props => <Link {...props} />)`
    color: black;
    text-decoration: none;
`;

const CustomLink = styled(props => <Link {...props} />)`
    color: #008fb3;
    text-decoration: none;
    font-family: "Hind";
`;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

const Header = ({ siteTitle, menuLinks }) => (
  <CustomHeader>
  <Section>
      <MenuOptions>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-basic-button">
        More
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {menuLinks.map(link => (
              <Dropdown.Item>
              <CustomLink to={link.link}>
                {link.name}
              </CustomLink>
              </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      </MenuOptions>

  </Section>
    <div>
      <h1>
          {siteTitle}
      </h1>
    </div>
  </CustomHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
