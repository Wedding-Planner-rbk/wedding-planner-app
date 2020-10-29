import React from 'react';
import $ from 'jquery';
import images from "./sample-data.js"

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         products: images,
        }
    }
    
    // componentDidMount() {
    //     $.get('/products').then(results => {
    //         console.log(results)
    //         this.setState({
    //             products:results.data,
    //         })
    //     })
    // }
    
    
    render() { 
        return (
            <div>
                <h2>The Velvet Box Products & Services </h2>
                <p>The professionals at The Velvet Box are experts at creating the ultimate wedding. 
                We offer you the better choice with our products like Flowers , Wedding halls , Music bands and Wedding Cakes..  </p>
                <div className="container-fluid" style={{width: '50%'}} >
                <div className="row justify-content-md-center">
                    {this.state.products.map(product => (
                    <div key={product.id} className="col-md-auto">
                        <img key={product.id} src={product.img} className="img-thumbnail previewImage" onClick={()=>this.props.changeView(product.name)} />
                        <center><h4> {product.name}</h4></center>
                    </div>
                    ))}
                </div>
                </div>
            </div>    
        )    
    }  
}

export default Products;
