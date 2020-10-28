import React from "react";
import $ from "jquery";

class Package extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        package: [],
      };
    }
  
    componentDidMount() {
      $.post("/packages").then((result) => {
        this.setState({
          package: result,
          id : id 
        });
      });
    }

    render() {
        return (
          <div>
            <h1>package</h1>
            <ul>
              {this.state.package.map((package,id) => {
                return <Package key={package.id} package={package}/>
                ;
              })}
            </ul>
          </div>
        );
      }
    }
    
    
    export default Package;