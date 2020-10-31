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
            if(this.props.budget) {
                this.setState({
                    weddingHalls: results.filter(cake => cake.price <= this.props.balance)
                })
            } else {
                this.setState({
                        weddingHalls: results
                })
            } 
        })
            
    }
    render() {
        return (
            <div className="container">
                <h2>The velvet box wedding Hall </h2>
                <p></p>
                <div >
                    {this.state.weddingHalls.map(hall => (
                        <div key={hall.id} className='row justify-content-start'>
                            <div  className="col-md-3">
                                <img src={hall.imageUrl} className="img-thumbnail previewImage"/>
                            </div>
                            <div className="col-md-8 p-4 pl-md-0">
                                <h3 className="mt-0">{hall.name}</h3>
                                <p>{hall.description}</p>
                                <p>Price : {hall.price} DT</p>
                                <button className="btn btn-outline-secondary" onClick={()=>{this.props.selectHall(hall)
                                this.props.changeView('products')}}>ADD TO PLAN</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Hall;