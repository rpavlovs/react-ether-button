import React from 'react'
import WyreComponent from './components/WyreComponent'

import style from './index.style'

class ReactEtherButton extends React.Component {
  render() {
    return (
      <div css={style.overlay}>
        Do you want to pay with ETH?
        <button>Yes!</button>
        <WyreComponent />
      </div>
    )
  }
}

export default ReactEtherButton
