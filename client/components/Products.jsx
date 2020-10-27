import React from 'react';

class Products extends React.Component {
constructor(props) {
    super(props);
    this.state = {
     view : "",
    }
}
componentDidMount(){
    $.get('/Products').then(results => {
        console.log(results)
        this.setState({
           Products: results
        })
    })
}
changeView(option) {
    this.setState({
        view: option
    })
}

render() {
    return (
        <div>
            <div>
            <h2>The velvet box Products & Services </h2>
            <p>
            The professionals at The Velvet Box are experts at creating the ultimate wedding.we can let you choose what do you need of our products like Flowers , Wedding hull , Music band , Wedding Cakes  </p>
            </div>
            <div>
                <h2>All Products</h2>
            </div>
            <div>
                <div>
                <h3>Flowers</h3>
                <img onclick={this.changeView} src="https://cdn0.hitched.co.uk/articles/images/5/6/4/5/img_35465/r10_2x_choose-wedding-flowers-bouquet-thumbnail-75c4c70.jpg" alt="flowers"/>
                </div>
                <div>
                <h3>Wedding Hull</h3>
                <img onclick={this.changeView} src="https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/109/2019/05/27100554/3688-55.jpg" alt="hull"/>
                </div>
                <div>
                <h3>Music Band</h3>
                <img onclick={this.changeView} src="https://media-api.xogrp.com/images/eea9b5a5-6400-44e1-bd70-5d1a83748b96" alt="music"/>
                </div>
                <div>
                <h3>wedding Cake</h3>
                <img onclick={this.changeView} src="https://justmarry.com/wp-content/uploads/2020-Wedding-Cake-Trends-Featured-Just-Marry-Weddings-Bumby-Photography.jpg" alt="cake"/>
                </div>
            </div>
            
             </div>
    )
}

}
export default Products ;
