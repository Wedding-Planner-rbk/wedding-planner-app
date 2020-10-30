import React from "react";
import App from "./App.jsx";
import SignUp from "./SignUp.jsx"

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users:[],
      username:"",
      user_id:"",
      password:"",
      pass:""
    }
    this.check=this.check.bind(this)
  }
  componentDidMount(){
    axios.get("YOUR URL ").then((res)=>{
      this.setState({
        users:res.data,
        username: "",
        user_id:"",
        password: "",
        pass:""
      })
    })
  }
  check(e){
    e.preventDefault();
    const nameList = this.state.users.map((element)=>
    element.name ) ;
    console.log(nameList)
    const passwordList = this.state.users.map((element)=>
    element.password );
    const idList = this.state.users.map((element)=>
    element.id
    )
    
    if(nameList.indexOf(this.state.username) === -1){
      //console.log(nameList.indexOf(this.state.userName))
      alert("You should have account first , please sign up")
      this.setState({pass:this.state.pass = "signup"})
    }else if(nameList.indexOf(this.state.username) !== -1 && passwordList[nameList.indexOf(this.state.username)] !== this.state.password ){ 
      alert("Your password is incorrect")
    }else if(nameList.indexOf(this.state.username) !== -1 && passwordList[nameList.indexOf(this.state.username)] === this.state.password ){
      this.setState({pass:this.state.pass= "accueuil" , user_id:this.state.user_id = idList[nameList.indexOf(this.state.userName)]})
    } 
  }
  render() {
    if(this.state.pass === ""){
      return (
        <div className=" LoginForm ">
          <form onSubmit={(e)=>this.check(e)}>
            <input
              type="text"
              name="name"
              placeholder="UserName "
              value={this.state.userName}
              onChange={(e)=>{this.setState({userName:e.target.value})}}
            /><br></br>
          
            <input
              type="password"
              name="password"
              placeholder="password "
              value={this.state.password}
              onChange={(e)=>{this.setState({password:e.target.value})}}
            /><br></br>
  
            <input type="submit" value="Log In" /><br></br>
          </form>
        </div>
      )
    }else if(this.state.pass === "signup"){
      return (
        <div>
          <SignUp/>
        </div>
      )
    }else if(this.state.pass === "accueuil"){
    return (
      <div>
        {/* could you please put the name of the right component */}
          <App name={this.state.userName} userId={this.state.userId}/>
      </div>
    )
    }
  }
}

export default LogIn;
