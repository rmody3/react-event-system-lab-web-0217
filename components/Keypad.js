import React from 'react'

class Keypad extends React.Component {
  constructor() {
    super();

    this.enterInput = this.enterInput.bind(this)
  }

  enterInput (){
    console.log('Entering password...')
  }
  render () {
    return (
      <input onKeyUp={this.enterInput} type="password" />
    )
  }
}

export default Keypad
