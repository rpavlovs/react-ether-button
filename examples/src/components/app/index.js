import React from 'react'
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'

import ReactEtherButton from '../../../../src'

import style from './index.style'

class App extends React.Component {
  state = {
    donationAmount: 5,
  }

  render() {
    return (
      <div css={style.base}>
        <div css={style.container}>
          <div css={style.titleText}>
            Help us make payments with multiple wallets easier!
          </div>
          <div css={style.subtitleText}>We are making payments easier for…</div>
          <div css={style.headingText}>How much can you donate?</div>
          <div css={style.donationAmountText}>${this.state.donationAmount}</div>

          <ReactEtherButton style={style.button} />
        </div>
      </div>
    )
  }
}

export default App
