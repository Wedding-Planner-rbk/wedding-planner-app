import React from "react";
import $ from 'jquery';
import SignUp from "./SignUp.jsx";

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users:[],
      username:"",
      password:"",
      pass:""
    }
    this.check=this.check.bind(this)
  }
  componentDidMount(){
    $.get("YOUR URL ").then((res)=>{
      this.setState({
        users:res.data,
        username: "",
        password: "",
        pass:""
      })
    })
  }
  check(e){
    e.preventDefault();
    const usernameList = this.state.users.map((element)=>
    element.username ) ;
    console.log(usernameList)
    const passwordList = this.state.users.map((element)=>
    element.password );
/*     const idList = this.state.users.map((element)=>
    element.id); */
    
    if(usernameList.indexOf(this.state.username) === -1){
      //console.log(usernameList.indexOf(this.state.username))
      alert("You should have account first , please sign up")
      this.setState({pass:this.state.pass = "signup"})
    }else if(usernameList.indexOf(this.state.username) !== -1 && passwordList[usernameList.indexOf(this.state.username)] !== this.state.password ){ 
      alert("Your password is incorrect")
    }else if(usernameList.indexOf(this.state.username) !== -1 && passwordList[usernameList.indexOf(this.state.username)] === this.state.password ){
      this.setState({pass:this.state.pass= "Profile"}) 
      //  user_id:this.state.user_id = idList[usernameList.indexOf(this.state.userName)]})
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
    }else if(this.state.pass === "Profile"){
    return (
      <div>
        {/* could you please put the name of the right component */}
          <Profile {...this.state.users=[users.indexOf(this.state.users)] }/> 
      </div>
    )
    }
  }
}

export default LogIn;
