import React, { Component } from 'react';
import $ from 'jquery';
class Hall extends Component {
    constructor(props) {
        super(props);
        this.state = {
        weddingHalls: [],
        }
    }
    componentDidMount() {
        $.get('/hall').then(results => {
                    console.log(results)
                    this.setState({
                       weddingHalls:results,
                    })
                })
            
    }
    render() {
        return (
            <div className="container">
            <h2>The velvet box wedding Hall </h2>
            <p></p>
            <div className="row">
             {this.state.weddingHalls.map(hall => (
                 <div key={hall.id} className="col-sm">
                 <img key={hall.id} src={hall.imageUrl} className="img-thumbnail previewImage"  />
                 <h3>{hall.name}</h3>
                 <p>{hall.description}</p>
                 <p>Price : {hall.price}</p>
                 <button className="btn btn-outline-secondary" onClick={()=>{this.props.selectHall(hall)
                this.props.changeView('products')}}>ADD TO PLAN</button>
            </div>
                ))}
            </div>
        </div>
        );
    }
}

export default Hall;