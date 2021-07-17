(this["webpackJsonpadopt-me"]=this["webpackJsonpadopt-me"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(17),s=n.n(a),i=n(9),o=n(2),l=n(8),u=n.n(l),j=n(11),d=n(6),h={};var b=n(0),O=function(e){var t=e.name,n=e.animal,c=e.breed,r=e.images,a=e.location,s=e.id,o="http://pets-images.dev-apis.com/pets/none.jpg";return r.length&&(o=r[0]),Object(b.jsxs)(i.b,{to:"/details/".concat(s),className:"pet",children:[Object(b.jsx)("div",{className:"image-container",children:Object(b.jsx)("img",{src:o,alt:t})}),Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("h2",{children:"".concat(n," - ").concat(c," - ").concat(a)})]})]})},p=function(e){var t=e.pets;return Object(b.jsx)("div",{className:"search",children:t.length?t.map((function(e){return Object(b.jsx)(O,{animal:e.animal,name:e.name,breed:e.breed,images:e.images,location:"".concat(e.city,", ").concat(e.state),id:e.id},e.id)})):Object(b.jsx)("h2",{children:"No Pets Found"})})},m=Object(c.createContext)(["green",function(){}]),v=["bird","cat","dog","rabbit","reptile"],x=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(d.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(""),O=Object(d.a)(l,2),x=O[0],f=O[1],g=Object(c.useState)([]),y=Object(d.a)(g,2),k=y[0],C=y[1],w=function(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)("unloadded"),i=Object(d.a)(s,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){function t(){return(t=Object(j.a)(u.a.mark((function t(){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a([]),l("loading"),t.next=4,fetch("http://pets-v2.dev-apis.com/breeds?animal=".concat(e));case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,h[e]=c.breeds||[],a(h[e]),l("loaded");case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e?h[e]?a(h[e]):function(){t.apply(this,arguments)}():a([])}),[e]),[r,o]}(i),S=Object(d.a)(w,1)[0],N=Object(c.useContext)(m),E=Object(d.a)(N,2),M=E[0],B=E[1];function A(){return F.apply(this,arguments)}function F(){return(F=Object(j.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://pets-v2.dev-apis.com/pets?animal=".concat(i,"&location=").concat(n,"&breed=").concat(x));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),C(c.pets);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){A()}),[]),Object(b.jsxs)("div",{className:"search-params",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),A()},children:[Object(b.jsxs)("label",{htmlFor:"location",children:["Location",Object(b.jsx)("input",{id:"location",onChange:function(e){return r(e.target.value)},value:n,placeholder:"Location"})]}),Object(b.jsxs)("label",{htmlFor:"animal",children:["Animal",Object(b.jsxs)("select",{id:"animal",value:i,onChange:function(e){return o(e.target.value)},onBlur:function(e){return o(e.target.value)},children:[Object(b.jsx)("option",{}),v.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]})]}),Object(b.jsxs)("label",{htmlFor:"breed",children:["Breed",Object(b.jsxs)("select",{id:"breed",value:x,onChange:function(e){return f(e.target.value)},onBlur:function(e){return f(e.target.value)},children:[Object(b.jsx)("option",{}),S.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]})]}),Object(b.jsxs)("label",{htmlFor:"theme",children:["Theme",Object(b.jsxs)("select",{value:M,onChange:function(e){return B(e.target.value)},onBlur:function(e){return B(e.target.value)},children:[Object(b.jsx)("option",{value:"darkblue",children:"Dark Blue"}),Object(b.jsx)("option",{value:"peru",children:"Peru"}),Object(b.jsx)("option",{value:"chartreuse",children:"Chartreuse"}),Object(b.jsx)("option",{value:"mediumorchid",children:"Medium Orchid"})]})]}),Object(b.jsx)("button",{style:{backgroundColor:M},children:"Submit"})]}),Object(b.jsx)(p,{pets:k})]})},f=n(24),g=n(12),y=n(13),k=n(15),C=n(14),w=function(e){Object(k.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(g.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={active:0},e.handleIndexClick=function(t){e.setState({active:+t.target.dataset.index})},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this,t=this.state.active,n=this.props.images;return Object(b.jsxs)("div",{className:"carousel",children:[Object(b.jsx)("img",{src:n[t],alt:"animal"}),Object(b.jsx)("div",{className:"carousel-smaller",children:n.map((function(n,c){return Object(b.jsx)("img",{src:n,"data-index":c,onClick:e.handleIndexClick,className:c===t?"active":"",alt:"animal thumbnail"},n)}))})]})}}]),n}(c.Component);w.defaultProps={images:["http://pets-images.dev-apis.com/pets/none.jpg"]};var S=w,N=function(e){Object(k.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(g.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1,redirect:!1},e}return Object(y.a)(n,[{key:"componentDidCatch",value:function(e,t){var n=this;console.error("ErrorBoundary caught an error",e,t),setTimeout((function(){return n.setState({redirect:!0})}),5e3)}},{key:"render",value:function(){return this.state.redirect?Object(b.jsx)(o.a,{to:"/"}):this.state.hasError?Object(b.jsxs)("h2",{children:["There was an error with this listing. ",Object(b.jsx)(i.b,{to:"/",children:"Click here"})," ","to back to the home page or wait five seconds."]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(c.Component),E=document.getElementById("modal"),M=function(e){var t=e.children,n=Object(c.useRef)(null);return n.current||(n.current=document.createElement("div")),Object(c.useEffect)((function(){return E.appendChild(n.current),function(){return E.removeChild(n.current)}}),[]),Object(a.createPortal)(Object(b.jsx)("div",{children:t}),n.current)},B=function(e){Object(k.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(g.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,showModal:!1},e.toggleModal=function(){return e.setState({showModal:!e.state.showModal})},e.adopt=function(){return window.location="http://bit.ly/pet-adopt"},e}return Object(y.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://pets-v2.dev-apis.com/pets?id=".concat(this.props.match.params.id));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState(Object.assign({loading:!1},n.pets[0]));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(console.log(this.state),this.state.loading)return Object(b.jsx)("h2",{children:"loading..."});var t=this.state,n=t.animal,c=t.breed,r=t.city,a=t.state,s=t.description,i=t.name,o=t.images,l=t.showModal;return Object(b.jsxs)("div",{className:"details",children:[Object(b.jsx)(S,{images:o}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:i}),Object(b.jsx)("h2",{children:"".concat(n," - ").concat(c," - ").concat(r,", - ").concat(a)}),Object(b.jsx)("p",{children:s}),Object(b.jsx)(m.Consumer,{children:function(t){var n=Object(d.a)(t,1)[0];return Object(b.jsxs)("button",{onClick:e.toggleModal,style:{backgroundColor:n},children:["Adopt ",i]})}}),l?Object(b.jsx)(M,{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{children:["Would you like to adopt ",i,"?"]}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:this.adopt,children:"Yes"}),Object(b.jsx)("button",{onClick:this.toggleModal,children:"No"})]})]})}):null]})]})}}]),n}(c.Component),A=Object(o.g)(B);function F(e){return Object(b.jsx)(N,{children:Object(b.jsx)(A,Object(f.a)({},e))})}n(36);var D=function(){var e=Object(c.useState)("darkblue");return Object(b.jsx)(m.Provider,{value:e,children:Object(b.jsx)("div",{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)("header",{children:Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("h1",{children:"Adopt Me!"})})}),Object(b.jsxs)(o.d,{children:[Object(b.jsxs)(o.b,{path:"/details/:id",children:[" ",Object(b.jsx)(F,{})," "]}),Object(b.jsxs)(o.b,{path:"/",children:[" ",Object(b.jsx)(x,{})," "]})]})]})})})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.09d16df7.chunk.js.map