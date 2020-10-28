import React from "react";
import $ from "jquery";

class Pack extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pack: [],
      };
    }
  
    componentDidMount() {
      $.post("/packages").then((result) => {
        this.setState({
          pack: result,
          id : id 
        });
      });
    }

    render() {
        return (
          <div>
            <h1>pack</h1>
            <ul>
              {this.state.pack.map((pack,id) => {
                return <Pac key={pack.id} pack={pack}/>
                ;
              })}
            </ul>
          </div>
        );
      }
    }
    
    
    export default Pack;