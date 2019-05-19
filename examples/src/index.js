import React from 'react'
import { render } from 'react-dom'

import ReactEtherButton from '../../src'
import GlobalStyles from './global-styles'

import style from './index.style'

const App = () => (
  <div css={style.base}>
    <GlobalStyles />
    Here is the button:
    <ReactEtherButton />
  </div>
)

render(<App />, document.getElementById('root'))
