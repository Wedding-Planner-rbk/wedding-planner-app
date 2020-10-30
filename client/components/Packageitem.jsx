import React, { Component } from 'react'


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