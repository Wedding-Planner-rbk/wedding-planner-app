import React from "react";
import $ from "jquery";
class Profil extends React.Component {
    constructor(props) {
      super(props); console.log(props)
      this.state = {
        user: props.user,
        products:[]
      };
     
    }
   
  
    componentDidMount() {
        $.post("/profil",{flowers_id: this.state.user.flowers_id, 
                          cakes_id: this.state.user.cakes_id,
                          hall_id: this.state.user.hall_id, 
                          music_id: this.state.user.music_id
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
              <h1>Check My Profile </h1>
               <div>
                    <h6> FirstName {this.props.user.firstName} </h6>
                    <h6> LastName {this.props.user.lastName} </h6>
                    <h6> Adress {this.props.user.address} </h6>
                    <h6> Phone Number {this.props.phone} </h6>
                    <h6> Email {this.props.email} </h6>
             </div>
             <h1> Check my selected products </h1>
              <div className="container">
                      <div className="row">
                          {this.state.products.map((product, index) => 
                              <div key={index} className="col-sm">
                              <img src={product.imageUrl} className="img-thumbnail previewImage" />
                              <h4>Type: {product.name}</h4>
                              <span>Price: {product.price} DT</span>
                          </div>)}
                      </div>
                      <button> confime my booking  </button>
                      </div>
  
            </div>
          
          );
        }
      }
  
    
    
    export default Profil;