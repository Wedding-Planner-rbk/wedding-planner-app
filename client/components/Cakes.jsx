import React, { Component } from 'react';
import $ from 'jquery';
class Cakes extends Component {
    constructor(props) {
        super(props);
        this.state = {
         weddingCakes : [],
        }
    }
    componentDidMount() {
        $.get('/cakes').then(results => {
                    console.log(results)
                    this.setState({
                        weddingCakes:results,
                    })
                })
            
    }
    render() {
        return (
            <div className="container">
            <h2>The velvet box wedding Cakes </h2>
            <p>
           </p>
                <h2>All Products</h2>
            <div className="row">
                {this.state.products.map(weddingCake => (
                 <div key={weddingCake.id} className="col-sm">
                <img key={weddingCake.id} src={weddingCake.imageUrl} className="img-thumbnail previewImage"/>
                 <h3>{weddingCake.name}</h3>
                 <p>{weddingCake.description}</p>
                 <p>Price : {weddingCake.price}</p>
                 <button className="btn btn-outline-secondary" onClick={()=>{this.props.selectCake(weddingCake.id)
                this.props.changeView('products')}}>ADD TO PLAN</button>
                </div>
         ))}
                </div>
                
                 </div> 
        );
    }
}

export default Cakes;