(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(14),s=a.n(c),l=(a(24),a(6)),r=a(1),u=a(2),f=a(4),o=a(3),m=a(5),h=a(7),d=a(9),E=(a(25),a(8)),b=a.n(E);function g(){var e=Object(h.a)(["\n  width: ","%;\n  height: 20px;\n  background: #00CC66;\n  border-radius: 1px;\n"]);return g=function(){return e},e}function p(){var e=Object(h.a)(["\n  width: 100%;\n  height: 20px;\n  background: #FFFFFF;\n  border-color: #bebebe;\n  border-style: solid;\n  border-radius: 4px;\n  align-items: left;\n"]);return p=function(){return e},e}var v=d.a.div(p()),O=d.a.div(g(),(function(e){return e.percentage})),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(f.a)(this,Object(o.a)(t).call(this,e))).state={fillup:e.efficiency/200*100},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("html",null,i.a.createElement(v,null,i.a.createElement(O,{percentage:this.state.fillup})))}}]),t}(i.a.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(f.a)(this,Object(o.a)(t).call(this,e))).state={skillAbbrv:e.skillAbbrv,skillTitle:e.skillTitle,efficiency:e.efficiency,percentageEfficiency:Math.round(e.efficiency/200*100)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("html",null,i.a.createElement("div",{class:"efficiencyWidgetTooltip"},i.a.createElement("div",{class:"progressBarEfficiencyValue"},this.state.percentageEfficiency,"%"),i.a.createElement("table",{class:"EfficienciesTable",align:"centre"},i.a.createElement("tr",null,i.a.createElement("td",{class:"progressBarSkillTD"},i.a.createElement("div",{class:"progressBarSkill"},this.state.skillAbbrv)),i.a.createElement("td",{class:"progressBarBarTD"},i.a.createElement("div",{class:"progressBarBar"},i.a.createElement(j,{efficiency:this.state.efficiency})))))),i.a.createElement("span",{class:"efficiencyWidgetTooltipText"},this.state.skillTitle,": ",this.state.efficiency,"/200"))}}]),t}(i.a.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(f.a)(this,Object(o.a)(t).call(this,e))).increaseLength=function(){a.state.length<a.state.data.length&&(a.setState({length:a.state.length+=1}),a.setState({presentableData:a.dataToPresent(a.state.data)}))},a.decreaseLength=function(){a.state.length>1&&(a.setState({length:a.state.length-=1}),a.setState({presentableData:a.dataToPresent(a.state.data)}))},a.state={title:"",data:[],presentableData:"",length:5},a.setState({data:e.data}),a.setState({presentableData:a.dataToPresent(e.data)}),a.state.title=e.title,a.setState({length:e.length}),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){e!==this.props.value&&(e.data?(this.setState({data:e.data}),this.setState({presentableData:this.dataToPresent(e.data)})):e.title?this.setState({title:e.title}):(this.setState({title:e.title}),this.setState({data:e.data}),this.setState({presentableData:this.dataToPresent(e.data)})))}},{key:"dataToPresent",value:function(e){var t;if(e)try{e.length<this.state.length?(this.setState({length:e.length}),t=e.slice(0,e.length)):t=e.slice(0,this.state.length)}catch(a){}else t=[];return i.a.createElement("div",null,t&&t.length&&t.map((function(e,t){return i.a.createElement(y,{skillTitle:e.skillTitle,skillAbbrv:e.skillAbbrv,efficiency:e.avg})})))}},{key:"render",value:function(){return i.a.createElement("html",{className:"widget"},i.a.createElement("span",{class:"EfficiencyWidgetTitleBar"},i.a.createElement("b",null,this.state.title," "),i.a.createElement("button",{onClick:this.increaseLength},"Up"),i.a.createElement("button",{onClick:this.decreaseLength},"Down")),i.a.createElement("div",{class:"efficiencyWidgetData"},this.state.presentableData))}}]),t}(i.a.Component),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(f.a)(this,Object(o.a)(t).call(this,e))).logOut=function(){window.location.href="/"},a.state={username:"",page:""},a.setState({username:e.username}),a.setState({page:e.page}),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({username:e.username}),this.setState({page:e.page})}},{key:"render",value:function(){return i.a.createElement("html",null,i.a.createElement("div",{className:"NavBar"},i.a.createElement("a",{class:"pageStateNavBar"},this.state.page),i.a.createElement("b",null,i.a.createElement("a",null,"Welcome, ",this.state.username)),i.a.createElement("b",null,i.a.createElement("a",null,i.a.createElement("button",{onClick:this.logOut},"Log Out")))))}}]),t}(i.a.Component),T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(f.a)(this,Object(o.a)(t).call(this,e))).getUserData=function(){var e=Object(l.a)(a);b()(document).ready((function(){var t=b.a.ajax({url:"/getuser",type:"POST",data:[]});try{t.done((function(t){e.setState({username:t.username}),e.setState({timeEfficienciesMax:t.timeEfficienciesMax}),e.setState({timeEfficienciesMin:t.timeEfficienciesMin}),e.setState({scheduleEfficienciesMax:t.scheduleEfficienciesMax})}))}catch(a){}}))},a.state={username:"",timeEfficienciesMax:{},timeEfficienciesMin:{},scheduleEfficienciesMax:{}},a.getUserData(),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("html",null,i.a.createElement(S,{className:"NavBar",username:this.state.username,page:"Your Profile"}),i.a.createElement("body",{className:"Body"},i.a.createElement("div",{className:"widgets"},i.a.createElement("div",{className:"widgets-column"},i.a.createElement(k,{title:"Best Max Time Efficiencies",data:this.state.timeEfficienciesMax,length:5}),i.a.createElement("div",{className:"verticalWidgetGap"}),i.a.createElement(k,{title:"Best Max Time Efficiencies",data:this.state.timeEfficienciesMax,length:5}),i.a.createElement("div",{className:"verticalWidgetGap"}),i.a.createElement(k,{title:"Best Max Time Efficiencies",data:this.state.timeEfficienciesMax,length:5})),i.a.createElement("div",{className:"horizontalWidgetGap"}),i.a.createElement("div",{className:"widgets-column"},i.a.createElement(k,{title:"Worst Min Time Efficiencies",data:this.state.timeEfficienciesMin,length:5}),i.a.createElement("div",{className:"verticalWidgetGap"}),i.a.createElement(k,{title:"Best Max Time Efficiencies",data:this.state.timeEfficienciesMax,length:5}),i.a.createElement("div",{className:"verticalWidgetGap"}),i.a.createElement(k,{title:"Best Max Time Efficiencies",data:this.state.timeEfficienciesMax,length:5})))),i.a.createElement("footer",{className:"footer"},i.a.createElement("b",null,"Alex Bainbridge 2019-2020 NEA")))}}]),t}(i.a.Component),x=function(e){function t(){return Object(r.a)(this,t),Object(f.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(T,null)}}]),t}(i.a.Component);s.a.render(i.a.createElement(x,null),document.getElementById("body"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c0eb4ef2.chunk.js.map