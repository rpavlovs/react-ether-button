import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
      }
    `}
  />
)

export default GlobalStyles
