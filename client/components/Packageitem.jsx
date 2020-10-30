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

    <div className="pack-list-item" style ={{display:'flex' }}>
      <img className="img-thumbnail previewImage" style ={{ justifyContent:'space-around' ,alignContent :'center'}}
         src={props.pack.image_url} 
         onClick={() => {props.selectPackage(props.pack)
            props.changeView('package')
        }}
       />
   
      <div className="card border-primary mb-3" style={{maxWidth: "280rem" }}>
      <div className="card-header"> with ONLY : {props.pack.price}  </div>
      <div className="card-body text-primary">
      <h5 className="card-title">{props.pack.name}</h5>
      <p className="card-text">{props.pack.description}.</p>
  </div>
    </div>
    </div>
    
);
export default Packageitem;