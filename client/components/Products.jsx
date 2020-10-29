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
                
                <div className="container">
                <h2>The velvet box Products & Services </h2>
                <p>
                The professionals at The Velvet Box are experts at creating the ultimate wedding.we can let you choose what do you need of ourproducts like Flowers , Wedding hull , Music band , Wedding Cakes  </p>
                    <h2>All Products</h2>
                <div className="row">
                    {this.state.products.map(product => (
                     <div key={product.id} className="col-sm">
                    <Image key={product.id} src={product.img} className="img-thumbnail previewImage" onClick={()=>this.props.changeView(product.name)} />
                    <h4> {product.name}</h4>
                    </div>
             ))}
                    </div>
                    
                     </div>     
            )
            
        }  
    
    }
    export default Products ;
