import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');
 
  html, body {
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
  #root {
    height: 100%;
  }
`

export default GlobalStyle
