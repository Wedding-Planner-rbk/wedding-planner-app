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
                        bouquets:results.data,
                    })
                })
            
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Cakes;