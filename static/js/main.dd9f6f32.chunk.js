(this.webpackJsonpmytodolist=this.webpackJsonpmytodolist||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var i=n(2),a=n.n(i),s=n(5),c=n.n(s),r=(n(20),n(13)),d=n(8),u=n(9),o=n(3),m=n(15),l=n(14),h=(n(21),n(22),n(10)),j=n(11),b=n(1);var p=function(t){var e=t.items.map((function(e){return Object(b.jsx)("div",{className:"list",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{type:"text",id:e.key,value:e.item,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(b.jsx)("span",{children:Object(b.jsx)(h.a,{className:"faicons",icon:"trash",onClick:function(){return t.deleteItem(e.key)}})})]})},e.key)}));return Object(b.jsx)("div",{children:Object(b.jsx)(j.a,{duration:500,easing:"ease-in-out",children:e})})},f=n(4),v=n(12);f.b.add(v.a);var O=function(t){Object(m.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).state={items:[],currentItem:{item:"",key:""}},i.handleinput=i.handleinput.bind(Object(o.a)(i)),i.addItem=i.addItem.bind(Object(o.a)(i)),i.deleteItem=i.deleteItem.bind(Object(o.a)(i)),i.setUpdate=i.setUpdate.bind(Object(o.a)(i)),i}return Object(u.a)(n,[{key:"handleinput",value:function(t){this.setState({currentItem:{item:t.target.value,key:new Date}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(""!==e.item){var n=[].concat(Object(r.a)(this.state.items),[e]);this.setState({items:n,currentItem:{item:"",key:"f"}})}}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){var n=this.state.items;n.map((function(n){n.key===e&&(n.item=t)})),this.setState({items:n})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{children:Object(b.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(b.jsx)("input",{type:"text",placeholder:"Enter your text here",value:this.state.currentItem.item,onChange:this.handleinput}),Object(b.jsx)("button",{type:"submit",children:"Add"})]})}),Object(b.jsx)(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]})}}]),n}(a.a.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),y()}},[[29,1,2]]]);
//# sourceMappingURL=main.dd9f6f32.chunk.js.map