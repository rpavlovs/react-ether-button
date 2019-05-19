import React from 'react'

const WyreClient = require('@wyre/api').WyreClient

let wyre = new WyreClient({
  format: 'json_numberstring',
  apiKey: 'AK-YWDRRUMN-X9HJQUNF-ZLPMZBLH-MF9RGU99',
  secretKey: 'SK-B4UXUTJX-JATVLDFT-TENNTPBV-3WTQ67WV',
  baseUrl: 'https://api.testwyre.com',
})

// wyre.get('/v2/account').then(
//   account => {
//     console.log('I am Wyre account ', account.id)
//   },
//   err => {
//     console.log("Problems, cap'n: ", err)
//   }
// )

class WyreComponent extends React.Component {
  render() {
    return <div>this is the wyre component</div>
  }
}

export default WyreComponent
