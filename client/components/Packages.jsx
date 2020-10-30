import React from "react";
import $ from "jquery";
import Packageitem from "./Packageitem.jsx";

class Packages extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      packages: props.pack,
   };
  }

  render() {
    return (
    
      <div className="container" >
        <div className="row" >
        <h1> Our Packages</h1>
        <span> Struggling to decide on a style for your wedding? We’ve compiled a list of the eight categories that most weddings will fit into </span>
        <ul>
          {this.state.packages.map((pack,index) => {
            return <Packageitem key={index} pack={pack} 
            selectPackage={this.props.selectPackage} 
            changeView={this.props.changeView} />
           
            ;
          })}
        </ul>
        </div>
      </div>
    );
  }
}

export default Packages;
