(window.webpackJsonpdashboard=window.webpackJsonpdashboard||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"media/up-arrow.957a2b25.svg"},26:function(e,t,a){e.exports=a.p+"media/down-arrow.ed47687f.svg"},31:function(e,t,a){e.exports=a(54)},36:function(e,t,a){},37:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),l=a.n(i),o=(a(36),a(4)),c=a(10),s=a(11),p=a(12),u=a(14),d=a(13),h=a(15),m=(a(37),a(2)),f=a.n(m),g=a(5),b=a(6),j=a(8),v=a(7),E=a(9),y=a(3),P=a(25),O=a.n(P),w=a(26),k=a.n(w),x=a(1);function C(){var e=Object(y.a)(["\n  font-family: 'Karla', sans-serif;\n  padding: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  box-shadow: 0 0px #fff, 0 0 3px 0.5px #dadada;\n  background-color: ",";\n  transition: all 0.2s;\n  z-index: 1;\n  color: white;\n"]);return C=function(){return e},e}function S(){var e=Object(y.a)(["\n  opacity: ",";\n  padding: 10px;\n  z-index: 1;\n  position: absolute;\n  background-color: #FFB5A5\n  border-radius: 5px;\n"]);return S=function(){return e},e}function T(){var e=Object(y.a)(["\n  width: ","%;\n  background-color: ",";\n  height: 20px;\n  border-radius: 1px;\n"]);return T=function(){return e},e}function N(){var e=Object(y.a)(["\n  width: 100%;\n  height: 20px;\n  background: #FFFFFF;\n  border-color: #bebebe;\n  border-style: solid;\n  border-width: 1.8px;\n  border-radius: 4px;\n  align-items: left;\n"]);return N=function(){return e},e}var U=x.a.div(N()),B=x.a.div(T(),(function(e){return e.percentage}),(function(e){return e.colour})),D=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(j.a)(this,Object(v.a)(t).call(this,e))).state={fillup:e.efficiency/200*100,barColour:"#00CC66"},e.efficiency>=100?a.state.barColour="#00CC66":e.efficiency>=50?a.state.barColour="#FF8429":e.efficiency<50&&(a.state.barColour="#DE614A"),a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("html",null,r.a.createElement(U,null,r.a.createElement(B,{percentage:this.state.fillup,colour:this.state.barColour})))}}]),t}(r.a.Component),V=(x.a.span(S(),(function(e){return e.visible})),function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(j.a)(this,Object(v.a)(t).call(this,e))).updateVisibility=function(){0===a.state.ToolTipTextVisible?a.setState({ToolTipTextVisible:.95}):a.setState({ToolTipTextVisible:0})},a.state={abbrv:e.abbrv,skillTitle:e.skillTitle,efficiency:e.efficiency,ToolTipTextVisible:0},a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.abbrv?this.setState({abbrv:e.abbrv}):e.skillTitle?this.setState({skillTitle:e.skillTitle}):e.efficiency&&this.setState({efficiency:e.efficiency})}},{key:"render",value:function(){if(this.state.abbrv){this.props.skillTitle,this.props.efficiency;return r.a.createElement("html",null,r.a.createElement("button",{onClick:this.updateVisibility,class:"progressBarSkill",title:this.props.skillTitle+": "+this.props.efficiency+"/200"},this.props.abbrv))}return r.a.createElement("div",null,"Error")}}]),t}(r.a.Component)),F=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(j.a)(this,Object(v.a)(t).call(this,e))).state={percentageEfficiency:Math.round(e.efficiency/200*100)},a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return this.state={percentageEfficiency:Math.round(this.props.efficiency/200*100)},this.props?r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"40%"},class:"progressBarSkillTD"},r.a.createElement(V,{class:"progressBarSkill",abbrv:this.props.skillAbbrv,skillTitle:this.props.skillTitle,efficiency:this.props.efficiency})),r.a.createElement("td",{style:{width:"fit-content"}},r.a.createElement("div",{class:"progressBarEfficiencyValue"},this.state.percentageEfficiency,"%")),r.a.createElement("td",{class:"progressBarBarTD"},r.a.createElement("div",{class:"progressBarBar"},r.a.createElement(D,{efficiency:this.props.efficiency})))):r.a.createElement("tr",null,"No props")}}]),t}(r.a.Component),W=x.a.span(C(),(function(e){return e.colour})),z=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(j.a)(this,Object(v.a)(t).call(this,e))).updateLength=function(){return a.state.length>a.state.data.length?a.state.data.length:a.state.length},a.dataToPresent=function(e){var t;if(!e)return r.a.createElement("div",null,"No data in props");try{if(a.state.title&&e.length&&0!==a.state.length)return e.length<a.state.length?(a.setState({length:e.length}),t=e.slice(0,e.length)):t=e.slice(0,a.state.length),r.a.createElement("table",null,t&&t.length&&t.map((function(e,t){return r.a.createElement(F,{skillTitle:e.skillTitle,skillAbbrv:e.skillAbbrv,efficiency:e.avg})})));if(!a.state.title)return r.a.createElement("div",null,"No title");if(!e.length){return r.a.createElement("html",{style:{margin:"10px","padding-left":"3vw","padding-right":"3vw"}},r.a.createElement("div",null,"You don't have any skills yet!"),r.a.createElement("br",null),r.a.createElement("div",null,"Complete tasks to see your statistics"))}if(0===a.state.length)return r.a.createElement("div",null,"No length")}catch(n){return void console.log("Present data error")}},a.increaseLength=function(){a.state.length<a.state.data.length&&(a.setState({length:a.state.length+=1}),a.setState({presentableData:a.dataToPresent(a.state.data)}))},a.decreaseLength=function(){a.state.length>1&&(a.setState({length:a.state.length-=1}),a.setState({presentableData:a.dataToPresent(a.state.data)}))},a.state={title:"",data:[],presentableData:"",length:5,lengthIfDataSmallerThanLength:e.data.length},a.setState({data:e.data}),a.setState({presentableData:a.dataToPresent(e.data)}),a.state.title=e.title,a.setState({length:e.length}),a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(e){e!==this.props&&(e.data&&(this.setState({data:e.data}),this.setState({presentableData:this.dataToPresent(e.data)})),e.title&&this.setState({title:e.title}),e.length&&this.setState({length:e.length}))}},{key:"render",value:function(){return r.a.createElement("html",{class:"widget"},r.a.createElement(W,{colour:this.props.colour},r.a.createElement("b",null,this.state.title," "),this.updateLength(),"/",this.state.data.length,r.a.createElement("button",{class:"ArrowButton",onClick:this.increaseLength,title:"Show more"},r.a.createElement("img",{class:"arrowsvg",src:k.a,title:"Show more"})),r.a.createElement("button",{class:"ArrowButton",onClick:this.decreaseLength,title:"Show less"},r.a.createElement("img",{class:"arrowsvg",src:O.a,title:"Show less"}))),r.a.createElement("div",{className:"efficiencywidgetdatawrapper"},r.a.createElement("div",{class:"efficiencyWidgetData"},this.state.presentableData)))}}]),t}(r.a.Component);function A(){var e=Object(y.a)(["\n  font-family: 'Karla', sans-serif;\n  padding: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  box-shadow: 0 0px #fff, 0 0 3px 0.5px #dadada;\n  background-color: ",";\n  transition: all 0.2s;\n  z-index: 1;\n  color: white;\n"]);return A=function(){return e},e}function M(){var e=Object(y.a)(["\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 6px;\n  padding: 10px;\n  cursor: default;\n  border-style: solid;\n  border-color: #e2f2f2;\n  border-width: 2px;\n\n  &:hover {\n    box-shadow: 0 0 5px 0.5px #E2E2E2;\n  }\n"]);return M=function(){return e},e}function L(){var e=Object(y.a)(["\n  background-color: white;\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 6px;\n  padding: 10px;\n  cursor: default;\n  border-color: ",";\n  border-style: solid;\n  border-width: 2px;\n\n  &:hover {\n    box-shadow: 0 0 5px 0.5px #E2E2E2;\n  }\n"]);return L=function(){return e},e}var G=x.a.div(L(),(function(e){return e.colour})),J=x.a.div(M()),Y=x.a.span(A(),(function(e){return e.colour})),R=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(j.a)(this,Object(v.a)(t).call(this,e))).updatePage=function(e){for(var t in a.state.projects)JSON.stringify(a.state.projects[t].id)===e.target.id&&a.props.triggerParentUpdate(JSON.stringify(a.state.projects[t].title),e.target.id)},a.state={projects:[]},a}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({projects:e.projects})}},{key:"render",value:function(){var e=this;return this.state.projects.length?r.a.createElement("html",{class:"widget"},r.a.createElement(Y,{colour:"#A569BD"},r.a.createElement("b",null,this.props.title)),r.a.createElement("p",null),this.state.projects&&this.state.projects.length&&this.state.projects.map((function(t,a){return r.a.createElement("div",null,r.a.createElement(G,{id:t.id,onClick:e.updatePage,colour:t.colour},t.title),r.a.createElement("p",null))})),r.a.createElement(J,{onClick:this.props.triggerCreateProject},"Create a project"),r.a.createElement("p",null)):r.a.createElement("html",{class:"widget"},r.a.createElement(Y,{colour:"#A569BD"},r.a.createElement("b",null,this.props.title)),r.a.createElement("p",null),"You are not a member of any projects",r.a.createElement("p",null),r.a.createElement(J,{onClick:this.props.triggerCreateProject},"Create Project"),r.a.createElement("p",null))}}]),t}(r.a.Component);a(42);function I(){var e=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  -webkit-appearance: none;\n  width: 100%;\n  padding: 10px;\n  text-align: centre;\n  text-align-last: center;\n\n  &:focus {\n    outline: none;\n  }\n"]);return I=function(){return e},e}function q(){var e=Object(c.a)(["\n  visibility: ",";\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n"]);return q=function(){return e},e}function K(){var e=Object(c.a)(["\n  background-color: white;\n  border-radius: 10px;\n  visibility: ",";\n  padding: 40px;\n  width: 30vw;\n  position: absolute;\n  left: 50%;\n  margin-left: -20vw;\n  top: 50%;\n  margin-top: -20vh;\n  z-index: 999;\n"]);return K=function(){return e},e}function H(){var e=Object(c.a)(["\n  cursor: pointer;\n  border-radius: 6px;\n  padding: 5px;\n  font-size: 2vh;\n  position: relative;\n  bottom: 5px;\n  border-width: 0.5px;\n  border-style: solid;\n  background-color: white;\n  padding: 7px 18px;\n\n  &:hover {\n    background-color: rgb(247,247,247);\n  }\n"]);return H=function(){return e},e}function Q(){var e=Object(c.a)(["\n  z-index: 4;\n  height: calc(50px + 1vmin);\n  border-bottom: "," solid 3px;\n  position: fixed;\n  width: 100%;\n"]);return Q=function(){return e},e}var X=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).selectChange=function(e){for(var t=0;t<a.props.items.length;t++)if(a.props.items[t].title===e.target.value)return console.log("Changing dashboard state"),void a.props.triggerParentUpdate(e.target.value,a.props.items[t].id);a.props.triggerParentUpdate(e.target.value,0)},a.state={title:e.title||"title",items:e.items,projectid:0},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.title&&this.setState({title:e.title}),e.items&&this.setState({items:e.items}),e.projectid&&this.setState({projectid:e.projectid})}},{key:"render",value:function(){if("Your Profile"===this.state.title)return r.a.createElement("html",null,r.a.createElement("select",{id:"ProjectViewDropdown",class:"ProjectViewDropdown",onChange:this.selectChange},r.a.createElement("option",{value:"profile"},this.props.title),this.state.items&&this.state.items.length&&this.state.items.map((function(e,t){return r.a.createElement("option",{value:e.title},e.title)}))));if("title"!==this.state.title){if(this.props.items){this.props.projectid;for(var e=0;e<this.props.items.length;e++)this.props.items[e].id==this.props.projectid&&(console.log("Removed: "+JSON.stringify(this.props.items[e])),this.props.items.splice(e,1));return r.a.createElement("html",null,r.a.createElement("select",{id:"ProjectViewDropdown",class:"ProjectViewDropdown",onChange:this.selectChange},r.a.createElement("option",{value:this.state.title},this.state.title),this.state.items&&this.state.items.length&&this.state.items.map((function(e,t){return r.a.createElement("option",{value:e.title},e.title)})),r.a.createElement("option",{value:"profile"},"Your Profile")))}return r.a.createElement("div",null,"none")}return r.a.createElement("div",null,"none")}}]),t}(r.a.Component),Z=x.a.div(Q(),(function(e){return e.colour})),$=x.a.div(H()),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).logOut=function(){window.location.href="/"},a.state={username:"",page:"",projectid:0,projects:[]},a.setState({username:e.username}),a.setState({page:e.page}),e.projectid?a.setState({projectid:e.projectid}):a.setState({projectid:0}),a.setState({projects:e.projects}),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({username:e.username}),this.setState({page:e.page}),e.projects&&this.setState({projects:e.projects}),e.projectid&&this.setState({projectid:e.projectid})}},{key:"render",value:function(){return r.a.createElement("html",null,r.a.createElement(Z,{colour:this.props.colour},r.a.createElement("div",{class:"NavBar"},r.a.createElement("div",null,r.a.createElement("a",{class:"pageStateNavBar",style:{float:"left","margin-left":"4vw"}},r.a.createElement(X,{title:this.state.page,items:this.props.projects,triggerParentUpdate:this.props.triggerParentUpdate,projectid:this.props.projectid}))),r.a.createElement("div",null,r.a.createElement("b",null,r.a.createElement("a",null,r.a.createElement($,{onClick:this.logOut,style:{"margin-right":"4vw"}},"Log Out")))))))}}]),t}(r.a.Component),ee=x.a.div(K(),(function(e){return e.visible})),te=x.a.button(q(),(function(e){return e.visible})),ae=x.a.select(I()),ne=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).getUserProfileData=function(){var e=Object(o.a)(a);f()(document).ready((function(){var t=f.a.ajax({url:"/getuserprofile",type:"POST",data:{}});try{t.done((function(t){e.setState({username:t.username}),e.setState({projects:t.projects}),e.setState({timeEfficienciesMax:t.timeEfficienciesMax}),e.setState({timeEfficienciesMin:t.timeEfficienciesMin})}))}catch(a){console.log("Error")}}))},a.addEfficiency=function(){Object(o.a)(a);f()(document).ready((function(){var e=f.a.ajax({url:"/addefficiency",type:"POST",data:{}});try{e.done((function(e){}))}catch(t){}})),window.location.reload()},a.createNewProject=function(){a.setState({CreateProjectPopUpVisibility:"visible"})},a.clickOffCreateProjectPopUp=function(){"False"===a.state.cancelClickOff?a.setState({CreateProjectPopUpVisibility:"hidden"}):a.state.cancelClickOff="False"},a.clickCreateProjectPopupCreateButton=function(){a.state.cancelClickOff="True"},a.clickCreateProjectPopupCancelButton=function(){a.setState({CreateProjectPopUpVisibility:"hidden"})},a.submitNewProject=function(){var e=f()("#projecttitle").val(),t=f()("#priceplan").val(),n=f()("#projectcolour").val();if(""!==e)if(e.length>25)window.alert("Project titles must be less than 25 characters");else if(null!==t&&null!==n){var r={title:e,pricing:t,colour:n};Object(o.a)(a);f()(document).ready((function(){var e=f.a.ajax({url:"/createproject",type:"POST",data:JSON.stringify(r),dataType:"json",contentType:"application/json;charset=utf-8"});try{e.done((function(e){window.location.reload()}))}catch(t){}}))}},a.state={username:"",projects:[],timeEfficienciesMax:[],timeEfficienciesMin:[],CreateProjectPopUpVisibility:"hidden",cancelClickOff:"False"},a.setState({CreateProjectPopUpVisibility:"hidden"}),a.getUserProfileData(),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"removeformsubmit",value:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},{key:"render",value:function(){return r.a.createElement("html",null,r.a.createElement(_,{className:"NavBar",username:this.state.username,projects:this.state.projects,page:this.state.username+"'s Dashboard",triggerParentUpdate:this.props.triggerParentUpdate,projectid:0,colour:"crimson"}),r.a.createElement("body",{className:"Body"},r.a.createElement(te,{visible:this.state.CreateProjectPopUpVisibility,onClick:this.clickOffCreateProjectPopUp},r.a.createElement(ee,{visible:this.state.CreateProjectPopUpVisibility,onClick:this.clickCreateProjectPopupCreateButton},r.a.createElement("div",{style:{display:"grid"}},r.a.createElement("div",{style:{"font-size":"2.5vh","padding-bottom":"3vh"}},r.a.createElement("b",null,"Create a new project")),r.a.createElement("div",null,r.a.createElement("form",{style:{display:"grid"},onSubmit:this.removeformsubmit},r.a.createElement("input",{type:"text",className:"boxinput",placeholder:"project title",name:"projecttitle",id:"projecttitle",onInput:this.clickCreateProjectPopupCreateButton,required:!0,style:{"margin-left":"auto","margin-right":"auto",width:"100%","text-align":"center"}}),r.a.createElement("p",null),r.a.createElement("input",{type:"color",style:{"margin-left":"auto","margin-right":"auto","border-style":"none"},id:"projectcolour",onInput:this.clickCreateProjectPopupCreateButton,required:!0}),r.a.createElement("p",null),r.a.createElement(ae,{id:"priceplan",required:!0},r.a.createElement("option",{value:"",disabled:!0,selected:!0},"select price plan"),r.a.createElement("option",{value:"silver"},"silver"),r.a.createElement("option",{value:"gold"},"gold"),r.a.createElement("option",{value:"diamond"},"diamond"),r.a.createElement("option",{value:"platinum"},"platinum")),r.a.createElement("p",null),r.a.createElement("div",{style:{display:"inline-flex","margin-left":"auto","margin-right":"auto"}},r.a.createElement("input",{type:"reset",value:"Cancel",onClick:this.clickCreateProjectPopupCancelButton}),r.a.createElement("div",{style:{"padding-left":"14vw"}}),r.a.createElement("button",{onClick:this.submitNewProject},"Create"))))))),r.a.createElement("button",{onClick:this.addEfficiency}),r.a.createElement("div",{className:"widgets"},r.a.createElement("div",{className:"horizontalWidgetGap"}),r.a.createElement("div",{className:"widgets-column"},r.a.createElement(z,{title:"Your best skills for meeting a deadline",data:this.state.timeEfficienciesMax,length:7,colour:"rgb(112, 175, 121)"}),r.a.createElement("div",{className:"verticalWidgetGap"}),r.a.createElement(z,{title:"Skills to improve when meeting a deadline",data:this.state.timeEfficienciesMin,length:5,colour:"#C0392B"})),r.a.createElement("div",{className:"horizontalWidgetGap"}),r.a.createElement("div",{className:"widgets-column"},r.a.createElement(R,{title:"Your projects",projects:this.state.projects,triggerCreateProject:this.createNewProject,triggerParentUpdate:this.props.triggerParentUpdate}),r.a.createElement("div",{className:"verticalWidgetGap"}),r.a.createElement(z,{title:"Skills to improve when meeting a deadline",data:this.state.timeEfficienciesMin,length:9,colour:"#5DADE2"})),r.a.createElement("div",{className:"horizontalWidgetGap"}),r.a.createElement("div",{className:"widgets-column"},r.a.createElement(z,{title:"Skills to improve when meeting a deadline",data:this.state.timeEfficienciesMin,length:9,colour:"#1596B9"}),r.a.createElement("div",{className:"verticalWidgetGap"}),r.a.createElement(R,{title:"Your tasks",projects:this.state.projects,triggerCreateProject:this.createNewProject,triggerParentUpdate:this.props.triggerParentUpdate})),r.a.createElement("div",{className:"horizontalWidgetGap"}))),r.a.createElement("footer",{className:"footer"},r.a.createElement("b",null,"Alex Bainbridge 2019-2020 NEA")))}}]),t}(r.a.Component),re=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).getUserProjectData=function(e){var t=Object(o.a)(a);f()(document).ready((function(){var a=f.a.ajax({url:"/getuserproject",type:"POST",data:JSON.stringify({projectid:e}),dataType:"json",contentType:"application/json;charset=utf-8"});try{a.done((function(e){t.setState({username:e.username}),t.setState({projects:e.projects}),t.setState({title:e.title}),t.setState({colour:e.colour})}))}catch(n){}}))},a.state={username:"",projects:[],projectid:0,title:""},a.setState({projectid:e.projectid}),a.getUserProjectData(e.projectid),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("html",null,r.a.createElement(_,{className:"NavBar",username:this.state.username,page:this.state.title,projects:this.state.projects,triggerParentUpdate:this.props.triggerParentUpdate,projectid:this.props.projectid,colour:this.state.colour}),r.a.createElement("div",{style:{"padding-top":"calc(75px + 1vh)"}},"Project: ",this.state.title))}}]),t}(r.a.Component),ie=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).updatePage=function(e,t){console.log("Updating page"),a.setState({page:e}),a.state.projectid=t},a.state={page:"",projectid:0},a.state.page="profile",a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return"profile"===this.state.page?r.a.createElement(ne,{triggerParentUpdate:this.updatePage}):r.a.createElement(re,{projectid:this.state.projectid,triggerParentUpdate:this.updatePage})}}]),t}(r.a.Component);l.a.render(r.a.createElement(ie,null),document.getElementById("body"))}},[[31,1,2]]]);
//# sourceMappingURL=main.443ac92c.chunk.js.map