(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"media/up-arrow.6505910a.svg"},20:function(e,t,a){e.exports=a.p+"media/down-arrow.7638c12e.svg"},25:function(e,t,a){e.exports=a(48)},30:function(e,t,a){},31:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),s=a.n(r),l=(a(30),a(7)),c=a(1),o=a(2),u=a(4),p=a(3),h=a(5),f=a(9),m=a(10),d=(a(31),a(6)),g=a.n(d),b=a(19),v=a.n(b),j=a(20),E=a.n(j);a(32);function y(){var e=Object(f.a)(["\n  opacity: ",";\n  padding: 10px;\n  z-index: 1;\n  position: absolute;\n  background-color: #FFB5A5\n  border-radius: 5px;\n  margin-left: ","px;\n  margin-top: -7px;\n"]);return y=function(){return e},e}function O(){var e=Object(f.a)(["\n  width: ","%;\n  height: 20px;\n  background-color: ",";\n  border-radius: 1px;\n"]);return O=function(){return e},e}function S(){var e=Object(f.a)(["\n  width: 100%;\n  height: 20px;\n  background: #FFFFFF;\n  border-color: #bebebe;\n  border-style: solid;\n  border-radius: 4px;\n  align-items: left;\n"]);return S=function(){return e},e}var k=m.a.div(S()),T=m.a.div(O(),(function(e){return e.percentage}),(function(e){return e.colour})),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={fillup:e.efficiency/200*100,barColour:"#00CC66"},e.efficiency>=100?a.state.barColour="#00CC66":e.efficiency>=50?a.state.barColour="#FF8429":e.efficiency<50&&(a.state.barColour="#DE614A"),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("html",null,i.a.createElement(k,null,i.a.createElement(T,{percentage:this.state.fillup,colour:this.state.barColour})))}}]),t}(i.a.Component),P=m.a.span(y(),(function(e){return e.visible}),(function(e){return e.leftMargin})),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).updateVisibility=function(){0===a.state.ToolTipTextVisible?a.setState({ToolTipTextVisible:.95}):a.setState({ToolTipTextVisible:0})},a.state={abbrv:e.abbrv,skillTitle:e.skillTitle,efficiency:e.efficiency,ToolTipTextVisible:0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.abbrv?this.setState({abbrv:e.abbrv}):e.skillTitle?this.setState({skillTitle:e.skillTitle}):e.efficiency&&this.setState({efficiency:e.efficiency})}},{key:"render",value:function(){return this.state.abbrv?i.a.createElement("html",null,i.a.createElement("button",{onClick:this.updateVisibility,class:"progressBarSkill",title:"Click to view more detail"},this.props.abbrv),i.a.createElement(P,{visible:this.state.ToolTipTextVisible,leftMargin:Math.round(30-1.5*this.props.abbrv.length)},this.props.skillTitle,": ",this.props.efficiency,"/200")):i.a.createElement("div",null,"Error")}}]),t}(i.a.Component),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={percentageEfficiency:Math.round(e.efficiency/200*100)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state={percentageEfficiency:Math.round(this.props.efficiency/200*100)},this.props?i.a.createElement("html",null,i.a.createElement("div",{class:"progressBarEfficiencyValue"},this.state.percentageEfficiency,"%"),i.a.createElement("table",{class:"EfficienciesTable",align:"centre"},i.a.createElement("tr",null,i.a.createElement("td",{class:"progressBarSkillTD"},i.a.createElement(C,{class:"progressBarSkill",abbrv:this.props.skillAbbrv,skillTitle:this.props.skillTitle,efficiency:this.props.efficiency})),i.a.createElement("td",{class:"progressBarBarTD"},i.a.createElement("div",{class:"progressBarBar"},i.a.createElement(w,{efficiency:this.props.efficiency})))))):i.a.createElement("div",null,"No props")}}]),t}(i.a.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).updateLength=function(){return a.state.length>a.state.data.length?a.state.data.length:a.state.length},a.dataToPresent=function(e){var t;if(!e)return i.a.createElement("div",null,"No data in props");try{if(a.state.title&&e.length&&0!==a.state.length)return e.length<a.state.length?(a.setState({length:e.length}),t=e.slice(0,e.length)):t=e.slice(0,a.state.length),i.a.createElement("span",null,t&&t.length&&t.map((function(e,t){return i.a.createElement(x,{skillTitle:e.skillTitle,skillAbbrv:e.skillAbbrv,efficiency:e.avg})})));if(!a.state.title)return i.a.createElement("div",null,"No title");if(!e.length){return i.a.createElement("html",{style:{margin:"10px","padding-left":"3vw","padding-right":"3vw"}},i.a.createElement("div",null,"You don't have any skills yet!"),i.a.createElement("br",null),i.a.createElement("div",null,"Complete tasks to see your statistics"))}if(0===a.state.length)return i.a.createElement("div",null,"No length")}catch(n){return void console.log("Present data error")}},a.increaseLength=function(){a.state.length<a.state.data.length&&(a.setState({length:a.state.length+=1}),a.setState({presentableData:a.dataToPresent(a.state.data)}))},a.decreaseLength=function(){a.state.length>1&&(a.setState({length:a.state.length-=1}),a.setState({presentableData:a.dataToPresent(a.state.data)}))},a.state={title:"",data:[],presentableData:"",length:5,lengthIfDataSmallerThanLength:e.data.length},a.setState({data:e.data}),a.setState({presentableData:a.dataToPresent(e.data)}),a.state.title=e.title,a.setState({length:e.length}),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e!==this.props&&(e.data&&(this.setState({data:e.data}),this.setState({presentableData:this.dataToPresent(e.data)})),e.title&&this.setState({title:e.title}),e.length&&this.setState({length:e.length}))}},{key:"render",value:function(){return i.a.createElement("html",{className:"widget"},i.a.createElement("span",{class:"EfficiencyWidgetTitleBar"},i.a.createElement("b",null,this.state.title," "),this.updateLength(),"/",this.state.data.length,i.a.createElement("button",{class:"ArrowButton",onClick:this.increaseLength,title:"Show more"},i.a.createElement("img",{class:"arrowsvg",src:E.a,title:"Show more"})),i.a.createElement("button",{class:"ArrowButton",onClick:this.decreaseLength,title:"Show less"},i.a.createElement("img",{class:"arrowsvg",src:v.a,title:"Show less"}))),i.a.createElement("div",{class:"efficiencyWidgetData"},this.state.presentableData))}}]),t}(i.a.Component),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).selectChange=function(e){for(var t=0;t<a.props.items.length;t++)if(a.props.items[t].title===e.target.value)return void a.props.triggerParentUpdate(e.target.value,a.props.items[t].id);a.props.triggerParentUpdate(e.target.value,0)},a.state={title:e.title||"title",items:e.items},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.title&&this.setState({title:e.title}),e.items&&(console.log("Received new items prop: "+JSON.stringify(e.items)),this.setState({items:e.items}))}},{key:"render",value:function(){if("Your Profile"===this.state.title)return i.a.createElement("html",null,i.a.createElement("select",{id:"ProjectViewDropdown",class:"ProjectViewDropdown",onChange:this.selectChange},i.a.createElement("option",{value:"profile"},this.props.title),this.state.items&&this.state.items.length&&this.state.items.map((function(e,t){return i.a.createElement("option",{value:e.title},e.title)}))));this.props.projectid;return i.a.createElement("html",null,i.a.createElement("select",{id:"ProjectViewDropdown",class:"ProjectViewDropdown",onChange:this.selectChange},i.a.createElement("option",{value:this.state.title},this.state.title),this.state.items&&this.state.items.length&&this.state.items.map((function(e,t){return i.a.createElement("option",{value:e.title},e.title)})),i.a.createElement("option",{value:"profile"},"Your profile")))}}]),t}(i.a.Component),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).logOut=function(){window.location.href="/"},a.state={username:"",page:"",projects:[]},a.setState({username:e.username}),a.setState({page:e.page}),a.setState({projects:e.projects}),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({username:e.username}),this.setState({page:e.page}),e.projects&&this.setState({projects:e.projects})}},{key:"render",value:function(){return i.a.createElement("html",null,i.a.createElement("div",{className:"NavBar"},i.a.createElement("b",null,i.a.createElement("a",null,i.a.createElement("button",{onClick:this.logOut},"Log Out"))),i.a.createElement("b",null,i.a.createElement("a",null,"Welcome, ",this.state.username)),i.a.createElement("a",{class:"pageStateNavBar"},"Currently Viewing: ",i.a.createElement(B,{title:this.state.page,items:this.props.projects,triggerParentUpdate:this.props.triggerParentUpdate,projectid:this.props.projectid}))))}}]),t}(i.a.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).getUserProfileData=function(){var e=Object(l.a)(a);g()(document).ready((function(){var t=g.a.ajax({url:"/getuserprofile",type:"POST",data:{}});try{t.done((function(t){e.setState({username:t.username}),e.setState({projects:t.projects}),e.setState({timeEfficienciesMax:t.timeEfficienciesMax}),e.setState({timeEfficienciesMin:t.timeEfficienciesMin})}))}catch(a){console.log("Error")}}))},a.addEfficiency=function(){Object(l.a)(a);g()(document).ready((function(){var e=g.a.ajax({url:"/addefficiency",type:"POST",data:{}});try{e.done((function(e){}))}catch(t){}})),window.location.reload()},a.state={username:"",projects:[],timeEfficienciesMax:[],timeEfficienciesMin:[]},a.getUserProfileData(),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(this.state.projects),i.a.createElement("html",null,i.a.createElement(D,{className:"NavBar",username:this.state.username,projects:this.state.projects,page:"Your Profile",triggerParentUpdate:this.props.triggerParentUpdate,projectid:0}),i.a.createElement("body",{className:"Body"},i.a.createElement("button",{onClick:this.addEfficiency}),i.a.createElement("div",{className:"widgets"},i.a.createElement("div",{className:"widgets-column"},i.a.createElement(N,{title:"Your best skills - Time Left",data:this.state.timeEfficienciesMax,length:this.state.timeEfficienciesMax.length}),i.a.createElement("div",{className:"verticalWidgetGap"}),i.a.createElement(N,{title:"Your worst skills - Time Left",data:this.state.timeEfficienciesMin,length:5})),i.a.createElement("div",{className:"horizontalWidgetGap"}),i.a.createElement("div",{className:"widgets-column"},i.a.createElement(N,{title:"Your worst skills - Time Right",data:this.state.timeEfficienciesMin,length:3}),i.a.createElement("div",{className:"verticalWidgetGap"}),i.a.createElement(N,{title:"Your best skills - Time Right",data:this.state.timeEfficienciesMax,length:9})))),i.a.createElement("footer",{className:"footer"},i.a.createElement("b",null,"Alex Bainbridge 2019-2020 NEA")))}}]),t}(i.a.Component),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).getUserProjectData=function(e){var t=Object(l.a)(a);g()(document).ready((function(){var a=g.a.ajax({url:"/getuserproject",type:"POST",data:JSON.stringify({projectid:e}),dataType:"json",contentType:"application/json;charset=utf-8"});try{a.done((function(e){t.setState({username:e.username}),t.setState({projects:e.projects}),t.setState({title:e.title})}))}catch(n){}}))},a.state={username:"",projects:[],projectid:0,title:""},a.setState({projectid:e.projectid}),a.getUserProjectData(e.projectid),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(D,{className:"NavBar",username:this.state.username,page:this.state.title,projects:this.state.projects,triggerParentUpdate:this.props.triggerParentUpdate,projectid:this.props.projectid})}}]),t}(i.a.Component),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).updatePage=function(e,t){a.setState({page:e}),a.state.projectid=t},a.state={page:"",projectid:0},a.state.page="profile",a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return"profile"===this.state.page?i.a.createElement(M,{triggerParentUpdate:this.updatePage}):i.a.createElement(U,{projectid:this.state.projectid,triggerParentUpdate:this.updatePage})}}]),t}(i.a.Component);s.a.render(i.a.createElement(V,null),document.getElementById("body"))}},[[25,1,2]]]);
//# sourceMappingURL=main.f14db293.chunk.js.map