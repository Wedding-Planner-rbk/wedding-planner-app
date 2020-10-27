import React from 'react';
import $ from 'jquery';



  class Packages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            packages: []
        }
    }
       
    componentDidMount() {
        $.get('/packages').then(result => {
            this.setState({
                packages: result
            })
        })
      }


    render() {
        return (
            <div>
                <h1>packages</h1>
                
                
                
            </div>
        )
    }
}

export default packages
this.item