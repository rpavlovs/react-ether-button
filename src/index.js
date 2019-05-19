import React from 'react'
import WyreComponent from './components/WyreComponent'
import FortmaticComponent from './components/FortmaticComponent'

import style from './index.style'

class ReactEtherButton extends React.Component {
  renderWyre = () => {
    return <WyreComponent />
  }

  renderFortmatic = () => {
    return <FortmaticComponent />
  }

  render() {
    return (
      <div css={style.overlay}>
        Do you want to pay with Fortmatic?
        <button
          onClick={() => {
            this.renderFortmatic()
          }}
        >
          Yes!
        </button>
        {this.renderWyre()}
      </div>
    )
  }
}

export default ReactEtherButton
