import React, { Component } from 'react'


const Packageitem = (props) => (
<div className ="card sm-6" style={{alignItems : 'center' ,padding: '20px',margin: '20px' }} >
    
      <img className="card-img-top" style={{maxWidth:'300px' ,maxHeight:'300px'}}
         src={props.pack.image_url} 
         onClick={() => {props.selectPackage(props.pack)
            props.changeView('package')
        }}
       />

   <div className="col-sm-6"  >
    <div className="card border-primary sm-6" style={{maxWidth: "280rem" }}>
          <div className="card-header"> WITH ONLY : {props.pack.price} DT  </div>
          <div className="card-body text-primary">
          <h5 className="card-title">{props.pack.name}</h5>
          <p className="card-text">{props.pack.description}.</p>
  </div>
    </div>
    </div>
</div>
    
);
export default Packageitem;