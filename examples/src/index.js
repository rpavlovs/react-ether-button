import React from 'react'
import { render } from 'react-dom'

import GlobalStyles from './global-styles'
import App from './components/app'

const Root = () => (
  <>
    <GlobalStyles />
    <App />
  </>
)

render(<Root />, document.getElementById('root'))
