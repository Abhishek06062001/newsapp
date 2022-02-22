import React, { Component } from 'react'
import indicator from './indicator.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={indicator} alt=""/>
      </div>
    )
  }
}

export default Spinner