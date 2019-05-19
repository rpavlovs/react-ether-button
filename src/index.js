import React from 'react'
import WyreComponent from './components/WyreComponent'

import style from './index.style'

class ReactEtherButton extends React.Component {
  state = {}

  render() {
    return (
      <>
        <button onClick={() => this.setState({ isWidgetOpen: true })}>
          Pay ETH
        </button>
        {this.state.isWidgetOpen ? this.renderWidget() : null}
      </>
    )
  }

  renderWidget = () => {
    return (
      <div css={style.overlay}>
        <div css={style.modal}>
          Do you want to pay with ETH?
          <button>Yes!</button>
          <WyreComponent />
        </div>
      </div>
    )
  }
}

export default ReactEtherButton
