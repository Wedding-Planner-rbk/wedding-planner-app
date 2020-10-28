import React, { Component } from 'react';
import images from "./sample-data"
class RenderImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: images,
            id : this.props.idImage,
            view :""
        }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default RenderImage;