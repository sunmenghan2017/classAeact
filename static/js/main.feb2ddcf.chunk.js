(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{19:function(t,e,a){},26:function(t,e,a){t.exports=a(38)},31:function(t,e,a){},32:function(t,e,a){},38:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),l=a(21),c=a.n(l),s=(a(31),a(5)),i=a(6),r=a(8),u=a(7),d=a(9),h=a(22),m=a(10),p=(a(32),a(25)),f=a(15),b=a(13),g=(a(19),function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(r.a)(this,Object(u.a)(e).call(this))).handleChange=function(e){t.setState(Object(f.a)({},e.target.name,parseInt(""===e.target.value?0:e.target.value)))},t.handleChanged=function(e){t.setState(Object(f.a)({},e.target.name,e.target.value))},t.handleInput=function(e){13===e.keyCode&&(t.props.add(e.target.value),t.state.inputValue="")},t.handleInput=t.handleInput.bind(Object(b.a)(t)),t.state={a:"",b:"",c:"",inputValue:""},t}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){console.log(this)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:this.state.a+this.state.b+this.state.c>10?"box":"box1"},o.a.createElement("label",{htmlFor:"inp"},"\u8bf7\u8f93\u5165\u7b2c\u4e00\u4e2a\u6570\uff1a"),o.a.createElement("input",{id:"inp",name:"a",onChange:this.handleChange,value:this.state.a,onKeyDown:this.handleInput,type:"text"}),"+",o.a.createElement("input",{name:"b",onChange:this.handleChange,value:this.state.b,onKeyDown:this.handleInput,type:"text"}),"+",o.a.createElement("input",{name:"c",onChange:this.handleChange,value:this.state.c,onKeyDown:this.handleInput,type:"text"}),"=",o.a.createElement("p",null,this.state.a+this.state.b+this.state.c)),o.a.createElement("div",{className:"addHead"},o.a.createElement("div",{className:"addList"},o.a.createElement("label",{htmlFor:"todolist",style:{float:"left"}},o.a.createElement("h2",null,"ToDoList")),o.a.createElement("input",{className:"todolist",name:"inputValue",placeholder:"\u6dfb\u52a0ToDoList",onChange:this.handleChanged,value:this.state.inputValue,onKeyDown:this.handleInput,type:"text"}))))}}]),e}(n.Component)),v=function(t){function e(){return Object(s.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=this.props.todo,a=this.props.list;return o.a.createElement("div",{className:"addDoing"},o.a.createElement("div",{className:"list"},o.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c",o.a.createElement("span",{id:"todocount"},e.length)),o.a.createElement("ul",null,e.map((function(e,a){return o.a.createElement("li",{key:a,className:"doingList"},o.a.createElement("input",{className:"icheck",type:"checkbox",checked:!1,value:e,onChange:function(){return t.props.addo(a)}}),e,o.a.createElement("button",{className:"delbtn",onClick:function(){return t.props.delete(a)}},"\u5220\u9664"))}))),o.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210",o.a.createElement("span",{id:"donecount"},a.length)),o.a.createElement("ul",{className:"over"},a.map((function(e,a){return o.a.createElement("li",{key:a,className:"overList"},o.a.createElement("input",{className:"ichecked",type:"checkbox",checked:!0,value:e,onChange:function(){return t.props.overdo(a)}}),e,o.a.createElement("button",{className:"delbtn",onClick:function(){return t.props.del(a)}},"\u5220\u9664"))}))),o.a.createElement("div",{className:"foot"},o.a.createElement("p",{className:"footer"},"Copyright ? 2014 todolist.cn ",o.a.createElement("span",{className:"clear-btn"},"clear")))))}}]),e}(n.Component);v.defaultProps={todo:[1,2,3]};var E=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(r.a)(this,Object(u.a)(e).call(this))).addItem=function(e){t.setState({todo:[].concat(Object(p.a)(t.state.todo),[e])},(function(){localStorage.setItem("",JSON.stringify(t.state.todo))}))},t.delItem=function(e){t.setState((function(t,a){return console.log(t.todo),{todo:t.todo.filter((function(t,a){return e!==a}))}}),(function(){localStorage.setItem("todo",JSON.stringify(t.state.todo))}))},t.addOver=function(e){t.setState((function(){t.state.list.push(t.state.todo[e]),t.delItem(e)}),(function(){localStorage.setItem("todo",JSON.stringify(t.state.todo)),localStorage.setItem("list",JSON.stringify(t.state.list))}))},t.delteItem=function(e){t.setState((function(t,a){return console.log(t.list),{list:t.list.filter((function(t,a){return e!==a}))}}),(function(){localStorage.setItem("list",JSON.stringify(t.state.list))}))},t.clear=function(){localStorage.clear()},t.overDoing=function(e){t.setState((function(){t.state.todo.push(t.state.list[e]),t.delteItem(e)}),(function(){localStorage.setItem("list",JSON.stringify(t.state.list)),localStorage.setItem("todo",JSON.stringify(t.state.todo))}))},t.state={todo:[],list:[],a:100,b:200},t}return Object(d.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("todo")),e=JSON.parse(localStorage.getItem("list"));t&&e&&this.setState((function(a,n){return{todo:t,list:e}}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"boxList"},o.a.createElement(g,{add:this.addItem}),o.a.createElement(v,{addo:this.addOver,overdo:this.overDoing,addnum:this.changeNum,todo:this.state.todo,list:this.state.list,del:this.delteItem,delete:this.delItem,clear:this.state.todo.clear,check:this.checkboxCheck,checked:this.checkboxChecked}))}}]),e}(n.Component),O=function(t){function e(){return Object(s.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement(h.a,{basename:"/build"},o.a.createElement("div",null,o.a.createElement(m.a,{path:"/todolist",component:E})))}}]),e}(n.Component);c.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.feb2ddcf.chunk.js.map