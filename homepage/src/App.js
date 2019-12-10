import React, { Component } from 'react';
import { EfficienciesWidget } from "./EfficienciesWidget.js";
import './App.css';
import { Link } from "react-scroll";
import crown from "./img/crown.svg";
import dashboardpicture1 from "./img/dashboardpicture1.png";
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
      <Link to="pricing" smooth={true} activeClass="active" offset={-65}><a href="#">pricing</a></Link>
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
    setTimeout(
      function() {
        this.forceUpdate()
      }.bind(this), 200);
      setTimeout(
        function() {
          this.forceUpdate()
        }.bind(this), 210);
    //this.setState({signupmessage: window.signupmessage});
  }

///////////////////////////////////////////////////////////////////////
// Checking if confirm password box is the same as password box ///////
///////////////////////////////////////////////////////////////////////

  check() {
    try {

      if (this.state.password === this.state.confirmpassword) {
        // Both blank
        if (this.state.password === "") {}
        // Both the same
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
    if (!(this.state.password === "")) {
      var password = this.state.password;
      if (password.length < 8) {
        this.setState({signupmessage: "Password must be at least 8 characters long"});
        return;
      }

      var symbols = 0;
      var lowercase = 0;
      var uppercase = 0;
      var numbers = 0;
      for (var i=0; i<password.length; i++){
        if ("abcdefghijklmnopqrstuvwxyz".includes(password[i])) {
          lowercase += 1;
        }
        else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(password[i])) {
          uppercase += 1;
        }
        else if ("1234567890".includes(password[i])) {
          numbers += 1;
        }
        else if ("!-_<>.&$£".includes(password[i])) {
          symbols += 1;
        }
        else {
          this.setState({signupmessage: "Passwords may only contain letters, numbers and the following symbols: '!-_<>.&$£'"});
          return;
        }
      }
      if (!((symbols > 0) && (lowercase > 0) && (uppercase > 0) && (numbers > 0))){
        if (symbols == 0) {
          this.setState({signupmessage: "Passwords must contain at least 1 allowed symbol: '!-_<>.&$£'"});
          return;
        }
        else if (lowercase == 0) {
          this.setState({signupmessage: "Passwords must contain at least one lowercase letter"});
          return;
        }
        else if (uppercase == 0) {
          this.setState({signupmessage: "Passwords must contain at least one uppercase letter"});
          return;
        }
        else if (numbers == 0) {
          this.setState({signupmessage: "Passwords must contain at least one number"});
          return;
        }
      }
      else if ((!(this.state.signupmessage === "Account creation error")) || (!(this.state.signupmessage === "") || (!(this.state.signupmessage === "Account already exists, try logging in")))){
        this.setState({signupmessage: ""});
      }
    }
    else if ((!(this.state.signupmessage === "Account creation error")) || (!(this.state.signupmessage === "") || (!(this.state.signupmessage === "Account already exists, try logging in")))){
      //this.setState({signupmessage: ""});
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
          var req = $.ajax({url: "/login",
                            type: "POST" ,
                            data: {email : email, password : password}
                          });

          try {
            req.done(function(data) {
              _this.setState({loginmessage: data.loginmessage});
              if (data.is_authenticated === "True") {
                window.location.href = "dashboard";
                return;
              }
            });
          }
          catch (e) {};

        };
    });
  };

  signupsubmit = (event) => {
    let _this = this;
    $(document).ready(function(){
      var firstname = $("#fname").val();
      var lastname = $("#lname").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var confirmpassword = $("#confirmpassword").val();

      if (!firstname || !lastname || !email || !password) {
        _this.setState({signupmessage: ""});
        return;
      }

      if (!(confirmpassword === password)) {
        _this.setState({signupmessage: ""});
        return;
      }

      if (!(password === "")) {

        if (password.length < 8) {
          _this.setState({signupmessage: "Password must be at least 8 characters long"});
          return;
        }

        var symbols = 0;
        var lowercase = 0;
        var uppercase = 0;
        var numbers = 0;
        for (var i=0; i<password.length; i++){
          if ("abcdefghijklmnopqrstuvwxyz".includes(password[i])) {
            lowercase += 1;
          }
          else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(password[i])) {
            uppercase += 1;
          }
          else if ("1234567890".includes(password[i])) {
            numbers += 1;
          }
          else if ("!-_<>.&$£".includes(password[i])) {
            symbols += 1;
          }
          else {
            _this.setState({signupmessage: "Passwords may only contain letters, numbers and the following symbols: '!-_<>.&$£'"});
            return;
          }
        }
        if (!((symbols > 0) && (lowercase > 0) && (uppercase > 0) && (numbers > 0))){
          if (symbols == 0) {
            _this.setState({signupmessage: "Passwords must contain at least 1 allowed symbol: '!-_<>.&$£'"});
            return;
          }
          else if (lowercase == 0) {
            _this.setState({signupmessage: "Passwords must contain at least one lowercase letter"});
            return;
          }
          else if (uppercase == 0) {
            _this.setState({signupmessage: "Passwords must contain at least one uppercase letter"});
            return;
          }
          else if (numbers == 0) {
            _this.setState({signupmessage: "Passwords must contain at least one number"});
            return;
          }
        }
        else if ((!(_this.state.signupmessage === "Account creation error")) || (!(_this.state.signupmessage === "") || (!(this.state.signupmessage === "Account already exists, try logging in")))){
          _this.setState({signupmessage: ""});
        }
      }
      else if ((!(_this.state.signupmessage === "Account creation error")) || (!(_this.state.signupmessage === "") || (!(this.state.signupmessage === "Account already exists, try logging in")))){
        _this.setState({signupmessage: ""});
      };

      var req = $.ajax({url: "/signup",
                        type:"POST",
                        data: {fname: firstname, lname: lastname, email: email, password: password}
                      });

      req.done(function(data){
        _this.setState({signupmessage: data.signupmessage})
        if (data.is_authenticated === "True") {
          window.location.href = "dashboard";
          return;
        };
      });
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
        <p>Understand what makes your team work, and uncover where they fall down.</p>
        <p style={{"padding-bottom":"5vh"}}>Using a series of advanced algorithms, Projects Plus learns the strengths and weaknesses of each individual member, showing the data on a simple easy-to-use dashboard.</p>
        <EfficienciesWidget title="Example Efficiency Widget" data={[{"skillAbbrv":"Skill 1","skillTitle":"Skill 1 Full Title","avg":169.84},{"skillAbbrv":"Skill 2","skillTitle":"Skill 2 Full Title","avg":101.23},{"skillAbbrv":"Skill 3","skillTitle":"Skill 3 Full Title","avg":89.45},{"skillAbbrv":"Skill 4","skillTitle":"Skill 4 Full Title","avg":76.74},{"skillAbbrv":"Skill 5","skillTitle":"Skill 5 Full Title","avg":34.87}]} length={5} colour="#F1C40F"/>
        <a class="bodytitle">track your tasks+</a>
        <p>Follow what you have to do, for when, with an easy to understand widget</p>
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
                <p className="mostpopulartext" style={{"margin-top":"0px"}}>most popular</p>
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
              <p>Extra stuff for paying more - filler point</p>
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
              <span class="loginsignuptitle">sign up</span>
              <input type="hidden" name="form_name" value="signup"/>
              <form onSubmit={this.removeformsubmit} style={{"padding-top":"2vh"}}>
                <input type="text" className="boxinput" placeholder="first name" name="fname" id="fname" required/>
                <div className="midboxbreak"/>

                <input type="text" className="boxinput" placeholder="last name" name="lname" id="lname" required/>
                <div className="midboxbreak"/>

                <input type="email" className="boxinput" placeholder="e-mail address" name="email" id="email" required/>
                <div className="midboxbreak"/>

                <input type="password" className="boxinput" placeholder="create password" name="password" id="password" value={this.state.password} onChange={this.getPassword} required/>
                <div class="signupmessage">{this.state.signupmessage}</div>

                <div className="midboxbreak"/>

                <input type="password" className="boxinput" placeholder="confirm password" name="confirmpassword" id="confirmpassword" value={this.state.confirmpassword} onChange={this.getConfirmPassword} required/>
                <div className="confirmpasswordstatus">{this.state.confirmpasswordstatus}</div>

                <input type="hidden" name="identifier" value="signup" />

                <input type="submit" className="boxinput" value="sign up" onClick={this.signupsubmit}/>
              </form>

            </div>

            <div className="signupsigninbreak"/>

            <div className="login">
            <span class="loginsignuptitle">login</span>
            <form onSubmit={this.removeformsubmit} style={{"padding-top":"2vh"}}>
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
