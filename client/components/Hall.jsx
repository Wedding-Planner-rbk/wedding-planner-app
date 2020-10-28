import React, { Component } from 'react';
import $ from 'jquery';
class Hall extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        $.get('/hall').then(results => {
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

export default Hall;