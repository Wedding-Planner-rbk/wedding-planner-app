import React, { Component } from 'react';
import $ from 'jquery';
class flowers extends Component {
    constructor(props){
        super(props);
        this.state = {
        bouquets: [], 
        }
    }
    componentDidMount() {
        $.get('/flowers').then(results => {
                    console.log(results)
                    this.setState({
                        bouquets:results,
                        
                    })
                })
            
    }
    render() {
        return (
            <div className="container">
                <h2>The velvet box Wedding Floral Designs</h2>
                <p>True to our name, The velvet box has a full-service floral design team on-site for your wedding. Our professional staff of florists are always adding trendy and fashionable floral creations found in wedding .</p>
                <div className="row">
                 {this.state.bouquets.map(bouquet => (
                     <div key={bouquet.id} className="col-sm">
                     <img key={bouquet.id} src={bouquet.imageUrl} className="img-thumbnail previewImage"  />
                     <h3>{bouquet.name}</h3>
                     <p>{bouquet.description}</p>
                     <p>Price : {bouquet.price}</p>
                     <button className="btn btn-outline-secondary" onClick={()=>{this.props.selectFlower(bouquet.id) 
                    this.props.changeView('products')}}>ADD TO PLAN</button>
                </div>
                    ))}
                </div>
            </div>
             
        );
    }
}

export default flowers;