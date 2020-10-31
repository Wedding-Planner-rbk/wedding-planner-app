import React from 'react';
import ReactDOM from 'react-dom';
import AboutUs from './components/AboutUs.jsx';
import LogIn from './components/Login.jsx';
import Packages from './components/Packages.jsx';
import Pack from './components/Pack.jsx';
import Products from './components/Products.jsx';
import Flowers from './components/Flowers.jsx';
import Cakes from './components/Cakes.jsx';
import Hall from './components/Hall.jsx';
import Music from './components/Music.jsx';
import SocialFollow from './components/socialFollow/SocialFollow.jsx'
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
            startWithBudget: false,
            loggedUser: {}
        }
        this.handleEventOnChange = this.handleEventOnChange.bind(this);
        this.changeView = this.changeView.bind(this);
        this.selectPackage = this.selectPackage.bind(this);
        this.selectCake = this.selectCake.bind(this);
        this.selectFlower = this.selectFlower.bind(this);
        this.selectHall = this.selectHall.bind(this);
        this.selectMusic = this.selectMusic.bind(this);
        this.setCurrentUser = this.setCurrentUser.bind(this);
    }

    componentDidMount() {
        //fetch all packages from database and select three random ones to display on home page
        $.get('/pakages').then(results => {
            // console.log(results)
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
    }
    //set states for budget 
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
        // function responsible for changing views in the whole app
        this.setState({
            view: option
        })
    }
    //set current states for package, user and products
    setCurrentUser(user) {
        this.setState({
            loggedUser: user
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
        //update the price state with selected item price
        if(this.state.startWithBudget) {
            this.setState(prevState => ({
                price: prevState.price + flower.price
            }))
        }
        //update the flower id field in the current user row of users database table
        if(!!this.state.loggedUser.id) {
            $.post('/user/flower', {user_id: this.state.loggedUser.id, flower_id: this.state.selectedFlower.id})
            .then(result => this.setState({
                loggedUser: result
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
        if(!!this.state.loggedUser.id) {
            $.post('/user/cake', {user_id: this.state.loggedUser.id, cake_id: this.state.selectedCake.id})
            .then(result => this.setState({
                loggedUser: result
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
        if(!!this.state.loggedUser.id) {
            $.post('/user/hall', {user_id: this.state.loggedUser.id, hall_id: this.state.selectedHall.id})
            .then(result => this.setState({
                loggedUser: result
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
        if(!!this.state.loggedUser.id) {
            $.post('/user/music', {user_id: this.state.loggedUser.id, music_id: this.state.selectedMusic.id})
            .then(result => this.setState({
                loggedUser: result
            }))
        }
    }

    render() {
        return (
            <div>
                <div className="navbar navbar-light nav">
                    <div className= "container-fluid">
                    <span className="navbar-brand" style={{color: '#32e0c4'}}>The Velvet Box</span>
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
                <div className='espace'> </div>
                <div className='description'>
                <h1> Wedding Planner</h1> 
                <h4> Planning a wedding involves endless details, deadlines, family drama, and far too often enough stress to make you want to just elope. Use our planning checklist, read our budgeting tips, and access our wedding planner to help you pull it all together.</h4>
                </div>
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
                                            this.selectPackage(pack)}}/>
                            <h4>Type: {pack.name}</h4>
                            <span>Price: {pack.price} DT</span>
                        </div>)}
                        </div><SocialFollow /></div>
                    
                    

                </div> 
                : this.state.view === 'packages' ? 
                <Packages changeView = {this.changeView} pack={this.state.data} selectPackage={this.selectPackage}/>
                : this.state.view === 'products' ?
                <Products selectedFlower = {this.state.selectedFlower} 
                        selectedCake = {this.state.selectedCake}
                        selectedHall = {this.state.selectedHall}
                        selectedMusic = {this.state.selectedMusic}
                        changeView = {this.changeView}/>
                : this.state.view === 'package' ? 
                <Pack changeView = {this.changeView} pack={this.state.currentPackage} />
                : this.state.view === 'Cakes' ? 
                <Cakes selectCake= {this.selectCake} changeView = {this.changeView} budget = {this.state.startWithBudget} 
                        balance = {this.state.budget - this.state.price} />
                : this.state.view === 'Flowers' ? 
                <Flowers selectFlower= {this.selectFlower} changeView = {this.changeView} budget = {this.state.startWithBudget} 
                balance = {this.state.budget - this.state.price} />
                : this.state.view === 'Halls' ? 
                <Hall selectHall= {this.selectHall} changeView = {this.changeView} budget = {this.state.startWithBudget} 
                balance = {this.state.budget - this.state.price} />
                : this.state.view === 'Music Bands' ? 
                <Music selectMusic= {this.selectMusic} changeView = {this.changeView} budget = {this.state.startWithBudget} 
                balance = {this.state.budget - this.state.price} />
                : this.state.view === 'login' ? 
                <LogIn setCurrentUser = {this.setCurrentUser} />
                : this.state.view === 'aboutUs' ? 
                <AboutUs />
                :null}

                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))