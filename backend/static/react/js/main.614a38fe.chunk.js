(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"media/crown.82939c39.svg"},24:function(e,a,t){e.exports=t(42)},29:function(e,a,t){},31:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(3),r=t.n(l),c=(t(29),t(4)),m=t.n(c),i=t(18),o=t(9),p=t(10),d=t(13),u=t(11),E=t(2),v=t(12),f=(t(31),t(1)),b=t(23),h=t.n(b),g=t(5),N=t.n(g),y=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return n.createElement("p",null,"Auth Route")}}]),a}(n.PureComponent);var w=function(e){function a(e){var t;Object(o.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).loginsubmit=function(e){var a=Object(E.a)(t);N()(document).ready((function(){var e=N()("#loginemail").val(),t=N()("#loginpassword").val();e&&t?N.a.ajax({url:"/login",type:"POST",data:{email:e,password:t}}).done((function(e){a.setState({loginmessage:e.loginmessage})})):a.setState({loginmessage:""})}))},t.check=t.check.bind(Object(E.a)(t)),t.getPassword=t.getPassword.bind(Object(E.a)(t)),t.getConfirmPassword=t.getConfirmPassword.bind(Object(E.a)(t)),t.state={password:"",confirmpassword:"",confirmpasswordstatus:"",loginmessage:"",signupmessage:""};setInterval((function(){return t.check()}),750);return t}return Object(v.a)(a,e),Object(p.a)(a,[{key:"check",value:function(){try{this.state.password===this.state.confirmpassword?(this.state.password,this.setState({confirmpasswordstatus:""})):this.setState({confirmpasswordstatus:"passwords do not match"})}catch(e){console.log("Error")}}},{key:"getPassword",value:function(){var e=Object(i.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({password:a.target.value});case 2:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"getConfirmPassword",value:function(){var e=Object(i.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({confirmpassword:a.target.value});case 2:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"removeformsubmit",value:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},{key:"render",value:function(){return s.a.createElement("html",null,s.a.createElement("div",{className:"space2"}),s.a.createElement("body",{className:"Body"},s.a.createElement("b",null,s.a.createElement("div",{id:"about"},s.a.createElement("a",{className:"bodytitle"},"strive for efficiency+"),s.a.createElement(y,{exact:!0,path:"/"}),s.a.createElement("p",null,"Explore the data behind what makes your team work. Receive customised employee recommendations, that learns as you use the app.")),s.a.createElement("div",{className:"space2"}),s.a.createElement("div",{id:"pricing"},s.a.createElement("a",{className:"bodytitle"},"all at a price you can't say no to+"),s.a.createElement("p",null,"discover all 4 price plans, for 4 different sized projects."),s.a.createElement("div",{className:"priceboxes"},s.a.createElement("div",{className:"prepricebox"}),s.a.createElement(f.Link,{to:"signupsection",smooth:!0,activeClass:"active",offset:-70},s.a.createElement("a",{href:"#"},s.a.createElement("div",{className:"silver"},s.a.createElement("a",{className:"boxtitle"},"Silver"),s.a.createElement("p",null,"Efficiency reports and employee recommendations"),s.a.createElement("p",null,"Up to 5 team members"),s.a.createElement("p",null,"Up to 20 active tasks"),s.a.createElement("div",{className:"payboxgap"}),s.a.createElement("div",{className:"paybox"},s.a.createElement("div",{className:"price"},"\xa32.89"),s.a.createElement("p",null,"pcm per member"))))),s.a.createElement("div",{className:"boxspace"}),s.a.createElement(f.Link,{to:"signupsection",smooth:!0,activeClass:"active",offset:-70},s.a.createElement("a",{href:"#"},s.a.createElement("div",{className:"gold"},s.a.createElement("a",{className:"boxtitle"},"Gold"),s.a.createElement("p",null,"Efficiency reports and employee recommendations"),s.a.createElement("p",null,"Up to 25 team members"),s.a.createElement("p",null,"Up to 100 active tasks"),s.a.createElement("p",null,"Up to 8 tasks in the critical path"),s.a.createElement("div",{className:"payboxgap"}),s.a.createElement("div",{className:"paybox"},s.a.createElement("div",{className:"price"},"\xa35.89"),s.a.createElement("p",null,"pcm per member"))))),s.a.createElement("div",{className:"boxspace"}),s.a.createElement(f.Link,{to:"signupsection",smooth:!0,activeClass:"active",offset:-70},s.a.createElement("a",{href:"#"},s.a.createElement("div",{className:"diamond"},s.a.createElement("img",{className:"crownsvg",src:h.a}),s.a.createElement("div",{className:"diamondboxtext"},s.a.createElement("p",{className:"mostpopulartext"},"most popular"),s.a.createElement("a",{className:"boxtitle"},"Diamond"),s.a.createElement("p",null,"Efficiency reports and employee recommendations"),s.a.createElement("p",null,"Up to 50 team members"),s.a.createElement("p",null,"Up to 1000 active tasks"),s.a.createElement("p",null,"Up to 15 tasks in the critical path"),s.a.createElement("div",{className:"payboxgap"}),s.a.createElement("div",{className:"paybox"},s.a.createElement("div",{className:"price"},"\xa38.89"),s.a.createElement("p",null,"pcm per member")))))),s.a.createElement("div",{className:"boxspace"}),s.a.createElement(f.Link,{to:"signupsection",smooth:!0,activeClass:"active",offset:-70},s.a.createElement("a",{href:"#"},s.a.createElement("div",{className:"platinum"},s.a.createElement("a",{className:"boxtitle"},"Platinum"),s.a.createElement("p",null,"Efficiency reports and employee recommendations"),s.a.createElement("p",null,"Unlimited team members"),s.a.createElement("p",null,"Unlimited active tasks"),s.a.createElement("p",null,"Unlimited tasks in the critical path"),s.a.createElement("div",{className:"payboxgap"}),s.a.createElement("div",{className:"paybox"},s.a.createElement("div",{className:"price"},"\xa315.89"),s.a.createElement("p",null,"pcm per member"))))),s.a.createElement("div",{className:"postpricebox"}))),s.a.createElement("div",{className:"space2"}),s.a.createElement("div",{id:"signupsection",className:"signupsection"},s.a.createElement("a",{className:"bodytitle"},"sign up and experience the magic of automation+"),s.a.createElement("div",{className:"texttoinputbreak"}),s.a.createElement("div",{className:"signupandlogin"}),s.a.createElement("div",{className:"signup"},s.a.createElement("input",{type:"hidden",name:"form_name",value:"signup"}),s.a.createElement("form",{onSubmit:this.removeformsubmit},s.a.createElement("input",{type:"text",className:"boxinput",placeholder:"first name",name:"fname",required:!0}),s.a.createElement("div",{className:"midboxbreak"}),s.a.createElement("input",{type:"text",className:"boxinput",placeholder:"last name",name:"lname",required:!0}),s.a.createElement("div",{className:"midboxbreak"}),s.a.createElement("input",{type:"email",className:"boxinput",placeholder:"e-mail address",name:"email",required:!0}),s.a.createElement("div",{className:"midboxbreak"}),s.a.createElement("input",{type:"password",className:"boxinput",placeholder:"create password",name:"password",id:"password",value:this.state.password,onChange:this.getPassword,required:!0}),s.a.createElement("div",{className:"midboxbreak"}),s.a.createElement("input",{type:"password",className:"boxinput",placeholder:"confirm password",name:"confirmpassword",id:"confirmpassword",value:this.state.confirmpassword,onChange:this.getConfirmPassword,required:!0}),s.a.createElement("div",{className:"confirmpasswordstatus"},this.state.confirmpasswordstatus),s.a.createElement("input",{type:"hidden",name:"identifier",value:"signup"}),s.a.createElement("input",{type:"submit",className:"boxinput",value:"sign up"})),s.a.createElement("p",null,this.state.signupmessage)),s.a.createElement("div",{className:"signupsigninbreak"}),s.a.createElement("div",{className:"login"},s.a.createElement("form",{onSubmit:this.removeformsubmit},s.a.createElement("input",{type:"email",className:"boxinput",placeholder:"e-mail address",name:"email",id:"loginemail",required:!0}),s.a.createElement("div",{className:"midboxbreak"}),s.a.createElement("input",{type:"password",className:"boxinput",placeholder:"password",name:"password",id:"loginpassword",required:!0}),s.a.createElement("div",{className:"midboxbreak"}),s.a.createElement("input",{type:"hidden",name:"identifier",value:"login"}),s.a.createElement("input",{type:"submit",className:"boxinput",value:"log in",onClick:this.loginsubmit})),s.a.createElement("p",null,this.state.loginmessage))))),s.a.createElement("footer",{className:"footer"},s.a.createElement("b",null,"Alex Bainbridge 2019-2020 NEA")))}}]),a}(n.Component);r.a.render(s.a.createElement((function(){return s.a.createElement("html",null,s.a.createElement("div",{className:"NavBar"},s.a.createElement("b",null,s.a.createElement(f.Link,{to:"home",smooth:!0,activeClass:"active"},s.a.createElement("a",{href:"#"},"home")),s.a.createElement(f.Link,{to:"about",smooth:!0,activeClass:"active",offset:-75},s.a.createElement("a",{href:"#"},"about")),s.a.createElement(f.Link,{to:"pricing",smooth:!0,activeClass:"active",offset:-55},s.a.createElement("a",{href:"#"},"pricing")),s.a.createElement(f.Link,{to:"signupsection",smooth:!0,activeClass:"active",offset:-75},s.a.createElement("a",{href:"#"},"sign up + log in")))))}),null),document.getElementById("navbar")),r.a.render(s.a.createElement((function(){return s.a.createElement("html",null,s.a.createElement("div",{className:"App",id:"home"},s.a.createElement("header",{className:"App-header"},s.a.createElement("div",{className:"space1"}),s.a.createElement("h1",{className:"title"},s.a.createElement("b",null,"projects plus+")),s.a.createElement("a",{className:"strapline"},s.a.createElement("b",null,"team management, made simple.")))))}),null),document.getElementById("root")),r.a.render(s.a.createElement(w,null),document.getElementById("body"))}},[[24,1,2]]]);
//# sourceMappingURL=main.614a38fe.chunk.js.map