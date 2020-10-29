import React from "react";
import $ from "jquery";
import Packageitem from "./Packageitem.jsx";

class Packages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packages: [],
    };
  }

  componentDidMount() {
    $.get("/packages").then((result) => {
      this.setState({
        packages: result,
      });
    });
  }

  render() {
    return (
      <div className="container" >
        <div  className="row">
        <h1>packages</h1>
        <ul>
          {this.state.packages.map((pack,index) => {
            return <Packageitem key={index} pack={pack}/>
            ;
          })}
        </ul>
        </div>
      </div>
    );
  }
}

export default Packages;
