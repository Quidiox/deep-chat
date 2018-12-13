import React, { Component } from 'react'
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

  render() {
    return (
      <StyledHeader>
        <StyledHeader.DropDownContainer>
          <StyledHeader.MenuIcon onClick={this.handleClick('navMenu')}>
            <FontAwesomeIcon icon="bars" />
          </StyledHeader.MenuIcon>
          {this.state.navMenu && (
            <StyledHeader.DropDownMenu onClick={this.handleClick('navMenu')}>
              <StyledHeader.MenuItem>
                <StyledHeader.Link
                  to="/hello"
                  activeClassName="nav-link-active"
                  onClick={this.handleLinkClick}
                >
                  hello
                </StyledHeader.Link>
              </StyledHeader.MenuItem>
            </StyledHeader.DropDownMenu>
          )}
        </StyledHeader.DropDownContainer>
        <StyledHeader.Title>Deep Chat</StyledHeader.Title>
        <StyledHeader.DropDownContainer>
          <StyledHeader.MenuIcon onClick={this.handleClick('userMenu')}>
            <FontAwesomeIcon icon="user-circle" />
          </StyledHeader.MenuIcon>
          {this.state.userMenu && (
            <StyledHeader.DropDownMenu
              onClick={this.handleClick('userMenu')}
              right
            >
              <StyledHeader.MenuItem>
                <StyledHeader.Link
                  to="/login"
                  activeClassName="nav-link-active"
                  onClick={this.handleLinkClick}
                >
                  <FontAwesomeIcon icon="sign-in-alt" />
                  Login
                </StyledHeader.Link>
              </StyledHeader.MenuItem>
              <StyledHeader.MenuItem>
                <StyledHeader.Link
                  to="/register"
                  activeClassName="nav-link-active"
                  onClick={this.handleLinkClick}
                >
                  <FontAwesomeIcon icon="user-plus" />
                  Register
                </StyledHeader.Link>
              </StyledHeader.MenuItem>
              <StyledHeader.MenuItem>
                <StyledHeader.Link
                  exact
                  to="/"
                  activeClassName="nav-link-active"
                  onClick={this.handleLinkClick}
                >
                  <FontAwesomeIcon icon="info-circle" />
                  About
                </StyledHeader.Link>
              </StyledHeader.MenuItem>
            </StyledHeader.DropDownMenu>
          )}
        </StyledHeader.DropDownContainer>
      </StyledHeader>
    )
  }
}

export default Header
