"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[155],{55:function(n,t,e){e.d(t,{x:function(){return a}});var r=e(444),c=e(407),a=(0,r.ZP)("div")(c.$_,c.Dh,c.bK,c.GQ,c.eC,c.Oq,c.Cg,c.FK)},155:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,c,a=e(861),u=e(885),o=e(757),i=e.n(o),s=e(55),p=e(791),f=e(168),l=e(444),h=l.ZP.input(r||(r=(0,f.Z)(["\n    border-radius: ",";\n    margin-right: ","px;\n    height: ","px;\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]})),v=l.ZP.button(c||(c=(0,f.Z)(["\n    border-radius: ",";\n    height: ","px;\n    width: ","px;\n    background-color: ",";\n    border-color: ",";\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[7]}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.black})),d=e(184);function m(n){var t=n.onSubmit,e=(0,p.useState)(""),r=(0,u.Z)(e,2),c=r[0],a=r[1];return(0,d.jsx)(s.x,{as:"div",p:3,children:(0,d.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(c),a("")},children:[(0,d.jsx)(h,{type:"text",value:c,onChange:function(n){a(n.target.value)}}),(0,d.jsx)(v,{type:"submit",children:" Submit "})]})})}var x,g,b=e(731),Z=e(689),y=e(149),k=l.ZP.li(x||(x=(0,f.Z)(["\n    padding: ","px ","px;\n\n    &:not(:last-child)\xa0{\n        margin-bottom: ","px;\n    }\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[2]})),w=l.ZP.p(g||(g=(0,f.Z)(["\n    padding: ","px;\n"])),(function(n){return n.theme.space[3]}));function _(){var n=(0,Z.TH)(),t=(0,b.lr)(),e=(0,u.Z)(t,2),r=e[0],c=e[1],o=(0,p.useState)([]),f=(0,u.Z)(o,2),l=f[0],h=f[1];return(0,p.useEffect)((function(){var n=r.get("query");function t(){return(t=(0,a.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,y.E3)(n);case 3:e=t.sent,h(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}n&&r&&function(){t.apply(this,arguments)}()}),[r]),(0,d.jsxs)(s.x,{as:"div",p:3,children:[(0,d.jsx)(m,{onSubmit:function(n){c({query:n})}}),0!==l.length?(0,d.jsxs)("ul",{children:[" ",l.map((function(t){var e=t.id,r=t.title;return(0,d.jsx)(k,{children:(0,d.jsx)(b.OL,{to:"".concat(e),state:{from:n},children:r})},e)}))]}):(0,d.jsx)(w,{children:"Enter the name"})]})}function j(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(_,{})})}},149:function(n,t,e){e.d(t,{Bt:function(){return f},E3:function(){return l},Ny:function(){return s},Tg:function(){return i},y:function(){return p}});var r=e(861),c=e(757),a=e.n(c),u=e(388);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="c0f869c87d748d5d35a5a4a4dbb44054",i=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("trending/all/day?api_key=".concat(o));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=155.785262f6.chunk.js.map