import React, { Component } from 'react';
import './App.css';
import { Link } from "react-scroll";
import crown from "./img/crown.svg";
import $ from 'jquery';

export function App() {
    return (
      <html>
      <div className="App" id="home">
        <header className="App-header">
          <div className="space1"></div>
          <h1 className="title"><b>projects plus+</b></h1>
          <a className="strapline"><b>team management, made simple.</b></a>
          </header>
      </div>
      </html>
    );
  };

export function NavBar() {
    return (
      <html>
      <div className="NavBar">
      <b>
      <Link to="home" smooth={true} activeClass="active"><a href="#">home</a></Link>
      <Link to="about" smooth={true} activeClass="active" offset={-75}><a href="#">about</a></Link>
      <Link to="pricing" smooth={true} activeClass="active" offset={-55}><a href="#">pricing</a></Link>
      <Link to="signupsection" smooth={true} activeClass="active" offset={-75}><a href="#">sign up + log in</a></Link>
      </b>
      </div>
      </html>
    );
  };

export class Body extends Component {

///////////////////////////////////////////////////////////////////
// Initialisation function/////////////////////////////////////////
///////////////////////////////////////////////////////////////////

  constructor(props) {

    super(props);
    // Bind all the functions to the component
    this.check = this.check.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.getConfirmPassword = this.getConfirmPassword.bind(this);

    // Setup all state variables for the body
    this.state = {
      password: "",
      confirmpassword: "",
      confirmpasswordstatus: "",
      loginmessage: "",
      signupmessage: ""
    }

    // Interval for checking if confirm password is equal to password
    let timerId = setInterval(() => this.check(), 750);

    //this.setState({signupmessage: window.signupmessage});
  }

///////////////////////////////////////////////////////////////////////
// Checking if confirm password box is the same as password box ///////
///////////////////////////////////////////////////////////////////////

  check() {
    try {

      if (this.state.password === this.state.confirmpassword) {
        if (this.state.password === "") {
          this.setState({confirmpasswordstatus: ""});
        }
        else {
          this.setState({confirmpasswordstatus: ""});
        }
      }
      else {
        this.setState({confirmpasswordstatus: "passwords do not match"});
      }
    }
    catch (e) {
      console.log("Error")
    }
  }

  async getPassword(event) {
    //this.setState({password: event.target.value});
    await this.setState({password: event.target.value});
  };

  async getConfirmPassword(event) {
    //this.setState({confirmpassword: event.target.value});
    await this.setState({confirmpassword: event.target.value});
  };

/////////////////////////////////////////////////////////////////////////
// Changing the login message to show the relevent information //////////
/////////////////////////////////////////////////////////////////////////

// login submit function, called when the submit button is pressed

  loginsubmit = (event) => {
    let _this = this;
    $(document).ready(function(){

        var email = $("#loginemail").val();
        var password = $("#loginpassword").val();

        if (!email || !password) {
          _this.setState({loginmessage: ""});
          return;
        }
        else {
          console.log("Posting login details to flask");
          var req = $.ajax({url: "/login",
                            type: "POST" ,
                            data: {email : email, password : password}
                          });

          try {
            req.done(function(data) {
              _this.setState({loginmessage: data.id});
              if (data.is_authenticated === "True") {
                return
                //window.location.href = "dashboard";
              }
            });
          }
          catch (e) {};

        };
    });
  };

  signupsubmit = (event) => {
    console.log("Sign up submit");
    let _this = this;
    $(document).ready(function(){
      console.log("Ready function");
      var firstname = $("#fname").val();
      var lastname = $("#lname").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var confirmpassword = $("#confirmpassword").val();

      console.log("Firstname: "+firstname);
      console.log("Lastname: "+lastname);
      console.log("Email: "+email);
      console.log("Password: "+password);

      if (!(confirmpassword === password)) {
        _this.setState({signupmessage: ""});
        return;
      }

      if (!firstname || !lastname || !email || !password) {
        _this.setState({signupmessage: ""});
        return;
      }
      else {
        var req = $.ajax({url: "/signup",
                          type:"POST",
                          data: {fname: firstname, lname: lastname, email: email, password: password}
                        });

        req.done(function(data){
          _this.setState({signupmessage: data.signupmessage})
        });
      };
    });
  };

  removeformsubmit(event) {
    if(event.preventDefault) {
      event.preventDefault();
    }
    else {
      event.returnValue = false;
    }
  };

