(this.webpackJsonpstandup=this.webpackJsonpstandup||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),i=n.n(s),c=n(8),o=n.n(c),r=(n(15),n(9)),d=n(3),l=n(4),u=n(2),b=n(6),h=n(5),j=n.p+"static/media/standup_logo.dea47840.png",m=(n(16),n(17),n(18),n.p+"static/media/anonymous.35a8b45d.jpg"),p=function(e){return e?Object(a.jsxs)("div",{className:"anonymous",children:[Object(a.jsx)("div",{className:"today_title",children:"\ubb34\uc5c7\uc744 \uacf5\uc720\ud560\uae4c\uc694?"}),Object(a.jsx)("div",{className:"anonymous_name",children:" \ud2f0\ud30c\ub2c8 "}),Object(a.jsx)("div",{className:"anonymous_img_wrap",children:Object(a.jsx)("img",{src:m,alt:"profiles",className:"anonymous_img"})})]}):Object(a.jsx)("div",{})},v=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).onPaste=a.onPaste.bind(Object(u.a)(a)),a.editorChange=a.editorChange.bind(Object(u.a)(a)),a.getCard=a.getCard.bind(Object(u.a)(a)),a.hasValue=a.hasValue.bind(Object(u.a)(a)),a.state={embedlyUrl:void 0,content:void 0},a}return Object(l.a)(n,[{key:"onPaste",value:function(e){var t=this;e.clipboardData.items[0].getAsString((function(e){t.detectURL(e)&&t.setState({embedlyUrl:e,content:t.state.content})}))}},{key:"editorChange",value:function(e){var t=this.detectURL(e.currentTarget.textContent);this.state.embedlyUrl||32!==e.keyCode&&13!==e.keyCode||!t?this.setState({content:e.currentTarget.textContent}):this.setState({embedlyUrl:t,content:e.currentTarget.textContent})}},{key:"detectURL",value:function(e){var t=e.match(/(https?:\/\/[^\s]+\.[a-z]{2,})/g),n=e.match(/(www.[^\s]+\.[a-z]{2,})/g),a=t||n;return a&&a.length>0?a[0]:void 0}},{key:"getCard",value:function(e){return e?Object(a.jsx)("div",{children:e}):Object(a.jsx)("div",{})}},{key:"hasValue",value:function(e){return!(!e||"string"!==typeof e)&&(!!e&&""!==e.trim())}},{key:"handleSubmit",value:function(e){this.props.submit()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"wrapEditor",children:[Object(a.jsx)(p,{isAnonymous:this.props.isAnonymous}),Object(a.jsx)("div",{className:"textEditor",children:Object(a.jsx)("div",{className:"innerEdit",contentEditable:"true",placeholder:"\uae00\uc4f0\uae30......",onPaste:this.onPaste,onKeyUp:this.editorChange})}),Object(a.jsx)("div",{className:"actionBar",children:Object(a.jsx)("button",{className:"upload",onClick:this.props.handleSubmit,children:Object(a.jsx)("span",{children:"\uc2a4\ud0e0\ub4dc\uc5c5!"})})})]})}}]),n}(s.Component),O={apiKey:"AIzaSyCpKAxtKTxKYPifOtk5q93Rp7w-Y88jm-4",authDomain:'"standup-bd62b.firebaseapp.com"h',databaseURL:"https://standup-bd62b.firebaseio.com",storageBucket:"standup-bd62b.appspot.com",messagingSenderId:"725632143502"};console.log(O.apiKey);var g=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){console.log(this,e)}},{key:"isAnonymous",value:function(){return!0}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(a.jsx)("h2",{children:"Stand Up \uc571\uc744 \ub9cc\ub4e4\uc5b4 \ubd05\uc2dc\ub2e4"})]}),Object(a.jsx)(v,Object(r.a)({},this))]})}}]),n}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.26af732e.chunk.js.map