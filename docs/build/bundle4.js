var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,c;function u(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function h(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function y(){return g(" ")}function v(){return g("")}function w(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e){t.value=null==e?"":e}function T(t){c=t}function I(){if(!c)throw new Error("Function called outside component initialization");return c}function k(t){I().$$.on_mount.push(t)}function S(){const t=I();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=function(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}(e,n,{cancelable:r});return s.slice().forEach((e=>{e.call(t,i)})),!i.defaultPrevented}return!0}}function A(t,e){return I().$$.context.set(t,e),e}function C(t){return I().$$.context.get(t)}function N(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const O=[],R=[],D=[],L=[],x=Promise.resolve();let P=!1;function M(){P||(P=!0,x.then($))}function U(){return M(),x}function F(t){D.push(t)}const j=new Set;let V=0;function $(){const t=c;do{for(;V<O.length;){const t=O[V];V++,T(t),B(t.$$)}for(T(null),O.length=0,V=0;R.length;)R.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];j.has(e)||(j.add(e),e())}D.length=0}while(O.length);for(;L.length;)L.pop()();P=!1,j.clear(),T(t)}function B(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const q=new Set;let z;function K(){z={r:0,c:[],p:z}}function G(){z.r||s(z.c),z=z.p}function H(t,e){t&&t.i&&(q.delete(t),t.i(e))}function W(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),z.c.push((()=>{q.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function Q(t,e){const n={},r={},s={$$scope:1};let i=t.length;for(;i--;){const o=t[i],a=e[i];if(a){for(const t in o)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[i]=a}else for(const t in o)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function J(t,e,r,o){const{fragment:a,on_mount:c,on_destroy:u,after_update:l}=t.$$;a&&a.m(e,r),o||F((()=>{const e=c.map(n).filter(i);u?u.push(...e):s(e),t.$$.on_mount=[]})),l.forEach(F)}function Z(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(e,n,i,o,a,u,l,h=[-1]){const d=c;T(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:h,skip_bound:!1,root:n.target||d.$$.root};l&&l(p.root);let m=!1;if(p.ctx=i?i(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),m&&function(t,e){-1===t.$$.dirty[0]&&(O.push(t),M(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),m=!0,s(p.before_update),p.fragment=!!o&&o(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&H(e.$$.fragment),J(e,n.target,n.anchor,n.customElement),$()}T(d)}class et{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt=[];function rt(t,e){return{subscribe:st(t,e).subscribe}}function st(e,n=t){let r;const s=new Set;function i(t){if(o(e,t)&&(e=t,r)){const t=!nt.length;for(const t of s)t[1](),nt.push(t,e);if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(o,a=t){const c=[o,a];return s.add(c),1===s.size&&(r=n(i)||t),o(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}function it(e,n,r){const o=!Array.isArray(e),a=o?[e]:e,c=n.length<2;return rt(r,(e=>{let r=!1;const u=[];let h=0,d=t;const f=()=>{if(h)return;d();const r=n(o?u[0]:u,e);c?e(r):d=i(r)?r:t},p=a.map(((t,e)=>l(t,(t=>{u[e]=t,h&=~(1<<e),r&&f()}),(()=>{h|=1<<e}))));return r=!0,f(),function(){s(p),d()}}))}function ot(t){let n,r,s;const i=[t[2]];var o=t[0];function a(t){let n={};for(let t=0;t<i.length;t+=1)n=e(n,i[t]);return{props:n}}return o&&(n=new o(a()),n.$on("routeEvent",t[7])),{c(){n&&Y(n.$$.fragment),r=v()},m(t,e){n&&J(n,t,e),d(t,r,e),s=!0},p(t,e){const s=4&e?Q(i,[X(t[2])]):{};if(o!==(o=t[0])){if(n){K();const t=n;W(t.$$.fragment,1,0,(()=>{Z(t,1)})),G()}o?(n=new o(a()),n.$on("routeEvent",t[7]),Y(n.$$.fragment),H(n.$$.fragment,1),J(n,r.parentNode,r)):n=null}else o&&n.$set(s)},i(t){s||(n&&H(n.$$.fragment,t),s=!0)},o(t){n&&W(n.$$.fragment,t),s=!1},d(t){t&&f(r),n&&Z(n,t)}}}function at(t){let n,r,s;const i=[{params:t[1]},t[2]];var o=t[0];function a(t){let n={};for(let t=0;t<i.length;t+=1)n=e(n,i[t]);return{props:n}}return o&&(n=new o(a()),n.$on("routeEvent",t[6])),{c(){n&&Y(n.$$.fragment),r=v()},m(t,e){n&&J(n,t,e),d(t,r,e),s=!0},p(t,e){const s=6&e?Q(i,[2&e&&{params:t[1]},4&e&&X(t[2])]):{};if(o!==(o=t[0])){if(n){K();const t=n;W(t.$$.fragment,1,0,(()=>{Z(t,1)})),G()}o?(n=new o(a()),n.$on("routeEvent",t[6]),Y(n.$$.fragment),H(n.$$.fragment,1),J(n,r.parentNode,r)):n=null}else o&&n.$set(s)},i(t){s||(n&&H(n.$$.fragment,t),s=!0)},o(t){n&&W(n.$$.fragment,t),s=!1},d(t){t&&f(r),n&&Z(n,t)}}}function ct(t){let e,n,r,s;const i=[at,ot],o=[];function a(t,e){return t[1]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=v()},m(t,n){o[e].m(t,n),d(t,r,n),s=!0},p(t,[s]){let c=e;e=a(t),e===c?o[e].p(t,s):(K(),W(o[c],1,1,(()=>{o[c]=null})),G(),n=o[e],n?n.p(t,s):(n=o[e]=i[e](t),n.c()),H(n,1),n.m(r.parentNode,r))},i(t){s||(H(n),s=!0)},o(t){W(n),s=!1},d(t){o[e].d(t),t&&f(r)}}}function ut(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const lt=rt(null,(function(t){t(ut());const e=()=>{t(ut())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));it(lt,(t=>t.location));const ht=it(lt,(t=>t.querystring)),dt=st(void 0);async function ft(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await U(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0,void 0),window.location.hash=("#"==t.charAt(0)?"":"#")+t}function pt(t,e,n){let{routes:r={}}=e,{prefix:s=""}=e,{restoreScrollState:i=!1}=e;class o{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:r}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,s,i,o=[],a="",c=t.split("/");for(c[0]||c.shift();s=c.shift();)"*"===(n=s[0])?(o.push("wild"),a+="/(.*)"):":"===n?(r=s.indexOf("?",1),i=s.indexOf(".",1),o.push(s.substring(1,~r?r:~i?i:s.length)),a+=~r&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(a+=(~r?"?":"")+"\\"+s.substring(i))):a+="/"+s;return{keys:o,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=r}match(t){if(s)if("string"==typeof s){if(!t.startsWith(s))return null;t=t.substr(s.length)||"/"}else if(s instanceof RegExp){const e=t.match(s);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let r=0;for(;r<this._keys.length;){try{n[this._keys[r]]=decodeURIComponent(e[r+1]||"")||null}catch(t){n[this._keys[r]]=null}r++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const a=[];r instanceof Map?r.forEach(((t,e)=>{a.push(new o(e,t))})):Object.keys(r).forEach((t=>{a.push(new o(t,r[t]))}));let c=null,u=null,l={};const h=S();async function d(t,e){await U(),h(t,e)}let f=null,p=null;i&&(p=t=>{f=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",p),function(t){I().$$.after_update.push(t)}((()=>{f?window.scrollTo(f.__svelte_spa_router_scrollX,f.__svelte_spa_router_scrollY):window.scrollTo(0,0)})));let m=null,g=null;const y=lt.subscribe((async t=>{m=t;let e=0;for(;e<a.length;){const r=a[e].match(t.location);if(!r){e++;continue}const s={route:a[e].path,location:t.location,querystring:t.querystring,userData:a[e].userData,params:r&&"object"==typeof r&&Object.keys(r).length?r:null};if(!await a[e].checkConditions(s))return n(0,c=null),g=null,void d("conditionsFailed",s);d("routeLoading",Object.assign({},s));const i=a[e].component;if(g!=i){i.loading?(n(0,c=i.loading),g=i,n(1,u=i.loadingParams),n(2,l={}),d("routeLoaded",Object.assign({},s,{component:c,name:c.name,params:u}))):(n(0,c=null),g=null);const e=await i();if(t!=m)return;n(0,c=e&&e.default||e),g=i}return r&&"object"==typeof r&&Object.keys(r).length?n(1,u=r):n(1,u=null),n(2,l=a[e].props),void d("routeLoaded",Object.assign({},s,{component:c,name:c.name,params:u})).then((()=>{dt.set(u)}))}n(0,c=null),g=null,dt.set(void 0)}));return function(t){I().$$.on_destroy.push(t)}((()=>{y(),p&&window.removeEventListener("popstate",p)})),t.$$set=t=>{"routes"in t&&n(3,r=t.routes),"prefix"in t&&n(4,s=t.prefix),"restoreScrollState"in t&&n(5,i=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=i?"manual":"auto")},[c,u,l,r,s,i,function(e){N.call(this,t,e)},function(e){N.call(this,t,e)}]}class mt extends et{constructor(t){super(),tt(this,t,pt,ct,o,{routes:3,prefix:4,restoreScrollState:5})}}class gt{constructor(){this.parameters=void 0}store(t){this.parameters=t}getLoginParameters(){if(!this.parameters)throw Error("Illegal state : parameters are undefined");return this.parameters}}class yt{constructor(t){this.storeLoginParametersPort=t}login(t){this.storeLoginParametersPort.store(t)}}class vt{constructor(t,e){this.appId=t,this.apiKey=e}}function wt(e){let n;return{c(){n=m("div"),n.innerHTML='<div class="svelte-rxtjcc"></div> \n  <div class="svelte-rxtjcc"></div> \n  <div class="svelte-rxtjcc"></div> \n  <div class="svelte-rxtjcc"></div>',_(n,"class","lds-ring svelte-rxtjcc")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class _t extends et{constructor(t){super(),tt(this,t,null,wt,o,{})}}const bt={};class Et{constructor(t){this.choozrId=t}}class Tt{constructor(t){this.choozrId=t}}class It{constructor(t){this.teamId=t}}class kt{constructor(t){this.teamId=t}}function St(e){let n,r,i,o,a,c,u,l,p,v,b,T,I,k,S;return{c(){n=m("h1"),n.textContent="Login",r=y(),i=m("h2"),i.textContent="Api Key",o=y(),a=m("input"),c=y(),u=m("h2"),u.textContent="App Id",l=y(),p=m("input"),v=y(),b=m("button"),T=g("Valider"),_(n,"class","is-size-1 mb-5 has-text-centered"),_(a,"id","api-key"),_(a,"class","mt-1"),_(a,"type","password"),_(u,"class","mt-2"),_(p,"id","app-id"),_(p,"class","mt-1"),_(p,"type","password"),_(b,"class","mt-4"),b.disabled=I=!e[0]||!e[1]},m(t,s){d(t,n,s),d(t,r,s),d(t,i,s),d(t,o,s),d(t,a,s),E(a,e[1]),d(t,c,s),d(t,u,s),d(t,l,s),d(t,p,s),E(p,e[0]),d(t,v,s),d(t,b,s),h(b,T),k||(S=[w(a,"input",e[3]),w(p,"input",e[4]),w(b,"click",e[2])],k=!0)},p(t,e){2&e&&a.value!==t[1]&&E(a,t[1]),1&e&&p.value!==t[0]&&E(p,t[0]),3&e&&I!==(I=!t[0]||!t[1])&&(b.disabled=I)},i:t,o:t,d(t){t&&f(n),t&&f(r),t&&f(i),t&&f(o),t&&f(a),t&&f(c),t&&f(u),t&&f(l),t&&f(p),t&&f(v),t&&f(b),k=!1,s(S)}}}function At(e){let n,r;return n=new _t({}),{c(){Y(n.$$.fragment)},m(t,e){J(n,t,e),r=!0},p:t,i(t){r||(H(n.$$.fragment,t),r=!0)},o(t){W(n.$$.fragment,t),r=!1},d(t){Z(n,t)}}}function Ct(t){let e,n,r,s,i,o;const a=[At,St],c=[];return s=1,i=c[1]=a[1](t),{c(){e=m("section"),n=m("div"),r=m("div"),i.c(),_(r,"class","is-flex is-flex-direction-column"),_(n,"class","hero-body is-flex is-justify-content-center"),_(e,"class","hero is-primary is-fullheight")},m(t,s){d(t,e,s),h(e,n),h(n,r),c[1].m(r,null),o=!0},p(t,[e]){i.p(t,e)},i(t){o||(H(i),o=!0)},o(t){W(i),o=!1},d(t){t&&f(e),c[1].d()}}}function Nt(t,e,n){let r="",s="";const i=S(),o=C("loginUseCase");return[r,s,function(){o.login(new vt(r,s)),i("routeEvent",bt)},function(){s=this.value,n(1,s)},function(){r=this.value,n(0,r)}]}class Ot extends et{constructor(t){super(),tt(this,t,Nt,Ct,o,{})}}class Rt{constructor(t){this.value=t}}function Dt(t,e,n){const r=t.slice();return r[10]=e[n].id,r[11]=e[n].name,r}function Lt(e){let n,r,s,i,o=e[1],a=[];for(let t=0;t<o.length;t+=1)a[t]=Pt(Dt(e,o,t));return{c(){n=m("table"),r=m("thead"),r.innerHTML="<tr><th>Choozrs</th></tr>",s=y(),i=m("tbody");for(let t=0;t<a.length;t+=1)a[t].c();_(n,"class","table is-striped is-hoverable")},m(t,e){d(t,n,e),h(n,r),h(n,s),h(n,i);for(let t=0;t<a.length;t+=1)a[t].m(i,null)},p(t,e){if(10&e){let n;for(o=t[1],n=0;n<o.length;n+=1){const r=Dt(t,o,n);a[n]?a[n].p(r,e):(a[n]=Pt(r),a[n].c(),a[n].m(i,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=o.length}},i:t,o:t,d(t){t&&f(n),p(a,t)}}}function xt(e){let n,r,s;return r=new _t({}),{c(){n=m("div"),Y(r.$$.fragment),_(n,"class","is-flex is-justify-content-center")},m(t,e){d(t,n,e),J(r,n,null),s=!0},p:t,i(t){s||(H(r.$$.fragment,t),s=!0)},o(t){W(r.$$.fragment,t),s=!1},d(t){t&&f(n),Z(r)}}}function Pt(t){let e,n,r,s,i,o,a=t[11].value+"";function c(){return t[5](t[10])}return{c(){e=m("tr"),n=m("td"),r=g(a),s=y(),_(e,"class","is-clickable")},m(t,a){d(t,e,a),h(e,n),h(n,r),h(e,s),i||(o=w(e,"click",c),i=!0)},p(e,n){t=e,2&n&&a!==(a=t[11].value+"")&&b(r,a)},d(t){t&&f(e),i=!1,o()}}}function Mt(t){let e,n,r,i,o,a,c,u,l,p,v,b,T,I,k,S,A,C,N,O;const R=[xt,Lt],D=[];function L(t,e){return t[2]?0:1}return a=L(t),c=D[a]=R[a](t),{c(){e=m("section"),n=m("div"),r=m("div"),i=m("h1"),i.textContent="Home",o=y(),c.c(),u=y(),l=m("hr"),p=y(),v=m("h2"),v.textContent="Nouveau Choozr",b=y(),T=m("input"),I=y(),k=m("button"),S=g("Créer"),_(i,"class","is-size-1 has-text-centered mb-5"),_(T,"id","app-id"),_(T,"class","mt-1"),_(k,"class","mt-4"),k.disabled=A=!t[0],_(r,"class","is-flex is-flex-direction-column"),_(n,"class","hero-body is-flex is-justify-content-center"),_(e,"class","hero is-primary is-fullheight")},m(s,c){d(s,e,c),h(e,n),h(n,r),h(r,i),h(r,o),D[a].m(r,null),h(r,u),h(r,l),h(r,p),h(r,v),h(r,b),h(r,T),E(T,t[0]),h(r,I),h(r,k),h(k,S),C=!0,N||(O=[w(T,"input",t[6]),w(k,"click",t[4])],N=!0)},p(t,[e]){let n=a;a=L(t),a===n?D[a].p(t,e):(K(),W(D[n],1,1,(()=>{D[n]=null})),G(),c=D[a],c?c.p(t,e):(c=D[a]=R[a](t),c.c()),H(c,1),c.m(r,u)),1&e&&T.value!==t[0]&&E(T,t[0]),(!C||1&e&&A!==(A=!t[0]))&&(k.disabled=A)},i(t){C||(H(c),C=!0)},o(t){W(c),C=!1},d(t){t&&f(e),D[a].d(),N=!1,s(O)}}}function Ut(t,e,n){const r=C("getChoozrsUseCase"),s=C("createChoozrUseCase"),i=S();let o="",a=[],c=!0;function u(t){i("routeEvent",new Tt(t))}k((()=>{r.getChoozrs().then((t=>{n(1,a=t)})).catch((t=>console.log(t))).finally((()=>{n(2,c=!1)}))}));return[o,a,c,u,function(){s.createChoozrWith(new Rt(o)).then((t=>i("routeEvent",new Et(t.id)))).catch((t=>console.log(t)))},t=>u(t),function(){o=this.value,n(0,o)}]}class Ft extends et{constructor(t){super(),tt(this,t,Ut,Mt,o,{})}}class jt{constructor(t){this.value=t}}class Vt{constructor(t,e,n,r){this.createChoozrPort=t,this.getLoginParametersPort=e,this.getChoozrsPort=n,this.getChoozrTeamsPort=r}async getChoozrTeamsWith(t){const e=this.getLoginParametersPort.getLoginParameters();return await this.getChoozrTeamsPort.getChoozrTeamsWith(t,e)}async getChoozrs(){const t=this.getLoginParametersPort.getLoginParameters();return await this.getChoozrsPort.getChoozrsWith(t)}generateJoinChoozrURLWith(t){const e=this.getLoginParametersPort.getLoginParameters();return Promise.resolve(new jt(`https://thomas-boutin.github.io/Choozr/#/choozrs/${t.value}/join?appId=${e.appId}&apiKey=${e.apiKey}`))}async createChoozrWith(t){const e=this.getLoginParametersPort.getLoginParameters();return await this.createChoozrPort.createChoozrWith(t,e)}}var $t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Bt(t){var e={exports:{}};return t(e,e.exports),e.exports}function qt(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.')}Bt((function(t,e){t.exports=function(){function t(e,n,r){function s(o,a){if(!n[o]){if(!e[o]){if(!a&&qt)return qt(o);if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[o]={exports:{}};e[o][0].call(u.exports,(function(t){return s(e[o][1][t]||t)}),u,u.exports,t,e,n,r)}return n[o].exports}for(var i=qt,o=0;o<r.length;o++)s(r[o]);return s}return t}()({1:[function(t,e,n){var r;r="undefined"==typeof window?t("abort-controller"):"signal"in new Request("")?window.AbortController:t("abortcontroller-polyfill/dist/cjs-ponyfill").AbortController,e.exports=r},{"abort-controller":20,"abortcontroller-polyfill/dist/cjs-ponyfill":19}],2:[function(t,e,n){var r=function(){function t(t,e,n){this.error=t,this.message=e,this.statusCode=n}return t.prototype.toString=function(){return[this.message,"(",this.error,")",this.statusCode?"[Http code "+this.statusCode+"]":""].join("")},t}();e.exports=r},{}],3:[function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},r.apply(this,arguments)},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},i=s(t("lodash/get")),o=s(t("lodash/isPlainObject")),a=s(t("lodash/keys")),c=s(t("./fetch")),u=s(t("./abort-controller")),l=s(t("./object_to_query_param_string")),h=s(t("./airtable_error")),d=s(t("./table")),f=s(t("./http_headers")),p=s(t("./run_action")),m=s(t("./package_version")),g=s(t("./exponential_backoff_with_jitter")),y="Airtable.js/"+m.default,v=function(){function t(t,e){this._airtable=t,this._id=e}return t.prototype.table=function(t){return new d.default(this,null,t)},t.prototype.makeRequest=function(t){var e,n=this;void 0===t&&(t={});var s=i.default(t,"method","GET").toUpperCase(),o=this._airtable._endpointUrl+"/v"+this._airtable._apiVersionMajor+"/"+this._id+i.default(t,"path","/")+"?"+l.default(i.default(t,"qs",{})),a=new u.default,d={method:s,headers:this._getRequestHeaders(Object.assign({},this._airtable._customHeaders,null!==(e=t.headers)&&void 0!==e?e:{})),signal:a.signal};"body"in t&&w(s)&&(d.body=JSON.stringify(t.body));var f=setTimeout((function(){a.abort()}),this._airtable._requestTimeout);return new Promise((function(e,s){c.default(o,d).then((function(o){if(clearTimeout(f),429!==o.status||n._airtable._noRetryIfRateLimited)o.json().then((function(t){var r=n._checkStatusForError(o.status,t)||_(o.status,t);r?s(r):e({statusCode:o.status,headers:o.headers,body:t})})).catch((function(){var t=_(o.status);s(t)}));else{var a=i.default(t,"_numAttempts",0),c=g.default(a);setTimeout((function(){var i=r(r({},t),{_numAttempts:a+1});n.makeRequest(i).then(e).catch(s)}),c)}})).catch((function(t){clearTimeout(f),t=new h.default("CONNECTION_ERROR",t.message,null),s(t)}))}))},t.prototype.runAction=function(t,e,n,r,s){p.default(this,t,e,n,r,s,0)},t.prototype._getRequestHeaders=function(t){var e=new f.default;e.set("Authorization","Bearer "+this._airtable._apiKey),e.set("User-Agent",y),e.set("Content-Type","application/json");for(var n=0,r=a.default(t);n<r.length;n++){var s=r[n];e.set(s,t[s])}return e.toJSON()},t.prototype._checkStatusForError=function(t,e){var n=(null!=e?e:{error:{}}).error,r=void 0===n?{}:n,s=r.type,i=r.message;return 401===t?new h.default("AUTHENTICATION_REQUIRED","You should provide valid api key to perform this operation",t):403===t?new h.default("NOT_AUTHORIZED","You are not authorized to perform this operation",t):404===t?new h.default("NOT_FOUND",null!=i?i:"Could not find what you are looking for",t):413===t?new h.default("REQUEST_TOO_LARGE","Request body is too large",t):422===t?new h.default(null!=s?s:"UNPROCESSABLE_ENTITY",null!=i?i:"The operation cannot be processed",t):429===t?new h.default("TOO_MANY_REQUESTS","You have made too many requests in a short period of time. Please retry your request later",t):500===t?new h.default("SERVER_ERROR","Try again. If the problem persists, contact support.",t):503===t?new h.default("SERVICE_UNAVAILABLE","The service is temporarily unavailable. Please retry shortly.",t):t>=400?new h.default(null!=s?s:"UNEXPECTED_ERROR",null!=i?i:"An unexpected error occurred",t):null},t.prototype.doCall=function(t){return this.table(t)},t.prototype.getId=function(){return this._id},t.createFunctor=function(e,n){var r=new t(e,n),s=function(t){return r.doCall(t)};return s._base=r,s.table=r.table.bind(r),s.makeRequest=r.makeRequest.bind(r),s.runAction=r.runAction.bind(r),s.getId=r.getId.bind(r),s},t}();function w(t){return"GET"!==t&&"DELETE"!==t}function _(t,e){return o.default(e)?null:new h.default("UNEXPECTED_ERROR","The response from Airtable was invalid JSON. Please try again soon.",t)}e.exports=v},{"./abort-controller":1,"./airtable_error":2,"./exponential_backoff_with_jitter":6,"./fetch":7,"./http_headers":9,"./object_to_query_param_string":11,"./package_version":12,"./run_action":16,"./table":17,"lodash/get":77,"lodash/isPlainObject":89,"lodash/keys":93}],4:[function(t,e,n){function r(t,e,n){return void 0===n&&(n=void 0),function(){for(var r,s=[],i=0;i<arguments.length;i++)s[i]=arguments[i];if("function"!=typeof s[r=void 0===n?s.length>0?s.length-1:0:n]){for(var o=[],a=Math.max(s.length,r),c=0;c<a;c++)o.push(s[c]);return new Promise((function(n,r){o.push((function(t,e){t?r(t):n(e)})),t.apply(e,o)}))}t.apply(e,s)}}e.exports=r},{}],5:[function(t,e,n){var r={};function s(t,e,n){return function(){for(var s=[],i=0;i<arguments.length;i++)s[i]=arguments[i];r[e]||(r[e]=!0,console.warn(n)),t.apply(this,s)}}e.exports=s},{}],6:[function(t,e,n){var r=(this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}})(t("./internal_config.json"));function s(t){var e=r.default.INITIAL_RETRY_DELAY_IF_RATE_LIMITED*Math.pow(2,t),n=Math.min(r.default.MAX_RETRY_DELAY_IF_RATE_LIMITED,e);return Math.random()*n}e.exports=s},{"./internal_config.json":10}],7:[function(t,e,n){var r=(this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}})(t("node-fetch"));e.exports="undefined"==typeof window?r.default:window.fetch.bind(window)},{"node-fetch":20}],8:[function(t,e,n){function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=r},{}],9:[function(t,e,n){var r=(this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}})(t("lodash/keys")),s="undefined"!=typeof window,i=function(){function t(){this._headersByLowercasedKey={}}return t.prototype.set=function(t,e){var n=t.toLowerCase();"x-airtable-user-agent"===n&&(n="user-agent",t="User-Agent"),this._headersByLowercasedKey[n]={headerKey:t,headerValue:e}},t.prototype.toJSON=function(){for(var t={},e=0,n=r.default(this._headersByLowercasedKey);e<n.length;e++){var i=n[e],o=this._headersByLowercasedKey[i];t[s&&"user-agent"===i?"X-Airtable-User-Agent":o.headerKey]=o.headerValue}return t},t}();e.exports=i},{"lodash/keys":93}],10:[function(t,e,n){e.exports={INITIAL_RETRY_DELAY_IF_RATE_LIMITED:5e3,MAX_RETRY_DELAY_IF_RATE_LIMITED:6e5}},{}],11:[function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},s=r(t("lodash/isArray")),i=r(t("lodash/isNil")),o=r(t("lodash/keys"));function a(t,e,n){if(s.default(e))for(var r=0;r<e.length;r++){var i=e[r];/\[\]$/.test(t)?n(t,i):a(t+"["+("object"==typeof i&&null!==i?r:"")+"]",i,n)}else if("object"==typeof e)for(var c=0,u=o.default(e);c<u.length;c++){var l=u[c];a(t+"["+l+"]",i=e[l],n)}else n(t,e)}function c(t){for(var e=[],n=function(t,n){n=i.default(n)?"":n,e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,s=o.default(t);r<s.length;r++){var c=s[r];a(c,t[c],n)}return e.join("&").replace(/%20/g,"+")}e.exports=c},{"lodash/isArray":79,"lodash/isNil":85,"lodash/keys":93}],12:[function(t,e,n){e.exports="0.11.4"},{}],13:[function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},r.apply(this,arguments)},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},i=s(t("lodash/isFunction")),o=s(t("lodash/keys")),a=s(t("./record")),c=s(t("./callback_to_promise")),u=s(t("./has")),l=t("./query_params"),h=function(){function t(t,e){this._table=t,this._params=e,this.firstPage=c.default(d,this),this.eachPage=c.default(f,this,1),this.all=c.default(p,this)}return t.validateParams=function(e){for(var n={},r=[],s=[],i=0,a=o.default(e);i<a.length;i++){var c=a[i],l=e[c];if(u.default(t.paramValidators,c)){var h=(0,t.paramValidators[c])(l);h.pass?n[c]=l:s.push(h.error)}else r.push(c)}return{validParams:n,ignoredKeys:r,errors:s}},t.paramValidators=l.paramValidators,t}();function d(t){if(!i.default(t))throw new Error("The first parameter to `firstPage` must be a function");this.eachPage((function(e){t(null,e)}),(function(e){t(e,null)}))}function f(t,e){var n=this;if(!i.default(t))throw new Error("The first parameter to `eachPage` must be a function");if(!i.default(e)&&void 0!==e)throw new Error("The second parameter to `eachPage` must be a function or undefined");var s="/"+this._table._urlEncodedNameOrId(),o=r({},this._params),c=function(){n._table._base.runAction("get",s,o,null,(function(r,s,i){if(r)e(r,null);else{var u=void 0;i.offset?(o.offset=i.offset,u=c):u=function(){e(null)};var l=i.records.map((function(t){return new a.default(n._table,null,t)}));t(l,u)}}))};c()}function p(t){if(!i.default(t))throw new Error("The first parameter to `all` must be a function");var e=[];this.eachPage((function(t,n){e.push.apply(e,t),n()}),(function(n){n?t(n,null):t(null,e)}))}e.exports=h},{"./callback_to_promise":4,"./has":8,"./query_params":14,"./record":15,"lodash/isFunction":83,"lodash/keys":93}],14:[function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.paramValidators=void 0;var s=r(t("./typecheck")),i=r(t("lodash/isString")),o=r(t("lodash/isNumber")),a=r(t("lodash/isPlainObject")),c=r(t("lodash/isBoolean"));n.paramValidators={fields:s.default(s.default.isArrayOf(i.default),"the value for `fields` should be an array of strings"),filterByFormula:s.default(i.default,"the value for `filterByFormula` should be a string"),maxRecords:s.default(o.default,"the value for `maxRecords` should be a number"),pageSize:s.default(o.default,"the value for `pageSize` should be a number"),offset:s.default(o.default,"the value for `offset` should be a number"),sort:s.default(s.default.isArrayOf((function(t){return a.default(t)&&i.default(t.field)&&(void 0===t.direction||["asc","desc"].includes(t.direction))})),'the value for `sort` should be an array of sort objects. Each sort object must have a string `field` value, and an optional `direction` value that is "asc" or "desc".'),view:s.default(i.default,"the value for `view` should be a string"),cellFormat:s.default((function(t){return i.default(t)&&["json","string"].includes(t)}),'the value for `cellFormat` should be "json" or "string"'),timeZone:s.default(i.default,"the value for `timeZone` should be a string"),userLocale:s.default(i.default,"the value for `userLocale` should be a string"),returnFieldsByFieldId:s.default(c.default,"the value for `returnFieldsByFieldId` should be a boolean")}},{"./typecheck":18,"lodash/isBoolean":81,"lodash/isNumber":86,"lodash/isPlainObject":89,"lodash/isString":90}],15:[function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},r.apply(this,arguments)},s=(this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}})(t("./callback_to_promise")),i=function(){function t(t,e,n){this._table=t,this.id=e||n.id,this.setRawJson(n),this.save=s.default(o,this),this.patchUpdate=s.default(a,this),this.putUpdate=s.default(c,this),this.destroy=s.default(u,this),this.fetch=s.default(l,this),this.updateFields=this.patchUpdate,this.replaceFields=this.putUpdate}return t.prototype.getId=function(){return this.id},t.prototype.get=function(t){return this.fields[t]},t.prototype.set=function(t,e){this.fields[t]=e},t.prototype.setRawJson=function(t){this._rawJson=t,this.fields=this._rawJson&&this._rawJson.fields||{}},t}();function o(t){this.putUpdate(this.fields,t)}function a(t,e,n){var s=this;n||(n=e,e={});var i=r({fields:t},e);this._table._base.runAction("patch","/"+this._table._urlEncodedNameOrId()+"/"+this.id,{},i,(function(t,e,r){t?n(t):(s.setRawJson(r),n(null,s))}))}function c(t,e,n){var s=this;n||(n=e,e={});var i=r({fields:t},e);this._table._base.runAction("put","/"+this._table._urlEncodedNameOrId()+"/"+this.id,{},i,(function(t,e,r){t?n(t):(s.setRawJson(r),n(null,s))}))}function u(t){var e=this;this._table._base.runAction("delete","/"+this._table._urlEncodedNameOrId()+"/"+this.id,{},null,(function(n){n?t(n):t(null,e)}))}function l(t){var e=this;this._table._base.runAction("get","/"+this._table._urlEncodedNameOrId()+"/"+this.id,{},null,(function(n,r,s){n?t(n):(e.setRawJson(s),t(null,e))}))}e.exports=i},{"./callback_to_promise":4}],16:[function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},s=r(t("./exponential_backoff_with_jitter")),i=r(t("./object_to_query_param_string")),o=r(t("./package_version")),a=r(t("./fetch")),c=r(t("./abort-controller")),u="Airtable.js/"+o.default;function l(t,e,n,r,o,h,d){var f=t._airtable._endpointUrl+"/v"+t._airtable._apiVersionMajor+"/"+t._id+n+"?"+i.default(r),p={authorization:"Bearer "+t._airtable._apiKey,"x-api-version":t._airtable._apiVersion,"x-airtable-application-id":t.getId(),"content-type":"application/json"};"undefined"!=typeof window?p["x-airtable-user-agent"]=u:p["User-Agent"]=u;var m=new c.default,g=e.toUpperCase(),y={method:g,headers:p,signal:m.signal};null!==o&&("GET"===g||"HEAD"===g?console.warn("body argument to runAction are ignored with GET or HEAD requests"):y.body=JSON.stringify(o));var v=setTimeout((function(){m.abort()}),t._airtable._requestTimeout);a.default(f,y).then((function(i){if(clearTimeout(v),429!==i.status||t._airtable._noRetryIfRateLimited)i.json().then((function(e){var n=t._checkStatusForError(i.status,e),r={};Object.keys(i).forEach((function(t){r[t]=i[t]})),r.body=e,r.statusCode=i.status,h(n,r,e)})).catch((function(){h(t._checkStatusForError(i.status))}));else{var a=s.default(d);setTimeout((function(){l(t,e,n,r,o,h,d+1)}),a)}})).catch((function(t){clearTimeout(v),h(t)}))}e.exports=l},{"./abort-controller":1,"./exponential_backoff_with_jitter":6,"./fetch":7,"./object_to_query_param_string":11,"./package_version":12}],17:[function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},r.apply(this,arguments)},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},i=s(t("lodash/isPlainObject")),o=s(t("./deprecate")),a=s(t("./query")),c=s(t("./record")),u=s(t("./callback_to_promise")),l=function(){function t(t,e,n){if(!e&&!n)throw new Error("Table name or table ID is required");this._base=t,this.id=e,this.name=n,this.find=u.default(this._findRecordById,this),this.select=this._selectRecords.bind(this),this.create=u.default(this._createRecords,this),this.update=u.default(this._updateRecords.bind(this,!1),this),this.replace=u.default(this._updateRecords.bind(this,!0),this),this.destroy=u.default(this._destroyRecord,this),this.list=o.default(this._listRecords.bind(this),"table.list","Airtable: `list()` is deprecated. Use `select()` instead."),this.forEach=o.default(this._forEachRecord.bind(this),"table.forEach","Airtable: `forEach()` is deprecated. Use `select()` instead.")}return t.prototype._findRecordById=function(t,e){new c.default(this,t).fetch(e)},t.prototype._selectRecords=function(t){if(void 0===t&&(t={}),arguments.length>1&&console.warn("Airtable: `select` takes only one parameter, but it was given "+arguments.length+" parameters. Use `eachPage` or `firstPage` to fetch records."),i.default(t)){var e=a.default.validateParams(t);if(e.errors.length){var n=e.errors.map((function(t){return"  * "+t}));throw new Error("Airtable: invalid parameters for `select`:\n"+n.join("\n"))}return e.ignoredKeys.length&&console.warn("Airtable: the following parameters to `select` will be ignored: "+e.ignoredKeys.join(", ")),new a.default(this,e.validParams)}throw new Error("Airtable: the parameter for `select` should be a plain object or undefined.")},t.prototype._urlEncodedNameOrId=function(){return this.id||encodeURIComponent(this.name)},t.prototype._createRecords=function(t,e,n){var s,i=this,o=Array.isArray(t);n||(n=e,e={}),s=r(o?{records:t}:{fields:t},e),this._base.runAction("post","/"+this._urlEncodedNameOrId()+"/",{},s,(function(t,e,r){var s;t?n(t):(s=o?r.records.map((function(t){return new c.default(i,t.id,t)})):new c.default(i,r.id,r),n(null,s))}))},t.prototype._updateRecords=function(t,e,n,s,o){var a,u=this;if(Array.isArray(e)){var l=e;a=i.default(n)?n:{},o=s||n;var h=t?"put":"patch",d=r({records:l},a);this._base.runAction(h,"/"+this._urlEncodedNameOrId()+"/",{},d,(function(t,e,n){if(t)o(t);else{var r=n.records.map((function(t){return new c.default(u,t.id,t)}));o(null,r)}}))}else{var f=e,p=n;a=i.default(s)?s:{},o=o||s;var m=new c.default(this,f);t?m.putUpdate(p,a,o):m.patchUpdate(p,a,o)}},t.prototype._destroyRecord=function(t,e){var n=this;if(Array.isArray(t)){var r={records:t};this._base.runAction("delete","/"+this._urlEncodedNameOrId(),r,null,(function(t,r,s){if(t)e(t);else{var i=s.records.map((function(t){var e=t.id;return new c.default(n,e,null)}));e(null,i)}}))}else new c.default(this,t).destroy(e)},t.prototype._listRecords=function(t,e,n,s){var i=this;s||(s=n,n={});var o=r({limit:t,offset:e},n);this._base.runAction("get","/"+this._urlEncodedNameOrId()+"/",o,null,(function(t,e,n){if(t)s(t);else{var r=n.records.map((function(t){return new c.default(i,null,t)}));s(null,r,n.offset)}}))},t.prototype._forEachRecord=function(e,n,r){var s=this;2===arguments.length&&(r=n,n=e,e={});var i=t.__recordsPerPageForIteration||100,o=null,a=function(){s._listRecords(i,o,e,(function(t,e,s){if(t)r(t);else{for(var i=0;i<e.length;i++)n(e[i]);s?(o=s,a()):r()}}))};a()},t}();e.exports=l},{"./callback_to_promise":4,"./deprecate":5,"./query":13,"./record":15,"lodash/isPlainObject":89}],18:[function(t,e,n){function r(t,e){return function(n){return t(n)?{pass:!0}:{pass:!1,error:e}}}r.isOneOf=function(t){return t.includes.bind(t)},r.isArrayOf=function(t){return function(e){return Array.isArray(e)&&e.every(t)}},e.exports=r},{}],19:[function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?u(t):e}function h(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}function d(t,e,n){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=h(t,e);if(r){var s=Object.getOwnPropertyDescriptor(r,e);return s.get?s.get.call(n):s.value}},d(t,e,n||t)}Object.defineProperty(n,"__esModule",{value:!0});var f=function(){function t(){r(this,t),Object.defineProperty(this,"listeners",{value:{},writable:!0,configurable:!0})}return i(t,[{key:"addEventListener",value:function(t,e){t in this.listeners||(this.listeners[t]=[]),this.listeners[t].push(e)}},{key:"removeEventListener",value:function(t,e){if(t in this.listeners)for(var n=this.listeners[t],r=0,s=n.length;r<s;r++)if(n[r]===e)return void n.splice(r,1)}},{key:"dispatchEvent",value:function(t){var e=this;if(t.type in this.listeners){for(var n=function(n){setTimeout((function(){return n.call(e,t)}))},r=this.listeners[t.type],s=0,i=r.length;s<i;s++)n(r[s]);return!t.defaultPrevented}}}]),t}(),p=function(t){function e(){var t;return r(this,e),(t=l(this,a(e).call(this))).listeners||f.call(u(t)),Object.defineProperty(u(t),"aborted",{value:!1,writable:!0,configurable:!0}),Object.defineProperty(u(t),"onabort",{value:null,writable:!0,configurable:!0}),t}return o(e,t),i(e,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(t){"abort"===t.type&&(this.aborted=!0,"function"==typeof this.onabort&&this.onabort.call(this,t)),d(a(e.prototype),"dispatchEvent",this).call(this,t)}}]),e}(f),m=function(){function t(){r(this,t),Object.defineProperty(this,"signal",{value:new p,writable:!0,configurable:!0})}return i(t,[{key:"abort",value:function(){var t;try{t=new Event("abort")}catch(e){"undefined"!=typeof document?document.createEvent?(t=document.createEvent("Event")).initEvent("abort",!1,!1):(t=document.createEventObject()).type="abort":t={type:"abort",bubbles:!1,cancelable:!1}}this.signal.dispatchEvent(t)}},{key:"toString",value:function(){return"[object AbortController]"}}]),t}();function g(t){return t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL?(console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),!0):"function"==typeof t.Request&&!t.Request.prototype.hasOwnProperty("signal")||!t.AbortController}function y(t){"function"==typeof t&&(t={fetch:t});var e=t,n=e.fetch,r=e.Request,s=void 0===r?n.Request:r,i=e.AbortController,o=e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,a=void 0!==o&&o;if(!g({fetch:n,Request:s,AbortController:i,__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL:a}))return{fetch:n,Request:c};var c=s;(c&&!c.prototype.hasOwnProperty("signal")||a)&&(c=function(t,e){var n;e&&e.signal&&(n=e.signal,delete e.signal);var r=new s(t,e);return n&&Object.defineProperty(r,"signal",{writable:!1,enumerable:!1,configurable:!0,value:n}),r},c.prototype=s.prototype);var u=n,l=function(t,e){var n=c&&c.prototype.isPrototypeOf(t)?t.signal:e?e.signal:void 0;if(n){var r;try{r=new DOMException("Aborted","AbortError")}catch(t){(r=new Error("Aborted")).name="AbortError"}if(n.aborted)return Promise.reject(r);var s=new Promise((function(t,e){n.addEventListener("abort",(function(){return e(r)}),{once:!0})}));return e&&e.signal&&delete e.signal,Promise.race([s,u(t,e)])}return u(t,e)};return{fetch:l,Request:c}}"undefined"!=typeof Symbol&&Symbol.toStringTag&&(m.prototype[Symbol.toStringTag]="AbortController",p.prototype[Symbol.toStringTag]="AbortSignal"),n.AbortController=m,n.AbortSignal=p,n.abortableFetch=y},{}],20:[function(t,e,n){},{}],21:[function(t,e,n){var r=t("./_hashClear"),s=t("./_hashDelete"),i=t("./_hashGet"),o=t("./_hashHas"),a=t("./_hashSet");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=i,c.prototype.has=o,c.prototype.set=a,e.exports=c},{"./_hashClear":46,"./_hashDelete":47,"./_hashGet":48,"./_hashHas":49,"./_hashSet":50}],22:[function(t,e,n){var r=t("./_listCacheClear"),s=t("./_listCacheDelete"),i=t("./_listCacheGet"),o=t("./_listCacheHas"),a=t("./_listCacheSet");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=i,c.prototype.has=o,c.prototype.set=a,e.exports=c},{"./_listCacheClear":56,"./_listCacheDelete":57,"./_listCacheGet":58,"./_listCacheHas":59,"./_listCacheSet":60}],23:[function(t,e,n){var r=t("./_getNative")(t("./_root"),"Map");e.exports=r},{"./_getNative":42,"./_root":72}],24:[function(t,e,n){var r=t("./_mapCacheClear"),s=t("./_mapCacheDelete"),i=t("./_mapCacheGet"),o=t("./_mapCacheHas"),a=t("./_mapCacheSet");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=i,c.prototype.has=o,c.prototype.set=a,e.exports=c},{"./_mapCacheClear":61,"./_mapCacheDelete":62,"./_mapCacheGet":63,"./_mapCacheHas":64,"./_mapCacheSet":65}],25:[function(t,e,n){var r=t("./_root").Symbol;e.exports=r},{"./_root":72}],26:[function(t,e,n){var r=t("./_baseTimes"),s=t("./isArguments"),i=t("./isArray"),o=t("./isBuffer"),a=t("./_isIndex"),c=t("./isTypedArray"),u=Object.prototype.hasOwnProperty;function l(t,e){var n=i(t),l=!n&&s(t),h=!n&&!l&&o(t),d=!n&&!l&&!h&&c(t),f=n||l||h||d,p=f?r(t.length,String):[],m=p.length;for(var g in t)!e&&!u.call(t,g)||f&&("length"==g||h&&("offset"==g||"parent"==g)||d&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||a(g,m))||p.push(g);return p}e.exports=l},{"./_baseTimes":35,"./_isIndex":51,"./isArguments":78,"./isArray":79,"./isBuffer":82,"./isTypedArray":92}],27:[function(t,e,n){function r(t,e){for(var n=-1,r=null==t?0:t.length,s=Array(r);++n<r;)s[n]=e(t[n],n,t);return s}e.exports=r},{}],28:[function(t,e,n){var r=t("./eq");function s(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}e.exports=s},{"./eq":76}],29:[function(t,e,n){var r=t("./_castPath"),s=t("./_toKey");function i(t,e){for(var n=0,i=(e=r(e,t)).length;null!=t&&n<i;)t=t[s(e[n++])];return n&&n==i?t:void 0}e.exports=i},{"./_castPath":38,"./_toKey":74}],30:[function(t,e,n){var r=t("./_Symbol"),s=t("./_getRawTag"),i=t("./_objectToString"),o="[object Null]",a="[object Undefined]",c=r?r.toStringTag:void 0;function u(t){return null==t?void 0===t?a:o:c&&c in Object(t)?s(t):i(t)}e.exports=u},{"./_Symbol":25,"./_getRawTag":44,"./_objectToString":70}],31:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isObjectLike"),i="[object Arguments]";function o(t){return s(t)&&r(t)==i}e.exports=o},{"./_baseGetTag":30,"./isObjectLike":88}],32:[function(t,e,n){var r=t("./isFunction"),s=t("./_isMasked"),i=t("./isObject"),o=t("./_toSource"),a=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,u=Function.prototype,l=Object.prototype,h=u.toString,d=l.hasOwnProperty,f=RegExp("^"+h.call(d).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function p(t){return!(!i(t)||s(t))&&(r(t)?f:c).test(o(t))}e.exports=p},{"./_isMasked":54,"./_toSource":75,"./isFunction":83,"./isObject":87}],33:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isLength"),i=t("./isObjectLike"),o="[object Arguments]",a="[object Array]",c="[object Boolean]",u="[object Date]",l="[object Error]",h="[object Function]",d="[object Map]",f="[object Number]",p="[object Object]",m="[object RegExp]",g="[object Set]",y="[object String]",v="[object WeakMap]",w="[object ArrayBuffer]",_="[object DataView]",b="[object Float64Array]",E="[object Int8Array]",T="[object Int16Array]",I="[object Int32Array]",k="[object Uint8Array]",S="[object Uint8ClampedArray]",A="[object Uint16Array]",C="[object Uint32Array]",N={};function O(t){return i(t)&&s(t.length)&&!!N[r(t)]}N["[object Float32Array]"]=N[b]=N[E]=N[T]=N[I]=N[k]=N[S]=N[A]=N[C]=!0,N[o]=N[a]=N[w]=N[c]=N[_]=N[u]=N[l]=N[h]=N[d]=N[f]=N[p]=N[m]=N[g]=N[y]=N[v]=!1,e.exports=O},{"./_baseGetTag":30,"./isLength":84,"./isObjectLike":88}],34:[function(t,e,n){var r=t("./_isPrototype"),s=t("./_nativeKeys"),i=Object.prototype.hasOwnProperty;function o(t){if(!r(t))return s(t);var e=[];for(var n in Object(t))i.call(t,n)&&"constructor"!=n&&e.push(n);return e}e.exports=o},{"./_isPrototype":55,"./_nativeKeys":68}],35:[function(t,e,n){function r(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}e.exports=r},{}],36:[function(t,e,n){var r=t("./_Symbol"),s=t("./_arrayMap"),i=t("./isArray"),o=t("./isSymbol"),a=1/0,c=r?r.prototype:void 0,u=c?c.toString:void 0;function l(t){if("string"==typeof t)return t;if(i(t))return s(t,l)+"";if(o(t))return u?u.call(t):"";var e=t+"";return"0"==e&&1/t==-a?"-0":e}e.exports=l},{"./_Symbol":25,"./_arrayMap":27,"./isArray":79,"./isSymbol":91}],37:[function(t,e,n){function r(t){return function(e){return t(e)}}e.exports=r},{}],38:[function(t,e,n){var r=t("./isArray"),s=t("./_isKey"),i=t("./_stringToPath"),o=t("./toString");function a(t,e){return r(t)?t:s(t,e)?[t]:i(o(t))}e.exports=a},{"./_isKey":52,"./_stringToPath":73,"./isArray":79,"./toString":96}],39:[function(t,e,n){var r=t("./_root")["__core-js_shared__"];e.exports=r},{"./_root":72}],40:[function(t,e,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,void 0!==$t?$t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],41:[function(t,e,n){var r=t("./_isKeyable");function s(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}e.exports=s},{"./_isKeyable":53}],42:[function(t,e,n){var r=t("./_baseIsNative"),s=t("./_getValue");function i(t,e){var n=s(t,e);return r(n)?n:void 0}e.exports=i},{"./_baseIsNative":32,"./_getValue":45}],43:[function(t,e,n){var r=t("./_overArg")(Object.getPrototypeOf,Object);e.exports=r},{"./_overArg":71}],44:[function(t,e,n){var r=t("./_Symbol"),s=Object.prototype,i=s.hasOwnProperty,o=s.toString,a=r?r.toStringTag:void 0;function c(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var s=o.call(t);return r&&(e?t[a]=n:delete t[a]),s}e.exports=c},{"./_Symbol":25}],45:[function(t,e,n){function r(t,e){return null==t?void 0:t[e]}e.exports=r},{}],46:[function(t,e,n){var r=t("./_nativeCreate");function s(){this.__data__=r?r(null):{},this.size=0}e.exports=s},{"./_nativeCreate":67}],47:[function(t,e,n){function r(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}e.exports=r},{}],48:[function(t,e,n){var r=t("./_nativeCreate"),s="__lodash_hash_undefined__",i=Object.prototype.hasOwnProperty;function o(t){var e=this.__data__;if(r){var n=e[t];return n===s?void 0:n}return i.call(e,t)?e[t]:void 0}e.exports=o},{"./_nativeCreate":67}],49:[function(t,e,n){var r=t("./_nativeCreate"),s=Object.prototype.hasOwnProperty;function i(t){var e=this.__data__;return r?void 0!==e[t]:s.call(e,t)}e.exports=i},{"./_nativeCreate":67}],50:[function(t,e,n){var r=t("./_nativeCreate"),s="__lodash_hash_undefined__";function i(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?s:e,this}e.exports=i},{"./_nativeCreate":67}],51:[function(t,e,n){var r=9007199254740991,s=/^(?:0|[1-9]\d*)$/;function i(t,e){var n=typeof t;return!!(e=null==e?r:e)&&("number"==n||"symbol"!=n&&s.test(t))&&t>-1&&t%1==0&&t<e}e.exports=i},{}],52:[function(t,e,n){var r=t("./isArray"),s=t("./isSymbol"),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;function a(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!s(t))||o.test(t)||!i.test(t)||null!=e&&t in Object(e)}e.exports=a},{"./isArray":79,"./isSymbol":91}],53:[function(t,e,n){function r(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}e.exports=r},{}],54:[function(t,e,n){var r,s=t("./_coreJsData"),i=(r=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";function o(t){return!!i&&i in t}e.exports=o},{"./_coreJsData":39}],55:[function(t,e,n){var r=Object.prototype;function s(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}e.exports=s},{}],56:[function(t,e,n){function r(){this.__data__=[],this.size=0}e.exports=r},{}],57:[function(t,e,n){var r=t("./_assocIndexOf"),s=Array.prototype.splice;function i(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():s.call(e,n,1),--this.size,0))}e.exports=i},{"./_assocIndexOf":28}],58:[function(t,e,n){var r=t("./_assocIndexOf");function s(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}e.exports=s},{"./_assocIndexOf":28}],59:[function(t,e,n){var r=t("./_assocIndexOf");function s(t){return r(this.__data__,t)>-1}e.exports=s},{"./_assocIndexOf":28}],60:[function(t,e,n){var r=t("./_assocIndexOf");function s(t,e){var n=this.__data__,s=r(n,t);return s<0?(++this.size,n.push([t,e])):n[s][1]=e,this}e.exports=s},{"./_assocIndexOf":28}],61:[function(t,e,n){var r=t("./_Hash"),s=t("./_ListCache"),i=t("./_Map");function o(){this.size=0,this.__data__={hash:new r,map:new(i||s),string:new r}}e.exports=o},{"./_Hash":21,"./_ListCache":22,"./_Map":23}],62:[function(t,e,n){var r=t("./_getMapData");function s(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}e.exports=s},{"./_getMapData":41}],63:[function(t,e,n){var r=t("./_getMapData");function s(t){return r(this,t).get(t)}e.exports=s},{"./_getMapData":41}],64:[function(t,e,n){var r=t("./_getMapData");function s(t){return r(this,t).has(t)}e.exports=s},{"./_getMapData":41}],65:[function(t,e,n){var r=t("./_getMapData");function s(t,e){var n=r(this,t),s=n.size;return n.set(t,e),this.size+=n.size==s?0:1,this}e.exports=s},{"./_getMapData":41}],66:[function(t,e,n){var r=t("./memoize"),s=500;function i(t){var e=r(t,(function(t){return n.size===s&&n.clear(),t})),n=e.cache;return e}e.exports=i},{"./memoize":94}],67:[function(t,e,n){var r=t("./_getNative")(Object,"create");e.exports=r},{"./_getNative":42}],68:[function(t,e,n){var r=t("./_overArg")(Object.keys,Object);e.exports=r},{"./_overArg":71}],69:[function(t,e,n){var r=t("./_freeGlobal"),s="object"==typeof n&&n&&!n.nodeType&&n,i=s&&"object"==typeof e&&e&&!e.nodeType&&e,o=i&&i.exports===s&&r.process,a=function(){try{var t=i&&i.require&&i.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();e.exports=a},{"./_freeGlobal":40}],70:[function(t,e,n){var r=Object.prototype.toString;function s(t){return r.call(t)}e.exports=s},{}],71:[function(t,e,n){function r(t,e){return function(n){return t(e(n))}}e.exports=r},{}],72:[function(t,e,n){var r=t("./_freeGlobal"),s="object"==typeof self&&self&&self.Object===Object&&self,i=r||s||Function("return this")();e.exports=i},{"./_freeGlobal":40}],73:[function(t,e,n){var r=t("./_memoizeCapped"),s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,o=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(s,(function(t,n,r,s){e.push(r?s.replace(i,"$1"):n||t)})),e}));e.exports=o},{"./_memoizeCapped":66}],74:[function(t,e,n){var r=t("./isSymbol"),s=1/0;function i(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-s?"-0":e}e.exports=i},{"./isSymbol":91}],75:[function(t,e,n){var r=Function.prototype.toString;function s(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}e.exports=s},{}],76:[function(t,e,n){function r(t,e){return t===e||t!=t&&e!=e}e.exports=r},{}],77:[function(t,e,n){var r=t("./_baseGet");function s(t,e,n){var s=null==t?void 0:r(t,e);return void 0===s?n:s}e.exports=s},{"./_baseGet":29}],78:[function(t,e,n){var r=t("./_baseIsArguments"),s=t("./isObjectLike"),i=Object.prototype,o=i.hasOwnProperty,a=i.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return s(t)&&o.call(t,"callee")&&!a.call(t,"callee")};e.exports=c},{"./_baseIsArguments":31,"./isObjectLike":88}],79:[function(t,e,n){var r=Array.isArray;e.exports=r},{}],80:[function(t,e,n){var r=t("./isFunction"),s=t("./isLength");function i(t){return null!=t&&s(t.length)&&!r(t)}e.exports=i},{"./isFunction":83,"./isLength":84}],81:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isObjectLike"),i="[object Boolean]";function o(t){return!0===t||!1===t||s(t)&&r(t)==i}e.exports=o},{"./_baseGetTag":30,"./isObjectLike":88}],82:[function(t,e,n){var r=t("./_root"),s=t("./stubFalse"),i="object"==typeof n&&n&&!n.nodeType&&n,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,c=(a?a.isBuffer:void 0)||s;e.exports=c},{"./_root":72,"./stubFalse":95}],83:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isObject"),i="[object AsyncFunction]",o="[object Function]",a="[object GeneratorFunction]",c="[object Proxy]";function u(t){if(!s(t))return!1;var e=r(t);return e==o||e==a||e==i||e==c}e.exports=u},{"./_baseGetTag":30,"./isObject":87}],84:[function(t,e,n){var r=9007199254740991;function s(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}e.exports=s},{}],85:[function(t,e,n){function r(t){return null==t}e.exports=r},{}],86:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isObjectLike"),i="[object Number]";function o(t){return"number"==typeof t||s(t)&&r(t)==i}e.exports=o},{"./_baseGetTag":30,"./isObjectLike":88}],87:[function(t,e,n){function r(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}e.exports=r},{}],88:[function(t,e,n){function r(t){return null!=t&&"object"==typeof t}e.exports=r},{}],89:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./_getPrototype"),i=t("./isObjectLike"),o="[object Object]",a=Function.prototype,c=Object.prototype,u=a.toString,l=c.hasOwnProperty,h=u.call(Object);function d(t){if(!i(t)||r(t)!=o)return!1;var e=s(t);if(null===e)return!0;var n=l.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&u.call(n)==h}e.exports=d},{"./_baseGetTag":30,"./_getPrototype":43,"./isObjectLike":88}],90:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isArray"),i=t("./isObjectLike"),o="[object String]";function a(t){return"string"==typeof t||!s(t)&&i(t)&&r(t)==o}e.exports=a},{"./_baseGetTag":30,"./isArray":79,"./isObjectLike":88}],91:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isObjectLike"),i="[object Symbol]";function o(t){return"symbol"==typeof t||s(t)&&r(t)==i}e.exports=o},{"./_baseGetTag":30,"./isObjectLike":88}],92:[function(t,e,n){var r=t("./_baseIsTypedArray"),s=t("./_baseUnary"),i=t("./_nodeUtil"),o=i&&i.isTypedArray,a=o?s(o):r;e.exports=a},{"./_baseIsTypedArray":33,"./_baseUnary":37,"./_nodeUtil":69}],93:[function(t,e,n){var r=t("./_arrayLikeKeys"),s=t("./_baseKeys"),i=t("./isArrayLike");function o(t){return i(t)?r(t):s(t)}e.exports=o},{"./_arrayLikeKeys":26,"./_baseKeys":34,"./isArrayLike":80}],94:[function(t,e,n){var r=t("./_MapCache"),s="Expected a function";function i(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(s);var n=function(){var r=arguments,s=e?e.apply(this,r):r[0],i=n.cache;if(i.has(s))return i.get(s);var o=t.apply(this,r);return n.cache=i.set(s,o)||i,o};return n.cache=new(i.Cache||r),n}i.Cache=r,e.exports=i},{"./_MapCache":24}],95:[function(t,e,n){function r(){return!1}e.exports=r},{}],96:[function(t,e,n){var r=t("./_baseToString");function s(t){return null==t?"":r(t)}e.exports=s},{"./_baseToString":36}],airtable:[function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},s=r(t("./base")),i=r(t("./record")),o=r(t("./table")),a=r(t("./airtable_error")),c=function(){function t(e){void 0===e&&(e={});var n=t.default_config(),r=e.apiVersion||t.apiVersion||n.apiVersion;if(Object.defineProperties(this,{_apiKey:{value:e.apiKey||t.apiKey||n.apiKey},_apiVersion:{value:r},_apiVersionMajor:{value:r.split(".")[0]},_customHeaders:{value:e.customHeaders||{}},_endpointUrl:{value:e.endpointUrl||t.endpointUrl||n.endpointUrl},_noRetryIfRateLimited:{value:e.noRetryIfRateLimited||t.noRetryIfRateLimited||n.noRetryIfRateLimited},_requestTimeout:{value:e.requestTimeout||t.requestTimeout||n.requestTimeout}}),!this._apiKey)throw new Error("An API key is required to connect to Airtable")}return t.prototype.base=function(t){return s.default.createFunctor(this,t)},t.default_config=function(){return{endpointUrl:"https://api.airtable.com",apiVersion:"0.1.0",apiKey:void 0,noRetryIfRateLimited:!1,requestTimeout:3e5}},t.configure=function(e){var n=e.apiKey,r=e.endpointUrl,s=e.apiVersion,i=e.noRetryIfRateLimited,o=e.requestTimeout;t.apiKey=n,t.endpointUrl=r,t.apiVersion=s,t.noRetryIfRateLimited=i,t.requestTimeout=o},t.base=function(e){return(new t).base(e)},t.Base=s.default,t.Record=i.default,t.Table=o.default,t.Error=a.default,t}();e.exports=c},{"./airtable_error":2,"./base":3,"./record":15,"./table":17}]},{},["airtable"])("airtable")}));class zt{constructor(t,e){this.id=t,this.name=e}}class Kt{constructor(t){this.value=t}}class Gt{constructor(t,e,n){this.createTeamPort=t,this.getLoginParametersPort=e,this.getTeamDetailsPort=n}async getTeamDetailsBy(t){const e=this.getLoginParametersPort.getLoginParameters();return await this.getTeamDetailsPort.getTeamDetailsWith(t,e)}async createTeamWith(t,e){const n=this.getLoginParametersPort.getLoginParameters();return await this.createTeamPort.createTeamWith(t,e,n)}}class Ht{constructor(t,e,n){this.id=t,this.name=e,this.choozrId=n}}class Wt{constructor(t){this.value=t}}class Qt{constructor(t){this.value=t}}class Xt{constructor(t,e){this.teamId=t,this.membersCount=e}}class Yt{constructor(t,e,n){this.teamId=t,this.name=e,this.membersNames=n}}class Jt{constructor(t){this.value=t}}var Zt=Bt((function(t,e){t.exports=function(){var t=function(){},e=Object.prototype.hasOwnProperty,n=Array.prototype.slice;function r(e,n){var r;return"function"==typeof Object.create?r=Object.create(e):(t.prototype=e,r=new t,t.prototype=null),n&&i(!0,r,n),r}function s(t,e,n,s){var o=this;return"string"!=typeof t&&(s=n,n=e,e=t,t=null),"function"!=typeof e&&(s=n,n=e,e=function(){return o.apply(this,arguments)}),i(!1,e,o,s),e.prototype=r(o.prototype,n),e.prototype.constructor=e,e.class_=t||o.class_,e.super_=o,e}function i(t,r,s){for(var i,o,a=0,c=(s=n.call(arguments,2)).length;a<c;a++)for(i in o=s[a])t&&!e.call(o,i)||(r[i]=o[i])}var o=s;function a(){}a.class_="Nevis",a.super_=Object,a.extend=o;var c=a,u=c.extend((function(t,e,n){this.qrious=t,this.element=e,this.element.qrious=t,this.enabled=Boolean(n)}),{draw:function(t){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(t){var e=this.qrious,n=e.padding||0,r=Math.floor((e.size-2*n)/t.width);return Math.max(1,r)},render:function(t){this.enabled&&(this.resize(),this.reset(),this.draw(t))},reset:function(){},resize:function(){}}),l=u,h=l.extend({draw:function(t){var e,n,r=this.qrious,s=this.getModuleSize(t),i=parseInt((this.element.width-t.width*s)/2),o=this.element.getContext("2d");for(o.fillStyle=r.foreground,o.globalAlpha=r.foregroundAlpha,e=0;e<t.width;e++)for(n=0;n<t.width;n++)t.buffer[n*t.width+e]&&o.fillRect(s*e+i,s*n+i,s,s)},reset:function(){var t=this.qrious,e=this.element.getContext("2d"),n=t.size;e.lineWidth=1,e.clearRect(0,0,n,n),e.fillStyle=t.background,e.globalAlpha=t.backgroundAlpha,e.fillRect(0,0,n,n)},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),d=h,f=c.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),p=c.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),m=c.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),g=c.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),y=c.extend((function(t){var e,n,r,s,i,o=t.value.length;for(this._badness=[],this._level=p.LEVELS[t.level],this._polynomial=[],this._value=t.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,r=4*(this._level-1)+16*(this._version-1),s=p.BLOCKS[r++],i=p.BLOCKS[r++],e=p.BLOCKS[r++],n=p.BLOCKS[r],!(o<=(r=e*(s+i)+i-3+(this._version<=9)))););this._dataBlock=e,this._eccBlock=n,this._neccBlock1=s,this._neccBlock2=i;var a=this.width=17+4*this._version;this.buffer=y._createArray(a*a),this._ecc=y._createArray(e+(e+n)*(s+i)+i),this._mask=y._createArray((a*(a+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+a*(a-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(o),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()}),{_addAlignment:function(t,e){var n,r=this.buffer,s=this.width;for(r[t+s*e]=1,n=-2;n<2;n++)r[t+n+s*(e-2)]=1,r[t-2+s*(e+n+1)]=1,r[t+2+s*(e+n)]=1,r[t+n+1+s*(e+2)]=1;for(n=0;n<2;n++)this._setMask(t-1,e+n),this._setMask(t+1,e-n),this._setMask(t-n,e-1),this._setMask(t+n,e+1)},_appendData:function(t,e,n,r){var s,i,o,a=this._polynomial,c=this._stringBuffer;for(i=0;i<r;i++)c[n+i]=0;for(i=0;i<e;i++){if(255!==(s=m.LOG[c[t+i]^c[n]]))for(o=1;o<r;o++)c[n+o-1]=c[n+o]^m.EXPONENT[y._modN(s+a[r-o])];else for(o=n;o<n+r;o++)c[o]=c[o+1];c[n+r-1]=255===s?0:m.EXPONENT[y._modN(s+a[0])]}},_appendEccToData:function(){var t,e=0,n=this._dataBlock,r=this._calculateMaxLength(),s=this._eccBlock;for(t=0;t<this._neccBlock1;t++)this._appendData(e,n,r,s),e+=n,r+=s;for(t=0;t<this._neccBlock2;t++)this._appendData(e,n+1,r,s),e+=n+1,r+=s},_applyMask:function(t){var e,n,r,s,i=this.buffer,o=this.width;switch(t){case 0:for(s=0;s<o;s++)for(r=0;r<o;r++)r+s&1||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 1:for(s=0;s<o;s++)for(r=0;r<o;r++)1&s||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 2:for(s=0;s<o;s++)for(e=0,r=0;r<o;r++,e++)3===e&&(e=0),e||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 3:for(n=0,s=0;s<o;s++,n++)for(3===n&&(n=0),e=n,r=0;r<o;r++,e++)3===e&&(e=0),e||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 4:for(s=0;s<o;s++)for(e=0,n=s>>1&1,r=0;r<o;r++,e++)3===e&&(e=0,n=!n),n||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 5:for(n=0,s=0;s<o;s++,n++)for(3===n&&(n=0),e=0,r=0;r<o;r++,e++)3===e&&(e=0),(r&s&1)+!(!e|!n)||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 6:for(n=0,s=0;s<o;s++,n++)for(3===n&&(n=0),e=0,r=0;r<o;r++,e++)3===e&&(e=0),(r&s&1)+(e&&e===n)&1||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 7:for(n=0,s=0;s<o;s++,n++)for(3===n&&(n=0),e=0,r=0;r<o;r++,e++)3===e&&(e=0),(e&&e===n)+(r+s&1)&1||this._isMasked(r,s)||(i[r+s*o]^=1)}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var t,e,n=this._eccBlock,r=this._polynomial;for(r[0]=1,t=0;t<n;t++){for(r[t+1]=1,e=t;e>0;e--)r[e]=r[e]?r[e-1]^m.EXPONENT[y._modN(m.LOG[r[e]]+t)]:r[e-1];r[0]=m.EXPONENT[y._modN(m.LOG[r[0]]+t)]}for(t=0;t<=n;t++)r[t]=m.LOG[r[t]]},_checkBadness:function(){var t,e,n,r,s,i=0,o=this._badness,a=this.buffer,c=this.width;for(s=0;s<c-1;s++)for(r=0;r<c-1;r++)(a[r+c*s]&&a[r+1+c*s]&&a[r+c*(s+1)]&&a[r+1+c*(s+1)]||!(a[r+c*s]||a[r+1+c*s]||a[r+c*(s+1)]||a[r+1+c*(s+1)]))&&(i+=y.N2);var u=0;for(s=0;s<c;s++){for(n=0,o[0]=0,t=0,r=0;r<c;r++)t===(e=a[r+c*s])?o[n]++:o[++n]=1,u+=(t=e)?1:-1;i+=this._getBadness(n)}u<0&&(u=-u);var l=0,h=u;for(h+=h<<2,h<<=1;h>c*c;)h-=c*c,l++;for(i+=l*y.N4,r=0;r<c;r++){for(n=0,o[0]=0,t=0,s=0;s<c;s++)t===(e=a[r+c*s])?o[n]++:o[++n]=1,t=e;i+=this._getBadness(n)}return i},_convertBitStream:function(t){var e,n,r=this._ecc,s=this._version;for(n=0;n<t;n++)r[n]=this._value.charCodeAt(n);var i=this._stringBuffer=r.slice(),o=this._calculateMaxLength();t>=o-2&&(t=o-2,s>9&&t--);var a=t;if(s>9){for(i[a+2]=0,i[a+3]=0;a--;)e=i[a],i[a+3]|=255&e<<4,i[a+2]=e>>4;i[2]|=255&t<<4,i[1]=t>>4,i[0]=64|t>>12}else{for(i[a+1]=0,i[a+2]=0;a--;)e=i[a],i[a+2]|=255&e<<4,i[a+1]=e>>4;i[1]|=255&t<<4,i[0]=64|t>>4}for(a=t+3-(s<10);a<o;)i[a++]=236,i[a++]=17},_getBadness:function(t){var e,n=0,r=this._badness;for(e=0;e<=t;e++)r[e]>=5&&(n+=y.N1+r[e]-5);for(e=3;e<t-1;e+=2)r[e-2]===r[e+2]&&r[e+2]===r[e-1]&&r[e-1]===r[e+1]&&3*r[e-1]===r[e]&&(0===r[e-3]||e+3>t||3*r[e-3]>=4*r[e]||3*r[e+3]>=4*r[e])&&(n+=y.N3);return n},_finish:function(){var t,e;this._stringBuffer=this.buffer.slice();var n=0,r=3e4;for(e=0;e<8&&(this._applyMask(e),(t=this._checkBadness())<r&&(r=t,n=e),7!==n);e++)this.buffer=this._stringBuffer.slice();n!==e&&this._applyMask(n),r=p.FINAL_FORMAT[n+(this._level-1<<3)];var s=this.buffer,i=this.width;for(e=0;e<8;e++,r>>=1)1&r&&(s[i-1-e+8*i]=1,e<6?s[8+i*e]=1:s[8+i*(e+1)]=1);for(e=0;e<7;e++,r>>=1)1&r&&(s[8+i*(i-7+e)]=1,e?s[6-e+8*i]=1:s[7+8*i]=1)},_interleaveBlocks:function(){var t,e,n=this._dataBlock,r=this._ecc,s=this._eccBlock,i=0,o=this._calculateMaxLength(),a=this._neccBlock1,c=this._neccBlock2,u=this._stringBuffer;for(t=0;t<n;t++){for(e=0;e<a;e++)r[i++]=u[t+e*n];for(e=0;e<c;e++)r[i++]=u[a*n+t+e*(n+1)]}for(e=0;e<c;e++)r[i++]=u[a*n+t+e*(n+1)];for(t=0;t<s;t++)for(e=0;e<a+c;e++)r[i++]=u[o+t+e*s];this._stringBuffer=r},_insertAlignments:function(){var t,e,n,r=this._version,s=this.width;if(r>1)for(t=f.BLOCK[r],n=s-7;;){for(e=s-7;e>t-3&&(this._addAlignment(e,n),!(e<t));)e-=t;if(n<=t+9)break;n-=t,this._addAlignment(6,n),this._addAlignment(n,6)}},_insertFinders:function(){var t,e,n,r,s=this.buffer,i=this.width;for(t=0;t<3;t++){for(e=0,r=0,1===t&&(e=i-7),2===t&&(r=i-7),s[r+3+i*(e+3)]=1,n=0;n<6;n++)s[r+n+i*e]=1,s[r+i*(e+n+1)]=1,s[r+6+i*(e+n)]=1,s[r+n+1+i*(e+6)]=1;for(n=1;n<5;n++)this._setMask(r+n,e+1),this._setMask(r+1,e+n+1),this._setMask(r+5,e+n),this._setMask(r+n+1,e+5);for(n=2;n<4;n++)s[r+n+i*(e+2)]=1,s[r+2+i*(e+n+1)]=1,s[r+4+i*(e+n)]=1,s[r+n+1+i*(e+4)]=1}},_insertTimingGap:function(){var t,e,n=this.width;for(e=0;e<7;e++)this._setMask(7,e),this._setMask(n-8,e),this._setMask(7,e+n-7);for(t=0;t<8;t++)this._setMask(t,7),this._setMask(t+n-8,7),this._setMask(t,n-8)},_insertTimingRowAndColumn:function(){var t,e=this.buffer,n=this.width;for(t=0;t<n-14;t++)1&t?(this._setMask(8+t,6),this._setMask(6,8+t)):(e[8+t+6*n]=1,e[6+n*(8+t)]=1)},_insertVersion:function(){var t,e,n,r,s=this.buffer,i=this._version,o=this.width;if(i>6)for(t=g.BLOCK[i-7],e=17,n=0;n<6;n++)for(r=0;r<3;r++,e--)1&(e>11?i>>e-12:t>>e)?(s[5-n+o*(2-r+o-11)]=1,s[2-r+o-11+o*(5-n)]=1):(this._setMask(5-n,2-r+o-11),this._setMask(2-r+o-11,5-n))},_isMasked:function(t,e){var n=y._getMaskBit(t,e);return 1===this._mask[n]},_pack:function(){var t,e,n,r=1,s=1,i=this.width,o=i-1,a=i-1,c=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(e=0;e<c;e++)for(t=this._stringBuffer[e],n=0;n<8;n++,t<<=1){128&t&&(this.buffer[o+i*a]=1);do{s?o--:(o++,r?0!==a?a--:(r=!r,6==(o-=2)&&(o--,a=9)):a!==i-1?a++:(r=!r,6==(o-=2)&&(o--,a-=8))),s=!s}while(this._isMasked(o,a))}},_reverseMask:function(){var t,e,n=this.width;for(t=0;t<9;t++)this._setMask(t,8);for(t=0;t<8;t++)this._setMask(t+n-8,8),this._setMask(8,t);for(e=0;e<7;e++)this._setMask(8,e+n-7)},_setMask:function(t,e){var n=y._getMaskBit(t,e);this._mask[n]=1},_syncMask:function(){var t,e,n=this.width;for(e=0;e<n;e++)for(t=0;t<=e;t++)this.buffer[t+n*e]&&this._setMask(t,e)}},{_createArray:function(t){var e,n=[];for(e=0;e<t;e++)n[e]=0;return n},_getMaskBit:function(t,e){var n;return t>e&&(n=t,t=e,e=n),n=e,n+=e*e,n>>=1,n+=t},_modN:function(t){for(;t>=255;)t=((t-=255)>>8)+(255&t);return t},N1:3,N2:3,N3:40,N4:10}),v=y,w=l.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),_=w,b=c.extend((function(t,e,n,r){this.name=t,this.modifiable=Boolean(e),this.defaultValue=n,this._valueTransformer=r}),{transform:function(t){var e=this._valueTransformer;return"function"==typeof e?e(t,this):t}}),E=b,T=c.extend(null,{abs:function(t){return null!=t?Math.abs(t):null},hasOwn:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},noop:function(){},toUpperCase:function(t){return null!=t?t.toUpperCase():null}}),I=T,k=c.extend((function(t){this.options={},t.forEach((function(t){this.options[t.name]=t}),this)}),{exists:function(t){return null!=this.options[t]},get:function(t,e){return k._get(this.options[t],e)},getAll:function(t){var e,n=this.options,r={};for(e in n)I.hasOwn(n,e)&&(r[e]=k._get(n[e],t));return r},init:function(t,e,n){var r,s;for(r in"function"!=typeof n&&(n=I.noop),this.options)I.hasOwn(this.options,r)&&(s=this.options[r],k._set(s,s.defaultValue,e),k._createAccessor(s,e,n));this._setAll(t,e,!0)},set:function(t,e,n){return this._set(t,e,n)},setAll:function(t,e){return this._setAll(t,e)},_set:function(t,e,n,r){var s=this.options[t];if(!s)throw new Error("Invalid option: "+t);if(!s.modifiable&&!r)throw new Error("Option cannot be modified: "+t);return k._set(s,e,n)},_setAll:function(t,e,n){if(!t)return!1;var r,s=!1;for(r in t)I.hasOwn(t,r)&&this._set(r,t[r],e,n)&&(s=!0);return s}},{_createAccessor:function(t,e,n){var r={get:function(){return k._get(t,e)}};t.modifiable&&(r.set=function(r){k._set(t,r,e)&&n(r,t)}),Object.defineProperty(e,t.name,r)},_get:function(t,e){return e["_"+t.name]},_set:function(t,e,n){var r="_"+t.name,s=n[r],i=t.transform(null!=e?e:t.defaultValue);return n[r]=i,i!==s}}),S=k,A=c.extend((function(){this._services={}}),{getService:function(t){var e=this._services[t];if(!e)throw new Error("Service is not being managed with name: "+t);return e},setService:function(t,e){if(this._services[t])throw new Error("Service is already managed with name: "+t);e&&(this._services[t]=e)}}),C=A,N=new S([new E("background",!0,"white"),new E("backgroundAlpha",!0,1,I.abs),new E("element"),new E("foreground",!0,"black"),new E("foregroundAlpha",!0,1,I.abs),new E("level",!0,"L",I.toUpperCase),new E("mime",!0,"image/png"),new E("padding",!0,null,I.abs),new E("size",!0,100,I.abs),new E("value",!0,"")]),O=new C,R=c.extend((function(t){N.init(t,this,this.update.bind(this));var e=N.get("element",this),n=O.getService("element"),r=e&&n.isCanvas(e)?e:n.createCanvas(),s=e&&n.isImage(e)?e:n.createImage();this._canvasRenderer=new d(this,r,!0),this._imageRenderer=new _(this,s,s===e),this.update()}),{get:function(){return N.getAll(this)},set:function(t){N.setAll(t,this)&&this.update()},toDataURL:function(t){return this.canvas.toDataURL(t||this.mime)},update:function(){var t=new v({level:this.level,value:this.value});this._canvasRenderer.render(t),this._imageRenderer.render(t)}},{use:function(t){O.setService(t.getName(),t)}});Object.defineProperties(R.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var D=R,L=c.extend({getName:function(){}}).extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(t){},isImage:function(t){}}).extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(t){return t instanceof HTMLCanvasElement},isImage:function(t){return t instanceof HTMLImageElement}}),x=L;return D.use(new x),D}()}));function te(e){let n,r;return{c(){n=m("img"),u(n.src,r=e[2])||_(n,"src",r),_(n,"alt",e[0]),_(n,"class",e[1])},m(t,e){d(t,n,e)},p(t,[e]){4&e&&!u(n.src,r=t[2])&&_(n,"src",r),1&e&&_(n,"alt",t[0]),2&e&&_(n,"class",t[1])},i:t,o:t,d(t){t&&f(n)}}}function ee(t,e,n){const r=new Zt;let{errorCorrection:s="L"}=e,{background:i="#fff"}=e,{color:o="#000"}=e,{size:a="200"}=e,{value:c=""}=e,{padding:u=0}=e,{className:l="qrcode"}=e,h="";function d(){r.set({background:i,foreground:o,level:s,padding:u,size:a,value:c}),n(2,h=r.toDataURL("image/jpeg"))}return k((()=>{d()})),t.$$set=t=>{"errorCorrection"in t&&n(3,s=t.errorCorrection),"background"in t&&n(4,i=t.background),"color"in t&&n(5,o=t.color),"size"in t&&n(6,a=t.size),"value"in t&&n(0,c=t.value),"padding"in t&&n(7,u=t.padding),"className"in t&&n(1,l=t.className)},t.$$.update=()=>{1&t.$$.dirty&&c&&d()},[c,l,h,s,i,o,a,u]}class ne extends et{constructor(t){super(),tt(this,t,ee,te,o,{errorCorrection:3,background:4,color:5,size:6,value:0,padding:7,className:1})}}function re(t,e,n){const r=t.slice();return r[16]=e[n].id,r[17]=e[n].name,r}function se(e){let n,r,s,i,o,a,c=e[4],u=[];for(let t=0;t<c.length;t+=1)u[t]=oe(re(e,c,t));return{c(){n=m("table"),r=m("thead"),r.innerHTML="<tr><th>Teams</th></tr>",s=y(),i=m("tbody");for(let t=0;t<u.length;t+=1)u[t].c();o=y(),a=m("hr"),_(n,"class","table is-striped is-hoverable")},m(t,e){d(t,n,e),h(n,r),h(n,s),h(n,i);for(let t=0;t<u.length;t+=1)u[t].m(i,null);d(t,o,e),d(t,a,e)},p(t,e){if(80&e){let n;for(c=t[4],n=0;n<c.length;n+=1){const r=re(t,c,n);u[n]?u[n].p(r,e):(u[n]=oe(r),u[n].c(),u[n].m(i,null))}for(;n<u.length;n+=1)u[n].d(1);u.length=c.length}},i:t,o:t,d(t){t&&f(n),p(u,t),t&&f(o),t&&f(a)}}}function ie(e){let n,r,s,i,o;return r=new _t({}),{c(){n=m("div"),Y(r.$$.fragment),s=y(),i=m("hr"),_(n,"class","is-flex is-justify-content-center")},m(t,e){d(t,n,e),J(r,n,null),d(t,s,e),d(t,i,e),o=!0},p:t,i(t){o||(H(r.$$.fragment,t),o=!0)},o(t){W(r.$$.fragment,t),o=!1},d(t){t&&f(n),Z(r),t&&f(s),t&&f(i)}}}function oe(t){let e,n,r,s,i,o,a=t[17].value+"";function c(){return t[8](t[16])}return{c(){e=m("tr"),n=m("td"),r=g(a),s=y(),_(e,"class","is-clickable")},m(t,a){d(t,e,a),h(e,n),h(n,r),h(e,s),i||(o=w(e,"click",c),i=!0)},p(e,n){t=e,16&n&&a!==(a=t[17].value+"")&&b(r,a)},d(t){t&&f(e),i=!1,o()}}}function ae(e){let n,r,i,o,a,c,u,l,p;return{c(){n=m("h2"),n.textContent="Nouvelle Équipe",r=y(),i=m("input"),o=y(),a=m("button"),c=g("Créer"),_(i,"id","app-id"),_(i,"class","mt-1"),_(a,"class","mt-4"),a.disabled=u=!e[0]},m(t,s){d(t,n,s),d(t,r,s),d(t,i,s),E(i,e[0]),d(t,o,s),d(t,a,s),h(a,c),l||(p=[w(i,"input",e[9]),w(a,"click",e[5])],l=!0)},p(t,e){1&e&&i.value!==t[0]&&E(i,t[0]),1&e&&u!==(u=!t[0])&&(a.disabled=u)},i:t,o:t,d(t){t&&f(n),t&&f(r),t&&f(i),t&&f(o),t&&f(a),l=!1,s(p)}}}function ce(e){let n,r,s;return r=new _t({}),{c(){n=m("div"),Y(r.$$.fragment),_(n,"class","is-flex is-justify-content-center")},m(t,e){d(t,n,e),J(r,n,null),s=!0},p:t,i(t){s||(H(r.$$.fragment,t),s=!0)},o(t){W(r.$$.fragment,t),s=!1},d(t){t&&f(n),Z(r)}}}function ue(t){let e,n,r,s,i,o,a,c,u,l,p,g,v,w,b;o=new ne({props:{value:t[1]}});const E=[ie,se],T=[];function I(t,e){return t[2]?0:t[4].length>0?1:-1}~(l=I(t))&&(p=T[l]=E[l](t));const k=[ce,ae],S=[];function A(t,e){return t[3]?0:1}return v=A(t),w=S[v]=k[v](t),{c(){e=m("section"),n=m("div"),r=m("div"),s=m("h1"),s.textContent="Choozr",i=y(),Y(o.$$.fragment),a=y(),c=m("hr"),u=y(),p&&p.c(),g=y(),w.c(),_(s,"class","is-size-1 has-text-centered mb-5"),_(r,"class","is-flex is-flex-direction-column"),_(n,"class","hero-body is-flex is-justify-content-center"),_(e,"class","hero is-primary is-fullheight")},m(t,f){d(t,e,f),h(e,n),h(n,r),h(r,s),h(r,i),J(o,r,null),h(r,a),h(r,c),h(r,u),~l&&T[l].m(r,null),h(r,g),S[v].m(r,null),b=!0},p(t,[e]){const n={};2&e&&(n.value=t[1]),o.$set(n);let s=l;l=I(t),l===s?~l&&T[l].p(t,e):(p&&(K(),W(T[s],1,1,(()=>{T[s]=null})),G()),~l?(p=T[l],p?p.p(t,e):(p=T[l]=E[l](t),p.c()),H(p,1),p.m(r,g)):p=null);let i=v;v=A(t),v===i?S[v].p(t,e):(K(),W(S[i],1,1,(()=>{S[i]=null})),G(),w=S[v],w?w.p(t,e):(w=S[v]=k[v](t),w.c()),H(w,1),w.m(r,null))},i(t){b||(H(o.$$.fragment,t),H(p),H(w),b=!0)},o(t){W(o.$$.fragment,t),W(p),W(w),b=!1},d(t){t&&f(e),Z(o),~l&&T[l].d(),S[v].d()}}}function le(t,e,n){let{params:r}=e;const s=new Kt(r.choozrId),i=C("generateJoinChoozrURLUseCase"),o=C("getChoozrTeamsUseCase"),a=C("createTeamUseCase"),c=S();let u="",l="",h=!0,d=!1,f=[];function p(){o.getChoozrTeamsWith(s).then((t=>{n(4,f=t)})).catch((t=>console.log(t))).finally((()=>n(2,h=!1)))}function m(t){c("routeEvent",new It(t))}k((()=>{p(),i.generateJoinChoozrURLWith(s).then((t=>{n(1,l=t.value)})).catch((t=>console.log(t)))}));return t.$$set=t=>{"params"in t&&n(7,r=t.params)},[u,l,h,d,f,function(){n(3,d=!0),a.createTeamWith(s,new Qt(u)).then((()=>p())).catch((t=>console.log(t))).finally((()=>n(3,d=!1)))},m,r,t=>m(t),function(){u=this.value,n(0,u)}]}class he extends et{constructor(t){super(),tt(this,t,le,ue,o,{params:7})}}class de{constructor(t,e,n){this.joinTeamPort=t,this.getLoginParametersPort=e,this.getTeamsMembersCountPort=n}async createMemberWith(t,e){const n=this.getLoginParametersPort.getLoginParameters(),r=await this.getTeamsMembersCountPort.getTeamsMembersCountFrom(t,n);return r.sort(((t,e)=>t.membersCount-e.membersCount)),await this.joinTeamPort.createMemberWith(r[0].teamId,e,n)}}class fe{constructor(t,e,n){this.id=t,this.name=e,this.teamId=n}}class pe{constructor(t){this.value=t}}function me(e){let n,r,i,o,a,c,u,l,p;return{c(){n=m("h2"),n.textContent="Votre nom",r=y(),i=m("input"),o=y(),a=m("button"),c=g("Rejoindre"),_(i,"id","app-id"),_(i,"class","mt-1"),_(a,"class","mt-4"),a.disabled=u=!e[0]},m(t,s){d(t,n,s),d(t,r,s),d(t,i,s),E(i,e[0]),d(t,o,s),d(t,a,s),h(a,c),l||(p=[w(i,"input",e[4]),w(a,"click",e[2])],l=!0)},p(t,e){1&e&&i.value!==t[0]&&E(i,t[0]),1&e&&u!==(u=!t[0])&&(a.disabled=u)},i:t,o:t,d(t){t&&f(n),t&&f(r),t&&f(i),t&&f(o),t&&f(a),l=!1,s(p)}}}function ge(e){let n,r,s;return r=new _t({}),{c(){n=m("div"),Y(r.$$.fragment),_(n,"class","is-flex is-justify-content-center")},m(t,e){d(t,n,e),J(r,n,null),s=!0},p:t,i(t){s||(H(r.$$.fragment,t),s=!0)},o(t){W(r.$$.fragment,t),s=!1},d(t){t&&f(n),Z(r)}}}function ye(t){let e,n,r,s,i,o,a,c,u,l;const p=[ge,me],g=[];function v(t,e){return t[1]?0:1}return c=v(t),u=g[c]=p[c](t),{c(){e=m("section"),n=m("div"),r=m("div"),s=m("h1"),s.textContent="Rejoindre une équipe",i=y(),o=m("hr"),a=y(),u.c(),_(s,"class","is-size-1 has-text-centered mb-5"),_(r,"class","is-flex is-flex-direction-column"),_(n,"class","hero-body is-flex is-justify-content-center"),_(e,"class","hero is-primary is-fullheight")},m(t,u){d(t,e,u),h(e,n),h(n,r),h(r,s),h(r,i),h(r,o),h(r,a),g[c].m(r,null),l=!0},p(t,[e]){let n=c;c=v(t),c===n?g[c].p(t,e):(K(),W(g[n],1,1,(()=>{g[n]=null})),G(),u=g[c],u?u.p(t,e):(u=g[c]=p[c](t),u.c()),H(u,1),u.m(r,null))},i(t){l||(H(u),l=!0)},o(t){W(u),l=!1},d(t){t&&f(e),g[c].d()}}}function ve(t,e,n){let r;var s,i;s=ht,i=t=>n(5,r=t),t.$$.on_destroy.push(l(s,i));let{params:o}=e;const a=S(),c=new Kt(o.choozrId),u=C("loginUseCase"),h=C("joinChoozrUseCase");let d="",f=!1;return k((()=>{const t=new URLSearchParams(r);u.login(new vt(t.get("appId"),t.get("apiKey")))})),t.$$set=t=>{"params"in t&&n(3,o=t.params)},[d,f,function(){n(1,f=!0),h.createMemberWith(c,new Jt(d)).then((t=>a("routeEvent",new kt(t.teamId)))).catch((t=>console.log(t))).finally((()=>{n(1,f=!1)}))},o,function(){d=this.value,n(0,d)}]}class we extends et{constructor(t){super(),tt(this,t,ve,ye,o,{params:3})}}function _e(t,e,n){const r=t.slice();return r[5]=e[n],r}function be(e){let n,r,s,i,o,a,c,u,l=e[0].name.value+"",v=e[0].membersNames,w=[];for(let t=0;t<v.length;t+=1)w[t]=Te(_e(e,v,t));return{c(){n=m("h1"),r=g("Équipe "),s=g(l),i=y(),o=m("table"),a=m("thead"),a.innerHTML="<tr><th>Membres de l&#39;équipe</th></tr>",c=y(),u=m("tbody");for(let t=0;t<w.length;t+=1)w[t].c();_(n,"class","is-size-1 has-text-centered mb-5"),_(o,"class","table is-striped is-hoverable")},m(t,e){d(t,n,e),h(n,r),h(n,s),d(t,i,e),d(t,o,e),h(o,a),h(o,c),h(o,u);for(let t=0;t<w.length;t+=1)w[t].m(u,null)},p(t,e){if(1&e&&l!==(l=t[0].name.value+"")&&b(s,l),1&e){let n;for(v=t[0].membersNames,n=0;n<v.length;n+=1){const r=_e(t,v,n);w[n]?w[n].p(r,e):(w[n]=Te(r),w[n].c(),w[n].m(u,null))}for(;n<w.length;n+=1)w[n].d(1);w.length=v.length}},i:t,o:t,d(t){t&&f(n),t&&f(i),t&&f(o),p(w,t)}}}function Ee(e){let n,r,s;return r=new _t({}),{c(){n=m("div"),Y(r.$$.fragment),_(n,"class","is-flex is-justify-content-center")},m(t,e){d(t,n,e),J(r,n,null),s=!0},p:t,i(t){s||(H(r.$$.fragment,t),s=!0)},o(t){W(r.$$.fragment,t),s=!1},d(t){t&&f(n),Z(r)}}}function Te(t){let e,n,r,s,i=t[5].value+"";return{c(){e=m("tr"),n=m("td"),r=g(i),s=y()},m(t,i){d(t,e,i),h(e,n),h(n,r),h(e,s)},p(t,e){1&e&&i!==(i=t[5].value+"")&&b(r,i)},d(t){t&&f(e)}}}function Ie(t){let e,n,r,s,i,o;const a=[Ee,be],c=[];function u(t,e){return t[1]?0:1}return s=u(t),i=c[s]=a[s](t),{c(){e=m("section"),n=m("div"),r=m("div"),i.c(),_(r,"class","is-flex is-flex-direction-column"),_(n,"class","hero-body is-flex is-justify-content-center"),_(e,"class","hero is-primary is-fullheight")},m(t,i){d(t,e,i),h(e,n),h(n,r),c[s].m(r,null),o=!0},p(t,[e]){let n=s;s=u(t),s===n?c[s].p(t,e):(K(),W(c[n],1,1,(()=>{c[n]=null})),G(),i=c[s],i?i.p(t,e):(i=c[s]=a[s](t),i.c()),H(i,1),i.m(r,null))},i(t){o||(H(i),o=!0)},o(t){W(i),o=!1},d(t){t&&f(e),c[s].d()}}}function ke(t,e,n){let{params:r}=e;const s=C("getTeamDetailsUseCase");let i,o=!0;return k((()=>{s.getTeamDetailsBy(new Wt(r.teamId)).then((t=>{n(0,i=t)})).catch((t=>console.log(t))).finally((()=>{n(1,o=!1)}))})),t.$$set=t=>{"params"in t&&n(2,r=t.params)},[i,o,r]}class Se extends et{constructor(t){super(),tt(this,t,ke,Ie,o,{params:2})}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ae=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},Ce={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const s=t[e],i=e+1<t.length,o=i?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=s>>2,l=(3&s)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ae(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(i>>10)),e[r++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const s=n[t.charAt(e++)],i=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==s||null==i||null==o||null==a)throw Error();const c=s<<2|i>>4;if(r.push(c),64!==o){const t=i<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ne=function(t){return function(t){const e=Ae(t);return Ce.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Oe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Re(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function De(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Le(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function xe(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Pe(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}class Me extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ue.prototype.create)}}class Ue{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?function(t,e){return t.replace(Fe,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new Me(r,o,n)}}const Fe=/\{\$([^}]+)}/g;function je(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(Ve(n)&&Ve(i)){if(!je(n,i))return!1}else if(n!==i)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function Ve(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $e(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Be(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function qe(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}class ze{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=Ke),void 0===r.error&&(r.error=Ke),void 0===r.complete&&(r.complete=Ke);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Ke(){}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ge(t){return t&&t._delegate?t._delegate:t}class He{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const We="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qe{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Oe;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:We})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===We?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:We:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Xe{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Qe(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Ye;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(Ye||(Ye={}));const Je={debug:Ye.DEBUG,verbose:Ye.VERBOSE,info:Ye.INFO,warn:Ye.WARN,error:Ye.ERROR,silent:Ye.SILENT},Ze=Ye.INFO,tn={[Ye.DEBUG]:"log",[Ye.VERBOSE]:"log",[Ye.INFO]:"info",[Ye.WARN]:"warn",[Ye.ERROR]:"error"},en=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=tn[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class nn{constructor(t){this.name=t,this._logLevel=Ze,this._logHandler=en,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ye))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Je[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ye.DEBUG,...t),this._logHandler(this,Ye.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ye.VERBOSE,...t),this._logHandler(this,Ye.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ye.INFO,...t),this._logHandler(this,Ye.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ye.WARN,...t),this._logHandler(this,Ye.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ye.ERROR,...t),this._logHandler(this,Ye.ERROR,...t)}}let rn,sn;const on=new WeakMap,an=new WeakMap,cn=new WeakMap,un=new WeakMap,ln=new WeakMap;let hn={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return an.get(t);if("objectStoreNames"===e)return t.objectStoreNames||cn.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function dn(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(sn||(sn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(mn(this),e),pn(on.get(this))}:function(...e){return pn(t.apply(mn(this),e))}:function(e,...n){const r=t.call(mn(this),e,...n);return cn.set(r,e.sort?e.sort():[e]),pn(r)}}function fn(t){return"function"==typeof t?dn(t):(t instanceof IDBTransaction&&function(t){if(an.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));an.set(t,e)}(t),e=t,(rn||(rn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,hn):t);var e}function pn(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(pn(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&on.set(e,t)})).catch((()=>{})),ln.set(e,t),e}(t);if(un.has(t))return un.get(t);const e=fn(t);return e!==t&&(un.set(t,e),ln.set(e,t)),e}const mn=t=>ln.get(t);const gn=["get","getKey","getAll","getAllKeys","count"],yn=["put","add","delete","clear"],vn=new Map;function wn(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(vn.get(e))return vn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=yn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!gn.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return vn.set(e,i),i}hn=(t=>({...t,get:(e,n,r)=>wn(e,n)||t.get(e,n,r),has:(e,n)=>!!wn(e,n)||t.has(e,n)}))(hn);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class _n{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const bn="@firebase/app",En="0.7.26",Tn=new nn("@firebase/app"),In="[DEFAULT]",kn={[bn]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Sn=new Map,An=new Map;function Cn(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(An.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;An.set(e,t);for(const e of Sn.values())Cn(e,t);return!0}function On(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Rn=new Ue("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Dn{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new He("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ln="9.8.3";function xn(t="[DEFAULT]"){const e=Sn.get(t);if(!e)throw Rn.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let s=null!==(r=kn[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${s}" with version "${e}":`];return i&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Tn.warn(t.join(" "))}Nn(new He(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Mn="firebase-heartbeat-store";let Un=null;function Fn(){return Un||(Un=function(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=pn(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(pn(o.result),t.oldVersion,t.newVersion,pn(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Mn)}}).catch((t=>{throw Rn.create("storage-open",{originalErrorMessage:t.message})}))),Un}async function jn(t,e){var n;try{const n=(await Fn()).transaction(Mn,"readwrite"),r=n.objectStore(Mn);return await r.put(e,Vn(t)),n.done}catch(t){throw Rn.create("storage-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message})}}function Vn(t){return`${t.name}!${t.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $n{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new qn(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Bn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Bn(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),zn(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Ne(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Bn(){return(new Date).toISOString().substring(0,10)}class qn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){var e;try{return(await Fn()).transaction(Mn).objectStore(Mn).get(Vn(t))}catch(t){throw Rn.create("storage-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message})}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return jn(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return jn(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function zn(t){return Ne(JSON.stringify({version:2,heartbeats:t})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Kn;function Gn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]])}return n}function Hn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Kn="",Nn(new He("platform-logger",(t=>new _n(t)),"PRIVATE")),Nn(new He("heartbeat",(t=>new $n(t)),"PRIVATE")),Pn(bn,En,Kn),Pn(bn,En,"esm2017"),Pn("fire-js","");const Wn=Hn,Qn=new Ue("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Xn=new nn("@firebase/auth");function Yn(t,...e){Xn.logLevel<=Ye.ERROR&&Xn.error(`Auth (9.8.3): ${t}`,...e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Jn(t,...e){throw tr(t,...e)}function Zn(t,...e){return tr(t,...e)}function tr(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qn.create(t,...e)}function er(t,e,...n){if(!t)throw tr(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yn(e),new Error(e)}function rr(t,e){t||nr(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const sr=new Map;function ir(t){rr(t instanceof Function,"Expected a class definition");let e=sr.get(t);return e?(rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sr.set(t,e),e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function or(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function ar(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function cr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==ar()&&"https:"!==ar()&&!Le()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ur{constructor(t,e){this.shortDelay=t,this.longDelay=e,rr(e>t,"Short delay should be less than long delay!"),this.isMobile=De()||xe()}get(){return cr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function lr(t,e){rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hr{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const dr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},fr=new ur(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mr(t,e,n,r,s={}){return gr(t,s,(async()=>{let s={},i={};r&&("GET"===e?i=r:s={body:JSON.stringify(r)});const o=$e(Object.assign({key:t.config.apiKey},i)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),hr.fetch()(vr(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))}))}async function gr(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dr),e);try{const e=new wr(t),s=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw _r(t,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const e=s.ok?i.errorMessage:i.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw _r(t,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw _r(t,"email-already-in-use",i);if("USER_DISABLED"===n)throw _r(t,"user-disabled",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(t,e,n){const r=Object.assign(Object.assign({},Wn()),{[e]:n});return new Ue("auth","Firebase",r).create(e,{appName:t.name})}(t,a,o);Jn(t,a)}}catch(e){if(e instanceof Me)throw e;Jn(t,"network-request-failed")}}async function yr(t,e,n,r,s={}){const i=await mr(t,e,n,r,s);return"mfaPendingCredential"in i&&Jn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vr(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?lr(t.config,s):`${t.config.apiScheme}://${s}`}class wr{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Zn(this.auth,"network-request-failed"))),fr.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function _r(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zn(t,e,r);return s.customData._tokenResponse=n,s}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function br(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}function Er(t){return 1e3*Number(t)}function Tr(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return Yn("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return Ce.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return t?JSON.parse(t):(Yn("Failed to decode base64 JWT payload"),null)}catch(t){return Yn("Caught error parsing JWT payload as JSON",t),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Ir(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof Me&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class kr{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sr{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=br(this.lastLoginAt),this.creationTime=br(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Ar(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ir(t,async function(t,e){return mr(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));er(null==s?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=(null===(e=i.providerUserInfo)||void 0===e?void 0:e.length)?i.providerUserInfo.map((t=>{var{providerId:e}=t,n=Gn(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Sr(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){er(t.idToken,"internal-error"),er(void 0!==t.idToken,"internal-error"),er(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Tr(t);return er(e,"internal-error"),er(void 0!==e.exp,"internal-error"),er(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return er(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:s}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(t,e){const n=await gr(t,{},(async()=>{const n=$e({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,i=vr(t,r,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",hr.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:s}=e,i=new Cr;return n&&(er("string"==typeof n,"internal-error",{appName:t}),i.refreshToken=n),r&&(er("string"==typeof r,"internal-error",{appName:t}),i.accessToken=r),s&&(er("number"==typeof s,"internal-error",{appName:t}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return nr("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Nr(t,e){er("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Or{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,s=Gn(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Ir(this,this.stsTokenManager.getToken(this.auth,t));return er(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),s=Tr(r);er(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:br(Er(s.auth_time)),issuedAtTime:br(Er(s.iat)),expirationTime:br(Er(s.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Ge(t);await Ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(er(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Or(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){er(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Ar(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ir(this,async function(t,e){return mr(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,s,i,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=e.photoURL)&&void 0!==i?i:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:E}=e;er(v&&E,t,"internal-error");const T=Cr.fromJSON(this.name,E);er("string"==typeof v,t,"internal-error"),Nr(l,t.name),Nr(h,t.name),er("boolean"==typeof w,t,"internal-error"),er("boolean"==typeof _,t,"internal-error"),Nr(d,t.name),Nr(f,t.name),Nr(p,t.name),Nr(m,t.name),Nr(g,t.name),Nr(y,t.name);const I=new Or({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(I.providerData=b.map((t=>Object.assign({},t)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new Cr;r.updateFromServerResponse(e);const s=new Or({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Ar(s),s}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Rr.type="NONE";const Dr=Rr;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Lr(t,e,n){return`firebase:${t}:${e}:${n}`}class xr{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=Lr(this.userKey,r.apiKey,s),this.fullPersistenceKey=Lr("persistence",r.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Or._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new xr(ir(Dr),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=r[0]||ir(Dr);const i=Lr(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(i);if(e){const r=Or._fromJSON(t,e);n!==s&&(o=r),s=n;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(i)}catch(t){}}))),new xr(s,t,n)):new xr(s,t,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Pr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($r(e))return"Blackberry";if(Br(e))return"Webos";if(Ur(e))return"Safari";if((e.includes("chrome/")||Fr(e))&&!e.includes("edge/"))return"Chrome";if(Vr(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Mr(t=Re()){return/firefox\//i.test(t)}function Ur(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fr(t=Re()){return/crios\//i.test(t)}function jr(t=Re()){return/iemobile/i.test(t)}function Vr(t=Re()){return/android/i.test(t)}function $r(t=Re()){return/blackberry/i.test(t)}function Br(t=Re()){return/webos/i.test(t)}function qr(t=Re()){return/iphone|ipad|ipod/i.test(t)}function zr(t=Re()){return qr(t)||Vr(t)||Br(t)||$r(t)||/windows phone/i.test(t)||jr(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Kr(t,e=[]){let n;switch(t){case"Browser":n=Pr(Re());break;case"Worker":n=`${Pr(Re())}-${t}`;break;default:n=t}return`${n}/JsCore/9.8.3/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gr{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{n(t(e))}catch(t){r(t)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(t){n.reverse();for(const t of n)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=t)||void 0===e?void 0:e.message})}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hr{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qr(this),this.idTokenSubscription=new Qr(this),this.beforeStateQueue=new Gr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=ir(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await xr.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==i||!(null==o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(t){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return er(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ar(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Ge(t):null;return e&&er(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&er(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ir(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ue("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&ir(t)||this._popupRedirectResolver;er(e,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[ir(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const s="function"==typeof e?e:e.next.bind(e),i=this._isInitialized?Promise.resolve():this._initializationPromise;return er(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return er(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Kr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Wr(t){return Ge(t)}class Qr{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t,e){const n=new ze(t,e);return n.subscribe.bind(n)}((t=>this.observer=t))}get next(){return er(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xr{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return nr("not implemented")}_getIdTokenResponse(t){return nr("not implemented")}_linkToIdToken(t,e){return nr("not implemented")}_getReauthenticationResolver(t){return nr("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Yr extends Xr{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Yr(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Yr(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(t,e){return yr(t,"POST","/v1/accounts:signInWithPassword",pr(t,e))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return yr(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}(t,{email:this._email,oobCode:this._password});default:Jn(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return async function(t,e){return mr(t,"POST","/v1/accounts:update",e)}(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return yr(t,"POST","/v1/accounts:signInWithEmailLink",pr(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:Jn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Jr(t,e){return yr(t,"POST","/v1/accounts:signInWithIdp",pr(t,e))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zr extends Xr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Zr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Jn("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,s=Gn(e,["providerId","signInMethod"]);if(!n||!r)return null;const i=new Zr(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(t){return Jr(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Jr(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Jr(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=$e(e)}return t}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ts{constructor(t){var e,n,r,s,i,o;const a=Be(qe(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);er(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(i=a.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=Be(qe(t)).link,n=e?Be(qe(e)).deep_link_id:null,r=Be(qe(t)).deep_link_id;return(r?Be(qe(r)).link:null)||r||n||e||t}(t);try{return new ts(e)}catch(t){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class es{constructor(){this.providerId=es.PROVIDER_ID}static credential(t,e){return Yr._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ts.parseLink(e);return er(n,"argument-error"),Yr._fromEmailAndCode(t,n.code,n.tenantId)}}es.PROVIDER_ID="password",es.EMAIL_PASSWORD_SIGN_IN_METHOD="password",es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ns{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rs extends ns{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ss extends rs{constructor(){super("facebook.com")}static credential(t){return Zr._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ss.credentialFromTaggedObject(t)}static credentialFromError(t){return ss.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ss.credential(t.oauthAccessToken)}catch(t){return null}}}ss.FACEBOOK_SIGN_IN_METHOD="facebook.com",ss.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class is extends rs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Zr._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return is.credentialFromTaggedObject(t)}static credentialFromError(t){return is.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return is.credential(e,n)}catch(t){return null}}}is.GOOGLE_SIGN_IN_METHOD="google.com",is.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class os extends rs{constructor(){super("github.com")}static credential(t){return Zr._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return os.credentialFromTaggedObject(t)}static credentialFromError(t){return os.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return os.credential(t.oauthAccessToken)}catch(t){return null}}}os.GITHUB_SIGN_IN_METHOD="github.com",os.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class as extends rs{constructor(){super("twitter.com")}static credential(t,e){return Zr._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return as.credentialFromTaggedObject(t)}static credentialFromError(t){return as.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return as.credential(e,n)}catch(t){return null}}}as.TWITTER_SIGN_IN_METHOD="twitter.com",as.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class cs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const s=await Or._fromIdTokenResponse(t,n,r),i=us(n);return new cs({user:s,providerId:i,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=us(n);return new cs({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function us(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ls extends Me{constructor(t,e,n,r){var s;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ls.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ls(t,e,n,r)}}function hs(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ls._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function ds(t,e,n=!1){const r="signIn",s=await hs(t,r,e),i=await cs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function fs(t,e,n){return async function(t,e){return ds(Wr(t),e)}(Ge(t),es.credential(e,n))}const ps="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ms{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ps,"1"),this.storage.removeItem(ps),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gs extends ms{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Re();return Ur(t)||qr(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=zr(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);Pe()&&10===document.documentMode&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}gs.type="LOCAL";const ys=gs;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vs extends ms{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}vs.type="SESSION";const ws=vs;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class _s{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new _s(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:s}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async t=>t(e.origin,s))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function bs(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */_s.receivers=[];class Es{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=bs("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ts(){return window}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Is(){return void 0!==Ts().WorkerGlobalScope&&"function"==typeof Ts().importScripts}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ks="firebaseLocalStorageDb",Ss="firebaseLocalStorage",As="fbase_key";class Cs{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Ns(t,e){return t.transaction([Ss],e?"readwrite":"readonly").objectStore(Ss)}function Os(){const t=indexedDB.open(ks,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Ss,{keyPath:As})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Ss)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(ks);return new Cs(t).toPromise()}(),e(await Os()))}))}))}async function Rs(t,e,n){const r=Ns(t,!0).put({[As]:e,value:n});return new Cs(r).toPromise()}function Ds(t,e){const n=Ns(t,!0).delete(e);return new Cs(n).toPromise()}class Ls{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Os()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Is()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_s._getInstance(Is()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Es(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&function(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Os();return await Rs(t,ps,"1"),await Ds(t,ps),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Rs(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Ns(t,!1).get(e),r=await new Cs(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Ds(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Ns(t,!1).getAll();return new Cs(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:s}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ls.type="LOCAL";const xs=Ls;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ps(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=Zn("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",function(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}().appendChild(r)}))}new ur(3e4,6e4);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ms extends Xr{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Jr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Jr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Jr(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Us(t){return ds(t.auth,new Ms(t),t.bypassAuthState)}function Fs(t){const{auth:e,user:n}=t;return er(n,e,"internal-error"),
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ir(t,hs(r,s,e,t),n);er(i.idToken,r,"internal-error");const o=Tr(i.idToken);er(o,r,"internal-error");const{sub:a}=o;return er(t.uid===a,r,"user-mismatch"),cs._forOperation(t,s,i)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Jn(r,"user-mismatch"),t}}(n,new Ms(t),t.bypassAuthState)}async function js(t){const{auth:e,user:n}=t;return er(n,e,"internal-error"),async function(t,e,n=!1){const r=await Ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cs._forOperation(t,"link",r)}(n,new Ms(t),t.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vs{constructor(t,e,n,r,s=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=t;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Us;case"linkViaPopup":case"linkViaRedirect":return js;case"reauthViaPopup":case"reauthViaRedirect":return Fs;default:Jn(this.auth,"internal-error")}}resolve(t){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const $s=new ur(2e3,1e4);class Bs extends Vs{constructor(t,e,n,r,s){super(t,e,r,s),this.provider=n,this.authWindow=null,this.pollId=null,Bs.currentPopupAction&&Bs.currentPopupAction.cancel(),Bs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return er(t,this.auth,"internal-error"),t}async onExecution(){rr(1===this.filter.length,"Popup operations only handle one event");const t=bs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Zn(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,$s.get())};t()}}Bs.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const qs="pendingRedirect",zs=new Map;class Ks extends Vs{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=zs.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=function(t){return Lr(qs,t.config.apiKey,t.name)}(e),r=function(t){return ir(t._redirectPersistence)}(t);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}zs.set(this.auth._key(),t)}return this.bypassAuthState||zs.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Gs(t,e){zs.set(t._key(),e)}async function Hs(t,e,n=!1){const r=Wr(t),s=
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(t,e){return e?ir(e):(er(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}(r,e),i=new Ks(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ws{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xs(t);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Xs(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Zn(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qs(t))}saveEventToCache(t){this.cachedEventUids.add(Qs(t)),this.lastProcessedEventTime=Date.now()}}function Qs(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Xs({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Ys=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Js=/^https?/;async function Zs(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return mr(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(ti(t))return}catch(t){}Jn(t,"unauthorized-domain")}function ti(t){const e=or(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Js.test(n))return!1;if(Ys.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ei=new ur(3e4,6e4);function ni(){const t=Ts().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}function ri(t){return new Promise(((e,n)=>{var r,s,i;function o(){ni(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ni(),n(Zn(t,"network-request-failed"))},timeout:ei.get()})}if(null===(s=null===(r=Ts().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(i=Ts().gapi)||void 0===i?void 0:i.load)){const e=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Ts()[e]=()=>{gapi.load?o():n(Zn(t,"network-request-failed"))},Ps(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw si=null,t}))}let si=null;
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ii=new ur(5e3,15e3),oi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ai=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ci(t){const e=t.config;er(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lr(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:Ln},s=ai.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$e(r).slice(1)}`}async function ui(t){const e=await function(t){return si=si||ri(t),si}(t),n=Ts().gapi;return er(n,t,"internal-error"),e.open({where:document.body,url:ci(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oi,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const s=Zn(t,"network-request-failed"),i=Ts().setTimeout((()=>{r(s)}),ii.get());function o(){Ts().clearTimeout(i),n(e)}e.ping(o).then(o,(()=>{r(s)}))}))))}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const li={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class hi{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function di(t,e,n,r=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},li),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Re().toLowerCase();n&&(a=Fr(u)?"_blank":n),Mr(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=Re()){var e;return qr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e||"",a),new hi(null);const h=window.open(e||"",a,l);er(h,t,"popup-blocked");try{h.focus()}catch(t){}return new hi(h)}const fi="__/auth/handler",pi="emulator/auth/handler";function mi(t,e,n,r,s,i){er(t.config.authDomain,t,"auth-domain-config-required"),er(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ln,eventId:s};if(e instanceof ns){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(i||{}))o[t]=e}if(e instanceof rs){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/${fi}`;return lr(t,pi)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)}?${$e(a).slice(1)}`}const gi="webStorageSupport";const yi=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ws,this._completeRedirectFn=Hs,this._overrideRedirectResult=Gs}async _openPopup(t,e,n,r){var s;rr(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return di(t,mi(t,e,n,or(),r),bs())}async _openRedirect(t,e,n,r){var s;return await this._originValidation(t),s=mi(t,e,n,or(),r),Ts().location.href=s,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(rr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await ui(t),n=new Ws(t);return e.register("authEvent",(e=>{er(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(gi,{type:gi},(n=>{var r;const s=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==s&&e(!!s),Jn(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Zs(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return zr()||Ur()||qr()}};var vi,wi="@firebase/auth",_i="0.20.3";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class bi{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){er(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ei(t=xn()){const e=On(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const n=On(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(je(n.getOptions(),null!=e?e:{}))return t;Jn(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:yi,persistence:[xs,ys,ws]})}vi="Browser",Nn(new He("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:i}=n.options;return((t,n)=>{er(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),er(!(null==i?void 0:i.includes(":")),"argument-error",{appName:t.name});const r={apiKey:s,authDomain:i,clientPlatform:vi,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kr(vi)},o=new Hr(t,n,r);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ir);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Nn(new He("auth-internal",(t=>(t=>new bi(t))(Wr(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(wi,_i,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(vi)),Pn(wi,_i,"esm2017");var Ti,Ii="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ki=ki||{},Si=Ii||self;function Ai(){}function Ci(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Ni(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Oi="closure_uid_"+(1e9*Math.random()>>>0),Ri=0;function Di(t,e,n){return t.call.apply(t.bind,arguments)}function Li(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function xi(t,e,n){return(xi=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Di:Li).apply(null,arguments)}function Pi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Mi(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function Ui(){this.s=this.s,this.o=this.o}Ui.prototype.s=!1,Ui.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Oi)&&t[Oi]||(t[Oi]=++Ri))},Ui.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fi=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ji=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s="string"==typeof t?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function Vi(t){return Array.prototype.concat.apply([],arguments)}function $i(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Bi(t){return/^[\s\xa0]*$/.test(t)}var qi,zi=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ki(t,e){return-1!=t.indexOf(e)}function Gi(t,e){return t<e?-1:t>e?1:0}t:{var Hi=Si.navigator;if(Hi){var Wi=Hi.userAgent;if(Wi){qi=Wi;break t}}qi=""}function Qi(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Xi(t){const e={};for(const n in t)e[n]=t[n];return e}var Yi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ji(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<Yi.length;e++)n=Yi[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Zi(t){return Zi[" "](t),t}Zi[" "]=Ai;var to,eo,no=Ki(qi,"Opera"),ro=Ki(qi,"Trident")||Ki(qi,"MSIE"),so=Ki(qi,"Edge"),io=so||ro,oo=Ki(qi,"Gecko")&&!(Ki(qi.toLowerCase(),"webkit")&&!Ki(qi,"Edge"))&&!(Ki(qi,"Trident")||Ki(qi,"MSIE"))&&!Ki(qi,"Edge"),ao=Ki(qi.toLowerCase(),"webkit")&&!Ki(qi,"Edge");function co(){var t=Si.document;return t?t.documentMode:void 0}t:{var uo="",lo=(eo=qi,oo?/rv:([^\);]+)(\)|;)/.exec(eo):so?/Edge\/([\d\.]+)/.exec(eo):ro?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(eo):ao?/WebKit\/(\S+)/.exec(eo):no?/(?:Version)[ \/]?(\S+)/.exec(eo):void 0);if(lo&&(uo=lo?lo[1]:""),ro){var ho=co();if(null!=ho&&ho>parseFloat(uo)){to=String(ho);break t}}to=uo}var fo,po={};function mo(){return function(t){var e=po;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=zi(String(to)).split("."),n=zi("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=Gi(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||Gi(0==s[2].length,0==i[2].length)||Gi(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(Si.document&&ro){var go=co();fo=go||(parseInt(to,10)||void 0)}else fo=void 0;var yo=fo,vo=function(){if(!Si.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Si.addEventListener("test",Ai,e),Si.removeEventListener("test",Ai,e)}catch(t){}return t}();function wo(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function _o(t,e){if(wo.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(oo){t:{try{Zi(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:bo[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_o.Z.h.call(this)}}wo.prototype.h=function(){this.defaultPrevented=!0},Mi(_o,wo);var bo={2:"touch",3:"pen",4:"mouse"};_o.prototype.h=function(){_o.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Eo="closure_listenable_"+(1e6*Math.random()|0),To=0;function Io(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++To,this.ca=this.fa=!1}function ko(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function So(t){this.src=t,this.g={},this.h=0}function Ao(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=Fi(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ko(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Co(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}So.prototype.add=function(t,e,n,r,s){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=Co(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Io(e,this.src,i,!!r,s)).fa=n,t.push(e)),e};var No="closure_lm_"+(1e6*Math.random()|0),Oo={};function Ro(t,e,n,r,s){if(r&&r.once)return Lo(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ro(t,e[i],n,r,s);return null}return n=Vo(n),t&&t[Eo]?t.N(e,n,Ni(r)?!!r.capture:!!r,s):Do(t,e,n,!1,r,s)}function Do(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ni(s)?!!s.capture:!!s,a=Fo(t);if(a||(t[No]=a=new So(t)),(n=a.add(e,n,r,o,i)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Uo;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)vo||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Mo(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Lo(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lo(t,e[i],n,r,s);return null}return n=Vo(n),t&&t[Eo]?t.O(e,n,Ni(r)?!!r.capture:!!r,s):Do(t,e,n,!0,r,s)}function xo(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)xo(t,e[i],n,r,s);else r=Ni(r)?!!r.capture:!!r,n=Vo(n),t&&t[Eo]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Co(i=t.g[e],n,r,s))&&(ko(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Fo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Co(e,n,r,s)),(n=-1<t?e[t]:null)&&Po(n))}function Po(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Eo])Ao(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Mo(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Fo(e))?(Ao(n,t),0==n.h&&(n.src=null,e[No]=null)):ko(t)}}}function Mo(t){return t in Oo?Oo[t]:Oo[t]="on"+t}function Uo(t,e){if(t.ca)t=!0;else{e=new _o(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Po(t),t=n.call(r,e)}return t}function Fo(t){return(t=t[No])instanceof So?t:null}var jo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vo(t){return"function"==typeof t?t:(t[jo]||(t[jo]=function(e){return t.handleEvent(e)}),t[jo])}function $o(){Ui.call(this),this.i=new So(this),this.P=this,this.I=null}function Bo(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new wo(e,t);else if(e instanceof wo)e.target=e.target||t;else{var s=e;Ji(e=new wo(r,t),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=qo(o,r,!0,e)&&s}if(s=qo(o=e.g=t,r,!0,e)&&s,s=qo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)s=qo(o=e.g=n[i],r,!1,e)&&s}function qo(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ao(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}Mi($o,Ui),$o.prototype[Eo]=!0,$o.prototype.removeEventListener=function(t,e,n,r){xo(this,t,e,n,r)},$o.prototype.M=function(){if($o.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ko(n[r]);delete e.g[t],e.h--}}this.I=null},$o.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},$o.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var zo=Si.JSON.stringify;function Ko(){var t=Jo;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Go,Ho=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Wo),(t=>t.reset()));class Wo{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Qo(t){Si.setTimeout((()=>{throw t}),0)}function Xo(t,e){Go||function(){var t=Si.Promise.resolve(void 0);Go=function(){t.then(Zo)}}(),Yo||(Go(),Yo=!0),Jo.add(t,e)}var Yo=!1,Jo=new class{constructor(){this.h=this.g=null}add(t,e){const n=Ho.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Zo(){for(var t;t=Ko();){try{t.h.call(t.g)}catch(t){Qo(t)}var e=Ho;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Yo=!1}function ta(t,e){$o.call(this),this.h=t||1,this.g=e||Si,this.j=xi(this.kb,this),this.l=Date.now()}function ea(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function na(t,e,n){if("function"==typeof t)n&&(t=xi(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=xi(t.handleEvent,t)}return 2147483647<Number(e)?-1:Si.setTimeout(t,e||0)}function ra(t){t.g=na((()=>{t.g=null,t.i&&(t.i=!1,ra(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Mi(ta,$o),(Ti=ta.prototype).da=!1,Ti.S=null,Ti.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Bo(this,"tick"),this.da&&(ea(this),this.start()))}},Ti.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ti.M=function(){ta.Z.M.call(this),ea(this),delete this.g};class sa extends Ui{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ra(this)}M(){super.M(),this.g&&(Si.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ia(t){Ui.call(this),this.h=t,this.g={}}Mi(ia,Ui);var oa=[];function aa(t,e,n,r){Array.isArray(n)||(n&&(oa[0]=n.toString()),n=oa);for(var s=0;s<n.length;s++){var i=Ro(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ca(t){Qi(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Po(t)}),t),t.g={}}function ua(){this.g=!0}function la(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return zo(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}ia.prototype.M=function(){ia.Z.M.call(this),ca(this)},ia.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ua.prototype.Aa=function(){this.g=!1},ua.prototype.info=function(){};var ha={},da=null;function fa(){return da=da||new $o}function pa(t){wo.call(this,ha.Ma,t)}function ma(t){const e=fa();Bo(e,new pa(e,t))}function ga(t,e){wo.call(this,ha.STAT_EVENT,t),this.stat=e}function ya(t){const e=fa();Bo(e,new ga(e,t))}function va(t,e){wo.call(this,ha.Na,t),this.size=e}function wa(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Si.setTimeout((function(){t()}),e)}ha.Ma="serverreachability",Mi(pa,wo),ha.STAT_EVENT="statevent",Mi(ga,wo),ha.Na="timingevent",Mi(va,wo);var _a={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ba={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ea(){}function Ta(t){return t.h||(t.h=t.i())}function Ia(){}Ea.prototype.h=null;var ka,Sa={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Aa(){wo.call(this,"d")}function Ca(){wo.call(this,"c")}function Na(){}function Oa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ia(this),this.P=Da,t=io?125:void 0,this.W=new ta(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ra}function Ra(){this.i=null,this.g="",this.h=!1}Mi(Aa,wo),Mi(Ca,wo),Mi(Na,Ea),Na.prototype.g=function(){return new XMLHttpRequest},Na.prototype.i=function(){return{}},ka=new Na;var Da=45e3,La={},xa={};function Pa(t,e,n){t.K=1,t.v=sc(Ja(e)),t.s=n,t.U=!0,Ma(t,null)}function Ma(t,e){t.F=Date.now(),Va(t),t.A=Ja(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),yc(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ra,t.g=yu(t.l,n?e:null,!t.s),0<t.O&&(t.L=new sa(xi(t.Ia,t,t.g),t.O)),aa(t.V,t.g,"readystatechange",t.gb),e=t.H?Xi(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ma(1),function(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Ua(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Fa(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=ja(t,n),r==xa){4==e&&(t.o=4,ya(14),s=!1),la(t.j,t.m,null,"[Incomplete Response]");break}if(r==La){t.o=4,ya(15),la(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}la(t.j,t.m,r,null),Ka(t,r)}Ua(t)&&r!=xa&&r!=La&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ya(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),uu(e),e.L=!0,ya(11))):(la(t.j,t.m,n,"[Invalid Chunked Response]"),za(t),qa(t))}function ja(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?xa:(n=Number(e.substring(n,r)),isNaN(n)?La:(r+=1)+n>e.length?xa:(e=e.substr(r,n),t.C=r+n,e))}function Va(t){t.Y=Date.now()+t.P,$a(t,t.P)}function $a(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=wa(xi(t.eb,t),e)}function Ba(t){t.B&&(Si.clearTimeout(t.B),t.B=null)}function qa(t){0==t.l.G||t.I||du(t.l,t)}function za(t){Ba(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,ea(t.W),ca(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ka(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Tc(n.i,t)))if(n.I=t.N,!t.J&&Tc(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;hu(n),tu(n)}cu(n),ya(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=wa(xi(n.ab,n),6e3));if(1>=Ec(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else pu(n,11)}else if((t.J||n.g==t)&&hu(n),!Bi(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;!i.g&&(Ki(t,"spdy")||Ki(t,"quic")||Ki(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Ic(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,rc(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((r=n).oa=gu(r,r.H?r.la:null,r.W),o.J){kc(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ba(a),Va(a)),r.g=o}else au(r);0<n.l.length&&ru(n)}else"stop"!=u[0]&&"close"!=u[0]||pu(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?pu(n,7):Zc(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ma(4)}catch(t){}}function Ga(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Ci(t)||"string"==typeof t)ji(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Ci(t)||"string"==typeof t){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Ci(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Ha(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ha)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Wa(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Qa(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)Qa(s,r=t.g[e])||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}function Qa(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Ti=Oa.prototype).setTimeout=function(t){this.P=t},Ti.gb=function(t){t=t.target;const e=this.L;e&&3==Wc(t)?e.l():this.Ia(t)},Ti.Ia=function(t){try{if(t==this.g)t:{const l=Wc(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||io||this.g&&(this.h.h||this.g.ga()||Qc(this.g)))){this.I||4!=l||7==e||ma(8==e||0>=h?3:2),Ba(this);var n=this.g.ba();this.N=n;e:if(Ua(this)){var r=Qc(this.g);t="";var s=r.length,i=4==Wc(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){za(this),qa(this);var o="";break e}this.h.i=new Si.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bi(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ya(12),za(this),qa(this);break t}la(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ka(this,n)}this.U?(Fa(this,l,o),io&&this.i&&3==l&&(aa(this.V,this.W,"tick",this.fb),this.W.start())):(la(this.j,this.m,o,null),Ka(this,o)),4==l&&za(this),this.i&&!this.I&&(4==l?du(this.l,this):(this.i=!1,Va(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ya(12)):(this.o=0,ya(13)),za(this),qa(this)}}}catch(t){}},Ti.fb=function(){if(this.g){var t=Wc(this.g),e=this.g.ga();this.C<e.length&&(Ba(this),Fa(this,t,e),this.i&&4!=t&&Va(this))}},Ti.cancel=function(){this.I=!0,za(this)},Ti.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(ma(3),ya(17)),za(this),this.o=2,qa(this)):$a(this,this.Y-t)},(Ti=Ha.prototype).R=function(){Wa(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Ti.T=function(){return Wa(this),this.g.concat()},Ti.get=function(t,e){return Qa(this.h,t)?this.h[t]:e},Ti.set=function(t,e){Qa(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Ti.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};var Xa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ya(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ya){this.g=void 0!==e?e:t.g,Za(this,t.j),this.s=t.s,tc(this,t.i),ec(this,t.m),this.l=t.l,e=t.h;var n=new fc;n.i=e.i,e.g&&(n.g=new Ha(e.g),n.h=e.h),nc(this,n),this.o=t.o}else t&&(n=String(t).match(Xa))?(this.g=!!e,Za(this,n[1]||"",!0),this.s=ic(n[2]||""),tc(this,n[3]||"",!0),ec(this,n[4]),this.l=ic(n[5]||"",!0),nc(this,n[6]||"",!0),this.o=ic(n[7]||"")):(this.g=!!e,this.h=new fc(null,this.g))}function Ja(t){return new Ya(t)}function Za(t,e,n){t.j=n?ic(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tc(t,e,n){t.i=n?ic(e,!0):e}function ec(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nc(t,e,n){e instanceof fc?(t.h=e,function(t,e){e&&!t.j&&(pc(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(mc(this,e),yc(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=oc(e,hc)),t.h=new fc(e,t.g))}function rc(t,e,n){t.h.set(e,n)}function sc(t){return rc(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ic(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function oc(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ac),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ac(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ya.prototype.toString=function(){var t=[],e=this.j;e&&t.push(oc(e,cc,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(oc(e,cc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(oc(n,"/"==n.charAt(0)?lc:uc,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",oc(n,dc)),t.join("")};var cc=/[#\/\?@]/g,uc=/[#\?:]/g,lc=/[#\?]/g,hc=/[#\?@]/g,dc=/#/g;function fc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pc(t){t.g||(t.g=new Ha,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function mc(t,e){pc(t),e=vc(t,e),Qa(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Qa((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Wa(t)))}function gc(t,e){return pc(t),e=vc(t,e),Qa(t.g.h,e)}function yc(t,e,n){mc(t,e),0<n.length&&(t.i=null,t.g.set(vc(t,e),$i(n)),t.h+=n.length)}function vc(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ti=fc.prototype).add=function(t,e){pc(this),this.i=null,t=vc(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ti.forEach=function(t,e){pc(this),this.g.forEach((function(n,r){ji(n,(function(n){t.call(e,n,r,this)}),this)}),this)},Ti.T=function(){pc(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n},Ti.R=function(t){pc(this);var e=[];if("string"==typeof t)gc(this,t)&&(e=Vi(e,this.g.get(vc(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Vi(e,t[n])}return e},Ti.set=function(t,e){return pc(this),this.i=null,gc(this,t=vc(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ti.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Ti.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function wc(t){this.l=t||_c,Si.PerformanceNavigationTiming?t=0<(t=Si.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Si.g&&Si.g.Ea&&Si.g.Ea()&&Si.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _c=10;function bc(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ec(t){return t.h?1:t.g?t.g.size:0}function Tc(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ic(t,e){t.g?t.g.add(e):t.h=e}function kc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Sc(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return $i(t.i)}function Ac(){}function Cc(){this.g=new Ac}function Nc(t,e,n){const r=n||"";try{Ga(t,(function(t,n){let s=t;Ni(t)&&(s=zo(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function Oc(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(t){}}function Rc(t){this.l=t.$b||null,this.j=t.ib||!1}function Dc(t,e){$o.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Lc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wc.prototype.cancel=function(){if(this.i=Sc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ac.prototype.stringify=function(t){return Si.JSON.stringify(t,void 0)},Ac.prototype.parse=function(t){return Si.JSON.parse(t,void 0)},Mi(Rc,Ea),Rc.prototype.g=function(){return new Dc(this.l,this.j)},Rc.prototype.i=function(t){return function(){return t}}({}),Mi(Dc,$o);var Lc=0;function xc(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Pc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mc(t)}function Mc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ti=Dc.prototype).open=function(t,e){if(this.readyState!=Lc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mc(this)},Ti.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Si).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Ti.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pc(this)),this.readyState=Lc},Ti.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mc(this)),this.g&&(this.readyState=3,Mc(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Si.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xc(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Ti.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pc(this):Mc(this),3==this.readyState&&xc(this)}},Ti.Ua=function(t){this.g&&(this.response=this.responseText=t,Pc(this))},Ti.Ta=function(t){this.g&&(this.response=t,Pc(this))},Ti.ha=function(){this.g&&Pc(this)},Ti.setRequestHeader=function(t,e){this.v.append(t,e)},Ti.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ti.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Dc.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Uc=Si.JSON.parse;function Fc(t){$o.call(this),this.headers=new Ha,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jc,this.K=this.L=!1}Mi(Fc,$o);var jc="",Vc=/^https?$/i,$c=["POST","PUT"];function Bc(t){return"content-type"==t.toLowerCase()}function qc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zc(t),Gc(t)}function zc(t){t.D||(t.D=!0,Bo(t,"complete"),Bo(t,"error"))}function Kc(t){if(t.h&&void 0!==ki&&(!t.C[1]||4!=Wc(t)||2!=t.ba()))if(t.v&&4==Wc(t))na(t.Fa,0,t);else if(Bo(t,"readystatechange"),4==Wc(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var s=String(t.H).match(Xa)[1]||null;if(!s&&Si.self&&Si.self.location){var i=Si.self.location.protocol;s=i.substr(0,i.length-1)}r=!Vc.test(s?s.toLowerCase():"")}n=r}if(n)Bo(t,"complete"),Bo(t,"success");else{t.m=6;try{var o=2<Wc(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",zc(t)}}finally{Gc(t)}}}function Gc(t,e){if(t.g){Hc(t);const n=t.g,r=t.C[0]?Ai:null;t.g=null,t.C=null,e||Bo(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function Hc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Si.clearTimeout(t.A),t.A=null)}function Wc(t){return t.g?t.g.readyState:0}function Qc(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case jc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Xc(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){let e="";return Qi(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):rc(t,e,n))}function Yc(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Jc(t){this.za=0,this.l=[],this.h=new ua,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Yc("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Yc("baseRetryDelayMs",5e3,t),this.$a=Yc("retryDelaySeedMs",1e4,t),this.Ya=Yc("forwardChannelMaxRetries",2,t),this.ra=Yc("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new wc(t&&t.concurrentRequestLimit),this.Ca=new Cc,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Zc(t){if(eu(t),3==t.G){var e=t.V++,n=Ja(t.F);rc(n,"SID",t.J),rc(n,"RID",e),rc(n,"TYPE","terminate"),iu(t,n),(e=new Oa(t,t.h,e,void 0)).K=2,e.v=sc(Ja(n)),n=!1,Si.navigator&&Si.navigator.sendBeacon&&(n=Si.navigator.sendBeacon(e.v.toString(),"")),!n&&Si.Image&&((new Image).src=e.v,n=!0),n||(e.g=yu(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Va(e)}mu(t)}function tu(t){t.g&&(uu(t),t.g.cancel(),t.g=null)}function eu(t){tu(t),t.u&&(Si.clearTimeout(t.u),t.u=null),hu(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Si.clearTimeout(t.m),t.m=null)}function nu(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&ru(t)}function ru(t){bc(t.i)||t.m||(t.m=!0,Xo(t.Ha,t),t.C=0)}function su(t,e){var n;n=e?e.m:t.V++;const r=Ja(t.F);rc(r,"SID",t.J),rc(r,"RID",n),rc(r,"AID",t.U),iu(t,r),t.o&&t.s&&Xc(r,t.o,t.s),n=new Oa(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ou(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ic(t.i,n),Pa(n,r,e)}function iu(t,e){t.j&&Ga({},(function(t,n){rc(e,n,t)}))}function ou(t,e,n){n=Math.min(t.l.length,n);var r=t.j?xi(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),i=!1;else try{Nc(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(i){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function au(t){t.g||t.u||(t.Y=1,Xo(t.Ga,t),t.A=0)}function cu(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=wa(xi(t.Ga,t),fu(t,t.A)),t.A++,!0)}function uu(t){null!=t.B&&(Si.clearTimeout(t.B),t.B=null)}function lu(t){t.g=new Oa(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ja(t.oa);rc(e,"RID","rpc"),rc(e,"SID",t.J),rc(e,"CI",t.N?"0":"1"),rc(e,"AID",t.U),iu(t,e),rc(e,"TYPE","xmlhttp"),t.o&&t.s&&Xc(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=sc(Ja(e)),n.s=null,n.U=!0,Ma(n,t)}function hu(t){null!=t.v&&(Si.clearTimeout(t.v),t.v=null)}function du(t,e){var n=null;if(t.g==e){hu(t),uu(t),t.g=null;var r=2}else{if(!Tc(t.i,e))return;n=e.D,kc(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;Bo(r=fa(),new va(r,n,e,s)),ru(t)}else au(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==r&&function(t,e){return!(Ec(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=wa(xi(t.Ha,t,e),fu(t,t.C)),t.C++,0)))}(t,e)||2==r&&cu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:pu(t,5);break;case 4:pu(t,10);break;case 3:pu(t,6);break;default:pu(t,2)}}function fu(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function pu(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=xi(t.jb,t);n||(n=new Ya("//www.google.com/images/cleardot.gif"),Si.location&&"http"==Si.location.protocol||Za(n,"https"),sc(n)),function(t,e){const n=new ua;if(Si.Image){const r=new Image;r.onload=Pi(Oc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Pi(Oc,n,r,"TestLoadImage: error",!1,e),r.onabort=Pi(Oc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Pi(Oc,n,r,"TestLoadImage: timeout",!1,e),Si.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else ya(2);t.G=0,t.j&&t.j.va(e),mu(t),eu(t)}function mu(t){t.G=0,t.I=-1,t.j&&(0==Sc(t.i).length&&0==t.l.length||(t.i.i.length=0,$i(t.l),t.l.length=0),t.j.ua())}function gu(t,e,n){let r=function(t){return t instanceof Ya?Ja(t):new Ya(t,void 0)}(n);if(""!=r.i)e&&tc(r,e+"."+r.i),ec(r,r.m);else{const t=Si.location;r=function(t,e,n,r){var s=new Ya(null,void 0);return t&&Za(s,t),e&&tc(s,e),n&&ec(s,n),r&&(s.l=r),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Qi(t.aa,(function(t,e){rc(r,e,t)})),e=t.D,n=t.sa,e&&n&&rc(r,e,n),rc(r,"VER",t.ma),iu(t,r),r}function yu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Fc(new Rc({ib:!0})):new Fc(t.qa)).L=t.H,e}function vu(){}function wu(){if(ro&&!(10<=Number(yo)))throw Error("Environmental error: no available transport.")}function _u(t,e){$o.call(this),this.g=new Jc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Bi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bi(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Tu(this)}function bu(t){Aa.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Eu(){Ca.call(this),this.status=1}function Tu(t){this.g=t}(Ti=Fc.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ka.g(),this.C=this.u?Ta(this.u):Ta(ka),this.g.onreadystatechange=xi(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void qc(this,t)}t=n||"";const s=new Ha(this.headers);r&&Ga(r,(function(t,e){s.set(e,t)})),r=function(t){t:{var e=Bc;const n=t.length,r="string"==typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),n=Si.FormData&&t instanceof Si.FormData,!(0<=Fi($c,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hc(this),0<this.B&&((this.K=function(t){return ro&&mo()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xi(this.pa,this)):this.A=na(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){qc(this,t)}},Ti.pa=function(){void 0!==ki&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Bo(this,"timeout"),this.abort(8))},Ti.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Bo(this,"complete"),Bo(this,"abort"),Gc(this))},Ti.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gc(this,!0)),Fc.Z.M.call(this)},Ti.Fa=function(){this.s||(this.F||this.v||this.l?Kc(this):this.cb())},Ti.cb=function(){Kc(this)},Ti.ba=function(){try{return 2<Wc(this)?this.g.status:-1}catch(t){return-1}},Ti.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ti.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Uc(e)}},Ti.Da=function(){return this.m},Ti.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ti=Jc.prototype).ma=8,Ti.G=1,Ti.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},Ti.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Oa(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Xi(i),Ji(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ou(this,s,e),rc(n=Ja(this.F),"RID",t),rc(n,"CVER",22),this.D&&rc(n,"X-HTTP-Session-Id",this.D),iu(this,n),this.o&&i&&Xc(n,this.o,i),Ic(this.i,s),this.Ra&&rc(n,"TYPE","init"),this.ja?(rc(n,"$req",e),rc(n,"SID","null"),s.$=!0,Pa(s,n,null)):Pa(s,n,e),this.G=2}}else 3==this.G&&(t?su(this,t):0==this.l.length||bc(this.i)||su(this))},Ti.Ga=function(){if(this.u=null,lu(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=wa(xi(this.bb,this),t)}},Ti.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ya(10),tu(this),lu(this))},Ti.ab=function(){null!=this.v&&(this.v=null,tu(this),cu(this),ya(19))},Ti.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ya(2)):(this.h.info("Failed to ping google.com"),ya(1))},(Ti=vu.prototype).xa=function(){},Ti.wa=function(){},Ti.va=function(){},Ti.ua=function(){},Ti.Oa=function(){},wu.prototype.g=function(t,e){return new _u(t,e)},Mi(_u,$o),_u.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Xo(xi(t.hb,t,e))),ya(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=gu(t,null,t.W),ru(t)},_u.prototype.close=function(){Zc(this.g)},_u.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,nu(this.g,e)}else this.v?((e={}).__data__=zo(t),nu(this.g,e)):nu(this.g,t)},_u.prototype.M=function(){this.g.j=null,delete this.j,Zc(this.g),delete this.g,_u.Z.M.call(this)},Mi(bu,Aa),Mi(Eu,Ca),Mi(Tu,vu),Tu.prototype.xa=function(){Bo(this.g,"a")},Tu.prototype.wa=function(t){Bo(this.g,new bu(t))},Tu.prototype.va=function(t){Bo(this.g,new Eu(t))},Tu.prototype.ua=function(){Bo(this.g,"b")},wu.prototype.createWebChannel=wu.prototype.g,_u.prototype.send=_u.prototype.u,_u.prototype.open=_u.prototype.m,_u.prototype.close=_u.prototype.close,_a.NO_ERROR=0,_a.TIMEOUT=8,_a.HTTP_ERROR=6,ba.COMPLETE="complete",Ia.EventType=Sa,Sa.OPEN="a",Sa.CLOSE="b",Sa.ERROR="c",Sa.MESSAGE="d",$o.prototype.listen=$o.prototype.N,Fc.prototype.listenOnce=Fc.prototype.O,Fc.prototype.getLastError=Fc.prototype.La,Fc.prototype.getLastErrorCode=Fc.prototype.Da,Fc.prototype.getStatus=Fc.prototype.ba,Fc.prototype.getResponseJson=Fc.prototype.Qa,Fc.prototype.getResponseText=Fc.prototype.ga,Fc.prototype.send=Fc.prototype.ea;var Iu=_a,ku=ba,Su=ha,Au=10,Cu=11,Nu=Rc,Ou=Ia,Ru=Fc;const Du="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Lu{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Lu.UNAUTHENTICATED=new Lu(null),Lu.GOOGLE_CREDENTIALS=new Lu("google-credentials-uid"),Lu.FIRST_PARTY=new Lu("first-party-uid"),Lu.MOCK_USER=new Lu("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let xu="9.8.3";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Pu=new nn("@firebase/firestore");function Mu(){return Pu.logLevel}function Uu(t,...e){if(Pu.logLevel<=Ye.DEBUG){const n=e.map(Vu);Pu.debug(`Firestore (${xu}): ${t}`,...n)}}function Fu(t,...e){if(Pu.logLevel<=Ye.ERROR){const n=e.map(Vu);Pu.error(`Firestore (${xu}): ${t}`,...n)}}function ju(t,...e){if(Pu.logLevel<=Ye.WARN){const n=e.map(Vu);Pu.warn(`Firestore (${xu}): ${t}`,...n)}}function Vu(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function $u(t="Unexpected state"){const e=`FIRESTORE (${xu}) INTERNAL ASSERTION FAILED: `+t;throw Fu(e),new Error(e)}function Bu(t,e){t||$u()}function qu(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const zu={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ku extends Me{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gu{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Lu.UNAUTHENTICATED)))}shutdown(){}}class Qu{constructor(t){this.t=t,this.currentUser=Lu.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Gu;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Gu,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Uu("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Uu("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Gu)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Uu("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Bu("string"==typeof e.accessToken),new Hu(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Bu(null===t||"string"==typeof t),new Lu(t)}}class Xu{constructor(t,e,n){this.type="FirstParty",this.user=Lu.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Yu{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Xu(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Lu.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ju{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zu{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Uu("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Uu("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Uu("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):Uu("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Bu("string"==typeof t.token),this.p=t.token,new Ju(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function tl(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class el{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=tl(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function nl(t,e){return t<e?-1:t>e?1:0}function rl(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sl{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ku(zu.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ku(zu.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ku(zu.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ku(zu.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return sl.fromMillis(Date.now())}static fromDate(t){return sl.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new sl(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nl(this.nanoseconds,t.nanoseconds):nl(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class il{constructor(t){this.timestamp=t}static fromTimestamp(t){return new il(t)}static min(){return new il(new sl(0,0))}static max(){return new il(new sl(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ol{constructor(t,e,n){void 0===e?e=0:e>t.length&&$u(),void 0===n?n=t.length-e:n>t.length-e&&$u(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ol.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ol?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class al extends ol{construct(t,e,n){return new al(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ku(zu.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new al(e)}static emptyPath(){return new al([])}}const cl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ul extends ol{construct(t,e,n){return new ul(t,e,n)}static isValidIdentifier(t){return cl.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ul.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ul(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Ku(zu.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Ku(zu.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ku(zu.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new Ku(zu.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ul(e)}static emptyPath(){return new ul([])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ll{constructor(t){this.path=t}static fromPath(t){return new ll(al.fromString(t))}static fromName(t){return new ll(al.fromString(t).popFirst(5))}static empty(){return new ll(al.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===al.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return al.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ll(new al(t.slice()))}}function hl(t){return new dl(t.readTime,t.key,-1)}class dl{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new dl(il.min(),ll.empty(),-1)}static max(){return new dl(il.max(),ll.empty(),-1)}}function fl(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ll.comparator(t.documentKey,e.documentKey),0!==n?n:nl(t.largestBatchId,e.largestBatchId))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function pl(t){if(t.code!==zu.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Uu("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ml{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&$u(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ml(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ml?e:ml.resolve(e)}catch(t){return ml.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ml.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ml.reject(e)}static resolve(t){return new ml(((e,n)=>{e(t)}))}static reject(t){return new ml(((e,n)=>{n(t)}))}static waitFor(t){return new ml(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=ml.resolve(!1);for(const n of t)e=e.next((t=>t?ml.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new ml(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new ml(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}function gl(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yl{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function vl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _l(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */yl.ot=-1;class bl{constructor(t,e){this.comparator=t,this.root=e||Tl.EMPTY}insert(t,e){return new bl(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Tl.BLACK,null,null))}remove(t){return new bl(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Tl.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new El(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new El(this.root,t,this.comparator,!1)}getReverseIterator(){return new El(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new El(this.root,t,this.comparator,!0)}}class El{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Tl{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Tl.RED,this.left=null!=r?r:Tl.EMPTY,this.right=null!=s?s:Tl.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Tl(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Tl.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Tl.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Tl.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Tl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $u();if(this.right.isRed())throw $u();const t=this.left.check();if(t!==this.right.check())throw $u();return t+(this.isRed()?0:1)}}Tl.EMPTY=null,Tl.RED=!0,Tl.BLACK=!1,Tl.EMPTY=new class{constructor(){this.size=0}get key(){throw $u()}get value(){throw $u()}get color(){throw $u()}get left(){throw $u()}get right(){throw $u()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Tl(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Il{constructor(t){this.comparator=t,this.data=new bl(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new kl(this.data.getIterator())}getIteratorFrom(t){return new kl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Il))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Il(this.comparator);return e.data=t,e}}class kl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sl{constructor(t){this.fields=t,t.sort(ul.comparator)}static empty(){return new Sl([])}unionWith(t){let e=new Il(ul.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Sl(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return rl(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Al{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Al(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Al(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nl(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Al.EMPTY_BYTE_STRING=new Al("");const Cl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nl(t){if(Bu(!!t),"string"==typeof t){let e=0;const n=Cl.exec(t);if(Bu(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ol(t.seconds),nanos:Ol(t.nanos)}}function Ol(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Rl(t){return"string"==typeof t?Al.fromBase64String(t):Al.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Dl(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ll(t){const e=t.mapValue.fields.__previous_value__;return Dl(e)?Ll(e):e}function xl(t){const e=Nl(t.mapValue.fields.__local_write_time__.timestampValue);return new sl(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pl{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ml{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ml("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ml&&t.projectId===this.projectId&&t.database===this.database}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ul(t){return null==t}function Fl(t){return 0===t&&1/t==-1/0}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const jl={fields:{__type__:{stringValue:"__max__"}}};function Vl(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dl(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)?9007199254740991:10:$u()}function $l(t,e){if(t===e)return!0;const n=Vl(t);if(n!==Vl(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xl(t).isEqual(xl(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Nl(t.timestampValue),r=Nl(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Rl(t.bytesValue).isEqual(Rl(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ol(t.geoPointValue.latitude)===Ol(e.geoPointValue.latitude)&&Ol(t.geoPointValue.longitude)===Ol(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ol(t.integerValue)===Ol(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ol(t.doubleValue),r=Ol(e.doubleValue);return n===r?Fl(n)===Fl(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return rl(t.arrayValue.values||[],e.arrayValue.values||[],$l);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(vl(n)!==vl(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!$l(n[t],r[t])))return!1;return!0}(t,e);default:return $u()}}function Bl(t,e){return void 0!==(t.values||[]).find((t=>$l(t,e)))}function ql(t,e){if(t===e)return 0;const n=Vl(t),r=Vl(e);if(n!==r)return nl(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return nl(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ol(t.integerValue||t.doubleValue),r=Ol(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return zl(t.timestampValue,e.timestampValue);case 4:return zl(xl(t),xl(e));case 5:return nl(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Rl(t),r=Rl(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=nl(n[t],r[t]);if(0!==e)return e}return nl(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=nl(Ol(t.latitude),Ol(e.latitude));return 0!==n?n:nl(Ol(t.longitude),Ol(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=ql(n[t],r[t]);if(e)return e}return nl(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===jl&&e===jl)return 0;if(t===jl)return 1;if(e===jl)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let t=0;t<r.length&&t<i.length;++t){const e=nl(r[t],i[t]);if(0!==e)return e;const o=ql(n[r[t]],s[i[t]]);if(0!==o)return o}return nl(r.length,i.length)}(t.mapValue,e.mapValue);default:throw $u()}}function zl(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return nl(t,e);const n=Nl(t),r=Nl(e),s=nl(n.seconds,r.seconds);return 0!==s?s:nl(n.nanos,r.nanos)}function Kl(t){return Gl(t)}function Gl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Nl(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rl(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ll.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Gl(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Gl(t.fields[s])}`;return n+"}"}(t.mapValue):$u();var e,n}function Hl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wl(t){return!!t&&"integerValue"in t}function Ql(t){return!!t&&"arrayValue"in t}function Xl(t){return!!t&&"nullValue"in t}function Yl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jl(t){return!!t&&"mapValue"in t}function Zl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wl(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Zl(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zl(t.arrayValue.values[n]);return e}return Object.assign({},t)}class th{constructor(t){this.value=t}static empty(){return new th({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Jl(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zl(e)}setAll(t){let e=ul.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=Zl(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Jl(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $l(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Jl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){wl(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new th(Zl(this.value))}}function eh(t){const e=[];return wl(t.fields,((t,n)=>{const r=new ul([t]);if(Jl(n)){const t=eh(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Sl(e)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class nh{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new nh(t,0,il.min(),il.min(),th.empty(),0)}static newFoundDocument(t,e,n){return new nh(t,1,e,il.min(),n,0)}static newNoDocument(t,e){return new nh(t,2,e,il.min(),th.empty(),0)}static newUnknownDocument(t,e){return new nh(t,3,e,il.min(),th.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=th.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=th.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=il.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof nh&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new nh(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rh{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ut=null}}function sh(t,e=null,n=[],r=[],s=null,i=null,o=null){return new rh(t,e,n,r,s,i,o)}function ih(t){const e=qu(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Kl(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ul(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Kl(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Kl(t))).join(",")),e.ut=t}return e.ut}function oh(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wh(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!$l(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bh(t.startAt,e.startAt)&&bh(t.endAt,e.endAt)}function ah(t){return ll.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ch extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new uh(t,e,n):"array-contains"===e?new fh(t,n):"in"===e?new ph(t,n):"not-in"===e?new mh(t,n):"array-contains-any"===e?new gh(t,n):new ch(t,e,n)}static ct(t,e,n){return"in"===e?new lh(t,n):new hh(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(ql(e,this.value)):null!==e&&Vl(this.value)===Vl(e)&&this.at(ql(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return $u()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class uh extends ch{constructor(t,e,n){super(t,e,n),this.key=ll.fromName(n.referenceValue)}matches(t){const e=ll.comparator(t.key,this.key);return this.at(e)}}class lh extends ch{constructor(t,e){super(t,"in",e),this.keys=dh("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class hh extends ch{constructor(t,e){super(t,"not-in",e),this.keys=dh("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function dh(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ll.fromName(t.referenceValue)))}class fh extends ch{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ql(e)&&Bl(e.arrayValue,this.value)}}class ph extends ch{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Bl(this.value.arrayValue,e)}}class mh extends ch{constructor(t,e){super(t,"not-in",e)}matches(t){if(Bl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Bl(this.value.arrayValue,e)}}class gh extends ch{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ql(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Bl(this.value.arrayValue,t)))}}class yh{constructor(t,e){this.position=t,this.inclusive=e}}class vh{constructor(t,e="asc"){this.field=t,this.dir=e}}function wh(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function _h(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?ll.comparator(ll.fromName(o.referenceValue),n.key):ql(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function bh(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$l(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Eh{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Th(t){return new Eh(t)}function Ih(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function kh(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Sh(t){return null!==t.collectionGroup}function Ah(t){const e=qu(t);if(null===e.lt){e.lt=[];const t=kh(e),n=Ih(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new vh(t)),e.lt.push(new vh(ul.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new vh(ul.keyField(),t))}}}return e.lt}function Ch(t){const e=qu(t);if(!e.ft)if("F"===e.limitType)e.ft=sh(e.path,e.collectionGroup,Ah(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Ah(e)){const e="desc"===n.dir?"asc":"desc";t.push(new vh(n.field,e))}const n=e.endAt?new yh(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new yh(e.startAt.position,e.startAt.inclusive):null;e.ft=sh(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function Nh(t,e,n){return new Eh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oh(t,e){return oh(Ch(t),Ch(e))&&t.limitType===e.limitType}function Rh(t){return`${ih(Ch(t))}|lt:${t.limitType}`}function Dh(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Kl(e.value)}`;var e})).join(", ")}]`),Ul(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Kl(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Kl(t))).join(",")),`Target(${e})`}(Ch(t))}; limitType=${t.limitType})`}function Lh(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ll.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=_h(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Ah(t),e))&&!(t.endAt&&!function(t,e,n){const r=_h(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Ah(t),e))}(t,e)}function xh(t){return(e,n)=>{let r=!1;for(const s of Ah(t)){const t=Ph(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function Ph(t,e,n){const r=t.field.isKeyField()?ll.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?ql(r,s):$u()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $u()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Mh(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fl(e)?"-0":e}}function Uh(t){return{integerValue:""+t}}function Fh(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Fl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Uh(e):Mh(t,e)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jh{constructor(){this._=void 0}}function Vh(t,e,n){return t instanceof qh?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof zh?Kh(t,e):t instanceof Gh?Hh(t,e):function(t,e){const n=Bh(t,e),r=Qh(n)+Qh(t._t);return Wl(n)&&Wl(t._t)?Uh(r):Mh(t.wt,r)}(t,e)}function $h(t,e,n){return t instanceof zh?Kh(t,e):t instanceof Gh?Hh(t,e):n}function Bh(t,e){return t instanceof Wh?Wl(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class qh extends jh{}class zh extends jh{constructor(t){super(),this.elements=t}}function Kh(t,e){const n=Xh(e);for(const e of t.elements)n.some((t=>$l(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Gh extends jh{constructor(t){super(),this.elements=t}}function Hh(t,e){let n=Xh(e);for(const e of t.elements)n=n.filter((t=>!$l(t,e)));return{arrayValue:{values:n}}}class Wh extends jh{constructor(t,e){super(),this.wt=t,this._t=e}}function Qh(t){return Ol(t.integerValue||t.doubleValue)}function Xh(t){return Ql(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Yh{constructor(t,e){this.version=t,this.transformResults=e}}class Jh{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Jh}static exists(t){return new Jh(void 0,t)}static updateTime(t){return new Jh(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Zh(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class td{}function ed(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new hd(t.key,Jh.none()):new od(t.key,t.data,Jh.none());{const n=t.data,r=th.empty();let s=new Il(ul.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new ad(t.key,r,new Sl(s.toArray()),Jh.none())}}function nd(t,e,n){t instanceof od?function(t,e,n){const r=t.value.clone(),s=ud(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ad?function(t,e,n){if(!Zh(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=ud(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(cd(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function rd(t,e,n,r){return t instanceof od?function(t,e,n,r){if(!Zh(t.precondition,e))return n;const s=t.value.clone(),i=ld(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof ad?function(t,e,n,r){if(!Zh(t.precondition,e))return n;const s=ld(t.fieldTransforms,r,e),i=e.data;return i.setAll(cd(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Zh(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function sd(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Bh(r.transform,t||null);null!=s&&(null===n&&(n=th.empty()),n.set(r.field,s))}return n||null}function id(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&rl(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof zh&&e instanceof zh||t instanceof Gh&&e instanceof Gh?rl(t.elements,e.elements,$l):t instanceof Wh&&e instanceof Wh?$l(t._t,e._t):t instanceof qh&&e instanceof qh}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class od extends td{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ad extends td{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function cd(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ud(t,e,n){const r=new Map;Bu(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,$h(o,a,n[s]))}return r}function ld(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,Vh(t,i,e))}return r}class hd extends td{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dd extends td{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fd{constructor(t){this.count=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var pd,md;function gd(t){switch(t){default:return $u();case zu.CANCELLED:case zu.UNKNOWN:case zu.DEADLINE_EXCEEDED:case zu.RESOURCE_EXHAUSTED:case zu.INTERNAL:case zu.UNAVAILABLE:case zu.UNAUTHENTICATED:return!1;case zu.INVALID_ARGUMENT:case zu.NOT_FOUND:case zu.ALREADY_EXISTS:case zu.PERMISSION_DENIED:case zu.FAILED_PRECONDITION:case zu.ABORTED:case zu.OUT_OF_RANGE:case zu.UNIMPLEMENTED:case zu.DATA_LOSS:return!0}}function yd(t){if(void 0===t)return Fu("GRPC error has no .code"),zu.UNKNOWN;switch(t){case pd.OK:return zu.OK;case pd.CANCELLED:return zu.CANCELLED;case pd.UNKNOWN:return zu.UNKNOWN;case pd.DEADLINE_EXCEEDED:return zu.DEADLINE_EXCEEDED;case pd.RESOURCE_EXHAUSTED:return zu.RESOURCE_EXHAUSTED;case pd.INTERNAL:return zu.INTERNAL;case pd.UNAVAILABLE:return zu.UNAVAILABLE;case pd.UNAUTHENTICATED:return zu.UNAUTHENTICATED;case pd.INVALID_ARGUMENT:return zu.INVALID_ARGUMENT;case pd.NOT_FOUND:return zu.NOT_FOUND;case pd.ALREADY_EXISTS:return zu.ALREADY_EXISTS;case pd.PERMISSION_DENIED:return zu.PERMISSION_DENIED;case pd.FAILED_PRECONDITION:return zu.FAILED_PRECONDITION;case pd.ABORTED:return zu.ABORTED;case pd.OUT_OF_RANGE:return zu.OUT_OF_RANGE;case pd.UNIMPLEMENTED:return zu.UNIMPLEMENTED;case pd.DATA_LOSS:return zu.DATA_LOSS;default:return $u()}}(md=pd||(pd={}))[md.OK=0]="OK",md[md.CANCELLED=1]="CANCELLED",md[md.UNKNOWN=2]="UNKNOWN",md[md.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",md[md.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",md[md.NOT_FOUND=5]="NOT_FOUND",md[md.ALREADY_EXISTS=6]="ALREADY_EXISTS",md[md.PERMISSION_DENIED=7]="PERMISSION_DENIED",md[md.UNAUTHENTICATED=16]="UNAUTHENTICATED",md[md.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",md[md.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",md[md.ABORTED=10]="ABORTED",md[md.OUT_OF_RANGE=11]="OUT_OF_RANGE",md[md.UNIMPLEMENTED=12]="UNIMPLEMENTED",md[md.INTERNAL=13]="INTERNAL",md[md.UNAVAILABLE=14]="UNAVAILABLE",md[md.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class vd{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){wl(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return _l(this.inner)}size(){return this.innerSize}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const wd=new bl(ll.comparator);function _d(){return wd}const bd=new bl(ll.comparator);function Ed(...t){let e=bd;for(const n of t)e=e.insert(n.key,n);return e}function Td(t){let e=bd;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Id(){return Sd()}function kd(){return Sd()}function Sd(){return new vd((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ad=new bl(ll.comparator),Cd=new Il(ll.comparator);function Nd(...t){let e=Cd;for(const n of t)e=e.add(n);return e}const Od=new Il(nl);function Rd(){return Od}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dd{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Ld.createSynthesizedTargetChangeForCurrentChange(t,e)),new Dd(il.min(),n,Rd(),_d(),Nd())}}class Ld{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Ld(Al.EMPTY_BYTE_STRING,e,Nd(),Nd(),Nd())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xd{constructor(t,e,n,r){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=r}}class Pd{constructor(t,e){this.targetId=t,this.It=e}}class Md{constructor(t,e,n=Al.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ud{constructor(){this.Tt=0,this.Et=Vd(),this.At=Al.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=Nd(),e=Nd(),n=Nd();return this.Et.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:$u()}})),new Ld(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=Vd()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Fd{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=_d(),this.Bt=jd(),this.Lt=new Il(nl)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:$u()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,r=this.Ht(e);if(r){const t=r.target;if(ah(t))if(0===n){const n=new ll(t.path);this.Kt(e,n,nh.newNoDocument(n,il.min()))}else Bu(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,r)=>{const s=this.Ht(r);if(s){if(n.current&&ah(s.target)){const e=new ll(s.target.path);null!==this.$t.get(e)||this.Xt(r,e)||this.Kt(r,e,nh.newNoDocument(e,t))}n.vt&&(e.set(r,n.St()),n.Dt())}}));let n=Nd();this.Bt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const r=new Dd(t,e,this.Lt,this.$t,n);return this.$t=_d(),this.Bt=jd(),this.Lt=new Il(nl),r}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,e)?r.Ct(e,1):r.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new Ud,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new Il(nl),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||Uu("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new Ud),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function jd(){return new bl(ll.comparator)}function Vd(){return new bl(ll.comparator)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const $d={asc:"ASCENDING",desc:"DESCENDING"},Bd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class qd{constructor(t,e){this.databaseId=t,this.dt=e}}function zd(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kd(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Gd(t,e){return zd(t,e.toTimestamp())}function Hd(t){return Bu(!!t),il.fromTimestamp(function(t){const e=Nl(t);return new sl(e.seconds,e.nanos)}(t))}function Wd(t,e){return function(t){return new al(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Qd(t){const e=al.fromString(t);return Bu(mf(e)),e}function Xd(t,e){return Wd(t.databaseId,e.path)}function Yd(t,e){const n=Qd(e);if(n.get(1)!==t.databaseId.projectId)throw new Ku(zu.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ku(zu.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ll(tf(n))}function Jd(t,e){return Wd(t.databaseId,e)}function Zd(t){return new al(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tf(t){return Bu(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ef(t,e,n){return{name:Xd(t,e),fields:n.value.mapValue.fields}}function nf(t,e){let n;if(e instanceof od)n={update:ef(t,e.key,e.value)};else if(e instanceof hd)n={delete:Xd(t,e.key)};else if(e instanceof ad)n={update:ef(t,e.key,e.data),updateMask:pf(e.fieldMask)};else{if(!(e instanceof dd))return $u();n={verify:Xd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof qh)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof zh)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Gh)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Wh)return{fieldPath:e.field.canonicalString(),increment:n._t};throw $u()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Gd(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:$u()}(t,e.precondition)),n}function rf(t,e){return{documents:[Jd(t,e.path)]}}function sf(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Jd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Yl(t.value))return{unaryFilter:{field:lf(t.field),op:"IS_NAN"}};if(Xl(t.value))return{unaryFilter:{field:lf(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Yl(t.value))return{unaryFilter:{field:lf(t.field),op:"IS_NOT_NAN"}};if(Xl(t.value))return{unaryFilter:{field:lf(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lf(t.field),op:uf(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:lf(t.field),direction:cf(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.dt||Ul(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function of(t){let e=function(t){const e=Qd(t);return 4===e.length?al.emptyPath():tf(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Bu(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=af(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new vh(hf(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ul(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new yh(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new yh(n,e)}(n.endAt)),function(t,e,n,r,s,i,o,a){return new Eh(t,e,n,r,s,i,o,a)}(e,s,o,i,a,"F",c,u)}function af(t){return t?void 0!==t.unaryFilter?[ff(t)]:void 0!==t.fieldFilter?[df(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>af(t))).reduce(((t,e)=>t.concat(e))):$u():[]}function cf(t){return $d[t]}function uf(t){return Bd[t]}function lf(t){return{fieldPath:t.canonicalString()}}function hf(t){return ul.fromServerFormat(t.fieldPath)}function df(t){return ch.create(hf(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $u()}}(t.fieldFilter.op),t.fieldFilter.value)}function ff(t){switch(t.unaryFilter.op){case"IS_NAN":const e=hf(t.unaryFilter.field);return ch.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=hf(t.unaryFilter.field);return ch.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=hf(t.unaryFilter.field);return ch.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=hf(t.unaryFilter.field);return ch.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $u()}}function pf(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function mf(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gf{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&nd(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=rd(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=rd(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=kd();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=ed(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(il.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Nd())}isEqual(t){return this.batchId===t.batchId&&rl(this.mutations,t.mutations,((t,e)=>id(t,e)))&&rl(this.baseMutations,t.baseMutations,((t,e)=>id(t,e)))}}class yf{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Bu(t.mutations.length===n.length);let r=Ad;const s=t.mutations;for(let t=0;t<s.length;t++)r=r.insert(s[t].key,n[t].version);return new yf(t,e,n,r)}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wf{constructor(t,e,n,r,s=il.min(),i=il.min(),o=Al.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new wf(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new wf(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new wf(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _f{constructor(t){this.ne=t}}function bf(t){const e=of({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Nh(e,e.limit,"L"):e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ef{constructor(){this.ze=new Tf}addToCollectionParentIndex(t,e){return this.ze.add(e),ml.resolve()}getCollectionParents(t,e){return ml.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return ml.resolve()}deleteFieldIndex(t,e){return ml.resolve()}getDocumentsMatchingTarget(t,e){return ml.resolve(null)}getIndexType(t,e){return ml.resolve(0)}getFieldIndexes(t,e){return ml.resolve([])}getNextCollectionGroupToUpdate(t){return ml.resolve(null)}getMinOffset(t,e){return ml.resolve(dl.min())}getMinOffsetFromCollectionGroup(t,e){return ml.resolve(dl.min())}updateCollectionGroup(t,e,n){return ml.resolve()}updateIndexEntries(t,e){return ml.resolve()}}class Tf{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Il(al.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Il(al.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class If{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new If(0)}static Rn(){return new If(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class kf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sf{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&rd(n.mutation,t,Sl.empty(),sl.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Nd()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Nd()){const r=Id();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Ed();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Id();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Nd())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=_d();const i=Sd(),o=Sd();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof ad)?s=s.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),rd(o.mutation,e,o.mutation.getFieldMask(),sl.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new kf(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Sd();let r=new bl(((t,e)=>t-e)),s=Nd();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Sl.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||Nd()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=kd();c.forEach((t=>{if(!s.has(t)){const r=ed(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return ml.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ll.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Sh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):ml.resolve(Id());let o=-1,a=s;return i.next((e=>ml.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?ml.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,Nd()))).next((t=>({batchId:o,changes:Td(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ll(e)).next((t=>{let e=Ed();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let s=Ed();return this.indexManager.getCollectionParents(t,r).next((i=>ml.forEach(i,(i=>{const o=function(t,e){return new Eh(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,nh.newInvalidDocument(n)))}));let n=Ed();return r.forEach(((r,s)=>{const i=t.get(r);void 0!==i&&rd(i.mutation,s,Sl.empty(),sl.now()),Lh(e,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):ml.resolve(nh.newInvalidDocument(e))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Af{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return ml.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Hd(n.createTime)}),ml.resolve()}getNamedQuery(t,e){return ml.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:bf(t.bundledQuery),readTime:Hd(t.readTime)}}(e)),ml.resolve()}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cf{constructor(){this.overlays=new bl(ll.comparator),this.Xn=new Map}getOverlay(t,e){return ml.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Id();return ml.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ie(t,e,r)})),ml.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),ml.resolve()}getOverlaysForCollection(t,e,n){const r=Id(),s=e.length+1,i=new ll(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return ml.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new bl(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Id(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Id(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return ml.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new vf(e,n));let s=this.Xn.get(e);void 0===s&&(s=Nd(),this.Xn.set(e,s)),this.Xn.set(e,s.add(n.key))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Nf{constructor(){this.Zn=new Il(Of.ts),this.es=new Il(Of.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Of(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Of(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new ll(new al([])),n=new Of(e,t),r=new Of(e,t+1),s=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),s.push(t.key)})),s}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new ll(new al([])),n=new Of(e,t),r=new Of(e,t+1);let s=Nd();return this.es.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Of(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Of{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return ll.comparator(t.key,e.key)||nl(t.ls,e.ls)}static ns(t,e){return nl(t.ls,e.ls)||ll.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new Il(Of.ts)}checkEmpty(t){return ml.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new gf(s,e,n,r);this.mutationQueue.push(i);for(const e of r)this.ds=this.ds.add(new Of(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return ml.resolve(i)}lookupMutationBatch(t,e){return ml.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),s=r<0?0:r;return ml.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ml.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return ml.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Of(e,0),r=new Of(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(t=>{const e=this._s(t.ls);s.push(e)})),ml.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Il(nl);return e.forEach((t=>{const e=new Of(t,0),r=new Of(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),ml.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;ll.isDocumentKey(s)||(s=s.child(""));const i=new Of(new ll(s),0);let o=new Il(nl);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),i),ml.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Bu(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return ml.forEach(e.mutations,(r=>{const s=new Of(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new Of(e,0),r=this.ds.firstAfterOrEqual(n);return ml.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ml.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Df{constructor(t){this.ps=t,this.docs=new bl(ll.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ml.resolve(n?n.document.mutableCopy():nh.newInvalidDocument(e))}getEntries(t,e){let n=_d();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():nh.newInvalidDocument(t))})),ml.resolve(n)}getAllFromCollection(t,e,n){let r=_d();const s=new ll(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||fl(hl(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return ml.resolve(r)}getAllFromCollectionGroup(t,e,n,r){$u()}Is(t,e){return ml.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Lf(this)}getSize(t){return ml.resolve(this.size)}}class Lf extends class{constructor(){this.changes=new vd((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,nh.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ml.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)})),ml.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xf{constructor(t){this.persistence=t,this.Ts=new vd((t=>ih(t)),oh),this.lastRemoteSnapshotVersion=il.min(),this.highestTargetId=0,this.Es=0,this.As=new Nf,this.targetCount=0,this.Rs=If.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),ml.resolve()}getLastRemoteSnapshotVersion(t){return ml.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ml.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),ml.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),ml.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new If(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,ml.resolve()}updateTargetData(t,e){return this.vn(e),ml.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,ml.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),ml.waitFor(s).next((()=>r))}getTargetCount(t){return ml.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return ml.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),ml.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),ml.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),ml.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return ml.resolve(n)}containsKey(t,e){return ml.resolve(this.As.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pf{constructor(t,e){this.bs={},this.overlays={},this.Ps=new yl(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new xf(this),this.indexManager=new Ef,this.remoteDocumentCache=function(t){return new Df(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new _f(e),this.Ds=new Af(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Cf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new Rf(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Uu("MemoryPersistence","Starting transaction:",t);const r=new Mf(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((t=>this.referenceDelegate.xs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ns(t,e){return ml.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Mf extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class Uf{constructor(t){this.persistence=t,this.ks=new Nf,this.Os=null}static Ms(t){return new Uf(t)}get Fs(){if(this.Os)return this.Os;throw $u()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),ml.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),ml.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),ml.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ml.forEach(this.Fs,(n=>{const r=ll.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r,il.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return ml.or([()=>ml.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ff{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}static Vi(t,e){let n=Nd(),r=Nd();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Ff(t,e.fromCache,n,r)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jf{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next((s=>s||this.xi(t,e,r,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return ml.resolve(null)}xi(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||r.isEqual(il.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((s=>{const i=this.ki(e,s);return this.Oi(e,i,n,r)?this.Ni(t,e):(Mu()<=Ye.DEBUG&&Uu("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Dh(e)),this.Mi(t,i,e,function(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=il.fromTimestamp(1e9===r?new sl(n+1,0):new sl(n,r));return new dl(s,ll.empty(),e)}(r,-1)))}))}ki(t,e){let n=new Il(xh(t));return e.forEach(((e,r)=>{Lh(t,r)&&(n=n.add(r))})),n}Oi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(t,e){return Mu()<=Ye.DEBUG&&Uu("QueryEngine","Using full collection scan to execute query:",Dh(e)),this.Di.getDocumentsMatchingQuery(t,e,dl.min())}Mi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vf{constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new bl(nl),this.Bi=new vd((t=>ih(t)),oh),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Sf(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}async function $f(t,e){const n=qu(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=Nd();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function Bf(t){const e=qu(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function qf(t,e){const n=qu(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Al.EMPTY_BYTE_STRING,il.min()).withLastLimboFreeSnapshotVersion(il.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Vs.updateTargetData(t,u))}));let a=_d(),c=Nd();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n){let r=Nd(),s=Nd();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=_d();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(il.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Uu("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:r,Qi:s}}))}(t,i,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!r.isEqual(il.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return ml.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=s,t)))}function zf(t,e){const n=qu(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}async function Kf(t,e,n){const r=qu(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!gl(t))throw t;Uu("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function Gf(t,e,n){const r=qu(t);let s=il.min(),i=Nd();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=qu(t),s=r.Bi.get(n);return void 0!==s?ml.resolve(r.$i.get(s)):r.Vs.getTargetData(e,n)}(r,t,Ch(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.Fi.getDocumentsMatchingQuery(t,e,n?s:il.min(),n?i:Nd()))).next((t=>(function(t,e,n){let r=il.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Li.set(e,r)}(r,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,ji:i})))))}class Hf{constructor(){this.activeTargetIds=Rd()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wf{constructor(){this.Fr=new Hf,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Hf,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qf{Br(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xf{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Uu("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Uu("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Yf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jf{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,s){const i=this.oo(t,e);Uu("RestConnection","Sending: ",i,n);const o={};return this.uo(o,r,s),this.co(t,i,o,n).then((t=>(Uu("RestConnection","Received: ",t),t)),(e=>{throw ju("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}ao(t,e,n,r,s){return this.ro(t,e,n,r,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+xu,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Yf[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise(((s,i)=>{const o=new Ru;o.listenOnce(ku.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Iu.NO_ERROR:const e=o.getResponseJson();Uu("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Iu.TIMEOUT:Uu("Connection",'RPC "'+t+'" timed out'),i(new Ku(zu.DEADLINE_EXCEEDED,"Request time out"));break;case Iu.HTTP_ERROR:const n=o.getStatus();if(Uu("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(zu).indexOf(e)>=0?e:zu.UNKNOWN}(t.status);i(new Ku(e,t.message))}else i(new Ku(zu.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Ku(zu.UNAVAILABLE,"Connection failed."));break;default:$u()}}finally{Uu("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new wu,i=fa(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Nu({})),this.uo(o.initMessageHeaders,e,n),De()||xe()||Re().indexOf("Electron/")>=0||Pe()||Re().indexOf("MSAppHost/")>=0||Le()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Uu("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new Jf({jr:t=>{l?Uu("Connection","Not sending because WebChannel is closed:",t):(u||(Uu("Connection","Opening WebChannel transport."),c.open(),u=!0),Uu("Connection","WebChannel sending:",t),c.send(t))},Wr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,Ou.EventType.OPEN,(()=>{l||Uu("Connection","WebChannel transport opened.")})),d(c,Ou.EventType.CLOSE,(()=>{l||(l=!0,Uu("Connection","WebChannel transport closed"),h.eo())})),d(c,Ou.EventType.ERROR,(t=>{l||(l=!0,ju("Connection","WebChannel transport errored:",t),h.eo(new Ku(zu.UNAVAILABLE,"The operation could not be completed")))})),d(c,Ou.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Bu(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){Uu("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=pd[t];if(void 0!==e)return yd(e)}(t),n=s.message;void 0===e&&(e=zu.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),l=!0,h.eo(new Ku(e,n)),c.close()}else Uu("Connection","WebChannel received:",n),h.no(n)}})),d(i,Su.STAT_EVENT,(t=>{t.stat===Au?Uu("Connection","Detected buffering proxy"):t.stat===Cu&&Uu("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Zr()}),0),h}}function tp(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ep(t){return new qd(t,!0)}class np{constructor(t,e,n=1e3,r=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&Uu("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rp{constructor(t,e,n,r,s,i,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new np(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===zu.RESOURCE_EXHAUSTED?(Fu(e.toString()),Fu("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===zu.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Ku(zu.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Uu("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Uu("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sp extends rp{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.wt=s}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:$u()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.dt?(Bu(void 0===e||"string"==typeof e),Al.fromBase64String(e||"")):(Bu(void 0===e||e instanceof Uint8Array),Al.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?zu.UNKNOWN:yd(t.code);return new Ku(e,t.message||"")}(o);n=new Md(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yd(t,r.document.name),i=Hd(r.document.updateTime),o=new th({mapValue:{fields:r.document.fields}}),a=nh.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new xd(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Yd(t,r.document),i=r.readTime?Hd(r.readTime):il.min(),o=nh.newNoDocument(s,i),a=r.removedTargetIds||[];n=new xd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Yd(t,r.document),i=r.removedTargetIds||[];n=new xd([],i,s,null)}else{if(!("filter"in e))return $u();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new fd(r),i=t.targetId;n=new Pd(i,s)}}return n}(this.wt,t),n=function(t){if(!("targetChange"in t))return il.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?il.min():e.readTime?Hd(e.readTime):il.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=Zd(this.wt),e.addTarget=function(t,e){let n;const r=e.target;return n=ah(r)?{documents:rf(t,r)}:{query:sf(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Kd(t,e.resumeToken):e.snapshotVersion.compareTo(il.min())>0&&(n.readTime=zd(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $u()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=Zd(this.wt),e.removeTarget=t,this.Mo(e)}}class ip extends rp{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Bu(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=function(t,e){return t&&t.length>0?(Bu(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Hd(t.updateTime):Hd(e);return n.isEqual(il.min())&&(n=Hd(e)),new Yh(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Hd(t.commitTime);return this.listener.Jo(n,e)}return Bu(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Zd(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>nf(this.wt,t)))};this.Mo(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class op extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new Ku(zu.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ro(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===zu.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ku(zu.UNKNOWN,t.toString())}))}ao(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ao(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===zu.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ku(zu.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class ap{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Fu(e),this.su=!1):Uu("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cp{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{yp(this)&&(Uu("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=qu(t);e.lu.add(4),await lp(e),e._u.set("Unknown"),e.lu.delete(4),await up(e)}(this))}))})),this._u=new ap(n,r)}}async function up(t){if(yp(t))for(const e of t.fu)await e(!0)}async function lp(t){for(const e of t.fu)await e(!1)}function hp(t,e){const n=qu(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),gp(n)?mp(n):xp(n).Co()&&fp(n,e))}function dp(t,e){const n=qu(t),r=xp(n);n.hu.delete(e),r.Co()&&pp(n,e),0===n.hu.size&&(r.Co()?r.ko():yp(n)&&n._u.set("Unknown"))}function fp(t,e){t.wu.Nt(e.targetId),xp(t).Qo(e)}function pp(t,e){t.wu.Nt(e),xp(t).jo(e)}function mp(t){t.wu=new Fd({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),xp(t).start(),t._u.iu()}function gp(t){return yp(t)&&!xp(t).Do()&&t.hu.size>0}function yp(t){return 0===qu(t).lu.size}function vp(t){t.wu=void 0}async function wp(t){t.hu.forEach(((e,n)=>{fp(t,e)}))}async function _p(t,e){vp(t),gp(t)?(t._u.uu(e),mp(t)):t._u.set("Unknown")}async function bp(t,e,n){if(t._u.set("Online"),e instanceof Md&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){Uu("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ep(t,n)}else if(e instanceof xd?t.wu.Ut(e):e instanceof Pd?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(il.min()))try{const e=await Bf(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.hu.get(r);s&&t.hu.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(Al.EMPTY_BYTE_STRING,n.snapshotVersion)),pp(t,e);const r=new wf(n.target,e,1,n.sequenceNumber);fp(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Uu("RemoteStore","Failed to raise snapshot:",e),await Ep(t,e)}}async function Ep(t,e,n){if(!gl(e))throw e;t.lu.add(1),await lp(t),t._u.set("Offline"),n||(n=()=>Bf(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Uu("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await up(t)}))}function Tp(t,e){return e().catch((n=>Ep(t,n,e)))}async function Ip(t){const e=qu(t),n=Pp(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;kp(e);)try{const t=await zf(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,Sp(e,t)}catch(t){await Ep(e,t)}Ap(e)&&Cp(e)}function kp(t){return yp(t)&&t.au.length<10}function Sp(t,e){t.au.push(e);const n=Pp(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Ap(t){return yp(t)&&!Pp(t).Do()&&t.au.length>0}function Cp(t){Pp(t).start()}async function Np(t){Pp(t).Xo()}async function Op(t){const e=Pp(t);for(const n of t.au)e.Ho(n.mutations)}async function Rp(t,e,n){const r=t.au.shift(),s=yf.from(r,e,n);await Tp(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ip(t)}async function Dp(t,e){e&&Pp(t).zo&&await async function(t,e){if(gd(n=e.code)&&n!==zu.ABORTED){const n=t.au.shift();Pp(t).No(),await Tp(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ip(t)}var n}(t,e),Ap(t)&&Cp(t)}async function Lp(t,e){const n=qu(t);n.asyncQueue.verifyOperationInProgress(),Uu("RemoteStore","RemoteStore received new credentials");const r=yp(n);n.lu.add(3),await lp(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await up(n)}function xp(t){return t.mu||(t.mu=function(t,e,n){const r=qu(t);return r.tu(),new sp(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(t.datastore,t.asyncQueue,{zr:wp.bind(null,t),Jr:_p.bind(null,t),Go:bp.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),gp(t)?mp(t):t._u.set("Unknown")):(await t.mu.stop(),vp(t))}))),t.mu}function Pp(t){return t.gu||(t.gu=function(t,e,n){const r=qu(t);return r.tu(),new ip(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:Np.bind(null,t),Jr:Dp.bind(null,t),Yo:Op.bind(null,t),Jo:Rp.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await Ip(t)):(await t.gu.stop(),t.au.length>0&&(Uu("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Mp{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Gu,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new Mp(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ku(zu.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Up(t,e){if(Fu("AsyncQueue",`${e}: ${t}`),gl(t))return new Ku(zu.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fp{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ll.comparator(e.key,n.key):(t,e)=>ll.comparator(t.key,e.key),this.keyedMap=Ed(),this.sortedSet=new bl(this.comparator)}static emptySet(t){return new Fp(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Fp))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Fp;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jp{constructor(){this.yu=new bl(ll.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):$u():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Vp{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Vp(t,e,Fp.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Oh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $p{constructor(){this.Iu=void 0,this.listeners=[]}}class Bp{constructor(){this.queries=new vd((t=>Rh(t)),Oh),this.onlineState="Unknown",this.Tu=new Set}}async function qp(t,e){const n=qu(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new $p),s)try{i.Iu=await n.onListen(r)}catch(t){const n=Up(t,`Initialization of query '${Dh(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Hp(n)}async function zp(t,e){const n=qu(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Kp(t,e){const n=qu(t);let r=!1;for(const t of e){const e=t.query,s=n.queries.get(e);if(s){for(const e of s.listeners)e.Au(t)&&(r=!0);s.Iu=t}}r&&Hp(n)}function Gp(t,e,n){const r=qu(t),s=r.queries.get(e);if(s)for(const t of s.listeners)t.onError(n);r.queries.delete(e)}function Hp(t){t.Tu.forEach((t=>{t.next()}))}class Wp{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Vp(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Du&&n||t.docs.isEmpty()&&"Offline"!==e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=Vp.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qp{constructor(t){this.key=t}}class Xp{constructor(t){this.key=t}}class Yp{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=Nd(),this.mutatedKeys=Nd(),this.Lu=xh(t),this.Uu=new Fp(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new jp,r=e?e.Uu:this.Uu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=Lh(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Uu:i,Gu:n,Oi:o,mutatedKeys:s}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const s=t.Gu.pu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $u()}};return n(t)-n(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const i=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new Vp(this.query,t.Uu,r,s,t.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new jp,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=Nd(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Xp(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Qp(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=Nd();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return Vp.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Jp{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Zp{constructor(t){this.key=t,this.Xu=!1}}class tm{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new vd((t=>Rh(t)),Oh),this.ec=new Map,this.nc=new Set,this.sc=new bl(ll.comparator),this.ic=new Map,this.rc=new Nf,this.oc={},this.uc=new Map,this.cc=If.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function em(t,e){const n=function(t){const e=qu(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=om.bind(null,e),e.Zu.Go=Kp.bind(null,e.eventManager),e.Zu.lc=Gp.bind(null,e.eventManager),e}(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const t=await function(t,e){const n=qu(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Vs.getTargetData(t,e).next((s=>s?(r=s,ml.resolve(r)):n.Vs.allocateTargetId(t).next((s=>(r=new wf(e,s,0,t.currentSequenceNumber),n.Vs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.$i.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}(n.localStore,Ch(e));n.isPrimaryClient&&hp(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await async function(t,e,n,r){t.hc=(e,n,r)=>async function(t,e,n,r){let s=e.view.Ku(n);s.Oi&&(s=await Gf(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return fm(t,e.targetId,o.zu),o.snapshot}(t,e,n,r);const s=await Gf(t.localStore,e,!0),i=new Yp(e,s.ji),o=i.Ku(s.documents),a=Ld.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);fm(t,n,c.zu);const u=new Jp(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}(n,e,r,"current"===i)}return s}async function nm(t,e){const n=qu(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter((t=>!Oh(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Kf(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),dp(n.remoteStore,r.targetId),hm(n,r.targetId)})).catch(pl)):(hm(n,r.targetId),await Kf(n.localStore,r.targetId,!0))}async function rm(t,e,n){const r=function(t){const e=qu(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=am.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cm.bind(null,e),e}(t);try{const t=await function(t,e){const n=qu(t),r=sl.now(),s=e.reduce(((t,e)=>t.add(e.key)),Nd());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=_d(),c=Nd();return n.Ui.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=sd(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new ad(t.key,e,eh(e.value.mapValue),Jh.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Td(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new bl(nl)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await gm(r,t.changes),await Ip(r.remoteStore)}catch(t){const e=Up(t,"Failed to persist write");n.reject(e)}}async function sm(t,e){const n=qu(t);try{const t=await qf(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ic.get(e);r&&(Bu(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?Bu(r.Xu):t.removedDocuments.size>0&&(Bu(r.Xu),r.Xu=!1))})),await gm(n,t,e)}catch(t){await pl(t)}}function im(t,e,n){const r=qu(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach(((n,r)=>{const s=r.view.Eu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=qu(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(r=!0)})),r&&Hp(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function om(t,e,n){const r=qu(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let t=new bl(ll.comparator);t=t.insert(i,nh.newNoDocument(i,il.min()));const n=Nd().add(i),s=new Dd(il.min(),new Map,new Il(nl),t,n);await sm(r,s),r.sc=r.sc.remove(i),r.ic.delete(e),mm(r)}else await Kf(r.localStore,e,!1).then((()=>hm(r,e,n))).catch(pl)}async function am(t,e){const n=qu(t),r=e.batch.batchId;try{const t=await function(t,e){const n=qu(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=ml.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Bu(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Nd();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);lm(n,r,null),um(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gm(n,t)}catch(t){await pl(t)}}async function cm(t,e,n){const r=qu(t);try{const t=await function(t,e){const n=qu(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Bu(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);lm(r,e,n),um(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await gm(r,t)}catch(n){await pl(n)}}function um(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function lm(t,e,n){const r=qu(t);let s=r.oc[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function hm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||dm(t,e)}))}function dm(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(dp(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),mm(t))}function fm(t,e,n){for(const r of n)r instanceof Qp?(t.rc.addReference(r.key,e),pm(t,r)):r instanceof Xp?(Uu("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||dm(t,r.key)):$u()}function pm(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(Uu("SyncEngine","New document in limbo: "+n),t.nc.add(r),mm(t))}function mm(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new ll(al.fromString(e)),r=t.cc.next();t.ic.set(r,new Zp(n)),t.sc=t.sc.insert(n,r),hp(t.remoteStore,new wf(Ch(Th(n.path)),r,2,yl.ot))}}async function gm(t,e,n){const r=qu(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((t,a)=>{o.push(r.hc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=Ff.Vi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.Zu.Go(s),await async function(t,e){const n=qu(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ml.forEach(e,(e=>ml.forEach(e.Pi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>ml.forEach(e.vi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!gl(t))throw t;Uu("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(e,s)}}}(r.localStore,i))}async function ym(t,e){const n=qu(t);if(!n.currentUser.isEqual(e)){Uu("SyncEngine","User change. New user:",e.toKey());const t=await $f(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Ku(zu.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.uc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await gm(n,t.Ki)}}function vm(t,e){const n=qu(t),r=n.ic.get(e);if(r&&r.Xu)return Nd().add(r.key);{let t=Nd();const r=n.ec.get(e);if(!r)return t;for(const e of r){const r=n.tc.get(e);t=t.unionWith(r.view.qu)}return t}}class wm{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=ep(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return function(t,e,n,r){return new Vf(t,e,n,r)}(this.persistence,new jf,t.initialUser,this.wt)}_c(t){return new Pf(Uf.Ms,this.wt)}dc(t){return new Wf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _m{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>im(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ym.bind(null,this.syncEngine),await async function(t,e){const n=qu(t);e?(n.lu.delete(2),await up(n)):e||(n.lu.add(2),await lp(n),n._u.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Bp}createDatastore(t){const e=ep(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Zf(r));var r;return function(t,e,n,r){return new op(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>im(this.syncEngine,t,0),i=Xf.V()?new Xf:new Qf,new cp(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new tm(t,e,n,r,s,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=qu(t);Uu("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await lp(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Em{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Ku(zu.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=qu(t),r=Zd(n.wt)+"/documents",s={documents:e.map((t=>Xd(n.wt,t)))},i=await n.ao("BatchGetDocuments",r,s),o=new Map;i.forEach((t=>{const e=function(t,e){return"found"in e?function(t,e){Bu(!!e.found),e.found.name,e.found.updateTime;const n=Yd(t,e.found.name),r=Hd(e.found.updateTime),s=new th({mapValue:{fields:e.found.fields}});return nh.newFoundDocument(n,r,s)}(t,e):"missing"in e?function(t,e){Bu(!!e.missing),Bu(!!e.readTime);const n=Yd(t,e.missing),r=Hd(e.readTime);return nh.newNoDocument(n,r)}(t,e):$u()}(n.wt,t);o.set(e.key.toString(),e)}));const a=[];return e.forEach((t=>{const e=o.get(t.toString());Bu(!!e),a.push(e)})),a}(this.datastore,t);return e.forEach((t=>this.recordVersion(t))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new hd(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((t,e)=>{const n=ll.fromPath(e);this.mutations.push(new dd(n,this.precondition(n)))})),await async function(t,e){const n=qu(t),r=Zd(n.wt)+"/documents",s={writes:e.map((t=>nf(n.wt,t)))};await n.ro("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw $u();e=il.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new Ku(zu.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?Jh.updateTime(e):Jh.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(il.min()))throw new Ku(zu.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Jh.updateTime(e)}return Jh.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tm{constructor(t,e,n,r,s){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=r,this.deferred=s,this.Dc=n.maxAttempts,this.So=new np(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io((async()=>{const t=new Em(this.datastore),e=this.xc(t);e&&e.then((e=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(e)})).catch((t=>{this.Nc(t)}))))})).catch((t=>{this.Nc(t)}))}))}xc(t){try{const e=this.updateFunction(t);return!Ul(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Nc(t){this.Dc>0&&this.kc(t)?(this.Dc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Cc(),Promise.resolve())))):this.deferred.reject(t)}kc(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!gd(e)}return!1}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Im{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Lu.UNAUTHENTICATED,this.clientId=el.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Uu("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Uu("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ku(zu.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gu;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Up(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function km(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(Uu("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),Uu("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await $f(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new wm)),t.offlineComponents}(t);Uu("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Lp(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Lp(e.remoteStore,n))),t.onlineComponents=e}async function Sm(t){return t.onlineComponents||(Uu("FirestoreClient","Using default OnlineComponentProvider"),await km(t,new _m)),t.onlineComponents}async function Am(t){const e=await Sm(t),n=e.eventManager;return n.onListen=em.bind(null,e.syncEngine),n.onUnlisten=nm.bind(null,e.syncEngine),n}const Cm=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Nm(t,e,n){if(!n)throw new Ku(zu.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Om(t){if(!ll.isDocumentKey(t))throw new Ku(zu.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rm(t){if(ll.isDocumentKey(t))throw new Ku(zu.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dm(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":$u()}function Lm(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ku(zu.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dm(t);throw new Ku(zu.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class xm{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Ku(zu.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ku(zu.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new Ku(zu.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pm{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xm({}),this._settingsFrozen=!1,t instanceof Ml?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ku(zu.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ml(t.options.projectId)}(t))}get app(){if(!this._app)throw new Ku(zu.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ku(zu.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xm(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Wu;switch(t.type){case"gapi":const e=t.client;return Bu(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Yu(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Ku(zu.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Cm.get(t);e&&(Uu("ComponentProvider","Removing Datastore"),Cm.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mm{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fm(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Mm(this.firestore,t,this._key)}}class Um{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Um(this.firestore,t,this._query)}}class Fm extends Um{constructor(t,e,n){super(t,e,Th(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Mm(this.firestore,null,new ll(t))}withConverter(t){return new Fm(this.firestore,t,this._path)}}function jm(t,e,...n){if(t=Ge(t),Nm("collection","path",e),t instanceof Pm){const r=al.fromString(e,...n);return Rm(r),new Fm(t,null,r)}{if(!(t instanceof Mm||t instanceof Fm))throw new Ku(zu.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(al.fromString(e,...n));return Rm(r),new Fm(t.firestore,null,r)}}function Vm(t,e,...n){if(t=Ge(t),1===arguments.length&&(e=el.I()),Nm("doc","path",e),t instanceof Pm){const r=al.fromString(e,...n);return Om(r),new Mm(t,null,new ll(r))}{if(!(t instanceof Mm||t instanceof Fm))throw new Ku(zu.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(al.fromString(e,...n));return Om(r),new Mm(t.firestore,t instanceof Fm?t.converter:null,new ll(r))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $m{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new np(this,"async_queue_retry"),this.Kc=()=>{const t=tp();t&&Uu("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=tp();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=tp();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Gu;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!gl(t))throw t;Uu("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);throw Fu("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=Mp.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&$u()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Bm extends Pm{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new $m,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Km(this),this._firestoreClient.terminate()}}function qm(t=xn()){return On(t,"firestore").getImmediate()}function zm(t){return t._firestoreClient||Km(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Km(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Pl(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Im(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gm{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ku(zu.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ul(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hm{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Hm(Al.fromBase64String(t))}catch(t){throw new Ku(zu.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Hm(Al.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wm{constructor(t){this._methodName=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qm{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ku(zu.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ku(zu.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nl(this._lat,t._lat)||nl(this._long,t._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Xm=/^__.*__$/;class Ym{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ad(t,this.data,this.fieldMask,e,this.fieldTransforms):new od(t,this.data,e,this.fieldTransforms)}}class Jm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ad(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Zm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $u()}}class tg{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new tg(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return dg(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Zm(this.Zc)&&Xm.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class eg{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||ep(t)}aa(t,e,n,r=!1){return new tg({Zc:t,methodName:e,ca:n,path:ul.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function ng(t){const e=t._freezeSettings(),n=ep(t._databaseId);return new eg(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rg(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);cg("Data must be an object, but it was:",o,r);const a=og(r,o);let c,u;if(i.merge)c=new Sl(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=ug(e,r,n);if(!o.contains(s))throw new Ku(zu.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);fg(t,s)||t.push(s)}c=new Sl(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Ym(new th(a),c,u)}class sg extends Wm{_toFieldTransform(t){if(2!==t.Zc)throw 1===t.Zc?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof sg}}function ig(t,e){if(ag(t=Ge(t)))return cg("Unsupported field value:",e,t),og(t,e);if(t instanceof Wm)return function(t,e){if(!Zm(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=ig(s,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Ge(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Fh(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=sl.fromDate(t);return{timestampValue:zd(e.wt,n)}}if(t instanceof sl){const n=new sl(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:zd(e.wt,n)}}if(t instanceof Qm)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Hm)return{bytesValue:Kd(e.wt,t._byteString)};if(t instanceof Mm){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Wd(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${Dm(t)}`)}(t,e)}function og(t,e){const n={};return _l(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wl(t,((t,r)=>{const s=ig(r,e.ea(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function ag(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof sl||t instanceof Qm||t instanceof Hm||t instanceof Mm||t instanceof Wm)}function cg(t,e,n){if(!ag(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Dm(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function ug(t,e,n){if((e=Ge(e))instanceof Gm)return e._internalPath;if("string"==typeof e)return hg(t,e);throw dg("Field path arguments must be of type string or ",t,!1,void 0,n)}const lg=new RegExp("[~\\*/\\[\\]]");function hg(t,e,n){if(e.search(lg)>=0)throw dg(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gm(...e.split("."))._internalPath}catch(r){throw dg(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dg(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Ku(zu.INVALID_ARGUMENT,a+t+c)}function fg(t,e){return t.some((t=>t.isEqual(e)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pg{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Mm(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new mg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(gg("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class mg extends pg{data(){return super.data()}}function gg(t,e){return"string"==typeof e?hg(t,e):e instanceof Gm?e._internalPath:e._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yg{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class vg extends pg{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new wg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(gg("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class wg extends vg{data(t={}){return super.data(t)}}class _g{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new yg(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new wg(this._firestore,this._userDataWriter,n.key,n,new yg(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Ku(zu.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new wg(t._firestore,t._userDataWriter,n.doc.key,n.doc,new yg(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new wg(t._firestore,t._userDataWriter,e.doc.key,e.doc,new yg(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:bg(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function bg(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $u()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Eg{}function Tg(t,...e){for(const n of e)t=n._apply(t);return t}class Ig extends Eg{constructor(t,e,n){super(),this.fa=t,this.da=e,this._a=n,this.type="where"}_apply(t){const e=ng(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new Ku(zu.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Ng(o,i);const e=[];for(const n of o)e.push(Cg(r,t,n));a={arrayValue:{values:e}}}else a=Cg(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Ng(o,i),a=function(t,e,n,r=!1){return ig(n,t.aa(r?4:3,e))}(n,"where",o,"in"===i||"not-in"===i);const c=ch.create(s,i,a);return function(t,e){if(e.ht()){const n=kh(t);if(null!==n&&!n.isEqual(e.field))throw new Ku(zu.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Ih(t);null!==r&&function(t,e,n){if(!n.isEqual(e))throw new Ku(zu.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(0,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Ku(zu.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Ku(zu.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,0,e,t.firestore._databaseId,this.fa,this.da,this._a);return new Um(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Eh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function kg(t,e,n){const r=e,s=gg("where",t);return new Ig(s,r,n)}class Sg extends Eg{constructor(t,e,n){super(),this.type=t,this.ma=e,this.ga=n}_apply(t){return new Um(t.firestore,t.converter,Nh(t._query,this.ma,this.ga))}}function Ag(t){return function(t,e){if(e<=0)throw new Ku(zu.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}("limit",t),new Sg("limit",t,"F")}function Cg(t,e,n){if("string"==typeof(n=Ge(n))){if(""===n)throw new Ku(zu.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sh(e)&&-1!==n.indexOf("/"))throw new Ku(zu.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(al.fromString(n));if(!ll.isDocumentKey(r))throw new Ku(zu.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hl(t,new ll(r))}if(n instanceof Mm)return Hl(t,n._key);throw new Ku(zu.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dm(n)}.`)}function Ng(t,e){if(!Array.isArray(t)||0===t.length)throw new Ku(zu.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Ku(zu.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}const Og={maxAttempts:5};
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rg{convertValue(t,e="none"){switch(Vl(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ol(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Rl(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw $u()}}convertObject(t,e){const n={};return wl(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Qm(Ol(t.latitude),Ol(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ll(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(xl(t));default:return null}}convertTimestamp(t){const e=Nl(t);return new sl(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=al.fromString(t);Bu(mf(n));const r=new Ml(n.get(1),n.get(3)),s=new ll(n.popFirst(5));return r.isEqual(e)||Fu(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Dg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Lg extends Rg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Hm(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Mm(this.firestore,null,e)}}function xg(t,e){if((t=Ge(t)).firestore!==e)throw new Ku(zu.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Pg(t){t=Lm(t,Mm);const e=Lm(t.firestore,Bm);return function(t,e,n={}){const r=new Gu;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new bm({next:i=>{e.enqueueAndForget((()=>zp(t,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new Ku(zu.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new Ku(zu.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:t=>s.reject(t)}),o=new Wp(Th(n.path),i,{includeMetadataChanges:!0,Du:!0});return qp(t,o)}(await Am(t),t.asyncQueue,e,n,r))),r.promise}(zm(e),t._key).then((n=>function(t,e,n){const r=n.docs.get(e._key),s=new Mg(t);return new vg(t,s,e._key,r,new yg(n.hasPendingWrites,n.fromCache),e.converter)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,t,n)))}class Mg extends Rg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Hm(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Mm(this.firestore,null,e)}}function Ug(t){t=Lm(t,Um);const e=Lm(t.firestore,Bm),n=zm(e),r=new Mg(e);return function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Ku(zu.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),function(t,e,n={}){const r=new Gu;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new bm({next:n=>{e.enqueueAndForget((()=>zp(t,o))),n.fromCache&&"server"===r.source?s.reject(new Ku(zu.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Wp(n,i,{includeMetadataChanges:!0,Du:!0});return qp(t,o)}(await Am(t),t.asyncQueue,e,n,r))),r.promise}(n,t._query).then((n=>new _g(e,r,t,n)))}function Fg(t,e){const n=Lm(t.firestore,Bm),r=Vm(t),s=Dg(t.converter,e);return function(t,e){return function(t,e){const n=new Gu;return t.asyncQueue.enqueueAndForget((async()=>rm(await function(t){return Sm(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(zm(t),e)}(n,[rg(ng(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,Jh.exists(!1))]).then((()=>r))}class jg extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=ng(t)}get(t){const e=xg(t,this._firestore),n=new Lg(this._firestore);return this._transaction.lookup([e._key]).then((t=>{if(!t||1!==t.length)return $u();const r=t[0];if(r.isFoundDocument())return new pg(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new pg(this._firestore,n,e._key,null,e.converter);throw $u()}))}set(t,e,n){const r=xg(t,this._firestore),s=Dg(r.converter,e,n),i=rg(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(t,e,n,...r){const s=xg(t,this._firestore);let i;return i="string"==typeof(e=Ge(e))||e instanceof Gm?function(t,e,n,r,s,i){const o=t.aa(1,e,n),a=[ug(e,r,n)],c=[s];if(i.length%2!=0)throw new Ku(zu.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<i.length;t+=2)a.push(ug(e,i[t])),c.push(i[t+1]);const u=[],l=th.empty();for(let t=a.length-1;t>=0;--t)if(!fg(u,a[t])){const e=a[t];let n=c[t];n=Ge(n);const r=o.ia(e);if(n instanceof sg)u.push(e);else{const t=ig(n,r);null!=t&&(u.push(e),l.set(e,t))}}const h=new Sl(u);return new Jm(l,h,o.fieldTransforms)}(this._dataReader,"Transaction.update",s._key,e,n,r):function(t,e,n,r){const s=t.aa(1,e,n);cg("Data must be an object, but it was:",s,r);const i=[],o=th.empty();wl(r,((t,r)=>{const a=hg(e,t,n);r=Ge(r);const c=s.ia(a);if(r instanceof sg)i.push(a);else{const t=ig(r,c);null!=t&&(i.push(a),o.set(a,t))}}));const a=new Sl(i);return new Jm(o,a,s.fieldTransforms)}(this._dataReader,"Transaction.update",s._key,e),this._transaction.update(s._key,i),this}delete(t){const e=xg(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=xg(t,this._firestore),n=new Mg(this._firestore);return super.get(t).then((t=>new vg(this._firestore,n,e._key,t._document,new yg(!1,!1),e.converter)))}}function Vg(t,e,n){t=Lm(t,Bm);const r=Object.assign(Object.assign({},Og),n);return function(t){if(t.maxAttempts<1)throw new Ku(zu.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(t,e,n){const r=new Gu;return t.asyncQueue.enqueueAndForget((async()=>{const s=await function(t){return Sm(t).then((t=>t.datastore))}(t);new Tm(t.asyncQueue,s,n,e,r).run()})),r.promise}(zm(t),(n=>e(new jg(t,n))),r)}!function(t,e=!0){xu="9.8.3",Nn(new He("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Bm(r,new Qu(t.getProvider("auth-internal")),new Zu(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),Pn(Du,"3.4.10",t),Pn(Du,"3.4.10","esm2017")}();
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Pn("firebase","9.8.3","app");const $g=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:In,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw Rn.create("bad-app-name",{appName:String(r)});const s=Sn.get(r);if(s){if(je(t,s.options)&&je(n,s.config))return s;throw Rn.create("duplicate-app",{appName:r})}const i=new Xe(r);for(const t of An.values())i.addComponent(t);const o=new Dn(t,n,i);return Sn.set(r,o),o}({apiKey:"AIzaSyBFpiFdqsvMHK9Rby-yEkYYvNJznkrxzRw",authDomain:"choozr-ccb67.firebaseapp.com",projectId:"choozr-ccb67",storageBucket:"choozr-ccb67.appspot.com",messagingSenderId:"864093359105",appId:"1:864093359105:web:fa1f154b16bd2e8f7a0400"});class Bg{constructor(){this.snapshotToChoozr=t=>new zt(new Kt(t.id),new Rt(t.get("name")))}async getChoozrsWith(t){const e=Ei();await fs(e,t.apiKey,t.appId);const n=Tg(jm(qm($g),"Choozr"),Ag(50));return(await Ug(n)).docs.map(this.snapshotToChoozr)}async createChoozrWith(t,e){const n=Ei();await fs(n,e.apiKey,e.appId);const r=qm($g),s=await Fg(jm(r,"Choozr"),{name:t.value});return new zt(new Kt(s.id),t)}}class qg{constructor(){this.snapshotToTeamMembersCount=t=>new Xt(new Wt(t.id),t.get("membersCount")),this.snapshotToTeam=t=>new Ht(new Wt(t.id),new Qt(t.get("name")),new Kt(t.get("choozrId")))}async getChoozrTeamsWith(t,e){const n=Ei();await fs(n,e.apiKey,e.appId);const r=Tg(jm(qm($g),"Team"),Ag(50),kg("choozrId","==",t.value));return(await Ug(r)).docs.map(this.snapshotToTeam)}async getTeamDetailsWith(t,e){const n=Ei();await fs(n,e.apiKey,e.appId);const r=qm($g),s=await Pg(Vm(r,"Team",t.value)),i=new Qt(s.get("name")),o=Tg(jm(r,"Member"),Ag(50),kg("teamId","==",t.value)),a=(await Ug(o)).docs.map((t=>new Jt(t.get("name"))));return new Yt(t,i,a)}async getTeamsMembersCountFrom(t,e){const n=Ei();await fs(n,e.apiKey,e.appId);const r=Tg(jm(qm($g),"Team"),Ag(50),kg("choozrId","==",t.value));return(await Ug(r)).docs.map(this.snapshotToTeamMembersCount)}async createTeamWith(t,e,n){const r=Ei();await fs(r,n.apiKey,n.appId);const s=qm($g),i=await Fg(jm(s,"Team"),{name:e.value,choozrId:t.value,membersCount:0});return new Ht(new Wt(i.id),e,t)}}class zg{async createMemberWith(t,e,n){const r=Ei();await fs(r,n.apiKey,n.appId);const s=qm($g),i=Vm(s,"Team",t.value),o=Vm(s,"Member");return await Vg(s,(async n=>{const r=await n.get(i);if(!r.exists())throw new Error("Document does not exist!");const s=r.data().membersCount+1;n.update(i,{membersCount:s}),n.set(o,{name:e.value,teamId:t.value})})),new fe(new pe(o.id),e,t)}}function Kg(e){let n,r;return n=new mt({props:{routes:e[0]}}),n.$on("routeEvent",e[1]),{c(){Y(n.$$.fragment)},m(t,e){J(n,t,e),r=!0},p:t,i(t){r||(H(n.$$.fragment,t),r=!0)},o(t){W(n.$$.fragment,t),r=!1},d(t){Z(n,t)}}}function Gg(t){const e={"/":Ot,"/home":Ft,"/choozrs/:choozrId":he,"/choozrs/:choozrId/join":we,"/teams/:teamId":Se};return function(){const t=new gt,e=new Bg,n=new qg,r=new zg,s=new Vt(e,t,e,n),i=new Gt(n,t,n);A("loginUseCase",new yt(t)),A("createChoozrUseCase",s),A("getChoozrsUseCase",s),A("generateJoinChoozrURLUseCase",s),A("getChoozrTeamsUseCase",s),A("getTeamDetailsUseCase",i),A("createTeamUseCase",i),A("joinChoozrUseCase",new de(r,t,n))}(),[e,async function(t){const e=t.detail;e==bt?await ft("/home"):e instanceof Et||e instanceof Tt?await ft(`/choozrs/${e.choozrId.value}`):(e instanceof kt||e instanceof It)&&await ft(`/teams/${e.teamId.value}`)}]}return new class extends et{constructor(t){super(),tt(this,t,Gg,Kg,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle4.js.map