  render() {
      return (
      <html>
      <div className="space2"></div>
      <body className="Body">
      <b>
      <div id="about">
        <a className="bodytitle">strive for efficiency+</a>
        <p>Explore the data behind what makes your team work. Receive customised employee recommendations, that learns as you use the app.</p>
      </div>

      <div className="space2"></div>

      <div id="pricing">
        <a className="bodytitle">all at a price you can't say no to+</a>
        <p>discover all 4 price plans, for 4 different sized projects.</p>

          <div className="priceboxes">

            <div className="prepricebox"></div>

            <Link to="signupsection" smooth={true} activeClass="active" offset={-70}><a href="#">
            <div className="silver">
              <a className="boxtitle">Silver</a>
              <p>Efficiency reports and employee recommendations</p>
              <p>Up to 5 team members</p>
              <p>Up to 20 active tasks</p>
              <div className="payboxgap"></div>
              <div className="paybox">
              <div className="price">£2.89</div>
              <p>pcm per member</p>
              </div>
            </div>
            </a></Link>
            <div className="boxspace"></div>

            <Link to="signupsection" smooth={true} activeClass="active" offset={-70}><a href="#">
            <div className="gold">
              <a className="boxtitle">Gold</a>
              <p>Efficiency reports and employee recommendations</p>
              <p>Up to 25 team members</p>
              <p>Up to 100 active tasks</p>
              <p>Up to 8 tasks in the critical path</p>
              <div className="payboxgap"></div>
              <div className="paybox">
              <div className="price">£5.89</div>
              <p>pcm per member</p>
              </div>
            </div>
            </a></Link>

            <div className="boxspace"></div>

            <Link to="signupsection" smooth={true} activeClass="active" offset={-70}><a href="#">
            <div className="diamond">
              <img className="crownsvg" src={crown}/>
              <div className="diamondboxtext">
                <p className="mostpopulartext">most popular</p>
                <a className="boxtitle">Diamond</a>
                <p>Efficiency reports and employee recommendations</p>
                <p>Up to 50 team members</p>
                <p>Up to 1000 active tasks</p>
                <p>Up to 15 tasks in the critical path</p>
                <div className="payboxgap"></div>
                <div className="paybox">
                  <div className="price">£8.89</div>
                  <p>pcm per member</p>
                </div>
              </div>
            </div>
            </a></Link>

            <div className="boxspace"></div>

            <Link to="signupsection" smooth={true} activeClass="active" offset={-70}><a href="#">
            <div className="platinum">
              <a className="boxtitle">Platinum</a>
              <p>Efficiency reports and employee recommendations</p>
              <p>Unlimited team members</p>
              <p>Unlimited active tasks</p>
              <p>Unlimited tasks in the critical path</p>
              <div className="payboxgap"></div>
              <div className="paybox">
              <div className="price">£15.89</div>
              <p>pcm per member</p>
              </div>
            </div>
            </a></Link>

            <div className="postpricebox"></div>
          </div>

      </div>

      <div className="space2"/>
        <div id="signupsection" className="signupsection">
          <a className="bodytitle">sign up and experience the magic of automation+</a>
          <div className="texttoinputbreak"/>
          <div className="signupandlogin"/>

            <div className="signup">
              <input type="hidden" name="form_name" value="signup"/>
              <form onSubmit={this.removeformsubmit}>

              <input type="text" className="boxinput" placeholder="first name" name="fname" id="fname" required/>
              <div className="midboxbreak"/>

              <input type="text" className="boxinput" placeholder="last name" name="lname" id="lname" required/>
              <div className="midboxbreak"/>

              <input type="email" className="boxinput" placeholder="e-mail address" name="email" id="email" required/>
              <div className="midboxbreak"/>

              <input type="password" className="boxinput" placeholder="create password" name="password" id="password" value={this.state.password} onChange={this.getPassword} required/>
              <div className="midboxbreak"/>

              <input type="password" className="boxinput" placeholder="confirm password" name="confirmpassword" id="confirmpassword" value={this.state.confirmpassword} onChange={this.getConfirmPassword} required/>

              <div className="confirmpasswordstatus">{this.state.confirmpasswordstatus}</div>

              <input type="hidden" name="identifier" value="signup" />

              <input type="submit" className="boxinput" value="sign up" onClick={this.signupsubmit}/>
              </form>
              <div class="signupmessage">{this.state.signupmessage}</div>

            </div>

            <div className="signupsigninbreak"/>
            <div className="login">
            <form onSubmit={this.removeformsubmit}>
                <input type="email" className="boxinput" placeholder="e-mail address" name="email" id="loginemail" required/>
                <div className="midboxbreak"/>
                <input type="password" className="boxinput" placeholder="password" name="password" id="loginpassword" required/>
                <div className="midboxbreak"/>
                <input type="hidden" name="identifier" value="login" />
                <input type="submit" className="boxinput" value="log in" onClick={this.loginsubmit}/>
                </form>
              <div class="signupmessage">{this.state.loginmessage}</div>
            </div>
        </div>
      </b>
      </body>

      <footer className="footer">
      <b>Alex Bainbridge 2019-2020 NEA</b>
      </footer>
      </html>
    );
  };
};
