import React, { Component } from 'react'

export default class Dice extends Component {
  render() {
    return (
      <div>{this.props.number}</div>
    )
  }
}
