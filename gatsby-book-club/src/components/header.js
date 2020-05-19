import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { FirebaseContext } from './Firebase'
import styled from 'styled-components'

const LogoutLink = styled.span`

  color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Header = ({ siteTitle }) => {

  const { firebase, user } = useContext(FirebaseContext)

  const handleLogout = () => {
    firebase.logout().then(() => navigate('/login'))
  }

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: 'flex'
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          {user && user.email &&
            <div>
              <div>
                Hello, {user.email}
              </div>
              <LogoutLink onClick={handleLogout}>
                Logout
              </LogoutLink>
            </div>
          }
          {!user || !user.email && 
            <div>
              <Link to='/login'>
                Login
              </Link>
            </div>
          }
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
