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

const CleanLink = styled(props => <Link {...props} />)`
    color: black;
    text-decoration: none;
`;

const CustomLink = styled(props => <Link {...props} />)`
    color: #008fb3;
    text-decoration: none;
`;


const Header = ({ siteTitle }) => (
  <CustomHeader>
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
