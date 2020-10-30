import React, { Component } from 'react'

/* class Packageitem extends Component {
    render() {
        return (
            <div>
                <li>
                <h1>{pack.name}</h1>
                <img className="img-thumbnail previewImage" onClick={() => this.changeView('Pack')}>{pack.imageurl}</img>
                <p>{pack.description}</p>
                <p>{pack.price}</p>
              </li>
            </div>
        )
    }
}*/
/*  <div className="container">
                    <div className="row">
                        {this.state.packages.map(pack => 
                            <div key={pack.id} className="col-sm">
                            <img src={pack.image_url} className="img-thumbnail previewImage" 
                            onClick={() => {this.changeView('package')
                                            this.selectPackage(pack.id)}}/>
                            <h4>Type: {pack.name}</h4>
                            <span>Price: {pack.price} DT</span>
                        </div>)}
                    </div>
                    </div>*/
const Packageitem = (props) => (

    <li className="pack-list-item">
      <h1> {props.pack.name} </h1> 

      <img className="img-thumbnail previewImage" 
         src={props.pack.image_url} 
         onClick={() => {props.selectPackage(props.pack)
            props.changeView('package')
        }}
       />
         
      <span>{props.pack.description}</span>

      <span className="pack-list-item-price">{props.pack.price} </span>
    </li>
);
export default Packageitem;