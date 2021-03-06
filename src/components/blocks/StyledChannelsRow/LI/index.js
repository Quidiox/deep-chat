import styled from 'styled-components/macro'

const LI = styled.li`
  color: #555;
  text-decoration: none;
  border: 1px solid #aaa;
  background: #d1d1d1;
  background: linear-gradient(to top, #ececec 20%, #d1d1d1 100%);
  display: inline-block;
  position: relative;
  z-index: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), inset 0 1px 0 #fff;
  text-shadow: 0 1px #fff;
  margin: 0 -2px;
  padding: 0 7px;

  &::before,
  &::after {
    border: 1px solid #aaa;
    position: absolute;
    top: -1px;
    width: 6px;
    height: 6px;
    content: '';
  }

  &::before {
    left: -7px;
    border-top-right-radius: 6px;
    border-width: 1px 1px 0px 0px;
    box-shadow: 2px 0px 0 #ececec;
  }

  &::after {
    right: -7px;
    border-top-left-radius: 6px;
    border-width: 1px 0px 0px 1px;
    box-shadow: -2px 0px 0 #ececec;
  }

  ${props =>
    props.selected &&
    `
      background: #fff;
      color: #333;
      z-index: 2;
      border-top-color: #fff;
  `} 
  ${props =>
    props.selected &&
    `
      &::before {
        box-shadow: 2px 0px 0 #ffa;
      }`}
  ${props =>
    props.selected &&
    `
      &::after {
        box-shadow: -2px 0px 0 #fff;
    }
  `}
  ${props =>
    props.join &&
    `
    background: lightblue;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), inset 0 1px 0 lightblue;
  &::before {
    left: -7px;
    border-top-right-radius: 6px;
    border-width: 1px 1px 0px 0px;
    box-shadow: 1px 0px 0 #ececec;
  }
  &::after {
    right: -7px;
    border-top-left-radius: 6px;
    border-width: 1px 0px 0px 1px;
    box-shadow: -1px 0px 0 #ececec;
  }
  `}
`

export default LI
