(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e){e.exports=[{id:1,text:"Step text 10"},{id:2,text:"Step text 20"},{id:3,text:"Step text 30"}]},,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),i=n.n(c),o=n(3),l=n(4),s=n(8),u=n(5),p=n(9),d=n(6),m=n.n(d),f=function(e){var t=e.data;return r.a.createElement("li",{className:"step","data-index":t.id},r.a.createElement("p",null,t.text))},h=function(e){return r.a.createElement("ul",null,e.ArticleEntries.map(function(e,t){return r.a.createElement(f,{data:e,key:e.id})}))},E=(n(16),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={stepValue:0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;m()({selector:".step",offset:.25,enter:function(t){t.classList.add("entered");var n=t.getAttribute("data-index");e.updateGraphic(t,n)},exit:function(t){var n=t.getAttribute("data-index");n=Math.max(0,n-1),e.updateGraphic(t,n)},progress:function(e,t){},once:!1})}},{key:"updateGraphic",value:function(e,t){console.log(t,e),this.setState({stepValue:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"scrollyteller"},r.a.createElement("figure",{className:"sticky"},r.a.createElement("h2",null,this.state.stepValue)),r.a.createElement("article",null,r.a.createElement(h,{ArticleEntries:this.props.ArticleEntries})))}}]),t}(a.Component)),v=n(7);n(17);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"React template"),r.a.createElement(E,{ArticleEntries:v}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(18);i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.88fc2107.chunk.js.map