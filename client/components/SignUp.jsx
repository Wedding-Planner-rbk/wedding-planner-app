import React from "react";
import axios from "axios";

import LogIn from "./LogIn.jsx";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      firstName: "",
      lastName:"",
      address:"",
      zipCode:"",
      city:"",
      phone:"",
      username: "",
      password: "",
      email:"",
      check: "",
      //firstName, lastName, address, zipCode, city, phone, username,email, password
    };
    this.add = this.add.bind(this);
  }
  add(e) {
    console.log("added");
      e.preventDefault()
      const newUser = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        zipCode: this.state.zipCode,
        city: this.state.city,
        phone: this.state.phone,
        username: this.state.username,
        email:this.state.email,
        name: this.state.name,
        password:this.state.password,
      }
    axios.post("PUT YOUR URL",newUser)
    .then(res => console.log(res.data));
        this.setState({
          firstName: "",
          lastName:"",
          address:"",
          zipCode:"",
          city:"",
          phone:"",
          username: "",
          password: "",
          email:"",
          check:"Login"
        })
  }
  render() {
    if (this.state.check === "") {
      return (
        <div className=" SignInForm ">
          <form onSubmit={(e) => this.add(e)}>
            <input
              type="text"
              name="firstName"
              placeholder="Your first name "
              value={this.state.firstName}
              onChange={(e) => {
                this.setState({ firstName: e.target.value });
              }}
            />
            <br></br>

            <input
              type="text"
              name="lastName"
              placeholder="Your lastName name "
              value={this.state.lastName}
              onChange={(e) => {
                this.setState({ lastName: e.target.value });
              }}
            />
            <br></br>

            <input
              type="text"
              name="address"
              placeholder="Your address "
              value={this.state.address}
              onChange={(e) => {
                this.setState({ address: e.target.value });
              }}
            />
            <br></br>

            <input
              type="text"
              name="zipCode"
              placeholder="zipCode "
              value={this.state.zipCode}
              onChange={(e) => {
                this.setState({ zipCode: e.target.value });
              }}
            />
            <br></br>

            <input
              type="text"
              name="city"
              placeholder="Your City "
              value={this.state.city}
              onChange={(e) => {
                this.setState({ city: e.target.value });
              }}
            />
            <br></br>

            <input
              type="text"
              name="Phone"
              placeholder="Your Phone "
              value={this.state.phone}
              onChange={(e) => {
                this.setState({ phone: e.target.value });
              }}
            />
            <br></br>

            <input
              type="text"
              name="name"
              placeholder="Your name "
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
            <br></br>

            <input
              type="text"
              name="username"
              placeholder="Your username "
              value={this.state.username}
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
            />
            <br></br>

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <br></br>

            <input
              type="password"
              name="password"
              placeholder="Your password "
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
            <br></br>
            <input type="submit" value="SignUp" />
            <br></br>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <LogIn/>
        </div>
      );
    }
  }
}

export default SignUp;
