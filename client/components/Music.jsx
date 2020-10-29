import React, { Component } from 'react';
import $ from 'jquery';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bands : []
        }
    }
    componentDidMount() {
        $.get('/music').then(results => {
                    console.log(results)
                    this.setState({
                        bands:results,
                    })
                })
            
    }
    render() {
        return (
            <div className="container">
                <h2>The velvet box Music Band </h2> 
                <p>
                  </p>
                    <h2>All Products</h2>
                    <div>
                    {this.state.bands.map(band => (
                    <div key={band.id} className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={band.imageUrl} className="rounded previewImage"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title">{band.name}</h3>
                                    <p className="card-title">{band.description}</p>
                                    <p className="card-title">Price : {band.price} DT</p>
                                    <button className="btn btn-outline-secondary" onClick={()=>{this.props.selectMusic(band) 
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

export default Music;