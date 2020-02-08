import React, { Component } from 'react'
import Button from './components/button'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Button name='KoBi' age='18'>点击有惊喜!</Button>
      </div>
    )
  }
}
