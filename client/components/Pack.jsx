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
        <div>
            <h1>pack</h1>
               description
            <div className="container">
                    <div className="row">
                        {this.state.products.map((product, index) => 
                            <div key={index} className="col-sm">
                            <img src={product.imageUrl} className="img-thumbnail previewImage" />
                            <h4>Type: {product.name}</h4>
                            <span>Price: {product.price} DT</span>
                        </div>)}
                    </div>
                    <button> reserve </button>
                    </div>

          </div>
        
        );
      }
    }
    
    
    export default Pack;