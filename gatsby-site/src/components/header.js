import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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
    display: flex;
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


const Header = ({ siteTitle, menuLinks }) => (
  <CustomHeader>
  <Section>
      <MenuOptions>
          {menuLinks.map(link => (
            <CustomLink to={link.link}>
              <IndividualMenuOption>
                {link.name}
              </IndividualMenuOption>
            </CustomLink>
          ))}
        </MenuOptions>
  </Section>
    <div>
      <h1>
        <CleanLink to="/">
          {siteTitle}
        </CleanLink>
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
