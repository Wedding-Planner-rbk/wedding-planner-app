import React from 'react';
import products from "./sample-data.js"

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         products: products,
        }
    }
    
    componentDidMount() {
        if(!!this.props.selectedFlower.id)
            this.setState(prevState => ({
                products: prevState.products.filter(product => product.name !== 'Flowers')
            }))
        if(!!this.props.selectedCake.id)
            this.setState(prevState => ({
                products: prevState.products.filter(product => product.name !== 'Cakes')
            }))
        if(!!this.props.selectedHall.id)
            this.setState(prevState => ({
                products: prevState.products.filter(product => product.name !== 'Halls')
            }))
        if(!!this.props.selectedMusic.id)
            this.setState(prevState => ({
                products: prevState.products.filter(product => product.name !== 'Music Bands')
            }))
        
    }
    
    
    render() { 
        return (
            <div className="description">
                <h1>The Velvet Box Products & Services </h1>
                {this.state.products.length ? <div>
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
                : <p>Congratulations you have already reserved your plan!</p> }
                
            </div>    
        )    
    }  
}

export default Products;
