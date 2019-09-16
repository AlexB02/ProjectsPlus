import React from 'react';
import './App.css';
import { Link } from "react-scroll";
import crown from "./img/crown.svg";

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
      <Link to="about" smooth={true} activeClass="active" offset={-70}><a href="#">about</a></Link>
      <Link to="pricing" smooth={true} activeClass="active" offset={-55}><a href="#">pricing</a></Link>
      <Link to="signupsection" smooth={true} activeClass="active" offset={-70}><a href="#">sign up / log in</a></Link>
      </b>
      </div>
      </html>
    );
  };

  export function Body() {
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
        <p>Discover all 4 price plans, for 4 different sized projects.</p>

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
              <form method="POST">
              <input type="hidden" name="form_name" value="signup"/>

              <input type="text" className="boxinput" placeholder="first name" name="fname"/>
              <div className="midboxbreak"/>

              <input type="text" className="boxinput" placeholder="last name" name="lname"/>
              <div className="midboxbreak"/>

              <input type="email" className="boxinput" placeholder="e-mail address" name="email"/>
              <div className="midboxbreak"/>

              <input type="password" className="boxinput" placeholder="create password" name="password"/>
              <div className="midboxbreak"/>

              <input type="password" className="boxinput" placeholder="confirm password" name="password"/>

              <p>I am a...</p>
              <select name = "dropdown" className="boxinput">
                <option value="projectmanager" className="dropdown">project manager</option>
                <option value="teammember" className="dropdown">team member</option>
              </select>

              <div className="midboxbreak"/>

              <input type="submit" className="boxinput" value="sign up"/>

              </form>

            </div>

            <div className="signupsigninbreak"/>
            <div className="signin">
              <form method="POST">
              <input type="hidden" name="form_name" value="signin"/>
              <input type="email" className="boxinput" placeholder="e-mail address" name="email"/>
              <div className="midboxbreak"/>
              <input type="password" className="boxinput" placeholder="password" name="password"/>
              <div className="midboxbreak"/>
              <input type="submit" className="boxinput" value="log in"/>
              </form>
              <p>{window.loginmessage}</p>
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
