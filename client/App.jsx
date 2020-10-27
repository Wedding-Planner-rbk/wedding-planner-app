import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'home'
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
    changeView(option) {
        this.setState({
            view: option
        })
    }
    render() {
        return (
            <div>
                <div className="navbar navbar-light nav">
                    <div className= "container-fluid">
                        <span className="navbar-brand text-white">The Velvet Box</span>
                    <span className='nav-item'
                    onClick={() => this.changeView('home')}>
                        Home
                    </span>
                    <span className='nav-item'
                    onClick={() => this.changeView('packages')}>
                        Packages
                    </span>
                    <span className='nav-item'
                    onClick={() => this.changeView('products')}>
                        Products
                    </span>
                    <span className='nav-item'
                    onClick={() => this.changeView('aboutUs')}>
                        About Us
                    </span>
                    <span className='nav-item'
                    onClick={() => this.changeView('login')}>
                        Log in
                    </span>
                    </div>
                    
                </div>
                {this.state.view === 'home' ? <div>
                    app description and 3 packages picked from packages database
                </div> 
                : null}


            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))