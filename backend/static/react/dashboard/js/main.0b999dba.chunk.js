(window.webpackJsonpdashboard=window.webpackJsonpdashboard||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"media/back-arrow.1309890b.svg"},29:function(e,t,a){e.exports=a(54)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"media/up-arrow.957a2b25.svg"},37:function(e,t,a){e.exports=a.p+"media/down-arrow.ed47687f.svg"},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),c=(a(34),a(10)),l=a(4),s=a(5),u=a(7),d=a(6),p=a(8),m=a(1),f=(a(35),a(9)),h=a.n(f),g=(a(36),a(37),a(2));function b(){var e=Object(m.a)(["\n  font-family: 'Karla', sans-serif;\n  padding: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  box-shadow: 0 0px #fff, 0 0 3px 0.5px #dadada;\n  background-color: ",";\n  transition: all 0.2s;\n  z-index: 1;\n  color: white;\n  cursor: default;\n"]);return b=function(){return e},e}function v(){var e=Object(m.a)(["\n  opacity: ",";\n  padding: 10px;\n  z-index: 1;\n  position: absolute;\n  background-color: #FFB5A5\n  border-radius: 5px;\n"]);return v=function(){return e},e}function j(){var e=Object(m.a)(["\n  width: ","%;\n  background-color: ",";\n  height: 20px;\n  border-radius: 1px;\n"]);return j=function(){return e},e}function E(){var e=Object(m.a)(["\n  width: 100%;\n  height: 20px;\n  background: #FFFFFF;\n  border-color: #bebebe;\n  border-style: solid;\n  border-width: 1.8px;\n  border-radius: 4px;\n  align-items: left;\n"]);return E=function(){return e},e}var k=g.a.div(E()),y=g.a.div(j(),(function(e){return e.percentage}),(function(e){return e.colour})),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={fillup:e.efficiency/200*100,barColour:"#00CC66"},e.efficiency>=100?a.state.barColour="#00CC66":e.efficiency>=50?a.state.barColour="#FF8429":e.efficiency<50&&(a.state.barColour="#DE614A"),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("html",null,r.a.createElement(k,null,r.a.createElement(y,{percentage:this.state.fillup,colour:this.state.barColour})))}}]),t}(r.a.Component),O=(g.a.span(v(),(function(e){return e.visible})),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).updateVisibility=function(){0===a.state.ToolTipTextVisible?a.setState({ToolTipTextVisible:.95}):a.setState({ToolTipTextVisible:0})},a.state={abbrv:e.abbrv,skillTitle:e.skillTitle,efficiency:e.efficiency,ToolTipTextVisible:0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.abbrv?this.setState({abbrv:e.abbrv}):e.skillTitle?this.setState({skillTitle:e.skillTitle}):e.efficiency&&this.setState({efficiency:e.efficiency})}},{key:"render",value:function(){if(this.state.abbrv){this.props.skillTitle,this.props.efficiency;return r.a.createElement("html",null,r.a.createElement("button",{onClick:this.updateVisibility,class:"progressBarSkill",title:this.props.skillTitle+": "+this.props.efficiency+"/200"},this.props.abbrv))}return r.a.createElement("div",null,"Error")}}]),t}(r.a.Component)),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={percentageEfficiency:Math.round(e.efficiency/200*100)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state={percentageEfficiency:Math.round(this.props.efficiency/200*100)},this.props?r.a.createElement("tr",null,r.a.createElement("td",{style:{width:"40%"},class:"progressBarSkillTD"},r.a.createElement(O,{class:"progressBarSkill",abbrv:this.props.skillAbbrv,skillTitle:this.props.skillTitle,efficiency:this.props.efficiency})),r.a.createElement("td",{style:{width:"fit-content"}},r.a.createElement("div",{class:"progressBarEfficiencyValue"},this.state.percentageEfficiency,"%")),r.a.createElement("td",{class:"progressBarBarTD"},r.a.createElement("div",{class:"progressBarBar"},r.a.createElement(x,{efficiency:this.props.efficiency})))):r.a.createElement("tr",null,"No props")}}]),t}(r.a.Component),P=g.a.span(b(),(function(e){return e.colour})),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).updateLength=function(){return a.state.length>a.state.data.length?a.state.data.length:a.state.length},a.dataToPresent=function(e){var t;if(!e)return r.a.createElement("div",null,"No data in props");try{if(a.state.title&&e.length&&0!==a.state.length)return e.length<a.state.length?(a.setState({length:e.length}),t=e.slice(0,e.length)):t=e.slice(0,a.state.length),r.a.createElement("table",null,t&&t.length&&t.map((function(e,t){return r.a.createElement(w,{skillTitle:e.skillTitle,skillAbbrv:e.skillAbbrv,efficiency:e.avg})})));if(!a.state.title)return r.a.createElement("div",null,"No title");if(!e.length){return r.a.createElement("html",{style:{margin:"10px","padding-left":"3vw","padding-right":"3vw"}},r.a.createElement("div",null,"You don't have any skills yet!"),r.a.createElement("br",null),r.a.createElement("div",null,"Complete tasks to see your statistics"))}if(0===a.state.length)return r.a.createElement("div",null,"No length")}catch(n){return void console.log("Present data error")}},a.increaseLength=function(){a.state.length<a.state.data.length&&(a.setState({length:a.state.length+=1}),a.setState({presentableData:a.dataToPresent(a.state.data)}))},a.decreaseLength=function(){a.state.length>1&&(a.setState({length:a.state.length-=1}),a.setState({presentableData:a.dataToPresent(a.state.data)}))},a.state={title:"",data:[],presentableData:"",length:5,lengthIfDataSmallerThanLength:e.data.length},a.setState({data:e.data}),a.setState({presentableData:a.dataToPresent(e.data)}),a.state.title=e.title,a.setState({length:e.length}),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e!==this.props&&(e.data&&(this.setState({data:e.data}),this.setState({presentableData:this.dataToPresent(e.data)})),e.title&&this.setState({title:e.title}),e.length&&this.setState({length:e.length}))}},{key:"render",value:function(){return r.a.createElement("html",{class:"widget"},r.a.createElement(P,{colour:this.props.colour},r.a.createElement("b",null,this.state.title," ")),r.a.createElement("div",{className:"efficiencywidgetdatawrapper"},r.a.createElement("div",{class:"efficiencyWidgetData"},this.state.presentableData)))}}]),t}(r.a.Component);function C(){var e=Object(m.a)(["\n  font-family: 'Karla', sans-serif;\n  padding: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  box-shadow: 0 0px #fff, 0 0 3px 0.5px #dadada;\n  background-color: ",";\n  transition: all 0.2s;\n  z-index: 1;\n  color: white;\n  cursor: default;\n  font-weight: bold;\n"]);return C=function(){return e},e}function T(){var e=Object(m.a)(["\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 6px;\n  padding: 10px;\n  cursor: default;\n  border-width: 0.5px;\n  border-style: solid;\n  border-color: #e4e4e4;\n  background-color: white;\n\n  &:hover {\n    background-color: rgb(247,247,247);\n    cursor: pointer;\n  }\n\n  &:active {\n    background-color: rgb(200,200,200);\n  }\n"]);return T=function(){return e},e}function N(){var e=Object(m.a)(["\n  background-color: white;\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 6px;\n  padding: 10px;\n  cursor: default;\n  border-color: ",";\n  border-style: solid;\n  border-width: 0.5px;\n  background-color: white;\n\n  &:hover {\n    background-color: rgb(247,247,247);\n    cursor: pointer;\n  }\n\n  &:active {\n    background-color: rgb(200,200,200);\n  }\n"]);return N=function(){return e},e}var B=g.a.div(N(),(function(e){return e.colour})),D=g.a.div(T()),F=g.a.span(C(),(function(e){return e.colour})),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).updatePage=function(e){for(var t in a.state.projects)JSON.stringify(a.state.projects[t].id)===e.target.id&&a.props.triggerParentUpdate(JSON.stringify(a.state.projects[t].title),"project",e.target.id)},a.state={projects:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({projects:e.projects})}},{key:"render",value:function(){var e=this;return this.state.projects.length?r.a.createElement("html",{class:"widget"},r.a.createElement(F,{colour:"#008080"},r.a.createElement("b",null,this.props.title)),r.a.createElement("p",null),this.state.projects&&this.state.projects.length&&this.state.projects.map((function(t,a){return r.a.createElement("div",null,r.a.createElement(B,{id:t.id,onClick:e.updatePage,colour:t.colour},t.title),r.a.createElement("p",null))})),r.a.createElement(D,{onClick:this.props.triggerCreateProject},"Create a project"),r.a.createElement("p",null)):r.a.createElement("html",{class:"widget"},r.a.createElement(F,{colour:"#008080"},r.a.createElement("b",null,this.props.title)),r.a.createElement("p",null),"You are not a member of any projects",r.a.createElement("p",null),r.a.createElement(D,{onClick:this.props.triggerCreateProject},"Create Project"),r.a.createElement("p",null))}}]),t}(r.a.Component);function U(){var e=Object(m.a)(["\n  padding-bottom: 10px;\n"]);return U=function(){return e},e}function z(){var e=Object(m.a)(["\n  background-color: white;\n  width: auto;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  cursor: default;\n  background-color: white;\n  transition: 0.1s;\n  white-space: pre;\n  font-weight: normal;\n  line-height: 35px;\n  color: ",";\n\n  &:hover {\n    background-color: rgb(247,247,247);\n    cursor: pointer;\n  }\n\n  &:active {\n  }\n"]);return z=function(){return e},e}function W(){var e=Object(m.a)(["\n  font-family: 'Karla', sans-serif;\n  padding: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  box-shadow: 0 0px #fff, 0 0 3px 0.5px #dadada;\n  background-color: ",";\n  transition: all 0.2s;\n  z-index: 1;\n  color: white;\n  cursor: default;\n  font-weight: bold;\n"]);return W=function(){return e},e}var V=g.a.span(W(),(function(e){return e.colour})),A=g.a.tr(z(),(function(e){return e.colour})),G=g.a.div(U()),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).updatePage=function(e){for(var t in a.state.tasks)a.state.tasks[t][0]==e.target.id&&a.props.triggerParentUpdate(JSON.stringify(a.state.tasks[t][2]),"task",e.target.id)},a.state={tasks:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){if("object"==typeof e.tasks){if(5==this.state.tasks.length)return;var t=e.tasks,a=[];for(var n in t)if("True"!=t[n][4]){var r=t[n][3];a.push(r)}a.sort((function(e,t){return e-t}));var i=[];for(var r in a.slice(0,5)){for(var o in t)a[r]==t[o][3]&&(a[r]==t[o][3]&&(t[o][3]-(new Date).getTime()<0?t[o].push("red"):t[o].push("black")),i.push(t[o]),t.splice(o,1));this.setState({tasks:i})}}}},{key:"render",value:function(){var e=this;return this.state.tasks.length?r.a.createElement("html",{class:"widget"},r.a.createElement(V,{colour:"#7B91FF"},"Tasks Overview"),r.a.createElement(G,null),r.a.createElement("table",{style:{"border-collapse":"collapse","font-size":"large"}},r.a.createElement("tr",{style:{"line-height":"30px"}},r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Project"),r.a.createElement("th",null,"Due")),this.state.tasks.map((function(t,a){return r.a.createElement(A,{colour:t[5],onClick:e.updatePage},r.a.createElement("td",{id:t[0]},t[2]),r.a.createElement("td",{id:t[0]},t[1]),r.a.createElement("td",{id:t[0]},new Date(t[3]).getDate().toString(),"/",(new Date(t[3]).getMonth()+1).toString(),"/",(new Date(t[3]).getYear()-100).toString()))}))),r.a.createElement(G,null)):r.a.createElement("html",{class:"widget"},r.a.createElement(V,{colour:"#7B91FF"},"Tasks Overview"),r.a.createElement("p",null),"You currently do not have any assigned tasks",r.a.createElement("p",null))}}]),t}(r.a.Component),Y=a(68);function R(){var e=Object(m.a)(["\n  padding-bottom: 10px;\n"]);return R=function(){return e},e}function K(){var e=Object(m.a)(["\n  background-color: white;\n  width: auto;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  cursor: default;\n  background-color: white;\n  transition: 0.1s;\n  white-space: pre;\n  font-weight: normal;\n  line-height: 35px;\n  color: ",";\n\n  &:hover {\n    background-color: rgb(247,247,247);\n    cursor: pointer;\n  }\n\n  &:active {\n  }\n"]);return K=function(){return e},e}function L(){var e=Object(m.a)(["\n  font-family: 'Karla', sans-serif;\n  padding: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  box-shadow: 0 0px #fff, 0 0 3px 0.5px #dadada;\n  background-color: ",";\n  transition: all 0.2s;\n  z-index: 1;\n  color: white;\n  cursor: default;\n  font-weight: bold;\n"]);return L=function(){return e},e}var I=g.a.span(L(),(function(e){return e.colour})),q=g.a.tr(K(),(function(e){return e.colour})),H=g.a.div(R()),Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).updateTask=function(e,t){Object(c.a)(a);h()(document).ready((function(){var a=h.a.ajax({url:"/updatetask",type:"POST",data:JSON.stringify({taskid:e,state:t}),dataType:"json",contentType:"application/json;charset=utf-8"});try{a.done((function(e){}))}catch(n){}}))},a.updatePage=function(e){for(var t in a.state.tasks)a.state.tasks[t][0]==e.target.id&&a.props.triggerParentUpdate(a.state.tasks[t][Object.keys(a.state.tasks[t])[0]][0],"task",e.target.id)},a.updateCheck=function(e){var t=e.target.id.slice(0,e.target.id.length-1);for(var n in a.state.tasks)if(a.state.tasks[n][0]==t){var r,i=a.state.tasks[n][4],o=a.state.tasks;0==i?(i=!0,r="green"):(i=!1,r=o[n][2]-(new Date).getTime()<0?"red":"black"),o[n][4]=i,o[n][3]=r,a.setState({tasks:o}),a.updateTask(t,i)}},a.state={tasks:[],checked:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){if("object"==typeof e.tasks){var t=e.tasks,a=[];for(var n in t)i=t[n][Object.keys(t[n])[0]][1],a.push(i);a.sort((function(e,t){return e-t}));var r=[];for(var i in a){for(var o in t)if(a[i]==t[o][Object.keys(t[o])[0]][1]){if(t[o][Object.keys(t[o])[0]][1]-(new Date).getTime()<0)var c="red";else c="black";if("True"==t[o][Object.keys(t[o])][2])c="green";r.push([Object.keys(t[o])[0],t[o][Object.keys(t[o])[0]][0],t[o][Object.keys(t[o])[0]][1],c,"True"==t[o][Object.keys(t[o])][2]]),t.splice(o,1)}this.setState({tasks:r})}}}},{key:"render",value:function(){var e=this;return this.state.tasks.length?r.a.createElement("html",{class:"widget"},r.a.createElement(I,{colour:"#7B91FF"},"Tasks"),r.a.createElement(H,null),r.a.createElement("table",{style:{"border-collapse":"collapse","font-size":"large"}},r.a.createElement("tr",{style:{"line-height":"30px"}},r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Due"),r.a.createElement("th",null,"Complete")),this.state.tasks.map((function(t,a){return r.a.createElement(q,{colour:t[3],onClick:e.updatePage},r.a.createElement("td",{id:t[0]},t[1]),r.a.createElement("td",{id:t[0]},new Date(t[2]).getDate().toString(),"/",(new Date(t[2]).getMonth()+1).toString(),"/",(new Date(t[2]).getYear()-100).toString()),r.a.createElement("td",{id:t[0]},r.a.createElement(Y.a,{id:t[0]+"s",onChange:e.updateCheck,checked:t[4],color:"primary"})))}))),r.a.createElement(H,null)):r.a.createElement("html",{class:"widget"},r.a.createElement(I,{colour:"#7B91FF"},"Tasks"),r.a.createElement("p",null),"You currently do not have any assigned tasks",r.a.createElement("p",null))}}]),t}(r.a.Component),X=a(18);function Z(){var e=Object(m.a)(["\n  width: 20%;\n"]);return Z=function(){return e},e}function $(){var e=Object(m.a)(["\n  width: 20%;\n"]);return $=function(){return e},e}function _(){var e=Object(m.a)(["\n  font-family: 'Karla', sans-serif;\n  padding: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  box-shadow: 0 0px #fff, 0 0 3px 0.5px #dadada;\n  background-color: ",";\n  transition: all 0.2s;\n  z-index: 1;\n  color: white;\n  cursor: default;\n  font-weight: bold;\n  text-align: center;\n"]);return _=function(){return e},e}var ee=g.a.span(_(),(function(e){return e.colour})),te=g.a.td($()),ae=g.a.td(Z()),ne=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("html",{class:"widget"},r.a.createElement(ee,{colour:"#BF0864"},"Statistics"),r.a.createElement("p",null),r.a.createElement("table",null,r.a.createElement(ae,null),r.a.createElement(te,null,"0%",r.a.createElement(X.a,{percent:"0",strokeWidth:"4",strokeColor:"#DE614A"})),r.a.createElement(ae,null),r.a.createElement(te,null,"50%",r.a.createElement(X.a,{percent:"50",strokeWidth:"4",strokeColor:"#FF8429"})),r.a.createElement(ae,null)),r.a.createElement("p",null))}}]),t}(r.a.Component);function re(){var e=Object(m.a)(["\n  font-family: 'Karla', sans-serif;\n  padding: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  box-shadow: 0 0px #fff, 0 0 3px 0.5px #dadada;\n  background-color: ",";\n  transition: all 0.2s;\n  z-index: 1;\n  color: white;\n  cursor: default;\n  font-weight: bold;\n  text-align: center;\n"]);return re=function(){return e},e}var ie=g.a.span(re(),(function(e){return e.colour})),oe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.text&&this.setState({text:e.text})}},{key:"render",value:function(){return r.a.createElement("html",{class:"widget"},r.a.createElement(ie,{colour:"#BF0864"},"Project Overview"),r.a.createElement("div",{style:{"text-align":"center",padding:"10px","font-size":"large"}},r.a.createElement("p",null),this.state.text,r.a.createElement("p",null)))}}]),t}(r.a.Component);function ce(){var e=Object(m.a)(["\n  font-family: 'Karla', sans-serif;\n  padding: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  box-shadow: 0 0px #fff, 0 0 3px 0.5px #dadada;\n  background-color: ",";\n  transition: all 0.2s;\n  z-index: 1;\n  color: white;\n  cursor: default;\n  font-weight: bold;\n  text-align: center;\n"]);return ce=function(){return e},e}var le=g.a.span(ce(),(function(e){return e.colour})),se=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.text&&this.setState({text:e.text})}},{key:"render",value:function(){return r.a.createElement("html",{class:"widget"},r.a.createElement(le,{colour:"#008A38"},"Latest Managers Notes"),r.a.createElement("div",{style:{"text-align":"center",padding:"10px","font-size":"large"}},r.a.createElement("p",null),this.state.text,r.a.createElement("p",null)))}}]),t}(r.a.Component),ue=a(25);function de(){var e=Object(m.a)(["\n  padding-bottom: 10px;\n"]);return de=function(){return e},e}function pe(){var e=Object(m.a)(["\n  width: auto;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  cursor: default;\n  background-color: white;\n  transition: 0.1s;\n  white-space: pre;\n  font-weight: normal;\n  line-height: 35px;\n  color: #a2a2a2;\n  text-align: center;\n\n  &:hover {\n    background-color: rgb(247,247,247);\n    cursor: pointer;\n  }\n"]);return pe=function(){return e},e}function me(){var e=Object(m.a)(["\n  width: auto;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  cursor: default;\n  background-color: white;\n  transition: 0.1s;\n  white-space: pre;\n  font-weight: normal;\n  line-height: 35px;\n\n  &:hover {\n    background-color: rgb(247,247,247);\n    cursor: pointer;\n  }\n\n  &:active {\n  }\n"]);return me=function(){return e},e}function fe(){var e=Object(m.a)(["\n  cursor: pointer;\n  border-radius: 6px;\n  padding: 5px;\n  font-size: 2vh;\n  position: relative;\n  bottom: 5px;\n  border-width: 0.5px;\n  border-style: solid;\n  border-color: #e4e4e4;\n  background-color: white;\n  padding: 7px 18px;\n  width: 50%;\n  margin-right: auto;\n  margin-left: auto;\n\n  &:hover {\n    background-color: rgb(247,247,247);\n  }\n\n  &:active {\n    background-color: rgb(200,200,200);\n  }\n"]);return fe=function(){return e},e}function he(){var e=Object(m.a)(["\n  font-family: 'Karla', sans-serif;\n  padding: 10px;\n  border-top-left-radius: 6px;\n  border-top-right-radius: 6px;\n  box-shadow: 0 0px #fff, 0 0 3px 0.5px #dadada;\n  background-color: ",";\n  transition: all 0.2s;\n  z-index: 1;\n  color: white;\n  cursor: default;\n  font-weight: bold;\n"]);return he=function(){return e},e}var ge=g.a.span(he(),(function(e){return e.colour})),be=g.a.div(fe()),ve=g.a.tr(me()),je=g.a.tr(pe()),Ee=g.a.div(de()),ke=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).inviteMember=function(){var e={email:h()("#memberEmail").val(),projectid:a.state.projectid},t=Object(c.a)(a);h()(document).ready((function(){var a=h.a.ajax({url:"/addmembertoproject",type:"POST",data:JSON.stringify(e),dataType:"json",contentType:"application/json;charset=utf-8"});try{a.done((function(e){try{"False"==e.isMember?(t.setState({addMemberFailMessage:"Unable to add member"}),t.setState({addMemberSuccessMessage:""})):(t.setState({addMemberFailMessage:""}),t.setState({addMemberSuccessMessage:"Added member"}))}catch(a){console.log("Error setting message"),console.log(a)}}))}catch(n){}}))},a.state={members:[],projectid:0,addMemberFailMessage:"",addMemberSuccessMessage:""},a.setState({projectid:e.projectid}),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.projectid&&this.setState({projectid:e.projectid}),"object"==typeof e.members){var t=e.members,a=[];for(var n in t)a.push(t[n]);this.setState({members:a})}}},{key:"render",value:function(){return this.state.members.length?r.a.createElement("html",{class:"widget"},r.a.createElement(ge,{colour:"#FF476C"},"Members"),r.a.createElement(Ee,null),r.a.createElement("table",{style:{"border-collapse":"collapse","font-size":"large"}},this.state.members.map((function(e,t){return r.a.createElement(ve,null,r.a.createElement("td",{id:e[0]},e[1]))})),r.a.createElement(je,null,r.a.createElement("td",null,r.a.createElement(ue.a,{trigger:r.a.createElement("div",null,"Add member +"),position:"right center",modal:!0,style:{"border-radius":"10px"}},r.a.createElement("div",{style:{color:"black",padding:"5vmin"}},r.a.createElement("div",null,"Add member to project"),r.a.createElement("input",{id:"memberEmail",type:"text",class:"boxinput",placeholder:"email",required:!0}),r.a.createElement("p",null),r.a.createElement(be,{onClick:this.inviteMember},"Invite"),r.a.createElement("div",{style:{color:"red"}},this.state.addMemberFailMessage),r.a.createElement("div",{style:{color:"green"}},this.state.addMemberSuccessMessage)))))),r.a.createElement(Ee,null)):r.a.createElement("html",{class:"widget"},r.a.createElement(ge,{colour:"#FF476C"},"Members"),r.a.createElement("p",null),"You currently do not have any assigned members",r.a.createElement("p",null))}}]),t}(r.a.Component),ye=(a(42),a(17)),xe=a.n(ye);function Oe(){var e=Object(m.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  -webkit-appearance: none;\n  width: 100%;\n  padding: 10px;\n  text-align: centre;\n  text-align-last: center;\n\n  &:focus {\n    outline: none;\n  }\n"]);return Oe=function(){return e},e}function we(){var e=Object(m.a)(["\n  visibility: ",";\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n"]);return we=function(){return e},e}function Pe(){var e=Object(m.a)(["\n  background-color: white;\n  border-radius: 10px;\n  visibility: ",";\n  padding: 40px;\n  width: 30vw;\n  position: absolute;\n  left: 50%;\n  margin-left: -20vw;\n  top: 50%;\n  margin-top: -20vh;\n  z-index: 999;\n"]);return Pe=function(){return e},e}function Se(){var e=Object(m.a)(["\n  &:hover {\n    text-decoration: underline;\n    cursor: pointer;\n  }\n"]);return Se=function(){return e},e}function Ce(){var e=Object(m.a)(["\n  cursor: pointer;\n  border-radius: 6px;\n  padding: 5px;\n  font-size: 2vh;\n  position: relative;\n  bottom: 5px;\n  border-width: 0.5px;\n  border-style: solid;\n  border-color: #e4e4e4;\n  background-color: white;\n  padding: 7px 18px;\n\n  &:hover {\n    background-color: rgb(247,247,247);\n  }\n\n  &:active {\n    background-color: rgb(200,200,200);\n  }\n"]);return Ce=function(){return e},e}function Te(){var e=Object(m.a)(["\n  z-index: 4;\n  height: calc(50px + 1vmin);\n  border-bottom: "," solid 3px;\n  position: fixed;\n  width: 100%;\n"]);return Te=function(){return e},e}var Ne=g.a.div(Te(),(function(e){return e.colour})),Be=g.a.div(Ce()),De=g.a.div(Se()),Fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).logOut=function(){window.location.href="/"},a.toProfile=function(){a.props.triggerParentUpdate("profile","profile",0)},a.toProject=function(){a.props.triggerParentUpdate(a.state.projectname,"project",a.state.projectid)},a.state={username:"",lastname:"",page:"",projectid:0,projects:[]},a.setState({username:e.username}),a.setState({page:e.page}),e.projectid?a.setState({projectid:e.projectid}):a.setState({projectid:0}),a.setState({projects:e.projects}),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({username:e.username}),this.setState({lastname:e.lastname}),this.setState({page:e.page}),e.projects&&this.setState({projects:e.projects}),e.projectid&&this.setState({projectid:e.projectid}),e.task&&this.setState({task:e.task}),e.projectname&&this.setState({projectname:e.projectname})}},{key:"render",value:function(){return"true"==this.state.task?r.a.createElement("html",null,r.a.createElement(Ne,{colour:this.props.colour},r.a.createElement("div",{class:"NavBar"},r.a.createElement("div",null,r.a.createElement("img",{class:"arrowsvgvert",src:xe.a,onClick:this.toProject,title:"Back to profile",style:{"padding-left":"4vw","padding-top":"calc(18px + 1vh)"}}),r.a.createElement("a",{class:"pageStateNavBar",style:{float:"left"}},r.a.createElement(De,{onClick:this.toProfile},this.state.username," ",this.state.lastname)," / ",r.a.createElement(De,{onClick:this.toProject},this.state.projectname)," / ",r.a.createElement("b",null,this.state.page))),r.a.createElement("div",null,r.a.createElement("a",null,r.a.createElement(Be,{onClick:this.logOut,style:{"margin-right":"4vw"}},"Log Out")))))):this.state.page===this.state.username+"'s Dashboard"?r.a.createElement("html",null,r.a.createElement(Ne,{colour:this.props.colour},r.a.createElement("div",{class:"NavBar"},r.a.createElement("div",null,r.a.createElement("a",{class:"pageStateNavBar",style:{float:"left","margin-left":"4vw"}},this.state.page)),r.a.createElement("div",null,r.a.createElement("a",null,r.a.createElement(Be,{onClick:this.logOut,style:{"margin-right":"4vw"}},"Log Out")))))):r.a.createElement("html",null,r.a.createElement(Ne,{colour:this.props.colour},r.a.createElement("div",{class:"NavBar"},r.a.createElement("div",null,r.a.createElement("img",{class:"arrowsvgvert",src:xe.a,onClick:this.toProfile,title:"Back to profile",style:{"padding-left":"4vw","padding-top":"calc(18px + 1vh)"}}),r.a.createElement("a",{class:"pageStateNavBar",style:{float:"left"}},r.a.createElement(De,{onClick:this.toProfile},this.state.username," ",this.state.lastname)," / ",r.a.createElement("b",null,this.state.page))),r.a.createElement("div",null,r.a.createElement("a",null,r.a.createElement(Be,{onClick:this.logOut,style:{"margin-right":"4vw"}},"Log Out"))))))}}]),t}(r.a.Component),Me=g.a.div(Pe(),(function(e){return e.visible})),Ue=g.a.button(we(),(function(e){return e.visible})),ze=(g.a.select(Oe()),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).getUserProfileData=function(){var e=Object(c.a)(a);h()(document).ready((function(){var t=h.a.ajax({url:"/getuserprofile",type:"POST",data:{}});try{t.done((function(t){e.setState({username:t.username}),e.setState({projects:t.projects}),e.setState({tasks:t.tasks}),e.setState({timeEfficienciesMax:t.timeEfficienciesMax}),e.setState({timeEfficienciesMin:t.timeEfficienciesMin})}))}catch(a){console.log("Error")}}))},a.addEfficiency=function(){Object(c.a)(a);h()(document).ready((function(){var e=h.a.ajax({url:"/addefficiency",type:"POST",data:{}});try{e.done((function(e){}))}catch(t){}})),window.location.reload()},a.createNewProject=function(){a.setState({CreateProjectPopUpVisibility:"visible"})},a.clickOffCreateProjectPopUp=function(){"False"===a.state.cancelClickOff?a.setState({CreateProjectPopUpVisibility:"hidden"}):a.state.cancelClickOff="False"},a.clickCreateProjectPopupCreateButton=function(){a.state.cancelClickOff="True"},a.clickCreateProjectPopupCancelButton=function(){a.setState({CreateProjectPopUpVisibility:"hidden"})},a.submitNewProject=function(){var e=h()("#projecttitle").val(),t=h()("#description").val(),n=h()("#projectcolour").val();if(""!==e&&""!==t)if(e.length>25)window.alert("Project titles must be less than 25 characters");else if(null!==n){var r={title:e,colour:n,description:t};Object(c.a)(a);h()(document).ready((function(){var e=h.a.ajax({url:"/createproject",type:"POST",data:JSON.stringify(r),dataType:"json",contentType:"application/json;charset=utf-8"});try{e.done((function(e){window.location.reload()}))}catch(t){}}))}},a.state={username:"",projects:[],tasks:"",timeEfficienciesMax:[],timeEfficienciesMin:[],CreateProjectPopUpVisibility:"hidden",cancelClickOff:"False"},a.setState({CreateProjectPopUpVisibility:"hidden"}),a.getUserProfileData(),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"removeformsubmit",value:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},{key:"render",value:function(){return r.a.createElement("html",null,r.a.createElement(Fe,{className:"NavBar",username:this.state.username,lastname:"",projects:this.state.projects,page:this.state.username+"'s Dashboard",triggerParentUpdate:this.props.triggerParentUpdate,projectid:0,colour:"crimson"}),r.a.createElement("body",{className:"Body"},r.a.createElement(Ue,{visible:this.state.CreateProjectPopUpVisibility,onClick:this.clickOffCreateProjectPopUp},r.a.createElement(Me,{visible:this.state.CreateProjectPopUpVisibility,onClick:this.clickCreateProjectPopupCreateButton},r.a.createElement("div",{style:{display:"grid"}},r.a.createElement("div",{style:{"font-size":"2.5vh","padding-bottom":"3vh"}},r.a.createElement("b",null,"Create a new project")),r.a.createElement("div",null,r.a.createElement("form",{style:{display:"grid"},onSubmit:this.removeformsubmit},r.a.createElement("input",{type:"text",className:"boxinput",placeholder:"project title",name:"projecttitle",id:"projecttitle",onInput:this.clickCreateProjectPopupCreateButton,required:!0,style:{"margin-left":"auto","margin-right":"auto",width:"100%","text-align":"center"}}),r.a.createElement("p",null),r.a.createElement("input",{type:"text",className:"boxinput",placeholder:"description",name:"description",id:"description",onInput:this.clickCreateProjectPopupCreateButton,required:!0,style:{"margin-left":"auto","margin-right":"auto",width:"100%","text-align":"center"}}),r.a.createElement("p",null),r.a.createElement("input",{type:"color",style:{"margin-left":"auto","margin-right":"auto","border-style":"none"},id:"projectcolour",onInput:this.clickCreateProjectPopupCreateButton,required:!0}),r.a.createElement("p",null),r.a.createElement("div",{style:{display:"inline-flex","margin-left":"auto","margin-right":"auto"}},r.a.createElement("input",{type:"reset",value:"Cancel",onClick:this.clickCreateProjectPopupCancelButton}),r.a.createElement("div",{style:{"padding-left":"14vw"}}),r.a.createElement("button",{onClick:this.submitNewProject},"Create"))))))),r.a.createElement("div",{style:{display:"inline-flex",width:"100%"}},r.a.createElement("div",{style:{"padding-top":"calc(47px + 1vmin)",width:"max-content"}}),r.a.createElement("div",{className:"widgets"},r.a.createElement("div",{className:"horizontalWidgetGap"}),r.a.createElement("div",{className:"widgets-column"},r.a.createElement(J,{tasks:this.state.tasks,triggerParentUpdate:this.props.triggerParentUpdate}),r.a.createElement("div",{className:"verticalWidgetGap"})),r.a.createElement("div",{className:"horizontalWidgetGap"}),r.a.createElement("div",{className:"widgets-column"},r.a.createElement(S,{title:"Your top 5 skills for meeting a deadline",data:this.state.timeEfficienciesMax,length:5,colour:"rgb(112, 175, 121)"}),r.a.createElement("div",{className:"verticalWidgetGap"}),r.a.createElement(S,{title:"Your lowest 5 skills when meeting a deadline",data:this.state.timeEfficienciesMin,length:5,colour:"#C0392B"}),r.a.createElement("div",{className:"verticalWidgetGap"})),r.a.createElement("div",{className:"horizontalWidgetGap"}),r.a.createElement("div",{className:"widgets-column"},r.a.createElement(M,{title:"Your projects",projects:this.state.projects,triggerCreateProject:this.createNewProject,triggerParentUpdate:this.props.triggerParentUpdate}))))),r.a.createElement("footer",{className:"footer"},r.a.createElement("b",null,"Alex Bainbridge 2019-2020 NEA")))}}]),t}(r.a.Component)),We=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).getProjectData=function(e){var t=Object(c.a)(a);h()(document).ready((function(){var a=h.a.ajax({url:"/getuserproject",type:"POST",data:JSON.stringify({projectid:e}),dataType:"json",contentType:"application/json;charset=utf-8"});try{a.done((function(e){t.setState({username:e.username}),t.setState({lastname:e.lastname}),t.setState({title:e.title}),t.setState({colour:e.colour}),t.setState({description:e.description}),t.setState({tasks:e.tasks}),t.setState({members:e.members})}))}catch(n){}}))},a.state={username:"",lastname:"",projects:[],projectid:0,title:""},a.setState({projectid:e.projectid}),a.getProjectData(e.projectid),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("html",null,r.a.createElement(Fe,{className:"NavBar",username:this.state.username,lastname:this.state.lastname,page:this.state.title,triggerParentUpdate:this.props.triggerParentUpdate,projectid:this.props.projectid,colour:this.state.colour}),r.a.createElement("div",{class:"widgets"},r.a.createElement("div",{className:"horizontalWidgetGap"}),r.a.createElement("div",{class:"widgets-column",style:{width:"66vw"}},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(oe,{text:this.state.description}),r.a.createElement("div",{className:"horizontalWidgetGap"}),r.a.createElement(se,{text:"These are the latest managers notes but if theres more text here then the box will get alrger. Or will the text get larger? not sure tbh, theres loads here not mate ngl, so do you reckon itll get even bigger or what?"})),r.a.createElement("div",{class:"verticalWidgetGap"}),r.a.createElement(Q,{tasks:this.state.tasks,triggerParentUpdate:this.props.triggerParentUpdate}),r.a.createElement("div",{class:"verticalWidgetGap"}),r.a.createElement(ne,null)),r.a.createElement("div",{className:"horizontalWidgetGap"}),r.a.createElement("div",{class:"widgets-column",style:{width:"20vw"}},r.a.createElement(ke,{members:this.state.members,projectid:this.props.projectid,triggerParentUpdate:this.props.triggerParentUpdate}))),r.a.createElement("div",{style:{"padding-bottom":"5vh"}}))}}]),t}(r.a.Component),Ve=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).getTaskData=function(e){var t=Object(c.a)(a);h()(document).ready((function(){var a=h.a.ajax({url:"/getusertask",type:"POST",data:JSON.stringify({taskid:e}),dataType:"json",contentType:"application/json;charset=utf-8"});try{a.done((function(e){t.setState({username:e.username}),t.setState({lastname:e.lastname}),t.setState({project:e.project}),t.setState({projectid:e.projectid}),t.setState({taskname:e.taskname}),t.setState({colour:e.colour}),t.setState({description:e.description})}))}catch(n){}}))},a.state={},a.getTaskData(e.taskid),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("html",null,r.a.createElement(Fe,{className:"NavBar",username:this.state.username,lastname:this.state.lastname,projectname:this.state.project,projectid:this.state.projectid,page:this.state.taskname,task:"true",triggerParentUpdate:this.props.triggerParentUpdate,colour:this.state.colour}))}}]),t}(r.a.Component),Ae=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).updatePage=function(e,t,n){"project"==t?(a.setState({page:["project",e]}),a.state.projectid=n):"task"==t?(a.setState({page:["task",e]}),a.state.taskid=n):a.setState({page:["profile",e]})},a.state={page:"",projectid:0},a.state.page="profile",a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return"project"===this.state.page[0]?r.a.createElement(We,{projectid:this.state.projectid,triggerParentUpdate:this.updatePage}):"task"===this.state.page[0]?r.a.createElement(Ve,{taskid:this.state.taskid,triggerParentUpdate:this.updatePage}):r.a.createElement(ze,{triggerParentUpdate:this.updatePage})}}]),t}(r.a.Component);o.a.render(r.a.createElement(Ae,null),document.getElementById("body"))}},[[29,1,2]]]);
//# sourceMappingURL=main.0b999dba.chunk.js.map