import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            serverTest: ''
        }
    }

    componentDidMount() {
        $.get('/test').then(response => {
            console.log(response)
            this.setState({
                serverTest: response
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.serverTest}</h1>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))