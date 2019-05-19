import React from 'react'
import ReactLoadScript from 'react-load-script'

const Wyre = require('@wyre/api')
const WyreClient = Wyre.WyreClient

let wyre = new WyreClient({
  format: 'json_numberstring',
  apiKey: 'AK-YWDRRUMN-X9HJQUNF-ZLPMZBLH-MF9RGU99',
  secretKey: 'SK-B4UXUTJX-JATVLDFT-TENNTPBV-3WTQ67WV',
  baseUrl: 'https://api.testwyre.com',
})

class WyreComponent extends React.Component {
  handleWyreLoad = () => {
    wyre.get('/v2/account').then(
      account => {
        console.log('I am Wyre account ', account.id)
        var widget = new window.Wyre.Widget({
          env: 'test',
          accountId: 'YOUR_WYRE_ACCOUNT_ID',
          auth: {
            type: 'secretKey',
            secretKey: 'aaksdgkjhdfkgjlakjdfglskdjfglksjdflgksjdflgkjsdflk',
          },
          operation: {
            type: 'debitcard',
            // type: 'onramp',
            dest: 'ethereum:0xe8bF424E047372d249d0826c5567655ba3B72f18',
            // sourceCurrency: 'USD',
            destCurrency: 'ETH',
            // destAmount: 0.03,
          },
        })
        widget.open()
      },
      err => {
        console.log("Problems, cap'n: ", err)
      }
    )
  }

  render() {
    return (
      <>
        <ReactLoadScript url="https://verify.sendwyre.com/js/widget-loader.js" />
        <button
          onClick={() => {
            this.handleWyreLoad()
          }}
        >
          No, I'd rather pay with my debit card
        </button>
      </>
    )
  }
}

export default WyreComponent
