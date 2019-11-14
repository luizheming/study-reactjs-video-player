import { createGlobalStyle } from 'styled-components'

import themeDefault from './default/styles'
import themeLight from './light/styles'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 10px;
    background-color: #282a36;
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
  }
`
export default GlobalStyle

export {
  themeDefault,
  themeLight
}

