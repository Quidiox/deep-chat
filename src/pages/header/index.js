import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StyledHeader from '../../components/blocks/StyledHeader'

class Header extends Component {
  state = { navMenu: false, userMenu: false }

  handleClick = type => e => {
    this.setState({ [type]: !this.state[type] })
  }

  handleLinkClick = () => {
    this.setState({ navMenu: false, userMenu: false })
  }

  menuItem = (path, text, icon) => (
    <StyledHeader.MenuItem>
      <StyledHeader.Link
        to={path}
        activeClassName="nav-link-active"
        onClick={this.handleLinkClick}
      >
        <FontAwesomeIcon icon={icon} />
        {text}
      </StyledHeader.Link>
    </StyledHeader.MenuItem>
  )

  render() {
    return (
      <StyledHeader>
        <StyledHeader.DropDownContainer>
          {this.props.user.id ? (
            <div>
              <StyledHeader.MenuIcon onClick={this.handleClick('navMenu')}>
                <FontAwesomeIcon icon="bars" />
              </StyledHeader.MenuIcon>
              {this.state.navMenu && (
                <StyledHeader.DropDownMenu
                  onClick={this.handleClick('navMenu')}
                >
                  {this.menuItem('/home', 'Home', 'home')}
                  {this.menuItem('/chat', 'Chat', 'comments')}
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
          <StyledHeader.MenuIcon onClick={this.handleClick('userMenu')}>
            <FontAwesomeIcon icon="user-circle" />
          </StyledHeader.MenuIcon>
          {this.state.userMenu && this.props.user.id ? (
            <StyledHeader.DropDownMenu
              onClick={this.handleClick('userMenu')}
              right
            >
              {this.menuItem('/logout', 'Logout', 'sign-out-alt')}
            </StyledHeader.DropDownMenu>
          ) : (
            this.state.userMenu && (
              <StyledHeader.DropDownMenu
                onClick={this.handleClick('userMenu')}
                right
              >
                {this.menuItem('/login', 'Login', 'sign-in-alt')}
                {this.menuItem('/register', 'Register', 'user-plus')}
                {this.menuItem('/', 'About', 'info-circle')}
              </StyledHeader.DropDownMenu>
            )
          )}
        </StyledHeader.DropDownContainer>
      </StyledHeader>
    )
  }
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Header)
