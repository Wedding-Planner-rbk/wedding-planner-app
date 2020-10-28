import React, { Component } from 'react';
import $ from 'jquery';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        $.get('/music').then(results => {
                    console.log(results)
                    this.setState({
                        bouquets:results.data,
                    })
                })
            
    }
    render() {
        return (
            <div>
                <p></p>
                
            </div>
        );
    }
}

export default Music;