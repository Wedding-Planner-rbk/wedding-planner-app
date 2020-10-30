import React from 'react';
import ReactDOM from 'react-dom';
import AboutUs from './components/AboutUs.jsx';
import Login from './components/Login.jsx';
import Packages from './components/Packages.jsx';
import Pack from './components/Pack.jsx';
import Products from './components/Products.jsx';
import Flowers from './components/Flowers.jsx';
import Cakes from './components/Cakes.jsx';
import Hall from './components/Hall.jsx';
import Music from './components/Music.jsx';
import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            view: 'home',
            packages: [],
            currentPackage: {},
            selectedFlower: {},
            selectedCake: {},
            selectedMusic: {},
            selectedHall: {},
            budget: 0,
            price: 0,
            startWithBudget: false
        }
        this.handleEventOnChange = this.handleEventOnChange.bind(this);
        this.changeView = this.changeView.bind(this);
        this.selectPackage = this.selectPackage.bind(this);
        this.selectCake = this.selectCake.bind(this);
        this.selectFlower = this.selectFlower.bind(this);
        this.selectHall = this.selectHall.bind(this);
        this.selectMusic = this.selectMusic.bind(this);
    }

    componentDidMount() {
        $.get('/pakages').then(results => {
            console.log(results)
            var first = Math.floor(Math.random() * results.length);
            do {
                var second = Math.floor(Math.random() * results.length);
            } while(second === first)
            do {
                var third = Math.floor(Math.random() * results.length);
            } while(third === first || third === second)
            this.setState(prevState => ({
                packages: prevState.packages.concat(results[first], results[second], results[third]),
                data:results
            }))
        })
        // var packages = [{id:0, name: 'Basic', price: 8000, imageUrl: 'https://bbc136b7ae3badc49324-4505d403f77dee961d206e5b048c01ea.ssl.cf3.rackcdn.com/SeDireOui/web/modele-business-plan-wedding-planner-thumb.jpg'},
        // {id: 1, name: 'Simple', price: 10000, imageUrl: 'https://www.mariage.com/wp-content/uploads/2016/04/une-mariage-papiers.jpg'},
        // {id: 2, name: 'Romantic', price: 12000, imageUrl: 'https://www.mariage.com/wp-content/uploads/2016/02/une-mariage-romantique.jpg'}];
        // this.setState({
        //     packages
        // })
    }
    handleEventOnChange(e) {
        this.setState({
            budget: e.target.value
        })
    }
    handleEventOnClick() {
        this.setState({
            startWithBudget: true
        })
    }
    changeView(option) {
        this.setState({
            view: option
        })
    }
    selectPackage(pack) {
        this.setState({
            currentPackage: pack
        })
    }
    selectFlower(flower) {
        this.setState({
            selectedFlower: flower
        })
        if(this.state.startWithBudget) {
            this.setState(prevState => ({
                price: prevState.price + flower.price
            }))
        }
    }
    selectCake(cake) {
        this.setState({
            selectedCake: cake
        })
        if(this.state.startWithBudget) {
            this.setState(prevState => ({
                price: prevState.price + cake.price
            }))
        }
    }
    selectHall(hall) {
        this.setState({
            selectedHall: hall
        })
        if(this.state.startWithBudget) {
            this.setState(prevState => ({
                price: prevState.price + hall.price
            }))
        }
    }
    selectMusic(music) {
        this.setState({
            selectedMusic: music
        })
        if(this.state.startWithBudget) {
            this.setState(prevState => ({
                price: prevState.price + music.price
            }))
        }
    }

    render() {
        return (
            <div>
                <div className="navbar navbar-light nav">
                    <div className= "container-fluid">
                    <span className="navbar-brand" style={{color: '#FFE484'}}>The Velvet Box</span>
                    <span className='nav-item link'
                    onClick={() => this.changeView('home')}>
                        Home
                    </span>
                    <span className='nav-item link'
                    onClick={() => this.changeView('packages')}>
                        Packages
                    </span>
                    <span className='nav-item link'
                    onClick={() => this.changeView('products')}>
                        Products
                    </span>
                    <span className='nav-item link'
                    onClick={() => this.changeView('aboutUs')}>
                        About Us
                    </span>
                    <span className='nav-item link'
                    onClick={() => this.changeView('login')}>
                        Log in
                    </span>
                    </div>
                    
                </div>
                <div className='body'>
                {this.state.view === 'home' ? <div>
                    <p>app description</p>
                    <div className='col-5'>
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" placeholder="If you want to start with a fixed Budget, enter yours"
                                min='0' onChange={this.handleEventOnChange}/>
                            <button className="btn btn-outline-secondary" onClick={() => {this.handleEventOnClick()
                                                                                            this.changeView('products')
                            }}>Confirm</button>
                        </div>
                    </div>
                    
                    <div className="container">
                    <div className="row">
                        {this.state.packages.map(pack => 
                            <div key={pack.id} className="col-sm">
                            <img src={pack.image_url} className="img-thumbnail previewImage" 
                            onClick={() => {this.changeView('package')
                                            this.selectPackage(pack.id)}}/>
                            <h4>Type: {pack.name}</h4>
                            <span>Price: {pack.price} DT</span>
                        </div>)}
                    </div>
                    </div>

                </div> 
                : this.state.view === 'packages' ? 
                <Packages changeView = {this.changeView} pack={this.state.data} selectPackage={this.selectPackage}/>
                : this.state.view === 'products' ?
                <Products changeView = {this.changeView}/>
                : this.state.view === 'package' ? 
                <Pack changeView = {this.changeView} pack={this.state.currentPackage} />
                : this.state.view === 'Cakes' ? 
                <Cakes selectCake= {this.selectCake} changeView = {this.changeView}/>
                : this.state.view === 'Flowers' ? 
                <Flowers selectFlower= {this.selectFlower} changeView = {this.changeView}/>
                : this.state.view === 'Halls' ? 
                <Hall selectHall= {this.selectHall} changeView = {this.changeView}/>
                : this.state.view === 'Music Bands' ? 
                <Music selectMusic= {this.selectMusic} changeView = {this.changeView}/>
                : this.state.view === 'login' ? 
                <Login />
                : this.state.view === 'aboutUs' ? 
                <AboutUs />
                :null}

                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))