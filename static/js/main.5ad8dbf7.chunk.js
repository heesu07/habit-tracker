(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(9),r=n.n(o),i=(n(16),n(10)),l=n(6),h=n(2),u=n(3),b=n(5),d=n(4),j=(n(17),function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e.className="habit-button habit-increase",e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log('habit: "'.concat(this.props.habit.name,'" mounted'))}},{key:"componentWillUnmount",value:function(){console.log('habit: "'.concat(this.props.habit.name,'" will unmount'))}},{key:"render",value:function(){console.log("habit");var e=this.props.habit,t=e.name,n=e.count;return Object(a.jsxs)("li",{className:"habit",children:[Object(a.jsxs)("span",{className:"habit-name",children:[" ",t," "]}),Object(a.jsx)("span",{className:"habit-count",children:n}),Object(a.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(a.jsx)("i",{className:"fas fa-plus-square"})}),Object(a.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(a.jsx)("i",{className:"fas fa-minus-square"})}),Object(a.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(a.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(c.PureComponent)),m=Object(c.memo)((function(e){var t=s.a.createRef();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{action:"",className:"add-form",onSubmit:function(n){n.preventDefault();var a=t.current.value;console.log(a),a&&e.onAdd(a),t.current.value=""},children:[Object(a.jsx)("input",{ref:t,type:"text",className:"add-input",placeholder:"new"}),Object(a.jsx)("button",{className:"add-button",children:"Add"})]})})})),p=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleAdd=function(t){e.props.onAdd(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return console.log("habits"),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{onAdd:this.handleAdd}),Object(a.jsx)("ul",{children:this.props.habits.map((function(t){return Object(a.jsx)(j,{habit:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete},t.id)}))}),Object(a.jsx)("button",{className:"habit-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(c.Component),f=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return console.log("navbar"),Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(a.jsx)("span",{children:"Habit Tracker"}),Object(a.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(c.PureComponent),O=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},e.handleIncrement=function(t){var n=e.state.habits.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},t),{},{count:t.count+1}):e}));e.setState({habits:n})},e.handleDecrement=function(t){var n=e.state.habits.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},t),{},{count:t.count-1>0?t.count-1:0}):e}));e.setState({habits:n})},e.handleDelete=function(t){var n=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:n})},e.handleAdd=function(t){var n=[].concat(Object(i.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e.handleReset=function(){var t=e.state.habits.map((function(e){return 0!==e.count?Object(l.a)(Object(l.a)({},e),{},{count:0}):e}));e.setState({habits:t})},e}return Object(u.a)(n,[{key:"render",value:function(){return console.log("app"),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),Object(a.jsx)(p,{habits:this.state.habits,onAdd:this.handleAdd,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onReset:this.handleReset})]})}}]),n}(c.Component);n(18);r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5ad8dbf7.chunk.js.map