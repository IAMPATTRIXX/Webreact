import React, { Component } from 'react'

export default class Room extends Component {
  render() {
    const { type,room,amount,prize } = this.props.room;
    return (  
      <tr>
        <td>{ type }</td>
        <td>{ room }</td>
        <td>{ amount }</td>
        <td>{ prize }</td>
      </tr>
    )
  }
}