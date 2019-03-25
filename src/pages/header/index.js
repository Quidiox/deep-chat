import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StyledHeader from '../../components/blocks/StyledHeader'

const Header = props => {
  const [navMenu, setNavMenu] = useState(false)
  const [userMenu, setUserMenu] = useState(false)

  const handleClick = type => e => {
    if (type === 'navMenu') {
      setNavMenu(!navMenu)
    } else {
      setUserMenu(!userMenu)
    }
  }

  const handleLinkClick = () => {
    setNavMenu(false)
    setUserMenu(false)
  }

  const menuItem = (path, text, icon) => (
    <StyledHeader.MenuItem>
      <StyledHeader.Link
        to={path}
        activeClassName="nav-link-active"
        onClick={handleLinkClick}
      >
        <FontAwesomeIcon icon={icon} />
        {text}
      </StyledHeader.Link>
    </StyledHeader.MenuItem>
  )

  return (
    <StyledHeader>
      <StyledHeader.DropDownContainer>
        {props.user.id ? (
          <div>
            <StyledHeader.MenuIcon onClick={handleClick('navMenu')}>
              <FontAwesomeIcon icon="bars" />
            </StyledHeader.MenuIcon>
            {navMenu && (
              <StyledHeader.DropDownMenu onClick={handleClick('navMenu')}>
                {menuItem('/home', 'Home', 'home')}
                {menuItem('/chat', 'Chat', 'comments')}
              </StyledHeader.DropDownMenu>
            )}
          </div>
        ) : (
          <StyledHeader.MenuIcon style={{ opacity: '0' }}>
            <FontAwesomeIcon icon="bars" />
          </StyledHeader.MenuIcon>
        )}
      </StyledHeader.DropDownContainer>
      <StyledHeader.Title>Deep Chat</StyledHeader.Title>
      <StyledHeader.DropDownContainer>
        <StyledHeader.MenuIcon onClick={handleClick('userMenu')}>
          <FontAwesomeIcon icon="user-circle" />
        </StyledHeader.MenuIcon>
        {userMenu && props.user.id ? (
          <StyledHeader.DropDownMenu onClick={handleClick('userMenu')} right>
            {menuItem('/logout', 'Logout', 'sign-out-alt')}
          </StyledHeader.DropDownMenu>
        ) : (
          userMenu && (
            <StyledHeader.DropDownMenu onClick={handleClick('userMenu')} right>
              {menuItem('/login', 'Login', 'sign-in-alt')}
              {menuItem('/register', 'Register', 'user-plus')}
              {menuItem('/', 'About', 'info-circle')}
            </StyledHeader.DropDownMenu>
          )
        )}
      </StyledHeader.DropDownContainer>
    </StyledHeader>
  )
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Header)
