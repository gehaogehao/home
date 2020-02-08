import React, { Component } from 'react'
import './button.css'

export default class button extends Component {
    render() {
        return  <button className='btn' {...this.props}></button>
    }
}
