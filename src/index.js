import React from 'react'
import WyreComponent from './components/WyreComponent'

class ReactEtherButton extends React.Component {
  // renderWyre = () => {
  //   return <WyreComponent />
  // }

  render() {
    return (
      <div>
        <button>The button!</button>
        <WyreComponent />
      </div>
    )
  }
}

export default ReactEtherButton
