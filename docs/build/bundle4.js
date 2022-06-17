var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,c;function u(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function h(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function y(){return m(" ")}function v(){return m("")}function _(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e){t.value=null==e?"":e}function T(t){c=t}function I(){if(!c)throw new Error("Function called outside component initialization");return c}function k(t){I().$$.on_mount.push(t)}function C(){const t=I();return(e,n,{cancelable:r=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=function(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,r,e),s}(e,n,{cancelable:r});return s.slice().forEach((e=>{e.call(t,i)})),!i.defaultPrevented}return!0}}function S(t,e){return I().$$.context.set(t,e),e}function A(t){return I().$$.context.get(t)}function O(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const R=[],N=[],D=[],L=[],x=Promise.resolve();let P=!1;function M(){P||(P=!0,x.then($))}function U(){return M(),x}function F(t){D.push(t)}const j=new Set;let V=0;function $(){const t=c;do{for(;V<R.length;){const t=R[V];V++,T(t),B(t.$$)}for(T(null),R.length=0,V=0;N.length;)N.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];j.has(e)||(j.add(e),e())}D.length=0}while(R.length);for(;L.length;)L.pop()();P=!1,j.clear(),T(t)}function B(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const z=new Set;let q;function K(){q={r:0,c:[],p:q}}function G(){q.r||s(q.c),q=q.p}function H(t,e){t&&t.i&&(z.delete(t),t.i(e))}function W(t,e,n,r){if(t&&t.o){if(z.has(t))return;z.add(t),q.c.push((()=>{z.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function Q(t,e){const n={},r={},s={$$scope:1};let i=t.length;for(;i--;){const o=t[i],a=e[i];if(a){for(const t in o)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[i]=a}else for(const t in o)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function J(t,e,r,o){const{fragment:a,on_mount:c,on_destroy:u,after_update:l}=t.$$;a&&a.m(e,r),o||F((()=>{const e=c.map(n).filter(i);u?u.push(...e):s(e),t.$$.on_mount=[]})),l.forEach(F)}function Z(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(e,n,i,o,a,u,l,h=[-1]){const d=c;T(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:h,skip_bound:!1,root:n.target||d.$$.root};l&&l(p.root);let g=!1;if(p.ctx=i?i(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),g&&function(t,e){-1===t.$$.dirty[0]&&(R.push(t),M(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),g=!0,s(p.before_update),p.fragment=!!o&&o(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&H(e.$$.fragment),J(e,n.target,n.anchor,n.customElement),$()}T(d)}class et{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt=[];function rt(t,e){return{subscribe:st(t,e).subscribe}}function st(e,n=t){let r;const s=new Set;function i(t){if(o(e,t)&&(e=t,r)){const t=!nt.length;for(const t of s)t[1](),nt.push(t,e);if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(o,a=t){const c=[o,a];return s.add(c),1===s.size&&(r=n(i)||t),o(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}function it(e,n,r){const o=!Array.isArray(e),a=o?[e]:e,c=n.length<2;return rt(r,(e=>{let r=!1;const u=[];let h=0,d=t;const f=()=>{if(h)return;d();const r=n(o?u[0]:u,e);c?e(r):d=i(r)?r:t},p=a.map(((t,e)=>l(t,(t=>{u[e]=t,h&=~(1<<e),r&&f()}),(()=>{h|=1<<e}))));return r=!0,f(),function(){s(p),d()}}))}function ot(t){let n,r,s;const i=[t[2]];var o=t[0];function a(t){let n={};for(let t=0;t<i.length;t+=1)n=e(n,i[t]);return{props:n}}return o&&(n=new o(a()),n.$on("routeEvent",t[7])),{c(){n&&Y(n.$$.fragment),r=v()},m(t,e){n&&J(n,t,e),d(t,r,e),s=!0},p(t,e){const s=4&e?Q(i,[X(t[2])]):{};if(o!==(o=t[0])){if(n){K();const t=n;W(t.$$.fragment,1,0,(()=>{Z(t,1)})),G()}o?(n=new o(a()),n.$on("routeEvent",t[7]),Y(n.$$.fragment),H(n.$$.fragment,1),J(n,r.parentNode,r)):n=null}else o&&n.$set(s)},i(t){s||(n&&H(n.$$.fragment,t),s=!0)},o(t){n&&W(n.$$.fragment,t),s=!1},d(t){t&&f(r),n&&Z(n,t)}}}function at(t){let n,r,s;const i=[{params:t[1]},t[2]];var o=t[0];function a(t){let n={};for(let t=0;t<i.length;t+=1)n=e(n,i[t]);return{props:n}}return o&&(n=new o(a()),n.$on("routeEvent",t[6])),{c(){n&&Y(n.$$.fragment),r=v()},m(t,e){n&&J(n,t,e),d(t,r,e),s=!0},p(t,e){const s=6&e?Q(i,[2&e&&{params:t[1]},4&e&&X(t[2])]):{};if(o!==(o=t[0])){if(n){K();const t=n;W(t.$$.fragment,1,0,(()=>{Z(t,1)})),G()}o?(n=new o(a()),n.$on("routeEvent",t[6]),Y(n.$$.fragment),H(n.$$.fragment,1),J(n,r.parentNode,r)):n=null}else o&&n.$set(s)},i(t){s||(n&&H(n.$$.fragment,t),s=!0)},o(t){n&&W(n.$$.fragment,t),s=!1},d(t){t&&f(r),n&&Z(n,t)}}}function ct(t){let e,n,r,s;const i=[at,ot],o=[];function a(t,e){return t[1]?0:1}return e=a(t),n=o[e]=i[e](t),{c(){n.c(),r=v()},m(t,n){o[e].m(t,n),d(t,r,n),s=!0},p(t,[s]){let c=e;e=a(t),e===c?o[e].p(t,s):(K(),W(o[c],1,1,(()=>{o[c]=null})),G(),n=o[e],n?n.p(t,s):(n=o[e]=i[e](t),n.c()),H(n,1),n.m(r.parentNode,r))},i(t){s||(H(n),s=!0)},o(t){W(n),s=!1},d(t){o[e].d(t),t&&f(r)}}}function ut(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const lt=rt(null,(function(t){t(ut());const e=()=>{t(ut())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));it(lt,(t=>t.location));const ht=it(lt,(t=>t.querystring)),dt=st(void 0);async function ft(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await U(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0,void 0),window.location.hash=("#"==t.charAt(0)?"":"#")+t}function pt(t,e,n){let{routes:r={}}=e,{prefix:s=""}=e,{restoreScrollState:i=!1}=e;class o{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:r}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,s,i,o=[],a="",c=t.split("/");for(c[0]||c.shift();s=c.shift();)"*"===(n=s[0])?(o.push("wild"),a+="/(.*)"):":"===n?(r=s.indexOf("?",1),i=s.indexOf(".",1),o.push(s.substring(1,~r?r:~i?i:s.length)),a+=~r&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(a+=(~r?"?":"")+"\\"+s.substring(i))):a+="/"+s;return{keys:o,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=r}match(t){if(s)if("string"==typeof s){if(!t.startsWith(s))return null;t=t.substr(s.length)||"/"}else if(s instanceof RegExp){const e=t.match(s);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let r=0;for(;r<this._keys.length;){try{n[this._keys[r]]=decodeURIComponent(e[r+1]||"")||null}catch(t){n[this._keys[r]]=null}r++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const a=[];r instanceof Map?r.forEach(((t,e)=>{a.push(new o(e,t))})):Object.keys(r).forEach((t=>{a.push(new o(t,r[t]))}));let c=null,u=null,l={};const h=C();async function d(t,e){await U(),h(t,e)}let f=null,p=null;i&&(p=t=>{f=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",p),function(t){I().$$.after_update.push(t)}((()=>{f?window.scrollTo(f.__svelte_spa_router_scrollX,f.__svelte_spa_router_scrollY):window.scrollTo(0,0)})));let g=null,m=null;const y=lt.subscribe((async t=>{g=t;let e=0;for(;e<a.length;){const r=a[e].match(t.location);if(!r){e++;continue}const s={route:a[e].path,location:t.location,querystring:t.querystring,userData:a[e].userData,params:r&&"object"==typeof r&&Object.keys(r).length?r:null};if(!await a[e].checkConditions(s))return n(0,c=null),m=null,void d("conditionsFailed",s);d("routeLoading",Object.assign({},s));const i=a[e].component;if(m!=i){i.loading?(n(0,c=i.loading),m=i,n(1,u=i.loadingParams),n(2,l={}),d("routeLoaded",Object.assign({},s,{component:c,name:c.name,params:u}))):(n(0,c=null),m=null);const e=await i();if(t!=g)return;n(0,c=e&&e.default||e),m=i}return r&&"object"==typeof r&&Object.keys(r).length?n(1,u=r):n(1,u=null),n(2,l=a[e].props),void d("routeLoaded",Object.assign({},s,{component:c,name:c.name,params:u})).then((()=>{dt.set(u)}))}n(0,c=null),m=null,dt.set(void 0)}));return function(t){I().$$.on_destroy.push(t)}((()=>{y(),p&&window.removeEventListener("popstate",p)})),t.$$set=t=>{"routes"in t&&n(3,r=t.routes),"prefix"in t&&n(4,s=t.prefix),"restoreScrollState"in t&&n(5,i=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=i?"manual":"auto")},[c,u,l,r,s,i,function(e){O.call(this,t,e)},function(e){O.call(this,t,e)}]}class gt extends et{constructor(t){super(),tt(this,t,pt,ct,o,{routes:3,prefix:4,restoreScrollState:5})}}class mt{constructor(){this.parameters=void 0}store(t){this.parameters=t}getLoginParameters(){if(!this.parameters)throw Error("Illegal state : parameters are undefined");return this.parameters}}class yt{constructor(t){this.storeLoginParametersPort=t}login(t){this.storeLoginParametersPort.store(t)}}class vt{constructor(t,e){this.appId=t,this.apiKey=e}}function _t(e){let n;return{c(){n=g("div"),n.innerHTML='<div class="svelte-rxtjcc"></div> \n  <div class="svelte-rxtjcc"></div> \n  <div class="svelte-rxtjcc"></div> \n  <div class="svelte-rxtjcc"></div>',w(n,"class","lds-ring svelte-rxtjcc")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class wt extends et{constructor(t){super(),tt(this,t,null,_t,o,{})}}const bt={};class Et{constructor(t){this.choozrId=t}}class Tt{constructor(t){this.choozrId=t}}class It{constructor(t){this.teamId=t}}class kt{constructor(t){this.teamId=t}}function Ct(e){let n,r,i,o,a,c,u,l,p,v,b,T,I,k,C;return{c(){n=g("h1"),n.textContent="Login",r=y(),i=g("h2"),i.textContent="Api Key",o=y(),a=g("input"),c=y(),u=g("h2"),u.textContent="App Id",l=y(),p=g("input"),v=y(),b=g("button"),T=m("Valider"),w(n,"class","is-size-1 mb-5 has-text-centered"),w(a,"id","api-key"),w(a,"class","mt-1"),w(a,"type","password"),w(u,"class","mt-2"),w(p,"id","app-id"),w(p,"class","mt-1"),w(p,"type","password"),w(b,"class","mt-4"),b.disabled=I=!e[0]||!e[1]},m(t,s){d(t,n,s),d(t,r,s),d(t,i,s),d(t,o,s),d(t,a,s),E(a,e[1]),d(t,c,s),d(t,u,s),d(t,l,s),d(t,p,s),E(p,e[0]),d(t,v,s),d(t,b,s),h(b,T),k||(C=[_(a,"input",e[3]),_(p,"input",e[4]),_(b,"click",e[2])],k=!0)},p(t,e){2&e&&a.value!==t[1]&&E(a,t[1]),1&e&&p.value!==t[0]&&E(p,t[0]),3&e&&I!==(I=!t[0]||!t[1])&&(b.disabled=I)},i:t,o:t,d(t){t&&f(n),t&&f(r),t&&f(i),t&&f(o),t&&f(a),t&&f(c),t&&f(u),t&&f(l),t&&f(p),t&&f(v),t&&f(b),k=!1,s(C)}}}function St(e){let n,r;return n=new wt({}),{c(){Y(n.$$.fragment)},m(t,e){J(n,t,e),r=!0},p:t,i(t){r||(H(n.$$.fragment,t),r=!0)},o(t){W(n.$$.fragment,t),r=!1},d(t){Z(n,t)}}}function At(t){let e,n,r,s,i,o;const a=[St,Ct],c=[];return s=1,i=c[1]=a[1](t),{c(){e=g("section"),n=g("div"),r=g("div"),i.c(),w(r,"class","is-flex is-flex-direction-column"),w(n,"class","hero-body is-flex is-justify-content-center"),w(e,"class","hero is-primary is-fullheight")},m(t,s){d(t,e,s),h(e,n),h(n,r),c[1].m(r,null),o=!0},p(t,[e]){i.p(t,e)},i(t){o||(H(i),o=!0)},o(t){W(i),o=!1},d(t){t&&f(e),c[1].d()}}}function Ot(t,e,n){let r="",s="";const i=C(),o=A("loginUseCase");return[r,s,function(){o.login(new vt(r,s)),i("routeEvent",bt)},function(){s=this.value,n(1,s)},function(){r=this.value,n(0,r)}]}class Rt extends et{constructor(t){super(),tt(this,t,Ot,At,o,{})}}class Nt{constructor(t){this.value=t}}function Dt(t,e,n){const r=t.slice();return r[10]=e[n].id,r[11]=e[n].name,r}function Lt(e){let n,r,s,i,o=e[1],a=[];for(let t=0;t<o.length;t+=1)a[t]=Pt(Dt(e,o,t));return{c(){n=g("table"),r=g("thead"),r.innerHTML="<tr><th>Choozrs</th></tr>",s=y(),i=g("tbody");for(let t=0;t<a.length;t+=1)a[t].c();w(n,"class","table is-striped is-hoverable")},m(t,e){d(t,n,e),h(n,r),h(n,s),h(n,i);for(let t=0;t<a.length;t+=1)a[t].m(i,null)},p(t,e){if(10&e){let n;for(o=t[1],n=0;n<o.length;n+=1){const r=Dt(t,o,n);a[n]?a[n].p(r,e):(a[n]=Pt(r),a[n].c(),a[n].m(i,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=o.length}},i:t,o:t,d(t){t&&f(n),p(a,t)}}}function xt(e){let n,r,s;return r=new wt({}),{c(){n=g("div"),Y(r.$$.fragment),w(n,"class","is-flex is-justify-content-center")},m(t,e){d(t,n,e),J(r,n,null),s=!0},p:t,i(t){s||(H(r.$$.fragment,t),s=!0)},o(t){W(r.$$.fragment,t),s=!1},d(t){t&&f(n),Z(r)}}}function Pt(t){let e,n,r,s,i,o,a=t[11].value+"";function c(){return t[5](t[10])}return{c(){e=g("tr"),n=g("td"),r=m(a),s=y(),w(e,"class","is-clickable")},m(t,a){d(t,e,a),h(e,n),h(n,r),h(e,s),i||(o=_(e,"click",c),i=!0)},p(e,n){t=e,2&n&&a!==(a=t[11].value+"")&&b(r,a)},d(t){t&&f(e),i=!1,o()}}}function Mt(t){let e,n,r,i,o,a,c,u,l,p,v,b,T,I,k,C,S,A,O,R;const N=[xt,Lt],D=[];function L(t,e){return t[2]?0:1}return a=L(t),c=D[a]=N[a](t),{c(){e=g("section"),n=g("div"),r=g("div"),i=g("h1"),i.textContent="Home",o=y(),c.c(),u=y(),l=g("hr"),p=y(),v=g("h2"),v.textContent="Nouveau Choozr",b=y(),T=g("input"),I=y(),k=g("button"),C=m("Créer"),w(i,"class","is-size-1 has-text-centered mb-5"),w(T,"id","app-id"),w(T,"class","mt-1"),w(k,"class","mt-4"),k.disabled=S=!t[0],w(r,"class","is-flex is-flex-direction-column"),w(n,"class","hero-body is-flex is-justify-content-center"),w(e,"class","hero is-primary is-fullheight")},m(s,c){d(s,e,c),h(e,n),h(n,r),h(r,i),h(r,o),D[a].m(r,null),h(r,u),h(r,l),h(r,p),h(r,v),h(r,b),h(r,T),E(T,t[0]),h(r,I),h(r,k),h(k,C),A=!0,O||(R=[_(T,"input",t[6]),_(k,"click",t[4])],O=!0)},p(t,[e]){let n=a;a=L(t),a===n?D[a].p(t,e):(K(),W(D[n],1,1,(()=>{D[n]=null})),G(),c=D[a],c?c.p(t,e):(c=D[a]=N[a](t),c.c()),H(c,1),c.m(r,u)),1&e&&T.value!==t[0]&&E(T,t[0]),(!A||1&e&&S!==(S=!t[0]))&&(k.disabled=S)},i(t){A||(H(c),A=!0)},o(t){W(c),A=!1},d(t){t&&f(e),D[a].d(),O=!1,s(R)}}}function Ut(t,e,n){const r=A("getChoozrsUseCase"),s=A("createChoozrUseCase"),i=C();let o="",a=[],c=!0;function u(t){i("routeEvent",new Tt(t))}k((()=>{r.getChoozrs().then((t=>{n(1,a=t)})).catch((t=>console.log(t))).finally((()=>{n(2,c=!1)}))}));return[o,a,c,u,function(){s.createChoozrWith(new Nt(o)).then((t=>i("routeEvent",new Et(t.id)))).catch((t=>console.log(t)))},t=>u(t),function(){o=this.value,n(0,o)}]}class Ft extends et{constructor(t){super(),tt(this,t,Ut,Mt,o,{})}}class jt{constructor(t){this.value=t}}class Vt{constructor(t,e,n,r){this.createChoozrPort=t,this.getLoginParametersPort=e,this.getChoozrsPort=n,this.getChoozrTeamsPort=r}async getChoozrTeamsWith(t){const e=this.getLoginParametersPort.getLoginParameters();return await this.getChoozrTeamsPort.getChoozrTeamsWith(t,e)}async getChoozrs(){const t=this.getLoginParametersPort.getLoginParameters();return await this.getChoozrsPort.getChoozrsWith(t)}generateJoinChoozrURLWith(t){const e=this.getLoginParametersPort.getLoginParameters();return Promise.resolve(new jt(`https://thomas-boutin.github.io/Choozr/#/choozrs/${t.value}/join?appId=${e.appId}&apiKey=${e.apiKey}`))}async createChoozrWith(t){const e=this.getLoginParametersPort.getLoginParameters();return await this.createChoozrPort.createChoozrWith(t,e)}}var $t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Bt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function zt(t){var e={exports:{}};return t(e,e.exports),e.exports}function qt(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.')}var Kt=zt((function(t,e){t.exports=function(){function t(e,n,r){function s(o,a){if(!n[o]){if(!e[o]){if(!a&&qt)return qt(o);if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[o]={exports:{}};e[o][0].call(u.exports,(function(t){return s(e[o][1][t]||t)}),u,u.exports,t,e,n,r)}return n[o].exports}for(var i=qt,o=0;o<r.length;o++)s(r[o]);return s}return t}()({1:[function(t,e,n){var r;r="undefined"==typeof window?t("abort-controller"):"signal"in new Request("")?window.AbortController:t("abortcontroller-polyfill/dist/cjs-ponyfill").AbortController,e.exports=r},{"abort-controller":20,"abortcontroller-polyfill/dist/cjs-ponyfill":19}],2:[function(t,e,n){var r=function(){function t(t,e,n){this.error=t,this.message=e,this.statusCode=n}return t.prototype.toString=function(){return[this.message,"(",this.error,")",this.statusCode?"[Http code "+this.statusCode+"]":""].join("")},t}();e.exports=r},{}],3:[function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},r.apply(this,arguments)},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},i=s(t("lodash/get")),o=s(t("lodash/isPlainObject")),a=s(t("lodash/keys")),c=s(t("./fetch")),u=s(t("./abort-controller")),l=s(t("./object_to_query_param_string")),h=s(t("./airtable_error")),d=s(t("./table")),f=s(t("./http_headers")),p=s(t("./run_action")),g=s(t("./package_version")),m=s(t("./exponential_backoff_with_jitter")),y="Airtable.js/"+g.default,v=function(){function t(t,e){this._airtable=t,this._id=e}return t.prototype.table=function(t){return new d.default(this,null,t)},t.prototype.makeRequest=function(t){var e,n=this;void 0===t&&(t={});var s=i.default(t,"method","GET").toUpperCase(),o=this._airtable._endpointUrl+"/v"+this._airtable._apiVersionMajor+"/"+this._id+i.default(t,"path","/")+"?"+l.default(i.default(t,"qs",{})),a=new u.default,d={method:s,headers:this._getRequestHeaders(Object.assign({},this._airtable._customHeaders,null!==(e=t.headers)&&void 0!==e?e:{})),signal:a.signal};"body"in t&&_(s)&&(d.body=JSON.stringify(t.body));var f=setTimeout((function(){a.abort()}),this._airtable._requestTimeout);return new Promise((function(e,s){c.default(o,d).then((function(o){if(clearTimeout(f),429!==o.status||n._airtable._noRetryIfRateLimited)o.json().then((function(t){var r=n._checkStatusForError(o.status,t)||w(o.status,t);r?s(r):e({statusCode:o.status,headers:o.headers,body:t})})).catch((function(){var t=w(o.status);s(t)}));else{var a=i.default(t,"_numAttempts",0),c=m.default(a);setTimeout((function(){var i=r(r({},t),{_numAttempts:a+1});n.makeRequest(i).then(e).catch(s)}),c)}})).catch((function(t){clearTimeout(f),t=new h.default("CONNECTION_ERROR",t.message,null),s(t)}))}))},t.prototype.runAction=function(t,e,n,r,s){p.default(this,t,e,n,r,s,0)},t.prototype._getRequestHeaders=function(t){var e=new f.default;e.set("Authorization","Bearer "+this._airtable._apiKey),e.set("User-Agent",y),e.set("Content-Type","application/json");for(var n=0,r=a.default(t);n<r.length;n++){var s=r[n];e.set(s,t[s])}return e.toJSON()},t.prototype._checkStatusForError=function(t,e){var n=(null!=e?e:{error:{}}).error,r=void 0===n?{}:n,s=r.type,i=r.message;return 401===t?new h.default("AUTHENTICATION_REQUIRED","You should provide valid api key to perform this operation",t):403===t?new h.default("NOT_AUTHORIZED","You are not authorized to perform this operation",t):404===t?new h.default("NOT_FOUND",null!=i?i:"Could not find what you are looking for",t):413===t?new h.default("REQUEST_TOO_LARGE","Request body is too large",t):422===t?new h.default(null!=s?s:"UNPROCESSABLE_ENTITY",null!=i?i:"The operation cannot be processed",t):429===t?new h.default("TOO_MANY_REQUESTS","You have made too many requests in a short period of time. Please retry your request later",t):500===t?new h.default("SERVER_ERROR","Try again. If the problem persists, contact support.",t):503===t?new h.default("SERVICE_UNAVAILABLE","The service is temporarily unavailable. Please retry shortly.",t):t>=400?new h.default(null!=s?s:"UNEXPECTED_ERROR",null!=i?i:"An unexpected error occurred",t):null},t.prototype.doCall=function(t){return this.table(t)},t.prototype.getId=function(){return this._id},t.createFunctor=function(e,n){var r=new t(e,n),s=function(t){return r.doCall(t)};return s._base=r,s.table=r.table.bind(r),s.makeRequest=r.makeRequest.bind(r),s.runAction=r.runAction.bind(r),s.getId=r.getId.bind(r),s},t}();function _(t){return"GET"!==t&&"DELETE"!==t}function w(t,e){return o.default(e)?null:new h.default("UNEXPECTED_ERROR","The response from Airtable was invalid JSON. Please try again soon.",t)}e.exports=v},{"./abort-controller":1,"./airtable_error":2,"./exponential_backoff_with_jitter":6,"./fetch":7,"./http_headers":9,"./object_to_query_param_string":11,"./package_version":12,"./run_action":16,"./table":17,"lodash/get":77,"lodash/isPlainObject":89,"lodash/keys":93}],4:[function(t,e,n){function r(t,e,n){return void 0===n&&(n=void 0),function(){for(var r,s=[],i=0;i<arguments.length;i++)s[i]=arguments[i];if("function"!=typeof s[r=void 0===n?s.length>0?s.length-1:0:n]){for(var o=[],a=Math.max(s.length,r),c=0;c<a;c++)o.push(s[c]);return new Promise((function(n,r){o.push((function(t,e){t?r(t):n(e)})),t.apply(e,o)}))}t.apply(e,s)}}e.exports=r},{}],5:[function(t,e,n){var r={};function s(t,e,n){return function(){for(var s=[],i=0;i<arguments.length;i++)s[i]=arguments[i];r[e]||(r[e]=!0,console.warn(n)),t.apply(this,s)}}e.exports=s},{}],6:[function(t,e,n){var r=(this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}})(t("./internal_config.json"));function s(t){var e=r.default.INITIAL_RETRY_DELAY_IF_RATE_LIMITED*Math.pow(2,t),n=Math.min(r.default.MAX_RETRY_DELAY_IF_RATE_LIMITED,e);return Math.random()*n}e.exports=s},{"./internal_config.json":10}],7:[function(t,e,n){var r=(this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}})(t("node-fetch"));e.exports="undefined"==typeof window?r.default:window.fetch.bind(window)},{"node-fetch":20}],8:[function(t,e,n){function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=r},{}],9:[function(t,e,n){var r=(this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}})(t("lodash/keys")),s="undefined"!=typeof window,i=function(){function t(){this._headersByLowercasedKey={}}return t.prototype.set=function(t,e){var n=t.toLowerCase();"x-airtable-user-agent"===n&&(n="user-agent",t="User-Agent"),this._headersByLowercasedKey[n]={headerKey:t,headerValue:e}},t.prototype.toJSON=function(){for(var t={},e=0,n=r.default(this._headersByLowercasedKey);e<n.length;e++){var i=n[e],o=this._headersByLowercasedKey[i];t[s&&"user-agent"===i?"X-Airtable-User-Agent":o.headerKey]=o.headerValue}return t},t}();e.exports=i},{"lodash/keys":93}],10:[function(t,e,n){e.exports={INITIAL_RETRY_DELAY_IF_RATE_LIMITED:5e3,MAX_RETRY_DELAY_IF_RATE_LIMITED:6e5}},{}],11:[function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},s=r(t("lodash/isArray")),i=r(t("lodash/isNil")),o=r(t("lodash/keys"));function a(t,e,n){if(s.default(e))for(var r=0;r<e.length;r++){var i=e[r];/\[\]$/.test(t)?n(t,i):a(t+"["+("object"==typeof i&&null!==i?r:"")+"]",i,n)}else if("object"==typeof e)for(var c=0,u=o.default(e);c<u.length;c++){var l=u[c];a(t+"["+l+"]",i=e[l],n)}else n(t,e)}function c(t){for(var e=[],n=function(t,n){n=i.default(n)?"":n,e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,s=o.default(t);r<s.length;r++){var c=s[r];a(c,t[c],n)}return e.join("&").replace(/%20/g,"+")}e.exports=c},{"lodash/isArray":79,"lodash/isNil":85,"lodash/keys":93}],12:[function(t,e,n){e.exports="0.11.4"},{}],13:[function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},r.apply(this,arguments)},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},i=s(t("lodash/isFunction")),o=s(t("lodash/keys")),a=s(t("./record")),c=s(t("./callback_to_promise")),u=s(t("./has")),l=t("./query_params"),h=function(){function t(t,e){this._table=t,this._params=e,this.firstPage=c.default(d,this),this.eachPage=c.default(f,this,1),this.all=c.default(p,this)}return t.validateParams=function(e){for(var n={},r=[],s=[],i=0,a=o.default(e);i<a.length;i++){var c=a[i],l=e[c];if(u.default(t.paramValidators,c)){var h=(0,t.paramValidators[c])(l);h.pass?n[c]=l:s.push(h.error)}else r.push(c)}return{validParams:n,ignoredKeys:r,errors:s}},t.paramValidators=l.paramValidators,t}();function d(t){if(!i.default(t))throw new Error("The first parameter to `firstPage` must be a function");this.eachPage((function(e){t(null,e)}),(function(e){t(e,null)}))}function f(t,e){var n=this;if(!i.default(t))throw new Error("The first parameter to `eachPage` must be a function");if(!i.default(e)&&void 0!==e)throw new Error("The second parameter to `eachPage` must be a function or undefined");var s="/"+this._table._urlEncodedNameOrId(),o=r({},this._params),c=function(){n._table._base.runAction("get",s,o,null,(function(r,s,i){if(r)e(r,null);else{var u=void 0;i.offset?(o.offset=i.offset,u=c):u=function(){e(null)};var l=i.records.map((function(t){return new a.default(n._table,null,t)}));t(l,u)}}))};c()}function p(t){if(!i.default(t))throw new Error("The first parameter to `all` must be a function");var e=[];this.eachPage((function(t,n){e.push.apply(e,t),n()}),(function(n){n?t(n,null):t(null,e)}))}e.exports=h},{"./callback_to_promise":4,"./has":8,"./query_params":14,"./record":15,"lodash/isFunction":83,"lodash/keys":93}],14:[function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.paramValidators=void 0;var s=r(t("./typecheck")),i=r(t("lodash/isString")),o=r(t("lodash/isNumber")),a=r(t("lodash/isPlainObject")),c=r(t("lodash/isBoolean"));n.paramValidators={fields:s.default(s.default.isArrayOf(i.default),"the value for `fields` should be an array of strings"),filterByFormula:s.default(i.default,"the value for `filterByFormula` should be a string"),maxRecords:s.default(o.default,"the value for `maxRecords` should be a number"),pageSize:s.default(o.default,"the value for `pageSize` should be a number"),offset:s.default(o.default,"the value for `offset` should be a number"),sort:s.default(s.default.isArrayOf((function(t){return a.default(t)&&i.default(t.field)&&(void 0===t.direction||["asc","desc"].includes(t.direction))})),'the value for `sort` should be an array of sort objects. Each sort object must have a string `field` value, and an optional `direction` value that is "asc" or "desc".'),view:s.default(i.default,"the value for `view` should be a string"),cellFormat:s.default((function(t){return i.default(t)&&["json","string"].includes(t)}),'the value for `cellFormat` should be "json" or "string"'),timeZone:s.default(i.default,"the value for `timeZone` should be a string"),userLocale:s.default(i.default,"the value for `userLocale` should be a string"),returnFieldsByFieldId:s.default(c.default,"the value for `returnFieldsByFieldId` should be a boolean")}},{"./typecheck":18,"lodash/isBoolean":81,"lodash/isNumber":86,"lodash/isPlainObject":89,"lodash/isString":90}],15:[function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},r.apply(this,arguments)},s=(this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}})(t("./callback_to_promise")),i=function(){function t(t,e,n){this._table=t,this.id=e||n.id,this.setRawJson(n),this.save=s.default(o,this),this.patchUpdate=s.default(a,this),this.putUpdate=s.default(c,this),this.destroy=s.default(u,this),this.fetch=s.default(l,this),this.updateFields=this.patchUpdate,this.replaceFields=this.putUpdate}return t.prototype.getId=function(){return this.id},t.prototype.get=function(t){return this.fields[t]},t.prototype.set=function(t,e){this.fields[t]=e},t.prototype.setRawJson=function(t){this._rawJson=t,this.fields=this._rawJson&&this._rawJson.fields||{}},t}();function o(t){this.putUpdate(this.fields,t)}function a(t,e,n){var s=this;n||(n=e,e={});var i=r({fields:t},e);this._table._base.runAction("patch","/"+this._table._urlEncodedNameOrId()+"/"+this.id,{},i,(function(t,e,r){t?n(t):(s.setRawJson(r),n(null,s))}))}function c(t,e,n){var s=this;n||(n=e,e={});var i=r({fields:t},e);this._table._base.runAction("put","/"+this._table._urlEncodedNameOrId()+"/"+this.id,{},i,(function(t,e,r){t?n(t):(s.setRawJson(r),n(null,s))}))}function u(t){var e=this;this._table._base.runAction("delete","/"+this._table._urlEncodedNameOrId()+"/"+this.id,{},null,(function(n){n?t(n):t(null,e)}))}function l(t){var e=this;this._table._base.runAction("get","/"+this._table._urlEncodedNameOrId()+"/"+this.id,{},null,(function(n,r,s){n?t(n):(e.setRawJson(s),t(null,e))}))}e.exports=i},{"./callback_to_promise":4}],16:[function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},s=r(t("./exponential_backoff_with_jitter")),i=r(t("./object_to_query_param_string")),o=r(t("./package_version")),a=r(t("./fetch")),c=r(t("./abort-controller")),u="Airtable.js/"+o.default;function l(t,e,n,r,o,h,d){var f=t._airtable._endpointUrl+"/v"+t._airtable._apiVersionMajor+"/"+t._id+n+"?"+i.default(r),p={authorization:"Bearer "+t._airtable._apiKey,"x-api-version":t._airtable._apiVersion,"x-airtable-application-id":t.getId(),"content-type":"application/json"};"undefined"!=typeof window?p["x-airtable-user-agent"]=u:p["User-Agent"]=u;var g=new c.default,m=e.toUpperCase(),y={method:m,headers:p,signal:g.signal};null!==o&&("GET"===m||"HEAD"===m?console.warn("body argument to runAction are ignored with GET or HEAD requests"):y.body=JSON.stringify(o));var v=setTimeout((function(){g.abort()}),t._airtable._requestTimeout);a.default(f,y).then((function(i){if(clearTimeout(v),429!==i.status||t._airtable._noRetryIfRateLimited)i.json().then((function(e){var n=t._checkStatusForError(i.status,e),r={};Object.keys(i).forEach((function(t){r[t]=i[t]})),r.body=e,r.statusCode=i.status,h(n,r,e)})).catch((function(){h(t._checkStatusForError(i.status))}));else{var a=s.default(d);setTimeout((function(){l(t,e,n,r,o,h,d+1)}),a)}})).catch((function(t){clearTimeout(v),h(t)}))}e.exports=l},{"./abort-controller":1,"./exponential_backoff_with_jitter":6,"./fetch":7,"./object_to_query_param_string":11,"./package_version":12}],17:[function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t},r.apply(this,arguments)},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},i=s(t("lodash/isPlainObject")),o=s(t("./deprecate")),a=s(t("./query")),c=s(t("./record")),u=s(t("./callback_to_promise")),l=function(){function t(t,e,n){if(!e&&!n)throw new Error("Table name or table ID is required");this._base=t,this.id=e,this.name=n,this.find=u.default(this._findRecordById,this),this.select=this._selectRecords.bind(this),this.create=u.default(this._createRecords,this),this.update=u.default(this._updateRecords.bind(this,!1),this),this.replace=u.default(this._updateRecords.bind(this,!0),this),this.destroy=u.default(this._destroyRecord,this),this.list=o.default(this._listRecords.bind(this),"table.list","Airtable: `list()` is deprecated. Use `select()` instead."),this.forEach=o.default(this._forEachRecord.bind(this),"table.forEach","Airtable: `forEach()` is deprecated. Use `select()` instead.")}return t.prototype._findRecordById=function(t,e){new c.default(this,t).fetch(e)},t.prototype._selectRecords=function(t){if(void 0===t&&(t={}),arguments.length>1&&console.warn("Airtable: `select` takes only one parameter, but it was given "+arguments.length+" parameters. Use `eachPage` or `firstPage` to fetch records."),i.default(t)){var e=a.default.validateParams(t);if(e.errors.length){var n=e.errors.map((function(t){return"  * "+t}));throw new Error("Airtable: invalid parameters for `select`:\n"+n.join("\n"))}return e.ignoredKeys.length&&console.warn("Airtable: the following parameters to `select` will be ignored: "+e.ignoredKeys.join(", ")),new a.default(this,e.validParams)}throw new Error("Airtable: the parameter for `select` should be a plain object or undefined.")},t.prototype._urlEncodedNameOrId=function(){return this.id||encodeURIComponent(this.name)},t.prototype._createRecords=function(t,e,n){var s,i=this,o=Array.isArray(t);n||(n=e,e={}),s=r(o?{records:t}:{fields:t},e),this._base.runAction("post","/"+this._urlEncodedNameOrId()+"/",{},s,(function(t,e,r){var s;t?n(t):(s=o?r.records.map((function(t){return new c.default(i,t.id,t)})):new c.default(i,r.id,r),n(null,s))}))},t.prototype._updateRecords=function(t,e,n,s,o){var a,u=this;if(Array.isArray(e)){var l=e;a=i.default(n)?n:{},o=s||n;var h=t?"put":"patch",d=r({records:l},a);this._base.runAction(h,"/"+this._urlEncodedNameOrId()+"/",{},d,(function(t,e,n){if(t)o(t);else{var r=n.records.map((function(t){return new c.default(u,t.id,t)}));o(null,r)}}))}else{var f=e,p=n;a=i.default(s)?s:{},o=o||s;var g=new c.default(this,f);t?g.putUpdate(p,a,o):g.patchUpdate(p,a,o)}},t.prototype._destroyRecord=function(t,e){var n=this;if(Array.isArray(t)){var r={records:t};this._base.runAction("delete","/"+this._urlEncodedNameOrId(),r,null,(function(t,r,s){if(t)e(t);else{var i=s.records.map((function(t){var e=t.id;return new c.default(n,e,null)}));e(null,i)}}))}else new c.default(this,t).destroy(e)},t.prototype._listRecords=function(t,e,n,s){var i=this;s||(s=n,n={});var o=r({limit:t,offset:e},n);this._base.runAction("get","/"+this._urlEncodedNameOrId()+"/",o,null,(function(t,e,n){if(t)s(t);else{var r=n.records.map((function(t){return new c.default(i,null,t)}));s(null,r,n.offset)}}))},t.prototype._forEachRecord=function(e,n,r){var s=this;2===arguments.length&&(r=n,n=e,e={});var i=t.__recordsPerPageForIteration||100,o=null,a=function(){s._listRecords(i,o,e,(function(t,e,s){if(t)r(t);else{for(var i=0;i<e.length;i++)n(e[i]);s?(o=s,a()):r()}}))};a()},t}();e.exports=l},{"./callback_to_promise":4,"./deprecate":5,"./query":13,"./record":15,"lodash/isPlainObject":89}],18:[function(t,e,n){function r(t,e){return function(n){return t(n)?{pass:!0}:{pass:!1,error:e}}}r.isOneOf=function(t){return t.includes.bind(t)},r.isArrayOf=function(t){return function(e){return Array.isArray(e)&&e.every(t)}},e.exports=r},{}],19:[function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?u(t):e}function h(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}function d(t,e,n){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=h(t,e);if(r){var s=Object.getOwnPropertyDescriptor(r,e);return s.get?s.get.call(n):s.value}},d(t,e,n||t)}Object.defineProperty(n,"__esModule",{value:!0});var f=function(){function t(){r(this,t),Object.defineProperty(this,"listeners",{value:{},writable:!0,configurable:!0})}return i(t,[{key:"addEventListener",value:function(t,e){t in this.listeners||(this.listeners[t]=[]),this.listeners[t].push(e)}},{key:"removeEventListener",value:function(t,e){if(t in this.listeners)for(var n=this.listeners[t],r=0,s=n.length;r<s;r++)if(n[r]===e)return void n.splice(r,1)}},{key:"dispatchEvent",value:function(t){var e=this;if(t.type in this.listeners){for(var n=function(n){setTimeout((function(){return n.call(e,t)}))},r=this.listeners[t.type],s=0,i=r.length;s<i;s++)n(r[s]);return!t.defaultPrevented}}}]),t}(),p=function(t){function e(){var t;return r(this,e),(t=l(this,a(e).call(this))).listeners||f.call(u(t)),Object.defineProperty(u(t),"aborted",{value:!1,writable:!0,configurable:!0}),Object.defineProperty(u(t),"onabort",{value:null,writable:!0,configurable:!0}),t}return o(e,t),i(e,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(t){"abort"===t.type&&(this.aborted=!0,"function"==typeof this.onabort&&this.onabort.call(this,t)),d(a(e.prototype),"dispatchEvent",this).call(this,t)}}]),e}(f),g=function(){function t(){r(this,t),Object.defineProperty(this,"signal",{value:new p,writable:!0,configurable:!0})}return i(t,[{key:"abort",value:function(){var t;try{t=new Event("abort")}catch(e){"undefined"!=typeof document?document.createEvent?(t=document.createEvent("Event")).initEvent("abort",!1,!1):(t=document.createEventObject()).type="abort":t={type:"abort",bubbles:!1,cancelable:!1}}this.signal.dispatchEvent(t)}},{key:"toString",value:function(){return"[object AbortController]"}}]),t}();function m(t){return t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL?(console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),!0):"function"==typeof t.Request&&!t.Request.prototype.hasOwnProperty("signal")||!t.AbortController}function y(t){"function"==typeof t&&(t={fetch:t});var e=t,n=e.fetch,r=e.Request,s=void 0===r?n.Request:r,i=e.AbortController,o=e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,a=void 0!==o&&o;if(!m({fetch:n,Request:s,AbortController:i,__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL:a}))return{fetch:n,Request:c};var c=s;(c&&!c.prototype.hasOwnProperty("signal")||a)&&(c=function(t,e){var n;e&&e.signal&&(n=e.signal,delete e.signal);var r=new s(t,e);return n&&Object.defineProperty(r,"signal",{writable:!1,enumerable:!1,configurable:!0,value:n}),r},c.prototype=s.prototype);var u=n,l=function(t,e){var n=c&&c.prototype.isPrototypeOf(t)?t.signal:e?e.signal:void 0;if(n){var r;try{r=new DOMException("Aborted","AbortError")}catch(t){(r=new Error("Aborted")).name="AbortError"}if(n.aborted)return Promise.reject(r);var s=new Promise((function(t,e){n.addEventListener("abort",(function(){return e(r)}),{once:!0})}));return e&&e.signal&&delete e.signal,Promise.race([s,u(t,e)])}return u(t,e)};return{fetch:l,Request:c}}"undefined"!=typeof Symbol&&Symbol.toStringTag&&(g.prototype[Symbol.toStringTag]="AbortController",p.prototype[Symbol.toStringTag]="AbortSignal"),n.AbortController=g,n.AbortSignal=p,n.abortableFetch=y},{}],20:[function(t,e,n){},{}],21:[function(t,e,n){var r=t("./_hashClear"),s=t("./_hashDelete"),i=t("./_hashGet"),o=t("./_hashHas"),a=t("./_hashSet");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=i,c.prototype.has=o,c.prototype.set=a,e.exports=c},{"./_hashClear":46,"./_hashDelete":47,"./_hashGet":48,"./_hashHas":49,"./_hashSet":50}],22:[function(t,e,n){var r=t("./_listCacheClear"),s=t("./_listCacheDelete"),i=t("./_listCacheGet"),o=t("./_listCacheHas"),a=t("./_listCacheSet");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=i,c.prototype.has=o,c.prototype.set=a,e.exports=c},{"./_listCacheClear":56,"./_listCacheDelete":57,"./_listCacheGet":58,"./_listCacheHas":59,"./_listCacheSet":60}],23:[function(t,e,n){var r=t("./_getNative")(t("./_root"),"Map");e.exports=r},{"./_getNative":42,"./_root":72}],24:[function(t,e,n){var r=t("./_mapCacheClear"),s=t("./_mapCacheDelete"),i=t("./_mapCacheGet"),o=t("./_mapCacheHas"),a=t("./_mapCacheSet");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=s,c.prototype.get=i,c.prototype.has=o,c.prototype.set=a,e.exports=c},{"./_mapCacheClear":61,"./_mapCacheDelete":62,"./_mapCacheGet":63,"./_mapCacheHas":64,"./_mapCacheSet":65}],25:[function(t,e,n){var r=t("./_root").Symbol;e.exports=r},{"./_root":72}],26:[function(t,e,n){var r=t("./_baseTimes"),s=t("./isArguments"),i=t("./isArray"),o=t("./isBuffer"),a=t("./_isIndex"),c=t("./isTypedArray"),u=Object.prototype.hasOwnProperty;function l(t,e){var n=i(t),l=!n&&s(t),h=!n&&!l&&o(t),d=!n&&!l&&!h&&c(t),f=n||l||h||d,p=f?r(t.length,String):[],g=p.length;for(var m in t)!e&&!u.call(t,m)||f&&("length"==m||h&&("offset"==m||"parent"==m)||d&&("buffer"==m||"byteLength"==m||"byteOffset"==m)||a(m,g))||p.push(m);return p}e.exports=l},{"./_baseTimes":35,"./_isIndex":51,"./isArguments":78,"./isArray":79,"./isBuffer":82,"./isTypedArray":92}],27:[function(t,e,n){function r(t,e){for(var n=-1,r=null==t?0:t.length,s=Array(r);++n<r;)s[n]=e(t[n],n,t);return s}e.exports=r},{}],28:[function(t,e,n){var r=t("./eq");function s(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}e.exports=s},{"./eq":76}],29:[function(t,e,n){var r=t("./_castPath"),s=t("./_toKey");function i(t,e){for(var n=0,i=(e=r(e,t)).length;null!=t&&n<i;)t=t[s(e[n++])];return n&&n==i?t:void 0}e.exports=i},{"./_castPath":38,"./_toKey":74}],30:[function(t,e,n){var r=t("./_Symbol"),s=t("./_getRawTag"),i=t("./_objectToString"),o="[object Null]",a="[object Undefined]",c=r?r.toStringTag:void 0;function u(t){return null==t?void 0===t?a:o:c&&c in Object(t)?s(t):i(t)}e.exports=u},{"./_Symbol":25,"./_getRawTag":44,"./_objectToString":70}],31:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isObjectLike"),i="[object Arguments]";function o(t){return s(t)&&r(t)==i}e.exports=o},{"./_baseGetTag":30,"./isObjectLike":88}],32:[function(t,e,n){var r=t("./isFunction"),s=t("./_isMasked"),i=t("./isObject"),o=t("./_toSource"),a=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,u=Function.prototype,l=Object.prototype,h=u.toString,d=l.hasOwnProperty,f=RegExp("^"+h.call(d).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function p(t){return!(!i(t)||s(t))&&(r(t)?f:c).test(o(t))}e.exports=p},{"./_isMasked":54,"./_toSource":75,"./isFunction":83,"./isObject":87}],33:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isLength"),i=t("./isObjectLike"),o="[object Arguments]",a="[object Array]",c="[object Boolean]",u="[object Date]",l="[object Error]",h="[object Function]",d="[object Map]",f="[object Number]",p="[object Object]",g="[object RegExp]",m="[object Set]",y="[object String]",v="[object WeakMap]",_="[object ArrayBuffer]",w="[object DataView]",b="[object Float64Array]",E="[object Int8Array]",T="[object Int16Array]",I="[object Int32Array]",k="[object Uint8Array]",C="[object Uint8ClampedArray]",S="[object Uint16Array]",A="[object Uint32Array]",O={};function R(t){return i(t)&&s(t.length)&&!!O[r(t)]}O["[object Float32Array]"]=O[b]=O[E]=O[T]=O[I]=O[k]=O[C]=O[S]=O[A]=!0,O[o]=O[a]=O[_]=O[c]=O[w]=O[u]=O[l]=O[h]=O[d]=O[f]=O[p]=O[g]=O[m]=O[y]=O[v]=!1,e.exports=R},{"./_baseGetTag":30,"./isLength":84,"./isObjectLike":88}],34:[function(t,e,n){var r=t("./_isPrototype"),s=t("./_nativeKeys"),i=Object.prototype.hasOwnProperty;function o(t){if(!r(t))return s(t);var e=[];for(var n in Object(t))i.call(t,n)&&"constructor"!=n&&e.push(n);return e}e.exports=o},{"./_isPrototype":55,"./_nativeKeys":68}],35:[function(t,e,n){function r(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}e.exports=r},{}],36:[function(t,e,n){var r=t("./_Symbol"),s=t("./_arrayMap"),i=t("./isArray"),o=t("./isSymbol"),a=1/0,c=r?r.prototype:void 0,u=c?c.toString:void 0;function l(t){if("string"==typeof t)return t;if(i(t))return s(t,l)+"";if(o(t))return u?u.call(t):"";var e=t+"";return"0"==e&&1/t==-a?"-0":e}e.exports=l},{"./_Symbol":25,"./_arrayMap":27,"./isArray":79,"./isSymbol":91}],37:[function(t,e,n){function r(t){return function(e){return t(e)}}e.exports=r},{}],38:[function(t,e,n){var r=t("./isArray"),s=t("./_isKey"),i=t("./_stringToPath"),o=t("./toString");function a(t,e){return r(t)?t:s(t,e)?[t]:i(o(t))}e.exports=a},{"./_isKey":52,"./_stringToPath":73,"./isArray":79,"./toString":96}],39:[function(t,e,n){var r=t("./_root")["__core-js_shared__"];e.exports=r},{"./_root":72}],40:[function(t,e,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,void 0!==$t?$t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],41:[function(t,e,n){var r=t("./_isKeyable");function s(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}e.exports=s},{"./_isKeyable":53}],42:[function(t,e,n){var r=t("./_baseIsNative"),s=t("./_getValue");function i(t,e){var n=s(t,e);return r(n)?n:void 0}e.exports=i},{"./_baseIsNative":32,"./_getValue":45}],43:[function(t,e,n){var r=t("./_overArg")(Object.getPrototypeOf,Object);e.exports=r},{"./_overArg":71}],44:[function(t,e,n){var r=t("./_Symbol"),s=Object.prototype,i=s.hasOwnProperty,o=s.toString,a=r?r.toStringTag:void 0;function c(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var s=o.call(t);return r&&(e?t[a]=n:delete t[a]),s}e.exports=c},{"./_Symbol":25}],45:[function(t,e,n){function r(t,e){return null==t?void 0:t[e]}e.exports=r},{}],46:[function(t,e,n){var r=t("./_nativeCreate");function s(){this.__data__=r?r(null):{},this.size=0}e.exports=s},{"./_nativeCreate":67}],47:[function(t,e,n){function r(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}e.exports=r},{}],48:[function(t,e,n){var r=t("./_nativeCreate"),s="__lodash_hash_undefined__",i=Object.prototype.hasOwnProperty;function o(t){var e=this.__data__;if(r){var n=e[t];return n===s?void 0:n}return i.call(e,t)?e[t]:void 0}e.exports=o},{"./_nativeCreate":67}],49:[function(t,e,n){var r=t("./_nativeCreate"),s=Object.prototype.hasOwnProperty;function i(t){var e=this.__data__;return r?void 0!==e[t]:s.call(e,t)}e.exports=i},{"./_nativeCreate":67}],50:[function(t,e,n){var r=t("./_nativeCreate"),s="__lodash_hash_undefined__";function i(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?s:e,this}e.exports=i},{"./_nativeCreate":67}],51:[function(t,e,n){var r=9007199254740991,s=/^(?:0|[1-9]\d*)$/;function i(t,e){var n=typeof t;return!!(e=null==e?r:e)&&("number"==n||"symbol"!=n&&s.test(t))&&t>-1&&t%1==0&&t<e}e.exports=i},{}],52:[function(t,e,n){var r=t("./isArray"),s=t("./isSymbol"),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;function a(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!s(t))||o.test(t)||!i.test(t)||null!=e&&t in Object(e)}e.exports=a},{"./isArray":79,"./isSymbol":91}],53:[function(t,e,n){function r(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}e.exports=r},{}],54:[function(t,e,n){var r,s=t("./_coreJsData"),i=(r=/[^.]+$/.exec(s&&s.keys&&s.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";function o(t){return!!i&&i in t}e.exports=o},{"./_coreJsData":39}],55:[function(t,e,n){var r=Object.prototype;function s(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}e.exports=s},{}],56:[function(t,e,n){function r(){this.__data__=[],this.size=0}e.exports=r},{}],57:[function(t,e,n){var r=t("./_assocIndexOf"),s=Array.prototype.splice;function i(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():s.call(e,n,1),--this.size,0))}e.exports=i},{"./_assocIndexOf":28}],58:[function(t,e,n){var r=t("./_assocIndexOf");function s(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}e.exports=s},{"./_assocIndexOf":28}],59:[function(t,e,n){var r=t("./_assocIndexOf");function s(t){return r(this.__data__,t)>-1}e.exports=s},{"./_assocIndexOf":28}],60:[function(t,e,n){var r=t("./_assocIndexOf");function s(t,e){var n=this.__data__,s=r(n,t);return s<0?(++this.size,n.push([t,e])):n[s][1]=e,this}e.exports=s},{"./_assocIndexOf":28}],61:[function(t,e,n){var r=t("./_Hash"),s=t("./_ListCache"),i=t("./_Map");function o(){this.size=0,this.__data__={hash:new r,map:new(i||s),string:new r}}e.exports=o},{"./_Hash":21,"./_ListCache":22,"./_Map":23}],62:[function(t,e,n){var r=t("./_getMapData");function s(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}e.exports=s},{"./_getMapData":41}],63:[function(t,e,n){var r=t("./_getMapData");function s(t){return r(this,t).get(t)}e.exports=s},{"./_getMapData":41}],64:[function(t,e,n){var r=t("./_getMapData");function s(t){return r(this,t).has(t)}e.exports=s},{"./_getMapData":41}],65:[function(t,e,n){var r=t("./_getMapData");function s(t,e){var n=r(this,t),s=n.size;return n.set(t,e),this.size+=n.size==s?0:1,this}e.exports=s},{"./_getMapData":41}],66:[function(t,e,n){var r=t("./memoize"),s=500;function i(t){var e=r(t,(function(t){return n.size===s&&n.clear(),t})),n=e.cache;return e}e.exports=i},{"./memoize":94}],67:[function(t,e,n){var r=t("./_getNative")(Object,"create");e.exports=r},{"./_getNative":42}],68:[function(t,e,n){var r=t("./_overArg")(Object.keys,Object);e.exports=r},{"./_overArg":71}],69:[function(t,e,n){var r=t("./_freeGlobal"),s="object"==typeof n&&n&&!n.nodeType&&n,i=s&&"object"==typeof e&&e&&!e.nodeType&&e,o=i&&i.exports===s&&r.process,a=function(){try{var t=i&&i.require&&i.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();e.exports=a},{"./_freeGlobal":40}],70:[function(t,e,n){var r=Object.prototype.toString;function s(t){return r.call(t)}e.exports=s},{}],71:[function(t,e,n){function r(t,e){return function(n){return t(e(n))}}e.exports=r},{}],72:[function(t,e,n){var r=t("./_freeGlobal"),s="object"==typeof self&&self&&self.Object===Object&&self,i=r||s||Function("return this")();e.exports=i},{"./_freeGlobal":40}],73:[function(t,e,n){var r=t("./_memoizeCapped"),s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,o=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(s,(function(t,n,r,s){e.push(r?s.replace(i,"$1"):n||t)})),e}));e.exports=o},{"./_memoizeCapped":66}],74:[function(t,e,n){var r=t("./isSymbol"),s=1/0;function i(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-s?"-0":e}e.exports=i},{"./isSymbol":91}],75:[function(t,e,n){var r=Function.prototype.toString;function s(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}e.exports=s},{}],76:[function(t,e,n){function r(t,e){return t===e||t!=t&&e!=e}e.exports=r},{}],77:[function(t,e,n){var r=t("./_baseGet");function s(t,e,n){var s=null==t?void 0:r(t,e);return void 0===s?n:s}e.exports=s},{"./_baseGet":29}],78:[function(t,e,n){var r=t("./_baseIsArguments"),s=t("./isObjectLike"),i=Object.prototype,o=i.hasOwnProperty,a=i.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return s(t)&&o.call(t,"callee")&&!a.call(t,"callee")};e.exports=c},{"./_baseIsArguments":31,"./isObjectLike":88}],79:[function(t,e,n){var r=Array.isArray;e.exports=r},{}],80:[function(t,e,n){var r=t("./isFunction"),s=t("./isLength");function i(t){return null!=t&&s(t.length)&&!r(t)}e.exports=i},{"./isFunction":83,"./isLength":84}],81:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isObjectLike"),i="[object Boolean]";function o(t){return!0===t||!1===t||s(t)&&r(t)==i}e.exports=o},{"./_baseGetTag":30,"./isObjectLike":88}],82:[function(t,e,n){var r=t("./_root"),s=t("./stubFalse"),i="object"==typeof n&&n&&!n.nodeType&&n,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,c=(a?a.isBuffer:void 0)||s;e.exports=c},{"./_root":72,"./stubFalse":95}],83:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isObject"),i="[object AsyncFunction]",o="[object Function]",a="[object GeneratorFunction]",c="[object Proxy]";function u(t){if(!s(t))return!1;var e=r(t);return e==o||e==a||e==i||e==c}e.exports=u},{"./_baseGetTag":30,"./isObject":87}],84:[function(t,e,n){var r=9007199254740991;function s(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}e.exports=s},{}],85:[function(t,e,n){function r(t){return null==t}e.exports=r},{}],86:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isObjectLike"),i="[object Number]";function o(t){return"number"==typeof t||s(t)&&r(t)==i}e.exports=o},{"./_baseGetTag":30,"./isObjectLike":88}],87:[function(t,e,n){function r(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}e.exports=r},{}],88:[function(t,e,n){function r(t){return null!=t&&"object"==typeof t}e.exports=r},{}],89:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./_getPrototype"),i=t("./isObjectLike"),o="[object Object]",a=Function.prototype,c=Object.prototype,u=a.toString,l=c.hasOwnProperty,h=u.call(Object);function d(t){if(!i(t)||r(t)!=o)return!1;var e=s(t);if(null===e)return!0;var n=l.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&u.call(n)==h}e.exports=d},{"./_baseGetTag":30,"./_getPrototype":43,"./isObjectLike":88}],90:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isArray"),i=t("./isObjectLike"),o="[object String]";function a(t){return"string"==typeof t||!s(t)&&i(t)&&r(t)==o}e.exports=a},{"./_baseGetTag":30,"./isArray":79,"./isObjectLike":88}],91:[function(t,e,n){var r=t("./_baseGetTag"),s=t("./isObjectLike"),i="[object Symbol]";function o(t){return"symbol"==typeof t||s(t)&&r(t)==i}e.exports=o},{"./_baseGetTag":30,"./isObjectLike":88}],92:[function(t,e,n){var r=t("./_baseIsTypedArray"),s=t("./_baseUnary"),i=t("./_nodeUtil"),o=i&&i.isTypedArray,a=o?s(o):r;e.exports=a},{"./_baseIsTypedArray":33,"./_baseUnary":37,"./_nodeUtil":69}],93:[function(t,e,n){var r=t("./_arrayLikeKeys"),s=t("./_baseKeys"),i=t("./isArrayLike");function o(t){return i(t)?r(t):s(t)}e.exports=o},{"./_arrayLikeKeys":26,"./_baseKeys":34,"./isArrayLike":80}],94:[function(t,e,n){var r=t("./_MapCache"),s="Expected a function";function i(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(s);var n=function(){var r=arguments,s=e?e.apply(this,r):r[0],i=n.cache;if(i.has(s))return i.get(s);var o=t.apply(this,r);return n.cache=i.set(s,o)||i,o};return n.cache=new(i.Cache||r),n}i.Cache=r,e.exports=i},{"./_MapCache":24}],95:[function(t,e,n){function r(){return!1}e.exports=r},{}],96:[function(t,e,n){var r=t("./_baseToString");function s(t){return null==t?"":r(t)}e.exports=s},{"./_baseToString":36}],airtable:[function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},s=r(t("./base")),i=r(t("./record")),o=r(t("./table")),a=r(t("./airtable_error")),c=function(){function t(e){void 0===e&&(e={});var n=t.default_config(),r=e.apiVersion||t.apiVersion||n.apiVersion;if(Object.defineProperties(this,{_apiKey:{value:e.apiKey||t.apiKey||n.apiKey},_apiVersion:{value:r},_apiVersionMajor:{value:r.split(".")[0]},_customHeaders:{value:e.customHeaders||{}},_endpointUrl:{value:e.endpointUrl||t.endpointUrl||n.endpointUrl},_noRetryIfRateLimited:{value:e.noRetryIfRateLimited||t.noRetryIfRateLimited||n.noRetryIfRateLimited},_requestTimeout:{value:e.requestTimeout||t.requestTimeout||n.requestTimeout}}),!this._apiKey)throw new Error("An API key is required to connect to Airtable")}return t.prototype.base=function(t){return s.default.createFunctor(this,t)},t.default_config=function(){return{endpointUrl:"https://api.airtable.com",apiVersion:"0.1.0",apiKey:void 0,noRetryIfRateLimited:!1,requestTimeout:3e5}},t.configure=function(e){var n=e.apiKey,r=e.endpointUrl,s=e.apiVersion,i=e.noRetryIfRateLimited,o=e.requestTimeout;t.apiKey=n,t.endpointUrl=r,t.apiVersion=s,t.noRetryIfRateLimited=i,t.requestTimeout=o},t.base=function(e){return(new t).base(e)},t.Base=s.default,t.Record=i.default,t.Table=o.default,t.Error=a.default,t}();e.exports=c},{"./airtable_error":2,"./base":3,"./record":15,"./table":17}]},{},["airtable"])("airtable")})),Gt=Bt(Kt);class Ht{constructor(t,e){this.id=t,this.name=e}}class Wt{constructor(t){this.value=t}}class Qt{constructor(t,e,n){this.createTeamPort=t,this.getLoginParametersPort=e,this.getTeamDetailsPort=n}async getTeamDetailsBy(t){const e=this.getLoginParametersPort.getLoginParameters();return await this.getTeamDetailsPort.getTeamDetailsWith(t,e)}async createTeamWith(t,e){const n=this.getLoginParametersPort.getLoginParameters();return await this.createTeamPort.createTeamWith(t,e,n)}}class Xt{constructor(t,e,n){this.id=t,this.name=e,this.choozrId=n}}class Yt{constructor(t){this.value=t}}class Jt{constructor(t){this.value=t}}class Zt{constructor(t,e){this.teamId=t,this.membersCount=e}}class te{constructor(t,e,n){this.teamId=t,this.name=e,this.membersNames=n}}class ee{constructor(t){this.value=t}}class ne{constructor(){this.recordToTeam=t=>new Xt(new Yt(t.id),new Jt(t.get("name")),new Wt(t.get("id (from Choozr)"))),this.recordToTeamDetails=t=>new te(new Yt(t.id),new Jt(t.get("name")),t.get("name (from Member)").map((t=>new ee(t)))),this.recordToTeamMembersCount=t=>new Zt(new Yt(t.id),t.get("membersCount"))}async getChoozrTeamsWith(t,e){return(await this.fetchChoozrTeamsRecords(t,e)).map(this.recordToTeam)}async getTeamDetailsWith(t,e){const n=new Gt({apiKey:e.apiKey}).base(e.appId);return(await n("Team").select({filterByFormula:`{id} = '${t.value}'`}).firstPage()).map(this.recordToTeamDetails)[0]}async getTeamsMembersCountFrom(t,e){return(await this.fetchChoozrTeamsRecords(t,e)).map(this.recordToTeamMembersCount)}async createTeamWith(t,e,n){const r=new Gt({apiKey:n.apiKey}).base(n.appId);return(await r("Team").create([{fields:{name:e.value,choozr:[t.value]}}])).map(this.recordToTeam)[0]}async fetchChoozrTeamsRecords(t,e){const n=new Gt({apiKey:e.apiKey}).base(e.appId);return await n("Team").select({filterByFormula:`{id (from Choozr)} = '${t.value}'`}).firstPage()}}var re=zt((function(t,e){t.exports=function(){var t=function(){},e=Object.prototype.hasOwnProperty,n=Array.prototype.slice;function r(e,n){var r;return"function"==typeof Object.create?r=Object.create(e):(t.prototype=e,r=new t,t.prototype=null),n&&i(!0,r,n),r}function s(t,e,n,s){var o=this;return"string"!=typeof t&&(s=n,n=e,e=t,t=null),"function"!=typeof e&&(s=n,n=e,e=function(){return o.apply(this,arguments)}),i(!1,e,o,s),e.prototype=r(o.prototype,n),e.prototype.constructor=e,e.class_=t||o.class_,e.super_=o,e}function i(t,r,s){for(var i,o,a=0,c=(s=n.call(arguments,2)).length;a<c;a++)for(i in o=s[a])t&&!e.call(o,i)||(r[i]=o[i])}var o=s;function a(){}a.class_="Nevis",a.super_=Object,a.extend=o;var c=a,u=c.extend((function(t,e,n){this.qrious=t,this.element=e,this.element.qrious=t,this.enabled=Boolean(n)}),{draw:function(t){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(t){var e=this.qrious,n=e.padding||0,r=Math.floor((e.size-2*n)/t.width);return Math.max(1,r)},render:function(t){this.enabled&&(this.resize(),this.reset(),this.draw(t))},reset:function(){},resize:function(){}}),l=u,h=l.extend({draw:function(t){var e,n,r=this.qrious,s=this.getModuleSize(t),i=parseInt((this.element.width-t.width*s)/2),o=this.element.getContext("2d");for(o.fillStyle=r.foreground,o.globalAlpha=r.foregroundAlpha,e=0;e<t.width;e++)for(n=0;n<t.width;n++)t.buffer[n*t.width+e]&&o.fillRect(s*e+i,s*n+i,s,s)},reset:function(){var t=this.qrious,e=this.element.getContext("2d"),n=t.size;e.lineWidth=1,e.clearRect(0,0,n,n),e.fillStyle=t.background,e.globalAlpha=t.backgroundAlpha,e.fillRect(0,0,n,n)},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),d=h,f=c.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),p=c.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),g=c.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),m=c.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),y=c.extend((function(t){var e,n,r,s,i,o=t.value.length;for(this._badness=[],this._level=p.LEVELS[t.level],this._polynomial=[],this._value=t.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,r=4*(this._level-1)+16*(this._version-1),s=p.BLOCKS[r++],i=p.BLOCKS[r++],e=p.BLOCKS[r++],n=p.BLOCKS[r],!(o<=(r=e*(s+i)+i-3+(this._version<=9)))););this._dataBlock=e,this._eccBlock=n,this._neccBlock1=s,this._neccBlock2=i;var a=this.width=17+4*this._version;this.buffer=y._createArray(a*a),this._ecc=y._createArray(e+(e+n)*(s+i)+i),this._mask=y._createArray((a*(a+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+a*(a-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(o),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()}),{_addAlignment:function(t,e){var n,r=this.buffer,s=this.width;for(r[t+s*e]=1,n=-2;n<2;n++)r[t+n+s*(e-2)]=1,r[t-2+s*(e+n+1)]=1,r[t+2+s*(e+n)]=1,r[t+n+1+s*(e+2)]=1;for(n=0;n<2;n++)this._setMask(t-1,e+n),this._setMask(t+1,e-n),this._setMask(t-n,e-1),this._setMask(t+n,e+1)},_appendData:function(t,e,n,r){var s,i,o,a=this._polynomial,c=this._stringBuffer;for(i=0;i<r;i++)c[n+i]=0;for(i=0;i<e;i++){if(255!==(s=g.LOG[c[t+i]^c[n]]))for(o=1;o<r;o++)c[n+o-1]=c[n+o]^g.EXPONENT[y._modN(s+a[r-o])];else for(o=n;o<n+r;o++)c[o]=c[o+1];c[n+r-1]=255===s?0:g.EXPONENT[y._modN(s+a[0])]}},_appendEccToData:function(){var t,e=0,n=this._dataBlock,r=this._calculateMaxLength(),s=this._eccBlock;for(t=0;t<this._neccBlock1;t++)this._appendData(e,n,r,s),e+=n,r+=s;for(t=0;t<this._neccBlock2;t++)this._appendData(e,n+1,r,s),e+=n+1,r+=s},_applyMask:function(t){var e,n,r,s,i=this.buffer,o=this.width;switch(t){case 0:for(s=0;s<o;s++)for(r=0;r<o;r++)r+s&1||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 1:for(s=0;s<o;s++)for(r=0;r<o;r++)1&s||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 2:for(s=0;s<o;s++)for(e=0,r=0;r<o;r++,e++)3===e&&(e=0),e||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 3:for(n=0,s=0;s<o;s++,n++)for(3===n&&(n=0),e=n,r=0;r<o;r++,e++)3===e&&(e=0),e||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 4:for(s=0;s<o;s++)for(e=0,n=s>>1&1,r=0;r<o;r++,e++)3===e&&(e=0,n=!n),n||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 5:for(n=0,s=0;s<o;s++,n++)for(3===n&&(n=0),e=0,r=0;r<o;r++,e++)3===e&&(e=0),(r&s&1)+!(!e|!n)||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 6:for(n=0,s=0;s<o;s++,n++)for(3===n&&(n=0),e=0,r=0;r<o;r++,e++)3===e&&(e=0),(r&s&1)+(e&&e===n)&1||this._isMasked(r,s)||(i[r+s*o]^=1);break;case 7:for(n=0,s=0;s<o;s++,n++)for(3===n&&(n=0),e=0,r=0;r<o;r++,e++)3===e&&(e=0),(e&&e===n)+(r+s&1)&1||this._isMasked(r,s)||(i[r+s*o]^=1)}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var t,e,n=this._eccBlock,r=this._polynomial;for(r[0]=1,t=0;t<n;t++){for(r[t+1]=1,e=t;e>0;e--)r[e]=r[e]?r[e-1]^g.EXPONENT[y._modN(g.LOG[r[e]]+t)]:r[e-1];r[0]=g.EXPONENT[y._modN(g.LOG[r[0]]+t)]}for(t=0;t<=n;t++)r[t]=g.LOG[r[t]]},_checkBadness:function(){var t,e,n,r,s,i=0,o=this._badness,a=this.buffer,c=this.width;for(s=0;s<c-1;s++)for(r=0;r<c-1;r++)(a[r+c*s]&&a[r+1+c*s]&&a[r+c*(s+1)]&&a[r+1+c*(s+1)]||!(a[r+c*s]||a[r+1+c*s]||a[r+c*(s+1)]||a[r+1+c*(s+1)]))&&(i+=y.N2);var u=0;for(s=0;s<c;s++){for(n=0,o[0]=0,t=0,r=0;r<c;r++)t===(e=a[r+c*s])?o[n]++:o[++n]=1,u+=(t=e)?1:-1;i+=this._getBadness(n)}u<0&&(u=-u);var l=0,h=u;for(h+=h<<2,h<<=1;h>c*c;)h-=c*c,l++;for(i+=l*y.N4,r=0;r<c;r++){for(n=0,o[0]=0,t=0,s=0;s<c;s++)t===(e=a[r+c*s])?o[n]++:o[++n]=1,t=e;i+=this._getBadness(n)}return i},_convertBitStream:function(t){var e,n,r=this._ecc,s=this._version;for(n=0;n<t;n++)r[n]=this._value.charCodeAt(n);var i=this._stringBuffer=r.slice(),o=this._calculateMaxLength();t>=o-2&&(t=o-2,s>9&&t--);var a=t;if(s>9){for(i[a+2]=0,i[a+3]=0;a--;)e=i[a],i[a+3]|=255&e<<4,i[a+2]=e>>4;i[2]|=255&t<<4,i[1]=t>>4,i[0]=64|t>>12}else{for(i[a+1]=0,i[a+2]=0;a--;)e=i[a],i[a+2]|=255&e<<4,i[a+1]=e>>4;i[1]|=255&t<<4,i[0]=64|t>>4}for(a=t+3-(s<10);a<o;)i[a++]=236,i[a++]=17},_getBadness:function(t){var e,n=0,r=this._badness;for(e=0;e<=t;e++)r[e]>=5&&(n+=y.N1+r[e]-5);for(e=3;e<t-1;e+=2)r[e-2]===r[e+2]&&r[e+2]===r[e-1]&&r[e-1]===r[e+1]&&3*r[e-1]===r[e]&&(0===r[e-3]||e+3>t||3*r[e-3]>=4*r[e]||3*r[e+3]>=4*r[e])&&(n+=y.N3);return n},_finish:function(){var t,e;this._stringBuffer=this.buffer.slice();var n=0,r=3e4;for(e=0;e<8&&(this._applyMask(e),(t=this._checkBadness())<r&&(r=t,n=e),7!==n);e++)this.buffer=this._stringBuffer.slice();n!==e&&this._applyMask(n),r=p.FINAL_FORMAT[n+(this._level-1<<3)];var s=this.buffer,i=this.width;for(e=0;e<8;e++,r>>=1)1&r&&(s[i-1-e+8*i]=1,e<6?s[8+i*e]=1:s[8+i*(e+1)]=1);for(e=0;e<7;e++,r>>=1)1&r&&(s[8+i*(i-7+e)]=1,e?s[6-e+8*i]=1:s[7+8*i]=1)},_interleaveBlocks:function(){var t,e,n=this._dataBlock,r=this._ecc,s=this._eccBlock,i=0,o=this._calculateMaxLength(),a=this._neccBlock1,c=this._neccBlock2,u=this._stringBuffer;for(t=0;t<n;t++){for(e=0;e<a;e++)r[i++]=u[t+e*n];for(e=0;e<c;e++)r[i++]=u[a*n+t+e*(n+1)]}for(e=0;e<c;e++)r[i++]=u[a*n+t+e*(n+1)];for(t=0;t<s;t++)for(e=0;e<a+c;e++)r[i++]=u[o+t+e*s];this._stringBuffer=r},_insertAlignments:function(){var t,e,n,r=this._version,s=this.width;if(r>1)for(t=f.BLOCK[r],n=s-7;;){for(e=s-7;e>t-3&&(this._addAlignment(e,n),!(e<t));)e-=t;if(n<=t+9)break;n-=t,this._addAlignment(6,n),this._addAlignment(n,6)}},_insertFinders:function(){var t,e,n,r,s=this.buffer,i=this.width;for(t=0;t<3;t++){for(e=0,r=0,1===t&&(e=i-7),2===t&&(r=i-7),s[r+3+i*(e+3)]=1,n=0;n<6;n++)s[r+n+i*e]=1,s[r+i*(e+n+1)]=1,s[r+6+i*(e+n)]=1,s[r+n+1+i*(e+6)]=1;for(n=1;n<5;n++)this._setMask(r+n,e+1),this._setMask(r+1,e+n+1),this._setMask(r+5,e+n),this._setMask(r+n+1,e+5);for(n=2;n<4;n++)s[r+n+i*(e+2)]=1,s[r+2+i*(e+n+1)]=1,s[r+4+i*(e+n)]=1,s[r+n+1+i*(e+4)]=1}},_insertTimingGap:function(){var t,e,n=this.width;for(e=0;e<7;e++)this._setMask(7,e),this._setMask(n-8,e),this._setMask(7,e+n-7);for(t=0;t<8;t++)this._setMask(t,7),this._setMask(t+n-8,7),this._setMask(t,n-8)},_insertTimingRowAndColumn:function(){var t,e=this.buffer,n=this.width;for(t=0;t<n-14;t++)1&t?(this._setMask(8+t,6),this._setMask(6,8+t)):(e[8+t+6*n]=1,e[6+n*(8+t)]=1)},_insertVersion:function(){var t,e,n,r,s=this.buffer,i=this._version,o=this.width;if(i>6)for(t=m.BLOCK[i-7],e=17,n=0;n<6;n++)for(r=0;r<3;r++,e--)1&(e>11?i>>e-12:t>>e)?(s[5-n+o*(2-r+o-11)]=1,s[2-r+o-11+o*(5-n)]=1):(this._setMask(5-n,2-r+o-11),this._setMask(2-r+o-11,5-n))},_isMasked:function(t,e){var n=y._getMaskBit(t,e);return 1===this._mask[n]},_pack:function(){var t,e,n,r=1,s=1,i=this.width,o=i-1,a=i-1,c=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(e=0;e<c;e++)for(t=this._stringBuffer[e],n=0;n<8;n++,t<<=1){128&t&&(this.buffer[o+i*a]=1);do{s?o--:(o++,r?0!==a?a--:(r=!r,6==(o-=2)&&(o--,a=9)):a!==i-1?a++:(r=!r,6==(o-=2)&&(o--,a-=8))),s=!s}while(this._isMasked(o,a))}},_reverseMask:function(){var t,e,n=this.width;for(t=0;t<9;t++)this._setMask(t,8);for(t=0;t<8;t++)this._setMask(t+n-8,8),this._setMask(8,t);for(e=0;e<7;e++)this._setMask(8,e+n-7)},_setMask:function(t,e){var n=y._getMaskBit(t,e);this._mask[n]=1},_syncMask:function(){var t,e,n=this.width;for(e=0;e<n;e++)for(t=0;t<=e;t++)this.buffer[t+n*e]&&this._setMask(t,e)}},{_createArray:function(t){var e,n=[];for(e=0;e<t;e++)n[e]=0;return n},_getMaskBit:function(t,e){var n;return t>e&&(n=t,t=e,e=n),n=e,n+=e*e,n>>=1,n+=t},_modN:function(t){for(;t>=255;)t=((t-=255)>>8)+(255&t);return t},N1:3,N2:3,N3:40,N4:10}),v=y,_=l.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),w=_,b=c.extend((function(t,e,n,r){this.name=t,this.modifiable=Boolean(e),this.defaultValue=n,this._valueTransformer=r}),{transform:function(t){var e=this._valueTransformer;return"function"==typeof e?e(t,this):t}}),E=b,T=c.extend(null,{abs:function(t){return null!=t?Math.abs(t):null},hasOwn:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},noop:function(){},toUpperCase:function(t){return null!=t?t.toUpperCase():null}}),I=T,k=c.extend((function(t){this.options={},t.forEach((function(t){this.options[t.name]=t}),this)}),{exists:function(t){return null!=this.options[t]},get:function(t,e){return k._get(this.options[t],e)},getAll:function(t){var e,n=this.options,r={};for(e in n)I.hasOwn(n,e)&&(r[e]=k._get(n[e],t));return r},init:function(t,e,n){var r,s;for(r in"function"!=typeof n&&(n=I.noop),this.options)I.hasOwn(this.options,r)&&(s=this.options[r],k._set(s,s.defaultValue,e),k._createAccessor(s,e,n));this._setAll(t,e,!0)},set:function(t,e,n){return this._set(t,e,n)},setAll:function(t,e){return this._setAll(t,e)},_set:function(t,e,n,r){var s=this.options[t];if(!s)throw new Error("Invalid option: "+t);if(!s.modifiable&&!r)throw new Error("Option cannot be modified: "+t);return k._set(s,e,n)},_setAll:function(t,e,n){if(!t)return!1;var r,s=!1;for(r in t)I.hasOwn(t,r)&&this._set(r,t[r],e,n)&&(s=!0);return s}},{_createAccessor:function(t,e,n){var r={get:function(){return k._get(t,e)}};t.modifiable&&(r.set=function(r){k._set(t,r,e)&&n(r,t)}),Object.defineProperty(e,t.name,r)},_get:function(t,e){return e["_"+t.name]},_set:function(t,e,n){var r="_"+t.name,s=n[r],i=t.transform(null!=e?e:t.defaultValue);return n[r]=i,i!==s}}),C=k,S=c.extend((function(){this._services={}}),{getService:function(t){var e=this._services[t];if(!e)throw new Error("Service is not being managed with name: "+t);return e},setService:function(t,e){if(this._services[t])throw new Error("Service is already managed with name: "+t);e&&(this._services[t]=e)}}),A=S,O=new C([new E("background",!0,"white"),new E("backgroundAlpha",!0,1,I.abs),new E("element"),new E("foreground",!0,"black"),new E("foregroundAlpha",!0,1,I.abs),new E("level",!0,"L",I.toUpperCase),new E("mime",!0,"image/png"),new E("padding",!0,null,I.abs),new E("size",!0,100,I.abs),new E("value",!0,"")]),R=new A,N=c.extend((function(t){O.init(t,this,this.update.bind(this));var e=O.get("element",this),n=R.getService("element"),r=e&&n.isCanvas(e)?e:n.createCanvas(),s=e&&n.isImage(e)?e:n.createImage();this._canvasRenderer=new d(this,r,!0),this._imageRenderer=new w(this,s,s===e),this.update()}),{get:function(){return O.getAll(this)},set:function(t){O.setAll(t,this)&&this.update()},toDataURL:function(t){return this.canvas.toDataURL(t||this.mime)},update:function(){var t=new v({level:this.level,value:this.value});this._canvasRenderer.render(t),this._imageRenderer.render(t)}},{use:function(t){R.setService(t.getName(),t)}});Object.defineProperties(N.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var D=N,L=c.extend({getName:function(){}}).extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(t){},isImage:function(t){}}).extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(t){return t instanceof HTMLCanvasElement},isImage:function(t){return t instanceof HTMLImageElement}}),x=L;return D.use(new x),D}()}));function se(e){let n,r;return{c(){n=g("img"),u(n.src,r=e[2])||w(n,"src",r),w(n,"alt",e[0]),w(n,"class",e[1])},m(t,e){d(t,n,e)},p(t,[e]){4&e&&!u(n.src,r=t[2])&&w(n,"src",r),1&e&&w(n,"alt",t[0]),2&e&&w(n,"class",t[1])},i:t,o:t,d(t){t&&f(n)}}}function ie(t,e,n){const r=new re;let{errorCorrection:s="L"}=e,{background:i="#fff"}=e,{color:o="#000"}=e,{size:a="200"}=e,{value:c=""}=e,{padding:u=0}=e,{className:l="qrcode"}=e,h="";function d(){r.set({background:i,foreground:o,level:s,padding:u,size:a,value:c}),n(2,h=r.toDataURL("image/jpeg"))}return k((()=>{d()})),t.$$set=t=>{"errorCorrection"in t&&n(3,s=t.errorCorrection),"background"in t&&n(4,i=t.background),"color"in t&&n(5,o=t.color),"size"in t&&n(6,a=t.size),"value"in t&&n(0,c=t.value),"padding"in t&&n(7,u=t.padding),"className"in t&&n(1,l=t.className)},t.$$.update=()=>{1&t.$$.dirty&&c&&d()},[c,l,h,s,i,o,a,u]}class oe extends et{constructor(t){super(),tt(this,t,ie,se,o,{errorCorrection:3,background:4,color:5,size:6,value:0,padding:7,className:1})}}function ae(t,e,n){const r=t.slice();return r[16]=e[n].id,r[17]=e[n].name,r}function ce(e){let n,r,s,i,o=e[4],a=[];for(let t=0;t<o.length;t+=1)a[t]=le(ae(e,o,t));return{c(){n=g("table"),r=g("thead"),r.innerHTML="<tr><th>Teams</th></tr>",s=y(),i=g("tbody");for(let t=0;t<a.length;t+=1)a[t].c();w(n,"class","table is-striped is-hoverable")},m(t,e){d(t,n,e),h(n,r),h(n,s),h(n,i);for(let t=0;t<a.length;t+=1)a[t].m(i,null)},p(t,e){if(80&e){let n;for(o=t[4],n=0;n<o.length;n+=1){const r=ae(t,o,n);a[n]?a[n].p(r,e):(a[n]=le(r),a[n].c(),a[n].m(i,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=o.length}},i:t,o:t,d(t){t&&f(n),p(a,t)}}}function ue(e){let n,r,s;return r=new wt({}),{c(){n=g("div"),Y(r.$$.fragment),w(n,"class","is-flex is-justify-content-center")},m(t,e){d(t,n,e),J(r,n,null),s=!0},p:t,i(t){s||(H(r.$$.fragment,t),s=!0)},o(t){W(r.$$.fragment,t),s=!1},d(t){t&&f(n),Z(r)}}}function le(t){let e,n,r,s,i,o,a=t[17].value+"";function c(){return t[8](t[16])}return{c(){e=g("tr"),n=g("td"),r=m(a),s=y(),w(e,"class","is-clickable")},m(t,a){d(t,e,a),h(e,n),h(n,r),h(e,s),i||(o=_(e,"click",c),i=!0)},p(e,n){t=e,16&n&&a!==(a=t[17].value+"")&&b(r,a)},d(t){t&&f(e),i=!1,o()}}}function he(e){let n,r,i,o,a,c,u,l,p;return{c(){n=g("h2"),n.textContent="Nouvelle Équipe",r=y(),i=g("input"),o=y(),a=g("button"),c=m("Créer"),w(i,"id","app-id"),w(i,"class","mt-1"),w(a,"class","mt-4"),a.disabled=u=!e[0]},m(t,s){d(t,n,s),d(t,r,s),d(t,i,s),E(i,e[0]),d(t,o,s),d(t,a,s),h(a,c),l||(p=[_(i,"input",e[9]),_(a,"click",e[5])],l=!0)},p(t,e){1&e&&i.value!==t[0]&&E(i,t[0]),1&e&&u!==(u=!t[0])&&(a.disabled=u)},i:t,o:t,d(t){t&&f(n),t&&f(r),t&&f(i),t&&f(o),t&&f(a),l=!1,s(p)}}}function de(e){let n,r,s;return r=new wt({}),{c(){n=g("div"),Y(r.$$.fragment),w(n,"class","is-flex is-justify-content-center")},m(t,e){d(t,n,e),J(r,n,null),s=!0},p:t,i(t){s||(H(r.$$.fragment,t),s=!0)},o(t){W(r.$$.fragment,t),s=!1},d(t){t&&f(n),Z(r)}}}function fe(t){let e,n,r,s,i,o,a,c,u,l,p,m,v,_,b,E,T;o=new oe({props:{value:t[1]}});const I=[ue,ce],k=[];function C(t,e){return t[2]?0:1}l=C(t),p=k[l]=I[l](t);const S=[de,he],A=[];function O(t,e){return t[3]?0:1}return b=O(t),E=A[b]=S[b](t),{c(){e=g("section"),n=g("div"),r=g("div"),s=g("h1"),s.textContent="Choozr",i=y(),Y(o.$$.fragment),a=y(),c=g("hr"),u=y(),p.c(),m=y(),v=g("hr"),_=y(),E.c(),w(s,"class","is-size-1 has-text-centered mb-5"),w(r,"class","is-flex is-flex-direction-column"),w(n,"class","hero-body is-flex is-justify-content-center"),w(e,"class","hero is-primary is-fullheight")},m(t,f){d(t,e,f),h(e,n),h(n,r),h(r,s),h(r,i),J(o,r,null),h(r,a),h(r,c),h(r,u),k[l].m(r,null),h(r,m),h(r,v),h(r,_),A[b].m(r,null),T=!0},p(t,[e]){const n={};2&e&&(n.value=t[1]),o.$set(n);let s=l;l=C(t),l===s?k[l].p(t,e):(K(),W(k[s],1,1,(()=>{k[s]=null})),G(),p=k[l],p?p.p(t,e):(p=k[l]=I[l](t),p.c()),H(p,1),p.m(r,m));let i=b;b=O(t),b===i?A[b].p(t,e):(K(),W(A[i],1,1,(()=>{A[i]=null})),G(),E=A[b],E?E.p(t,e):(E=A[b]=S[b](t),E.c()),H(E,1),E.m(r,null))},i(t){T||(H(o.$$.fragment,t),H(p),H(E),T=!0)},o(t){W(o.$$.fragment,t),W(p),W(E),T=!1},d(t){t&&f(e),Z(o),k[l].d(),A[b].d()}}}function pe(t,e,n){let{params:r}=e;const s=new Wt(r.choozrId),i=A("generateJoinChoozrURLUseCase"),o=A("getChoozrTeamsUseCase"),a=A("createTeamUseCase"),c=C();let u="",l="",h=!0,d=!1,f=[];function p(){o.getChoozrTeamsWith(s).then((t=>{n(4,f=t)})).catch((t=>console.log(t))).finally((()=>n(2,h=!1)))}function g(t){c("routeEvent",new It(t))}k((()=>{p(),i.generateJoinChoozrURLWith(s).then((t=>{n(1,l=t.value)})).catch((t=>console.log(t)))}));return t.$$set=t=>{"params"in t&&n(7,r=t.params)},[u,l,h,d,f,function(){n(3,d=!0),a.createTeamWith(s,new Jt(u)).then((()=>p())).catch((t=>console.log(t))).finally((()=>n(3,d=!1)))},g,r,t=>g(t),function(){u=this.value,n(0,u)}]}class ge extends et{constructor(t){super(),tt(this,t,pe,fe,o,{params:7})}}class me{constructor(t,e,n){this.joinTeamPort=t,this.getLoginParametersPort=e,this.getTeamsMembersCountPort=n}async createMemberWith(t,e){const n=this.getLoginParametersPort.getLoginParameters(),r=await this.getTeamsMembersCountPort.getTeamsMembersCountFrom(t,n);return r.sort(((t,e)=>t.membersCount-e.membersCount)),await this.joinTeamPort.createMemberWith(r[0].teamId,e,n)}}class ye{constructor(t,e,n){this.id=t,this.name=e,this.teamId=n}}class ve{constructor(t){this.value=t}}class _e{constructor(){this.recordToMember=t=>new ye(new ve(t.id),new ee(t.get("name")),new Yt(t.get("id (from Team)")))}async createMemberWith(t,e,n){const r=new Gt({apiKey:n.apiKey}).base(n.appId);return(await r("Member").create([{fields:{name:e.value,team:[t.value]}}])).map(this.recordToMember)[0]}}function we(e){let n,r,i,o,a,c,u,l,p;return{c(){n=g("h2"),n.textContent="Votre nom",r=y(),i=g("input"),o=y(),a=g("button"),c=m("Rejoindre"),w(i,"id","app-id"),w(i,"class","mt-1"),w(a,"class","mt-4"),a.disabled=u=!e[0]},m(t,s){d(t,n,s),d(t,r,s),d(t,i,s),E(i,e[0]),d(t,o,s),d(t,a,s),h(a,c),l||(p=[_(i,"input",e[4]),_(a,"click",e[2])],l=!0)},p(t,e){1&e&&i.value!==t[0]&&E(i,t[0]),1&e&&u!==(u=!t[0])&&(a.disabled=u)},i:t,o:t,d(t){t&&f(n),t&&f(r),t&&f(i),t&&f(o),t&&f(a),l=!1,s(p)}}}function be(e){let n,r,s;return r=new wt({}),{c(){n=g("div"),Y(r.$$.fragment),w(n,"class","is-flex is-justify-content-center")},m(t,e){d(t,n,e),J(r,n,null),s=!0},p:t,i(t){s||(H(r.$$.fragment,t),s=!0)},o(t){W(r.$$.fragment,t),s=!1},d(t){t&&f(n),Z(r)}}}function Ee(t){let e,n,r,s,i,o,a,c,u,l;const p=[be,we],m=[];function v(t,e){return t[1]?0:1}return c=v(t),u=m[c]=p[c](t),{c(){e=g("section"),n=g("div"),r=g("div"),s=g("h1"),s.textContent="Rejoindre une équipe",i=y(),o=g("hr"),a=y(),u.c(),w(s,"class","is-size-1 has-text-centered mb-5"),w(r,"class","is-flex is-flex-direction-column"),w(n,"class","hero-body is-flex is-justify-content-center"),w(e,"class","hero is-primary is-fullheight")},m(t,u){d(t,e,u),h(e,n),h(n,r),h(r,s),h(r,i),h(r,o),h(r,a),m[c].m(r,null),l=!0},p(t,[e]){let n=c;c=v(t),c===n?m[c].p(t,e):(K(),W(m[n],1,1,(()=>{m[n]=null})),G(),u=m[c],u?u.p(t,e):(u=m[c]=p[c](t),u.c()),H(u,1),u.m(r,null))},i(t){l||(H(u),l=!0)},o(t){W(u),l=!1},d(t){t&&f(e),m[c].d()}}}function Te(t,e,n){let r;var s,i;s=ht,i=t=>n(5,r=t),t.$$.on_destroy.push(l(s,i));let{params:o}=e;const a=C(),c=new Wt(o.choozrId),u=A("loginUseCase"),h=A("joinChoozrUseCase");let d="",f=!1;return k((()=>{const t=new URLSearchParams(r);u.login(new vt(t.get("appId"),t.get("apiKey")))})),t.$$set=t=>{"params"in t&&n(3,o=t.params)},[d,f,function(){n(1,f=!0),h.createMemberWith(c,new ee(d)).then((t=>a("routeEvent",new kt(t.teamId)))).catch((t=>console.log(t))).finally((()=>{n(1,f=!1)}))},o,function(){d=this.value,n(0,d)}]}class Ie extends et{constructor(t){super(),tt(this,t,Te,Ee,o,{params:3})}}function ke(t,e,n){const r=t.slice();return r[5]=e[n],r}function Ce(e){let n,r,s,i,o,a,c,u,l=e[0].name.value+"",v=e[0].membersNames,_=[];for(let t=0;t<v.length;t+=1)_[t]=Ae(ke(e,v,t));return{c(){n=g("h1"),r=m("Équipe "),s=m(l),i=y(),o=g("table"),a=g("thead"),a.innerHTML="<tr><th>Membres de l&#39;équipe</th></tr>",c=y(),u=g("tbody");for(let t=0;t<_.length;t+=1)_[t].c();w(n,"class","is-size-1 has-text-centered mb-5"),w(o,"class","table is-striped is-hoverable")},m(t,e){d(t,n,e),h(n,r),h(n,s),d(t,i,e),d(t,o,e),h(o,a),h(o,c),h(o,u);for(let t=0;t<_.length;t+=1)_[t].m(u,null)},p(t,e){if(1&e&&l!==(l=t[0].name.value+"")&&b(s,l),1&e){let n;for(v=t[0].membersNames,n=0;n<v.length;n+=1){const r=ke(t,v,n);_[n]?_[n].p(r,e):(_[n]=Ae(r),_[n].c(),_[n].m(u,null))}for(;n<_.length;n+=1)_[n].d(1);_.length=v.length}},i:t,o:t,d(t){t&&f(n),t&&f(i),t&&f(o),p(_,t)}}}function Se(e){let n,r,s;return r=new wt({}),{c(){n=g("div"),Y(r.$$.fragment),w(n,"class","is-flex is-justify-content-center")},m(t,e){d(t,n,e),J(r,n,null),s=!0},p:t,i(t){s||(H(r.$$.fragment,t),s=!0)},o(t){W(r.$$.fragment,t),s=!1},d(t){t&&f(n),Z(r)}}}function Ae(t){let e,n,r,s,i=t[5].value+"";return{c(){e=g("tr"),n=g("td"),r=m(i),s=y()},m(t,i){d(t,e,i),h(e,n),h(n,r),h(e,s)},p(t,e){1&e&&i!==(i=t[5].value+"")&&b(r,i)},d(t){t&&f(e)}}}function Oe(t){let e,n,r,s,i,o;const a=[Se,Ce],c=[];function u(t,e){return t[1]?0:1}return s=u(t),i=c[s]=a[s](t),{c(){e=g("section"),n=g("div"),r=g("div"),i.c(),w(r,"class","is-flex is-flex-direction-column"),w(n,"class","hero-body is-flex is-justify-content-center"),w(e,"class","hero is-primary is-fullheight")},m(t,i){d(t,e,i),h(e,n),h(n,r),c[s].m(r,null),o=!0},p(t,[e]){let n=s;s=u(t),s===n?c[s].p(t,e):(K(),W(c[n],1,1,(()=>{c[n]=null})),G(),i=c[s],i?i.p(t,e):(i=c[s]=a[s](t),i.c()),H(i,1),i.m(r,null))},i(t){o||(H(i),o=!0)},o(t){W(i),o=!1},d(t){t&&f(e),c[s].d()}}}function Re(t,e,n){let{params:r}=e;const s=A("getTeamDetailsUseCase");let i,o=!0;return k((()=>{s.getTeamDetailsBy(new Yt(r.teamId)).then((t=>{n(0,i=t)})).catch((t=>console.log(t))).finally((()=>{n(1,o=!1)}))})),t.$$set=t=>{"params"in t&&n(2,r=t.params)},[i,o,r]}class Ne extends et{constructor(t){super(),tt(this,t,Re,Oe,o,{params:2})}}
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
     */const De=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},Le={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const s=t[e],i=e+1<t.length,o=i?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=s>>2,l=(3&s)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(De(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(i>>10)),e[r++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const s=n[t.charAt(e++)],i=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==s||null==i||null==o||null==a)throw Error();const c=s<<2|i>>4;if(r.push(c),64!==o){const t=i<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},xe=function(t){return function(t){const e=De(t);return Le.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
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
class Pe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
     */function Me(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ue(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Fe(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function je(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Ve(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}class $e extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Be.prototype.create)}}class Be{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?function(t,e){return t.replace(ze,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new $e(r,o,n)}}const ze=/\{\$([^}]+)}/g;function qe(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(Ke(n)&&Ke(i)){if(!qe(n,i))return!1}else if(n!==i)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function Ke(t){return null!==t&&"object"==typeof t}
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
     */function Ge(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function He(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function We(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}class Qe{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=Xe),void 0===r.error&&(r.error=Xe),void 0===r.complete&&(r.complete=Xe);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Xe(){}
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
     */function Ye(t){return t&&t._delegate?t._delegate:t}class Je{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const Ze="[DEFAULT]";
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
     */class tn{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Pe;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:Ze})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===Ze?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:Ze:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class en{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new tn(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var nn;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(nn||(nn={}));const rn={debug:nn.DEBUG,verbose:nn.VERBOSE,info:nn.INFO,warn:nn.WARN,error:nn.ERROR,silent:nn.SILENT},sn=nn.INFO,on={[nn.DEBUG]:"log",[nn.VERBOSE]:"log",[nn.INFO]:"info",[nn.WARN]:"warn",[nn.ERROR]:"error"},an=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=on[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class cn{constructor(t){this.name=t,this._logLevel=sn,this._logHandler=an,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in nn))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?rn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,nn.DEBUG,...t),this._logHandler(this,nn.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,nn.VERBOSE,...t),this._logHandler(this,nn.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,nn.INFO,...t),this._logHandler(this,nn.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,nn.WARN,...t),this._logHandler(this,nn.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,nn.ERROR,...t),this._logHandler(this,nn.ERROR,...t)}}let un,ln;const hn=new WeakMap,dn=new WeakMap,fn=new WeakMap,pn=new WeakMap,gn=new WeakMap;let mn={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return dn.get(t);if("objectStoreNames"===e)return t.objectStoreNames||fn.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function yn(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ln||(ln=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(wn(this),e),_n(hn.get(this))}:function(...e){return _n(t.apply(wn(this),e))}:function(e,...n){const r=t.call(wn(this),e,...n);return fn.set(r,e.sort?e.sort():[e]),_n(r)}}function vn(t){return"function"==typeof t?yn(t):(t instanceof IDBTransaction&&function(t){if(dn.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));dn.set(t,e)}(t),e=t,(un||(un=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,mn):t);var e}function _n(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(_n(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&hn.set(e,t)})).catch((()=>{})),gn.set(e,t),e}(t);if(pn.has(t))return pn.get(t);const e=vn(t);return e!==t&&(pn.set(t,e),gn.set(e,t)),e}const wn=t=>gn.get(t);const bn=["get","getKey","getAll","getAllKeys","count"],En=["put","add","delete","clear"],Tn=new Map;function In(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Tn.get(e))return Tn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=En.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!bn.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return Tn.set(e,i),i}mn=(t=>({...t,get:(e,n,r)=>In(e,n)||t.get(e,n,r),has:(e,n)=>!!In(e,n)||t.has(e,n)}))(mn);
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
class kn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Cn="@firebase/app",Sn="0.7.26",An=new cn("@firebase/app"),On="[DEFAULT]",Rn={[Cn]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Nn=new Map,Dn=new Map;function Ln(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(Dn.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Dn.set(e,t);for(const e of Nn.values())Ln(e,t);return!0}function Pn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
     */const Mn=new Be("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class Un{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Je("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}
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
     */const Fn="9.8.3";function jn(t="[DEFAULT]"){const e=Nn.get(t);if(!e)throw Mn.create("no-app",{appName:t});return e}function Vn(t,e,n){var r;let s=null!==(r=Rn[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${s}" with version "${e}":`];return i&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void An.warn(t.join(" "))}xn(new Je(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
     */const $n="firebase-heartbeat-store";let Bn=null;function zn(){return Bn||(Bn=function(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_n(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(_n(o.result),t.oldVersion,t.newVersion,_n(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore($n)}}).catch((t=>{throw Mn.create("storage-open",{originalErrorMessage:t.message})}))),Bn}async function qn(t,e){var n;try{const n=(await zn()).transaction($n,"readwrite"),r=n.objectStore($n);return await r.put(e,Kn(t)),n.done}catch(t){throw Mn.create("storage-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message})}}function Kn(t){return`${t.name}!${t.options.appId}`}
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
     */class Gn{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Wn(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Hn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Hn(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Qn(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=xe(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Hn(){return(new Date).toISOString().substring(0,10)}class Wn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){var e;try{return(await zn()).transaction($n).objectStore($n).get(Kn(t))}catch(t){throw Mn.create("storage-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message})}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return qn(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return qn(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Qn(t){return xe(JSON.stringify({version:2,heartbeats:t})).length}
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
     */var Xn;function Yn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]])}return n}function Jn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Xn="",xn(new Je("platform-logger",(t=>new kn(t)),"PRIVATE")),xn(new Je("heartbeat",(t=>new Gn(t)),"PRIVATE")),Vn(Cn,Sn,Xn),Vn(Cn,Sn,"esm2017"),Vn("fire-js","");const Zn=Jn,tr=new Be("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),er=new cn("@firebase/auth");function nr(t,...e){er.logLevel<=nn.ERROR&&er.error(`Auth (9.8.3): ${t}`,...e)}
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
     */function rr(t,...e){throw ir(t,...e)}function sr(t,...e){return ir(t,...e)}function ir(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tr.create(t,...e)}function or(t,e,...n){if(!t)throw ir(e,...n)}function ar(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nr(e),new Error(e)}function cr(t,e){t||ar(e)}
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
     */const ur=new Map;function lr(t){cr(t instanceof Function,"Expected a class definition");let e=ur.get(t);return e?(cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ur.set(t,e),e)}
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
function hr(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function dr(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
     */function fr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==dr()&&"https:"!==dr()&&!Fe()&&!("connection"in navigator)||navigator.onLine}
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
class pr{constructor(t,e){this.shortDelay=t,this.longDelay=e,cr(e>t,"Short delay should be less than long delay!"),this.isMobile=Ue()||je()}get(){return fr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
     */function gr(t,e){cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
     */class mr{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
     */const yr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},vr=new pr(3e4,6e4);
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
     */function _r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wr(t,e,n,r,s={}){return br(t,s,(async()=>{let s={},i={};r&&("GET"===e?i=r:s={body:JSON.stringify(r)});const o=Ge(Object.assign({key:t.config.apiKey},i)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),mr.fetch()(Tr(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))}))}async function br(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yr),e);try{const e=new Ir(t),s=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw kr(t,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const e=s.ok?i.errorMessage:i.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw kr(t,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw kr(t,"email-already-in-use",i);if("USER_DISABLED"===n)throw kr(t,"user-disabled",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(t,e,n){const r=Object.assign(Object.assign({},Zn()),{[e]:n});return new Be("auth","Firebase",r).create(e,{appName:t.name})}(t,a,o);rr(t,a)}}catch(e){if(e instanceof $e)throw e;rr(t,"network-request-failed")}}async function Er(t,e,n,r,s={}){const i=await wr(t,e,n,r,s);return"mfaPendingCredential"in i&&rr(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Tr(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?gr(t.config,s):`${t.config.apiScheme}://${s}`}class Ir{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(sr(this.auth,"network-request-failed"))),vr.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function kr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sr(t,e,r);return s.customData._tokenResponse=n,s}
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
function Cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}function Sr(t){return 1e3*Number(t)}function Ar(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return nr("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return Le.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return t?JSON.parse(t):(nr("Failed to decode base64 JWT payload"),null)}catch(t){return nr("Caught error parsing JWT payload as JSON",t),null}}
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
async function Or(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof $e&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
     */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Rr{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
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
     */class Nr{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
     */async function Dr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Or(t,async function(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));or(null==s?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=(null===(e=i.providerUserInfo)||void 0===e?void 0:e.length)?i.providerUserInfo.map((t=>{var{providerId:e}=t,n=Yn(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Nr(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
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
class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){or(t.idToken,"internal-error"),or(void 0!==t.idToken,"internal-error"),or(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ar(t);return or(e,"internal-error"),or(void 0!==e.exp,"internal-error"),or(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return or(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:s}=await
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
async function(t,e){const n=await br(t,{},(async()=>{const n=Ge({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,i=Tr(t,r,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",mr.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:s}=e,i=new Lr;return n&&(or("string"==typeof n,"internal-error",{appName:t}),i.refreshToken=n),r&&(or("string"==typeof r,"internal-error",{appName:t}),i.accessToken=r),s&&(or("number"==typeof s,"internal-error",{appName:t}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return ar("not implemented")}}
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
     */function xr(t,e){or("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Pr{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,s=Yn(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Or(this,this.stsTokenManager.getToken(this.auth,t));return or(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=Ar(r);or(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Cr(Sr(s.auth_time)),issuedAtTime:Cr(Sr(s.iat)),expirationTime:Cr(Sr(s.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Ye(t);await Dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(or(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Pr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){or(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Dr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Or(this,async function(t,e){return wr(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,s,i,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=e.photoURL)&&void 0!==i?i:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:E}=e;or(v&&E,t,"internal-error");const T=Lr.fromJSON(this.name,E);or("string"==typeof v,t,"internal-error"),xr(l,t.name),xr(h,t.name),or("boolean"==typeof _,t,"internal-error"),or("boolean"==typeof w,t,"internal-error"),xr(d,t.name),xr(f,t.name),xr(p,t.name),xr(g,t.name),xr(m,t.name),xr(y,t.name);const I=new Pr({uid:v,auth:t,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(I.providerData=b.map((t=>Object.assign({},t)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new Lr;r.updateFromServerResponse(e);const s=new Pr({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await Dr(s),s}}
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
     */class Mr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Mr.type="NONE";const Ur=Mr;
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
     */function Fr(t,e,n){return`firebase:${t}:${e}:${n}`}class jr{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=Fr(this.userKey,r.apiKey,s),this.fullPersistenceKey=Fr("persistence",r.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Pr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new jr(lr(Ur),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=r[0]||lr(Ur);const i=Fr(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(i);if(e){const r=Pr._fromJSON(t,e);n!==s&&(o=r),s=n;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(i)}catch(t){}}))),new jr(s,t,n)):new jr(s,t,n)}}
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
     */function Vr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($r(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gr(e))return"Blackberry";if(Hr(e))return"Webos";if(Br(e))return"Safari";if((e.includes("chrome/")||zr(e))&&!e.includes("edge/"))return"Chrome";if(Kr(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function $r(t=Me()){return/firefox\//i.test(t)}function Br(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zr(t=Me()){return/crios\//i.test(t)}function qr(t=Me()){return/iemobile/i.test(t)}function Kr(t=Me()){return/android/i.test(t)}function Gr(t=Me()){return/blackberry/i.test(t)}function Hr(t=Me()){return/webos/i.test(t)}function Wr(t=Me()){return/iphone|ipad|ipod/i.test(t)}function Qr(t=Me()){return Wr(t)||Kr(t)||Hr(t)||Gr(t)||/windows phone/i.test(t)||qr(t)}
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
function Xr(t,e=[]){let n;switch(t){case"Browser":n=Vr(Me());break;case"Worker":n=`${Vr(Me())}-${t}`;break;default:n=t}return`${n}/JsCore/9.8.3/${e.length?e.join(","):"FirebaseCore-web"}`}
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
     */class Yr{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{n(t(e))}catch(t){r(t)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(t){n.reverse();for(const t of n)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=t)||void 0===e?void 0:e.message})}}}
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
     */class Jr{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ts(this),this.idTokenSubscription=new ts(this),this.beforeStateQueue=new Yr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=lr(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await jr.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==i||!(null==o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(t){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return or(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Dr(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Ye(t):null;return e&&or(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&or(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(lr(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Be("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&lr(t)||this._popupRedirectResolver;or(e,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[lr(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const s="function"==typeof e?e:e.next.bind(e),i=this._isInitialized?Promise.resolve():this._initializationPromise;return or(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return or(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Xr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function Zr(t){return Ye(t)}class ts{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t,e){const n=new Qe(t,e);return n.subscribe.bind(n)}((t=>this.observer=t))}get next(){return or(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
     */class es{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ar("not implemented")}_getIdTokenResponse(t){return ar("not implemented")}_linkToIdToken(t,e){return ar("not implemented")}_getReauthenticationResolver(t){return ar("not implemented")}}
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
class ns extends es{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new ns(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ns(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
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
return async function(t,e){return Er(t,"POST","/v1/accounts:signInWithPassword",_r(t,e))}
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
     */(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}(t,{email:this._email,oobCode:this._password});default:rr(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return async function(t,e){return wr(t,"POST","/v1/accounts:update",e)}(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:rr(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
     */async function rs(t,e){return Er(t,"POST","/v1/accounts:signInWithIdp",_r(t,e))}
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
     */class ss extends es{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ss(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):rr("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,s=Yn(e,["providerId","signInMethod"]);if(!n||!r)return null;const i=new ss(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(t){return rs(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,rs(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,rs(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Ge(e)}return t}}
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
     */class is{constructor(t){var e,n,r,s,i,o;const a=He(We(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);or(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(i=a.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=He(We(t)).link,n=e?He(We(e)).deep_link_id:null,r=He(We(t)).deep_link_id;return(r?He(We(r)).link:null)||r||n||e||t}(t);try{return new is(e)}catch(t){return null}}}
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
     */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(t,e){return ns._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=is.parseLink(e);return or(n,"argument-error"),ns._fromEmailAndCode(t,n.code,n.tenantId)}}os.PROVIDER_ID="password",os.EMAIL_PASSWORD_SIGN_IN_METHOD="password",os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class as{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
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
     */class cs extends as{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
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
     */class us extends cs{constructor(){super("facebook.com")}static credential(t){return ss._fromParams({providerId:us.PROVIDER_ID,signInMethod:us.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return us.credentialFromTaggedObject(t)}static credentialFromError(t){return us.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return us.credential(t.oauthAccessToken)}catch(t){return null}}}us.FACEBOOK_SIGN_IN_METHOD="facebook.com",us.PROVIDER_ID="facebook.com";
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
class ls extends cs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ss._fromParams({providerId:ls.PROVIDER_ID,signInMethod:ls.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ls.credentialFromTaggedObject(t)}static credentialFromError(t){return ls.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ls.credential(e,n)}catch(t){return null}}}ls.GOOGLE_SIGN_IN_METHOD="google.com",ls.PROVIDER_ID="google.com";
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
class hs extends cs{constructor(){super("github.com")}static credential(t){return ss._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hs.credentialFromTaggedObject(t)}static credentialFromError(t){return hs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return hs.credential(t.oauthAccessToken)}catch(t){return null}}}hs.GITHUB_SIGN_IN_METHOD="github.com",hs.PROVIDER_ID="github.com";
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
class ds extends cs{constructor(){super("twitter.com")}static credential(t,e){return ss._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ds.credentialFromTaggedObject(t)}static credentialFromError(t){return ds.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return ds.credential(e,n)}catch(t){return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com",ds.PROVIDER_ID="twitter.com";
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
class fs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const s=await Pr._fromIdTokenResponse(t,n,r),i=ps(n);return new fs({user:s,providerId:i,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ps(n);return new fs({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ps(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
     */class gs extends $e{constructor(t,e,n,r){var s;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,gs.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new gs(t,e,n,r)}}function ms(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw gs._fromErrorAndOperation(t,n,e,r);throw n}))}
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
async function ys(t,e,n=!1){const r="signIn",s=await ms(t,r,e),i=await fs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function vs(t,e,n){return async function(t,e){return ys(Zr(t),e)}(Ye(t),os.credential(e,n))}const _s="__sak";
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
     */class ws{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(_s,"1"),this.storage.removeItem(_s),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
     */class bs extends ws{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Me();return Br(t)||Wr(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Qr(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);Ve()&&10===document.documentMode&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}bs.type="LOCAL";const Es=bs;
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
     */class Ts extends ws{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ts.type="SESSION";const Is=Ts;
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
class ks{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new ks(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:s}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async t=>t(e.origin,s))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Cs(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
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
     */ks.receivers=[];class Ss{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=Cs("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
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
     */function As(){return window}
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
function Os(){return void 0!==As().WorkerGlobalScope&&"function"==typeof As().importScripts}
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
const Rs="firebaseLocalStorageDb",Ns="firebaseLocalStorage",Ds="fbase_key";class Ls{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function xs(t,e){return t.transaction([Ns],e?"readwrite":"readonly").objectStore(Ns)}function Ps(){const t=indexedDB.open(Rs,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Ns,{keyPath:Ds})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Ns)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Rs);return new Ls(t).toPromise()}(),e(await Ps()))}))}))}async function Ms(t,e,n){const r=xs(t,!0).put({[Ds]:e,value:n});return new Ls(r).toPromise()}function Us(t,e){const n=xs(t,!0).delete(e);return new Ls(n).toPromise()}class Fs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ps()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Os()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ks._getInstance(Os()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Ss(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&function(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ps();return await Ms(t,_s,"1"),await Us(t,_s),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ms(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=xs(t,!1).get(e),r=await new Ls(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Us(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=xs(t,!1).getAll();return new Ls(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:s}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Fs.type="LOCAL";const js=Fs;
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
     */function Vs(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=sr("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",function(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}().appendChild(r)}))}new pr(3e4,6e4);
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
class $s extends es{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return rs(t,this._buildIdpRequest())}_linkToIdToken(t,e){return rs(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return rs(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Bs(t){return ys(t.auth,new $s(t),t.bypassAuthState)}function zs(t){const{auth:e,user:n}=t;return or(n,e,"internal-error"),
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
async function(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Or(t,ms(r,s,e,t),n);or(i.idToken,r,"internal-error");const o=Ar(i.idToken);or(o,r,"internal-error");const{sub:a}=o;return or(t.uid===a,r,"user-mismatch"),fs._forOperation(t,s,i)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&rr(r,"user-mismatch"),t}}(n,new $s(t),t.bypassAuthState)}async function qs(t){const{auth:e,user:n}=t;return or(n,e,"internal-error"),async function(t,e,n=!1){const r=await Or(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fs._forOperation(t,"link",r)}(n,new $s(t),t.bypassAuthState)}
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
     */class Ks{constructor(t,e,n,r,s=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=t;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Bs;case"linkViaPopup":case"linkViaRedirect":return qs;case"reauthViaPopup":case"reauthViaRedirect":return zs;default:rr(this.auth,"internal-error")}}resolve(t){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
     */const Gs=new pr(2e3,1e4);class Hs extends Ks{constructor(t,e,n,r,s){super(t,e,r,s),this.provider=n,this.authWindow=null,this.pollId=null,Hs.currentPopupAction&&Hs.currentPopupAction.cancel(),Hs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return or(t,this.auth,"internal-error"),t}async onExecution(){cr(1===this.filter.length,"Popup operations only handle one event");const t=Cs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(sr(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(sr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(sr(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Gs.get())};t()}}Hs.currentPopupAction=null;
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
const Ws="pendingRedirect",Qs=new Map;class Xs extends Ks{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Qs.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=function(t){return Fr(Ws,t.config.apiKey,t.name)}(e),r=function(t){return lr(t._redirectPersistence)}(t);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Qs.set(this.auth._key(),t)}return this.bypassAuthState||Qs.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ys(t,e){Qs.set(t._key(),e)}async function Js(t,e,n=!1){const r=Zr(t),s=
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
function(t,e){return e?lr(e):(or(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}(r,e),i=new Xs(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
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
     */class Zs{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ei(t);default:return!1}}
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
     */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!ei(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(sr(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ti(t))}saveEventToCache(t){this.cachedEventUids.add(ti(t)),this.lastProcessedEventTime=Date.now()}}function ti(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function ei({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const ni=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ri=/^https?/;async function si(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return wr(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(ii(t))return}catch(t){}rr(t,"unauthorized-domain")}function ii(t){const e=hr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!ri.test(n))return!1;if(ni.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
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
     */const oi=new pr(3e4,6e4);function ai(){const t=As().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}function ci(t){return new Promise(((e,n)=>{var r,s,i;function o(){ai(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ai(),n(sr(t,"network-request-failed"))},timeout:oi.get()})}if(null===(s=null===(r=As().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(i=As().gapi)||void 0===i?void 0:i.load)){const e=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return As()[e]=()=>{gapi.load?o():n(sr(t,"network-request-failed"))},Vs(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw ui=null,t}))}let ui=null;
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
const li=new pr(5e3,15e3),hi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},di=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fi(t){const e=t.config;or(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gr(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:Fn},s=di.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ge(r).slice(1)}`}async function pi(t){const e=await function(t){return ui=ui||ci(t),ui}(t),n=As().gapi;return or(n,t,"internal-error"),e.open({where:document.body,url:fi(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hi,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const s=sr(t,"network-request-failed"),i=As().setTimeout((()=>{r(s)}),li.get());function o(){As().clearTimeout(i),n(e)}e.ping(o).then(o,(()=>{r(s)}))}))))}
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
     */const gi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class mi{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function yi(t,e,n,r=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gi),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Me().toLowerCase();n&&(a=zr(u)?"_blank":n),$r(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=Me()){var e;return Wr(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
     */(e||"",a),new mi(null);const h=window.open(e||"",a,l);or(h,t,"popup-blocked");try{h.focus()}catch(t){}return new mi(h)}const vi="__/auth/handler",_i="emulator/auth/handler";function wi(t,e,n,r,s,i){or(t.config.authDomain,t,"auth-domain-config-required"),or(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fn,eventId:s};if(e instanceof as){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(i||{}))o[t]=e}if(e instanceof cs){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/${vi}`;return gr(t,_i)}
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
     */(t)}?${Ge(a).slice(1)}`}const bi="webStorageSupport";const Ei=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Is,this._completeRedirectFn=Js,this._overrideRedirectResult=Ys}async _openPopup(t,e,n,r){var s;cr(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return yi(t,wi(t,e,n,hr(),r),Cs())}async _openRedirect(t,e,n,r){var s;return await this._originValidation(t),s=wi(t,e,n,hr(),r),As().location.href=s,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(cr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await pi(t),n=new Zs(t);return e.register("authEvent",(e=>{or(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(bi,{type:bi},(n=>{var r;const s=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==s&&e(!!s),rr(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=si(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Qr()||Br()||Wr()}};var Ti,Ii="@firebase/auth",ki="0.20.3";
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
class Ci{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){or(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
function Si(t=jn()){const e=Pn(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const n=Pn(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(qe(n.getOptions(),null!=e?e:{}))return t;rr(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Ei,persistence:[js,Es,Is]})}Ti="Browser",xn(new Je("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:i}=n.options;return((t,n)=>{or(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),or(!(null==i?void 0:i.includes(":")),"argument-error",{appName:t.name});const r={apiKey:s,authDomain:i,clientPlatform:Ti,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xr(Ti)},o=new Jr(t,n,r);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lr);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),xn(new Je("auth-internal",(t=>(t=>new Ci(t))(Zr(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(Ii,ki,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ti)),Vn(Ii,ki,"esm2017");var Ai,Oi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Ri=Ri||{},Ni=Oi||self;function Di(){}function Li(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function xi(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Pi="closure_uid_"+(1e9*Math.random()>>>0),Mi=0;function Ui(t,e,n){return t.call.apply(t.bind,arguments)}function Fi(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ji(t,e,n){return(ji=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ui:Fi).apply(null,arguments)}function Vi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function $i(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function Bi(){this.s=this.s,this.o=this.o}Bi.prototype.s=!1,Bi.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Pi)&&t[Pi]||(t[Pi]=++Mi))},Bi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zi=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},qi=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s="string"==typeof t?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function Ki(t){return Array.prototype.concat.apply([],arguments)}function Gi(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Hi(t){return/^[\s\xa0]*$/.test(t)}var Wi,Qi=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xi(t,e){return-1!=t.indexOf(e)}function Yi(t,e){return t<e?-1:t>e?1:0}t:{var Ji=Ni.navigator;if(Ji){var Zi=Ji.userAgent;if(Zi){Wi=Zi;break t}}Wi=""}function to(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function eo(t){const e={};for(const n in t)e[n]=t[n];return e}var no="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ro(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<no.length;e++)n=no[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function so(t){return so[" "](t),t}so[" "]=Di;var io,oo,ao=Xi(Wi,"Opera"),co=Xi(Wi,"Trident")||Xi(Wi,"MSIE"),uo=Xi(Wi,"Edge"),lo=uo||co,ho=Xi(Wi,"Gecko")&&!(Xi(Wi.toLowerCase(),"webkit")&&!Xi(Wi,"Edge"))&&!(Xi(Wi,"Trident")||Xi(Wi,"MSIE"))&&!Xi(Wi,"Edge"),fo=Xi(Wi.toLowerCase(),"webkit")&&!Xi(Wi,"Edge");function po(){var t=Ni.document;return t?t.documentMode:void 0}t:{var go="",mo=(oo=Wi,ho?/rv:([^\);]+)(\)|;)/.exec(oo):uo?/Edge\/([\d\.]+)/.exec(oo):co?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(oo):fo?/WebKit\/(\S+)/.exec(oo):ao?/(?:Version)[ \/]?(\S+)/.exec(oo):void 0);if(mo&&(go=mo?mo[1]:""),co){var yo=po();if(null!=yo&&yo>parseFloat(go)){io=String(yo);break t}}io=go}var vo,_o={};function wo(){return function(t){var e=_o;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Qi(String(io)).split("."),n=Qi("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=Yi(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||Yi(0==s[2].length,0==i[2].length)||Yi(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(Ni.document&&co){var bo=po();vo=bo||(parseInt(io,10)||void 0)}else vo=void 0;var Eo=vo,To=function(){if(!Ni.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ni.addEventListener("test",Di,e),Ni.removeEventListener("test",Di,e)}catch(t){}return t}();function Io(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ko(t,e){if(Io.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ho){t:{try{so(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Co[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ko.Z.h.call(this)}}Io.prototype.h=function(){this.defaultPrevented=!0},$i(ko,Io);var Co={2:"touch",3:"pen",4:"mouse"};ko.prototype.h=function(){ko.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var So="closure_listenable_"+(1e6*Math.random()|0),Ao=0;function Oo(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++Ao,this.ca=this.fa=!1}function Ro(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function No(t){this.src=t,this.g={},this.h=0}function Do(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=zi(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ro(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Lo(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}No.prototype.add=function(t,e,n,r,s){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=Lo(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Oo(e,this.src,i,!!r,s)).fa=n,t.push(e)),e};var xo="closure_lm_"+(1e6*Math.random()|0),Po={};function Mo(t,e,n,r,s){if(r&&r.once)return Fo(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Mo(t,e[i],n,r,s);return null}return n=Ko(n),t&&t[So]?t.N(e,n,xi(r)?!!r.capture:!!r,s):Uo(t,e,n,!1,r,s)}function Uo(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=xi(s)?!!s.capture:!!s,a=zo(t);if(a||(t[xo]=a=new No(t)),(n=a.add(e,n,r,o,i)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Bo;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)To||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent($o(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Fo(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Fo(t,e[i],n,r,s);return null}return n=Ko(n),t&&t[So]?t.O(e,n,xi(r)?!!r.capture:!!r,s):Uo(t,e,n,!0,r,s)}function jo(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)jo(t,e[i],n,r,s);else r=xi(r)?!!r.capture:!!r,n=Ko(n),t&&t[So]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Lo(i=t.g[e],n,r,s))&&(Ro(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=zo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Lo(e,n,r,s)),(n=-1<t?e[t]:null)&&Vo(n))}function Vo(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[So])Do(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent($o(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=zo(e))?(Do(n,t),0==n.h&&(n.src=null,e[xo]=null)):Ro(t)}}}function $o(t){return t in Po?Po[t]:Po[t]="on"+t}function Bo(t,e){if(t.ca)t=!0;else{e=new ko(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Vo(t),t=n.call(r,e)}return t}function zo(t){return(t=t[xo])instanceof No?t:null}var qo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ko(t){return"function"==typeof t?t:(t[qo]||(t[qo]=function(e){return t.handleEvent(e)}),t[qo])}function Go(){Bi.call(this),this.i=new No(this),this.P=this,this.I=null}function Ho(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new Io(e,t);else if(e instanceof Io)e.target=e.target||t;else{var s=e;ro(e=new Io(r,t),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Wo(o,r,!0,e)&&s}if(s=Wo(o=e.g=t,r,!0,e)&&s,s=Wo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)s=Wo(o=e.g=n[i],r,!1,e)&&s}function Wo(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Do(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}$i(Go,Bi),Go.prototype[So]=!0,Go.prototype.removeEventListener=function(t,e,n,r){jo(this,t,e,n,r)},Go.prototype.M=function(){if(Go.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Ro(n[r]);delete e.g[t],e.h--}}this.I=null},Go.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Go.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Qo=Ni.JSON.stringify;function Xo(){var t=ra;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Yo,Jo=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Zo),(t=>t.reset()));class Zo{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function ta(t){Ni.setTimeout((()=>{throw t}),0)}function ea(t,e){Yo||function(){var t=Ni.Promise.resolve(void 0);Yo=function(){t.then(sa)}}(),na||(Yo(),na=!0),ra.add(t,e)}var na=!1,ra=new class{constructor(){this.h=this.g=null}add(t,e){const n=Jo.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function sa(){for(var t;t=Xo();){try{t.h.call(t.g)}catch(t){ta(t)}var e=Jo;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}na=!1}function ia(t,e){Go.call(this),this.h=t||1,this.g=e||Ni,this.j=ji(this.kb,this),this.l=Date.now()}function oa(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function aa(t,e,n){if("function"==typeof t)n&&(t=ji(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ji(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ni.setTimeout(t,e||0)}function ca(t){t.g=aa((()=>{t.g=null,t.i&&(t.i=!1,ca(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}$i(ia,Go),(Ai=ia.prototype).da=!1,Ai.S=null,Ai.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ho(this,"tick"),this.da&&(oa(this),this.start()))}},Ai.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ai.M=function(){ia.Z.M.call(this),oa(this),delete this.g};class ua extends Bi{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ca(this)}M(){super.M(),this.g&&(Ni.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function la(t){Bi.call(this),this.h=t,this.g={}}$i(la,Bi);var ha=[];function da(t,e,n,r){Array.isArray(n)||(n&&(ha[0]=n.toString()),n=ha);for(var s=0;s<n.length;s++){var i=Mo(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function fa(t){to(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Vo(t)}),t),t.g={}}function pa(){this.g=!0}function ga(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Qo(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}la.prototype.M=function(){la.Z.M.call(this),fa(this)},la.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},pa.prototype.Aa=function(){this.g=!1},pa.prototype.info=function(){};var ma={},ya=null;function va(){return ya=ya||new Go}function _a(t){Io.call(this,ma.Ma,t)}function wa(t){const e=va();Ho(e,new _a(e,t))}function ba(t,e){Io.call(this,ma.STAT_EVENT,t),this.stat=e}function Ea(t){const e=va();Ho(e,new ba(e,t))}function Ta(t,e){Io.call(this,ma.Na,t),this.size=e}function Ia(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Ni.setTimeout((function(){t()}),e)}ma.Ma="serverreachability",$i(_a,Io),ma.STAT_EVENT="statevent",$i(ba,Io),ma.Na="timingevent",$i(Ta,Io);var ka={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ca={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Sa(){}function Aa(t){return t.h||(t.h=t.i())}function Oa(){}Sa.prototype.h=null;var Ra,Na={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Da(){Io.call(this,"d")}function La(){Io.call(this,"c")}function xa(){}function Pa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new la(this),this.P=Ua,t=lo?125:void 0,this.W=new ia(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ma}function Ma(){this.i=null,this.g="",this.h=!1}$i(Da,Io),$i(La,Io),$i(xa,Sa),xa.prototype.g=function(){return new XMLHttpRequest},xa.prototype.i=function(){return{}},Ra=new xa;var Ua=45e3,Fa={},ja={};function Va(t,e,n){t.K=1,t.v=uc(rc(e)),t.s=n,t.U=!0,$a(t,null)}function $a(t,e){t.F=Date.now(),Ka(t),t.A=rc(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Ec(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ma,t.g=Eu(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ua(ji(t.Ia,t,t.g),t.O)),da(t.V,t.g,"readystatechange",t.gb),e=t.H?eo(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),wa(1),function(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Ba(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function za(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=qa(t,n),r==ja){4==e&&(t.o=4,Ea(14),s=!1),ga(t.j,t.m,null,"[Incomplete Response]");break}if(r==Fa){t.o=4,Ea(15),ga(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}ga(t.j,t.m,r,null),Xa(t,r)}Ba(t)&&r!=ja&&r!=Fa&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Ea(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),pu(e),e.L=!0,Ea(11))):(ga(t.j,t.m,n,"[Invalid Chunked Response]"),Qa(t),Wa(t))}function qa(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ja:(n=Number(e.substring(n,r)),isNaN(n)?Fa:(r+=1)+n>e.length?ja:(e=e.substr(r,n),t.C=r+n,e))}function Ka(t){t.Y=Date.now()+t.P,Ga(t,t.P)}function Ga(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ia(ji(t.eb,t),e)}function Ha(t){t.B&&(Ni.clearTimeout(t.B),t.B=null)}function Wa(t){0==t.l.G||t.I||yu(t.l,t)}function Qa(t){Ha(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,oa(t.W),fa(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Xa(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Ac(n.i,t)))if(n.I=t.N,!t.J&&Ac(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;mu(n),iu(n)}fu(n),Ea(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=Ia(ji(n.ab,n),6e3));if(1>=Sc(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else _u(n,11)}else if((t.J||n.g==t)&&mu(n),!Hi(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;!i.g&&(Xi(t,"spdy")||Xi(t,"quic")||Xi(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Oc(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,cc(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((r=n).oa=bu(r,r.H?r.la:null,r.W),o.J){Rc(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ha(a),Ka(a)),r.g=o}else du(r);0<n.l.length&&cu(n)}else"stop"!=u[0]&&"close"!=u[0]||_u(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?_u(n,7):su(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}wa(4)}catch(t){}}function Ya(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Li(t)||"string"==typeof t)qi(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Li(t)||"string"==typeof t){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Li(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Ja(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ja)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Za(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];tc(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)tc(s,r=t.g[e])||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}function tc(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Ai=Pa.prototype).setTimeout=function(t){this.P=t},Ai.gb=function(t){t=t.target;const e=this.L;e&&3==Zc(t)?e.l():this.Ia(t)},Ai.Ia=function(t){try{if(t==this.g)t:{const l=Zc(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||lo||this.g&&(this.h.h||this.g.ga()||tu(this.g)))){this.I||4!=l||7==e||wa(8==e||0>=h?3:2),Ha(this);var n=this.g.ba();this.N=n;e:if(Ba(this)){var r=tu(this.g);t="";var s=r.length,i=4==Zc(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Qa(this),Wa(this);var o="";break e}this.h.i=new Ni.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hi(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Ea(12),Qa(this),Wa(this);break t}ga(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xa(this,n)}this.U?(za(this,l,o),lo&&this.i&&3==l&&(da(this.V,this.W,"tick",this.fb),this.W.start())):(ga(this.j,this.m,o,null),Xa(this,o)),4==l&&Qa(this),this.i&&!this.I&&(4==l?yu(this.l,this):(this.i=!1,Ka(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ea(12)):(this.o=0,Ea(13)),Qa(this),Wa(this)}}}catch(t){}},Ai.fb=function(){if(this.g){var t=Zc(this.g),e=this.g.ga();this.C<e.length&&(Ha(this),za(this,t,e),this.i&&4!=t&&Ka(this))}},Ai.cancel=function(){this.I=!0,Qa(this)},Ai.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(wa(3),Ea(17)),Qa(this),this.o=2,Wa(this)):Ga(this,this.Y-t)},(Ai=Ja.prototype).R=function(){Za(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Ai.T=function(){return Za(this),this.g.concat()},Ai.get=function(t,e){return tc(this.h,t)?this.h[t]:e},Ai.set=function(t,e){tc(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Ai.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};var ec=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function nc(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof nc){this.g=void 0!==e?e:t.g,sc(this,t.j),this.s=t.s,ic(this,t.i),oc(this,t.m),this.l=t.l,e=t.h;var n=new vc;n.i=e.i,e.g&&(n.g=new Ja(e.g),n.h=e.h),ac(this,n),this.o=t.o}else t&&(n=String(t).match(ec))?(this.g=!!e,sc(this,n[1]||"",!0),this.s=lc(n[2]||""),ic(this,n[3]||"",!0),oc(this,n[4]),this.l=lc(n[5]||"",!0),ac(this,n[6]||"",!0),this.o=lc(n[7]||"")):(this.g=!!e,this.h=new vc(null,this.g))}function rc(t){return new nc(t)}function sc(t,e,n){t.j=n?lc(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ic(t,e,n){t.i=n?lc(e,!0):e}function oc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ac(t,e,n){e instanceof vc?(t.h=e,function(t,e){e&&!t.j&&(_c(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(wc(this,e),Ec(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=hc(e,mc)),t.h=new vc(e,t.g))}function cc(t,e,n){t.h.set(e,n)}function uc(t){return cc(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function lc(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hc(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,dc),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dc(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}nc.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hc(e,fc,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(hc(e,fc,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(hc(n,"/"==n.charAt(0)?gc:pc,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hc(n,yc)),t.join("")};var fc=/[#\/\?@]/g,pc=/[#\?:]/g,gc=/[#\?]/g,mc=/[#\?@]/g,yc=/#/g;function vc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _c(t){t.g||(t.g=new Ja,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function wc(t,e){_c(t),e=Tc(t,e),tc(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,tc((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Za(t)))}function bc(t,e){return _c(t),e=Tc(t,e),tc(t.g.h,e)}function Ec(t,e,n){wc(t,e),0<n.length&&(t.i=null,t.g.set(Tc(t,e),Gi(n)),t.h+=n.length)}function Tc(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ai=vc.prototype).add=function(t,e){_c(this),this.i=null,t=Tc(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ai.forEach=function(t,e){_c(this),this.g.forEach((function(n,r){qi(n,(function(n){t.call(e,n,r,this)}),this)}),this)},Ai.T=function(){_c(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n},Ai.R=function(t){_c(this);var e=[];if("string"==typeof t)bc(this,t)&&(e=Ki(e,this.g.get(Tc(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Ki(e,t[n])}return e},Ai.set=function(t,e){return _c(this),this.i=null,bc(this,t=Tc(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ai.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Ai.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Ic(t){this.l=t||kc,Ni.PerformanceNavigationTiming?t=0<(t=Ni.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Ni.g&&Ni.g.Ea&&Ni.g.Ea()&&Ni.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kc=10;function Cc(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Sc(t){return t.h?1:t.g?t.g.size:0}function Ac(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Oc(t,e){t.g?t.g.add(e):t.h=e}function Rc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Nc(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Gi(t.i)}function Dc(){}function Lc(){this.g=new Dc}function xc(t,e,n){const r=n||"";try{Ya(t,(function(t,n){let s=t;xi(t)&&(s=Qo(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function Pc(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(t){}}function Mc(t){this.l=t.$b||null,this.j=t.ib||!1}function Uc(t,e){Go.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Fc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ic.prototype.cancel=function(){if(this.i=Nc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Dc.prototype.stringify=function(t){return Ni.JSON.stringify(t,void 0)},Dc.prototype.parse=function(t){return Ni.JSON.parse(t,void 0)},$i(Mc,Sa),Mc.prototype.g=function(){return new Uc(this.l,this.j)},Mc.prototype.i=function(t){return function(){return t}}({}),$i(Uc,Go);var Fc=0;function jc(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Vc(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$c(t)}function $c(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ai=Uc.prototype).open=function(t,e){if(this.readyState!=Fc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$c(this)},Ai.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ni).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Ai.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Vc(this)),this.readyState=Fc},Ai.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$c(this)),this.g&&(this.readyState=3,$c(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Ni.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jc(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Ai.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vc(this):$c(this),3==this.readyState&&jc(this)}},Ai.Ua=function(t){this.g&&(this.response=this.responseText=t,Vc(this))},Ai.Ta=function(t){this.g&&(this.response=t,Vc(this))},Ai.ha=function(){this.g&&Vc(this)},Ai.setRequestHeader=function(t,e){this.v.append(t,e)},Ai.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ai.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Uc.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Bc=Ni.JSON.parse;function zc(t){Go.call(this),this.headers=new Ja,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qc,this.K=this.L=!1}$i(zc,Go);var qc="",Kc=/^https?$/i,Gc=["POST","PUT"];function Hc(t){return"content-type"==t.toLowerCase()}function Wc(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qc(t),Yc(t)}function Qc(t){t.D||(t.D=!0,Ho(t,"complete"),Ho(t,"error"))}function Xc(t){if(t.h&&void 0!==Ri&&(!t.C[1]||4!=Zc(t)||2!=t.ba()))if(t.v&&4==Zc(t))aa(t.Fa,0,t);else if(Ho(t,"readystatechange"),4==Zc(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var s=String(t.H).match(ec)[1]||null;if(!s&&Ni.self&&Ni.self.location){var i=Ni.self.location.protocol;s=i.substr(0,i.length-1)}r=!Kc.test(s?s.toLowerCase():"")}n=r}if(n)Ho(t,"complete"),Ho(t,"success");else{t.m=6;try{var o=2<Zc(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Qc(t)}}finally{Yc(t)}}}function Yc(t,e){if(t.g){Jc(t);const n=t.g,r=t.C[0]?Di:null;t.g=null,t.C=null,e||Ho(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function Jc(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ni.clearTimeout(t.A),t.A=null)}function Zc(t){return t.g?t.g.readyState:0}function tu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case qc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function eu(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){let e="";return to(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):cc(t,e,n))}function nu(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ru(t){this.za=0,this.l=[],this.h=new pa,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nu("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nu("baseRetryDelayMs",5e3,t),this.$a=nu("retryDelaySeedMs",1e4,t),this.Ya=nu("forwardChannelMaxRetries",2,t),this.ra=nu("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ic(t&&t.concurrentRequestLimit),this.Ca=new Lc,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function su(t){if(ou(t),3==t.G){var e=t.V++,n=rc(t.F);cc(n,"SID",t.J),cc(n,"RID",e),cc(n,"TYPE","terminate"),lu(t,n),(e=new Pa(t,t.h,e,void 0)).K=2,e.v=uc(rc(n)),n=!1,Ni.navigator&&Ni.navigator.sendBeacon&&(n=Ni.navigator.sendBeacon(e.v.toString(),"")),!n&&Ni.Image&&((new Image).src=e.v,n=!0),n||(e.g=Eu(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ka(e)}wu(t)}function iu(t){t.g&&(pu(t),t.g.cancel(),t.g=null)}function ou(t){iu(t),t.u&&(Ni.clearTimeout(t.u),t.u=null),mu(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Ni.clearTimeout(t.m),t.m=null)}function au(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&cu(t)}function cu(t){Cc(t.i)||t.m||(t.m=!0,ea(t.Ha,t),t.C=0)}function uu(t,e){var n;n=e?e.m:t.V++;const r=rc(t.F);cc(r,"SID",t.J),cc(r,"RID",n),cc(r,"AID",t.U),lu(t,r),t.o&&t.s&&eu(r,t.o,t.s),n=new Pa(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=hu(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Oc(t.i,n),Va(n,r,e)}function lu(t,e){t.j&&Ya({},(function(t,n){cc(e,n,t)}))}function hu(t,e,n){n=Math.min(t.l.length,n);var r=t.j?ji(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),i=!1;else try{xc(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(i){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function du(t){t.g||t.u||(t.Y=1,ea(t.Ga,t),t.A=0)}function fu(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Ia(ji(t.Ga,t),vu(t,t.A)),t.A++,!0)}function pu(t){null!=t.B&&(Ni.clearTimeout(t.B),t.B=null)}function gu(t){t.g=new Pa(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=rc(t.oa);cc(e,"RID","rpc"),cc(e,"SID",t.J),cc(e,"CI",t.N?"0":"1"),cc(e,"AID",t.U),lu(t,e),cc(e,"TYPE","xmlhttp"),t.o&&t.s&&eu(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=uc(rc(e)),n.s=null,n.U=!0,$a(n,t)}function mu(t){null!=t.v&&(Ni.clearTimeout(t.v),t.v=null)}function yu(t,e){var n=null;if(t.g==e){mu(t),pu(t),t.g=null;var r=2}else{if(!Ac(t.i,e))return;n=e.D,Rc(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;Ho(r=va(),new Ta(r,n,e,s)),cu(t)}else du(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==r&&function(t,e){return!(Sc(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Ia(ji(t.Ha,t,e),vu(t,t.C)),t.C++,0)))}(t,e)||2==r&&fu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:_u(t,5);break;case 4:_u(t,10);break;case 3:_u(t,6);break;default:_u(t,2)}}function vu(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function _u(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=ji(t.jb,t);n||(n=new nc("//www.google.com/images/cleardot.gif"),Ni.location&&"http"==Ni.location.protocol||sc(n,"https"),uc(n)),function(t,e){const n=new pa;if(Ni.Image){const r=new Image;r.onload=Vi(Pc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Vi(Pc,n,r,"TestLoadImage: error",!1,e),r.onabort=Vi(Pc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Vi(Pc,n,r,"TestLoadImage: timeout",!1,e),Ni.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Ea(2);t.G=0,t.j&&t.j.va(e),wu(t),ou(t)}function wu(t){t.G=0,t.I=-1,t.j&&(0==Nc(t.i).length&&0==t.l.length||(t.i.i.length=0,Gi(t.l),t.l.length=0),t.j.ua())}function bu(t,e,n){let r=function(t){return t instanceof nc?rc(t):new nc(t,void 0)}(n);if(""!=r.i)e&&ic(r,e+"."+r.i),oc(r,r.m);else{const t=Ni.location;r=function(t,e,n,r){var s=new nc(null,void 0);return t&&sc(s,t),e&&ic(s,e),n&&oc(s,n),r&&(s.l=r),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&to(t.aa,(function(t,e){cc(r,e,t)})),e=t.D,n=t.sa,e&&n&&cc(r,e,n),cc(r,"VER",t.ma),lu(t,r),r}function Eu(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new zc(new Mc({ib:!0})):new zc(t.qa)).L=t.H,e}function Tu(){}function Iu(){if(co&&!(10<=Number(Eo)))throw Error("Environmental error: no available transport.")}function ku(t,e){Go.call(this),this.g=new ru(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Hi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Hi(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Au(this)}function Cu(t){Da.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Su(){La.call(this),this.status=1}function Au(t){this.g=t}(Ai=zc.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ra.g(),this.C=this.u?Aa(this.u):Aa(Ra),this.g.onreadystatechange=ji(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Wc(this,t)}t=n||"";const s=new Ja(this.headers);r&&Ya(r,(function(t,e){s.set(e,t)})),r=function(t){t:{var e=Hc;const n=t.length,r="string"==typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),n=Ni.FormData&&t instanceof Ni.FormData,!(0<=zi(Gc,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jc(this),0<this.B&&((this.K=function(t){return co&&wo()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ji(this.pa,this)):this.A=aa(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Wc(this,t)}},Ai.pa=function(){void 0!==Ri&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ho(this,"timeout"),this.abort(8))},Ai.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ho(this,"complete"),Ho(this,"abort"),Yc(this))},Ai.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yc(this,!0)),zc.Z.M.call(this)},Ai.Fa=function(){this.s||(this.F||this.v||this.l?Xc(this):this.cb())},Ai.cb=function(){Xc(this)},Ai.ba=function(){try{return 2<Zc(this)?this.g.status:-1}catch(t){return-1}},Ai.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ai.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Bc(e)}},Ai.Da=function(){return this.m},Ai.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ai=ru.prototype).ma=8,Ai.G=1,Ai.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},Ai.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Pa(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=eo(i),ro(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=hu(this,s,e),cc(n=rc(this.F),"RID",t),cc(n,"CVER",22),this.D&&cc(n,"X-HTTP-Session-Id",this.D),lu(this,n),this.o&&i&&eu(n,this.o,i),Oc(this.i,s),this.Ra&&cc(n,"TYPE","init"),this.ja?(cc(n,"$req",e),cc(n,"SID","null"),s.$=!0,Va(s,n,null)):Va(s,n,e),this.G=2}}else 3==this.G&&(t?uu(this,t):0==this.l.length||Cc(this.i)||uu(this))},Ai.Ga=function(){if(this.u=null,gu(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ia(ji(this.bb,this),t)}},Ai.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ea(10),iu(this),gu(this))},Ai.ab=function(){null!=this.v&&(this.v=null,iu(this),fu(this),Ea(19))},Ai.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ea(2)):(this.h.info("Failed to ping google.com"),Ea(1))},(Ai=Tu.prototype).xa=function(){},Ai.wa=function(){},Ai.va=function(){},Ai.ua=function(){},Ai.Oa=function(){},Iu.prototype.g=function(t,e){return new ku(t,e)},$i(ku,Go),ku.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ea(ji(t.hb,t,e))),Ea(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=bu(t,null,t.W),cu(t)},ku.prototype.close=function(){su(this.g)},ku.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,au(this.g,e)}else this.v?((e={}).__data__=Qo(t),au(this.g,e)):au(this.g,t)},ku.prototype.M=function(){this.g.j=null,delete this.j,su(this.g),delete this.g,ku.Z.M.call(this)},$i(Cu,Da),$i(Su,La),$i(Au,Tu),Au.prototype.xa=function(){Ho(this.g,"a")},Au.prototype.wa=function(t){Ho(this.g,new Cu(t))},Au.prototype.va=function(t){Ho(this.g,new Su(t))},Au.prototype.ua=function(){Ho(this.g,"b")},Iu.prototype.createWebChannel=Iu.prototype.g,ku.prototype.send=ku.prototype.u,ku.prototype.open=ku.prototype.m,ku.prototype.close=ku.prototype.close,ka.NO_ERROR=0,ka.TIMEOUT=8,ka.HTTP_ERROR=6,Ca.COMPLETE="complete",Oa.EventType=Na,Na.OPEN="a",Na.CLOSE="b",Na.ERROR="c",Na.MESSAGE="d",Go.prototype.listen=Go.prototype.N,zc.prototype.listenOnce=zc.prototype.O,zc.prototype.getLastError=zc.prototype.La,zc.prototype.getLastErrorCode=zc.prototype.Da,zc.prototype.getStatus=zc.prototype.ba,zc.prototype.getResponseJson=zc.prototype.Qa,zc.prototype.getResponseText=zc.prototype.ga,zc.prototype.send=zc.prototype.ea;var Ou=ka,Ru=Ca,Nu=ma,Du=10,Lu=11,xu=Mc,Pu=Oa,Mu=zc;const Uu="@firebase/firestore";
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
     */class Fu{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Fu.UNAUTHENTICATED=new Fu(null),Fu.GOOGLE_CREDENTIALS=new Fu("google-credentials-uid"),Fu.FIRST_PARTY=new Fu("first-party-uid"),Fu.MOCK_USER=new Fu("mock-user");
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
let ju="9.8.3";
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
     */const Vu=new cn("@firebase/firestore");function $u(){return Vu.logLevel}function Bu(t,...e){if(Vu.logLevel<=nn.DEBUG){const n=e.map(Ku);Vu.debug(`Firestore (${ju}): ${t}`,...n)}}function zu(t,...e){if(Vu.logLevel<=nn.ERROR){const n=e.map(Ku);Vu.error(`Firestore (${ju}): ${t}`,...n)}}function qu(t,...e){if(Vu.logLevel<=nn.WARN){const n=e.map(Ku);Vu.warn(`Firestore (${ju}): ${t}`,...n)}}function Ku(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
     */function Gu(t="Unexpected state"){const e=`FIRESTORE (${ju}) INTERNAL ASSERTION FAILED: `+t;throw zu(e),new Error(e)}function Hu(t,e){t||Gu()}function Wu(t,e){return t}
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
     */const Qu={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Xu extends $e{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class Yu{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class Ju{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Zu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Fu.UNAUTHENTICATED)))}shutdown(){}}class tl{constructor(t){this.t=t,this.currentUser=Fu.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Yu;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Yu,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Bu("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Bu("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Yu)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Bu("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Hu("string"==typeof e.accessToken),new Ju(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Hu(null===t||"string"==typeof t),new Fu(t)}}class el{constructor(t,e,n){this.type="FirstParty",this.user=Fu.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class nl{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new el(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Fu.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class rl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sl{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Bu("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Bu("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Bu("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):Bu("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Hu("string"==typeof t.token),this.p=t.token,new rl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function il(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */class ol{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=il(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function al(t,e){return t<e?-1:t>e?1:0}function cl(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
     */class ul{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Xu(Qu.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Xu(Qu.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Xu(Qu.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Xu(Qu.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ul.fromMillis(Date.now())}static fromDate(t){return ul.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ul(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?al(this.nanoseconds,t.nanoseconds):al(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class ll{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ll(t)}static min(){return new ll(new ul(0,0))}static max(){return new ll(new ul(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */class hl{constructor(t,e,n){void 0===e?e=0:e>t.length&&Gu(),void 0===n?n=t.length-e:n>t.length-e&&Gu(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===hl.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof hl?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class dl extends hl{construct(t,e,n){return new dl(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Xu(Qu.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new dl(e)}static emptyPath(){return new dl([])}}const fl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pl extends hl{construct(t,e,n){return new pl(t,e,n)}static isValidIdentifier(t){return fl.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pl.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new pl(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Xu(Qu.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Xu(Qu.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Xu(Qu.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new Xu(Qu.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new pl(e)}static emptyPath(){return new pl([])}}
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
     */class gl{constructor(t){this.path=t}static fromPath(t){return new gl(dl.fromString(t))}static fromName(t){return new gl(dl.fromString(t).popFirst(5))}static empty(){return new gl(dl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===dl.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return dl.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new gl(new dl(t.slice()))}}function ml(t){return new yl(t.readTime,t.key,-1)}class yl{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new yl(ll.min(),gl.empty(),-1)}static max(){return new yl(ll.max(),gl.empty(),-1)}}function vl(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=gl.comparator(t.documentKey,e.documentKey),0!==n?n:al(t.largestBatchId,e.largestBatchId))}
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
async function _l(t){if(t.code!==Qu.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Bu("LocalStore","Unexpectedly lost primary lease")}
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
     */class wl{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Gu(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new wl(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof wl?e:wl.resolve(e)}catch(t){return wl.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):wl.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):wl.reject(e)}static resolve(t){return new wl(((e,n)=>{e(t)}))}static reject(t){return new wl(((e,n)=>{n(t)}))}static waitFor(t){return new wl(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=wl.resolve(!1);for(const n of t)e=e.next((t=>t?wl.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new wl(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new wl(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}function bl(t){return"IndexedDbTransactionError"===t.name}
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
     */class El{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
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
     */function Tl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Il(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
     */El.ot=-1;class Cl{constructor(t,e){this.comparator=t,this.root=e||Al.EMPTY}insert(t,e){return new Cl(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Al.BLACK,null,null))}remove(t){return new Cl(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Al.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Sl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Sl(this.root,t,this.comparator,!1)}getReverseIterator(){return new Sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Sl(this.root,t,this.comparator,!0)}}class Sl{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Al{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Al.RED,this.left=null!=r?r:Al.EMPTY,this.right=null!=s?s:Al.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Al(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Al.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Al.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Al.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Al.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Gu();if(this.right.isRed())throw Gu();const t=this.left.check();if(t!==this.right.check())throw Gu();return t+(this.isRed()?0:1)}}Al.EMPTY=null,Al.RED=!0,Al.BLACK=!1,Al.EMPTY=new class{constructor(){this.size=0}get key(){throw Gu()}get value(){throw Gu()}get color(){throw Gu()}get left(){throw Gu()}get right(){throw Gu()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Al(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ol{constructor(t){this.comparator=t,this.data=new Cl(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Rl(this.data.getIterator())}getIteratorFrom(t){return new Rl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ol))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ol(this.comparator);return e.data=t,e}}class Rl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */class Nl{constructor(t){this.fields=t,t.sort(pl.comparator)}static empty(){return new Nl([])}unionWith(t){let e=new Ol(pl.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Nl(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return cl(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
     */class Dl{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Dl(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Dl(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return al(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Dl.EMPTY_BYTE_STRING=new Dl("");const Ll=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xl(t){if(Hu(!!t),"string"==typeof t){let e=0;const n=Ll.exec(t);if(Hu(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pl(t.seconds),nanos:Pl(t.nanos)}}function Pl(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ml(t){return"string"==typeof t?Dl.fromBase64String(t):Dl.fromUint8Array(t)}
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
     */function Ul(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Fl(t){const e=t.mapValue.fields.__previous_value__;return Ul(e)?Fl(e):e}function jl(t){const e=xl(t.mapValue.fields.__local_write_time__.timestampValue);return new ul(e.seconds,e.nanos)}
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
     */class Vl{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class $l{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new $l("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof $l&&t.projectId===this.projectId&&t.database===this.database}}
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
     */function Bl(t){return null==t}function zl(t){return 0===t&&1/t==-1/0}
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
const ql={fields:{__type__:{stringValue:"__max__"}}};function Kl(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ul(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
     */(t)?9007199254740991:10:Gu()}function Gl(t,e){if(t===e)return!0;const n=Kl(t);if(n!==Kl(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return jl(t).isEqual(jl(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=xl(t.timestampValue),r=xl(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ml(t.bytesValue).isEqual(Ml(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Pl(t.geoPointValue.latitude)===Pl(e.geoPointValue.latitude)&&Pl(t.geoPointValue.longitude)===Pl(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Pl(t.integerValue)===Pl(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Pl(t.doubleValue),r=Pl(e.doubleValue);return n===r?zl(n)===zl(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return cl(t.arrayValue.values||[],e.arrayValue.values||[],Gl);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Tl(n)!==Tl(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!Gl(n[t],r[t])))return!1;return!0}(t,e);default:return Gu()}}function Hl(t,e){return void 0!==(t.values||[]).find((t=>Gl(t,e)))}function Wl(t,e){if(t===e)return 0;const n=Kl(t),r=Kl(e);if(n!==r)return al(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return al(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Pl(t.integerValue||t.doubleValue),r=Pl(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Ql(t.timestampValue,e.timestampValue);case 4:return Ql(jl(t),jl(e));case 5:return al(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ml(t),r=Ml(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=al(n[t],r[t]);if(0!==e)return e}return al(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=al(Pl(t.latitude),Pl(e.latitude));return 0!==n?n:al(Pl(t.longitude),Pl(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=Wl(n[t],r[t]);if(e)return e}return al(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===ql&&e===ql)return 0;if(t===ql)return 1;if(e===ql)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let t=0;t<r.length&&t<i.length;++t){const e=al(r[t],i[t]);if(0!==e)return e;const o=Wl(n[r[t]],s[i[t]]);if(0!==o)return o}return al(r.length,i.length)}(t.mapValue,e.mapValue);default:throw Gu()}}function Ql(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return al(t,e);const n=xl(t),r=xl(e),s=al(n.seconds,r.seconds);return 0!==s?s:al(n.nanos,r.nanos)}function Xl(t){return Yl(t)}function Yl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=xl(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ml(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,gl.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Yl(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Yl(t.fields[s])}`;return n+"}"}(t.mapValue):Gu();var e,n}function Jl(t){return!!t&&"integerValue"in t}function Zl(t){return!!t&&"arrayValue"in t}function th(t){return!!t&&"nullValue"in t}function eh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nh(t){return!!t&&"mapValue"in t}function rh(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Il(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=rh(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=rh(t.arrayValue.values[n]);return e}return Object.assign({},t)}class sh{constructor(t){this.value=t}static empty(){return new sh({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!nh(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=rh(e)}setAll(t){let e=pl.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=rh(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());nh(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Gl(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];nh(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Il(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new sh(rh(this.value))}}function ih(t){const e=[];return Il(t.fields,((t,n)=>{const r=new pl([t]);if(nh(n)){const t=ih(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Nl(e)
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
     */}class oh{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new oh(t,0,ll.min(),ll.min(),sh.empty(),0)}static newFoundDocument(t,e,n){return new oh(t,1,e,ll.min(),n,0)}static newNoDocument(t,e){return new oh(t,2,e,ll.min(),sh.empty(),0)}static newUnknownDocument(t,e){return new oh(t,3,e,ll.min(),sh.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=sh.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=sh.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ll.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof oh&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new oh(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class ah{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ut=null}}function ch(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ah(t,e,n,r,s,i,o)}function uh(t){const e=Wu(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Xl(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Bl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Xl(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Xl(t))).join(",")),e.ut=t}return e.ut}function lh(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Th(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Gl(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kh(t.startAt,e.startAt)&&kh(t.endAt,e.endAt)}function hh(t){return gl.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class dh extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new fh(t,e,n):"array-contains"===e?new yh(t,n):"in"===e?new vh(t,n):"not-in"===e?new _h(t,n):"array-contains-any"===e?new wh(t,n):new dh(t,e,n)}static ct(t,e,n){return"in"===e?new ph(t,n):new gh(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(Wl(e,this.value)):null!==e&&Kl(this.value)===Kl(e)&&this.at(Wl(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Gu()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class fh extends dh{constructor(t,e,n){super(t,e,n),this.key=gl.fromName(n.referenceValue)}matches(t){const e=gl.comparator(t.key,this.key);return this.at(e)}}class ph extends dh{constructor(t,e){super(t,"in",e),this.keys=mh("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class gh extends dh{constructor(t,e){super(t,"not-in",e),this.keys=mh("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function mh(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>gl.fromName(t.referenceValue)))}class yh extends dh{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Zl(e)&&Hl(e.arrayValue,this.value)}}class vh extends dh{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Hl(this.value.arrayValue,e)}}class _h extends dh{constructor(t,e){super(t,"not-in",e)}matches(t){if(Hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Hl(this.value.arrayValue,e)}}class wh extends dh{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Zl(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Hl(this.value.arrayValue,t)))}}class bh{constructor(t,e){this.position=t,this.inclusive=e}}class Eh{constructor(t,e="asc"){this.field=t,this.dir=e}}function Th(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ih(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?gl.comparator(gl.fromName(o.referenceValue),n.key):Wl(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function kh(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gl(t.position[n],e.position[n]))return!1;return!0}
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
     */class Ch{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Sh(t){return new Ch(t)}function Ah(t){const e=Wu(t);if(null===e.lt){e.lt=[];const t=function(t){for(const e of t.filters)if(e.ht())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new Eh(t)),e.lt.push(new Eh(pl.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Eh(pl.keyField(),t))}}}return e.lt}function Oh(t){const e=Wu(t);if(!e.ft)if("F"===e.limitType)e.ft=ch(e.path,e.collectionGroup,Ah(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Ah(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Eh(n.field,e))}const n=e.endAt?new bh(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new bh(e.startAt.position,e.startAt.inclusive):null;e.ft=ch(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function Rh(t,e,n){return new Ch(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nh(t,e){return lh(Oh(t),Oh(e))&&t.limitType===e.limitType}function Dh(t){return`${uh(Oh(t))}|lt:${t.limitType}`}function Lh(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Xl(e.value)}`;var e})).join(", ")}]`),Bl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Xl(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Xl(t))).join(",")),`Target(${e})`}(Oh(t))}; limitType=${t.limitType})`}function xh(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):gl.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ih(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Ah(t),e))&&!(t.endAt&&!function(t,e,n){const r=Ih(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Ah(t),e))}(t,e)}function Ph(t){return(e,n)=>{let r=!1;for(const s of Ah(t)){const t=Mh(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function Mh(t,e,n){const r=t.field.isKeyField()?gl.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Wl(r,s):Gu()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Gu()}}
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
     */function Uh(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zl(e)?"-0":e}}function Fh(t){return{integerValue:""+t}}function jh(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!zl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Fh(e):Uh(t,e)}
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
     */class Vh{constructor(){this._=void 0}}function $h(t,e,n){return t instanceof qh?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Kh?Gh(t,e):t instanceof Hh?Wh(t,e):function(t,e){const n=zh(t,e),r=Xh(n)+Xh(t._t);return Jl(n)&&Jl(t._t)?Fh(r):Uh(t.wt,r)}(t,e)}function Bh(t,e,n){return t instanceof Kh?Gh(t,e):t instanceof Hh?Wh(t,e):n}function zh(t,e){return t instanceof Qh?Jl(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class qh extends Vh{}class Kh extends Vh{constructor(t){super(),this.elements=t}}function Gh(t,e){const n=Yh(e);for(const e of t.elements)n.some((t=>Gl(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Hh extends Vh{constructor(t){super(),this.elements=t}}function Wh(t,e){let n=Yh(e);for(const e of t.elements)n=n.filter((t=>!Gl(t,e)));return{arrayValue:{values:n}}}class Qh extends Vh{constructor(t,e){super(),this.wt=t,this._t=e}}function Xh(t){return Pl(t.integerValue||t.doubleValue)}function Yh(t){return Zl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class Jh{constructor(t,e){this.version=t,this.transformResults=e}}class Zh{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zh}static exists(t){return new Zh(void 0,t)}static updateTime(t){return new Zh(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function td(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ed{}function nd(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new dd(t.key,Zh.none()):new ad(t.key,t.data,Zh.none());{const n=t.data,r=sh.empty();let s=new Ol(pl.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new cd(t.key,r,new Nl(s.toArray()),Zh.none())}}function rd(t,e,n){t instanceof ad?function(t,e,n){const r=t.value.clone(),s=ld(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof cd?function(t,e,n){if(!td(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=ld(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(ud(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function sd(t,e,n,r){return t instanceof ad?function(t,e,n,r){if(!td(t.precondition,e))return n;const s=t.value.clone(),i=hd(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof cd?function(t,e,n,r){if(!td(t.precondition,e))return n;const s=hd(t.fieldTransforms,r,e),i=e.data;return i.setAll(ud(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return td(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function id(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=zh(r.transform,t||null);null!=s&&(null===n&&(n=sh.empty()),n.set(r.field,s))}return n||null}function od(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&cl(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Kh&&e instanceof Kh||t instanceof Hh&&e instanceof Hh?cl(t.elements,e.elements,Gl):t instanceof Qh&&e instanceof Qh?Gl(t._t,e._t):t instanceof qh&&e instanceof qh}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ad extends ed{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class cd extends ed{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ud(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ld(t,e,n){const r=new Map;Hu(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Bh(o,a,n[s]))}return r}function hd(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,$h(t,i,e))}return r}class dd extends ed{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fd extends ed{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
     */class pd{constructor(t){this.count=t}}
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
     */var gd,md;function yd(t){if(void 0===t)return zu("GRPC error has no .code"),Qu.UNKNOWN;switch(t){case gd.OK:return Qu.OK;case gd.CANCELLED:return Qu.CANCELLED;case gd.UNKNOWN:return Qu.UNKNOWN;case gd.DEADLINE_EXCEEDED:return Qu.DEADLINE_EXCEEDED;case gd.RESOURCE_EXHAUSTED:return Qu.RESOURCE_EXHAUSTED;case gd.INTERNAL:return Qu.INTERNAL;case gd.UNAVAILABLE:return Qu.UNAVAILABLE;case gd.UNAUTHENTICATED:return Qu.UNAUTHENTICATED;case gd.INVALID_ARGUMENT:return Qu.INVALID_ARGUMENT;case gd.NOT_FOUND:return Qu.NOT_FOUND;case gd.ALREADY_EXISTS:return Qu.ALREADY_EXISTS;case gd.PERMISSION_DENIED:return Qu.PERMISSION_DENIED;case gd.FAILED_PRECONDITION:return Qu.FAILED_PRECONDITION;case gd.ABORTED:return Qu.ABORTED;case gd.OUT_OF_RANGE:return Qu.OUT_OF_RANGE;case gd.UNIMPLEMENTED:return Qu.UNIMPLEMENTED;case gd.DATA_LOSS:return Qu.DATA_LOSS;default:return Gu()}}(md=gd||(gd={}))[md.OK=0]="OK",md[md.CANCELLED=1]="CANCELLED",md[md.UNKNOWN=2]="UNKNOWN",md[md.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",md[md.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",md[md.NOT_FOUND=5]="NOT_FOUND",md[md.ALREADY_EXISTS=6]="ALREADY_EXISTS",md[md.PERMISSION_DENIED=7]="PERMISSION_DENIED",md[md.UNAUTHENTICATED=16]="UNAUTHENTICATED",md[md.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",md[md.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",md[md.ABORTED=10]="ABORTED",md[md.OUT_OF_RANGE=11]="OUT_OF_RANGE",md[md.UNIMPLEMENTED=12]="UNIMPLEMENTED",md[md.INTERNAL=13]="INTERNAL",md[md.UNAVAILABLE=14]="UNAVAILABLE",md[md.DATA_LOSS=15]="DATA_LOSS";
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
class vd{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Il(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return kl(this.inner)}size(){return this.innerSize}}
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
     */const _d=new Cl(gl.comparator);function wd(){return _d}const bd=new Cl(gl.comparator);function Ed(...t){let e=bd;for(const n of t)e=e.insert(n.key,n);return e}function Td(t){let e=bd;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Id(){return Cd()}function kd(){return Cd()}function Cd(){return new vd((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Sd=new Cl(gl.comparator),Ad=new Ol(gl.comparator);function Od(...t){let e=Ad;for(const n of t)e=e.add(n);return e}const Rd=new Ol(al);function Nd(){return Rd}
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
     */class Dd{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Ld.createSynthesizedTargetChangeForCurrentChange(t,e)),new Dd(ll.min(),n,Nd(),wd(),Od())}}class Ld{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Ld(Dl.EMPTY_BYTE_STRING,e,Od(),Od(),Od())}}
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
     */class xd{constructor(t,e,n,r){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=r}}class Pd{constructor(t,e){this.targetId=t,this.It=e}}class Md{constructor(t,e,n=Dl.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ud{constructor(){this.Tt=0,this.Et=Vd(),this.At=Dl.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=Od(),e=Od(),n=Od();return this.Et.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Gu()}})),new Ld(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=Vd()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Fd{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=wd(),this.Bt=jd(),this.Lt=new Ol(al)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:Gu()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,r=this.Ht(e);if(r){const t=r.target;if(hh(t))if(0===n){const n=new gl(t.path);this.Kt(e,n,oh.newNoDocument(n,ll.min()))}else Hu(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,r)=>{const s=this.Ht(r);if(s){if(n.current&&hh(s.target)){const e=new gl(s.target.path);null!==this.$t.get(e)||this.Xt(r,e)||this.Kt(r,e,oh.newNoDocument(e,t))}n.vt&&(e.set(r,n.St()),n.Dt())}}));let n=Od();this.Bt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const r=new Dd(t,e,this.Lt,this.$t,n);return this.$t=wd(),this.Bt=jd(),this.Lt=new Ol(al),r}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,e)?r.Ct(e,1):r.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new Ud,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new Ol(al),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||Bu("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new Ud),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function jd(){return new Cl(gl.comparator)}function Vd(){return new Cl(gl.comparator)}
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
     */const $d={asc:"ASCENDING",desc:"DESCENDING"},Bd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class zd{constructor(t,e){this.databaseId=t,this.dt=e}}function qd(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kd(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Gd(t,e){return qd(t,e.toTimestamp())}function Hd(t){return Hu(!!t),ll.fromTimestamp(function(t){const e=xl(t);return new ul(e.seconds,e.nanos)}(t))}function Wd(t,e){return function(t){return new dl(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Qd(t){const e=dl.fromString(t);return Hu(pf(e)),e}function Xd(t,e){return Wd(t.databaseId,e.path)}function Yd(t,e){const n=Qd(e);if(n.get(1)!==t.databaseId.projectId)throw new Xu(Qu.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Xu(Qu.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new gl(tf(n))}function Jd(t,e){return Wd(t.databaseId,e)}function Zd(t){return new dl(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tf(t){return Hu(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ef(t,e,n){return{name:Xd(t,e),fields:n.value.mapValue.fields}}function nf(t,e){return{documents:[Jd(t,e.path)]}}function rf(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Jd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Jd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(eh(t.value))return{unaryFilter:{field:uf(t.field),op:"IS_NAN"}};if(th(t.value))return{unaryFilter:{field:uf(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(eh(t.value))return{unaryFilter:{field:uf(t.field),op:"IS_NOT_NAN"}};if(th(t.value))return{unaryFilter:{field:uf(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:uf(t.field),op:cf(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:uf(t.field),direction:af(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.dt||Bl(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function sf(t){let e=function(t){const e=Qd(t);return 4===e.length?dl.emptyPath():tf(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Hu(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=of(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Eh(lf(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Bl(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new bh(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new bh(n,e)}(n.endAt)),function(t,e,n,r,s,i,o,a){return new Ch(t,e,n,r,s,i,o,a)}(e,s,o,i,a,"F",c,u)}function of(t){return t?void 0!==t.unaryFilter?[df(t)]:void 0!==t.fieldFilter?[hf(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>of(t))).reduce(((t,e)=>t.concat(e))):Gu():[]}function af(t){return $d[t]}function cf(t){return Bd[t]}function uf(t){return{fieldPath:t.canonicalString()}}function lf(t){return pl.fromServerFormat(t.fieldPath)}function hf(t){return dh.create(lf(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Gu()}}(t.fieldFilter.op),t.fieldFilter.value)}function df(t){switch(t.unaryFilter.op){case"IS_NAN":const e=lf(t.unaryFilter.field);return dh.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=lf(t.unaryFilter.field);return dh.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=lf(t.unaryFilter.field);return dh.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=lf(t.unaryFilter.field);return dh.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Gu()}}function ff(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function pf(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
     */class gf{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&rd(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=sd(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=sd(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=kd();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=nd(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(ll.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Od())}isEqual(t){return this.batchId===t.batchId&&cl(this.mutations,t.mutations,((t,e)=>od(t,e)))&&cl(this.baseMutations,t.baseMutations,((t,e)=>od(t,e)))}}class mf{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Hu(t.mutations.length===n.length);let r=Sd;const s=t.mutations;for(let t=0;t<s.length;t++)r=r.insert(s[t].key,n[t].version);return new mf(t,e,n,r)}}
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
     */class yf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
     */class vf{constructor(t,e,n,r,s=ll.min(),i=ll.min(),o=Dl.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new vf(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new vf(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new vf(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
     */class _f{constructor(t){this.ne=t}}function wf(t){const e=sf({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Rh(e,e.limit,"L"):e}
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
     */class bf{constructor(){this.ze=new Ef}addToCollectionParentIndex(t,e){return this.ze.add(e),wl.resolve()}getCollectionParents(t,e){return wl.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return wl.resolve()}deleteFieldIndex(t,e){return wl.resolve()}getDocumentsMatchingTarget(t,e){return wl.resolve(null)}getIndexType(t,e){return wl.resolve(0)}getFieldIndexes(t,e){return wl.resolve([])}getNextCollectionGroupToUpdate(t){return wl.resolve(null)}getMinOffset(t,e){return wl.resolve(yl.min())}getMinOffsetFromCollectionGroup(t,e){return wl.resolve(yl.min())}updateCollectionGroup(t,e,n){return wl.resolve()}updateIndexEntries(t,e){return wl.resolve()}}class Ef{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ol(dl.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ol(dl.comparator)).toArray()}}
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
     */class Tf{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Tf(0)}static Rn(){return new Tf(-1)}}
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
class If{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
     */class kf{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&sd(n.mutation,t,Nl.empty(),ul.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Od()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Od()){const r=Id();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Ed();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Id();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Od())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=wd();const i=Cd(),o=Cd();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof cd)?s=s.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),sd(o.mutation,e,o.mutation.getFieldMask(),ul.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new If(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Cd();let r=new Cl(((t,e)=>t-e)),s=Od();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Nl.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||Od()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=kd();c.forEach((t=>{if(!s.has(t)){const r=nd(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return wl.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return gl.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):wl.resolve(Id());let o=-1,a=s;return i.next((e=>wl.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?wl.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,Od()))).next((t=>({batchId:o,changes:Td(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new gl(e)).next((t=>{let e=Ed();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let s=Ed();return this.indexManager.getCollectionParents(t,r).next((i=>wl.forEach(i,(i=>{const o=function(t,e){return new Ch(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,oh.newInvalidDocument(n)))}));let n=Ed();return r.forEach(((r,s)=>{const i=t.get(r);void 0!==i&&sd(i.mutation,s,Nl.empty(),ul.now()),xh(e,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):wl.resolve(oh.newInvalidDocument(e))}}
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
     */class Cf{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return wl.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Hd(n.createTime)}),wl.resolve()}getNamedQuery(t,e){return wl.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:wf(t.bundledQuery),readTime:Hd(t.readTime)}}(e)),wl.resolve()}}
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
     */class Sf{constructor(){this.overlays=new Cl(gl.comparator),this.Xn=new Map}getOverlay(t,e){return wl.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Id();return wl.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ie(t,e,r)})),wl.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),wl.resolve()}getOverlaysForCollection(t,e,n){const r=Id(),s=e.length+1,i=new gl(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return wl.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Cl(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Id(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Id(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return wl.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new yf(e,n));let s=this.Xn.get(e);void 0===s&&(s=Od(),this.Xn.set(e,s)),this.Xn.set(e,s.add(n.key))}}
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
     */class Af{constructor(){this.Zn=new Ol(Of.ts),this.es=new Ol(Of.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Of(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Of(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new gl(new dl([])),n=new Of(e,t),r=new Of(e,t+1),s=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),s.push(t.key)})),s}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new gl(new dl([])),n=new Of(e,t),r=new Of(e,t+1);let s=Od();return this.es.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Of(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Of{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return gl.comparator(t.key,e.key)||al(t.ls,e.ls)}static ns(t,e){return al(t.ls,e.ls)||gl.comparator(t.key,e.key)}}
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
     */class Rf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new Ol(Of.ts)}checkEmpty(t){return wl.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new gf(s,e,n,r);this.mutationQueue.push(i);for(const e of r)this.ds=this.ds.add(new Of(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return wl.resolve(i)}lookupMutationBatch(t,e){return wl.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),s=r<0?0:r;return wl.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return wl.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return wl.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Of(e,0),r=new Of(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(t=>{const e=this._s(t.ls);s.push(e)})),wl.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ol(al);return e.forEach((t=>{const e=new Of(t,0),r=new Of(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),wl.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;gl.isDocumentKey(s)||(s=s.child(""));const i=new Of(new gl(s),0);let o=new Ol(al);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),i),wl.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Hu(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return wl.forEach(e.mutations,(r=>{const s=new Of(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new Of(e,0),r=this.ds.firstAfterOrEqual(n);return wl.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,wl.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
     */class Nf{constructor(t){this.ps=t,this.docs=new Cl(gl.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return wl.resolve(n?n.document.mutableCopy():oh.newInvalidDocument(e))}getEntries(t,e){let n=wd();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():oh.newInvalidDocument(t))})),wl.resolve(n)}getAllFromCollection(t,e,n){let r=wd();const s=new gl(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||vl(ml(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return wl.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Gu()}Is(t,e){return wl.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Df(this)}getSize(t){return wl.resolve(this.size)}}class Df extends class{constructor(){this.changes=new vd((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,oh.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?wl.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)})),wl.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
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
     */class Lf{constructor(t){this.persistence=t,this.Ts=new vd((t=>uh(t)),lh),this.lastRemoteSnapshotVersion=ll.min(),this.highestTargetId=0,this.Es=0,this.As=new Af,this.targetCount=0,this.Rs=Tf.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),wl.resolve()}getLastRemoteSnapshotVersion(t){return wl.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return wl.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),wl.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),wl.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Tf(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,wl.resolve()}updateTargetData(t,e){return this.vn(e),wl.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,wl.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),wl.waitFor(s).next((()=>r))}getTargetCount(t){return wl.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return wl.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),wl.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),wl.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),wl.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return wl.resolve(n)}containsKey(t,e){return wl.resolve(this.As.containsKey(e))}}
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
     */class xf{constructor(t,e){this.bs={},this.overlays={},this.Ps=new El(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new Lf(this),this.indexManager=new bf,this.remoteDocumentCache=function(t){return new Nf(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new _f(e),this.Ds=new Cf(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Sf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new Rf(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Bu("MemoryPersistence","Starting transaction:",t);const r=new Pf(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((t=>this.referenceDelegate.xs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ns(t,e){return wl.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Pf extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class Mf{constructor(t){this.persistence=t,this.ks=new Af,this.Os=null}static Ms(t){return new Mf(t)}get Fs(){if(this.Os)return this.Os;throw Gu()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),wl.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),wl.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),wl.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return wl.forEach(this.Fs,(n=>{const r=gl.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r,ll.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return wl.or([()=>wl.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
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
     */class Uf{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}static Vi(t,e){let n=Od(),r=Od();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Uf(t,e.fromCache,n,r)}}
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
     */class Ff{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next((s=>s||this.xi(t,e,r,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return wl.resolve(null)}xi(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||r.isEqual(ll.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((s=>{const i=this.ki(e,s);return this.Oi(e,i,n,r)?this.Ni(t,e):($u()<=nn.DEBUG&&Bu("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Lh(e)),this.Mi(t,i,e,function(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ll.fromTimestamp(1e9===r?new ul(n+1,0):new ul(n,r));return new yl(s,gl.empty(),e)}(r,-1)))}))}ki(t,e){let n=new Ol(Ph(t));return e.forEach(((e,r)=>{xh(t,r)&&(n=n.add(r))})),n}Oi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(t,e){return $u()<=nn.DEBUG&&Bu("QueryEngine","Using full collection scan to execute query:",Lh(e)),this.Di.getDocumentsMatchingQuery(t,e,yl.min())}Mi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
     */class jf{constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new Cl(al),this.Bi=new vd((t=>uh(t)),lh),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new kf(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}async function Vf(t,e){const n=Wu(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=Od();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function $f(t){const e=Wu(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function Bf(t,e){const n=Wu(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(Dl.EMPTY_BYTE_STRING,ll.min()).withLastLimboFreeSnapshotVersion(ll.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Vs.updateTargetData(t,u))}));let a=wd(),c=Od();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n){let r=Od(),s=Od();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=wd();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(ll.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Bu("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:r,Qi:s}}))}(t,i,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!r.isEqual(ll.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return wl.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=s,t)))}function zf(t,e){const n=Wu(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}async function qf(t,e,n){const r=Wu(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!bl(t))throw t;Bu("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function Kf(t,e,n){const r=Wu(t);let s=ll.min(),i=Od();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Wu(t),s=r.Bi.get(n);return void 0!==s?wl.resolve(r.$i.get(s)):r.Vs.getTargetData(e,n)}(r,t,Oh(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.Fi.getDocumentsMatchingQuery(t,e,n?s:ll.min(),n?i:Od()))).next((t=>(function(t,e,n){let r=ll.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Li.set(e,r)}(r,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,ji:i})))))}class Gf{constructor(){this.activeTargetIds=Nd()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hf{constructor(){this.Fr=new Gf,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Gf,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
     */class Wf{Br(t){}shutdown(){}}
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
     */class Qf{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Bu("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Bu("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */const Xf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
     */class Yf{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
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
     */class Jf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,s){const i=this.oo(t,e);Bu("RestConnection","Sending: ",i,n);const o={};return this.uo(o,r,s),this.co(t,i,o,n).then((t=>(Bu("RestConnection","Received: ",t),t)),(e=>{throw qu("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}ao(t,e,n,r,s){return this.ro(t,e,n,r,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+ju,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Xf[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise(((s,i)=>{const o=new Mu;o.listenOnce(Ru.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ou.NO_ERROR:const e=o.getResponseJson();Bu("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Ou.TIMEOUT:Bu("Connection",'RPC "'+t+'" timed out'),i(new Xu(Qu.DEADLINE_EXCEEDED,"Request time out"));break;case Ou.HTTP_ERROR:const n=o.getStatus();if(Bu("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Qu).indexOf(e)>=0?e:Qu.UNKNOWN}(t.status);i(new Xu(e,t.message))}else i(new Xu(Qu.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Xu(Qu.UNAVAILABLE,"Connection failed."));break;default:Gu()}}finally{Bu("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new Iu,i=va(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new xu({})),this.uo(o.initMessageHeaders,e,n),Ue()||je()||Me().indexOf("Electron/")>=0||Ve()||Me().indexOf("MSAppHost/")>=0||Fe()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Bu("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new Yf({jr:t=>{l?Bu("Connection","Not sending because WebChannel is closed:",t):(u||(Bu("Connection","Opening WebChannel transport."),c.open(),u=!0),Bu("Connection","WebChannel sending:",t),c.send(t))},Wr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,Pu.EventType.OPEN,(()=>{l||Bu("Connection","WebChannel transport opened.")})),d(c,Pu.EventType.CLOSE,(()=>{l||(l=!0,Bu("Connection","WebChannel transport closed"),h.eo())})),d(c,Pu.EventType.ERROR,(t=>{l||(l=!0,qu("Connection","WebChannel transport errored:",t),h.eo(new Xu(Qu.UNAVAILABLE,"The operation could not be completed")))})),d(c,Pu.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Hu(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){Bu("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=gd[t];if(void 0!==e)return yd(e)}(t),n=s.message;void 0===e&&(e=Qu.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),l=!0,h.eo(new Xu(e,n)),c.close()}else Bu("Connection","WebChannel received:",n),h.no(n)}})),d(i,Nu.STAT_EVENT,(t=>{t.stat===Du?Bu("Connection","Detected buffering proxy"):t.stat===Lu&&Bu("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Zr()}),0),h}}function Zf(){return"undefined"!=typeof document?document:null}
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
     */function tp(t){return new zd(t,!0)}class ep{constructor(t,e,n=1e3,r=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&Bu("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
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
     */class np{constructor(t,e,n,r,s,i,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new ep(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Qu.RESOURCE_EXHAUSTED?(zu(e.toString()),zu("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Qu.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Xu(Qu.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Bu("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Bu("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rp extends np{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.wt=s}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Gu()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.dt?(Hu(void 0===e||"string"==typeof e),Dl.fromBase64String(e||"")):(Hu(void 0===e||e instanceof Uint8Array),Dl.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Qu.UNKNOWN:yd(t.code);return new Xu(e,t.message||"")}(o);n=new Md(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Yd(t,r.document.name),i=Hd(r.document.updateTime),o=new sh({mapValue:{fields:r.document.fields}}),a=oh.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new xd(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Yd(t,r.document),i=r.readTime?Hd(r.readTime):ll.min(),o=oh.newNoDocument(s,i),a=r.removedTargetIds||[];n=new xd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Yd(t,r.document),i=r.removedTargetIds||[];n=new xd([],i,s,null)}else{if(!("filter"in e))return Gu();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new pd(r),i=t.targetId;n=new Pd(i,s)}}return n}(this.wt,t),n=function(t){if(!("targetChange"in t))return ll.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?ll.min():e.readTime?Hd(e.readTime):ll.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=Zd(this.wt),e.addTarget=function(t,e){let n;const r=e.target;return n=hh(r)?{documents:nf(t,r)}:{query:rf(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Kd(t,e.resumeToken):e.snapshotVersion.compareTo(ll.min())>0&&(n.readTime=qd(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Gu()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=Zd(this.wt),e.removeTarget=t,this.Mo(e)}}class sp extends np{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Hu(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=function(t,e){return t&&t.length>0?(Hu(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Hd(t.updateTime):Hd(e);return n.isEqual(ll.min())&&(n=Hd(e)),new Jh(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Hd(t.commitTime);return this.listener.Jo(n,e)}return Hu(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Zd(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof ad)n={update:ef(t,e.key,e.value)};else if(e instanceof dd)n={delete:Xd(t,e.key)};else if(e instanceof cd)n={update:ef(t,e.key,e.data),updateMask:ff(e.fieldMask)};else{if(!(e instanceof fd))return Gu();n={verify:Xd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof qh)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Kh)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Hh)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Qh)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Gu()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Gd(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Gu()}(t,e.precondition)),n}(this.wt,t)))};this.Mo(e)}}
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
     */class ip extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new Xu(Qu.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ro(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qu.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Xu(Qu.UNKNOWN,t.toString())}))}ao(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ao(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qu.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Xu(Qu.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class op{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(zu(e),this.su=!1):Bu("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
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
     */class ap{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{mp(this)&&(Bu("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Wu(t);e.lu.add(4),await up(e),e._u.set("Unknown"),e.lu.delete(4),await cp(e)}(this))}))})),this._u=new op(n,r)}}async function cp(t){if(mp(t))for(const e of t.fu)await e(!0)}async function up(t){for(const e of t.fu)await e(!1)}function lp(t,e){const n=Wu(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),gp(n)?pp(n):Lp(n).Co()&&dp(n,e))}function hp(t,e){const n=Wu(t),r=Lp(n);n.hu.delete(e),r.Co()&&fp(n,e),0===n.hu.size&&(r.Co()?r.ko():mp(n)&&n._u.set("Unknown"))}function dp(t,e){t.wu.Nt(e.targetId),Lp(t).Qo(e)}function fp(t,e){t.wu.Nt(e),Lp(t).jo(e)}function pp(t){t.wu=new Fd({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Lp(t).start(),t._u.iu()}function gp(t){return mp(t)&&!Lp(t).Do()&&t.hu.size>0}function mp(t){return 0===Wu(t).lu.size}function yp(t){t.wu=void 0}async function vp(t){t.hu.forEach(((e,n)=>{dp(t,e)}))}async function _p(t,e){yp(t),gp(t)?(t._u.uu(e),pp(t)):t._u.set("Unknown")}async function wp(t,e,n){if(t._u.set("Online"),e instanceof Md&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){Bu("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await bp(t,n)}else if(e instanceof xd?t.wu.Ut(e):e instanceof Pd?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(ll.min()))try{const e=await $f(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.hu.get(r);s&&t.hu.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(Dl.EMPTY_BYTE_STRING,n.snapshotVersion)),fp(t,e);const r=new vf(n.target,e,1,n.sequenceNumber);dp(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Bu("RemoteStore","Failed to raise snapshot:",e),await bp(t,e)}}async function bp(t,e,n){if(!bl(e))throw e;t.lu.add(1),await up(t),t._u.set("Offline"),n||(n=()=>$f(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Bu("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await cp(t)}))}function Ep(t,e){return e().catch((n=>bp(t,n,e)))}async function Tp(t){const e=Wu(t),n=xp(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;Ip(e);)try{const t=await zf(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,kp(e,t)}catch(t){await bp(e,t)}Cp(e)&&Sp(e)}function Ip(t){return mp(t)&&t.au.length<10}function kp(t,e){t.au.push(e);const n=xp(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Cp(t){return mp(t)&&!xp(t).Do()&&t.au.length>0}function Sp(t){xp(t).start()}async function Ap(t){xp(t).Xo()}async function Op(t){const e=xp(t);for(const n of t.au)e.Ho(n.mutations)}async function Rp(t,e,n){const r=t.au.shift(),s=mf.from(r,e,n);await Ep(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Tp(t)}async function Np(t,e){e&&xp(t).zo&&await async function(t,e){if(function(t){switch(t){default:return Gu();case Qu.CANCELLED:case Qu.UNKNOWN:case Qu.DEADLINE_EXCEEDED:case Qu.RESOURCE_EXHAUSTED:case Qu.INTERNAL:case Qu.UNAVAILABLE:case Qu.UNAUTHENTICATED:return!1;case Qu.INVALID_ARGUMENT:case Qu.NOT_FOUND:case Qu.ALREADY_EXISTS:case Qu.PERMISSION_DENIED:case Qu.FAILED_PRECONDITION:case Qu.ABORTED:case Qu.OUT_OF_RANGE:case Qu.UNIMPLEMENTED:case Qu.DATA_LOSS:return!0}}(n=e.code)&&n!==Qu.ABORTED){const n=t.au.shift();xp(t).No(),await Ep(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Tp(t)}var n}(t,e),Cp(t)&&Sp(t)}async function Dp(t,e){const n=Wu(t);n.asyncQueue.verifyOperationInProgress(),Bu("RemoteStore","RemoteStore received new credentials");const r=mp(n);n.lu.add(3),await up(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await cp(n)}function Lp(t){return t.mu||(t.mu=function(t,e,n){const r=Wu(t);return r.tu(),new rp(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
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
     */}(t.datastore,t.asyncQueue,{zr:vp.bind(null,t),Jr:_p.bind(null,t),Go:wp.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),gp(t)?pp(t):t._u.set("Unknown")):(await t.mu.stop(),yp(t))}))),t.mu}function xp(t){return t.gu||(t.gu=function(t,e,n){const r=Wu(t);return r.tu(),new sp(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:Ap.bind(null,t),Jr:Np.bind(null,t),Yo:Op.bind(null,t),Jo:Rp.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await Tp(t)):(await t.gu.stop(),t.au.length>0&&(Bu("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
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
     */}class Pp{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Yu,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new Pp(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Xu(Qu.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mp(t,e){if(zu("AsyncQueue",`${e}: ${t}`),bl(t))return new Xu(Qu.UNAVAILABLE,`${e}: ${t}`);throw t}
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
     */class Up{constructor(t){this.comparator=t?(e,n)=>t(e,n)||gl.comparator(e.key,n.key):(t,e)=>gl.comparator(t.key,e.key),this.keyedMap=Ed(),this.sortedSet=new Cl(this.comparator)}static emptySet(t){return new Up(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Up))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Up;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
     */class Fp{constructor(){this.yu=new Cl(gl.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Gu():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class jp{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new jp(t,e,Up.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Nh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
     */class Vp{constructor(){this.Iu=void 0,this.listeners=[]}}class $p{constructor(){this.queries=new vd((t=>Dh(t)),Nh),this.onlineState="Unknown",this.Tu=new Set}}function Bp(t,e){const n=Wu(t);let r=!1;for(const t of e){const e=t.query,s=n.queries.get(e);if(s){for(const e of s.listeners)e.Au(t)&&(r=!0);s.Iu=t}}r&&qp(n)}function zp(t,e,n){const r=Wu(t),s=r.queries.get(e);if(s)for(const t of s.listeners)t.onError(n);r.queries.delete(e)}function qp(t){t.Tu.forEach((t=>{t.next()}))}class Kp{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new jp(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Du&&n||t.docs.isEmpty()&&"Offline"!==e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=jp.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
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
     */class Gp{constructor(t){this.key=t}}class Hp{constructor(t){this.key=t}}class Wp{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=Od(),this.mutatedKeys=Od(),this.Lu=Ph(t),this.Uu=new Up(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new Fp,r=e?e.Uu:this.Uu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=xh(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Uu:i,Gu:n,Oi:o,mutatedKeys:s}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const s=t.Gu.pu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Gu()}};return n(t)-n(e)}
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
     */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const i=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new jp(this.query,t.Uu,r,s,t.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Fp,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=Od(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Hp(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Gp(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=Od();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return jp.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Qp{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Xp{constructor(t){this.key=t,this.Xu=!1}}class Yp{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new vd((t=>Dh(t)),Nh),this.ec=new Map,this.nc=new Set,this.sc=new Cl(gl.comparator),this.ic=new Map,this.rc=new Af,this.oc={},this.uc=new Map,this.cc=Tf.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Jp(t,e){const n=function(t){const e=Wu(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=eg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rg.bind(null,e),e.Zu.Go=Bp.bind(null,e.eventManager),e.Zu.lc=zp.bind(null,e.eventManager),e}(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const t=await function(t,e){const n=Wu(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Vs.getTargetData(t,e).next((s=>s?(r=s,wl.resolve(r)):n.Vs.allocateTargetId(t).next((s=>(r=new vf(e,s,0,t.currentSequenceNumber),n.Vs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.$i.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}(n.localStore,Oh(e));n.isPrimaryClient&&lp(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await async function(t,e,n,r){t.hc=(e,n,r)=>async function(t,e,n,r){let s=e.view.Ku(n);s.Oi&&(s=await Kf(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return lg(t,e.targetId,o.zu),o.snapshot}(t,e,n,r);const s=await Kf(t.localStore,e,!0),i=new Wp(e,s.ji),o=i.Ku(s.documents),a=Ld.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);lg(t,n,c.zu);const u=new Qp(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}(n,e,r,"current"===i)}return s}async function Zp(t,e){const n=Wu(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter((t=>!Nh(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await qf(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),hp(n.remoteStore,r.targetId),cg(n,r.targetId)})).catch(_l)):(cg(n,r.targetId),await qf(n.localStore,r.targetId,!0))}async function tg(t,e,n){const r=function(t){const e=Wu(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ig.bind(null,e),e}(t);try{const t=await function(t,e){const n=Wu(t),r=ul.now(),s=e.reduce(((t,e)=>t.add(e.key)),Od());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=wd(),c=Od();return n.Ui.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=id(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new cd(t.key,e,ih(e.value.mapValue),Zh.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Td(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new Cl(al)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await fg(r,t.changes),await Tp(r.remoteStore)}catch(t){const e=Mp(t,"Failed to persist write");n.reject(e)}}async function eg(t,e){const n=Wu(t);try{const t=await Bf(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ic.get(e);r&&(Hu(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?Hu(r.Xu):t.removedDocuments.size>0&&(Hu(r.Xu),r.Xu=!1))})),await fg(n,t,e)}catch(t){await _l(t)}}function ng(t,e,n){const r=Wu(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach(((n,r)=>{const s=r.view.Eu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Wu(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(r=!0)})),r&&qp(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rg(t,e,n){const r=Wu(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let t=new Cl(gl.comparator);t=t.insert(i,oh.newNoDocument(i,ll.min()));const n=Od().add(i),s=new Dd(ll.min(),new Map,new Ol(al),t,n);await eg(r,s),r.sc=r.sc.remove(i),r.ic.delete(e),dg(r)}else await qf(r.localStore,e,!1).then((()=>cg(r,e,n))).catch(_l)}async function sg(t,e){const n=Wu(t),r=e.batch.batchId;try{const t=await function(t,e){const n=Wu(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=wl.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Hu(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Od();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);ag(n,r,null),og(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fg(n,t)}catch(t){await _l(t)}}async function ig(t,e,n){const r=Wu(t);try{const t=await function(t,e){const n=Wu(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Hu(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);ag(r,e,n),og(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fg(r,t)}catch(n){await _l(n)}}function og(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function ag(t,e,n){const r=Wu(t);let s=r.oc[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function cg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||ug(t,e)}))}function ug(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(hp(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),dg(t))}function lg(t,e,n){for(const r of n)r instanceof Gp?(t.rc.addReference(r.key,e),hg(t,r)):r instanceof Hp?(Bu("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||ug(t,r.key)):Gu()}function hg(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(Bu("SyncEngine","New document in limbo: "+n),t.nc.add(r),dg(t))}function dg(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new gl(dl.fromString(e)),r=t.cc.next();t.ic.set(r,new Xp(n)),t.sc=t.sc.insert(n,r),lp(t.remoteStore,new vf(Oh(Sh(n.path)),r,2,El.ot))}}async function fg(t,e,n){const r=Wu(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((t,a)=>{o.push(r.hc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=Uf.Vi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.Zu.Go(s),await async function(t,e){const n=Wu(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>wl.forEach(e,(e=>wl.forEach(e.Pi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>wl.forEach(e.vi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!bl(t))throw t;Bu("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(e,s)}}}(r.localStore,i))}async function pg(t,e){const n=Wu(t);if(!n.currentUser.isEqual(e)){Bu("SyncEngine","User change. New user:",e.toKey());const t=await Vf(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Xu(Qu.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.uc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await fg(n,t.Ki)}}function gg(t,e){const n=Wu(t),r=n.ic.get(e);if(r&&r.Xu)return Od().add(r.key);{let t=Od();const r=n.ec.get(e);if(!r)return t;for(const e of r){const r=n.tc.get(e);t=t.unionWith(r.view.qu)}return t}}class mg{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=tp(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return function(t,e,n,r){return new jf(t,e,n,r)}(this.persistence,new Ff,t.initialUser,this.wt)}_c(t){return new xf(Mf.Ms,this.wt)}dc(t){return new Hf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yg{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ng(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=pg.bind(null,this.syncEngine),await async function(t,e){const n=Wu(t);e?(n.lu.delete(2),await cp(n)):e||(n.lu.add(2),await up(n),n._u.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new $p}createDatastore(t){const e=tp(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Jf(r));var r;return function(t,e,n,r){return new ip(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>ng(this.syncEngine,t,0),i=Qf.V()?new Qf:new Wf,new ap(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new Yp(t,e,n,r,s,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Wu(t);Bu("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await up(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
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
     */class vg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
     */class _g{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Fu.UNAUTHENTICATED,this.clientId=ol.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Bu("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Bu("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Xu(Qu.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yu;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Mp(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function wg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(Bu("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),Bu("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Vf(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new mg)),t.offlineComponents}(t);Bu("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Dp(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Dp(e.remoteStore,n))),t.onlineComponents=e}async function bg(t){return t.onlineComponents||(Bu("FirestoreClient","Using default OnlineComponentProvider"),await wg(t,new yg)),t.onlineComponents}async function Eg(t){const e=await bg(t),n=e.eventManager;return n.onListen=Jp.bind(null,e.syncEngine),n.onUnlisten=Zp.bind(null,e.syncEngine),n}function Tg(t,e,n={}){const r=new Yu;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new vg({next:n=>{e.enqueueAndForget((()=>async function(t,e){const n=Wu(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}(t,o))),n.fromCache&&"server"===r.source?s.reject(new Xu(Qu.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Kp(n,i,{includeMetadataChanges:!0,Du:!0});return async function(t,e){const n=Wu(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Vp),s)try{i.Iu=await n.onListen(r)}catch(t){const n=Mp(t,`Initialization of query '${Lh(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&qp(n)}(t,o)}(await Eg(t),t.asyncQueue,e,n,r))),r.promise}const Ig=new Map;
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
     */function kg(t,e,n){if(!n)throw new Xu(Qu.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Cg(t){if(!gl.isDocumentKey(t))throw new Xu(Qu.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sg(t){if(gl.isDocumentKey(t))throw new Xu(Qu.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ag(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Gu()}function Og(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Xu(Qu.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ag(t);throw new Xu(Qu.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Rg{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Xu(Qu.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Xu(Qu.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new Xu(Qu.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
     */class Ng{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rg({}),this._settingsFrozen=!1,t instanceof $l?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Xu(Qu.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $l(t.options.projectId)}(t))}get app(){if(!this._app)throw new Xu(Qu.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Xu(Qu.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rg(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Zu;switch(t.type){case"gapi":const e=t.client;return Hu(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new nl(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Xu(Qu.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ig.get(t);e&&(Bu("ComponentProvider","Removing Datastore"),Ig.delete(t),e.terminate())}(this),Promise.resolve()}}
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
     */class Dg{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xg(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dg(this.firestore,t,this._key)}}class Lg{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Lg(this.firestore,t,this._query)}}class xg extends Lg{constructor(t,e,n){super(t,e,Sh(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dg(this.firestore,null,new gl(t))}withConverter(t){return new xg(this.firestore,t,this._path)}}function Pg(t,e,...n){if(t=Ye(t),kg("collection","path",e),t instanceof Ng){const r=dl.fromString(e,...n);return Sg(r),new xg(t,null,r)}{if(!(t instanceof Dg||t instanceof xg))throw new Xu(Qu.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(dl.fromString(e,...n));return Sg(r),new xg(t.firestore,null,r)}}
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
class Mg{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new ep(this,"async_queue_retry"),this.Kc=()=>{const t=Zf();t&&Bu("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Zf();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Zf();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Yu;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!bl(t))throw t;Bu("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw zu("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=Pp.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&Gu()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class Ug extends Ng{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Mg,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Vg(this),this._firestoreClient.terminate()}}function Fg(t=jn()){return Pn(t,"firestore").getImmediate()}function jg(t){return t._firestoreClient||Vg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Vg(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Vl(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _g(t._authCredentials,t._appCheckCredentials,t._queue,r)}
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
     */class $g{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Xu(Qu.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pl(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class Bg{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Bg(Dl.fromBase64String(t))}catch(t){throw new Xu(Qu.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Bg(Dl.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class zg{constructor(t){this._methodName=t}}
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
     */class qg{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Xu(Qu.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Xu(Qu.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return al(this._lat,t._lat)||al(this._long,t._long)}}
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
     */const Kg=/^__.*__$/;class Gg{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new cd(t,this.data,this.fieldMask,e,this.fieldTransforms):new ad(t,this.data,e,this.fieldTransforms)}}function Hg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Gu()}}class Wg{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Wg(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return im(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Hg(this.Zc)&&Kg.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class Qg{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||tp(t)}aa(t,e,n,r=!1){return new Wg({Zc:t,methodName:e,ca:n,path:pl.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Xg(t){const e=t._freezeSettings(),n=tp(t._databaseId);return new Qg(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Yg(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);em("Data must be an object, but it was:",o,r);const a=Zg(r,o);let c,u;if(i.merge)c=new Nl(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=nm(e,r,n);if(!o.contains(s))throw new Xu(Qu.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);om(t,s)||t.push(s)}c=new Nl(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Gg(new sh(a),c,u)}function Jg(t,e){if(tm(t=Ye(t)))return em("Unsupported field value:",e,t),Zg(t,e);if(t instanceof zg)return function(t,e){if(!Hg(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=Jg(s,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Ye(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return jh(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ul.fromDate(t);return{timestampValue:qd(e.wt,n)}}if(t instanceof ul){const n=new ul(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:qd(e.wt,n)}}if(t instanceof qg)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Bg)return{bytesValue:Kd(e.wt,t._byteString)};if(t instanceof Dg){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Wd(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${Ag(t)}`)}(t,e)}function Zg(t,e){const n={};return kl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Il(t,((t,r)=>{const s=Jg(r,e.ea(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function tm(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ul||t instanceof qg||t instanceof Bg||t instanceof Dg||t instanceof zg)}function em(t,e,n){if(!tm(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Ag(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function nm(t,e,n){if((e=Ye(e))instanceof $g)return e._internalPath;if("string"==typeof e)return sm(t,e);throw im("Field path arguments must be of type string or ",t,!1,void 0,n)}const rm=new RegExp("[~\\*/\\[\\]]");function sm(t,e,n){if(e.search(rm)>=0)throw im(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $g(...e.split("."))._internalPath}catch(r){throw im(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function im(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Xu(Qu.INVALID_ARGUMENT,a+t+c)}function om(t,e){return t.some((t=>t.isEqual(e)))}
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
     */class am{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Dg(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new cm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(um("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class cm extends am{data(){return super.data()}}function um(t,e){return"string"==typeof e?sm(t,e):e instanceof $g?e._internalPath:e._delegate._internalPath}
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
     */class lm{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hm extends am{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new dm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(um("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class dm extends hm{data(t={}){return super.data(t)}}class fm{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new lm(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new dm(this._firestore,this._userDataWriter,n.key,n,new lm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Xu(Qu.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new dm(t._firestore,t._userDataWriter,n.doc.key,n.doc,new lm(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new dm(t._firestore,t._userDataWriter,e.doc.key,e.doc,new lm(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:pm(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function pm(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Gu()}}
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
     */class gm extends class{}{constructor(t,e,n){super(),this.type=t,this.ma=e,this.ga=n}_apply(t){return new Lg(t.firestore,t.converter,Rh(t._query,this.ma,this.ga))}}function mm(t){return function(t,e){if(e<=0)throw new Xu(Qu.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}("limit",t),new gm("limit",t,"F")
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
     */}class ym extends class{convertValue(t,e="none"){switch(Kl(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pl(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ml(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Gu()}}convertObject(t,e){const n={};return Il(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new qg(Pl(t.latitude),Pl(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Fl(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(jl(t));default:return null}}convertTimestamp(t){const e=xl(t);return new ul(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=dl.fromString(t);Hu(pf(n));const r=new $l(n.get(1),n.get(3)),s=new gl(n.popFirst(5));return r.isEqual(e)||zu(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
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
     */{constructor(t){super(),this.firestore=t}convertBytes(t){return new Bg(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Dg(this.firestore,null,e)}}function vm(t){t=Og(t,Lg);const e=Og(t.firestore,Ug),n=jg(e),r=new ym(e);return function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Xu(Qu.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query),Tg(n,t._query).then((n=>new fm(e,r,t,n)))}function _m(t,e){const n=Og(t.firestore,Ug),r=function(t,e,...n){if(t=Ye(t),1===arguments.length&&(e=ol.I()),kg("doc","path",e),t instanceof Ng){const r=dl.fromString(e,...n);return Cg(r),new Dg(t,null,new gl(r))}{if(!(t instanceof Dg||t instanceof xg))throw new Xu(Qu.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(dl.fromString(e,...n));return Cg(r),new Dg(t.firestore,t instanceof xg?t.converter:null,new gl(r))}}(t),s=function(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}(t.converter,e);return function(t,e){return function(t,e){const n=new Yu;return t.asyncQueue.enqueueAndForget((async()=>tg(await function(t){return bg(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(jg(t),e)}(n,[Yg(Xg(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,Zh.exists(!1))]).then((()=>r))}!function(t,e=!0){ju="9.8.3",xn(new Je("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Ug(r,new tl(t.getProvider("auth-internal")),new sl(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),Vn(Uu,"3.4.10",t),Vn(Uu,"3.4.10","esm2017")}();
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
Vn("firebase","9.8.3","app");const wm=function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:On,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw Mn.create("bad-app-name",{appName:String(r)});const s=Nn.get(r);if(s){if(qe(t,s.options)&&qe(n,s.config))return s;throw Mn.create("duplicate-app",{appName:r})}const i=new en(r);for(const t of Dn.values())i.addComponent(t);const o=new Un(t,n,i);return Nn.set(r,o),o}({apiKey:"AIzaSyBFpiFdqsvMHK9Rby-yEkYYvNJznkrxzRw",authDomain:"choozr-ccb67.firebaseapp.com",projectId:"choozr-ccb67",storageBucket:"choozr-ccb67.appspot.com",messagingSenderId:"864093359105",appId:"1:864093359105:web:fa1f154b16bd2e8f7a0400"});class bm{constructor(){this.snapshotsToChoozr=t=>new Ht(new Wt(t.id),new Nt(t.get("name")))}async getChoozrsWith(t){const e=Si();await vs(e,t.apiKey,t.appId);const n=function(t,...e){for(const n of e)t=n._apply(t);return t}(Pg(Fg(wm),"Choozr"),mm(50));return(await vm(n)).docs.map(this.snapshotsToChoozr)}async createChoozrWith(t,e){const n=Si();await vs(n,e.apiKey,e.appId);const r=Fg(wm),s=await _m(Pg(r,"Choozr"),{name:t.value});return new Ht(new Wt(s.id),t)}}function Em(e){let n,r;return n=new gt({props:{routes:e[0]}}),n.$on("routeEvent",e[1]),{c(){Y(n.$$.fragment)},m(t,e){J(n,t,e),r=!0},p:t,i(t){r||(H(n.$$.fragment,t),r=!0)},o(t){W(n.$$.fragment,t),r=!1},d(t){Z(n,t)}}}function Tm(t){const e={"/":Rt,"/home":Ft,"/choozrs/:choozrId":ge,"/choozrs/:choozrId/join":Ie,"/teams/:teamId":Ne};return function(){const t=new mt,e=new bm,n=new ne,r=new _e,s=new Vt(e,t,e,n),i=new Qt(n,t,n);S("loginUseCase",new yt(t)),S("createChoozrUseCase",s),S("getChoozrsUseCase",s),S("generateJoinChoozrURLUseCase",s),S("getChoozrTeamsUseCase",s),S("getTeamDetailsUseCase",i),S("createTeamUseCase",i),S("joinChoozrUseCase",new me(r,t,n))}(),[e,async function(t){const e=t.detail;e==bt?await ft("/home"):e instanceof Et||e instanceof Tt?await ft(`/choozrs/${e.choozrId.value}`):(e instanceof kt||e instanceof It)&&await ft(`/teams/${e.teamId.value}`)}]}return new class extends et{constructor(t){super(),tt(this,t,Tm,Em,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle4.js.map
