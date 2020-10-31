import React from "react";
import $ from "jquery";
class Pack extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pack: props.pack,
        products:[]
      };
    }
  
   componentDidMount() {
      $.post("/package",{flowers_id: this.state.pack.flowers_id, cakes_id: this.state.pack.cakes_id,
                          hall_id: this.state.pack.hall_id, music_id: this.state.pack.music_id
      }).then((result) => {
        console.log(result.package)
        this.setState({
          products: result.package
        });
      });  
    }

    render() {
   
        return (
        <div className= "description">
            <div className='espace'> </div>
             <h1> {this.props.pack.name} </h1>
            <span> {this.props.pack.description}</span>
         
            <div className="container">
                    <div className="row">
                    <h6>In this package you can find :</h6>
                        {this.state.products.map((product, index) => 
                    <div className="card" style={{width: "16.5rem"}}>    
                            <div key={index} className="col-sm">
                            
                            <img src={product.imageUrl} className="img-thumbnail previewImage" />
                            <h4>Type: {product.name}</h4>
                            <span>Price: {product.price} DT</span>
                           </div> 
                        </div>)}
                    </div>
                    <button className="btn btn-primary" style={{ heigth :'50px' ,width:'200px', margin:'20px',marginLeft:'225px'}} > Book Now  </button>
                    </div>

          </div>
        
        );
      }
    }
    
    
    export default Pack;