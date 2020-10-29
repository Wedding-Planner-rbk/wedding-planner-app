import React, { Component } from 'react';
import $ from 'jquery';
class flowers extends Component {
    constructor(props){
        super(props);
        this.state = {
        bouquets: [],
        id : 0 
        }
    }
    componentDidMount() {
        $.get('/flowers').then(results => {
                    console.log(results)
                    this.setState({
                        bouquets:results.data,
                    })
                })
            
    }
    render() {
        return (
            <div className="container">
                <h2>Wedding Floral Designs</h2>
                <p>True to our name, The velvet box has a full-service floral design team on-site for your wedding. Our professional staff of florists are always adding trendy and fashionable floral creations found in wedding .</p>
                <div className="row">
                 {this.state.bouquets.map(bouquet => (
                     <div key={bouquet.id} className="col-sm">
                     <Image key={bouquet.id} src={bouquet.img} className="img-thumbnail previewImage" onClick={()=>this.props.selectFlowers(bouquet.name)} />
                </div>
                    ))}
                </div>
            </div>
             
        );
    }
}

export default flowers;