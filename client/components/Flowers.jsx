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
            if(this.props.budget) {
                this.setState({
                    bouquets: results.filter(cake => cake.price <= this.props.balance)
                })
            } else {
                this.setState({
                        bouquets:results,
                })
            } 
        })
            
    }
    render() {
        return (
            <div className="container">
                <h2>The velvet box Wedding Floral Designs</h2>
                <p>True to our name, The velvet box has a full-service floral design team on-site for your wedding. Our professional staff of florists are always adding trendy and fashionable floral creations found in wedding .</p>
                <div>
                    {this.state.bouquets.map(bouquet => (
                    <div key={bouquet.id} className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={bouquet.imageUrl} className="rounded previewImage"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">{bouquet.name}</h3>
                                    <p className="card-title">{bouquet.description}</p>
                                    <p className="card-title">Price : {bouquet.price} DT</p>
                                    <button className="btn btn-outline-secondary" onClick={()=>{this.props.selectFlower(bouquet) 
                                    this.props.changeView('products')}}>ADD TO PLAN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>  
        );
    }
}

export default flowers;