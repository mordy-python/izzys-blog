import{S as _,i as p,s as d,e as u,b as $,f as m,d as y,t as f,Z as b,h as k,w as P,x as v,y as w,z as S,g as q}from"../../../../../chunks/index-820a08ec.js";import{P as z}from"../../../../../chunks/PageTitle-fd666bad.js";function h(l,n,r){const e=l.slice();return e[1]=n[r],e}function g(l){let n,r;return n=new z({props:{path:l[1].path,title:l[1].meta.title,date:l[1].meta.date,tags:l[1].meta.tags,summary:l[1].meta.summary}}),{c(){P(n.$$.fragment)},l(e){v(n.$$.fragment,e)},m(e,t){w(n,e,t),r=!0},p(e,t){const i={};t&1&&(i.path=e[1].path),t&1&&(i.title=e[1].meta.title),t&1&&(i.date=e[1].meta.date),t&1&&(i.tags=e[1].meta.tags),t&1&&(i.summary=e[1].meta.summary),n.$set(i)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){f(n.$$.fragment,e),r=!1},d(e){S(n,e)}}}function B(l){let n,r,e=l[0].posts,t=[];for(let a=0;a<e.length;a+=1)t[a]=g(h(l,e,a));const i=a=>f(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();n=u()},l(a){for(let s=0;s<t.length;s+=1)t[s].l(a);n=u()},m(a,s){for(let o=0;o<t.length;o+=1)t[o].m(a,s);$(a,n,s),r=!0},p(a,[s]){if(s&1){e=a[0].posts;let o;for(o=0;o<e.length;o+=1){const c=h(a,e,o);t[o]?(t[o].p(c,s),m(t[o],1)):(t[o]=g(c),t[o].c(),m(t[o],1),t[o].m(n.parentNode,n))}for(q(),o=e.length;o<t.length;o+=1)i(o);y()}},i(a){if(!r){for(let s=0;s<e.length;s+=1)m(t[s]);r=!0}},o(a){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)f(t[s]);r=!1},d(a){b(t,a),a&&k(n)}}}function C(l,n,r){let{data:e}=n;return l.$$set=t=>{"data"in t&&r(0,e=t.data)},[e]}class Z extends _{constructor(n){super(),p(this,n,C,B,d,{data:0})}}export{Z as default};
