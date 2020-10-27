import React from 'react';
import $ from 'jquery';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         pictures: [],
        }
    }
    componentDidMount() {
        $.get('/products').then(results => {
            console.log(results)
            this.setState({
                pictures:results,
            })
        })
    }
    changeView(option) {
        this.setState({
            images:this.props.pictures,
        })
    }
    
    
    render() {
        let images = [
            {
                id: 1,
                name: 'Flowers',
                imag :"https://cdn0.hitched.co.uk/articles/images/5/6/4/5/img_35465/r10_2x_choose-wedding-flowers-bouquet-thumbnail-75c4c70.jpg" 
            },
            {
                id:2,
                name: "Wedding Hull",
                img : "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/109/2019/05/27100554/3688-55.jpg"},
             {
              id :3,
              name : "Music Band",
              img :"https://media-api.xogrp.com/images/eea9b5a5-6400-44e1-bd70-5d1a83748b96", },
        {
            id :4,
            name : "wedding Cake",
            img : "https://justmarry.com/wp-content/uploads/2020-Wedding-Cake-Trends-Featured-Just-Marry-Weddings-Bumby-Photography.jpg"
        }
        ]
     
        return (
            
            <div className="container">
            <h2>The velvet box Products & Services </h2>
            <p>
            The professionals at The Velvet Box are experts at creating the ultimate wedding.we can let you choose what do you need of ourproducts like Flowers , Wedding hull , Music band , Wedding Cakes  </p>
                <h2>All Products</h2>
            <div className="row">
                {images.map(image => (
                 <div key={image.id} className="col-sm">
                <Image key={image.id} src={image.img} className="img-thumbnail previewImage" onClick={this.changeView} />
                <h4> {images.name}</h4>
                </div>
         ))}
                </div>
                
                 </div>     
        )
    }
    
    }
    export default Products ;
