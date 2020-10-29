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
                <div className="row">
                    {this.state.bands.map(band => (
                     <div key={band.id} className="col-sm">
                    <img key={band.id} src={band.imageUrl} className="img-thumbnail previewImage"  />
                    <h3>{band.name}</h3>
                    <p>{band.description}</p>
                    <p>Price : {band.price}</p>
                    <button className="btn btn-outline-secondary" onClick={()=>{this.props.selectMusic(band.id)
                this.props.changeView('products')}}>ADD TO PLAN</button>
                    </div>
             ))}
                    </div>
                    
                     </div>     
        );
    }
}

export default Music;