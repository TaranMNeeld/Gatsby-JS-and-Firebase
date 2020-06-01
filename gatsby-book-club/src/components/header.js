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
const HeaderWrapper = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Header = ({ siteTitle }) => {

  const { firebase, user } = useContext(FirebaseContext)

  const handleLogout = () => {
    localStorage.clear()
    firebase.logout().then(() => navigate('/login'))
  }

  return (
    <HeaderWrapper>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: 'flex'
        }}
      >
        <h1 style={{ margin: 0, flexGrow: 1 }}>
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
        <div style={{ margin: 'auto 0' }}>
          {user && user.email &&
            <div>
              <div>
                Hello, {user.username}
                <div style={{ textAlign: 'right' }}>
                  <LogoutLink onClick={handleLogout}>
                    Logout
              </LogoutLink>
                </div>
              </div>
            </div>
          }
          {!user &&
            <div>
              <Link to='/login' style={{color: 'white', textDecoration: 'none'}}>
                Login
              </Link>
              |
              <Link to='/register' style={{color: 'white', textDecoration: 'none'}}>
                Register
              </Link>
            </div>
          }
        </div>
      </div>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
