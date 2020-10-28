import React from 'react';
import $ from 'jquery';
import images from "./sample-data.js"

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         pictures: images,
         view : "",
         id:0
        }
        this.changeView = this.changeView.bind(this);
    }
    
    componentDidMount() {
        $.get('/products').then(results => {
            console.log(results)
            this.setState({
                pictures:results.data,
            })
        })
    }
    changeView(e,id) {
        e.preventDefault()
        this.setState({
            view:"image",
            id:id
        })
    }
    
    
    render() { 
        if(this.state.view ==="" ){
            return (
                
                <div className="container">
                <h2>The velvet box Products & Services </h2>
                <p>
                The professionals at The Velvet Box are experts at creating the ultimate wedding.we can let you choose what do you need of ourproducts like Flowers , Wedding hull , Music band , Wedding Cakes  </p>
                    <h2>All Products</h2>
                <div className="row">
                    {this.state.pictures.map(image => (
                     <div key={image.id} className="col-sm">
                    <Image key={image.id} src={image.img} className="img-thumbnail previewImage" onClick={(e)=>this.changeView(e,image.id)} />
                    <h4> {pictures.name}</h4>
                    </div>
             ))}
                    </div>
                    
                     </div>     
            )
            
        }   else{
            return (
                <div>
<RenderImage idImage={this.state.id}/>
                </div>
            )
        } 
    }
    
    }
    export default Products ;
