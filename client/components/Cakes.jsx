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
            <div className="container-fluid">
                <h2>The velvet box wedding Cakes </h2>
                <p>
                </p>
                <h2>All Products</h2>
                <div >
                    {this.state.weddingCakes.map(weddingCake => (
                        <div key={weddingCake.id} className='row justify-content-start'>
                            <div  className="col-md-2">
                                <img src={weddingCake.imageUrl} className="img-thumbnail previewImage"/>
                            </div>
                            <div className="col-md-10 p-4 pl-md-0">
                                <h3 className="mt-0">{weddingCake.name}</h3>
                                <p>{weddingCake.description}</p>
                                <p>Price : {weddingCake.price} DT</p>
                                <button className="btn btn-outline-secondary" onClick={()=>{this.props.selectCake(weddingCake)
                                this.props.changeView('products')}}>ADD TO PLAN</button>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div> 
        );
    }
}

export default Cakes;