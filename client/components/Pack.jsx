import React from "react";
import $ from "jquery";
import Packageitem from "./Packageitem.jsx";
class Pack extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pack: props.pack,
        products:[]
      };
    }
  
   componentDidMount() {
      $.post("/package",{id:this.state.pack.id}).then((result) => {
        console.log(result.pack)
        this.setState({
          products: result.pack
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
                        {this.state.products.map(pack => 
                            <div key={pack.id} className="col-sm">
                            <img src={pack.image_url} className="listImg" style={{height: '250px', width: '300px'}}
                           />
                           <button> reserve </button>
                            <h4>Type: {pack.name}</h4>
                            <span>Price: {pack.price} DT</span>
                        </div>)}
                    </div>
                    </div>

          </div>
        
        );
      }
    }
    
    
    export default Pack;