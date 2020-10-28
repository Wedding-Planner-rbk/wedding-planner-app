import React, { Component } from 'react'

export default class Packageitem extends Component {
    render() {
        return (
            <div>
                <li>
                <h1>{pack.name}</h1>
                <img onClick={() => this.changeView('Pack')}>{pack.imageurl}</img>
                <p>{pack.description}</p>
                <p>{pack.price}</p>
              </li>
            </div>
        )
    }
}
export default Packageitem;