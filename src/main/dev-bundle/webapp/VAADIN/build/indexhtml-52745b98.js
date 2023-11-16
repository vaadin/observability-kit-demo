(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.webPush=!1;window.Vaadin.featureFlags.formFillerAddon=!1;const Ia="modulepreload",Pa=function(t,e){return new URL(t,e).href},Wo={},g=function(e,o,n){if(!o||o.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(o.map(r=>{if(r=Pa(r,n),r in Wo)return;Wo[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(!!n)for(let d=a.length-1;d>=0;d--){const m=a[d];if(m.href===r&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${s}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":Ia,i||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),i)return new Promise((d,m)=>{c.addEventListener("load",d),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};function kt(t){return t=t||[],Array.isArray(t)?t:[t]}function te(t){return`[Vaadin.Router] ${t}`}function za(t){if(typeof t!="object")return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(t)}`:e}const Et="module",St="nomodule",ho=[Et,St];function Go(t){if(!t.match(/.+\.[m]?js$/))throw new Error(te(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function Qn(t){if(!t||!Z(t.path))throw new Error(te('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,o=["component","redirect","bundle"];if(!ke(t.action)&&!Array.isArray(t.children)&&!ke(t.children)&&!Ct(e)&&!o.some(n=>Z(t[n])))throw new Error(te(`Expected route config "${t.path}" to include either "${o.join('", "')}" or "action" function but none found.`));if(e)if(Z(e))Go(e);else if(ho.some(n=>n in e))ho.forEach(n=>n in e&&Go(e[n]));else throw new Error(te('Expected route bundle to include either "'+St+'" or "'+Et+'" keys, or both'));t.redirect&&["bundle","component"].forEach(n=>{n in t&&console.warn(te(`Route config "${t.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function Ko(t){kt(t).forEach(e=>Qn(e))}function Jo(t,e){let o=document.head.querySelector('script[src="'+t+'"][async]');return o||(o=document.createElement("script"),o.setAttribute("src",t),e===Et?o.setAttribute("type",Et):e===St&&o.setAttribute(St,""),o.async=!0),new Promise((n,a)=>{o.onreadystatechange=o.onload=r=>{o.__dynamicImportLoaded=!0,n(r)},o.onerror=r=>{o.parentNode&&o.parentNode.removeChild(o),a(r)},o.parentNode===null?document.head.appendChild(o):o.__dynamicImportLoaded&&n()})}function Oa(t){return Z(t)?Jo(t):Promise.race(ho.filter(e=>e in t).map(e=>Jo(t[e],e)))}function Ge(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:t==="go",detail:e}))}function Ct(t){return typeof t=="object"&&!!t}function ke(t){return typeof t=="function"}function Z(t){return typeof t=="string"}function Zn(t){const e=new Error(te(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const ze=new class{};function Ma(t){const e=t.port,o=t.protocol,r=o==="http:"&&e==="80"||o==="https:"&&e==="443"?t.hostname:t.host;return`${o}//${r}`}function Yo(t){if(t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const o=t.composedPath?t.composedPath():t.path||[];for(let s=0;s<o.length;s++){const l=o[s];if(l.nodeName&&l.nodeName.toLowerCase()==="a"){e=l;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Ma(e))!==window.location.origin)return;const{pathname:a,search:r,hash:i}=e;Ge("go",{pathname:a,search:r,hash:i})&&(t.preventDefault(),t&&t.type==="click"&&window.scrollTo(0,0))}const Va={activate(){window.document.addEventListener("click",Yo)},inactivate(){window.document.removeEventListener("click",Yo)}},Fa=/Trident/.test(navigator.userAgent);Fa&&!ke(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var o=document.createEvent("Event");return o.initEvent(t,!!e.bubbles,!!e.cancelable),o.state=e.state||null,o},window.PopStateEvent.prototype=window.Event.prototype);function Xo(t){if(t.state==="vaadin-router-ignore")return;const{pathname:e,search:o,hash:n}=window.location;Ge("go",{pathname:e,search:o,hash:n})}const Da={activate(){window.addEventListener("popstate",Xo)},inactivate(){window.removeEventListener("popstate",Xo)}};var Be=ra,ja=_o,qa=Wa,Ua=oa,Ba=aa,ea="/",ta="./",Ha=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function _o(t,e){for(var o=[],n=0,a=0,r="",i=e&&e.delimiter||ea,s=e&&e.delimiters||ta,l=!1,c;(c=Ha.exec(t))!==null;){var d=c[0],m=c[1],h=c.index;if(r+=t.slice(a,h),a=h+d.length,m){r+=m[1],l=!0;continue}var y="",ie=t[a],K=c[2],it=c[3],Bt=c[4],W=c[5];if(!l&&r.length){var ne=r.length-1;s.indexOf(r[ne])>-1&&(y=r[ne],r=r.slice(0,ne))}r&&(o.push(r),r="",l=!1);var Ae=y!==""&&ie!==void 0&&ie!==y,Te=W==="+"||W==="*",Ht=W==="?"||W==="*",le=y||i,lt=it||Bt;o.push({name:K||n++,prefix:y,delimiter:le,optional:Ht,repeat:Te,partial:Ae,pattern:lt?Ga(lt):"[^"+me(le)+"]+?"})}return(r||a<t.length)&&o.push(r+t.substr(a)),o}function Wa(t,e){return oa(_o(t,e))}function oa(t){for(var e=new Array(t.length),o=0;o<t.length;o++)typeof t[o]=="object"&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$"));return function(n,a){for(var r="",i=a&&a.encode||encodeURIComponent,s=0;s<t.length;s++){var l=t[s];if(typeof l=="string"){r+=l;continue}var c=n?n[l.name]:void 0,d;if(Array.isArray(c)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but got array');if(c.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var m=0;m<c.length;m++){if(d=i(c[m],l),!e[s].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'"');r+=(m===0?l.prefix:l.delimiter)+d}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(d=i(String(c),l),!e[s].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but got "'+d+'"');r+=l.prefix+d;continue}if(l.optional){l.partial&&(r+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be '+(l.repeat?"an array":"a string"))}return r}}function me(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ga(t){return t.replace(/([=!:$/()])/g,"\\$1")}function na(t){return t&&t.sensitive?"":"i"}function Ka(t,e){if(!e)return t;var o=t.source.match(/\((?!\?)/g);if(o)for(var n=0;n<o.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}function Ja(t,e,o){for(var n=[],a=0;a<t.length;a++)n.push(ra(t[a],e,o).source);return new RegExp("(?:"+n.join("|")+")",na(o))}function Ya(t,e,o){return aa(_o(t,o),e,o)}function aa(t,e,o){o=o||{};for(var n=o.strict,a=o.start!==!1,r=o.end!==!1,i=me(o.delimiter||ea),s=o.delimiters||ta,l=[].concat(o.endsWith||[]).map(me).concat("$").join("|"),c=a?"^":"",d=t.length===0,m=0;m<t.length;m++){var h=t[m];if(typeof h=="string")c+=me(h),d=m===t.length-1&&s.indexOf(h[h.length-1])>-1;else{var y=h.repeat?"(?:"+h.pattern+")(?:"+me(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),h.optional?h.partial?c+=me(h.prefix)+"("+y+")?":c+="(?:"+me(h.prefix)+"("+y+"))?":c+=me(h.prefix)+"("+y+")"}}return r?(n||(c+="(?:"+i+")?"),c+=l==="$"?"$":"(?="+l+")"):(n||(c+="(?:"+i+"(?="+l+"))?"),d||(c+="(?="+i+"|"+l+")")),new RegExp(c,na(o))}function ra(t,e,o){return t instanceof RegExp?Ka(t,e):Array.isArray(t)?Ja(t,e,o):Ya(t,e,o)}Be.parse=ja;Be.compile=qa;Be.tokensToFunction=Ua;Be.tokensToRegExp=Ba;const{hasOwnProperty:Xa}=Object.prototype,mo=new Map;mo.set("|false",{keys:[],pattern:/(?:)/});function Qo(t){try{return decodeURIComponent(t)}catch{return t}}function Qa(t,e,o,n,a){o=!!o;const r=`${t}|${o}`;let i=mo.get(r);if(!i){const c=[];i={keys:c,pattern:Be(t,c,{end:o,strict:t===""})},mo.set(r,i)}const s=i.pattern.exec(e);if(!s)return null;const l=Object.assign({},a);for(let c=1;c<s.length;c++){const d=i.keys[c-1],m=d.name,h=s[c];(h!==void 0||!Xa.call(l,m))&&(d.repeat?l[m]=h?h.split(d.delimiter).map(Qo):[]:l[m]=h&&Qo(h))}return{path:s[0],keys:(n||[]).concat(i.keys),params:l}}function ia(t,e,o,n,a){let r,i,s=0,l=t.path||"";return l.charAt(0)==="/"&&(o&&(l=l.substr(1)),o=!0),{next(c){if(t===c)return{done:!0};const d=t.__children=t.__children||t.children;if(!r&&(r=Qa(l,e,!d,n,a),r))return{done:!1,value:{route:t,keys:r.keys,params:r.params,path:r.path}};if(r&&d)for(;s<d.length;){if(!i){const h=d[s];h.parent=t;let y=r.path.length;y>0&&e.charAt(y)==="/"&&(y+=1),i=ia(h,e.substr(y),o,r.keys,r.params)}const m=i.next(c);if(!m.done)return{done:!1,value:m.value};i=null,s++}return{done:!0}}}}function Za(t){if(ke(t.route.action))return t.route.action(t)}function er(t,e){let o=e;for(;o;)if(o=o.parent,o===t)return!0;return!1}function tr(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const o=(t.route||{}).path;return o&&(e+=` Resolution had failed on route: '${o}'`),e}function or(t,e){const{route:o,path:n}=e;if(o&&!o.__synthetic){const a={path:n,route:o};if(!t.chain)t.chain=[];else if(o.parent){let r=t.chain.length;for(;r--&&t.chain[r].route&&t.chain[r].route!==o.parent;)t.chain.pop()}t.chain.push(a)}}class Je{constructor(e,o={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=o.baseUrl||"",this.errorHandler=o.errorHandler,this.resolveRoute=o.resolveRoute||Za,this.context=Object.assign({resolver:this},o.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Ko(e);const o=[...kt(e)];this.root.__children=o}addRoutes(e){return Ko(e),this.root.__children.push(...kt(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const o=Object.assign({},this.context,Z(e)?{pathname:e}:e),n=ia(this.root,this.__normalizePathname(o.pathname),this.baseUrl),a=this.resolveRoute;let r=null,i=null,s=o;function l(c,d=r.value.route,m){const h=m===null&&r.value.route;return r=i||n.next(h),i=null,!c&&(r.done||!er(d,r.value.route))?(i=r,Promise.resolve(ze)):r.done?Promise.reject(Zn(o)):(s=Object.assign(s?{chain:s.chain?s.chain.slice(0):[]}:{},o,r.value),or(s,r.value),Promise.resolve(a(s)).then(y=>y!=null&&y!==ze?(s.result=y.result||y,s):l(c,d,y)))}return o.next=l,Promise.resolve().then(()=>l(!0,this.root)).catch(c=>{const d=tr(s);if(c?console.warn(d):c=new Error(d),c.context=c.context||s,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return s.result=this.errorHandler(c),s;throw c})}static __createUrl(e,o){return new URL(e,o)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const o=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,o).href;if(n.slice(0,o.length)===o)return n.slice(o.length)}}Je.pathToRegexp=Be;const{pathToRegexp:Zo}=Je,en=new Map;function la(t,e,o){const n=e.name||e.component;if(n&&(t.has(n)?t.get(n).push(e):t.set(n,[e])),Array.isArray(o))for(let a=0;a<o.length;a++){const r=o[a];r.parent=e,la(t,r,r.__children||r.children)}}function tn(t,e){const o=t.get(e);if(o&&o.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return o&&o[0]}function on(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function nr(t,e={}){if(!(t instanceof Je))throw new TypeError("An instance of Resolver is expected");const o=new Map;return(n,a)=>{let r=tn(o,n);if(!r&&(o.clear(),la(o,t.root,t.root.__children),r=tn(o,n),!r))throw new Error(`Route "${n}" not found`);let i=en.get(r.fullPath);if(!i){let l=on(r),c=r.parent;for(;c;){const y=on(c);y&&(l=y.replace(/\/$/,"")+"/"+l.replace(/^\//,"")),c=c.parent}const d=Zo.parse(l),m=Zo.tokensToFunction(d),h=Object.create(null);for(let y=0;y<d.length;y++)Z(d[y])||(h[d[y].name]=!0);i={toPath:m,keys:h},en.set(l,i),r.fullPath=l}let s=i.toPath(a,e)||"/";if(e.stringifyQueryParams&&a){const l={},c=Object.keys(a);for(let m=0;m<c.length;m++){const h=c[m];i.keys[h]||(l[h]=a[h])}const d=e.stringifyQueryParams(l);d&&(s+=d.charAt(0)==="?"?d:`?${d}`)}return s}}let nn=[];function ar(t){nn.forEach(e=>e.inactivate()),t.forEach(e=>e.activate()),nn=t}const rr=t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&e!=="none"},ir=(t,e)=>{const o=()=>{t.removeEventListener("animationend",o),e()};t.addEventListener("animationend",o)};function an(t,e){return t.classList.add(e),new Promise(o=>{if(rr(t)){const n=t.getBoundingClientRect(),a=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;t.setAttribute("style",`position: absolute; ${a}`),ir(t,()=>{t.classList.remove(e),t.removeAttribute("style"),o()})}else t.classList.remove(e),o()})}const lr=256;function Jt(t){return t!=null}function sr(t){const e=Object.assign({},t);return delete e.next,e}function J({pathname:t="",search:e="",hash:o="",chain:n=[],params:a={},redirectFrom:r,resolver:i},s){const l=n.map(c=>c.route);return{baseUrl:i&&i.baseUrl||"",pathname:t,search:e,hash:o,routes:l,route:s||l.length&&l[l.length-1]||null,params:a,redirectFrom:r,getUrl:(c={})=>vt(pe.pathToRegexp.compile(sa(l))(Object.assign({},a,c)),i)}}function rn(t,e){const o=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:o}}}function cr(t,e){e.location=J(t);const o=t.chain.map(n=>n.route).indexOf(t.route);return t.chain[o].element=e,e}function gt(t,e,o){if(ke(t))return t.apply(o,e)}function ln(t,e,o){return n=>{if(n&&(n.cancel||n.redirect))return n;if(o)return gt(o[t],e,o)}}function dr(t,e){if(!Array.isArray(t)&&!Ct(t))throw new Error(te(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const o=kt(t);for(let n=0;n<o.length;n++)Qn(o[n]),e.__children.push(o[n])}function ht(t){if(t&&t.length){const e=t[0].parentNode;for(let o=0;o<t.length;o++)e.removeChild(t[o])}}function vt(t,e){const o=e.__effectiveBaseUrl;return o?e.constructor.__createUrl(t.replace(/^\//,""),o).pathname:t}function sa(t){return t.map(e=>e.path).reduce((e,o)=>o.length?e.replace(/\/$/,"")+"/"+o.replace(/^\//,""):e,"")}class pe extends Je{constructor(e,o){const n=document.head.querySelector("base"),a=n&&n.getAttribute("href");super([],Object.assign({baseUrl:a&&Je.__createUrl(a,document.URL).pathname.replace(/[^\/]*$/,"")},o)),this.resolveRoute=i=>this.__resolveRoute(i);const r=pe.NavigationTrigger;pe.setTriggers.apply(pe,Object.keys(r).map(i=>r[i])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=J({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const o=e.route;let n=Promise.resolve();ke(o.children)&&(n=n.then(()=>o.children(sr(e))).then(r=>{!Jt(r)&&!ke(o.children)&&(r=o.children),dr(r,o)}));const a={redirect:r=>rn(e,r),component:r=>{const i=document.createElement(r);return this.__createdByRouter.set(i,!0),i}};return n.then(()=>{if(this.__isLatestRender(e))return gt(o.action,[e,a],o)}).then(r=>{if(Jt(r)&&(r instanceof HTMLElement||r.redirect||r===ze))return r;if(Z(o.redirect))return a.redirect(o.redirect);if(o.bundle)return Oa(o.bundle).then(()=>{},()=>{throw new Error(te(`Bundle not found: ${o.bundle}. Check if the file name is correct`))})}).then(r=>{if(Jt(r))return r;if(Z(o.component))return a.component(o.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,o=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),o||this.__onNavigationEvent(),this.ready}render(e,o){const n=++this.__lastStartedRenderId,a=Object.assign({search:"",hash:""},Z(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(a).then(r=>this.__fullyResolveChain(r)).then(r=>{if(this.__isLatestRender(r)){const i=this.__previousContext;if(r===i)return this.__updateBrowserHistory(i,!0),this.location;if(this.location=J(r),o&&this.__updateBrowserHistory(r,n===1),Ge("location-changed",{router:this,location:this.location}),r.__skipAttach)return this.__copyUnchangedElements(r,i),this.__previousContext=r,this.location;this.__addAppearingContent(r,i);const s=this.__animateIfNeeded(r);return this.__runOnAfterEnterCallbacks(r),this.__runOnAfterLeaveCallbacks(r,i),s.then(()=>{if(this.__isLatestRender(r))return this.__removeDisappearingContent(),this.__previousContext=r,this.location})}}).catch(r=>{if(n===this.__lastStartedRenderId)throw o&&this.__updateBrowserHistory(a),ht(this.__outlet&&this.__outlet.children),this.location=J(Object.assign(a,{resolver:this})),Ge("error",Object.assign({router:this,error:r},a)),r}),this.ready}__fullyResolveChain(e,o=e){return this.__findComponentContextAfterAllRedirects(o).then(n=>{const r=n!==o?n:e,s=vt(sa(n.chain),n.resolver)===n.pathname,l=(c,d=c.route,m)=>c.next(void 0,d,m).then(h=>h===null||h===ze?s?c:d.parent!==null?l(c,d.parent,h):h:h);return l(n).then(c=>{if(c===null||c===ze)throw Zn(r);return c&&c!==ze&&c!==n?this.__fullyResolveChain(r,c):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const o=e.result;return o instanceof HTMLElement?(cr(e,o),Promise.resolve(e)):o.redirect?this.__redirect(o.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):o instanceof Error?Promise.reject(o):Promise.reject(new Error(te(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${za(o)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(o=>o===this.__previousContext||o===e?o:this.__fullyResolveChain(o))}__runOnBeforeCallbacks(e){const o=this.__previousContext||{},n=o.chain||[],a=e.chain;let r=Promise.resolve();const i=()=>({cancel:!0}),s=l=>rn(e,l);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let l=0;l<Math.min(n.length,a.length)&&!(n[l].route!==a[l].route||n[l].path!==a[l].path&&n[l].element!==a[l].element||!this.__isReusableElement(n[l].element,a[l].element));l=++e.__divergedChainIndex);if(e.__skipAttach=a.length===n.length&&e.__divergedChainIndex==a.length&&this.__isReusableElement(e.result,o.result),e.__skipAttach){for(let l=a.length-1;l>=0;l--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:i},n[l]);for(let l=0;l<a.length;l++)r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:i,redirect:s},a[l]),n[l].element.location=J(e,n[l].route)}else for(let l=n.length-1;l>=e.__divergedChainIndex;l--)r=this.__runOnBeforeLeaveCallbacks(r,e,{prevent:i},n[l])}if(!e.__skipAttach)for(let l=0;l<a.length;l++)l<e.__divergedChainIndex?l<n.length&&n[l].element&&(n[l].element.location=J(e,n[l].route)):(r=this.__runOnBeforeEnterCallbacks(r,e,{prevent:i,redirect:s},a[l]),a[l].element&&(a[l].element.location=J(e,a[l].route)));return r.then(l=>{if(l){if(l.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(l.redirect)return this.__redirect(l.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,o,n,a){const r=J(o);return e.then(i=>{if(this.__isLatestRender(o))return ln("onBeforeLeave",[r,n,this],a.element)(i)}).then(i=>{if(!(i||{}).redirect)return i})}__runOnBeforeEnterCallbacks(e,o,n,a){const r=J(o,a.route);return e.then(i=>{if(this.__isLatestRender(o))return ln("onBeforeEnter",[r,n,this],a.element)(i)})}__isReusableElement(e,o){return e&&o?this.__createdByRouter.get(e)&&this.__createdByRouter.get(o)?e.localName===o.localName:e===o:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,o,n){if(o>lr)throw new Error(te(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(o||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(te(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:o="",hash:n=""},a){if(window.location.pathname!==e||window.location.search!==o||window.location.hash!==n){const r=a?"replaceState":"pushState";window.history[r](null,document.title,e+o+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,o){let n=this.__outlet;for(let a=0;a<e.__divergedChainIndex;a++){const r=o&&o.chain[a].element;if(r)if(r.parentNode===n)e.chain[a].element=r,n=r;else break}return n}__addAppearingContent(e,o){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,o);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(r=>this.__addedByRouter.get(r)&&r!==e.result);let a=n;for(let r=e.__divergedChainIndex;r<e.chain.length;r++){const i=e.chain[r].element;i&&(a.appendChild(i),this.__addedByRouter.set(i,!0),a===n&&this.__appearingContent.push(i),a=i)}}__removeDisappearingContent(){this.__disappearingContent&&ht(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ht(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,o){if(o)for(let n=o.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const a=o.chain[n].element;if(a)try{const r=J(e);gt(a.onAfterLeave,[r,{},o.resolver],a)}finally{this.__disappearingContent.indexOf(a)>-1&&ht(a.children)}}}__runOnAfterEnterCallbacks(e){for(let o=e.__divergedChainIndex;o<e.chain.length&&this.__isLatestRender(e);o++){const n=e.chain[o].element||{},a=J(e,e.chain[o].route);gt(n.onAfterEnter,[a,{},e.resolver],n)}}__animateIfNeeded(e){const o=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],a=[],r=e.chain;let i;for(let s=r.length;s>0;s--)if(r[s-1].route.animate){i=r[s-1].route.animate;break}if(o&&n&&i){const s=Ct(i)&&i.leave||"leaving",l=Ct(i)&&i.enter||"entering";a.push(an(o,s)),a.push(an(n,l))}return Promise.all(a).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:o,search:n,hash:a}=e?e.detail:window.location;Z(this.__normalizePathname(o))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:o,search:n,hash:a},!0))}static setTriggers(...e){ar(e)}urlForName(e,o){return this.__urlForName||(this.__urlForName=nr(this)),vt(this.__urlForName(e,o),this)}urlForPath(e,o){return vt(pe.pathToRegexp.compile(e)(o),this)}static go(e){const{pathname:o,search:n,hash:a}=Z(e)?this.__createUrl(e,"http://a"):e;return Ge("go",{pathname:o,search:n,hash:a})}}const fr=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,yt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function hr(){function t(){return!0}return ca(t)}function mr(){try{return pr()?!0:ur()?yt?!br():!hr():!1}catch{return!1}}function pr(){return localStorage.getItem("vaadin.developmentmode.force")}function ur(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function br(){return!!(yt&&Object.keys(yt).map(e=>yt[e]).filter(e=>e.productionMode).length>0)}function ca(t,e){if(typeof t!="function")return;const o=fr.exec(t.toString());if(o)try{t=new Function(o[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return t(e)}window.Vaadin=window.Vaadin||{};const sn=function(t,e){if(window.Vaadin.developmentMode)return ca(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=mr());function gr(){}const vr=function(){if(typeof sn=="function")return sn(gr)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});vr();pe.NavigationTrigger={POPSTATE:Da,CLICK:Va};var Yt,$;(function(t){t.CONNECTED="connected",t.LOADING="loading",t.RECONNECTING="reconnecting",t.CONNECTION_LOST="connection-lost"})($||($={}));class yr{constructor(e){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=e,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(o=>{var n;(n=o==null?void 0:o.active)===null||n===void 0||n.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(e){this.stateChangeListeners.add(e)}removeStateChangeListener(e){this.stateChangeListeners.delete(e)}loadingStarted(){this.state=$.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount($.CONNECTED)}loadingFailed(){this.decreaseLoadingCount($.CONNECTION_LOST)}decreaseLoadingCount(e){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=e))}get state(){return this.connectionState}set state(e){if(e!==this.connectionState){const o=this.connectionState;this.connectionState=e,this.loadingCount=0;for(const n of this.stateChangeListeners)n(o,this.connectionState)}}get online(){return this.connectionState===$.CONNECTED||this.connectionState===$.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(e){typeof e.data=="object"&&e.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(e.data.result===!0&&(this.state=$.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const wr=t=>!!(t==="localhost"||t==="[::1]"||t.match(/^127\.\d+\.\d+\.\d+$/)),mt=window;if(!(!((Yt=mt.Vaadin)===null||Yt===void 0)&&Yt.connectionState)){let t;wr(window.location.hostname)?t=!0:t=navigator.onLine,mt.Vaadin=mt.Vaadin||{},mt.Vaadin.connectionState=new yr(t?$.CONNECTED:$.CONNECTION_LOST)}function H(t,e,o,n){var a=arguments.length,r=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,o,r):i(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xr=!1,wt=globalThis,ko=wt.ShadowRoot&&(wt.ShadyCSS===void 0||wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Eo=Symbol(),cn=new WeakMap;class So{constructor(e,o,n){if(this._$cssResult$=!0,n!==Eo)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=o}get styleSheet(){let e=this._styleSheet;const o=this._strings;if(ko&&e===void 0){const n=o!==void 0&&o.length===1;n&&(e=cn.get(o)),e===void 0&&((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),n&&cn.set(o,e))}return e}toString(){return this.cssText}}const _r=t=>{if(t._$cssResult$===!0)return t.cssText;if(typeof t=="number")return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},T=t=>new So(typeof t=="string"?t:String(t),void 0,Eo),x=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((n,a,r)=>n+_r(a)+t[r+1],t[0]);return new So(o,t,Eo)},kr=(t,e)=>{if(ko)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of e){const n=document.createElement("style"),a=wt.litNonce;a!==void 0&&n.setAttribute("nonce",a),n.textContent=o.cssText,t.appendChild(n)}},Er=t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return T(e)},dn=ko||xr?t=>t:t=>t instanceof CSSStyleSheet?Er(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Sr,defineProperty:Cr,getOwnPropertyDescriptor:fn,getOwnPropertyNames:Ar,getOwnPropertySymbols:Tr,getPrototypeOf:hn}=Object,j=globalThis;let ae;const mn=j.trustedTypes,Lr=mn?mn.emptyScript:"",xt=j.reactiveElementPolyfillSupportDevMode;var Kn;{const t=j.litIssuedWarnings??(j.litIssuedWarnings=new Set);ae=(e,o)=>{o+=` See https://lit.dev/msg/${e} for more information.`,t.has(o)||(console.warn(o),t.add(o))},ae("dev-mode","Lit is in dev mode. Not recommended for production!"),(Kn=j.ShadyDOM)!=null&&Kn.inUse&&xt===void 0&&ae("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")}const Xt=t=>{j.emitLitDebugLogEvents&&j.dispatchEvent(new CustomEvent("lit-debug",{detail:t}))},Oe=(t,e)=>t,At={toAttribute(t,e){switch(e){case Boolean:t=t?Lr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t);break}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}break}return o}},Co=(t,e)=>!Sr(t,e),pn={attribute:!0,type:String,converter:At,reflect:!1,hasChanged:Co};Symbol.metadata??(Symbol.metadata=Symbol("metadata"));j.litPropertyMetadata??(j.litPropertyMetadata=new WeakMap);class de extends HTMLElement{static addInitializer(e){this.__prepare(),(this._initializers??(this._initializers=[])).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,o=pn){if(o.state&&(o.attribute=!1),this.__prepare(),this.elementProperties.set(e,o),!o.noAccessor){const n=Symbol.for(`${String(e)} (@property() cache)`),a=this.getPropertyDescriptor(e,n,o);a!==void 0&&Cr(this.prototype,e,a)}}static getPropertyDescriptor(e,o,n){const{get:a,set:r}=fn(this.prototype,e)??{get(){return this[o]},set(i){this[o]=i}};if(a==null){if("value"in(fn(this.prototype,e)??{}))throw new Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);ae("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get(){return a==null?void 0:a.call(this)},set(i){const s=a==null?void 0:a.call(this);r.call(this,i),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pn}static __prepare(){if(this.hasOwnProperty(Oe("elementProperties")))return;const e=hn(this);e.finalize(),e._initializers!==void 0&&(this._initializers=[...e._initializers]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Oe("finalized")))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(Oe("properties"))){const o=this.properties,n=[...Ar(o),...Tr(o)];for(const a of n)this.createProperty(a,o[a])}const e=this[Symbol.metadata];if(e!==null){const o=litPropertyMetadata.get(e);if(o!==void 0)for(const[n,a]of o)this.elementProperties.set(n,a)}this.__attributeToPropertyMap=new Map;for(const[o,n]of this.elementProperties){const a=this.__attributeNameForProperty(o,n);a!==void 0&&this.__attributeToPropertyMap.set(a,o)}this.elementStyles=this.finalizeStyles(this.styles),this.hasOwnProperty("createProperty")&&ae("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators"),this.hasOwnProperty("getPropertyDescriptor")&&ae("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const a of n)o.unshift(dn(a))}else e!==void 0&&o.push(dn(e));return o}static __attributeNameForProperty(e,o){const n=o.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){var e;this.__updatePromise=new Promise(o=>this.enableUpdating=o),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),(e=this.constructor._initializers)==null||e.forEach(o=>o(this))}addController(e){var o;(this.__controllers??(this.__controllers=[])).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var o;(o=this.__controllers)==null||o.splice(this.__controllers.indexOf(e)>>>0,1)}__saveInstanceProperties(){const e=new Map,o=this.constructor.elementProperties;for(const n of o.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this.__instanceProperties=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kr(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this.__controllers)==null||e.forEach(o=>{var n;return(n=o.hostConnected)==null?void 0:n.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this.__controllers)==null||e.forEach(o=>{var n;return(n=o.hostDisconnected)==null?void 0:n.call(o)})}attributeChangedCallback(e,o,n){this._$attributeToProperty(e,n)}__propertyToAttribute(e,o){var i;const a=this.constructor.elementProperties.get(e),r=this.constructor.__attributeNameForProperty(e,a);if(r!==void 0&&a.reflect===!0){const l=(((i=a.converter)==null?void 0:i.toAttribute)!==void 0?a.converter:At).toAttribute(o,a.type);this.constructor.enabledWarnings.includes("migration")&&l===void 0&&ae("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`),this.__reflectingProperty=e,l==null?this.removeAttribute(r):this.setAttribute(r,l),this.__reflectingProperty=null}}_$attributeToProperty(e,o){var r;const n=this.constructor,a=n.__attributeToPropertyMap.get(e);if(a!==void 0&&this.__reflectingProperty!==a){const i=n.getPropertyOptions(a),s=typeof i.converter=="function"?{fromAttribute:i.converter}:((r=i.converter)==null?void 0:r.fromAttribute)!==void 0?i.converter:At;this.__reflectingProperty=a,this[a]=s.fromAttribute(o,i.type),this.__reflectingProperty=null}}requestUpdate(e,o,n,a=!1,r){if(e!==void 0){n??(n=this.constructor.getPropertyOptions(e));const i=n.hasChanged??Co,s=a?r:this[e];if(i(s,o))this._$changeProperty(e,o,n);else return}this.isUpdatePending===!1&&(this.__updatePromise=this.__enqueueUpdate())}_$changeProperty(e,o,n){this._$changedProperties.has(e)||this._$changedProperties.set(e,o),n.reflect===!0&&this.__reflectingProperty!==e&&(this.__reflectingProperties??(this.__reflectingProperties=new Set)).add(e)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){const e=this.performUpdate();return this.constructor.enabledWarnings.includes("async-perform-update")&&typeof(e==null?void 0:e.then)=="function"&&ae("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`),e}performUpdate(){var n;if(!this.isUpdatePending)return;if(Xt==null||Xt({kind:"update"}),!this.hasUpdated){{const i=[...this.constructor.elementProperties.keys()].filter(s=>this.hasOwnProperty(s)&&s in hn(this));if(i.length)throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${i.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(const[r,i]of this.__instanceProperties)this[r]=i;this.__instanceProperties=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[r,i]of a)i.wrapped===!0&&!this._$changedProperties.has(r)&&this[r]!==void 0&&this._$changeProperty(r,this[r],i)}let e=!1;const o=this._$changedProperties;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(n=this.__controllers)==null||n.forEach(a=>{var r;return(r=a.hostUpdate)==null?void 0:r.call(a)}),this.update(o)):this.__markUpdated()}catch(a){throw e=!1,this.__markUpdated(),a}e&&this._$didUpdate(o)}willUpdate(e){}_$didUpdate(e){var o;(o=this.__controllers)==null||o.forEach(n=>{var a;return(a=n.hostUpdated)==null?void 0:a.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update")&&ae("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&(this.__reflectingProperties=this.__reflectingProperties.forEach(o=>this.__propertyToAttribute(o,this[o]))),this.__markUpdated()}updated(e){}firstUpdated(e){}}de.elementStyles=[];de.shadowRootOptions={mode:"open"};de[Oe("elementProperties")]=new Map;de[Oe("finalized")]=new Map;xt==null||xt({ReactiveElement:de});{de.enabledWarnings=["change-in-update","async-perform-update"];const t=function(e){e.hasOwnProperty(Oe("enabledWarnings"))||(e.enabledWarnings=e.enabledWarnings.slice())};de.enableWarning=function(e){t(this),this.enabledWarnings.includes(e)||this.enabledWarnings.push(e)},de.disableWarning=function(e){t(this);const o=this.enabledWarnings.indexOf(e);o>=0&&this.enabledWarnings.splice(o,1)}}(j.reactiveElementVersions??(j.reactiveElementVersions=[])).push("2.0.1");j.reactiveElementVersions.length>1&&ae("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,k=t=>{V.emitLitDebugLogEvents&&V.dispatchEvent(new CustomEvent("lit-debug",{detail:t}))};let $r=0,Tt;V.litIssuedWarnings??(V.litIssuedWarnings=new Set),Tt=(t,e)=>{e+=t?` See https://lit.dev/msg/${t} for more information.`:"",V.litIssuedWarnings.has(e)||(console.warn(e),V.litIssuedWarnings.add(e))},Tt("dev-mode","Lit is in dev mode. Not recommended for production!");var Jn,Yn;const Q=(Jn=V.ShadyDOM)!=null&&Jn.inUse&&((Yn=V.ShadyDOM)==null?void 0:Yn.noPatch)===!0?V.ShadyDOM.wrap:t=>t,Lt=V.trustedTypes,un=Lt?Lt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Rr=t=>t,jt=(t,e,o)=>Rr,Nr=t=>{if(Ce!==jt)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");Ce=t},Ir=()=>{Ce=jt},po=(t,e,o)=>Ce(t,e,o),da="$lit$",se=`lit$${String(Math.random()).slice(9)}$`,fa="?"+se,Pr=`<${fa}>`,Ee=document,Ye=()=>Ee.createComment(""),Xe=t=>t===null||typeof t!="object"&&typeof t!="function",ha=Array.isArray,zr=t=>ha(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Qt=`[ 	
\f\r]`,Or=`[^ 	
\f\r"'\`<>=]`,Mr=`[^\\s"'>=/]`,He=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bn=1,Zt=2,Vr=3,gn=/-->/g,vn=/>/g,ve=new RegExp(`>|${Qt}(?:(${Mr}+)(${Qt}*=${Qt}*(?:${Or}|("|')|))|$)`,"g"),Fr=0,yn=1,Dr=2,wn=3,eo=/'/g,to=/"/g,ma=/^(?:script|style|textarea|title)$/i,jr=1,$t=2,Ao=1,Rt=2,qr=3,Ur=4,Br=5,To=6,Hr=7,pa=t=>(e,...o)=>(e.some(n=>n===void 0)&&console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`),{_$litType$:t,strings:e,values:o}),v=pa(jr),Ie=pa($t),Se=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),xn=new WeakMap,xe=Ee.createTreeWalker(Ee,129);let Ce=jt;function ua(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw")){let o="invalid template strings array";throw o=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),new Error(o)}return un!==void 0?un.createHTML(e):e}const Wr=(t,e)=>{const o=t.length-1,n=[];let a=e===$t?"<svg>":"",r,i=He;for(let l=0;l<o;l++){const c=t[l];let d=-1,m,h=0,y;for(;h<c.length&&(i.lastIndex=h,y=i.exec(c),y!==null);)if(h=i.lastIndex,i===He){if(y[bn]==="!--")i=gn;else if(y[bn]!==void 0)i=vn;else if(y[Zt]!==void 0)ma.test(y[Zt])&&(r=new RegExp(`</${y[Zt]}`,"g")),i=ve;else if(y[Vr]!==void 0)throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else i===ve?y[Fr]===">"?(i=r??He,d=-1):y[yn]===void 0?d=-2:(d=i.lastIndex-y[Dr].length,m=y[yn],i=y[wn]===void 0?ve:y[wn]==='"'?to:eo):i===to||i===eo?i=ve:i===gn||i===vn?i=He:(i=ve,r=void 0);console.assert(d===-1||i===ve||i===eo||i===to,"unexpected parse state B");const ie=i===ve&&t[l+1].startsWith("/>")?" ":"";a+=i===He?c+Pr:d>=0?(n.push(m),c.slice(0,d)+da+c.slice(d)+se+ie):c+se+(d===-2?l:ie)}const s=a+(t[o]||"<?>")+(e===$t?"</svg>":"");return[ua(t,s),n]};class Qe{constructor({strings:e,["_$litType$"]:o},n){this.parts=[];let a,r=0,i=0;const s=e.length-1,l=this.parts,[c,d]=Wr(e,o);if(this.el=Qe.createElement(c,n),xe.currentNode=this.el.content,o===$t){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(a=xe.nextNode())!==null&&l.length<s;){if(a.nodeType===1){{const m=a.localName;if(/^(?:textarea|template)$/i.test(m)&&a.innerHTML.includes(se)){const h=`Expressions are not supported inside \`${m}\` elements. See https://lit.dev/msg/expression-in-${m} for more information.`;if(m==="template")throw new Error(h);Tt("",h)}}if(a.hasAttributes())for(const m of a.getAttributeNames())if(m.endsWith(da)){const h=d[i++],ie=a.getAttribute(m).split(se),K=/([.?@])?(.*)/.exec(h);l.push({type:Ao,index:r,name:K[2],strings:ie,ctor:K[1]==="."?Kr:K[1]==="?"?Jr:K[1]==="@"?Yr:qt}),a.removeAttribute(m)}else m.startsWith(se)&&(l.push({type:To,index:r}),a.removeAttribute(m));if(ma.test(a.tagName)){const m=a.textContent.split(se),h=m.length-1;if(h>0){a.textContent=Lt?Lt.emptyScript:"";for(let y=0;y<h;y++)a.append(m[y],Ye()),xe.nextNode(),l.push({type:Rt,index:++r});a.append(m[h],Ye())}}}else if(a.nodeType===8)if(a.data===fa)l.push({type:Rt,index:r});else{let h=-1;for(;(h=a.data.indexOf(se,h+1))!==-1;)l.push({type:Hr,index:r}),h+=se.length-1}r++}k&&k({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,o){const n=Ee.createElement("template");return n.innerHTML=e,n}}function Fe(t,e,o=t,n){var i,s;if(e===Se)return e;let a=n!==void 0?(i=o.__directives)==null?void 0:i[n]:o.__directive;const r=Xe(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==r&&((s=a==null?void 0:a._$notifyDirectiveConnectionChanged)==null||s.call(a,!1),r===void 0?a=void 0:(a=new r(t),a._$initialize(t,o,n)),n!==void 0?(o.__directives??(o.__directives=[]))[n]=a:o.__directive=a),a!==void 0&&(e=Fe(t,a._$resolve(t,e.values),a,n)),e}class Gr{constructor(e,o){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=o}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){const{el:{content:o},parts:n}=this._$template,a=((e==null?void 0:e.creationScope)??Ee).importNode(o,!0);xe.currentNode=a;let r=xe.nextNode(),i=0,s=0,l=n[0];for(;l!==void 0;){if(i===l.index){let c;l.type===Rt?c=new at(r,r.nextSibling,this,e):l.type===Ao?c=new l.ctor(r,l.name,l.strings,this,e):l.type===To&&(c=new Xr(r,this,e)),this._$parts.push(c),l=n[++s]}i!==(l==null?void 0:l.index)&&(r=xe.nextNode(),i++)}return xe.currentNode=Ee,a}_update(e){let o=0;for(const n of this._$parts)n!==void 0&&(k&&k({kind:"set part",part:n,value:e[o],valueIndex:o,values:e,templateInstance:this}),n.strings!==void 0?(n._$setValue(e,n,o),o+=n.strings.length-2):n._$setValue(e[o])),o++}}class at{get _$isConnected(){var e;return((e=this._$parent)==null?void 0:e._$isConnected)??this.__isConnected}constructor(e,o,n,a){this.type=Rt,this._$committedValue=L,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=o,this._$parent=n,this.options=a,this.__isConnected=(a==null?void 0:a.isConnected)??!0,this._textSanitizer=void 0}get parentNode(){let e=Q(this._$startNode).parentNode;const o=this._$parent;return o!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=o.parentNode),e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,o=this){var n;if(this.parentNode===null)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=Fe(this,e,o),Xe(e))e===L||e==null||e===""?(this._$committedValue!==L&&(k&&k({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=L):e!==this._$committedValue&&e!==Se&&this._commitText(e);else if(e._$litType$!==void 0)this._commitTemplateResult(e);else if(e.nodeType!==void 0){if(((n=this.options)==null?void 0:n.host)===e){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(e)}else zr(e)?this._commitIterable(e):this._commitText(e)}_insert(e){return Q(Q(this._$startNode).parentNode).insertBefore(e,this._$endNode)}_commitNode(e){var o;if(this._$committedValue!==e){if(this._$clear(),Ce!==jt){const n=(o=this._$startNode.parentNode)==null?void 0:o.nodeName;if(n==="STYLE"||n==="SCRIPT"){let a="Forbidden";throw n==="STYLE"?a="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":a="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(a)}}k&&k({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==L&&Xe(this._$committedValue)){const o=Q(this._$startNode).nextSibling;this._textSanitizer===void 0&&(this._textSanitizer=po(o,"data","property")),e=this._textSanitizer(e),k&&k({kind:"commit text",node:o,value:e,options:this.options}),o.data=e}else{const o=Ee.createTextNode("");this._commitNode(o),this._textSanitizer===void 0&&(this._textSanitizer=po(o,"data","property")),e=this._textSanitizer(e),k&&k({kind:"commit text",node:o,value:e,options:this.options}),o.data=e}this._$committedValue=e}_commitTemplateResult(e){var r;const{values:o,["_$litType$"]:n}=e,a=typeof n=="number"?this._$getTemplate(e):(n.el===void 0&&(n.el=Qe.createElement(ua(n.h,n.h[0]),this.options)),n);if(((r=this._$committedValue)==null?void 0:r._$template)===a)k&&k({kind:"template updating",template:a,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:o}),this._$committedValue._update(o);else{const i=new Gr(a,this),s=i._clone(this.options);k&&k({kind:"template instantiated",template:a,instance:i,parts:i._$parts,options:this.options,fragment:s,values:o}),i._update(o),k&&k({kind:"template instantiated and updated",template:a,instance:i,parts:i._$parts,options:this.options,fragment:s,values:o}),this._commitNode(s),this._$committedValue=i}}_$getTemplate(e){let o=xn.get(e.strings);return o===void 0&&xn.set(e.strings,o=new Qe(e)),o}_commitIterable(e){ha(this._$committedValue)||(this._$committedValue=[],this._$clear());const o=this._$committedValue;let n=0,a;for(const r of e)n===o.length?o.push(a=new at(this._insert(Ye()),this._insert(Ye()),this,this.options)):a=o[n],a._$setValue(r),n++;n<o.length&&(this._$clear(a&&Q(a._$endNode).nextSibling,n),o.length=n)}_$clear(e=Q(this._$startNode).nextSibling,o){var n;for((n=this._$notifyConnectionChanged)==null||n.call(this,!1,!0,o);e&&e!==this._$endNode;){const a=Q(e).nextSibling;Q(e).remove(),e=a}}setConnected(e){var o;if(this._$parent===void 0)this.__isConnected=e,(o=this._$notifyConnectionChanged)==null||o.call(this,e);else throw new Error("part.setConnected() may only be called on a RootPart returned from render().")}}class qt{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(e,o,n,a,r){this.type=Ao,this._$committedValue=L,this._$disconnectableChildren=void 0,this.element=e,this.name=o,this._$parent=a,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$committedValue=new Array(n.length-1).fill(new String),this.strings=n):this._$committedValue=L,this._sanitizer=void 0}_$setValue(e,o=this,n,a){const r=this.strings;let i=!1;if(r===void 0)e=Fe(this,e,o,0),i=!Xe(e)||e!==this._$committedValue&&e!==Se,i&&(this._$committedValue=e);else{const s=e;e=r[0];let l,c;for(l=0;l<r.length-1;l++)c=Fe(this,s[n+l],o,l),c===Se&&(c=this._$committedValue[l]),i||(i=!Xe(c)||c!==this._$committedValue[l]),c===L?e=L:e!==L&&(e+=(c??"")+r[l+1]),this._$committedValue[l]=c}i&&!a&&this._commitValue(e)}_commitValue(e){e===L?Q(this.element).removeAttribute(this.name):(this._sanitizer===void 0&&(this._sanitizer=Ce(this.element,this.name,"attribute")),e=this._sanitizer(e??""),k&&k({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),Q(this.element).setAttribute(this.name,e??""))}}class Kr extends qt{constructor(){super(...arguments),this.type=qr}_commitValue(e){this._sanitizer===void 0&&(this._sanitizer=Ce(this.element,this.name,"property")),e=this._sanitizer(e),k&&k({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===L?void 0:e}}class Jr extends qt{constructor(){super(...arguments),this.type=Ur}_commitValue(e){k&&k({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(e&&e!==L),options:this.options}),Q(this.element).toggleAttribute(this.name,!!e&&e!==L)}}class Yr extends qt{constructor(e,o,n,a,r){if(super(e,o,n,a,r),this.type=Br,this.strings!==void 0)throw new Error(`A \`<${e.localName}>\` has a \`@${o}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,o=this){if(e=Fe(this,e,o,0)??L,e===Se)return;const n=this._$committedValue,a=e===L&&n!==L||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==L&&(n===L||a);k&&k({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:a,addListener:r,oldListener:n}),a&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$committedValue=e}handleEvent(e){var o;typeof this._$committedValue=="function"?this._$committedValue.call(((o=this.options)==null?void 0:o.host)??this.element,e):this._$committedValue.handleEvent(e)}}class Xr{constructor(e,o,n){this.element=e,this.type=To,this._$disconnectableChildren=void 0,this._$parent=o,this.options=n}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){k&&k({kind:"commit to element binding",element:this.element,value:e,options:this.options}),Fe(this,e)}}const oo=V.litHtmlPolyfillSupportDevMode;oo==null||oo(Qe,at);(V.litHtmlVersions??(V.litHtmlVersions=[])).push("3.0.1");V.litHtmlVersions.length>1&&Tt("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");const _e=(t,e,o)=>{if(e==null)throw new TypeError(`The container to render into may not be ${e}`);const n=$r++,a=(o==null?void 0:o.renderBefore)??e;let r=a._$litPart$;if(k&&k({kind:"begin render",id:n,value:t,container:e,options:o,part:r}),r===void 0){const i=(o==null?void 0:o.renderBefore)??null;a._$litPart$=r=new at(e.insertBefore(Ye(),i),i,void 0,o??{})}return r._$setValue(t),k&&k({kind:"end render",id:n,value:t,container:e,options:o,part:r}),r};_e.setSanitizer=Nr,_e.createSanitizer=po,_e._testOnlyClearSanitizerFactoryDoNotCallOrElse=Ir;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qr=(t,e)=>t;let ba;{const t=globalThis.litIssuedWarnings??(globalThis.litIssuedWarnings=new Set);ba=(e,o)=>{o+=` See https://lit.dev/msg/${e} for more information.`,t.has(o)||(console.warn(o),t.add(o))}}class N extends de{constructor(){super(...arguments),this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){var o;const e=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=e.firstChild),e}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.__childPart=_e(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.__childPart)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.__childPart)==null||e.setConnected(!1)}render(){return Se}}N._$litElement$=!0;N[Qr("finalized")]=!0;var Xn;(Xn=globalThis.litElementHydrateSupport)==null||Xn.call(globalThis,{LitElement:N});const no=globalThis.litElementPolyfillSupportDevMode;no==null||no({LitElement:N});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.1");globalThis.litElementVersions.length>1&&ba("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=t=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ga;{const t=globalThis.litIssuedWarnings??(globalThis.litIssuedWarnings=new Set);ga=(e,o)=>{o+=` See https://lit.dev/msg/${e} for more information.`,t.has(o)||(console.warn(o),t.add(o))}}const Zr=(t,e,o)=>{const n=e.hasOwnProperty(o);return e.constructor.createProperty(o,n?{...t,wrapped:!0}:t),n?Object.getOwnPropertyDescriptor(e,o):void 0},ei={attribute:!0,type:String,converter:At,reflect:!1,hasChanged:Co},ti=(t=ei,e,o)=>{const{kind:n,metadata:a}=o;a==null&&ga("missing-class-metadata",`The class ${e} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let r=globalThis.litPropertyMetadata.get(a);if(r===void 0&&globalThis.litPropertyMetadata.set(a,r=new Map),r.set(o.name,t),n==="accessor"){const{name:i}=o;return{set(s){const l=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,l,t)},init(s){return s!==void 0&&this._$changeProperty(i,void 0,t),s}}}else if(n==="setter"){const{name:i}=o;return function(s){const l=this[i];e.call(this,s),this.requestUpdate(i,l,t)}}throw new Error(`Unsupported decorator location: ${n}`)};function w(t){return(e,o)=>typeof o=="object"?ti(t,e,o):Zr(t,e,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(t){return w({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _n=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(t,e){return(o,n,a)=>{const r=i=>{var s;return((s=i.renderRoot)==null?void 0:s.querySelector(t))??null};if(e){const{get:i,set:s}=typeof n=="object"?o:a??(()=>{const l=Symbol(`${String(n)} (@query() cache)`);return{get(){return this[l]},set(c){this[l]=c}}})();return _n(o,n,{get(){if(e){let l=i.call(this);return l===void 0&&(l=r(this),s.call(this,l)),l}return r(this)}})}else return _n(o,n,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ni=t=>(...e)=>({_$litDirective$:t,values:e});class ai{constructor(e){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(e,o,n){this.__part=e,this._$parent=o,this.__attributeIndex=n}_$resolve(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ri extends ai{constructor(e){var o;if(super(e),e.type!==oi.ATTRIBUTE||e.name!=="class"||((o=e.strings)==null?void 0:o.length)>2)throw new Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(o=>e[o]).join(" ")+" "}update(e,[o]){var a,r;if(this._previousClasses===void 0){this._previousClasses=new Set,e.strings!==void 0&&(this._staticClasses=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in o)o[i]&&!((a=this._staticClasses)!=null&&a.has(i))&&this._previousClasses.add(i);return this.render(o)}const n=e.element.classList;for(const i of this._previousClasses)i in o||(n.remove(i),this._previousClasses.delete(i));for(const i in o){const s=!!o[i];s!==this._previousClasses.has(i)&&!((r=this._staticClasses)!=null&&r.has(i))&&(s?(n.add(i),this._previousClasses.add(i)):(n.remove(i),this._previousClasses.delete(i)))}return Se}}const Lo=ni(ri),ao="css-loading-indicator";var Y;(function(t){t.IDLE="",t.FIRST="first",t.SECOND="second",t.THIRD="third"})(Y||(Y={}));class z extends N{constructor(){super(),this.firstDelay=450,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=Y.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=$.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}static create(){var e,o;const n=window;return!((e=n.Vaadin)===null||e===void 0)&&e.connectionIndicator||(n.Vaadin=n.Vaadin||{},n.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(n.Vaadin.connectionIndicator)),(o=n.Vaadin)===null||o===void 0?void 0:o.connectionIndicator}render(){return v`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${Lo({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var e;super.connectedCallback();const o=window;!((e=o.Vaadin)===null||e===void 0)&&e.connectionState&&(this.connectionStateStore=o.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(e){e!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=e,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var e;const o=(e=this.connectionStateStore)===null||e===void 0?void 0:e.state;return this.offline=o===$.CONNECTION_LOST,this.reconnecting=o===$.RECONNECTING,this.updateLoading(o===$.LOADING),this.loading?!1:o!==this.lastMessageState?(this.lastMessageState=o,!0):!1}updateLoading(e){this.loading=e,this.loadingBarState=Y.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,e,()=>{this.loadingBarState=Y.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,e,()=>{this.loadingBarState=Y.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,e,()=>{this.loadingBarState=Y.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(ao)){const e=document.createElement("style");e.id=ao,e.textContent=this.getDefaultStyle(),document.head.appendChild(e)}}else{const e=document.getElementById(ao);e&&document.head.removeChild(e)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case Y.IDLE:return"display: none";case Y.FIRST:case Y.SECOND:case Y.THIRD:return"display: block";default:return""}}timeoutFor(e,o,n,a){return e!==0&&window.clearTimeout(e),o?window.setTimeout(n,a):0}static get instance(){return z.create()}}H([w({type:Number})],z.prototype,"firstDelay",void 0);H([w({type:Number})],z.prototype,"secondDelay",void 0);H([w({type:Number})],z.prototype,"thirdDelay",void 0);H([w({type:Number})],z.prototype,"expandedDuration",void 0);H([w({type:String})],z.prototype,"onlineText",void 0);H([w({type:String})],z.prototype,"offlineText",void 0);H([w({type:String})],z.prototype,"reconnectingText",void 0);H([w({type:Boolean,reflect:!0})],z.prototype,"offline",void 0);H([w({type:Boolean,reflect:!0})],z.prototype,"reconnecting",void 0);H([w({type:Boolean,reflect:!0})],z.prototype,"expanded",void 0);H([w({type:Boolean,reflect:!0})],z.prototype,"loading",void 0);H([w({type:String})],z.prototype,"loadingBarState",void 0);H([w({type:Boolean})],z.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",z);z.instance;const Ze=window;Ze.Vaadin=Ze.Vaadin||{};Ze.Vaadin.registrations=Ze.Vaadin.registrations||[];Ze.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class kn extends Error{}const We=window.document.body,C=window;class ii{constructor(e){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,this.navigation="",We.$=We.$||[],this.config=e||{},C.Vaadin=C.Vaadin||{},C.Vaadin.Flow=C.Vaadin.Flow||{},C.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const o=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||o&&o.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,C.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,C.Vaadin.connectionState.loadingFinished(),!C.Vaadin.listener&&(C.Vaadin.listener={},document.addEventListener("click",e=>{e.target&&(e.target.hasAttribute("router-link")?this.navigation="link":e.composedPath().some(o=>o.nodeName==="A")&&(this.navigation="client"))},{capture:!0}))}get action(){return async e=>{if(this.pathname=e.pathname,C.Vaadin.connectionState.online)try{await this.flowInit()}catch(o){if(o instanceof kn)return C.Vaadin.connectionState.state=$.CONNECTION_LOST,this.offlineStubAction();throw o}else return this.offlineStubAction();return this.container.onBeforeEnter=(o,n)=>this.flowNavigate(o,n),this.container.onBeforeLeave=(o,n)=>this.flowLeave(o,n),this.container}}async flowLeave(e,o){const{connectionState:n}=C.Vaadin;return this.pathname===e.pathname||!this.isFlowClientLoaded()||n.offline?Promise.resolve({}):new Promise(a=>{this.loadingStarted(),this.container.serverConnected=r=>{a(o&&r?o.prevent():{}),this.loadingFinished()},We.$server.leaveNavigation(this.getFlowRoutePath(e),this.getFlowRouteQuery(e))})}async flowNavigate(e,o){return this.response?new Promise(n=>{this.loadingStarted(),this.container.serverConnected=(a,r)=>{o&&a?n(o.prevent()):o&&o.redirect&&r?n(o.redirect(r.pathname)):(this.container.style.display="",n(this.container)),this.loadingFinished()},this.container.serverPaused=()=>{this.loadingFinished()},We.$server.connectClient(this.getFlowRoutePath(e),this.getFlowRouteQuery(e),this.appShellTitle,history.state,this.navigation),this.navigation="history"}):Promise.resolve(this.container)}getFlowRoutePath(e){return decodeURIComponent(e.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(e){return e.search&&e.search.substring(1)||""}async flowInit(){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi();const{pushScript:e,appConfig:o}=this.response;typeof e=="string"&&await this.loadScript(e);const{appId:n}=o;await(await g(()=>import("./FlowBootstrap-feff2646.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(n),await this.config.imports());const r=`flow-container-${n.toLowerCase()}`,i=document.querySelector(r);i?this.container=i:(this.container=document.createElement(r),this.container.id=n),We.$[n]=this.container;const s=await g(()=>import("./FlowClient-2ce0d88a.js"),[],import.meta.url);await this.flowInitClient(s),this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(e){return new Promise((o,n)=>{const a=document.createElement("script");a.onload=()=>o(),a.onerror=n,a.src=e,document.body.appendChild(a)})}injectAppIdScript(e){const o=e.substring(0,e.lastIndexOf("-")),n=document.createElement("script");n.type="module",n.setAttribute("data-app-id",o),document.body.append(n)}async flowInitClient(e){return e.init(),new Promise(o=>{const n=setInterval(()=>{Object.keys(C.Vaadin.Flow.clients).filter(r=>r!=="TypeScript").reduce((r,i)=>r||C.Vaadin.Flow.clients[i].isActive(),!1)||(clearInterval(n),o())},5)})}async flowInitUi(){const e=C.Vaadin&&C.Vaadin.TypeScript&&C.Vaadin.TypeScript.initial;return e?(C.Vaadin.TypeScript.initial=void 0,Promise.resolve(e)):new Promise((o,n)=>{const r=new XMLHttpRequest,i=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}`;r.open("GET",i),r.onerror=()=>n(new kn(`Invalid server response when initializing Flow UI.
        ${r.status}
        ${r.responseText}`)),r.onload=()=>{const s=r.getResponseHeader("content-type");s&&s.indexOf("application/json")!==-1?o(JSON.parse(r.responseText)):r.onerror()},r.send()})}addConnectionIndicator(){z.create(),C.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){C.Vaadin.connectionState.state=$.RECONNECTING;const e=new XMLHttpRequest;e.open("HEAD","sw.js"),e.onload=()=>{C.Vaadin.connectionState.state=$.CONNECTED},e.onerror=()=>{C.Vaadin.connectionState.state=$.CONNECTION_LOST},setTimeout(()=>e.send(),50)}}),C.addEventListener("offline",()=>{this.isFlowClientLoaded()||(C.Vaadin.connectionState.state=$.CONNECTION_LOST)})}async offlineStubAction(){const e=document.createElement("iframe"),o="./offline-stub.html";e.setAttribute("src",o),e.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let n;const a=()=>{n!==void 0&&(C.Vaadin.connectionState.removeStateChangeListener(n),n=void 0)};return e.onBeforeEnter=(r,i,s)=>{n=()=>{C.Vaadin.connectionState.online&&(a(),s.render(r,!1))},C.Vaadin.connectionState.addStateChangeListener(n)},e.onBeforeLeave=(r,i,s)=>{a()},e}isFlowClientLoaded(){return this.response!==void 0}}const{serverSideRoutes:li}=new ii({imports:()=>g(()=>import("./generated-flow-imports-e3c231aa.js"),[],import.meta.url)}),si=[...li],ci=new pe(document.querySelector("#outlet"));ci.setRoutes(si);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),o=new WeakMap,n=typeof DOMException=="object"?Error:DOMException,a=Object.defineProperty,r=Array.prototype.forEach,i=/@import.+?;?$/gm;function s(f){var p=f.replace(i,"");return p!==f&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),p.trim()}function l(f){return"isConnected"in f?f.isConnected:document.contains(f)}function c(f){return f.filter(function(p,_){return f.indexOf(p)===_})}function d(f,p){return f.filter(function(_){return p.indexOf(_)===-1})}function m(f){f.parentNode.removeChild(f)}function h(f){return f.shadowRoot||o.get(f)}var y=["addRule","deleteRule","insertRule","removeRule"],ie=CSSStyleSheet,K=ie.prototype;K.replace=function(){return Promise.reject(new n("Can't call replace on non-constructed CSSStyleSheets."))},K.replaceSync=function(){throw new n("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function it(f){return typeof f=="object"?Le.isPrototypeOf(f)||K.isPrototypeOf(f):!1}function Bt(f){return typeof f=="object"?K.isPrototypeOf(f):!1}var W=new WeakMap,ne=new WeakMap,Ae=new WeakMap,Te=new WeakMap;function Ht(f,p){var _=document.createElement("style");return Ae.get(f).set(p,_),ne.get(f).push(p),_}function le(f,p){return Ae.get(f).get(p)}function lt(f,p){Ae.get(f).delete(p),ne.set(f,ne.get(f).filter(function(_){return _!==p}))}function Fo(f,p){requestAnimationFrame(function(){p.textContent=W.get(f).textContent,Te.get(f).forEach(function(_){return p.sheet[_.method].apply(p.sheet,_.args)})})}function st(f){if(!W.has(f))throw new TypeError("Illegal invocation")}function Wt(){var f=this,p=document.createElement("style");e.body.appendChild(p),W.set(f,p),ne.set(f,[]),Ae.set(f,new WeakMap),Te.set(f,[])}var Le=Wt.prototype;Le.replace=function(p){try{return this.replaceSync(p),Promise.resolve(this)}catch(_){return Promise.reject(_)}},Le.replaceSync=function(p){if(st(this),typeof p=="string"){var _=this;W.get(_).textContent=s(p),Te.set(_,[]),ne.get(_).forEach(function(D){D.isConnected()&&Fo(_,le(_,D))})}},a(Le,"cssRules",{configurable:!0,enumerable:!0,get:function(){return st(this),W.get(this).sheet.cssRules}}),a(Le,"media",{configurable:!0,enumerable:!0,get:function(){return st(this),W.get(this).sheet.media}}),y.forEach(function(f){Le[f]=function(){var p=this;st(p);var _=arguments;Te.get(p).push({method:f,args:_}),ne.get(p).forEach(function(U){if(U.isConnected()){var O=le(p,U).sheet;O[f].apply(O,_)}});var D=W.get(p).sheet;return D[f].apply(D,_)}}),a(Wt,Symbol.hasInstance,{configurable:!0,value:it});var Do={childList:!0,subtree:!0},jo=new WeakMap;function $e(f){var p=jo.get(f);return p||(p=new Bo(f),jo.set(f,p)),p}function qo(f){a(f.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return $e(this).sheets},set:function(p){$e(this).update(p)}})}function Gt(f,p){for(var _=document.createNodeIterator(f,NodeFilter.SHOW_ELEMENT,function(U){return h(U)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),D=void 0;D=_.nextNode();)p(h(D))}var ct=new WeakMap,Re=new WeakMap,dt=new WeakMap;function Ra(f,p){return p instanceof HTMLStyleElement&&Re.get(f).some(function(_){return le(_,f)})}function Uo(f){var p=ct.get(f);return p instanceof Document?p.body:p}function Kt(f){var p=document.createDocumentFragment(),_=Re.get(f),D=dt.get(f),U=Uo(f);D.disconnect(),_.forEach(function(O){p.appendChild(le(O,f)||Ht(O,f))}),U.insertBefore(p,null),D.observe(U,Do),_.forEach(function(O){Fo(O,le(O,f))})}function Bo(f){var p=this;p.sheets=[],ct.set(p,f),Re.set(p,[]),dt.set(p,new MutationObserver(function(_,D){if(!document){D.disconnect();return}_.forEach(function(U){t||r.call(U.addedNodes,function(O){O instanceof Element&&Gt(O,function(Ne){$e(Ne).connect()})}),r.call(U.removedNodes,function(O){O instanceof Element&&(Ra(p,O)&&Kt(p),t||Gt(O,function(Ne){$e(Ne).disconnect()}))})})}))}if(Bo.prototype={isConnected:function(){var f=ct.get(this);return f instanceof Document?f.readyState!=="loading":l(f.host)},connect:function(){var f=Uo(this);dt.get(this).observe(f,Do),Re.get(this).length>0&&Kt(this),Gt(f,function(p){$e(p).connect()})},disconnect:function(){dt.get(this).disconnect()},update:function(f){var p=this,_=ct.get(p)===document?"Document":"ShadowRoot";if(!Array.isArray(f))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+_+": Iterator getter is not callable.");if(!f.every(it))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+_+": Failed to convert value to 'CSSStyleSheet'");if(f.some(Bt))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+_+": Can't adopt non-constructed stylesheets");p.sheets=f;var D=Re.get(p),U=c(f),O=d(D,U);O.forEach(function(Ne){m(le(Ne,p)),lt(Ne,p)}),Re.set(p,U),p.isConnected()&&U.length>0&&Kt(p)}},window.CSSStyleSheet=Wt,qo(Document),"ShadowRoot"in window){qo(ShadowRoot);var Ho=Element.prototype,Na=Ho.attachShadow;Ho.attachShadow=function(p){var _=Na.call(this,p);return p.mode==="closed"&&o.set(this,_),_}}var ft=$e(document);ft.isConnected()?ft.connect():document.addEventListener("DOMContentLoaded",ft.connect.bind(ft))})();/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const va=Symbol.for(""),di=t=>{if((t==null?void 0:t.r)===va)return t==null?void 0:t._$litStatic$},fi=t=>{if(t._$litStatic$!==void 0)return t._$litStatic$;throw new Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)},pt=(t,...e)=>({_$litStatic$:e.reduce((o,n,a)=>o+fi(n)+t[a+1],t[0]),r:va}),En=new Map,hi=t=>(e,...o)=>{const n=o.length;let a,r;const i=[],s=[];let l=0,c=!1,d;for(;l<n;){for(d=e[l];l<n&&(r=o[l],(a=di(r))!==void 0);)d+=a+e[++l],c=!0;l!==n&&s.push(r),i.push(d),l++}if(l===n&&i.push(e[n]),c){const m=i.join("$$lit$$");e=En.get(m),e===void 0&&(i.raw=i,En.set(m,e=i)),o=s}return t(e,...o)},mi=hi(v),pi="modulepreload",ui=function(t){return"/"+t},Sn={},b=function(t,e,o){if(!e||e.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(e.map(a=>{if(a=ui(a),a in Sn)return;Sn[a]=!0;const r=a.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(o)for(let l=n.length-1;l>=0;l--){const c=n[l];if(c.href===a&&(!r||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${i}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":pi,r||(s.as="script",s.crossOrigin=""),s.href=a,document.head.appendChild(s),r)return new Promise((l,c)=>{s.addEventListener("load",l),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t()).catch(a=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=a,window.dispatchEvent(r),!r.defaultPrevented)throw a})};function u(t,e,o,n){var a=arguments.length,r=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(r=(a<3?i(r):a>3?i(e,o,r):i(e,o))||r);return a>3&&r&&Object.defineProperty(e,o,r),r}function bi(t){var e;const o=[];for(;t&&t.parentNode;){const n=uo(t);if(n.nodeId!==-1){if((e=n.element)!=null&&e.tagName.startsWith("FLOW-CONTAINER-"))break;o.push(n)}t=t.parentElement?t.parentElement:t.parentNode.host}return o.reverse()}function uo(t){const e=window.Vaadin;if(e&&e.Flow){const{clients:o}=e.Flow,n=Object.keys(o);for(const a of n){const r=o[a];if(r.getNodeId){const i=r.getNodeId(t);if(i>=0)return{nodeId:i,uiId:r.getUIId(),element:t}}}}return{nodeId:-1,uiId:-1,element:void 0}}function gi(t,e){if(t.contains(e))return!0;let o=e;const n=e.ownerDocument;for(;o&&o!==n&&o!==t;)o=o.parentNode||(o instanceof ShadowRoot?o.host:null);return o===t}const vi=(t,e)=>{const o=t[e];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((n,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))})};var R;(function(t){t.text="text",t.checkbox="checkbox",t.range="range",t.color="color"})(R||(R={}));const oe={lumoSize:["--lumo-size-xs","--lumo-size-s","--lumo-size-m","--lumo-size-l","--lumo-size-xl"],lumoSpace:["--lumo-space-xs","--lumo-space-s","--lumo-space-m","--lumo-space-l","--lumo-space-xl"],lumoBorderRadius:["0","--lumo-border-radius-m","--lumo-border-radius-l"],lumoFontSize:["--lumo-font-size-xxs","--lumo-font-size-xs","--lumo-font-size-s","--lumo-font-size-m","--lumo-font-size-l","--lumo-font-size-xl","--lumo-font-size-xxl","--lumo-font-size-xxxl"],lumoTextColor:["--lumo-header-text-color","--lumo-body-text-color","--lumo-secondary-text-color","--lumo-tertiary-text-color","--lumo-disabled-text-color","--lumo-primary-text-color","--lumo-error-text-color","--lumo-success-text-color"],basicBorderSize:["0px","1px","2px","3px"]},yi=Object.freeze(Object.defineProperty({__proto__:null,presets:oe},Symbol.toStringTag,{value:"Module"})),ce={textColor:{propertyName:"color",displayName:"Text color",editorType:R.color,presets:oe.lumoTextColor},fontSize:{propertyName:"font-size",displayName:"Font size",editorType:R.range,presets:oe.lumoFontSize,icon:"font"},fontWeight:{propertyName:"font-weight",displayName:"Bold",editorType:R.checkbox,checkedValue:"bold"},fontStyle:{propertyName:"font-style",displayName:"Italic",editorType:R.checkbox,checkedValue:"italic"}},ee={backgroundColor:{propertyName:"background-color",displayName:"Background color",editorType:R.color},borderColor:{propertyName:"border-color",displayName:"Border color",editorType:R.color},borderWidth:{propertyName:"border-width",displayName:"Border width",editorType:R.range,presets:oe.basicBorderSize,icon:"square"},borderRadius:{propertyName:"border-radius",displayName:"Border radius",editorType:R.range,presets:oe.lumoBorderRadius,icon:"square"},padding:{propertyName:"padding",displayName:"Padding",editorType:R.range,presets:oe.lumoSpace,icon:"square"},gap:{propertyName:"gap",displayName:"Spacing",editorType:R.range,presets:oe.lumoSpace,icon:"square"}},wi={height:{propertyName:"height",displayName:"Size",editorType:R.range,presets:oe.lumoSize,icon:"square"},paddingInline:{propertyName:"padding-inline",displayName:"Padding",editorType:R.range,presets:oe.lumoSpace,icon:"square"}},bo={iconColor:{propertyName:"color",displayName:"Icon color",editorType:R.color,presets:oe.lumoTextColor},iconSize:{propertyName:"font-size",displayName:"Icon size",editorType:R.range,presets:oe.lumoFontSize,icon:"font"}},xi=[ee.backgroundColor,ee.borderColor,ee.borderWidth,ee.borderRadius,ee.padding],_i=[ce.textColor,ce.fontSize,ce.fontWeight,ce.fontStyle],ki=[bo.iconColor,bo.iconSize],Ei=Object.freeze(Object.defineProperty({__proto__:null,fieldProperties:wi,iconProperties:bo,shapeProperties:ee,standardIconProperties:ki,standardShapeProperties:xi,standardTextProperties:_i,textProperties:ce},Symbol.toStringTag,{value:"Module"}));function ya(t){const e=t.charAt(0).toUpperCase()+t.slice(1);return{tagName:t,displayName:e,elements:[{selector:t,displayName:"Element",properties:[ee.backgroundColor,ee.borderColor,ee.borderWidth,ee.borderRadius,ee.padding,ce.textColor,ce.fontSize,ce.fontWeight,ce.fontStyle]}]}}const Si=Object.freeze(Object.defineProperty({__proto__:null,createGenericMetadata:ya},Symbol.toStringTag,{value:"Module"})),Ci=t=>vi(Object.assign({"./components/defaults.ts":()=>b(()=>Promise.resolve().then(()=>Ei),void 0),"./components/generic.ts":()=>b(()=>Promise.resolve().then(()=>Si),void 0),"./components/presets.ts":()=>b(()=>Promise.resolve().then(()=>yi),void 0),"./components/vaadin-accordion-heading.ts":()=>b(()=>g(()=>import("./vaadin-accordion-heading-c0acdd6d-cc2eb14c.js"),[],import.meta.url),[]),"./components/vaadin-accordion-panel.ts":()=>b(()=>g(()=>import("./vaadin-accordion-panel-616e55d6-234ae2df.js"),[],import.meta.url),[]),"./components/vaadin-accordion.ts":()=>b(()=>g(()=>import("./vaadin-accordion-eed3b794-34253cd4.js"),[],import.meta.url),[]),"./components/vaadin-app-layout.ts":()=>b(()=>g(()=>import("./vaadin-app-layout-e56de2e9-fb5000b8.js"),[],import.meta.url),[]),"./components/vaadin-avatar.ts":()=>b(()=>g(()=>import("./vaadin-avatar-7599297d-053aa344.js"),[],import.meta.url),[]),"./components/vaadin-big-decimal-field.ts":()=>b(()=>g(()=>import("./vaadin-big-decimal-field-e51def24-3de424b1.js"),["./vaadin-big-decimal-field-e51def24-3de424b1.js","./vaadin-text-field-0b3db014-584e55a2.js","./vaadin-button-2511ad84-61b2e11e.js"],import.meta.url),["assets/vaadin-big-decimal-field-e51def24.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-board-row.ts":()=>b(()=>g(()=>import("./vaadin-board-row-c70d0c55-89ddc23a.js"),[],import.meta.url),[]),"./components/vaadin-board.ts":()=>b(()=>g(()=>import("./vaadin-board-828ebdea-7d10f239.js"),[],import.meta.url),[]),"./components/vaadin-button.ts":()=>b(()=>g(()=>import("./vaadin-button-2511ad84-61b2e11e.js"),[],import.meta.url),[]),"./components/vaadin-chart.ts":()=>b(()=>g(()=>import("./vaadin-chart-5192dc15-5cea4238.js"),[],import.meta.url),[]),"./components/vaadin-checkbox-group.ts":()=>b(()=>g(()=>import("./vaadin-checkbox-group-a7c65bf2-c6c9c423.js"),["./vaadin-checkbox-group-a7c65bf2-c6c9c423.js","./vaadin-text-field-0b3db014-584e55a2.js","./vaadin-checkbox-4e68df64-63c3ea56.js"],import.meta.url),["assets/vaadin-checkbox-group-a7c65bf2.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-checkbox-4e68df64.js"]),"./components/vaadin-checkbox.ts":()=>b(()=>g(()=>import("./vaadin-checkbox-4e68df64-63c3ea56.js"),[],import.meta.url),[]),"./components/vaadin-combo-box.ts":()=>b(()=>g(()=>import("./vaadin-combo-box-96451ddd-ac6abcc3.js"),["./vaadin-combo-box-96451ddd-ac6abcc3.js","./vaadin-text-field-0b3db014-584e55a2.js"],import.meta.url),["assets/vaadin-combo-box-96451ddd.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-confirm-dialog.ts":()=>b(()=>g(()=>import("./vaadin-confirm-dialog-4d718829-4013189c.js"),["./vaadin-confirm-dialog-4d718829-4013189c.js","./vaadin-button-2511ad84-61b2e11e.js"],import.meta.url),["assets/vaadin-confirm-dialog-4d718829.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-cookie-consent.ts":()=>b(()=>g(()=>import("./vaadin-cookie-consent-46c09f8b-2d56f165.js"),[],import.meta.url),[]),"./components/vaadin-crud.ts":()=>b(()=>g(()=>import("./vaadin-crud-8d161a22-4a767576.js"),[],import.meta.url),[]),"./components/vaadin-custom-field.ts":()=>b(()=>g(()=>import("./vaadin-custom-field-42c85b9e-4bb6813c.js"),["./vaadin-custom-field-42c85b9e-4bb6813c.js","./vaadin-text-field-0b3db014-584e55a2.js"],import.meta.url),["assets/vaadin-custom-field-42c85b9e.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-date-picker.ts":()=>b(()=>g(()=>import("./vaadin-date-picker-f2001167-97b0a8b8.js"),["./vaadin-date-picker-f2001167-97b0a8b8.js","./vaadin-text-field-0b3db014-584e55a2.js"],import.meta.url),["assets/vaadin-date-picker-f2001167.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-date-time-picker.ts":()=>b(()=>g(()=>import("./vaadin-date-time-picker-c8c047a7-ce9d135f.js"),["./vaadin-date-time-picker-c8c047a7-ce9d135f.js","./vaadin-text-field-0b3db014-584e55a2.js"],import.meta.url),["assets/vaadin-date-time-picker-c8c047a7.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-details-summary.ts":()=>b(()=>g(()=>import("./vaadin-details-summary-351a1448-49f7160c.js"),[],import.meta.url),[]),"./components/vaadin-details.ts":()=>b(()=>g(()=>import("./vaadin-details-bf336660-fbf5b204.js"),[],import.meta.url),[]),"./components/vaadin-dialog.ts":()=>b(()=>g(()=>import("./vaadin-dialog-53253a08-5ed11f68.js"),[],import.meta.url),[]),"./components/vaadin-email-field.ts":()=>b(()=>g(()=>import("./vaadin-email-field-d7a35f04-16ae1f57.js"),["./vaadin-email-field-d7a35f04-16ae1f57.js","./vaadin-text-field-0b3db014-584e55a2.js","./vaadin-button-2511ad84-61b2e11e.js"],import.meta.url),["assets/vaadin-email-field-d7a35f04.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-form-layout.ts":()=>b(()=>g(()=>import("./vaadin-form-layout-47744b1d-5e20f121.js"),[],import.meta.url),[]),"./components/vaadin-grid-pro.ts":()=>b(()=>g(()=>import("./vaadin-grid-pro-ff415555-d8b40e9f.js"),["./vaadin-grid-pro-ff415555-d8b40e9f.js","./vaadin-checkbox-4e68df64-63c3ea56.js","./vaadin-grid-0a4791c2-9a778f88.js","./vaadin-text-field-0b3db014-584e55a2.js"],import.meta.url),["assets/vaadin-grid-pro-ff415555.js","assets/vaadin-checkbox-4e68df64.js","assets/vaadin-grid-0a4791c2.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-grid.ts":()=>b(()=>g(()=>import("./vaadin-grid-0a4791c2-9a778f88.js"),["./vaadin-grid-0a4791c2-9a778f88.js","./vaadin-checkbox-4e68df64-63c3ea56.js"],import.meta.url),["assets/vaadin-grid-0a4791c2.js","assets/vaadin-checkbox-4e68df64.js"]),"./components/vaadin-horizontal-layout.ts":()=>b(()=>g(()=>import("./vaadin-horizontal-layout-3193943f-ade70a97.js"),[],import.meta.url),[]),"./components/vaadin-icon.ts":()=>b(()=>g(()=>import("./vaadin-icon-601f36ed-787933b9.js"),[],import.meta.url),[]),"./components/vaadin-integer-field.ts":()=>b(()=>g(()=>import("./vaadin-integer-field-85078932-3c411335.js"),["./vaadin-integer-field-85078932-3c411335.js","./vaadin-text-field-0b3db014-584e55a2.js","./vaadin-button-2511ad84-61b2e11e.js"],import.meta.url),["assets/vaadin-integer-field-85078932.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-list-box.ts":()=>b(()=>g(()=>import("./vaadin-list-box-d7a8433b-f8508e12.js"),[],import.meta.url),[]),"./components/vaadin-login-form.ts":()=>b(()=>g(()=>import("./vaadin-login-form-638996c6-a2bb35f5.js"),["./vaadin-login-form-638996c6-a2bb35f5.js","./vaadin-text-field-0b3db014-584e55a2.js","./vaadin-button-2511ad84-61b2e11e.js"],import.meta.url),["assets/vaadin-login-form-638996c6.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-login-overlay.ts":()=>b(()=>g(()=>import("./vaadin-login-overlay-f8a5db8a-017edeed.js"),["./vaadin-login-overlay-f8a5db8a-017edeed.js","./vaadin-text-field-0b3db014-584e55a2.js","./vaadin-button-2511ad84-61b2e11e.js"],import.meta.url),["assets/vaadin-login-overlay-f8a5db8a.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-map.ts":()=>b(()=>g(()=>import("./vaadin-map-d40a0116-59f23604.js"),[],import.meta.url),[]),"./components/vaadin-menu-bar.ts":()=>b(()=>g(()=>import("./vaadin-menu-bar-3f5ab096-d2b39318.js"),[],import.meta.url),[]),"./components/vaadin-message-input.ts":()=>b(()=>g(()=>import("./vaadin-message-input-996ac37c-a0118755.js"),["./vaadin-message-input-996ac37c-a0118755.js","./vaadin-text-field-0b3db014-584e55a2.js"],import.meta.url),["assets/vaadin-message-input-996ac37c.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-message-list.ts":()=>b(()=>g(()=>import("./vaadin-message-list-70a435ba-456373ea.js"),[],import.meta.url),[]),"./components/vaadin-multi-select-combo-box.ts":()=>b(()=>g(()=>import("./vaadin-multi-select-combo-box-a3373557-47b7f192.js"),["./vaadin-multi-select-combo-box-a3373557-47b7f192.js","./vaadin-text-field-0b3db014-584e55a2.js"],import.meta.url),["assets/vaadin-multi-select-combo-box-a3373557.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-notification.ts":()=>b(()=>g(()=>import("./vaadin-notification-bd6eb776-7983782d.js"),[],import.meta.url),[]),"./components/vaadin-number-field.ts":()=>b(()=>g(()=>import("./vaadin-number-field-cb3ee8b2-313840a7.js"),["./vaadin-number-field-cb3ee8b2-313840a7.js","./vaadin-text-field-0b3db014-584e55a2.js","./vaadin-button-2511ad84-61b2e11e.js"],import.meta.url),["assets/vaadin-number-field-cb3ee8b2.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-password-field.ts":()=>b(()=>g(()=>import("./vaadin-password-field-d289cb18-212aefb6.js"),["./vaadin-password-field-d289cb18-212aefb6.js","./vaadin-text-field-0b3db014-584e55a2.js","./vaadin-button-2511ad84-61b2e11e.js"],import.meta.url),["assets/vaadin-password-field-d289cb18.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-progress-bar.ts":()=>b(()=>g(()=>import("./vaadin-progress-bar-309ecf1f-4426c0b2.js"),[],import.meta.url),[]),"./components/vaadin-radio-group.ts":()=>b(()=>g(()=>import("./vaadin-radio-group-88b5afd8-f9d5100e.js"),["./vaadin-radio-group-88b5afd8-f9d5100e.js","./vaadin-text-field-0b3db014-584e55a2.js"],import.meta.url),["assets/vaadin-radio-group-88b5afd8.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-rich-text-editor.ts":()=>b(()=>g(()=>import("./vaadin-rich-text-editor-8cd892f2-4f604cb0.js"),[],import.meta.url),[]),"./components/vaadin-scroller.ts":()=>b(()=>g(()=>import("./vaadin-scroller-35e68818-57de7910.js"),[],import.meta.url),[]),"./components/vaadin-select.ts":()=>b(()=>g(()=>import("./vaadin-select-df6e9947-c4f618ed.js"),["./vaadin-select-df6e9947-c4f618ed.js","./vaadin-text-field-0b3db014-584e55a2.js"],import.meta.url),["assets/vaadin-select-df6e9947.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-side-nav-item.ts":()=>b(()=>g(()=>import("./vaadin-side-nav-item-34918f92-319d4d72.js"),[],import.meta.url),[]),"./components/vaadin-side-nav.ts":()=>b(()=>g(()=>import("./vaadin-side-nav-ba80d91d-78ce31c8.js"),[],import.meta.url),[]),"./components/vaadin-split-layout.ts":()=>b(()=>g(()=>import("./vaadin-split-layout-80c92131-449c59bf.js"),[],import.meta.url),[]),"./components/vaadin-spreadsheet.ts":()=>b(()=>g(()=>import("./vaadin-spreadsheet-59d8c5ef-3e37fed5.js"),[],import.meta.url),[]),"./components/vaadin-tab.ts":()=>b(()=>g(()=>import("./vaadin-tab-aaf32809-f1971877.js"),[],import.meta.url),[]),"./components/vaadin-tabs.ts":()=>b(()=>g(()=>import("./vaadin-tabs-d9a5e24e-774ea856.js"),[],import.meta.url),[]),"./components/vaadin-tabsheet.ts":()=>b(()=>g(()=>import("./vaadin-tabsheet-dd99ed9a-c0a20b2f.js"),[],import.meta.url),[]),"./components/vaadin-text-area.ts":()=>b(()=>g(()=>import("./vaadin-text-area-83627ebc-e4408c14.js"),["./vaadin-text-area-83627ebc-e4408c14.js","./vaadin-text-field-0b3db014-584e55a2.js","./vaadin-button-2511ad84-61b2e11e.js"],import.meta.url),["assets/vaadin-text-area-83627ebc.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-text-field.ts":()=>b(()=>g(()=>import("./vaadin-text-field-0b3db014-584e55a2.js"),[],import.meta.url),[]),"./components/vaadin-time-picker.ts":()=>b(()=>g(()=>import("./vaadin-time-picker-715ec415-b3809251.js"),["./vaadin-time-picker-715ec415-b3809251.js","./vaadin-text-field-0b3db014-584e55a2.js"],import.meta.url),["assets/vaadin-time-picker-715ec415.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-upload.ts":()=>b(()=>g(()=>import("./vaadin-upload-d3c162ed-702ba4c9.js"),["./vaadin-upload-d3c162ed-702ba4c9.js","./vaadin-button-2511ad84-61b2e11e.js"],import.meta.url),["assets/vaadin-upload-d3c162ed.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-vertical-layout.ts":()=>b(()=>g(()=>import("./vaadin-vertical-layout-ad4174c4-985cfee5.js"),[],import.meta.url),[]),"./components/vaadin-virtual-list.ts":()=>b(()=>g(()=>import("./vaadin-virtual-list-96896203-41217dbc.js"),[],import.meta.url),[])}),`./components/${t}.ts`);class Ai{constructor(e=Ci){this.loader=e,this.metadata={}}async getMetadata(e){var o;const n=(o=e.element)==null?void 0:o.localName;if(!n)return null;if(!n.startsWith("vaadin-"))return ya(n);let a=this.metadata[n];if(a)return a;try{a=(await this.loader(n)).default,this.metadata[n]=a}catch{console.warn(`Failed to load metadata for component: ${n}`)}return a||null}}const Ti=new Ai,_t={crosshair:Ie`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
   <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
   <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
   <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
   <path d="M9 12l6 0"></path>
   <path d="M12 9l0 6"></path>
</svg>`,square:Ie`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
</svg>`,font:Ie`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 20l3 0"></path>
   <path d="M14 20l7 0"></path>
   <path d="M6.9 15l6.9 0"></path>
   <path d="M10.2 6.3l5.8 13.7"></path>
   <path d="M5 20l6 -16l2 0l7 16"></path>
</svg>`,undo:Ie`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"></path>
</svg>`,redo:Ie`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1"></path>
</svg>`,cross:Ie`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M18 6l-12 12"></path>
   <path d="M6 6l12 12"></path>
</svg>`};var De;(function(t){t.disabled="disabled",t.enabled="enabled",t.missing_theme="missing_theme"})(De||(De={}));var P;(function(t){t.local="local",t.global="global"})(P||(P={}));function ro(t,e){return`${t}|${e}`}class ue{constructor(e){this._properties={},this._metadata=e}get metadata(){return this._metadata}get properties(){return Object.values(this._properties)}getPropertyValue(e,o){return this._properties[ro(e,o)]||null}updatePropertyValue(e,o,n,a){if(!n){delete this._properties[ro(e,o)];return}let r=this.getPropertyValue(e,o);r?(r.value=n,r.modified=a||!1):(r={elementSelector:e,propertyName:o,value:n,modified:a||!1},this._properties[ro(e,o)]=r)}addPropertyValues(e){e.forEach(o=>{this.updatePropertyValue(o.elementSelector,o.propertyName,o.value,o.modified)})}getPropertyValuesForElement(e){return this.properties.filter(o=>o.elementSelector===e)}static combine(...e){if(e.length<2)throw new Error("Must provide at least two themes");const o=new ue(e[0].metadata);return e.forEach(n=>o.addPropertyValues(n.properties)),o}static fromServerRules(e,o,n){const a=new ue(e);return e.elements.forEach(r=>{const i=je(r,o),s=n.find(l=>l.selector===i.replace(/ > /g,">"));s&&r.properties.forEach(l=>{const c=s.properties[l.propertyName];c&&a.updatePropertyValue(r.selector,l.propertyName,c,!0)})}),a}}function je(t,e){const o=t.selector;if(e.themeScope===P.global)return o;if(!e.localClassName)throw new Error("Can not build local scoped selector without instance class name");const n=o.match(/^[\w\d-_]+/),a=n&&n[0];if(!a)throw new Error(`Selector does not start with a tag name: ${o}`);return`${a}.${e.localClassName}${o.substring(a.length,o.length)}`}function Li(t,e,o,n){const a=je(t,e),r={[o]:n};return o==="border-width"&&(parseInt(n)>0?r["border-style"]="solid":r["border-style"]=""),{selector:a,properties:r}}function $i(t){const e=Object.entries(t.properties).map(([o,n])=>`${o}: ${n};`).join(" ");return`${t.selector} { ${e} }`}let ut,Cn="";function $o(t){ut||(ut=new CSSStyleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets,ut]),Cn+=t.cssText,ut.replaceSync(Cn)}const wa=x`
  .editor-row {
    display: flex;
    align-items: baseline;
    padding: var(--theme-editor-section-horizontal-padding);
    gap: 10px;
  }

  .editor-row > .label {
    flex: 0 0 auto;
    width: 120px;
  }

  .editor-row > .editor {
    flex: 1 1 0;
  }
`,An="__vaadin-theme-editor-measure-element",Tn=/((::before)|(::after))$/,Ln=/::part\(([\w\d_-]+)\)$/;$o(x`
  .__vaadin-theme-editor-measure-element {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  }
`);async function Ri(t){const e=new ue(t),o=document.createElement(t.tagName);o.classList.add(An),document.body.append(o),t.setupElement&&await t.setupElement(o);const n={themeScope:P.local,localClassName:An};try{t.elements.forEach(a=>{$n(o,a,n,!0);let r=je(a,n);const i=r.match(Tn);r=r.replace(Tn,"");const s=r.match(Ln),l=r.replace(Ln,"");let c=document.querySelector(l);if(c&&s){const h=`[part~="${s[1]}"]`;c=c.shadowRoot.querySelector(h)}if(!c)return;c.style.transition="none";const d=i?i[1]:null,m=getComputedStyle(c,d);a.properties.forEach(h=>{const y=m.getPropertyValue(h.propertyName)||h.defaultValue||"";e.updatePropertyValue(a.selector,h.propertyName,y)}),$n(o,a,n,!1)})}finally{try{t.cleanupElement&&await t.cleanupElement(o)}finally{o.remove()}}return e}function $n(t,e,o,n){if(e.stateAttribute){if(e.stateElementSelector){const a=je({...e,selector:e.stateElementSelector},o);t=document.querySelector(a)}t&&(n?t.setAttribute(e.stateAttribute,""):t.removeAttribute(e.stateAttribute))}}function Rn(t){return t.trim()}function Ni(t){const e=t.element;if(!e)return null;const o=e.querySelector("label");if(o&&o.textContent)return Rn(o.textContent);const n=e.textContent;return n?Rn(n):null}class Ii{constructor(){this._localClassNameMap=new Map}get stylesheet(){return this.ensureStylesheet(),this._stylesheet}add(e){this.ensureStylesheet(),this._stylesheet.replaceSync(e)}clear(){this.ensureStylesheet(),this._stylesheet.replaceSync("")}previewLocalClassName(e,o){if(!e)return;const n=this._localClassNameMap.get(e);n&&(e.classList.remove(n),e.overlayClass=null),o?(e.classList.add(o),e.overlayClass=o,this._localClassNameMap.set(e,o)):this._localClassNameMap.delete(e)}ensureStylesheet(){this._stylesheet||(this._stylesheet=new CSSStyleSheet,this._stylesheet.replaceSync(""),document.adoptedStyleSheets=[...document.adoptedStyleSheets,this._stylesheet])}}const ye=new Ii;var X;(function(t){t.response="themeEditorResponse",t.loadComponentMetadata="themeEditorComponentMetadata",t.setLocalClassName="themeEditorLocalClassName",t.setCssRules="themeEditorRules",t.loadRules="themeEditorLoadRules",t.history="themeEditorHistory",t.openCss="themeEditorOpenCss",t.markAsUsed="themeEditorMarkAsUsed"})(X||(X={}));var go;(function(t){t.ok="ok",t.error="error"})(go||(go={}));class Pi{constructor(e){this.pendingRequests={},this.requestCounter=0,this.wrappedConnection=e;const o=this.wrappedConnection.onMessage;this.wrappedConnection.onMessage=n=>{n.command===X.response?this.handleResponse(n.data):o.call(this.wrappedConnection,n)}}sendRequest(e,o){const n=(this.requestCounter++).toString(),a=o.uiId??this.getGlobalUiId();return new Promise((r,i)=>{this.wrappedConnection.send(e,{...o,requestId:n,uiId:a}),this.pendingRequests[n]={resolve:r,reject:i}})}handleResponse(e){const o=this.pendingRequests[e.requestId];if(!o){console.warn("Received response for unknown request");return}delete this.pendingRequests[e.requestId],e.code===go.ok?o.resolve(e):o.reject(e)}loadComponentMetadata(e){return this.sendRequest(X.loadComponentMetadata,{nodeId:e.nodeId})}setLocalClassName(e,o){return this.sendRequest(X.setLocalClassName,{nodeId:e.nodeId,className:o})}setCssRules(e){return this.sendRequest(X.setCssRules,{rules:e})}loadRules(e){return this.sendRequest(X.loadRules,{selectors:e})}markAsUsed(){return this.sendRequest(X.markAsUsed,{})}undo(e){return this.sendRequest(X.history,{undo:e})}redo(e){return this.sendRequest(X.history,{redo:e})}openCss(e){return this.sendRequest(X.openCss,{selector:e})}getGlobalUiId(){if(this.globalUiId===void 0){const e=window.Vaadin;if(e&&e.Flow){const{clients:o}=e.Flow,n=Object.keys(o);for(const a of n){const r=o[a];if(r.getNodeId){this.globalUiId=r.getUIId();break}}}}return this.globalUiId??-1}}const M={index:-1,entries:[]};class zi{constructor(e){this.api=e}get allowUndo(){return M.index>=0}get allowRedo(){return M.index<M.entries.length-1}get allowedActions(){return{allowUndo:this.allowUndo,allowRedo:this.allowRedo}}push(e,o,n){const a={requestId:e,execute:o,rollback:n};if(M.index++,M.entries=M.entries.slice(0,M.index),M.entries.push(a),o)try{o()}catch(r){console.error("Execute history entry failed",r)}return this.allowedActions}async undo(){if(!this.allowUndo)return this.allowedActions;const e=M.entries[M.index];M.index--;try{await this.api.undo(e.requestId),e.rollback&&e.rollback()}catch(o){console.error("Undo failed",o)}return this.allowedActions}async redo(){if(!this.allowRedo)return this.allowedActions;M.index++;const e=M.entries[M.index];try{await this.api.redo(e.requestId),e.execute&&e.execute()}catch(o){console.error("Redo failed",o)}return this.allowedActions}static clear(){M.entries=[],M.index=-1}}class Oi extends CustomEvent{constructor(e,o,n){super("theme-property-value-change",{bubbles:!0,composed:!0,detail:{element:e,property:o,value:n}})}}class G extends N{constructor(){super(...arguments),this.value=""}static get styles(){return[wa,x`
        :host {
          display: block;
        }

        .editor-row .label .modified {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: orange;
          border-radius: 3px;
          margin-left: 3px;
        }
      `]}update(e){super.update(e),(e.has("propertyMetadata")||e.has("theme"))&&this.updateValueFromTheme()}render(){var e;return v`
      <div class="editor-row">
        <div class="label">
          ${this.propertyMetadata.displayName}
          ${(e=this.propertyValue)!=null&&e.modified?v`<span class="modified"></span>`:null}
        </div>
        <div class="editor">${this.renderEditor()}</div>
      </div>
    `}updateValueFromTheme(){var e;this.propertyValue=this.theme.getPropertyValue(this.elementMetadata.selector,this.propertyMetadata.propertyName),this.value=((e=this.propertyValue)==null?void 0:e.value)||""}dispatchChange(e){this.dispatchEvent(new Oi(this.elementMetadata,this.propertyMetadata,e))}}u([w({})],G.prototype,"elementMetadata",void 0);u([w({})],G.prototype,"propertyMetadata",void 0);u([w({})],G.prototype,"theme",void 0);u([I()],G.prototype,"propertyValue",void 0);u([I()],G.prototype,"value",void 0);class Nt{get values(){return this._values}get rawValues(){return this._rawValues}constructor(e){if(this._values=[],this._rawValues={},e){const o=e.propertyName,n=e.presets??[];this._values=(n||[]).map(r=>r.startsWith("--")?`var(${r})`:r);const a=document.createElement("div");a.style.borderStyle="solid",a.style.visibility="hidden",document.body.append(a);try{this._values.forEach(r=>{a.style.setProperty(o,r);const i=getComputedStyle(a);this._rawValues[r]=i.getPropertyValue(o).trim()})}finally{a.remove()}}}tryMapToRawValue(e){return this._rawValues[e]??e}tryMapToPreset(e){return this.findPreset(e)??e}findPreset(e){const o=e&&e.trim();return this.values.find(n=>this._rawValues[n]===o)}}class Nn extends CustomEvent{constructor(e){super("change",{detail:{value:e}})}}let It=class extends N{constructor(){super(...arguments),this.value="",this.showClearButton=!1}static get styles(){return x`
      :host {
        display: inline-block;
        width: 100%;
        position: relative;
      }

      input {
        width: 100%;
        box-sizing: border-box;
        padding: 0.25rem 0.375rem;
        color: inherit;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
        border: none;
      }

      button {
        display: none;
        position: absolute;
        right: 4px;
        top: 4px;
        padding: 0;
        line-height: 0;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      button svg {
        width: 16px;
        height: 16px;
      }

      button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      :host(.show-clear-button) input {
        padding-right: 20px;
      }

      :host(.show-clear-button) button {
        display: block;
      }
    `}update(t){super.update(t),t.has("showClearButton")&&(this.showClearButton?this.classList.add("show-clear-button"):this.classList.remove("show-clear-button"))}render(){return v`
      <input class="input" .value=${this.value} @change=${this.handleInputChange} />
      <button @click=${this.handleClearClick}>${_t.cross}</button>
    `}handleInputChange(t){const e=t.target;this.dispatchEvent(new Nn(e.value))}handleClearClick(){this.dispatchEvent(new Nn(""))}};u([w({})],It.prototype,"value",void 0);u([w({})],It.prototype,"showClearButton",void 0);It=u([F("vaadin-dev-tools-theme-text-input")],It);class Mi extends CustomEvent{constructor(e){super("class-name-change",{detail:{value:e}})}}let et=class extends N{constructor(){super(...arguments),this.editedClassName="",this.invalid=!1}static get styles(){return[wa,x`
        .editor-row {
          padding-top: 0;
        }

        .editor-row .editor .error {
          display: inline-block;
          color: var(--dev-tools-red-color);
          margin-top: 4px;
        }
      `]}update(t){super.update(t),t.has("className")&&(this.editedClassName=this.className,this.invalid=!1)}render(){return v` <div class="editor-row local-class-name">
      <div class="label">CSS class name</div>
      <div class="editor">
        <vaadin-dev-tools-theme-text-input
          type="text"
          .value=${this.editedClassName}
          @change=${this.handleInputChange}
        ></vaadin-dev-tools-theme-text-input>
        ${this.invalid?v`<br /><span class="error">Please enter a valid CSS class name</span>`:null}
      </div>
    </div>`}handleInputChange(t){this.editedClassName=t.detail.value;const e=/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;this.invalid=!this.editedClassName.match(e),!this.invalid&&this.editedClassName!==this.className&&this.dispatchEvent(new Mi(this.editedClassName))}};u([w({})],et.prototype,"className",void 0);u([I()],et.prototype,"editedClassName",void 0);u([I()],et.prototype,"invalid",void 0);et=u([F("vaadin-dev-tools-theme-class-name-editor")],et);class Vi extends CustomEvent{constructor(e){super("scope-change",{detail:{value:e}})}}$o(x`
  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] {
    --lumo-primary-color-50pct: rgba(255, 255, 255, 0.5);
    z-index: 100000 !important;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector']::part(overlay) {
    background: #333;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item {
    color: rgba(255, 255, 255, 0.8);
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(content) {
    font-size: 13px;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item .title {
    color: rgba(255, 255, 255, 0.95);
    font-weight: bold;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(checkmark) {
    margin: 6px;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(checkmark)::before {
    color: rgba(255, 255, 255, 0.95);
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`);let tt=class extends N{constructor(){super(...arguments),this.value=P.local}static get styles(){return x`
      vaadin-select {
        --lumo-primary-color-50pct: rgba(255, 255, 255, 0.5);
        width: 100px;
      }

      vaadin-select::part(input-field) {
        background: rgba(0, 0, 0, 0.2);
      }

      vaadin-select vaadin-select-value-button,
      vaadin-select::part(toggle-button) {
        color: var(--dev-tools-text-color);
      }

      vaadin-select:hover vaadin-select-value-button,
      vaadin-select:hover::part(toggle-button) {
        color: var(--dev-tools-text-color-emphasis);
      }

      vaadin-select vaadin-select-item {
        font-size: 13px;
      }
    `}update(t){var e;super.update(t),t.has("metadata")&&((e=this.select)==null||e.requestContentUpdate())}render(){return v` <vaadin-select
      theme="small vaadin-dev-tools-theme-scope-selector"
      .value=${this.value}
      .renderer=${this.selectRenderer.bind(this)}
      @value-changed=${this.handleValueChange}
    ></vaadin-select>`}selectRenderer(t){var e;const o=((e=this.metadata)==null?void 0:e.displayName)||"Component",n=`${o}s`;_e(v`
        <vaadin-list-box>
          <vaadin-item value=${P.local} label="Local">
            <span class="title">Local</span>
            <br />
            <span>Edit styles for this ${o}</span>
          </vaadin-item>
          <vaadin-item value=${P.global} label="Global">
            <span class="title">Global</span>
            <br />
            <span>Edit styles for all ${n}</span>
          </vaadin-item>
        </vaadin-list-box>
      `,t)}handleValueChange(t){const e=t.detail.value;e!==this.value&&this.dispatchEvent(new Vi(e))}};u([w({})],tt.prototype,"value",void 0);u([w({})],tt.prototype,"metadata",void 0);u([rt("vaadin-select")],tt.prototype,"select",void 0);tt=u([F("vaadin-dev-tools-theme-scope-selector")],tt);let In=class extends G{static get styles(){return[G.styles,x`
        .editor-row {
          align-items: center;
        }
      `]}handleInputChange(t){const e=t.target.checked?this.propertyMetadata.checkedValue:"";this.dispatchChange(e||"")}renderEditor(){const t=this.value===this.propertyMetadata.checkedValue;return v` <input type="checkbox" .checked=${t} @change=${this.handleInputChange} /> `}};In=u([F("vaadin-dev-tools-theme-checkbox-property-editor")],In);let Pn=class extends G{handleInputChange(t){this.dispatchChange(t.detail.value)}renderEditor(){var t;return v`
      <vaadin-dev-tools-theme-text-input
        .value=${this.value}
        .showClearButton=${((t=this.propertyValue)==null?void 0:t.modified)||!1}
        @change=${this.handleInputChange}
      ></vaadin-dev-tools-theme-text-input>
    `}};Pn=u([F("vaadin-dev-tools-theme-text-property-editor")],Pn);let Pt=class extends G{constructor(){super(...arguments),this.selectedPresetIndex=-1,this.presets=new Nt}static get styles(){return[G.styles,x`
        :host {
          --preset-count: 3;
          --slider-bg: #fff;
          --slider-border: #333;
        }

        .editor-row {
          align-items: center;
        }

        .editor-row > .editor {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .editor-row .input {
          flex: 0 0 auto;
          width: 80px;
        }

        .slider-wrapper {
          flex: 1 1 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .icon {
          width: 20px;
          height: 20px;
          color: #aaa;
        }

        .icon.prefix > svg {
          transform: scale(0.75);
        }

        .slider {
          flex: 1 1 0;
          -webkit-appearance: none;
          background: linear-gradient(to right, #666, #666 2px, transparent 2px);
          background-size: calc((100% - 13px) / (var(--preset-count) - 1)) 8px;
          background-position: 5px 50%;
          background-repeat: repeat-x;
        }

        .slider::-webkit-slider-runnable-track {
          width: 100%;
          box-sizing: border-box;
          height: 16px;
          background-image: linear-gradient(#666, #666);
          background-size: calc(100% - 12px) 2px;
          background-repeat: no-repeat;
          background-position: 6px 50%;
        }

        .slider::-moz-range-track {
          width: 100%;
          box-sizing: border-box;
          height: 16px;
          background-image: linear-gradient(#666, #666);
          background-size: calc(100% - 12px) 2px;
          background-repeat: no-repeat;
          background-position: 6px 50%;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border: 2px solid var(--slider-border);
          border-radius: 50%;
          background: var(--slider-bg);
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border: 2px solid var(--slider-border);
          border-radius: 50%;
          background: var(--slider-bg);
          cursor: pointer;
        }

        .custom-value {
          opacity: 0.5;
        }

        .custom-value:hover,
        .custom-value:focus-within {
          opacity: 1;
        }

        .custom-value:not(:hover, :focus-within) {
          --slider-bg: #333;
          --slider-border: #666;
        }
      `]}update(t){t.has("propertyMetadata")&&(this.presets=new Nt(this.propertyMetadata)),super.update(t)}renderEditor(){var t;const e={"slider-wrapper":!0,"custom-value":this.selectedPresetIndex<0},o=this.presets.values.length;return v`
      <div class=${Lo(e)}>
        ${null}
        <input
          type="range"
          class="slider"
          style="--preset-count: ${o}"
          step="1"
          min="0"
          .max=${(o-1).toString()}
          .value=${this.selectedPresetIndex}
          @input=${this.handleSliderInput}
          @change=${this.handleSliderChange}
        />
        ${null}
      </div>
      <vaadin-dev-tools-theme-text-input
        class="input"
        .value=${this.value}
        .showClearButton=${((t=this.propertyValue)==null?void 0:t.modified)||!1}
        @change=${this.handleValueChange}
      ></vaadin-dev-tools-theme-text-input>
    `}handleSliderInput(t){const e=t.target,o=parseInt(e.value),n=this.presets.values[o];this.selectedPresetIndex=o,this.value=this.presets.rawValues[n]}handleSliderChange(){this.dispatchChange(this.value)}handleValueChange(t){this.value=t.detail.value,this.updateSliderValue(),this.dispatchChange(this.value)}dispatchChange(t){const e=this.presets.tryMapToPreset(t);super.dispatchChange(e)}updateValueFromTheme(){var t;super.updateValueFromTheme(),this.value=this.presets.tryMapToRawValue(((t=this.propertyValue)==null?void 0:t.value)||""),this.updateSliderValue()}updateSliderValue(){const t=this.presets.findPreset(this.value);this.selectedPresetIndex=t?this.presets.values.indexOf(t):-1}};u([I()],Pt.prototype,"selectedPresetIndex",void 0);u([I()],Pt.prototype,"presets",void 0);Pt=u([F("vaadin-dev-tools-theme-range-property-editor")],Pt);const qe=(t,e=0,o=1)=>t>o?o:t<e?e:t,q=(t,e=0,o=Math.pow(10,e))=>Math.round(o*t)/o,xa=({h:t,s:e,v:o,a:n})=>{const a=(200-e)*o/100;return{h:q(t),s:q(a>0&&a<200?e*o/100/(a<=100?a:200-a)*100:0),l:q(a/2),a:q(n,2)}},vo=t=>{const{h:e,s:o,l:n}=xa(t);return`hsl(${e}, ${o}%, ${n}%)`},io=t=>{const{h:e,s:o,l:n,a}=xa(t);return`hsla(${e}, ${o}%, ${n}%, ${a})`},Fi=({h:t,s:e,v:o,a:n})=>{t=t/360*6,e=e/100,o=o/100;const a=Math.floor(t),r=o*(1-e),i=o*(1-(t-a)*e),s=o*(1-(1-t+a)*e),l=a%6;return{r:q([o,i,r,r,s,o][l]*255),g:q([s,o,o,i,r,r][l]*255),b:q([r,r,s,o,o,i][l]*255),a:q(n,2)}},Di=t=>{const{r:e,g:o,b:n,a}=Fi(t);return`rgba(${e}, ${o}, ${n}, ${a})`},ji=t=>{const e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(t);return e?qi({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},qi=({r:t,g:e,b:o,a:n})=>{const a=Math.max(t,e,o),r=a-Math.min(t,e,o),i=r?a===t?(e-o)/r:a===e?2+(o-t)/r:4+(t-e)/r:0;return{h:q(60*(i<0?i+6:i)),s:q(a?r/a*100:0),v:q(a/255*100),a:n}},Ui=(t,e)=>{if(t===e)return!0;for(const o in t)if(t[o]!==e[o])return!1;return!0},Bi=(t,e)=>t.replace(/\s/g,"")===e.replace(/\s/g,""),zn={},_a=t=>{let e=zn[t];return e||(e=document.createElement("template"),e.innerHTML=t,zn[t]=e),e},Ro=(t,e,o)=>{t.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:o}))};let Me=!1;const yo=t=>"touches"in t,Hi=t=>Me&&!yo(t)?!1:(Me||(Me=yo(t)),!0),On=(t,e)=>{const o=yo(e)?e.touches[0]:e,n=t.el.getBoundingClientRect();Ro(t.el,"move",t.getMove({x:qe((o.pageX-(n.left+window.pageXOffset))/n.width),y:qe((o.pageY-(n.top+window.pageYOffset))/n.height)}))},Wi=(t,e)=>{const o=e.keyCode;o>40||t.xy&&o<37||o<33||(e.preventDefault(),Ro(t.el,"move",t.getMove({x:o===39?.01:o===37?-.01:o===34?.05:o===33?-.05:o===35?1:o===36?-1:0,y:o===40?.01:o===38?-.01:0},!0)))};class No{constructor(e,o,n,a){const r=_a(`<div role="slider" tabindex="0" part="${o}" ${n}><div part="${o}-pointer"></div></div>`);e.appendChild(r.content.cloneNode(!0));const i=e.querySelector(`[part=${o}]`);i.addEventListener("mousedown",this),i.addEventListener("touchstart",this),i.addEventListener("keydown",this),this.el=i,this.xy=a,this.nodes=[i.firstChild,i]}set dragging(e){const o=e?document.addEventListener:document.removeEventListener;o(Me?"touchmove":"mousemove",this),o(Me?"touchend":"mouseup",this)}handleEvent(e){switch(e.type){case"mousedown":case"touchstart":if(e.preventDefault(),!Hi(e)||!Me&&e.button!=0)return;this.el.focus(),On(this,e),this.dragging=!0;break;case"mousemove":case"touchmove":e.preventDefault(),On(this,e);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":Wi(this,e);break}}style(e){e.forEach((o,n)=>{for(const a in o)this.nodes[n].style.setProperty(a,o[a])})}}class Gi extends No{constructor(e){super(e,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:e}){this.h=e,this.style([{left:`${e/360*100}%`,color:vo({h:e,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${q(e)}`)}getMove(e,o){return{h:o?qe(this.h+e.x*360,0,360):360*e.x}}}class Ki extends No{constructor(e){super(e,"saturation",'aria-label="Color"',!0)}update(e){this.hsva=e,this.style([{top:`${100-e.v}%`,left:`${e.s}%`,color:vo(e)},{"background-color":vo({h:e.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${q(e.s)}%, Brightness ${q(e.v)}%`)}getMove(e,o){return{s:o?qe(this.hsva.s+e.x*100,0,100):e.x*100,v:o?qe(this.hsva.v-e.y*100,0,100):Math.round(100-e.y*100)}}}const Ji=':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',Yi="[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}",Xi="[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}",bt=Symbol("same"),lo=Symbol("color"),Mn=Symbol("hsva"),so=Symbol("update"),Vn=Symbol("parts"),zt=Symbol("css"),Ot=Symbol("sliders");let Qi=class extends HTMLElement{static get observedAttributes(){return["color"]}get[zt](){return[Ji,Yi,Xi]}get[Ot](){return[Ki,Gi]}get color(){return this[lo]}set color(t){if(!this[bt](t)){const e=this.colorModel.toHsva(t);this[so](e),this[lo]=t}}constructor(){super();const t=_a(`<style>${this[zt].join("")}</style>`),e=this.attachShadow({mode:"open"});e.appendChild(t.content.cloneNode(!0)),e.addEventListener("move",this),this[Vn]=this[Ot].map(o=>new o(e))}connectedCallback(){if(this.hasOwnProperty("color")){const t=this.color;delete this.color,this.color=t}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(t,e,o){const n=this.colorModel.fromAttr(o);this[bt](n)||(this.color=n)}handleEvent(t){const e=this[Mn],o={...e,...t.detail};this[so](o);let n;!Ui(o,e)&&!this[bt](n=this.colorModel.fromHsva(o))&&(this[lo]=n,Ro(this,"color-changed",{value:n}))}[bt](t){return this.color&&this.colorModel.equal(t,this.color)}[so](t){this[Mn]=t,this[Vn].forEach(e=>e.update(t))}};class Zi extends No{constructor(e){super(e,"alpha",'aria-label="Alpha" aria-valuemin="0" aria-valuemax="1"',!1)}update(e){this.hsva=e;const o=io({...e,a:0}),n=io({...e,a:1}),a=e.a*100;this.style([{left:`${a}%`,color:io(e)},{"--gradient":`linear-gradient(90deg, ${o}, ${n}`}]);const r=q(a);this.el.setAttribute("aria-valuenow",`${r}`),this.el.setAttribute("aria-valuetext",`${r}%`)}getMove(e,o){return{a:o?qe(this.hsva.a+e.x):e.x}}}const el=`[part=alpha]{flex:0 0 24px}[part=alpha]::after{display:block;content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;background-image:var(--gradient);box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part^=alpha]{background-color:#fff;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><rect x="8" width="8" height="8"/><rect y="8" width="8" height="8"/></svg>')}[part=alpha-pointer]{top:50%}`;class tl extends Qi{get[zt](){return[...super[zt],el]}get[Ot](){return[...super[Ot],Zi]}}const ol={defaultColor:"rgba(0, 0, 0, 1)",toHsva:ji,fromHsva:Di,equal:Bi,fromAttr:t=>t};class nl extends tl{get colorModel(){return ol}}/**
* @license
* Copyright (c) 2017 - 2023 Vaadin Ltd.
* This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/function al(t){const e=[];for(;t;){if(t.nodeType===Node.DOCUMENT_NODE){e.push(t);break}if(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(t),t=t.host;continue}if(t.assignedSlot){t=t.assignedSlot;continue}t=t.parentNode}return e}const co={start:"top",end:"bottom"},fo={start:"left",end:"right"},Fn=new ResizeObserver(t=>{setTimeout(()=>{t.forEach(e=>{e.target.__overlay&&e.target.__overlay._updatePosition()})})}),rl=t=>class extends t{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=al(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,o){if(this.__removeUpdatePositionEventListeners(),o&&(o.__overlay=null,Fn.unobserve(o),e&&(this.__addUpdatePositionEventListeners(),o.__overlay=this,Fn.observe(o))),e){const n=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(a=>{this.__margins[a]=parseInt(n[a],10)})),this.setAttribute("dir",n.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),o=this.__shouldAlignStartVertically(e);this.style.justifyContent=o?"flex-start":"flex-end";const n=this.__isRTL,a=this.__shouldAlignStartHorizontally(e,n),r=!n&&a||n&&!a;this.style.alignItems=r?"flex-start":"flex-end";const i=this.getBoundingClientRect(),s=this.__calculatePositionInOneDimension(e,i,this.noVerticalOverlap,co,this,o),l=this.__calculatePositionInOneDimension(e,i,this.noHorizontalOverlap,fo,this,a);Object.assign(this.style,s,l),this.toggleAttribute("bottom-aligned",!o),this.toggleAttribute("top-aligned",o),this.toggleAttribute("end-aligned",!r),this.toggleAttribute("start-aligned",r)}__shouldAlignStartHorizontally(e,o){const n=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const a=Math.min(window.innerWidth,document.documentElement.clientWidth),r=!o&&this.horizontalAlign==="start"||o&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,n,a,this.__margins,r,this.noHorizontalOverlap,fo)}__shouldAlignStartVertically(e){const o=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const n=Math.min(window.innerHeight,document.documentElement.clientHeight),a=this.verticalAlign==="top";return this.__shouldAlignStart(e,o,n,this.__margins,a,this.noVerticalOverlap,co)}__shouldAlignStart(e,o,n,a,r,i,s){const l=n-e[i?s.end:s.start]-a[s.end],c=e[i?s.start:s.end]-a[s.start],d=r?l:c,m=d>(r?c:l)||d>o;return r===m}__adjustBottomProperty(e,o,n){let a;if(e===o.end){if(o.end===co.end){const r=Math.min(window.innerHeight,document.documentElement.clientHeight);if(n>r&&this.__oldViewportHeight){const i=this.__oldViewportHeight-r;a=n-i}this.__oldViewportHeight=r}if(o.end===fo.end){const r=Math.min(window.innerWidth,document.documentElement.clientWidth);if(n>r&&this.__oldViewportWidth){const i=this.__oldViewportWidth-r;a=n-i}this.__oldViewportWidth=r}}return a}__calculatePositionInOneDimension(e,o,n,a,r,i){const s=i?a.start:a.end,l=i?a.end:a.start,c=parseFloat(r.style[s]||getComputedStyle(r)[s]),d=this.__adjustBottomProperty(s,a,c),m=o[i?a.start:a.end]-e[n===i?a.end:a.start],h=d?`${d}px`:`${c+m*(i?-1:1)}px`;return{[s]:h,[l]:""}}};class il extends CustomEvent{constructor(e){super("color-picker-change",{detail:{value:e}})}}const ka=x`
  :host {
    --preview-size: 24px;
    --preview-color: rgba(0, 0, 0, 0);
  }

  .preview {
    --preview-bg-size: calc(var(--preview-size) / 2);
    --preview-bg-pos: calc(var(--preview-size) / 4);

    width: var(--preview-size);
    height: var(--preview-size);
    padding: 0;
    position: relative;
    overflow: hidden;
    background: none;
    border: solid 2px #888;
    border-radius: 4px;
    box-sizing: content-box;
  }

  .preview::before,
  .preview::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .preview::before {
    content: '';
    background: white;
    background-image: linear-gradient(45deg, #666 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #666 75%), linear-gradient(45deg, transparent 75%, #666 75%),
      linear-gradient(45deg, #666 25%, transparent 25%);
    background-size: var(--preview-bg-size) var(--preview-bg-size);
    background-position: 0 0, 0 0, calc(var(--preview-bg-pos) * -1) calc(var(--preview-bg-pos) * -1),
      var(--preview-bg-pos) var(--preview-bg-pos);
  }

  .preview::after {
    content: '';
    background-color: var(--preview-color);
  }
`;let ot=class extends N{constructor(){super(...arguments),this.commitValue=!1}static get styles(){return[ka,x`
        #toggle {
          display: block;
        }
      `]}update(t){super.update(t),t.has("value")&&this.overlay&&this.overlay.requestContentUpdate()}firstUpdated(){this.overlay=document.createElement("vaadin-dev-tools-color-picker-overlay"),this.overlay.renderer=this.renderOverlayContent.bind(this),this.overlay.owner=this,this.overlay.positionTarget=this.toggle,this.overlay.noVerticalOverlap=!0,this.overlay.addEventListener("vaadin-overlay-escape-press",this.handleOverlayEscape.bind(this)),this.overlay.addEventListener("vaadin-overlay-close",this.handleOverlayClose.bind(this)),this.append(this.overlay)}render(){const t=this.value||"rgba(0, 0, 0, 0)";return v` <button
      id="toggle"
      class="preview"
      style="--preview-color: ${t}"
      @click=${this.open}
    ></button>`}open(){this.commitValue=!1,this.overlay.opened=!0,this.overlay.style.zIndex="1000000";const t=this.overlay.shadowRoot.querySelector('[part="overlay"]');t.style.background="#333"}renderOverlayContent(t){const e=getComputedStyle(this.toggle,"::after").getPropertyValue("background-color");_e(v` <div>
        <vaadin-dev-tools-color-picker-overlay-content
          .value=${e}
          .presets=${this.presets}
          @color-changed=${this.handleColorChange.bind(this)}
        ></vaadin-dev-tools-color-picker-overlay-content>
      </div>`,t)}handleColorChange(t){this.commitValue=!0,this.dispatchEvent(new il(t.detail.value)),t.detail.close&&(this.overlay.opened=!1,this.handleOverlayClose())}handleOverlayEscape(){this.commitValue=!1}handleOverlayClose(){const t=this.commitValue?"color-picker-commit":"color-picker-cancel";this.dispatchEvent(new CustomEvent(t))}};u([w({})],ot.prototype,"value",void 0);u([w({})],ot.prototype,"presets",void 0);u([rt("#toggle")],ot.prototype,"toggle",void 0);ot=u([F("vaadin-dev-tools-color-picker")],ot);let Mt=class extends N{static get styles(){return[ka,x`
        :host {
          display: block;
          padding: 12px;
        }

        .picker::part(saturation),
        .picker::part(hue) {
          margin-bottom: 10px;
        }

        .picker::part(hue),
        .picker::part(alpha) {
          flex: 0 0 20px;
        }

        .picker::part(saturation),
        .picker::part(hue),
        .picker::part(alpha) {
          border-radius: 3px;
        }

        .picker::part(saturation-pointer),
        .picker::part(hue-pointer),
        .picker::part(alpha-pointer) {
          width: 20px;
          height: 20px;
        }

        .swatches {
          display: grid;
          grid-template-columns: repeat(6, var(--preview-size));
          grid-column-gap: 10px;
          grid-row-gap: 6px;
          margin-top: 16px;
        }
      `]}render(){return v` <div>
      <vaadin-dev-tools-rgba-string-color-picker
        class="picker"
        .color=${this.value}
        @color-changed=${this.handlePickerChange}
      ></vaadin-dev-tools-rgba-string-color-picker>
      ${this.renderSwatches()}
    </div>`}renderSwatches(){if(!this.presets||this.presets.length===0)return;const t=this.presets.map(e=>v` <button
        class="preview"
        style="--preview-color: ${e}"
        @click=${()=>this.selectPreset(e)}
      ></button>`);return v` <div class="swatches">${t}</div>`}handlePickerChange(t){this.dispatchEvent(new CustomEvent("color-changed",{detail:{value:t.detail.value}}))}selectPreset(t){this.dispatchEvent(new CustomEvent("color-changed",{detail:{value:t,close:!0}}))}};u([w({})],Mt.prototype,"value",void 0);u([w({})],Mt.prototype,"presets",void 0);Mt=u([F("vaadin-dev-tools-color-picker-overlay-content")],Mt);customElements.whenDefined("vaadin-overlay").then(()=>{const t=customElements.get("vaadin-overlay");class e extends rl(t){}customElements.define("vaadin-dev-tools-color-picker-overlay",e)});customElements.define("vaadin-dev-tools-rgba-string-color-picker",nl);let Dn=class extends G{constructor(){super(...arguments),this.presets=new Nt}static get styles(){return[G.styles,x`
        .editor-row {
          align-items: center;
        }

        .editor-row > .editor {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `]}update(t){t.has("propertyMetadata")&&(this.presets=new Nt(this.propertyMetadata)),super.update(t)}renderEditor(){var t;return v`
      <vaadin-dev-tools-color-picker
        .value=${this.value}
        .presets=${this.presets.values}
        @color-picker-change=${this.handleColorPickerChange}
        @color-picker-commit=${this.handleColorPickerCommit}
        @color-picker-cancel=${this.handleColorPickerCancel}
      ></vaadin-dev-tools-color-picker>
      <vaadin-dev-tools-theme-text-input
        .value=${this.value}
        .showClearButton=${((t=this.propertyValue)==null?void 0:t.modified)||!1}
        @change=${this.handleInputChange}
      ></vaadin-dev-tools-theme-text-input>
    `}handleInputChange(t){this.value=t.detail.value,this.dispatchChange(this.value)}handleColorPickerChange(t){this.value=t.detail.value}handleColorPickerCommit(){this.dispatchChange(this.value)}handleColorPickerCancel(){this.updateValueFromTheme()}dispatchChange(t){const e=this.presets.tryMapToPreset(t);super.dispatchChange(e)}updateValueFromTheme(){var t;super.updateValueFromTheme(),this.value=this.presets.tryMapToRawValue(((t=this.propertyValue)==null?void 0:t.value)||"")}};Dn=u([F("vaadin-dev-tools-theme-color-property-editor")],Dn);class ll extends CustomEvent{constructor(e){super("open-css",{detail:{element:e}})}}let Vt=class extends N{static get styles(){return x`
      .section .header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding: 0.4rem var(--theme-editor-section-horizontal-padding);
        color: var(--dev-tools-text-color-emphasis);
        background-color: rgba(0, 0, 0, 0.2);
      }

      .section .property-list .property-editor:not(:last-child) {
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
      }

      .section .header .open-css {
        all: initial;
        font-family: inherit;
        font-size: var(--dev-tools-font-size-small);
        line-height: 1;
        white-space: nowrap;
        background-color: rgba(255, 255, 255, 0.12);
        color: var(--dev-tools-text-color);
        font-weight: 600;
        padding: 0.25rem 0.375rem;
        border-radius: 0.25rem;
      }

      .section .header .open-css:hover {
        color: var(--dev-tools-text-color-emphasis);
      }
    `}render(){const t=this.metadata.elements.map(e=>this.renderSection(e));return v` <div>${t}</div> `}renderSection(t){const e=t.properties.map(o=>this.renderPropertyEditor(t,o));return v`
      <div class="section" data-testid=${t==null?void 0:t.displayName}>
        <div class="header">
          <span> ${t.displayName} </span>
          <button class="open-css" @click=${()=>this.handleOpenCss(t)}>Edit CSS</button>
        </div>
        <div class="property-list">${e}</div>
      </div>
    `}handleOpenCss(t){this.dispatchEvent(new ll(t))}renderPropertyEditor(t,e){let o;switch(e.editorType){case R.checkbox:o=pt`vaadin-dev-tools-theme-checkbox-property-editor`;break;case R.range:o=pt`vaadin-dev-tools-theme-range-property-editor`;break;case R.color:o=pt`vaadin-dev-tools-theme-color-property-editor`;break;default:o=pt`vaadin-dev-tools-theme-text-property-editor`}return mi` <${o}
          class="property-editor"
          .elementMetadata=${t}
          .propertyMetadata=${e}
          .theme=${this.theme}
          data-testid=${e.propertyName}
        >
        </${o}>`}};u([w({})],Vt.prototype,"metadata",void 0);u([w({})],Vt.prototype,"theme",void 0);Vt=u([F("vaadin-dev-tools-theme-property-list")],Vt);let Ft=class extends N{render(){return v`<div
      tabindex="-1"
      @mousemove=${this.onMouseMove}
      @click=${this.onClick}
      @keydown=${this.onKeyDown}
    ></div>`}onClick(t){const e=this.getTargetElement(t);this.dispatchEvent(new CustomEvent("shim-click",{detail:{target:e}}))}onMouseMove(t){const e=this.getTargetElement(t);this.dispatchEvent(new CustomEvent("shim-mousemove",{detail:{target:e}}))}onKeyDown(t){this.dispatchEvent(new CustomEvent("shim-keydown",{detail:{originalEvent:t}}))}getTargetElement(t){this.style.display="none";const e=document.elementFromPoint(t.clientX,t.clientY);return this.style.display="",e}};Ft.shadowRootOptions={...N.shadowRootOptions,delegatesFocus:!0};Ft.styles=[x`
      div {
        pointer-events: auto;
        background: rgba(255, 255, 255, 0);
        position: fixed;
        inset: 0px;
        z-index: 1000000;
      }
    `];Ft=u([F("vaadin-dev-tools-shim")],Ft);const Ea=x`
  .popup {
    width: auto;
    position: fixed;
    background-color: var(--dev-tools-background-color-active-blurred);
    color: var(--dev-tools-text-color-primary);
    padding: 0.1875rem 0.75rem 0.1875rem 1rem;
    background-clip: padding-box;
    border-radius: var(--dev-tools-border-radius);
    overflow: hidden;
    margin: 0.5rem;
    width: 30rem;
    max-width: calc(100% - 1rem);
    max-height: calc(100vh - 1rem);
    flex-shrink: 1;
    background-color: var(--dev-tools-background-color-active);
    color: var(--dev-tools-text-color);
    transition: var(--dev-tools-transition-duration);
    transform-origin: bottom right;
    display: flex;
    flex-direction: column;
    box-shadow: var(--dev-tools-box-shadow);
    outline: none;
  }
`,sl={resolve:t=>he(e=>e.classList.contains("cc-banner"),t)?document.querySelector("vaadin-cookie-consent"):void 0},cl={resolve:t=>{const e=he(o=>o.localName==="vaadin-login-overlay-wrapper",t);return e?e.__dataHost:void 0}},dl={resolve:t=>t.localName==="vaadin-dialog-overlay"?t.__dataHost:void 0},fl={resolve:t=>{const e=he(o=>o.localName==="vaadin-confirm-dialog-overlay",t);return e?e.__dataHost:void 0}},hl={resolve:t=>{const e=he(o=>o.localName==="vaadin-notification-card",t);return e?e.__dataHost:void 0}},ml={resolve:t=>t.localName!=="vaadin-menu-bar-item"?void 0:he(e=>e.localName==="vaadin-menu-bar",t)},jn=[sl,cl,dl,fl,hl,ml],pl={resolve:t=>he(e=>e.classList.contains("cc-banner"),t)},ul={resolve:t=>{var e;const o=he(n=>{var a;return((a=n.shadowRoot)==null?void 0:a.querySelector("[part=overlay]"))!=null},t);return(e=o==null?void 0:o.shadowRoot)==null?void 0:e.querySelector("[part=overlay]")}},bl={resolve:t=>{var e;const o=he(n=>n.localName==="vaadin-login-overlay-wrapper",t);return(e=o==null?void 0:o.shadowRoot)==null?void 0:e.querySelector("[part=card]")}},qn=[bl,pl,ul],he=function(t,e){return t(e)?e:e.parentNode&&e.parentNode instanceof HTMLElement?he(t,e.parentNode):void 0};class gl{resolveElement(e){for(const o in jn){let n=e;if((n=jn[o].resolve(e))!==void 0)return n}return e}}class vl{resolveElement(e){for(const o in qn){let n=e;if((n=qn[o].resolve(e))!==void 0)return n}return e}}const yl=new gl,wl=new vl;let be=class extends N{constructor(){super(),this.active=!1,this.components=[],this.selected=0,this.mouseMoveEvent=this.mouseMoveEvent.bind(this)}connectedCallback(){super.connectedCallback();const t=new CSSStyleSheet;t.replaceSync(`
    .vaadin-dev-tools-highlight-overlay {
      pointer-events: none;
      position: absolute;
      z-index: 10000;
      background: rgba(158,44,198,0.25);
    }`),document.adoptedStyleSheets=[...document.adoptedStyleSheets,t],this.overlayElement=document.createElement("div"),this.overlayElement.classList.add("vaadin-dev-tools-highlight-overlay"),this.addEventListener("mousemove",this.mouseMoveEvent)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousemove",this.mouseMoveEvent)}render(){var t;return this.active?(this.style.display="block",v`
      <vaadin-dev-tools-shim
        @shim-click=${this.shimClick}
        @shim-mousemove=${this.shimMove}
        @shim-keydown=${this.shimKeydown}
      ></vaadin-dev-tools-shim>
      <div class="window popup component-picker-info">${(t=this.options)==null?void 0:t.infoTemplate}</div>
      <div class="window popup component-picker-components-info">
        <div>
          ${this.components.map((e,o)=>v`<div class=${o===this.selected?"selected":""}>
                ${e.element.tagName.toLowerCase()}
              </div>`)}
        </div>
      </div>
    `):(this.style.display="none",null)}open(t){this.options=t,this.active=!0,this.dispatchEvent(new CustomEvent("component-picker-opened",{}))}close(){this.active=!1,this.dispatchEvent(new CustomEvent("component-picker-closed",{}))}update(t){if(super.update(t),(t.has("selected")||t.has("components"))&&this.highlight(this.components[this.selected]),t.has("active")){const e=t.get("active"),o=this.active;!e&&o?requestAnimationFrame(()=>this.shim.focus()):e&&!o&&this.highlight(void 0)}}mouseMoveEvent(t){var e;if(!this.active){this.style.display="none";return}const o=(e=this.shadowRoot)==null?void 0:e.querySelector(".component-picker-info");if(o){const n=o.getBoundingClientRect();t.x>n.x&&t.x<n.x+n.width&&t.y>n.y&&t.y<=n.y+n.height?o.style.opacity="0.05":o.style.opacity="1.0"}}shimKeydown(t){const e=t.detail.originalEvent;if(e.key==="Escape")this.close(),t.stopPropagation(),t.preventDefault();else if(e.key==="ArrowUp"){let o=this.selected-1;o<0&&(o=this.components.length-1),this.selected=o}else e.key==="ArrowDown"?this.selected=(this.selected+1)%this.components.length:e.key==="Enter"&&(this.pickSelectedComponent(),t.stopPropagation(),t.preventDefault())}shimMove(t){const e=yl.resolveElement(t.detail.target);this.components=bi(e),this.selected=this.components.length-1,this.components[this.selected].highlightElement=wl.resolveElement(t.detail.target)}shimClick(t){this.pickSelectedComponent()}pickSelectedComponent(){const t=this.components[this.selected];if(t&&this.options)try{this.options.pickCallback(t)}catch(e){console.error("Pick callback failed",e)}this.close()}highlight(t){let e=(t==null?void 0:t.highlightElement)??(t==null?void 0:t.element);if(this.highlighted!==e)if(e){const o=e.getBoundingClientRect(),n=getComputedStyle(e);this.overlayElement.style.top=`${o.top}px`,this.overlayElement.style.left=`${o.left}px`,this.overlayElement.style.width=`${o.width}px`,this.overlayElement.style.height=`${o.height}px`,this.overlayElement.style.borderRadius=n.borderRadius,document.body.append(this.overlayElement)}else this.overlayElement.remove();this.highlighted=e}};be.styles=[Ea,x`
      .component-picker-info {
        left: 1em;
        bottom: 1em;
      }

      .component-picker-components-info {
        right: 3em;
        bottom: 1em;
      }

      .component-picker-components-info .selected {
        font-weight: bold;
      }
    `];u([I()],be.prototype,"active",void 0);u([I()],be.prototype,"components",void 0);u([I()],be.prototype,"selected",void 0);u([rt("vaadin-dev-tools-shim")],be.prototype,"shim",void 0);be=u([F("vaadin-dev-tools-component-picker")],be);const xl=Object.freeze(Object.defineProperty({__proto__:null,get ComponentPicker(){return be}},Symbol.toStringTag,{value:"Module"}));class _l{constructor(){this.currentActiveComponent=null,this.currentActiveComponentMetaData=null,this.componentPicked=async(e,o)=>{await this.hideOverlay(),this.currentActiveComponent=e,this.currentActiveComponentMetaData=o},this.showOverlay=()=>{!this.currentActiveComponent||!this.currentActiveComponentMetaData||this.currentActiveComponentMetaData.openOverlay&&this.currentActiveComponentMetaData.openOverlay(this.currentActiveComponent)},this.hideOverlay=()=>{!this.currentActiveComponent||!this.currentActiveComponentMetaData||this.currentActiveComponentMetaData.hideOverlay&&this.currentActiveComponentMetaData.hideOverlay(this.currentActiveComponent)},this.reset=()=>{this.currentActiveComponent=null,this.currentActiveComponentMetaData=null}}}const we=new _l,bs=t=>{const e=t.element.$.comboBox,o=e.$.overlay;kl(t.element,e,o)},gs=t=>{const e=t.element,o=e.$.comboBox,n=o.$.overlay;El(e,o,n)},kl=(t,e,o)=>{t.opened=!0,o._storedModeless=o.modeless,o.modeless=!0,document._themeEditorDocClickListener=Sl(t,e),document.addEventListener("click",document._themeEditorDocClickListener),e.removeEventListener("focusout",e._boundOnFocusout)},El=(t,e,o)=>{t.opened=!1,!(!e||!o)&&(o.modeless=o._storedModeless,delete o._storedModeless,e.addEventListener("focusout",e._boundOnFocusout),document.removeEventListener("click",document._themeEditorDocClickListener),delete document._themeEditorDocClickListener)},Sl=(t,e)=>o=>{const n=o.target;n!=null&&(e.opened=!Cl(n,t))};function Cl(t,e){if(!t||!t.tagName)return!0;if(t.tagName.startsWith("VAADIN-DEV"))return!1;let o=t,n={nodeId:-1,uiId:-1,element:void 0};for(;o&&o.parentNode&&(n=uo(o),n.nodeId===-1);)o=o.parentElement?o.parentElement:o.parentNode.host;const a=uo(e);return!(n.nodeId!==-1&&a.nodeId===n.nodeId)}$o(x`
  .vaadin-theme-editor-highlight {
    outline: solid 2px #9e2cc6;
    outline-offset: 3px;
  }
`);let fe=class extends N{constructor(){super(...arguments),this.expanded=!1,this.themeEditorState=De.enabled,this.context=null,this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null,this.markedAsUsed=!1}static get styles(){return x`
      :host {
        animation: fade-in var(--dev-tools-transition-duration) ease-in;
        --theme-editor-section-horizontal-padding: 0.75rem;
        display: flex;
        flex-direction: column;
        max-height: 400px;
      }

      .notice {
        padding: var(--theme-editor-section-horizontal-padding);
      }

      .notice a {
        color: var(--dev-tools-text-color-emphasis);
      }

      .hint vaadin-icon {
        color: var(--dev-tools-green-color);
        font-size: var(--lumo-icon-size-m);
      }

      .hint {
        display: flex;
        align-items: center;
        gap: var(--theme-editor-section-horizontal-padding);
      }

      .header {
        flex: 0 0 auto;
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
      }

      .header .picker-row {
        padding: var(--theme-editor-section-horizontal-padding);
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
      }

      .picker {
        flex: 1 1 0;
        min-width: 0;
        display: flex;
        align-items: center;
      }

      .picker button {
        min-width: 0;
        display: inline-flex;
        align-items: center;
        padding: 0;
        line-height: 20px;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      .picker button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .picker svg,
      .picker .component-type {
        flex: 0 0 auto;
        margin-right: 4px;
      }

      .picker .instance-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #e5a2fce5;
      }

      .picker .instance-name-quote {
        color: #e5a2fce5;
      }

      .picker .no-selection {
        font-style: italic;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .property-list {
        flex: 1 1 auto;
        overflow-y: auto;
      }

      .link-button {
        all: initial;
        font-family: inherit;
        font-size: var(--dev-tools-font-size-small);
        line-height: 1;
        white-space: nowrap;
        color: inherit;
        font-weight: 600;
        text-decoration: underline;
      }

      .link-button:focus,
      .link-button:hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .icon-button {
        padding: 0;
        line-height: 0;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      .icon-button:disabled {
        opacity: 0.5;
      }

      .icon-button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }
    `}firstUpdated(){this.api=new Pi(this.connection),this.history=new zi(this.api),this.historyActions=this.history.allowedActions,this.undoRedoListener=t=>{var e,o;const n=t.key==="Z"||t.key==="z";n&&(t.ctrlKey||t.metaKey)&&t.shiftKey?(e=this.historyActions)!=null&&e.allowRedo&&this.handleRedo():n&&(t.ctrlKey||t.metaKey)&&(o=this.historyActions)!=null&&o.allowUndo&&this.handleUndo()},document.addEventListener("vaadin-theme-updated",()=>{ye.clear(),this.refreshTheme()}),document.addEventListener("keydown",this.undoRedoListener),this.dispatchEvent(new CustomEvent("before-open"))}update(t){var e,o;super.update(t),t.has("expanded")&&(this.expanded?(this.highlightElement((e=this.context)==null?void 0:e.component.element),we.showOverlay()):(we.hideOverlay(),this.removeElementHighlight((o=this.context)==null?void 0:o.component.element)))}disconnectedCallback(){var t;super.disconnectedCallback(),this.removeElementHighlight((t=this.context)==null?void 0:t.component.element),we.hideOverlay(),we.reset(),document.removeEventListener("keydown",this.undoRedoListener),this.dispatchEvent(new CustomEvent("after-close"))}render(){var t,e,o;return this.themeEditorState===De.missing_theme?this.renderMissingThemeNotice():v`
      <div class="header">
        <div class="picker-row">
          ${this.renderPicker()}
          <div class="actions">
            ${(t=this.context)!=null&&t.metadata?v` <vaadin-dev-tools-theme-scope-selector
                  .value=${this.context.scope}
                  .metadata=${this.context.metadata}
                  @scope-change=${this.handleScopeChange}
                ></vaadin-dev-tools-theme-scope-selector>`:null}
            <button
              class="icon-button"
              data-testid="undo"
              ?disabled=${!((e=this.historyActions)!=null&&e.allowUndo)}
              @click=${this.handleUndo}
            >
              ${_t.undo}
            </button>
            <button
              class="icon-button"
              data-testid="redo"
              ?disabled=${!((o=this.historyActions)!=null&&o.allowRedo)}
              @click=${this.handleRedo}
            >
              ${_t.redo}
            </button>
          </div>
        </div>
        ${this.renderLocalClassNameEditor()}
      </div>
      ${this.renderPropertyList()}
    `}renderMissingThemeNotice(){return v`
      <div class="notice">
        It looks like you have not set up an application theme yet. Theme editor requires an existing theme to work
        with. Please check our
        <a href="https://vaadin.com/docs/latest/styling/application-theme" target="_blank">documentation</a>
        on how to set up an application theme.
      </div>
    `}renderPropertyList(){if(!this.context)return null;if(!this.context.metadata){const t=this.context.component.element.localName;return v`
        <div class="notice">Styling <code>&lt;${t}&gt;</code> components is not supported at the moment.</div>
      `}if(this.context.scope===P.local&&!this.context.accessible){const t=this.context.metadata.displayName;return v`
        ${this.context.metadata.notAccessibleDescription&&this.context.scope===P.local?v`<div class="notice hint" style="padding-bottom: 0;">
              <vaadin-icon icon="vaadin:lightbulb"></vaadin-icon>
              <div>${this.context.metadata.notAccessibleDescription}</div>
            </div>`:""}
        <div class="notice">
          The selected ${t} cannot be styled locally. Currently, Theme Editor only supports styling
          instances that are assigned to a local variable, like so:
          <pre><code>Button saveButton = new Button("Save");</code></pre>
          If you want to modify the code so that it satisfies this requirement,
          <button class="link-button" @click=${this.handleShowComponent}>click here</button>
          to open it in your IDE. Alternatively you can choose to style all ${t}s by selecting "Global" from
          the scope dropdown above.
        </div>
      `}return v` ${this.context.metadata.description&&this.context.scope===P.local?v`<div class="notice hint">
            <vaadin-icon icon="vaadin:lightbulb"></vaadin-icon>
            <div>${this.context.metadata.description}</div>
          </div>`:""}
      <vaadin-dev-tools-theme-property-list
        class="property-list"
        .metadata=${this.context.metadata}
        .theme=${this.effectiveTheme}
        @theme-property-value-change=${this.handlePropertyChange}
        @open-css=${this.handleOpenCss}
      ></vaadin-dev-tools-theme-property-list>`}handleShowComponent(){if(!this.context)return;const t=this.context.component,e={nodeId:t.nodeId,uiId:t.uiId};this.connection.sendShowComponentCreateLocation(e)}async handleOpenCss(t){if(!this.context)return;await this.ensureLocalClassName();const e={themeScope:this.context.scope,localClassName:this.context.localClassName},o=je(t.detail.element,e);await this.api.openCss(o)}renderPicker(){var t;let e;if((t=this.context)!=null&&t.metadata){const o=this.context.scope===P.local?this.context.metadata.displayName:`All ${this.context.metadata.displayName}s`,n=v`<span class="component-type">${o}</span>`,a=this.context.scope===P.local?Ni(this.context.component):null,r=a?v` <span class="instance-name-quote">"</span><span class="instance-name">${a}</span
            ><span class="instance-name-quote">"</span>`:null;e=v`${n} ${r}`}else e=v`<span class="no-selection">Pick an element to get started</span>`;return v`
      <div class="picker">
        <button @click=${this.pickComponent}>${_t.crosshair} ${e}</button>
      </div>
    `}renderLocalClassNameEditor(){var t;const e=((t=this.context)==null?void 0:t.scope)===P.local&&this.context.accessible;if(!this.context||!e)return null;const o=this.context.localClassName||this.context.suggestedClassName;return v` <vaadin-dev-tools-theme-class-name-editor
      .className=${o}
      @class-name-change=${this.handleClassNameChange}
    >
    </vaadin-dev-tools-theme-class-name-editor>`}async handleClassNameChange(t){if(!this.context)return;const e=this.context.localClassName,o=t.detail.value;if(e){const n=this.context.component.element;this.context.localClassName=o;const a=await this.api.setLocalClassName(this.context.component,o);this.historyActions=this.history.push(a.requestId,()=>ye.previewLocalClassName(n,o),()=>ye.previewLocalClassName(n,e))}else this.context={...this.context,suggestedClassName:o}}async pickComponent(){var t;we.hideOverlay(),this.removeElementHighlight((t=this.context)==null?void 0:t.component.element),this.pickerProvider().open({infoTemplate:v`
        <div>
          <h3>Locate the component to style</h3>
          <p>Use the mouse cursor to highlight components in the UI.</p>
          <p>Use arrow down/up to cycle through and highlight specific components under the cursor.</p>
          <p>Click the primary mouse button to select the component.</p>
        </div>
      `,pickCallback:async e=>{var o;const n=await Ti.getMetadata(e);if(!n){this.context={component:e,scope:((o=this.context)==null?void 0:o.scope)||P.local},this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null;return}await we.componentPicked(e,n),this.highlightElement(e.element),this.refreshComponentAndTheme(e,n),we.showOverlay()}})}handleScopeChange(t){this.context&&this.refreshTheme({...this.context,scope:t.detail.value})}async handlePropertyChange(t){if(!this.context||!this.baseTheme||!this.editedTheme)return;const{element:e,property:o,value:n}=t.detail;this.editedTheme.updatePropertyValue(e.selector,o.propertyName,n,!0),this.effectiveTheme=ue.combine(this.baseTheme,this.editedTheme),await this.ensureLocalClassName();const a={themeScope:this.context.scope,localClassName:this.context.localClassName},r=Li(e,a,o.propertyName,n);try{const i=await this.api.setCssRules([r]);this.historyActions=this.history.push(i.requestId);const s=$i(r);ye.add(s)}catch(i){console.error("Failed to update property value",i)}}async handleUndo(){this.historyActions=await this.history.undo(),await this.refreshComponentAndTheme()}async handleRedo(){this.historyActions=await this.history.redo(),await this.refreshComponentAndTheme()}async ensureLocalClassName(){if(!this.context||this.context.scope===P.global||this.context.localClassName)return;if(!this.context.localClassName&&!this.context.suggestedClassName)throw new Error("Cannot assign local class name for the component because it does not have a suggested class name");const t=this.context.component.element,e=this.context.suggestedClassName;this.context.localClassName=e;const o=await this.api.setLocalClassName(this.context.component,e);this.historyActions=this.history.push(o.requestId,()=>ye.previewLocalClassName(t,e),()=>ye.previewLocalClassName(t))}async refreshComponentAndTheme(t,e){var o,n,a;if(t=t||((o=this.context)==null?void 0:o.component),e=e||((n=this.context)==null?void 0:n.metadata),!t||!e)return;const r=await this.api.loadComponentMetadata(t);this.markedAsUsed||this.api.markAsUsed().then(()=>{this.markedAsUsed=!0}),ye.previewLocalClassName(t.element,r.className),await this.refreshTheme({scope:((a=this.context)==null?void 0:a.scope)||P.local,metadata:e,component:t,localClassName:r.className,suggestedClassName:r.suggestedClassName,accessible:r.accessible})}async refreshTheme(t){const e=t||this.context;if(!e||!e.metadata)return;if(e.scope===P.local&&!e.accessible){this.context=e,this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null;return}let o=new ue(e.metadata);if(!(e.scope===P.local&&!e.localClassName)){const a={themeScope:e.scope,localClassName:e.localClassName},r=e.metadata.elements.map(s=>je(s,a)),i=await this.api.loadRules(r);o=ue.fromServerRules(e.metadata,a,i.rules)}const n=await Ri(e.metadata);this.context=e,this.baseTheme=n,this.editedTheme=o,this.effectiveTheme=ue.combine(n,this.editedTheme)}highlightElement(t){t&&t.classList.add("vaadin-theme-editor-highlight")}removeElementHighlight(t){t&&t.classList.remove("vaadin-theme-editor-highlight")}};u([w({})],fe.prototype,"expanded",void 0);u([w({})],fe.prototype,"themeEditorState",void 0);u([w({})],fe.prototype,"pickerProvider",void 0);u([w({})],fe.prototype,"connection",void 0);u([I()],fe.prototype,"historyActions",void 0);u([I()],fe.prototype,"context",void 0);u([I()],fe.prototype,"effectiveTheme",void 0);fe=u([F("vaadin-dev-tools-theme-editor")],fe);const Io=1e3,Po=(t,e)=>{const o=Array.from(t.querySelectorAll(e.join(", "))),n=Array.from(t.querySelectorAll("*")).filter(a=>a.shadowRoot).flatMap(a=>Po(a.shadowRoot,e));return[...o,...n]};let Un=!1;const nt=(t,e)=>{Un||(window.addEventListener("message",a=>{a.data==="validate-license"&&window.location.reload()},!1),Un=!0);const o=t._overlayElement;if(o){if(o.shadowRoot){const a=o.shadowRoot.querySelector("slot:not([name])");if(a&&a.assignedElements().length>0){nt(a.assignedElements()[0],e);return}}nt(o,e);return}const n=e.messageHtml?e.messageHtml:`${e.message} <p>Component: ${e.product.name} ${e.product.version}</p>`.replace(/https:([^ ]*)/g,"<a href='https:$1'>https:$1</a>");t.isConnected&&(t.outerHTML=`<no-license style="display:flex;align-items:center;text-align:center;justify-content:center;"><div>${n}</div></no-license>`)},Ke={},Bn={},Ue={},Sa={},re=t=>`${t.name}_${t.version}`,Hn=t=>{const{cvdlName:e,version:o}=t.constructor,n={name:e,version:o},a=t.tagName.toLowerCase();Ke[e]=Ke[e]??[],Ke[e].push(a);const r=Ue[re(n)];r&&setTimeout(()=>nt(t,r),Io),Ue[re(n)]||Sa[re(n)]||Bn[re(n)]||(Bn[re(n)]=!0,window.Vaadin.devTools.checkLicense(n))},Al=t=>{Sa[re(t)]=!0,console.debug("License check ok for",t)},Ca=t=>{const e=t.product.name;Ue[re(t.product)]=t,console.error("License check failed for",e);const o=Ke[e];(o==null?void 0:o.length)>0&&Po(document,o).forEach(n=>{setTimeout(()=>nt(n,Ue[re(t.product)]),Io)})},Tl=t=>{const e=t.message,o=t.product.name;t.messageHtml=`No license found. <a target=_blank onclick="javascript:window.open(this.href);return false;" href="${e}">Go here to start a trial or retrieve your license.</a>`,Ue[re(t.product)]=t,console.error("No license found when checking",o);const n=Ke[o];(n==null?void 0:n.length)>0&&Po(document,n).forEach(a=>{setTimeout(()=>nt(a,Ue[re(t.product)]),Io)})},Ll=()=>{window.Vaadin.devTools.createdCvdlElements.forEach(t=>{Hn(t)}),window.Vaadin.devTools.createdCvdlElements={push:t=>{Hn(t)}}};var S;(function(t){t.ACTIVE="active",t.INACTIVE="inactive",t.UNAVAILABLE="unavailable",t.ERROR="error"})(S||(S={}));class Ve extends Object{constructor(e){super(),this.status=S.UNAVAILABLE,e&&(this.webSocket=new WebSocket(e),this.webSocket.onmessage=o=>this.handleMessage(o),this.webSocket.onerror=o=>this.handleError(o),this.webSocket.onclose=o=>{this.status!==S.ERROR&&this.setStatus(S.UNAVAILABLE),this.webSocket=void 0}),setInterval(()=>{this.webSocket&&self.status!==S.ERROR&&this.status!==S.UNAVAILABLE&&this.webSocket.send("")},Ve.HEARTBEAT_INTERVAL)}onHandshake(){}onReload(){}onUpdate(e,o){}onConnectionError(e){}onStatusChange(e){}onMessage(e){console.error("Unknown message received from the live reload server:",e)}handleMessage(e){let o;if(e.data!=="X"){try{o=JSON.parse(e.data)}catch(n){this.handleError(`[${n.name}: ${n.message}`);return}o.command==="hello"?(this.setStatus(S.ACTIVE),this.onHandshake()):o.command==="reload"?this.status===S.ACTIVE&&this.onReload():o.command==="update"?this.status===S.ACTIVE&&this.onUpdate(o.path,o.content):o.command==="license-check-ok"?Al(o.data):o.command==="license-check-failed"?Ca(o.data):o.command==="license-check-nokey"?Tl(o.data):this.onMessage(o)}}handleError(e){console.error(e),this.setStatus(S.ERROR),e instanceof Event&&this.webSocket?this.onConnectionError(`Error in WebSocket connection to ${this.webSocket.url}`):this.onConnectionError(e)}setActive(e){!e&&this.status===S.ACTIVE?this.setStatus(S.INACTIVE):e&&this.status===S.INACTIVE&&this.setStatus(S.ACTIVE)}setStatus(e){this.status!==e&&(this.status=e,this.onStatusChange(e))}send(e,o){const n=JSON.stringify({command:e,data:o});this.webSocket?this.webSocket.readyState!==WebSocket.OPEN?this.webSocket.addEventListener("open",()=>this.webSocket.send(n)):this.webSocket.send(n):console.error(`Unable to send message ${e}. No websocket is available`)}setFeature(e,o){this.send("setFeature",{featureId:e,enabled:o})}sendTelemetry(e){this.send("reportTelemetry",{browserData:e})}sendLicenseCheck(e){this.send("checkLicense",e)}sendShowComponentCreateLocation(e){this.send("showComponentCreateLocation",e)}sendShowComponentAttachLocation(e){this.send("showComponentAttachLocation",e)}}Ve.HEARTBEAT_INTERVAL=18e4;let wo=class extends N{createRenderRoot(){return this}activate(){this._devTools.unreadErrors=!1,this.updateComplete.then(()=>{const t=this.renderRoot.querySelector(".message-tray .message:last-child");t&&t.scrollIntoView()})}render(){return v`<div class="message-tray">
      ${this._devTools.messages.map(t=>this._devTools.renderMessage(t))}
    </div>`}};u([w({type:Object})],wo.prototype,"_devTools",void 0);wo=u([F("vaadin-dev-tools-log")],wo);var $l=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,o=[],n=0;n<t.rangeCount;n++)o.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||o.forEach(function(a){t.addRange(a)}),e&&e.focus()}},Wn={"text/plain":"Text","text/html":"Url",default:"Text"},Rl="Copy to clipboard: #{key}, Enter";function Nl(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function Il(t,e){var o,n,a,r,i,s,l=!1;e||(e={}),o=e.debug||!1;try{a=$l(),r=document.createRange(),i=document.getSelection(),s=document.createElement("span"),s.textContent=t,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(d){if(d.stopPropagation(),e.format)if(d.preventDefault(),typeof d.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var m=Wn[e.format]||Wn.default;window.clipboardData.setData(m,t)}else d.clipboardData.clearData(),d.clipboardData.setData(e.format,t);e.onCopy&&(d.preventDefault(),e.onCopy(d.clipboardData))}),document.body.appendChild(s),r.selectNodeContents(s),i.addRange(r);var c=document.execCommand("copy");if(!c)throw new Error("copy command was unsuccessful");l=!0}catch(d){o&&console.error("unable to copy using execCommand: ",d),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),l=!0}catch(m){o&&console.error("unable to copy using clipboardData: ",m),o&&console.error("falling back to prompt"),n=Nl("message"in e?e.message:Rl),window.prompt(n,t)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(r):i.removeAllRanges()),s&&document.body.removeChild(s),a()}return l}let Dt=class extends N{constructor(){super(...arguments),this.serverInfo={versions:[]}}createRenderRoot(){return this}render(){return v` <div class="info-tray">
      <button class="button copy" @click=${this.copyInfoToClipboard}>Copy</button>
      <dl>
        ${this.serverInfo.versions.map(t=>v`
            <dt>${t.name}</dt>
            <dd>${t.version}</dd>
          `)}
        <dt>Browser</dt>
        <dd>${navigator.userAgent}</dd>
        <dt>
          Live reload
          <label class="switch">
            <input
              id="toggle"
              type="checkbox"
              ?disabled=${this._devTools.liveReloadDisabled||(this._devTools.frontendStatus===S.UNAVAILABLE||this._devTools.frontendStatus===S.ERROR)&&(this._devTools.javaStatus===S.UNAVAILABLE||this._devTools.javaStatus===S.ERROR)}
              ?checked="${this._devTools.frontendStatus===S.ACTIVE||this._devTools.javaStatus===S.ACTIVE}"
              @change=${t=>this._devTools.setActive(t.target.checked)}
            />
            <span class="slider"></span>
          </label>
        </dt>
        <dd
          class="live-reload-status"
          style="--status-color: ${this._devTools.getStatusColor(this._devTools.javaStatus)}"
        >
          Java ${this._devTools.javaStatus}
          ${this._devTools.backend?`(${E.BACKEND_DISPLAY_NAME[this._devTools.backend]})`:""}
        </dd>
        <dd
          class="live-reload-status"
          style="--status-color: ${this._devTools.getStatusColor(this._devTools.frontendStatus)}"
        >
          Front end ${this._devTools.frontendStatus}
        </dd>
      </dl>
    </div>`}handleMessage(t){return(t==null?void 0:t.command)==="serverInfo"?(this.serverInfo=t.data,!0):!1}copyInfoToClipboard(){const t=this.renderRoot.querySelectorAll(".info-tray dt, .info-tray dd"),e=Array.from(t).map(o=>(o.localName==="dd"?": ":`
`)+o.textContent.trim()).join("").replace(/^\n/,"");Il(e),this._devTools.showNotification(B.INFORMATION,"Environment information copied to clipboard",void 0,void 0,"versionInfoCopied")}};u([w({type:Object})],Dt.prototype,"_devTools",void 0);u([I()],Dt.prototype,"serverInfo",void 0);Dt=u([F("vaadin-dev-tools-info")],Dt);var A,B;(function(t){t.LOG="log",t.INFORMATION="information",t.WARNING="warning",t.ERROR="error"})(B||(B={}));let E=A=class extends N{static get styles(){return[x`
        :host {
          --dev-tools-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            'Helvetica Neue', sans-serif;
          --dev-tools-font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
            monospace;

          --dev-tools-font-size: 0.8125rem;
          --dev-tools-font-size-small: 0.75rem;

          --dev-tools-text-color: rgba(255, 255, 255, 0.8);
          --dev-tools-text-color-secondary: rgba(255, 255, 255, 0.65);
          --dev-tools-text-color-emphasis: rgba(255, 255, 255, 0.95);
          --dev-tools-text-color-active: rgba(255, 255, 255, 1);

          --dev-tools-background-color-inactive: rgba(45, 45, 45, 0.25);
          --dev-tools-background-color-active: rgba(45, 45, 45, 0.98);
          --dev-tools-background-color-active-blurred: rgba(45, 45, 45, 0.85);

          --dev-tools-border-radius: 0.5rem;
          --dev-tools-box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.4);

          --dev-tools-blue-hsl: 206, 100%, 70%;
          --dev-tools-blue-color: hsl(var(--dev-tools-blue-hsl));
          --dev-tools-green-hsl: 145, 80%, 42%;
          --dev-tools-green-color: hsl(var(--dev-tools-green-hsl));
          --dev-tools-grey-hsl: 0, 0%, 50%;
          --dev-tools-grey-color: hsl(var(--dev-tools-grey-hsl));
          --dev-tools-yellow-hsl: 38, 98%, 64%;
          --dev-tools-yellow-color: hsl(var(--dev-tools-yellow-hsl));
          --dev-tools-red-hsl: 355, 100%, 68%;
          --dev-tools-red-color: hsl(var(--dev-tools-red-hsl));

          /* Needs to be in ms, used in JavaScript as well */
          --dev-tools-transition-duration: 180ms;

          all: initial;

          direction: ltr;
          cursor: default;
          font: normal 400 var(--dev-tools-font-size) / 1.125rem var(--dev-tools-font-family);
          color: var(--dev-tools-text-color);
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          color-scheme: dark;

          position: fixed;
          z-index: 20000;
          pointer-events: none;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
        }

        .dev-tools {
          pointer-events: auto;
          display: flex;
          align-items: center;
          position: fixed;
          z-index: inherit;
          right: 0.5rem;
          bottom: 0.5rem;
          min-width: 1.75rem;
          height: 1.75rem;
          max-width: 1.75rem;
          border-radius: 0.5rem;
          padding: 0.375rem;
          box-sizing: border-box;
          background-color: var(--dev-tools-background-color-inactive);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
          color: var(--dev-tools-text-color);
          transition: var(--dev-tools-transition-duration);
          white-space: nowrap;
          line-height: 1rem;
        }

        .dev-tools:hover,
        .dev-tools.active {
          background-color: var(--dev-tools-background-color-active);
          box-shadow: var(--dev-tools-box-shadow);
        }

        .dev-tools.active {
          max-width: calc(100% - 1rem);
        }

        .dev-tools .dev-tools-icon {
          flex: none;
          pointer-events: none;
          display: inline-block;
          width: 1rem;
          height: 1rem;
          fill: #fff;
          transition: var(--dev-tools-transition-duration);
          margin: 0;
        }

        .dev-tools.active .dev-tools-icon {
          opacity: 0;
          position: absolute;
          transform: scale(0.5);
        }

        .dev-tools .status-blip {
          flex: none;
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          z-index: 20001;
          background: var(--dev-tools-grey-color);
          position: absolute;
          top: -1px;
          right: -1px;
        }

        .dev-tools .status-description {
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 0.25rem;
        }

        .dev-tools.error {
          background-color: hsla(var(--dev-tools-red-hsl), 0.15);
          animation: bounce 0.5s;
          animation-iteration-count: 2;
        }

        .switch {
          display: inline-flex;
          align-items: center;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
          position: absolute;
        }

        .switch .slider {
          display: block;
          flex: none;
          width: 28px;
          height: 18px;
          border-radius: 9px;
          background-color: rgba(255, 255, 255, 0.3);
          transition: var(--dev-tools-transition-duration);
          margin-right: 0.5rem;
        }

        .switch:focus-within .slider,
        .switch .slider:hover {
          background-color: rgba(255, 255, 255, 0.35);
          transition: none;
        }

        .switch input:focus-visible ~ .slider {
          box-shadow: 0 0 0 2px var(--dev-tools-background-color-active), 0 0 0 4px var(--dev-tools-blue-color);
        }

        .switch .slider::before {
          content: '';
          display: block;
          margin: 2px;
          width: 14px;
          height: 14px;
          background-color: #fff;
          transition: var(--dev-tools-transition-duration);
          border-radius: 50%;
        }

        .switch input:checked + .slider {
          background-color: var(--dev-tools-green-color);
        }

        .switch input:checked + .slider::before {
          transform: translateX(10px);
        }

        .switch input:disabled + .slider::before {
          background-color: var(--dev-tools-grey-color);
        }

        .window.hidden {
          opacity: 0;
          transform: scale(0);
          position: absolute;
        }

        .window.visible {
          transform: none;
          opacity: 1;
          pointer-events: auto;
        }

        .window.visible ~ .dev-tools {
          opacity: 0;
          pointer-events: none;
        }

        .window.visible ~ .dev-tools .dev-tools-icon,
        .window.visible ~ .dev-tools .status-blip {
          transition: none;
          opacity: 0;
        }

        .window {
          border-radius: var(--dev-tools-border-radius);
          overflow: auto;
          margin: 0.5rem;
          min-width: 30rem;
          max-width: calc(100% - 1rem);
          max-height: calc(100vh - 1rem);
          flex-shrink: 1;
          background-color: var(--dev-tools-background-color-active);
          color: var(--dev-tools-text-color);
          transition: var(--dev-tools-transition-duration);
          transform-origin: bottom right;
          display: flex;
          flex-direction: column;
          box-shadow: var(--dev-tools-box-shadow);
          outline: none;
        }

        .window-toolbar {
          display: flex;
          flex: none;
          align-items: center;
          padding: 0.375rem;
          white-space: nowrap;
          order: 1;
          background-color: rgba(0, 0, 0, 0.2);
          gap: 0.5rem;
        }

        .tab {
          color: var(--dev-tools-text-color-secondary);
          font: inherit;
          font-size: var(--dev-tools-font-size-small);
          font-weight: 500;
          line-height: 1;
          padding: 0.25rem 0.375rem;
          background: none;
          border: none;
          margin: 0;
          border-radius: 0.25rem;
          transition: var(--dev-tools-transition-duration);
        }

        .tab:hover,
        .tab.active {
          color: var(--dev-tools-text-color-active);
        }

        .tab.active {
          background-color: rgba(255, 255, 255, 0.12);
        }

        .tab.unreadErrors::after {
          content: '•';
          color: hsl(var(--dev-tools-red-hsl));
          font-size: 1.5rem;
          position: absolute;
          transform: translate(0, -50%);
        }

        .ahreflike {
          font-weight: 500;
          color: var(--dev-tools-text-color-secondary);
          text-decoration: underline;
          cursor: pointer;
        }

        .ahreflike:hover {
          color: var(--dev-tools-text-color-emphasis);
        }

        .button {
          all: initial;
          font-family: inherit;
          font-size: var(--dev-tools-font-size-small);
          line-height: 1;
          white-space: nowrap;
          background-color: rgba(0, 0, 0, 0.2);
          color: inherit;
          font-weight: 600;
          padding: 0.25rem 0.375rem;
          border-radius: 0.25rem;
        }

        .button:focus,
        .button:hover {
          color: var(--dev-tools-text-color-emphasis);
        }

        .minimize-button {
          flex: none;
          width: 1rem;
          height: 1rem;
          color: inherit;
          background-color: transparent;
          border: 0;
          padding: 0;
          margin: 0 0 0 auto;
          opacity: 0.8;
        }

        .minimize-button:hover {
          opacity: 1;
        }

        .minimize-button svg {
          max-width: 100%;
        }

        .message.information {
          --dev-tools-notification-color: var(--dev-tools-blue-color);
        }

        .message.warning {
          --dev-tools-notification-color: var(--dev-tools-yellow-color);
        }

        .message.error {
          --dev-tools-notification-color: var(--dev-tools-red-color);
        }

        .message {
          display: flex;
          padding: 0.1875rem 0.75rem 0.1875rem 2rem;
          background-clip: padding-box;
        }

        .message.log {
          padding-left: 0.75rem;
        }

        .message-content {
          margin-right: 0.5rem;
          -webkit-user-select: text;
          -moz-user-select: text;
          user-select: text;
        }

        .message-heading {
          position: relative;
          display: flex;
          align-items: center;
          margin: 0.125rem 0;
        }

        .message.log {
          color: var(--dev-tools-text-color-secondary);
        }

        .message:not(.log) .message-heading {
          font-weight: 500;
        }

        .message.has-details .message-heading {
          color: var(--dev-tools-text-color-emphasis);
          font-weight: 600;
        }

        .message-heading::before {
          position: absolute;
          margin-left: -1.5rem;
          display: inline-block;
          text-align: center;
          font-size: 0.875em;
          font-weight: 600;
          line-height: calc(1.25em - 2px);
          width: 14px;
          height: 14px;
          box-sizing: border-box;
          border: 1px solid transparent;
          border-radius: 50%;
        }

        .message.information .message-heading::before {
          content: 'i';
          border-color: currentColor;
          color: var(--dev-tools-notification-color);
        }

        .message.warning .message-heading::before,
        .message.error .message-heading::before {
          content: '!';
          color: var(--dev-tools-background-color-active);
          background-color: var(--dev-tools-notification-color);
        }

        .features-tray {
          padding: 0.75rem;
          flex: auto;
          overflow: auto;
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          user-select: text;
        }

        .features-tray p {
          margin-top: 0;
          color: var(--dev-tools-text-color-secondary);
        }

        .features-tray .feature {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 0.5em;
        }

        .message .message-details {
          font-weight: 400;
          color: var(--dev-tools-text-color-secondary);
          margin: 0.25rem 0;
        }

        .message .message-details[hidden] {
          display: none;
        }

        .message .message-details p {
          display: inline;
          margin: 0;
          margin-right: 0.375em;
          word-break: break-word;
        }

        .message .persist {
          color: var(--dev-tools-text-color-secondary);
          white-space: nowrap;
          margin: 0.375rem 0;
          display: flex;
          align-items: center;
          position: relative;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        .message .persist::before {
          content: '';
          width: 1em;
          height: 1em;
          border-radius: 0.2em;
          margin-right: 0.375em;
          background-color: rgba(255, 255, 255, 0.3);
        }

        .message .persist:hover::before {
          background-color: rgba(255, 255, 255, 0.4);
        }

        .message .persist.on::before {
          background-color: rgba(255, 255, 255, 0.9);
        }

        .message .persist.on::after {
          content: '';
          order: -1;
          position: absolute;
          width: 0.75em;
          height: 0.25em;
          border: 2px solid var(--dev-tools-background-color-active);
          border-width: 0 0 2px 2px;
          transform: translate(0.05em, -0.05em) rotate(-45deg) scale(0.8, 0.9);
        }

        .message .dismiss-message {
          font-weight: 600;
          align-self: stretch;
          display: flex;
          align-items: center;
          padding: 0 0.25rem;
          margin-left: 0.5rem;
          color: var(--dev-tools-text-color-secondary);
        }

        .message .dismiss-message:hover {
          color: var(--dev-tools-text-color);
        }

        .notification-tray {
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
          margin: 0.5rem;
          flex: none;
        }

        .window.hidden + .notification-tray {
          margin-bottom: 3rem;
        }

        .notification-tray .message {
          pointer-events: auto;
          background-color: var(--dev-tools-background-color-active);
          color: var(--dev-tools-text-color);
          max-width: 30rem;
          box-sizing: border-box;
          border-radius: var(--dev-tools-border-radius);
          margin-top: 0.5rem;
          transition: var(--dev-tools-transition-duration);
          transform-origin: bottom right;
          animation: slideIn var(--dev-tools-transition-duration);
          box-shadow: var(--dev-tools-box-shadow);
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }

        .notification-tray .message.animate-out {
          animation: slideOut forwards var(--dev-tools-transition-duration);
        }

        .notification-tray .message .message-details {
          max-height: 10em;
          overflow: hidden;
        }

        .message-tray {
          flex: auto;
          overflow: auto;
          max-height: 20rem;
          user-select: text;
        }

        .message-tray .message {
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          padding-left: 2.25rem;
        }

        .message-tray .message.warning {
          background-color: hsla(var(--dev-tools-yellow-hsl), 0.09);
        }

        .message-tray .message.error {
          background-color: hsla(var(--dev-tools-red-hsl), 0.09);
        }

        .message-tray .message.error .message-heading {
          color: hsl(var(--dev-tools-red-hsl));
        }

        .message-tray .message.warning .message-heading {
          color: hsl(var(--dev-tools-yellow-hsl));
        }

        .message-tray .message + .message {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .message-tray .dismiss-message,
        .message-tray .persist {
          display: none;
        }

        .info-tray {
          padding: 0.75rem;
          position: relative;
          flex: auto;
          overflow: auto;
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          user-select: text;
        }

        .info-tray dl {
          margin: 0;
          display: grid;
          grid-template-columns: max-content 1fr;
          column-gap: 0.75rem;
          position: relative;
        }

        .info-tray dt {
          grid-column: 1;
          color: var(--dev-tools-text-color-emphasis);
        }

        .info-tray dt:not(:first-child)::before {
          content: '';
          width: 100%;
          position: absolute;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.1);
          margin-top: -0.375rem;
        }

        .info-tray dd {
          grid-column: 2;
          margin: 0;
        }

        .info-tray :is(dt, dd):not(:last-child) {
          margin-bottom: 0.75rem;
        }

        .info-tray dd + dd {
          margin-top: -0.5rem;
        }

        .info-tray .live-reload-status::before {
          content: '•';
          color: var(--status-color);
          width: 0.75rem;
          display: inline-block;
          font-size: 1rem;
          line-height: 0.5rem;
        }

        .info-tray .copy {
          position: fixed;
          z-index: 1;
          top: 0.5rem;
          right: 0.5rem;
        }

        .info-tray .switch {
          vertical-align: -4px;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0%);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
        }

        @keyframes bounce {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.5);
            background-color: hsla(var(--dev-tools-red-hsl), 1);
          }
          100% {
            transform: scale(1);
          }
        }

        @supports (backdrop-filter: blur(1px)) {
          .dev-tools,
          .window,
          .notification-tray .message {
            backdrop-filter: blur(8px);
          }
          .dev-tools:hover,
          .dev-tools.active,
          .window,
          .notification-tray .message {
            background-color: var(--dev-tools-background-color-active-blurred);
          }
        }
      `,Ea]}static get isActive(){const t=window.sessionStorage.getItem(A.ACTIVE_KEY_IN_SESSION_STORAGE);return t===null||t!=="false"}static notificationDismissed(t){const e=window.localStorage.getItem(A.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE);return e!==null&&e.includes(t)}elementTelemetry(){let t={};try{const e=localStorage.getItem("vaadin.statistics.basket");if(!e)return;t=JSON.parse(e)}catch{return}this.frontendConnection&&this.frontendConnection.sendTelemetry(t)}openWebSocketConnection(){this.frontendStatus=S.UNAVAILABLE,this.javaStatus=S.UNAVAILABLE;const t=s=>this.log(B.ERROR,s),e=()=>{this.showSplashMessage("Reloading…");const s=window.sessionStorage.getItem(A.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE),l=s?parseInt(s,10)+1:1;window.sessionStorage.setItem(A.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE,l.toString()),window.sessionStorage.setItem(A.TRIGGERED_KEY_IN_SESSION_STORAGE,"true"),window.location.reload()},o=(s,l)=>{let c=document.head.querySelector(`style[data-file-path='${s}']`);c?(this.log(B.INFORMATION,"Hot update of "+s),c.textContent=l,document.dispatchEvent(new CustomEvent("vaadin-theme-updated"))):e()},n=new Ve(this.getDedicatedWebSocketUrl());n.onHandshake=()=>{this.log(B.LOG,"Vaadin development mode initialized"),A.isActive||n.setActive(!1),this.elementTelemetry()},n.onConnectionError=t,n.onReload=e,n.onUpdate=o,n.onStatusChange=s=>{this.frontendStatus=s},n.onMessage=s=>this.handleFrontendMessage(s),this.frontendConnection=n;let a;this.backend===A.SPRING_BOOT_DEVTOOLS&&this.springBootLiveReloadPort?(a=new Ve(this.getSpringBootWebSocketUrl(window.location)),a.onHandshake=()=>{A.isActive||a.setActive(!1)},a.onReload=e,a.onConnectionError=t):this.backend===A.JREBEL||this.backend===A.HOTSWAP_AGENT?a=n:a=new Ve(void 0);const r=a.onStatusChange;a.onStatusChange=s=>{r(s),this.javaStatus=s};const i=a.onHandshake;a.onHandshake=()=>{i(),this.backend&&this.log(B.INFORMATION,`Java live reload available: ${A.BACKEND_DISPLAY_NAME[this.backend]}`)},this.javaConnection=a,this.backend||this.showNotification(B.WARNING,"Java live reload unavailable","Live reload for Java changes is currently not set up. Find out how to make use of this functionality to boost your workflow.","https://vaadin.com/docs/latest/flow/configuration/live-reload","liveReloadUnavailable")}tabHandleMessage(t,e){const o=t;return o.handleMessage&&o.handleMessage.call(t,e)}handleFrontendMessage(t){for(const e of this.tabs)if(e.element&&this.tabHandleMessage(e.element,t))return;if((t==null?void 0:t.command)==="featureFlags")this.features=t.data.features;else if((t==null?void 0:t.command)==="themeEditorState"){const e=!!window.Vaadin.Flow;this.themeEditorState=t.data,e&&this.themeEditorState!==De.disabled&&(this.tabs.push({id:"theme-editor",title:"Theme Editor (Preview)",render:()=>this.renderThemeEditor()}),this.requestUpdate())}else this.unhandledMessages.push(t)}getDedicatedWebSocketUrl(){function t(o){const n=document.createElement("div");return n.innerHTML=`<a href="${o}"/>`,n.firstChild.href}if(this.url===void 0)return;const e=t(this.url);if(!e.startsWith("http://")&&!e.startsWith("https://")){console.error("The protocol of the url should be http or https for live reload to work.");return}return`${e.replace(/^http/,"ws")}?v-r=push&debug_window`}getSpringBootWebSocketUrl(t){const{hostname:e}=t,o=t.protocol==="https:"?"wss":"ws";if(e.endsWith("gitpod.io")){const n=e.replace(/.*?-/,"");return`${o}://${this.springBootLiveReloadPort}-${n}`}else return`${o}://${e}:${this.springBootLiveReloadPort}`}constructor(){super(),this.unhandledMessages=[],this.expanded=!1,this.messages=[],this.notifications=[],this.frontendStatus=S.UNAVAILABLE,this.javaStatus=S.UNAVAILABLE,this.tabs=[{id:"log",title:"Log",render:"vaadin-dev-tools-log"},{id:"info",title:"Info",render:"vaadin-dev-tools-info"},{id:"features",title:"Feature Flags",render:()=>this.renderFeatures()}],this.activeTab="log",this.features=[],this.unreadErrors=!1,this.componentPickActive=!1,this.themeEditorState=De.disabled,this.nextMessageId=1,this.transitionDuration=0,window.Vaadin.Flow&&this.tabs.push({id:"code",title:"Code",render:()=>this.renderCode()})}connectedCallback(){if(super.connectedCallback(),this.catchErrors(),this.disableEventListener=o=>this.demoteSplashMessage(),document.body.addEventListener("focus",this.disableEventListener),document.body.addEventListener("click",this.disableEventListener),window.sessionStorage.getItem(A.TRIGGERED_KEY_IN_SESSION_STORAGE)){const o=new Date,n=`${`0${o.getHours()}`.slice(-2)}:${`0${o.getMinutes()}`.slice(-2)}:${`0${o.getSeconds()}`.slice(-2)}`;this.showSplashMessage(`Page reloaded at ${n}`),window.sessionStorage.removeItem(A.TRIGGERED_KEY_IN_SESSION_STORAGE)}this.transitionDuration=parseInt(window.getComputedStyle(this).getPropertyValue("--dev-tools-transition-duration"),10);const t=window;t.Vaadin=t.Vaadin||{},t.Vaadin.devTools=Object.assign(this,t.Vaadin.devTools),document.documentElement.addEventListener("vaadin-overlay-outside-click",o=>{const n=o,a=n.target.owner;a&&gi(this,a)||n.detail.sourceEvent.composedPath().includes(this)&&o.preventDefault()});const e=window.Vaadin;e.devToolsPlugins&&(Array.from(e.devToolsPlugins).forEach(o=>this.initPlugin(o)),e.devToolsPlugins={push:o=>this.initPlugin(o)}),this.openWebSocketConnection(),Ll()}async initPlugin(t){const e=this;t.init({addTab:(o,n)=>{e.tabs.push({id:o,title:o,render:n})},send:function(o,n){e.frontendConnection.send(o,n)}})}format(t){return t.toString()}catchErrors(){const t=window.Vaadin.ConsoleErrors;t&&t.forEach(e=>{this.log(B.ERROR,e.map(o=>this.format(o)).join(" "))}),window.Vaadin.ConsoleErrors={push:e=>{this.log(B.ERROR,e.map(o=>this.format(o)).join(" "))}}}disconnectedCallback(){this.disableEventListener&&(document.body.removeEventListener("focus",this.disableEventListener),document.body.removeEventListener("click",this.disableEventListener)),super.disconnectedCallback()}toggleExpanded(){this.notifications.slice().forEach(t=>this.dismissNotification(t.id)),this.expanded=!this.expanded,this.expanded&&this.root.focus()}showSplashMessage(t){this.splashMessage=t,this.splashMessage&&(this.expanded?this.demoteSplashMessage():setTimeout(()=>{this.demoteSplashMessage()},A.AUTO_DEMOTE_NOTIFICATION_DELAY))}demoteSplashMessage(){this.splashMessage&&this.log(B.LOG,this.splashMessage),this.showSplashMessage(void 0)}checkLicense(t){this.frontendConnection?this.frontendConnection.sendLicenseCheck(t):Ca({message:"Internal error: no connection",product:t})}log(t,e,o,n){const a=this.nextMessageId;for(this.nextMessageId+=1,this.messages.push({id:a,type:t,message:e,details:o,link:n,dontShowAgain:!1,deleted:!1});this.messages.length>A.MAX_LOG_ROWS;)this.messages.shift();this.requestUpdate(),this.updateComplete.then(()=>{const r=this.renderRoot.querySelector(".message-tray .message:last-child");this.expanded&&r?(setTimeout(()=>r.scrollIntoView({behavior:"smooth"}),this.transitionDuration),this.unreadErrors=!1):t===B.ERROR&&(this.unreadErrors=!0)})}showNotification(t,e,o,n,a){if(a===void 0||!A.notificationDismissed(a)){if(this.notifications.filter(i=>i.persistentId===a).filter(i=>!i.deleted).length>0)return;const r=this.nextMessageId;this.nextMessageId+=1,this.notifications.push({id:r,type:t,message:e,details:o,link:n,persistentId:a,dontShowAgain:!1,deleted:!1}),n===void 0&&setTimeout(()=>{this.dismissNotification(r)},A.AUTO_DEMOTE_NOTIFICATION_DELAY),this.requestUpdate()}else this.log(t,e,o,n)}dismissNotification(t){const e=this.findNotificationIndex(t);if(e!==-1&&!this.notifications[e].deleted){const o=this.notifications[e];if(o.dontShowAgain&&o.persistentId&&!A.notificationDismissed(o.persistentId)){let n=window.localStorage.getItem(A.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE);n=n===null?o.persistentId:`${n},${o.persistentId}`,window.localStorage.setItem(A.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE,n)}o.deleted=!0,this.log(o.type,o.message,o.details,o.link),setTimeout(()=>{const n=this.findNotificationIndex(t);n!==-1&&(this.notifications.splice(n,1),this.requestUpdate())},this.transitionDuration)}}findNotificationIndex(t){let e=-1;return this.notifications.some((o,n)=>o.id===t?(e=n,!0):!1),e}toggleDontShowAgain(t){const e=this.findNotificationIndex(t);if(e!==-1&&!this.notifications[e].deleted){const o=this.notifications[e];o.dontShowAgain=!o.dontShowAgain,this.requestUpdate()}}setActive(t){var e,o;(e=this.frontendConnection)==null||e.setActive(t),(o=this.javaConnection)==null||o.setActive(t),window.sessionStorage.setItem(A.ACTIVE_KEY_IN_SESSION_STORAGE,t?"true":"false")}getStatusColor(t){return t===S.ACTIVE?"var(--dev-tools-green-color)":t===S.INACTIVE?"var(--dev-tools-grey-color)":t===S.UNAVAILABLE?"var(--dev-tools-yellow-hsl)":t===S.ERROR?"var(--dev-tools-red-color)":"none"}renderMessage(t){return v`
      <div
        class="message ${t.type} ${t.deleted?"animate-out":""} ${t.details||t.link?"has-details":""}"
      >
        <div class="message-content">
          <div class="message-heading">${t.message}</div>
          <div class="message-details" ?hidden="${!t.details&&!t.link}">
            ${t.details?v`<p>${t.details}</p>`:""}
            ${t.link?v`<a class="ahreflike" href="${t.link}" target="_blank">Learn more</a>`:""}
          </div>
          ${t.persistentId?v`<div
                class="persist ${t.dontShowAgain?"on":"off"}"
                @click=${()=>this.toggleDontShowAgain(t.id)}
              >
                Don’t show again
              </div>`:""}
        </div>
        <div class="dismiss-message" @click=${()=>this.dismissNotification(t.id)}>Dismiss</div>
      </div>
    `}render(){return v` <div
        class="window ${this.expanded&&!this.componentPickActive?"visible":"hidden"}"
        tabindex="0"
        @keydown=${t=>t.key==="Escape"&&this.expanded&&this.toggleExpanded()}
      >
        <div class="window-toolbar">
          ${this.tabs.map(t=>v`<button
                class=${Lo({tab:!0,active:this.activeTab===t.id,unreadErrors:t.id==="log"&&this.unreadErrors})}
                id="${t.id}"
                @click=${()=>{const e=this.tabs.find(a=>a.id===this.activeTab);if(e&&e.element){const a=typeof e.render=="function"?e.element.firstElementChild:e.element,r=a==null?void 0:a.deactivate;r&&r.call(a)}this.activeTab=t.id;const o=typeof t.render=="function"?t.element.firstElementChild:t.element,n=o.activate;n&&n.call(o)}}
              >
                ${t.title}
              </button> `)}
          <button class="minimize-button" title="Minimize" @click=${()=>this.toggleExpanded()}>
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff" opacity=".8">
                <path
                  d="m7.25 1.75c0-.41421.33579-.75.75-.75h3.25c2.0711 0 3.75 1.67893 3.75 3.75v6.5c0 2.0711-1.6789 3.75-3.75 3.75h-6.5c-2.07107 0-3.75-1.6789-3.75-3.75v-3.25c0-.41421.33579-.75.75-.75s.75.33579.75.75v3.25c0 1.2426 1.00736 2.25 2.25 2.25h6.5c1.2426 0 2.25-1.0074 2.25-2.25v-6.5c0-1.24264-1.0074-2.25-2.25-2.25h-3.25c-.41421 0-.75-.33579-.75-.75z"
                />
                <path
                  d="m2.96967 2.96967c.29289-.29289.76777-.29289 1.06066 0l5.46967 5.46967v-2.68934c0-.41421.33579-.75.75-.75.4142 0 .75.33579.75.75v4.5c0 .4142-.3358.75-.75.75h-4.5c-.41421 0-.75-.3358-.75-.75 0-.41421.33579-.75.75-.75h2.68934l-5.46967-5.46967c-.29289-.29289-.29289-.76777 0-1.06066z"
                />
              </g>
            </svg>
          </button>
        </div>
        <div id="tabContainer"></div>
      </div>

      <div class="notification-tray">${this.notifications.map(t=>this.renderMessage(t))}</div>
      <vaadin-dev-tools-component-picker
        .active=${this.componentPickActive}
        @component-picker-opened=${()=>{this.componentPickActive=!0}}
        @component-picker-closed=${()=>{this.componentPickActive=!1}}
      ></vaadin-dev-tools-component-picker>
      <div
        class="dev-tools ${this.splashMessage?"active":""}${this.unreadErrors?" error":""}"
        @click=${()=>this.toggleExpanded()}
      >
        ${this.unreadErrors?v`<svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="dev-tools-icon error"
            >
              <clipPath id="a"><path d="m0 0h16v16h-16z" /></clipPath>
              <g clip-path="url(#a)">
                <path
                  d="m6.25685 2.09894c.76461-1.359306 2.72169-1.359308 3.4863 0l5.58035 9.92056c.7499 1.3332-.2135 2.9805-1.7432 2.9805h-11.1606c-1.529658 0-2.4930857-1.6473-1.743156-2.9805z"
                  fill="#ff5c69"
                />
                <path
                  d="m7.99699 4c-.45693 0-.82368.37726-.81077.834l.09533 3.37352c.01094.38726.32803.69551.71544.69551.38741 0 .70449-.30825.71544-.69551l.09533-3.37352c.0129-.45674-.35384-.834-.81077-.834zm.00301 8c.60843 0 1-.3879 1-.979 0-.5972-.39157-.9851-1-.9851s-1 .3879-1 .9851c0 .5911.39157.979 1 .979z"
                  fill="#fff"
                />
              </g>
            </svg>`:v`<svg
              fill="none"
              height="17"
              viewBox="0 0 16 17"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              class="dev-tools-icon logo"
            >
              <g fill="#fff">
                <path
                  d="m8.88273 5.97926c0 .04401-.0032.08898-.00801.12913-.02467.42848-.37813.76767-.8117.76767-.43358 0-.78704-.34112-.81171-.76928-.00481-.04015-.00801-.08351-.00801-.12752 0-.42784-.10255-.87656-1.14434-.87656h-3.48364c-1.57118 0-2.315271-.72849-2.315271-2.21758v-1.26683c0-.42431.324618-.768314.748261-.768314.42331 0 .74441.344004.74441.768314v.42784c0 .47924.39576.81265 1.11293.81265h3.41538c1.5542 0 1.67373 1.156 1.725 1.7679h.03429c.05095-.6119.17048-1.7679 1.72468-1.7679h3.4154c.7172 0 1.0145-.32924 1.0145-.80847l-.0067-.43202c0-.42431.3227-.768314.7463-.768314.4234 0 .7255.344004.7255.768314v1.26683c0 1.48909-.6181 2.21758-2.1893 2.21758h-3.4836c-1.04182 0-1.14437.44872-1.14437.87656z"
                />
                <path
                  d="m8.82577 15.1648c-.14311.3144-.4588.5335-.82635.5335-.37268 0-.69252-.2249-.83244-.5466-.00206-.0037-.00412-.0073-.00617-.0108-.00275-.0047-.00549-.0094-.00824-.0145l-3.16998-5.87318c-.08773-.15366-.13383-.32816-.13383-.50395 0-.56168.45592-1.01879 1.01621-1.01879.45048 0 .75656.22069.96595.6993l2.16882 4.05042 2.17166-4.05524c.2069-.47379.513-.69448.9634-.69448.5603 0 1.0166.45711 1.0166 1.01879 0 .17579-.0465.35029-.1348.50523l-3.1697 5.8725c-.00503.0096-.01006.0184-.01509.0272-.00201.0036-.00402.0071-.00604.0106z"
                />
              </g>
            </svg>`}

        <span
          class="status-blip"
          style="background: linear-gradient(to right, ${this.getStatusColor(this.frontendStatus)} 50%, ${this.getStatusColor(this.javaStatus)} 50%)"
        ></span>
        ${this.splashMessage?v`<span class="status-description">${this.splashMessage}</span></div>`:L}
      </div>`}updated(t){var e;super.updated(t);const o=this.renderRoot.querySelector("#tabContainer"),n=[];if(this.tabs.forEach(r=>{r.element||(typeof r.render=="function"?r.element=document.createElement("div"):(r.element=document.createElement(r.render),r.element._devTools=this),n.push(r.element))}),(o==null?void 0:o.childElementCount)!==this.tabs.length){for(let r=0;r<this.tabs.length;r++){const i=this.tabs[r];o.childElementCount>r&&o.children[r]===i.element||o.insertBefore(i.element,o.children[r])}for(;(o==null?void 0:o.childElementCount)>this.tabs.length;)(e=o.lastElementChild)==null||e.remove()}for(const r of this.tabs){typeof r.render=="function"?_e(r.render(),r.element):r.element.requestUpdate&&r.element.requestUpdate();const i=r.id===this.activeTab;r.element.hidden=!i}for(const r of n)for(var a=0;a<this.unhandledMessages.length;a++)this.tabHandleMessage(r,this.unhandledMessages[a])&&(this.unhandledMessages.splice(a,1),a--)}renderCode(){return v`<div class="info-tray">
      <div>
        <select id="locationType">
          <option value="create" selected>Create</option>
          <option value="attach">Attach</option>
        </select>
        <button
          class="button pick"
          @click=${async()=>{await b(()=>Promise.resolve().then(()=>xl),void 0),this.componentPicker.open({infoTemplate:v`
                <div>
                  <h3>Locate a component in source code</h3>
                  <p>Use the mouse cursor to highlight components in the UI.</p>
                  <p>Use arrow down/up to cycle through and highlight specific components under the cursor.</p>
                  <p>
                    Click the primary mouse button to open the corresponding source code line of the highlighted
                    component in your IDE.
                  </p>
                </div>
              `,pickCallback:t=>{const e={nodeId:t.nodeId,uiId:t.uiId};this.renderRoot.querySelector("#locationType").value==="create"?this.frontendConnection.sendShowComponentCreateLocation(e):this.frontendConnection.sendShowComponentAttachLocation(e)}})}}
        >
          Find component in code
        </button>
      </div>
      </div>
    </div>`}renderFeatures(){return v`<div class="features-tray">
      ${this.features.map(t=>v`<div class="feature">
          <label class="switch">
            <input
              class="feature-toggle"
              id="feature-toggle-${t.id}"
              type="checkbox"
              ?checked=${t.enabled}
              @change=${e=>this.toggleFeatureFlag(e,t)}
            />
            <span class="slider"></span>
            ${t.title}
          </label>
          <a class="ahreflike" href="${t.moreInfoLink}" target="_blank">Learn more</a>
        </div>`)}
    </div>`}disableJavaLiveReload(){var t;(t=this.javaConnection)==null||t.setActive(!1)}enableJavaLiveReload(){var t;(t=this.javaConnection)==null||t.setActive(!0)}renderThemeEditor(){return v` <vaadin-dev-tools-theme-editor
      .expanded=${this.expanded}
      .themeEditorState=${this.themeEditorState}
      .pickerProvider=${()=>this.componentPicker}
      .connection=${this.frontendConnection}
      @before-open=${this.disableJavaLiveReload}
      @after-close=${this.enableJavaLiveReload}
    ></vaadin-dev-tools-theme-editor>`}toggleFeatureFlag(t,e){const o=t.target.checked;this.frontendConnection?(this.frontendConnection.setFeature(e.id,o),this.showNotification(B.INFORMATION,`“${e.title}” ${o?"enabled":"disabled"}`,e.requiresServerRestart?"This feature requires a server restart":void 0,void 0,`feature${e.id}${o?"Enabled":"Disabled"}`)):this.log(B.ERROR,`Unable to toggle feature ${e.title}: No server connection available`)}};E.MAX_LOG_ROWS=1e3;E.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE="vaadin.live-reload.dismissedNotifications";E.ACTIVE_KEY_IN_SESSION_STORAGE="vaadin.live-reload.active";E.TRIGGERED_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggered";E.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggeredCount";E.AUTO_DEMOTE_NOTIFICATION_DELAY=5e3;E.HOTSWAP_AGENT="HOTSWAP_AGENT";E.JREBEL="JREBEL";E.SPRING_BOOT_DEVTOOLS="SPRING_BOOT_DEVTOOLS";E.BACKEND_DISPLAY_NAME={HOTSWAP_AGENT:"HotswapAgent",JREBEL:"JRebel",SPRING_BOOT_DEVTOOLS:"Spring Boot Devtools"};u([w({type:String})],E.prototype,"url",void 0);u([w({type:Boolean,attribute:!0})],E.prototype,"liveReloadDisabled",void 0);u([w({type:String})],E.prototype,"backend",void 0);u([w({type:Number})],E.prototype,"springBootLiveReloadPort",void 0);u([w({type:Boolean,attribute:!1})],E.prototype,"expanded",void 0);u([w({type:Array,attribute:!1})],E.prototype,"messages",void 0);u([w({type:String,attribute:!1})],E.prototype,"splashMessage",void 0);u([w({type:Array,attribute:!1})],E.prototype,"notifications",void 0);u([w({type:String,attribute:!1})],E.prototype,"frontendStatus",void 0);u([w({type:String,attribute:!1})],E.prototype,"javaStatus",void 0);u([I()],E.prototype,"tabs",void 0);u([I()],E.prototype,"activeTab",void 0);u([I()],E.prototype,"features",void 0);u([I()],E.prototype,"unreadErrors",void 0);u([rt(".window")],E.prototype,"root",void 0);u([rt("vaadin-dev-tools-component-picker")],E.prototype,"componentPicker",void 0);u([I()],E.prototype,"componentPickActive",void 0);u([I()],E.prototype,"themeEditorState",void 0);E=A=u([F("vaadin-dev-tools")],E);const vs=x``,{toString:Pl}=Object.prototype;function zl(t){return Pl.call(t)==="[object RegExp]"}function Ol(t,{preserve:e=!0,whitespace:o=!0,all:n}={}){if(n)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let a=e,r;typeof e=="function"?(a=!1,r=e):zl(e)&&(a=!1,r=d=>e.test(d));let i=!1,s="",l="",c="";for(let d=0;d<t.length;d++){if(s=t[d],t[d-1]!=="\\"&&(s==='"'||s==="'")&&(i===s?i=!1:i||(i=s)),!i&&s==="/"&&t[d+1]==="*"){const m=t[d+2]==="!";let h=d+2;for(;h<t.length;h++){if(t[h]==="*"&&t[h+1]==="/"){a&&m||r&&r(l)?c+=`/*${l}*/`:o||(t[h+2]===`
`?h++:t[h+2]+t[h+3]===`\r
`&&(h+=2)),l="";break}l+=t[h]}d=h+1;continue}c+=s}return c}const Ml=CSSStyleSheet.toString().includes("document.createElement"),Vl=(t,e)=>{const o=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(t)!=null&&(t=Ol(t));for(var n,a=t;(n=o.exec(t))!==null;){a=a.replace(n[0],"");const r=document.createElement("link");r.rel="stylesheet",r.href=n[2]||n[4];const i=n[1]||n[5];i&&(r.media=i),e===document?document.head.appendChild(r):e.appendChild(r)}return a},Fl=(t,e,o)=>(o?e.adoptedStyleSheets=[t,...e.adoptedStyleSheets]:e.adoptedStyleSheets=[...e.adoptedStyleSheets,t],()=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(n=>n!==t)}),Dl=(t,e,o)=>{const n=new CSSStyleSheet;return n.replaceSync(t),Ml?Fl(n,e,o):(o?e.adoptedStyleSheets.splice(0,0,n):e.adoptedStyleSheets.push(n),()=>{e.adoptedStyleSheets.splice(e.adoptedStyleSheets.indexOf(n),1)})},jl=(t,e)=>{const o=document.createElement("style");o.type="text/css",o.textContent=t;let n;if(e){const r=Array.from(document.head.childNodes).filter(i=>i.nodeType===Node.COMMENT_NODE).find(i=>i.data.trim()===e);r&&(n=r)}return document.head.insertBefore(o,n),()=>{o.remove()}},Pe=(t,e,o,n)=>{if(o===document){const r=ql(t);if(window.Vaadin.theme.injectedGlobalCss.indexOf(r)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(r)}const a=Vl(t,o);return o===document?jl(a,e):Dl(a,o,n)};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function Gn(t){let e,o,n=2166136261;for(e=0,o=t.length;e<o;e++)n^=t.charCodeAt(e),n+=(n<<1)+(n<<4)+(n<<7)+(n<<8)+(n<<24);return("0000000"+(n>>>0).toString(16)).substr(-8)}function ql(t){let e=Gn(t);return e+Gn(e+t)}document._vaadintheme_myapp_componentCss||(document._vaadintheme_myapp_componentCss=!0);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ul(t){const e=customElements.get(t.is);if(!e)Object.defineProperty(t,"version",{get(){return"24.3.0-alpha8"}}),customElements.define(t.is,t);else{const o=e.version;o&&t.version&&o===t.version?console.warn(`The component ${t.is} has been loaded twice`):console.error(`Tried to define ${t.is} version ${t.version} when version ${e.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Bl extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}Ul(Bl);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hl=t=>class extends t{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(o,n,a){super.attributeChangedCallback(o,n,a),o==="theme"&&this._set_theme(a)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Aa=[];function Ta(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}function Wl(t){return Ta(customElements.get(t))}function Gl(t=[]){return[t].flat(1/0).filter(e=>e instanceof So?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Ut(t,e,o={}){t&&Wl(t)&&console.warn(`The custom element definition for "${t}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),e=Gl(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,o):Aa.push({themeFor:t,styles:e,include:o.include,moduleId:o.moduleId})}function xo(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():Aa}function Kl(t,e){return(t||"").split(" ").some(o=>new RegExp(`^${o.split("*").join(".*")}$`,"u").test(e))}function Jl(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function La(t){const e=[];return t.include&&[].concat(t.include).forEach(o=>{const n=xo().find(a=>a.moduleId===o);n?e.push(...La(n),...n.styles):console.warn(`Included moduleId ${o} not found in style registry`)},t.styles),e}function Yl(t,e){const o=document.createElement("style");o.innerHTML=t.map(n=>n.cssText).join(`
`),e.content.appendChild(o)}function Xl(t){const e=`${t}-default-theme`,o=xo().filter(n=>n.moduleId!==e&&Kl(n.themeFor,t)).map(n=>({...n,styles:[...La(n),...n.styles],includePriority:Jl(n.moduleId)})).sort((n,a)=>a.includePriority-n.includePriority);return o.length>0?o:xo().filter(n=>n.moduleId===e)}const ws=t=>class extends Hl(t){static finalize(){if(super.finalize(),this.elementStyles)return;const o=this.prototype._template;!o||Ta(this)||Yl(this.getStylesForThis(),o)}static finalizeStyles(o){const n=this.getStylesForThis();return o?[...super.finalizeStyles(o),...n]:n}static getStylesForThis(){const o=Object.getPrototypeOf(this.prototype),n=(o?o.constructor.__themes:[])||[];this.__themes=[...n,...Xl(this.is)];const a=this.__themes.flatMap(r=>r.styles);return a.filter((r,i)=>i===a.lastIndexOf(r))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ql=(t,...e)=>{const o=document.createElement("style");o.id=t,o.textContent=e.map(n=>n.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",o)},ge=(t,...e)=>{Ql(`lumo-${t}`,e)};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zl=x`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,zo=x`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Ut("",zo,{moduleId:"lumo-typography"});ge("typography-props",Zl);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const es=x`
  ${T(zo.cssText.replace(/,\s*:host/su,""))}
`;ge("typography",es);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ts=x`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;ge("color-props",ts);const Oo=x`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;Ut("",Oo,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ge("color",Oo);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $a=x`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;ge("spacing-props",$a);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const os=x`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;x`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding-h: calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-padding-v: 0;
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-intermediate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;ge("style-props",os);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mo=x`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='warning'] {
    color: var(--lumo-warning-text-color);
    background-color: var(--lumo-warning-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning'][theme~='primary'] {
    color: var(--lumo-warning-contrast-color);
    background-color: var(--lumo-warning-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning']:not([icon]):empty {
    background-color: var(--lumo-warning-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;Ut("",Mo,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ge("badge",Mo);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ns=x`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const as=x`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }

  .bg-warning {
    background-color: var(--lumo-warning-color);
  }
  .bg-warning-10 {
    background-color: var(--lumo-warning-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rs=x`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px solid;
  }
  .border-b {
    border-bottom: 1px solid;
  }
  .border-l {
    border-left: 1px solid;
  }
  .border-r {
    border-right: 1px solid;
  }
  .border-t {
    border-top: 1px solid;
  }

  /* === Border color === */
  .border-contrast-5 {
    border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    border-color: var(--lumo-contrast);
  }

  .border-primary {
    border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    border-color: var(--lumo-success-color-10pct);
  }

  .border-warning {
    border-color: var(--lumo-warning-color);
  }
  .border-warning-10 {
    border-color: var(--lumo-warning-color-10pct);
  }
  .border-warning-strong {
    border-color: var(--lumo-warning-text-color);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const is=x`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ls=x`
  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .grid {
    display: grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex {
      display: flex;
    }
    .sm\\:hidden {
      display: none;
    }
  }
  @media (min-width: 768px) {
    .md\\:flex {
      display: flex;
    }
    .md\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex {
      display: flex;
    }
    .lg\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex {
      display: flex;
    }
    .xl\\:hidden {
      display: none;
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:hidden {
      display: none;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ss=x`
  /* === Box shadows === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cs=x`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ds=x`
  /* === Margin === */
  .m-auto {
    margin: auto;
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }

  /* === Margin (bottom) === */
  .mb-auto {
    margin-bottom: auto;
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }

  /* === Margin (end) === */
  .me-auto {
    margin-inline-end: auto;
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }

  /* === Margin (horizontal) === */
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mx-0 {
    margin-left: 0;
    margin-right: 0;
  }
  .mx-xs {
    margin-left: var(--lumo-space-xs);
    margin-right: var(--lumo-space-xs);
  }
  .mx-s {
    margin-left: var(--lumo-space-s);
    margin-right: var(--lumo-space-s);
  }
  .mx-m {
    margin-left: var(--lumo-space-m);
    margin-right: var(--lumo-space-m);
  }
  .mx-l {
    margin-left: var(--lumo-space-l);
    margin-right: var(--lumo-space-l);
  }
  .mx-xl {
    margin-left: var(--lumo-space-xl);
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (left) === */
  .ml-auto {
    margin-left: auto;
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }

  /* === Margin (right) === */
  .mr-auto {
    margin-right: auto;
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }

  /* === Margin (start) === */
  .ms-auto {
    margin-inline-start: auto;
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }

  /* === Margin (top) === */
  .mt-auto {
    margin-top: auto;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }

  /* === Margin (vertical) === */
  .my-auto {
    margin-bottom: auto;
    margin-top: auto;
  }
  .my-0 {
    margin-bottom: 0;
    margin-top: 0;
  }
  .my-xs {
    margin-bottom: var(--lumo-space-xs);
    margin-top: var(--lumo-space-xs);
  }
  .my-s {
    margin-bottom: var(--lumo-space-s);
    margin-top: var(--lumo-space-s);
  }
  .my-m {
    margin-bottom: var(--lumo-space-m);
    margin-top: var(--lumo-space-m);
  }
  .my-l {
    margin-bottom: var(--lumo-space-l);
    margin-top: var(--lumo-space-l);
  }
  .my-xl {
    margin-bottom: var(--lumo-space-xl);
    margin-top: var(--lumo-space-xl);
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fs=x`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }
  .text-warning {
    color: var(--lumo-warning-text-color);
  }
  .text-warning-contrast {
    color: var(--lumo-warning-contrast-color);
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vo=x`
${ns}
${as}
${rs}
${ss}
${is}
${ls}
${cs}
${ds}
${fs}
`;Ut("",Vo,{moduleId:"lumo-utility"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ge("utility",Vo);const hs=x`.la,.lab,.lad,.lal,.lar,.las{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.la-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.la-xs{font-size:.75em}.la-sm{font-size:.875em}.la-1x{font-size:1em}.la-2x{font-size:2em}.la-3x{font-size:3em}.la-4x{font-size:4em}.la-5x{font-size:5em}.la-6x{font-size:6em}.la-7x{font-size:7em}.la-8x{font-size:8em}.la-9x{font-size:9em}.la-10x{font-size:10em}.la-fw{text-align:center;width:1.25em}.la-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.la-ul>li{position:relative}.la-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.la-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.la-pull-left{float:left}.la-pull-right{float:right}.la.la-pull-left,.lab.la-pull-left,.lal.la-pull-left,.lar.la-pull-left,.las.la-pull-left{margin-right:.3em}.la.la-pull-right,.lab.la-pull-right,.lal.la-pull-right,.lar.la-pull-right,.las.la-pull-right{margin-left:.3em}.la-spin{-webkit-animation:la-spin 2s infinite linear;animation:la-spin 2s infinite linear}.la-pulse{-webkit-animation:la-spin 1s infinite steps(8);animation:la-spin 1s infinite steps(8)}@-webkit-keyframes la-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes la-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.la-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.la-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.la-flip-horizontal{-webkit-transform:scale(-1,1);transform:scaleX(-1)}.la-flip-vertical{-webkit-transform:scale(1,-1);transform:scaleY(-1)}.la-flip-both,.la-flip-horizontal.la-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1)}:root .la-flip-both,:root .la-flip-horizontal,:root .la-flip-vertical,:root .la-rotate-180,:root .la-rotate-270,:root .la-rotate-90{-webkit-filter:none;filter:none}.la-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.la-stack-1x,.la-stack-2x{left:0;position:absolute;text-align:center;width:100%}.la-stack-1x{line-height:inherit}.la-stack-2x{font-size:2em}.la-inverse{color:#fff}.la-500px:before{content:""}.la-accessible-icon:before{content:""}.la-accusoft:before{content:""}.la-acquisitions-incorporated:before{content:""}.la-ad:before{content:""}.la-address-book:before{content:""}.la-address-card:before{content:""}.la-adjust:before{content:""}.la-adn:before{content:""}.la-adobe:before{content:""}.la-adversal:before{content:""}.la-affiliatetheme:before{content:""}.la-air-freshener:before{content:""}.la-airbnb:before{content:""}.la-algolia:before{content:""}.la-align-center:before{content:""}.la-align-justify:before{content:""}.la-align-left:before{content:""}.la-align-right:before{content:""}.la-alipay:before{content:""}.la-allergies:before{content:""}.la-amazon:before{content:""}.la-amazon-pay:before{content:""}.la-ambulance:before{content:""}.la-american-sign-language-interpreting:before{content:""}.la-amilia:before{content:""}.la-anchor:before{content:""}.la-android:before{content:""}.la-angellist:before{content:""}.la-angle-double-down:before{content:""}.la-angle-double-left:before{content:""}.la-angle-double-right:before{content:""}.la-angle-double-up:before{content:""}.la-angle-down:before{content:""}.la-angle-left:before{content:""}.la-angle-right:before{content:""}.la-angle-up:before{content:""}.la-angry:before{content:""}.la-angrycreative:before{content:""}.la-angular:before{content:""}.la-ankh:before{content:""}.la-app-store:before{content:""}.la-app-store-ios:before{content:""}.la-apper:before{content:""}.la-apple:before{content:""}.la-apple-alt:before{content:""}.la-apple-pay:before{content:""}.la-archive:before{content:""}.la-archway:before{content:""}.la-arrow-alt-circle-down:before{content:""}.la-arrow-alt-circle-left:before{content:""}.la-arrow-alt-circle-right:before{content:""}.la-arrow-alt-circle-up:before{content:""}.la-arrow-circle-down:before{content:""}.la-arrow-circle-left:before{content:""}.la-arrow-circle-right:before{content:""}.la-arrow-circle-up:before{content:""}.la-arrow-down:before{content:""}.la-arrow-left:before{content:""}.la-arrow-right:before{content:""}.la-arrow-up:before{content:""}.la-arrows-alt:before{content:""}.la-arrows-alt-h:before{content:""}.la-arrows-alt-v:before{content:""}.la-artstation:before{content:""}.la-assistive-listening-systems:before{content:""}.la-asterisk:before{content:""}.la-asymmetrik:before{content:""}.la-at:before{content:""}.la-atlas:before{content:""}.la-atlassian:before{content:""}.la-atom:before{content:""}.la-audible:before{content:""}.la-audio-description:before{content:""}.la-autoprefixer:before{content:""}.la-avianex:before{content:""}.la-aviato:before{content:""}.la-award:before{content:""}.la-aws:before{content:""}.la-baby:before{content:""}.la-baby-carriage:before{content:""}.la-backspace:before{content:""}.la-backward:before{content:""}.la-bacon:before{content:""}.la-balance-scale:before{content:""}.la-balance-scale-left:before{content:""}.la-balance-scale-right:before{content:""}.la-ban:before{content:""}.la-band-aid:before{content:""}.la-bandcamp:before{content:""}.la-barcode:before{content:""}.la-bars:before{content:""}.la-baseball-ball:before{content:""}.la-basketball-ball:before{content:""}.la-bath:before{content:""}.la-battery-empty:before{content:""}.la-battery-full:before{content:""}.la-battery-half:before{content:""}.la-battery-quarter:before{content:""}.la-battery-three-quarters:before{content:""}.la-battle-net:before{content:""}.la-bed:before{content:""}.la-beer:before{content:""}.la-behance:before{content:""}.la-behance-square:before{content:""}.la-bell:before{content:""}.la-bell-slash:before{content:""}.la-bezier-curve:before{content:""}.la-bible:before{content:""}.la-bicycle:before{content:""}.la-biking:before{content:""}.la-bimobject:before{content:""}.la-binoculars:before{content:""}.la-biohazard:before{content:""}.la-birthday-cake:before{content:""}.la-bitbucket:before{content:""}.la-bitcoin:before{content:""}.la-bity:before{content:""}.la-black-tie:before{content:""}.la-blackberry:before{content:""}.la-blender:before{content:""}.la-blender-phone:before{content:""}.la-blind:before{content:""}.la-blog:before{content:""}.la-blogger:before{content:""}.la-blogger-b:before{content:""}.la-bluetooth:before{content:""}.la-bluetooth-b:before{content:""}.la-bold:before{content:""}.la-bolt:before{content:""}.la-bomb:before{content:""}.la-bone:before{content:""}.la-bong:before{content:""}.la-book:before{content:""}.la-book-dead:before{content:""}.la-book-medical:before{content:""}.la-book-open:before{content:""}.la-book-reader:before{content:""}.la-bookmark:before{content:""}.la-bootstrap:before{content:""}.la-border-all:before{content:""}.la-border-none:before{content:""}.la-border-style:before{content:""}.la-bowling-ball:before{content:""}.la-box:before{content:""}.la-box-open:before{content:""}.la-boxes:before{content:""}.la-braille:before{content:""}.la-brain:before{content:""}.la-bread-slice:before{content:""}.la-briefcase:before{content:""}.la-briefcase-medical:before{content:""}.la-broadcast-tower:before{content:""}.la-broom:before{content:""}.la-brush:before{content:""}.la-btc:before{content:""}.la-buffer:before{content:""}.la-bug:before{content:""}.la-building:before{content:""}.la-bullhorn:before{content:""}.la-bullseye:before{content:""}.la-burn:before{content:""}.la-buromobelexperte:before{content:""}.la-bus:before{content:""}.la-bus-alt:before{content:""}.la-business-time:before{content:""}.la-buy-n-large:before{content:""}.la-buysellads:before{content:""}.la-calculator:before{content:""}.la-calendar:before{content:""}.la-calendar-alt:before{content:""}.la-calendar-check:before{content:""}.la-calendar-day:before{content:""}.la-calendar-minus:before{content:""}.la-calendar-plus:before{content:""}.la-calendar-times:before{content:""}.la-calendar-week:before{content:""}.la-camera:before{content:""}.la-camera-retro:before{content:""}.la-campground:before{content:""}.la-canadian-maple-leaf:before{content:""}.la-candy-cane:before{content:""}.la-cannabis:before{content:""}.la-capsules:before{content:""}.la-car:before{content:""}.la-car-alt:before{content:""}.la-car-battery:before{content:""}.la-car-crash:before{content:""}.la-car-side:before{content:""}.la-caret-down:before{content:""}.la-caret-left:before{content:""}.la-caret-right:before{content:""}.la-caret-square-down:before{content:""}.la-caret-square-left:before{content:""}.la-caret-square-right:before{content:""}.la-caret-square-up:before{content:""}.la-caret-up:before{content:""}.la-carrot:before{content:""}.la-cart-arrow-down:before{content:""}.la-cart-plus:before{content:""}.la-cash-register:before{content:""}.la-cat:before{content:""}.la-cc-amazon-pay:before{content:""}.la-cc-amex:before{content:""}.la-cc-apple-pay:before{content:""}.la-cc-diners-club:before{content:""}.la-cc-discover:before{content:""}.la-cc-jcb:before{content:""}.la-cc-mastercard:before{content:""}.la-cc-paypal:before{content:""}.la-cc-stripe:before{content:""}.la-cc-visa:before{content:""}.la-centercode:before{content:""}.la-centos:before{content:""}.la-certificate:before{content:""}.la-chair:before{content:""}.la-chalkboard:before{content:""}.la-chalkboard-teacher:before{content:""}.la-charging-station:before{content:""}.la-chart-area:before{content:""}.la-chart-bar:before{content:""}.la-chart-line:before{content:""}.la-chart-pie:before{content:""}.la-check:before{content:""}.la-check-circle:before{content:""}.la-check-double:before{content:""}.la-check-square:before{content:""}.la-cheese:before{content:""}.la-chess:before{content:""}.la-chess-bishop:before{content:""}.la-chess-board:before{content:""}.la-chess-king:before{content:""}.la-chess-knight:before{content:""}.la-chess-pawn:before{content:""}.la-chess-queen:before{content:""}.la-chess-rook:before{content:""}.la-chevron-circle-down:before{content:""}.la-chevron-circle-left:before{content:""}.la-chevron-circle-right:before{content:""}.la-chevron-circle-up:before{content:""}.la-chevron-down:before{content:""}.la-chevron-left:before{content:""}.la-chevron-right:before{content:""}.la-chevron-up:before{content:""}.la-child:before{content:""}.la-chrome:before{content:""}.la-chromecast:before{content:""}.la-church:before{content:""}.la-circle:before{content:""}.la-circle-notch:before{content:""}.la-city:before{content:""}.la-clinic-medical:before{content:""}.la-clipboard:before{content:""}.la-clipboard-check:before{content:""}.la-clipboard-list:before{content:""}.la-clock:before{content:""}.la-clone:before{content:""}.la-closed-captioning:before{content:""}.la-cloud:before{content:""}.la-cloud-download-alt:before{content:""}.la-cloud-meatball:before{content:""}.la-cloud-moon:before{content:""}.la-cloud-moon-rain:before{content:""}.la-cloud-rain:before{content:""}.la-cloud-showers-heavy:before{content:""}.la-cloud-sun:before{content:""}.la-cloud-sun-rain:before{content:""}.la-cloud-upload-alt:before{content:""}.la-cloudscale:before{content:""}.la-cloudsmith:before{content:""}.la-cloudversify:before{content:""}.la-cocktail:before{content:""}.la-code:before{content:""}.la-code-branch:before{content:""}.la-codepen:before{content:""}.la-codiepie:before{content:""}.la-coffee:before{content:""}.la-cog:before{content:""}.la-cogs:before{content:""}.la-coins:before{content:""}.la-columns:before{content:""}.la-comment:before{content:""}.la-comment-alt:before{content:""}.la-comment-dollar:before{content:""}.la-comment-dots:before{content:""}.la-comment-medical:before{content:""}.la-comment-slash:before{content:""}.la-comments:before{content:""}.la-comments-dollar:before{content:""}.la-compact-disc:before{content:""}.la-compass:before{content:""}.la-compress:before{content:""}.la-compress-arrows-alt:before{content:""}.la-concierge-bell:before{content:""}.la-confluence:before{content:""}.la-connectdevelop:before{content:""}.la-contao:before{content:""}.la-cookie:before{content:""}.la-cookie-bite:before{content:""}.la-copy:before{content:""}.la-copyright:before{content:""}.la-cotton-bureau:before{content:""}.la-couch:before{content:""}.la-cpanel:before{content:""}.la-creative-commons:before{content:""}.la-creative-commons-by:before{content:""}.la-creative-commons-nc:before{content:""}.la-creative-commons-nc-eu:before{content:""}.la-creative-commons-nc-jp:before{content:""}.la-creative-commons-nd:before{content:""}.la-creative-commons-pd:before{content:""}.la-creative-commons-pd-alt:before{content:""}.la-creative-commons-remix:before{content:""}.la-creative-commons-sa:before{content:""}.la-creative-commons-sampling:before{content:""}.la-creative-commons-sampling-plus:before{content:""}.la-creative-commons-share:before{content:""}.la-creative-commons-zero:before{content:""}.la-credit-card:before{content:""}.la-critical-role:before{content:""}.la-crop:before{content:""}.la-crop-alt:before{content:""}.la-cross:before{content:""}.la-crosshairs:before{content:""}.la-crow:before{content:""}.la-crown:before{content:""}.la-crutch:before{content:""}.la-css3:before{content:""}.la-css3-alt:before{content:""}.la-cube:before{content:""}.la-cubes:before{content:""}.la-cut:before{content:""}.la-cuttlefish:before{content:""}.la-d-and-d:before{content:""}.la-d-and-d-beyond:before{content:""}.la-dashcube:before{content:""}.la-database:before{content:""}.la-deaf:before{content:""}.la-delicious:before{content:""}.la-democrat:before{content:""}.la-deploydog:before{content:""}.la-deskpro:before{content:""}.la-desktop:before{content:""}.la-dev:before{content:""}.la-deviantart:before{content:""}.la-dharmachakra:before{content:""}.la-dhl:before{content:""}.la-diagnoses:before{content:""}.la-diaspora:before{content:""}.la-dice:before{content:""}.la-dice-d20:before{content:""}.la-dice-d6:before{content:""}.la-dice-five:before{content:""}.la-dice-four:before{content:""}.la-dice-one:before{content:""}.la-dice-six:before{content:""}.la-dice-three:before{content:""}.la-dice-two:before{content:""}.la-digg:before{content:""}.la-digital-ocean:before{content:""}.la-digital-tachograph:before{content:""}.la-directions:before{content:""}.la-discord:before{content:""}.la-discourse:before{content:""}.la-divide:before{content:""}.la-dizzy:before{content:""}.la-dna:before{content:""}.la-dochub:before{content:""}.la-docker:before{content:""}.la-dog:before{content:""}.la-dollar-sign:before{content:""}.la-dolly:before{content:""}.la-dolly-flatbed:before{content:""}.la-donate:before{content:""}.la-door-closed:before{content:""}.la-door-open:before{content:""}.la-dot-circle:before{content:""}.la-dove:before{content:""}.la-download:before{content:""}.la-draft2digital:before{content:""}.la-drafting-compass:before{content:""}.la-dragon:before{content:""}.la-draw-polygon:before{content:""}.la-dribbble:before{content:""}.la-dribbble-square:before{content:""}.la-dropbox:before{content:""}.la-drum:before{content:""}.la-drum-steelpan:before{content:""}.la-drumstick-bite:before{content:""}.la-drupal:before{content:""}.la-dumbbell:before{content:""}.la-dumpster:before{content:""}.la-dumpster-fire:before{content:""}.la-dungeon:before{content:""}.la-dyalog:before{content:""}.la-earlybirds:before{content:""}.la-ebay:before{content:""}.la-edge:before{content:""}.la-edit:before{content:""}.la-egg:before{content:""}.la-eject:before{content:""}.la-elementor:before{content:""}.la-ellipsis-h:before{content:""}.la-ellipsis-v:before{content:""}.la-ello:before{content:""}.la-ember:before{content:""}.la-empire:before{content:""}.la-envelope:before{content:""}.la-envelope-open:before{content:""}.la-envelope-open-text:before{content:""}.la-envelope-square:before{content:""}.la-envira:before{content:""}.la-equals:before{content:""}.la-eraser:before{content:""}.la-erlang:before{content:""}.la-ethereum:before{content:""}.la-ethernet:before{content:""}.la-etsy:before{content:""}.la-euro-sign:before{content:""}.la-evernote:before{content:""}.la-exchange-alt:before{content:""}.la-exclamation:before{content:""}.la-exclamation-circle:before{content:""}.la-exclamation-triangle:before{content:""}.la-expand:before{content:""}.la-expand-arrows-alt:before{content:""}.la-expeditedssl:before{content:""}.la-external-link-alt:before{content:""}.la-external-link-square-alt:before{content:""}.la-eye:before{content:""}.la-eye-dropper:before{content:""}.la-eye-slash:before{content:""}.la-facebook:before{content:""}.la-facebook-f:before{content:""}.la-facebook-messenger:before{content:""}.la-facebook-square:before{content:""}.la-fan:before{content:""}.la-fantasy-flight-games:before{content:""}.la-fast-backward:before{content:""}.la-fast-forward:before{content:""}.la-fax:before{content:""}.la-feather:before{content:""}.la-feather-alt:before{content:""}.la-fedex:before{content:""}.la-fedora:before{content:""}.la-female:before{content:""}.la-fighter-jet:before{content:""}.la-figma:before{content:""}.la-file:before{content:""}.la-file-alt:before{content:""}.la-file-archive:before{content:""}.la-file-audio:before{content:""}.la-file-code:before{content:""}.la-file-contract:before{content:""}.la-file-csv:before{content:""}.la-file-download:before{content:""}.la-file-excel:before{content:""}.la-file-export:before{content:""}.la-file-image:before{content:""}.la-file-import:before{content:""}.la-file-invoice:before{content:""}.la-file-invoice-dollar:before{content:""}.la-file-medical:before{content:""}.la-file-medical-alt:before{content:""}.la-file-pdf:before{content:""}.la-file-powerpoint:before{content:""}.la-file-prescription:before{content:""}.la-file-signature:before{content:""}.la-file-upload:before{content:""}.la-file-video:before{content:""}.la-file-word:before{content:""}.la-fill:before{content:""}.la-fill-drip:before{content:""}.la-film:before{content:""}.la-filter:before{content:""}.la-fingerprint:before{content:""}.la-fire:before{content:""}.la-fire-alt:before{content:""}.la-fire-extinguisher:before{content:""}.la-firefox:before{content:""}.la-first-aid:before{content:""}.la-first-order:before{content:""}.la-first-order-alt:before{content:""}.la-firstdraft:before{content:""}.la-fish:before{content:""}.la-fist-raised:before{content:""}.la-flag:before{content:""}.la-flag-checkered:before{content:""}.la-flag-usa:before{content:""}.la-flask:before{content:""}.la-flickr:before{content:""}.la-flipboard:before{content:""}.la-flushed:before{content:""}.la-fly:before{content:""}.la-folder:before{content:""}.la-folder-minus:before{content:""}.la-folder-open:before{content:""}.la-folder-plus:before{content:""}.la-font:before{content:""}.la-font-awesome:before{content:""}.la-font-awesome-alt:before{content:""}.la-font-awesome-flag:before{content:""}.la-font-awesome-logo-full:before{content:""}.la-fonticons:before{content:""}.la-fonticons-fi:before{content:""}.la-football-ball:before{content:""}.la-fort-awesome:before{content:""}.la-fort-awesome-alt:before{content:""}.la-forumbee:before{content:""}.la-forward:before{content:""}.la-foursquare:before{content:""}.la-free-code-camp:before{content:""}.la-freebsd:before{content:""}.la-frog:before{content:""}.la-frown:before{content:""}.la-frown-open:before{content:""}.la-fulcrum:before{content:""}.la-funnel-dollar:before{content:""}.la-futbol:before{content:""}.la-galactic-republic:before{content:""}.la-galactic-senate:before{content:""}.la-gamepad:before{content:""}.la-gas-pump:before{content:""}.la-gavel:before{content:""}.la-gem:before{content:""}.la-genderless:before{content:""}.la-get-pocket:before{content:""}.la-gg:before{content:""}.la-gg-circle:before{content:""}.la-ghost:before{content:""}.la-gift:before{content:""}.la-gifts:before{content:""}.la-git:before{content:""}.la-git-alt:before{content:""}.la-git-square:before{content:""}.la-github:before{content:""}.la-github-alt:before{content:""}.la-github-square:before{content:""}.la-gitkraken:before{content:""}.la-gitlab:before{content:""}.la-gitter:before{content:""}.la-glass-cheers:before{content:""}.la-glass-martini:before{content:""}.la-glass-martini-alt:before{content:""}.la-glass-whiskey:before{content:""}.la-glasses:before{content:""}.la-glide:before{content:""}.la-glide-g:before{content:""}.la-globe:before{content:""}.la-globe-africa:before{content:""}.la-globe-americas:before{content:""}.la-globe-asia:before{content:""}.la-globe-europe:before{content:""}.la-gofore:before{content:""}.la-golf-ball:before{content:""}.la-goodreads:before{content:""}.la-goodreads-g:before{content:""}.la-google:before{content:""}.la-google-drive:before{content:""}.la-google-play:before{content:""}.la-google-plus:before{content:""}.la-google-plus-g:before{content:""}.la-google-plus-square:before{content:""}.la-google-wallet:before{content:""}.la-gopuram:before{content:""}.la-graduation-cap:before{content:""}.la-gratipay:before{content:""}.la-grav:before{content:""}.la-greater-than:before{content:""}.la-greater-than-equal:before{content:""}.la-grimace:before{content:""}.la-grin:before{content:""}.la-grin-alt:before{content:""}.la-grin-beam:before{content:""}.la-grin-beam-sweat:before{content:""}.la-grin-hearts:before{content:""}.la-grin-squint:before{content:""}.la-grin-squint-tears:before{content:""}.la-grin-stars:before{content:""}.la-grin-tears:before{content:""}.la-grin-tongue:before{content:""}.la-grin-tongue-squint:before{content:""}.la-grin-tongue-wink:before{content:""}.la-grin-wink:before{content:""}.la-grip-horizontal:before{content:""}.la-grip-lines:before{content:""}.la-grip-lines-vertical:before{content:""}.la-grip-vertical:before{content:""}.la-gripfire:before{content:""}.la-grunt:before{content:""}.la-guitar:before{content:""}.la-gulp:before{content:""}.la-h-square:before{content:""}.la-hacker-news:before{content:""}.la-hacker-news-square:before{content:""}.la-hackerrank:before{content:""}.la-hamburger:before{content:""}.la-hammer:before{content:""}.la-hamsa:before{content:""}.la-hand-holding:before{content:""}.la-hand-holding-heart:before{content:""}.la-hand-holding-usd:before{content:""}.la-hand-lizard:before{content:""}.la-hand-middle-finger:before{content:""}.la-hand-paper:before{content:""}.la-hand-peace:before{content:""}.la-hand-point-down:before{content:""}.la-hand-point-left:before{content:""}.la-hand-point-right:before{content:""}.la-hand-point-up:before{content:""}.la-hand-pointer:before{content:""}.la-hand-rock:before{content:""}.la-hand-scissors:before{content:""}.la-hand-spock:before{content:""}.la-hands:before{content:""}.la-hands-helping:before{content:""}.la-handshake:before{content:""}.la-hanukiah:before{content:""}.la-hard-hat:before{content:""}.la-hashtag:before{content:""}.la-hat-cowboy:before{content:""}.la-hat-cowboy-side:before{content:""}.la-hat-wizard:before{content:""}.la-haykal:before{content:""}.la-hdd:before{content:""}.la-heading:before{content:""}.la-headphones:before{content:""}.la-headphones-alt:before{content:""}.la-headset:before{content:""}.la-heart:before{content:""}.la-heart-broken:before{content:""}.la-heartbeat:before{content:""}.la-helicopter:before{content:""}.la-highlighter:before{content:""}.la-hiking:before{content:""}.la-hippo:before{content:""}.la-hips:before{content:""}.la-hire-a-helper:before{content:""}.la-history:before{content:""}.la-hockey-puck:before{content:""}.la-holly-berry:before{content:""}.la-home:before{content:""}.la-hooli:before{content:""}.la-hornbill:before{content:""}.la-horse:before{content:""}.la-horse-head:before{content:""}.la-hospital:before{content:""}.la-hospital-alt:before{content:""}.la-hospital-symbol:before{content:""}.la-hot-tub:before{content:""}.la-hotdog:before{content:""}.la-hotel:before{content:""}.la-hotjar:before{content:""}.la-hourglass:before{content:""}.la-hourglass-end:before{content:""}.la-hourglass-half:before{content:""}.la-hourglass-start:before{content:""}.la-house-damage:before{content:""}.la-houzz:before{content:""}.la-hryvnia:before{content:""}.la-html5:before{content:""}.la-hubspot:before{content:""}.la-i-cursor:before{content:""}.la-ice-cream:before{content:""}.la-icicles:before{content:""}.la-icons:before{content:""}.la-id-badge:before{content:""}.la-id-card:before{content:""}.la-id-card-alt:before{content:""}.la-igloo:before{content:""}.la-image:before{content:""}.la-images:before{content:""}.la-imdb:before{content:""}.la-inbox:before{content:""}.la-indent:before{content:""}.la-industry:before{content:""}.la-infinity:before{content:""}.la-info:before{content:""}.la-info-circle:before{content:""}.la-instagram:before{content:""}.la-intercom:before{content:""}.la-internet-explorer:before{content:""}.la-invision:before{content:""}.la-ioxhost:before{content:""}.la-italic:before{content:""}.la-itch-io:before{content:""}.la-itunes:before{content:""}.la-itunes-note:before{content:""}.la-java:before{content:""}.la-jedi:before{content:""}.la-jedi-order:before{content:""}.la-jenkins:before{content:""}.la-jira:before{content:""}.la-joget:before{content:""}.la-joint:before{content:""}.la-joomla:before{content:""}.la-journal-whills:before{content:""}.la-js:before{content:""}.la-js-square:before{content:""}.la-jsfiddle:before{content:""}.la-kaaba:before{content:""}.la-kaggle:before{content:""}.la-key:before{content:""}.la-keybase:before{content:""}.la-keyboard:before{content:""}.la-keycdn:before{content:""}.la-khanda:before{content:""}.la-kickstarter:before{content:""}.la-kickstarter-k:before{content:""}.la-kiss:before{content:""}.la-kiss-beam:before{content:""}.la-kiss-wink-heart:before{content:""}.la-kiwi-bird:before{content:""}.la-korvue:before{content:""}.la-landmark:before{content:""}.la-language:before{content:""}.la-laptop:before{content:""}.la-laptop-code:before{content:""}.la-laptop-medical:before{content:""}.la-laravel:before{content:""}.la-lastfm:before{content:""}.la-lastfm-square:before{content:""}.la-laugh:before{content:""}.la-laugh-beam:before{content:""}.la-laugh-squint:before{content:""}.la-laugh-wink:before{content:""}.la-layer-group:before{content:""}.la-leaf:before{content:""}.la-leanpub:before{content:""}.la-lemon:before{content:""}.la-less:before{content:""}.la-less-than:before{content:""}.la-less-than-equal:before{content:""}.la-level-down-alt:before{content:""}.la-level-up-alt:before{content:""}.la-life-ring:before{content:""}.la-lightbulb:before{content:""}.la-line:before{content:""}.la-link:before{content:""}.la-linkedin:before{content:""}.la-linkedin-in:before{content:""}.la-linode:before{content:""}.la-linux:before{content:""}.la-lira-sign:before{content:""}.la-list:before{content:""}.la-list-alt:before{content:""}.la-list-ol:before{content:""}.la-list-ul:before{content:""}.la-location-arrow:before{content:""}.la-lock:before{content:""}.la-lock-open:before{content:""}.la-long-arrow-alt-down:before{content:""}.la-long-arrow-alt-left:before{content:""}.la-long-arrow-alt-right:before{content:""}.la-long-arrow-alt-up:before{content:""}.la-low-vision:before{content:""}.la-luggage-cart:before{content:""}.la-lyft:before{content:""}.la-magento:before{content:""}.la-magic:before{content:""}.la-magnet:before{content:""}.la-mail-bulk:before{content:""}.la-mailchimp:before{content:""}.la-male:before{content:""}.la-mandalorian:before{content:""}.la-map:before{content:""}.la-map-marked:before{content:""}.la-map-marked-alt:before{content:""}.la-map-marker:before{content:""}.la-map-marker-alt:before{content:""}.la-map-pin:before{content:""}.la-map-signs:before{content:""}.la-markdown:before{content:""}.la-marker:before{content:""}.la-mars:before{content:""}.la-mars-double:before{content:""}.la-mars-stroke:before{content:""}.la-mars-stroke-h:before{content:""}.la-mars-stroke-v:before{content:""}.la-mask:before{content:""}.la-mastodon:before{content:""}.la-maxcdn:before{content:""}.la-mdb:before{content:""}.la-medal:before{content:""}.la-medapps:before{content:""}.la-medium:before{content:""}.la-medium-m:before{content:""}.la-medkit:before{content:""}.la-medrt:before{content:""}.la-meetup:before{content:""}.la-megaport:before{content:""}.la-meh:before{content:""}.la-meh-blank:before{content:""}.la-meh-rolling-eyes:before{content:""}.la-memory:before{content:""}.la-mendeley:before{content:""}.la-menorah:before{content:""}.la-mercury:before{content:""}.la-meteor:before{content:""}.la-microchip:before{content:""}.la-microphone:before{content:""}.la-microphone-alt:before{content:""}.la-microphone-alt-slash:before{content:""}.la-microphone-slash:before{content:""}.la-microscope:before{content:""}.la-microsoft:before{content:""}.la-minus:before{content:""}.la-minus-circle:before{content:""}.la-minus-square:before{content:""}.la-mitten:before{content:""}.la-mix:before{content:""}.la-mixcloud:before{content:""}.la-mizuni:before{content:""}.la-mobile:before{content:""}.la-mobile-alt:before{content:""}.la-modx:before{content:""}.la-monero:before{content:""}.la-money-bill:before{content:""}.la-money-bill-alt:before{content:""}.la-money-bill-wave:before{content:""}.la-money-bill-wave-alt:before{content:""}.la-money-check:before{content:""}.la-money-check-alt:before{content:""}.la-monument:before{content:""}.la-moon:before{content:""}.la-mortar-pestle:before{content:""}.la-mosque:before{content:""}.la-motorcycle:before{content:""}.la-mountain:before{content:""}.la-mouse:before{content:""}.la-mouse-pointer:before{content:""}.la-mug-hot:before{content:""}.la-music:before{content:""}.la-napster:before{content:""}.la-neos:before{content:""}.la-network-wired:before{content:""}.la-neuter:before{content:""}.la-newspaper:before{content:""}.la-nimblr:before{content:""}.la-node:before{content:""}.la-node-js:before{content:""}.la-not-equal:before{content:""}.la-notes-medical:before{content:""}.la-npm:before{content:""}.la-ns8:before{content:""}.la-nutritionix:before{content:""}.la-object-group:before{content:""}.la-object-ungroup:before{content:""}.la-odnoklassniki:before{content:""}.la-odnoklassniki-square:before{content:""}.la-oil-can:before{content:""}.la-old-republic:before{content:""}.la-om:before{content:""}.la-opencart:before{content:""}.la-openid:before{content:""}.la-opera:before{content:""}.la-optin-monster:before{content:""}.la-orcid:before{content:""}.la-osi:before{content:""}.la-otter:before{content:""}.la-outdent:before{content:""}.la-page4:before{content:""}.la-pagelines:before{content:""}.la-pager:before{content:""}.la-paint-brush:before{content:""}.la-paint-roller:before{content:""}.la-palette:before{content:""}.la-palfed:before{content:""}.la-pallet:before{content:""}.la-paper-plane:before{content:""}.la-paperclip:before{content:""}.la-parachute-box:before{content:""}.la-paragraph:before{content:""}.la-parking:before{content:""}.la-passport:before{content:""}.la-pastafarianism:before{content:""}.la-paste:before{content:""}.la-patreon:before{content:""}.la-pause:before{content:""}.la-pause-circle:before{content:""}.la-paw:before{content:""}.la-paypal:before{content:""}.la-peace:before{content:""}.la-pen:before{content:""}.la-pen-alt:before{content:""}.la-pen-fancy:before{content:""}.la-pen-nib:before{content:""}.la-pen-square:before{content:""}.la-pencil-alt:before{content:""}.la-pencil-ruler:before{content:""}.la-penny-arcade:before{content:""}.la-people-carry:before{content:""}.la-pepper-hot:before{content:""}.la-percent:before{content:""}.la-percentage:before{content:""}.la-periscope:before{content:""}.la-person-booth:before{content:""}.la-phabricator:before{content:""}.la-phoenix-framework:before{content:""}.la-phoenix-squadron:before{content:""}.la-phone:before{content:""}.la-phone-alt:before{content:""}.la-phone-slash:before{content:""}.la-phone-square:before{content:""}.la-phone-square-alt:before{content:""}.la-phone-volume:before{content:""}.la-photo-video:before{content:""}.la-php:before{content:""}.la-pied-piper:before{content:""}.la-pied-piper-alt:before{content:""}.la-pied-piper-hat:before{content:""}.la-pied-piper-pp:before{content:""}.la-piggy-bank:before{content:""}.la-pills:before{content:""}.la-pinterest:before{content:""}.la-pinterest-p:before{content:""}.la-pinterest-square:before{content:""}.la-pizza-slice:before{content:""}.la-place-of-worship:before{content:""}.la-plane:before{content:""}.la-plane-arrival:before{content:""}.la-plane-departure:before{content:""}.la-play:before{content:""}.la-play-circle:before{content:""}.la-playstation:before{content:""}.la-plug:before{content:""}.la-plus:before{content:""}.la-plus-circle:before{content:""}.la-plus-square:before{content:""}.la-podcast:before{content:""}.la-poll:before{content:""}.la-poll-h:before{content:""}.la-poo:before{content:""}.la-poo-storm:before{content:""}.la-poop:before{content:""}.la-portrait:before{content:""}.la-pound-sign:before{content:""}.la-power-off:before{content:""}.la-pray:before{content:""}.la-praying-hands:before{content:""}.la-prescription:before{content:""}.la-prescription-bottle:before{content:""}.la-prescription-bottle-alt:before{content:""}.la-print:before{content:""}.la-procedures:before{content:""}.la-product-hunt:before{content:""}.la-project-diagram:before{content:""}.la-pushed:before{content:""}.la-puzzle-piece:before{content:""}.la-python:before{content:""}.la-qq:before{content:""}.la-qrcode:before{content:""}.la-question:before{content:""}.la-question-circle:before{content:""}.la-quidditch:before{content:""}.la-quinscape:before{content:""}.la-quora:before{content:""}.la-quote-left:before{content:""}.la-quote-right:before{content:""}.la-quran:before{content:""}.la-r-project:before{content:""}.la-radiation:before{content:""}.la-radiation-alt:before{content:""}.la-rainbow:before{content:""}.la-random:before{content:""}.la-raspberry-pi:before{content:""}.la-ravelry:before{content:""}.la-react:before{content:""}.la-reacteurope:before{content:""}.la-readme:before{content:""}.la-rebel:before{content:""}.la-receipt:before{content:""}.la-record-vinyl:before{content:""}.la-recycle:before{content:""}.la-red-river:before{content:""}.la-reddit:before{content:""}.la-reddit-alien:before{content:""}.la-reddit-square:before{content:""}.la-redhat:before{content:""}.la-redo:before{content:""}.la-redo-alt:before{content:""}.la-registered:before{content:""}.la-remove-format:before{content:""}.la-renren:before{content:""}.la-reply:before{content:""}.la-reply-all:before{content:""}.la-replyd:before{content:""}.la-republican:before{content:""}.la-researchgate:before{content:""}.la-resolving:before{content:""}.la-restroom:before{content:""}.la-retweet:before{content:""}.la-rev:before{content:""}.la-ribbon:before{content:""}.la-ring:before{content:""}.la-road:before{content:""}.la-robot:before{content:""}.la-rocket:before{content:""}.la-rocketchat:before{content:""}.la-rockrms:before{content:""}.la-route:before{content:""}.la-rss:before{content:""}.la-rss-square:before{content:""}.la-ruble-sign:before{content:""}.la-ruler:before{content:""}.la-ruler-combined:before{content:""}.la-ruler-horizontal:before{content:""}.la-ruler-vertical:before{content:""}.la-running:before{content:""}.la-rupee-sign:before{content:""}.la-sad-cry:before{content:""}.la-sad-tear:before{content:""}.la-safari:before{content:""}.la-salesforce:before{content:""}.la-sass:before{content:""}.la-satellite:before{content:""}.la-satellite-dish:before{content:""}.la-save:before{content:""}.la-schlix:before{content:""}.la-school:before{content:""}.la-screwdriver:before{content:""}.la-scribd:before{content:""}.la-scroll:before{content:""}.la-sd-card:before{content:""}.la-search:before{content:""}.la-search-dollar:before{content:""}.la-search-location:before{content:""}.la-search-minus:before{content:""}.la-search-plus:before{content:""}.la-searchengin:before{content:""}.la-seedling:before{content:""}.la-sellcast:before{content:""}.la-sellsy:before{content:""}.la-server:before{content:""}.la-servicestack:before{content:""}.la-shapes:before{content:""}.la-share:before{content:""}.la-share-alt:before{content:""}.la-share-alt-square:before{content:""}.la-share-square:before{content:""}.la-shekel-sign:before{content:""}.la-shield-alt:before{content:""}.la-ship:before{content:""}.la-shipping-fast:before{content:""}.la-shirtsinbulk:before{content:""}.la-shoe-prints:before{content:""}.la-shopping-bag:before{content:""}.la-shopping-basket:before{content:""}.la-shopping-cart:before{content:""}.la-shopware:before{content:""}.la-shower:before{content:""}.la-shuttle-van:before{content:""}.la-sign:before{content:""}.la-sign-in-alt:before{content:""}.la-sign-language:before{content:""}.la-sign-out-alt:before{content:""}.la-signal:before{content:""}.la-signature:before{content:""}.la-sim-card:before{content:""}.la-simplybuilt:before{content:""}.la-sistrix:before{content:""}.la-sitemap:before{content:""}.la-sith:before{content:""}.la-skating:before{content:""}.la-sketch:before{content:""}.la-skiing:before{content:""}.la-skiing-nordic:before{content:""}.la-skull:before{content:""}.la-skull-crossbones:before{content:""}.la-skyatlas:before{content:""}.la-skype:before{content:""}.la-slack:before{content:""}.la-slack-hash:before{content:""}.la-slash:before{content:""}.la-sleigh:before{content:""}.la-sliders-h:before{content:""}.la-slideshare:before{content:""}.la-smile:before{content:""}.la-smile-beam:before{content:""}.la-smile-wink:before{content:""}.la-smog:before{content:""}.la-smoking:before{content:""}.la-smoking-ban:before{content:""}.la-sms:before{content:""}.la-snapchat:before{content:""}.la-snapchat-ghost:before{content:""}.la-snapchat-square:before{content:""}.la-snowboarding:before{content:""}.la-snowflake:before{content:""}.la-snowman:before{content:""}.la-snowplow:before{content:""}.la-socks:before{content:""}.la-solar-panel:before{content:""}.la-sort:before{content:""}.la-sort-alpha-down:before{content:""}.la-sort-alpha-down-alt:before{content:""}.la-sort-alpha-up:before{content:""}.la-sort-alpha-up-alt:before{content:""}.la-sort-amount-down:before{content:""}.la-sort-amount-down-alt:before{content:""}.la-sort-amount-up:before{content:""}.la-sort-amount-up-alt:before{content:""}.la-sort-down:before{content:""}.la-sort-numeric-down:before{content:""}.la-sort-numeric-down-alt:before{content:""}.la-sort-numeric-up:before{content:""}.la-sort-numeric-up-alt:before{content:""}.la-sort-up:before{content:""}.la-soundcloud:before{content:""}.la-sourcetree:before{content:""}.la-spa:before{content:""}.la-space-shuttle:before{content:""}.la-speakap:before{content:""}.la-speaker-deck:before{content:""}.la-spell-check:before{content:""}.la-spider:before{content:""}.la-spinner:before{content:""}.la-splotch:before{content:""}.la-spotify:before{content:""}.la-spray-can:before{content:""}.la-square:before{content:""}.la-square-full:before{content:""}.la-square-root-alt:before{content:""}.la-squarespace:before{content:""}.la-stack-exchange:before{content:""}.la-stack-overflow:before{content:""}.la-stackpath:before{content:""}.la-stamp:before{content:""}.la-star:before{content:""}.la-star-and-crescent:before{content:""}.la-star-half:before{content:""}.la-star-half-alt:before{content:""}.la-star-of-david:before{content:""}.la-star-of-life:before{content:""}.la-staylinked:before{content:""}.la-steam:before{content:""}.la-steam-square:before{content:""}.la-steam-symbol:before{content:""}.la-step-backward:before{content:""}.la-step-forward:before{content:""}.la-stethoscope:before{content:""}.la-sticker-mule:before{content:""}.la-sticky-note:before{content:""}.la-stop:before{content:""}.la-stop-circle:before{content:""}.la-stopwatch:before{content:""}.la-store:before{content:""}.la-store-alt:before{content:""}.la-strava:before{content:""}.la-stream:before{content:""}.la-street-view:before{content:""}.la-strikethrough:before{content:""}.la-stripe:before{content:""}.la-stripe-s:before{content:""}.la-stroopwafel:before{content:""}.la-studiovinari:before{content:""}.la-stumbleupon:before{content:""}.la-stumbleupon-circle:before{content:""}.la-subscript:before{content:""}.la-subway:before{content:""}.la-suitcase:before{content:""}.la-suitcase-rolling:before{content:""}.la-sun:before{content:""}.la-superpowers:before{content:""}.la-superscript:before{content:""}.la-supple:before{content:""}.la-surprise:before{content:""}.la-suse:before{content:""}.la-swatchbook:before{content:""}.la-swift:before{content:""}.la-swimmer:before{content:""}.la-swimming-pool:before{content:""}.la-symfony:before{content:""}.la-synagogue:before{content:""}.la-sync:before{content:""}.la-sync-alt:before{content:""}.la-syringe:before{content:""}.la-table:before{content:""}.la-table-tennis:before{content:""}.la-tablet:before{content:""}.la-tablet-alt:before{content:""}.la-tablets:before{content:""}.la-tachometer-alt:before{content:""}.la-tag:before{content:""}.la-tags:before{content:""}.la-tape:before{content:""}.la-tasks:before{content:""}.la-taxi:before{content:""}.la-teamspeak:before{content:""}.la-teeth:before{content:""}.la-teeth-open:before{content:""}.la-telegram:before{content:""}.la-telegram-plane:before{content:""}.la-temperature-high:before{content:""}.la-temperature-low:before{content:""}.la-tencent-weibo:before{content:""}.la-tenge:before{content:""}.la-terminal:before{content:""}.la-text-height:before{content:""}.la-text-width:before{content:""}.la-th:before{content:""}.la-th-large:before{content:""}.la-th-list:before{content:""}.la-the-red-yeti:before{content:""}.la-theater-masks:before{content:""}.la-themeco:before{content:""}.la-themeisle:before{content:""}.la-thermometer:before{content:""}.la-thermometer-empty:before{content:""}.la-thermometer-full:before{content:""}.la-thermometer-half:before{content:""}.la-thermometer-quarter:before{content:""}.la-thermometer-three-quarters:before{content:""}.la-think-peaks:before{content:""}.la-thumbs-down:before{content:""}.la-thumbs-up:before{content:""}.la-thumbtack:before{content:""}.la-ticket-alt:before{content:""}.la-times:before{content:""}.la-times-circle:before{content:""}.la-tint:before{content:""}.la-tint-slash:before{content:""}.la-tired:before{content:""}.la-toggle-off:before{content:""}.la-toggle-on:before{content:""}.la-toilet:before{content:""}.la-toilet-paper:before{content:""}.la-toolbox:before{content:""}.la-tools:before{content:""}.la-tooth:before{content:""}.la-torah:before{content:""}.la-torii-gate:before{content:""}.la-tractor:before{content:""}.la-trade-federation:before{content:""}.la-trademark:before{content:""}.la-traffic-light:before{content:""}.la-train:before{content:""}.la-tram:before{content:""}.la-transgender:before{content:""}.la-transgender-alt:before{content:""}.la-trash:before{content:""}.la-trash-alt:before{content:""}.la-trash-restore:before{content:""}.la-trash-restore-alt:before{content:""}.la-tree:before{content:""}.la-trello:before{content:""}.la-tripadvisor:before{content:""}.la-trophy:before{content:""}.la-truck:before{content:""}.la-truck-loading:before{content:""}.la-truck-monster:before{content:""}.la-truck-moving:before{content:""}.la-truck-pickup:before{content:""}.la-tshirt:before{content:""}.la-tty:before{content:""}.la-tumblr:before{content:""}.la-tumblr-square:before{content:""}.la-tv:before{content:""}.la-twitch:before{content:""}.la-twitter:before{content:""}.la-twitter-square:before{content:""}.la-typo3:before{content:""}.la-uber:before{content:""}.la-ubuntu:before{content:""}.la-uikit:before{content:""}.la-umbraco:before{content:""}.la-umbrella:before{content:""}.la-umbrella-beach:before{content:""}.la-underline:before{content:""}.la-undo:before{content:""}.la-undo-alt:before{content:""}.la-uniregistry:before{content:""}.la-universal-access:before{content:""}.la-university:before{content:""}.la-unlink:before{content:""}.la-unlock:before{content:""}.la-unlock-alt:before{content:""}.la-untappd:before{content:""}.la-upload:before{content:""}.la-ups:before{content:""}.la-usb:before{content:""}.la-user:before{content:""}.la-user-alt:before{content:""}.la-user-alt-slash:before{content:""}.la-user-astronaut:before{content:""}.la-user-check:before{content:""}.la-user-circle:before{content:""}.la-user-clock:before{content:""}.la-user-cog:before{content:""}.la-user-edit:before{content:""}.la-user-friends:before{content:""}.la-user-graduate:before{content:""}.la-user-injured:before{content:""}.la-user-lock:before{content:""}.la-user-md:before{content:""}.la-user-minus:before{content:""}.la-user-ninja:before{content:""}.la-user-nurse:before{content:""}.la-user-plus:before{content:""}.la-user-secret:before{content:""}.la-user-shield:before{content:""}.la-user-slash:before{content:""}.la-user-tag:before{content:""}.la-user-tie:before{content:""}.la-user-times:before{content:""}.la-users:before{content:""}.la-users-cog:before{content:""}.la-usps:before{content:""}.la-ussunnah:before{content:""}.la-utensil-spoon:before{content:""}.la-utensils:before{content:""}.la-vaadin:before{content:""}.la-vector-square:before{content:""}.la-venus:before{content:""}.la-venus-double:before{content:""}.la-venus-mars:before{content:""}.la-viacoin:before{content:""}.la-viadeo:before{content:""}.la-viadeo-square:before{content:""}.la-vial:before{content:""}.la-vials:before{content:""}.la-viber:before{content:""}.la-video:before{content:""}.la-video-slash:before{content:""}.la-vihara:before{content:""}.la-vimeo:before{content:""}.la-vimeo-square:before{content:""}.la-vimeo-v:before{content:""}.la-vine:before{content:""}.la-vk:before{content:""}.la-vnv:before{content:""}.la-voicemail:before{content:""}.la-volleyball-ball:before{content:""}.la-volume-down:before{content:""}.la-volume-mute:before{content:""}.la-volume-off:before{content:""}.la-volume-up:before{content:""}.la-vote-yea:before{content:""}.la-vr-cardboard:before{content:""}.la-vuejs:before{content:""}.la-walking:before{content:""}.la-wallet:before{content:""}.la-warehouse:before{content:""}.la-water:before{content:""}.la-wave-square:before{content:""}.la-waze:before{content:""}.la-weebly:before{content:""}.la-weibo:before{content:""}.la-weight:before{content:""}.la-weight-hanging:before{content:""}.la-weixin:before{content:""}.la-whatsapp:before{content:""}.la-whatsapp-square:before{content:""}.la-wheelchair:before{content:""}.la-whmcs:before{content:""}.la-wifi:before{content:""}.la-wikipedia-w:before{content:""}.la-wind:before{content:""}.la-window-close:before{content:""}.la-window-maximize:before{content:""}.la-window-minimize:before{content:""}.la-window-restore:before{content:""}.la-windows:before{content:""}.la-wine-bottle:before{content:""}.la-wine-glass:before{content:""}.la-wine-glass-alt:before{content:""}.la-wix:before{content:""}.la-wizards-of-the-coast:before{content:""}.la-wolf-pack-battalion:before{content:""}.la-won-sign:before{content:""}.la-wordpress:before{content:""}.la-wordpress-simple:before{content:""}.la-wpbeginner:before{content:""}.la-wpexplorer:before{content:""}.la-wpforms:before{content:""}.la-wpressr:before{content:""}.la-wrench:before{content:""}.la-x-ray:before{content:""}.la-xbox:before{content:""}.la-xing:before{content:""}.la-xing-square:before{content:""}.la-y-combinator:before{content:""}.la-yahoo:before{content:""}.la-yammer:before{content:""}.la-yandex:before{content:""}.la-yandex-international:before{content:""}.la-yarn:before{content:""}.la-yelp:before{content:""}.la-yen-sign:before{content:""}.la-yin-yang:before{content:""}.la-yoast:before{content:""}.la-youtube:before{content:""}.la-youtube-square:before{content:""}.la-zhihu:before{content:""}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-family:Line Awesome Brands;font-style:normal;font-weight:400;font-display:auto;src:url(${T(""+new URL("la-brands-400-c0e32387.eot",import.meta.url).href)});src:url(${T(""+new URL("la-brands-400-c0e32387.eot",import.meta.url).href+"?#iefix")}) format("embedded-opentype"),url(${T(""+new URL("la-brands-400-ff70c9bc.woff2",import.meta.url).href)}) format("woff2"),url(${T(""+new URL("la-brands-400-14c63377.woff",import.meta.url).href)}) format("woff"),url(${T(""+new URL("la-brands-400-fbc98702.ttf",import.meta.url).href)}) format("truetype"),url(${T(""+new URL("la-brands-400-4da18191.svg",import.meta.url).href+"#lineawesome")}) format("svg")}.lab{font-family:Line Awesome Brands}@font-face{font-family:Line Awesome Free;font-style:normal;font-weight:400;font-display:auto;src:url(${T(""+new URL("la-regular-400-7dc456f0.eot",import.meta.url).href)});src:url(${T(""+new URL("la-regular-400-7dc456f0.eot",import.meta.url).href+"?#iefix")}) format("embedded-opentype"),url(${T(""+new URL("la-regular-400-51ca2c00.woff2",import.meta.url).href)}) format("woff2"),url(${T(""+new URL("la-regular-400-7711fabc.woff",import.meta.url).href)}) format("woff"),url(${T(""+new URL("la-regular-400-4b6ab8d0.ttf",import.meta.url).href)}) format("truetype"),url(${T(""+new URL("la-regular-400-884ce19c.svg",import.meta.url).href+"#lineawesome")}) format("svg")}.lar{font-family:Line Awesome Free;font-weight:400}@font-face{font-family:Line Awesome Free;font-style:normal;font-weight:900;font-display:auto;src:url(${T(""+new URL("la-solid-900-8a57f8a9.eot",import.meta.url).href)});src:url(${T(""+new URL("la-solid-900-8a57f8a9.eot",import.meta.url).href+"?#iefix")}) format("embedded-opentype"),url(${T(""+new URL("la-solid-900-10a68e01.woff2",import.meta.url).href)}) format("woff2"),url(${T(""+new URL("la-solid-900-a0d21b2a.woff",import.meta.url).href)}) format("woff"),url(${T(""+new URL("la-solid-900-07ce3559.ttf",import.meta.url).href)}) format("truetype"),url(${T(""+new URL("la-solid-900-0ce0cc40.svg",import.meta.url).href+"#lineawesome")}) format("svg")}.la,.las{font-family:Line Awesome Free;font-weight:900}.la.la-glass:before{content:""}.la.la-meetup{font-family:Line Awesome Brands;font-weight:400}.la.la-star-o{font-family:Line Awesome Free;font-weight:400}.la.la-star-o:before{content:""}.la.la-remove:before{content:""}.la.la-close:before{content:""}.la.la-gear:before{content:""}.la.la-trash-o{font-family:Line Awesome Free;font-weight:400}.la.la-trash-o:before{content:""}.la.la-file-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-o:before{content:""}.la.la-clock-o{font-family:Line Awesome Free;font-weight:400}.la.la-clock-o:before{content:""}.la.la-arrow-circle-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-down:before{content:""}.la.la-arrow-circle-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-up:before{content:""}.la.la-play-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-play-circle-o:before{content:""}.la.la-repeat:before{content:""}.la.la-rotate-right:before{content:""}.la.la-refresh:before{content:""}.la.la-list-alt{font-family:Line Awesome Free;font-weight:400}.la.la-dedent:before{content:""}.la.la-video-camera:before{content:""}.la.la-picture-o{font-family:Line Awesome Free;font-weight:400}.la.la-picture-o:before{content:""}.la.la-photo{font-family:Line Awesome Free;font-weight:400}.la.la-photo:before{content:""}.la.la-image{font-family:Line Awesome Free;font-weight:400}.la.la-image:before{content:""}.la.la-pencil:before{content:""}.la.la-map-marker:before{content:""}.la.la-pencil-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-pencil-square-o:before{content:""}.la.la-share-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-share-square-o:before{content:""}.la.la-check-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-check-square-o:before{content:""}.la.la-arrows:before{content:""}.la.la-times-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-times-circle-o:before{content:""}.la.la-check-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-check-circle-o:before{content:""}.la.la-mail-forward:before{content:""}.la.la-eye,.la.la-eye-slash{font-family:Line Awesome Free;font-weight:400}.la.la-warning:before{content:""}.la.la-calendar:before{content:""}.la.la-arrows-v:before{content:""}.la.la-arrows-h:before{content:""}.la.la-bar-chart{font-family:Line Awesome Free;font-weight:400}.la.la-bar-chart:before{content:""}.la.la-bar-chart-o{font-family:Line Awesome Free;font-weight:400}.la.la-bar-chart-o:before{content:""}.la.la-twitter-square,.la.la-facebook-square{font-family:Line Awesome Brands;font-weight:400}.la.la-gears:before{content:""}.la.la-thumbs-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-thumbs-o-up:before{content:""}.la.la-thumbs-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-thumbs-o-down:before{content:""}.la.la-heart-o{font-family:Line Awesome Free;font-weight:400}.la.la-heart-o:before{content:""}.la.la-sign-out:before{content:""}.la.la-linkedin-square{font-family:Line Awesome Brands;font-weight:400}.la.la-linkedin-square:before{content:""}.la.la-thumb-tack:before{content:""}.la.la-external-link:before{content:""}.la.la-sign-in:before{content:""}.la.la-github-square{font-family:Line Awesome Brands;font-weight:400}.la.la-lemon-o{font-family:Line Awesome Free;font-weight:400}.la.la-lemon-o:before{content:""}.la.la-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-square-o:before{content:""}.la.la-bookmark-o{font-family:Line Awesome Free;font-weight:400}.la.la-bookmark-o:before{content:""}.la.la-twitter,.la.la-facebook{font-family:Line Awesome Brands;font-weight:400}.la.la-facebook:before{content:""}.la.la-facebook-f{font-family:Line Awesome Brands;font-weight:400}.la.la-facebook-f:before{content:""}.la.la-github{font-family:Line Awesome Brands;font-weight:400}.la.la-credit-card{font-family:Line Awesome Free;font-weight:400}.la.la-feed:before{content:""}.la.la-hdd-o{font-family:Line Awesome Free;font-weight:400}.la.la-hdd-o:before{content:""}.la.la-hand-o-right{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-right:before{content:""}.la.la-hand-o-left{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-left:before{content:""}.la.la-hand-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-up:before{content:""}.la.la-hand-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-down:before{content:""}.la.la-arrows-alt:before{content:""}.la.la-group:before{content:""}.la.la-chain:before{content:""}.la.la-scissors:before{content:""}.la.la-files-o{font-family:Line Awesome Free;font-weight:400}.la.la-files-o:before{content:""}.la.la-floppy-o{font-family:Line Awesome Free;font-weight:400}.la.la-floppy-o:before{content:""}.la.la-navicon:before{content:""}.la.la-reorder:before{content:""}.la.la-pinterest,.la.la-pinterest-square,.la.la-google-plus-square,.la.la-google-plus{font-family:Line Awesome Brands;font-weight:400}.la.la-google-plus:before{content:""}.la.la-money{font-family:Line Awesome Free;font-weight:400}.la.la-money:before{content:""}.la.la-unsorted:before{content:""}.la.la-sort-desc:before{content:""}.la.la-sort-asc:before{content:""}.la.la-linkedin{font-family:Line Awesome Brands;font-weight:400}.la.la-linkedin:before{content:""}.la.la-rotate-left:before{content:""}.la.la-legal:before{content:""}.la.la-tachometer:before{content:""}.la.la-dashboard:before{content:""}.la.la-comment-o{font-family:Line Awesome Free;font-weight:400}.la.la-comment-o:before{content:""}.la.la-comments-o{font-family:Line Awesome Free;font-weight:400}.la.la-comments-o:before{content:""}.la.la-flash:before{content:""}.la.la-clipboard,.la.la-paste{font-family:Line Awesome Free;font-weight:400}.la.la-paste:before{content:""}.la.la-lightbulb-o{font-family:Line Awesome Free;font-weight:400}.la.la-lightbulb-o:before{content:""}.la.la-exchange:before{content:""}.la.la-cloud-download:before{content:""}.la.la-cloud-upload:before{content:""}.la.la-bell-o{font-family:Line Awesome Free;font-weight:400}.la.la-bell-o:before{content:""}.la.la-cutlery:before{content:""}.la.la-file-text-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-text-o:before{content:""}.la.la-building-o{font-family:Line Awesome Free;font-weight:400}.la.la-building-o:before{content:""}.la.la-hospital-o{font-family:Line Awesome Free;font-weight:400}.la.la-hospital-o:before{content:""}.la.la-tablet:before{content:""}.la.la-mobile:before{content:""}.la.la-mobile-phone:before{content:""}.la.la-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-circle-o:before{content:""}.la.la-mail-reply:before{content:""}.la.la-github-alt{font-family:Line Awesome Brands;font-weight:400}.la.la-folder-o{font-family:Line Awesome Free;font-weight:400}.la.la-folder-o:before{content:""}.la.la-folder-open-o{font-family:Line Awesome Free;font-weight:400}.la.la-folder-open-o:before{content:""}.la.la-smile-o{font-family:Line Awesome Free;font-weight:400}.la.la-smile-o:before{content:""}.la.la-frown-o{font-family:Line Awesome Free;font-weight:400}.la.la-frown-o:before{content:""}.la.la-meh-o{font-family:Line Awesome Free;font-weight:400}.la.la-meh-o:before{content:""}.la.la-keyboard-o{font-family:Line Awesome Free;font-weight:400}.la.la-keyboard-o:before{content:""}.la.la-flag-o{font-family:Line Awesome Free;font-weight:400}.la.la-flag-o:before{content:""}.la.la-mail-reply-all:before{content:""}.la.la-star-half-o{font-family:Line Awesome Free;font-weight:400}.la.la-star-half-o:before{content:""}.la.la-star-half-empty{font-family:Line Awesome Free;font-weight:400}.la.la-star-half-empty:before{content:""}.la.la-star-half-full{font-family:Line Awesome Free;font-weight:400}.la.la-star-half-full:before{content:""}.la.la-code-fork:before{content:""}.la.la-chain-broken:before{content:""}.la.la-shield:before{content:""}.la.la-calendar-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-o:before{content:""}.la.la-maxcdn,.la.la-html5,.la.la-css3{font-family:Line Awesome Brands;font-weight:400}.la.la-ticket:before{content:""}.la.la-minus-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-minus-square-o:before{content:""}.la.la-level-up:before{content:""}.la.la-level-down:before{content:""}.la.la-pencil-square:before{content:""}.la.la-external-link-square:before{content:""}.la.la-compass,.la.la-caret-square-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-down:before{content:""}.la.la-toggle-down{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-down:before{content:""}.la.la-caret-square-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-up:before{content:""}.la.la-toggle-up{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-up:before{content:""}.la.la-caret-square-o-right{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-right:before{content:""}.la.la-toggle-right{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-right:before{content:""}.la.la-eur:before{content:""}.la.la-euro:before{content:""}.la.la-gbp:before{content:""}.la.la-usd:before{content:""}.la.la-dollar:before{content:""}.la.la-inr:before{content:""}.la.la-rupee:before{content:""}.la.la-jpy:before{content:""}.la.la-cny:before{content:""}.la.la-rmb:before{content:""}.la.la-yen:before{content:""}.la.la-rub:before{content:""}.la.la-ruble:before{content:""}.la.la-rouble:before{content:""}.la.la-krw:before{content:""}.la.la-won:before{content:""}.la.la-btc,.la.la-bitcoin{font-family:Line Awesome Brands;font-weight:400}.la.la-bitcoin:before{content:""}.la.la-file-text:before{content:""}.la.la-sort-alpha-asc:before{content:""}.la.la-sort-alpha-desc:before{content:""}.la.la-sort-amount-asc:before{content:""}.la.la-sort-amount-desc:before{content:""}.la.la-sort-numeric-asc:before{content:""}.la.la-sort-numeric-desc:before{content:""}.la.la-youtube-square,.la.la-youtube,.la.la-xing,.la.la-xing-square,.la.la-youtube-play{font-family:Line Awesome Brands;font-weight:400}.la.la-youtube-play:before{content:""}.la.la-dropbox,.la.la-stack-overflow,.la.la-instagram,.la.la-flickr,.la.la-adn,.la.la-bitbucket,.la.la-bitbucket-square{font-family:Line Awesome Brands;font-weight:400}.la.la-bitbucket-square:before{content:""}.la.la-tumblr,.la.la-tumblr-square{font-family:Line Awesome Brands;font-weight:400}.la.la-long-arrow-down:before{content:""}.la.la-long-arrow-up:before{content:""}.la.la-long-arrow-left:before{content:""}.la.la-long-arrow-right:before{content:""}.la.la-apple,.la.la-windows,.la.la-android,.la.la-linux,.la.la-dribbble,.la.la-skype,.la.la-foursquare,.la.la-trello,.la.la-gratipay,.la.la-gittip{font-family:Line Awesome Brands;font-weight:400}.la.la-gittip:before{content:""}.la.la-sun-o{font-family:Line Awesome Free;font-weight:400}.la.la-sun-o:before{content:""}.la.la-moon-o{font-family:Line Awesome Free;font-weight:400}.la.la-moon-o:before{content:""}.la.la-vk,.la.la-weibo,.la.la-renren,.la.la-pagelines,.la.la-stack-exchange{font-family:Line Awesome Brands;font-weight:400}.la.la-arrow-circle-o-right{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-right:before{content:""}.la.la-arrow-circle-o-left{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-left:before{content:""}.la.la-caret-square-o-left{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-left:before{content:""}.la.la-toggle-left{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-left:before{content:""}.la.la-dot-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-dot-circle-o:before{content:""}.la.la-vimeo-square{font-family:Line Awesome Brands;font-weight:400}.la.la-try:before{content:""}.la.la-turkish-lira:before{content:""}.la.la-plus-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-plus-square-o:before{content:""}.la.la-slack,.la.la-wordpress,.la.la-openid{font-family:Line Awesome Brands;font-weight:400}.la.la-institution:before{content:""}.la.la-bank:before{content:""}.la.la-mortar-board:before{content:""}.la.la-yahoo,.la.la-google,.la.la-reddit,.la.la-reddit-square,.la.la-stumbleupon-circle,.la.la-stumbleupon,.la.la-delicious,.la.la-digg,.la.la-pied-piper-pp,.la.la-pied-piper-alt,.la.la-drupal,.la.la-joomla{font-family:Line Awesome Brands;font-weight:400}.la.la-spoon:before{content:""}.la.la-behance,.la.la-behance-square,.la.la-steam,.la.la-steam-square{font-family:Line Awesome Brands;font-weight:400}.la.la-automobile:before{content:""}.la.la-cab:before{content:""}.la.la-envelope-o{font-family:Line Awesome Free;font-weight:400}.la.la-envelope-o:before{content:""}.la.la-deviantart,.la.la-soundcloud{font-family:Line Awesome Brands;font-weight:400}.la.la-file-pdf-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-pdf-o:before{content:""}.la.la-file-word-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-word-o:before{content:""}.la.la-file-excel-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-excel-o:before{content:""}.la.la-file-powerpoint-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-powerpoint-o:before{content:""}.la.la-file-image-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-image-o:before{content:""}.la.la-file-photo-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-photo-o:before{content:""}.la.la-file-picture-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-picture-o:before{content:""}.la.la-file-archive-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-archive-o:before{content:""}.la.la-file-zip-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-zip-o:before{content:""}.la.la-file-audio-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-audio-o:before{content:""}.la.la-file-sound-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-sound-o:before{content:""}.la.la-file-video-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-video-o:before{content:""}.la.la-file-movie-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-movie-o:before{content:""}.la.la-file-code-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-code-o:before{content:""}.la.la-vine,.la.la-codepen,.la.la-jsfiddle{font-family:Line Awesome Brands;font-weight:400}.la.la-life-ring,.la.la-life-bouy{font-family:Line Awesome Free;font-weight:400}.la.la-life-bouy:before{content:""}.la.la-life-buoy{font-family:Line Awesome Free;font-weight:400}.la.la-life-buoy:before{content:""}.la.la-life-saver{font-family:Line Awesome Free;font-weight:400}.la.la-life-saver:before{content:""}.la.la-support{font-family:Line Awesome Free;font-weight:400}.la.la-support:before{content:""}.la.la-circle-o-notch:before{content:""}.la.la-rebel,.la.la-ra{font-family:Line Awesome Brands;font-weight:400}.la.la-ra:before{content:""}.la.la-resistance{font-family:Line Awesome Brands;font-weight:400}.la.la-resistance:before{content:""}.la.la-empire,.la.la-ge{font-family:Line Awesome Brands;font-weight:400}.la.la-ge:before{content:""}.la.la-git-square,.la.la-git,.la.la-hacker-news,.la.la-y-combinator-square{font-family:Line Awesome Brands;font-weight:400}.la.la-y-combinator-square:before{content:""}.la.la-yc-square{font-family:Line Awesome Brands;font-weight:400}.la.la-yc-square:before{content:""}.la.la-tencent-weibo,.la.la-qq,.la.la-weixin,.la.la-wechat{font-family:Line Awesome Brands;font-weight:400}.la.la-wechat:before{content:""}.la.la-send:before{content:""}.la.la-paper-plane-o{font-family:Line Awesome Free;font-weight:400}.la.la-paper-plane-o:before{content:""}.la.la-send-o{font-family:Line Awesome Free;font-weight:400}.la.la-send-o:before{content:""}.la.la-circle-thin{font-family:Line Awesome Free;font-weight:400}.la.la-circle-thin:before{content:""}.la.la-header:before{content:""}.la.la-sliders:before{content:""}.la.la-futbol-o{font-family:Line Awesome Free;font-weight:400}.la.la-futbol-o:before{content:""}.la.la-soccer-ball-o{font-family:Line Awesome Free;font-weight:400}.la.la-soccer-ball-o:before{content:""}.la.la-slideshare,.la.la-twitch,.la.la-yelp{font-family:Line Awesome Brands;font-weight:400}.la.la-newspaper-o{font-family:Line Awesome Free;font-weight:400}.la.la-newspaper-o:before{content:""}.la.la-paypal,.la.la-google-wallet,.la.la-cc-visa,.la.la-cc-mastercard,.la.la-cc-discover,.la.la-cc-amex,.la.la-cc-paypal,.la.la-cc-stripe{font-family:Line Awesome Brands;font-weight:400}.la.la-bell-slash-o{font-family:Line Awesome Free;font-weight:400}.la.la-bell-slash-o:before{content:""}.la.la-trash:before{content:""}.la.la-copyright{font-family:Line Awesome Free;font-weight:400}.la.la-eyedropper:before{content:""}.la.la-area-chart:before{content:""}.la.la-pie-chart:before{content:""}.la.la-line-chart:before{content:""}.la.la-lastfm,.la.la-lastfm-square,.la.la-ioxhost,.la.la-angellist{font-family:Line Awesome Brands;font-weight:400}.la.la-cc{font-family:Line Awesome Free;font-weight:400}.la.la-cc:before{content:""}.la.la-ils:before{content:""}.la.la-shekel:before{content:""}.la.la-sheqel:before{content:""}.la.la-meanpath{font-family:Line Awesome Brands;font-weight:400}.la.la-meanpath:before{content:""}.la.la-buysellads,.la.la-connectdevelop,.la.la-dashcube,.la.la-forumbee,.la.la-leanpub,.la.la-sellsy,.la.la-shirtsinbulk,.la.la-simplybuilt,.la.la-skyatlas{font-family:Line Awesome Brands;font-weight:400}.la.la-diamond{font-family:Line Awesome Free;font-weight:400}.la.la-diamond:before{content:""}.la.la-intersex:before{content:""}.la.la-facebook-official{font-family:Line Awesome Brands;font-weight:400}.la.la-facebook-official:before{content:""}.la.la-pinterest-p,.la.la-whatsapp{font-family:Line Awesome Brands;font-weight:400}.la.la-hotel:before{content:""}.la.la-viacoin,.la.la-medium,.la.la-y-combinator,.la.la-yc{font-family:Line Awesome Brands;font-weight:400}.la.la-yc:before{content:""}.la.la-optin-monster,.la.la-opencart,.la.la-expeditedssl{font-family:Line Awesome Brands;font-weight:400}.la.la-battery-4:before{content:""}.la.la-battery:before{content:""}.la.la-battery-3:before{content:""}.la.la-battery-2:before{content:""}.la.la-battery-1:before{content:""}.la.la-battery-0:before{content:""}.la.la-object-group,.la.la-object-ungroup,.la.la-sticky-note-o{font-family:Line Awesome Free;font-weight:400}.la.la-sticky-note-o:before{content:""}.la.la-cc-jcb,.la.la-cc-diners-club{font-family:Line Awesome Brands;font-weight:400}.la.la-clone,.la.la-hourglass-o{font-family:Line Awesome Free;font-weight:400}.la.la-hourglass-o:before{content:""}.la.la-hourglass-1:before{content:""}.la.la-hourglass-2:before{content:""}.la.la-hourglass-3:before{content:""}.la.la-hand-rock-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-rock-o:before{content:""}.la.la-hand-grab-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-grab-o:before{content:""}.la.la-hand-paper-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-paper-o:before{content:""}.la.la-hand-stop-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-stop-o:before{content:""}.la.la-hand-scissors-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-scissors-o:before{content:""}.la.la-hand-lizard-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-lizard-o:before{content:""}.la.la-hand-spock-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-spock-o:before{content:""}.la.la-hand-pointer-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-pointer-o:before{content:""}.la.la-hand-peace-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-peace-o:before{content:""}.la.la-registered{font-family:Line Awesome Free;font-weight:400}.la.la-creative-commons,.la.la-gg,.la.la-gg-circle,.la.la-tripadvisor,.la.la-odnoklassniki,.la.la-odnoklassniki-square,.la.la-get-pocket,.la.la-wikipedia-w,.la.la-safari,.la.la-chrome,.la.la-firefox,.la.la-opera,.la.la-internet-explorer{font-family:Line Awesome Brands;font-weight:400}.la.la-television:before{content:""}.la.la-contao,.la.la-500px,.la.la-amazon{font-family:Line Awesome Brands;font-weight:400}.la.la-calendar-plus-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-plus-o:before{content:""}.la.la-calendar-minus-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-minus-o:before{content:""}.la.la-calendar-times-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-times-o:before{content:""}.la.la-calendar-check-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-check-o:before{content:""}.la.la-map-o{font-family:Line Awesome Free;font-weight:400}.la.la-map-o:before{content:""}.la.la-commenting:before{content:""}.la.la-commenting-o{font-family:Line Awesome Free;font-weight:400}.la.la-commenting-o:before{content:""}.la.la-houzz,.la.la-vimeo{font-family:Line Awesome Brands;font-weight:400}.la.la-vimeo:before{content:""}.la.la-black-tie,.la.la-fonticons,.la.la-reddit-alien,.la.la-edge{font-family:Line Awesome Brands;font-weight:400}.la.la-credit-card-alt:before{content:""}.la.la-codiepie,.la.la-modx,.la.la-fort-awesome,.la.la-usb,.la.la-product-hunt,.la.la-mixcloud,.la.la-scribd{font-family:Line Awesome Brands;font-weight:400}.la.la-pause-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-pause-circle-o:before{content:""}.la.la-stop-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-stop-circle-o:before{content:""}.la.la-bluetooth,.la.la-bluetooth-b,.la.la-gitlab,.la.la-wpbeginner,.la.la-wpforms,.la.la-envira,.la.la-wheelchair-alt{font-family:Line Awesome Brands;font-weight:400}.la.la-wheelchair-alt:before{content:""}.la.la-question-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-question-circle-o:before{content:""}.la.la-volume-control-phone:before{content:""}.la.la-asl-interpreting:before{content:""}.la.la-deafness:before{content:""}.la.la-hard-of-hearing:before{content:""}.la.la-glide,.la.la-glide-g{font-family:Line Awesome Brands;font-weight:400}.la.la-signing:before{content:""}.la.la-viadeo,.la.la-viadeo-square,.la.la-snapchat,.la.la-snapchat-ghost,.la.la-snapchat-square,.la.la-pied-piper,.la.la-first-order,.la.la-yoast,.la.la-themeisle,.la.la-google-plus-official{font-family:Line Awesome Brands;font-weight:400}.la.la-google-plus-official:before{content:""}.la.la-google-plus-circle{font-family:Line Awesome Brands;font-weight:400}.la.la-google-plus-circle:before{content:""}.la.la-font-awesome,.la.la-fa{font-family:Line Awesome Brands;font-weight:400}.la.la-fa:before{content:""}.la.la-handshake-o{font-family:Line Awesome Free;font-weight:400}.la.la-handshake-o:before{content:""}.la.la-envelope-open-o{font-family:Line Awesome Free;font-weight:400}.la.la-envelope-open-o:before{content:""}.la.la-linode{font-family:Line Awesome Brands;font-weight:400}.la.la-address-book-o{font-family:Line Awesome Free;font-weight:400}.la.la-address-book-o:before{content:""}.la.la-vcard:before{content:""}.la.la-address-card-o{font-family:Line Awesome Free;font-weight:400}.la.la-address-card-o:before{content:""}.la.la-vcard-o{font-family:Line Awesome Free;font-weight:400}.la.la-vcard-o:before{content:""}.la.la-user-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-user-circle-o:before{content:""}.la.la-user-o{font-family:Line Awesome Free;font-weight:400}.la.la-user-o:before{content:""}.la.la-id-badge{font-family:Line Awesome Free;font-weight:400}.la.la-drivers-license:before{content:""}.la.la-id-card-o{font-family:Line Awesome Free;font-weight:400}.la.la-id-card-o:before{content:""}.la.la-drivers-license-o{font-family:Line Awesome Free;font-weight:400}.la.la-drivers-license-o:before{content:""}.la.la-quora,.la.la-free-code-camp,.la.la-telegram{font-family:Line Awesome Brands;font-weight:400}.la.la-thermometer-4:before{content:""}.la.la-thermometer:before{content:""}.la.la-thermometer-3:before{content:""}.la.la-thermometer-2:before{content:""}.la.la-thermometer-1:before{content:""}.la.la-thermometer-0:before{content:""}.la.la-bathtub:before{content:""}.la.la-s15:before{content:""}.la.la-window-maximize,.la.la-window-restore{font-family:Line Awesome Free;font-weight:400}.la.la-times-rectangle:before{content:""}.la.la-window-close-o{font-family:Line Awesome Free;font-weight:400}.la.la-window-close-o:before{content:""}.la.la-times-rectangle-o{font-family:Line Awesome Free;font-weight:400}.la.la-times-rectangle-o:before{content:""}.la.la-bandcamp,.la.la-grav,.la.la-etsy,.la.la-imdb,.la.la-ravelry,.la.la-eercast{font-family:Line Awesome Brands;font-weight:400}.la.la-eercast:before{content:""}.la.la-snowflake-o{font-family:Line Awesome Free;font-weight:400}.la.la-snowflake-o:before{content:""}.la.la-superpowers,.la.la-wpexplorer,.la.la-spotify{font-family:Line Awesome Brands;font-weight:400}
`,ms=t=>{const e=[];t!==document&&(e.push(Pe(zo.cssText,"",t,!0)),e.push(Pe(Oo.cssText,"",t,!0)),e.push(Pe($a.cssText,"",t,!0)),e.push(Pe(Mo.cssText,"",t,!0)),e.push(Pe(Vo.cssText,"",t,!0)),e.push(Pe(hs.toString(),"CSSImport end",t)))},ps=ms;ps(document);export{ai as D,Sl as E,ee as I,N as L,oe as N,ce as O,oi as P,ws as T,bs as X,gs as Z,g as _,ge as a,F as b,x as c,Ul as d,Hl as e,_e as f,ni as g,v as h,Se as i,Oo as j,zo as k,bo as l,R as m,L as n,kl as o,w as p,rt as q,Ut as r,Ie as s,Aa as t,T as u,_i as v,wi as w,El as x,xi as y,ki as z};
