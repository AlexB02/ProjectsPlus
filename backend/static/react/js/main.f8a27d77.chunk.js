(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"media/crown.82939c39.svg"},24:function(e,a,t){e.exports=t(42)},29:function(e,a,t){},31:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),l=t(4),r=t.n(l),c=(t(29),t(5)),i=t.n(c),m=t(13),o=t(18),p=t(19),d=t(22),u=t(20),E=t(3),v=t(23),f=(t(31),t(2)),g=t(21),b=t.n(g),h=t(1),N=t.n(h);var w=function(e){function a(e){var t;Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).loginsubmit=function(e){var a=Object(E.a)(t);N()(document).ready((function(){var e=N()("#loginemail").val(),t=N()("#loginpassword").val();if(e&&t){console.log("Posting login details to flask");var s=N.a.ajax({url:"/login",type:"POST",data:{email:e,password:t}});try{s.done((function(e){a.setState({loginmessage:e.loginmessage}),"True"!==e.is_authenticated||(window.location.href="dashboard")}))}catch(n){}}else a.setState({loginmessage:""})}))},t.signupsubmit=function(e){console.log("Sign up submit");var a=Object(E.a)(t);N()(document).ready((function(){console.log("Ready function");var e=N()("#fname").val(),t=N()("#lname").val(),s=N()("#email").val(),n=N()("#password").val(),l=N()("#confirmpassword").val();(console.log("Firstname: "+e),console.log("Lastname: "+t),console.log("Email: "+s),console.log("Password: "+n),l===n)?e&&t&&s&&n?N.a.ajax({url:"/signup",type:"POST",data:{fname:e,lname:t,email:s,password:n}}).done((function(e){a.setState({signupmessage:e.signupmessage})})):a.setState({signupmessage:""}):a.setState({signupmessage:""})}))},t.check=t.check.bind(Object(E.a)(t)),t.getPassword=t.getPassword.bind(Object(E.a)(t)),t.getConfirmPassword=t.getConfirmPassword.bind(Object(E.a)(t)),t.state={password:"",confirmpassword:"",confirmpasswordstatus:"",loginmessage:"",signupmessage:""};setInterval((function(){return t.check()}),750);return t}return Object(v.a)(a,e),Object(p.a)(a,[{key:"check",value:function(){try{this.state.password===this.state.confirmpassword?(this.state.password,this.setState({confirmpasswordstatus:""})):this.setState({confirmpasswordstatus:"passwords do not match"})}catch(e){console.log("Error")}}},{key:"getPassword",value:function(){var e=Object(m.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({password:a.target.value});case 2:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"getConfirmPassword",value:function(){var e=Object(m.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({confirmpassword:a.target.value});case 2:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"removeformsubmit",value:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},{key:"render",value:function(){return n.a.createElement("html",null,n.a.createElement("div",{className:"space2"}),n.a.createElement("body",{className:"Body"},n.a.createElement("b",null,n.a.createElement("div",{id:"about"},n.a.createElement("a",{className:"bodytitle"},"strive for efficiency+"),n.a.createElement("p",null,"Explore the data behind what makes your team work. Receive customised employee recommendations, that learns as you use the app.")),n.a.createElement("div",{className:"space2"}),n.a.createElement("div",{id:"pricing"},n.a.createElement("a",{className:"bodytitle"},"all at a price you can't say no to+"),n.a.createElement("p",null,"discover all 4 price plans, for 4 different sized projects."),n.a.createElement("div",{className:"priceboxes"},n.a.createElement("div",{className:"prepricebox"}),n.a.createElement(f.Link,{to:"signupsection",smooth:!0,activeClass:"active",offset:-70},n.a.createElement("a",{href:"#"},n.a.createElement("div",{className:"silver"},n.a.createElement("a",{className:"boxtitle"},"Silver"),n.a.createElement("p",null,"Efficiency reports and employee recommendations"),n.a.createElement("p",null,"Up to 5 team members"),n.a.createElement("p",null,"Up to 20 active tasks"),n.a.createElement("div",{className:"payboxgap"}),n.a.createElement("div",{className:"paybox"},n.a.createElement("div",{className:"price"},"\xa32.89"),n.a.createElement("p",null,"pcm per member"))))),n.a.createElement("div",{className:"boxspace"}),n.a.createElement(f.Link,{to:"signupsection",smooth:!0,activeClass:"active",offset:-70},n.a.createElement("a",{href:"#"},n.a.createElement("div",{className:"gold"},n.a.createElement("a",{className:"boxtitle"},"Gold"),n.a.createElement("p",null,"Efficiency reports and employee recommendations"),n.a.createElement("p",null,"Up to 25 team members"),n.a.createElement("p",null,"Up to 100 active tasks"),n.a.createElement("p",null,"Up to 8 tasks in the critical path"),n.a.createElement("div",{className:"payboxgap"}),n.a.createElement("div",{className:"paybox"},n.a.createElement("div",{className:"price"},"\xa35.89"),n.a.createElement("p",null,"pcm per member"))))),n.a.createElement("div",{className:"boxspace"}),n.a.createElement(f.Link,{to:"signupsection",smooth:!0,activeClass:"active",offset:-70},n.a.createElement("a",{href:"#"},n.a.createElement("div",{className:"diamond"},n.a.createElement("img",{className:"crownsvg",src:b.a}),n.a.createElement("div",{className:"diamondboxtext"},n.a.createElement("p",{className:"mostpopulartext"},"most popular"),n.a.createElement("a",{className:"boxtitle"},"Diamond"),n.a.createElement("p",null,"Efficiency reports and employee recommendations"),n.a.createElement("p",null,"Up to 50 team members"),n.a.createElement("p",null,"Up to 1000 active tasks"),n.a.createElement("p",null,"Up to 15 tasks in the critical path"),n.a.createElement("div",{className:"payboxgap"}),n.a.createElement("div",{className:"paybox"},n.a.createElement("div",{className:"price"},"\xa38.89"),n.a.createElement("p",null,"pcm per member")))))),n.a.createElement("div",{className:"boxspace"}),n.a.createElement(f.Link,{to:"signupsection",smooth:!0,activeClass:"active",offset:-70},n.a.createElement("a",{href:"#"},n.a.createElement("div",{className:"platinum"},n.a.createElement("a",{className:"boxtitle"},"Platinum"),n.a.createElement("p",null,"Efficiency reports and employee recommendations"),n.a.createElement("p",null,"Unlimited team members"),n.a.createElement("p",null,"Unlimited active tasks"),n.a.createElement("p",null,"Unlimited tasks in the critical path"),n.a.createElement("div",{className:"payboxgap"}),n.a.createElement("div",{className:"paybox"},n.a.createElement("div",{className:"price"},"\xa315.89"),n.a.createElement("p",null,"pcm per member"))))),n.a.createElement("div",{className:"postpricebox"}))),n.a.createElement("div",{className:"space2"}),n.a.createElement("div",{id:"signupsection",className:"signupsection"},n.a.createElement("a",{className:"bodytitle"},"sign up and experience the magic of automation+"),n.a.createElement("div",{className:"texttoinputbreak"}),n.a.createElement("div",{className:"signupandlogin"}),n.a.createElement("div",{className:"signup"},n.a.createElement("input",{type:"hidden",name:"form_name",value:"signup"}),n.a.createElement("form",{onSubmit:this.removeformsubmit},n.a.createElement("input",{type:"text",className:"boxinput",placeholder:"first name",name:"fname",id:"fname",required:!0}),n.a.createElement("div",{className:"midboxbreak"}),n.a.createElement("input",{type:"text",className:"boxinput",placeholder:"last name",name:"lname",id:"lname",required:!0}),n.a.createElement("div",{className:"midboxbreak"}),n.a.createElement("input",{type:"email",className:"boxinput",placeholder:"e-mail address",name:"email",id:"email",required:!0}),n.a.createElement("div",{className:"midboxbreak"}),n.a.createElement("input",{type:"password",className:"boxinput",placeholder:"create password",name:"password",id:"password",value:this.state.password,onChange:this.getPassword,required:!0}),n.a.createElement("div",{className:"midboxbreak"}),n.a.createElement("input",{type:"password",className:"boxinput",placeholder:"confirm password",name:"confirmpassword",id:"confirmpassword",value:this.state.confirmpassword,onChange:this.getConfirmPassword,required:!0}),n.a.createElement("div",{className:"confirmpasswordstatus"},this.state.confirmpasswordstatus),n.a.createElement("input",{type:"hidden",name:"identifier",value:"signup"}),n.a.createElement("input",{type:"submit",className:"boxinput",value:"sign up",onClick:this.signupsubmit})),n.a.createElement("div",{class:"signupmessage"},this.state.signupmessage)),n.a.createElement("div",{className:"signupsigninbreak"}),n.a.createElement("div",{className:"login"},n.a.createElement("form",{onSubmit:this.removeformsubmit},n.a.createElement("input",{type:"email",className:"boxinput",placeholder:"e-mail address",name:"email",id:"loginemail",required:!0}),n.a.createElement("div",{className:"midboxbreak"}),n.a.createElement("input",{type:"password",className:"boxinput",placeholder:"password",name:"password",id:"loginpassword",required:!0}),n.a.createElement("div",{className:"midboxbreak"}),n.a.createElement("input",{type:"hidden",name:"identifier",value:"login"}),n.a.createElement("input",{type:"submit",className:"boxinput",value:"log in",onClick:this.loginsubmit})),n.a.createElement("div",{class:"signupmessage"},this.state.loginmessage))))),n.a.createElement("footer",{className:"footer"},n.a.createElement("b",null,"Alex Bainbridge 2019-2020 NEA")))}}]),a}(s.Component);r.a.render(n.a.createElement((function(){return n.a.createElement("html",null,n.a.createElement("div",{className:"NavBar"},n.a.createElement("b",null,n.a.createElement(f.Link,{to:"home",smooth:!0,activeClass:"active"},n.a.createElement("a",{href:"#"},"home")),n.a.createElement(f.Link,{to:"about",smooth:!0,activeClass:"active",offset:-75},n.a.createElement("a",{href:"#"},"about")),n.a.createElement(f.Link,{to:"pricing",smooth:!0,activeClass:"active",offset:-55},n.a.createElement("a",{href:"#"},"pricing")),n.a.createElement(f.Link,{to:"signupsection",smooth:!0,activeClass:"active",offset:-75},n.a.createElement("a",{href:"#"},"sign up + log in")))))}),null),document.getElementById("navbar")),r.a.render(n.a.createElement((function(){return n.a.createElement("html",null,n.a.createElement("div",{className:"App",id:"home"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{className:"space1"}),n.a.createElement("h1",{className:"title"},n.a.createElement("b",null,"projects plus+")),n.a.createElement("a",{className:"strapline"},n.a.createElement("b",null,"team management, made simple.")))))}),null),document.getElementById("root")),r.a.render(n.a.createElement(w,null),document.getElementById("body"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f8a27d77.chunk.js.map