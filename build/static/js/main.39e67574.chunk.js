(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/loading.466ec83d.gif"},24:function(e,t,a){e.exports=a.p+"static/media/logo.465dc53c.svg"},30:function(e,t,a){e.exports=a(46)},36:function(e,t,a){},37:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),o=(a(36),a(3)),l=a(4),s=a(6),m=a(5),u=a(7),d=a(49),p=a(50),b=(a(37),a(38),a(13)),v=a(47),f=a(24),h=a.n(f),E=a(14);function g(){var e=Object(b.a)(["\n  background: var(--mainBlue);\n  .nav-link{\n    color: var(--mainWhite) !important;\n    font-size: 1.3rem;\n    text-transform: capitalize;\n  }\n"]);return g=function(){return e},e}var x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(j,{className:"navbar navbar-expand-sm navbar-dark px-sm-5"},r.a.createElement(v.a,{to:"/"},r.a.createElement("img",{src:h.a,alt:"movie",className:"navbar-brand"})),r.a.createElement("ul",{className:"navbar-nav align-items-center"},r.a.createElement("li",{className:"nav-item ml-5"},r.a.createElement(v.a,{to:"/",className:"nav-link"},"movies"))))}}]),t}(n.Component),j=E.a.nav(g()),O=x,w=a(28),N=a(22),y=a(10),k=a.n(y),L=a(19),C=r.a.createContext(),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[],details:void 0,isLoading:!1,error:!1,refresh:!1},a.callAPI=function(){var e=Object(L.a)(k.a.mark(function e(t,a){var n,r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new Headers).append("Access-Control-Allow-Origin","*"),n.append("Content-Type","application/json; charset=utf-8"),n.append("mode","no-cors"),e.next=6,fetch(t,{headers:n},{signal:a});case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.getMovies=Object(L.a)(k.a.mark(function e(){var t,n,r,c,i,o;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new AbortController,n=t.signal,setTimeout(function(){t.abort()},500),"/api/movies/",r="https://webmovieapi.azurewebsites.net".concat("/api/movies/"),c=[],a.setState({error:!1,isLoading:!0}),i=a.callAPI(r,n),e.next=10,i;case 10:if(200===(o=e.sent).status){e.next=15;break}a.setState(function(){return{mError:!0,isLoading:!1}}),e.next=21;break;case 15:if(200!==o.status){e.next=21;break}return e.next=18,o.json();case 18:e.sent.value.forEach(function(e){var t=Object(N.a)({},e);c=[].concat(Object(w.a)(c),[t])}),a.setState(function(){return{movies:c,isLoading:!1,error:!1}});case 21:case"end":return e.stop()}},e)})),a.getItem=function(){var e=Object(L.a)(k.a.mark(function e(t,n){var r,c,i,o,l,s,m;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new AbortController,c=r.signal,setTimeout(function(){r.abort()},500),i=n+"/"+t,"/api/movies/",o="https://webmovieapi.azurewebsites.net".concat("/api/movies/").concat(i),a.setState({error:!1,isLoading:!0}),l=a.callAPI(o,c),e.next=10,l;case 10:if(200===(s=e.sent).status){e.next=15;break}a.setState(function(){return{error:!0,isLoading:!1}}),e.next=20;break;case 15:if(200!==s.status){e.next=20;break}return e.next=18,s.json();case 18:m=e.sent,a.setState(function(){return{details:m.value,isLoading:!1,error:!1}});case 20:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.handleDetail=function(e,t){a.setState({details:void 0}),a.getItem(e,t)},a.handleList=function(){a.setState({movies:[]}),a.getMovies()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){return r.a.createElement(C.Provider,{value:Object(N.a)({},this.state,{handleDetail:this.handleDetail,handleList:this.handleList})},this.props.children)}}]),t}(n.Component),A=C.Consumer;function S(){var e=Object(b.a)(["\n  .card {\n    border-color: transparent;\n  }\n  .card-title{\n    padding: 0.2rem 0.4rem;\n    font-size: 1.4rem;\n  }\n  .card-footer {\n    background: transparent;\n    border-top: transparent;\n  }\n  &:hover {\n    .card {\n      border: 0.04rem solid rgba(0, 0, 0, 0.2);\n      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);\n    }\n    .card-footer {\n      background: rgba(247, 247, 247);\n    }\n  }\n  .img-container {\n    position: relative;\n    overflow: hidden;\n  }\n  .view-btn {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 0.2rem 0.4rem;\n    background: var(--lightBlue);\n    border: none;\n    color: var(--mainWhite);\n    font-size: 1.4rem;\n    border-radius: 0.5rem 0 0 0;\n  }\n  .view-btn:hover {\n    color: var(--mainBlue);\n    cursor: pointer;\n  }\n"]);return S=function(){return e},e}var B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.movie,t=e.id,a=e.title,n=e.poster,c=e.year,i=e.type,o=e.provider;return r.a.createElement(D,{className:"col-9 mx-auto col-md-6 col-lg-3 my-3"},r.a.createElement("div",{className:"card"},r.a.createElement("p",{className:"align-self-center mb-0 card-title"},i),r.a.createElement(A,null,function(e){return r.a.createElement("div",{className:"img-container p-5"},r.a.createElement("img",{src:n,alt:"",className:"card-img-top"}),r.a.createElement("button",{className:"view-btn",onClick:function(){e.handleDetail(t,o)}},r.a.createElement(v.a,{to:"/details"},"View Details")))}),r.a.createElement("div",{className:"card-footer d-flex justify-content-between"},r.a.createElement("p",{className:"align-self-center mb-0"},a),r.a.createElement("h5",{className:"text-blue font-italic mb-0"},c))))}}]),t}(n.Component),D=E.a.div(S()),I=B;function P(e){var t=e.name,a=e.title;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto my-2 text-center text-title"},r.a.createElement("h1",{className:"text-capitalize font-weight-bold"},t," ",r.a.createElement("strong",{className:"text-blue"},a))))}var M=a(15),V=a.n(M),W=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement(P,{name:"movies",title:"list"}),r.a.createElement("div",{className:"row"},r.a.createElement(A,null,function(e){return e.isLoading?r.a.createElement("div",{className:"col-9 mx-auto col-md-6 col-lg-3 my-3 align-self-center "},r.a.createElement("img",{alt:"loading...",src:V.a})):!e.isLoading&&e.error?r.a.createElement("div",{className:"col-10 mx-auto text-center text-slanted text-blue my-5"},r.a.createElement("button",{onClick:function(){e.handleList()}},r.a.createElement(v.a,{to:"/"},"Refresh List View"))):e.movies.map(function(e){return r.a.createElement(I,{key:e.id,movie:e})})})))))}}]),t}(n.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(A,null,function(e){if(e.isLoading)return r.a.createElement("div",{className:"col-9 mx-auto col-md-6 col-lg-3 my-3 align-self-center "},r.a.createElement("img",{alt:"loading...",src:V.a}));if(!e.isLoading&&e.error||!e.isLoading&&!e.error&&void 0===e.details)return r.a.createElement("div",{className:"col-10 mx-auto text-center text-slanted text-blue my-5"},r.a.createElement("button",{onClick:function(){e.handleList()}},r.a.createElement(v.a,{to:"/"},"Back to List View")));if(void 0!==e.details&&!e.isLoading&&!e.error){var t=e.details,a=t.genre,n=t.poster,c=t.plot,i=t.price,o=t.title;return r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-slanted text-blue my-5"},r.a.createElement("h1",null,o))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-3 my-3"},r.a.createElement("img",{src:n,className:"img-fluid",alt:""})),r.a.createElement("div",{className:"col-10 mx-auto col-md-8 my-3 text-capitalize"},r.a.createElement("h4",{className:"text-title text-uppercase text-muted mt-3 mb-2"},"Genre : ",r.a.createElement("span",{className:"text-uppercase"},a)),r.a.createElement("h4",{className:"text-blue"},r.a.createElement("strong",null,"price : ",r.a.createElement("span",null,"$"),i)),r.a.createElement("p",{className:"text-capitalize font-weight-bold mt-3 mb-0"},"Plot :"),r.a.createElement("p",{className:"text-muted lead"},c),r.a.createElement("button",{onClick:function(){e.handleList()}},r.a.createElement(v.a,{to:"/"},"Back to List View")))))}})}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Page Not Found!"))}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:W}),r.a.createElement(p.a,{path:"/details",component:F}),r.a.createElement(p.a,{component:T})))}}]),t}(n.Component),$=a(48);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z,null,r.a.createElement($.a,null,r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.39e67574.chunk.js.map