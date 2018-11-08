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
        <FontAwesomeIcon icon="bars" onClick={this.handleClick('navMenu')} />
        {this.state.navMenu && <StyledHeader.DropDownMenu />}
        <StyledHeader.Title>Header</StyledHeader.Title>
        <FontAwesomeIcon
          icon="user-circle"
          onClick={this.handleClick('userMenu')}
        />
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
