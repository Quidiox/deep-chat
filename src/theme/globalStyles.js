import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');
 
  body {
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
  button, input, textarea {
    font-family: inherit;
  }
  #root {
    height: inherit;
    width: inherit;
  }
`

export default GlobalStyle
