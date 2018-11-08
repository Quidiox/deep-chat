import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StyledHeader from '../../components/blocks/StyledHeader'

class Header extends Component {
  state = { navMenu: false, userMenu: false }

  handleClick = type => e => {
    console.log(this.state[type], type)
    this.setState({ [type]: !this.state[type] })
  }

  render() {
    console.log(this.state)
    return (
      <StyledHeader>
        <StyledHeader.Button onClick={this.handleClick('navMenu')}>
          <FontAwesomeIcon icon="bars" />
        </StyledHeader.Button>
        {this.state.navMenu && <StyledHeader.DropDownMenu />}
        <StyledHeader.Title>Header</StyledHeader.Title>
        <StyledHeader.Button onClick={this.handleClick('userMenu')}>
          <FontAwesomeIcon icon="user-circle" />
        </StyledHeader.Button>
        {this.state.userMenu && (
          <StyledHeader.DropDownMenu right>
            <Link to="">hello</Link>
          </StyledHeader.DropDownMenu>
        )}
      </StyledHeader>
    )
  }
}

export default Header
