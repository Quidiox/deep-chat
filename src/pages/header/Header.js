import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StyledHeader from '../../components/blocks/StyledHeader'

class Header extends Component {
  state = { navMenu: false, userMenu: false }

  handleClick = type => e => {
    this.setState({ [type]: !this.state[type] })
  }

  render() {
    return (
      <StyledHeader>
        <StyledHeader.DropDownContainer>
          <StyledHeader.MenuIcon onClick={this.handleClick('navMenu')}>
            <FontAwesomeIcon icon="bars" />
          </StyledHeader.MenuIcon>
          {this.state.navMenu && (
            <StyledHeader.DropDownMenu>
              <StyledHeader.MenuItem>
                <StyledHeader.Link
                  to="/login"
                  activeClassName="nav-link-active"
                >
                  Login
                </StyledHeader.Link>
              </StyledHeader.MenuItem>
              <StyledHeader.MenuItem>
                <StyledHeader.Link
                  to="/register"
                  activeClassName="nav-link-active"
                >
                  Register
                </StyledHeader.Link>
              </StyledHeader.MenuItem>
            </StyledHeader.DropDownMenu>
          )}
        </StyledHeader.DropDownContainer>
        <StyledHeader.Title>Header</StyledHeader.Title>
        <StyledHeader.DropDownContainer>
          <StyledHeader.MenuIcon onClick={this.handleClick('userMenu')}>
            <FontAwesomeIcon icon="user-circle" />
          </StyledHeader.MenuIcon>
          {this.state.userMenu && (
            <StyledHeader.DropDownMenu right>
              <StyledHeader.MenuItem>
                <StyledHeader.Link
                  to="/hello"
                  activeClassName="nav-link-active"
                >
                  hello
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
