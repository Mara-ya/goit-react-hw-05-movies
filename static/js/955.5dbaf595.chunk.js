"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[955],{55:function(e,n,t){t.d(n,{x:function(){return c}});var r=t(444),a=t(407),c=(0,r.ZP)("div")(a.$_,a.Dh,a.bK,a.GQ,a.eC,a.Oq,a.Cg,a.FK)},955:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r,a,c,s,i,u=t(731),o=t(168),p=t(444),l=p.ZP.div(r||(r=(0,o.Z)(["\n    border: 1px solid ",";\n    padding: ","px ","px;\n"])),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[2]})),h=p.ZP.div(a||(a=(0,o.Z)(["\n    &:not(:last-child){\n        margin-bottom: ","px;\n    }\n"])),(function(e){return e.theme.space[3]})),v=t(184),f=[{href:"cast",text:"Cast"},{href:"reviews",text:"Reviews"}],d=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(l,{children:f&&(0,v.jsx)("ul",{children:f.map((function(e){var n=e.href,t=e.text;return(0,v.jsx)(h,{children:(0,v.jsx)(u.rU,{to:n,children:t})},n)}))})})})},x=t(861),m=t(885),g=t(757),w=t.n(g),j=t(55),Z=t(791),y=t(689),b=t(149),_=t(134),k=p.ZP.div(c||(c=(0,o.Z)(["\n    & a{\n        display: flex;\n        align-items: center;\n    }\n\n    & svg{\n        margin-right: ","px;\n    }\n"])),(function(e){return e.theme.space[3]})),U=p.ZP.div(s||(s=(0,o.Z)(["\n    margin-top: ","px;\n\n    & p{\n        margin-bottom: ","px;\n    }\n    & h2{\n        margin-bottom: ","px;\n    }\n\n    & h3{\n        margin-bottom: ","px;\n        margin-top: ","px;\n    }\n\n    @media screen and (min-width:480px) {\n        display: flex;\n        gap: ","px;\n    }\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[1]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[4]})),P=p.ZP.img(i||(i=(0,o.Z)(["\n    width: 250px;\n"])));function S(){var e,n,t=(0,y.TH)(),r=(0,y.UO)().movieId,a=(0,Z.useState)({}),c=(0,m.Z)(a,2),s=c[0],i=c[1],o=null!==(e=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies",p=(0,Z.useState)(null),l=(0,m.Z)(p,2),h=l[0],f=l[1];return(0,Z.useEffect)((function(){function e(){return(e=(0,x.Z)(w().mark((function e(n){var t;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.Ny)(n).then((function(e){return{poster_path:e.poster_path,title:e.title,genres:e.genres,overview:e.overview,vote_average:e.vote_average}}));case 3:t=e.sent,i(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(n){e.apply(this,arguments)}(r)}),[r]),(0,v.jsxs)(j.x,{as:"div",p:3,children:[(0,v.jsx)(k,{children:(0,v.jsxs)(u.rU,{to:o,children:[(0,v.jsx)(_.kyg,{})," Go back"]})}),(0,v.jsxs)(U,{children:[(0,v.jsx)(P,{src:"https://image.tmdb.org/t/p/w500/".concat(s.poster_path),alt:s.title}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:s.title}),(0,v.jsxs)("p",{children:["User Score: ",Math.round(10*s.vote_average),"%"]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:s.overview}),(0,v.jsx)("h3",{children:"Genres"}),s.hasOwnProperty("genres")&&(0,v.jsx)("ul",{children:s.genres.map((function(e){var n=e.id,t=e.name;return(0,v.jsx)("li",{children:(0,v.jsx)("p",{children:t})},n)}))})]})]}),h&&(0,v.jsx)(y.Fg,{to:"/",replace:!0})]})}function C(){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(S,{}),(0,v.jsx)(d,{}),(0,v.jsx)(y.j3,{})]})}},149:function(e,n,t){t.d(n,{Bt:function(){return l},E3:function(){return h},Ny:function(){return o},Tg:function(){return u},y:function(){return p}});var r=t(861),a=t(757),c=t.n(a),s=t(388);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="c0f869c87d748d5d35a5a4a4dbb44054",u=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("trending/all/day?api_key=".concat(i));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=955.5dbaf595.chunk.js.map