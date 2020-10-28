import React, { Component } from 'react'

export default class Packageitem extends Component {
    render() {
        return (
            <div>
                <li>
                <h1>{package.name}</h1>
                <img onClick={() => this.changeView('Package')}>{package.imageurl}</img>
                <p>{package.description}</p>
                <p>{package.price}</p>
              </li>
            </div>
        )
    }
}
export default Packageitem;