(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();function yT(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cp={exports:{}},Gs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lb;function bT(){if(Lb)return Gs;Lb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(i,s,c){var u=null;if(c!==void 0&&(u=""+c),s.key!==void 0&&(u=""+s.key),"key"in s){c={};for(var f in s)f!=="key"&&(c[f]=s[f])}else c=s;return s=c.ref,{$$typeof:e,type:i,key:u,ref:s!==void 0?s:null,props:c}}return Gs.Fragment=t,Gs.jsx=r,Gs.jsxs=r,Gs}var Ub;function wT(){return Ub||(Ub=1,cp.exports=bT()),cp.exports}var T=wT();/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const xT="0.3.28",Wm=`bippy-${xT}`,Hb=Object.defineProperty,_T=Object.prototype.hasOwnProperty,il=()=>{},h1=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},p1=(e=Di())=>"getFiberRoots"in e;let m1=!1,Bb;const tm=(e=Di())=>m1?!0:(typeof e.inject=="function"&&(Bb=e.inject.toString()),!!Bb?.includes("(injected)")),Nu=new Set,nm=new Set,ST=e=>{const t=new Map;let r=0,i={checkDCE:h1,supportsFiber:!0,supportsFlight:!0,hasUnsupportedRendererAttached:!1,renderers:t,onCommitFiberRoot:il,onCommitFiberUnmount:il,onPostCommitFiberRoot:il,on:il,inject(s){const c=++r;return t.set(c,s),nm.add(s),i._instrumentationIsActive||(i._instrumentationIsActive=!0,Nu.forEach(u=>u())),c},_instrumentationSource:Wm,_instrumentationIsActive:!1};try{Hb(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{get(){return i},set(u){if(u&&typeof u=="object"){const f=i.renderers;i=u,f.size>0&&(f.forEach((h,p)=>{nm.add(h),u.renderers.set(p,h)}),rm(e))}},configurable:!0,enumerable:!0});const s=window.hasOwnProperty;let c=!1;Hb(window,"hasOwnProperty",{value:function(){try{if(!c&&arguments[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,c=!0,-0}catch{}return s.apply(this,arguments)},configurable:!0,writable:!0})}catch{rm(e)}return i},rm=e=>{e&&Nu.add(e);try{const t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){if(t.checkDCE=h1,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=Wm,t._instrumentationIsActive=!1,t.on=il,t.renderers.size){t._instrumentationIsActive=!0,Nu.forEach(i=>i());return}const r=t.inject;tm(t)&&!p1()&&(m1=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=i=>{const s=r(i);return nm.add(i),t._instrumentationIsActive=!0,Nu.forEach(c=>c()),s}}(t.renderers.size||t._instrumentationIsActive||tm())&&e?.()}catch{}},ET=()=>_T.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),Di=e=>ET()?(rm(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):ST(e),TT=()=>!!(typeof window<"u"&&(window.document?.createElement||window.navigator?.product==="ReactNative")),CT=()=>{try{TT()&&Di()}catch{}},Rd=0,Fi=1,g1=3,NT=5,kT=6,RT=7,AT=9,Ad=11,Od=13,jl=14,Ll=15,OT=18,MT=22,zT=23,DT=26,jT=27,LT=60111,UT="Symbol(react.concurrent_mode)",HT="Symbol(react.async_mode)",Fb=1,BT=2,FT=4096,$T=4,$b=8,qT=16,YT=32,VT=1024,PT=8192,qb=BT|$T|qT|YT|FT|PT|VT,wl=e=>{switch(e.tag){case NT:case DT:case jT:return!0;default:return typeof e.type=="string"}},Md=e=>{switch(e.tag){case Rd:case Fi:case Ll:case jl:case Ad:return!0;default:return!1}},XT=(e,t)=>{try{const r=e.dependencies,i=e.alternate?.dependencies;if(!r||!i||typeof r!="object"||!("firstContext"in r)||typeof i!="object"||!("firstContext"in i))return!1;let s=r.firstContext,c=i.firstContext;for(;s&&typeof s=="object"&&"memoizedValue"in s||c&&typeof c=="object"&&"memoizedValue"in c;){if(t(s,c)===!0)return!0;s=s?.next,c=c?.next}}catch{}return!1},Qm=e=>{const t=e.memoizedProps,r=e.alternate?.memoizedProps||{},i=e.flags??e.effectTag??0;switch(e.tag){case Fi:case Rd:case AT:case Ad:case jl:case Ll:return(i&Fb)===Fb;default:return e.alternate?r!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref:!0}},Km=e=>(e.flags&(qb|$b))!==0||(e.subtreeFlags&(qb|$b))!==0,IT=e=>{const t=[],r=[e];for(;r.length;){const i=r.pop();i&&(wl(i)&&Km(i)&&Qm(i)&&t.push(i),i.child&&r.push(i.child),i.sibling&&r.push(i.sibling))}return t},Jm=e=>{switch(e.tag){case OT:return!0;case kT:case RT:case zT:case MT:return!0;case g1:return!1;default:{const t=typeof e.type=="object"&&e.type!==null?e.type.$$typeof:e.type;switch(typeof t=="symbol"?t.toString():t){case LT:case UT:case HT:return!0;default:return!1}}}},GT=e=>{const t=[],r=[];for(wl(e)?t.push(e):e.child&&r.push(e.child);r.length;){const i=r.pop();if(!i)break;wl(i)?t.push(i):i.child&&r.push(i.child),i.sibling&&r.push(i.sibling)}return t};function v1(e,t,r=!1){return e&&t(e)instanceof Promise?b1(e,t,r):y1(e,t,r)}const y1=(e,t,r=!1)=>{if(!e)return null;if(t(e)===!0)return e;let i=r?e.return:e.child;for(;i;){const s=y1(i,t,r);if(s)return s;i=r?null:i.sibling}return null},b1=async(e,t,r=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let i=r?e.return:e.child;for(;i;){const s=await b1(i,t,r);if(s)return s;i=r?null:i.sibling}return null},Ci=e=>{const t=e?.actualDuration??0;let r=t,i=e?.child??null;for(;t>0&&i!=null;)r-=i.actualDuration??0,i=i.sibling;return{selfTime:r,totalTime:t}},xl=e=>!!e.updateQueue?.memoCache,$i=e=>{const t=e;return typeof t=="function"?t:typeof t=="object"&&t?$i(t.type||t.render):null},Wt=e=>{const t=e;if(typeof t=="string")return t;if(typeof t!="function"&&!(typeof t=="object"&&t))return null;const r=t.displayName||t.name||null;if(r)return r;const i=$i(t);return i&&(i.displayName||i.name)||null},WT=e=>{try{if(typeof e.version=="string"&&e.bundleType>0)return"development"}catch{}return"production"},QT=()=>!!Di()._instrumentationIsActive||p1()||tm();let w1=0;const Vo=new WeakMap,KT=(e,t=w1++)=>{Vo.set(e,t)},Ga=e=>{let t=Vo.get(e);return!t&&e.alternate&&(t=Vo.get(e.alternate)),t||(t=w1++,KT(e,t)),t},Xa=(e,t,r)=>{let i=t;for(;i!=null;){if(Vo.has(i)||Ga(i),!Jm(i)&&Qm(i)&&e(i,"mount"),i.tag===Od)if(i.memoizedState!==null){const u=i.child,f=u?u.sibling:null;if(f){const h=f.child;h!==null&&Xa(e,h,!1)}}else{let u=null;i.child!==null&&(u=i.child.child),u!==null&&Xa(e,u,!1)}else i.child!=null&&Xa(e,i.child,!0);i=r?i.sibling:null}},am=(e,t,r,i)=>{if(Vo.has(t)||Ga(t),!r)return;Vo.has(r)||Ga(r);const s=t.tag===Od;!Jm(t)&&Qm(t)&&e(t,"update");const u=s&&r.memoizedState!==null,f=s&&t.memoizedState!==null;if(u&&f){const h=t.child?.sibling??null,p=r.child?.sibling??null;h!==null&&p!==null&&am(e,h,p)}else if(u&&!f){const h=t.child;h!==null&&Xa(e,h,!0)}else if(!u&&f){x1(e,r);const h=t.child?.sibling??null;h!==null&&Xa(e,h,!0)}else if(t.child!==r.child){let h=t.child;for(;h;){if(h.alternate){const p=h.alternate;am(e,h,p)}else Xa(e,h,!1);h=h.sibling}}},im=(e,t)=>{(t.tag===g1||!Jm(t))&&e(t,"unmount")},x1=(e,t)=>{const r=t.tag===Od&&t.memoizedState!==null;let i=t.child;for(r&&(i=(t.child?.sibling??null)?.child??null);i!==null;)i.return!==null&&(im(e,i),x1(e,i)),i=i.sibling};let JT=0;const Yb=new WeakMap,ZT=(e,t)=>{const r="current"in e?e.current:e;let i=Yb.get(e);i||(i={prevFiber:null,id:JT++},Yb.set(e,i));const{prevFiber:s}=i;if(!r)im(t,r);else if(s!==null){const c=s&&s.memoizedState!=null&&s.memoizedState.element!=null&&s.memoizedState.isDehydrated!==!0,u=r.memoizedState!=null&&r.memoizedState.element!=null&&r.memoizedState.isDehydrated!==!0;!c&&u?Xa(t,r,!1):c&&u?am(t,r,r.alternate):c&&!u&&im(t,r)}else Xa(t,r,!0);i.prevFiber=r},eC=e=>Di(()=>{const t=Di();e.onActive?.(),t._instrumentationSource=e.name??Wm;const r=t.onCommitFiberRoot;e.onCommitFiberRoot&&(t.onCommitFiberRoot=(c,u,f)=>{r&&r(c,u,f),e.onCommitFiberRoot?.(c,u,f)});const i=t.onCommitFiberUnmount;e.onCommitFiberUnmount&&(t.onCommitFiberUnmount=(c,u)=>{i&&i(c,u),e.onCommitFiberUnmount?.(c,u)});const s=t.onPostCommitFiberRoot;e.onPostCommitFiberRoot&&(t.onPostCommitFiberRoot=(c,u)=>{s&&s(c,u),e.onPostCommitFiberRoot?.(c,u)})});CT();var zd,je,_1,S1,Ti,Vb,E1,T1,C1,Zm,om,sm,N1,_l={},k1=[],tC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ul=Array.isArray;function da(e,t){for(var r in t)e[r]=t[r];return e}function eg(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ji(e,t,r){var i,s,c,u={};for(c in t)c=="key"?i=t[c]:c=="ref"?s=t[c]:u[c]=t[c];if(arguments.length>2&&(u.children=arguments.length>3?zd.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(c in e.defaultProps)u[c]===void 0&&(u[c]=e.defaultProps[c]);return ku(e,u,i,s,null)}function ku(e,t,r,i,s){var c={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++_1,__i:-1,__u:0};return s==null&&je.vnode!=null&&je.vnode(c),c}function Ze(e){return e.children}function rr(e,t){this.props=e,this.context=t}function Po(e,t){if(t==null)return e.__?Po(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?Po(e):null}function R1(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return R1(e)}}function lm(e){(!e.__d&&(e.__d=!0)&&Ti.push(e)&&!rd.__r++||Vb!=je.debounceRendering)&&((Vb=je.debounceRendering)||E1)(rd)}function rd(){for(var e,t,r,i,s,c,u,f=1;Ti.length;)Ti.length>f&&Ti.sort(T1),e=Ti.shift(),f=Ti.length,e.__d&&(r=void 0,i=void 0,s=(i=(t=e).__v).__e,c=[],u=[],t.__P&&((r=da({},i)).__v=i.__v+1,je.vnode&&je.vnode(r),tg(t.__P,r,i,t.__n,t.__P.namespaceURI,32&i.__u?[s]:null,c,s??Po(i),!!(32&i.__u),u),r.__v=i.__v,r.__.__k[r.__i]=r,M1(c,r,u),i.__e=i.__=null,r.__e!=s&&R1(r)));rd.__r=0}function A1(e,t,r,i,s,c,u,f,h,p,y){var v,w,x,_,k,N,E,R=i&&i.__k||k1,O=t.length;for(h=nC(r,t,R,h,O),v=0;v<O;v++)(x=r.__k[v])!=null&&(w=x.__i==-1?_l:R[x.__i]||_l,x.__i=v,N=tg(e,x,w,s,c,u,f,h,p,y),_=x.__e,x.ref&&w.ref!=x.ref&&(w.ref&&ng(w.ref,null,x),y.push(x.ref,x.__c||_,x)),k==null&&_!=null&&(k=_),(E=!!(4&x.__u))||w.__k===x.__k?h=O1(x,h,e,E):typeof x.type=="function"&&N!==void 0?h=N:_&&(h=_.nextSibling),x.__u&=-7);return r.__e=k,h}function nC(e,t,r,i,s){var c,u,f,h,p,y=r.length,v=y,w=0;for(e.__k=new Array(s),c=0;c<s;c++)(u=t[c])!=null&&typeof u!="boolean"&&typeof u!="function"?(h=c+w,(u=e.__k[c]=typeof u=="string"||typeof u=="number"||typeof u=="bigint"||u.constructor==String?ku(null,u,null,null,null):Ul(u)?ku(Ze,{children:u},null,null,null):u.constructor==null&&u.__b>0?ku(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u).__=e,u.__b=e.__b+1,f=null,(p=u.__i=rC(u,r,h,v))!=-1&&(v--,(f=r[p])&&(f.__u|=2)),f==null||f.__v==null?(p==-1&&(s>y?w--:s<y&&w++),typeof u.type!="function"&&(u.__u|=4)):p!=h&&(p==h-1?w--:p==h+1?w++:(p>h?w--:w++,u.__u|=4))):e.__k[c]=null;if(v)for(c=0;c<y;c++)(f=r[c])!=null&&(2&f.__u)==0&&(f.__e==i&&(i=Po(f)),D1(f,f));return i}function O1(e,t,r,i){var s,c;if(typeof e.type=="function"){for(s=e.__k,c=0;s&&c<s.length;c++)s[c]&&(s[c].__=e,t=O1(s[c],t,r,i));return t}e.__e!=t&&(i&&(t&&e.type&&!t.parentNode&&(t=Po(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function ad(e,t){return t=t||[],e==null||typeof e=="boolean"||(Ul(e)?e.some(function(r){ad(r,t)}):t.push(e)),t}function rC(e,t,r,i){var s,c,u,f=e.key,h=e.type,p=t[r],y=p!=null&&(2&p.__u)==0;if(p===null&&e.key==null||y&&f==p.key&&h==p.type)return r;if(i>(y?1:0)){for(s=r-1,c=r+1;s>=0||c<t.length;)if((p=t[u=s>=0?s--:c++])!=null&&(2&p.__u)==0&&f==p.key&&h==p.type)return u}return-1}function Pb(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||tC.test(t)?r:r+"px"}function cu(e,t,r,i,s){var c,u;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)r&&t in r||Pb(e.style,t,"");if(r)for(t in r)i&&r[t]==i[t]||Pb(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")c=t!=(t=t.replace(C1,"$1")),u=t.toLowerCase(),t=u in e||t=="onFocusOut"||t=="onFocusIn"?u.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+c]=r,r?i?r.u=i.u:(r.u=Zm,e.addEventListener(t,c?sm:om,c)):e.removeEventListener(t,c?sm:om,c);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Xb(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Zm++;else if(t.t<r.u)return;return r(je.event?je.event(t):t)}}}function tg(e,t,r,i,s,c,u,f,h,p){var y,v,w,x,_,k,N,E,R,O,B,F,M,G,ie,oe,fe,he=t.type;if(t.constructor!=null)return null;128&r.__u&&(h=!!(32&r.__u),c=[f=t.__e=r.__e]),(y=je.__b)&&y(t);e:if(typeof he=="function")try{if(E=t.props,R="prototype"in he&&he.prototype.render,O=(y=he.contextType)&&i[y.__c],B=y?O?O.props.value:y.__:i,r.__c?N=(v=t.__c=r.__c).__=v.__E:(R?t.__c=v=new he(E,B):(t.__c=v=new rr(E,B),v.constructor=he,v.render=iC),O&&O.sub(v),v.props=E,v.state||(v.state={}),v.context=B,v.__n=i,w=v.__d=!0,v.__h=[],v._sb=[]),R&&v.__s==null&&(v.__s=v.state),R&&he.getDerivedStateFromProps!=null&&(v.__s==v.state&&(v.__s=da({},v.__s)),da(v.__s,he.getDerivedStateFromProps(E,v.__s))),x=v.props,_=v.state,v.__v=t,w)R&&he.getDerivedStateFromProps==null&&v.componentWillMount!=null&&v.componentWillMount(),R&&v.componentDidMount!=null&&v.__h.push(v.componentDidMount);else{if(R&&he.getDerivedStateFromProps==null&&E!==x&&v.componentWillReceiveProps!=null&&v.componentWillReceiveProps(E,B),!v.__e&&v.shouldComponentUpdate!=null&&v.shouldComponentUpdate(E,v.__s,B)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(v.props=E,v.state=v.__s,v.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(ue){ue&&(ue.__=t)}),F=0;F<v._sb.length;F++)v.__h.push(v._sb[F]);v._sb=[],v.__h.length&&u.push(v);break e}v.componentWillUpdate!=null&&v.componentWillUpdate(E,v.__s,B),R&&v.componentDidUpdate!=null&&v.__h.push(function(){v.componentDidUpdate(x,_,k)})}if(v.context=B,v.props=E,v.__P=e,v.__e=!1,M=je.__r,G=0,R){for(v.state=v.__s,v.__d=!1,M&&M(t),y=v.render(v.props,v.state,v.context),ie=0;ie<v._sb.length;ie++)v.__h.push(v._sb[ie]);v._sb=[]}else do v.__d=!1,M&&M(t),y=v.render(v.props,v.state,v.context),v.state=v.__s;while(v.__d&&++G<25);v.state=v.__s,v.getChildContext!=null&&(i=da(da({},i),v.getChildContext())),R&&!w&&v.getSnapshotBeforeUpdate!=null&&(k=v.getSnapshotBeforeUpdate(x,_)),oe=y,y!=null&&y.type===Ze&&y.key==null&&(oe=z1(y.props.children)),f=A1(e,Ul(oe)?oe:[oe],t,r,i,s,c,u,f,h,p),v.base=t.__e,t.__u&=-161,v.__h.length&&u.push(v),N&&(v.__E=v.__=null)}catch(ue){if(t.__v=null,h||c!=null)if(ue.then){for(t.__u|=h?160:128;f&&f.nodeType==8&&f.nextSibling;)f=f.nextSibling;c[c.indexOf(f)]=null,t.__e=f}else{for(fe=c.length;fe--;)eg(c[fe]);cm(t)}else t.__e=r.__e,t.__k=r.__k,ue.then||cm(t);je.__e(ue,t,r)}else c==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):f=t.__e=aC(r.__e,t,r,i,s,c,u,h,p);return(y=je.diffed)&&y(t),128&t.__u?void 0:f}function cm(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(cm)}function M1(e,t,r){for(var i=0;i<r.length;i++)ng(r[i],r[++i],r[++i]);je.__c&&je.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(c){c.call(s)})}catch(c){je.__e(c,s.__v)}})}function z1(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Ul(e)?e.map(z1):da({},e)}function aC(e,t,r,i,s,c,u,f,h){var p,y,v,w,x,_,k,N=r.props,E=t.props,R=t.type;if(R=="svg"?s="http://www.w3.org/2000/svg":R=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),c!=null){for(p=0;p<c.length;p++)if((x=c[p])&&"setAttribute"in x==!!R&&(R?x.localName==R:x.nodeType==3)){e=x,c[p]=null;break}}if(e==null){if(R==null)return document.createTextNode(E);e=document.createElementNS(s,R,E.is&&E),f&&(je.__m&&je.__m(t,c),f=!1),c=null}if(R==null)N===E||f&&e.data==E||(e.data=E);else{if(c=c&&zd.call(e.childNodes),N=r.props||_l,!f&&c!=null)for(N={},p=0;p<e.attributes.length;p++)N[(x=e.attributes[p]).name]=x.value;for(p in N)if(x=N[p],p!="children"){if(p=="dangerouslySetInnerHTML")v=x;else if(!(p in E)){if(p=="value"&&"defaultValue"in E||p=="checked"&&"defaultChecked"in E)continue;cu(e,p,null,x,s)}}for(p in E)x=E[p],p=="children"?w=x:p=="dangerouslySetInnerHTML"?y=x:p=="value"?_=x:p=="checked"?k=x:f&&typeof x!="function"||N[p]===x||cu(e,p,x,N[p],s);if(y)f||v&&(y.__html==v.__html||y.__html==e.innerHTML)||(e.innerHTML=y.__html),t.__k=[];else if(v&&(e.innerHTML=""),A1(t.type=="template"?e.content:e,Ul(w)?w:[w],t,r,i,R=="foreignObject"?"http://www.w3.org/1999/xhtml":s,c,u,c?c[0]:r.__k&&Po(r,0),f,h),c!=null)for(p=c.length;p--;)eg(c[p]);f||(p="value",R=="progress"&&_==null?e.removeAttribute("value"):_!=null&&(_!==e[p]||R=="progress"&&!_||R=="option"&&_!=N[p])&&cu(e,p,_,N[p],s),p="checked",k!=null&&k!=e[p]&&cu(e,p,k,N[p],s))}return e}function ng(e,t,r){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(s){je.__e(s,r)}}function D1(e,t,r){var i,s;if(je.unmount&&je.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||ng(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(c){je.__e(c,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&D1(i[s],t,r||typeof e.type!="function");r||eg(e.__e),e.__c=e.__=e.__e=void 0}function iC(e,t,r){return this.constructor(e,r)}function ul(e,t,r){var i,s,c,u;t==document&&(t=document.documentElement),je.__&&je.__(e,t),s=(i=!1)?null:t.__k,c=[],u=[],tg(t,e=t.__k=ji(Ze,null,[e]),s||_l,_l,t.namespaceURI,s?null:t.firstChild?zd.call(t.childNodes):null,c,s?s.__e:t.firstChild,i,u),M1(c,e,u)}function j1(e){function t(r){var i,s;return this.getChildContext||(i=new Set,(s={})[t.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){i=null},this.shouldComponentUpdate=function(c){this.props.value!=c.value&&i.forEach(function(u){u.__e=!0,lm(u)})},this.sub=function(c){i.add(c);var u=c.componentWillUnmount;c.componentWillUnmount=function(){i&&i.delete(c),u&&u.call(c)}}),r.children}return t.__c="__cC"+N1++,t.__=e,t.Provider=t.__l=(t.Consumer=function(r,i){return r.children(i)}).contextType=t,t}zd=k1.slice,je={__e:function(e,t,r,i){for(var s,c,u;t=t.__;)if((s=t.__c)&&!s.__)try{if((c=s.constructor)&&c.getDerivedStateFromError!=null&&(s.setState(c.getDerivedStateFromError(e)),u=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),u=s.__d),u)return s.__E=s}catch(f){e=f}throw e}},_1=0,S1=function(e){return e!=null&&e.constructor==null},rr.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=da({},this.state),typeof e=="function"&&(e=e(da({},r),this.props)),e&&da(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),lm(this))},rr.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),lm(this))},rr.prototype.render=Ze,Ti=[],E1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,T1=function(e,t){return e.__v.__b-t.__v.__b},rd.__r=0,C1=/(PointerCapture)$|Capture$/i,Zm=0,om=Xb(!1),sm=Xb(!0),N1=0;var Li,_t,up,Ib,Sl=0,L1=[],Mt=je,Gb=Mt.__b,Wb=Mt.__r,Qb=Mt.diffed,Kb=Mt.__c,Jb=Mt.unmount,Zb=Mt.__;function Hl(e,t){Mt.__h&&Mt.__h(_t,e,Sl||t),Sl=0;var r=_t.__H||(_t.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Ye(e){return Sl=1,oC(U1,e)}function oC(e,t,r){var i=Hl(Li++,2);if(i.t=e,!i.__c&&(i.__=[r?r(t):U1(void 0,t),function(f){var h=i.__N?i.__N[0]:i.__[0],p=i.t(h,f);h!==p&&(i.__N=[p,i.__[1]],i.__c.setState({}))}],i.__c=_t,!_t.__f)){var s=function(f,h,p){if(!i.__c.__H)return!0;var y=i.__c.__H.__.filter(function(w){return!!w.__c});if(y.every(function(w){return!w.__N}))return!c||c.call(this,f,h,p);var v=i.__c.props!==f;return y.forEach(function(w){if(w.__N){var x=w.__[0];w.__=w.__N,w.__N=void 0,x!==w.__[0]&&(v=!0)}}),c&&c.call(this,f,h,p)||v};_t.__f=!0;var c=_t.shouldComponentUpdate,u=_t.componentWillUpdate;_t.componentWillUpdate=function(f,h,p){if(this.__e){var y=c;c=void 0,s(f,h,p),c=y}u&&u.call(this,f,h,p)},_t.shouldComponentUpdate=s}return i.__N||i.__}function Fe(e,t){var r=Hl(Li++,3);!Mt.__s&&ig(r.__H,t)&&(r.__=e,r.u=t,_t.__H.__h.push(r))}function rg(e,t){var r=Hl(Li++,4);!Mt.__s&&ig(r.__H,t)&&(r.__=e,r.u=t,_t.__h.push(r))}function Ne(e){return Sl=5,br(function(){return{current:e}},[])}function br(e,t){var r=Hl(Li++,7);return ig(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function Ot(e,t){return Sl=8,br(function(){return e},t)}function ag(e){var t=_t.context[e.__c],r=Hl(Li++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(_t)),t.props.value):e.__}function sC(){for(var e;e=L1.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ru),e.__H.__h.forEach(um),e.__H.__h=[]}catch(t){e.__H.__h=[],Mt.__e(t,e.__v)}}Mt.__b=function(e){_t=null,Gb&&Gb(e)},Mt.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Zb&&Zb(e,t)},Mt.__r=function(e){Wb&&Wb(e),Li=0;var t=(_t=e.__c).__H;t&&(up===_t?(t.__h=[],_t.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Ru),t.__h.forEach(um),t.__h=[],Li=0)),up=_t},Mt.diffed=function(e){Qb&&Qb(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(L1.push(t)!==1&&Ib===Mt.requestAnimationFrame||((Ib=Mt.requestAnimationFrame)||lC)(sC)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),up=_t=null},Mt.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Ru),r.__h=r.__h.filter(function(i){return!i.__||um(i)})}catch(i){t.some(function(s){s.__h&&(s.__h=[])}),t=[],Mt.__e(i,r.__v)}}),Kb&&Kb(e,t)},Mt.unmount=function(e){Jb&&Jb(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{Ru(i)}catch(s){t=s}}),r.__H=void 0,t&&Mt.__e(t,r.__v))};var ew=typeof requestAnimationFrame=="function";function lC(e){var t,r=function(){clearTimeout(i),ew&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(r,35);ew&&(t=requestAnimationFrame(r))}function Ru(e){var t=_t,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),_t=t}function um(e){var t=_t;e.__c=e.__(),_t=t}function ig(e,t){return!e||e.length!==t.length||t.some(function(r,i){return r!==e[i]})}function U1(e,t){return typeof t=="function"?t(e):t}var cC=Symbol.for("preact-signals");function og(){if(Uo>1)Uo--;else{for(var e,t=!1;dl!==void 0;){var r=dl;for(dl=void 0,dm++;r!==void 0;){var i=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&B1(r))try{r.c()}catch(s){t||(e=s,t=!0)}r=i}}if(dm=0,Uo--,t)throw e}}var it=void 0;function El(e){var t=it;it=void 0;try{return e()}finally{it=t}}var dl=void 0,Uo=0,dm=0,id=0;function H1(e){if(it!==void 0){var t=e.n;if(t===void 0||t.t!==it)return t={i:0,S:e,p:it.s,n:void 0,t:it,e:void 0,x:void 0,r:t},it.s!==void 0&&(it.s.n=t),it.s=t,e.n=t,32&it.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=it.s,t.n=void 0,it.s.n=t,it.s=t),t}}function an(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}an.prototype.brand=cC;an.prototype.h=function(){return!0};an.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:El(function(){var i;(i=t.W)==null||i.call(t)}))};an.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,i=e.x;r!==void 0&&(r.x=i,e.e=void 0),i!==void 0&&(i.e=r,e.x=void 0),e===this.t&&(this.t=i,i===void 0&&El(function(){var s;(s=t.Z)==null||s.call(t)}))}};an.prototype.subscribe=function(e){var t=this;return Dd(function(){var r=t.value,i=it;it=void 0;try{e(r)}finally{it=i}},{name:"sub"})};an.prototype.valueOf=function(){return this.value};an.prototype.toString=function(){return this.value+""};an.prototype.toJSON=function(){return this.value};an.prototype.peek=function(){var e=it;it=void 0;try{return this.value}finally{it=e}};Object.defineProperty(an.prototype,"value",{get:function(){var e=H1(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(dm>100)throw new Error("Cycle detected");this.v=e,this.i++,id++,Uo++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{og()}}}});function Ft(e,t){return new an(e,t)}function B1(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function F1(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function $1(e){for(var t=e.s,r=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}e.s=r}function qi(e,t){an.call(this,void 0),this.x=e,this.s=void 0,this.g=id-1,this.f=4,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}qi.prototype=new an;qi.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===id))return!0;if(this.g=id,this.f|=1,this.i>0&&!B1(this))return this.f&=-2,!0;var e=it;try{F1(this),it=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return it=e,$1(this),this.f&=-2,!0};qi.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}an.prototype.S.call(this,e)};qi.prototype.U=function(e){if(this.t!==void 0&&(an.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};qi.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(qi.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=H1(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Yi(e,t){return new qi(e,t)}function q1(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Uo++;var r=it;it=void 0;try{t()}catch(i){throw e.f&=-2,e.f|=8,sg(e),i}finally{it=r,og()}}}function sg(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,q1(e)}function uC(e){if(it!==this)throw new Error("Out-of-order effect");$1(this),it=e,this.f&=-2,8&this.f&&sg(this),og()}function Go(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t?.name}Go.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Go.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,q1(this),F1(this),Uo++;var e=it;return it=this,uC.bind(this,e)};Go.prototype.N=function(){2&this.f||(this.f|=2,this.o=dl,dl=this)};Go.prototype.d=function(){this.f|=8,1&this.f||sg(this)};Go.prototype.dispose=function(){this.d()};function Dd(e,t){var r=new Go(e,t);try{r.c()}catch(s){throw r.d(),s}var i=r.d.bind(r);return i[Symbol.dispose]=i,i}var dp;function Wo(e,t){je[e]=t.bind(null,je[e]||function(){})}function od(e){dp&&dp(),dp=e&&e.S()}function Y1(e){var t=this,r=e.data,i=fC(r);i.value=r;var s=br(function(){for(var c=t.__v;c=c.__;)if(c.__c){c.__c.__$f|=4;break}return t.__$u.c=function(){var u,f=t.__$u.S(),h=s.value;f(),S1(h)||((u=t.base)==null?void 0:u.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=h},Yi(function(){var u=i.value.value;return u===0?0:u===!0?"":u||""})},[]);return s.value}Y1.displayName="_st";Object.defineProperties(an.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Y1},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Wo("__b",function(e,t){if(typeof t.type=="string"){var r,i=t.props;for(var s in i)if(s!=="children"){var c=i[s];c instanceof an&&(r||(t.__np=r={}),r[s]=c,i[s]=c.peek())}}e(t)});Wo("__r",function(e,t){od();var r,i=t.__c;i&&(i.__$f&=-2,(r=i.__$u)===void 0&&(i.__$u=r=(function(s){var c;return Dd(function(){c=this}),c.c=function(){i.__$f|=1,i.setState({})},c})())),od(r),e(t)});Wo("__e",function(e,t,r,i){od(),e(t,r,i)});Wo("diffed",function(e,t){od();var r;if(typeof t.type=="string"&&(r=t.__e)){var i=t.__np,s=t.props;if(i){var c=r.U;if(c)for(var u in c){var f=c[u];f!==void 0&&!(u in i)&&(f.d(),c[u]=void 0)}else r.U=c={};for(var h in i){var p=c[h],y=i[h];p===void 0?(p=dC(r,h,y,s),c[h]=p):p.o(y,s)}}}e(t)});function dC(e,t,r,i){var s=t in e&&e.ownerSVGElement===void 0,c=Ft(r);return{o:function(u,f){c.value=u,i=f},d:Dd(function(){var u=c.value.value;i[t]!==u&&(i[t]=u,s?e[t]=u:u?e.setAttribute(t,u):e.removeAttribute(t))})}}Wo("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var i=r.U;if(i){r.U=void 0;for(var s in i){var c=i[s];c&&c.d()}}}}else{var u=t.__c;if(u){var f=u.__$u;f&&(u.__$u=void 0,f.d())}}e(t)});Wo("__h",function(e,t,r,i){(i<3||i===9)&&(t.__$f|=2),e(t,r,i)});rr.prototype.shouldComponentUpdate=function(e,t){var r=this.__$u,i=r&&r.s!==void 0;for(var s in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(i||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var c in e)if(c!=="__source"&&e[c]!==this.props[c])return!0;for(var u in this.props)if(!(u in e))return!0;return!1};function fC(e){return br(function(){return Ft(e)},[])}function Tl(e){var t=Ne(e);t.current=e,Fe(function(){return Dd(function(){return t.current()})},[])}function V1(e,t){for(var r in t)e[r]=t[r];return e}function fm(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function hC(e,t){var r=t(),i=Ye({t:{__:r,u:t}}),s=i[0].t,c=i[1];return rg(function(){s.__=r,s.u=t,fp(s)&&c({t:s})},[e,r,t]),Fe(function(){return fp(s)&&c({t:s}),e(function(){fp(s)&&c({t:s})})},[e]),r}function fp(e){var t,r,i=e.u,s=e.__;try{var c=i();return!((t=s)===(r=c)&&(t!==0||1/t==1/r)||t!=t&&r!=r)}catch{return!0}}function tw(e,t){this.props=e,this.context=t}function jd(e,t){function r(s){var c=this.props.ref,u=c==s.ref;return!u&&c&&(c.call?c(null):c.current=null),t?!t(this.props,s)||!u:fm(this.props,s)}function i(s){return this.shouldComponentUpdate=r,ji(e,s)}return i.displayName="Memo("+(e.displayName||e.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i.type=e,i}(tw.prototype=new rr).isPureReactComponent=!0,tw.prototype.shouldComponentUpdate=function(e,t){return fm(this.props,e)||fm(this.state,t)};var nw=je.__b;je.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),nw&&nw(e)};var pC=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function lg(e){function t(r){var i=V1({},r);return delete i.ref,e(i,r.ref||null)}return t.$$typeof=pC,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var mC=je.__e;je.__e=function(e,t,r,i){if(e.then){for(var s,c=t;c=c.__;)if((s=c.__c)&&s.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),s.__c(e,t)}mC(e,t,r,i)};var rw=je.unmount;function P1(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),e.__c.__H=null),(e=V1({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(i){return P1(i,t,r)})),e}function X1(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(i){return X1(i,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function hp(){this.__u=0,this.o=null,this.__b=null}function I1(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function uu(){this.i=null,this.l=null}je.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),rw&&rw(e)},(hp.prototype=new rr).__c=function(e,t){var r=t.__c,i=this;i.o==null&&(i.o=[]),i.o.push(r);var s=I1(i.__v),c=!1,u=function(){c||(c=!0,r.__R=null,s?s(f):f())};r.__R=u;var f=function(){if(!--i.__u){if(i.state.__a){var h=i.state.__a;i.__v.__k[0]=X1(h,h.__c.__P,h.__c.__O)}var p;for(i.setState({__a:i.__b=null});p=i.o.pop();)p.forceUpdate()}};i.__u++||32&t.__u||i.setState({__a:i.__b=i.__v.__k[0]}),e.then(u,u)},hp.prototype.componentWillUnmount=function(){this.o=[]},hp.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=P1(this.__b,r,i.__O=i.__P)}this.__b=null}var s=t.__a&&ji(Ze,null,e.fallback);return s&&(s.__u&=-33),[ji(Ze,null,t.__a?null:e.children),s]};var aw=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function gC(e){return this.getChildContext=function(){return e.context},e.children}function vC(e){var t=this,r=e.h;if(t.componentWillUnmount=function(){ul(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),!t.v){for(var i=t.__v;i!==null&&!i.__m&&i.__!==null;)i=i.__;t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:i.__m},contains:function(){return!0},insertBefore:function(s,c){this.childNodes.push(s),t.h.insertBefore(s,c)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),t.h.removeChild(s)}}}ul(ji(gC,{context:t.context},e.__v),t.v)}function yC(e,t){var r=ji(vC,{__v:e,h:t});return r.containerInfo=t,r}(uu.prototype=new rr).__a=function(e){var t=this,r=I1(t.__v),i=t.l.get(e);return i[0]++,function(s){var c=function(){t.props.revealOrder?(i.push(s),aw(t,e,i)):s()};r?r(c):c()}},uu.prototype.render=function(e){this.i=null,this.l=new Map;var t=ad(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},uu.prototype.componentDidUpdate=uu.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){aw(e,r,t)})};var bC=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,wC=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,xC=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,_C=/[A-Z0-9]/g,SC=typeof document<"u",EC=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};rr.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(rr.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var iw=je.event;function TC(){}function CC(){return this.cancelBubble}function NC(){return this.defaultPrevented}je.event=function(e){return iw&&(e=iw(e)),e.persist=TC,e.isPropagationStopped=CC,e.isDefaultPrevented=NC,e.nativeEvent=e};var kC={enumerable:!1,configurable:!0,get:function(){return this.class}},ow=je.vnode;je.vnode=function(e){typeof e.type=="string"&&(function(t){var r=t.props,i=t.type,s={},c=i.indexOf("-")===-1;for(var u in r){var f=r[u];if(!(u==="value"&&"defaultValue"in r&&f==null||SC&&u==="children"&&i==="noscript"||u==="class"||u==="className")){var h=u.toLowerCase();u==="defaultValue"&&"value"in r&&r.value==null?u="value":u==="download"&&f===!0?f="":h==="translate"&&f==="no"?f=!1:h[0]==="o"&&h[1]==="n"?h==="ondoubleclick"?u="ondblclick":h!=="onchange"||i!=="input"&&i!=="textarea"||EC(r.type)?h==="onfocus"?u="onfocusin":h==="onblur"?u="onfocusout":xC.test(u)&&(u=h):h=u="oninput":c&&wC.test(u)?u=u.replace(_C,"-$&").toLowerCase():f===null&&(f=void 0),h==="oninput"&&s[u=h]&&(u="oninputCapture"),s[u]=f}}i=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=ad(r.children).forEach(function(p){p.props.selected=s.value.indexOf(p.props.value)!=-1})),i=="select"&&s.defaultValue!=null&&(s.value=ad(r.children).forEach(function(p){p.props.selected=s.multiple?s.defaultValue.indexOf(p.props.value)!=-1:s.defaultValue==p.props.value})),r.class&&!r.className?(s.class=r.class,Object.defineProperty(s,"className",kC)):(r.className&&!r.class||r.class&&r.className)&&(s.class=s.className=r.className),t.props=s})(e),e.$$typeof=bC,ow&&ow(e)};var sw=je.__r;je.__r=function(e){sw&&sw(e),e.__c};var lw=je.diffed;je.diffed=function(e){lw&&lw(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value)};var RC=0;function g(e,t,r,i,s,c){t||(t={});var u,f,h=t;if("ref"in h)for(f in h={},t)f=="ref"?u=t[f]:h[f]=t[f];var p={type:e,props:h,key:r,ref:u,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--RC,__i:-1,__u:0,__source:s,__self:c};if(typeof e=="function"&&(u=e.defaultProps))for(f in u)h[f]===void 0&&(h[f]=u[f]);return je.vnode&&je.vnode(p),p}var pp={exports:{}},Me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cw;function AC(){if(cw)return Me;cw=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),w=Symbol.iterator;function x(A){return A===null||typeof A!="object"?null:(A=w&&A[w]||A["@@iterator"],typeof A=="function"?A:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,N={};function E(A,Y,J){this.props=A,this.context=Y,this.refs=N,this.updater=J||_}E.prototype.isReactComponent={},E.prototype.setState=function(A,Y){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,Y,"setState")},E.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function R(){}R.prototype=E.prototype;function O(A,Y,J){this.props=A,this.context=Y,this.refs=N,this.updater=J||_}var B=O.prototype=new R;B.constructor=O,k(B,E.prototype),B.isPureReactComponent=!0;var F=Array.isArray;function M(){}var G={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function oe(A,Y,J){var ae=J.ref;return{$$typeof:e,type:A,key:Y,ref:ae!==void 0?ae:null,props:J}}function fe(A,Y){return oe(A.type,Y,A.props)}function he(A){return typeof A=="object"&&A!==null&&A.$$typeof===e}function ue(A){var Y={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(J){return Y[J]})}var _e=/\/+/g;function we(A,Y){return typeof A=="object"&&A!==null&&A.key!=null?ue(""+A.key):Y.toString(36)}function Oe(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(M,M):(A.status="pending",A.then(function(Y){A.status==="pending"&&(A.status="fulfilled",A.value=Y)},function(Y){A.status==="pending"&&(A.status="rejected",A.reason=Y)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function S(A,Y,J,ae,le){var me=typeof A;(me==="undefined"||me==="boolean")&&(A=null);var Re=!1;if(A===null)Re=!0;else switch(me){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(A.$$typeof){case e:case t:Re=!0;break;case y:return Re=A._init,S(Re(A._payload),Y,J,ae,le)}}if(Re)return le=le(A),Re=ae===""?"."+we(A,0):ae,F(le)?(J="",Re!=null&&(J=Re.replace(_e,"$&/")+"/"),S(le,Y,J,"",function(Ie){return Ie})):le!=null&&(he(le)&&(le=fe(le,J+(le.key==null||A&&A.key===le.key?"":(""+le.key).replace(_e,"$&/")+"/")+Re)),Y.push(le)),1;Re=0;var Qe=ae===""?".":ae+":";if(F(A))for(var De=0;De<A.length;De++)ae=A[De],me=Qe+we(ae,De),Re+=S(ae,Y,J,me,le);else if(De=x(A),typeof De=="function")for(A=De.call(A),De=0;!(ae=A.next()).done;)ae=ae.value,me=Qe+we(ae,De++),Re+=S(ae,Y,J,me,le);else if(me==="object"){if(typeof A.then=="function")return S(Oe(A),Y,J,ae,le);throw Y=String(A),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Re}function z(A,Y,J){if(A==null)return A;var ae=[],le=0;return S(A,ae,"","",function(me){return Y.call(J,me,le++)}),ae}function H(A){if(A._status===-1){var Y=A._result;Y=Y(),Y.then(function(J){(A._status===0||A._status===-1)&&(A._status=1,A._result=J)},function(J){(A._status===0||A._status===-1)&&(A._status=2,A._result=J)}),A._status===-1&&(A._status=0,A._result=Y)}if(A._status===1)return A._result.default;throw A._result}var Z=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},re={map:z,forEach:function(A,Y,J){z(A,function(){Y.apply(this,arguments)},J)},count:function(A){var Y=0;return z(A,function(){Y++}),Y},toArray:function(A){return z(A,function(Y){return Y})||[]},only:function(A){if(!he(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return Me.Activity=v,Me.Children=re,Me.Component=E,Me.Fragment=r,Me.Profiler=s,Me.PureComponent=O,Me.StrictMode=i,Me.Suspense=h,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,Me.__COMPILER_RUNTIME={__proto__:null,c:function(A){return G.H.useMemoCache(A)}},Me.cache=function(A){return function(){return A.apply(null,arguments)}},Me.cacheSignal=function(){return null},Me.cloneElement=function(A,Y,J){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var ae=k({},A.props),le=A.key;if(Y!=null)for(me in Y.key!==void 0&&(le=""+Y.key),Y)!ie.call(Y,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&Y.ref===void 0||(ae[me]=Y[me]);var me=arguments.length-2;if(me===1)ae.children=J;else if(1<me){for(var Re=Array(me),Qe=0;Qe<me;Qe++)Re[Qe]=arguments[Qe+2];ae.children=Re}return oe(A.type,le,ae)},Me.createContext=function(A){return A={$$typeof:u,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:c,_context:A},A},Me.createElement=function(A,Y,J){var ae,le={},me=null;if(Y!=null)for(ae in Y.key!==void 0&&(me=""+Y.key),Y)ie.call(Y,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(le[ae]=Y[ae]);var Re=arguments.length-2;if(Re===1)le.children=J;else if(1<Re){for(var Qe=Array(Re),De=0;De<Re;De++)Qe[De]=arguments[De+2];le.children=Qe}if(A&&A.defaultProps)for(ae in Re=A.defaultProps,Re)le[ae]===void 0&&(le[ae]=Re[ae]);return oe(A,me,le)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(A){return{$$typeof:f,render:A}},Me.isValidElement=he,Me.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:H}},Me.memo=function(A,Y){return{$$typeof:p,type:A,compare:Y===void 0?null:Y}},Me.startTransition=function(A){var Y=G.T,J={};G.T=J;try{var ae=A(),le=G.S;le!==null&&le(J,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(M,Z)}catch(me){Z(me)}finally{Y!==null&&J.types!==null&&(Y.types=J.types),G.T=Y}},Me.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},Me.use=function(A){return G.H.use(A)},Me.useActionState=function(A,Y,J){return G.H.useActionState(A,Y,J)},Me.useCallback=function(A,Y){return G.H.useCallback(A,Y)},Me.useContext=function(A){return G.H.useContext(A)},Me.useDebugValue=function(){},Me.useDeferredValue=function(A,Y){return G.H.useDeferredValue(A,Y)},Me.useEffect=function(A,Y){return G.H.useEffect(A,Y)},Me.useEffectEvent=function(A){return G.H.useEffectEvent(A)},Me.useId=function(){return G.H.useId()},Me.useImperativeHandle=function(A,Y,J){return G.H.useImperativeHandle(A,Y,J)},Me.useInsertionEffect=function(A,Y){return G.H.useInsertionEffect(A,Y)},Me.useLayoutEffect=function(A,Y){return G.H.useLayoutEffect(A,Y)},Me.useMemo=function(A,Y){return G.H.useMemo(A,Y)},Me.useOptimistic=function(A,Y){return G.H.useOptimistic(A,Y)},Me.useReducer=function(A,Y,J){return G.H.useReducer(A,Y,J)},Me.useRef=function(A){return G.H.useRef(A)},Me.useState=function(A){return G.H.useState(A)},Me.useSyncExternalStore=function(A,Y,J){return G.H.useSyncExternalStore(A,Y,J)},Me.useTransition=function(){return G.H.useTransition()},Me.version="19.2.0",Me}var uw;function Ld(){return uw||(uw=1,pp.exports=AC()),pp.exports}var U=Ld();const Mi=yT(U);Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});function OC(e,t){return t-e}function MC(e){let t=e[0].name;const r=e.length,i=Math.min(4,r);for(let s=1;s<i;s++)t+=`, ${e[s].name}`;return t}function zC(e){let t=e[0].time;for(let r=1,i=e.length;r<i;r++)t+=e[r].time;return t}function DC(e){for(let t=0,r=e.length;t<r;t++)if(e[t].forget)return!0;return!1}var jC=e=>{let t="";const r=new Map;for(const u of e){const{forget:f,time:h,aggregatedCount:p,name:y}=u;r.has(p)||r.set(p,[]);const v=r.get(p);v&&v.push({name:y,forget:f,time:h??0})}const i=Array.from(r.keys()).sort(OC),s=[];let c=0;for(const u of i){const f=r.get(u);if(!f)continue;let h=MC(f);const p=zC(f),y=DC(f);c+=p,f.length>4&&(h+="…"),u>1&&(h+=` × ${u}`),y&&(h=`✨${h}`),s.push(h)}return t=s.join(", "),t.length?(t.length>40&&(t=`${t.slice(0,40)}…`),c>=.01&&(t+=` (${Number(c.toFixed(2))}ms)`),t):null};function Wa(e,t){return e===t||e!==e&&t!==t}var cg=e=>{const t=e.createOscillator(),r=e.createGain();t.connect(r),r.connect(e.destination);const i={type:"sine",freq:[392,600],duration:.3,gain:.12},s=i.freq,c=i.duration/s.length;s.forEach((u,f)=>{t.frequency.setValueAtTime(u,e.currentTime+f*c)}),t.type=i.type,r.gain.setValueAtTime(i.gain,e.currentTime),r.gain.setTargetAtTime(0,e.currentTime+i.duration*.7,.05),t.start(),t.stop(e.currentTime+i.duration)},LC=e=>new Promise(t=>{const r=new Map,i=new IntersectionObserver(s=>{for(const c of s){const u=c.target,f=c.boundingClientRect;r.set(u,f)}i.disconnect(),t(r)});for(const s of e)i.observe(s)}),UC={mount:1,update:2,unmount:4},Tt=lg(({size:e=15,name:t,fill:r="currentColor",stroke:i="currentColor",className:s,externalURL:c="",style:u},f)=>{const h=Array.isArray(e)?e[0]:e,p=Array.isArray(e)?e[1]||e[0]:e,y=`${c}#${t}`;return g("svg",{ref:f,width:`${h}px`,height:`${p}px`,fill:r,stroke:i,className:s,style:{...u,minWidth:`${h}px`,maxWidth:`${h}px`,minHeight:`${p}px`,maxHeight:`${p}px`},children:[g("title",{children:t}),g("use",{href:y})]})}),ze=24,Bt={width:550,height:350,initialHeight:400},gr=240,fa="react-scan-widget-settings-v2",Au="react-scan-widget-collapsed-v1",Ao="react-scan-widget-last-view-v1",Lr=typeof window<"u";function G1(e){var t,r,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=G1(e[t]))&&(i&&(i+=" "),i+=r)}else for(r in e)e[r]&&(i&&(i+=" "),i+=r);return i}function HC(){for(var e,t,r=0,i="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=G1(e))&&(i&&(i+=" "),i+=t);return i}var ug="-",BC=e=>{const t=$C(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:i}=e;return{getClassGroupId:u=>{const f=u.split(ug);return f[0]===""&&f.length!==1&&f.shift(),W1(f,t)||FC(u)},getConflictingClassGroupIds:(u,f)=>{const h=r[u]||[];return f&&i[u]?[...h,...i[u]]:h}}},W1=(e,t)=>{if(e.length===0)return t.classGroupId;const r=e[0],i=t.nextPart.get(r),s=i?W1(e.slice(1),i):void 0;if(s)return s;if(t.validators.length===0)return;const c=e.join(ug);return t.validators.find(({validator:u})=>u(c))?.classGroupId},dw=/^\[(.+)\]$/,FC=e=>{if(dw.test(e)){const t=dw.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},$C=e=>{const{theme:t,prefix:r}=e,i={nextPart:new Map,validators:[]};return YC(Object.entries(e.classGroups),r).forEach(([c,u])=>{hm(u,i,c,t)}),i},hm=(e,t,r,i)=>{e.forEach(s=>{if(typeof s=="string"){const c=s===""?t:fw(t,s);c.classGroupId=r;return}if(typeof s=="function"){if(qC(s)){hm(s(i),t,r,i);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([c,u])=>{hm(u,fw(t,c),r,i)})})},fw=(e,t)=>{let r=e;return t.split(ug).forEach(i=>{r.nextPart.has(i)||r.nextPart.set(i,{nextPart:new Map,validators:[]}),r=r.nextPart.get(i)}),r},qC=e=>e.isThemeGetter,YC=(e,t)=>t?e.map(([r,i])=>{const s=i.map(c=>typeof c=="string"?t+c:typeof c=="object"?Object.fromEntries(Object.entries(c).map(([u,f])=>[t+u,f])):c);return[r,s]}):e,VC=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,i=new Map;const s=(c,u)=>{r.set(c,u),t++,t>e&&(t=0,i=r,r=new Map)};return{get(c){let u=r.get(c);if(u!==void 0)return u;if((u=i.get(c))!==void 0)return s(c,u),u},set(c,u){r.has(c)?r.set(c,u):s(c,u)}}},Q1="!",PC=e=>{const{separator:t,experimentalParseClassName:r}=e,i=t.length===1,s=t[0],c=t.length,u=f=>{const h=[];let p=0,y=0,v;for(let N=0;N<f.length;N++){let E=f[N];if(p===0){if(E===s&&(i||f.slice(N,N+c)===t)){h.push(f.slice(y,N)),y=N+c;continue}if(E==="/"){v=N;continue}}E==="["?p++:E==="]"&&p--}const w=h.length===0?f:f.substring(y),x=w.startsWith(Q1),_=x?w.substring(1):w,k=v&&v>y?v-y:void 0;return{modifiers:h,hasImportantModifier:x,baseClassName:_,maybePostfixModifierPosition:k}};return r?f=>r({className:f,parseClassName:u}):u},XC=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(i=>{i[0]==="["?(t.push(...r.sort(),i),r=[]):r.push(i)}),t.push(...r.sort()),t},IC=e=>({cache:VC(e.cacheSize),parseClassName:PC(e),...BC(e)}),GC=/\s+/,WC=(e,t)=>{const{parseClassName:r,getClassGroupId:i,getConflictingClassGroupIds:s}=t,c=[],u=e.trim().split(GC);let f="";for(let h=u.length-1;h>=0;h-=1){const p=u[h],{modifiers:y,hasImportantModifier:v,baseClassName:w,maybePostfixModifierPosition:x}=r(p);let _=!!x,k=i(_?w.substring(0,x):w);if(!k){if(!_){f=p+(f.length>0?" "+f:f);continue}if(k=i(w),!k){f=p+(f.length>0?" "+f:f);continue}_=!1}const N=XC(y).join(":"),E=v?N+Q1:N,R=E+k;if(c.includes(R))continue;c.push(R);const O=s(k,_);for(let B=0;B<O.length;++B){const F=O[B];c.push(E+F)}f=p+(f.length>0?" "+f:f)}return f};function QC(){let e=0,t,r,i="";for(;e<arguments.length;)(t=arguments[e++])&&(r=K1(t))&&(i&&(i+=" "),i+=r);return i}var K1=e=>{if(typeof e=="string")return e;let t,r="";for(let i=0;i<e.length;i++)e[i]&&(t=K1(e[i]))&&(r&&(r+=" "),r+=t);return r};function KC(e,...t){let r,i,s,c=u;function u(h){const p=t.reduce((y,v)=>v(y),e());return r=IC(p),i=r.cache.get,s=r.cache.set,c=f,f(h)}function f(h){const p=i(h);if(p)return p;const y=WC(h,r);return s(h,y),y}return function(){return c(QC.apply(null,arguments))}}var yt=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},J1=/^\[(?:([a-z-]+):)?(.+)\]$/i,JC=/^\d+\/\d+$/,ZC=new Set(["px","full","screen"]),e4=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,t4=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,n4=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,r4=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,a4=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,la=e=>Ho(e)||ZC.has(e)||JC.test(e),$a=e=>Qo(e,"length",f4),Ho=e=>!!e&&!Number.isNaN(Number(e)),mp=e=>Qo(e,"number",Ho),Ws=e=>!!e&&Number.isInteger(Number(e)),i4=e=>e.endsWith("%")&&Ho(e.slice(0,-1)),Be=e=>J1.test(e),qa=e=>e4.test(e),o4=new Set(["length","size","percentage"]),s4=e=>Qo(e,o4,Z1),l4=e=>Qo(e,"position",Z1),c4=new Set(["image","url"]),u4=e=>Qo(e,c4,p4),d4=e=>Qo(e,"",h4),Qs=()=>!0,Qo=(e,t,r)=>{const i=J1.exec(e);return i?i[1]?typeof t=="string"?i[1]===t:t.has(i[1]):r(i[2]):!1},f4=e=>t4.test(e)&&!n4.test(e),Z1=()=>!1,h4=e=>r4.test(e),p4=e=>a4.test(e),m4=()=>{const e=yt("colors"),t=yt("spacing"),r=yt("blur"),i=yt("brightness"),s=yt("borderColor"),c=yt("borderRadius"),u=yt("borderSpacing"),f=yt("borderWidth"),h=yt("contrast"),p=yt("grayscale"),y=yt("hueRotate"),v=yt("invert"),w=yt("gap"),x=yt("gradientColorStops"),_=yt("gradientColorStopPositions"),k=yt("inset"),N=yt("margin"),E=yt("opacity"),R=yt("padding"),O=yt("saturate"),B=yt("scale"),F=yt("sepia"),M=yt("skew"),G=yt("space"),ie=yt("translate"),oe=()=>["auto","contain","none"],fe=()=>["auto","hidden","clip","visible","scroll"],he=()=>["auto",Be,t],ue=()=>[Be,t],_e=()=>["",la,$a],we=()=>["auto",Ho,Be],Oe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],S=()=>["solid","dashed","dotted","double","none"],z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],H=()=>["start","end","center","between","around","evenly","stretch"],Z=()=>["","0",Be],re=()=>["auto","avoid","all","avoid-page","page","left","right","column"],A=()=>[Ho,Be];return{cacheSize:500,separator:":",theme:{colors:[Qs],spacing:[la,$a],blur:["none","",qa,Be],brightness:A(),borderColor:[e],borderRadius:["none","","full",qa,Be],borderSpacing:ue(),borderWidth:_e(),contrast:A(),grayscale:Z(),hueRotate:A(),invert:Z(),gap:ue(),gradientColorStops:[e],gradientColorStopPositions:[i4,$a],inset:he(),margin:he(),opacity:A(),padding:ue(),saturate:A(),scale:A(),sepia:Z(),skew:A(),space:ue(),translate:ue()},classGroups:{aspect:[{aspect:["auto","square","video",Be]}],container:["container"],columns:[{columns:[qa]}],"break-after":[{"break-after":re()}],"break-before":[{"break-before":re()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Oe(),Be]}],overflow:[{overflow:fe()}],"overflow-x":[{"overflow-x":fe()}],"overflow-y":[{"overflow-y":fe()}],overscroll:[{overscroll:oe()}],"overscroll-x":[{"overscroll-x":oe()}],"overscroll-y":[{"overscroll-y":oe()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[k]}],"inset-x":[{"inset-x":[k]}],"inset-y":[{"inset-y":[k]}],start:[{start:[k]}],end:[{end:[k]}],top:[{top:[k]}],right:[{right:[k]}],bottom:[{bottom:[k]}],left:[{left:[k]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ws,Be]}],basis:[{basis:he()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Be]}],grow:[{grow:Z()}],shrink:[{shrink:Z()}],order:[{order:["first","last","none",Ws,Be]}],"grid-cols":[{"grid-cols":[Qs]}],"col-start-end":[{col:["auto",{span:["full",Ws,Be]},Be]}],"col-start":[{"col-start":we()}],"col-end":[{"col-end":we()}],"grid-rows":[{"grid-rows":[Qs]}],"row-start-end":[{row:["auto",{span:[Ws,Be]},Be]}],"row-start":[{"row-start":we()}],"row-end":[{"row-end":we()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Be]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Be]}],gap:[{gap:[w]}],"gap-x":[{"gap-x":[w]}],"gap-y":[{"gap-y":[w]}],"justify-content":[{justify:["normal",...H()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...H(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...H(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[R]}],px:[{px:[R]}],py:[{py:[R]}],ps:[{ps:[R]}],pe:[{pe:[R]}],pt:[{pt:[R]}],pr:[{pr:[R]}],pb:[{pb:[R]}],pl:[{pl:[R]}],m:[{m:[N]}],mx:[{mx:[N]}],my:[{my:[N]}],ms:[{ms:[N]}],me:[{me:[N]}],mt:[{mt:[N]}],mr:[{mr:[N]}],mb:[{mb:[N]}],ml:[{ml:[N]}],"space-x":[{"space-x":[G]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[G]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Be,t]}],"min-w":[{"min-w":[Be,t,"min","max","fit"]}],"max-w":[{"max-w":[Be,t,"none","full","min","max","fit","prose",{screen:[qa]},qa]}],h:[{h:[Be,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Be,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Be,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Be,t,"auto","min","max","fit"]}],"font-size":[{text:["base",qa,$a]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",mp]}],"font-family":[{font:[Qs]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Be]}],"line-clamp":[{"line-clamp":["none",Ho,mp]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",la,Be]}],"list-image":[{"list-image":["none",Be]}],"list-style-type":[{list:["none","disc","decimal",Be]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[E]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[E]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...S(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",la,$a]}],"underline-offset":[{"underline-offset":["auto",la,Be]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ue()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Be]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Be]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[E]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Oe(),l4]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",s4]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},u4]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[c]}],"rounded-s":[{"rounded-s":[c]}],"rounded-e":[{"rounded-e":[c]}],"rounded-t":[{"rounded-t":[c]}],"rounded-r":[{"rounded-r":[c]}],"rounded-b":[{"rounded-b":[c]}],"rounded-l":[{"rounded-l":[c]}],"rounded-ss":[{"rounded-ss":[c]}],"rounded-se":[{"rounded-se":[c]}],"rounded-ee":[{"rounded-ee":[c]}],"rounded-es":[{"rounded-es":[c]}],"rounded-tl":[{"rounded-tl":[c]}],"rounded-tr":[{"rounded-tr":[c]}],"rounded-br":[{"rounded-br":[c]}],"rounded-bl":[{"rounded-bl":[c]}],"border-w":[{border:[f]}],"border-w-x":[{"border-x":[f]}],"border-w-y":[{"border-y":[f]}],"border-w-s":[{"border-s":[f]}],"border-w-e":[{"border-e":[f]}],"border-w-t":[{"border-t":[f]}],"border-w-r":[{"border-r":[f]}],"border-w-b":[{"border-b":[f]}],"border-w-l":[{"border-l":[f]}],"border-opacity":[{"border-opacity":[E]}],"border-style":[{border:[...S(),"hidden"]}],"divide-x":[{"divide-x":[f]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[f]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[E]}],"divide-style":[{divide:S()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...S()]}],"outline-offset":[{"outline-offset":[la,Be]}],"outline-w":[{outline:[la,$a]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:_e()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[E]}],"ring-offset-w":[{"ring-offset":[la,$a]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",qa,d4]}],"shadow-color":[{shadow:[Qs]}],opacity:[{opacity:[E]}],"mix-blend":[{"mix-blend":[...z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":z()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[i]}],contrast:[{contrast:[h]}],"drop-shadow":[{"drop-shadow":["","none",qa,Be]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[y]}],invert:[{invert:[v]}],saturate:[{saturate:[O]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[h]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[y]}],"backdrop-invert":[{"backdrop-invert":[v]}],"backdrop-opacity":[{"backdrop-opacity":[E]}],"backdrop-saturate":[{"backdrop-saturate":[O]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Be]}],duration:[{duration:A()}],ease:[{ease:["linear","in","out","in-out",Be]}],delay:[{delay:A()}],animate:[{animate:["none","spin","ping","pulse","bounce",Be]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[B]}],"scale-x":[{"scale-x":[B]}],"scale-y":[{"scale-y":[B]}],rotate:[{rotate:[Ws,Be]}],"translate-x":[{"translate-x":[ie]}],"translate-y":[{"translate-y":[ie]}],"skew-x":[{"skew-x":[M]}],"skew-y":[{"skew-y":[M]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Be]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Be]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ue()}],"scroll-mx":[{"scroll-mx":ue()}],"scroll-my":[{"scroll-my":ue()}],"scroll-ms":[{"scroll-ms":ue()}],"scroll-me":[{"scroll-me":ue()}],"scroll-mt":[{"scroll-mt":ue()}],"scroll-mr":[{"scroll-mr":ue()}],"scroll-mb":[{"scroll-mb":ue()}],"scroll-ml":[{"scroll-ml":ue()}],"scroll-p":[{"scroll-p":ue()}],"scroll-px":[{"scroll-px":ue()}],"scroll-py":[{"scroll-py":ue()}],"scroll-ps":[{"scroll-ps":ue()}],"scroll-pe":[{"scroll-pe":ue()}],"scroll-pt":[{"scroll-pt":ue()}],"scroll-pr":[{"scroll-pr":ue()}],"scroll-pb":[{"scroll-pb":ue()}],"scroll-pl":[{"scroll-pl":ue()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Be]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[la,$a,mp]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},g4=KC(m4),$=(...e)=>g4(HC(e));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var e2=(e,t)=>{let r=0;return i=>{const s=Date.now();if(s-r>=t)return r=s,e(i)}},ha=e=>{if(!Lr)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},Tn=(e,t)=>{if(Lr)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},hw=e=>{if(Lr)try{window.localStorage.removeItem(e)}catch{}},v4=24,y4=12,Cl=e=>{if(!e)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:t,type:r,elementType:i}=e;let s=Wt(r);const c=[],u=[];if(xl(e)||t===Ll||t===jl||r?.$$typeof===Symbol.for("react.memo")||i?.$$typeof===Symbol.for("react.memo")){const f=xl(e);u.push({type:"memo",title:f?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:f})}if(t===v4&&u.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),t===Od&&u.push({type:"suspense",title:"Component that can suspend while content is loading"}),t===y4&&u.push({type:"profiler",title:"Component that measures rendering performance"}),typeof s=="string"){const f=/^(\w+)\((.*)\)$/;let h=s;for(;f.test(h);){const p=h.match(f);if(p?.[1]&&p?.[2])c.unshift(p[1]),h=p[2];else break}s=h}return{name:s||"Unknown",wrappers:c,wrapperTypes:u}},Ud=Ft(!1),pm=Ft(null),Mr={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:Bt.width,height:Bt.height,position:{x:ze,y:ze}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:Bt.width,height:Bt.height,position:{x:ze,y:ze}},componentsTree:{width:gr}},b4=()=>{const e=ha(fa);return e?{corner:e.corner??Mr.corner,dimensions:e.dimensions??Mr.dimensions,lastDimensions:e.lastDimensions??e.dimensions??Mr.lastDimensions,componentsTree:e.componentsTree??Mr.componentsTree}:(Tn(fa,{corner:Mr.corner,dimensions:Mr.dimensions,lastDimensions:Mr.lastDimensions,componentsTree:Mr.componentsTree}),Mr)},ye=Ft(b4()),gp=()=>{if(!Lr)return;const{dimensions:e}=ye.value,{width:t,height:r,position:i}=e;ye.value={...ye.value,dimensions:{isFullWidth:t>=window.innerWidth-ze*2,isFullHeight:r>=window.innerHeight-ze*2,width:t,height:r,position:i}}},mt=Ft({view:"none"}),w4=ha(Au),Ln=Ft(w4??null);function x4(){return!1}function dg(e){function t(r){return this.shouldComponentUpdate=x4,ji(e,r)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var _4=e=>{const{count:t,getScrollElement:r,estimateSize:i,overscan:s=5}=e,[c,u]=Ye(0),[f,h]=Ye(0),p=Ne(),y=Ne(null),v=Ne(null),w=i(),x=Ot(E=>{if(!y.current)return;const R=E?.[0]?.contentRect.height??y.current.getBoundingClientRect().height;h(R)},[]),_=Ot(()=>{v.current!==null&&cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>{x(),v.current=null})},[x]);Fe(()=>{const E=r();if(!E)return;y.current=E;const R=()=>{y.current&&u(y.current.scrollTop)};x(),p.current||(p.current=new ResizeObserver(()=>{_()})),p.current.observe(E),E.addEventListener("scroll",R,{passive:!0});const O=new MutationObserver(_);return O.observe(E,{attributes:!0,childList:!0,subtree:!0}),()=>{E.removeEventListener("scroll",R),p.current&&p.current.disconnect(),O.disconnect(),v.current!==null&&cancelAnimationFrame(v.current)}},[r,x,_]);const k=br(()=>{const E=Math.floor(c/w),R=Math.ceil(f/w);return{start:Math.max(0,E-s),end:Math.min(t,E+R+s)}},[c,w,f,t,s]);return{virtualItems:br(()=>{const E=[];for(let R=k.start;R<k.end;R++)E.push({key:R,index:R,start:R*w});return E},[k,w]),totalSize:t*w,scrollTop:c,containerHeight:f}};ha("react-scann-pinned");var S4=e=>{const t=[];let r=e;for(;r;){const i=r.elementType,s=typeof i=="function"?i.displayName||i.name:typeof i=="string"?i:"Unknown",c=r.index!==void 0?`[${r.index}]`:"";t.unshift(`${s}${c}`),r=r.return??null}return t.join("::")},xi=new WeakMap,E4=(e,t)=>{const r=t.bind(null,e);return document.addEventListener("scroll",r,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",r,{capture:!0})}},T4={activeFlashes:new Map,create(e){const t=e.querySelector(".react-scan-flash-overlay"),r=t instanceof HTMLElement?t:(()=>{const s=document.createElement("div");s.className="react-scan-flash-overlay",e.appendChild(s);const c=E4(e,()=>{e.querySelector(".react-scan-flash-overlay")&&this.create(e)});return this.activeFlashes.set(e,{element:e,overlay:s,scrollCleanup:c}),s})(),i=xi.get(r);i&&(clearTimeout(i),xi.delete(r)),requestAnimationFrame(()=>{r.style.transition="none",r.style.opacity="0.9";const s=setTimeout(()=>{r.style.transition="opacity 150ms ease-out",r.style.opacity="0";const c=setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r);const u=this.activeFlashes.get(e);u?.scrollCleanup&&u.scrollCleanup(),this.activeFlashes.delete(e),xi.delete(r)},150);xi.set(r,c)},300);xi.set(r,s)})},cleanup(e){const t=this.activeFlashes.get(e);if(t){const r=xi.get(t.overlay);r&&(clearTimeout(r),xi.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(const[,e]of this.activeFlashes)this.cleanup(e.element)}},pw=1e3,t2={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},gn=Ft(t2),fg=Ft(0),Ni=[],_i=null,C4=()=>{if(Ni.length===0)return;const e=[...Ni],{updates:t,totalUpdates:r,currentIndex:i,isViewingHistory:s}=gn.value,c=[...t];let u=r;for(const{update:y}of e)c.length>=pw&&c.shift(),c.push(y),u++;const f=Math.max(0,u-pw);let h;s?i===r-1?h=c.length-1:i===0?h=0:f===0?h=i:h=i-1:h=c.length-1;const p=e[e.length-1];gn.value={...gn.value,latestFiber:p.fiber,updates:c,totalUpdates:u,windowOffset:f,currentIndex:h,isViewingHistory:s},Ni=Ni.slice(e.length)},n2={showTimeline:()=>{gn.value={...gn.value,isVisible:!0}},hideTimeline:()=>{gn.value={...gn.value,isVisible:!1,currentIndex:gn.value.updates.length-1}},updateFrame:(e,t)=>{gn.value={...gn.value,currentIndex:e,isViewingHistory:t}},updatePlaybackSpeed:e=>{gn.value={...gn.value,playbackSpeed:e}},addUpdate:(e,t)=>{if(Ni.push({update:e,fiber:t}),!_i){const r=()=>{C4(),_i=null,Ni.length>0&&(_i=setTimeout(r,96))};_i=setTimeout(r,96)}},reset:()=>{_i&&(clearTimeout(_i),_i=null),Ni=[],gn.value=t2}},un=Ft({query:"",matches:[],currentMatchIndex:-1}),vp=Ft(!1),r2=(e,t=0,r=null)=>e.reduce((i,s,c)=>{const u=s.element?S4(s.fiber):`${r}-${c}`,f=s.fiber?.type?m2(s.fiber):void 0,h={...s,depth:t,nodeId:u,parentId:r,fiber:s.fiber,renderData:f};return i.push(h),s.children?.length&&i.push(...r2(s.children,t+1,u)),i},[]),N4=e=>e.reduce((t,r)=>Math.max(t,r.depth),0),k4=(e,t)=>{if(t<=0)return 24;const c=Math.max(0,e-gr);if(c<24)return 0;const f=Math.min(c*.3,t*24)/t;return Math.max(0,Math.min(24,f))},R4=["memo","forwardRef","lazy","suspense"],a2=e=>{const t=e.match(/\[(.*?)\]/);if(!t)return null;const r=[],i=t[1].split(",");for(const s of i){const c=s.trim().toLowerCase();c&&r.push(c)}return r},A4=e=>{if(e.length===0)return!1;for(const t of e){let r=!1;for(const i of R4)if(i.toLowerCase().includes(t)){r=!0;break}if(!r)return!1}return!0},i2=(e,t)=>{if(e.length===0)return!0;if(!t.length)return!1;for(const r of e){let i=!1;for(const s of t)if(s.type.toLowerCase().includes(r)){i=!0;break}if(!i)return!1}return!0},O4=(e,t)=>br(()=>{const{query:r,matches:i}=t,s=i.some(p=>p.nodeId===e.nodeId),c=a2(r)||[],u=r?r.replace(/\[.*?\]/,"").trim():"";if(!r||!s)return{highlightedText:g("span",{className:"truncate",children:e.label}),typeHighlight:!1};let f=!0;if(c.length>0)if(!e.fiber)f=!1;else{const{wrapperTypes:p}=Cl(e.fiber);f=i2(c,p)}let h=g("span",{className:"truncate",children:e.label});if(u)try{if(u.startsWith("/")&&u.endsWith("/")){const p=u.slice(1,-1),y=new RegExp(`(${p})`,"i"),v=e.label.split(y);h=g("span",{className:"tree-node-search-highlight",children:v.map((w,x)=>y.test(w)?g("span",{className:$("regex",{start:y.test(w)&&x===0,middle:y.test(w)&&x%2===1,end:y.test(w)&&x===v.length-1,"!ml-0":x===1}),children:w},`${e.nodeId}-${w}`):w)})}else{const p=e.label.toLowerCase(),y=u.toLowerCase(),v=p.indexOf(y);v>=0&&(h=g("span",{className:"tree-node-search-highlight",children:[e.label.slice(0,v),g("span",{className:"single",children:e.label.slice(v,v+u.length)}),e.label.slice(v+u.length)]}))}}catch{}return{highlightedText:h,typeHighlight:f&&c.length>0}},[e.label,e.nodeId,e.fiber,t]),mw=e=>e>0?e<.1-Number.EPSILON?"< 0.1":e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:"0",M4=({node:e,nodeIndex:t,hasChildren:r,isCollapsed:i,handleTreeNodeClick:s,handleTreeNodeToggle:c,searchValue:u})=>{const f=Ne(null),h=Ne(e.renderData?.renderCount??0),{highlightedText:p,typeHighlight:y}=O4(e,u);Fe(()=>{const x=e.renderData?.renderCount,_=f.current;!_||!h.current||!x||h.current===x||(_.classList.remove("count-flash"),_.offsetWidth,_.classList.add("count-flash"),h.current=x)},[e.renderData?.renderCount]);const v=br(()=>{if(!e.renderData)return null;const{selfTime:x,totalTime:_,renderCount:k}=e.renderData;return k?g("span",{className:$("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:g("span",{ref:f,title:`Self time: ${mw(x)}ms
Total time: ${mw(_)}ms`,className:"count-badge",children:["×",k]})}):null},[e.renderData]),w=br(()=>{if(!e.fiber)return null;const{wrapperTypes:x}=Cl(e.fiber),_=x[0];return g("span",{className:$("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[_&&g(Ze,{children:[g("span",{title:_?.title,className:$("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",_.type==="memo"&&"bg-[#8e61e3] text-white",y&&"bg-yellow-300 text-black"),children:_.type},_.type),_.compiler&&g("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),x.length>1&&`×${x.length}`,v]})},[e.fiber,y,v]);return g("button",{type:"button",title:e.title,"data-index":t,className:$("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:s,children:[g("button",{type:"button","data-index":t,onClick:c,className:$("w-6 h-6 flex items-center justify-center","text-left"),children:r&&g(Tt,{name:"icon-chevron-right",size:12,className:$("transition-transform",!i&&"rotate-90")})}),p,w]})},z4=()=>{const e=Ne(null),t=Ne(null),r=Ne(null),i=Ne(null),s=Ne(null),c=Ne(0),u=Ne(!1),f=Ne(!1),h=Ne(null),[p,y]=Ye([]),[v,w]=Ye(new Set),[x,_]=Ye(void 0),[k,N]=Ye(un.value),E=br(()=>{const S=[],z=p,H=new Map(z.map(Z=>[Z.nodeId,Z]));for(const Z of z){let re=!0,A=Z;for(;A.parentId;){const Y=H.get(A.parentId);if(!Y)break;if(v.has(Y.nodeId)){re=!1;break}A=Y}re&&S.push(Z)}return S},[v,p]),R=28,{virtualItems:O,totalSize:B}=_4({count:E.length,getScrollElement:()=>e.current,estimateSize:()=>R,overscan:5}),F=Ot(S=>{u.current=!0,i.current?.blur(),vp.value=!0;const{parentCompositeFiber:z}=ki(S);if(!z)return;ge.inspectState.value={kind:"focused",focusedDomElement:S,fiber:z};const H=E.findIndex(Z=>Z.element===S);if(H!==-1){_(H);const Z=H*R,re=e.current;if(re){const A=re.clientHeight,Y=re.scrollTop;(Z<Y||Z+R>Y+A)&&re.scrollTo({top:Math.max(0,Z-A/2),behavior:"instant"})}}},[E]),M=Ot(S=>{const z=S.currentTarget,H=Number(z.dataset.index);if(Number.isNaN(H))return;const Z=E[H].element;Z&&F(Z)},[E,F]),G=Ot(S=>{w(z=>{const H=new Set(z);return H.has(S)?H.delete(S):H.add(S),H})},[]),ie=Ot(S=>{S.stopPropagation();const z=S.target,H=Number(z.dataset.index);if(Number.isNaN(H))return;const Z=E[H].nodeId;G(Z)},[E,G]),oe=Ot(S=>{r.current?.classList.remove("!border-red-500");const z=[];if(!S){un.value={query:S,matches:z,currentMatchIndex:-1};return}if(S.includes("[")&&!S.includes("]")&&S.length>S.indexOf("[")+1){r.current?.classList.add("!border-red-500");return}const H=a2(S)||[];if(S.includes("[")&&!A4(H)){r.current?.classList.add("!border-red-500");return}const Z=S.replace(/\[.*?\]/,"").trim(),re=/^\/.*\/$/.test(Z);let A=Y=>!1;if(Z.startsWith("/")&&!re&&Z.length>1){r.current?.classList.add("!border-red-500");return}if(re)try{const Y=Z.slice(1,-1),J=new RegExp(Y,"i");A=ae=>J.test(ae)}catch{r.current?.classList.add("!border-red-500");return}else if(Z){const Y=Z.toLowerCase();A=J=>J.toLowerCase().includes(Y)}for(const Y of p){let J=!0;if(Z&&(J=A(Y.label)),J&&H.length>0)if(!Y.fiber)J=!1;else{const{wrapperTypes:ae}=Cl(Y.fiber);J=i2(H,ae)}J&&z.push(Y)}if(un.value={query:S,matches:z,currentMatchIndex:z.length>0?0:-1},z.length>0){const Y=z[0],J=E.findIndex(ae=>ae.nodeId===Y.nodeId);if(J!==-1){const ae=J*R,le=e.current;if(le){const me=le.clientHeight;le.scrollTo({top:Math.max(0,ae-me/2),behavior:"instant"})}}}},[p,E]),fe=Ot(S=>{const z=S.currentTarget;z&&oe(z.value)},[oe]),he=Ot(S=>{const{matches:z,currentMatchIndex:H}=un.value;if(z.length===0)return;const Z=S==="next"?(H+1)%z.length:(H-1+z.length)%z.length;un.value={...un.value,currentMatchIndex:Z};const re=z[Z],A=E.findIndex(Y=>Y.nodeId===re.nodeId);if(A!==-1){_(A);const Y=A*R,J=e.current;if(J){const ae=J.clientHeight;J.scrollTo({top:Math.max(0,Y-ae/2),behavior:"instant"})}}},[E]),ue=Ot(S=>{if(t.current&&(t.current.style.width=`${S}px`),e.current){e.current.style.width=`${S}px`;const z=k4(S,c.current);e.current.style.setProperty("--indentation-size",`${z}px`)}},[]),_e=Ot(S=>{if(!h.current)return;const z=ye.value.dimensions.width,H=Math.floor(z-gr/2);h.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),S<=gr?h.current.classList.add("cursor-w-resize"):S>=H?h.current.classList.add("cursor-e-resize"):h.current.classList.add("cursor-ew-resize")},[]),we=Ot(S=>{if(S.preventDefault(),S.stopPropagation(),!e.current)return;e.current.style.setProperty("pointer-events","none"),f.current=!0;const z=S.clientX,H=e.current.offsetWidth,Z=ye.value.dimensions.width,re=Math.floor(Z-gr/2);_e(H);const A=J=>{const ae=z-J.clientX,le=H+ae;_e(le);const me=Math.min(re,Math.max(gr,le));ue(me)},Y=()=>{e.current&&(e.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",A),document.removeEventListener("pointerup",Y),ye.value={...ye.value,componentsTree:{...ye.value.componentsTree,width:e.current.offsetWidth}},Tn(fa,ye.value),f.current=!1)};document.addEventListener("pointermove",A),document.addEventListener("pointerup",Y)},[ue,_e]);Fe(()=>{if(!e.current)return;const S=e.current.offsetWidth;return _e(S),ye.subscribe(()=>{e.current&&_e(e.current.offsetWidth)})},[_e]);const Oe=Ot(()=>{u.current=!1},[]);return Fe(()=>{let S=!0;const z=Y=>{const J=new Map,ae=[];for(const{element:le,name:me,fiber:Re}of Y){if(!le)continue;let Qe=me;const{name:De,wrappers:Ie}=Cl(Re);De&&(Ie.length>0?Qe=`${Ie.join("(")}(${De})${")".repeat(Ie.length)}`:Qe=De),J.set(le,{label:De||me,title:Qe,children:[],element:le,fiber:Re})}for(const{element:le,depth:me}of Y){if(!le)continue;const Re=J.get(le);if(Re)if(me===0)ae.push(Re);else{let Qe=le.parentElement;for(;Qe;){const De=J.get(Qe);if(De){De.children=De.children||[],De.children.push(Re);break}Qe=Qe.parentElement}}}return ae},H=()=>{const Y=s.current;if(!Y)return;const J=Z4(),ae=z(J);if(ae.length>0){const le=r2(ae),me=N4(le);if(c.current=me,ue(ye.value.componentsTree.width),y(le),S){S=!1;const Re=le.findIndex(Qe=>Qe.element===Y);if(Re!==-1){const Qe=Re*R,De=e.current;De&&setTimeout(()=>{De.scrollTo({top:Qe,behavior:"instant"})},96)}}}},Z=ge.inspectState.subscribe(Y=>{if(Y.kind==="focused"){if(vp.value)return;oe(""),s.current=Y.focusedDomElement,H()}});let re=0;const A=fg.subscribe(()=>{if(ge.inspectState.value.kind==="focused"){if(cancelAnimationFrame(re),f.current)return;re=requestAnimationFrame(()=>{vp.value=!1,H()})}});return()=>{Z(),A(),un.value={query:"",matches:[],currentMatchIndex:-1}}},[]),Fe(()=>{const S=z=>{if(u.current&&x)switch(z.key){case"ArrowUp":{if(z.preventDefault(),z.stopPropagation(),x>0){const H=E[x-1];H?.element&&F(H.element)}return}case"ArrowDown":{if(z.preventDefault(),z.stopPropagation(),x<E.length-1){const H=E[x+1];H?.element&&F(H.element)}return}case"ArrowLeft":{z.preventDefault(),z.stopPropagation();const H=E[x];H?.nodeId&&G(H.nodeId);return}case"ArrowRight":{z.preventDefault(),z.stopPropagation();const H=E[x];H?.nodeId&&G(H.nodeId);return}}};return document.addEventListener("keydown",S),()=>{document.removeEventListener("keydown",S)}},[x,E,F,G]),Fe(()=>un.subscribe(N),[]),Fe(()=>ye.subscribe(z=>{t.current?.style.setProperty("transition","width 0.1s"),ue(z.componentsTree.width),setTimeout(()=>{t.current?.style.removeProperty("transition")},500)}),[]),g("div",{className:"react-scan-components-tree flex",children:[g("div",{ref:h,onPointerDown:we,className:"relative resize-v-line",children:g("span",{children:g(Tt,{name:"icon-ellipsis",size:18})})}),g("div",{ref:t,className:"flex flex-col h-full",children:[g("div",{className:"p-2 border-b border-[#1e1e1e]",children:g("div",{ref:r,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:$("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[g(Tt,{name:"icon-search",size:12,className:" text-neutral-500"}),g("div",{className:"relative flex-1 h-7 overflow-hidden",children:g("input",{ref:i,type:"text",value:un.value.query,onClick:S=>{S.stopPropagation(),S.currentTarget.focus()},onPointerDown:S=>{S.stopPropagation()},onKeyDown:S=>{S.key==="Escape"&&S.currentTarget.blur(),un.value.matches.length&&(S.key==="Enter"&&S.shiftKey?he("prev"):S.key==="Enter"&&(S.metaKey||S.ctrlKey?(S.preventDefault(),S.stopPropagation(),F(un.value.matches[un.value.currentMatchIndex].element),S.currentTarget.focus()):he("next")))},onChange:fe,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),un.value.query?g(Ze,{children:[g("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[un.value.currentMatchIndex+1,"|",un.value.matches.length]}),!!un.value.matches.length&&g(Ze,{children:[g("button",{type:"button",onClick:S=>{S.stopPropagation(),he("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:g(Tt,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),g("button",{type:"button",onClick:S=>{S.stopPropagation(),he("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:g(Tt,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),g("button",{type:"button",onClick:S=>{S.stopPropagation(),oe("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:g(Tt,{name:"icon-close",size:12})})]}):!!p.length&&g("span",{className:"text-xs text-neutral-500",children:p.length})]})}),g("div",{className:"flex-1 overflow-hidden",children:g("div",{ref:e,onPointerLeave:Oe,className:"tree h-full overflow-auto will-change-transform",children:g("div",{className:"relative w-full",style:{height:B},children:O.map(S=>{const z=E[S.index];if(!z)return null;const H=ge.inspectState.value.kind==="focused"&&z.element===ge.inspectState.value.focusedDomElement,Z=S.index===x;return g("div",{className:$("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(H||Z)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:S.start,height:R},children:g("div",{className:"w-full h-full",style:{paddingLeft:`calc(${z.depth} * var(--indentation-size))`},children:g(M4,{node:z,nodeIndex:S.index,hasChildren:!!z.children?.length,isCollapsed:v.has(z.nodeId),handleTreeNodeClick:M,handleTreeNodeToggle:ie,searchValue:k})})},z.nodeId)})})})})]})]})},sd=jd(({text:e,children:t,onCopy:r,className:i,iconSize:s=14})=>{const[c,u]=Ye(!1);Fe(()=>{if(c){const p=setTimeout(()=>u(!1),600);return()=>{clearTimeout(p)}}},[c]);const f=Ot(p=>{p.preventDefault(),p.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{u(!0),r?.(!0,e)},()=>{r?.(!1,e)})},[e,r]),h=g("button",{onClick:f,type:"button",className:$("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${s}px]`,i),children:g(Tt,{name:`icon-${c?"check":"copy"}`,size:[s],className:$(c&&"text-green-500")})});return t?t({ClipboardIcon:h,onClick:f}):h}),D4=({length:e,expanded:t,onToggle:r,isNegative:i})=>g("div",{className:"flex items-center gap-1",children:[g("button",{type:"button",onClick:r,className:"flex items-center p-0 opacity-50",children:g(Tt,{name:"icon-chevron-right",size:12,className:$("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),g("span",{children:["Array(",e,")"]})]}),mm=({value:e,path:t,isNegative:r})=>{const[i,s]=Ye(!1);if(!(e!==null&&typeof e=="object"&&!(e instanceof Date)))return g("div",{className:"flex items-center gap-1",children:[g("span",{className:"text-gray-500",children:[t,":"]}),g("span",{className:"truncate",children:dd(e)})]});const u=Object.entries(e);return g("div",{className:"flex flex-col",children:[g("div",{className:"flex items-center gap-1",children:[g("button",{type:"button",onClick:()=>s(!i),className:"flex items-center p-0 opacity-50",children:g(Tt,{name:"icon-chevron-right",size:12,className:$("transition-[color,transform]",r?"text-[#f87171]":"text-[#4ade80]",i&&"rotate-90")})}),g("span",{className:"text-gray-500",children:[t,":"]}),!i&&g("span",{className:"truncate",children:e instanceof Date?dd(e):`{${Object.keys(e).join(", ")}}`})]}),i&&g("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:u.map(([f,h])=>g(mm,{value:h,path:f,isNegative:r},f))})]})},ld=({value:e,expanded:t,onToggle:r,isNegative:i})=>{const{value:s,error:c}=nN(e);return c?g("span",{className:"text-gray-500 font-italic",children:c}):s!==null&&typeof s=="object"&&!(s instanceof Promise)?Array.isArray(s)?g("div",{className:"flex flex-col gap-1 relative",children:[g(D4,{length:s.length,expanded:t,onToggle:r,isNegative:i}),t&&g("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:s.map((f,h)=>g(mm,{value:f,path:h.toString(),isNegative:i},h.toString()))}),g(sd,{text:ww(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:f})=>g(Ze,{children:f})})]}):g("div",{className:"flex items-start gap-1 relative",children:[g("button",{type:"button",onClick:r,className:$("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:g(Tt,{name:"icon-chevron-right",size:12,className:$("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),g("div",{className:"flex-1",children:t?g("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(s).map(([f,h])=>g(mm,{value:h,path:f,isNegative:i},f))}):g("span",{children:dd(s)})}),g(sd,{text:ww(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:f})=>g(Ze,{children:f})})]}):g("span",{children:dd(s)})},j4=50;Ft({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var gm=e=>{switch(e.kind){case"initialized":return e.changes.currentValue;case"partially-initialized":return e.value}},gw=(e,t)=>{for(const r of e){const i=t.get(r.name);if(i){t.set(i.name,{count:i.count+1,currentValue:r.value,id:i.name,lastUpdated:Date.now(),name:i.name,previousValue:r.prevValue});continue}t.set(r.name,{count:1,currentValue:r.value,id:r.name,lastUpdated:Date.now(),name:r.name,previousValue:r.prevValue})}},L4=(e,t)=>{for(const r of e){const i=t.contextChanges.get(r.contextType);if(i){if(Wa(gm(i),r.value))continue;if(i.kind==="partially-initialized"){t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:i.value}});continue}t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:i.changes.count+1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:i.changes.currentValue}});continue}t.contextChanges.set(r.contextType,{kind:"partially-initialized",id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,value:r.value})}},U4=e=>{const t={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return e.forEach(r=>{L4(r.contextChanges,t),gw(r.stateChanges,t.stateChanges),gw(r.propsChanges,t.propsChanges)}),t},vw=(e,t)=>{const r=new Map;return e.forEach((i,s)=>{r.set(s,i)}),t.forEach((i,s)=>{const c=r.get(s);if(!c){r.set(s,i);return}r.set(s,{count:c.count+i.count,currentValue:i.currentValue,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:i.previousValue})}),r},H4=(e,t)=>{const r=new Map;return e.contextChanges.forEach((i,s)=>{r.set(s,i)}),t.contextChanges.forEach((i,s)=>{const c=r.get(s);if(!c){r.set(s,i);return}if(gm(i)!==gm(c))switch(c.kind){case"initialized":switch(i.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{...i.changes,count:i.changes.count+c.changes.count+1,currentValue:i.changes.currentValue,previousValue:i.changes.previousValue}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:c.changes.count+1,currentValue:i.value,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:c.changes.currentValue}});return}}case"partially-initialized":switch(i.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{count:i.changes.count+1,currentValue:i.changes.currentValue,id:i.changes.id,lastUpdated:i.changes.lastUpdated,name:i.changes.name,previousValue:c.value}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:1,currentValue:i.value,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:c.value}});return}}}}),r},B4=(e,t)=>{const r=H4(e,t),i=vw(e.propsChanges,t.propsChanges),s=vw(e.stateChanges,t.stateChanges);return{contextChanges:r,propsChanges:i,stateChanges:s}},vm=e=>Array.from(e.propsChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.stateChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.contextChanges.values()).filter(t=>t.kind==="initialized").reduce((t,r)=>t+r.changes.count,0),F4=e=>{const t=Ne({queue:[]}),[r,i]=Ye({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),s=ge.inspectState.value.kind==="focused"?ge.inspectState.value.fiber:null,c=s?Ga(s):null;return Fe(()=>{const u=setInterval(()=>{t.current.queue.length!==0&&(i(f=>{const h=U4(t.current.queue),p=B4(f,h);return vm(f),vm(p),p}),t.current.queue=[])},j4);return()=>{clearInterval(u)}},[s]),Fe(()=>{if(!c)return;const u=h=>{t.current?.queue.push(h)};let f=ge.changesListeners.get(c);return f||(f=[],ge.changesListeners.set(c,f)),f.push(u),()=>{i({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],ge.changesListeners.set(c,ge.changesListeners.get(c)?.filter(h=>h!==u)??[])}},[c]),Fe(()=>()=>{i({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[c]),r},cd=e=>{if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(Fo(e))return{value:"Promise"};try{const t=Object.getPrototypeOf(e);return t===Promise.prototype||t?.constructor?.name==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},$4=jd(()=>{const[e,t]=Ye(!0),r=F4(),[i,s]=Ye(!1),c=vm(r)>0;Fe(()=>{if(!i&&c){const h=setTimeout(()=>{s(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(h)}},[i,c]);const u=new Map(Array.from(r.contextChanges.entries()).filter(([,h])=>h.kind==="initialized").map(([h,p])=>[h,p.kind==="partially-initialized"?null:p.changes])),f=ge.inspectState.value.kind==="focused"?ge.inspectState.value.fiber:null;if(f)return g(Ze,{children:[g(Y4,{}),g("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[g("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[g("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",g("span",{className:"text-[#A855F7]",children:Wt(f)})," ","render?"]}),!c&&g("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[g("div",{children:"No changes detected since selecting"}),g("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),g("div",{className:$("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[g(yp,{changes:r.propsChanges,title:"Changed Props",isExpanded:e}),g(yp,{renderName:h=>q4(h,Wt($i(f))??"Unknown Component"),changes:r.stateChanges,title:"Changed State",isExpanded:e}),g(yp,{changes:u,title:"Changed Context",isExpanded:e})]})]})]})}),q4=(e,t)=>{if(Number.isNaN(Number(e)))return e;const r=Number.parseInt(e);return g("span",{className:"truncate",children:[g("span",{className:"text-white",children:[r,(s=>{const c=s%10,u=s%100;if(u>=11&&u<=13)return"th";switch(c){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(r)," hook"," "]}),g("span",{style:{color:"#666"},children:["called in ",g("i",{className:"text-[#A855F7] truncate",children:t})]})]})},Y4=jd(()=>{const e=Ne(null),t=Ne(null),r=Ne(null),i=Ne({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return Fe(()=>{const s=e2(()=>{const u=[];e.current?.dataset.flash==="true"&&u.push(e.current),t.current?.dataset.flash==="true"&&u.push(t.current),r.current?.dataset.flash==="true"&&u.push(r.current);for(const f of u)f.classList.remove("count-flash-white"),f.offsetWidth,f.classList.add("count-flash-white")},400);return gn.subscribe(u=>{if(!e.current||!t.current||!r.current)return;const{currentIndex:f,updates:h}=u,p=h[f];!p||f===0||(s(),i.current={isPropsChanged:(p.props?.changes?.size??0)>0,isStateChanged:(p.state?.changes?.size??0)>0,isContextChanged:(p.context?.changes?.size??0)>0},e.current.dataset.flash!=="true"&&(e.current.dataset.flash=i.current.isPropsChanged.toString()),t.current.dataset.flash!=="true"&&(t.current.dataset.flash=i.current.isStateChanged.toString()),r.current.dataset.flash!=="true"&&(r.current.dataset.flash=i.current.isContextChanged.toString()))})},[]),g("button",{type:"button",className:$("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:g("div",{className:$("flex-1 react-scan-expandable"),children:g("div",{className:"overflow-hidden",children:g("div",{className:"flex items-center whitespace-nowrap",children:[g("div",{className:"flex items-center gap-x-2",children:"What changed?"}),g("div",{className:$("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[g("div",{ref:e,children:"props"}),g("div",{ref:t,children:"state"}),g("div",{ref:r,children:"context"})]})]})})})})}),V4=e=>e,yp=jd(({title:e,changes:t,renderName:r=V4})=>{const[i,s]=Ye(new Set),[c,u]=Ye(new Set),f=Array.from(t.entries());return t.size===0?null:g("div",{children:[g("div",{className:"text-xs text-[#888] mb-1.5",children:e}),g("div",{className:"flex flex-col gap-2",children:f.map(([h,p])=>{const y=c.has(String(h)),{value:v,error:w}=cd(p.previousValue),{value:x,error:_}=cd(p.currentValue),k=c2(v,x);return g("div",{children:[g("button",{onClick:()=>{u(N=>{const E=new Set(N);return E.has(String(h))?E.delete(String(h)):E.add(String(h)),E})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:g("div",{className:"flex items-center gap-1.5 flex-1",children:[g(Tt,{name:"icon-chevron-right",size:12,className:$("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":y})}),g("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[r(p.name),g(G4,{count:p.count,isFunction:typeof p.currentValue=="function",showWarning:k.changes.length===0,forceFlash:!0})]})]})}),g("div",{className:$("react-scan-expandable",{"react-scan-expanded":y}),children:g("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:g("div",{className:"flex flex-col gap-0.5",children:w||_?g(P4,{currError:_,prevError:w}):k.changes.length>0?g(X4,{change:p,diff:k,expandedFns:i,renderName:r,setExpandedFns:s,title:e}):g(I4,{currValue:x,entryKey:h,expandedFns:i,prevValue:v,setExpandedFns:s})})})})]},h)})})]})}),P4=({prevError:e,currError:t})=>g(Ze,{children:[e&&g("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:e}),t&&g("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:t})]}),X4=({diff:e,title:t,renderName:r,change:i,expandedFns:s,setExpandedFns:c})=>e.changes.map((u,f)=>{const{value:h,error:p}=cd(u.prevValue),{value:y,error:v}=cd(u.currentValue),w=typeof h=="function"||typeof y=="function";let x;return t==="Props"&&(x=u.path.length>0?`${r(String(i.name))}.${hr(u.path)}`:void 0),t==="State"&&u.path.length>0&&(x=`state.${hr(u.path)}`),x||(x=hr(u.path)),g("div",{className:$("flex flex-col gap-y-1",f<e.changes.length-1&&"mb-4"),children:[x&&g("div",{className:"text-[#666] text-[10px]",children:x}),g("button",{type:"button",className:$("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",w&&"cursor-pointer"),onClick:w?()=>{const _=`${hr(u.path)}-prev`;c(k=>{const N=new Set(k);return N.has(_)?N.delete(_):N.add(_),N})}:void 0,children:[g("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),g("span",{className:"flex-1 whitespace-nowrap font-mono",children:p?g("span",{className:"italic text-[#f87171]",children:p}):w?g("div",{className:"flex gap-1 items-start flex-col",children:[g("div",{className:"flex gap-1 items-start w-full",children:[g("span",{className:"flex-1 max-h-40",children:bm(h,s.has(`${hr(u.path)}-prev`))}),typeof h=="function"&&g(sd,{text:h.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:_})=>g(Ze,{children:_})})]}),h?.toString()===y?.toString()&&g("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):g(ld,{value:h,expanded:s.has(`${hr(u.path)}-prev`),onToggle:()=>{const _=`${hr(u.path)}-prev`;c(k=>{const N=new Set(k);return N.has(_)?N.delete(_):N.add(_),N})},isNegative:!0})})]}),g("button",{type:"button",className:$("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",w&&"cursor-pointer"),onClick:w?()=>{const _=`${hr(u.path)}-current`;c(k=>{const N=new Set(k);return N.has(_)?N.delete(_):N.add(_),N})}:void 0,children:[g("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),g("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:v?g("span",{className:"italic text-[#4ade80]",children:v}):w?g("div",{className:"flex gap-1 items-start flex-col",children:[g("div",{className:"flex gap-1 items-start w-full",children:[g("span",{className:"flex-1",children:bm(y,s.has(`${hr(u.path)}-current`))}),typeof y=="function"&&g(sd,{text:y.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:_})=>g(Ze,{children:_})})]}),h?.toString()===y?.toString()&&g("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):g(ld,{value:y,expanded:s.has(`${hr(u.path)}-current`),onToggle:()=>{const _=`${hr(u.path)}-current`;c(k=>{const N=new Set(k);return N.has(_)?N.delete(_):N.add(_),N})},isNegative:!1})})]})]},`${x}-${i.name}-${f}`)}),I4=({prevValue:e,currValue:t,entryKey:r,expandedFns:i,setExpandedFns:s})=>g(Ze,{children:[g("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[g("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),g("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:g(ld,{value:e,expanded:i.has(`${String(r)}-prev`),onToggle:()=>{const c=`${String(r)}-prev`;s(u=>{const f=new Set(u);return f.has(c)?f.delete(c):f.add(c),f})},isNegative:!0})})]}),g("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[g("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),g("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:g(ld,{value:t,expanded:i.has(`${String(r)}-current`),onToggle:()=>{const c=`${String(r)}-current`;s(u=>{const f=new Set(u);return f.has(c)?f.delete(c):f.add(c),f})},isNegative:!1})})]}),typeof t=="object"&&t!==null&&g("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[g(Tt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),g("span",{children:"Reference changed but objects are structurally the same"})]})]}),G4=({count:e,forceFlash:t,isFunction:r,showWarning:i})=>{const s=Ne(!0),c=Ne(null),u=Ne(e);return Fe(()=>{const f=c.current;!f||u.current===e||(f.classList.remove("count-flash"),f.offsetWidth,f.classList.add("count-flash"),u.current=e)},[e]),Fe(()=>{if(s.current){s.current=!1;return}if(t){let f=setTimeout(()=>{c.current?.classList.add("count-flash-white"),f=setTimeout(()=>{c.current?.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(f)}}},[t]),g("div",{ref:c,className:"count-badge",children:[i&&g(Tt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),r&&g(Tt,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",e]})},Ya={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{Ya.lastRendered.clear(),Ya.expandedPaths.clear(),T4.cleanupAll(),oN(),n2.reset()}},o2=class extends rr{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),Ya.cleanup()}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?g("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[g("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[g(Tt,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),g("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),g("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},W4=Yi(()=>$("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!Ud.value&&"opacity-100 delay-300 pointer-events-auto")),Q4=dg(()=>{const e=Ne(null),t=r=>{if(!r)return;e.current=r;const{data:i,shouldUpdate:s}=lN(r);if(s){const c={timestamp:Date.now(),fiberInfo:rN(r),props:i.fiberProps,state:i.fiberState,context:i.fiberContext,stateNames:iN(r)};n2.addUpdate(c,r)}};return Tl(()=>{const r=ge.inspectState.value;El(()=>{if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,Ya.cleanup();return}r.kind==="focused"&&(Ud.value=!1);const{parentCompositeFiber:i}=bw(r.focusedDomElement,r.fiber);if(!i){ge.inspectState.value={kind:"inspect-off"},mt.value={view:"none"};return}e.current?.type!==i.type&&(e.current=i,Ya.cleanup(),t(i))})}),Tl(()=>{fg.value,El(()=>{const r=ge.inspectState.value;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,Ya.cleanup();return}const{parentCompositeFiber:i}=bw(r.focusedDomElement,r.fiber);if(!i){ge.inspectState.value={kind:"inspect-off"},mt.value={view:"none"};return}t(i),r.focusedDomElement.isConnected||(e.current=null,Ya.cleanup(),ge.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),Fe(()=>()=>{Ya.cleanup()},[]),g(o2,{children:g("div",{className:W4,children:g("div",{className:"w-full h-full",children:g($4,{})})})})}),K4=dg(()=>ge.inspectState.value.kind!=="focused"?null:g(o2,{children:[g(Q4,{}),g(z4,{})]})),s2=e=>{if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const t=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t?.renderers)return null;for(const[,r]of Array.from(t.renderers))try{const i=r.findFiberByHostInstance?.(e);if(i)return i}catch{}}if("_reactRootContainer"in e)return e._reactRootContainer?._internalRoot?.current?.child??null;for(const t in e)if(t.startsWith("__reactInternalInstance$")||t.startsWith("__reactFiber"))return e[t];return null},hg=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},pg=e=>{if(!e)return null;try{const t=s2(e);if(!t)return null;const r=Bo(t);return r?r[0]:null}catch{return null}},Bo=e=>{let t=e,r=null;for(;t;){if(Md(t))return[t,r];wl(t)&&!r&&(r=t),t=t.return}return null},yw=(e,t)=>!!v1(t,i=>i===e),J4=async e=>{const t=pg(e);if(!t)return null;const r=hg(t);if(!r)return null;const i=(await LC([r])).get(r);return i||null},ki=e=>{const t=pg(e);if(!t)return{};if(!hg(t))return{};const i=Bo(t);if(!i)return{};const[s]=i;return{parentCompositeFiber:s}},bw=(e,t)=>{if(!e.isConnected)return{};let r=t??pg(e);if(!r)return{};let i=r,s=null,c=null;for(;i;){if(!i.stateNode){i=i.return;continue}if(et.instrumentation?.fiberRoots.has(i.stateNode)){s=i,c=i.stateNode.current;break}i=i.return}if(!s||!c)return{};if(r=yw(r,c)?r:r.alternate??r,!r)return{};if(!hg(r))return{};const u=Bo(r)?.[0];return u?{parentCompositeFiber:yw(u,c)?u:u.alternate??u}:{}},l2=e=>{const t=e.memoizedProps??{},r=e.alternate?.memoizedProps??{},i=[];for(const s in t){if(s==="children")continue;const c=t[s],u=r[s];Wa(c,u)||i.push({name:s,value:c,prevValue:u,type:1})}return i},ym=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),ud=(e,t=!0)=>{if(e.stateNode&&"nodeType"in e.stateNode){const i=e.stateNode;return t&&i.tagName&&ym.has(i.tagName.toLowerCase())?null:i}let r=e.child;for(;r;){const i=ud(r,t);if(i)return i;r=r.sibling}return null},Z4=(e=document.body)=>{const t=[],r=s=>{if(!s)return null;const{parentCompositeFiber:c}=ki(s);return c&&ud(c)===s?s:null},i=(s,c=0)=>{const u=r(s);if(u){const{parentCompositeFiber:f}=ki(u);if(!f)return;t.push({element:u,depth:c,name:Wt(f.type)??"Unknown",fiber:f})}for(const f of Array.from(s.children))i(f,u?c+1:c)};return i(e),t},ww=e=>{try{if(e===null)return"null";if(e===void 0)return"undefined";if(Fo(e))return"Promise";if(typeof e=="function"){const t=e.toString();try{return t.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case(ArrayBuffer.isView(e)&&"length"in e):return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):return JSON.stringify(e,null,2);case typeof e=="object":return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},eN=(e,t)=>{try{return typeof e!="function"||typeof t!="function"?!1:e.toString()===t.toString()}catch{return!1}},c2=(e,t,r=[],i=new WeakSet)=>{if(e===t)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof e=="function"&&typeof t=="function"){const p=eN(e,t);return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t,sameFunction:p}],hasDeepChanges:!p}}if(e===null||t===null||e===void 0||t===void 0||typeof e!="object"||typeof t!="object")return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(i.has(e)||i.has(t))return{type:"object",changes:[{path:r,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};i.add(e),i.add(t);const s=e,c=t,u=new Set([...Object.keys(s),...Object.keys(c)]),f=[];let h=!1;for(const p of u){const y=s[p],v=c[p];if(y!==v)if(typeof y=="object"&&typeof v=="object"&&y!==null&&v!==null){const w=c2(y,v,[...r,p],i);f.push(...w.changes),w.hasDeepChanges&&(h=!0)}else f.push({path:[...r,p],prevValue:y,currentValue:v}),h=!0}return{type:"object",changes:f,hasDeepChanges:h}},hr=e=>e.length===0?"":e.reduce((t,r,i)=>/^\d+$/.test(r)?`${t}[${r}]`:i===0?r:`${t}.${r}`,"");function tN(e){const t=e.replace(/\s+/g," ").trim(),r=[];let i="";for(let E=0;E<t.length;E++){const R=t[E];if(R==="="&&t[E+1]===">"){i.trim()&&r.push(i.trim()),r.push("=>"),i="",E++;continue}/[(){}[\];,<>:\?!]/.test(R)?(i.trim()&&r.push(i.trim()),r.push(R),i=""):/\s/.test(R)?(i.trim()&&r.push(i.trim()),i=""):i+=R}i.trim()&&r.push(i.trim());const s=[];for(let E=0;E<r.length;E++){const R=r[E],O=r[E+1];R==="("&&O===")"||R==="["&&O==="]"||R==="{"&&O==="}"||R==="<"&&O===">"?(s.push(R+O),E++):s.push(R)}const c=new Set,u=new Set;function f(E,R,O){let B=0;for(let F=O;F<s.length;F++){const M=s[F];if(M===E)B++;else if(M===R&&(B--,B===0))return F}return-1}for(let E=0;E<s.length;E++)if(s[E]==="("){const O=f("(",")",E);if(O!==-1&&s[O+1]==="=>")for(let B=E;B<=O;B++)c.add(B)}for(let E=1;E<s.length;E++){const R=s[E-1],O=s[E];if(/^[a-zA-Z0-9_$]+$/.test(R)&&O==="<"){const B=f("<",">",E);if(B!==-1)for(let F=E;F<=B;F++)u.add(F)}}let h=0;const p="  ",y=[];let v="";function w(){v.trim()&&y.push(v.replace(/\s+$/,"")),v=""}function x(){w(),v=p.repeat(h)}const _=[];function k(){return _.length?_[_.length-1]:null}function N(E,R=!1){v.trim()?R||/^[),;:\].}>]$/.test(E)?v+=E:v+=` ${E}`:v+=E}for(let E=0;E<s.length;E++){const R=s[E],O=s[E+1]||"";if(["(","{","[","<"].includes(R)){if(N(R),_.push(R),R==="{")h++,x();else if((R==="("||R==="["||R==="<")&&!(c.has(E)&&R==="("||u.has(E)&&R==="<")){const B={"(":")","[":"]","<":">"}[R];O!==B&&O!=="()"&&O!=="[]"&&O!=="<>"&&(h++,x())}}else if([")","}","]",">"].includes(R)){const B=k();R===")"&&B==="("||R==="]"&&B==="["||R===">"&&B==="<"?!(c.has(E)&&R===")")&&!(u.has(E)&&R===">")&&(h=Math.max(h-1,0),x()):R==="}"&&B==="{"&&(h=Math.max(h-1,0),x()),_.pop(),N(R),R==="}"&&x()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(R))N(R);else if(R==="=>")N(R);else if(R===";")N(R,!0),x();else if(R===","){N(R,!0);const B=k();!(c.has(E)&&B==="(")&&!(u.has(E)&&B==="<")&&B&&["{","[","(","<"].includes(B)&&x()}else N(R)}return w(),y.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var bm=(e,t=!1)=>{try{const r=e.toString(),i=r.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!i)return"ƒ";const c=(i[1]||i[2]||"").replace(/\s+/g,"");return t?tN(r):`ƒ (${c}) => ...`}catch{return"ƒ"}},dd=e=>{if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if(typeof e=="number"||typeof e=="boolean")return String(e);if(typeof e=="function")return bm(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(typeof e=="object"){const t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(", ")}, ...`:t.join(", ")}}`}return String(e)},nN=e=>{if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(e instanceof Promise)return{value:"Promise"};try{const t=Object.getPrototypeOf(e);return t===Promise.prototype||t?.constructor?.name==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},Fo=e=>!!e&&(e instanceof Promise||typeof e=="object"&&"then"in e),rN=e=>{const t=Ci(e);return{displayName:Wt(e)||"Unknown",type:e.type,key:e.key,id:e.index,selfTime:t?.selfTime??null,totalTime:t?.totalTime??null}},mg=new Map,u2=new Map,gg=new Map,wm=null,aN=/\[(?<name>\w+),\s*set\w+\]/g,iN=e=>{const t=e.type?.toString?.()||"";return t?Array.from(t.matchAll(aN),r=>r.groups?.name??""):[]},oN=()=>{mg.clear(),u2.clear(),gg.clear(),wm=null},sN=e=>{const t=e.type!==wm;return wm=e.type,t},bp=(e,t,r,i)=>{const s=e.get(t),c=e===mg||e===gg,u=!Wa(r,i);if(!s)return e.set(t,{count:u&&c?1:0,currentValue:r,previousValue:i,lastUpdated:Date.now()}),{hasChanged:u,count:u&&c?1:c?0:1};if(!Wa(s.currentValue,r)){const f=s.count+1;return e.set(t,{count:f,currentValue:r,previousValue:s.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:f}}return{hasChanged:!1,count:s.count}},xw=e=>{if(!e)return{};if(e.tag===Rd||e.tag===Ad||e.tag===Ll||e.tag===jl){let t=e.memoizedState;const r={};let i=0;for(;t;)t.queue&&t.memoizedState!==void 0&&(r[i]=t.memoizedState),t=t.next,i++;return r}return e.tag===Fi?e.memoizedState||{}:{}},vg=e=>{const t=e.memoizedProps||{},r=e.alternate?.memoizedProps||{},i={},s={},c=Object.keys(t);for(const f of c)f in t&&(i[f]=t[f],s[f]=r[f]);const u=l2(e).map(f=>({name:f.name,value:f.value,prevValue:f.prevValue}));return{current:i,prev:s,changes:u}},yg=e=>{const t=xw(e),r=e.alternate?xw(e.alternate):{},i=[];for(const[s,c]of Object.entries(t)){const u=e.tag===Fi?s:Number(s);e.alternate&&!Wa(r[s],c)&&i.push({name:u,value:c,prevValue:r[s]})}return{current:t,prev:r,changes:i}},bg=e=>{const t=Sw(e),r=e.alternate?Sw(e.alternate):new Map,i={},s={},c=[],u=new Set;for(const[f,h]of t){const p=h.displayName,y=f;if(u.has(y))continue;u.add(y),i[p]=h.value;const v=r.get(f);v&&(s[p]=v.value,Wa(v.value,h.value)||c.push({name:p,value:h.value,prevValue:v.value,contextType:f}))}return{current:i,prev:s,changes:c}},lN=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:t(),fiberState:t(),fiberContext:t()},shouldUpdate:!1};let r=!1;const i=sN(e),s=t();if(e.memoizedProps){const{current:v,changes:w}=vg(e);for(const[x,_]of Object.entries(v))s.current.push({name:x,value:Fo(_)?{type:"promise",displayValue:"Promise"}:_});for(const x of w){const{hasChanged:_,count:k}=bp(mg,x.name,x.value,x.prevValue);_&&(r=!0,s.changes.add(x.name),s.changesCounts.set(x.name,k))}}const c=t(),{current:u,changes:f}=yg(e);for(const[v,w]of Object.entries(u)){const x=e.tag===Fi?v:Number(v);c.current.push({name:x,value:w})}for(const v of f){const{hasChanged:w,count:x}=bp(u2,v.name,v.value,v.prevValue);w&&(r=!0,c.changes.add(v.name),c.changesCounts.set(v.name,x))}const h=t(),{current:p,changes:y}=bg(e);for(const[v,w]of Object.entries(p))h.current.push({name:v,value:w});if(!i)for(const v of y){const{hasChanged:w,count:x}=bp(gg,v.name,v.value,v.prevValue);w&&(r=!0,h.changes.add(v.name),h.changesCounts.set(v.name,x))}return!r&&!i&&(s.changes.clear(),c.changes.clear(),h.changes.clear()),{data:{fiberProps:s,fiberState:c,fiberContext:h},shouldUpdate:r||i}},_w=new WeakMap,Sw=e=>{if(!e)return new Map;const t=_w.get(e);if(t)return t;const r=new Map;let i=e;for(;i;){const s=i.dependencies;if(s?.firstContext){let c=s.firstContext;for(;c;){const u=c.memoizedValue,f=c.context?.displayName;if(r.has(u)||r.set(c.context,{value:u,displayName:f??"UnnamedContext",contextType:null}),c===c.next)break;c=c.next}}i=i.return}return _w.set(e,r),r},Ew=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};const r=t();if(e.memoizedProps){const{current:f,changes:h}=vg(e);for(const[p,y]of Object.entries(f))r.current.push({name:p,value:Fo(y)?{type:"promise",displayValue:"Promise"}:y});for(const p of h)r.changes.add(p.name),r.changesCounts.set(p.name,1)}const i=t();if(e.memoizedState){const{current:f,changes:h}=yg(e);for(const[p,y]of Object.entries(f))i.current.push({name:p,value:Fo(y)?{type:"promise",displayValue:"Promise"}:y});for(const p of h)i.changes.add(p.name),i.changesCounts.set(p.name,1)}const s=t(),{current:c,changes:u}=bg(e);for(const[f,h]of Object.entries(c))s.current.push({name:f,value:Fo(h)?{type:"promise",displayValue:"Promise"}:h});for(const f of u)s.changes.add(f.name),s.changesCounts.set(f.name,1);return{fiberProps:r,fiberState:i,fiberContext:s}},xm=0,Tw=performance.now(),wp=0,Cw=!1,d2=()=>{wp++;const e=performance.now();e-Tw>=1e3&&(xm=wp,wp=0,Tw=e),requestAnimationFrame(d2)},f2=()=>(Cw||(Cw=!0,d2(),xm=60),xm),cN=e=>{if(!e)return[];const t=[];if(e.tag===Rd||e.tag===Ad||e.tag===Ll||e.tag===jl){let r=e.memoizedState,i=e.alternate?.memoizedState,s=0;for(;r;){if(r.queue&&r.memoizedState!==void 0){const c={type:2,name:s.toString(),value:r.memoizedState,prevValue:i?.memoizedState};Wa(c.prevValue,c.value)||t.push(c)}r=r.next,i=i?.next,s++}return t}if(e.tag===Fi){const r={type:3,name:"state",value:e.memoizedState,prevValue:e.alternate?.memoizedState};return Wa(r.prevValue,r.value)||t.push(r),t}return t},xp=0,Nw=new WeakMap,uN=e=>{const t=Nw.get(e);return t||(xp++,Nw.set(e,xp),xp)};function dN(e,t){if(!e||!t)return;const r=e.memoizedValue,i={type:4,name:e.context.displayName??"Context.Provider",value:r,contextType:uN(e.context)};this.push(i)}var fN=e=>{const t=[];return XT(e,dN.bind(t)),t},h2=new Map,kw=!1,_p=()=>Array.from(h2.values()),hN=16,_m=new WeakMap;function p2(e){return String(Ga(e))}function m2(e){const t=p2(e),r=_m.get($i(e));if(r)return r.get(t)}function pN(e,t){const r=$i(e.type),i=p2(e);let s=_m.get(r);s||(s=new Map,_m.set(r,s)),s.set(i,t)}var mN=(e,t,r,i,s)=>{const c=Date.now(),u=m2(e);if((i||s)&&(!u||c-(u.lastRenderTimestamp||0)>hN)){const f=u||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:c};f.renderCount=(f.renderCount||0)+1,f.selfTime=t||0,f.totalTime=r||0,f.lastRenderTimestamp=c,pN(e,{...f})}},gN=(e,t)=>{const r={isPaused:Ft(!et.options.value.enabled),fiberRoots:new WeakSet};return h2.set(e,{key:e,config:t,instrumentation:r}),kw||(kw=!0,eC({name:"react-scan",onActive:t.onActive,onCommitFiberRoot(i,s){r.fiberRoots.add(s);const c=_p();for(const u of c)u.config.onCommitStart();ZT(s.current,(u,f)=>{const h=$i(u.type);if(!h)return null;const p=_p(),y=[];for(let R=0,O=p.length;R<O;R++)p[R].config.isValidFiber(u)&&y.push(R);if(!y.length)return null;const v=[];if(p.some(R=>R.config.trackChanges)){const R=vg(u).changes,O=yg(u).changes,B=bg(u).changes;v.push.apply(null,R.map(F=>({type:1,name:F.name,value:F.value})));for(const F of O)u.tag===Fi?v.push({type:3,name:F.name.toString(),value:F.value}):v.push({type:2,name:F.name.toString(),value:F.value});v.push.apply(null,B.map(F=>({type:4,name:F.name,value:F.value,contextType:Number(F.contextType)})))}const{selfTime:w,totalTime:x}=Ci(u),_=f2(),k={phase:UC[f],componentName:Wt(h),count:1,changes:v,time:w,forget:xl(u),unnecessary:null,didCommit:Km(u),fps:_},N=v.length>0,E=IT(u).length>0;f==="update"&&mN(u,w,x,N,E);for(let R=0,O=y.length;R<O;R++){const B=y[R];p[B].config.onRender(u,[k])}});for(const u of c)u.config.onCommitFinish()},onPostCommitFiberRoot(){const i=_p();for(const s of i)s.config.onPostCommitFiberRoot()}})),r},vN=e=>{const t=new Map;for(let r=0,i=e.length;r<i;r++){const s=e[r];if(!s.componentName)continue;const c=t.get(s.componentName)??[],u=jC([{aggregatedCount:1,computedKey:null,name:s.componentName,frame:null,...s,changes:{type:s.changes.reduce((p,y)=>p|y.type,0),unstable:s.changes.some(p=>p.unstable)},phase:s.phase,computedCurrent:null}]);if(!u)continue;let f=null,h=null;if(s.changes)for(let p=0,y=s.changes.length;p<y;p++){const{name:v,prevValue:w,nextValue:x,unstable:_,type:k}=s.changes[p];k===1?(f??={},h??={},f[`${_?"⚠️":""}${v} (prev)`]=w,h[`${_?"⚠️":""}${v} (next)`]=x):c.push({prev:w,next:x,type:k===4?"context":"state",unstable:_??!1})}f&&h&&c.push({prev:f,next:h,type:"props",unstable:!1}),t.set(u,c)}for(const[r,i]of Array.from(t.entries())){console.group(`%c${r}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:s,prev:c,next:u,unstable:f}of i)console.log(`${s}:`,f?"⚠️":"",c,"!==",u);console.groupEnd()}},yN=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},Rw=7,bN="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",wN=.1,du=(e,t)=>Math.floor(e+(t-e)*wN),xN=4,fd=40,Sp=45,Ep="115,97,230";function _N(e,t){return t[0]-e[0]}function SN(e){return[...e.entries()].sort(_N)}function Aw([e,t]){let r=`${t.slice(0,xN).join(", ")} ×${e}`;return r.length>fd&&(r=`${r.slice(0,fd)}…`),r}var Ow=e=>{const t=new Map;for(const{name:c,count:u}of e)t.set(c,(t.get(c)||0)+u);const r=new Map;for(const[c,u]of t){const f=r.get(u);f?f.push(c):r.set(u,[c])}const i=SN(r);let s=Aw(i[0]);for(let c=1,u=i.length;c<u;c++)s+=", "+Aw(i[c]);return s.length>fd?`${s.slice(0,fd)}…`:s},Mw=e=>{let t=0;for(const r of e)t+=r.width*r.height;return t},EN=(e,t)=>{for(const{id:r,name:i,count:s,x:c,y:u,width:f,height:h,didCommit:p}of t){const y={id:r,name:i,count:s,x:c,y:u,width:f,height:h,frame:0,targetX:c,targetY:u,targetWidth:f,targetHeight:h,didCommit:p},v=String(y.id),w=e.get(v);w?(w.count++,w.frame=0,w.targetX=c,w.targetY=u,w.targetWidth=f,w.targetHeight=h,w.didCommit=p):e.set(v,y)}},TN=(e,t,r)=>{for(const i of e.values()){const s=i.x-t,c=i.y-r;i.targetX=s,i.targetY=c}},CN=(e,t)=>{const r=e.getContext("2d",{alpha:!0});return r&&r.scale(t,t),r},NN=(e,t,r,i)=>{e.clearRect(0,0,t.width/r,t.height/r);const s=new Map,c=new Map;for(const h of i.values()){const{x:p,y,width:v,height:w,targetX:x,targetY:_,targetWidth:k,targetHeight:N,frame:E}=h;x!==p&&(h.x=du(p,x)),_!==y&&(h.y=du(y,_)),k!==v&&(h.width=du(v,k)),N!==w&&(h.height=du(w,N));const R=`${x??p},${_??y}`,O=`${R},${k??v},${N??w}`,B=s.get(R);B?B.push(h):s.set(R,[h]);const F=1-E/Sp;h.frame++;const M=c.get(O)||{x:p,y,width:v,height:w,alpha:F};F>M.alpha&&(M.alpha=F),c.set(O,M)}for(const{x:h,y:p,width:y,height:v,alpha:w}of c.values())e.strokeStyle=`rgba(${Ep},${w})`,e.lineWidth=1,e.beginPath(),e.rect(h,p,y,v),e.stroke(),e.fillStyle=`rgba(${Ep},${w*.1})`,e.fill();e.font=`11px ${bN}`;const u=new Map;e.textRendering="optimizeSpeed";for(const h of s.values()){const p=h[0],{x:y,y:v,frame:w}=p,x=1-w/Sp,_=Ow(h),{width:k}=e.measureText(_);if(u.set(`${y},${v},${k},${_}`,{text:_,width:k,height:11,alpha:x,x:y,y:v,outlines:h}),w>Sp)for(const E of h)i.delete(String(E.id))}const f=Array.from(u.entries()).sort(([h,p],[y,v])=>Mw(v.outlines)-Mw(p.outlines));for(const[h,p]of f)if(u.has(h))for(const[y,v]of u.entries()){if(h===y)continue;const{x:w,y:x,width:_,height:k}=p,{x:N,y:E,width:R,height:O}=v;w+_>N&&N+R>w&&x+k>E&&E+O>x&&(p.text=Ow(p.outlines.concat(v.outlines)),p.width=e.measureText(p.text).width,u.delete(y))}for(const h of u.values()){const{x:p,y,alpha:v,width:w,height:x,text:_}=h;let k=y-x-4;k<0&&(k=0),e.fillStyle=`rgba(${Ep},${v})`,e.fillRect(p,k,w+4,x+4),e.fillStyle=`rgba(255,255,255,${v})`,e.fillText(_,p+2,k+x)}return i.size>0},kN='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',Dr=null,hd=null,Ri=null,er=1,pd=null,wg=new Map,fl=new Map,Lo=new Set,RN=e=>{if(!Md(e))return;const t=typeof e.type=="string"?e.type:Wt(e);if(!t)return;const r=fl.get(e),i=GT(e),s=Km(e);r?r.count++:(fl.set(e,{name:t,count:1,elements:i.map(c=>c.stateNode),didCommit:s?1:0}),Lo.add(e))},AN=e=>{const t=e[0];if(e.length===1)return t;let r,i,s,c;for(let u=0,f=e.length;u<f;u++){const h=e[u];r=r==null?h.x:Math.min(r,h.x),i=i==null?h.y:Math.min(i,h.y),s=s==null?h.x+h.width:Math.max(s,h.x+h.width),c=c==null?h.y+h.height:Math.max(c,h.y+h.height)}return r==null||i==null||s==null||c==null?e[0]:new DOMRect(r,i,s-r,c-i)};function ON(e,t){const r=[];for(const i of e){const s=i.target;this.seenElements.has(s)||(this.seenElements.add(s),r.push(i))}r.length>0&&this.resolveNext&&(this.resolveNext(r),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var g2=async function*(e){const t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},r=new IntersectionObserver(ON.bind(t));for(const i of t.uniqueElements)r.observe(i);for(;!t.done;){const i=await new Promise(s=>{t.resolveNext=s});i.length>0&&(yield i)}},MN=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,zN=async()=>{const e=[];for(const r of Lo){const i=fl.get(r);if(i)for(let s=0;s<i.elements.length;s++)i.elements[s]instanceof Element&&e.push(i.elements[s])}const t=new Map;for await(const r of g2(e)){for(const u of r){const f=u.target,h=u.intersectionRect;u.isIntersecting&&h.width&&h.height&&t.set(f,h)}const i=[],s=[],c=[];for(const u of Lo){const f=fl.get(u);if(!f)continue;const h=[];for(let p=0;p<f.elements.length;p++){const y=f.elements[p],v=t.get(y);v&&h.push(v)}h.length&&(i.push(f),s.push(AN(h)),c.push(Ga(u)))}if(i.length>0){const u=new MN(i.length*Rw*4),f=new Float32Array(u),h=new Array(i.length);let p;for(let y=0,v=i.length;y<v;y++){const w=i[y],x=c[y],{x:_,y:k,width:N,height:E}=s[y],{count:R,name:O,didCommit:B}=w;if(Dr){const F=y*Rw;f[F]=x,f[F+1]=R,f[F+2]=_,f[F+3]=k,f[F+4]=N,f[F+5]=E,f[F+6]=B,h[y]=O}else p||=new Array(i.length),p[y]={id:x,name:O,count:R,x:_,y:k,width:N,height:E,didCommit:B}}Dr?Dr.postMessage({type:"draw-outlines",data:u,names:h}):hd&&Ri&&p&&(EN(wg,p),pd||(pd=requestAnimationFrame(xg)))}}for(const r of Lo)fl.delete(r),Lo.delete(r)},xg=()=>{if(!Ri||!hd)return;NN(Ri,hd,er,wg)?pd=requestAnimationFrame(xg):pd=null},DN=typeof OffscreenCanvas<"u"&&typeof Worker<"u",zw=()=>Math.min(window.devicePixelRatio||1,2),jN=()=>{LN();const e=document.createElement("div");e.setAttribute("data-react-scan","true");const t=e.attachShadow({mode:"open"}),r=document.createElement("canvas");if(r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.pointerEvents="none",r.style.zIndex="2147483646",r.setAttribute("aria-hidden","true"),t.appendChild(r),!r)return null;er=zw(),hd=r;const{innerWidth:i,innerHeight:s}=window;r.style.width=`${i}px`,r.style.height=`${s}px`;const c=i*er,u=s*er;if(r.width=c,r.height=u,DN&&!window.__REACT_SCAN_EXTENSION__)try{Dr=new Worker(URL.createObjectURL(new Blob([kN],{type:"application/javascript"})));const v=r.transferControlToOffscreen();Dr?.postMessage({type:"init",canvas:v,width:r.width,height:r.height,dpr:er},[v])}catch(v){console.warn("Failed to initialize OffscreenCanvas worker:",v)}Dr||(Ri=CN(r,er));let f=!1;window.addEventListener("resize",()=>{f||(f=!0,setTimeout(()=>{const v=window.innerWidth,w=window.innerHeight;er=zw(),r.style.width=`${v}px`,r.style.height=`${w}px`,Dr?Dr.postMessage({type:"resize",width:v,height:w,dpr:er}):(r.width=v*er,r.height=w*er,Ri&&(Ri.resetTransform(),Ri.scale(er,er)),xg()),f=!1}))});let h=window.scrollX,p=window.scrollY,y=!1;return window.addEventListener("scroll",()=>{y||(y=!0,setTimeout(()=>{const{scrollX:v,scrollY:w}=window,x=v-h,_=w-p;h=v,p=w,Dr?Dr.postMessage({type:"scroll",deltaX:x,deltaY:_}):requestAnimationFrame(TN.bind(null,wg,x,_)),y=!1},32))}),setInterval(()=>{Lo.size&&requestAnimationFrame(zN)},32),t.appendChild(r),e},Dw=()=>globalThis.__REACT_SCAN_STOP__,LN=()=>{const e=document.querySelector("[data-react-scan]");e&&e.remove()},UN=e=>{if(Md(e)&&et.options.value.showToolbar!==!1&&ge.inspectState.value.kind==="focused"){const t=e,{selfTime:r}=Ci(e),i=Wt(e.type),s=Ga(t),c=ge.reportData.get(s),u=c?.count??0,f=c?.time??0,h=[],p=ge.changesListeners.get(Ga(e));if(p?.length){const v=l2(e).map(k=>({type:1,name:k.name,value:k.value,prevValue:k.prevValue,unstable:!1})),w=cN(e),_=fN(e).map(k=>({name:k.name,type:4,value:k.value,contextType:k.contextType}));p.forEach(k=>{k({propsChanges:v,stateChanges:w,contextChanges:_})})}const y={count:u+1,time:f+r||0,renders:[],displayName:i,type:$i(e.type)||null,changes:h};ge.reportData.set(s,y),Sm=!0}},Sm=!1,jw,HN=()=>{clearInterval(jw),jw=setInterval(()=>{Sm&&(ge.lastReportTime.value=Date.now(),Sm=!1)},50)},BN=e=>!O5.has(e.memoizedProps),FN=e=>{if(Dw())return;let t,r=!1;const i=()=>{r||(t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{r=!0;const c=jN();c&&document.documentElement.appendChild(c),e()}))},s=gN("react-scan-devtools-0.1.0",{onCommitStart:()=>{et.options.value.onCommitStart?.()},onActive:()=>{Dw()||(i(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:et}),HN(),yN())},onError:()=>{},isValidFiber:BN,onRender:(c,u)=>{Md(c)&&ge.interactionListeningForRenders?.(c,u);const f=et.instrumentation?.isPaused.value,h=ge.inspectState.value.kind==="inspect-off"||ge.inspectState.value.kind==="uninitialized";f&&h||(f||RN(c),et.options.value.log&&vN(u),ge.inspectState.value.kind==="focused"&&(fg.value=Date.now()),h||UN(c),et.options.value.onRender?.(c,u))},onCommitFinish:()=>{i(),et.options.value.onCommitFinish?.()},onPostCommitFiberRoot(){i()},trackChanges:!1});et.instrumentation=s},$N=`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-1 {
  left: 4px;
  right: 4px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-right-1 {
  right: -4px;
}
.-right-2\\.5 {
  right: -10px;
}
.-top-1 {
  top: -4px;
}
.-top-2\\.5 {
  top: -10px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-4 {
  bottom: 16px;
}
.left-0 {
  left: 0px;
}
.left-3 {
  left: 12px;
}
.right-0 {
  right: 0px;
}
.right-0\\.5 {
  right: 2px;
}
.right-2 {
  right: 8px;
}
.right-4 {
  right: 16px;
}
.top-0 {
  top: 0px;
}
.top-0\\.5 {
  top: 2px;
}
.top-1\\/2 {
  top: 50%;
}
.top-2 {
  top: 8px;
}
.z-10 {
  z-index: 10;
}
.z-100 {
  z-index: 100;
}
.z-50 {
  z-index: 50;
}
.z-\\[124124124124\\] {
  z-index: 124124124124;
}
.z-\\[214748365\\] {
  z-index: 214748365;
}
.z-\\[214748367\\] {
  z-index: 214748367;
}
.m-\\[2px\\] {
  margin: 2px;
}
.mx-0\\.5 {
  margin-left: 2px;
  margin-right: 2px;
}
.\\!ml-0 {
  margin-left: 0px !important;
}
.mb-1\\.5 {
  margin-bottom: 6px;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-px {
  margin-bottom: 1px;
}
.ml-1 {
  margin-left: 4px;
}
.ml-1\\.5 {
  margin-left: 6px;
}
.ml-auto {
  margin-left: auto;
}
.mr-0\\.5 {
  margin-right: 2px;
}
.mr-1 {
  margin-right: 4px;
}
.mr-1\\.5 {
  margin-right: 6px;
}
.mr-16 {
  margin-right: 64px;
}
.mr-auto {
  margin-right: auto;
}
.mt-0\\.5 {
  margin-top: 2px;
}
.mt-1 {
  margin-top: 4px;
}
.mt-4 {
  margin-top: 16px;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1 {
  height: 4px;
}
.h-1\\.5 {
  height: 6px;
}
.h-10 {
  height: 40px;
}
.h-12 {
  height: 48px;
}
.h-4 {
  height: 16px;
}
.h-4\\/5 {
  height: 80%;
}
.h-6 {
  height: 24px;
}
.h-7 {
  height: 28px;
}
.h-8 {
  height: 32px;
}
.h-\\[150px\\] {
  height: 150px;
}
.h-\\[235px\\] {
  height: 235px;
}
.h-\\[28px\\] {
  height: 28px;
}
.h-\\[48px\\] {
  height: 48px;
}
.h-\\[50px\\] {
  height: 50px;
}
.h-\\[calc\\(100\\%-150px\\)\\] {
  height: calc(100% - 150px);
}
.h-\\[calc\\(100\\%-200px\\)\\] {
  height: calc(100% - 200px);
}
.h-\\[calc\\(100\\%-25px\\)\\] {
  height: calc(100% - 25px);
}
.h-\\[calc\\(100\\%-40px\\)\\] {
  height: calc(100% - 40px);
}
.h-\\[calc\\(100\\%-48px\\)\\] {
  height: calc(100% - 48px);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.max-h-0 {
  max-height: 0px;
}
.max-h-40 {
  max-height: 160px;
}
.max-h-9 {
  max-height: 36px;
}
.min-h-9 {
  min-height: 36px;
}
.min-h-\\[48px\\] {
  min-height: 48px;
}
.min-h-fit {
  min-height: -moz-fit-content;
  min-height: fit-content;
}
.w-1 {
  width: 4px;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-2\\/4 {
  width: 50%;
}
.w-3 {
  width: 12px;
}
.w-4 {
  width: 16px;
}
.w-4\\/5 {
  width: 80%;
}
.w-6 {
  width: 24px;
}
.w-80 {
  width: 320px;
}
.w-\\[20px\\] {
  width: 20px;
}
.w-\\[72px\\] {
  width: 72px;
}
.w-\\[90\\%\\] {
  width: 90%;
}
.w-\\[calc\\(100\\%-200px\\)\\] {
  width: calc(100% - 200px);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-px {
  width: 1px;
}
.w-screen {
  width: 100vw;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[200px\\] {
  min-width: 200px;
}
.min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-md {
  max-width: 448px;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-\\[200\\%\\] {
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1 {
  --tw-translate-y: 4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn ease-in forwards;
}
.cursor-default {
  cursor: default;
}
.cursor-e-resize {
  cursor: e-resize;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
.cursor-move {
  cursor: move;
}
.cursor-nesw-resize {
  cursor: nesw-resize;
}
.cursor-ns-resize {
  cursor: ns-resize;
}
.cursor-nwse-resize {
  cursor: nwse-resize;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-w-resize {
  cursor: w-resize;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize {
  resize: both;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-0\\.5 {
  gap: 2px;
}
.gap-1 {
  gap: 4px;
}
.gap-1\\.5 {
  gap: 6px;
}
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
.gap-x-0\\.5 {
  -moz-column-gap: 2px;
       column-gap: 2px;
}
.gap-x-1 {
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-1\\.5 {
  -moz-column-gap: 6px;
       column-gap: 6px;
}
.gap-x-2 {
  -moz-column-gap: 8px;
       column-gap: 8px;
}
.gap-x-3 {
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.gap-x-4 {
  -moz-column-gap: 16px;
       column-gap: 16px;
}
.gap-y-0\\.5 {
  row-gap: 2px;
}
.gap-y-1 {
  row-gap: 4px;
}
.gap-y-2 {
  row-gap: 8px;
}
.gap-y-4 {
  row-gap: 16px;
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6px * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-divide-opacity, 1));
}
.place-self-center {
  place-self: center;
}
.self-end {
  align-self: flex-end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.\\!overflow-visible {
  overflow: visible !important;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-wrap {
  text-wrap: wrap;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 4px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 8px;
}
.rounded-md {
  border-radius: 6px;
}
.rounded-sm {
  border-radius: 2px;
}
.rounded-l-md {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.rounded-l-sm {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.rounded-r-md {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.rounded-r-sm {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.rounded-t-lg {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.rounded-t-sm {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.rounded-bl-lg {
  border-bottom-left-radius: 8px;
}
.rounded-br-lg {
  border-bottom-right-radius: 8px;
}
.rounded-tl-lg {
  border-top-left-radius: 8px;
}
.rounded-tr-lg {
  border-top-right-radius: 8px;
}
.border {
  border-width: 1px;
}
.border-4 {
  border-width: 4px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-0 {
  border-left-width: 0px;
}
.border-l-1 {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-none {
  border-style: none;
}
.\\!border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1)) !important;
}
.border-\\[\\#1e1e1e\\] {
  --tw-border-opacity: 1;
  border-color: rgb(30 30 30 / var(--tw-border-opacity, 1));
}
.border-\\[\\#222\\] {
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
}
.border-\\[\\#27272A\\] {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.border-\\[\\#333\\] {
  --tw-border-opacity: 1;
  border-color: rgb(51 51 51 / var(--tw-border-opacity, 1));
}
.border-transparent {
  border-color: transparent;
}
.border-zinc-800 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.bg-\\[\\#0A0A0A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#141414\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\]\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.bg-\\[\\#1D3A66\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(29 58 102 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1E1E1E\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1a2a1a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(26 42 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1e1e1e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#214379d4\\] {
  background-color: #214379d4;
}
.bg-\\[\\#27272A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#2a1515\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(42 21 21 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#412162\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(65 33 98 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#44444a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(68 68 74 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#4b4b4b\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(75 75 75 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\]\\/40 {
  background-color: rgb(95 63 154 / 0.4);
}
.bg-\\[\\#6a369e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 54 158 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#7521c8\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(117 33 200 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#8e61e3\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#EFD81A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(239 216 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b77116\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(183 113 22 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b94040\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(185 64 64 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#d36cff\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(211 108 255 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#efd81a6b\\] {
  background-color: #efd81a6b;
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-black\\/40 {
  background-color: rgb(0 0 0 / 0.4);
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-green-500\\/50 {
  background-color: rgb(34 197 94 / 0.5);
}
.bg-green-500\\/60 {
  background-color: rgb(34 197 94 / 0.6);
}
.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
}
.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));
}
.bg-purple-500\\/90 {
  background-color: rgb(168 85 247 / 0.9);
}
.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}
.bg-red-500\\/90 {
  background-color: rgb(239 68 68 / 0.9);
}
.bg-red-950\\/50 {
  background-color: rgb(69 10 10 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
}
.bg-zinc-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-zinc-900\\/30 {
  background-color: rgb(24 24 27 / 0.3);
}
.bg-zinc-900\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 4px;
}
.p-2 {
  padding: 8px;
}
.p-3 {
  padding: 12px;
}
.p-4 {
  padding: 16px;
}
.p-5 {
  padding: 20px;
}
.p-6 {
  padding: 24px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.px-1\\.5 {
  padding-left: 6px;
  padding-right: 6px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-2\\.5 {
  padding-left: 10px;
  padding-right: 10px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-\\[1px\\] {
  padding-top: 1px;
  padding-bottom: 1px;
}
.py-\\[3px\\] {
  padding-top: 3px;
  padding-bottom: 3px;
}
.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}
.pb-2 {
  padding-bottom: 8px;
}
.pl-1 {
  padding-left: 4px;
}
.pl-2 {
  padding-left: 8px;
}
.pl-2\\.5 {
  padding-left: 10px;
}
.pl-3 {
  padding-left: 12px;
}
.pl-5 {
  padding-left: 20px;
}
.pl-6 {
  padding-left: 24px;
}
.pr-1 {
  padding-right: 4px;
}
.pr-1\\.5 {
  padding-right: 6px;
}
.pr-2 {
  padding-right: 8px;
}
.pr-2\\.5 {
  padding-right: 10px;
}
.pt-0 {
  padding-top: 0px;
}
.pt-2 {
  padding-top: 8px;
}
.pt-5 {
  padding-top: 20px;
}
.text-left {
  text-align: left;
}
.font-mono {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[11px\\] {
  font-size: 11px;
}
.text-\\[13px\\] {
  font-size: 13px;
}
.text-\\[14px\\] {
  font-size: 14px;
}
.text-\\[17px\\] {
  font-size: 17px;
}
.text-\\[8px\\] {
  font-size: 8px;
}
.text-sm {
  font-size: 14px;
  line-height: 20px;
}
.text-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.italic {
  font-style: italic;
}
.leading-6 {
  line-height: 24px;
}
.leading-none {
  line-height: 1;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.text-\\[\\#4ade80\\] {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity, 1));
}
.text-\\[\\#5a5a5a\\] {
  --tw-text-opacity: 1;
  color: rgb(90 90 90 / var(--tw-text-opacity, 1));
}
.text-\\[\\#65656D\\] {
  --tw-text-opacity: 1;
  color: rgb(101 101 109 / var(--tw-text-opacity, 1));
}
.text-\\[\\#666\\] {
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6E6E77\\] {
  --tw-text-opacity: 1;
  color: rgb(110 110 119 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6F6F78\\] {
  --tw-text-opacity: 1;
  color: rgb(111 111 120 / var(--tw-text-opacity, 1));
}
.text-\\[\\#7346a0\\] {
  --tw-text-opacity: 1;
  color: rgb(115 70 160 / var(--tw-text-opacity, 1));
}
.text-\\[\\#737373\\] {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-\\[\\#888\\] {
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}
.text-\\[\\#8E61E3\\] {
  --tw-text-opacity: 1;
  color: rgb(142 97 227 / var(--tw-text-opacity, 1));
}
.text-\\[\\#999\\] {
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A1A1AA\\] {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A855F7\\] {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
}
.text-\\[\\#E4E4E7\\] {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-\\[\\#d36cff\\] {
  --tw-text-opacity: 1;
  color: rgb(211 108 255 / var(--tw-text-opacity, 1));
}
.text-\\[\\#f87171\\] {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity, 1));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}
.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}
.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity, 1));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity, 1));
}
.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-white\\/30 {
  color: rgb(255 255 255 / 0.3);
}
.text-white\\/70 {
  color: rgb(255 255 255 / 0.7);
}
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity, 1));
}
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity, 1));
}
.text-zinc-200 {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-zinc-500 {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity, 1));
}
.text-zinc-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity, 1));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-white\\/\\[0\\.08\\] {
  --tw-ring-color: rgb(255 255 255 / 0.08);
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[border-radius\\] {
  transition-property: border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[color\\2c transform\\] {
  transition-property: color,transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[max-height\\] {
  transition-property: max-height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[opacity\\] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.delay-0 {
  transition-delay: 0s;
}
.delay-150 {
  transition-delay: 150ms;
}
.delay-300 {
  transition-delay: 300ms;
}
.\\!duration-0 {
  transition-duration: 0s !important;
}
.duration-0 {
  transition-duration: 0s;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-\\[cubic-bezier\\(0\\.23\\2c 1\\2c 0\\.32\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.23,1,0.32,1);
}
.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.will-change-transform {
  will-change: transform;
}
.animation-duration-300 {
  animation-duration: .3s;
}
.animation-delay-300 {
  animation-delay: .3s;
}
.\\[touch-action\\:none\\] {
  touch-action: none;
}

* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;

  /* WebKit (Chrome, Safari, Edge) specific scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}

@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}

button:hover {
  background-image: none;
}

button {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-style: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: linear;
  cursor: pointer;
}

input {
  border-style: none;
  background-color: transparent;
  background-image: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

input::-moz-placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input::placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input:-moz-placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

input:placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

svg {
  height: auto;
  width: auto;
  pointer-events: none;
}

/*
  Using CSS content with data attributes is more performant than:
  1. React re-renders with JSX text content
  2. Direct DOM manipulation methods:
     - element.textContent (creates/updates text nodes, triggers repaint)
     - element.innerText (triggers reflow by computing styles & layout)
     - element.innerHTML (heavy parsing, triggers reflow, security risks)
  3. Multiple data attributes with complex CSS concatenation

  This approach:
  - Avoids React reconciliation
  - Uses browser's native CSS engine (optimized content updates)
  - Minimizes main thread work
  - Reduces DOM operations
  - Avoids forced reflows (layout recalculation)
  - Only triggers necessary repaints
  - Keeps pseudo-element updates in render layer
*/
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
  }
  &::before {
    display: block;
  }
  &::before {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

#react-scan-toolbar {
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: move;
  opacity: 0;
  z-index: 2147483678;
}

@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#react-scan-toolbar {
  animation: fadeIn ease-in forwards;
  animation-duration: .3s;
  animation-delay: .3s;
  --tw-shadow: 0 4px 12px rgba(0,0,0,0.2);
  --tw-shadow-colored: 0 4px 12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  place-self: start;

  /* [CURSOR GENERATED] Anti-blur fixes:
   * We removed will-change-transform and replaced it with these properties
   * because will-change was causing stacking context issues and inconsistent
   * text rendering. The new properties work together to force proper
   * GPU acceleration without z-index side effects:
   */
  transform: translate3d(
    0,
    0,
    0
  ); /* Forces GPU acceleration without causing stacking issues */
  backface-visibility: hidden; /* Prevents blurry text during transforms */
  perspective: 1000; /* Creates proper 3D context for crisp text */ /* Ensures consistent text rendering across browsers */
  transform-style: preserve-3d;
}

.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}

.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}

.resize-line {
  position: absolute;
  inset: 0px;
  overflow: hidden;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  svg {
    position: absolute;
  }

  svg {
    top: 50%;
  }

  svg {
    left: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-right,
.resize-left {
  top: 0px;
  bottom: 0px;
  width: 24px;
  cursor: ew-resize;

  .resize-line-wrapper {
    top: 0px;
    bottom: 0px;
  }

  .resize-line-wrapper {
    width: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-x: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-right {
  right: 0px;
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    right: 0px;
  }
  .resize-line {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-left {
  left: 0px;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    left: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-top,
.resize-bottom {
  left: 0px;
  right: 0px;
  height: 24px;
  cursor: ns-resize;

  .resize-line-wrapper {
    left: 0px;
    right: 0px;
  }

  .resize-line-wrapper {
    height: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-top {
  top: 0px;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    top: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-bottom {
  bottom: 0px;
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    bottom: 0px;
  }
  .resize-line {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 8px;
  min-height: 36px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  overflow: hidden;
  white-space: nowrap;
}

.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: 4px;
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: rgb(168 85 247 / 0.5) !important;

  &:hover {
    background-color: rgb(168 85 247 / 0.25);
  }

  &.disabled {
    opacity: 0.5;
  }

  &.disabled {
    pointer-events: none;
  }

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    inset: 0px;
  }

  &:before {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}

.react-scan-close-button {
  background-color: rgb(255 255 255 / 0.1);

  &:hover {
    background-color: rgb(255 255 255 / 0.15);
  }
}

@keyframes shimmer {
  100% {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 12px;
  height: 28px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}

.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}

.react-scan-section::before {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
  --tw-content: attr(data-section);
  content: var(--tw-content);
}

.react-scan-section {
  font-size: 12px;
  line-height: 16px;

  > .react-scan-property {
    margin-left: -14px;
  }
}

.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}

.react-scan-property-content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-height: 28px;
  max-width: 100%;
  overflow: hidden;
}

.react-scan-string {
  color: #9ecbff;
}

.react-scan-number {
  color: #79c7ff;
}

.react-scan-boolean {
  color: #56b6c2;
}

.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.react-scan-input {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.react-scan-arrow {
  position: absolute;
  top: 0px;
  left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 28px;
  width: 24px;
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  z-index: 10;

  > svg {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;

  &.react-scan-expanded {
    grid-template-rows: 1fr;
  }

  &.react-scan-expanded {
    transition-duration: 100ms;
  }
}

.react-scan-nested {
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    top: 0px;
  }

  &:before {
    left: 0px;
  }

  &:before {
    height: 100%;
  }

  &:before {
    width: 1px;
  }

  &:before {
    background-color: rgb(107 114 128 / 0.3);
  }
}

.react-scan-settings {
  position: absolute;
  inset: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));

  > div {
    display: flex;
  }

  > div {
    align-items: center;
  }

  > div {
    justify-content: space-between;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }
}

.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: 28px;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
}

.react-scan-flash-overlay {
  position: absolute;
  inset: 0px;
  opacity: 0;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  mix-blend-mode: multiply;
  background-color: rgb(168 85 247 / 0.9);
}

.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 40px;

  input {
    position: absolute;
  }

  input {
    inset: 0px;
  }

  input {
    z-index: 20;
  }

  input {
    opacity: 0;
  }

  input {
    cursor: pointer;
  }

  input {
    height: 100%;
  }

  input {
    width: 100%;
  }

  input:checked {
    + div {
      --tw-bg-opacity: 1;
      background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
    }
    + div {

      &::before {
        --tw-translate-x: 100%;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }

      &::before {
        left: auto;
      }

      &::before {
        --tw-border-opacity: 1;
        border-color: rgb(95 63 154 / var(--tw-border-opacity, 1));
      }
    }
  }

  > div {
    position: absolute;
  }

  > div {
    inset: 4px;
  }

  > div {
    --tw-bg-opacity: 1;
    background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
  }

  > div {
    border-radius: 9999px;
  }

  > div {
    pointer-events: none;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &:before {
      --tw-content: '';
      content: var(--tw-content);
    }

    &:before {
      position: absolute;
    }

    &:before {
      top: 50%;
    }

    &:before {
      left: 0px;
    }

    &:before {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    &:before {
      height: 16px;
    }

    &:before {
      width: 16px;
    }

    &:before {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }

    &:before {
      border-width: 2px;
    }

    &:before {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64 / var(--tw-border-opacity, 1));
    }

    &:before {
      border-radius: 9999px;
    }

    &:before {
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    &:before {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    &:before {
      transition-duration: 300ms;
    }
  }
}

.react-scan-flash-active {
  opacity: 0.4;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.fade-out {
    opacity: 0;
  }

  &.fade-in {
    opacity: 1;
  }
}

.react-scan-what-changed {
  ul {
    list-style-type: disc;
  }
  ul {
    padding-left: 16px;
  }

  li {
    white-space: nowrap;
  }

  li {
    > div {
      display: flex;
    }
    > div {
      align-items: center;
    }
    > div {
      justify-content: space-between;
    }
    > div {
      -moz-column-gap: 8px;
           column-gap: 8px;
    }
  }
}

.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
  background-color: rgb(168 85 247 / 0.1);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;
}

@keyframes countFlash {

  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }

  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}

.count-flash {
  animation: countFlash .3s ease-out forwards;
}

@keyframes countFlashShake {

  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px) scale(1.1);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}

.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: 4px;
       column-gap: 4px;
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
  font-size: 12px;
  line-height: 16px;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

  > div {
    padding-left: 6px;
    padding-right: 6px;
  }

  > div {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  > div {
    transform-origin: center;
  }

  > div {
    border-radius: 4px;
  }

  > div {
    font-size: 12px;
    line-height: 16px;
  }

  > div {
    font-weight: 500;
  }

  > div {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  }

  > div {
    transform-origin: center;
  }

  > div {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-delay: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &[data-flash="true"] {
      background-color: rgb(168 85 247 / 0.1);
    }

    &[data-flash="true"] {
      --tw-text-opacity: 1;
      color: rgb(168 85 247 / var(--tw-text-opacity, 1));
    }
  }
}

.react-scan-slider {
  position: relative;
  min-height: 24px;

  > input {
    position: absolute;
  }

  > input {
    inset: 0px;
  }

  > input {
    opacity: 0;
  }

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    top: 50%;
  }

  &:before {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    height: 6px;
  }

  &:before {
    background-color: rgb(142 97 227 / 0.4);
  }

  &:before {
    border-radius: 8px;
  }

  &:before {
    pointer-events: none;
  }

  &:after {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:after {
    position: absolute;
  }

  &:after {
    left: 0px;
    right: 0px;
  }

  &:after {
    top: -8px;
    bottom: -8px;
  }

  &:after {
    z-index: -10;
  }

  span {
    position: absolute;
  }

  span {
    left: 0px;
  }

  span {
    top: 50%;
  }

  span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  span {
    height: 10px;
  }

  span {
    width: 10px;
  }

  span {
    border-radius: 8px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
  }

  span {
    pointer-events: none;
  }

  span {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  span {
    transition-duration: 75ms;
  }
}

.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4px;
  max-width: 4px;
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover,
  &:active {
    > span {
      --tw-bg-opacity: 1;
      background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
    }

    svg {
      opacity: 1;
    }
  }

  &::before {
    --tw-content: "";
    content: var(--tw-content);
  }

  &::before {
    position: absolute;
  }

  &::before {
    inset: 0px;
  }

  &::before {
    left: 50%;
  }

  &::before {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &::before {
    width: 1px;
  }

  &::before {
    --tw-bg-opacity: 1;
    background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
  }

  &::before {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > span {
    position: absolute;
  }

  > span {
    left: 50%;
  }

  > span {
    top: 50%;
  }

  > span {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    height: 18px;
  }

  > span {
    width: 6px;
  }

  > span {
    border-radius: 4px;
  }

  > span {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    position: absolute;
  }

  svg {
    left: 50%;
  }

  svg {
    top: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-text-opacity: 1;
    color: rgb(163 163 163 / var(--tw-text-opacity, 1));
  }

  svg {
    opacity: 0;
  }

  svg {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    z-index: 50;
  }
}

.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    padding-top: 1px;
    padding-bottom: 1px;
  }

  span {
    border-radius: 2px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
  }

  span {
    font-weight: 500;
  }

  span {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity, 1));
  }

  .single {
    margin-right: 1px;
  }

  .single {
    padding-left: 2px;
    padding-right: 2px;
  }

  .regex {
    padding-left: 2px;
    padding-right: 2px;
  }

  .start {
    margin-left: 1px;
  }

  .start {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .end {
    margin-right: 1px;
  }

  .end {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .middle {
    margin-left: 1px;
    margin-right: 1px;
  }

  .middle {
    border-radius: 2px;
  }
}

.react-scan-toolbar-notification {
  position: absolute;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding: 4px;
  padding-left: 8px;
  font-size: 10px;
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
  background-color: rgb(0 0 0 / 0.9);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  }

  &:before {
    height: 8px;
  }

  &.position-top {
    top: 100%;
  }

  &.position-top {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-top {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &.position-top {

    &::before {
      top: 0px;
    }

    &::before {
      --tw-translate-y: -100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.position-bottom {
    bottom: 100%;
  }

  &.position-bottom {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-bottom {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &.position-bottom {

    &::before {
      bottom: 0px;
    }

    &::before {
      --tw-translate-y: 100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.is-open {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header-item {
  position: absolute;
  inset: 0px;
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.is-visible {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;
  transition-timing-function: ease-out;

  > * {
    min-height: 0;
  }

  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}

.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:top-\\[100\\%\\]::after {
  content: var(--tw-content);
  top: 100%;
}

.after\\:h-\\[6px\\]::after {
  content: var(--tw-content);
  height: 6px;
}

.after\\:w-\\[10px\\]::after {
  content: var(--tw-content);
  width: 10px;
}

.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes fadeOut {

  0% {
    content: var(--tw-content);
    opacity: 1;
  }

  100% {
    content: var(--tw-content);
    opacity: 0;
  }
}

.after\\:animate-\\[fadeOut_1s_ease-out_forwards\\]::after {
  content: var(--tw-content);
  animation: fadeOut 1s ease-out forwards;
}

.after\\:border-l-\\[5px\\]::after {
  content: var(--tw-content);
  border-left-width: 5px;
}

.after\\:border-r-\\[5px\\]::after {
  content: var(--tw-content);
  border-right-width: 5px;
}

.after\\:border-t-\\[6px\\]::after {
  content: var(--tw-content);
  border-top-width: 6px;
}

.after\\:border-l-transparent::after {
  content: var(--tw-content);
  border-left-color: transparent;
}

.after\\:border-r-transparent::after {
  content: var(--tw-content);
  border-right-color: transparent;
}

.after\\:border-t-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
}

.after\\:bg-purple-500\\/30::after {
  content: var(--tw-content);
  background-color: rgb(168 85 247 / 0.3);
}

.after\\:content-\\[\\"\\"\\]::after {
  --tw-content: "";
  content: var(--tw-content);
}

.focus-within\\:border-\\[\\#454545\\]:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(69 69 69 / var(--tw-border-opacity, 1));
}

.hover\\:bg-\\[\\#0f0f0f\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(15 15 15 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#18181B\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#34343b\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(52 52 59 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/20:hover {
  background-color: rgb(95 63 154 / 0.2);
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/40:hover {
  background-color: rgb(95 63 154 / 0.4);
}

.hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-800\\/50:hover {
  background-color: rgb(39 39 42 / 0.5);
}

.hover\\:text-neutral-300:hover {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#21437982\\] {
  background-color: #21437982;
}

.group:hover .group-hover\\:bg-\\[\\#5b2d89\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(91 45 137 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#6a6a6a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 106 106 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#efda1a2f\\] {
  background-color: #efda1a2f;
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.peer\\/bottom:hover ~ .peer-hover\\/bottom\\:rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/left:hover ~ .peer-hover\\/left\\:rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/right:hover ~ .peer-hover\\/right\\:rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.peer\\/top:hover ~ .peer-hover\\/top\\:rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
`,qN=(e,t,r=t)=>{const[i,s]=Ye(e);return Fe(()=>{if(e===i)return;const u=setTimeout(()=>s(e),e?t:r);return()=>clearTimeout(u)},[e,t,r]),i},YN=Yi(()=>$("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",Ud.value&&"-translate-y-[200%]")),VN=()=>{const e=Ne(null),t=Ne(null),[r,i]=Ye(null);Tl(()=>{const c=ge.inspectState.value;c.kind==="focused"&&i(c.fiber)}),Tl(()=>{const c=gn.value;El(()=>{if(ge.inspectState.value.kind!=="focused"||!e.current||!t.current)return;const{totalUpdates:u,currentIndex:f,updates:h,isVisible:p,windowOffset:y}=c,v=Math.max(0,u-1),w=p?`#${y+f} Re-render`:v>0?`×${v}`:"";let x;if(v>0&&f>=0&&f<h.length){const _=h[f]?.fiberInfo?.selfTime;x=_>0?_<.1-Number.EPSILON?"< 0.1ms":`${Number(_.toFixed(1))}ms`:void 0}e.current.dataset.text=w?` • ${w}`:"",t.current.dataset.text=x?` • ${x}`:""})});const s=br(()=>{if(!r)return null;const{name:c,wrappers:u,wrapperTypes:f}=Cl(r),h=u.length?`${u.join("(")}(${c})${")".repeat(u.length)}`:c??"",p=f[0];return g("span",{title:h,className:"flex items-center gap-x-1",children:[c??"Unknown",g("span",{title:p?.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!p&&g(Ze,{children:[g("span",{className:$("rounded py-[1px] px-1","truncate",p.compiler&&"bg-purple-800 text-neutral-400",!p.compiler&&"bg-neutral-700 text-neutral-300",p.type==="memo"&&"bg-[#5f3f9a] text-white"),children:p.type},p.type),p.compiler&&g("span",{className:"text-yellow-300",children:"✨"})]})}),f.length>1&&g("span",{className:"text-[10px] text-neutral-400",children:["×",f.length-1]})]})},[r]);return g("div",{className:YN,children:[s,g("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[g("span",{ref:e,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),g("span",{ref:t,className:"with-data-text !overflow-visible"})]})]})},PN=()=>{const e=qN(ge.inspectState.value.kind==="focused",150,0),t=()=>{mt.value={view:"none"},ge.inspectState.value={kind:"inspect-off"}};if(mt.value.view!=="notifications")return g("div",{className:"react-scan-header",children:[g("div",{className:"relative flex-1 h-full",children:g("div",{className:$("react-scan-header-item is-visible",!e&&"!duration-0"),children:g(VN,{})})}),g("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:t,children:g(Tt,{name:"icon-close"})})]})},XN=({className:e,...t})=>g("div",{className:$("react-scan-toggle",e),children:[g("input",{type:"checkbox",...t}),g("div",{})]}),IN=({fps:e})=>{const t=r=>r<30?"#EF4444":r<50?"#F59E0B":"rgb(214,132,245)";return g("div",{className:$("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[g("div",{style:{color:t(e)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:e}),g("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},GN=()=>{const[e,t]=Ye(null);return Fe(()=>{const r=setInterval(()=>{t(f2())},200);return()=>clearInterval(r)},[]),g("div",{className:$("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:e===null?g(Ze,{children:"️"}):g(IN,{fps:e})})},pr=()=>Lr?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",yr=e=>e(),Vt=class v2 extends Array{constructor(t=25){super(),this.capacity=t}push(...t){const r=super.push(...t);for(;this.length>this.capacity;)this.shift();return r}static fromArray(t,r){const i=new v2(r);return i.push(...t),i}},WN=class{constructor(e){this.subscribers=new Set,this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}},y2=150,Lw=new WN(new Vt(y2)),zr=50,QN=class{constructor(){this.channels={}}publish(e,t,r=!0){const i=this.channels[t];if(!i){if(!r)return;this.channels[t]={callbacks:new Vt(zr),state:new Vt(zr)},this.channels[t].state.push(e);return}i.state.push(e),i.callbacks.forEach(s=>s(e))}getAvailableChannels(){return Vt.fromArray(Object.keys(this.channels),zr)}subscribe(e,t,r=!1){const i=()=>(r||this.channels[e].state.forEach(c=>{t(c)}),()=>{const c=this.channels[e].callbacks.filter(u=>u!==t);this.channels[e].callbacks=Vt.fromArray(c,zr)}),s=this.channels[e];return s?(s.callbacks.push(t),i()):(this.channels[e]={callbacks:new Vt(zr),state:new Vt(zr)},this.channels[e].callbacks.push(t),i())}updateChannelState(e,t,r=!0){const i=this.channels[e];if(!i){if(!r)return;const s=new Vt(zr),c={callbacks:new Vt(zr),state:s};this.channels[e]=c,c.state=t(s);return}i.state=t(i.state)}getChannelState(e){return this.channels[e].state??new Vt(zr)}},md=new QN,b2={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},Ks={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},KN=(e,t=b2)=>{const r=[];return t.skipProviders&&r.push(...Ks.providers),t.skipHocs&&r.push(...Ks.hocs),t.skipContainers&&r.push(...Ks.containers),t.skipUtilities&&r.push(...Ks.utilities),t.skipBoundaries&&r.push(...Ks.boundaries),!r.some(i=>i.test(e))},Uw=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],JN=e=>{for(let c=0;c<Uw.length;c++)if(Uw[c].test(e))return!0;const t=!/[aeiou]/i.test(e),r=(e.match(/\d/g)?.length??0)>e.length/2,i=/^[a-z]+$/.test(e),s=/[$_]{2,}/.test(e);return Number(t)+Number(r)+Number(i)+Number(s)>=2},ZN=(e,t=b2)=>{if(!e)return[];if(!Wt(e.type))return[];const i=new Array;let s=e;for(;s.return;){const u=e3(s.type);u&&!JN(u)&&KN(u,t)&&u.toLowerCase()!==u&&i.push(u),s=s.return}const c=new Array(i.length);for(let u=0;u<i.length;u++)c[u]=i[i.length-u-1];return c},e3=e=>{const t=Wt(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},t3=(e,t=()=>!0)=>{let r=e;for(;r;){const i=Wt(r.type);if(i&&t(i))return i;r=r.return}return null},Hw,Em="never-hidden",n3=()=>{Hw?.();const e=()=>{document.hidden&&(Em=Date.now())};document.addEventListener("visibilitychange",e),Hw=()=>{document.removeEventListener("visibilitychange",e)}},r3=e=>["pointerup","click"].includes(e)?"pointer":(e.includes("key"),["keydown","keyup"].includes(e)?"keyboard":null),Tp=null,a3=e=>{n3();const t=new Map,r=new Map,i=c=>{if(!c.interactionId)return;if(c.interactionId&&c.target&&!r.has(c.interactionId)&&r.set(c.interactionId,c.target),c.target){let f=c.target;for(;f;){if(f.id==="react-scan-toolbar-root"||f.id==="react-scan-root")return;f=f.parentElement}}const u=t.get(c.interactionId);if(u)c.duration>u.latency?(u.entries=[c],u.latency=c.duration):c.duration===u.latency&&c.startTime===u.entries[0].startTime&&u.entries.push(c);else{const f=r3(c.name);if(!f)return;const h={id:c.interactionId,latency:c.duration,entries:[c],target:c.target,type:f,startTime:c.startTime,endTime:Date.now(),processingStart:c.processingStart,processingEnd:c.processingEnd,duration:c.duration,inputDelay:c.processingStart-c.startTime,processingDuration:c.processingEnd-c.processingStart,presentationDelay:c.duration-(c.processingEnd-c.startTime),timestamp:Date.now(),timeSinceTabInactive:Em==="never-hidden"?"never-hidden":Date.now()-Em,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};t.set(h.id,h),Tp||(Tp=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(t.get(h.id)),Tp=null})}))}},s=new PerformanceObserver(c=>{const u=c.getEntries();for(let f=0,h=u.length;f<h;f++){const p=u[f];i(p)}});try{s.observe({type:"event",buffered:!0,durationThreshold:16}),s.observe({type:"first-input",buffered:!0})}catch{}return()=>s.disconnect()},i3=()=>a3(e=>{md.publish({kind:"entry-received",entry:e},"recording")}),Ou=25,ua=new Vt(Ou),o3=(e,t)=>{let r=null;for(const i of t){if(i.type!==e.type)continue;if(r===null){r=i;continue}const s=(c,u)=>Math.abs(c.startDateTime)-(u.startTime+u.timeOrigin);s(i,e)<s(r,e)&&(r=i)}return r},s3=e=>md.subscribe("recording",r=>{const i=r.kind==="auto-complete-race"?ua.find(c=>c.interactionUUID===r.interactionUUID):o3(r.entry,ua);if(!i)return;const s=i.completeInteraction(r);e(s)}),l3=({onMicroTask:e,onRAF:t,onTimeout:r,abort:i})=>{queueMicrotask(()=>{i?.()!==!0&&e()&&requestAnimationFrame(()=>{i?.()!==!0&&t()&&setTimeout(()=>{i?.()!==!0&&r()},0)})})},c3=e=>{const t=s2(e);if(!t)return;let r=t?Wt(t?.type):"N/A";return r||(r=t3(t,s=>s.length>2)??"N/A"),r?{componentPath:ZN(t),childrenTree:{},componentName:r,elementFiber:t}:void 0},Bw=(e,t)=>{let r=null;const i=h=>{switch(e){case"pointer":return h.phase==="start"?"pointerup":h.target instanceof HTMLInputElement||h.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return h.phase==="start"?"keydown":"change"}},s={current:{kind:"uninitialized-stage",interactionUUID:pr(),stageStart:Date.now(),interactionType:e}},c=h=>{if(h.composedPath().some(k=>k instanceof Element&&k.id==="react-scan-toolbar-root")||(Date.now()-s.current.stageStart>2e3&&(s.current={kind:"uninitialized-stage",interactionUUID:pr(),stageStart:Date.now(),interactionType:e}),s.current.kind!=="uninitialized-stage"))return;const y=performance.now();t?.onStart?.(s.current.interactionUUID);const v=c3(h.target);if(!v){t?.onError?.(s.current.interactionUUID);return}const w={},x=w2(w);s.current={...s.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:v.childrenTree,componentName:v.componentName,componentPath:v.componentPath,fiberRenders:w,kind:"interaction-start",interactionStartDetail:y,stopListeningForRenders:x};const _=i({phase:"end",target:h.target});document.addEventListener(_,u,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(_,u)})};document.addEventListener(i({phase:"start"}),c,{capture:!0});const u=(h,p,y)=>{if(s.current.kind!=="interaction-start"&&p===r){if(e==="pointer"&&h.target instanceof HTMLSelectElement){s.current={kind:"uninitialized-stage",interactionUUID:pr(),stageStart:Date.now(),interactionType:e};return}t?.onError?.(s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:pr(),stageStart:Date.now(),interactionType:e};return}r=p,l3({abort:y,onMicroTask:()=>s.current.kind==="uninitialized-stage"?!1:(s.current={...s.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>s.current.kind!=="js-end-stage"&&s.current.kind!=="raf-stage"?(t?.onError?.(s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:pr(),stageStart:Date.now(),interactionType:e},!1):(s.current={...s.current,kind:"raf-stage",rafStart:performance.now()},!0),onTimeout:()=>{if(s.current.kind!=="raf-stage"){t?.onError?.(s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:pr(),stageStart:Date.now(),interactionType:e};return}const v=Date.now(),w=Object.freeze({...s.current,kind:"timeout-stage",blockingTimeEnd:v,commitEnd:performance.now()});s.current={kind:"uninitialized-stage",interactionUUID:pr(),stageStart:v,interactionType:e};let x=!1;const _=N=>{x=!0;const E=N.kind==="auto-complete-race"?N.detailedTiming.commitEnd-N.detailedTiming.interactionStartDetail:N.entry.latency,R={detailedTiming:w,latency:E,completedAt:Date.now(),flushNeeded:!0};t?.onComplete?.(w.interactionUUID,R,N);const O=ua.filter(B=>B.interactionUUID!==w.interactionUUID);return ua=Vt.fromArray(O,Ou),R},k={completeInteraction:_,endDateTime:Date.now(),startDateTime:w.blockingTimeStart,type:e,interactionUUID:w.interactionUUID};if(ua.push(k),u3())setTimeout(()=>{if(x)return;_({kind:"auto-complete-race",detailedTiming:w,interactionUUID:w.interactionUUID});const N=ua.filter(E=>E.interactionUUID!==w.interactionUUID);ua=Vt.fromArray(N,Ou)},1e3);else{const N=ua.filter(E=>E.interactionUUID!==w.interactionUUID);ua=Vt.fromArray(N,Ou),_({kind:"auto-complete-race",detailedTiming:w,interactionUUID:w.interactionUUID})}}})},f=h=>{const p=pr();u(h,p,()=>p!==r)};return e==="keyboard"&&document.addEventListener("keypress",f),()=>{document.removeEventListener(i({phase:"start"}),c,{capture:!0}),document.removeEventListener("keypress",f)}},Fw=e=>v1(e,t=>{if(wl(t))return!0})?.stateNode,u3=()=>"PerformanceEventTiming"in globalThis,w2=e=>{const t=r=>{const i=Wt(r.type);if(!i)return;const s=e[i];if(!s){const y=new Set,v=r.return&&Bo(r.return),w=v&&Wt(v[0]);w&&y.add(w);const{selfTime:x,totalTime:_}=Ci(r),k=Ew(r),N={current:[],changes:new Set,changesCounts:new Map},E={fiberProps:k.fiberProps||N,fiberState:k.fiberState||N,fiberContext:k.fiberContext||N};e[i]={renderCount:1,hasMemoCache:xl(r),wasFiberRenderMount:$w(r),parents:y,selfTime:x,totalTime:_,nodeInfo:[{element:Fw(r),name:Wt(r.type)??"Unknown",selfTime:Ci(r).selfTime}],changes:E};return}if(Bo(r)?.[0]?.type){const y=r.return&&Bo(r.return),v=y&&Wt(y[0]);v&&s.parents.add(v)}const{selfTime:u,totalTime:f}=Ci(r),h=Ew(r);if(!h)return;const p={current:[],changes:new Set,changesCounts:new Map};s.wasFiberRenderMount=s.wasFiberRenderMount||$w(r),s.hasMemoCache=s.hasMemoCache||xl(r),s.changes={fiberProps:Cp(s.changes?.fiberProps||p,h.fiberProps||p),fiberState:Cp(s.changes?.fiberState||p,h.fiberState||p),fiberContext:Cp(s.changes?.fiberContext||p,h.fiberContext||p)},s.renderCount+=1,s.selfTime+=u,s.totalTime+=f,s.nodeInfo.push({element:Fw(r),name:Wt(r.type)??"Unknown",selfTime:Ci(r).selfTime})};return ge.interactionListeningForRenders=t,()=>{ge.interactionListeningForRenders===t&&(ge.interactionListeningForRenders=null)}},Cp=(e,t)=>{const r={current:[...e.current],changes:new Set,changesCounts:new Map};for(const i of t.current)r.current.some(s=>s.name===i.name)||r.current.push(i);for(const i of t.changes)if(typeof i=="string"||typeof i=="number"){r.changes.add(i);const s=e.changesCounts.get(i)||0,c=t.changesCounts.get(i)||0;r.changesCounts.set(i,s+c)}return r},$w=e=>{if(!e.alternate)return!0;const t=e.alternate,r=t&&t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0,i=e.memoizedState!=null&&e.memoizedState.element!=null&&e.memoizedState.isDehydrated!==!0;return!r&&i},d3=e=>{let t;const r=new Set,i=(p,y)=>{const v=typeof p=="function"?p(t):p;if(!Object.is(v,t)){const w=t;t=y??(typeof v!="object"||v===null)?v:Object.assign({},t,v),r.forEach(x=>x(t,w))}},s=()=>t,f={setState:i,getState:s,getInitialState:()=>h,subscribe:(p,y)=>{let v,w;y?(v=p,w=y):w=p;let x=v?v(t):void 0;const _=(k,N)=>{if(v){const E=v(k),R=v(N);Object.is(x,E)||(x=E,w(E,R))}else w(k,N)};return r.add(_),()=>r.delete(_)}},h=t=e(i,s,f);return f},x2=e=>d3,fu=null;x2()(e=>({state:{events:[]},actions:{addEvent:t=>{e(r=>({state:{events:[...r.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var Np=200,Nl=x2()((e,t)=>{const r=new Set;return{state:{events:new Vt(Np)},actions:{addEvent:i=>{r.forEach(h=>h(i));const s=[...t().state.events,i],c=(h,p)=>{const y=s.find(v=>{if(v.kind!=="long-render"&&v.id!==h.id&&(h.data.startAt<=v.data.startAt&&h.data.endAt<=v.data.endAt&&h.data.endAt>=v.data.startAt||v.data.startAt<=h.data.startAt&&v.data.endAt>=h.data.startAt||h.data.startAt<=v.data.startAt&&h.data.endAt>=v.data.endAt))return!0});y&&p(y)},u=new Set;s.forEach(h=>{h.kind!=="interaction"&&c(h,()=>{u.add(h.id)})});const f=s.filter(h=>!u.has(h.id));e(()=>({state:{events:Vt.fromArray(f,Np)}}))},addListener:i=>(r.add(i),()=>{r.delete(i)}),clear:()=>{e({state:{events:new Vt(Np)}})}}}}),f3=()=>hC(Nl.subscribe,Nl.getState),Mu=null,zu=null,kp=null,Tm,h3=()=>{const e=t=>{Tm=t.composedPath().map(r=>r.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",e),kp=e,()=>{kp&&document.removeEventListener("mouseover",kp)}},p3=()=>{const e=()=>{Mu=performance.now(),zu=performance.timeOrigin};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}},_2=150,Rp=[];function m3(){let e,t;function r(){let s=null;fu=null,fu={},s=w2(fu);const c=performance.timeOrigin,u=performance.now();return e=requestAnimationFrame(()=>{t=setTimeout(()=>{const f=performance.now(),h=f-u,p=performance.timeOrigin;Rp.push(f+p);const y=Rp.filter(_=>f+p-_<=1e3),v=y.length;Rp=y;const w=Mu!==null&&zu!==null?f+p-(zu+Mu)<100:null,x=Tm!==null&&Tm;if(h>_2&&!w&&document.visibilityState==="visible"&&!x){const _=p+f,k=u+c;Nl.getState().actions.addEvent({kind:"long-render",id:pr(),data:{endAt:_,startAt:k,meta:{fiberRenders:fu,latency:h,fps:v}}})}Mu=null,zu=null,s?.(),r()},0)}),s}const i=r();return()=>{i(),cancelAnimationFrame(e),clearTimeout(t)}}var g3=()=>{const e=i3(),t=h3(),r=p3(),i=m3(),s=async(h,p,y)=>{Nl.getState().actions.addEvent({kind:"interaction",id:pr(),data:{startAt:p.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...p,kind:y.kind}}});const v=md.getChannelState("recording");p.detailedTiming.stopListeningForRenders(),v.length&&md.updateChannelState("recording",()=>new Vt(zr))},c=Bw("pointer",{onComplete:s}),u=Bw("keyboard",{onComplete:s}),f=s3(h=>{Lw.setState(Vt.fromArray(Lw.getCurrentState().concat(h),y2))});return()=>{t(),r(),i(),e(),c(),f(),u()}},kl=e=>{const t=e.filter(r=>r.length>2);return t.length===0?e.at(-1)??"Unknown":t.at(-1)},Qt=e=>{switch(e.kind){case"interaction":{const{renderTime:t,otherJSTime:r,framePreparation:i,frameConstruction:s,frameDraw:c}=e;return t+r+i+s+(c??0)}case"dropped-frames":return e.otherTime+e.renderTime}},v3=e=>e.wasFiberRenderMount||e.hasMemoCache?!1:e.changes.context.length===0&&e.changes.props.length===0&&e.changes.state.length===0,Bl=e=>{const t=Qt(e.timing);switch(e.kind){case"interaction":return t<200?"low":t<500?"needs-improvement":"high";case"dropped-frames":return t<50?"low":t<_2?"needs-improvement":"high"}},Bn=()=>ag(S2),S2=j1(null),E2=({size:e=24,className:t})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:$(["lucide lucide-chevron-right",t]),children:g("path",{d:"m9 18 6-6-6-6"})}),y3=({className:e="",size:t=24,events:r=[]})=>{const i=r.includes(!0),s=r.filter(f=>f).length,c=s>99?">99":s,u=i?Math.max(t*.6,14):Math.max(t*.4,6);return g("div",{className:"relative",children:[g("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${e}`,children:[g("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),g("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),r.length>0&&s>0&&et.options.value.showNotificationCount&&g("div",{className:$(["absolute",i?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",i?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${u}px`,height:`${u}px`,padding:i?"0.5px":"0"},children:i&&c})]})},gd=({className:e="",size:t=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[g("path",{d:"M18 6 6 18"}),g("path",{d:"m6 6 12 12"})]}),b3=({className:e="",size:t=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[g("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),g("path",{d:"M16 9a5 5 0 0 1 0 6"}),g("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),w3=({className:e="",size:t=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[g("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),g("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),g("path",{d:"m2 2 20 20"}),g("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),g("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),x3=({size:e=24,className:t})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:$(["lucide lucide-arrow-left",t]),children:[g("path",{d:"m12 19-7-7 7-7"}),g("path",{d:"M19 12H5"})]}),_3=({className:e="",size:t=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[g("path",{d:"M14 4.1 12 6"}),g("path",{d:"m5.1 8-2.9-.8"}),g("path",{d:"m6 12-1.9 2"}),g("path",{d:"M7.2 2.2 8 5.1"}),g("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),S3=({className:e="",size:t=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[g("path",{d:"M10 8h.01"}),g("path",{d:"M12 12h.01"}),g("path",{d:"M14 8h.01"}),g("path",{d:"M16 12h.01"}),g("path",{d:"M18 8h.01"}),g("path",{d:"M6 8h.01"}),g("path",{d:"M7 16h10"}),g("path",{d:"M8 12h.01"}),g("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),E3=({className:e="",size:t=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,style:{transform:"rotate(180deg)"},children:[g("circle",{cx:"12",cy:"12",r:"10"}),g("path",{d:"m4.9 4.9 14.2 14.2"})]}),T3=({className:e="",size:t=24})=>g("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[g("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),g("polyline",{points:"16 17 22 17 22 11"})]}),T2=({children:e,triggerContent:t,wrapperProps:r})=>{const[i,s]=Ye("closed"),[c,u]=Ye(null),[f,h]=Ye({width:window.innerWidth,height:window.innerHeight}),p=Ne(null),y=Ne(null),v=ag(_g),w=Ne(!1);Fe(()=>{const E=()=>{h({width:window.innerWidth,height:window.innerHeight}),x()};return window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]);const x=()=>{if(p.current&&v){const E=p.current.getBoundingClientRect(),R=v.getBoundingClientRect(),O=E.left+E.width/2,B=E.top,F=new DOMRect(O-R.left,B-R.top,E.width,E.height);u(F)}};Fe(()=>{x()},[p.current]),Fe(()=>{if(i==="opening"){const E=setTimeout(()=>s("open"),120);return()=>clearTimeout(E)}else if(i==="closing"){const E=setTimeout(()=>s("closed"),120);return()=>clearTimeout(E)}},[i]),Fe(()=>{const E=setInterval(()=>{!w.current&&i!=="closed"&&s("closing")},1e3);return()=>clearInterval(E)},[i]);const _=()=>{w.current=!0,x(),s("opening")},k=()=>{w.current=!1,x(),s("closing")},N=()=>{if(!c||!v)return{top:0,left:0};const E=v.getBoundingClientRect(),R=175,O=y.current?.offsetHeight||40,B=5,F=c.x+E.left,M=c.y+E.top;let G=F,ie=M-4;return G-R/2<B?G=B+R/2:G+R/2>f.width-B&&(G=f.width-B-R/2),ie-O<B&&(ie=M+c.height+4),{top:ie-E.top,left:G-E.left}};return g(Ze,{children:[v&&c&&i!=="closed"&&yC(g("div",{ref:y,className:$(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",i==="opening"||i==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:N().top+"px",left:N().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:e}),v),g("div",{ref:p,onMouseEnter:_,onMouseLeave:k,...r,children:t})]})},C3=({selectedEvent:e})=>{const{notificationState:t,setNotificationState:r,setRoute:i}=Bn();return g("div",{className:$(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[g("div",{className:$(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[g("button",{onClick:()=>{i({route:"render-visualization",routeMessage:null})},className:$(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="render-visualization"||t.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),g("button",{onClick:()=>{i({route:"other-visualization",routeMessage:null})},className:$(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),g("button",{onClick:()=>{i({route:"optimize",routeMessage:null})},className:$(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:g("span",{children:"Prompts"})})]}),g(T2,{triggerContent:g("button",{onClick:()=>{r(s=>{s.audioNotificationsOptions.enabled&&s.audioNotificationsOptions.audioContext.state!=="closed"&&s.audioNotificationsOptions.audioContext.close();const c=s.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!c));const u=new AudioContext;return s.audioNotificationsOptions.enabled||cg(u),c&&u.close(),{...s,audioNotificationsOptions:c?{audioContext:null,enabled:!1}:{audioContext:u,enabled:!0}}})},className:"ml-auto",children:g("div",{className:$(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[g("span",{children:"Alerts"}),t.audioNotificationsOptions.enabled?g(b3,{size:16,className:"text-[#6E6E77]"}):g(w3,{size:16,className:"text-[#6E6E77]"})]})}),children:g(Ze,{children:"Play a chime when a slowdown is recorded"})})]})},Oo=e=>{let t="";return e.toSorted((i,s)=>s.totalTime-i.totalTime).slice(0,30).filter(i=>i.totalTime>5).forEach(i=>{let s="";s+="Component Name:",s+=i.name,s+=`
`,s+=`Rendered: ${i.count} times
`,s+=`Sum of self times for ${i.name} is ${i.totalTime.toFixed(0)}ms
`,i.changes.props.length>0&&(s+=`Changed props for all ${i.name} instances ("name:count" pairs)
`,i.changes.props.forEach(c=>{s+=`${c.name}:${c.count}x
`})),i.changes.state.length>0&&(s+=`Changed state for all ${i.name} instances ("hook index:count" pairs)
`,i.changes.state.forEach(c=>{s+=`${c.index}:${c.count}x
`})),i.changes.context.length>0&&(s+=`Changed context for all ${i.name} instances ("context display name (if exists):count" pairs)
`,i.changes.context.forEach(c=>{s+=`${c.name}:${c.count}x
`})),t+=s,t+=`
`}),t},N3=({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:r,commitTime:i,framePresentTime:s,formattedReactData:c})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${r.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${i.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${s===null?"":`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${c}`,k3=({interactionType:e,name:t,componentPath:r,time:i,renderTime:s,eHandlerTimeExcludingRenders:c,toRafTime:u,commitTime:f,framePresentTime:h,formattedReactData:p})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${e} on the component named ${t}. This component has the following ancestors ${r}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${i.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${s.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${c.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${u.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${f.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${h===null?"":`- how long it took from dom commit for the frame to be presented: ${h.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${p}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,R3=({renderTime:e,otherTime:t,formattedReactData:r})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time: ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,A3=({renderTime:e,otherTime:t,formattedReactData:r})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,O3=({renderTime:e,otherTime:t,formattedReactData:r})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r}`,M3=({interactionType:e,name:t,time:r,renderTime:i,eHandlerTimeExcludingRenders:s,toRafTime:c,commitTime:u,framePresentTime:f,formattedReactData:h})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e} on a component named ${t}. This means, roughly, the component that handled the ${e} event was named ${t}.

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${i.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${s.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${c.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${u.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${f===null?"":`- how long it took from dom commit for the frame to be presented: ${f.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${h}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,Cm=(e,t)=>yr(()=>{switch(e){case"data":switch(t.kind){case"dropped-frames":return O3({formattedReactData:Oo(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return N3({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Oo(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),toRafTime:t.timing.framePreparation})}case"explanation":switch(t.kind){case"dropped-frames":return A3({formattedReactData:Oo(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return M3({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Oo(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:kl(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),time:Qt(t.timing),toRafTime:t.timing.framePreparation})}case"fix":switch(t.kind){case"dropped-frames":return R3({formattedReactData:Oo(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return k3({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(">"),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Oo(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:kl(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),time:Qt(t.timing),toRafTime:t.timing.framePreparation})}}}),z3=({selectedEvent:e})=>{const[t,r]=Ye("fix"),[i,s]=Ye(!1);return g("div",{className:$(["w-full h-full"]),children:[g("div",{className:$(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[g("div",{className:$(["bg-[#18181B] p-1 rounded-t-sm"]),children:g("div",{className:$(["flex items-center gap-x-1"]),children:[g("button",{onClick:()=>r("fix"),className:$(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),g("button",{onClick:()=>r("explanation"),className:$(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),g("button",{onClick:()=>r("data"),className:$(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),g("div",{className:$(["overflow-y-auto h-full"]),children:g("pre",{className:$(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:Cm(t,e)})})]}),g("button",{onClick:async()=>{const c=Cm(t,e);await navigator.clipboard.writeText(c),s(!0),setTimeout(()=>s(!1),1e3)},className:$(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[g("span",{children:i?"Copied!":"Copy Prompt"}),g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:$(["transition-transform duration-200",i&&"scale-110"]),children:i?g("path",{d:"M20 6L9 17l-5-5"}):g(Ze,{children:[g("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),g("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},D3=(e,t)=>{switch(e.kind){case"dropped-frames":return[...t?[{name:"Total Processing Time",time:Qt(e.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:e.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...t?[]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:t?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:e.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:Qt(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},j3=({selectedEvent:e})=>{const[t]=Ye(Hd()??!1),{notificationState:r}=Bn(),[i,s]=Ye(r.routeMessage?.name?[r.routeMessage.name]:[]),c=D3(e,t),u=ag(_g);Fe(()=>{if(r.routeMessage?.name){const h=u?.querySelector("#overview-scroll-container"),p=u?.querySelector(`#react-scan-overview-bar-${r.routeMessage.name}`);if(h&&p){const y=p.getBoundingClientRect().top,v=h.getBoundingClientRect().top,w=y-v;h.scrollTop=h.scrollTop+w}}},[r.route]),Fe(()=>{r.route==="other-visualization"&&s(h=>r.routeMessage?.name?[r.routeMessage.name]:h)},[r.route]);const f=c.reduce((h,p)=>h+p.time,0);return g("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[g("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:g("div",{className:"flex items-center justify-between",children:[g("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),g("span",{className:"text-xs text-zinc-400",children:["Total: ",f.toFixed(0),"ms"]})]})}),g("div",{className:"divide-y divide-zinc-800",children:c.map(h=>{const p=i.includes(h.kind);return g("div",{id:`react-scan-overview-bar-${h.kind}`,children:[g("button",{onClick:()=>s(y=>y.includes(h.kind)?y.filter(v=>v!==h.kind):[...y,h.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:g("div",{className:"flex-1",children:[g("div",{className:"flex items-center justify-between mb-2",children:[g("div",{className:"flex items-center gap-0.5",children:[g("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${p?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),g("span",{className:"font-medium flex items-center text-left",children:h.name})]}),g("span",{className:" text-zinc-400",children:[h.time.toFixed(0),"ms"]})]}),g("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:g("div",{className:`h-full ${h.color} transition-all`,style:{width:`${h.time/f*100}%`}})})]})}),p&&g("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:g("p",{className:" text-zinc-400 mb-4 text-xs",children:yr(()=>{switch(e.kind){case"interaction":switch(h.kind){case"render":return g(Mo,{input:U3(e)});case"other-javascript":return g(Mo,{input:H3(e)});case"other-not-javascript":return g(Mo,{input:L3(e)})}case"dropped-frames":switch(h.kind){case"total-processing-time":return g(Mo,{input:{kind:"total-processing",data:{time:Qt(e.timing)}}});case"render":return g(Ze,{children:g(Mo,{input:{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((y,v)=>v.totalTime-y.totalTime).slice(0,3).map(y=>({name:y.name,percentage:y.totalTime/Qt(e.timing)}))}}})});case"other-frame-drop":return g(Mo,{input:{kind:"other"}})}}})})})]},h.kind)})})]})},L3=e=>{const t=e.groupedFiberRenders.reduce((c,u)=>c+u.count,0),r=e.timing.renderTime,i=Qt(e.timing),s=r/i*100;return t>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:t,percentageOfTotal:s,copyButton:g(qw,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:g(qw,{})}}},qw=()=>{const[e,t]=Ye(!1),{notificationState:r}=Bn();return g("button",{onClick:async()=>{r.selectedEvent&&(await navigator.clipboard.writeText(Cm("explanation",r.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[g("span",{children:e?"Copied!":"Copy Prompt"}),g("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:$(["transition-transform duration-200",e&&"scale-110"]),children:e?g("path",{d:"M20 6L9 17l-5-5"}):g(Ze,{children:[g("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),g("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},U3=e=>e.timing.renderTime/Qt(e.timing)>.3?{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((t,r)=>r.totalTime-t.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/Qt(e.timing),name:t.name}))}}:{kind:"other"},H3=e=>{const t=e.groupedFiberRenders.reduce((r,i)=>r+i.count,0);return e.timing.otherJSTime/Qt(e.timing)<.2?{kind:"js-explanation-base"}:e.groupedFiberRenders.find(r=>r.count>200)||e.groupedFiberRenders.reduce((r,i)=>r+i.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(r=>r.count>100).toSorted((r,i)=>i.count-r.count).slice(0,3)}}:e.timing.otherJSTime/Qt(e.timing)>.3?e.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:t}}:{kind:"js-explanation-base"}},Mo=({input:e})=>{switch(e.kind){case"total-processing":return g("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),g("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),g("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),g("p",{children:["To understand precisely what caused the slowdown while in production, use the ",g("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),g("p",{})]});case"render":return g("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),g("div",{className:$(["flex flex-col"]),children:[g("p",{children:"The slowest components for this time period were:"}),e.data.topByTime.map(t=>g("div",{children:[g("strong",{children:t.name}),":"," ",(t.percentage*100).toFixed(0),"% of total"]},t.name))]}),g("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),g("p",{children:'The "Ranked" tab shows the render times of every component.'}),g("p",{children:"The render times of the same components are grouped together into one bar."}),g("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return g("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),g("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",g("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",g("code",{children:"'onclick'"}),", ",g("code",{children:"'onchange'"}),") that performed expensive computation."]}),g("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),g("p",{children:["You should profile your app using the"," ",g("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return g("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),e.data.renderCount===0?g(Ze,{children:[g("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),g("p",{children:["You should try to reproduce the slowdown while profiling your website with the",g("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):g(Ze,{children:[" ",g("p",{children:["There were ",g("strong",{children:e.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",g("code",{children:"useEffects"}),"."]}),g("div",{className:$(["flex flex-col"]),children:[g("p",{children:"You should try optimizing the renders of:"}),e.data.topByCount.map(t=>g("div",{children:["- ",g("strong",{children:t.name})," (rendered ",t.count,"x)"]},t.name))]}),"and then checking if the problem still exists.",g("p",{children:["You can also try profiling your app using the"," ",g("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return g("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),g("p",{children:["There were only ",g("strong",{children:e.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",g("code",{children:"useEffect"}),"/",g("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),g("p",{children:["To understand precisely what caused the slowdown, use the"," ",g("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return g("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),g("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),g("p",{children:["During this interaction, there were"," ",g("strong",{children:e.data.count})," renders, which was"," ",g("strong",{children:[e.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),g("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),g("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),g("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),g("p",{children:e.data.copyButton}),g("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),g("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return g("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),g("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),g("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),g("p",{children:e.data.copyButton}),g("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),g("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return g("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[g("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",g("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),g("p",{children:["To get a better picture of what happened, profile your app using the"," ",g("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},xt=null,At=null,ht=Ft({kind:"idle",current:null}),Ap=null,$o=()=>{Ap&&cancelAnimationFrame(Ap),Ap=requestAnimationFrame(()=>{if(!xt||!At)return;At.clearRect(0,0,xt.width,xt.height);const e="hsl(271, 76%, 53%)",t=ht.value,{alpha:r,current:i}=yr(()=>{switch(t.kind){case"transition":{const s=t.current?.alpha&&t.current.alpha>0?t.current:t.transitionTo;return{alpha:s?s.alpha:0,current:s}}case"move-out":return{alpha:t.current?.alpha??0,current:t.current};case"idle":return{alpha:1,current:t.current}}});switch(i?.rects.forEach(s=>{At&&(At.shadowColor=e,At.shadowBlur=6,At.strokeStyle=e,At.lineWidth=2,At.globalAlpha=r,At.beginPath(),At.rect(s.left,s.top,s.width,s.height),At.stroke(),At.shadowBlur=0,At.beginPath(),At.rect(s.left,s.top,s.width,s.height),At.stroke())}),t.kind){case"move-out":{if(t.current.alpha===0){ht.value={kind:"idle",current:null};return}t.current.alpha<=.01&&(t.current.alpha=0),t.current.alpha=Math.max(0,t.current.alpha-.03),$o();return}case"transition":{if(t.current&&t.current.alpha>0){t.current.alpha=Math.max(0,t.current.alpha-.03),$o();return}if(t.transitionTo.alpha===1){ht.value={kind:"idle",current:t.transitionTo};return}t.transitionTo.alpha=Math.min(t.transitionTo.alpha+.03,1),$o()}case"idle":return}})},Op=null,B3=e=>{if(xt=document.createElement("canvas"),At=xt.getContext("2d",{alpha:!0}),!At)return null;const t=window.devicePixelRatio||1,{innerWidth:r,innerHeight:i}=window;xt.style.width=`${r}px`,xt.style.height=`${i}px`,xt.width=r*t,xt.height=i*t,xt.style.position="fixed",xt.style.left="0",xt.style.top="0",xt.style.pointerEvents="none",xt.style.zIndex="2147483600",At.scale(t,t),e.appendChild(xt),Op&&window.removeEventListener("resize",Op);const s=()=>{if(!xt||!At)return;const c=window.devicePixelRatio||1,{innerWidth:u,innerHeight:f}=window;xt.style.width=`${u}px`,xt.style.height=`${f}px`,xt.width=u*c,xt.height=f*c,At.scale(c,c),$o()};return Op=s,window.addEventListener("resize",s),ht.subscribe(()=>{requestAnimationFrame(()=>{$o()})}),F3};function F3(){xt?.parentNode&&xt.parentNode.removeChild(xt),xt=null,At=null}var ol=()=>{const e=ht.value.current?ht.value.current:ht.value.kind==="transition"?ht.value.transitionTo:null;if(e){if(ht.value.kind==="transition"){ht.value={kind:"move-out",current:ht.value.current?.alpha===0?ht.value.transitionTo:ht.value.current??ht.value.transitionTo};return}ht.value={kind:"move-out",current:{alpha:0,...e}}}},$3=({selectedEvent:e})=>{const t=Qt(e.timing),r=t-e.timing.renderTime,[i]=Ye(Hd()),c=e.groupedFiberRenders.map(p=>({event:p,kind:"render",totalTime:i?p.count:p.totalTime})),u=yr(()=>{switch(e.kind){case"dropped-frames":return e.timing.renderTime/t<.1;case"interaction":return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}});e.kind==="interaction"&&!i&&c.push({kind:"other-javascript",totalTime:e.timing.otherJSTime}),u&&!i&&(e.kind==="interaction"?c.push({kind:"other-not-javascript",totalTime:Qt(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):c.push({kind:"other-frame-drop",totalTime:r}));const f=Ne({lastCallAt:null,timer:null}),h=c.reduce((p,y)=>p+y.totalTime,0);return g("div",{className:$(["flex flex-col h-full w-full gap-y-1"]),children:[yr(()=>{if(i&&c.length===0)return g("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[g("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),g("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(c.length===0)return g("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[g("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),g("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),c.toSorted((p,y)=>y.totalTime-p.totalTime).map(p=>g(C2,{bars:c,bar:p,debouncedMouseEnter:f,totalBarTime:h,isProduction:i},p.kind==="render"?p.event.id:p.kind))]})},q3=e=>e.current&&e.current.alpha>0?"fading-out":"fading-in",C2=({bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:i,bars:s,depth:c=0})=>{const{setNotificationState:u,setRoute:f}=Bn(),[h,p]=Ye(!1),y=e.kind==="render"?e.event.parents.size===0:!0,v=s.filter(_=>_.kind==="render"&&e.kind==="render"?e.event.parents.has(_.event.name)&&_.event.name!==e.event.name:!1),w=e.kind==="render"?Array.from(e.event.parents).filter(_=>!s.some(k=>k.kind==="render"&&k.event.name===_)):[],x=()=>{e.kind==="render"?(u(_=>({..._,selectedFiber:e.event})),f({route:"render-explanation",routeMessage:null})):f({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:e.kind}})};return g("div",{className:"w-full",children:[g("div",{className:$(["w-full flex items-center relative text-xs min-w-0"]),children:[g("button",{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),ol()},onMouseEnter:async()=>{const _=async()=>{if(t.current.lastCallAt=Date.now(),e.kind!=="render"){const O=ht.value.current?ht.value.current:ht.value.kind==="transition"?ht.value.transitionTo:null;if(!O){ht.value={kind:"idle",current:null};return}ht.value={kind:"move-out",current:{alpha:0,...O}};return}const k=ht.value,N=yr(()=>{switch(k.kind){case"transition":return k.transitionTo;case"idle":case"move-out":return k.current}}),E=[];if(k.kind==="transition"){const O=q3(k);yr(()=>{switch(O){case"fading-in":{ht.value={kind:"transition",current:k.transitionTo,transitionTo:{rects:E,alpha:0,name:e.event.name}};return}case"fading-out":{ht.value={kind:"transition",current:ht.value.current?{alpha:0,...ht.value.current}:null,transitionTo:{rects:E,alpha:0,name:e.event.name}};return}}})}else ht.value={kind:"transition",transitionTo:{rects:E,alpha:0,name:e.event.name},current:N?{alpha:0,...N}:null};const R=e.event.elements.filter(O=>O instanceof Element);for await(const O of g2(R))O.forEach(({boundingClientRect:B})=>{E.push(B)}),$o()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{_()},200);return}_()},onClick:x,className:$(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[g("div",{style:{minWidth:"fit-content",width:`${e.totalTime/r*100}%`},className:$(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",e.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",e.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",e.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",e.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),g("div",{className:$(["absolute inset-0 flex items-center px-2","min-w-0"]),children:g("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[g("span",{className:$(["truncate"]),children:yr(()=>{switch(e.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return e.event.name}})}),e.kind==="render"&&v3(e.event)&&g("div",{style:{lineHeight:"10px"},className:$(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),g("button",{onClick:()=>e.kind==="render"&&!y&&p(!h),className:$(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!y&&"hover:bg-[#0f0f0f]",e.kind==="render"&&!y?"cursor-pointer":"cursor-default"]),children:[g("div",{className:"w-[20px] flex items-center justify-center",children:e.kind==="render"&&!y&&g(E2,{className:$("transition-transform",h&&"rotate-90"),size:16})}),g("div",{style:{minWidth:y?"fit-content":i?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[e.kind==="render"&&g("span",{className:$(["text-[10px]"]),children:["x",e.event.count]}),(e.kind!=="render"||!i)&&g("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[e.totalTime<1?"<1":e.totalTime.toFixed(0),"ms"]})]})]}),c===0&&g("div",{className:$(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),h&&(v.length>0||w.length>0)&&g("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[v.toSorted((_,k)=>k.totalTime-_.totalTime).map((_,k)=>g(C2,{depth:c+1,bar:_,debouncedMouseEnter:t,totalBarTime:r,isProduction:i,bars:s},k)),w.map(_=>g("div",{className:"w-full",children:g("div",{className:"w-full flex items-center relative text-xs",children:g("div",{className:"h-full w-full flex items-center relative",children:[g("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),g("div",{className:"absolute inset-0 flex items-center px-2",children:g("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:_})})]})})},_))]})]})},Y3=({selectedEvent:e,selectedFiber:t})=>{const{setRoute:r}=Bn(),[i,s]=Ye(!0),[c]=Ye(Hd());rg(()=>{const f=localStorage.getItem("react-scan-tip-shown"),h=f==="true"?!0:f==="false"?!1:null;if(h===null){s(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}h||s(!1)},[]);const u=t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0;return g("div",{className:$(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[g("div",{className:$(["flex items-start gap-x-4 "]),children:[g("button",{onClick:()=>{r({route:"render-visualization",routeMessage:null})},className:$(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[g(x3,{size:14})," ",g("span",{children:"Overview"})]}),g("div",{className:$(["flex flex-col gap-y-1"]),children:[g("div",{className:$(["text-sm font-bold text-white overflow-x-hidden"]),children:g("div",{className:"flex items-center gap-x-2 truncate",children:t.name})}),g("div",{className:$(["flex gap-x-2"]),children:[!c&&g(Ze,{children:g("div",{className:$(["text-xs text-gray-400"]),children:["• Render time: ",t.totalTime.toFixed(0),"ms"]})}),g("div",{className:$(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",t.count,"x"]})]})]})]}),i&&!u&&g("div",{className:$(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[g("button",{onClick:()=>{s(!1),localStorage.setItem("react-scan-tip-shown","false")},className:$(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:g(gd,{size:12})}),g("div",{className:$(["w-1 bg-[#d36cff]"])}),g("div",{className:$(["flex-1"]),children:[g("div",{className:$(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),g("div",{className:$(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),u&&g("div",{className:$(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[g("div",{className:$(["w-1 bg-[#d36cff]"])}),g("div",{className:$(["flex-1"]),children:[g("div",{className:$(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),g("div",{className:$(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),g("div",{className:$(["flex w-full"]),children:[g("div",{className:$(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[g("div",{className:$(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),t.changes.props.length>0?t.changes.props.toSorted((f,h)=>h.count-f.count).map(f=>g("div",{className:$(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[g("span",{className:$(["text-white "]),children:f.name}),g("div",{className:$([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[f.count,"/",t.count,"x"]})]},f.name)):g("div",{className:$(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),g("div",{className:$(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[g("div",{className:$([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),t.changes.state.length>0?t.changes.state.toSorted((f,h)=>h.count-f.count).map(f=>g("div",{className:$(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[g("span",{className:$(["text-white "]),children:["index ",f.index]}),g("div",{className:$(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[f.count,"/",t.count,"x"]})]},f.index)):g("div",{className:$(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),g("div",{className:$(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[g("div",{className:$([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),t.changes.context.length>0?t.changes.context.toSorted((f,h)=>h.count-f.count).map(f=>g("div",{className:$(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[g("span",{className:$(["text-white "]),children:f.name}),g("div",{className:$(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[f.count,"/",t.count,"x"]})]},f.name)):g("div",{className:$(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},V3=()=>{const{notificationState:e,setNotificationState:t}=Bn(),[r,i]=Ye("..."),s=Ne(null);if(Fe(()=>{const c=setInterval(()=>{i(u=>u==="..."?"":u+".")},500);return()=>clearInterval(c)},[]),!e.selectedEvent)return g("div",{ref:s,className:$(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[g("div",{className:$(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:g("button",{onClick:()=>{mt.value={view:"none"}},children:g(gd,{size:18,className:"text-[#6F6F78]"})})}),g("div",{className:$(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:g("div",{className:$(["flex flex-col items-start gap-y-4"]),children:[g("div",{className:$(["flex items-center"]),children:g("span",{className:$(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",r]})}),e.events.length!==0&&g("p",{className:$(["text-xs"]),children:["Click on an item in the"," ",g("span",{className:$(["text-purple-400"]),children:"History"})," list to get started"]}),g("p",{className:$(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),g("p",{className:$(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),g("button",{onClick:()=>{if(e.audioNotificationsOptions.enabled){t(u=>(u.audioNotificationsOptions.audioContext?.state!=="closed"&&u.audioNotificationsOptions.audioContext?.close(),localStorage.setItem("react-scan-notifications-audio","false"),{...u,audioNotificationsOptions:{audioContext:null,enabled:!1}}));return}localStorage.setItem("react-scan-notifications-audio","true");const c=new AudioContext;cg(c),t(u=>({...u,audioNotificationsOptions:{enabled:!0,audioContext:c}}))},className:$(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:e.audioNotificationsOptions.enabled?g(Ze,{children:g("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):g(Ze,{children:g("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(e.route){case"render-visualization":return g(hu,{children:g($3,{selectedEvent:e.selectedEvent})});case"render-explanation":{if(!e.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return g(hu,{children:g(Y3,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})})}case"other-visualization":return g(hu,{children:g("div",{className:$(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:g(j3,{selectedEvent:e.selectedEvent})})});case"optimize":return g(hu,{children:g(z3,{selectedEvent:e.selectedEvent})})}e.route},hu=({children:e})=>{const{notificationState:t}=Bn();if(!t.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return g("div",{className:$(["w-full h-full flex flex-col gap-y-2"]),children:[g("div",{className:$(["h-[50px] w-full"]),children:g(C3,{selectedEvent:t.selectedEvent})}),g("div",{className:$(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:e})]})},P3=({selectedEvent:e})=>{const t=Bl(e);switch(e.kind){case"interaction":return g("div",{className:$(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:g("div",{className:$(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[g("div",{className:$(["flex items-center gap-x-2 "]),children:[g("span",{className:$(["text-[#5a5a5a] mr-0.5"]),children:e.type==="click"?"Clicked ":"Typed in "}),g("span",{children:kl(e.componentPath)}),g("div",{className:$(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:[Qt(e.timing).toFixed(0),"ms processing time"]})]}),g("div",{className:$(["flex items-center gap-x-2  justify-end ml-auto"]),children:g("div",{className:$(["p-2 flex justify-center items-center border-[#27272A]"]),children:g("button",{onClick:()=>{mt.value={view:"none"}},title:"Close",children:g(gd,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return g("div",{className:$(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:g("div",{className:$(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[g("div",{className:$(["flex items-center gap-x-2 "]),children:["FPS Drop",g("div",{className:$(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:["dropped to ",e.fps," FPS"]})]}),g("div",{className:$(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:g("div",{className:$(["p-2 flex justify-center items-center border-[#27272A]"]),children:g("button",{onClick:()=>{mt.value={view:"none"}},children:g(gd,{size:18,className:"text-[#6F6F78]"})})})})]})})}},X3=({flashingItemsCount:e,totalEvents:t})=>{const[r,i]=Ye(!1),s=Ne(0),c=Ne(0);return Fe(()=>{if(s.current>=t)return;const u=Date.now(),f=250,h=u-c.current;if(h>=f){i(!1);const p=setTimeout(()=>{s.current=t,c.current=Date.now(),i(!0),setTimeout(()=>{i(!1)},2e3)},50);return()=>clearTimeout(p)}else{const p=f-h,y=setTimeout(()=>{i(!1),setTimeout(()=>{s.current=t,c.current=Date.now(),i(!0),setTimeout(()=>{i(!1)},2e3)},50)},p);return()=>clearTimeout(y)}},[e]),r},Yw=({item:e,shouldFlash:t})=>{const[r,i]=Ye(!1),s=e.events.map(Bl).reduce((f,h)=>{switch(h){case"high":return"high";case"needs-improvement":return f==="high"?"high":"needs-improvement";case"low":return f}},"low"),c=e.events.reduce((f,h)=>t(h.id)?f+1:f,0),u=X3({flashingItemsCount:c,totalEvents:e.events.length});return g("div",{className:$(["flex flex-col gap-y-0.5"]),children:[g("button",{onClick:()=>i(f=>!f),className:$(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",u&&!r&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[g("div",{className:$(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[g("span",{className:$(["min-w-fit"]),children:g(E2,{className:$(["text-[#A1A1AA] transition-transform",r?"rotate-90":""]),size:14},`chevron-${e.timestamp}`)}),g("span",{className:$(["text-xs"]),children:e.kind==="collapsed-frame-drops"?"FPS Drops":kl(e.events.at(0)?.componentPath??[])})]}),g("div",{className:$(["ml-auto min-w-fit flex justify-end items-center"]),children:g("div",{style:{lineHeight:"10px"},className:$(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:["x",e.events.length]})})]}),r&&g(I3,{children:e.events.toSorted((f,h)=>h.timestamp-f.timestamp).map(f=>g(N2,{event:f,shouldFlash:t(f.id)}))})]})},I3=({children:e})=>g("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[g("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),e]}),G3=e=>{const t=Ne([]),[r,i]=Ye(new Set),s=Ne(!0);return Fe(()=>{if(s.current){s.current=!1,t.current=e;return}const c=new Set(e.map(h=>h.id)),u=new Set(t.current.map(h=>h.id)),f=new Set;c.forEach(h=>{u.has(h)||f.add(h)}),f.size>0&&(i(f),setTimeout(()=>{i(new Set)},2e3)),t.current=e},[e]),c=>r.has(c)},W3=({shouldFlash:e})=>{const[t,r]=Ye(e);return Fe(()=>{if(e){r(!0);const i=setTimeout(()=>{r(!1)},1e3);return()=>clearTimeout(i)}},[e]),t},N2=({event:e,shouldFlash:t})=>{const{notificationState:r,setNotificationState:i}=Bn(),s=Bl(e),c=W3({shouldFlash:t});switch(e.kind){case"interaction":return g("button",{onClick:()=>{i(u=>({...u,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:$(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===r.selectedEvent?.id&&"bg-[#18181B]",c&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[g("div",{className:$(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[g("span",{className:$(["min-w-fit text-xs"]),children:yr(()=>{switch(e.type){case"click":return g(_3,{size:14});case"keyboard":return g(S3,{size:14})}})}),g("span",{className:$(["text-xs pr-1 truncate"]),children:kl(e.componentPath)})]}),g("div",{className:$([" min-w-fit flex justify-end items-center ml-auto"]),children:g("div",{style:{lineHeight:"10px"},className:$(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",s==="low"&&"bg-green-500/50",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:g("div",{style:{lineHeight:"10px"},className:$(["text-[10px] text-white flex items-end"]),children:[Qt(e.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return g("button",{onClick:()=>{i(u=>({...u,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:$(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===r.selectedEvent?.id&&"bg-[#18181B]",c&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[g("div",{className:$(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[g(T3,{size:14,className:"mr-1.5"})," FPS Drop"]}),g("div",{className:$([" min-w-fit flex justify-end items-center ml-auto"]),children:g("div",{style:{lineHeight:"10px"},className:$(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:[e.fps," FPS"]})})]})}},Q3=e=>e.reduce((r,i)=>{const s=r.at(-1);if(!s)return[{kind:"single",event:i,timestamp:i.timestamp}];switch(s.kind){case"collapsed-keyboard":return i.kind==="interaction"&&i.type==="keyboard"&&i.componentPath.join("-")===s.events[0].componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[...s.events,i],timestamp:Math.max(...[...s.events,i].map(u=>u.timestamp))}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}];case"single":return s.event.kind==="interaction"&&s.event.type==="keyboard"&&i.kind==="interaction"&&i.type==="keyboard"&&s.event.componentPath.join("-")===i.componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[s.event,i],timestamp:Math.max(s.event.timestamp,i.timestamp)}]:s.event.kind==="dropped-frames"&&i.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[s.event,i],timestamp:Math.max(s.event.timestamp,i.timestamp)}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}];case"collapsed-frame-drops":return i.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[...s.events,i],timestamp:Math.max(...[...s.events,i].map(u=>u.timestamp))}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}]}},[]),k2=(e=150)=>{const{notificationState:t}=Bn(),[r,i]=Ye(t.events);return Fe(()=>{setTimeout(()=>{i(t.events)},e)},[t.events]),[r,i]},K3=()=>{const{notificationState:e,setNotificationState:t}=Bn(),r=G3(e.events),[i,s]=k2(),c=Q3(i).toSorted((u,f)=>f.timestamp-u.timestamp);return g("div",{className:$(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[g("div",{className:$(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[g("span",{children:"History"}),g(T2,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:g("button",{className:$(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{Nl.getState().actions.clear(),t(u=>({...u,selectedEvent:null,selectedFiber:null,route:u.route==="other-visualization"?"other-visualization":"render-visualization"})),s([])},children:g(E3,{className:$([""]),size:16})}),children:g("div",{className:$(["w-full flex justify-center"]),children:"Clear all events"})})]}),g("div",{className:$(["flex flex-col px-1 gap-y-1"]),children:[c.length===0&&g("div",{className:$(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),c.map(u=>yr(()=>{switch(u.kind){case"collapsed-keyboard":return g(Yw,{shouldFlash:r,item:u});case"single":return g(N2,{event:u.event,shouldFlash:r(u.event.id)},u.event.id);case"collapsed-frame-drops":return g(Yw,{shouldFlash:r,item:u})}}))]})]})},J3=e=>Object.values(e).map(r=>({id:pr(),totalTime:r.nodeInfo.reduce((i,s)=>i+s.selfTime,0),count:r.nodeInfo.length,name:r.nodeInfo[0].name,deletedAll:!1,parents:r.parents,hasMemoCache:r.hasMemoCache,wasFiberRenderMount:r.wasFiberRenderMount,elements:r.nodeInfo.map(i=>i.element),changes:{context:r.changes.fiberContext.current.filter(i=>r.changes.fiberContext.changesCounts.get(i.name)).map(i=>({name:String(i.name),count:r.changes.fiberContext.changesCounts.get(i.name)??0})),props:r.changes.fiberProps.current.filter(i=>r.changes.fiberProps.changesCounts.get(i.name)).map(i=>({name:String(i.name),count:r.changes.fiberProps.changesCounts.get(i.name)??0})),state:r.changes.fiberState.current.filter(i=>r.changes.fiberState.changesCounts.get(Number(i.name))).map(i=>({index:i.name,count:r.changes.fiberState.changesCounts.get(Number(i.name))??0}))}})),Z3=e=>{Fe(()=>{const r=setInterval(()=>{e.forEach(i=>{i.groupedFiberRenders&&i.groupedFiberRenders.forEach(s=>{if(s.deletedAll)return;if(!s.elements||s.elements.length===0){s.deletedAll=!0;return}const c=s.elements.length;s.elements=s.elements.filter(u=>u&&u.isConnected),s.elements.length===0&&c>0&&(s.deletedAll=!0)})})},5e3);return()=>{clearInterval(r)}},[e])},R2=()=>{const e=f3(),t=[];return Z3(t),e.state.events.forEach(r=>{const i=r.kind==="interaction"?r.data.meta.detailedTiming.fiberRenders:r.data.meta.fiberRenders,s=J3(i),c=s.reduce((u,f)=>u+f.totalTime,0);switch(r.kind){case"interaction":{const{commitEnd:u,jsEndDetail:f,interactionStartDetail:h,rafStart:p}=r.data.meta.detailedTiming,y=Math.max(0,f-h-c),v=Math.max(r.data.meta.latency-(u-h),0);t.push({componentPath:r.data.meta.detailedTiming.componentPath,groupedFiberRenders:s,id:r.id,kind:"interaction",memory:null,timestamp:r.data.startAt,type:r.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:c,kind:"interaction",otherJSTime:y,framePreparation:p-f,frameConstruction:u-p,frameDraw:v}});return}case"long-render":{t.push({kind:"dropped-frames",id:r.id,memory:null,timing:{kind:"dropped-frames",renderTime:c,otherTime:r.data.meta.latency},groupedFiberRenders:s,timestamp:r.data.startAt,fps:r.data.meta.fps});return}}}),t},e5=1e3,t5=()=>{const{notificationState:e,setNotificationState:t}=Bn(),r=Ne(null),i=Ne(null),s=Ne(0),[c]=k2(),u=c.filter(f=>Bl(f)==="high").length;return Fe(()=>{const f=localStorage.getItem("react-scan-notifications-audio");if(f!=="false"&&f!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(f!=="false"){t(p=>p.audioNotificationsOptions.enabled?p:{...p,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),Fe(()=>{const{audioNotificationsOptions:f}=e;if(!f.enabled||u===0||r.current&&r.current>=u)return;i.current&&clearTimeout(i.current);const p=Date.now()-s.current,y=Math.max(0,e5-p);i.current=setTimeout(()=>{cg(f.audioContext),r.current=u,s.current=Date.now(),i.current=null},y)},[u]),Fe(()=>{u===0&&(r.current=null)},[u]),Fe(()=>()=>{i.current&&clearTimeout(i.current)},[]),null},n5=lg((e,t)=>{const r=R2(),[i,s]=Ye({detailsExpanded:!1,events:r,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:r.toSorted((c,u)=>c.timestamp-u.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return i.events=r,g(S2.Provider,{value:{notificationState:i,setNotificationState:s,setRoute:({route:c,routeMessage:u})=>{s(f=>{const h={...f,route:c,routeMessage:u};switch(c){case"render-visualization":return ol(),{...h,selectedFiber:null};case"optimize":return ol(),{...h,selectedFiber:null};case"other-visualization":return ol(),{...h,selectedFiber:null};case"render-explanation":return ol(),h}})}},children:[g(t5,{}),g(r5,{ref:t})]})}),r5=lg((e,t)=>{const{notificationState:r}=Bn();return g("div",{ref:t,className:$(["h-full w-full flex flex-col"]),children:[r.selectedEvent&&g("div",{className:$(["w-full h-[48px] flex flex-col",r.moreInfoExpanded&&"h-[235px]",r.moreInfoExpanded&&r.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[g(P3,{selectedEvent:r.selectedEvent}),r.moreInfoExpanded&&g(a5,{})]}),g("div",{className:$(["flex ",r.selectedEvent?"h-[calc(100%-48px)]":"h-full",r.moreInfoExpanded&&"h-[calc(100%-200px)]",r.moreInfoExpanded&&r.selectedEvent?.kind==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[g("div",{className:$(["h-full min-w-[200px]"]),children:g(K3,{})}),g("div",{className:$(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:g(V3,{})})]})]})}),a5=()=>{const{notificationState:e}=Bn();if(!e.selectedEvent)throw new Error("Invariant must have selected event for more info");const t=e.selectedEvent;return g("div",{className:$(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",t.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:g("div",{className:$(["flex flex-col gap-y-4 h-full"]),children:yr(()=>{switch(t.kind){case"interaction":return g(Ze,{children:[g("div",{className:$(["flex items-center gap-x-3"]),children:[g("span",{className:"text-[#6F6F78] text-xs font-medium",children:t.type==="click"?"Clicked component location":"Typed in component location"}),g("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:t.componentPath.toReversed().map((r,i)=>g(Ze,{children:[g("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:r},r),i<t.componentPath.length-1&&g("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),g("div",{className:$(["flex items-center gap-x-3"]),children:[g("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),g("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[Qt(t.timing).toFixed(0),"ms"]})]}),g("div",{className:$(["flex items-center gap-x-3"]),children:[g("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),g("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return g(Ze,{children:[g("div",{className:$(["flex items-center gap-x-3"]),children:[g("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),g("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[Qt(t.timing).toFixed(0),"ms"]})]}),g("div",{className:$(["flex items-center gap-x-3"]),children:[g("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),g("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},i5=dg(()=>{const e=R2(),[t,r]=Ye(e);Fe(()=>{const w=setTimeout(()=>{r(e)},600);return()=>{clearTimeout(w)}},[e]);const i=ge.inspectState,s=i.value.kind==="inspecting",c=i.value.kind==="focused",[u,f]=Ye([]),h=Ot(()=>{switch(ge.inspectState.value.kind){case"inspecting":{mt.value={view:"none"},ge.inspectState.value={kind:"inspect-off"};return}case"focused":{mt.value={view:"inspector"},ge.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{mt.value={view:"none"},ge.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),p=Ot(w=>{if(w.preventDefault(),w.stopPropagation(),!et.instrumentation)return;const x=!et.instrumentation.isPaused.value;et.instrumentation.isPaused.value=x;const _=ha("react-scan-options");Tn("react-scan-options",{..._,enabled:!x})},[]);Tl(()=>{ge.inspectState.value.kind==="uninitialized"&&(ge.inspectState.value={kind:"inspect-off"})});let y=null,v="#999";return s?(y=g(Tt,{name:"icon-inspect"}),v="#8e61e3"):c?(y=g(Tt,{name:"icon-focus"}),v="#8e61e3"):(y=g(Tt,{name:"icon-inspect"}),v="#999"),rg(()=>{if(mt.value.view!=="notifications")return;const w=new Set(e.map(x=>x.id));f([...w.values()])},[e.length,mt.value.view]),g("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[g("div",{className:"h-full flex items-center min-w-fit",children:g("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:h,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:v},children:y})}),g("div",{className:"h-full flex items-center justify-center",children:g("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(ge.inspectState.value.kind!=="inspect-off"&&(ge.inspectState.value={kind:"inspect-off"}),mt.value.view){case"inspector":{ge.inspectState.value={kind:"inspect-off"};const w=new Set(e.map(x=>x.id));f([...w.values()]),mt.value={view:"notifications"};return}case"notifications":{mt.value={view:"none"};return}case"none":{const w=new Set(e.map(x=>x.id));f([...w.values()]),mt.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:v},children:g(y3,{events:t.filter(w=>!u.includes(w.id)).map(w=>Bl(w)==="high"),size:16,className:$(["text-[#999]",mt.value.view==="notifications"&&"text-[#8E61E3]"])})})}),g(XN,{checked:!et.instrumentation?.isPaused.value,onChange:p,className:"place-self-center",title:"Outline Re-renders"}),et.options.value.showFPS&&g(GN,{})]})}),o5=Yi(()=>ge.inspectState.value.kind==="inspecting"),s5=Yi(()=>$("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",o5.value&&"opacity-0 duration-0 delay-0")),l5=Yi(()=>mt.value.view==="inspector"),c5=Yi(()=>mt.value.view==="notifications"),u5=()=>g("div",{className:$("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[g("div",{className:s5,children:[g(PN,{}),g("div",{className:$("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[g(Vw,{isOpen:l5,children:g(K4,{})}),g(Vw,{isOpen:c5,children:g(n5,{})})]})]}),g(i5,{})]}),Vw=({isOpen:e,children:t})=>g("div",{className:$("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",e.value&&"opacity-100 delay-150 pointer-events-auto"),children:g("div",{className:"absolute inset-0 flex",children:t})}),pu=(e,t,r)=>e+(t-e)*r,Mp={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},zo=Lr&&window.devicePixelRatio||1,d5=()=>{const e=Ne(null),t=Ne(null),r=Ne(null),i=Ne(null),s=Ne(null),c=Ne(0),u=Ne(),f=Ne(new Map),h=Ne(!1),p=Ne(0),y=(S,z,H,Z)=>{S.save(),S.strokeStyle="white",S.fillStyle="white",S.lineWidth=1.5;const re=Z*.6,A=Z*.5,Y=z+(Z-re)/2,J=H;S.beginPath(),S.arc(Y+re/2,J+A/2,re/2,Math.PI,0,!1),S.stroke();const ae=Z*.8,le=Z*.5,me=z+(Z-ae)/2,Re=H+A/2;S.fillRect(me,Re,ae,le),S.restore()},v=(S,z,H,Z)=>{if(!Z)return;const re=24,A=8,J=(Z?.type&&Wt(Z.type))??"Unknown";S.save(),S.font="12px system-ui, -apple-system, sans-serif";const le=S.measureText(J).width,me=H==="locked"?14:0,Re=H==="locked"?6:0,Qe=le+A*2+me+Re,De=z.left,Ie=z.top-re-4;if(S.fillStyle="rgb(37, 37, 38, .75)",S.beginPath(),S.roundRect(De,Ie,Qe,re,3),S.fill(),H==="locked"){const ir=De+A,Fr=Ie+(re-me)/2+2;y(S,ir,Fr,me),i.current={x:ir,y:Fr,width:me,height:me}}else i.current=null;S.fillStyle="white",S.textBaseline="middle";const on=De+A+(H==="locked"?me+Re:0);S.fillText(J,on,Ie+re/2),S.restore()},w=(S,z,H,Z)=>{if(!r.current)return;const re=r.current;z.clearRect(0,0,S.width,S.height),z.strokeStyle="rgba(142, 97, 227, 0.5)",z.fillStyle="rgba(173, 97, 230, 0.10)",H==="locked"?z.setLineDash([]):z.setLineDash([4]),z.lineWidth=1,z.fillRect(re.left,re.top,re.width,re.height),z.strokeRect(re.left,re.top,re.width,re.height),v(z,re,H,Z)},x=(S,z,H,Z,re,A)=>{const Y=et.options.value.animationSpeed,J=Mp.speeds[Y]??Mp.speeds.off,ae=le=>{if(le-p.current<Mp.frameInterval){c.current=requestAnimationFrame(ae);return}if(p.current=le,!r.current){cancelAnimationFrame(c.current);return}r.current={left:pu(r.current.left,H.left,J),top:pu(r.current.top,H.top,J),width:pu(r.current.width,H.width,J),height:pu(r.current.height,H.height,J)},w(S,z,Z,re),Math.abs(r.current.left-H.left)>.1||Math.abs(r.current.top-H.top)>.1||Math.abs(r.current.width-H.width)>.1||Math.abs(r.current.height-H.height)>.1?c.current=requestAnimationFrame(ae):(r.current=H,w(S,z,Z,re),cancelAnimationFrame(c.current),z.restore())};cancelAnimationFrame(c.current),clearTimeout(u.current),c.current=requestAnimationFrame(ae),u.current=setTimeout(()=>{cancelAnimationFrame(c.current),r.current=H,w(S,z,Z,re),z.restore()},1e3)},_=(S,z,H,Z,re)=>{if(z.save(),!r.current){r.current=H,w(S,z,Z,re),z.restore();return}x(S,z,H,Z,re)},k=async(S,z,H,Z)=>{if(!S||!z||!H)return;const{parentCompositeFiber:re}=ki(S),A=await J4(S);!re||!A||_(z,H,A,Z,re)},N=()=>{for(const S of f.current.values())S?.()},E=S=>{const z=S.getContext("2d");z&&z.clearRect(0,0,S.width,S.height),r.current=null,i.current=null,s.current=null,S.classList.remove("fade-in"),h.current=!1},R=S=>{if(!e.current||h.current)return;const z=Z=>{!e.current||Z.propertyName!=="opacity"||!h.current||(e.current.removeEventListener("transitionend",z),E(e.current),S?.())},H=f.current.get("fade-out");H&&(H(),f.current.delete("fade-out")),e.current.addEventListener("transitionend",z),f.current.set("fade-out",()=>{e.current?.removeEventListener("transitionend",z)}),h.current=!0,e.current.classList.remove("fade-in"),requestAnimationFrame(()=>{e.current?.classList.add("fade-out")})},O=()=>{e.current&&(h.current=!1,e.current.classList.remove("fade-out"),requestAnimationFrame(()=>{e.current?.classList.add("fade-in")}))},B=S=>{S!==s.current&&(s.current=S,ym.has(S.tagName)?R():O(),ge.inspectState.value={kind:"inspecting",hoveredDomElement:S})},F=()=>{!r.current||!e.current||h.current||R()},M=e2(S=>{if(ge.inspectState.peek().kind!=="inspecting"||!t.current)return;t.current.style.pointerEvents="none";const H=document.elementFromPoint(S?.clientX??0,S?.clientY??0);if(t.current.style.removeProperty("pointer-events"),clearTimeout(u.current),H&&H!==e.current){const{parentCompositeFiber:Z}=ki(H);if(Z){const re=ud(Z);if(re){B(re);return}}}F()},32),G=(S,z)=>{const H=i.current;if(!H)return!1;const Z=z.getBoundingClientRect(),re=z.width/Z.width,A=z.height/Z.height,Y=(S.clientX-Z.left)*re,J=(S.clientY-Z.top)*A,ae=Y/zo,le=J/zo;return ae>=H.x&&ae<=H.x+H.width&&le>=H.y&&le<=H.y+H.height},ie=S=>{S.kind==="focused"&&(ge.inspectState.value={kind:"inspecting",hoveredDomElement:S.focusedDomElement})},oe=S=>{const z=["react-scan-inspect-element","react-scan-power"];if(S.target instanceof HTMLElement&&z.includes(S.target.id))return;const H=s.current?.tagName;if(H&&ym.has(H))return;S.preventDefault(),S.stopPropagation();const Z=s.current??document.elementFromPoint(S.clientX,S.clientY);if(!Z)return;const re=S.composedPath().at(0);if(re instanceof HTMLElement&&z.includes(re.id)){const J=new MouseEvent(S.type,S);J.__reactScanSyntheticEvent=!0,re.dispatchEvent(J);return}const{parentCompositeFiber:A}=ki(Z);if(!A)return;const Y=ud(A);if(!Y){s.current=null,ge.inspectState.value={kind:"inspect-off"};return}ge.inspectState.value={kind:"focused",focusedDomElement:Y,fiber:A}},fe=S=>{if(S.__reactScanSyntheticEvent)return;const z=ge.inspectState.peek(),H=e.current;if(!(!H||!t.current)){if(G(S,H)){S.preventDefault(),S.stopPropagation(),ie(z);return}z.kind==="inspecting"&&oe(S)}},he=S=>{if(S.key!=="Escape")return;const z=ge.inspectState.peek();if(e.current&&document.activeElement?.id!=="react-scan-root"&&(mt.value={view:"none"},z.kind==="focused"||z.kind==="inspecting"))switch(S.preventDefault(),S.stopPropagation(),z.kind){case"focused":{O(),r.current=null,s.current=z.focusedDomElement,ge.inspectState.value={kind:"inspecting",hoveredDomElement:z.focusedDomElement};break}case"inspecting":{R(()=>{Ud.value=!1,ge.inspectState.value={kind:"inspect-off"}});break}}},ue=(S,z,H)=>{f.current.get(S.kind)?.(),t.current&&S.kind!=="inspecting"&&(t.current.style.pointerEvents="none"),c.current&&cancelAnimationFrame(c.current);let Z;switch(S.kind){case"inspect-off":R();return;case"inspecting":k(S.hoveredDomElement,z,H,"inspecting");break;case"focused":if(!S.focusedDomElement)return;s.current!==S.focusedDomElement&&(s.current=S.focusedDomElement),mt.value={view:"inspector"},k(S.focusedDomElement,z,H,"locked"),Z=ge.lastReportTime.subscribe(()=>{if(c.current&&r.current){const{parentCompositeFiber:re}=ki(S.focusedDomElement);re&&k(S.focusedDomElement,z,H,"locked")}}),Z&&f.current.set(S.kind,Z);break}},_e=(S,z)=>{const H=S.getBoundingClientRect();S.width=H.width*zo,S.height=H.height*zo,z.scale(zo,zo),z.save()},we=()=>{const S=ge.inspectState.peek(),z=e.current;if(!z)return;const H=z?.getContext("2d");H&&(cancelAnimationFrame(c.current),clearTimeout(u.current),_e(z,H),r.current=null,S.kind==="focused"&&S.focusedDomElement?k(S.focusedDomElement,z,H,"locked"):S.kind==="inspecting"&&S.hoveredDomElement&&k(S.hoveredDomElement,z,H,"inspecting"))},Oe=S=>{const z=ge.inspectState.peek(),H=e.current;H&&(z.kind==="inspecting"||G(S,H))&&(S.preventDefault(),S.stopPropagation(),S.stopImmediatePropagation())};return Fe(()=>{const S=e.current;if(!S)return;const z=S?.getContext("2d");if(!z)return;_e(S,z);const H=ge.inspectState.subscribe(Z=>{ue(Z,S,z)});return window.addEventListener("scroll",we,{passive:!0}),window.addEventListener("resize",we,{passive:!0}),document.addEventListener("pointermove",M,{passive:!0,capture:!0}),document.addEventListener("pointerdown",Oe,{capture:!0}),document.addEventListener("click",fe,{capture:!0}),document.addEventListener("keydown",he,{capture:!0}),()=>{N(),H(),window.removeEventListener("scroll",we),window.removeEventListener("resize",we),document.removeEventListener("pointermove",M,{capture:!0}),document.removeEventListener("click",fe,{capture:!0}),document.removeEventListener("pointerdown",Oe,{capture:!0}),document.removeEventListener("keydown",he,{capture:!0}),c.current&&cancelAnimationFrame(c.current),clearTimeout(u.current)}},[]),g(Ze,{children:[g("div",{ref:t,className:$("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),g("canvas",{ref:e,dir:"ltr",className:$("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},f5=class{constructor(e,t){this.width=e,this.height=t,this.maxWidth=e-ze*2,this.maxHeight=t-ze*2}rightEdge(e){return this.width-e-ze}bottomEdge(e){return this.height-e-ze}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},Do,Rl=()=>{const e=window.innerWidth,t=window.innerHeight;return Do&&Do.width===e&&Do.height===t||(Do=new f5(e,t)),Do},h5=(e,t,r,i,s)=>{if(r){if(e==="top-left")return"bottom-right";if(e==="top-right")return"bottom-left";if(e==="bottom-left")return"top-right";if(e==="bottom-right")return"top-left";const[c,u]=t.split("-");if(e==="left")return`${c}-right`;if(e==="right")return`${c}-left`;if(e==="top")return`bottom-${u}`;if(e==="bottom")return`top-${u}`}if(i){if(e==="left")return`${t.split("-")[0]}-right`;if(e==="right")return`${t.split("-")[0]}-left`}if(s){if(e==="top")return`bottom-${t.split("-")[1]}`;if(e==="bottom")return`top-${t.split("-")[1]}`}return t},hl=(e,t,r)=>{const i=getComputedStyle(document.body).direction==="rtl",s=window.innerWidth,c=window.innerHeight,u=t===Bt.width,f=u?t:Math.min(t,s-ze*2),h=u?r:Math.min(r,c-ze*2);let p,y,v=ze,w=s-f-ze,x=ze,_=c-h-ze;switch(e){case"top-right":p=i?-v:w,y=x;break;case"bottom-right":p=i?-v:w,y=_;break;case"bottom-left":p=i?-w:v,y=_;break;case"top-left":p=i?-w:v,y=x;break;default:p=v,y=x;break}return u&&(i?p=Math.min(-v,Math.max(p,-w)):p=Math.max(v,Math.min(p,w)),y=Math.max(x,Math.min(y,_))),{x:p,y}},p5=(e,t)=>{const[r,i]=t.split("-");return e!==r&&e!==i},m5=(e,t,r,i)=>r&&i?!0:!r&&!i?p5(e,t):r?e!==t.split("-")[0]:i?e!==t.split("-")[1]:!1,mu=(e,t,r)=>{const i=r?Bt.width:Bt.initialHeight,s=r?Rl().maxWidth:Rl().maxHeight,c=e+t;return Math.min(Math.max(i,c),s)},g5=(e,t,r,i,s)=>{const c=getComputedStyle(document.body).direction==="rtl",u=window.innerWidth-ze*2,f=window.innerHeight-ze*2;let h=t.width,p=t.height,y=r.x,v=r.y;if(c&&e.includes("right")){const N=-r.x+t.width-ze,E=Math.min(t.width+i,N);h=Math.min(u,Math.max(Bt.width,E)),y=r.x+(h-t.width)}if(c&&e.includes("left")){const N=window.innerWidth-r.x-ze,E=Math.min(t.width-i,N);h=Math.min(u,Math.max(Bt.width,E))}if(!c&&e.includes("right")){const N=window.innerWidth-r.x-ze,E=Math.min(t.width+i,N);h=Math.min(u,Math.max(Bt.width,E))}if(!c&&e.includes("left")){const N=r.x+t.width-ze,E=Math.min(t.width-i,N);h=Math.min(u,Math.max(Bt.width,E)),y=r.x-(h-t.width)}if(e.includes("bottom")){const N=window.innerHeight-r.y-ze,E=Math.min(t.height+s,N);p=Math.min(f,Math.max(Bt.initialHeight,E))}if(e.includes("top")){const N=r.y+t.height-ze,E=Math.min(t.height-s,N);p=Math.min(f,Math.max(Bt.initialHeight,E)),v=r.y-(p-t.height)}let w=ze,x=window.innerWidth-ze-h,_=ze,k=window.innerHeight-ze-p;return c?y=Math.min(-w,Math.max(y,-x)):y=Math.max(w,Math.min(y,x)),v=Math.max(_,Math.min(v,k)),{newSize:{width:h,height:p},newPosition:{x:y,y:v}}},v5=e=>{const t=Rl(),r={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)};let i="top-left";for(const s in r)r[s]<r[i]&&(i=s);return i},y5=(e,t,r,i,s=100)=>{const c=r!==void 0?e-r:0,u=i!==void 0?t-i:0,f=window.innerWidth/2,h=window.innerHeight/2,p=c>s,y=c<-s,v=u>s,w=u<-s;if(p||y){const x=t>h;return p?x?"bottom-right":"top-right":x?"bottom-left":"top-left"}if(v||w){const x=e>f;return v?x?"bottom-right":"bottom-left":x?"top-right":"top-left"}return e>f?t>h?"bottom-right":"top-right":t>h?"bottom-left":"top-left"},gu=({position:e})=>{const t=Ne(null),r=Ne(null),i=Ne(null),s=Ne(null);Fe(()=>{const f=t.current;if(!f)return;const h=()=>{f.classList.remove("pointer-events-none");const v=ge.inspectState.value.kind==="focused",w=mt.value.view!=="none";(v||w)&&m5(e,ye.value.corner,ye.value.dimensions.isFullWidth,ye.value.dimensions.isFullHeight)?f.classList.remove("hidden","pointer-events-none","opacity-0"):f.classList.add("hidden","pointer-events-none","opacity-0")},p=ye.subscribe(v=>{r.current!==null&&i.current!==null&&s.current!==null&&v.dimensions.width===r.current&&v.dimensions.height===i.current&&v.corner===s.current||(h(),r.current=v.dimensions.width,i.current=v.dimensions.height,s.current=v.corner)}),y=ge.inspectState.subscribe(()=>{h()});return()=>{p(),y(),r.current=null,i.current=null,s.current=null}},[]);const c=Ot(f=>{f.preventDefault(),f.stopPropagation();const h=pm.value;if(!h)return;const p=h.style,{dimensions:y}=ye.value,v=f.clientX,w=f.clientY,x=y.width,_=y.height,k=y.position;ye.value={...ye.value,dimensions:{...y,isFullWidth:!1,isFullHeight:!1,width:x,height:_,position:k}};let N=null;const E=O=>{N||(p.transition="none",N=requestAnimationFrame(()=>{const{newSize:B,newPosition:F}=g5(e,{width:x,height:_},k,O.clientX-v,O.clientY-w);p.transform=`translate3d(${F.x}px, ${F.y}px, 0)`,p.width=`${B.width}px`,p.height=`${B.height}px`;const M=Math.floor(B.width-gr/2),G=ye.value.componentsTree.width,ie=Math.min(M,Math.max(gr,G));ye.value={...ye.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:B.width,height:B.height,position:F},componentsTree:{...ye.value.componentsTree,width:ie}},N=null}))},R=()=>{N&&(cancelAnimationFrame(N),N=null),document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",R);const{dimensions:O,corner:B}=ye.value,F=Rl(),M=F.isFullWidth(O.width),G=F.isFullHeight(O.height),ie=M&&G;let oe=B;(ie||M||G)&&(oe=v5(O.position));const fe=hl(oe,O.width,O.height),he=()=>{h.removeEventListener("transitionend",he)};h.addEventListener("transitionend",he),p.transform=`translate3d(${fe.x}px, ${fe.y}px, 0)`,ye.value={...ye.value,corner:oe,dimensions:{isFullWidth:M,isFullHeight:G,width:O.width,height:O.height,position:fe},lastDimensions:{isFullWidth:M,isFullHeight:G,width:O.width,height:O.height,position:fe}},Tn(fa,{corner:oe,dimensions:ye.value.dimensions,lastDimensions:ye.value.lastDimensions,componentsTree:ye.value.componentsTree})};document.addEventListener("pointermove",E,{passive:!0}),document.addEventListener("pointerup",R)},[]),u=Ot(f=>{f.preventDefault(),f.stopPropagation();const h=pm.value;if(!h)return;const p=h.style,{dimensions:y,corner:v}=ye.value,w=Rl(),x=w.isFullWidth(y.width),_=w.isFullHeight(y.height),k=x&&_,N=(x||_)&&!k;let E=y.width,R=y.height;const O=h5(e,v,k,x,_);e==="left"||e==="right"?(E=x?y.width:w.maxWidth,N&&(E=x?Bt.width:w.maxWidth)):(R=_?y.height:w.maxHeight,N&&(R=_?Bt.initialHeight:w.maxHeight)),k&&(e==="left"||e==="right"?E=Bt.width:R=Bt.initialHeight);const B=hl(O,E,R),F={isFullWidth:w.isFullWidth(E),isFullHeight:w.isFullHeight(R),width:E,height:R,position:B},M=Math.floor(E-Bt.width/2),G=ye.value.componentsTree.width,ie=Math.floor(E*.3),oe=x?gr:(e==="left"||e==="right")&&!x?Math.min(M,Math.max(gr,ie)):Math.min(M,Math.max(gr,G));requestAnimationFrame(()=>{ye.value={corner:O,dimensions:F,lastDimensions:y,componentsTree:{...ye.value.componentsTree,width:oe}},p.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",p.width=`${E}px`,p.height=`${R}px`,p.transform=`translate3d(${B.x}px, ${B.y}px, 0)`}),Tn(fa,{corner:O,dimensions:F,lastDimensions:y,componentsTree:{...ye.value.componentsTree,width:oe}})},[]);return g("div",{ref:t,onPointerDown:c,onDblClick:u,className:$("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":e==="left","resize-right peer/right z-10":e==="right","resize-top peer/top":e==="top","resize-bottom peer/bottom":e==="bottom"}),children:g("span",{className:"resize-line-wrapper",children:g("span",{className:"resize-line",children:g(Tt,{name:"icon-ellipsis",size:18,className:$("text-neutral-400",(e==="left"||e==="right")&&"rotate-90")})})})})},Pw={horizontal:{width:20,height:48},vertical:{width:48,height:20}},b5=()=>{const e=Ne(null),t=Ne(!1),r=Ne(0),i=Ne(0),s=Ne(!1),c=Ot((w=!0)=>{if(!e.current)return;const{corner:x}=ye.value;let _,k;if(Ln.value){const oe=Ln.value.orientation||"horizontal",fe=Pw[oe];_=fe.width,k=fe.height}else if(t.current){const oe=ye.value.lastDimensions;_=mu(oe.width,0,!0),k=mu(oe.height,0,!1),s.current&&(s.current=!1)}else _=r.current,k=i.current;let E=hl(x,_,k);if(Ln.value){const{corner:oe,orientation:fe="horizontal"}=Ln.value,he=Pw[fe];switch(oe){case"top-left":E=fe==="horizontal"?{x:-1,y:ze}:{x:ze,y:-1};break;case"bottom-left":E=fe==="horizontal"?{x:-1,y:window.innerHeight-he.height-ze}:{x:ze,y:window.innerHeight-he.height+1};break;case"top-right":E=fe==="horizontal"?{x:window.innerWidth-he.width+1,y:ze}:{x:window.innerWidth-he.width-ze,y:-1};break;case"bottom-right":default:E=fe==="horizontal"?{x:window.innerWidth-he.width+1,y:window.innerHeight-he.height-ze}:{x:window.innerWidth-he.width-ze,y:window.innerHeight-he.height+1};break}}const R=_<Bt.width||k<Bt.initialHeight,O=w&&!R,B=e.current,F=B.style;let M=null;const G=()=>{gp(),B.removeEventListener("transitionend",G),M&&(cancelAnimationFrame(M),M=null)};B.addEventListener("transitionend",G),F.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",M=requestAnimationFrame(()=>{F.width=`${_}px`,F.height=`${k}px`,F.transform=`translate3d(${E.x}px, ${E.y}px, 0)`,M=null});const ie={isFullWidth:_>=window.innerWidth-ze*2,isFullHeight:k>=window.innerHeight-ze*2,width:_,height:k,position:E};ye.value={corner:x,dimensions:ie,lastDimensions:t?ye.value.lastDimensions:_>r.current?ie:ye.value.lastDimensions,componentsTree:ye.value.componentsTree},O&&Tn(fa,{corner:ye.value.corner,dimensions:ye.value.dimensions,lastDimensions:ye.value.lastDimensions,componentsTree:ye.value.componentsTree}),gp()},[]),u=Ot(w=>{if(w.preventDefault(),!e.current||w.target.closest("button"))return;const x=e.current,_=x.style,{dimensions:k}=ye.value,N=w.clientX,E=w.clientY,R=k.position.x,O=k.position.y;let B=R,F=O,M=null,G=!1,ie=N,oe=E;const fe=ue=>{M||(G=!0,ie=ue.clientX,oe=ue.clientY,M=requestAnimationFrame(()=>{const _e=ie-N,we=oe-E;B=Number(R)+_e,F=Number(O)+we,_.transition="none",_.transform=`translate3d(${B}px, ${F}px, 0)`;const Oe=B+k.width,S=F+k.height,z=Math.max(0,-B),H=Math.max(0,Oe-window.innerWidth),Z=Math.max(0,-F),re=Math.max(0,S-window.innerHeight),A=Math.min(k.width,z+H),Y=Math.min(k.height,Z+re),J=A*k.height+Y*k.width-A*Y,ae=k.width*k.height;let le=J>ae*.35;if(!le&&et.options.value.showFPS){const me=B+k.width,Re=me-100;le=me<=0||Re>=window.innerWidth||F+k.height<=0||F>=window.innerHeight}if(le){const me=B+k.width/2,Re=F+k.height/2,Qe=window.innerWidth/2,De=window.innerHeight/2;let Ie;me<Qe?Ie=Re<De?"top-left":"bottom-left":Ie=Re<De?"top-right":"bottom-right";let on;const ir=Math.max(z,H),Fr=Math.max(Z,re);on=ir>Fr?"horizontal":"vertical",ye.value={...ye.value,corner:Ie,lastDimensions:{...k,position:hl(Ie,k.width,k.height)}};const Xt={corner:Ie,orientation:on};Ln.value=Xt,Tn(Au,Xt),Tn(fa,ye.value),c(!1),document.removeEventListener("pointermove",fe),document.removeEventListener("pointerup",he),M&&(cancelAnimationFrame(M),M=null)}M=null}))},he=()=>{if(!x)return;M&&(cancelAnimationFrame(M),M=null),document.removeEventListener("pointermove",fe),document.removeEventListener("pointerup",he);const ue=Math.abs(ie-N),_e=Math.abs(oe-E),we=Math.sqrt(ue*ue+_e*_e);if(!G||we<60)return;const Oe=y5(ie,oe,N,E,ge.inspectState.value.kind==="focused"?80:40);if(Oe===ye.value.corner){_.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const H=ye.value.dimensions.position;requestAnimationFrame(()=>{_.transform=`translate3d(${H.x}px, ${H.y}px, 0)`});return}const S=hl(Oe,k.width,k.height);if(B===R&&F===O)return;const z=()=>{_.transition="none",gp(),x.removeEventListener("transitionend",z),M&&(cancelAnimationFrame(M),M=null)};x.addEventListener("transitionend",z),_.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{_.transform=`translate3d(${S.x}px, ${S.y}px, 0)`}),ye.value={corner:Oe,dimensions:{isFullWidth:k.isFullWidth,isFullHeight:k.isFullHeight,width:k.width,height:k.height,position:S},lastDimensions:ye.value.lastDimensions,componentsTree:ye.value.componentsTree},Tn(fa,{corner:Oe,dimensions:ye.value.dimensions,lastDimensions:ye.value.lastDimensions,componentsTree:ye.value.componentsTree})};document.addEventListener("pointermove",fe),document.addEventListener("pointerup",he)},[]),f=Ot(w=>{if(w.preventDefault(),!e.current||!Ln.value)return;const{corner:x,orientation:_="horizontal"}=Ln.value,k=w.clientX,N=w.clientY;let E=null,R=!1;const O=50,B=M=>{if(R||E)return;const G=M.clientX-k,ie=M.clientY-N;let oe=!1;if(_==="horizontal"?(x.endsWith("left")&&G>O||x.endsWith("right")&&G<-O)&&(oe=!0):(x.startsWith("top")&&ie>O||x.startsWith("bottom")&&ie<-O)&&(oe=!0),oe){if(R=!0,Ln.value=null,Tn(Au,null),r.current===0&&e.current)requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const fe=e.current.offsetWidth;r.current=fe||300;const he=ye.value.lastDimensions,ue=mu(he.width,0,!0),_e=mu(he.height,0,!1);let we=M.clientX-ue/2,Oe=M.clientY-_e/2;we=Math.max(ze,Math.min(we,window.innerWidth-ue-ze)),Oe=Math.max(ze,Math.min(Oe,window.innerHeight-_e-ze)),ye.value={...ye.value,dimensions:{...ye.value.dimensions,position:{x:we,y:Oe}}},c(!0);const S=ha(Ao);mt.value=S||{view:"none"},setTimeout(()=>{if(e.current){const z=new PointerEvent("pointerdown",{clientX:M.clientX,clientY:M.clientY,pointerId:M.pointerId,bubbles:!0});e.current.dispatchEvent(z)}},100)}});else{c(!0);const fe=ha(Ao);mt.value=fe||{view:"none"}}document.removeEventListener("pointermove",B),document.removeEventListener("pointerup",F)}},F=()=>{document.removeEventListener("pointermove",B),document.removeEventListener("pointerup",F)};document.addEventListener("pointermove",B),document.addEventListener("pointerup",F)},[]);Fe(()=>{if(!e.current)return;hw(Ao),Ln.value?(i.current=36,r.current=0):(e.current.style.width="min-content",i.current=36,r.current=e.current.offsetWidth),e.current.style.maxWidth=`calc(100vw - ${ze*2}px)`,e.current.style.maxHeight=`calc(100vh - ${ze*2}px)`,c(),ge.inspectState.value.kind!=="focused"&&!Ln.value&&!s.current&&(ye.value={...ye.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.current,height:i.current,position:ye.value.dimensions.position}}),pm.value=e.current;const w=ye.subscribe(N=>{if(!e.current)return;const{x:E,y:R}=N.dimensions.position,{width:O,height:B}=N.dimensions,F=e.current;requestAnimationFrame(()=>{F.style.transform=`translate3d(${E}px, ${R}px, 0)`,F.style.width=`${O}px`,F.style.height=`${B}px`})}),x=mt.subscribe(N=>{t.current=N.view!=="none",c(),Ln.value||(N.view!=="none"?Tn(Ao,N):hw(Ao))}),_=ge.inspectState.subscribe(N=>{t.current=N.kind==="focused",c()}),k=()=>{c(!0)};return window.addEventListener("resize",k,{passive:!0}),()=>{window.removeEventListener("resize",k),x(),_(),w(),Tn(fa,{...Mr,corner:ye.value.corner})}},[]);const[h,p]=Ye(!1);Fe(()=>{p(!0)},[]);const y=Ln.value;let v="";if(y){const{orientation:w="horizontal",corner:x}=y;w==="horizontal"?v=x?.endsWith("right")?"rotate-180":"":v=x?.startsWith("bottom")?"-rotate-90":"rotate-90"}return g(Ze,{children:[g(d5,{}),g(_g.Provider,{value:e.current,children:g("div",{id:"react-scan-toolbar",dir:"ltr",ref:e,onPointerDown:y?f:u,className:$("fixed inset-0",y?(()=>{const{orientation:w="horizontal",corner:x}=y;return w==="horizontal"?x?.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":x?.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",y?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:y?g("button",{type:"button",onClick:()=>{Ln.value=null,Tn(Au,null),r.current===0&&e.current&&requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const x=e.current.offsetWidth;r.current=x||300,c(!0)}});const w=ha(Ao);mt.value=w||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:g(Tt,{name:"icon-chevron-right",size:16,className:$("transition-transform",v)})}):g(Ze,{children:[g(gu,{position:"top"}),g(gu,{position:"bottom"}),g(gu,{position:"left"}),g(gu,{position:"right"}),g(u5,{})]})})})]})},_g=j1(null),w5=()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[g("title",{children:"React Scan Icons"}),g("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),g("path",{d:"M5 3a2 2 0 0 0-2 2"}),g("path",{d:"M19 3a2 2 0 0 1 2 2"}),g("path",{d:"M5 21a2 2 0 0 1-2-2"}),g("path",{d:"M9 3h1"}),g("path",{d:"M9 21h2"}),g("path",{d:"M14 3h1"}),g("path",{d:"M3 9v1"}),g("path",{d:"M21 9v2"}),g("path",{d:"M3 14v1"})]}),g("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),g("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),g("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:g("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),g("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:g("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),g("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),g("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),g("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),g("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),g("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),g("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),g("circle",{cx:"12",cy:"12",r:"1"}),g("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),g("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("circle",{cx:"12",cy:"12",r:"1"}),g("circle",{cx:"19",cy:"12",r:"1"}),g("circle",{cx:"5",cy:"12",r:"1"})]}),g("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),g("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),g("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:g("path",{d:"M20 6 9 17l-5-5"})}),g("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:g("path",{d:"m9 18 6-6-6-6"})}),g("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),g("circle",{cx:"12",cy:"12",r:"3"})]}),g("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:g("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),g("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),g("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),g("path",{d:"M9 11.2h5.7"})]}),g("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),g("path",{d:"M12 9v4"}),g("path",{d:"M12 17h.01"})]}),g("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"M2 7v10"}),g("path",{d:"M6 5v14"}),g("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),g("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("circle",{cx:"11",cy:"11",r:"8"}),g("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),g("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),g("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),g("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),g("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),g("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[g("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),g("circle",{cx:"10",cy:"13",r:"8"}),g("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),g("path",{d:"M18 3 19.1 5.2"})]})]}),x5=class extends rr{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?g("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:g("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[g("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[g(Tt,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),g("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),g("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},_5=e=>{const t=document.createElement("div");t.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=t,e.appendChild(t),ul(g(x5,{children:g(Ze,{children:[g(w5,{}),g(b5,{})]})}),t);const r=t.remove.bind(t);return t.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,t.hasChildNodes()&&(ul(null,t),ul(null,t)),r()},t},S5={version:"0.4.3"},Si=null,Js=null,E5=()=>{if(Si&&Js)return{rootContainer:Si,shadowRoot:Js};Si=document.createElement("div"),Si.id="react-scan-root",Js=Si.attachShadow({mode:"open"});const e=document.createElement("style");return e.textContent=$N,Js.appendChild(e),document.documentElement.appendChild(Si),{rootContainer:Si,shadowRoot:Js}},ge={wasDetailsOpen:Ft(!0),isInIframe:Ft(Lr&&window.self!==window.top),inspectState:Ft({kind:"uninitialized"}),monitor:Ft(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:Ft(0),interactionListeningForRenders:null,changesListeners:new Map},et={instrumentation:null,componentAllowList:null,options:Ft({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:ge,version:S5.version};Lr&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=et.version);function T5(e){return e in et.options.value}var A2=e=>{const t=[],r={};for(const i in e){if(!T5(i))continue;const s=e[i];switch(i){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof s!="boolean"?t.push(`- ${i} must be a boolean. Got "${s}"`):r[i]=s;break;case"animationSpeed":["slow","fast","off"].includes(s)?r[i]=s:t.push(`- Invalid animation speed "${s}". Using default "fast"`);break;case"onCommitStart":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onCommitStart=s;break;case"onCommitFinish":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onCommitFinish=s;break;case"onRender":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onRender=s;break;case"onPaintStart":case"onPaintFinish":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r[i]=s;break;default:t.push(`- Unknown option "${i}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join(`
`)}`),r},C5=e=>{try{const t=A2(e);if(Object.keys(t).length===0)return;const r="showToolbar"in t&&t.showToolbar!==void 0,i={...et.options.value,...t},{instrumentation:s}=et;s&&"enabled"in t&&(s.isPaused.value=t.enabled===!1),et.options.value=i;try{const c=ha("react-scan-options")?.enabled;typeof c=="boolean"&&(i.enabled=c)}catch(c){et.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",c)}return Tn("react-scan-options",i),r&&O2(!!i.showToolbar),i}catch(t){et.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",t)}},N5=()=>et.options,vu=null,Xw,Hd=()=>{if(vu!==null)return vu;Xw??=Di();for(const e of Xw.renderers.values())WT(e)==="production"&&(vu=!0);return vu},k5=()=>{try{if(!Lr||!et.runInAllEnvironments&&Hd()&&!et.options.value.dangerouslyForceRunInProduction)return;const e=ha("react-scan-options");if(e){const r=A2(e);Object.keys(r).length>0&&(et.options.value={...et.options.value,...r})}const t=N5();FN(()=>{O2(!!t.value.showToolbar)}),!ge.monitor.value&&Lr&&setTimeout(()=>{QT()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(e){et.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},O2=e=>{window.reactScanCleanupListeners?.();const t=g3(),r=R5();window.reactScanCleanupListeners=()=>{t(),r?.()};const i=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){i?.remove();return}i?.remove();const{shadowRoot:s}=E5();_5(s)},R5=()=>{try{const e=document.documentElement;return B3(e)}catch(e){et.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},A5=(e={})=>{C5(e),!(ge.isInIframe.value&&!et.options.value.allowInIframe&&!et.runInAllEnvironments)&&(e.enabled===!1&&e.showToolbar!==!0||k5())},O5=new WeakSet,zp={exports:{}},Zs={},Dp={exports:{}},jp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iw;function M5(){return Iw||(Iw=1,(function(e){function t(S,z){var H=S.length;S.push(z);e:for(;0<H;){var Z=H-1>>>1,re=S[Z];if(0<s(re,z))S[Z]=z,S[H]=re,H=Z;else break e}}function r(S){return S.length===0?null:S[0]}function i(S){if(S.length===0)return null;var z=S[0],H=S.pop();if(H!==z){S[0]=H;e:for(var Z=0,re=S.length,A=re>>>1;Z<A;){var Y=2*(Z+1)-1,J=S[Y],ae=Y+1,le=S[ae];if(0>s(J,H))ae<re&&0>s(le,J)?(S[Z]=le,S[ae]=H,Z=ae):(S[Z]=J,S[Y]=H,Z=Y);else if(ae<re&&0>s(le,H))S[Z]=le,S[ae]=H,Z=ae;else break e}}return z}function s(S,z){var H=S.sortIndex-z.sortIndex;return H!==0?H:S.id-z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var h=[],p=[],y=1,v=null,w=3,x=!1,_=!1,k=!1,N=!1,E=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function B(S){for(var z=r(p);z!==null;){if(z.callback===null)i(p);else if(z.startTime<=S)i(p),z.sortIndex=z.expirationTime,t(h,z);else break;z=r(p)}}function F(S){if(k=!1,B(S),!_)if(r(h)!==null)_=!0,M||(M=!0,ue());else{var z=r(p);z!==null&&Oe(F,z.startTime-S)}}var M=!1,G=-1,ie=5,oe=-1;function fe(){return N?!0:!(e.unstable_now()-oe<ie)}function he(){if(N=!1,M){var S=e.unstable_now();oe=S;var z=!0;try{e:{_=!1,k&&(k=!1,R(G),G=-1),x=!0;var H=w;try{t:{for(B(S),v=r(h);v!==null&&!(v.expirationTime>S&&fe());){var Z=v.callback;if(typeof Z=="function"){v.callback=null,w=v.priorityLevel;var re=Z(v.expirationTime<=S);if(S=e.unstable_now(),typeof re=="function"){v.callback=re,B(S),z=!0;break t}v===r(h)&&i(h),B(S)}else i(h);v=r(h)}if(v!==null)z=!0;else{var A=r(p);A!==null&&Oe(F,A.startTime-S),z=!1}}break e}finally{v=null,w=H,x=!1}z=void 0}}finally{z?ue():M=!1}}}var ue;if(typeof O=="function")ue=function(){O(he)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,we=_e.port2;_e.port1.onmessage=he,ue=function(){we.postMessage(null)}}else ue=function(){E(he,0)};function Oe(S,z){G=E(function(){S(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_next=function(S){switch(w){case 1:case 2:case 3:var z=3;break;default:z=w}var H=w;w=z;try{return S()}finally{w=H}},e.unstable_requestPaint=function(){N=!0},e.unstable_runWithPriority=function(S,z){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var H=w;w=S;try{return z()}finally{w=H}},e.unstable_scheduleCallback=function(S,z,H){var Z=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?Z+H:Z):H=Z,S){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=H+re,S={id:y++,callback:z,priorityLevel:S,startTime:H,expirationTime:re,sortIndex:-1},H>Z?(S.sortIndex=H,t(p,S),r(h)===null&&S===r(p)&&(k?(R(G),G=-1):k=!0,Oe(F,H-Z))):(S.sortIndex=re,t(h,S),_||x||(_=!0,M||(M=!0,ue()))),S},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(S){var z=w;return function(){var H=w;w=z;try{return S.apply(this,arguments)}finally{w=H}}}})(jp)),jp}var Gw;function z5(){return Gw||(Gw=1,Dp.exports=M5()),Dp.exports}var Lp={exports:{}},dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ww;function D5(){if(Ww)return dn;Ww=1;var e=Ld();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var i={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(h,p,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:h,containerInfo:p,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,dn.createPortal=function(h,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(h,p,null,y)},dn.flushSync=function(h){var p=u.T,y=i.p;try{if(u.T=null,i.p=2,h)return h()}finally{u.T=p,i.p=y,i.d.f()}},dn.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(h,p))},dn.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},dn.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var y=p.as,v=f(y,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?i.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:x}):y==="script"&&i.d.X(h,{crossOrigin:v,integrity:w,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},dn.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=f(p.as,p.crossOrigin);i.d.M(h,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(h)},dn.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,v=f(y,p.crossOrigin);i.d.L(h,y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},dn.preloadModule=function(h,p){if(typeof h=="string")if(p){var y=f(p.as,p.crossOrigin);i.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(h)},dn.requestFormReset=function(h){i.d.r(h)},dn.unstable_batchedUpdates=function(h,p){return h(p)},dn.useFormState=function(h,p,y){return u.H.useFormState(h,p,y)},dn.useFormStatus=function(){return u.H.useHostTransitionStatus()},dn.version="19.2.0",dn}var Qw;function M2(){if(Qw)return Lp.exports;Qw=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Lp.exports=D5(),Lp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kw;function j5(){if(Kw)return Zs;Kw=1;var e=z5(),t=Ld(),r=M2();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var a=n,o=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(o=a.return),n=a.return;while(n)}return a.tag===3?o:null}function u(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function f(n){if(n.tag===31){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function h(n){if(c(n)!==n)throw Error(i(188))}function p(n){var a=n.alternate;if(!a){if(a=c(n),a===null)throw Error(i(188));return a!==n?null:n}for(var o=n,l=a;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(l=d.return,l!==null){o=l;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return h(d),n;if(m===l)return h(d),a;m=m.sibling}throw Error(i(188))}if(o.return!==l.return)o=d,l=m;else{for(var b=!1,C=d.child;C;){if(C===o){b=!0,o=d,l=m;break}if(C===l){b=!0,l=d,o=m;break}C=C.sibling}if(!b){for(C=m.child;C;){if(C===o){b=!0,o=m,l=d;break}if(C===l){b=!0,l=m,o=d;break}C=C.sibling}if(!b)throw Error(i(189))}}if(o.alternate!==l)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:a}function y(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=y(n),a!==null)return a;n=n.sibling}return null}var v=Object.assign,w=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),O=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),oe=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),he=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=he&&n[he]||n["@@iterator"],typeof n=="function"?n:null)}var _e=Symbol.for("react.client.reference");function we(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===_e?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case E:return"Profiler";case N:return"StrictMode";case F:return"Suspense";case M:return"SuspenseList";case oe:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case _:return"Portal";case O:return n.displayName||"Context";case R:return(n._context.displayName||"Context")+".Consumer";case B:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return a=n.displayName||null,a!==null?a:we(n.type)||"Memo";case ie:a=n._payload,n=n._init;try{return we(n(a))}catch{}}return null}var Oe=Array.isArray,S=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},Z=[],re=-1;function A(n){return{current:n}}function Y(n){0>re||(n.current=Z[re],Z[re]=null,re--)}function J(n,a){re++,Z[re]=n.current,n.current=a}var ae=A(null),le=A(null),me=A(null),Re=A(null);function Qe(n,a){switch(J(me,a),J(le,n),J(ae,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?ib(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=ib(a),n=ob(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Y(ae),J(ae,n)}function De(){Y(ae),Y(le),Y(me)}function Ie(n){n.memoizedState!==null&&J(Re,n);var a=ae.current,o=ob(a,n.type);a!==o&&(J(le,n),J(ae,o))}function on(n){le.current===n&&(Y(ae),Y(le)),Re.current===n&&(Y(Re),Vs._currentValue=H)}var ir,Fr;function Xt(n){if(ir===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);ir=a&&a[1]||"",Fr=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ir+n+Fr}var es=!1;function ts(n,a){if(!n||es)return"";es=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(K){var I=K}Reflect.construct(n,[],ne)}else{try{ne.call()}catch(K){I=K}n.call(ne.prototype)}}else{try{throw Error()}catch(K){I=K}(ne=n())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(K){if(K&&I&&typeof K.stack=="string")return[K.stack,I.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],C=m[1];if(b&&C){var D=b.split(`
`),X=C.split(`
`);for(d=l=0;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;for(;d<X.length&&!X[d].includes("DetermineComponentFrameRoot");)d++;if(l===D.length||d===X.length)for(l=D.length-1,d=X.length-1;1<=l&&0<=d&&D[l]!==X[d];)d--;for(;1<=l&&0<=d;l--,d--)if(D[l]!==X[d]){if(l!==1||d!==1)do if(l--,d--,0>d||D[l]!==X[d]){var ee=`
`+D[l].replace(" at new "," at ");return n.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",n.displayName)),ee}while(1<=l&&0<=d);break}}}finally{es=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Xt(o):""}function Gl(n,a){switch(n.tag){case 26:case 27:case 5:return Xt(n.type);case 16:return Xt("Lazy");case 13:return n.child!==a&&a!==null?Xt("Suspense Fallback"):Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return ts(n.type,!1);case 11:return ts(n.type.render,!1);case 1:return ts(n.type,!0);case 31:return Xt("Activity");default:return""}}function Wl(n){try{var a="",o=null;do a+=Gl(n,o),o=n,n=n.return;while(n);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ns=Object.prototype.hasOwnProperty,rs=e.unstable_scheduleCallback,as=e.unstable_cancelCallback,$r=e.unstable_shouldYield,Za=e.unstable_requestPaint,sn=e.unstable_now,is=e.unstable_getCurrentPriorityLevel,Fn=e.unstable_ImmediatePriority,$n=e.unstable_UserBlockingPriority,ei=e.unstable_NormalPriority,Zd=e.unstable_LowPriority,Xi=e.unstable_IdlePriority,ef=e.log,or=e.unstable_setDisableYieldValue,ga=null,ln=null;function sr(n){if(typeof ef=="function"&&or(n),ln&&typeof ln.setStrictMode=="function")try{ln.setStrictMode(ga,n)}catch{}}var hn=Math.clz32?Math.clz32:Kl,Ql=Math.log,Ii=Math.LN2;function Kl(n){return n>>>=0,n===0?32:31-(Ql(n)/Ii|0)|0}var va=256,Gi=262144,ti=4194304;function qr(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ni(n,a,o){var l=n.pendingLanes;if(l===0)return 0;var d=0,m=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var C=l&134217727;return C!==0?(l=C&~m,l!==0?d=qr(l):(b&=C,b!==0?d=qr(b):o||(o=C&~n,o!==0&&(d=qr(o))))):(C=l&~m,C!==0?d=qr(C):b!==0?d=qr(b):o||(o=l&~n,o!==0&&(d=qr(o)))),d===0?0:a!==0&&a!==d&&(a&m)===0&&(m=d&-d,o=a&-a,m>=o||m===32&&(o&4194048)!==0)?a:d}function Sr(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function Wi(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jl(){var n=ti;return ti<<=1,(ti&62914560)===0&&(ti=4194304),n}function os(n){for(var a=[],o=0;31>o;o++)a.push(n);return a}function j(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function V(n,a,o,l,d,m){var b=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var C=n.entanglements,D=n.expirationTimes,X=n.hiddenUpdates;for(o=b&~o;0<o;){var ee=31-hn(o),ne=1<<ee;C[ee]=0,D[ee]=-1;var I=X[ee];if(I!==null)for(X[ee]=null,ee=0;ee<I.length;ee++){var K=I[ee];K!==null&&(K.lane&=-536870913)}o&=~ne}l!==0&&Q(n,l,0),m!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=m&~(b&~a))}function Q(n,a,o){n.pendingLanes|=a,n.suspendedLanes&=~a;var l=31-hn(a);n.entangledLanes|=a,n.entanglements[l]=n.entanglements[l]|1073741824|o&261930}function se(n,a){var o=n.entangledLanes|=a;for(n=n.entanglements;o;){var l=31-hn(o),d=1<<l;d&a|n[l]&a&&(n[l]|=a),o&=~d}}function ce(n,a){var o=a&-a;return o=(o&42)!==0?1:Se(o),(o&(n.suspendedLanes|a))!==0?0:o}function Se(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ee(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function be(){var n=z.p;return n!==0?n:(n=window.event,n===void 0?32:Rb(n.type))}function Te(n,a){var o=z.p;try{return z.p=n,a()}finally{z.p=o}}var Ce=Math.random().toString(36).slice(2),de="__reactFiber$"+Ce,pe="__reactProps$"+Ce,$e="__reactContainer$"+Ce,lt="__reactEvents$"+Ce,Dt="__reactListeners$"+Ce,Jt="__reactHandles$"+Ce,pt="__reactResources$"+Ce,rt="__reactMarker$"+Ce;function lr(n){delete n[de],delete n[pe],delete n[lt],delete n[Dt],delete n[Jt]}function qn(n){var a=n[de];if(a)return a;for(var o=n.parentNode;o;){if(a=o[$e]||o[de]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(n=hb(n);n!==null;){if(o=n[de])return o;n=hb(n)}return a}n=o,o=n.parentNode}return null}function pn(n){if(n=n[de]||n[$e]){var a=n.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return n}return null}function cn(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function Er(n){var a=n[pt];return a||(a=n[pt]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function bt(n){n[rt]=!0}var Tr=new Set,ri={};function Yn(n,a){qe(n,a),qe(n+"Capture",a)}function qe(n,a){for(ri[n]=a,n=0;n<a.length;n++)Tr.add(a[n])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yr={},Cr={};function Nt(n){return ns.call(Cr,n)?!0:ns.call(Yr,n)?!1:It.test(n)?Cr[n]=!0:(Yr[n]=!0,!1)}function Vr(n,a,o){if(Nt(a))if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+o)}}function ai(n,a,o){if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+o)}}function cr(n,a,o,l){if(l===null)n.removeAttribute(o);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(a,o,""+l)}}function Vn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Kg(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function dS(n,a,o){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,a);if(!n.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,m=l.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return d.call(this)},set:function(b){o=""+b,m.call(this,b)}}),Object.defineProperty(n,a,{enumerable:l.enumerable}),{getValue:function(){return o},setValue:function(b){o=""+b},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function tf(n){if(!n._valueTracker){var a=Kg(n)?"checked":"value";n._valueTracker=dS(n,a,""+n[a])}}function Jg(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var o=a.getValue(),l="";return n&&(l=Kg(n)?n.checked?"true":"false":n.value),n=l,n!==o?(a.setValue(n),!0):!1}function Zl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var fS=/[\n"\\]/g;function Pn(n){return n.replace(fS,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function nf(n,a,o,l,d,m,b,C){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),a!=null?b==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+Vn(a)):n.value!==""+Vn(a)&&(n.value=""+Vn(a)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),a!=null?rf(n,b,Vn(a)):o!=null?rf(n,b,Vn(o)):l!=null&&n.removeAttribute("value"),d==null&&m!=null&&(n.defaultChecked=!!m),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?n.name=""+Vn(C):n.removeAttribute("name")}function Zg(n,a,o,l,d,m,b,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),a!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||a!=null)){tf(n);return}o=o!=null?""+Vn(o):"",a=a!=null?""+Vn(a):o,C||a===n.value||(n.value=a),n.defaultValue=a}l=l??d,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=C?n.checked:!!l,n.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b),tf(n)}function rf(n,a,o){a==="number"&&Zl(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Qi(n,a,o,l){if(n=n.options,a){a={};for(var d=0;d<o.length;d++)a["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=a.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&l&&(n[o].defaultSelected=!0)}else{for(o=""+Vn(o),a=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,l&&(n[d].defaultSelected=!0);return}a!==null||n[d].disabled||(a=n[d])}a!==null&&(a.selected=!0)}}function ev(n,a,o){if(a!=null&&(a=""+Vn(a),a!==n.value&&(n.value=a),o==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=o!=null?""+Vn(o):""}function tv(n,a,o,l){if(a==null){if(l!=null){if(o!=null)throw Error(i(92));if(Oe(l)){if(1<l.length)throw Error(i(93));l=l[0]}o=l}o==null&&(o=""),a=o}o=Vn(a),n.defaultValue=o,l=n.textContent,l===o&&l!==""&&l!==null&&(n.value=l),tf(n)}function Ki(n,a){if(a){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=a;return}}n.textContent=a}var hS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nv(n,a,o){var l=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?l?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":l?n.setProperty(a,o):typeof o!="number"||o===0||hS.has(a)?a==="float"?n.cssFloat=o:n[a]=(""+o).trim():n[a]=o+"px"}function rv(n,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,o!=null){for(var l in o)!o.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var d in a)l=a[d],a.hasOwnProperty(d)&&o[d]!==l&&nv(n,d,l)}else for(var m in a)a.hasOwnProperty(m)&&nv(n,m,a[m])}function af(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ec(n){return mS.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Pr(){}var of=null;function sf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ji=null,Zi=null;function av(n){var a=pn(n);if(a&&(n=a.stateNode)){var o=n[pe]||null;e:switch(n=a.stateNode,a.type){case"input":if(nf(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Pn(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var l=o[a];if(l!==n&&l.form===n.form){var d=l[pe]||null;if(!d)throw Error(i(90));nf(l,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(a=0;a<o.length;a++)l=o[a],l.form===n.form&&Jg(l)}break e;case"textarea":ev(n,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&Qi(n,!!o.multiple,a,!1)}}}var lf=!1;function iv(n,a,o){if(lf)return n(a,o);lf=!0;try{var l=n(a);return l}finally{if(lf=!1,(Ji!==null||Zi!==null)&&($c(),Ji&&(a=Ji,n=Zi,Zi=Ji=null,av(a),n)))for(a=0;a<n.length;a++)av(n[a])}}function ss(n,a){var o=n.stateNode;if(o===null)return null;var l=o[pe]||null;if(l===null)return null;o=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var Xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cf=!1;if(Xr)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){cf=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{cf=!1}var ya=null,uf=null,tc=null;function ov(){if(tc)return tc;var n,a=uf,o=a.length,l,d="value"in ya?ya.value:ya.textContent,m=d.length;for(n=0;n<o&&a[n]===d[n];n++);var b=o-n;for(l=1;l<=b&&a[o-l]===d[m-l];l++);return tc=d.slice(n,1<l?1-l:void 0)}function nc(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function rc(){return!0}function sv(){return!1}function bn(n){function a(o,l,d,m,b){this._reactName=o,this._targetInst=d,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var C in n)n.hasOwnProperty(C)&&(o=n[C],this[C]=o?o(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?rc:sv,this.isPropagationStopped=sv,this}return v(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=rc)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=rc)},persist:function(){},isPersistent:rc}),a}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=bn(ii),cs=v({},ii,{view:0,detail:0}),gS=bn(cs),df,ff,us,ic=v({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==us&&(us&&n.type==="mousemove"?(df=n.screenX-us.screenX,ff=n.screenY-us.screenY):ff=df=0,us=n),df)},movementY:function(n){return"movementY"in n?n.movementY:ff}}),lv=bn(ic),vS=v({},ic,{dataTransfer:0}),yS=bn(vS),bS=v({},cs,{relatedTarget:0}),hf=bn(bS),wS=v({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),xS=bn(wS),_S=v({},ii,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),SS=bn(_S),ES=v({},ii,{data:0}),cv=bn(ES),TS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kS(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=NS[n])?!!a[n]:!1}function pf(){return kS}var RS=v({},cs,{key:function(n){if(n.key){var a=TS[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=nc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?CS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(n){return n.type==="keypress"?nc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?nc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),AS=bn(RS),OS=v({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uv=bn(OS),MS=v({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),zS=bn(MS),DS=v({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),jS=bn(DS),LS=v({},ic,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),US=bn(LS),HS=v({},ii,{newState:0,oldState:0}),BS=bn(HS),FS=[9,13,27,32],mf=Xr&&"CompositionEvent"in window,ds=null;Xr&&"documentMode"in document&&(ds=document.documentMode);var $S=Xr&&"TextEvent"in window&&!ds,dv=Xr&&(!mf||ds&&8<ds&&11>=ds),fv=" ",hv=!1;function pv(n,a){switch(n){case"keyup":return FS.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var eo=!1;function qS(n,a){switch(n){case"compositionend":return mv(a);case"keypress":return a.which!==32?null:(hv=!0,fv);case"textInput":return n=a.data,n===fv&&hv?null:n;default:return null}}function YS(n,a){if(eo)return n==="compositionend"||!mf&&pv(n,a)?(n=ov(),tc=uf=ya=null,eo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return dv&&a.locale!=="ko"?null:a.data;default:return null}}var VS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gv(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!VS[n.type]:a==="textarea"}function vv(n,a,o,l){Ji?Zi?Zi.push(l):Zi=[l]:Ji=l,a=Gc(a,"onChange"),0<a.length&&(o=new ac("onChange","change",null,o,l),n.push({event:o,listeners:a}))}var fs=null,hs=null;function PS(n){Z0(n,0)}function oc(n){var a=cn(n);if(Jg(a))return n}function yv(n,a){if(n==="change")return a}var bv=!1;if(Xr){var gf;if(Xr){var vf="oninput"in document;if(!vf){var wv=document.createElement("div");wv.setAttribute("oninput","return;"),vf=typeof wv.oninput=="function"}gf=vf}else gf=!1;bv=gf&&(!document.documentMode||9<document.documentMode)}function xv(){fs&&(fs.detachEvent("onpropertychange",_v),hs=fs=null)}function _v(n){if(n.propertyName==="value"&&oc(hs)){var a=[];vv(a,hs,n,sf(n)),iv(PS,a)}}function XS(n,a,o){n==="focusin"?(xv(),fs=a,hs=o,fs.attachEvent("onpropertychange",_v)):n==="focusout"&&xv()}function IS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return oc(hs)}function GS(n,a){if(n==="click")return oc(a)}function WS(n,a){if(n==="input"||n==="change")return oc(a)}function QS(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var Rn=typeof Object.is=="function"?Object.is:QS;function ps(n,a){if(Rn(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var o=Object.keys(n),l=Object.keys(a);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var d=o[l];if(!ns.call(a,d)||!Rn(n[d],a[d]))return!1}return!0}function Sv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ev(n,a){var o=Sv(n);n=0;for(var l;o;){if(o.nodeType===3){if(l=n+o.textContent.length,n<=a&&l>=a)return{node:o,offset:a-n};n=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Sv(o)}}function Tv(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?Tv(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function Cv(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Zl(n.document);a instanceof n.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)n=a.contentWindow;else break;a=Zl(n.document)}return a}function yf(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var KS=Xr&&"documentMode"in document&&11>=document.documentMode,to=null,bf=null,ms=null,wf=!1;function Nv(n,a,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;wf||to==null||to!==Zl(l)||(l=to,"selectionStart"in l&&yf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ms&&ps(ms,l)||(ms=l,l=Gc(bf,"onSelect"),0<l.length&&(a=new ac("onSelect","select",null,a,o),n.push({event:a,listeners:l}),a.target=to)))}function oi(n,a){var o={};return o[n.toLowerCase()]=a.toLowerCase(),o["Webkit"+n]="webkit"+a,o["Moz"+n]="moz"+a,o}var no={animationend:oi("Animation","AnimationEnd"),animationiteration:oi("Animation","AnimationIteration"),animationstart:oi("Animation","AnimationStart"),transitionrun:oi("Transition","TransitionRun"),transitionstart:oi("Transition","TransitionStart"),transitioncancel:oi("Transition","TransitionCancel"),transitionend:oi("Transition","TransitionEnd")},xf={},kv={};Xr&&(kv=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function si(n){if(xf[n])return xf[n];if(!no[n])return n;var a=no[n],o;for(o in a)if(a.hasOwnProperty(o)&&o in kv)return xf[n]=a[o];return n}var Rv=si("animationend"),Av=si("animationiteration"),Ov=si("animationstart"),JS=si("transitionrun"),ZS=si("transitionstart"),eE=si("transitioncancel"),Mv=si("transitionend"),zv=new Map,_f="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_f.push("scrollEnd");function ur(n,a){zv.set(n,a),Yn(a,[n])}var sc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Xn=[],ro=0,Sf=0;function lc(){for(var n=ro,a=Sf=ro=0;a<n;){var o=Xn[a];Xn[a++]=null;var l=Xn[a];Xn[a++]=null;var d=Xn[a];Xn[a++]=null;var m=Xn[a];if(Xn[a++]=null,l!==null&&d!==null){var b=l.pending;b===null?d.next=d:(d.next=b.next,b.next=d),l.pending=d}m!==0&&Dv(o,d,m)}}function cc(n,a,o,l){Xn[ro++]=n,Xn[ro++]=a,Xn[ro++]=o,Xn[ro++]=l,Sf|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Ef(n,a,o,l){return cc(n,a,o,l),uc(n)}function li(n,a){return cc(n,null,null,a),uc(n)}function Dv(n,a,o){n.lanes|=o;var l=n.alternate;l!==null&&(l.lanes|=o);for(var d=!1,m=n.return;m!==null;)m.childLanes|=o,l=m.alternate,l!==null&&(l.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(d=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,d&&a!==null&&(d=31-hn(o),n=m.hiddenUpdates,l=n[d],l===null?n[d]=[a]:l.push(a),a.lane=o|536870912),m):null}function uc(n){if(50<Us)throw Us=0,zh=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var ao={};function tE(n,a,o,l){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(n,a,o,l){return new tE(n,a,o,l)}function Tf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ir(n,a){var o=n.alternate;return o===null?(o=An(n.tag,a,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=a,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,a=n.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function jv(n,a){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,a=o.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function dc(n,a,o,l,d,m){var b=0;if(l=n,typeof n=="function")Tf(n)&&(b=1);else if(typeof n=="string")b=oT(n,o,ae.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case oe:return n=An(31,o,a,d),n.elementType=oe,n.lanes=m,n;case k:return ci(o.children,d,m,a);case N:b=8,d|=24;break;case E:return n=An(12,o,a,d|2),n.elementType=E,n.lanes=m,n;case F:return n=An(13,o,a,d),n.elementType=F,n.lanes=m,n;case M:return n=An(19,o,a,d),n.elementType=M,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O:b=10;break e;case R:b=9;break e;case B:b=11;break e;case G:b=14;break e;case ie:b=16,l=null;break e}b=29,o=Error(i(130,n===null?"null":typeof n,"")),l=null}return a=An(b,o,a,d),a.elementType=n,a.type=l,a.lanes=m,a}function ci(n,a,o,l){return n=An(7,n,l,a),n.lanes=o,n}function Cf(n,a,o){return n=An(6,n,null,a),n.lanes=o,n}function Lv(n){var a=An(18,null,null,0);return a.stateNode=n,a}function Nf(n,a,o){return a=An(4,n.children!==null?n.children:[],n.key,a),a.lanes=o,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Uv=new WeakMap;function In(n,a){if(typeof n=="object"&&n!==null){var o=Uv.get(n);return o!==void 0?o:(a={value:n,source:a,stack:Wl(a)},Uv.set(n,a),a)}return{value:n,source:a,stack:Wl(a)}}var io=[],oo=0,fc=null,gs=0,Gn=[],Wn=0,ba=null,Nr=1,kr="";function Gr(n,a){io[oo++]=gs,io[oo++]=fc,fc=n,gs=a}function Hv(n,a,o){Gn[Wn++]=Nr,Gn[Wn++]=kr,Gn[Wn++]=ba,ba=n;var l=Nr;n=kr;var d=32-hn(l)-1;l&=~(1<<d),o+=1;var m=32-hn(a)+d;if(30<m){var b=d-d%5;m=(l&(1<<b)-1).toString(32),l>>=b,d-=b,Nr=1<<32-hn(a)+d|o<<d|l,kr=m+n}else Nr=1<<m|o<<d|l,kr=n}function kf(n){n.return!==null&&(Gr(n,1),Hv(n,1,0))}function Rf(n){for(;n===fc;)fc=io[--oo],io[oo]=null,gs=io[--oo],io[oo]=null;for(;n===ba;)ba=Gn[--Wn],Gn[Wn]=null,kr=Gn[--Wn],Gn[Wn]=null,Nr=Gn[--Wn],Gn[Wn]=null}function Bv(n,a){Gn[Wn++]=Nr,Gn[Wn++]=kr,Gn[Wn++]=ba,Nr=a.id,kr=a.overflow,ba=n}var Zt=null,gt=null,Ke=!1,wa=null,Qn=!1,Af=Error(i(519));function xa(n){var a=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vs(In(a,n)),Af}function Fv(n){var a=n.stateNode,o=n.type,l=n.memoizedProps;switch(a[de]=n,a[pe]=l,o){case"dialog":Pe("cancel",a),Pe("close",a);break;case"iframe":case"object":case"embed":Pe("load",a);break;case"video":case"audio":for(o=0;o<Bs.length;o++)Pe(Bs[o],a);break;case"source":Pe("error",a);break;case"img":case"image":case"link":Pe("error",a),Pe("load",a);break;case"details":Pe("toggle",a);break;case"input":Pe("invalid",a),Zg(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Pe("invalid",a);break;case"textarea":Pe("invalid",a),tv(a,l.value,l.defaultValue,l.children)}o=l.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||l.suppressHydrationWarning===!0||rb(a.textContent,o)?(l.popover!=null&&(Pe("beforetoggle",a),Pe("toggle",a)),l.onScroll!=null&&Pe("scroll",a),l.onScrollEnd!=null&&Pe("scrollend",a),l.onClick!=null&&(a.onclick=Pr),a=!0):a=!1,a||xa(n,!0)}function $v(n){for(Zt=n.return;Zt;)switch(Zt.tag){case 5:case 31:case 13:Qn=!1;return;case 27:case 3:Qn=!0;return;default:Zt=Zt.return}}function so(n){if(n!==Zt)return!1;if(!Ke)return $v(n),Ke=!0,!1;var a=n.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Gh(n.type,n.memoizedProps)),o=!o),o&&gt&&xa(n),$v(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));gt=fb(n)}else if(a===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));gt=fb(n)}else a===27?(a=gt,ja(n.type)?(n=Zh,Zh=null,gt=n):gt=a):gt=Zt?Jn(n.stateNode.nextSibling):null;return!0}function ui(){gt=Zt=null,Ke=!1}function Of(){var n=wa;return n!==null&&(Sn===null?Sn=n:Sn.push.apply(Sn,n),wa=null),n}function vs(n){wa===null?wa=[n]:wa.push(n)}var Mf=A(null),di=null,Wr=null;function _a(n,a,o){J(Mf,a._currentValue),a._currentValue=o}function Qr(n){n._currentValue=Mf.current,Y(Mf)}function zf(n,a,o){for(;n!==null;){var l=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),n===o)break;n=n.return}}function Df(n,a,o,l){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var m=d.dependencies;if(m!==null){var b=d.child;m=m.firstContext;e:for(;m!==null;){var C=m;m=d;for(var D=0;D<a.length;D++)if(C.context===a[D]){m.lanes|=o,C=m.alternate,C!==null&&(C.lanes|=o),zf(m.return,o,n),l||(b=null);break e}m=C.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(i(341));b.lanes|=o,m=b.alternate,m!==null&&(m.lanes|=o),zf(b,o,n),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===n){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function lo(n,a,o,l){n=null;for(var d=a,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var C=d.type;Rn(d.pendingProps.value,b.value)||(n!==null?n.push(C):n=[C])}}else if(d===Re.current){if(b=d.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(Vs):n=[Vs])}d=d.return}n!==null&&Df(a,n,o,l),a.flags|=262144}function hc(n){for(n=n.firstContext;n!==null;){if(!Rn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function fi(n){di=n,Wr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function en(n){return qv(di,n)}function pc(n,a){return di===null&&fi(n),qv(n,a)}function qv(n,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},Wr===null){if(n===null)throw Error(i(308));Wr=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Wr=Wr.next=a;return o}var nE=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(o,l){n.push(l)}};this.abort=function(){a.aborted=!0,n.forEach(function(o){return o()})}},rE=e.unstable_scheduleCallback,aE=e.unstable_NormalPriority,jt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jf(){return{controller:new nE,data:new Map,refCount:0}}function ys(n){n.refCount--,n.refCount===0&&rE(aE,function(){n.controller.abort()})}var bs=null,Lf=0,co=0,uo=null;function iE(n,a){if(bs===null){var o=bs=[];Lf=0,co=Bh(),uo={status:"pending",value:void 0,then:function(l){o.push(l)}}}return Lf++,a.then(Yv,Yv),a}function Yv(){if(--Lf===0&&bs!==null){uo!==null&&(uo.status="fulfilled");var n=bs;bs=null,co=0,uo=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function oE(n,a){var o=[],l={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return n.then(function(){l.status="fulfilled",l.value=a;for(var d=0;d<o.length;d++)(0,o[d])(a)},function(d){for(l.status="rejected",l.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),l}var Vv=S.S;S.S=function(n,a){N0=sn(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&iE(n,a),Vv!==null&&Vv(n,a)};var hi=A(null);function Uf(){var n=hi.current;return n!==null?n:ft.pooledCache}function mc(n,a){a===null?J(hi,hi.current):J(hi,a.pool)}function Pv(){var n=Uf();return n===null?null:{parent:jt._currentValue,pool:n}}var fo=Error(i(460)),Hf=Error(i(474)),gc=Error(i(542)),vc={then:function(){}};function Xv(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Iv(n,a,o){switch(o=n[o],o===void 0?n.push(a):o!==a&&(a.then(Pr,Pr),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Wv(n),n;default:if(typeof a.status=="string")a.then(Pr,Pr);else{if(n=ft,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(l){if(a.status==="pending"){var d=a;d.status="fulfilled",d.value=l}},function(l){if(a.status==="pending"){var d=a;d.status="rejected",d.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Wv(n),n}throw mi=a,fo}}function pi(n){try{var a=n._init;return a(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(mi=o,fo):o}}var mi=null;function Gv(){if(mi===null)throw Error(i(459));var n=mi;return mi=null,n}function Wv(n){if(n===fo||n===gc)throw Error(i(483))}var ho=null,ws=0;function yc(n){var a=ws;return ws+=1,ho===null&&(ho=[]),Iv(ho,n,a)}function xs(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function bc(n,a){throw a.$$typeof===w?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function Qv(n){function a(q,L){if(n){var P=q.deletions;P===null?(q.deletions=[L],q.flags|=16):P.push(L)}}function o(q,L){if(!n)return null;for(;L!==null;)a(q,L),L=L.sibling;return null}function l(q){for(var L=new Map;q!==null;)q.key!==null?L.set(q.key,q):L.set(q.index,q),q=q.sibling;return L}function d(q,L){return q=Ir(q,L),q.index=0,q.sibling=null,q}function m(q,L,P){return q.index=P,n?(P=q.alternate,P!==null?(P=P.index,P<L?(q.flags|=67108866,L):P):(q.flags|=67108866,L)):(q.flags|=1048576,L)}function b(q){return n&&q.alternate===null&&(q.flags|=67108866),q}function C(q,L,P,te){return L===null||L.tag!==6?(L=Cf(P,q.mode,te),L.return=q,L):(L=d(L,P),L.return=q,L)}function D(q,L,P,te){var ke=P.type;return ke===k?ee(q,L,P.props.children,te,P.key):L!==null&&(L.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===ie&&pi(ke)===L.type)?(L=d(L,P.props),xs(L,P),L.return=q,L):(L=dc(P.type,P.key,P.props,null,q.mode,te),xs(L,P),L.return=q,L)}function X(q,L,P,te){return L===null||L.tag!==4||L.stateNode.containerInfo!==P.containerInfo||L.stateNode.implementation!==P.implementation?(L=Nf(P,q.mode,te),L.return=q,L):(L=d(L,P.children||[]),L.return=q,L)}function ee(q,L,P,te,ke){return L===null||L.tag!==7?(L=ci(P,q.mode,te,ke),L.return=q,L):(L=d(L,P),L.return=q,L)}function ne(q,L,P){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Cf(""+L,q.mode,P),L.return=q,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case x:return P=dc(L.type,L.key,L.props,null,q.mode,P),xs(P,L),P.return=q,P;case _:return L=Nf(L,q.mode,P),L.return=q,L;case ie:return L=pi(L),ne(q,L,P)}if(Oe(L)||ue(L))return L=ci(L,q.mode,P,null),L.return=q,L;if(typeof L.then=="function")return ne(q,yc(L),P);if(L.$$typeof===O)return ne(q,pc(q,L),P);bc(q,L)}return null}function I(q,L,P,te){var ke=L!==null?L.key:null;if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return ke!==null?null:C(q,L,""+P,te);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case x:return P.key===ke?D(q,L,P,te):null;case _:return P.key===ke?X(q,L,P,te):null;case ie:return P=pi(P),I(q,L,P,te)}if(Oe(P)||ue(P))return ke!==null?null:ee(q,L,P,te,null);if(typeof P.then=="function")return I(q,L,yc(P),te);if(P.$$typeof===O)return I(q,L,pc(q,P),te);bc(q,P)}return null}function K(q,L,P,te,ke){if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return q=q.get(P)||null,C(L,q,""+te,ke);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case x:return q=q.get(te.key===null?P:te.key)||null,D(L,q,te,ke);case _:return q=q.get(te.key===null?P:te.key)||null,X(L,q,te,ke);case ie:return te=pi(te),K(q,L,P,te,ke)}if(Oe(te)||ue(te))return q=q.get(P)||null,ee(L,q,te,ke,null);if(typeof te.then=="function")return K(q,L,P,yc(te),ke);if(te.$$typeof===O)return K(q,L,P,pc(L,te),ke);bc(L,te)}return null}function ve(q,L,P,te){for(var ke=null,tt=null,xe=L,He=L=0,We=null;xe!==null&&He<P.length;He++){xe.index>He?(We=xe,xe=null):We=xe.sibling;var nt=I(q,xe,P[He],te);if(nt===null){xe===null&&(xe=We);break}n&&xe&&nt.alternate===null&&a(q,xe),L=m(nt,L,He),tt===null?ke=nt:tt.sibling=nt,tt=nt,xe=We}if(He===P.length)return o(q,xe),Ke&&Gr(q,He),ke;if(xe===null){for(;He<P.length;He++)xe=ne(q,P[He],te),xe!==null&&(L=m(xe,L,He),tt===null?ke=xe:tt.sibling=xe,tt=xe);return Ke&&Gr(q,He),ke}for(xe=l(xe);He<P.length;He++)We=K(xe,q,He,P[He],te),We!==null&&(n&&We.alternate!==null&&xe.delete(We.key===null?He:We.key),L=m(We,L,He),tt===null?ke=We:tt.sibling=We,tt=We);return n&&xe.forEach(function(Fa){return a(q,Fa)}),Ke&&Gr(q,He),ke}function Ae(q,L,P,te){if(P==null)throw Error(i(151));for(var ke=null,tt=null,xe=L,He=L=0,We=null,nt=P.next();xe!==null&&!nt.done;He++,nt=P.next()){xe.index>He?(We=xe,xe=null):We=xe.sibling;var Fa=I(q,xe,nt.value,te);if(Fa===null){xe===null&&(xe=We);break}n&&xe&&Fa.alternate===null&&a(q,xe),L=m(Fa,L,He),tt===null?ke=Fa:tt.sibling=Fa,tt=Fa,xe=We}if(nt.done)return o(q,xe),Ke&&Gr(q,He),ke;if(xe===null){for(;!nt.done;He++,nt=P.next())nt=ne(q,nt.value,te),nt!==null&&(L=m(nt,L,He),tt===null?ke=nt:tt.sibling=nt,tt=nt);return Ke&&Gr(q,He),ke}for(xe=l(xe);!nt.done;He++,nt=P.next())nt=K(xe,q,He,nt.value,te),nt!==null&&(n&&nt.alternate!==null&&xe.delete(nt.key===null?He:nt.key),L=m(nt,L,He),tt===null?ke=nt:tt.sibling=nt,tt=nt);return n&&xe.forEach(function(vT){return a(q,vT)}),Ke&&Gr(q,He),ke}function dt(q,L,P,te){if(typeof P=="object"&&P!==null&&P.type===k&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case x:e:{for(var ke=P.key;L!==null;){if(L.key===ke){if(ke=P.type,ke===k){if(L.tag===7){o(q,L.sibling),te=d(L,P.props.children),te.return=q,q=te;break e}}else if(L.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===ie&&pi(ke)===L.type){o(q,L.sibling),te=d(L,P.props),xs(te,P),te.return=q,q=te;break e}o(q,L);break}else a(q,L);L=L.sibling}P.type===k?(te=ci(P.props.children,q.mode,te,P.key),te.return=q,q=te):(te=dc(P.type,P.key,P.props,null,q.mode,te),xs(te,P),te.return=q,q=te)}return b(q);case _:e:{for(ke=P.key;L!==null;){if(L.key===ke)if(L.tag===4&&L.stateNode.containerInfo===P.containerInfo&&L.stateNode.implementation===P.implementation){o(q,L.sibling),te=d(L,P.children||[]),te.return=q,q=te;break e}else{o(q,L);break}else a(q,L);L=L.sibling}te=Nf(P,q.mode,te),te.return=q,q=te}return b(q);case ie:return P=pi(P),dt(q,L,P,te)}if(Oe(P))return ve(q,L,P,te);if(ue(P)){if(ke=ue(P),typeof ke!="function")throw Error(i(150));return P=ke.call(P),Ae(q,L,P,te)}if(typeof P.then=="function")return dt(q,L,yc(P),te);if(P.$$typeof===O)return dt(q,L,pc(q,P),te);bc(q,P)}return typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint"?(P=""+P,L!==null&&L.tag===6?(o(q,L.sibling),te=d(L,P),te.return=q,q=te):(o(q,L),te=Cf(P,q.mode,te),te.return=q,q=te),b(q)):o(q,L)}return function(q,L,P,te){try{ws=0;var ke=dt(q,L,P,te);return ho=null,ke}catch(xe){if(xe===fo||xe===gc)throw xe;var tt=An(29,xe,null,q.mode);return tt.lanes=te,tt.return=q,tt}finally{}}}var gi=Qv(!0),Kv=Qv(!1),Sa=!1;function Bf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ff(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ea(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ta(n,a,o){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(at&2)!==0){var d=l.pending;return d===null?a.next=a:(a.next=d.next,d.next=a),l.pending=a,a=uc(n),Dv(n,null,o),a}return cc(n,l,a,o),uc(n)}function _s(n,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var l=a.lanes;l&=n.pendingLanes,o|=l,a.lanes=o,se(n,o)}}function $f(n,a){var o=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?d=m=a:m=m.next=a}else d=m=a;o={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=a:n.next=a,o.lastBaseUpdate=a}var qf=!1;function Ss(){if(qf){var n=uo;if(n!==null)throw n}}function Es(n,a,o,l){qf=!1;var d=n.updateQueue;Sa=!1;var m=d.firstBaseUpdate,b=d.lastBaseUpdate,C=d.shared.pending;if(C!==null){d.shared.pending=null;var D=C,X=D.next;D.next=null,b===null?m=X:b.next=X,b=D;var ee=n.alternate;ee!==null&&(ee=ee.updateQueue,C=ee.lastBaseUpdate,C!==b&&(C===null?ee.firstBaseUpdate=X:C.next=X,ee.lastBaseUpdate=D))}if(m!==null){var ne=d.baseState;b=0,ee=X=D=null,C=m;do{var I=C.lane&-536870913,K=I!==C.lane;if(K?(Ge&I)===I:(l&I)===I){I!==0&&I===co&&(qf=!0),ee!==null&&(ee=ee.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var ve=n,Ae=C;I=a;var dt=o;switch(Ae.tag){case 1:if(ve=Ae.payload,typeof ve=="function"){ne=ve.call(dt,ne,I);break e}ne=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=Ae.payload,I=typeof ve=="function"?ve.call(dt,ne,I):ve,I==null)break e;ne=v({},ne,I);break e;case 2:Sa=!0}}I=C.callback,I!==null&&(n.flags|=64,K&&(n.flags|=8192),K=d.callbacks,K===null?d.callbacks=[I]:K.push(I))}else K={lane:I,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ee===null?(X=ee=K,D=ne):ee=ee.next=K,b|=I;if(C=C.next,C===null){if(C=d.shared.pending,C===null)break;K=C,C=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);ee===null&&(D=ne),d.baseState=D,d.firstBaseUpdate=X,d.lastBaseUpdate=ee,m===null&&(d.shared.lanes=0),Aa|=b,n.lanes=b,n.memoizedState=ne}}function Jv(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function Zv(n,a){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Jv(o[n],a)}var po=A(null),wc=A(0);function ey(n,a){n=ia,J(wc,n),J(po,a),ia=n|a.baseLanes}function Yf(){J(wc,ia),J(po,po.current)}function Vf(){ia=wc.current,Y(po),Y(wc)}var On=A(null),Kn=null;function Ca(n){var a=n.alternate;J(kt,kt.current&1),J(On,n),Kn===null&&(a===null||po.current!==null||a.memoizedState!==null)&&(Kn=n)}function Pf(n){J(kt,kt.current),J(On,n),Kn===null&&(Kn=n)}function ty(n){n.tag===22?(J(kt,kt.current),J(On,n),Kn===null&&(Kn=n)):Na()}function Na(){J(kt,kt.current),J(On,On.current)}function Mn(n){Y(On),Kn===n&&(Kn=null),Y(kt)}var kt=A(0);function xc(n){for(var a=n;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Kh(o)||Jh(o)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Kr=0,Le=null,ct=null,Lt=null,_c=!1,mo=!1,vi=!1,Sc=0,Ts=0,go=null,sE=0;function St(){throw Error(i(321))}function Xf(n,a){if(a===null)return!1;for(var o=0;o<a.length&&o<n.length;o++)if(!Rn(n[o],a[o]))return!1;return!0}function If(n,a,o,l,d,m){return Kr=m,Le=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,S.H=n===null||n.memoizedState===null?Hy:lh,vi=!1,m=o(l,d),vi=!1,mo&&(m=ry(a,o,l,d)),ny(n),m}function ny(n){S.H=ks;var a=ct!==null&&ct.next!==null;if(Kr=0,Lt=ct=Le=null,_c=!1,Ts=0,go=null,a)throw Error(i(300));n===null||Ut||(n=n.dependencies,n!==null&&hc(n)&&(Ut=!0))}function ry(n,a,o,l){Le=n;var d=0;do{if(mo&&(go=null),Ts=0,mo=!1,25<=d)throw Error(i(301));if(d+=1,Lt=ct=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}S.H=By,m=a(o,l)}while(mo);return m}function lE(){var n=S.H,a=n.useState()[0];return a=typeof a.then=="function"?Cs(a):a,n=n.useState()[0],(ct!==null?ct.memoizedState:null)!==n&&(Le.flags|=1024),a}function Gf(){var n=Sc!==0;return Sc=0,n}function Wf(n,a,o){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~o}function Qf(n){if(_c){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}_c=!1}Kr=0,Lt=ct=Le=null,mo=!1,Ts=Sc=0,go=null}function mn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?Le.memoizedState=Lt=n:Lt=Lt.next=n,Lt}function Rt(){if(ct===null){var n=Le.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var a=Lt===null?Le.memoizedState:Lt.next;if(a!==null)Lt=a,ct=n;else{if(n===null)throw Le.alternate===null?Error(i(467)):Error(i(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},Lt===null?Le.memoizedState=Lt=n:Lt=Lt.next=n}return Lt}function Ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cs(n){var a=Ts;return Ts+=1,go===null&&(go=[]),n=Iv(go,n,a),a=Le,(Lt===null?a.memoizedState:Lt.next)===null&&(a=a.alternate,S.H=a===null||a.memoizedState===null?Hy:lh),n}function Tc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Cs(n);if(n.$$typeof===O)return en(n)}throw Error(i(438,String(n)))}function Kf(n){var a=null,o=Le.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var l=Le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(d){return d.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=Ec(),Le.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(n),l=0;l<n;l++)o[l]=fe;return a.index++,o}function Jr(n,a){return typeof a=="function"?a(n):a}function Cc(n){var a=Rt();return Jf(a,ct,n)}function Jf(n,a,o){var l=n.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=o;var d=n.baseQueue,m=l.pending;if(m!==null){if(d!==null){var b=d.next;d.next=m.next,m.next=b}a.baseQueue=d=m,l.pending=null}if(m=n.baseState,d===null)n.memoizedState=m;else{a=d.next;var C=b=null,D=null,X=a,ee=!1;do{var ne=X.lane&-536870913;if(ne!==X.lane?(Ge&ne)===ne:(Kr&ne)===ne){var I=X.revertLane;if(I===0)D!==null&&(D=D.next={lane:0,revertLane:0,gesture:null,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),ne===co&&(ee=!0);else if((Kr&I)===I){X=X.next,I===co&&(ee=!0);continue}else ne={lane:0,revertLane:X.revertLane,gesture:null,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},D===null?(C=D=ne,b=m):D=D.next=ne,Le.lanes|=I,Aa|=I;ne=X.action,vi&&o(m,ne),m=X.hasEagerState?X.eagerState:o(m,ne)}else I={lane:ne,revertLane:X.revertLane,gesture:X.gesture,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},D===null?(C=D=I,b=m):D=D.next=I,Le.lanes|=ne,Aa|=ne;X=X.next}while(X!==null&&X!==a);if(D===null?b=m:D.next=C,!Rn(m,n.memoizedState)&&(Ut=!0,ee&&(o=uo,o!==null)))throw o;n.memoizedState=m,n.baseState=b,n.baseQueue=D,l.lastRenderedState=m}return d===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Zf(n){var a=Rt(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var l=o.dispatch,d=o.pending,m=a.memoizedState;if(d!==null){o.pending=null;var b=d=d.next;do m=n(m,b.action),b=b.next;while(b!==d);Rn(m,a.memoizedState)||(Ut=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),o.lastRenderedState=m}return[m,l]}function ay(n,a,o){var l=Le,d=Rt(),m=Ke;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=a();var b=!Rn((ct||d).memoizedState,o);if(b&&(d.memoizedState=o,Ut=!0),d=d.queue,nh(sy.bind(null,l,d,n),[n]),d.getSnapshot!==a||b||Lt!==null&&Lt.memoizedState.tag&1){if(l.flags|=2048,vo(9,{destroy:void 0},oy.bind(null,l,d,o,a),null),ft===null)throw Error(i(349));m||(Kr&127)!==0||iy(l,a,o)}return o}function iy(n,a,o){n.flags|=16384,n={getSnapshot:a,value:o},a=Le.updateQueue,a===null?(a=Ec(),Le.updateQueue=a,a.stores=[n]):(o=a.stores,o===null?a.stores=[n]:o.push(n))}function oy(n,a,o,l){a.value=o,a.getSnapshot=l,ly(a)&&cy(n)}function sy(n,a,o){return o(function(){ly(a)&&cy(n)})}function ly(n){var a=n.getSnapshot;n=n.value;try{var o=a();return!Rn(n,o)}catch{return!0}}function cy(n){var a=li(n,2);a!==null&&En(a,n,2)}function eh(n){var a=mn();if(typeof n=="function"){var o=n;if(n=o(),vi){sr(!0);try{o()}finally{sr(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:n},a}function uy(n,a,o,l){return n.baseState=o,Jf(n,ct,typeof l=="function"?l:Jr)}function cE(n,a,o,l,d){if(Rc(n))throw Error(i(485));if(n=a.action,n!==null){var m={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};S.T!==null?o(!0):m.isTransition=!1,l(m),o=a.pending,o===null?(m.next=a.pending=m,dy(a,m)):(m.next=o.next,a.pending=o.next=m)}}function dy(n,a){var o=a.action,l=a.payload,d=n.state;if(a.isTransition){var m=S.T,b={};S.T=b;try{var C=o(d,l),D=S.S;D!==null&&D(b,C),fy(n,a,C)}catch(X){th(n,a,X)}finally{m!==null&&b.types!==null&&(m.types=b.types),S.T=m}}else try{m=o(d,l),fy(n,a,m)}catch(X){th(n,a,X)}}function fy(n,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(l){hy(n,a,l)},function(l){return th(n,a,l)}):hy(n,a,o)}function hy(n,a,o){a.status="fulfilled",a.value=o,py(a),n.state=o,a=n.pending,a!==null&&(o=a.next,o===a?n.pending=null:(o=o.next,a.next=o,dy(n,o)))}function th(n,a,o){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=o,py(a),a=a.next;while(a!==l)}n.action=null}function py(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function my(n,a){return a}function gy(n,a){if(Ke){var o=ft.formState;if(o!==null){e:{var l=Le;if(Ke){if(gt){t:{for(var d=gt,m=Qn;d.nodeType!==8;){if(!m){d=null;break t}if(d=Jn(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){gt=Jn(d.nextSibling),l=d.data==="F!";break e}}xa(l)}l=!1}l&&(a=o[0])}}return o=mn(),o.memoizedState=o.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:my,lastRenderedState:a},o.queue=l,o=jy.bind(null,Le,l),l.dispatch=o,l=eh(!1),m=sh.bind(null,Le,!1,l.queue),l=mn(),d={state:a,dispatch:null,action:n,pending:null},l.queue=d,o=cE.bind(null,Le,d,m,o),d.dispatch=o,l.memoizedState=n,[a,o,!1]}function vy(n){var a=Rt();return yy(a,ct,n)}function yy(n,a,o){if(a=Jf(n,a,my)[0],n=Cc(Jr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Cs(a)}catch(b){throw b===fo?gc:b}else l=a;a=Rt();var d=a.queue,m=d.dispatch;return o!==a.memoizedState&&(Le.flags|=2048,vo(9,{destroy:void 0},uE.bind(null,d,o),null)),[l,m,n]}function uE(n,a){n.action=a}function by(n){var a=Rt(),o=ct;if(o!==null)return yy(a,o,n);Rt(),a=a.memoizedState,o=Rt();var l=o.queue.dispatch;return o.memoizedState=n,[a,l,!1]}function vo(n,a,o,l){return n={tag:n,create:o,deps:l,inst:a,next:null},a=Le.updateQueue,a===null&&(a=Ec(),Le.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=n.next=n:(l=o.next,o.next=n,n.next=l,a.lastEffect=n),n}function wy(){return Rt().memoizedState}function Nc(n,a,o,l){var d=mn();Le.flags|=n,d.memoizedState=vo(1|a,{destroy:void 0},o,l===void 0?null:l)}function kc(n,a,o,l){var d=Rt();l=l===void 0?null:l;var m=d.memoizedState.inst;ct!==null&&l!==null&&Xf(l,ct.memoizedState.deps)?d.memoizedState=vo(a,m,o,l):(Le.flags|=n,d.memoizedState=vo(1|a,m,o,l))}function xy(n,a){Nc(8390656,8,n,a)}function nh(n,a){kc(2048,8,n,a)}function dE(n){Le.flags|=4;var a=Le.updateQueue;if(a===null)a=Ec(),Le.updateQueue=a,a.events=[n];else{var o=a.events;o===null?a.events=[n]:o.push(n)}}function _y(n){var a=Rt().memoizedState;return dE({ref:a,nextImpl:n}),function(){if((at&2)!==0)throw Error(i(440));return a.impl.apply(void 0,arguments)}}function Sy(n,a){return kc(4,2,n,a)}function Ey(n,a){return kc(4,4,n,a)}function Ty(n,a){if(typeof a=="function"){n=n();var o=a(n);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function Cy(n,a,o){o=o!=null?o.concat([n]):null,kc(4,4,Ty.bind(null,a,n),o)}function rh(){}function Ny(n,a){var o=Rt();a=a===void 0?null:a;var l=o.memoizedState;return a!==null&&Xf(a,l[1])?l[0]:(o.memoizedState=[n,a],n)}function ky(n,a){var o=Rt();a=a===void 0?null:a;var l=o.memoizedState;if(a!==null&&Xf(a,l[1]))return l[0];if(l=n(),vi){sr(!0);try{n()}finally{sr(!1)}}return o.memoizedState=[l,a],l}function ah(n,a,o){return o===void 0||(Kr&1073741824)!==0&&(Ge&261930)===0?n.memoizedState=a:(n.memoizedState=o,n=R0(),Le.lanes|=n,Aa|=n,o)}function Ry(n,a,o,l){return Rn(o,a)?o:po.current!==null?(n=ah(n,o,l),Rn(n,a)||(Ut=!0),n):(Kr&42)===0||(Kr&1073741824)!==0&&(Ge&261930)===0?(Ut=!0,n.memoizedState=o):(n=R0(),Le.lanes|=n,Aa|=n,a)}function Ay(n,a,o,l,d){var m=z.p;z.p=m!==0&&8>m?m:8;var b=S.T,C={};S.T=C,sh(n,!1,a,o);try{var D=d(),X=S.S;if(X!==null&&X(C,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var ee=oE(D,l);Ns(n,a,ee,jn(n))}else Ns(n,a,l,jn(n))}catch(ne){Ns(n,a,{then:function(){},status:"rejected",reason:ne},jn())}finally{z.p=m,b!==null&&C.types!==null&&(b.types=C.types),S.T=b}}function fE(){}function ih(n,a,o,l){if(n.tag!==5)throw Error(i(476));var d=Oy(n).queue;Ay(n,d,a,H,o===null?fE:function(){return My(n),o(l)})}function Oy(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:H},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:o},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function My(n){var a=Oy(n);a.next===null&&(a=n.alternate.memoizedState),Ns(n,a.next.queue,{},jn())}function oh(){return en(Vs)}function zy(){return Rt().memoizedState}function Dy(){return Rt().memoizedState}function hE(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var o=jn();n=Ea(o);var l=Ta(a,n,o);l!==null&&(En(l,a,o),_s(l,a,o)),a={cache:jf()},n.payload=a;return}a=a.return}}function pE(n,a,o){var l=jn();o={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Rc(n)?Ly(a,o):(o=Ef(n,a,o,l),o!==null&&(En(o,n,l),Uy(o,a,l)))}function jy(n,a,o){var l=jn();Ns(n,a,o,l)}function Ns(n,a,o,l){var d={lane:l,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Rc(n))Ly(a,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var b=a.lastRenderedState,C=m(b,o);if(d.hasEagerState=!0,d.eagerState=C,Rn(C,b))return cc(n,a,d,0),ft===null&&lc(),!1}catch{}finally{}if(o=Ef(n,a,d,l),o!==null)return En(o,n,l),Uy(o,a,l),!0}return!1}function sh(n,a,o,l){if(l={lane:2,revertLane:Bh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Rc(n)){if(a)throw Error(i(479))}else a=Ef(n,o,l,2),a!==null&&En(a,n,2)}function Rc(n){var a=n.alternate;return n===Le||a!==null&&a===Le}function Ly(n,a){mo=_c=!0;var o=n.pending;o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a}function Uy(n,a,o){if((o&4194048)!==0){var l=a.lanes;l&=n.pendingLanes,o|=l,a.lanes=o,se(n,o)}}var ks={readContext:en,use:Tc,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St};ks.useEffectEvent=St;var Hy={readContext:en,use:Tc,useCallback:function(n,a){return mn().memoizedState=[n,a===void 0?null:a],n},useContext:en,useEffect:xy,useImperativeHandle:function(n,a,o){o=o!=null?o.concat([n]):null,Nc(4194308,4,Ty.bind(null,a,n),o)},useLayoutEffect:function(n,a){return Nc(4194308,4,n,a)},useInsertionEffect:function(n,a){Nc(4,2,n,a)},useMemo:function(n,a){var o=mn();a=a===void 0?null:a;var l=n();if(vi){sr(!0);try{n()}finally{sr(!1)}}return o.memoizedState=[l,a],l},useReducer:function(n,a,o){var l=mn();if(o!==void 0){var d=o(a);if(vi){sr(!0);try{o(a)}finally{sr(!1)}}}else d=a;return l.memoizedState=l.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},l.queue=n,n=n.dispatch=pE.bind(null,Le,n),[l.memoizedState,n]},useRef:function(n){var a=mn();return n={current:n},a.memoizedState=n},useState:function(n){n=eh(n);var a=n.queue,o=jy.bind(null,Le,a);return a.dispatch=o,[n.memoizedState,o]},useDebugValue:rh,useDeferredValue:function(n,a){var o=mn();return ah(o,n,a)},useTransition:function(){var n=eh(!1);return n=Ay.bind(null,Le,n.queue,!0,!1),mn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,o){var l=Le,d=mn();if(Ke){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),ft===null)throw Error(i(349));(Ge&127)!==0||iy(l,a,o)}d.memoizedState=o;var m={value:o,getSnapshot:a};return d.queue=m,xy(sy.bind(null,l,m,n),[n]),l.flags|=2048,vo(9,{destroy:void 0},oy.bind(null,l,m,o,a),null),o},useId:function(){var n=mn(),a=ft.identifierPrefix;if(Ke){var o=kr,l=Nr;o=(l&~(1<<32-hn(l)-1)).toString(32)+o,a="_"+a+"R_"+o,o=Sc++,0<o&&(a+="H"+o.toString(32)),a+="_"}else o=sE++,a="_"+a+"r_"+o.toString(32)+"_";return n.memoizedState=a},useHostTransitionStatus:oh,useFormState:gy,useActionState:gy,useOptimistic:function(n){var a=mn();a.memoizedState=a.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=sh.bind(null,Le,!0,o),o.dispatch=a,[n,a]},useMemoCache:Kf,useCacheRefresh:function(){return mn().memoizedState=hE.bind(null,Le)},useEffectEvent:function(n){var a=mn(),o={impl:n};return a.memoizedState=o,function(){if((at&2)!==0)throw Error(i(440));return o.impl.apply(void 0,arguments)}}},lh={readContext:en,use:Tc,useCallback:Ny,useContext:en,useEffect:nh,useImperativeHandle:Cy,useInsertionEffect:Sy,useLayoutEffect:Ey,useMemo:ky,useReducer:Cc,useRef:wy,useState:function(){return Cc(Jr)},useDebugValue:rh,useDeferredValue:function(n,a){var o=Rt();return Ry(o,ct.memoizedState,n,a)},useTransition:function(){var n=Cc(Jr)[0],a=Rt().memoizedState;return[typeof n=="boolean"?n:Cs(n),a]},useSyncExternalStore:ay,useId:zy,useHostTransitionStatus:oh,useFormState:vy,useActionState:vy,useOptimistic:function(n,a){var o=Rt();return uy(o,ct,n,a)},useMemoCache:Kf,useCacheRefresh:Dy};lh.useEffectEvent=_y;var By={readContext:en,use:Tc,useCallback:Ny,useContext:en,useEffect:nh,useImperativeHandle:Cy,useInsertionEffect:Sy,useLayoutEffect:Ey,useMemo:ky,useReducer:Zf,useRef:wy,useState:function(){return Zf(Jr)},useDebugValue:rh,useDeferredValue:function(n,a){var o=Rt();return ct===null?ah(o,n,a):Ry(o,ct.memoizedState,n,a)},useTransition:function(){var n=Zf(Jr)[0],a=Rt().memoizedState;return[typeof n=="boolean"?n:Cs(n),a]},useSyncExternalStore:ay,useId:zy,useHostTransitionStatus:oh,useFormState:by,useActionState:by,useOptimistic:function(n,a){var o=Rt();return ct!==null?uy(o,ct,n,a):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Kf,useCacheRefresh:Dy};By.useEffectEvent=_y;function ch(n,a,o,l){a=n.memoizedState,o=o(l,a),o=o==null?a:v({},a,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var uh={enqueueSetState:function(n,a,o){n=n._reactInternals;var l=jn(),d=Ea(l);d.payload=a,o!=null&&(d.callback=o),a=Ta(n,d,l),a!==null&&(En(a,n,l),_s(a,n,l))},enqueueReplaceState:function(n,a,o){n=n._reactInternals;var l=jn(),d=Ea(l);d.tag=1,d.payload=a,o!=null&&(d.callback=o),a=Ta(n,d,l),a!==null&&(En(a,n,l),_s(a,n,l))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var o=jn(),l=Ea(o);l.tag=2,a!=null&&(l.callback=a),a=Ta(n,l,o),a!==null&&(En(a,n,o),_s(a,n,o))}};function Fy(n,a,o,l,d,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,m,b):a.prototype&&a.prototype.isPureReactComponent?!ps(o,l)||!ps(d,m):!0}function $y(n,a,o,l){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,l),a.state!==n&&uh.enqueueReplaceState(a,a.state,null)}function yi(n,a){var o=a;if("ref"in a){o={};for(var l in a)l!=="ref"&&(o[l]=a[l])}if(n=n.defaultProps){o===a&&(o=v({},o));for(var d in n)o[d]===void 0&&(o[d]=n[d])}return o}function qy(n){sc(n)}function Yy(n){console.error(n)}function Vy(n){sc(n)}function Ac(n,a){try{var o=n.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Py(n,a,o){try{var l=n.onCaughtError;l(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function dh(n,a,o){return o=Ea(o),o.tag=3,o.payload={element:null},o.callback=function(){Ac(n,a)},o}function Xy(n){return n=Ea(n),n.tag=3,n}function Iy(n,a,o,l){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=l.value;n.payload=function(){return d(m)},n.callback=function(){Py(a,o,l)}}var b=o.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){Py(a,o,l),typeof d!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function mE(n,a,o,l,d){if(o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=o.alternate,a!==null&&lo(a,o,d,!0),o=On.current,o!==null){switch(o.tag){case 31:case 13:return Kn===null?qc():o.alternate===null&&Et===0&&(Et=3),o.flags&=-257,o.flags|=65536,o.lanes=d,l===vc?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([l]):a.add(l),Lh(n,l,d)),!1;case 22:return o.flags|=65536,l===vc?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([l]):o.add(l)),Lh(n,l,d)),!1}throw Error(i(435,o.tag))}return Lh(n,l,d),qc(),!1}if(Ke)return a=On.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=d,l!==Af&&(n=Error(i(422),{cause:l}),vs(In(n,o)))):(l!==Af&&(a=Error(i(423),{cause:l}),vs(In(a,o))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,l=In(l,o),d=dh(n.stateNode,l,d),$f(n,d),Et!==4&&(Et=2)),!1;var m=Error(i(520),{cause:l});if(m=In(m,o),Ls===null?Ls=[m]:Ls.push(m),Et!==4&&(Et=2),a===null)return!0;l=In(l,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,n=d&-d,o.lanes|=n,n=dh(o.stateNode,l,n),$f(o,n),!1;case 1:if(a=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Oa===null||!Oa.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=Xy(d),Iy(d,n,o,l),$f(o,d),!1}o=o.return}while(o!==null);return!1}var fh=Error(i(461)),Ut=!1;function tn(n,a,o,l){a.child=n===null?Kv(a,null,o,l):gi(a,n.child,o,l)}function Gy(n,a,o,l,d){o=o.render;var m=a.ref;if("ref"in l){var b={};for(var C in l)C!=="ref"&&(b[C]=l[C])}else b=l;return fi(a),l=If(n,a,o,b,m,d),C=Gf(),n!==null&&!Ut?(Wf(n,a,d),Zr(n,a,d)):(Ke&&C&&kf(a),a.flags|=1,tn(n,a,l,d),a.child)}function Wy(n,a,o,l,d){if(n===null){var m=o.type;return typeof m=="function"&&!Tf(m)&&m.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=m,Qy(n,a,m,l,d)):(n=dc(o.type,null,l,a,a.mode,d),n.ref=a.ref,n.return=a,a.child=n)}if(m=n.child,!wh(n,d)){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:ps,o(b,l)&&n.ref===a.ref)return Zr(n,a,d)}return a.flags|=1,n=Ir(m,l),n.ref=a.ref,n.return=a,a.child=n}function Qy(n,a,o,l,d){if(n!==null){var m=n.memoizedProps;if(ps(m,l)&&n.ref===a.ref)if(Ut=!1,a.pendingProps=l=m,wh(n,d))(n.flags&131072)!==0&&(Ut=!0);else return a.lanes=n.lanes,Zr(n,a,d)}return hh(n,a,o,l,d)}function Ky(n,a,o,l){var d=l.children,m=n!==null?n.memoizedState:null;if(n===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,n!==null){for(l=a.child=n.child,d=0;l!==null;)d=d|l.lanes|l.childLanes,l=l.sibling;l=d&~m}else l=0,a.child=null;return Jy(n,a,m,o,l)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&mc(a,m!==null?m.cachePool:null),m!==null?ey(a,m):Yf(),ty(a);else return l=a.lanes=536870912,Jy(n,a,m!==null?m.baseLanes|o:o,o,l)}else m!==null?(mc(a,m.cachePool),ey(a,m),Na(),a.memoizedState=null):(n!==null&&mc(a,null),Yf(),Na());return tn(n,a,d,o),a.child}function Rs(n,a){return n!==null&&n.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Jy(n,a,o,l,d){var m=Uf();return m=m===null?null:{parent:jt._currentValue,pool:m},a.memoizedState={baseLanes:o,cachePool:m},n!==null&&mc(a,null),Yf(),ty(a),n!==null&&lo(n,a,l,!0),a.childLanes=d,null}function Oc(n,a){return a=zc({mode:a.mode,children:a.children},n.mode),a.ref=n.ref,n.child=a,a.return=n,a}function Zy(n,a,o){return gi(a,n.child,null,o),n=Oc(a,a.pendingProps),n.flags|=2,Mn(a),a.memoizedState=null,n}function gE(n,a,o){var l=a.pendingProps,d=(a.flags&128)!==0;if(a.flags&=-129,n===null){if(Ke){if(l.mode==="hidden")return n=Oc(a,l),a.lanes=536870912,Rs(null,n);if(Pf(a),(n=gt)?(n=db(n,Qn),n=n!==null&&n.data==="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:ba!==null?{id:Nr,overflow:kr}:null,retryLane:536870912,hydrationErrors:null},o=Lv(n),o.return=a,a.child=o,Zt=a,gt=null)):n=null,n===null)throw xa(a);return a.lanes=536870912,null}return Oc(a,l)}var m=n.memoizedState;if(m!==null){var b=m.dehydrated;if(Pf(a),d)if(a.flags&256)a.flags&=-257,a=Zy(n,a,o);else if(a.memoizedState!==null)a.child=n.child,a.flags|=128,a=null;else throw Error(i(558));else if(Ut||lo(n,a,o,!1),d=(o&n.childLanes)!==0,Ut||d){if(l=ft,l!==null&&(b=ce(l,o),b!==0&&b!==m.retryLane))throw m.retryLane=b,li(n,b),En(l,n,b),fh;qc(),a=Zy(n,a,o)}else n=m.treeContext,gt=Jn(b.nextSibling),Zt=a,Ke=!0,wa=null,Qn=!1,n!==null&&Bv(a,n),a=Oc(a,l),a.flags|=4096;return a}return n=Ir(n.child,{mode:l.mode,children:l.children}),n.ref=a.ref,a.child=n,n.return=a,n}function Mc(n,a){var o=a.ref;if(o===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(a.flags|=4194816)}}function hh(n,a,o,l,d){return fi(a),o=If(n,a,o,l,void 0,d),l=Gf(),n!==null&&!Ut?(Wf(n,a,d),Zr(n,a,d)):(Ke&&l&&kf(a),a.flags|=1,tn(n,a,o,d),a.child)}function e0(n,a,o,l,d,m){return fi(a),a.updateQueue=null,o=ry(a,l,o,d),ny(n),l=Gf(),n!==null&&!Ut?(Wf(n,a,m),Zr(n,a,m)):(Ke&&l&&kf(a),a.flags|=1,tn(n,a,o,m),a.child)}function t0(n,a,o,l,d){if(fi(a),a.stateNode===null){var m=ao,b=o.contextType;typeof b=="object"&&b!==null&&(m=en(b)),m=new o(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=uh,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},Bf(a),b=o.contextType,m.context=typeof b=="object"&&b!==null?en(b):ao,m.state=a.memoizedState,b=o.getDerivedStateFromProps,typeof b=="function"&&(ch(a,o,b,l),m.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&uh.enqueueReplaceState(m,m.state,null),Es(a,l,m,d),Ss(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(n===null){m=a.stateNode;var C=a.memoizedProps,D=yi(o,C);m.props=D;var X=m.context,ee=o.contextType;b=ao,typeof ee=="object"&&ee!==null&&(b=en(ee));var ne=o.getDerivedStateFromProps;ee=typeof ne=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=a.pendingProps!==C,ee||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||X!==b)&&$y(a,m,l,b),Sa=!1;var I=a.memoizedState;m.state=I,Es(a,l,m,d),Ss(),X=a.memoizedState,C||I!==X||Sa?(typeof ne=="function"&&(ch(a,o,ne,l),X=a.memoizedState),(D=Sa||Fy(a,o,D,l,I,X,b))?(ee||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=X),m.props=l,m.state=X,m.context=b,l=D):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,Ff(n,a),b=a.memoizedProps,ee=yi(o,b),m.props=ee,ne=a.pendingProps,I=m.context,X=o.contextType,D=ao,typeof X=="object"&&X!==null&&(D=en(X)),C=o.getDerivedStateFromProps,(X=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==ne||I!==D)&&$y(a,m,l,D),Sa=!1,I=a.memoizedState,m.state=I,Es(a,l,m,d),Ss();var K=a.memoizedState;b!==ne||I!==K||Sa||n!==null&&n.dependencies!==null&&hc(n.dependencies)?(typeof C=="function"&&(ch(a,o,C,l),K=a.memoizedState),(ee=Sa||Fy(a,o,ee,l,I,K,D)||n!==null&&n.dependencies!==null&&hc(n.dependencies))?(X||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,K,D),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,K,D)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&I===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&I===n.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=K),m.props=l,m.state=K,m.context=D,l=ee):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&I===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&I===n.memoizedState||(a.flags|=1024),l=!1)}return m=l,Mc(n,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,o=l&&typeof o.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,n!==null&&l?(a.child=gi(a,n.child,null,d),a.child=gi(a,null,o,d)):tn(n,a,o,d),a.memoizedState=m.state,n=a.child):n=Zr(n,a,d),n}function n0(n,a,o,l){return ui(),a.flags|=256,tn(n,a,o,l),a.child}var ph={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mh(n){return{baseLanes:n,cachePool:Pv()}}function gh(n,a,o){return n=n!==null?n.childLanes&~o:0,a&&(n|=Dn),n}function r0(n,a,o){var l=a.pendingProps,d=!1,m=(a.flags&128)!==0,b;if((b=m)||(b=n!==null&&n.memoizedState===null?!1:(kt.current&2)!==0),b&&(d=!0,a.flags&=-129),b=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ke){if(d?Ca(a):Na(),(n=gt)?(n=db(n,Qn),n=n!==null&&n.data!=="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:ba!==null?{id:Nr,overflow:kr}:null,retryLane:536870912,hydrationErrors:null},o=Lv(n),o.return=a,a.child=o,Zt=a,gt=null)):n=null,n===null)throw xa(a);return Jh(n)?a.lanes=32:a.lanes=536870912,null}var C=l.children;return l=l.fallback,d?(Na(),d=a.mode,C=zc({mode:"hidden",children:C},d),l=ci(l,d,o,null),C.return=a,l.return=a,C.sibling=l,a.child=C,l=a.child,l.memoizedState=mh(o),l.childLanes=gh(n,b,o),a.memoizedState=ph,Rs(null,l)):(Ca(a),vh(a,C))}var D=n.memoizedState;if(D!==null&&(C=D.dehydrated,C!==null)){if(m)a.flags&256?(Ca(a),a.flags&=-257,a=yh(n,a,o)):a.memoizedState!==null?(Na(),a.child=n.child,a.flags|=128,a=null):(Na(),C=l.fallback,d=a.mode,l=zc({mode:"visible",children:l.children},d),C=ci(C,d,o,null),C.flags|=2,l.return=a,C.return=a,l.sibling=C,a.child=l,gi(a,n.child,null,o),l=a.child,l.memoizedState=mh(o),l.childLanes=gh(n,b,o),a.memoizedState=ph,a=Rs(null,l));else if(Ca(a),Jh(C)){if(b=C.nextSibling&&C.nextSibling.dataset,b)var X=b.dgst;b=X,l=Error(i(419)),l.stack="",l.digest=b,vs({value:l,source:null,stack:null}),a=yh(n,a,o)}else if(Ut||lo(n,a,o,!1),b=(o&n.childLanes)!==0,Ut||b){if(b=ft,b!==null&&(l=ce(b,o),l!==0&&l!==D.retryLane))throw D.retryLane=l,li(n,l),En(b,n,l),fh;Kh(C)||qc(),a=yh(n,a,o)}else Kh(C)?(a.flags|=192,a.child=n.child,a=null):(n=D.treeContext,gt=Jn(C.nextSibling),Zt=a,Ke=!0,wa=null,Qn=!1,n!==null&&Bv(a,n),a=vh(a,l.children),a.flags|=4096);return a}return d?(Na(),C=l.fallback,d=a.mode,D=n.child,X=D.sibling,l=Ir(D,{mode:"hidden",children:l.children}),l.subtreeFlags=D.subtreeFlags&65011712,X!==null?C=Ir(X,C):(C=ci(C,d,o,null),C.flags|=2),C.return=a,l.return=a,l.sibling=C,a.child=l,Rs(null,l),l=a.child,C=n.child.memoizedState,C===null?C=mh(o):(d=C.cachePool,d!==null?(D=jt._currentValue,d=d.parent!==D?{parent:D,pool:D}:d):d=Pv(),C={baseLanes:C.baseLanes|o,cachePool:d}),l.memoizedState=C,l.childLanes=gh(n,b,o),a.memoizedState=ph,Rs(n.child,l)):(Ca(a),o=n.child,n=o.sibling,o=Ir(o,{mode:"visible",children:l.children}),o.return=a,o.sibling=null,n!==null&&(b=a.deletions,b===null?(a.deletions=[n],a.flags|=16):b.push(n)),a.child=o,a.memoizedState=null,o)}function vh(n,a){return a=zc({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function zc(n,a){return n=An(22,n,null,a),n.lanes=0,n}function yh(n,a,o){return gi(a,n.child,null,o),n=vh(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function a0(n,a,o){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a),zf(n.return,a,o)}function bh(n,a,o,l,d,m){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:d,treeForkCount:m}:(b.isBackwards=a,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=o,b.tailMode=d,b.treeForkCount=m)}function i0(n,a,o){var l=a.pendingProps,d=l.revealOrder,m=l.tail;l=l.children;var b=kt.current,C=(b&2)!==0;if(C?(b=b&1|2,a.flags|=128):b&=1,J(kt,b),tn(n,a,l,o),l=Ke?gs:0,!C&&n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&a0(n,o,a);else if(n.tag===19)a0(n,o,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(d){case"forwards":for(o=a.child,d=null;o!==null;)n=o.alternate,n!==null&&xc(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=a.child,a.child=null):(d=o.sibling,o.sibling=null),bh(a,!1,d,o,m,l);break;case"backwards":case"unstable_legacy-backwards":for(o=null,d=a.child,a.child=null;d!==null;){if(n=d.alternate,n!==null&&xc(n)===null){a.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}bh(a,!0,o,null,m,l);break;case"together":bh(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function Zr(n,a,o){if(n!==null&&(a.dependencies=n.dependencies),Aa|=a.lanes,(o&a.childLanes)===0)if(n!==null){if(lo(n,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,o=Ir(n,n.pendingProps),a.child=o,o.return=a;n.sibling!==null;)n=n.sibling,o=o.sibling=Ir(n,n.pendingProps),o.return=a;o.sibling=null}return a.child}function wh(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&hc(n)))}function vE(n,a,o){switch(a.tag){case 3:Qe(a,a.stateNode.containerInfo),_a(a,jt,n.memoizedState.cache),ui();break;case 27:case 5:Ie(a);break;case 4:Qe(a,a.stateNode.containerInfo);break;case 10:_a(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Pf(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Ca(a),a.flags|=128,null):(o&a.child.childLanes)!==0?r0(n,a,o):(Ca(a),n=Zr(n,a,o),n!==null?n.sibling:null);Ca(a);break;case 19:var d=(n.flags&128)!==0;if(l=(o&a.childLanes)!==0,l||(lo(n,a,o,!1),l=(o&a.childLanes)!==0),d){if(l)return i0(n,a,o);a.flags|=128}if(d=a.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),J(kt,kt.current),l)break;return null;case 22:return a.lanes=0,Ky(n,a,o,a.pendingProps);case 24:_a(a,jt,n.memoizedState.cache)}return Zr(n,a,o)}function o0(n,a,o){if(n!==null)if(n.memoizedProps!==a.pendingProps)Ut=!0;else{if(!wh(n,o)&&(a.flags&128)===0)return Ut=!1,vE(n,a,o);Ut=(n.flags&131072)!==0}else Ut=!1,Ke&&(a.flags&1048576)!==0&&Hv(a,gs,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(n=pi(a.elementType),a.type=n,typeof n=="function")Tf(n)?(l=yi(n,l),a.tag=1,a=t0(null,a,n,l,o)):(a.tag=0,a=hh(null,a,n,l,o));else{if(n!=null){var d=n.$$typeof;if(d===B){a.tag=11,a=Gy(null,a,n,l,o);break e}else if(d===G){a.tag=14,a=Wy(null,a,n,l,o);break e}}throw a=we(n)||n,Error(i(306,a,""))}}return a;case 0:return hh(n,a,a.type,a.pendingProps,o);case 1:return l=a.type,d=yi(l,a.pendingProps),t0(n,a,l,d,o);case 3:e:{if(Qe(a,a.stateNode.containerInfo),n===null)throw Error(i(387));l=a.pendingProps;var m=a.memoizedState;d=m.element,Ff(n,a),Es(a,l,null,o);var b=a.memoizedState;if(l=b.cache,_a(a,jt,l),l!==m.cache&&Df(a,[jt],o,!0),Ss(),l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=n0(n,a,l,o);break e}else if(l!==d){d=In(Error(i(424)),a),vs(d),a=n0(n,a,l,o);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(gt=Jn(n.firstChild),Zt=a,Ke=!0,wa=null,Qn=!0,o=Kv(a,null,l,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(ui(),l===d){a=Zr(n,a,o);break e}tn(n,a,l,o)}a=a.child}return a;case 26:return Mc(n,a),n===null?(o=vb(a.type,null,a.pendingProps,null))?a.memoizedState=o:Ke||(o=a.type,n=a.pendingProps,l=Wc(me.current).createElement(o),l[de]=a,l[pe]=n,nn(l,o,n),bt(l),a.stateNode=l):a.memoizedState=vb(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Ie(a),n===null&&Ke&&(l=a.stateNode=pb(a.type,a.pendingProps,me.current),Zt=a,Qn=!0,d=gt,ja(a.type)?(Zh=d,gt=Jn(l.firstChild)):gt=d),tn(n,a,a.pendingProps.children,o),Mc(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Ke&&((d=l=gt)&&(l=IE(l,a.type,a.pendingProps,Qn),l!==null?(a.stateNode=l,Zt=a,gt=Jn(l.firstChild),Qn=!1,d=!0):d=!1),d||xa(a)),Ie(a),d=a.type,m=a.pendingProps,b=n!==null?n.memoizedProps:null,l=m.children,Gh(d,m)?l=null:b!==null&&Gh(d,b)&&(a.flags|=32),a.memoizedState!==null&&(d=If(n,a,lE,null,null,o),Vs._currentValue=d),Mc(n,a),tn(n,a,l,o),a.child;case 6:return n===null&&Ke&&((n=o=gt)&&(o=GE(o,a.pendingProps,Qn),o!==null?(a.stateNode=o,Zt=a,gt=null,n=!0):n=!1),n||xa(a)),null;case 13:return r0(n,a,o);case 4:return Qe(a,a.stateNode.containerInfo),l=a.pendingProps,n===null?a.child=gi(a,null,l,o):tn(n,a,l,o),a.child;case 11:return Gy(n,a,a.type,a.pendingProps,o);case 7:return tn(n,a,a.pendingProps,o),a.child;case 8:return tn(n,a,a.pendingProps.children,o),a.child;case 12:return tn(n,a,a.pendingProps.children,o),a.child;case 10:return l=a.pendingProps,_a(a,a.type,l.value),tn(n,a,l.children,o),a.child;case 9:return d=a.type._context,l=a.pendingProps.children,fi(a),d=en(d),l=l(d),a.flags|=1,tn(n,a,l,o),a.child;case 14:return Wy(n,a,a.type,a.pendingProps,o);case 15:return Qy(n,a,a.type,a.pendingProps,o);case 19:return i0(n,a,o);case 31:return gE(n,a,o);case 22:return Ky(n,a,o,a.pendingProps);case 24:return fi(a),l=en(jt),n===null?(d=Uf(),d===null&&(d=ft,m=jf(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),a.memoizedState={parent:l,cache:d},Bf(a),_a(a,jt,d)):((n.lanes&o)!==0&&(Ff(n,a),Es(a,null,null,o),Ss()),d=n.memoizedState,m=a.memoizedState,d.parent!==l?(d={parent:l,cache:l},a.memoizedState=d,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=d),_a(a,jt,l)):(l=m.cache,_a(a,jt,l),l!==d.cache&&Df(a,[jt],o,!0))),tn(n,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function ea(n){n.flags|=4}function xh(n,a,o,l,d){if((a=(n.mode&32)!==0)&&(a=!1),a){if(n.flags|=16777216,(d&335544128)===d)if(n.stateNode.complete)n.flags|=8192;else if(z0())n.flags|=8192;else throw mi=vc,Hf}else n.flags&=-16777217}function s0(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!_b(a))if(z0())n.flags|=8192;else throw mi=vc,Hf}function Dc(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?Jl():536870912,n.lanes|=a,xo|=a)}function As(n,a){if(!Ke)switch(n.tailMode){case"hidden":a=n.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function vt(n){var a=n.alternate!==null&&n.alternate.child===n.child,o=0,l=0;if(a)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags&65011712,l|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=l,n.childLanes=o,a}function yE(n,a,o){var l=a.pendingProps;switch(Rf(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(a),null;case 1:return vt(a),null;case 3:return o=a.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Qr(jt),De(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(so(a)?ea(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Of())),vt(a),null;case 26:var d=a.type,m=a.memoizedState;return n===null?(ea(a),m!==null?(vt(a),s0(a,m)):(vt(a),xh(a,d,null,l,o))):m?m!==n.memoizedState?(ea(a),vt(a),s0(a,m)):(vt(a),a.flags&=-16777217):(n=n.memoizedProps,n!==l&&ea(a),vt(a),xh(a,d,n,l,o)),null;case 27:if(on(a),o=me.current,d=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==l&&ea(a);else{if(!l){if(a.stateNode===null)throw Error(i(166));return vt(a),null}n=ae.current,so(a)?Fv(a):(n=pb(d,l,o),a.stateNode=n,ea(a))}return vt(a),null;case 5:if(on(a),d=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==l&&ea(a);else{if(!l){if(a.stateNode===null)throw Error(i(166));return vt(a),null}if(m=ae.current,so(a))Fv(a);else{var b=Wc(me.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?b.createElement(d,{is:l.is}):b.createElement(d)}}m[de]=a,m[pe]=l;e:for(b=a.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===a)break e;for(;b.sibling===null;){if(b.return===null||b.return===a)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}a.stateNode=m;e:switch(nn(m,d,l),d){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ea(a)}}return vt(a),xh(a,a.type,n===null?null:n.memoizedProps,a.pendingProps,o),null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==l&&ea(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(i(166));if(n=me.current,so(a)){if(n=a.stateNode,o=a.memoizedProps,l=null,d=Zt,d!==null)switch(d.tag){case 27:case 5:l=d.memoizedProps}n[de]=a,n=!!(n.nodeValue===o||l!==null&&l.suppressHydrationWarning===!0||rb(n.nodeValue,o)),n||xa(a,!0)}else n=Wc(n).createTextNode(l),n[de]=a,a.stateNode=n}return vt(a),null;case 31:if(o=a.memoizedState,n===null||n.memoizedState!==null){if(l=so(a),o!==null){if(n===null){if(!l)throw Error(i(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(557));n[de]=a}else ui(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;vt(a),n=!1}else o=Of(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return a.flags&256?(Mn(a),a):(Mn(a),null);if((a.flags&128)!==0)throw Error(i(558))}return vt(a),null;case 13:if(l=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=so(a),l!==null&&l.dehydrated!==null){if(n===null){if(!d)throw Error(i(318));if(d=a.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[de]=a}else ui(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;vt(a),d=!1}else d=Of(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return a.flags&256?(Mn(a),a):(Mn(a),null)}return Mn(a),(a.flags&128)!==0?(a.lanes=o,a):(o=l!==null,n=n!==null&&n.memoizedState!==null,o&&(l=a.child,d=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(d=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==d&&(l.flags|=2048)),o!==n&&o&&(a.child.flags|=8192),Dc(a,a.updateQueue),vt(a),null);case 4:return De(),n===null&&Yh(a.stateNode.containerInfo),vt(a),null;case 10:return Qr(a.type),vt(a),null;case 19:if(Y(kt),l=a.memoizedState,l===null)return vt(a),null;if(d=(a.flags&128)!==0,m=l.rendering,m===null)if(d)As(l,!1);else{if(Et!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(m=xc(n),m!==null){for(a.flags|=128,As(l,!1),n=m.updateQueue,a.updateQueue=n,Dc(a,n),a.subtreeFlags=0,n=o,o=a.child;o!==null;)jv(o,n),o=o.sibling;return J(kt,kt.current&1|2),Ke&&Gr(a,l.treeForkCount),a.child}n=n.sibling}l.tail!==null&&sn()>Bc&&(a.flags|=128,d=!0,As(l,!1),a.lanes=4194304)}else{if(!d)if(n=xc(m),n!==null){if(a.flags|=128,d=!0,n=n.updateQueue,a.updateQueue=n,Dc(a,n),As(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Ke)return vt(a),null}else 2*sn()-l.renderingStartTime>Bc&&o!==536870912&&(a.flags|=128,d=!0,As(l,!1),a.lanes=4194304);l.isBackwards?(m.sibling=a.child,a.child=m):(n=l.last,n!==null?n.sibling=m:a.child=m,l.last=m)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=sn(),n.sibling=null,o=kt.current,J(kt,d?o&1|2:o&1),Ke&&Gr(a,l.treeForkCount),n):(vt(a),null);case 22:case 23:return Mn(a),Vf(),l=a.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(o&536870912)!==0&&(a.flags&128)===0&&(vt(a),a.subtreeFlags&6&&(a.flags|=8192)):vt(a),o=a.updateQueue,o!==null&&Dc(a,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==o&&(a.flags|=2048),n!==null&&Y(hi),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),Qr(jt),vt(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function bE(n,a){switch(Rf(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Qr(jt),De(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return on(a),null;case 31:if(a.memoizedState!==null){if(Mn(a),a.alternate===null)throw Error(i(340));ui()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 13:if(Mn(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));ui()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return Y(kt),null;case 4:return De(),null;case 10:return Qr(a.type),null;case 22:case 23:return Mn(a),Vf(),n!==null&&Y(hi),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Qr(jt),null;case 25:return null;default:return null}}function l0(n,a){switch(Rf(a),a.tag){case 3:Qr(jt),De();break;case 26:case 27:case 5:on(a);break;case 4:De();break;case 31:a.memoizedState!==null&&Mn(a);break;case 13:Mn(a);break;case 19:Y(kt);break;case 10:Qr(a.type);break;case 22:case 23:Mn(a),Vf(),n!==null&&Y(hi);break;case 24:Qr(jt)}}function Os(n,a){try{var o=a.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var d=l.next;o=d;do{if((o.tag&n)===n){l=void 0;var m=o.create,b=o.inst;l=m(),b.destroy=l}o=o.next}while(o!==d)}}catch(C){st(a,a.return,C)}}function ka(n,a,o){try{var l=a.updateQueue,d=l!==null?l.lastEffect:null;if(d!==null){var m=d.next;l=m;do{if((l.tag&n)===n){var b=l.inst,C=b.destroy;if(C!==void 0){b.destroy=void 0,d=a;var D=o,X=C;try{X()}catch(ee){st(d,D,ee)}}}l=l.next}while(l!==m)}}catch(ee){st(a,a.return,ee)}}function c0(n){var a=n.updateQueue;if(a!==null){var o=n.stateNode;try{Zv(a,o)}catch(l){st(n,n.return,l)}}}function u0(n,a,o){o.props=yi(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(l){st(n,a,l)}}function Ms(n,a){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof o=="function"?n.refCleanup=o(l):o.current=l}}catch(d){st(n,a,d)}}function Rr(n,a){var o=n.ref,l=n.refCleanup;if(o!==null)if(typeof l=="function")try{l()}catch(d){st(n,a,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){st(n,a,d)}else o.current=null}function d0(n){var a=n.type,o=n.memoizedProps,l=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&l.focus();break e;case"img":o.src?l.src=o.src:o.srcSet&&(l.srcset=o.srcSet)}}catch(d){st(n,n.return,d)}}function _h(n,a,o){try{var l=n.stateNode;$E(l,n.type,o,a),l[pe]=a}catch(d){st(n,n.return,d)}}function f0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ja(n.type)||n.tag===4}function Sh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||f0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ja(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Eh(n,a,o){var l=n.tag;if(l===5||l===6)n=n.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(n),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=Pr));else if(l!==4&&(l===27&&ja(n.type)&&(o=n.stateNode,a=null),n=n.child,n!==null))for(Eh(n,a,o),n=n.sibling;n!==null;)Eh(n,a,o),n=n.sibling}function jc(n,a,o){var l=n.tag;if(l===5||l===6)n=n.stateNode,a?o.insertBefore(n,a):o.appendChild(n);else if(l!==4&&(l===27&&ja(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(jc(n,a,o),n=n.sibling;n!==null;)jc(n,a,o),n=n.sibling}function h0(n){var a=n.stateNode,o=n.memoizedProps;try{for(var l=n.type,d=a.attributes;d.length;)a.removeAttributeNode(d[0]);nn(a,l,o),a[de]=n,a[pe]=o}catch(m){st(n,n.return,m)}}var ta=!1,Ht=!1,Th=!1,p0=typeof WeakSet=="function"?WeakSet:Set,Gt=null;function wE(n,a){if(n=n.containerInfo,Xh=nu,n=Cv(n),yf(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var d=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,C=-1,D=-1,X=0,ee=0,ne=n,I=null;t:for(;;){for(var K;ne!==o||d!==0&&ne.nodeType!==3||(C=b+d),ne!==m||l!==0&&ne.nodeType!==3||(D=b+l),ne.nodeType===3&&(b+=ne.nodeValue.length),(K=ne.firstChild)!==null;)I=ne,ne=K;for(;;){if(ne===n)break t;if(I===o&&++X===d&&(C=b),I===m&&++ee===l&&(D=b),(K=ne.nextSibling)!==null)break;ne=I,I=ne.parentNode}ne=K}o=C===-1||D===-1?null:{start:C,end:D}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ih={focusedElem:n,selectionRange:o},nu=!1,Gt=a;Gt!==null;)if(a=Gt,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,Gt=n;else for(;Gt!==null;){switch(a=Gt,m=a.alternate,n=a.flags,a.tag){case 0:if((n&4)!==0&&(n=a.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)d=n[o],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=a,d=m.memoizedProps,m=m.memoizedState,l=o.stateNode;try{var ve=yi(o.type,d);n=l.getSnapshotBeforeUpdate(ve,m),l.__reactInternalSnapshotBeforeUpdate=n}catch(Ae){st(o,o.return,Ae)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,o=n.nodeType,o===9)Qh(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Qh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,Gt=n;break}Gt=a.return}}function m0(n,a,o){var l=o.flags;switch(o.tag){case 0:case 11:case 15:ra(n,o),l&4&&Os(5,o);break;case 1:if(ra(n,o),l&4)if(n=o.stateNode,a===null)try{n.componentDidMount()}catch(b){st(o,o.return,b)}else{var d=yi(o.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(d,a,n.__reactInternalSnapshotBeforeUpdate)}catch(b){st(o,o.return,b)}}l&64&&c0(o),l&512&&Ms(o,o.return);break;case 3:if(ra(n,o),l&64&&(n=o.updateQueue,n!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{Zv(n,a)}catch(b){st(o,o.return,b)}}break;case 27:a===null&&l&4&&h0(o);case 26:case 5:ra(n,o),a===null&&l&4&&d0(o),l&512&&Ms(o,o.return);break;case 12:ra(n,o);break;case 31:ra(n,o),l&4&&y0(n,o);break;case 13:ra(n,o),l&4&&b0(n,o),l&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=RE.bind(null,o),WE(n,o))));break;case 22:if(l=o.memoizedState!==null||ta,!l){a=a!==null&&a.memoizedState!==null||Ht,d=ta;var m=Ht;ta=l,(Ht=a)&&!m?aa(n,o,(o.subtreeFlags&8772)!==0):ra(n,o),ta=d,Ht=m}break;case 30:break;default:ra(n,o)}}function g0(n){var a=n.alternate;a!==null&&(n.alternate=null,g0(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&lr(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var wt=null,wn=!1;function na(n,a,o){for(o=o.child;o!==null;)v0(n,a,o),o=o.sibling}function v0(n,a,o){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(ga,o)}catch{}switch(o.tag){case 26:Ht||Rr(o,a),na(n,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ht||Rr(o,a);var l=wt,d=wn;ja(o.type)&&(wt=o.stateNode,wn=!1),na(n,a,o),$s(o.stateNode),wt=l,wn=d;break;case 5:Ht||Rr(o,a);case 6:if(l=wt,d=wn,wt=null,na(n,a,o),wt=l,wn=d,wt!==null)if(wn)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(o.stateNode)}catch(m){st(o,a,m)}else try{wt.removeChild(o.stateNode)}catch(m){st(o,a,m)}break;case 18:wt!==null&&(wn?(n=wt,cb(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Ro(n)):cb(wt,o.stateNode));break;case 4:l=wt,d=wn,wt=o.stateNode.containerInfo,wn=!0,na(n,a,o),wt=l,wn=d;break;case 0:case 11:case 14:case 15:ka(2,o,a),Ht||ka(4,o,a),na(n,a,o);break;case 1:Ht||(Rr(o,a),l=o.stateNode,typeof l.componentWillUnmount=="function"&&u0(o,a,l)),na(n,a,o);break;case 21:na(n,a,o);break;case 22:Ht=(l=Ht)||o.memoizedState!==null,na(n,a,o),Ht=l;break;default:na(n,a,o)}}function y0(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Ro(n)}catch(o){st(a,a.return,o)}}}function b0(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ro(n)}catch(o){st(a,a.return,o)}}function xE(n){switch(n.tag){case 31:case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new p0),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new p0),a;default:throw Error(i(435,n.tag))}}function Lc(n,a){var o=xE(n);a.forEach(function(l){if(!o.has(l)){o.add(l);var d=AE.bind(null,n,l);l.then(d,d)}})}function xn(n,a){var o=a.deletions;if(o!==null)for(var l=0;l<o.length;l++){var d=o[l],m=n,b=a,C=b;e:for(;C!==null;){switch(C.tag){case 27:if(ja(C.type)){wt=C.stateNode,wn=!1;break e}break;case 5:wt=C.stateNode,wn=!1;break e;case 3:case 4:wt=C.stateNode.containerInfo,wn=!0;break e}C=C.return}if(wt===null)throw Error(i(160));v0(m,b,d),wt=null,wn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)w0(a,n),a=a.sibling}var dr=null;function w0(n,a){var o=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:xn(a,n),_n(n),l&4&&(ka(3,n,n.return),Os(3,n),ka(5,n,n.return));break;case 1:xn(a,n),_n(n),l&512&&(Ht||o===null||Rr(o,o.return)),l&64&&ta&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?l:o.concat(l))));break;case 26:var d=dr;if(xn(a,n),_n(n),l&512&&(Ht||o===null||Rr(o,o.return)),l&4){var m=o!==null?o.memoizedState:null;if(l=n.memoizedState,o===null)if(l===null)if(n.stateNode===null){e:{l=n.type,o=n.memoizedProps,d=d.ownerDocument||d;t:switch(l){case"title":m=d.getElementsByTagName("title")[0],(!m||m[rt]||m[de]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(l),d.head.insertBefore(m,d.querySelector("head > title"))),nn(m,l,o),m[de]=n,bt(m),l=m;break e;case"link":var b=wb("link","href",d).get(l+(o.href||""));if(b){for(var C=0;C<b.length;C++)if(m=b[C],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){b.splice(C,1);break t}}m=d.createElement(l),nn(m,l,o),d.head.appendChild(m);break;case"meta":if(b=wb("meta","content",d).get(l+(o.content||""))){for(C=0;C<b.length;C++)if(m=b[C],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){b.splice(C,1);break t}}m=d.createElement(l),nn(m,l,o),d.head.appendChild(m);break;default:throw Error(i(468,l))}m[de]=n,bt(m),l=m}n.stateNode=l}else xb(d,n.type,n.stateNode);else n.stateNode=bb(d,l,n.memoizedProps);else m!==l?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,l===null?xb(d,n.type,n.stateNode):bb(d,l,n.memoizedProps)):l===null&&n.stateNode!==null&&_h(n,n.memoizedProps,o.memoizedProps)}break;case 27:xn(a,n),_n(n),l&512&&(Ht||o===null||Rr(o,o.return)),o!==null&&l&4&&_h(n,n.memoizedProps,o.memoizedProps);break;case 5:if(xn(a,n),_n(n),l&512&&(Ht||o===null||Rr(o,o.return)),n.flags&32){d=n.stateNode;try{Ki(d,"")}catch(ve){st(n,n.return,ve)}}l&4&&n.stateNode!=null&&(d=n.memoizedProps,_h(n,d,o!==null?o.memoizedProps:d)),l&1024&&(Th=!0);break;case 6:if(xn(a,n),_n(n),l&4){if(n.stateNode===null)throw Error(i(162));l=n.memoizedProps,o=n.stateNode;try{o.nodeValue=l}catch(ve){st(n,n.return,ve)}}break;case 3:if(Jc=null,d=dr,dr=Qc(a.containerInfo),xn(a,n),dr=d,_n(n),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Ro(a.containerInfo)}catch(ve){st(n,n.return,ve)}Th&&(Th=!1,x0(n));break;case 4:l=dr,dr=Qc(n.stateNode.containerInfo),xn(a,n),_n(n),dr=l;break;case 12:xn(a,n),_n(n);break;case 31:xn(a,n),_n(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Lc(n,l)));break;case 13:xn(a,n),_n(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Hc=sn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Lc(n,l)));break;case 22:d=n.memoizedState!==null;var D=o!==null&&o.memoizedState!==null,X=ta,ee=Ht;if(ta=X||d,Ht=ee||D,xn(a,n),Ht=ee,ta=X,_n(n),l&8192)e:for(a=n.stateNode,a._visibility=d?a._visibility&-2:a._visibility|1,d&&(o===null||D||ta||Ht||bi(n)),o=null,a=n;;){if(a.tag===5||a.tag===26){if(o===null){D=o=a;try{if(m=D.stateNode,d)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{C=D.stateNode;var ne=D.memoizedProps.style,I=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;C.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(ve){st(D,D.return,ve)}}}else if(a.tag===6){if(o===null){D=a;try{D.stateNode.nodeValue=d?"":D.memoizedProps}catch(ve){st(D,D.return,ve)}}}else if(a.tag===18){if(o===null){D=a;try{var K=D.stateNode;d?ub(K,!0):ub(D.stateNode,!1)}catch(ve){st(D,D.return,ve)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=n.updateQueue,l!==null&&(o=l.retryQueue,o!==null&&(l.retryQueue=null,Lc(n,o))));break;case 19:xn(a,n),_n(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Lc(n,l)));break;case 30:break;case 21:break;default:xn(a,n),_n(n)}}function _n(n){var a=n.flags;if(a&2){try{for(var o,l=n.return;l!==null;){if(f0(l)){o=l;break}l=l.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var d=o.stateNode,m=Sh(n);jc(n,m,d);break;case 5:var b=o.stateNode;o.flags&32&&(Ki(b,""),o.flags&=-33);var C=Sh(n);jc(n,C,b);break;case 3:case 4:var D=o.stateNode.containerInfo,X=Sh(n);Eh(n,X,D);break;default:throw Error(i(161))}}catch(ee){st(n,n.return,ee)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function x0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;x0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function ra(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)m0(n,a.alternate,a),a=a.sibling}function bi(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:ka(4,a,a.return),bi(a);break;case 1:Rr(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&u0(a,a.return,o),bi(a);break;case 27:$s(a.stateNode);case 26:case 5:Rr(a,a.return),bi(a);break;case 22:a.memoizedState===null&&bi(a);break;case 30:bi(a);break;default:bi(a)}n=n.sibling}}function aa(n,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,d=n,m=a,b=m.flags;switch(m.tag){case 0:case 11:case 15:aa(d,m,o),Os(4,m);break;case 1:if(aa(d,m,o),l=m,d=l.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(X){st(l,l.return,X)}if(l=m,d=l.updateQueue,d!==null){var C=l.stateNode;try{var D=d.shared.hiddenCallbacks;if(D!==null)for(d.shared.hiddenCallbacks=null,d=0;d<D.length;d++)Jv(D[d],C)}catch(X){st(l,l.return,X)}}o&&b&64&&c0(m),Ms(m,m.return);break;case 27:h0(m);case 26:case 5:aa(d,m,o),o&&l===null&&b&4&&d0(m),Ms(m,m.return);break;case 12:aa(d,m,o);break;case 31:aa(d,m,o),o&&b&4&&y0(d,m);break;case 13:aa(d,m,o),o&&b&4&&b0(d,m);break;case 22:m.memoizedState===null&&aa(d,m,o),Ms(m,m.return);break;case 30:break;default:aa(d,m,o)}a=a.sibling}}function Ch(n,a){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&ys(o))}function Nh(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&ys(n))}function fr(n,a,o,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)_0(n,a,o,l),a=a.sibling}function _0(n,a,o,l){var d=a.flags;switch(a.tag){case 0:case 11:case 15:fr(n,a,o,l),d&2048&&Os(9,a);break;case 1:fr(n,a,o,l);break;case 3:fr(n,a,o,l),d&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&ys(n)));break;case 12:if(d&2048){fr(n,a,o,l),n=a.stateNode;try{var m=a.memoizedProps,b=m.id,C=m.onPostCommit;typeof C=="function"&&C(b,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(D){st(a,a.return,D)}}else fr(n,a,o,l);break;case 31:fr(n,a,o,l);break;case 13:fr(n,a,o,l);break;case 23:break;case 22:m=a.stateNode,b=a.alternate,a.memoizedState!==null?m._visibility&2?fr(n,a,o,l):zs(n,a):m._visibility&2?fr(n,a,o,l):(m._visibility|=2,yo(n,a,o,l,(a.subtreeFlags&10256)!==0||!1)),d&2048&&Ch(b,a);break;case 24:fr(n,a,o,l),d&2048&&Nh(a.alternate,a);break;default:fr(n,a,o,l)}}function yo(n,a,o,l,d){for(d=d&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var m=n,b=a,C=o,D=l,X=b.flags;switch(b.tag){case 0:case 11:case 15:yo(m,b,C,D,d),Os(8,b);break;case 23:break;case 22:var ee=b.stateNode;b.memoizedState!==null?ee._visibility&2?yo(m,b,C,D,d):zs(m,b):(ee._visibility|=2,yo(m,b,C,D,d)),d&&X&2048&&Ch(b.alternate,b);break;case 24:yo(m,b,C,D,d),d&&X&2048&&Nh(b.alternate,b);break;default:yo(m,b,C,D,d)}a=a.sibling}}function zs(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=n,l=a,d=l.flags;switch(l.tag){case 22:zs(o,l),d&2048&&Ch(l.alternate,l);break;case 24:zs(o,l),d&2048&&Nh(l.alternate,l);break;default:zs(o,l)}a=a.sibling}}var Ds=8192;function bo(n,a,o){if(n.subtreeFlags&Ds)for(n=n.child;n!==null;)S0(n,a,o),n=n.sibling}function S0(n,a,o){switch(n.tag){case 26:bo(n,a,o),n.flags&Ds&&n.memoizedState!==null&&sT(o,dr,n.memoizedState,n.memoizedProps);break;case 5:bo(n,a,o);break;case 3:case 4:var l=dr;dr=Qc(n.stateNode.containerInfo),bo(n,a,o),dr=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=Ds,Ds=16777216,bo(n,a,o),Ds=l):bo(n,a,o));break;default:bo(n,a,o)}}function E0(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function js(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var l=a[o];Gt=l,C0(l,n)}E0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)T0(n),n=n.sibling}function T0(n){switch(n.tag){case 0:case 11:case 15:js(n),n.flags&2048&&ka(9,n,n.return);break;case 3:js(n);break;case 12:js(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,Uc(n)):js(n);break;default:js(n)}}function Uc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var l=a[o];Gt=l,C0(l,n)}E0(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:ka(8,a,a.return),Uc(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,Uc(a));break;default:Uc(a)}n=n.sibling}}function C0(n,a){for(;Gt!==null;){var o=Gt;switch(o.tag){case 0:case 11:case 15:ka(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var l=o.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ys(o.memoizedState.cache)}if(l=o.child,l!==null)l.return=o,Gt=l;else e:for(o=n;Gt!==null;){l=Gt;var d=l.sibling,m=l.return;if(g0(l),l===o){Gt=null;break e}if(d!==null){d.return=m,Gt=d;break e}Gt=m}}}var _E={getCacheForType:function(n){var a=en(jt),o=a.data.get(n);return o===void 0&&(o=n(),a.data.set(n,o)),o},cacheSignal:function(){return en(jt).controller.signal}},SE=typeof WeakMap=="function"?WeakMap:Map,at=0,ft=null,Ve=null,Ge=0,ot=0,zn=null,Ra=!1,wo=!1,kh=!1,ia=0,Et=0,Aa=0,wi=0,Rh=0,Dn=0,xo=0,Ls=null,Sn=null,Ah=!1,Hc=0,N0=0,Bc=1/0,Fc=null,Oa=null,Yt=0,Ma=null,_o=null,oa=0,Oh=0,Mh=null,k0=null,Us=0,zh=null;function jn(){return(at&2)!==0&&Ge!==0?Ge&-Ge:S.T!==null?Bh():be()}function R0(){if(Dn===0)if((Ge&536870912)===0||Ke){var n=Gi;Gi<<=1,(Gi&3932160)===0&&(Gi=262144),Dn=n}else Dn=536870912;return n=On.current,n!==null&&(n.flags|=32),Dn}function En(n,a,o){(n===ft&&(ot===2||ot===9)||n.cancelPendingCommit!==null)&&(So(n,0),za(n,Ge,Dn,!1)),j(n,o),((at&2)===0||n!==ft)&&(n===ft&&((at&2)===0&&(wi|=o),Et===4&&za(n,Ge,Dn,!1)),Ar(n))}function A0(n,a,o){if((at&6)!==0)throw Error(i(327));var l=!o&&(a&127)===0&&(a&n.expiredLanes)===0||Sr(n,a),d=l?CE(n,a):jh(n,a,!0),m=l;do{if(d===0){wo&&!l&&za(n,a,0,!1);break}else{if(o=n.current.alternate,m&&!EE(o)){d=jh(n,a,!1),m=!1;continue}if(d===2){if(m=a,n.errorRecoveryDisabledLanes&m)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){a=b;e:{var C=n;d=Ls;var D=C.current.memoizedState.isDehydrated;if(D&&(So(C,b).flags|=256),b=jh(C,b,!1),b!==2){if(kh&&!D){C.errorRecoveryDisabledLanes|=m,wi|=m,d=4;break e}m=Sn,Sn=d,m!==null&&(Sn===null?Sn=m:Sn.push.apply(Sn,m))}d=b}if(m=!1,d!==2)continue}}if(d===1){So(n,0),za(n,a,0,!0);break}e:{switch(l=n,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:za(l,a,Dn,!Ra);break e;case 2:Sn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(d=Hc+300-sn(),10<d)){if(za(l,a,Dn,!Ra),ni(l,0,!0)!==0)break e;oa=a,l.timeoutHandle=sb(O0.bind(null,l,o,Sn,Fc,Ah,a,Dn,wi,xo,Ra,m,"Throttled",-0,0),d);break e}O0(l,o,Sn,Fc,Ah,a,Dn,wi,xo,Ra,m,null,-0,0)}}break}while(!0);Ar(n)}function O0(n,a,o,l,d,m,b,C,D,X,ee,ne,I,K){if(n.timeoutHandle=-1,ne=a.subtreeFlags,ne&8192||(ne&16785408)===16785408){ne={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pr},S0(a,m,ne);var ve=(m&62914560)===m?Hc-sn():(m&4194048)===m?N0-sn():0;if(ve=lT(ne,ve),ve!==null){oa=m,n.cancelPendingCommit=ve(B0.bind(null,n,a,m,o,l,d,b,C,D,ee,ne,null,I,K)),za(n,m,b,!X);return}}B0(n,a,m,o,l,d,b,C,D)}function EE(n){for(var a=n;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var l=0;l<o.length;l++){var d=o[l],m=d.getSnapshot;d=d.value;try{if(!Rn(m(),d))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function za(n,a,o,l){a&=~Rh,a&=~wi,n.suspendedLanes|=a,n.pingedLanes&=~a,l&&(n.warmLanes|=a),l=n.expirationTimes;for(var d=a;0<d;){var m=31-hn(d),b=1<<m;l[m]=-1,d&=~b}o!==0&&Q(n,o,a)}function $c(){return(at&6)===0?(Hs(0),!1):!0}function Dh(){if(Ve!==null){if(ot===0)var n=Ve.return;else n=Ve,Wr=di=null,Qf(n),ho=null,ws=0,n=Ve;for(;n!==null;)l0(n.alternate,n),n=n.return;Ve=null}}function So(n,a){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,VE(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),oa=0,Dh(),ft=n,Ve=o=Ir(n.current,null),Ge=a,ot=0,zn=null,Ra=!1,wo=Sr(n,a),kh=!1,xo=Dn=Rh=wi=Aa=Et=0,Sn=Ls=null,Ah=!1,(a&8)!==0&&(a|=a&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=a;0<l;){var d=31-hn(l),m=1<<d;a|=n[d],l&=~m}return ia=a,lc(),o}function M0(n,a){Le=null,S.H=ks,a===fo||a===gc?(a=Gv(),ot=3):a===Hf?(a=Gv(),ot=4):ot=a===fh?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,zn=a,Ve===null&&(Et=1,Ac(n,In(a,n.current)))}function z0(){var n=On.current;return n===null?!0:(Ge&4194048)===Ge?Kn===null:(Ge&62914560)===Ge||(Ge&536870912)!==0?n===Kn:!1}function D0(){var n=S.H;return S.H=ks,n===null?ks:n}function j0(){var n=S.A;return S.A=_E,n}function qc(){Et=4,Ra||(Ge&4194048)!==Ge&&On.current!==null||(wo=!0),(Aa&134217727)===0&&(wi&134217727)===0||ft===null||za(ft,Ge,Dn,!1)}function jh(n,a,o){var l=at;at|=2;var d=D0(),m=j0();(ft!==n||Ge!==a)&&(Fc=null,So(n,a)),a=!1;var b=Et;e:do try{if(ot!==0&&Ve!==null){var C=Ve,D=zn;switch(ot){case 8:Dh(),b=6;break e;case 3:case 2:case 9:case 6:On.current===null&&(a=!0);var X=ot;if(ot=0,zn=null,Eo(n,C,D,X),o&&wo){b=0;break e}break;default:X=ot,ot=0,zn=null,Eo(n,C,D,X)}}TE(),b=Et;break}catch(ee){M0(n,ee)}while(!0);return a&&n.shellSuspendCounter++,Wr=di=null,at=l,S.H=d,S.A=m,Ve===null&&(ft=null,Ge=0,lc()),b}function TE(){for(;Ve!==null;)L0(Ve)}function CE(n,a){var o=at;at|=2;var l=D0(),d=j0();ft!==n||Ge!==a?(Fc=null,Bc=sn()+500,So(n,a)):wo=Sr(n,a);e:do try{if(ot!==0&&Ve!==null){a=Ve;var m=zn;t:switch(ot){case 1:ot=0,zn=null,Eo(n,a,m,1);break;case 2:case 9:if(Xv(m)){ot=0,zn=null,U0(a);break}a=function(){ot!==2&&ot!==9||ft!==n||(ot=7),Ar(n)},m.then(a,a);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:Xv(m)?(ot=0,zn=null,U0(a)):(ot=0,zn=null,Eo(n,a,m,7));break;case 5:var b=null;switch(Ve.tag){case 26:b=Ve.memoizedState;case 5:case 27:var C=Ve;if(b?_b(b):C.stateNode.complete){ot=0,zn=null;var D=C.sibling;if(D!==null)Ve=D;else{var X=C.return;X!==null?(Ve=X,Yc(X)):Ve=null}break t}}ot=0,zn=null,Eo(n,a,m,5);break;case 6:ot=0,zn=null,Eo(n,a,m,6);break;case 8:Dh(),Et=6;break e;default:throw Error(i(462))}}NE();break}catch(ee){M0(n,ee)}while(!0);return Wr=di=null,S.H=l,S.A=d,at=o,Ve!==null?0:(ft=null,Ge=0,lc(),Et)}function NE(){for(;Ve!==null&&!$r();)L0(Ve)}function L0(n){var a=o0(n.alternate,n,ia);n.memoizedProps=n.pendingProps,a===null?Yc(n):Ve=a}function U0(n){var a=n,o=a.alternate;switch(a.tag){case 15:case 0:a=e0(o,a,a.pendingProps,a.type,void 0,Ge);break;case 11:a=e0(o,a,a.pendingProps,a.type.render,a.ref,Ge);break;case 5:Qf(a);default:l0(o,a),a=Ve=jv(a,ia),a=o0(o,a,ia)}n.memoizedProps=n.pendingProps,a===null?Yc(n):Ve=a}function Eo(n,a,o,l){Wr=di=null,Qf(a),ho=null,ws=0;var d=a.return;try{if(mE(n,d,a,o,Ge)){Et=1,Ac(n,In(o,n.current)),Ve=null;return}}catch(m){if(d!==null)throw Ve=d,m;Et=1,Ac(n,In(o,n.current)),Ve=null;return}a.flags&32768?(Ke||l===1?n=!0:wo||(Ge&536870912)!==0?n=!1:(Ra=n=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),H0(a,n)):Yc(a)}function Yc(n){var a=n;do{if((a.flags&32768)!==0){H0(a,Ra);return}n=a.return;var o=yE(a.alternate,a,ia);if(o!==null){Ve=o;return}if(a=a.sibling,a!==null){Ve=a;return}Ve=a=n}while(a!==null);Et===0&&(Et=5)}function H0(n,a){do{var o=bE(n.alternate,n);if(o!==null){o.flags&=32767,Ve=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(n=n.sibling,n!==null)){Ve=n;return}Ve=n=o}while(n!==null);Et=6,Ve=null}function B0(n,a,o,l,d,m,b,C,D){n.cancelPendingCommit=null;do Vc();while(Yt!==0);if((at&6)!==0)throw Error(i(327));if(a!==null){if(a===n.current)throw Error(i(177));if(m=a.lanes|a.childLanes,m|=Sf,V(n,o,m,b,C,D),n===ft&&(Ve=ft=null,Ge=0),_o=a,Ma=n,oa=o,Oh=m,Mh=d,k0=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,OE(ei,function(){return V0(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=S.T,S.T=null,d=z.p,z.p=2,b=at,at|=4;try{wE(n,a,o)}finally{at=b,z.p=d,S.T=l}}Yt=1,F0(),$0(),q0()}}function F0(){if(Yt===1){Yt=0;var n=Ma,a=_o,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=S.T,S.T=null;var l=z.p;z.p=2;var d=at;at|=4;try{w0(a,n);var m=Ih,b=Cv(n.containerInfo),C=m.focusedElem,D=m.selectionRange;if(b!==C&&C&&C.ownerDocument&&Tv(C.ownerDocument.documentElement,C)){if(D!==null&&yf(C)){var X=D.start,ee=D.end;if(ee===void 0&&(ee=X),"selectionStart"in C)C.selectionStart=X,C.selectionEnd=Math.min(ee,C.value.length);else{var ne=C.ownerDocument||document,I=ne&&ne.defaultView||window;if(I.getSelection){var K=I.getSelection(),ve=C.textContent.length,Ae=Math.min(D.start,ve),dt=D.end===void 0?Ae:Math.min(D.end,ve);!K.extend&&Ae>dt&&(b=dt,dt=Ae,Ae=b);var q=Ev(C,Ae),L=Ev(C,dt);if(q&&L&&(K.rangeCount!==1||K.anchorNode!==q.node||K.anchorOffset!==q.offset||K.focusNode!==L.node||K.focusOffset!==L.offset)){var P=ne.createRange();P.setStart(q.node,q.offset),K.removeAllRanges(),Ae>dt?(K.addRange(P),K.extend(L.node,L.offset)):(P.setEnd(L.node,L.offset),K.addRange(P))}}}}for(ne=[],K=C;K=K.parentNode;)K.nodeType===1&&ne.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ne.length;C++){var te=ne[C];te.element.scrollLeft=te.left,te.element.scrollTop=te.top}}nu=!!Xh,Ih=Xh=null}finally{at=d,z.p=l,S.T=o}}n.current=a,Yt=2}}function $0(){if(Yt===2){Yt=0;var n=Ma,a=_o,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=S.T,S.T=null;var l=z.p;z.p=2;var d=at;at|=4;try{m0(n,a.alternate,a)}finally{at=d,z.p=l,S.T=o}}Yt=3}}function q0(){if(Yt===4||Yt===3){Yt=0,Za();var n=Ma,a=_o,o=oa,l=k0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Yt=5:(Yt=0,_o=Ma=null,Y0(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(Oa=null),Ee(o),a=a.stateNode,ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(ga,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=S.T,d=z.p,z.p=2,S.T=null;try{for(var m=n.onRecoverableError,b=0;b<l.length;b++){var C=l[b];m(C.value,{componentStack:C.stack})}}finally{S.T=a,z.p=d}}(oa&3)!==0&&Vc(),Ar(n),d=n.pendingLanes,(o&261930)!==0&&(d&42)!==0?n===zh?Us++:(Us=0,zh=n):Us=0,Hs(0)}}function Y0(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,ys(a)))}function Vc(){return F0(),$0(),q0(),V0()}function V0(){if(Yt!==5)return!1;var n=Ma,a=Oh;Oh=0;var o=Ee(oa),l=S.T,d=z.p;try{z.p=32>o?32:o,S.T=null,o=Mh,Mh=null;var m=Ma,b=oa;if(Yt=0,_o=Ma=null,oa=0,(at&6)!==0)throw Error(i(331));var C=at;if(at|=4,T0(m.current),_0(m,m.current,b,o),at=C,Hs(0,!1),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(ga,m)}catch{}return!0}finally{z.p=d,S.T=l,Y0(n,a)}}function P0(n,a,o){a=In(o,a),a=dh(n.stateNode,a,2),n=Ta(n,a,2),n!==null&&(j(n,2),Ar(n))}function st(n,a,o){if(n.tag===3)P0(n,n,o);else for(;a!==null;){if(a.tag===3){P0(a,n,o);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Oa===null||!Oa.has(l))){n=In(o,n),o=Xy(2),l=Ta(a,o,2),l!==null&&(Iy(o,l,a,n),j(l,2),Ar(l));break}}a=a.return}}function Lh(n,a,o){var l=n.pingCache;if(l===null){l=n.pingCache=new SE;var d=new Set;l.set(a,d)}else d=l.get(a),d===void 0&&(d=new Set,l.set(a,d));d.has(o)||(kh=!0,d.add(o),n=kE.bind(null,n,a,o),a.then(n,n))}function kE(n,a,o){var l=n.pingCache;l!==null&&l.delete(a),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,ft===n&&(Ge&o)===o&&(Et===4||Et===3&&(Ge&62914560)===Ge&&300>sn()-Hc?(at&2)===0&&So(n,0):Rh|=o,xo===Ge&&(xo=0)),Ar(n)}function X0(n,a){a===0&&(a=Jl()),n=li(n,a),n!==null&&(j(n,a),Ar(n))}function RE(n){var a=n.memoizedState,o=0;a!==null&&(o=a.retryLane),X0(n,o)}function AE(n,a){var o=0;switch(n.tag){case 31:case 13:var l=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(a),X0(n,o)}function OE(n,a){return rs(n,a)}var Pc=null,To=null,Uh=!1,Xc=!1,Hh=!1,Da=0;function Ar(n){n!==To&&n.next===null&&(To===null?Pc=To=n:To=To.next=n),Xc=!0,Uh||(Uh=!0,zE())}function Hs(n,a){if(!Hh&&Xc){Hh=!0;do for(var o=!1,l=Pc;l!==null;){if(n!==0){var d=l.pendingLanes;if(d===0)var m=0;else{var b=l.suspendedLanes,C=l.pingedLanes;m=(1<<31-hn(42|n)+1)-1,m&=d&~(b&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,Q0(l,m))}else m=Ge,m=ni(l,l===ft?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Sr(l,m)||(o=!0,Q0(l,m));l=l.next}while(o);Hh=!1}}function ME(){I0()}function I0(){Xc=Uh=!1;var n=0;Da!==0&&YE()&&(n=Da);for(var a=sn(),o=null,l=Pc;l!==null;){var d=l.next,m=G0(l,a);m===0?(l.next=null,o===null?Pc=d:o.next=d,d===null&&(To=o)):(o=l,(n!==0||(m&3)!==0)&&(Xc=!0)),l=d}Yt!==0&&Yt!==5||Hs(n),Da!==0&&(Da=0)}function G0(n,a){for(var o=n.suspendedLanes,l=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var b=31-hn(m),C=1<<b,D=d[b];D===-1?((C&o)===0||(C&l)!==0)&&(d[b]=Wi(C,a)):D<=a&&(n.expiredLanes|=C),m&=~C}if(a=ft,o=Ge,o=ni(n,n===a?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,o===0||n===a&&(ot===2||ot===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&as(l),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Sr(n,o)){if(a=o&-o,a===n.callbackPriority)return a;switch(l!==null&&as(l),Ee(o)){case 2:case 8:o=$n;break;case 32:o=ei;break;case 268435456:o=Xi;break;default:o=ei}return l=W0.bind(null,n),o=rs(o,l),n.callbackPriority=a,n.callbackNode=o,a}return l!==null&&l!==null&&as(l),n.callbackPriority=2,n.callbackNode=null,2}function W0(n,a){if(Yt!==0&&Yt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Vc()&&n.callbackNode!==o)return null;var l=Ge;return l=ni(n,n===ft?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(A0(n,l,a),G0(n,sn()),n.callbackNode!=null&&n.callbackNode===o?W0.bind(null,n):null)}function Q0(n,a){if(Vc())return null;A0(n,a,!0)}function zE(){PE(function(){(at&6)!==0?rs(Fn,ME):I0()})}function Bh(){if(Da===0){var n=co;n===0&&(n=va,va<<=1,(va&261888)===0&&(va=256)),Da=n}return Da}function K0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ec(""+n)}function J0(n,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,n.id&&o.setAttribute("form",n.id),a.parentNode.insertBefore(o,a),n=new FormData(n),o.parentNode.removeChild(o),n}function DE(n,a,o,l,d){if(a==="submit"&&o&&o.stateNode===d){var m=K0((d[pe]||null).action),b=l.submitter;b&&(a=(a=b[pe]||null)?K0(a.formAction):b.getAttribute("formAction"),a!==null&&(m=a,b=null));var C=new ac("action","action",null,l,d);n.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Da!==0){var D=b?J0(d,b):new FormData(d);ih(o,{pending:!0,data:D,method:d.method,action:m},null,D)}}else typeof m=="function"&&(C.preventDefault(),D=b?J0(d,b):new FormData(d),ih(o,{pending:!0,data:D,method:d.method,action:m},m,D))},currentTarget:d}]})}}for(var Fh=0;Fh<_f.length;Fh++){var $h=_f[Fh],jE=$h.toLowerCase(),LE=$h[0].toUpperCase()+$h.slice(1);ur(jE,"on"+LE)}ur(Rv,"onAnimationEnd"),ur(Av,"onAnimationIteration"),ur(Ov,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(JS,"onTransitionRun"),ur(ZS,"onTransitionStart"),ur(eE,"onTransitionCancel"),ur(Mv,"onTransitionEnd"),qe("onMouseEnter",["mouseout","mouseover"]),qe("onMouseLeave",["mouseout","mouseover"]),qe("onPointerEnter",["pointerout","pointerover"]),qe("onPointerLeave",["pointerout","pointerover"]),Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bs));function Z0(n,a){a=(a&4)!==0;for(var o=0;o<n.length;o++){var l=n[o],d=l.event;l=l.listeners;e:{var m=void 0;if(a)for(var b=l.length-1;0<=b;b--){var C=l[b],D=C.instance,X=C.currentTarget;if(C=C.listener,D!==m&&d.isPropagationStopped())break e;m=C,d.currentTarget=X;try{m(d)}catch(ee){sc(ee)}d.currentTarget=null,m=D}else for(b=0;b<l.length;b++){if(C=l[b],D=C.instance,X=C.currentTarget,C=C.listener,D!==m&&d.isPropagationStopped())break e;m=C,d.currentTarget=X;try{m(d)}catch(ee){sc(ee)}d.currentTarget=null,m=D}}}}function Pe(n,a){var o=a[lt];o===void 0&&(o=a[lt]=new Set);var l=n+"__bubble";o.has(l)||(eb(a,n,2,!1),o.add(l))}function qh(n,a,o){var l=0;a&&(l|=4),eb(o,n,l,a)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function Yh(n){if(!n[Ic]){n[Ic]=!0,Tr.forEach(function(o){o!=="selectionchange"&&(UE.has(o)||qh(o,!1,n),qh(o,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Ic]||(a[Ic]=!0,qh("selectionchange",!1,a))}}function eb(n,a,o,l){switch(Rb(a)){case 2:var d=dT;break;case 8:d=fT;break;default:d=ap}o=d.bind(null,a,o,n),d=void 0,!cf||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(d=!0),l?d!==void 0?n.addEventListener(a,o,{capture:!0,passive:d}):n.addEventListener(a,o,!0):d!==void 0?n.addEventListener(a,o,{passive:d}):n.addEventListener(a,o,!1)}function Vh(n,a,o,l,d){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var C=l.stateNode.containerInfo;if(C===d)break;if(b===4)for(b=l.return;b!==null;){var D=b.tag;if((D===3||D===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;C!==null;){if(b=qn(C),b===null)return;if(D=b.tag,D===5||D===6||D===26||D===27){l=m=b;continue e}C=C.parentNode}}l=l.return}iv(function(){var X=m,ee=sf(o),ne=[];e:{var I=zv.get(n);if(I!==void 0){var K=ac,ve=n;switch(n){case"keypress":if(nc(o)===0)break e;case"keydown":case"keyup":K=AS;break;case"focusin":ve="focus",K=hf;break;case"focusout":ve="blur",K=hf;break;case"beforeblur":case"afterblur":K=hf;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=lv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=yS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=zS;break;case Rv:case Av:case Ov:K=xS;break;case Mv:K=jS;break;case"scroll":case"scrollend":K=gS;break;case"wheel":K=US;break;case"copy":case"cut":case"paste":K=SS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=uv;break;case"toggle":case"beforetoggle":K=BS}var Ae=(a&4)!==0,dt=!Ae&&(n==="scroll"||n==="scrollend"),q=Ae?I!==null?I+"Capture":null:I;Ae=[];for(var L=X,P;L!==null;){var te=L;if(P=te.stateNode,te=te.tag,te!==5&&te!==26&&te!==27||P===null||q===null||(te=ss(L,q),te!=null&&Ae.push(Fs(L,te,P))),dt)break;L=L.return}0<Ae.length&&(I=new K(I,ve,null,o,ee),ne.push({event:I,listeners:Ae}))}}if((a&7)===0){e:{if(I=n==="mouseover"||n==="pointerover",K=n==="mouseout"||n==="pointerout",I&&o!==of&&(ve=o.relatedTarget||o.fromElement)&&(qn(ve)||ve[$e]))break e;if((K||I)&&(I=ee.window===ee?ee:(I=ee.ownerDocument)?I.defaultView||I.parentWindow:window,K?(ve=o.relatedTarget||o.toElement,K=X,ve=ve?qn(ve):null,ve!==null&&(dt=c(ve),Ae=ve.tag,ve!==dt||Ae!==5&&Ae!==27&&Ae!==6)&&(ve=null)):(K=null,ve=X),K!==ve)){if(Ae=lv,te="onMouseLeave",q="onMouseEnter",L="mouse",(n==="pointerout"||n==="pointerover")&&(Ae=uv,te="onPointerLeave",q="onPointerEnter",L="pointer"),dt=K==null?I:cn(K),P=ve==null?I:cn(ve),I=new Ae(te,L+"leave",K,o,ee),I.target=dt,I.relatedTarget=P,te=null,qn(ee)===X&&(Ae=new Ae(q,L+"enter",ve,o,ee),Ae.target=P,Ae.relatedTarget=dt,te=Ae),dt=te,K&&ve)t:{for(Ae=HE,q=K,L=ve,P=0,te=q;te;te=Ae(te))P++;te=0;for(var ke=L;ke;ke=Ae(ke))te++;for(;0<P-te;)q=Ae(q),P--;for(;0<te-P;)L=Ae(L),te--;for(;P--;){if(q===L||L!==null&&q===L.alternate){Ae=q;break t}q=Ae(q),L=Ae(L)}Ae=null}else Ae=null;K!==null&&tb(ne,I,K,Ae,!1),ve!==null&&dt!==null&&tb(ne,dt,ve,Ae,!0)}}e:{if(I=X?cn(X):window,K=I.nodeName&&I.nodeName.toLowerCase(),K==="select"||K==="input"&&I.type==="file")var tt=yv;else if(gv(I))if(bv)tt=WS;else{tt=IS;var xe=XS}else K=I.nodeName,!K||K.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?X&&af(X.elementType)&&(tt=yv):tt=GS;if(tt&&(tt=tt(n,X))){vv(ne,tt,o,ee);break e}xe&&xe(n,I,X),n==="focusout"&&X&&I.type==="number"&&X.memoizedProps.value!=null&&rf(I,"number",I.value)}switch(xe=X?cn(X):window,n){case"focusin":(gv(xe)||xe.contentEditable==="true")&&(to=xe,bf=X,ms=null);break;case"focusout":ms=bf=to=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,Nv(ne,o,ee);break;case"selectionchange":if(KS)break;case"keydown":case"keyup":Nv(ne,o,ee)}var He;if(mf)e:{switch(n){case"compositionstart":var We="onCompositionStart";break e;case"compositionend":We="onCompositionEnd";break e;case"compositionupdate":We="onCompositionUpdate";break e}We=void 0}else eo?pv(n,o)&&(We="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(We="onCompositionStart");We&&(dv&&o.locale!=="ko"&&(eo||We!=="onCompositionStart"?We==="onCompositionEnd"&&eo&&(He=ov()):(ya=ee,uf="value"in ya?ya.value:ya.textContent,eo=!0)),xe=Gc(X,We),0<xe.length&&(We=new cv(We,n,null,o,ee),ne.push({event:We,listeners:xe}),He?We.data=He:(He=mv(o),He!==null&&(We.data=He)))),(He=$S?qS(n,o):YS(n,o))&&(We=Gc(X,"onBeforeInput"),0<We.length&&(xe=new cv("onBeforeInput","beforeinput",null,o,ee),ne.push({event:xe,listeners:We}),xe.data=He)),DE(ne,n,X,o,ee)}Z0(ne,a)})}function Fs(n,a,o){return{instance:n,listener:a,currentTarget:o}}function Gc(n,a){for(var o=a+"Capture",l=[];n!==null;){var d=n,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=ss(n,o),d!=null&&l.unshift(Fs(n,d,m)),d=ss(n,a),d!=null&&l.push(Fs(n,d,m))),n.tag===3)return l;n=n.return}return[]}function HE(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function tb(n,a,o,l,d){for(var m=a._reactName,b=[];o!==null&&o!==l;){var C=o,D=C.alternate,X=C.stateNode;if(C=C.tag,D!==null&&D===l)break;C!==5&&C!==26&&C!==27||X===null||(D=X,d?(X=ss(o,m),X!=null&&b.unshift(Fs(o,X,D))):d||(X=ss(o,m),X!=null&&b.push(Fs(o,X,D)))),o=o.return}b.length!==0&&n.push({event:a,listeners:b})}var BE=/\r\n?/g,FE=/\u0000|\uFFFD/g;function nb(n){return(typeof n=="string"?n:""+n).replace(BE,`
`).replace(FE,"")}function rb(n,a){return a=nb(a),nb(n)===a}function ut(n,a,o,l,d,m){switch(o){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Ki(n,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Ki(n,""+l);break;case"className":ai(n,"class",l);break;case"tabIndex":ai(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ai(n,o,l);break;case"style":rv(n,l,m);break;case"data":if(a!=="object"){ai(n,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||o!=="href")){n.removeAttribute(o);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(o);break}l=ec(""+l),n.setAttribute(o,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(a!=="input"&&ut(n,a,"name",d.name,d,null),ut(n,a,"formEncType",d.formEncType,d,null),ut(n,a,"formMethod",d.formMethod,d,null),ut(n,a,"formTarget",d.formTarget,d,null)):(ut(n,a,"encType",d.encType,d,null),ut(n,a,"method",d.method,d,null),ut(n,a,"target",d.target,d,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(o);break}l=ec(""+l),n.setAttribute(o,l);break;case"onClick":l!=null&&(n.onclick=Pr);break;case"onScroll":l!=null&&Pe("scroll",n);break;case"onScrollEnd":l!=null&&Pe("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(o=l.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}o=ec(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(o,""+l):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":l===!0?n.setAttribute(o,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(o,l):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(o,l):n.removeAttribute(o);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(o):n.setAttribute(o,l);break;case"popover":Pe("beforetoggle",n),Pe("toggle",n),Vr(n,"popover",l);break;case"xlinkActuate":cr(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":cr(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":cr(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":cr(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":cr(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":cr(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":cr(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":cr(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":cr(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Vr(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=pS.get(o)||o,Vr(n,o,l))}}function Ph(n,a,o,l,d,m){switch(o){case"style":rv(n,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(o=l.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof l=="string"?Ki(n,l):(typeof l=="number"||typeof l=="bigint")&&Ki(n,""+l);break;case"onScroll":l!=null&&Pe("scroll",n);break;case"onScrollEnd":l!=null&&Pe("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Pr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ri.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),a=o.slice(2,d?o.length-7:void 0),m=n[pe]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(a,m,d),typeof l=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(a,l,d);break e}o in n?n[o]=l:l===!0?n.setAttribute(o,""):Vr(n,o,l)}}}function nn(n,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",n),Pe("load",n);var l=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var b=o[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:ut(n,a,m,b,o,null)}}d&&ut(n,a,"srcSet",o.srcSet,o,null),l&&ut(n,a,"src",o.src,o,null);return;case"input":Pe("invalid",n);var C=m=b=d=null,D=null,X=null;for(l in o)if(o.hasOwnProperty(l)){var ee=o[l];if(ee!=null)switch(l){case"name":d=ee;break;case"type":b=ee;break;case"checked":D=ee;break;case"defaultChecked":X=ee;break;case"value":m=ee;break;case"defaultValue":C=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(i(137,a));break;default:ut(n,a,l,ee,o,null)}}Zg(n,m,C,D,X,b,d,!1);return;case"select":Pe("invalid",n),l=b=m=null;for(d in o)if(o.hasOwnProperty(d)&&(C=o[d],C!=null))switch(d){case"value":m=C;break;case"defaultValue":b=C;break;case"multiple":l=C;default:ut(n,a,d,C,o,null)}a=m,o=b,n.multiple=!!l,a!=null?Qi(n,!!l,a,!1):o!=null&&Qi(n,!!l,o,!0);return;case"textarea":Pe("invalid",n),m=d=l=null;for(b in o)if(o.hasOwnProperty(b)&&(C=o[b],C!=null))switch(b){case"value":l=C;break;case"defaultValue":d=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(i(91));break;default:ut(n,a,b,C,o,null)}tv(n,l,d,m);return;case"option":for(D in o)if(o.hasOwnProperty(D)&&(l=o[D],l!=null))switch(D){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ut(n,a,D,l,o,null)}return;case"dialog":Pe("beforetoggle",n),Pe("toggle",n),Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":Pe("load",n);break;case"video":case"audio":for(l=0;l<Bs.length;l++)Pe(Bs[l],n);break;case"image":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"embed":case"source":case"link":Pe("error",n),Pe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in o)if(o.hasOwnProperty(X)&&(l=o[X],l!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:ut(n,a,X,l,o,null)}return;default:if(af(a)){for(ee in o)o.hasOwnProperty(ee)&&(l=o[ee],l!==void 0&&Ph(n,a,ee,l,o,void 0));return}}for(C in o)o.hasOwnProperty(C)&&(l=o[C],l!=null&&ut(n,a,C,l,o,null))}function $E(n,a,o,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,b=null,C=null,D=null,X=null,ee=null;for(K in o){var ne=o[K];if(o.hasOwnProperty(K)&&ne!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":D=ne;default:l.hasOwnProperty(K)||ut(n,a,K,null,l,ne)}}for(var I in l){var K=l[I];if(ne=o[I],l.hasOwnProperty(I)&&(K!=null||ne!=null))switch(I){case"type":m=K;break;case"name":d=K;break;case"checked":X=K;break;case"defaultChecked":ee=K;break;case"value":b=K;break;case"defaultValue":C=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,a));break;default:K!==ne&&ut(n,a,I,K,l,ne)}}nf(n,b,C,D,X,ee,m,d);return;case"select":K=b=C=I=null;for(m in o)if(D=o[m],o.hasOwnProperty(m)&&D!=null)switch(m){case"value":break;case"multiple":K=D;default:l.hasOwnProperty(m)||ut(n,a,m,null,l,D)}for(d in l)if(m=l[d],D=o[d],l.hasOwnProperty(d)&&(m!=null||D!=null))switch(d){case"value":I=m;break;case"defaultValue":C=m;break;case"multiple":b=m;default:m!==D&&ut(n,a,d,m,l,D)}a=C,o=b,l=K,I!=null?Qi(n,!!o,I,!1):!!l!=!!o&&(a!=null?Qi(n,!!o,a,!0):Qi(n,!!o,o?[]:"",!1));return;case"textarea":K=I=null;for(C in o)if(d=o[C],o.hasOwnProperty(C)&&d!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:ut(n,a,C,null,l,d)}for(b in l)if(d=l[b],m=o[b],l.hasOwnProperty(b)&&(d!=null||m!=null))switch(b){case"value":I=d;break;case"defaultValue":K=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&ut(n,a,b,d,l,m)}ev(n,I,K);return;case"option":for(var ve in o)if(I=o[ve],o.hasOwnProperty(ve)&&I!=null&&!l.hasOwnProperty(ve))switch(ve){case"selected":n.selected=!1;break;default:ut(n,a,ve,null,l,I)}for(D in l)if(I=l[D],K=o[D],l.hasOwnProperty(D)&&I!==K&&(I!=null||K!=null))switch(D){case"selected":n.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:ut(n,a,D,I,l,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in o)I=o[Ae],o.hasOwnProperty(Ae)&&I!=null&&!l.hasOwnProperty(Ae)&&ut(n,a,Ae,null,l,I);for(X in l)if(I=l[X],K=o[X],l.hasOwnProperty(X)&&I!==K&&(I!=null||K!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(i(137,a));break;default:ut(n,a,X,I,l,K)}return;default:if(af(a)){for(var dt in o)I=o[dt],o.hasOwnProperty(dt)&&I!==void 0&&!l.hasOwnProperty(dt)&&Ph(n,a,dt,void 0,l,I);for(ee in l)I=l[ee],K=o[ee],!l.hasOwnProperty(ee)||I===K||I===void 0&&K===void 0||Ph(n,a,ee,I,l,K);return}}for(var q in o)I=o[q],o.hasOwnProperty(q)&&I!=null&&!l.hasOwnProperty(q)&&ut(n,a,q,null,l,I);for(ne in l)I=l[ne],K=o[ne],!l.hasOwnProperty(ne)||I===K||I==null&&K==null||ut(n,a,ne,I,l,K)}function ab(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qE(){if(typeof performance.getEntriesByType=="function"){for(var n=0,a=0,o=performance.getEntriesByType("resource"),l=0;l<o.length;l++){var d=o[l],m=d.transferSize,b=d.initiatorType,C=d.duration;if(m&&C&&ab(b)){for(b=0,C=d.responseEnd,l+=1;l<o.length;l++){var D=o[l],X=D.startTime;if(X>C)break;var ee=D.transferSize,ne=D.initiatorType;ee&&ab(ne)&&(D=D.responseEnd,b+=ee*(D<C?1:(C-X)/(D-X)))}if(--l,a+=8*(m+b)/(d.duration/1e3),n++,10<n)break}}if(0<n)return a/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Xh=null,Ih=null;function Wc(n){return n.nodeType===9?n:n.ownerDocument}function ib(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ob(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function Gh(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Wh=null;function YE(){var n=window.event;return n&&n.type==="popstate"?n===Wh?!1:(Wh=n,!0):(Wh=null,!1)}var sb=typeof setTimeout=="function"?setTimeout:void 0,VE=typeof clearTimeout=="function"?clearTimeout:void 0,lb=typeof Promise=="function"?Promise:void 0,PE=typeof queueMicrotask=="function"?queueMicrotask:typeof lb<"u"?function(n){return lb.resolve(null).then(n).catch(XE)}:sb;function XE(n){setTimeout(function(){throw n})}function ja(n){return n==="head"}function cb(n,a){var o=a,l=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"||o==="/&"){if(l===0){n.removeChild(d),Ro(a);return}l--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")l++;else if(o==="html")$s(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,$s(o);for(var m=o.firstChild;m;){var b=m.nextSibling,C=m.nodeName;m[rt]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=b}}else o==="body"&&$s(n.ownerDocument.body);o=d}while(o);Ro(a)}function ub(n,a){var o=n;n=0;do{var l=o.nextSibling;if(o.nodeType===1?a?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(a?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),l&&l.nodeType===8)if(o=l.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=l}while(o)}function Qh(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Qh(o),lr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function IE(n,a,o,l){for(;n.nodeType===1;){var d=o;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[rt])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Jn(n.nextSibling),n===null)break}return null}function GE(n,a,o){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Jn(n.nextSibling),n===null))return null;return n}function db(n,a){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Jn(n.nextSibling),n===null))return null;return n}function Kh(n){return n.data==="$?"||n.data==="$~"}function Jh(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function WE(n,a){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=a;else if(n.data!=="$?"||o.readyState!=="loading")a();else{var l=function(){a(),o.removeEventListener("DOMContentLoaded",l)};o.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function Jn(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return n}var Zh=null;function fb(n){n=n.nextSibling;for(var a=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(a===0)return Jn(n.nextSibling);a--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||a++}n=n.nextSibling}return null}function hb(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(a===0)return n;a--}else o!=="/$"&&o!=="/&"||a++}n=n.previousSibling}return null}function pb(n,a,o){switch(a=Wc(o),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function $s(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);lr(n)}var Zn=new Map,mb=new Set;function Qc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var sa=z.d;z.d={f:QE,r:KE,D:JE,C:ZE,L:eT,m:tT,X:rT,S:nT,M:aT};function QE(){var n=sa.f(),a=$c();return n||a}function KE(n){var a=pn(n);a!==null&&a.tag===5&&a.type==="form"?My(a):sa.r(n)}var Co=typeof document>"u"?null:document;function gb(n,a,o){var l=Co;if(l&&typeof a=="string"&&a){var d=Pn(a);d='link[rel="'+n+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),mb.has(d)||(mb.add(d),n={rel:n,crossOrigin:o,href:a},l.querySelector(d)===null&&(a=l.createElement("link"),nn(a,"link",n),bt(a),l.head.appendChild(a)))}}function JE(n){sa.D(n),gb("dns-prefetch",n,null)}function ZE(n,a){sa.C(n,a),gb("preconnect",n,a)}function eT(n,a,o){sa.L(n,a,o);var l=Co;if(l&&n&&a){var d='link[rel="preload"][as="'+Pn(a)+'"]';a==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Pn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Pn(o.imageSizes)+'"]')):d+='[href="'+Pn(n)+'"]';var m=d;switch(a){case"style":m=No(n);break;case"script":m=ko(n)}Zn.has(m)||(n=v({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:n,as:a},o),Zn.set(m,n),l.querySelector(d)!==null||a==="style"&&l.querySelector(qs(m))||a==="script"&&l.querySelector(Ys(m))||(a=l.createElement("link"),nn(a,"link",n),bt(a),l.head.appendChild(a)))}}function tT(n,a){sa.m(n,a);var o=Co;if(o&&n){var l=a&&typeof a.as=="string"?a.as:"script",d='link[rel="modulepreload"][as="'+Pn(l)+'"][href="'+Pn(n)+'"]',m=d;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ko(n)}if(!Zn.has(m)&&(n=v({rel:"modulepreload",href:n},a),Zn.set(m,n),o.querySelector(d)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ys(m)))return}l=o.createElement("link"),nn(l,"link",n),bt(l),o.head.appendChild(l)}}}function nT(n,a,o){sa.S(n,a,o);var l=Co;if(l&&n){var d=Er(l).hoistableStyles,m=No(n);a=a||"default";var b=d.get(m);if(!b){var C={loading:0,preload:null};if(b=l.querySelector(qs(m)))C.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":a},o),(o=Zn.get(m))&&ep(n,o);var D=b=l.createElement("link");bt(D),nn(D,"link",n),D._p=new Promise(function(X,ee){D.onload=X,D.onerror=ee}),D.addEventListener("load",function(){C.loading|=1}),D.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Kc(b,a,l)}b={type:"stylesheet",instance:b,count:1,state:C},d.set(m,b)}}}function rT(n,a){sa.X(n,a);var o=Co;if(o&&n){var l=Er(o).hoistableScripts,d=ko(n),m=l.get(d);m||(m=o.querySelector(Ys(d)),m||(n=v({src:n,async:!0},a),(a=Zn.get(d))&&tp(n,a),m=o.createElement("script"),bt(m),nn(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function aT(n,a){sa.M(n,a);var o=Co;if(o&&n){var l=Er(o).hoistableScripts,d=ko(n),m=l.get(d);m||(m=o.querySelector(Ys(d)),m||(n=v({src:n,async:!0,type:"module"},a),(a=Zn.get(d))&&tp(n,a),m=o.createElement("script"),bt(m),nn(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(d,m))}}function vb(n,a,o,l){var d=(d=me.current)?Qc(d):null;if(!d)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=No(o.href),o=Er(d).hoistableStyles,l=o.get(a),l||(l={type:"style",instance:null,count:0,state:null},o.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=No(o.href);var m=Er(d).hoistableStyles,b=m.get(n);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,b),(m=d.querySelector(qs(n)))&&!m._p&&(b.instance=m,b.state.loading=5),Zn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Zn.set(n,o),m||iT(d,n,o,b.state))),a&&l===null)throw Error(i(528,""));return b}if(a&&l!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ko(o),o=Er(d).hoistableScripts,l=o.get(a),l||(l={type:"script",instance:null,count:0,state:null},o.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function No(n){return'href="'+Pn(n)+'"'}function qs(n){return'link[rel="stylesheet"]['+n+"]"}function yb(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function iT(n,a,o,l){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=n.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),nn(a,"link",o),bt(a),n.head.appendChild(a))}function ko(n){return'[src="'+Pn(n)+'"]'}function Ys(n){return"script[async]"+n}function bb(n,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var l=n.querySelector('style[data-href~="'+Pn(o.href)+'"]');if(l)return a.instance=l,bt(l),l;var d=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),bt(l),nn(l,"style",d),Kc(l,o.precedence,n),a.instance=l;case"stylesheet":d=No(o.href);var m=n.querySelector(qs(d));if(m)return a.state.loading|=4,a.instance=m,bt(m),m;l=yb(o),(d=Zn.get(d))&&ep(l,d),m=(n.ownerDocument||n).createElement("link"),bt(m);var b=m;return b._p=new Promise(function(C,D){b.onload=C,b.onerror=D}),nn(m,"link",l),a.state.loading|=4,Kc(m,o.precedence,n),a.instance=m;case"script":return m=ko(o.src),(d=n.querySelector(Ys(m)))?(a.instance=d,bt(d),d):(l=o,(d=Zn.get(m))&&(l=v({},o),tp(l,d)),n=n.ownerDocument||n,d=n.createElement("script"),bt(d),nn(d,"link",l),n.head.appendChild(d),a.instance=d);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Kc(l,o.precedence,n));return a.instance}function Kc(n,a,o){for(var l=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=l.length?l[l.length-1]:null,m=d,b=0;b<l.length;b++){var C=l[b];if(C.dataset.precedence===a)m=C;else if(m!==d)break}m?m.parentNode.insertBefore(n,m.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(n,a.firstChild))}function ep(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function tp(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Jc=null;function wb(n,a,o){if(Jc===null){var l=new Map,d=Jc=new Map;d.set(o,l)}else d=Jc,l=d.get(o),l||(l=new Map,d.set(o,l));if(l.has(n))return l;for(l.set(n,null),o=o.getElementsByTagName(n),d=0;d<o.length;d++){var m=o[d];if(!(m[rt]||m[de]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(a)||"";b=n+b;var C=l.get(b);C?C.push(m):l.set(b,[m])}}return l}function xb(n,a,o){n=n.ownerDocument||n,n.head.insertBefore(o,a==="title"?n.querySelector("head > title"):null)}function oT(n,a,o){if(o===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function _b(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function sT(n,a,o,l){if(o.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var d=No(l.href),m=a.querySelector(qs(d));if(m){a=m._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(n.count++,n=Zc.bind(n),a.then(n,n)),o.state.loading|=4,o.instance=m,bt(m);return}m=a.ownerDocument||a,l=yb(l),(d=Zn.get(d))&&ep(l,d),m=m.createElement("link"),bt(m);var b=m;b._p=new Promise(function(C,D){b.onload=C,b.onerror=D}),nn(m,"link",l),o.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,a),(a=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=Zc.bind(n),a.addEventListener("load",o),a.addEventListener("error",o))}}var np=0;function lT(n,a){return n.stylesheets&&n.count===0&&tu(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var l=setTimeout(function(){if(n.stylesheets&&tu(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+a);0<n.imgBytes&&np===0&&(np=62500*qE());var d=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&tu(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>np?50:800)+a);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(d)}}:null}function Zc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tu(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var eu=null;function tu(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,eu=new Map,a.forEach(cT,n),eu=null,Zc.call(n))}function cT(n,a){if(!(a.state.loading&4)){var o=eu.get(n);if(o)var l=o.get(null);else{o=new Map,eu.set(n,o);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var b=d[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(o.set(b.dataset.precedence,b),l=b)}l&&o.set(null,l)}d=a.instance,b=d.getAttribute("data-precedence"),m=o.get(b)||l,m===l&&o.set(null,d),o.set(b,d),this.count++,l=Zc.bind(this),d.addEventListener("load",l),d.addEventListener("error",l),m?m.parentNode.insertBefore(d,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),a.state.loading|=4}}var Vs={$$typeof:O,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function uT(n,a,o,l,d,m,b,C,D){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=os(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.hiddenUpdates=os(null),this.identifierPrefix=l,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function Sb(n,a,o,l,d,m,b,C,D,X,ee,ne){return n=new uT(n,a,o,b,D,X,ee,ne,C),a=1,m===!0&&(a|=24),m=An(3,null,null,a),n.current=m,m.stateNode=n,a=jf(),a.refCount++,n.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:o,cache:a},Bf(m),n}function Eb(n){return n?(n=ao,n):ao}function Tb(n,a,o,l,d,m){d=Eb(d),l.context===null?l.context=d:l.pendingContext=d,l=Ea(a),l.payload={element:o},m=m===void 0?null:m,m!==null&&(l.callback=m),o=Ta(n,l,a),o!==null&&(En(o,n,a),_s(o,n,a))}function Cb(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<a?o:a}}function rp(n,a){Cb(n,a),(n=n.alternate)&&Cb(n,a)}function Nb(n){if(n.tag===13||n.tag===31){var a=li(n,67108864);a!==null&&En(a,n,67108864),rp(n,67108864)}}function kb(n){if(n.tag===13||n.tag===31){var a=jn();a=Se(a);var o=li(n,a);o!==null&&En(o,n,a),rp(n,a)}}var nu=!0;function dT(n,a,o,l){var d=S.T;S.T=null;var m=z.p;try{z.p=2,ap(n,a,o,l)}finally{z.p=m,S.T=d}}function fT(n,a,o,l){var d=S.T;S.T=null;var m=z.p;try{z.p=8,ap(n,a,o,l)}finally{z.p=m,S.T=d}}function ap(n,a,o,l){if(nu){var d=ip(l);if(d===null)Vh(n,a,l,ru,o),Ab(n,l);else if(pT(d,n,a,o,l))l.stopPropagation();else if(Ab(n,l),a&4&&-1<hT.indexOf(n)){for(;d!==null;){var m=pn(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=qr(m.pendingLanes);if(b!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;b;){var D=1<<31-hn(b);C.entanglements[1]|=D,b&=~D}Ar(m),(at&6)===0&&(Bc=sn()+500,Hs(0))}}break;case 31:case 13:C=li(m,2),C!==null&&En(C,m,2),$c(),rp(m,2)}if(m=ip(l),m===null&&Vh(n,a,l,ru,o),m===d)break;d=m}d!==null&&l.stopPropagation()}else Vh(n,a,l,null,o)}}function ip(n){return n=sf(n),op(n)}var ru=null;function op(n){if(ru=null,n=qn(n),n!==null){var a=c(n);if(a===null)n=null;else{var o=a.tag;if(o===13){if(n=u(a),n!==null)return n;n=null}else if(o===31){if(n=f(a),n!==null)return n;n=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return ru=n,null}function Rb(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(is()){case Fn:return 2;case $n:return 8;case ei:case Zd:return 32;case Xi:return 268435456;default:return 32}default:return 32}}var sp=!1,La=null,Ua=null,Ha=null,Ps=new Map,Xs=new Map,Ba=[],hT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ab(n,a){switch(n){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Ps.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(a.pointerId)}}function Is(n,a,o,l,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:a,domEventName:o,eventSystemFlags:l,nativeEvent:m,targetContainers:[d]},a!==null&&(a=pn(a),a!==null&&Nb(a)),n):(n.eventSystemFlags|=l,a=n.targetContainers,d!==null&&a.indexOf(d)===-1&&a.push(d),n)}function pT(n,a,o,l,d){switch(a){case"focusin":return La=Is(La,n,a,o,l,d),!0;case"dragenter":return Ua=Is(Ua,n,a,o,l,d),!0;case"mouseover":return Ha=Is(Ha,n,a,o,l,d),!0;case"pointerover":var m=d.pointerId;return Ps.set(m,Is(Ps.get(m)||null,n,a,o,l,d)),!0;case"gotpointercapture":return m=d.pointerId,Xs.set(m,Is(Xs.get(m)||null,n,a,o,l,d)),!0}return!1}function Ob(n){var a=qn(n.target);if(a!==null){var o=c(a);if(o!==null){if(a=o.tag,a===13){if(a=u(o),a!==null){n.blockedOn=a,Te(n.priority,function(){kb(o)});return}}else if(a===31){if(a=f(o),a!==null){n.blockedOn=a,Te(n.priority,function(){kb(o)});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function au(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var o=ip(n.nativeEvent);if(o===null){o=n.nativeEvent;var l=new o.constructor(o.type,o);of=l,o.target.dispatchEvent(l),of=null}else return a=pn(o),a!==null&&Nb(a),n.blockedOn=o,!1;a.shift()}return!0}function Mb(n,a,o){au(n)&&o.delete(a)}function mT(){sp=!1,La!==null&&au(La)&&(La=null),Ua!==null&&au(Ua)&&(Ua=null),Ha!==null&&au(Ha)&&(Ha=null),Ps.forEach(Mb),Xs.forEach(Mb)}function iu(n,a){n.blockedOn===a&&(n.blockedOn=null,sp||(sp=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mT)))}var ou=null;function zb(n){ou!==n&&(ou=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){ou===n&&(ou=null);for(var a=0;a<n.length;a+=3){var o=n[a],l=n[a+1],d=n[a+2];if(typeof l!="function"){if(op(l||o)===null)continue;break}var m=pn(o);m!==null&&(n.splice(a,3),a-=3,ih(m,{pending:!0,data:d,method:o.method,action:l},l,d))}}))}function Ro(n){function a(D){return iu(D,n)}La!==null&&iu(La,n),Ua!==null&&iu(Ua,n),Ha!==null&&iu(Ha,n),Ps.forEach(a),Xs.forEach(a);for(var o=0;o<Ba.length;o++){var l=Ba[o];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Ba.length&&(o=Ba[0],o.blockedOn===null);)Ob(o),o.blockedOn===null&&Ba.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(l=0;l<o.length;l+=3){var d=o[l],m=o[l+1],b=d[pe]||null;if(typeof m=="function")b||zb(o);else if(b){var C=null;if(m&&m.hasAttribute("formAction")){if(d=m,b=m[pe]||null)C=b.formAction;else if(op(d)!==null)continue}else C=b.action;typeof C=="function"?o[l+1]=C:(o.splice(l,3),l-=3),zb(o)}}}function Db(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return d=b})},focusReset:"manual",scroll:"manual"})}function a(){d!==null&&(d(),d=null),l||setTimeout(o,20)}function o(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,d=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(o,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),d!==null&&(d(),d=null)}}}function lp(n){this._internalRoot=n}su.prototype.render=lp.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,l=jn();Tb(o,l,n,a,null,null)},su.prototype.unmount=lp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;Tb(n.current,2,null,n,null,null),$c(),a[$e]=null}};function su(n){this._internalRoot=n}su.prototype.unstable_scheduleHydration=function(n){if(n){var a=be();n={blockedOn:null,target:n,priority:a};for(var o=0;o<Ba.length&&a!==0&&a<Ba[o].priority;o++);Ba.splice(o,0,n),o===0&&Ob(n)}};var jb=t.version;if(jb!=="19.2.0")throw Error(i(527,jb,"19.2.0"));z.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=p(a),n=n!==null?y(n):null,n=n===null?null:n.stateNode,n};var gT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{ga=lu.inject(gT),ln=lu}catch{}}return Zs.createRoot=function(n,a){if(!s(n))throw Error(i(299));var o=!1,l="",d=qy,m=Yy,b=Vy;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),a=Sb(n,1,!1,null,null,o,l,null,d,m,b,Db),n[$e]=a.current,Yh(n),new lp(a)},Zs.hydrateRoot=function(n,a,o){if(!s(n))throw Error(i(299));var l=!1,d="",m=qy,b=Yy,C=Vy,D=null;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(b=o.onCaughtError),o.onRecoverableError!==void 0&&(C=o.onRecoverableError),o.formState!==void 0&&(D=o.formState)),a=Sb(n,1,!0,a,o??null,l,d,D,m,b,C,Db),a.context=Eb(null),o=a.current,l=jn(),l=Se(l),d=Ea(l),d.callback=null,Ta(o,d,l),o=l,a.current.lanes=o,j(a,o),Ar(a),n[$e]=a.current,Yh(n),new su(a)},Zs.version="19.2.0",Zs}var Jw;function L5(){if(Jw)return zp.exports;Jw=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),zp.exports=j5(),zp.exports}var U5=L5();/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var z2=e=>{throw TypeError(e)},H5=(e,t,r)=>t.has(e)||z2("Cannot "+r),Up=(e,t,r)=>(H5(e,t,"read from private field"),r?r.call(e):t.get(e)),B5=(e,t,r)=>t.has(e)?z2("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Zw="popstate";function F5(e={}){function t(i,s){let{pathname:c,search:u,hash:f}=i.location;return Al("",{pathname:c,search:u,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){return typeof s=="string"?s:Qa(s)}return q5(t,r,null,e)}function Xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $5(){return Math.random().toString(36).substring(2,10)}function ex(e,t){return{usr:e.state,key:e.key,idx:t}}function Al(e,t,r=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Ja(t):t,state:r,key:t&&t.key||i||$5()}}function Qa({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ja(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function q5(e,t,r,i={}){let{window:s=document.defaultView,v5Compat:c=!1}=i,u=s.history,f="POP",h=null,p=y();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function y(){return(u.state||{idx:null}).idx}function v(){f="POP";let N=y(),E=N==null?null:N-p;p=N,h&&h({action:f,location:k.location,delta:E})}function w(N,E){f="PUSH";let R=Al(k.location,N,E);p=y()+1;let O=ex(R,p),B=k.createHref(R);try{u.pushState(O,"",B)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;s.location.assign(B)}c&&h&&h({action:f,location:k.location,delta:1})}function x(N,E){f="REPLACE";let R=Al(k.location,N,E);p=y();let O=ex(R,p),B=k.createHref(R);u.replaceState(O,"",B),c&&h&&h({action:f,location:k.location,delta:0})}function _(N){return D2(N)}let k={get action(){return f},get location(){return e(s,u)},listen(N){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(Zw,v),h=N,()=>{s.removeEventListener(Zw,v),h=null}},createHref(N){return t(s,N)},createURL:_,encodeLocation(N){let E=_(N);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:w,replace:x,go(N){return u.go(N)}};return k}function D2(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Xe(r,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:Qa(e);return i=i.replace(/ $/,"%20"),!t&&i.startsWith("//")&&(i=r+i),new URL(i,r)}var sl,tx=class{constructor(e){if(B5(this,sl,new Map),e)for(let[t,r]of e)this.set(t,r)}get(e){if(Up(this,sl).has(e))return Up(this,sl).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,t){Up(this,sl).set(e,t)}};sl=new WeakMap;var Y5=new Set(["lazy","caseSensitive","path","id","index","children"]);function V5(e){return Y5.has(e)}var P5=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function X5(e){return P5.has(e)}function I5(e){return e.index===!0}function Ol(e,t,r=[],i={},s=!1){return e.map((c,u)=>{let f=[...r,String(u)],h=typeof c.id=="string"?c.id:f.join("-");if(Xe(c.index!==!0||!c.children,"Cannot specify children on an index route"),Xe(s||!i[h],`Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`),I5(c)){let p={...c,...t(c),id:h};return i[h]=p,p}else{let p={...c,...t(c),id:h,children:void 0};return i[h]=p,c.children&&(p.children=Ol(c.children,t,f,i,s)),p}})}function Va(e,t,r="/"){return Du(e,t,r,!1)}function Du(e,t,r,i){let s=typeof t=="string"?Ja(t):t,c=ar(s.pathname||"/",r);if(c==null)return null;let u=j2(e);W5(u);let f=null;for(let h=0;f==null&&h<u.length;++h){let p=ok(c);f=ak(u[h],p,i)}return f}function G5(e,t){let{route:r,pathname:i,params:s}=e;return{id:r.id,pathname:i,params:s,data:t[r.id],loaderData:t[r.id],handle:r.handle}}function j2(e,t=[],r=[],i="",s=!1){let c=(u,f,h=s,p)=>{let y={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(i)&&h)return;Xe(y.relativePath.startsWith(i),`Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(i.length)}let v=jr([i,y.relativePath]),w=r.concat(y);u.children&&u.children.length>0&&(Xe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),j2(u.children,t,w,v,h)),!(u.path==null&&!u.index)&&t.push({path:v,score:nk(v,u.index),routesMeta:w})};return e.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))c(u,f);else for(let h of L2(u.path))c(u,f,!0,h)}),t}function L2(e){let t=e.split("/");if(t.length===0)return[];let[r,...i]=t,s=r.endsWith("?"),c=r.replace(/\?$/,"");if(i.length===0)return s?[c,""]:[c];let u=L2(i.join("/")),f=[];return f.push(...u.map(h=>h===""?c:[c,h].join("/"))),s&&f.push(...u),f.map(h=>e.startsWith("/")&&h===""?"/":h)}function W5(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:rk(t.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}var Q5=/^:[\w-]+$/,K5=3,J5=2,Z5=1,ek=10,tk=-2,nx=e=>e==="*";function nk(e,t){let r=e.split("/"),i=r.length;return r.some(nx)&&(i+=tk),t&&(i+=J5),r.filter(s=>!nx(s)).reduce((s,c)=>s+(Q5.test(c)?K5:c===""?Z5:ek),i)}function rk(e,t){return e.length===t.length&&e.slice(0,-1).every((i,s)=>i===t[s])?e[e.length-1]-t[t.length-1]:0}function ak(e,t,r=!1){let{routesMeta:i}=e,s={},c="/",u=[];for(let f=0;f<i.length;++f){let h=i[f],p=f===i.length-1,y=c==="/"?t:t.slice(c.length)||"/",v=vd({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},y),w=h.route;if(!v&&p&&r&&!i[i.length-1].route.index&&(v=vd({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!v)return null;Object.assign(s,v.params),u.push({params:s,pathname:jr([c,v.pathname]),pathnameBase:uk(jr([c,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(c=jr([c,v.pathnameBase]))}return u}function vd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,i]=ik(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let c=s[0],u=c.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:i.reduce((p,{paramName:y,isOptional:v},w)=>{if(y==="*"){let _=f[w]||"";u=c.slice(0,c.length-_.length).replace(/(.)\/+$/,"$1")}const x=f[w];return v&&!x?p[y]=void 0:p[y]=(x||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:u,pattern:e}}function ik(e,t=!1,r=!0){qt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h)=>(i.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),i]}function ok(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ar(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}function sk({basename:e,pathname:t}){return t==="/"?e:jr([e,t])}function lk(e,t="/"){let{pathname:r,search:i="",hash:s=""}=typeof e=="string"?Ja(e):e;return{pathname:r?r.startsWith("/")?r:ck(r,t):t,search:dk(i),hash:fk(s)}}function ck(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Hp(e,t,r,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function U2(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Sg(e){let t=U2(e);return t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase)}function Eg(e,t,r,i=!1){let s;typeof e=="string"?s=Ja(e):(s={...e},Xe(!s.pathname||!s.pathname.includes("?"),Hp("?","pathname","search",s)),Xe(!s.pathname||!s.pathname.includes("#"),Hp("#","pathname","hash",s)),Xe(!s.search||!s.search.includes("#"),Hp("#","search","hash",s)));let c=e===""||s.pathname==="",u=c?"/":s.pathname,f;if(u==null)f=r;else{let v=t.length-1;if(!i&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),v-=1;s.pathname=w.join("/")}f=v>=0?t[v]:"/"}let h=lk(s,f),p=u&&u!=="/"&&u.endsWith("/"),y=(c||u===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(p||y)&&(h.pathname+="/"),h}var jr=e=>e.join("/").replace(/\/\/+/g,"/"),uk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),dk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,fk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,yd=class{constructor(e,t,r,i=!1){this.status=e,this.statusText=t||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Ml(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var H2=["POST","PUT","PATCH","DELETE"],hk=new Set(H2),pk=["GET",...H2],mk=new Set(pk),gk=new Set([301,302,303,307,308]),vk=new Set([307,308]),Bp={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yk={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},el={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},bk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tg=e=>bk.test(e),wk=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),B2="remix-router-transitions",F2=Symbol("ResetLoaderData");function xk(e){const t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";Xe(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],s=e.mapRouteProperties||wk,c={},u=Ol(e.routes,s,void 0,c),f,h=e.basename||"/";h.startsWith("/")||(h=`/${h}`);let p=e.dataStrategy||Ck,y={...e.future},v=null,w=new Set,x=null,_=null,k=null,N=e.hydrationData!=null,E=Va(u,e.history.location,h),R=!1,O=null,B;if(E==null&&!e.patchRoutesOnNavigation){let j=tr(404,{pathname:e.history.location.pathname}),{matches:V,route:Q}=yu(u);B=!0,E=V,O={[Q.id]:j}}else if(E&&!e.hydrationData&&Sr(E,u,e.history.location.pathname).active&&(E=null),E)if(E.some(j=>j.route.lazy))B=!1;else if(!E.some(j=>Cg(j.route)))B=!0;else{let j=e.hydrationData?e.hydrationData.loaderData:null,V=e.hydrationData?e.hydrationData.errors:null;if(V){let Q=E.findIndex(se=>V[se.route.id]!==void 0);B=E.slice(0,Q+1).every(se=>!km(se.route,j,V))}else B=E.every(Q=>!km(Q.route,j,V))}else{B=!1,E=[];let j=Sr(null,u,e.history.location.pathname);j.active&&j.matches&&(R=!0,E=j.matches)}let F,M={historyAction:e.history.action,location:e.history.location,matches:E,initialized:B,navigation:Bp,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||O,fetchers:new Map,blockers:new Map},G="POP",ie=!1,oe,fe=!1,he=new Map,ue=null,_e=!1,we=!1,Oe=new Set,S=new Map,z=0,H=-1,Z=new Map,re=new Set,A=new Map,Y=new Map,J=new Set,ae=new Map,le,me=null;function Re(){if(v=e.history.listen(({action:j,location:V,delta:Q})=>{if(le){le(),le=void 0;return}qt(ae.size===0||Q!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let se=Kl({currentLocation:M.location,nextLocation:V,historyAction:j});if(se&&Q!=null){let ce=new Promise(Se=>{le=Se});e.history.go(Q*-1),Ii(se,{state:"blocked",location:V,proceed(){Ii(se,{state:"proceeding",proceed:void 0,reset:void 0,location:V}),ce.then(()=>e.history.go(Q))},reset(){let Se=new Map(M.blockers);Se.set(se,el),Ie({blockers:Se})}});return}return Xt(j,V)}),r){$k(t,he);let j=()=>qk(t,he);t.addEventListener("pagehide",j),ue=()=>t.removeEventListener("pagehide",j)}return M.initialized||Xt("POP",M.location,{initialHydration:!0}),F}function Qe(){v&&v(),ue&&ue(),w.clear(),oe&&oe.abort(),M.fetchers.forEach((j,V)=>Xi(V)),M.blockers.forEach((j,V)=>Ql(V))}function De(j){return w.add(j),()=>w.delete(j)}function Ie(j,V={}){j.matches&&(j.matches=j.matches.map(ce=>{let Se=c[ce.route.id],Ee=ce.route;return Ee.element!==Se.element||Ee.errorElement!==Se.errorElement||Ee.hydrateFallbackElement!==Se.hydrateFallbackElement?{...ce,route:Se}:ce})),M={...M,...j};let Q=[],se=[];M.fetchers.forEach((ce,Se)=>{ce.state==="idle"&&(J.has(Se)?Q.push(Se):se.push(Se))}),J.forEach(ce=>{!M.fetchers.has(ce)&&!S.has(ce)&&Q.push(ce)}),[...w].forEach(ce=>ce(M,{deletedFetchers:Q,viewTransitionOpts:V.viewTransitionOpts,flushSync:V.flushSync===!0})),Q.forEach(ce=>Xi(ce)),se.forEach(ce=>M.fetchers.delete(ce))}function on(j,V,{flushSync:Q}={}){let se=M.actionData!=null&&M.navigation.formMethod!=null&&Cn(M.navigation.formMethod)&&M.navigation.state==="loading"&&j.state?._isRedirect!==!0,ce;V.actionData?Object.keys(V.actionData).length>0?ce=V.actionData:ce=null:se?ce=M.actionData:ce=null;let Se=V.loaderData?fx(M.loaderData,V.loaderData,V.matches||[],V.errors):M.loaderData,Ee=M.blockers;Ee.size>0&&(Ee=new Map(Ee),Ee.forEach((de,pe)=>Ee.set(pe,el)));let be=_e?!1:ni(j,V.matches||M.matches),Te=ie===!0||M.navigation.formMethod!=null&&Cn(M.navigation.formMethod)&&j.state?._isRedirect!==!0;f&&(u=f,f=void 0),_e||G==="POP"||(G==="PUSH"?e.history.push(j,j.state):G==="REPLACE"&&e.history.replace(j,j.state));let Ce;if(G==="POP"){let de=he.get(M.location.pathname);de&&de.has(j.pathname)?Ce={currentLocation:M.location,nextLocation:j}:he.has(j.pathname)&&(Ce={currentLocation:j,nextLocation:M.location})}else if(fe){let de=he.get(M.location.pathname);de?de.add(j.pathname):(de=new Set([j.pathname]),he.set(M.location.pathname,de)),Ce={currentLocation:M.location,nextLocation:j}}Ie({...V,actionData:ce,loaderData:Se,historyAction:G,location:j,initialized:!0,navigation:Bp,revalidation:"idle",restoreScrollPosition:be,preventScrollReset:Te,blockers:Ee},{viewTransitionOpts:Ce,flushSync:Q===!0}),G="POP",ie=!1,fe=!1,_e=!1,we=!1,me?.resolve(),me=null}async function ir(j,V){if(typeof j=="number"){e.history.go(j);return}let Q=Nm(M.location,M.matches,h,j,V?.fromRouteId,V?.relative),{path:se,submission:ce,error:Se}=rx(!1,Q,V),Ee=M.location,be=Al(M.location,se,V&&V.state);be={...be,...e.history.encodeLocation(be)};let Te=V&&V.replace!=null?V.replace:void 0,Ce="PUSH";Te===!0?Ce="REPLACE":Te===!1||ce!=null&&Cn(ce.formMethod)&&ce.formAction===M.location.pathname+M.location.search&&(Ce="REPLACE");let de=V&&"preventScrollReset"in V?V.preventScrollReset===!0:void 0,pe=(V&&V.flushSync)===!0,$e=Kl({currentLocation:Ee,nextLocation:be,historyAction:Ce});if($e){Ii($e,{state:"blocked",location:be,proceed(){Ii($e,{state:"proceeding",proceed:void 0,reset:void 0,location:be}),ir(j,V)},reset(){let lt=new Map(M.blockers);lt.set($e,el),Ie({blockers:lt})}});return}await Xt(Ce,be,{submission:ce,pendingError:Se,preventScrollReset:de,replace:V&&V.replace,enableViewTransition:V&&V.viewTransition,flushSync:pe})}function Fr(){me||(me=Yk()),is(),Ie({revalidation:"loading"});let j=me.promise;return M.navigation.state==="submitting"?j:M.navigation.state==="idle"?(Xt(M.historyAction,M.location,{startUninterruptedRevalidation:!0}),j):(Xt(G||M.historyAction,M.navigation.location,{overrideNavigation:M.navigation,enableViewTransition:fe===!0}),j)}async function Xt(j,V,Q){oe&&oe.abort(),oe=null,G=j,_e=(Q&&Q.startUninterruptedRevalidation)===!0,qr(M.location,M.matches),ie=(Q&&Q.preventScrollReset)===!0,fe=(Q&&Q.enableViewTransition)===!0;let se=f||u,ce=Q&&Q.overrideNavigation,Se=Q?.initialHydration&&M.matches&&M.matches.length>0&&!R?M.matches:Va(se,V,h),Ee=(Q&&Q.flushSync)===!0;if(Se&&M.initialized&&!we&&Dk(M.location,V)&&!(Q&&Q.submission&&Cn(Q.submission.formMethod))){on(V,{matches:Se},{flushSync:Ee});return}let be=Sr(Se,se,V.pathname);if(be.active&&be.matches&&(Se=be.matches),!Se){let{error:Jt,notFoundMatches:pt,route:rt}=va(V.pathname);on(V,{matches:pt,loaderData:{},errors:{[rt.id]:Jt}},{flushSync:Ee});return}oe=new AbortController;let Te=jo(e.history,V,oe.signal,Q&&Q.submission),Ce=e.getContext?await e.getContext():new tx,de;if(Q&&Q.pendingError)de=[Pa(Se).route.id,{type:"error",error:Q.pendingError}];else if(Q&&Q.submission&&Cn(Q.submission.formMethod)){let Jt=await es(Te,V,Q.submission,Se,Ce,be.active,Q&&Q.initialHydration===!0,{replace:Q.replace,flushSync:Ee});if(Jt.shortCircuited)return;if(Jt.pendingActionResult){let[pt,rt]=Jt.pendingActionResult;if(Un(rt)&&Ml(rt.error)&&rt.error.status===404){oe=null,on(V,{matches:Jt.matches,loaderData:{},errors:{[pt]:rt.error}});return}}Se=Jt.matches||Se,de=Jt.pendingActionResult,ce=Fp(V,Q.submission),Ee=!1,be.active=!1,Te=jo(e.history,Te.url,Te.signal)}let{shortCircuited:pe,matches:$e,loaderData:lt,errors:Dt}=await ts(Te,V,Se,Ce,be.active,ce,Q&&Q.submission,Q&&Q.fetcherSubmission,Q&&Q.replace,Q&&Q.initialHydration===!0,Ee,de);pe||(oe=null,on(V,{matches:$e||Se,...hx(de),loaderData:lt,errors:Dt}))}async function es(j,V,Q,se,ce,Se,Ee,be={}){is();let Te=Bk(V,Q);if(Ie({navigation:Te},{flushSync:be.flushSync===!0}),Se){let pe=await Wi(se,V.pathname,j.signal);if(pe.type==="aborted")return{shortCircuited:!0};if(pe.type==="error"){if(pe.partialMatches.length===0){let{matches:lt,route:Dt}=yu(u);return{matches:lt,pendingActionResult:[Dt.id,{type:"error",error:pe.error}]}}let $e=Pa(pe.partialMatches).route.id;return{matches:pe.partialMatches,pendingActionResult:[$e,{type:"error",error:pe.error}]}}else if(pe.matches)se=pe.matches;else{let{notFoundMatches:$e,error:lt,route:Dt}=va(V.pathname);return{matches:$e,pendingActionResult:[Dt.id,{type:"error",error:lt}]}}}let Ce,de=ju(se,V);if(!de.route.action&&!de.route.lazy)Ce={type:"error",error:tr(405,{method:j.method,pathname:V.pathname,routeId:de.route.id})};else{let pe=qo(s,c,j,se,de,Ee?[]:i,ce),$e=await Za(j,pe,ce,null);if(Ce=$e[de.route.id],!Ce){for(let lt of se)if($e[lt.route.id]){Ce=$e[lt.route.id];break}}if(j.signal.aborted)return{shortCircuited:!0}}if(Ai(Ce)){let pe;return be&&be.replace!=null?pe=be.replace:pe=cx(Ce.response.headers.get("Location"),new URL(j.url),h)===M.location.pathname+M.location.search,await $r(j,Ce,!0,{submission:Q,replace:pe}),{shortCircuited:!0}}if(Un(Ce)){let pe=Pa(se,de.route.id);return(be&&be.replace)!==!0&&(G="PUSH"),{matches:se,pendingActionResult:[pe.route.id,Ce,de.route.id]}}return{matches:se,pendingActionResult:[de.route.id,Ce]}}async function ts(j,V,Q,se,ce,Se,Ee,be,Te,Ce,de,pe){let $e=Se||Fp(V,Ee),lt=Ee||be||mx($e),Dt=!_e&&!Ce;if(ce){if(Dt){let It=Gl(pe);Ie({navigation:$e,...It!==void 0?{actionData:It}:{}},{flushSync:de})}let qe=await Wi(Q,V.pathname,j.signal);if(qe.type==="aborted")return{shortCircuited:!0};if(qe.type==="error"){if(qe.partialMatches.length===0){let{matches:Yr,route:Cr}=yu(u);return{matches:Yr,loaderData:{},errors:{[Cr.id]:qe.error}}}let It=Pa(qe.partialMatches).route.id;return{matches:qe.partialMatches,loaderData:{},errors:{[It]:qe.error}}}else if(qe.matches)Q=qe.matches;else{let{error:It,notFoundMatches:Yr,route:Cr}=va(V.pathname);return{matches:Yr,loaderData:{},errors:{[Cr.id]:It}}}}let Jt=f||u,{dsMatches:pt,revalidatingFetchers:rt}=ax(j,se,s,c,e.history,M,Q,lt,V,Ce?[]:i,Ce===!0,we,Oe,J,A,re,Jt,h,e.patchRoutesOnNavigation!=null,pe);if(H=++z,!e.dataStrategy&&!pt.some(qe=>qe.shouldLoad)&&!pt.some(qe=>qe.route.middleware&&qe.route.middleware.length>0)&&rt.length===0){let qe=ln();return on(V,{matches:Q,loaderData:{},errors:pe&&Un(pe[1])?{[pe[0]]:pe[1].error}:null,...hx(pe),...qe?{fetchers:new Map(M.fetchers)}:{}},{flushSync:de}),{shortCircuited:!0}}if(Dt){let qe={};if(!ce){qe.navigation=$e;let It=Gl(pe);It!==void 0&&(qe.actionData=It)}rt.length>0&&(qe.fetchers=Wl(rt)),Ie(qe,{flushSync:de})}rt.forEach(qe=>{or(qe.key),qe.controller&&S.set(qe.key,qe.controller)});let lr=()=>rt.forEach(qe=>or(qe.key));oe&&oe.signal.addEventListener("abort",lr);let{loaderResults:qn,fetcherResults:pn}=await sn(pt,rt,j,se);if(j.signal.aborted)return{shortCircuited:!0};oe&&oe.signal.removeEventListener("abort",lr),rt.forEach(qe=>S.delete(qe.key));let cn=bu(qn);if(cn)return await $r(j,cn.result,!0,{replace:Te}),{shortCircuited:!0};if(cn=bu(pn),cn)return re.add(cn.key),await $r(j,cn.result,!0,{replace:Te}),{shortCircuited:!0};let{loaderData:Er,errors:bt}=dx(M,Q,qn,pe,rt,pn);Ce&&M.errors&&(bt={...M.errors,...bt});let Tr=ln(),ri=sr(H),Yn=Tr||ri||rt.length>0;return{matches:Q,loaderData:Er,errors:bt,...Yn?{fetchers:new Map(M.fetchers)}:{}}}function Gl(j){if(j&&!Un(j[1]))return{[j[0]]:j[1].data};if(M.actionData)return Object.keys(M.actionData).length===0?null:M.actionData}function Wl(j){return j.forEach(V=>{let Q=M.fetchers.get(V.key),se=tl(void 0,Q?Q.data:void 0);M.fetchers.set(V.key,se)}),new Map(M.fetchers)}async function ns(j,V,Q,se){or(j);let ce=(se&&se.flushSync)===!0,Se=f||u,Ee=Nm(M.location,M.matches,h,Q,V,se?.relative),be=Va(Se,Ee,h),Te=Sr(be,Se,Ee);if(Te.active&&Te.matches&&(be=Te.matches),!be){$n(j,V,tr(404,{pathname:Ee}),{flushSync:ce});return}let{path:Ce,submission:de,error:pe}=rx(!0,Ee,se);if(pe){$n(j,V,pe,{flushSync:ce});return}let $e=e.getContext?await e.getContext():new tx,lt=(se&&se.preventScrollReset)===!0;if(de&&Cn(de.formMethod)){await rs(j,V,Ce,be,$e,Te.active,ce,lt,de);return}A.set(j,{routeId:V,path:Ce}),await as(j,V,Ce,be,$e,Te.active,ce,lt,de)}async function rs(j,V,Q,se,ce,Se,Ee,be,Te){is(),A.delete(j);let Ce=M.fetchers.get(j);Fn(j,Fk(Te,Ce),{flushSync:Ee});let de=new AbortController,pe=jo(e.history,Q,de.signal,Te);if(Se){let Nt=await Wi(se,new URL(pe.url).pathname,pe.signal,j);if(Nt.type==="aborted")return;if(Nt.type==="error"){$n(j,V,Nt.error,{flushSync:Ee});return}else if(Nt.matches)se=Nt.matches;else{$n(j,V,tr(404,{pathname:Q}),{flushSync:Ee});return}}let $e=ju(se,Q);if(!$e.route.action&&!$e.route.lazy){let Nt=tr(405,{method:Te.formMethod,pathname:Q,routeId:V});$n(j,V,Nt,{flushSync:Ee});return}S.set(j,de);let lt=z,Dt=qo(s,c,pe,se,$e,i,ce),pt=(await Za(pe,Dt,ce,j))[$e.route.id];if(pe.signal.aborted){S.get(j)===de&&S.delete(j);return}if(J.has(j)){if(Ai(pt)||Un(pt)){Fn(j,ca(void 0));return}}else{if(Ai(pt))if(S.delete(j),H>lt){Fn(j,ca(void 0));return}else return re.add(j),Fn(j,tl(Te)),$r(pe,pt,!1,{fetcherSubmission:Te,preventScrollReset:be});if(Un(pt)){$n(j,V,pt.error);return}}let rt=M.navigation.location||M.location,lr=jo(e.history,rt,de.signal),qn=f||u,pn=M.navigation.state!=="idle"?Va(qn,M.navigation.location,h):M.matches;Xe(pn,"Didn't find any matches after fetcher action");let cn=++z;Z.set(j,cn);let Er=tl(Te,pt.data);M.fetchers.set(j,Er);let{dsMatches:bt,revalidatingFetchers:Tr}=ax(lr,ce,s,c,e.history,M,pn,Te,rt,i,!1,we,Oe,J,A,re,qn,h,e.patchRoutesOnNavigation!=null,[$e.route.id,pt]);Tr.filter(Nt=>Nt.key!==j).forEach(Nt=>{let Vr=Nt.key,ai=M.fetchers.get(Vr),cr=tl(void 0,ai?ai.data:void 0);M.fetchers.set(Vr,cr),or(Vr),Nt.controller&&S.set(Vr,Nt.controller)}),Ie({fetchers:new Map(M.fetchers)});let ri=()=>Tr.forEach(Nt=>or(Nt.key));de.signal.addEventListener("abort",ri);let{loaderResults:Yn,fetcherResults:qe}=await sn(bt,Tr,lr,ce);if(de.signal.aborted)return;if(de.signal.removeEventListener("abort",ri),Z.delete(j),S.delete(j),Tr.forEach(Nt=>S.delete(Nt.key)),M.fetchers.has(j)){let Nt=ca(pt.data);M.fetchers.set(j,Nt)}let It=bu(Yn);if(It)return $r(lr,It.result,!1,{preventScrollReset:be});if(It=bu(qe),It)return re.add(It.key),$r(lr,It.result,!1,{preventScrollReset:be});let{loaderData:Yr,errors:Cr}=dx(M,pn,Yn,void 0,Tr,qe);sr(cn),M.navigation.state==="loading"&&cn>H?(Xe(G,"Expected pending action"),oe&&oe.abort(),on(M.navigation.location,{matches:pn,loaderData:Yr,errors:Cr,fetchers:new Map(M.fetchers)})):(Ie({errors:Cr,loaderData:fx(M.loaderData,Yr,pn,Cr),fetchers:new Map(M.fetchers)}),we=!1)}async function as(j,V,Q,se,ce,Se,Ee,be,Te){let Ce=M.fetchers.get(j);Fn(j,tl(Te,Ce?Ce.data:void 0),{flushSync:Ee});let de=new AbortController,pe=jo(e.history,Q,de.signal);if(Se){let rt=await Wi(se,new URL(pe.url).pathname,pe.signal,j);if(rt.type==="aborted")return;if(rt.type==="error"){$n(j,V,rt.error,{flushSync:Ee});return}else if(rt.matches)se=rt.matches;else{$n(j,V,tr(404,{pathname:Q}),{flushSync:Ee});return}}let $e=ju(se,Q);S.set(j,de);let lt=z,Dt=qo(s,c,pe,se,$e,i,ce),pt=(await Za(pe,Dt,ce,j))[$e.route.id];if(S.get(j)===de&&S.delete(j),!pe.signal.aborted){if(J.has(j)){Fn(j,ca(void 0));return}if(Ai(pt))if(H>lt){Fn(j,ca(void 0));return}else{re.add(j),await $r(pe,pt,!1,{preventScrollReset:be});return}if(Un(pt)){$n(j,V,pt.error);return}Fn(j,ca(pt.data))}}async function $r(j,V,Q,{submission:se,fetcherSubmission:ce,preventScrollReset:Se,replace:Ee}={}){V.response.headers.has("X-Remix-Revalidate")&&(we=!0);let be=V.response.headers.get("Location");Xe(be,"Expected a Location header on the redirect Response"),be=cx(be,new URL(j.url),h);let Te=Al(M.location,be,{_isRedirect:!0});if(r){let Dt=!1;if(V.response.headers.has("X-Remix-Reload-Document"))Dt=!0;else if(Tg(be)){const Jt=D2(be,!0);Dt=Jt.origin!==t.location.origin||ar(Jt.pathname,h)==null}if(Dt){Ee?t.location.replace(be):t.location.assign(be);return}}oe=null;let Ce=Ee===!0||V.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:de,formAction:pe,formEncType:$e}=M.navigation;!se&&!ce&&de&&pe&&$e&&(se=mx(M.navigation));let lt=se||ce;if(vk.has(V.response.status)&&lt&&Cn(lt.formMethod))await Xt(Ce,Te,{submission:{...lt,formAction:be},preventScrollReset:Se||ie,enableViewTransition:Q?fe:void 0});else{let Dt=Fp(Te,se);await Xt(Ce,Te,{overrideNavigation:Dt,fetcherSubmission:ce,preventScrollReset:Se||ie,enableViewTransition:Q?fe:void 0})}}async function Za(j,V,Q,se){let ce,Se={};try{ce=await kk(p,j,V,se,Q,!1)}catch(Ee){return V.filter(be=>be.shouldLoad).forEach(be=>{Se[be.route.id]={type:"error",error:Ee}}),Se}if(j.signal.aborted)return Se;for(let[Ee,be]of Object.entries(ce))if(Uk(be)){let Te=be.result;Se[Ee]={type:"redirect",response:Mk(Te,j,Ee,V,h)}}else Se[Ee]=await Ok(be);return Se}async function sn(j,V,Q,se){let ce=Za(Q,j,se,null),Se=Promise.all(V.map(async Te=>{if(Te.matches&&Te.match&&Te.request&&Te.controller){let de=(await Za(Te.request,Te.matches,se,Te.key))[Te.match.route.id];return{[Te.key]:de}}else return Promise.resolve({[Te.key]:{type:"error",error:tr(404,{pathname:Te.path})}})})),Ee=await ce,be=(await Se).reduce((Te,Ce)=>Object.assign(Te,Ce),{});return{loaderResults:Ee,fetcherResults:be}}function is(){we=!0,A.forEach((j,V)=>{S.has(V)&&Oe.add(V),or(V)})}function Fn(j,V,Q={}){M.fetchers.set(j,V),Ie({fetchers:new Map(M.fetchers)},{flushSync:(Q&&Q.flushSync)===!0})}function $n(j,V,Q,se={}){let ce=Pa(M.matches,V);Xi(j),Ie({errors:{[ce.route.id]:Q},fetchers:new Map(M.fetchers)},{flushSync:(se&&se.flushSync)===!0})}function ei(j){return Y.set(j,(Y.get(j)||0)+1),J.has(j)&&J.delete(j),M.fetchers.get(j)||yk}function Zd(j,V){or(j,V?.reason),Fn(j,ca(null))}function Xi(j){let V=M.fetchers.get(j);S.has(j)&&!(V&&V.state==="loading"&&Z.has(j))&&or(j),A.delete(j),Z.delete(j),re.delete(j),J.delete(j),Oe.delete(j),M.fetchers.delete(j)}function ef(j){let V=(Y.get(j)||0)-1;V<=0?(Y.delete(j),J.add(j)):Y.set(j,V),Ie({fetchers:new Map(M.fetchers)})}function or(j,V){let Q=S.get(j);Q&&(Q.abort(V),S.delete(j))}function ga(j){for(let V of j){let Q=ei(V),se=ca(Q.data);M.fetchers.set(V,se)}}function ln(){let j=[],V=!1;for(let Q of re){let se=M.fetchers.get(Q);Xe(se,`Expected fetcher: ${Q}`),se.state==="loading"&&(re.delete(Q),j.push(Q),V=!0)}return ga(j),V}function sr(j){let V=[];for(let[Q,se]of Z)if(se<j){let ce=M.fetchers.get(Q);Xe(ce,`Expected fetcher: ${Q}`),ce.state==="loading"&&(or(Q),Z.delete(Q),V.push(Q))}return ga(V),V.length>0}function hn(j,V){let Q=M.blockers.get(j)||el;return ae.get(j)!==V&&ae.set(j,V),Q}function Ql(j){M.blockers.delete(j),ae.delete(j)}function Ii(j,V){let Q=M.blockers.get(j)||el;Xe(Q.state==="unblocked"&&V.state==="blocked"||Q.state==="blocked"&&V.state==="blocked"||Q.state==="blocked"&&V.state==="proceeding"||Q.state==="blocked"&&V.state==="unblocked"||Q.state==="proceeding"&&V.state==="unblocked",`Invalid blocker state transition: ${Q.state} -> ${V.state}`);let se=new Map(M.blockers);se.set(j,V),Ie({blockers:se})}function Kl({currentLocation:j,nextLocation:V,historyAction:Q}){if(ae.size===0)return;ae.size>1&&qt(!1,"A router only supports one blocker at a time");let se=Array.from(ae.entries()),[ce,Se]=se[se.length-1],Ee=M.blockers.get(ce);if(!(Ee&&Ee.state==="proceeding")&&Se({currentLocation:j,nextLocation:V,historyAction:Q}))return ce}function va(j){let V=tr(404,{pathname:j}),Q=f||u,{matches:se,route:ce}=yu(Q);return{notFoundMatches:se,route:ce,error:V}}function Gi(j,V,Q){if(x=j,k=V,_=Q||null,!N&&M.navigation===Bp){N=!0;let se=ni(M.location,M.matches);se!=null&&Ie({restoreScrollPosition:se})}return()=>{x=null,k=null,_=null}}function ti(j,V){return _&&_(j,V.map(se=>G5(se,M.loaderData)))||j.key}function qr(j,V){if(x&&k){let Q=ti(j,V);x[Q]=k()}}function ni(j,V){if(x){let Q=ti(j,V),se=x[Q];if(typeof se=="number")return se}return null}function Sr(j,V,Q){if(e.patchRoutesOnNavigation)if(j){if(Object.keys(j[0].params).length>0)return{active:!0,matches:Du(V,Q,h,!0)}}else return{active:!0,matches:Du(V,Q,h,!0)||[]};return{active:!1,matches:null}}async function Wi(j,V,Q,se){if(!e.patchRoutesOnNavigation)return{type:"success",matches:j};let ce=j;for(;;){let Se=f==null,Ee=f||u,be=c;try{await e.patchRoutesOnNavigation({signal:Q,path:V,matches:ce,fetcherKey:se,patch:(de,pe)=>{Q.aborted||ix(de,pe,Ee,be,s,!1)}})}catch(de){return{type:"error",error:de,partialMatches:ce}}finally{Se&&!Q.aborted&&(u=[...u])}if(Q.aborted)return{type:"aborted"};let Te=Va(Ee,V,h);if(Te)return{type:"success",matches:Te};let Ce=Du(Ee,V,h,!0);if(!Ce||ce.length===Ce.length&&ce.every((de,pe)=>de.route.id===Ce[pe].route.id))return{type:"success",matches:null};ce=Ce}}function Jl(j){c={},f=Ol(j,s,void 0,c)}function os(j,V,Q=!1){let se=f==null;ix(j,V,f||u,c,s,Q),se&&(u=[...u],Ie({}))}return F={get basename(){return h},get future(){return y},get state(){return M},get routes(){return u},get window(){return t},initialize:Re,subscribe:De,enableScrollRestoration:Gi,navigate:ir,fetch:ns,revalidate:Fr,createHref:j=>e.history.createHref(j),encodeLocation:j=>e.history.encodeLocation(j),getFetcher:ei,resetFetcher:Zd,deleteFetcher:ef,dispose:Qe,getBlocker:hn,deleteBlocker:Ql,patchRoutes:os,_internalFetchControllers:S,_internalSetRoutes:Jl,_internalSetStateDoNotUseOrYouWillBreakYourApp(j){Ie(j)}},F}function _k(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Nm(e,t,r,i,s,c){let u,f;if(s){u=[];for(let p of t)if(u.push(p),p.route.id===s){f=p;break}}else u=t,f=t[t.length-1];let h=Eg(i||".",Sg(u),ar(e.pathname,r)||e.pathname,c==="path");if(i==null&&(h.search=e.search,h.hash=e.hash),(i==null||i===""||i===".")&&f){let p=Ng(h.search);if(f.route.index&&!p)h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&p){let y=new URLSearchParams(h.search),v=y.getAll("index");y.delete("index"),v.filter(x=>x).forEach(x=>y.append("index",x));let w=y.toString();h.search=w?`?${w}`:""}}return r!=="/"&&(h.pathname=sk({basename:r,pathname:h.pathname})),Qa(h)}function rx(e,t,r){if(!r||!_k(r))return{path:t};if(r.formMethod&&!Hk(r.formMethod))return{path:t,error:tr(405,{method:r.formMethod})};let i=()=>({path:t,error:tr(400,{type:"invalid-body"})}),c=(r.formMethod||"get").toUpperCase(),u=X2(t);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Cn(c))return i();let v=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((w,[x,_])=>`${w}${x}=${_}
`,""):String(r.body);return{path:t,submission:{formMethod:c,formAction:u,formEncType:r.formEncType,formData:void 0,json:void 0,text:v}}}else if(r.formEncType==="application/json"){if(!Cn(c))return i();try{let v=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:t,submission:{formMethod:c,formAction:u,formEncType:r.formEncType,formData:void 0,json:v,text:void 0}}}catch{return i()}}}Xe(typeof FormData=="function","FormData is not available in this environment");let f,h;if(r.formData)f=Am(r.formData),h=r.formData;else if(r.body instanceof FormData)f=Am(r.body),h=r.body;else if(r.body instanceof URLSearchParams)f=r.body,h=ux(f);else if(r.body==null)f=new URLSearchParams,h=new FormData;else try{f=new URLSearchParams(r.body),h=ux(f)}catch{return i()}let p={formMethod:c,formAction:u,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(Cn(p.formMethod))return{path:t,submission:p};let y=Ja(t);return e&&y.search&&Ng(y.search)&&f.append("index",""),y.search=`?${f}`,{path:Qa(y),submission:p}}function ax(e,t,r,i,s,c,u,f,h,p,y,v,w,x,_,k,N,E,R,O){let B=O?Un(O[1])?O[1].error:O[1].data:void 0,F=s.createURL(c.location),M=s.createURL(h),G;if(y&&c.errors){let _e=Object.keys(c.errors)[0];G=u.findIndex(we=>we.route.id===_e)}else if(O&&Un(O[1])){let _e=O[0];G=u.findIndex(we=>we.route.id===_e)-1}let ie=O?O[1].statusCode:void 0,oe=ie&&ie>=400,fe={currentUrl:F,currentParams:c.matches[0]?.params||{},nextUrl:M,nextParams:u[0].params,...f,actionResult:B,actionStatus:ie},he=u.map((_e,we)=>{let{route:Oe}=_e,S=null;if(G!=null&&we>G?S=!1:Oe.lazy?S=!0:Cg(Oe)?y?S=km(Oe,c.loaderData,c.errors):Sk(c.loaderData,c.matches[we],_e)&&(S=!0):S=!1,S!==null)return Rm(r,i,e,_e,p,t,S);let z=oe?!1:v||F.pathname+F.search===M.pathname+M.search||F.search!==M.search||Ek(c.matches[we],_e),H={...fe,defaultShouldRevalidate:z},Z=bd(_e,H);return Rm(r,i,e,_e,p,t,Z,H)}),ue=[];return _.forEach((_e,we)=>{if(y||!u.some(Y=>Y.route.id===_e.routeId)||x.has(we))return;let Oe=c.fetchers.get(we),S=Oe&&Oe.state!=="idle"&&Oe.data===void 0,z=Va(N,_e.path,E);if(!z){if(R&&S)return;ue.push({key:we,routeId:_e.routeId,path:_e.path,matches:null,match:null,request:null,controller:null});return}if(k.has(we))return;let H=ju(z,_e.path),Z=new AbortController,re=jo(s,_e.path,Z.signal),A=null;if(w.has(we))w.delete(we),A=qo(r,i,re,z,H,p,t);else if(S)v&&(A=qo(r,i,re,z,H,p,t));else{let Y={...fe,defaultShouldRevalidate:oe?!1:v};bd(H,Y)&&(A=qo(r,i,re,z,H,p,t,Y))}A&&ue.push({key:we,routeId:_e.routeId,path:_e.path,matches:A,match:H,request:re,controller:Z})}),{dsMatches:he,revalidatingFetchers:ue}}function Cg(e){return e.loader!=null||e.middleware!=null&&e.middleware.length>0}function km(e,t,r){if(e.lazy)return!0;if(!Cg(e))return!1;let i=t!=null&&e.id in t,s=r!=null&&r[e.id]!==void 0;return!i&&s?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!s}function Sk(e,t,r){let i=!t||r.route.id!==t.route.id,s=!e.hasOwnProperty(r.route.id);return i||s}function Ek(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function bd(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}function ix(e,t,r,i,s,c){let u;if(e){let p=i[e];Xe(p,`No route found to patch children into: routeId = ${e}`),p.children||(p.children=[]),u=p.children}else u=r;let f=[],h=[];if(t.forEach(p=>{let y=u.find(v=>$2(p,v));y?h.push({existingRoute:y,newRoute:p}):f.push(p)}),f.length>0){let p=Ol(f,s,[e||"_","patch",String(u?.length||"0")],i);u.push(...p)}if(c&&h.length>0)for(let p=0;p<h.length;p++){let{existingRoute:y,newRoute:v}=h[p],w=y,[x]=Ol([v],s,[],{},!0);Object.assign(w,{element:x.element?x.element:w.element,errorElement:x.errorElement?x.errorElement:w.errorElement,hydrateFallbackElement:x.hydrateFallbackElement?x.hydrateFallbackElement:w.hydrateFallbackElement})}}function $2(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((r,i)=>t.children?.some(s=>$2(r,s))):!1}var ox=new WeakMap,q2=({key:e,route:t,manifest:r,mapRouteProperties:i})=>{let s=r[t.id];if(Xe(s,"No route found in manifest"),!s.lazy||typeof s.lazy!="object")return;let c=s.lazy[e];if(!c)return;let u=ox.get(s);u||(u={},ox.set(s,u));let f=u[e];if(f)return f;let h=(async()=>{let p=V5(e),v=s[e]!==void 0&&e!=="hasErrorBoundary";if(p)qt(!p,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),u[e]=Promise.resolve();else if(v)qt(!1,`Route "${s.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let w=await c();w!=null&&(Object.assign(s,{[e]:w}),Object.assign(s,i(s)))}typeof s.lazy=="object"&&(s.lazy[e]=void 0,Object.values(s.lazy).every(w=>w===void 0)&&(s.lazy=void 0))})();return u[e]=h,h},sx=new WeakMap;function Tk(e,t,r,i,s){let c=r[e.id];if(Xe(c,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let y=sx.get(c);if(y)return{lazyRoutePromise:y,lazyHandlerPromise:y};let v=(async()=>{Xe(typeof e.lazy=="function","No lazy route function found");let w=await e.lazy(),x={};for(let _ in w){let k=w[_];if(k===void 0)continue;let N=X5(_),R=c[_]!==void 0&&_!=="hasErrorBoundary";N?qt(!N,"Route property "+_+" is not a supported property to be returned from a lazy route function. This property will be ignored."):R?qt(!R,`Route "${c.id}" has a static property "${_}" defined but its lazy function is also returning a value for this property. The lazy route property "${_}" will be ignored.`):x[_]=k}Object.assign(c,x),Object.assign(c,{...i(c),lazy:void 0})})();return sx.set(c,v),v.catch(()=>{}),{lazyRoutePromise:v,lazyHandlerPromise:v}}let u=Object.keys(e.lazy),f=[],h;for(let y of u){if(s&&s.includes(y))continue;let v=q2({key:y,route:e,manifest:r,mapRouteProperties:i});v&&(f.push(v),y===t&&(h=v))}let p=f.length>0?Promise.all(f).then(()=>{}):void 0;return p?.catch(()=>{}),h?.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:h}}async function lx(e){let t=e.matches.filter(s=>s.shouldLoad),r={};return(await Promise.all(t.map(s=>s.resolve()))).forEach((s,c)=>{r[t[c].route.id]=s}),r}async function Ck(e){return e.matches.some(t=>t.route.middleware)?Y2(e,()=>lx(e)):lx(e)}function Y2(e,t){return Nk(e,t,i=>i,jk,r);function r(i,s,c){if(c)return Promise.resolve(Object.assign(c.value,{[s]:{type:"error",result:i}}));{let{matches:u}=e,f=Math.min(Math.max(u.findIndex(p=>p.route.id===s),0),Math.max(u.findIndex(p=>p.unstable_shouldCallHandler()),0)),h=Pa(u,u[f].route.id).route.id;return Promise.resolve({[h]:{type:"error",result:i}})}}}async function Nk(e,t,r,i,s){let{matches:c,request:u,params:f,context:h}=e,p=c.flatMap(v=>v.route.middleware?v.route.middleware.map(w=>[v.route.id,w]):[]);return await V2({request:u,params:f,context:h},p,t,r,i,s)}async function V2(e,t,r,i,s,c,u=0){let{request:f}=e;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let h=t[u];if(!h)return await r();let[p,y]=h,v,w=async()=>{if(v)throw new Error("You may only call `next()` once per middleware");try{return v={value:await V2(e,t,r,i,s,c,u+1)},v.value}catch(x){return v={value:await c(x,p,v)},v.value}};try{let x=await y(e,w),_=x!=null?i(x):void 0;return s(_)?_:v?_??v.value:(v={value:await w()},v.value)}catch(x){return await c(x,p,v)}}function P2(e,t,r,i,s){let c=q2({key:"middleware",route:i.route,manifest:t,mapRouteProperties:e}),u=Tk(i.route,Cn(r.method)?"action":"loader",t,e,s);return{middleware:c,route:u.lazyRoutePromise,handler:u.lazyHandlerPromise}}function Rm(e,t,r,i,s,c,u,f=null){let h=!1,p=P2(e,t,r,i,s);return{...i,_lazyPromises:p,shouldLoad:u,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler(y){return h=!0,f?typeof y=="boolean"?bd(i,{...f,defaultShouldRevalidate:y}):bd(i,f):u},resolve(y){let{lazy:v,loader:w,middleware:x}=i.route,_=h||u||y&&!Cn(r.method)&&(v||w),k=x&&x.length>0&&!w&&!v;return _&&!k?Rk({request:r,match:i,lazyHandlerPromise:p?.handler,lazyRoutePromise:p?.route,handlerOverride:y,scopedContext:c}):Promise.resolve({type:"data",result:void 0})}}}function qo(e,t,r,i,s,c,u,f=null){return i.map(h=>h.route.id!==s.route.id?{...h,shouldLoad:!1,unstable_shouldRevalidateArgs:f,unstable_shouldCallHandler:()=>!1,_lazyPromises:P2(e,t,r,h,c),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Rm(e,t,r,h,c,u,!0,f))}async function kk(e,t,r,i,s,c){r.some(p=>p._lazyPromises?.middleware)&&await Promise.all(r.map(p=>p._lazyPromises?.middleware));let u={request:t,params:r[0].params,context:s,matches:r},h=await e({...u,fetcherKey:i,runClientMiddleware:p=>{let y=u;return Y2(y,()=>p({...y,fetcherKey:i,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(r.flatMap(p=>[p._lazyPromises?.handler,p._lazyPromises?.route]))}catch{}return h}async function Rk({request:e,match:t,lazyHandlerPromise:r,lazyRoutePromise:i,handlerOverride:s,scopedContext:c}){let u,f,h=Cn(e.method),p=h?"action":"loader",y=v=>{let w,x=new Promise((N,E)=>w=E);f=()=>w(),e.signal.addEventListener("abort",f);let _=N=>typeof v!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${p}" [routeId: ${t.route.id}]`)):v({request:e,params:t.params,context:c},...N!==void 0?[N]:[]),k=(async()=>{try{return{type:"data",result:await(s?s(E=>_(E)):_())}}catch(N){return{type:"error",result:N}}})();return Promise.race([k,x])};try{let v=h?t.route.action:t.route.loader;if(r||i)if(v){let w,[x]=await Promise.all([y(v).catch(_=>{w=_}),r,i]);if(w!==void 0)throw w;u=x}else{await r;let w=h?t.route.action:t.route.loader;if(w)[u]=await Promise.all([y(w),i]);else if(p==="action"){let x=new URL(e.url),_=x.pathname+x.search;throw tr(405,{method:e.method,pathname:_,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(v)u=await y(v);else{let w=new URL(e.url),x=w.pathname+w.search;throw tr(404,{pathname:x})}}catch(v){return{type:"error",result:v}}finally{f&&e.signal.removeEventListener("abort",f)}return u}async function Ak(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}async function Ok(e){let{result:t,type:r}=e;if(I2(t)){let i;try{i=await Ak(t)}catch(s){return{type:"error",error:s}}return r==="error"?{type:"error",error:new yd(t.status,t.statusText,i),statusCode:t.status,headers:t.headers}:{type:"data",data:i,statusCode:t.status,headers:t.headers}}return r==="error"?px(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:new yd(t.init?.status||500,void 0,t.data),statusCode:Ml(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:Ml(t)?t.status:void 0}:px(t)?{type:"data",data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function Mk(e,t,r,i,s){let c=e.headers.get("Location");if(Xe(c,"Redirects returned/thrown from loaders/actions must have a Location header"),!Tg(c)){let u=i.slice(0,i.findIndex(f=>f.route.id===r)+1);c=Nm(new URL(t.url),u,s,c),e.headers.set("Location",c)}return e}function cx(e,t,r){if(Tg(e)){let i=e,s=i.startsWith("//")?new URL(t.protocol+i):new URL(i),c=ar(s.pathname,r)!=null;if(s.origin===t.origin&&c)return s.pathname+s.search+s.hash}return e}function jo(e,t,r,i){let s=e.createURL(X2(t)).toString(),c={signal:r};if(i&&Cn(i.formMethod)){let{formMethod:u,formEncType:f}=i;c.method=u.toUpperCase(),f==="application/json"?(c.headers=new Headers({"Content-Type":f}),c.body=JSON.stringify(i.json)):f==="text/plain"?c.body=i.text:f==="application/x-www-form-urlencoded"&&i.formData?c.body=Am(i.formData):c.body=i.formData}return new Request(s,c)}function Am(e){let t=new URLSearchParams;for(let[r,i]of e.entries())t.append(r,typeof i=="string"?i:i.name);return t}function ux(e){let t=new FormData;for(let[r,i]of e.entries())t.append(r,i);return t}function zk(e,t,r,i=!1,s=!1){let c={},u=null,f,h=!1,p={},y=r&&Un(r[1])?r[1].error:void 0;return e.forEach(v=>{if(!(v.route.id in t))return;let w=v.route.id,x=t[w];if(Xe(!Ai(x),"Cannot handle redirect results in processLoaderData"),Un(x)){let _=x.error;if(y!==void 0&&(_=y,y=void 0),u=u||{},s)u[w]=_;else{let k=Pa(e,w);u[k.route.id]==null&&(u[k.route.id]=_)}i||(c[w]=F2),h||(h=!0,f=Ml(x.error)?x.error.status:500),x.headers&&(p[w]=x.headers)}else c[w]=x.data,x.statusCode&&x.statusCode!==200&&!h&&(f=x.statusCode),x.headers&&(p[w]=x.headers)}),y!==void 0&&r&&(u={[r[0]]:y},r[2]&&(c[r[2]]=void 0)),{loaderData:c,errors:u,statusCode:f||200,loaderHeaders:p}}function dx(e,t,r,i,s,c){let{loaderData:u,errors:f}=zk(t,r,i);return s.filter(h=>!h.matches||h.matches.some(p=>p.shouldLoad)).forEach(h=>{let{key:p,match:y,controller:v}=h;if(v&&v.signal.aborted)return;let w=c[p];if(Xe(w,"Did not find corresponding fetcher result"),Un(w)){let x=Pa(e.matches,y?.route.id);f&&f[x.route.id]||(f={...f,[x.route.id]:w.error}),e.fetchers.delete(p)}else if(Ai(w))Xe(!1,"Unhandled fetcher revalidation redirect");else{let x=ca(w.data);e.fetchers.set(p,x)}}),{loaderData:u,errors:f}}function fx(e,t,r,i){let s=Object.entries(t).filter(([,c])=>c!==F2).reduce((c,[u,f])=>(c[u]=f,c),{});for(let c of r){let u=c.route.id;if(!t.hasOwnProperty(u)&&e.hasOwnProperty(u)&&c.route.loader&&(s[u]=e[u]),i&&i.hasOwnProperty(u))break}return s}function hx(e){return e?Un(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Pa(e,t){return(t?e.slice(0,e.findIndex(i=>i.route.id===t)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function yu(e){let t=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function tr(e,{pathname:t,routeId:r,method:i,type:s,message:c}={}){let u="Unknown Server Error",f="Unknown @remix-run/router error";return e===400?(u="Bad Request",i&&t&&r?f=`You made a ${i} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`:s==="invalid-body"&&(f="Unable to encode submission body")):e===403?(u="Forbidden",f=`Route "${r}" does not match URL "${t}"`):e===404?(u="Not Found",f=`No route matches URL "${t}"`):e===405&&(u="Method Not Allowed",i&&t&&r?f=`You made a ${i.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`:i&&(f=`Invalid request method "${i.toUpperCase()}"`)),new yd(e||500,u,new Error(f),!0)}function bu(e){let t=Object.entries(e);for(let r=t.length-1;r>=0;r--){let[i,s]=t[r];if(Ai(s))return{key:i,result:s}}}function X2(e){let t=typeof e=="string"?Ja(e):e;return Qa({...t,hash:""})}function Dk(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function jk(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,r])=>typeof t=="string"&&Lk(r))}function Lk(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function Uk(e){return I2(e.result)&&gk.has(e.result.status)}function Un(e){return e.type==="error"}function Ai(e){return(e&&e.type)==="redirect"}function px(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function I2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Hk(e){return mk.has(e.toUpperCase())}function Cn(e){return hk.has(e.toUpperCase())}function Ng(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ju(e,t){let r=typeof t=="string"?Ja(t).search:t.search;if(e[e.length-1].route.index&&Ng(r||""))return e[e.length-1];let i=U2(e);return i[i.length-1]}function mx(e){let{formMethod:t,formAction:r,formEncType:i,text:s,formData:c,json:u}=e;if(!(!t||!r||!i)){if(s!=null)return{formMethod:t,formAction:r,formEncType:i,formData:void 0,json:void 0,text:s};if(c!=null)return{formMethod:t,formAction:r,formEncType:i,formData:c,json:void 0,text:void 0};if(u!==void 0)return{formMethod:t,formAction:r,formEncType:i,formData:void 0,json:u,text:void 0}}}function Fp(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Bk(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function tl(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Fk(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function ca(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function $k(e,t){try{let r=e.sessionStorage.getItem(B2);if(r){let i=JSON.parse(r);for(let[s,c]of Object.entries(i||{}))c&&Array.isArray(c)&&t.set(s,new Set(c||[]))}}catch{}}function qk(e,t){if(t.size>0){let r={};for(let[i,s]of t)r[i]=[...s];try{e.sessionStorage.setItem(B2,JSON.stringify(r))}catch(i){qt(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function Yk(){let e,t,r=new Promise((i,s)=>{e=async c=>{i(c);try{await r}catch{}},t=async c=>{s(c);try{await r}catch{}}});return{promise:r,resolve:e,reject:t}}var Vi=U.createContext(null);Vi.displayName="DataRouter";var Fl=U.createContext(null);Fl.displayName="DataRouterState";U.createContext(!1);var kg=U.createContext({isTransitioning:!1});kg.displayName="ViewTransition";var G2=U.createContext(new Map);G2.displayName="Fetchers";var Vk=U.createContext(null);Vk.displayName="Await";var Hr=U.createContext(null);Hr.displayName="Navigation";var Bd=U.createContext(null);Bd.displayName="Location";var wr=U.createContext({outlet:null,matches:[],isDataRoute:!1});wr.displayName="Route";var Rg=U.createContext(null);Rg.displayName="RouteError";function Pk(e,{relative:t}={}){Xe($l(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=U.useContext(Hr),{hash:s,pathname:c,search:u}=ql(e,{relative:t}),f=c;return r!=="/"&&(f=c==="/"?r:jr([r,c])),i.createHref({pathname:f,search:u,hash:s})}function $l(){return U.useContext(Bd)!=null}function Pi(){return Xe($l(),"useLocation() may be used only in the context of a <Router> component."),U.useContext(Bd).location}var W2="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Q2(e){U.useContext(Hr).static||U.useLayoutEffect(e)}function xr(){let{isDataRoute:e}=U.useContext(wr);return e?iR():Xk()}function Xk(){Xe($l(),"useNavigate() may be used only in the context of a <Router> component.");let e=U.useContext(Vi),{basename:t,navigator:r}=U.useContext(Hr),{matches:i}=U.useContext(wr),{pathname:s}=Pi(),c=JSON.stringify(Sg(i)),u=U.useRef(!1);return Q2(()=>{u.current=!0}),U.useCallback((h,p={})=>{if(qt(u.current,W2),!u.current)return;if(typeof h=="number"){r.go(h);return}let y=Eg(h,JSON.parse(c),s,p.relative==="path");e==null&&t!=="/"&&(y.pathname=y.pathname==="/"?t:jr([t,y.pathname])),(p.replace?r.replace:r.push)(y,p.state,p)},[t,r,c,s,e])}var K2=U.createContext(null);function Ag(){return U.useContext(K2)}function Ik(e){let t=U.useContext(wr).outlet;return U.useMemo(()=>t&&U.createElement(K2.Provider,{value:e},t),[t,e])}function Fd(){let{matches:e}=U.useContext(wr),t=e[e.length-1];return t?t.params:{}}function ql(e,{relative:t}={}){let{matches:r}=U.useContext(wr),{pathname:i}=Pi(),s=JSON.stringify(Sg(r));return U.useMemo(()=>Eg(e,JSON.parse(s),i,t==="path"),[e,s,i,t])}function Gk(e,t,r,i,s){Xe($l(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=U.useContext(Hr),{matches:u}=U.useContext(wr),f=u[u.length-1],h=f?f.params:{},p=f?f.pathname:"/",y=f?f.pathnameBase:"/",v=f&&f.route;{let R=v&&v.path||"";J2(p,!v||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let w=Pi(),x;x=w;let _=x.pathname||"/",k=_;if(y!=="/"){let R=y.replace(/^\//,"").split("/");k="/"+_.replace(/^\//,"").split("/").slice(R.length).join("/")}let N=Va(e,{pathname:k});return qt(v||N!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),qt(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Zk(N&&N.map(R=>Object.assign({},R,{params:Object.assign({},h,R.params),pathname:jr([y,c.encodeLocation?c.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?y:jr([y,c.encodeLocation?c.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),u,r,i,s)}function Wk(){let e=aR(),t=Ml(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},c={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=U.createElement(U.Fragment,null,U.createElement("p",null,"💿 Hey developer 👋"),U.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",U.createElement("code",{style:c},"ErrorBoundary")," or"," ",U.createElement("code",{style:c},"errorElement")," prop on your route.")),U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},t),r?U.createElement("pre",{style:s},r):null,u)}var Qk=U.createElement(Wk,null),Kk=class extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?U.createElement(wr.Provider,{value:this.props.routeContext},U.createElement(Rg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Jk({routeContext:e,match:t,children:r}){let i=U.useContext(Vi);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),U.createElement(wr.Provider,{value:e},r)}function Zk(e,t=[],r=null,i=null,s=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let c=e,u=r?.errors;if(u!=null){let p=c.findIndex(y=>y.route.id&&u?.[y.route.id]!==void 0);Xe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let f=!1,h=-1;if(r)for(let p=0;p<c.length;p++){let y=c[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=p),y.route.id){let{loaderData:v,errors:w}=r,x=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!w||w[y.route.id]===void 0);if(y.route.lazy||x){f=!0,h>=0?c=c.slice(0,h+1):c=[c[0]];break}}}return c.reduceRight((p,y,v)=>{let w,x=!1,_=null,k=null;r&&(w=u&&y.route.id?u[y.route.id]:void 0,_=y.route.errorElement||Qk,f&&(h<0&&v===0?(J2("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,k=null):h===v&&(x=!0,k=y.route.hydrateFallbackElement||null)));let N=t.concat(c.slice(0,v+1)),E=()=>{let R;return w?R=_:x?R=k:y.route.Component?R=U.createElement(y.route.Component,null):y.route.element?R=y.route.element:R=p,U.createElement(Jk,{match:y,routeContext:{outlet:p,matches:N,isDataRoute:r!=null},children:R})};return r&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?U.createElement(Kk,{location:r.location,revalidation:r.revalidation,component:_,error:w,children:E(),routeContext:{outlet:null,matches:N,isDataRoute:!0},unstable_onError:i}):E()},null)}function Og(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eR(e){let t=U.useContext(Vi);return Xe(t,Og(e)),t}function tR(e){let t=U.useContext(Fl);return Xe(t,Og(e)),t}function nR(e){let t=U.useContext(wr);return Xe(t,Og(e)),t}function Mg(e){let t=nR(e),r=t.matches[t.matches.length-1];return Xe(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function rR(){return Mg("useRouteId")}function aR(){let e=U.useContext(Rg),t=tR("useRouteError"),r=Mg("useRouteError");return e!==void 0?e:t.errors?.[r]}function iR(){let{router:e}=eR("useNavigate"),t=Mg("useNavigate"),r=U.useRef(!1);return Q2(()=>{r.current=!0}),U.useCallback(async(s,c={})=>{qt(r.current,W2),r.current&&(typeof s=="number"?e.navigate(s):await e.navigate(s,{fromRouteId:t,...c}))},[e,t])}var gx={};function J2(e,t,r){!t&&!gx[e]&&(gx[e]=!0,qt(!1,r))}var vx={};function yx(e,t){!e&&!vx[t]&&(vx[t]=!0,console.warn(t))}function oR(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&qt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:U.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&qt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:U.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&qt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:U.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var sR=["HydrateFallback","hydrateFallbackElement"],lR=class{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",t(r))}})}};function cR({router:e,flushSync:t,unstable_onError:r}){let[i,s]=U.useState(e.state),[c,u]=U.useState(),[f,h]=U.useState({isTransitioning:!1}),[p,y]=U.useState(),[v,w]=U.useState(),[x,_]=U.useState(),k=U.useRef(new Map),N=U.useCallback(F=>{s(M=>(F.errors&&r&&Object.entries(F.errors).forEach(([G,ie])=>{M.errors?.[G]!==ie&&r(ie)}),F))},[r]),E=U.useCallback((F,{deletedFetchers:M,flushSync:G,viewTransitionOpts:ie})=>{F.fetchers.forEach((fe,he)=>{fe.data!==void 0&&k.current.set(he,fe.data)}),M.forEach(fe=>k.current.delete(fe)),yx(G===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let oe=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(yx(ie==null||oe,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!ie||!oe){t&&G?t(()=>N(F)):U.startTransition(()=>N(F));return}if(t&&G){t(()=>{v&&(p&&p.resolve(),v.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:ie.currentLocation,nextLocation:ie.nextLocation})});let fe=e.window.document.startViewTransition(()=>{t(()=>N(F))});fe.finished.finally(()=>{t(()=>{y(void 0),w(void 0),u(void 0),h({isTransitioning:!1})})}),t(()=>w(fe));return}v?(p&&p.resolve(),v.skipTransition(),_({state:F,currentLocation:ie.currentLocation,nextLocation:ie.nextLocation})):(u(F),h({isTransitioning:!0,flushSync:!1,currentLocation:ie.currentLocation,nextLocation:ie.nextLocation}))},[e.window,t,v,p,N]);U.useLayoutEffect(()=>e.subscribe(E),[e,E]),U.useEffect(()=>{f.isTransitioning&&!f.flushSync&&y(new lR)},[f]),U.useEffect(()=>{if(p&&c&&e.window){let F=c,M=p.promise,G=e.window.document.startViewTransition(async()=>{U.startTransition(()=>N(F)),await M});G.finished.finally(()=>{y(void 0),w(void 0),u(void 0),h({isTransitioning:!1})}),w(G)}},[c,p,e.window,N]),U.useEffect(()=>{p&&c&&i.location.key===c.location.key&&p.resolve()},[p,v,i.location,c]),U.useEffect(()=>{!f.isTransitioning&&x&&(u(x.state),h({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),_(void 0))},[f.isTransitioning,x]);let R=U.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:F=>e.navigate(F),push:(F,M,G)=>e.navigate(F,{state:M,preventScrollReset:G?.preventScrollReset}),replace:(F,M,G)=>e.navigate(F,{replace:!0,state:M,preventScrollReset:G?.preventScrollReset})}),[e]),O=e.basename||"/",B=U.useMemo(()=>({router:e,navigator:R,static:!1,basename:O,unstable_onError:r}),[e,R,O,r]);return U.createElement(U.Fragment,null,U.createElement(Vi.Provider,{value:B},U.createElement(Fl.Provider,{value:i},U.createElement(G2.Provider,{value:k.current},U.createElement(kg.Provider,{value:f},U.createElement(hR,{basename:O,location:i.location,navigationType:i.historyAction,navigator:R},U.createElement(uR,{routes:e.routes,future:e.future,state:i,unstable_onError:r})))))),null)}var uR=U.memo(dR);function dR({routes:e,future:t,state:r,unstable_onError:i}){return Gk(e,void 0,r,i,t)}function fR(e){return Ik(e.context)}function hR({basename:e="/",children:t=null,location:r,navigationType:i="POP",navigator:s,static:c=!1}){Xe(!$l(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=U.useMemo(()=>({basename:u,navigator:s,static:c,future:{}}),[u,s,c]);typeof r=="string"&&(r=Ja(r));let{pathname:h="/",search:p="",hash:y="",state:v=null,key:w="default"}=r,x=U.useMemo(()=>{let _=ar(h,u);return _==null?null:{location:{pathname:_,search:p,hash:y,state:v,key:w},navigationType:i}},[u,h,p,y,v,w,i]);return qt(x!=null,`<Router basename="${u}"> is not able to match the URL "${h}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:U.createElement(Hr.Provider,{value:f},U.createElement(Bd.Provider,{children:t,value:x}))}var Lu="get",Uu="application/x-www-form-urlencoded";function $d(e){return e!=null&&typeof e.tagName=="string"}function pR(e){return $d(e)&&e.tagName.toLowerCase()==="button"}function mR(e){return $d(e)&&e.tagName.toLowerCase()==="form"}function gR(e){return $d(e)&&e.tagName.toLowerCase()==="input"}function vR(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function yR(e,t){return e.button===0&&(!t||t==="_self")&&!vR(e)}var wu=null;function bR(){if(wu===null)try{new FormData(document.createElement("form"),0),wu=!1}catch{wu=!0}return wu}var wR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $p(e){return e!=null&&!wR.has(e)?(qt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Uu}"`),null):e}function xR(e,t){let r,i,s,c,u;if(mR(e)){let f=e.getAttribute("action");i=f?ar(f,t):null,r=e.getAttribute("method")||Lu,s=$p(e.getAttribute("enctype"))||Uu,c=new FormData(e)}else if(pR(e)||gR(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||f.getAttribute("action");if(i=h?ar(h,t):null,r=e.getAttribute("formmethod")||f.getAttribute("method")||Lu,s=$p(e.getAttribute("formenctype"))||$p(f.getAttribute("enctype"))||Uu,c=new FormData(f,e),!bR()){let{name:p,type:y,value:v}=e;if(y==="image"){let w=p?`${p}.`:"";c.append(`${w}x`,"0"),c.append(`${w}y`,"0")}else p&&c.append(p,v)}}else{if($d(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Lu,i=null,s=Uu,u=e}return c&&s==="text/plain"&&(u=c,c=void 0),{action:i,method:r.toLowerCase(),encType:s,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function zg(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _R(e,t,r){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return i.pathname==="/"?i.pathname=`_root.${r}`:t&&ar(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${r}`,i}async function SR(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ER(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function TR(e,t,r){let i=await Promise.all(e.map(async s=>{let c=t.routes[s.route.id];if(c){let u=await SR(c,r);return u.links?u.links():[]}return[]}));return RR(i.flat(1).filter(ER).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function bx(e,t,r,i,s,c){let u=(h,p)=>r[p]?h.route.id!==r[p].route.id:!0,f=(h,p)=>r[p].pathname!==h.pathname||r[p].route.path?.endsWith("*")&&r[p].params["*"]!==h.params["*"];return c==="assets"?t.filter((h,p)=>u(h,p)||f(h,p)):c==="data"?t.filter((h,p)=>{let y=i.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(u(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let v=h.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function CR(e,t,{includeHydrateFallback:r}={}){return NR(e.map(i=>{let s=t.routes[i.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),r&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function NR(e){return[...new Set(e)]}function kR(e){let t={},r=Object.keys(e).sort();for(let i of r)t[i]=e[i];return t}function RR(e,t){let r=new Set;return new Set(t),e.reduce((i,s)=>{let c=JSON.stringify(kR(s));return r.has(c)||(r.add(c),i.push({key:c,link:s})),i},[])}function Z2(){let e=U.useContext(Vi);return zg(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function AR(){let e=U.useContext(Fl);return zg(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Dg=U.createContext(void 0);Dg.displayName="FrameworkContext";function e_(){let e=U.useContext(Dg);return zg(e,"You must render this element inside a <HydratedRouter> element"),e}function OR(e,t){let r=U.useContext(Dg),[i,s]=U.useState(!1),[c,u]=U.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:y,onTouchStart:v}=t,w=U.useRef(null);U.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let k=E=>{E.forEach(R=>{u(R.isIntersecting)})},N=new IntersectionObserver(k,{threshold:.5});return w.current&&N.observe(w.current),()=>{N.disconnect()}}},[e]),U.useEffect(()=>{if(i){let k=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(k)}}},[i]);let x=()=>{s(!0)},_=()=>{s(!1),u(!1)};return r?e!=="intent"?[c,w,{}]:[c,w,{onFocus:nl(f,x),onBlur:nl(h,_),onMouseEnter:nl(p,x),onMouseLeave:nl(y,_),onTouchStart:nl(v,x)}]:[!1,w,{}]}function nl(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function MR({page:e,...t}){let{router:r}=Z2(),i=U.useMemo(()=>Va(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?U.createElement(DR,{page:e,matches:i,...t}):null}function zR(e){let{manifest:t,routeModules:r}=e_(),[i,s]=U.useState([]);return U.useEffect(()=>{let c=!1;return TR(e,t,r).then(u=>{c||s(u)}),()=>{c=!0}},[e,t,r]),i}function DR({page:e,matches:t,...r}){let i=Pi(),{manifest:s,routeModules:c}=e_(),{basename:u}=Z2(),{loaderData:f,matches:h}=AR(),p=U.useMemo(()=>bx(e,t,h,s,i,"data"),[e,t,h,s,i]),y=U.useMemo(()=>bx(e,t,h,s,i,"assets"),[e,t,h,s,i]),v=U.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let _=new Set,k=!1;if(t.forEach(E=>{let R=s.routes[E.route.id];!R||!R.hasLoader||(!p.some(O=>O.route.id===E.route.id)&&E.route.id in f&&c[E.route.id]?.shouldRevalidate||R.hasClientLoader?k=!0:_.add(E.route.id))}),_.size===0)return[];let N=_R(e,u,"data");return k&&_.size>0&&N.searchParams.set("_routes",t.filter(E=>_.has(E.route.id)).map(E=>E.route.id).join(",")),[N.pathname+N.search]},[u,f,i,s,p,t,e,c]),w=U.useMemo(()=>CR(y,s),[y,s]),x=zR(y);return U.createElement(U.Fragment,null,v.map(_=>U.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...r})),w.map(_=>U.createElement("link",{key:_,rel:"modulepreload",href:_,...r})),x.map(({key:_,link:k})=>U.createElement("link",{key:_,nonce:r.nonce,...k})))}function jR(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var t_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{t_&&(window.__reactRouterVersion="7.9.3")}catch{}function LR(e,t){return xk({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:F5({window:t?.window}),hydrationData:UR(),routes:e,mapRouteProperties:oR,hydrationRouteProperties:sR,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window}).initialize()}function UR(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:HR(e.errors)}),e}function HR(e){if(!e)return null;let t=Object.entries(e),r={};for(let[i,s]of t)if(s&&s.__type==="RouteErrorResponse")r[i]=new yd(s.status,s.statusText,s.data,s.internal===!0);else if(s&&s.__type==="Error"){if(s.__subType){let c=window[s.__subType];if(typeof c=="function")try{let u=new c(s.message);u.stack="",r[i]=u}catch{}}if(r[i]==null){let c=new Error(s.message);c.stack="",r[i]=c}}else r[i]=s;return r}var n_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vn=U.forwardRef(function({onClick:t,discover:r="render",prefetch:i="none",relative:s,reloadDocument:c,replace:u,state:f,target:h,to:p,preventScrollReset:y,viewTransition:v,...w},x){let{basename:_}=U.useContext(Hr),k=typeof p=="string"&&n_.test(p),N,E=!1;if(typeof p=="string"&&k&&(N=p,t_))try{let oe=new URL(window.location.href),fe=p.startsWith("//")?new URL(oe.protocol+p):new URL(p),he=ar(fe.pathname,_);fe.origin===oe.origin&&he!=null?p=he+fe.search+fe.hash:E=!0}catch{qt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=Pk(p,{relative:s}),[O,B,F]=OR(i,w),M=qR(p,{replace:u,state:f,target:h,preventScrollReset:y,relative:s,viewTransition:v});function G(oe){t&&t(oe),oe.defaultPrevented||M(oe)}let ie=U.createElement("a",{...w,...F,href:N||R,onClick:E||c?t:G,ref:jR(x,B),target:h,"data-discover":!k&&r==="render"?"true":void 0});return O&&!k?U.createElement(U.Fragment,null,ie,U.createElement(MR,{page:R})):ie});vn.displayName="Link";var BR=U.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:i="",end:s=!1,style:c,to:u,viewTransition:f,children:h,...p},y){let v=ql(u,{relative:p.relative}),w=Pi(),x=U.useContext(Fl),{navigator:_,basename:k}=U.useContext(Hr),N=x!=null&&IR(v)&&f===!0,E=_.encodeLocation?_.encodeLocation(v).pathname:v.pathname,R=w.pathname,O=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;r||(R=R.toLowerCase(),O=O?O.toLowerCase():null,E=E.toLowerCase()),O&&k&&(O=ar(O,k)||O);const B=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let F=R===E||!s&&R.startsWith(E)&&R.charAt(B)==="/",M=O!=null&&(O===E||!s&&O.startsWith(E)&&O.charAt(E.length)==="/"),G={isActive:F,isPending:M,isTransitioning:N},ie=F?t:void 0,oe;typeof i=="function"?oe=i(G):oe=[i,F?"active":null,M?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let fe=typeof c=="function"?c(G):c;return U.createElement(vn,{...p,"aria-current":ie,className:oe,ref:y,style:fe,to:u,viewTransition:f},typeof h=="function"?h(G):h)});BR.displayName="NavLink";var FR=U.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:i,replace:s,state:c,method:u=Lu,action:f,onSubmit:h,relative:p,preventScrollReset:y,viewTransition:v,...w},x)=>{let _=PR(),k=XR(f,{relative:p}),N=u.toLowerCase()==="get"?"get":"post",E=typeof f=="string"&&n_.test(f),R=O=>{if(h&&h(O),O.defaultPrevented)return;O.preventDefault();let B=O.nativeEvent.submitter,F=B?.getAttribute("formmethod")||u;_(B||O.currentTarget,{fetcherKey:t,method:F,navigate:r,replace:s,state:c,relative:p,preventScrollReset:y,viewTransition:v})};return U.createElement("form",{ref:x,method:N,action:k,onSubmit:i?h:R,...w,"data-discover":!E&&e==="render"?"true":void 0})});FR.displayName="Form";function $R(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function r_(e){let t=U.useContext(Vi);return Xe(t,$R(e)),t}function qR(e,{target:t,replace:r,state:i,preventScrollReset:s,relative:c,viewTransition:u}={}){let f=xr(),h=Pi(),p=ql(e,{relative:c});return U.useCallback(y=>{if(yR(y,t)){y.preventDefault();let v=r!==void 0?r:Qa(h)===Qa(p);f(e,{replace:v,state:i,preventScrollReset:s,relative:c,viewTransition:u})}},[h,f,p,r,i,t,e,s,c,u])}var YR=0,VR=()=>`__${String(++YR)}__`;function PR(){let{router:e}=r_("useSubmit"),{basename:t}=U.useContext(Hr),r=rR();return U.useCallback(async(i,s={})=>{let{action:c,method:u,encType:f,formData:h,body:p}=xR(i,t);if(s.navigate===!1){let y=s.fetcherKey||VR();await e.fetch(y,r,s.action||c,{preventScrollReset:s.preventScrollReset,formData:h,body:p,formMethod:s.method||u,formEncType:s.encType||f,flushSync:s.flushSync})}else await e.navigate(s.action||c,{preventScrollReset:s.preventScrollReset,formData:h,body:p,formMethod:s.method||u,formEncType:s.encType||f,replace:s.replace,state:s.state,fromRouteId:r,flushSync:s.flushSync,viewTransition:s.viewTransition})},[e,t,r])}function XR(e,{relative:t}={}){let{basename:r}=U.useContext(Hr),i=U.useContext(wr);Xe(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),c={...ql(e||".",{relative:t})},u=Pi();if(e==null){c.search=u.search;let f=new URLSearchParams(c.search),h=f.getAll("index");if(h.some(y=>y==="")){f.delete("index"),h.filter(v=>v).forEach(v=>f.append("index",v));let y=f.toString();c.search=y?`?${y}`:""}}return(!e||e===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(c.pathname=c.pathname==="/"?r:jr([r,c.pathname])),Qa(c)}function IR(e,{relative:t}={}){let r=U.useContext(kg);Xe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=r_("useViewTransitionState"),s=ql(e,{relative:t});if(!r.isTransitioning)return!1;let c=ar(r.currentLocation.pathname,i)||r.currentLocation.pathname,u=ar(r.nextLocation.pathname,i)||r.nextLocation.pathname;return vd(s.pathname,u)!=null||vd(s.pathname,c)!=null}var GR=M2();function WR(e){return U.createElement(cR,{flushSync:GR.flushSync,...e})}var qp={exports:{}},Yp={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wx;function QR(){if(wx)return Yp;wx=1;var e=Ld();function t(h,p){return h===p&&(h!==0||1/h===1/p)||h!==h&&p!==p}var r=typeof Object.is=="function"?Object.is:t,i=e.useSyncExternalStore,s=e.useRef,c=e.useEffect,u=e.useMemo,f=e.useDebugValue;return Yp.useSyncExternalStoreWithSelector=function(h,p,y,v,w){var x=s(null);if(x.current===null){var _={hasValue:!1,value:null};x.current=_}else _=x.current;x=u(function(){function N(F){if(!E){if(E=!0,R=F,F=v(F),w!==void 0&&_.hasValue){var M=_.value;if(w(M,F))return O=M}return O=F}if(M=O,r(R,F))return M;var G=v(F);return w!==void 0&&w(M,G)?(R=F,M):(R=F,O=G)}var E=!1,R,O,B=y===void 0?null:y;return[function(){return N(p())},B===null?void 0:function(){return N(B())}]},[p,y,v,w]);var k=i(h,x[0],x[1]);return c(function(){_.hasValue=!0,_.value=k},[k]),f(k),k},Yp}var xx;function KR(){return xx||(xx=1,qp.exports=QR()),qp.exports}var JR=KR();function ZR(e){e()}function eA(){let e=null,t=null;return{clear(){e=null,t=null},notify(){ZR(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0;const s=t={callback:r,next:null,prev:t};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:t=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}var _x={notify(){},get:()=>[]};function tA(e,t){let r,i=_x,s=0,c=!1;function u(k){y();const N=i.subscribe(k);let E=!1;return()=>{E||(E=!0,N(),v())}}function f(){i.notify()}function h(){_.onStateChange&&_.onStateChange()}function p(){return c}function y(){s++,r||(r=e.subscribe(h),i=eA())}function v(){s--,r&&s===0&&(r(),r=void 0,i.clear(),i=_x)}function w(){c||(c=!0,y())}function x(){c&&(c=!1,v())}const _={addNestedSub:u,notifyNestedSubs:f,handleChangeWrapper:h,isSubscribed:p,trySubscribe:w,tryUnsubscribe:x,getListeners:()=>i};return _}var nA=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rA=nA(),aA=()=>typeof navigator<"u"&&navigator.product==="ReactNative",iA=aA(),oA=()=>rA||iA?U.useLayoutEffect:U.useEffect,sA=oA(),lA=Symbol.for("react-redux-context"),cA=typeof globalThis<"u"?globalThis:{};function uA(){if(!U.createContext)return{};const e=cA[lA]??=new Map;let t=e.get(U.createContext);return t||(t=U.createContext(null),e.set(U.createContext,t)),t}var Ka=uA();function dA(e){const{children:t,context:r,serverState:i,store:s}=e,c=U.useMemo(()=>{const h=tA(s);return{store:s,subscription:h,getServerState:i?()=>i:void 0}},[s,i]),u=U.useMemo(()=>s.getState(),[s]);sA(()=>{const{subscription:h}=c;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),u!==s.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[c,u]);const f=r||Ka;return U.createElement(f.Provider,{value:c},t)}var fA=dA;function jg(e=Ka){return function(){return U.useContext(e)}}var a_=jg();function i_(e=Ka){const t=e===Ka?a_:jg(e),r=()=>{const{store:i}=t();return i};return Object.assign(r,{withTypes:()=>r}),r}var hA=i_();function pA(e=Ka){const t=e===Ka?hA:i_(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var Pt=pA(),mA=(e,t)=>e===t;function gA(e=Ka){const t=e===Ka?a_:jg(e),r=(i,s={})=>{const{equalityFn:c=mA}=typeof s=="function"?{equalityFn:s}:s,u=t(),{store:f,subscription:h,getServerState:p}=u;U.useRef(!0);const y=U.useCallback({[i.name](w){return i(w)}}[i.name],[i]),v=JR.useSyncExternalStoreWithSelector(h.addNestedSub,f.getState,p||f.getState,y,c);return U.useDebugValue(v),v};return Object.assign(r,{withTypes:()=>r}),r}var Ct=gA(),o_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sx=Mi.createContext&&Mi.createContext(o_),vA=["attr","size","title"];function yA(e,t){if(e==null)return{};var r=bA(e,t),i,s;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)i=c[s],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function bA(e,t){if(e==null)return{};var r={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;r[i]=e[i]}return r}function wd(){return wd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},wd.apply(this,arguments)}function Ex(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,i)}return r}function xd(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ex(Object(r),!0).forEach(function(i){wA(e,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ex(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))})}return e}function wA(e,t,r){return t=xA(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function xA(e){var t=_A(e,"string");return typeof t=="symbol"?t:t+""}function _A(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var i=r.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function s_(e){return e&&e.map((t,r)=>Mi.createElement(t.tag,xd({key:r},t.attr),s_(t.child)))}function Br(e){return t=>Mi.createElement(SA,wd({attr:xd({},e.attr)},t),s_(e.child))}function SA(e){var t=r=>{var{attr:i,size:s,title:c}=e,u=yA(e,vA),f=s||r.size||"1em",h;return r.className&&(h=r.className),e.className&&(h=(h?h+" ":"")+e.className),Mi.createElement("svg",wd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,u,{className:h,style:xd(xd({color:e.color||r.color},r.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&Mi.createElement("title",null,c),e.children)};return Sx!==void 0?Mi.createElement(Sx.Consumer,null,r=>t(r)):t(o_)}function EA(e){return Br({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function Lg(e){return Br({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"},child:[]}]})(e)}function TA(e){return Br({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function l_(e){return Br({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function CA(e){return Br({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"},child:[]}]})(e)}function NA(e){return Br({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"},child:[]}]})(e)}function rn(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var kA=typeof Symbol=="function"&&Symbol.observable||"@@observable",Tx=kA,Vp=()=>Math.random().toString(36).substring(7).split("").join("."),RA={INIT:`@@redux/INIT${Vp()}`,REPLACE:`@@redux/REPLACE${Vp()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Vp()}`},_d=RA;function Ug(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function c_(e,t,r){if(typeof e!="function")throw new Error(rn(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(rn(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(rn(1));return r(c_)(e,t)}let i=e,s=t,c=new Map,u=c,f=0,h=!1;function p(){u===c&&(u=new Map,c.forEach((N,E)=>{u.set(E,N)}))}function y(){if(h)throw new Error(rn(3));return s}function v(N){if(typeof N!="function")throw new Error(rn(4));if(h)throw new Error(rn(5));let E=!0;p();const R=f++;return u.set(R,N),function(){if(E){if(h)throw new Error(rn(6));E=!1,p(),u.delete(R),c=null}}}function w(N){if(!Ug(N))throw new Error(rn(7));if(typeof N.type>"u")throw new Error(rn(8));if(typeof N.type!="string")throw new Error(rn(17));if(h)throw new Error(rn(9));try{h=!0,s=i(s,N)}finally{h=!1}return(c=u).forEach(R=>{R()}),N}function x(N){if(typeof N!="function")throw new Error(rn(10));i=N,w({type:_d.REPLACE})}function _(){const N=v;return{subscribe(E){if(typeof E!="object"||E===null)throw new Error(rn(11));function R(){const B=E;B.next&&B.next(y())}return R(),{unsubscribe:N(R)}},[Tx](){return this}}}return w({type:_d.INIT}),{dispatch:w,subscribe:v,getState:y,replaceReducer:x,[Tx]:_}}function AA(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:_d.INIT})>"u")throw new Error(rn(12));if(typeof r(void 0,{type:_d.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(rn(13))})}function OA(e){const t=Object.keys(e),r={};for(let c=0;c<t.length;c++){const u=t[c];typeof e[u]=="function"&&(r[u]=e[u])}const i=Object.keys(r);let s;try{AA(r)}catch(c){s=c}return function(u={},f){if(s)throw s;let h=!1;const p={};for(let y=0;y<i.length;y++){const v=i[y],w=r[v],x=u[v],_=w(x,f);if(typeof _>"u")throw f&&f.type,new Error(rn(14));p[v]=_,h=h||_!==x}return h=h||i.length!==Object.keys(u).length,h?p:u}}function Sd(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...i)=>t(r(...i)))}function MA(...e){return t=>(r,i)=>{const s=t(r,i);let c=()=>{throw new Error(rn(15))};const u={getState:s.getState,dispatch:(h,...p)=>c(h,...p)},f=e.map(h=>h(u));return c=Sd(...f)(s.dispatch),{...s,dispatch:c}}}function zA(e){return Ug(e)&&"type"in e&&typeof e.type=="string"}var u_=Symbol.for("immer-nothing"),Cx=Symbol.for("immer-draftable"),Hn=Symbol.for("immer-state");function vr(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Xo=Object.getPrototypeOf;function Ui(e){return!!e&&!!e[Hn]}function ma(e){return e?d_(e)||Array.isArray(e)||!!e[Cx]||!!e.constructor?.[Cx]||Yl(e)||Yd(e):!1}var DA=Object.prototype.constructor.toString();function d_(e){if(!e||typeof e!="object")return!1;const t=Xo(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===DA}function Ed(e,t){qd(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,i)=>t(i,r,e))}function qd(e){const t=e[Hn];return t?t.type_:Array.isArray(e)?1:Yl(e)?2:Yd(e)?3:0}function Om(e,t){return qd(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function f_(e,t,r){const i=qd(e);i===2?e.set(t,r):i===3?e.add(r):e[t]=r}function jA(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Yl(e){return e instanceof Map}function Yd(e){return e instanceof Set}function Ei(e){return e.copy_||e.base_}function Mm(e,t){if(Yl(e))return new Map(e);if(Yd(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=d_(e);if(t===!0||t==="class_only"&&!r){const i=Object.getOwnPropertyDescriptors(e);delete i[Hn];let s=Reflect.ownKeys(i);for(let c=0;c<s.length;c++){const u=s[c],f=i[u];f.writable===!1&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(i[u]={configurable:!0,writable:!0,enumerable:f.enumerable,value:e[u]})}return Object.create(Xo(e),i)}else{const i=Xo(e);if(i!==null&&r)return{...e};const s=Object.create(i);return Object.assign(s,e)}}function Hg(e,t=!1){return Vd(e)||Ui(e)||!ma(e)||(qd(e)>1&&Object.defineProperties(e,{set:{value:xu},add:{value:xu},clear:{value:xu},delete:{value:xu}}),Object.freeze(e),t&&Object.values(e).forEach(r=>Hg(r,!0))),e}function xu(){vr(2)}function Vd(e){return Object.isFrozen(e)}var LA={};function Hi(e){const t=LA[e];return t||vr(0,e),t}var zl;function h_(){return zl}function UA(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Nx(e,t){t&&(Hi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function zm(e){Dm(e),e.drafts_.forEach(HA),e.drafts_=null}function Dm(e){e===zl&&(zl=e.parent_)}function kx(e){return zl=UA(zl,e)}function HA(e){const t=e[Hn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Rx(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[Hn].modified_&&(zm(t),vr(4)),ma(e)&&(e=Td(t,e),t.parent_||Cd(t,e)),t.patches_&&Hi("Patches").generateReplacementPatches_(r[Hn].base_,e,t.patches_,t.inversePatches_)):e=Td(t,r,[]),zm(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==u_?e:void 0}function Td(e,t,r){if(Vd(t))return t;const i=t[Hn];if(!i)return Ed(t,(s,c)=>Ax(e,i,t,s,c,r)),t;if(i.scope_!==e)return t;if(!i.modified_)return Cd(e,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const s=i.copy_;let c=s,u=!1;i.type_===3&&(c=new Set(s),s.clear(),u=!0),Ed(c,(f,h)=>Ax(e,i,s,f,h,r,u)),Cd(e,s,!1),r&&e.patches_&&Hi("Patches").generatePatches_(i,r,e.patches_,e.inversePatches_)}return i.copy_}function Ax(e,t,r,i,s,c,u){if(Ui(s)){const f=c&&t&&t.type_!==3&&!Om(t.assigned_,i)?c.concat(i):void 0,h=Td(e,s,f);if(f_(r,i,h),Ui(h))e.canAutoFreeze_=!1;else return}else u&&r.add(s);if(ma(s)&&!Vd(s)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Td(e,s),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&(Yl(r)?r.has(i):Object.prototype.propertyIsEnumerable.call(r,i))&&Cd(e,s)}}function Cd(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Hg(t,r)}function BA(e,t){const r=Array.isArray(e),i={type_:r?1:0,scope_:t?t.scope_:h_(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=i,c=Bg;r&&(s=[i],c=Dl);const{revoke:u,proxy:f}=Proxy.revocable(s,c);return i.draft_=f,i.revoke_=u,f}var Bg={get(e,t){if(t===Hn)return e;const r=Ei(e);if(!Om(r,t))return FA(e,r,t);const i=r[t];return e.finalized_||!ma(i)?i:i===Pp(e.base_,t)?(Xp(e),e.copy_[t]=Lm(i,e)):i},has(e,t){return t in Ei(e)},ownKeys(e){return Reflect.ownKeys(Ei(e))},set(e,t,r){const i=p_(Ei(e),t);if(i?.set)return i.set.call(e.draft_,r),!0;if(!e.modified_){const s=Pp(Ei(e),t),c=s?.[Hn];if(c&&c.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(jA(r,s)&&(r!==void 0||Om(e.base_,t)))return!0;Xp(e),jm(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Pp(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Xp(e),jm(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=Ei(e),i=Reflect.getOwnPropertyDescriptor(r,t);return i&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:i.enumerable,value:r[t]}},defineProperty(){vr(11)},getPrototypeOf(e){return Xo(e.base_)},setPrototypeOf(){vr(12)}},Dl={};Ed(Bg,(e,t)=>{Dl[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Dl.deleteProperty=function(e,t){return Dl.set.call(this,e,t,void 0)};Dl.set=function(e,t,r){return Bg.set.call(this,e[0],t,r,e[0])};function Pp(e,t){const r=e[Hn];return(r?Ei(r):e)[t]}function FA(e,t,r){const i=p_(t,r);return i?"value"in i?i.value:i.get?.call(e.draft_):void 0}function p_(e,t){if(!(t in e))return;let r=Xo(e);for(;r;){const i=Object.getOwnPropertyDescriptor(r,t);if(i)return i;r=Xo(r)}}function jm(e){e.modified_||(e.modified_=!0,e.parent_&&jm(e.parent_))}function Xp(e){e.copy_||(e.copy_=Mm(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var $A=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,i)=>{if(typeof t=="function"&&typeof r!="function"){const c=r;r=t;const u=this;return function(h=c,...p){return u.produce(h,y=>r.call(this,y,...p))}}typeof r!="function"&&vr(6),i!==void 0&&typeof i!="function"&&vr(7);let s;if(ma(t)){const c=kx(this),u=Lm(t,void 0);let f=!0;try{s=r(u),f=!1}finally{f?zm(c):Dm(c)}return Nx(c,i),Rx(s,c)}else if(!t||typeof t!="object"){if(s=r(t),s===void 0&&(s=t),s===u_&&(s=void 0),this.autoFreeze_&&Hg(s,!0),i){const c=[],u=[];Hi("Patches").generateReplacementPatches_(t,s,c,u),i(c,u)}return s}else vr(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(u,...f)=>this.produceWithPatches(u,h=>t(h,...f));let i,s;return[this.produce(t,r,(u,f)=>{i=u,s=f}),i,s]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){ma(e)||vr(8),Ui(e)&&(e=qA(e));const t=kx(this),r=Lm(e,void 0);return r[Hn].isManual_=!0,Dm(t),r}finishDraft(e,t){const r=e&&e[Hn];(!r||!r.isManual_)&&vr(9);const{scope_:i}=r;return Nx(i,t),Rx(void 0,i)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const s=t[r];if(s.path.length===0&&s.op==="replace"){e=s.value;break}}r>-1&&(t=t.slice(r+1));const i=Hi("Patches").applyPatches_;return Ui(e)?i(e,t):this.produce(e,s=>i(s,t))}};function Lm(e,t){const r=Yl(e)?Hi("MapSet").proxyMap_(e,t):Yd(e)?Hi("MapSet").proxySet_(e,t):BA(e,t);return(t?t.scope_:h_()).drafts_.push(r),r}function qA(e){return Ui(e)||vr(10,e),m_(e)}function m_(e){if(!ma(e)||Vd(e))return e;const t=e[Hn];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Mm(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Mm(e,!0);return Ed(r,(i,s)=>{f_(r,i,m_(s))}),t&&(t.finalized_=!1),r}var YA=new $A,g_=YA.produce;function v_(e){return({dispatch:r,getState:i})=>s=>c=>typeof c=="function"?c(r,i,e):s(c)}var VA=v_(),PA=v_,XA=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Sd:Sd.apply(null,arguments)},IA=e=>e&&typeof e.match=="function";function pl(e,t){function r(...i){if(t){let s=t(...i);if(!s)throw new Error(pa(0));return{type:e,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:e,payload:i[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=i=>zA(i)&&i.type===e,r}var y_=class ll extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,ll.prototype)}static get[Symbol.species](){return ll}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new ll(...t[0].concat(this)):new ll(...t.concat(this))}};function Ox(e){return ma(e)?g_(e,()=>{}):e}function _u(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function GA(e){return typeof e=="boolean"}var WA=()=>function(t){const{thunk:r=!0,immutableCheck:i=!0,serializableCheck:s=!0,actionCreatorCheck:c=!0}=t??{};let u=new y_;return r&&(GA(r)?u.push(VA):u.push(PA(r.extraArgument))),u},QA="RTK_autoBatch",Mx=e=>t=>{setTimeout(t,e)},KA=(e={type:"raf"})=>t=>(...r)=>{const i=t(...r);let s=!0,c=!1,u=!1;const f=new Set,h=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Mx(10):e.type==="callback"?e.queueNotification:Mx(e.timeout),p=()=>{u=!1,c&&(c=!1,f.forEach(y=>y()))};return Object.assign({},i,{subscribe(y){const v=()=>s&&y(),w=i.subscribe(v);return f.add(y),()=>{w(),f.delete(y)}},dispatch(y){try{return s=!y?.meta?.[QA],c=!s,c&&(u||(u=!0,h(p))),i.dispatch(y)}finally{s=!0}}})},JA=e=>function(r){const{autoBatch:i=!0}=r??{};let s=new y_(e);return i&&s.push(KA(typeof i=="object"?i:void 0)),s};function ZA(e){const t=WA(),{reducer:r=void 0,middleware:i,devTools:s=!0,preloadedState:c=void 0,enhancers:u=void 0}=e||{};let f;if(typeof r=="function")f=r;else if(Ug(r))f=OA(r);else throw new Error(pa(1));let h;typeof i=="function"?h=i(t):h=t();let p=Sd;s&&(p=XA({trace:!1,...typeof s=="object"&&s}));const y=MA(...h),v=JA(y);let w=typeof u=="function"?u(v):v();const x=p(...w);return c_(f,c,x)}function b_(e){const t={},r=[];let i;const s={addCase(c,u){const f=typeof c=="string"?c:c.type;if(!f)throw new Error(pa(28));if(f in t)throw new Error(pa(29));return t[f]=u,s},addAsyncThunk(c,u){return u.pending&&(t[c.pending.type]=u.pending),u.rejected&&(t[c.rejected.type]=u.rejected),u.fulfilled&&(t[c.fulfilled.type]=u.fulfilled),u.settled&&r.push({matcher:c.settled,reducer:u.settled}),s},addMatcher(c,u){return r.push({matcher:c,reducer:u}),s},addDefaultCase(c){return i=c,s}};return e(s),[t,r,i]}function eO(e){return typeof e=="function"}function tO(e,t){let[r,i,s]=b_(t),c;if(eO(e))c=()=>Ox(e());else{const f=Ox(e);c=()=>f}function u(f=c(),h){let p=[r[h.type],...i.filter(({matcher:y})=>y(h)).map(({reducer:y})=>y)];return p.filter(y=>!!y).length===0&&(p=[s]),p.reduce((y,v)=>{if(v)if(Ui(y)){const x=v(y,h);return x===void 0?y:x}else{if(ma(y))return g_(y,w=>v(w,h));{const w=v(y,h);if(w===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return w}}return y},f)}return u.getInitialState=c,u}var nO=(e,t)=>IA(e)?e.match(t):e(t);function rO(...e){return t=>e.some(r=>nO(r,t))}var aO="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",iO=(e=21)=>{let t="",r=e;for(;r--;)t+=aO[Math.random()*64|0];return t},oO=["name","message","stack","code"],Ip=class{constructor(e,t){this.payload=e,this.meta=t}_type},zx=class{constructor(e,t){this.payload=e,this.meta=t}_type},sO=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of oO)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},Dx="External signal was aborted",yn=(()=>{function e(t,r,i){const s=pl(t+"/fulfilled",(h,p,y,v)=>({payload:h,meta:{...v||{},arg:y,requestId:p,requestStatus:"fulfilled"}})),c=pl(t+"/pending",(h,p,y)=>({payload:void 0,meta:{...y||{},arg:p,requestId:h,requestStatus:"pending"}})),u=pl(t+"/rejected",(h,p,y,v,w)=>({payload:v,error:(i&&i.serializeError||sO)(h||"Rejected"),meta:{...w||{},arg:y,requestId:p,rejectedWithValue:!!v,requestStatus:"rejected",aborted:h?.name==="AbortError",condition:h?.name==="ConditionError"}}));function f(h,{signal:p}={}){return(y,v,w)=>{const x=i?.idGenerator?i.idGenerator(h):iO(),_=new AbortController;let k,N;function E(O){N=O,_.abort()}p&&(p.aborted?E(Dx):p.addEventListener("abort",()=>E(Dx),{once:!0}));const R=(async function(){let O;try{let F=i?.condition?.(h,{getState:v,extra:w});if(cO(F)&&(F=await F),F===!1||_.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const M=new Promise((G,ie)=>{k=()=>{ie({name:"AbortError",message:N||"Aborted"})},_.signal.addEventListener("abort",k)});y(c(x,h,i?.getPendingMeta?.({requestId:x,arg:h},{getState:v,extra:w}))),O=await Promise.race([M,Promise.resolve(r(h,{dispatch:y,getState:v,extra:w,requestId:x,signal:_.signal,abort:E,rejectWithValue:(G,ie)=>new Ip(G,ie),fulfillWithValue:(G,ie)=>new zx(G,ie)})).then(G=>{if(G instanceof Ip)throw G;return G instanceof zx?s(G.payload,x,h,G.meta):s(G,x,h)})])}catch(F){O=F instanceof Ip?u(null,x,h,F.payload,F.meta):u(F,x,h)}finally{k&&_.signal.removeEventListener("abort",k)}return i&&!i.dispatchConditionRejection&&u.match(O)&&O.meta.condition||y(O),O})();return Object.assign(R,{abort:E,requestId:x,arg:h,unwrap(){return R.then(lO)}})}}return Object.assign(f,{pending:c,rejected:u,fulfilled:s,settled:rO(u,s),typePrefix:t})}return e.withTypes=()=>e,e})();function lO(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function cO(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var uO=Symbol.for("rtk-slice-createasyncthunk");function dO(e,t){return`${e}/${t}`}function fO({creators:e}={}){const t=e?.asyncThunk?.[uO];return function(i){const{name:s,reducerPath:c=s}=i;if(!s)throw new Error(pa(11));const u=(typeof i.reducers=="function"?i.reducers(pO()):i.reducers)||{},f=Object.keys(u),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},p={addCase(O,B){const F=typeof O=="string"?O:O.type;if(!F)throw new Error(pa(12));if(F in h.sliceCaseReducersByType)throw new Error(pa(13));return h.sliceCaseReducersByType[F]=B,p},addMatcher(O,B){return h.sliceMatchers.push({matcher:O,reducer:B}),p},exposeAction(O,B){return h.actionCreators[O]=B,p},exposeCaseReducer(O,B){return h.sliceCaseReducersByName[O]=B,p}};f.forEach(O=>{const B=u[O],F={reducerName:O,type:dO(s,O),createNotation:typeof i.reducers=="function"};gO(B)?yO(F,B,p,t):mO(F,B,p)});function y(){const[O={},B=[],F=void 0]=typeof i.extraReducers=="function"?b_(i.extraReducers):[i.extraReducers],M={...O,...h.sliceCaseReducersByType};return tO(i.initialState,G=>{for(let ie in M)G.addCase(ie,M[ie]);for(let ie of h.sliceMatchers)G.addMatcher(ie.matcher,ie.reducer);for(let ie of B)G.addMatcher(ie.matcher,ie.reducer);F&&G.addDefaultCase(F)})}const v=O=>O,w=new Map,x=new WeakMap;let _;function k(O,B){return _||(_=y()),_(O,B)}function N(){return _||(_=y()),_.getInitialState()}function E(O,B=!1){function F(G){let ie=G[O];return typeof ie>"u"&&B&&(ie=_u(x,F,N)),ie}function M(G=v){const ie=_u(w,B,()=>new WeakMap);return _u(ie,G,()=>{const oe={};for(const[fe,he]of Object.entries(i.selectors??{}))oe[fe]=hO(he,G,()=>_u(x,G,N),B);return oe})}return{reducerPath:O,getSelectors:M,get selectors(){return M(F)},selectSlice:F}}const R={name:s,reducer:k,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:N,...E(c),injectInto(O,{reducerPath:B,...F}={}){const M=B??c;return O.inject({reducerPath:M,reducer:k},F),{...R,...E(M,!0)}}};return R}}function hO(e,t,r,i){function s(c,...u){let f=t(c);return typeof f>"u"&&i&&(f=r()),e(f,...u)}return s.unwrapped=e,s}var Fg=fO();function pO(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function mO({type:e,reducerName:t,createNotation:r},i,s){let c,u;if("reducer"in i){if(r&&!vO(i))throw new Error(pa(17));c=i.reducer,u=i.prepare}else c=i;s.addCase(e,c).exposeCaseReducer(t,c).exposeAction(t,u?pl(e,u):pl(e))}function gO(e){return e._reducerDefinitionType==="asyncThunk"}function vO(e){return e._reducerDefinitionType==="reducerWithPrepare"}function yO({type:e,reducerName:t},r,i,s){if(!s)throw new Error(pa(18));const{payloadCreator:c,fulfilled:u,pending:f,rejected:h,settled:p,options:y}=r,v=s(e,c,y);i.exposeAction(t,v),u&&i.addCase(v.fulfilled,u),f&&i.addCase(v.pending,f),h&&i.addCase(v.rejected,h),p&&i.addMatcher(v.settled,p),i.exposeCaseReducer(t,{fulfilled:u||Su,pending:f||Su,rejected:h||Su,settled:p||Su})}function Su(){}function pa(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}function w_(e,t){return function(){return e.apply(t,arguments)}}const{toString:bO}=Object.prototype,{getPrototypeOf:$g}=Object,{iterator:Pd,toStringTag:x_}=Symbol,Xd=(e=>t=>{const r=bO.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),_r=e=>(e=e.toLowerCase(),t=>Xd(t)===e),Id=e=>t=>typeof t===e,{isArray:Ko}=Array,Io=Id("undefined");function Vl(e){return e!==null&&!Io(e)&&e.constructor!==null&&!Io(e.constructor)&&Nn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const __=_r("ArrayBuffer");function wO(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&__(e.buffer),t}const xO=Id("string"),Nn=Id("function"),S_=Id("number"),Pl=e=>e!==null&&typeof e=="object",_O=e=>e===!0||e===!1,Hu=e=>{if(Xd(e)!=="object")return!1;const t=$g(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(x_ in e)&&!(Pd in e)},SO=e=>{if(!Pl(e)||Vl(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},EO=_r("Date"),TO=_r("File"),CO=_r("Blob"),NO=_r("FileList"),kO=e=>Pl(e)&&Nn(e.pipe),RO=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Nn(e.append)&&((t=Xd(e))==="formdata"||t==="object"&&Nn(e.toString)&&e.toString()==="[object FormData]"))},AO=_r("URLSearchParams"),[OO,MO,zO,DO]=["ReadableStream","Request","Response","Headers"].map(_r),jO=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Xl(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let i,s;if(typeof e!="object"&&(e=[e]),Ko(e))for(i=0,s=e.length;i<s;i++)t.call(null,e[i],i,e);else{if(Vl(e))return;const c=r?Object.getOwnPropertyNames(e):Object.keys(e),u=c.length;let f;for(i=0;i<u;i++)f=c[i],t.call(null,e[f],f,e)}}function E_(e,t){if(Vl(e))return null;t=t.toLowerCase();const r=Object.keys(e);let i=r.length,s;for(;i-- >0;)if(s=r[i],t===s.toLowerCase())return s;return null}const Oi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,T_=e=>!Io(e)&&e!==Oi;function Um(){const{caseless:e,skipUndefined:t}=T_(this)&&this||{},r={},i=(s,c)=>{const u=e&&E_(r,c)||c;Hu(r[u])&&Hu(s)?r[u]=Um(r[u],s):Hu(s)?r[u]=Um({},s):Ko(s)?r[u]=s.slice():(!t||!Io(s))&&(r[u]=s)};for(let s=0,c=arguments.length;s<c;s++)arguments[s]&&Xl(arguments[s],i);return r}const LO=(e,t,r,{allOwnKeys:i}={})=>(Xl(t,(s,c)=>{r&&Nn(s)?e[c]=w_(s,r):e[c]=s},{allOwnKeys:i}),e),UO=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),HO=(e,t,r,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},BO=(e,t,r,i)=>{let s,c,u;const f={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),c=s.length;c-- >0;)u=s[c],(!i||i(u,e,t))&&!f[u]&&(t[u]=e[u],f[u]=!0);e=r!==!1&&$g(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},FO=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const i=e.indexOf(t,r);return i!==-1&&i===r},$O=e=>{if(!e)return null;if(Ko(e))return e;let t=e.length;if(!S_(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},qO=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&$g(Uint8Array)),YO=(e,t)=>{const i=(e&&e[Pd]).call(e);let s;for(;(s=i.next())&&!s.done;){const c=s.value;t.call(e,c[0],c[1])}},VO=(e,t)=>{let r;const i=[];for(;(r=e.exec(t))!==null;)i.push(r);return i},PO=_r("HTMLFormElement"),XO=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,i,s){return i.toUpperCase()+s}),jx=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),IO=_r("RegExp"),C_=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),i={};Xl(r,(s,c)=>{let u;(u=t(s,c,e))!==!1&&(i[c]=u||s)}),Object.defineProperties(e,i)},GO=e=>{C_(e,(t,r)=>{if(Nn(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const i=e[r];if(Nn(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},WO=(e,t)=>{const r={},i=s=>{s.forEach(c=>{r[c]=!0})};return Ko(e)?i(e):i(String(e).split(t)),r},QO=()=>{},KO=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function JO(e){return!!(e&&Nn(e.append)&&e[x_]==="FormData"&&e[Pd])}const ZO=e=>{const t=new Array(10),r=(i,s)=>{if(Pl(i)){if(t.indexOf(i)>=0)return;if(Vl(i))return i;if(!("toJSON"in i)){t[s]=i;const c=Ko(i)?[]:{};return Xl(i,(u,f)=>{const h=r(u,s+1);!Io(h)&&(c[f]=h)}),t[s]=void 0,c}}return i};return r(e,0)},eM=_r("AsyncFunction"),tM=e=>e&&(Pl(e)||Nn(e))&&Nn(e.then)&&Nn(e.catch),N_=((e,t)=>e?setImmediate:t?((r,i)=>(Oi.addEventListener("message",({source:s,data:c})=>{s===Oi&&c===r&&i.length&&i.shift()()},!1),s=>{i.push(s),Oi.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Nn(Oi.postMessage)),nM=typeof queueMicrotask<"u"?queueMicrotask.bind(Oi):typeof process<"u"&&process.nextTick||N_,rM=e=>e!=null&&Nn(e[Pd]),W={isArray:Ko,isArrayBuffer:__,isBuffer:Vl,isFormData:RO,isArrayBufferView:wO,isString:xO,isNumber:S_,isBoolean:_O,isObject:Pl,isPlainObject:Hu,isEmptyObject:SO,isReadableStream:OO,isRequest:MO,isResponse:zO,isHeaders:DO,isUndefined:Io,isDate:EO,isFile:TO,isBlob:CO,isRegExp:IO,isFunction:Nn,isStream:kO,isURLSearchParams:AO,isTypedArray:qO,isFileList:NO,forEach:Xl,merge:Um,extend:LO,trim:jO,stripBOM:UO,inherits:HO,toFlatObject:BO,kindOf:Xd,kindOfTest:_r,endsWith:FO,toArray:$O,forEachEntry:YO,matchAll:VO,isHTMLForm:PO,hasOwnProperty:jx,hasOwnProp:jx,reduceDescriptors:C_,freezeMethods:GO,toObjectSet:WO,toCamelCase:XO,noop:QO,toFiniteNumber:KO,findKey:E_,global:Oi,isContextDefined:T_,isSpecCompliantForm:JO,toJSONObject:ZO,isAsyncFn:eM,isThenable:tM,setImmediate:N_,asap:nM,isIterable:rM};function Ue(e,t,r,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),i&&(this.request=i),s&&(this.response=s,this.status=s.status?s.status:null)}W.inherits(Ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:W.toJSONObject(this.config),code:this.code,status:this.status}}});const k_=Ue.prototype,R_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{R_[e]={value:e}});Object.defineProperties(Ue,R_);Object.defineProperty(k_,"isAxiosError",{value:!0});Ue.from=(e,t,r,i,s,c)=>{const u=Object.create(k_);W.toFlatObject(e,u,function(y){return y!==Error.prototype},p=>p!=="isAxiosError");const f=e&&e.message?e.message:"Error",h=t==null&&e?e.code:t;return Ue.call(u,f,h,r,i,s),e&&u.cause==null&&Object.defineProperty(u,"cause",{value:e,configurable:!0}),u.name=e&&e.name||"Error",c&&Object.assign(u,c),u};const aM=null;function Hm(e){return W.isPlainObject(e)||W.isArray(e)}function A_(e){return W.endsWith(e,"[]")?e.slice(0,-2):e}function Lx(e,t,r){return e?e.concat(t).map(function(s,c){return s=A_(s),!r&&c?"["+s+"]":s}).join(r?".":""):t}function iM(e){return W.isArray(e)&&!e.some(Hm)}const oM=W.toFlatObject(W,{},null,function(t){return/^is[A-Z]/.test(t)});function Gd(e,t,r){if(!W.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=W.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,N){return!W.isUndefined(N[k])});const i=r.metaTokens,s=r.visitor||y,c=r.dots,u=r.indexes,h=(r.Blob||typeof Blob<"u"&&Blob)&&W.isSpecCompliantForm(t);if(!W.isFunction(s))throw new TypeError("visitor must be a function");function p(_){if(_===null)return"";if(W.isDate(_))return _.toISOString();if(W.isBoolean(_))return _.toString();if(!h&&W.isBlob(_))throw new Ue("Blob is not supported. Use a Buffer instead.");return W.isArrayBuffer(_)||W.isTypedArray(_)?h&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function y(_,k,N){let E=_;if(_&&!N&&typeof _=="object"){if(W.endsWith(k,"{}"))k=i?k:k.slice(0,-2),_=JSON.stringify(_);else if(W.isArray(_)&&iM(_)||(W.isFileList(_)||W.endsWith(k,"[]"))&&(E=W.toArray(_)))return k=A_(k),E.forEach(function(O,B){!(W.isUndefined(O)||O===null)&&t.append(u===!0?Lx([k],B,c):u===null?k:k+"[]",p(O))}),!1}return Hm(_)?!0:(t.append(Lx(N,k,c),p(_)),!1)}const v=[],w=Object.assign(oM,{defaultVisitor:y,convertValue:p,isVisitable:Hm});function x(_,k){if(!W.isUndefined(_)){if(v.indexOf(_)!==-1)throw Error("Circular reference detected in "+k.join("."));v.push(_),W.forEach(_,function(E,R){(!(W.isUndefined(E)||E===null)&&s.call(t,E,W.isString(R)?R.trim():R,k,w))===!0&&x(E,k?k.concat(R):[R])}),v.pop()}}if(!W.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Ux(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return t[i]})}function qg(e,t){this._pairs=[],e&&Gd(e,this,t)}const O_=qg.prototype;O_.append=function(t,r){this._pairs.push([t,r])};O_.toString=function(t){const r=t?function(i){return t.call(this,i,Ux)}:Ux;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function sM(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function M_(e,t,r){if(!t)return e;const i=r&&r.encode||sM;W.isFunction(r)&&(r={serialize:r});const s=r&&r.serialize;let c;if(s?c=s(t,r):c=W.isURLSearchParams(t)?t.toString():new qg(t,r).toString(i),c){const u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+c}return e}class Hx{constructor(){this.handlers=[]}use(t,r,i){return this.handlers.push({fulfilled:t,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){W.forEach(this.handlers,function(i){i!==null&&t(i)})}}const z_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},lM=typeof URLSearchParams<"u"?URLSearchParams:qg,cM=typeof FormData<"u"?FormData:null,uM=typeof Blob<"u"?Blob:null,dM={isBrowser:!0,classes:{URLSearchParams:lM,FormData:cM,Blob:uM},protocols:["http","https","file","blob","url","data"]},Yg=typeof window<"u"&&typeof document<"u",Bm=typeof navigator=="object"&&navigator||void 0,fM=Yg&&(!Bm||["ReactNative","NativeScript","NS"].indexOf(Bm.product)<0),hM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",pM=Yg&&window.location.href||"http://localhost",mM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Yg,hasStandardBrowserEnv:fM,hasStandardBrowserWebWorkerEnv:hM,navigator:Bm,origin:pM},Symbol.toStringTag,{value:"Module"})),fn={...mM,...dM};function gM(e,t){return Gd(e,new fn.classes.URLSearchParams,{visitor:function(r,i,s,c){return fn.isNode&&W.isBuffer(r)?(this.append(i,r.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)},...t})}function vM(e){return W.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function yM(e){const t={},r=Object.keys(e);let i;const s=r.length;let c;for(i=0;i<s;i++)c=r[i],t[c]=e[c];return t}function D_(e){function t(r,i,s,c){let u=r[c++];if(u==="__proto__")return!0;const f=Number.isFinite(+u),h=c>=r.length;return u=!u&&W.isArray(s)?s.length:u,h?(W.hasOwnProp(s,u)?s[u]=[s[u],i]:s[u]=i,!f):((!s[u]||!W.isObject(s[u]))&&(s[u]=[]),t(r,i,s[u],c)&&W.isArray(s[u])&&(s[u]=yM(s[u])),!f)}if(W.isFormData(e)&&W.isFunction(e.entries)){const r={};return W.forEachEntry(e,(i,s)=>{t(vM(i),s,r,0)}),r}return null}function bM(e,t,r){if(W.isString(e))try{return(t||JSON.parse)(e),W.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(e)}const Il={transitional:z_,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const i=r.getContentType()||"",s=i.indexOf("application/json")>-1,c=W.isObject(t);if(c&&W.isHTMLForm(t)&&(t=new FormData(t)),W.isFormData(t))return s?JSON.stringify(D_(t)):t;if(W.isArrayBuffer(t)||W.isBuffer(t)||W.isStream(t)||W.isFile(t)||W.isBlob(t)||W.isReadableStream(t))return t;if(W.isArrayBufferView(t))return t.buffer;if(W.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let f;if(c){if(i.indexOf("application/x-www-form-urlencoded")>-1)return gM(t,this.formSerializer).toString();if((f=W.isFileList(t))||i.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return Gd(f?{"files[]":t}:t,h&&new h,this.formSerializer)}}return c||s?(r.setContentType("application/json",!1),bM(t)):t}],transformResponse:[function(t){const r=this.transitional||Il.transitional,i=r&&r.forcedJSONParsing,s=this.responseType==="json";if(W.isResponse(t)||W.isReadableStream(t))return t;if(t&&W.isString(t)&&(i&&!this.responseType||s)){const u=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t,this.parseReviver)}catch(f){if(u)throw f.name==="SyntaxError"?Ue.from(f,Ue.ERR_BAD_RESPONSE,this,null,this.response):f}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:fn.classes.FormData,Blob:fn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};W.forEach(["delete","get","head","post","put","patch"],e=>{Il.headers[e]={}});const wM=W.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),xM=e=>{const t={};let r,i,s;return e&&e.split(`
`).forEach(function(u){s=u.indexOf(":"),r=u.substring(0,s).trim().toLowerCase(),i=u.substring(s+1).trim(),!(!r||t[r]&&wM[r])&&(r==="set-cookie"?t[r]?t[r].push(i):t[r]=[i]:t[r]=t[r]?t[r]+", "+i:i)}),t},Bx=Symbol("internals");function rl(e){return e&&String(e).trim().toLowerCase()}function Bu(e){return e===!1||e==null?e:W.isArray(e)?e.map(Bu):String(e)}function _M(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=r.exec(e);)t[i[1]]=i[2];return t}const SM=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Gp(e,t,r,i,s){if(W.isFunction(i))return i.call(this,t,r);if(s&&(t=r),!!W.isString(t)){if(W.isString(i))return t.indexOf(i)!==-1;if(W.isRegExp(i))return i.test(t)}}function EM(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,i)=>r.toUpperCase()+i)}function TM(e,t){const r=W.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+r,{value:function(s,c,u){return this[i].call(this,t,s,c,u)},configurable:!0})})}let kn=class{constructor(t){t&&this.set(t)}set(t,r,i){const s=this;function c(f,h,p){const y=rl(h);if(!y)throw new Error("header name must be a non-empty string");const v=W.findKey(s,y);(!v||s[v]===void 0||p===!0||p===void 0&&s[v]!==!1)&&(s[v||h]=Bu(f))}const u=(f,h)=>W.forEach(f,(p,y)=>c(p,y,h));if(W.isPlainObject(t)||t instanceof this.constructor)u(t,r);else if(W.isString(t)&&(t=t.trim())&&!SM(t))u(xM(t),r);else if(W.isObject(t)&&W.isIterable(t)){let f={},h,p;for(const y of t){if(!W.isArray(y))throw TypeError("Object iterator must return a key-value pair");f[p=y[0]]=(h=f[p])?W.isArray(h)?[...h,y[1]]:[h,y[1]]:y[1]}u(f,r)}else t!=null&&c(r,t,i);return this}get(t,r){if(t=rl(t),t){const i=W.findKey(this,t);if(i){const s=this[i];if(!r)return s;if(r===!0)return _M(s);if(W.isFunction(r))return r.call(this,s,i);if(W.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=rl(t),t){const i=W.findKey(this,t);return!!(i&&this[i]!==void 0&&(!r||Gp(this,this[i],i,r)))}return!1}delete(t,r){const i=this;let s=!1;function c(u){if(u=rl(u),u){const f=W.findKey(i,u);f&&(!r||Gp(i,i[f],f,r))&&(delete i[f],s=!0)}}return W.isArray(t)?t.forEach(c):c(t),s}clear(t){const r=Object.keys(this);let i=r.length,s=!1;for(;i--;){const c=r[i];(!t||Gp(this,this[c],c,t,!0))&&(delete this[c],s=!0)}return s}normalize(t){const r=this,i={};return W.forEach(this,(s,c)=>{const u=W.findKey(i,c);if(u){r[u]=Bu(s),delete r[c];return}const f=t?EM(c):String(c).trim();f!==c&&delete r[c],r[f]=Bu(s),i[f]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return W.forEach(this,(i,s)=>{i!=null&&i!==!1&&(r[s]=t&&W.isArray(i)?i.join(", "):i)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const i=new this(t);return r.forEach(s=>i.set(s)),i}static accessor(t){const i=(this[Bx]=this[Bx]={accessors:{}}).accessors,s=this.prototype;function c(u){const f=rl(u);i[f]||(TM(s,u),i[f]=!0)}return W.isArray(t)?t.forEach(c):c(t),this}};kn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);W.reduceDescriptors(kn.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(i){this[r]=i}}});W.freezeMethods(kn);function Wp(e,t){const r=this||Il,i=t||r,s=kn.from(i.headers);let c=i.data;return W.forEach(e,function(f){c=f.call(r,c,s.normalize(),t?t.status:void 0)}),s.normalize(),c}function j_(e){return!!(e&&e.__CANCEL__)}function Jo(e,t,r){Ue.call(this,e??"canceled",Ue.ERR_CANCELED,t,r),this.name="CanceledError"}W.inherits(Jo,Ue,{__CANCEL__:!0});function L_(e,t,r){const i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):t(new Ue("Request failed with status code "+r.status,[Ue.ERR_BAD_REQUEST,Ue.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function CM(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function NM(e,t){e=e||10;const r=new Array(e),i=new Array(e);let s=0,c=0,u;return t=t!==void 0?t:1e3,function(h){const p=Date.now(),y=i[c];u||(u=p),r[s]=h,i[s]=p;let v=c,w=0;for(;v!==s;)w+=r[v++],v=v%e;if(s=(s+1)%e,s===c&&(c=(c+1)%e),p-u<t)return;const x=y&&p-y;return x?Math.round(w*1e3/x):void 0}}function kM(e,t){let r=0,i=1e3/t,s,c;const u=(p,y=Date.now())=>{r=y,s=null,c&&(clearTimeout(c),c=null),e(...p)};return[(...p)=>{const y=Date.now(),v=y-r;v>=i?u(p,y):(s=p,c||(c=setTimeout(()=>{c=null,u(s)},i-v)))},()=>s&&u(s)]}const Nd=(e,t,r=3)=>{let i=0;const s=NM(50,250);return kM(c=>{const u=c.loaded,f=c.lengthComputable?c.total:void 0,h=u-i,p=s(h),y=u<=f;i=u;const v={loaded:u,total:f,progress:f?u/f:void 0,bytes:h,rate:p||void 0,estimated:p&&f&&y?(f-u)/p:void 0,event:c,lengthComputable:f!=null,[t?"download":"upload"]:!0};e(v)},r)},Fx=(e,t)=>{const r=e!=null;return[i=>t[0]({lengthComputable:r,total:e,loaded:i}),t[1]]},$x=e=>(...t)=>W.asap(()=>e(...t)),RM=fn.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,fn.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(fn.origin),fn.navigator&&/(msie|trident)/i.test(fn.navigator.userAgent)):()=>!0,AM=fn.hasStandardBrowserEnv?{write(e,t,r,i,s,c){const u=[e+"="+encodeURIComponent(t)];W.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),W.isString(i)&&u.push("path="+i),W.isString(s)&&u.push("domain="+s),c===!0&&u.push("secure"),document.cookie=u.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function OM(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function MM(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function U_(e,t,r){let i=!OM(t);return e&&(i||r==!1)?MM(e,t):t}const qx=e=>e instanceof kn?{...e}:e;function Bi(e,t){t=t||{};const r={};function i(p,y,v,w){return W.isPlainObject(p)&&W.isPlainObject(y)?W.merge.call({caseless:w},p,y):W.isPlainObject(y)?W.merge({},y):W.isArray(y)?y.slice():y}function s(p,y,v,w){if(W.isUndefined(y)){if(!W.isUndefined(p))return i(void 0,p,v,w)}else return i(p,y,v,w)}function c(p,y){if(!W.isUndefined(y))return i(void 0,y)}function u(p,y){if(W.isUndefined(y)){if(!W.isUndefined(p))return i(void 0,p)}else return i(void 0,y)}function f(p,y,v){if(v in t)return i(p,y);if(v in e)return i(void 0,p)}const h={url:c,method:c,data:c,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f,headers:(p,y,v)=>s(qx(p),qx(y),v,!0)};return W.forEach(Object.keys({...e,...t}),function(y){const v=h[y]||s,w=v(e[y],t[y],y);W.isUndefined(w)&&v!==f||(r[y]=w)}),r}const H_=e=>{const t=Bi({},e);let{data:r,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:c,headers:u,auth:f}=t;if(t.headers=u=kn.from(u),t.url=M_(U_(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),f&&u.set("Authorization","Basic "+btoa((f.username||"")+":"+(f.password?unescape(encodeURIComponent(f.password)):""))),W.isFormData(r)){if(fn.hasStandardBrowserEnv||fn.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if(W.isFunction(r.getHeaders)){const h=r.getHeaders(),p=["content-type","content-length"];Object.entries(h).forEach(([y,v])=>{p.includes(y.toLowerCase())&&u.set(y,v)})}}if(fn.hasStandardBrowserEnv&&(i&&W.isFunction(i)&&(i=i(t)),i||i!==!1&&RM(t.url))){const h=s&&c&&AM.read(c);h&&u.set(s,h)}return t},zM=typeof XMLHttpRequest<"u",DM=zM&&function(e){return new Promise(function(r,i){const s=H_(e);let c=s.data;const u=kn.from(s.headers).normalize();let{responseType:f,onUploadProgress:h,onDownloadProgress:p}=s,y,v,w,x,_;function k(){x&&x(),_&&_(),s.cancelToken&&s.cancelToken.unsubscribe(y),s.signal&&s.signal.removeEventListener("abort",y)}let N=new XMLHttpRequest;N.open(s.method.toUpperCase(),s.url,!0),N.timeout=s.timeout;function E(){if(!N)return;const O=kn.from("getAllResponseHeaders"in N&&N.getAllResponseHeaders()),F={data:!f||f==="text"||f==="json"?N.responseText:N.response,status:N.status,statusText:N.statusText,headers:O,config:e,request:N};L_(function(G){r(G),k()},function(G){i(G),k()},F),N=null}"onloadend"in N?N.onloadend=E:N.onreadystatechange=function(){!N||N.readyState!==4||N.status===0&&!(N.responseURL&&N.responseURL.indexOf("file:")===0)||setTimeout(E)},N.onabort=function(){N&&(i(new Ue("Request aborted",Ue.ECONNABORTED,e,N)),N=null)},N.onerror=function(B){const F=B&&B.message?B.message:"Network Error",M=new Ue(F,Ue.ERR_NETWORK,e,N);M.event=B||null,i(M),N=null},N.ontimeout=function(){let B=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const F=s.transitional||z_;s.timeoutErrorMessage&&(B=s.timeoutErrorMessage),i(new Ue(B,F.clarifyTimeoutError?Ue.ETIMEDOUT:Ue.ECONNABORTED,e,N)),N=null},c===void 0&&u.setContentType(null),"setRequestHeader"in N&&W.forEach(u.toJSON(),function(B,F){N.setRequestHeader(F,B)}),W.isUndefined(s.withCredentials)||(N.withCredentials=!!s.withCredentials),f&&f!=="json"&&(N.responseType=s.responseType),p&&([w,_]=Nd(p,!0),N.addEventListener("progress",w)),h&&N.upload&&([v,x]=Nd(h),N.upload.addEventListener("progress",v),N.upload.addEventListener("loadend",x)),(s.cancelToken||s.signal)&&(y=O=>{N&&(i(!O||O.type?new Jo(null,e,N):O),N.abort(),N=null)},s.cancelToken&&s.cancelToken.subscribe(y),s.signal&&(s.signal.aborted?y():s.signal.addEventListener("abort",y)));const R=CM(s.url);if(R&&fn.protocols.indexOf(R)===-1){i(new Ue("Unsupported protocol "+R+":",Ue.ERR_BAD_REQUEST,e));return}N.send(c||null)})},jM=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let i=new AbortController,s;const c=function(p){if(!s){s=!0,f();const y=p instanceof Error?p:this.reason;i.abort(y instanceof Ue?y:new Jo(y instanceof Error?y.message:y))}};let u=t&&setTimeout(()=>{u=null,c(new Ue(`timeout ${t} of ms exceeded`,Ue.ETIMEDOUT))},t);const f=()=>{e&&(u&&clearTimeout(u),u=null,e.forEach(p=>{p.unsubscribe?p.unsubscribe(c):p.removeEventListener("abort",c)}),e=null)};e.forEach(p=>p.addEventListener("abort",c));const{signal:h}=i;return h.unsubscribe=()=>W.asap(f),h}},LM=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let i=0,s;for(;i<r;)s=i+t,yield e.slice(i,s),i=s},UM=async function*(e,t){for await(const r of HM(e))yield*LM(r,t)},HM=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:i}=await t.read();if(r)break;yield i}}finally{await t.cancel()}},Yx=(e,t,r,i)=>{const s=UM(e,t);let c=0,u,f=h=>{u||(u=!0,i&&i(h))};return new ReadableStream({async pull(h){try{const{done:p,value:y}=await s.next();if(p){f(),h.close();return}let v=y.byteLength;if(r){let w=c+=v;r(w)}h.enqueue(new Uint8Array(y))}catch(p){throw f(p),p}},cancel(h){return f(h),s.return()}},{highWaterMark:2})},Vx=64*1024,{isFunction:Eu}=W,BM=(({Request:e,Response:t})=>({Request:e,Response:t}))(W.global),{ReadableStream:Px,TextEncoder:Xx}=W.global,Ix=(e,...t)=>{try{return!!e(...t)}catch{return!1}},FM=e=>{e=W.merge.call({skipUndefined:!0},BM,e);const{fetch:t,Request:r,Response:i}=e,s=t?Eu(t):typeof fetch=="function",c=Eu(r),u=Eu(i);if(!s)return!1;const f=s&&Eu(Px),h=s&&(typeof Xx=="function"?(_=>k=>_.encode(k))(new Xx):async _=>new Uint8Array(await new r(_).arrayBuffer())),p=c&&f&&Ix(()=>{let _=!1;const k=new r(fn.origin,{body:new Px,method:"POST",get duplex(){return _=!0,"half"}}).headers.has("Content-Type");return _&&!k}),y=u&&f&&Ix(()=>W.isReadableStream(new i("").body)),v={stream:y&&(_=>_.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(_=>{!v[_]&&(v[_]=(k,N)=>{let E=k&&k[_];if(E)return E.call(k);throw new Ue(`Response type '${_}' is not supported`,Ue.ERR_NOT_SUPPORT,N)})});const w=async _=>{if(_==null)return 0;if(W.isBlob(_))return _.size;if(W.isSpecCompliantForm(_))return(await new r(fn.origin,{method:"POST",body:_}).arrayBuffer()).byteLength;if(W.isArrayBufferView(_)||W.isArrayBuffer(_))return _.byteLength;if(W.isURLSearchParams(_)&&(_=_+""),W.isString(_))return(await h(_)).byteLength},x=async(_,k)=>{const N=W.toFiniteNumber(_.getContentLength());return N??w(k)};return async _=>{let{url:k,method:N,data:E,signal:R,cancelToken:O,timeout:B,onDownloadProgress:F,onUploadProgress:M,responseType:G,headers:ie,withCredentials:oe="same-origin",fetchOptions:fe}=H_(_),he=t||fetch;G=G?(G+"").toLowerCase():"text";let ue=jM([R,O&&O.toAbortSignal()],B),_e=null;const we=ue&&ue.unsubscribe&&(()=>{ue.unsubscribe()});let Oe;try{if(M&&p&&N!=="get"&&N!=="head"&&(Oe=await x(ie,E))!==0){let A=new r(k,{method:"POST",body:E,duplex:"half"}),Y;if(W.isFormData(E)&&(Y=A.headers.get("content-type"))&&ie.setContentType(Y),A.body){const[J,ae]=Fx(Oe,Nd($x(M)));E=Yx(A.body,Vx,J,ae)}}W.isString(oe)||(oe=oe?"include":"omit");const S=c&&"credentials"in r.prototype,z={...fe,signal:ue,method:N.toUpperCase(),headers:ie.normalize().toJSON(),body:E,duplex:"half",credentials:S?oe:void 0};_e=c&&new r(k,z);let H=await(c?he(_e,fe):he(k,z));const Z=y&&(G==="stream"||G==="response");if(y&&(F||Z&&we)){const A={};["status","statusText","headers"].forEach(le=>{A[le]=H[le]});const Y=W.toFiniteNumber(H.headers.get("content-length")),[J,ae]=F&&Fx(Y,Nd($x(F),!0))||[];H=new i(Yx(H.body,Vx,J,()=>{ae&&ae(),we&&we()}),A)}G=G||"text";let re=await v[W.findKey(v,G)||"text"](H,_);return!Z&&we&&we(),await new Promise((A,Y)=>{L_(A,Y,{data:re,headers:kn.from(H.headers),status:H.status,statusText:H.statusText,config:_,request:_e})})}catch(S){throw we&&we(),S&&S.name==="TypeError"&&/Load failed|fetch/i.test(S.message)?Object.assign(new Ue("Network Error",Ue.ERR_NETWORK,_,_e),{cause:S.cause||S}):Ue.from(S,S&&S.code,_,_e)}}},$M=new Map,B_=e=>{let t=e?e.env:{};const{fetch:r,Request:i,Response:s}=t,c=[i,s,r];let u=c.length,f=u,h,p,y=$M;for(;f--;)h=c[f],p=y.get(h),p===void 0&&y.set(h,p=f?new Map:FM(t)),y=p;return p};B_();const Fm={http:aM,xhr:DM,fetch:{get:B_}};W.forEach(Fm,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Gx=e=>`- ${e}`,qM=e=>W.isFunction(e)||e===null||e===!1,F_={getAdapter:(e,t)=>{e=W.isArray(e)?e:[e];const{length:r}=e;let i,s;const c={};for(let u=0;u<r;u++){i=e[u];let f;if(s=i,!qM(i)&&(s=Fm[(f=String(i)).toLowerCase()],s===void 0))throw new Ue(`Unknown adapter '${f}'`);if(s&&(W.isFunction(s)||(s=s.get(t))))break;c[f||"#"+u]=s}if(!s){const u=Object.entries(c).map(([h,p])=>`adapter ${h} `+(p===!1?"is not supported by the environment":"is not available in the build"));let f=r?u.length>1?`since :
`+u.map(Gx).join(`
`):" "+Gx(u[0]):"as no adapter specified";throw new Ue("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return s},adapters:Fm};function Qp(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Jo(null,e)}function Wx(e){return Qp(e),e.headers=kn.from(e.headers),e.data=Wp.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),F_.getAdapter(e.adapter||Il.adapter,e)(e).then(function(i){return Qp(e),i.data=Wp.call(e,e.transformResponse,i),i.headers=kn.from(i.headers),i},function(i){return j_(i)||(Qp(e),i&&i.response&&(i.response.data=Wp.call(e,e.transformResponse,i.response),i.response.headers=kn.from(i.response.headers))),Promise.reject(i)})}const $_="1.12.2",Wd={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Wd[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const Qx={};Wd.transitional=function(t,r,i){function s(c,u){return"[Axios v"+$_+"] Transitional option '"+c+"'"+u+(i?". "+i:"")}return(c,u,f)=>{if(t===!1)throw new Ue(s(u," has been removed"+(r?" in "+r:"")),Ue.ERR_DEPRECATED);return r&&!Qx[u]&&(Qx[u]=!0,console.warn(s(u," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(c,u,f):!0}};Wd.spelling=function(t){return(r,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function YM(e,t,r){if(typeof e!="object")throw new Ue("options must be an object",Ue.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let s=i.length;for(;s-- >0;){const c=i[s],u=t[c];if(u){const f=e[c],h=f===void 0||u(f,c,e);if(h!==!0)throw new Ue("option "+c+" must be "+h,Ue.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new Ue("Unknown option "+c,Ue.ERR_BAD_OPTION)}}const Fu={assertOptions:YM,validators:Wd},Or=Fu.validators;let zi=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Hx,response:new Hx}}async request(t,r){try{return await this._request(t,r)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const c=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?c&&!String(i.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+c):i.stack=c}catch{}}throw i}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Bi(this.defaults,r);const{transitional:i,paramsSerializer:s,headers:c}=r;i!==void 0&&Fu.assertOptions(i,{silentJSONParsing:Or.transitional(Or.boolean),forcedJSONParsing:Or.transitional(Or.boolean),clarifyTimeoutError:Or.transitional(Or.boolean)},!1),s!=null&&(W.isFunction(s)?r.paramsSerializer={serialize:s}:Fu.assertOptions(s,{encode:Or.function,serialize:Or.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Fu.assertOptions(r,{baseUrl:Or.spelling("baseURL"),withXsrfToken:Or.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let u=c&&W.merge(c.common,c[r.method]);c&&W.forEach(["delete","get","head","post","put","patch","common"],_=>{delete c[_]}),r.headers=kn.concat(u,c);const f=[];let h=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(r)===!1||(h=h&&k.synchronous,f.unshift(k.fulfilled,k.rejected))});const p=[];this.interceptors.response.forEach(function(k){p.push(k.fulfilled,k.rejected)});let y,v=0,w;if(!h){const _=[Wx.bind(this),void 0];for(_.unshift(...f),_.push(...p),w=_.length,y=Promise.resolve(r);v<w;)y=y.then(_[v++],_[v++]);return y}w=f.length;let x=r;for(;v<w;){const _=f[v++],k=f[v++];try{x=_(x)}catch(N){k.call(this,N);break}}try{y=Wx.call(this,x)}catch(_){return Promise.reject(_)}for(v=0,w=p.length;v<w;)y=y.then(p[v++],p[v++]);return y}getUri(t){t=Bi(this.defaults,t);const r=U_(t.baseURL,t.url,t.allowAbsoluteUrls);return M_(r,t.params,t.paramsSerializer)}};W.forEach(["delete","get","head","options"],function(t){zi.prototype[t]=function(r,i){return this.request(Bi(i||{},{method:t,url:r,data:(i||{}).data}))}});W.forEach(["post","put","patch"],function(t){function r(i){return function(c,u,f){return this.request(Bi(f||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:c,data:u}))}}zi.prototype[t]=r(),zi.prototype[t+"Form"]=r(!0)});let VM=class q_{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(c){r=c});const i=this;this.promise.then(s=>{if(!i._listeners)return;let c=i._listeners.length;for(;c-- >0;)i._listeners[c](s);i._listeners=null}),this.promise.then=s=>{let c;const u=new Promise(f=>{i.subscribe(f),c=f}).then(s);return u.cancel=function(){i.unsubscribe(c)},u},t(function(c,u,f){i.reason||(i.reason=new Jo(c,u,f),r(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=i=>{t.abort(i)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new q_(function(s){t=s}),cancel:t}}};function PM(e){return function(r){return e.apply(null,r)}}function XM(e){return W.isObject(e)&&e.isAxiosError===!0}const $m={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($m).forEach(([e,t])=>{$m[t]=e});function Y_(e){const t=new zi(e),r=w_(zi.prototype.request,t);return W.extend(r,zi.prototype,t,{allOwnKeys:!0}),W.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return Y_(Bi(e,s))},r}const zt=Y_(Il);zt.Axios=zi;zt.CanceledError=Jo;zt.CancelToken=VM;zt.isCancel=j_;zt.VERSION=$_;zt.toFormData=Gd;zt.AxiosError=Ue;zt.Cancel=zt.CanceledError;zt.all=function(t){return Promise.all(t)};zt.spread=PM;zt.isAxiosError=XM;zt.mergeConfig=Bi;zt.AxiosHeaders=kn;zt.formToJSON=e=>D_(W.isHTMLForm(e)?new FormData(e):e);zt.getAdapter=F_.getAdapter;zt.HttpStatusCode=$m;zt.default=zt;const{Axios:q6,AxiosError:Y6,CanceledError:V6,isCancel:P6,CancelToken:X6,VERSION:I6,all:G6,Cancel:W6,isAxiosError:Q6,spread:K6,toFormData:J6,AxiosHeaders:Z6,HttpStatusCode:e8,formToJSON:t8,getAdapter:n8,mergeConfig:r8}=zt,Ur=Object.create(null);Ur.open="0";Ur.close="1";Ur.ping="2";Ur.pong="3";Ur.message="4";Ur.upgrade="5";Ur.noop="6";const $u=Object.create(null);Object.keys(Ur).forEach(e=>{$u[Ur[e]]=e});const qm={type:"error",data:"parser error"},V_=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",P_=typeof ArrayBuffer=="function",X_=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,Vg=({type:e,data:t},r,i)=>V_&&t instanceof Blob?r?i(t):Kx(t,i):P_&&(t instanceof ArrayBuffer||X_(t))?r?i(t):Kx(new Blob([t]),i):i(Ur[e]+(t||"")),Kx=(e,t)=>{const r=new FileReader;return r.onload=function(){const i=r.result.split(",")[1];t("b"+(i||""))},r.readAsDataURL(e)};function Jx(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}let Kp;function IM(e,t){if(V_&&e.data instanceof Blob)return e.data.arrayBuffer().then(Jx).then(t);if(P_&&(e.data instanceof ArrayBuffer||X_(e.data)))return t(Jx(e.data));Vg(e,!1,r=>{Kp||(Kp=new TextEncoder),t(Kp.encode(r))})}const Zx="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",cl=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let e=0;e<Zx.length;e++)cl[Zx.charCodeAt(e)]=e;const GM=e=>{let t=e.length*.75,r=e.length,i,s=0,c,u,f,h;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);const p=new ArrayBuffer(t),y=new Uint8Array(p);for(i=0;i<r;i+=4)c=cl[e.charCodeAt(i)],u=cl[e.charCodeAt(i+1)],f=cl[e.charCodeAt(i+2)],h=cl[e.charCodeAt(i+3)],y[s++]=c<<2|u>>4,y[s++]=(u&15)<<4|f>>2,y[s++]=(f&3)<<6|h&63;return p},WM=typeof ArrayBuffer=="function",Pg=(e,t)=>{if(typeof e!="string")return{type:"message",data:I_(e,t)};const r=e.charAt(0);return r==="b"?{type:"message",data:QM(e.substring(1),t)}:$u[r]?e.length>1?{type:$u[r],data:e.substring(1)}:{type:$u[r]}:qm},QM=(e,t)=>{if(WM){const r=GM(e);return I_(r,t)}else return{base64:!0,data:e}},I_=(e,t)=>{switch(t){case"blob":return e instanceof Blob?e:new Blob([e]);case"arraybuffer":default:return e instanceof ArrayBuffer?e:e.buffer}},G_="",KM=(e,t)=>{const r=e.length,i=new Array(r);let s=0;e.forEach((c,u)=>{Vg(c,!1,f=>{i[u]=f,++s===r&&t(i.join(G_))})})},JM=(e,t)=>{const r=e.split(G_),i=[];for(let s=0;s<r.length;s++){const c=Pg(r[s],t);if(i.push(c),c.type==="error")break}return i};function ZM(){return new TransformStream({transform(e,t){IM(e,r=>{const i=r.length;let s;if(i<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,i);else if(i<65536){s=new Uint8Array(3);const c=new DataView(s.buffer);c.setUint8(0,126),c.setUint16(1,i)}else{s=new Uint8Array(9);const c=new DataView(s.buffer);c.setUint8(0,127),c.setBigUint64(1,BigInt(i))}e.data&&typeof e.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(r)})}})}let Jp;function Tu(e){return e.reduce((t,r)=>t+r.length,0)}function Cu(e,t){if(e[0].length===t)return e.shift();const r=new Uint8Array(t);let i=0;for(let s=0;s<t;s++)r[s]=e[0][i++],i===e[0].length&&(e.shift(),i=0);return e.length&&i<e[0].length&&(e[0]=e[0].slice(i)),r}function ez(e,t){Jp||(Jp=new TextDecoder);const r=[];let i=0,s=-1,c=!1;return new TransformStream({transform(u,f){for(r.push(u);;){if(i===0){if(Tu(r)<1)break;const h=Cu(r,1);c=(h[0]&128)===128,s=h[0]&127,s<126?i=3:s===126?i=1:i=2}else if(i===1){if(Tu(r)<2)break;const h=Cu(r,2);s=new DataView(h.buffer,h.byteOffset,h.length).getUint16(0),i=3}else if(i===2){if(Tu(r)<8)break;const h=Cu(r,8),p=new DataView(h.buffer,h.byteOffset,h.length),y=p.getUint32(0);if(y>Math.pow(2,21)-1){f.enqueue(qm);break}s=y*Math.pow(2,32)+p.getUint32(4),i=3}else{if(Tu(r)<s)break;const h=Cu(r,s);f.enqueue(Pg(c?h:Jp.decode(h),t)),i=0}if(s===0||s>e){f.enqueue(qm);break}}}})}const W_=4;function $t(e){if(e)return tz(e)}function tz(e){for(var t in $t.prototype)e[t]=$t.prototype[t];return e}$t.prototype.on=$t.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this};$t.prototype.once=function(e,t){function r(){this.off(e,r),t.apply(this,arguments)}return r.fn=t,this.on(e,r),this};$t.prototype.off=$t.prototype.removeListener=$t.prototype.removeAllListeners=$t.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var r=this._callbacks["$"+e];if(!r)return this;if(arguments.length==1)return delete this._callbacks["$"+e],this;for(var i,s=0;s<r.length;s++)if(i=r[s],i===t||i.fn===t){r.splice(s,1);break}return r.length===0&&delete this._callbacks["$"+e],this};$t.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),r=this._callbacks["$"+e],i=1;i<arguments.length;i++)t[i-1]=arguments[i];if(r){r=r.slice(0);for(var i=0,s=r.length;i<s;++i)r[i].apply(this,t)}return this};$t.prototype.emitReserved=$t.prototype.emit;$t.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]};$t.prototype.hasListeners=function(e){return!!this.listeners(e).length};const Qd=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,r)=>r(t,0),nr=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),nz="arraybuffer";function Q_(e,...t){return t.reduce((r,i)=>(e.hasOwnProperty(i)&&(r[i]=e[i]),r),{})}const rz=nr.setTimeout,az=nr.clearTimeout;function Kd(e,t){t.useNativeTimers?(e.setTimeoutFn=rz.bind(nr),e.clearTimeoutFn=az.bind(nr)):(e.setTimeoutFn=nr.setTimeout.bind(nr),e.clearTimeoutFn=nr.clearTimeout.bind(nr))}const iz=1.33;function oz(e){return typeof e=="string"?sz(e):Math.ceil((e.byteLength||e.size)*iz)}function sz(e){let t=0,r=0;for(let i=0,s=e.length;i<s;i++)t=e.charCodeAt(i),t<128?r+=1:t<2048?r+=2:t<55296||t>=57344?r+=3:(i++,r+=4);return r}function K_(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function lz(e){let t="";for(let r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t}function cz(e){let t={},r=e.split("&");for(let i=0,s=r.length;i<s;i++){let c=r[i].split("=");t[decodeURIComponent(c[0])]=decodeURIComponent(c[1])}return t}class uz extends Error{constructor(t,r,i){super(t),this.description=r,this.context=i,this.type="TransportError"}}class Xg extends $t{constructor(t){super(),this.writable=!1,Kd(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,r,i){return super.emitReserved("error",new uz(t,r,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const r=Pg(t,this.socket.binaryType);this.onPacket(r)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,r={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(r)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const r=lz(t);return r.length?"?"+r:""}}class dz extends Xg{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const r=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||r()})),this.writable||(i++,this.once("drain",function(){--i||r()}))}else r()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const r=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};JM(t,this.socket.binaryType).forEach(r),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,KM(t,r=>{this.doWrite(r,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",r=this.query||{};return this.opts.timestampRequests!==!1&&(r[this.opts.timestampParam]=K_()),!this.supportsBinary&&!r.sid&&(r.b64=1),this.createUri(t,r)}}let J_=!1;try{J_=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const fz=J_;function hz(){}class pz extends dz{constructor(t){if(super(t),typeof location<"u"){const r=location.protocol==="https:";let i=location.port;i||(i=r?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||i!==t.port}}doWrite(t,r){const i=this.request({method:"POST",data:t});i.on("success",r),i.on("error",(s,c)=>{this.onError("xhr post error",s,c)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(r,i)=>{this.onError("xhr poll error",r,i)}),this.pollXhr=t}}let Yo=class qu extends $t{constructor(t,r,i){super(),this.createRequest=t,Kd(this,i),this._opts=i,this._method=i.method||"GET",this._uri=r,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var t;const r=Q_(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");r.xdomain=!!this._opts.xd;const i=this._xhr=this.createRequest(r);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&i.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{i.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var s;i.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=qu.requestsCount++,qu.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=hz,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete qu.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};Yo.requestsCount=0;Yo.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",e1);else if(typeof addEventListener=="function"){const e="onpagehide"in nr?"pagehide":"unload";addEventListener(e,e1,!1)}}function e1(){for(let e in Yo.requests)Yo.requests.hasOwnProperty(e)&&Yo.requests[e].abort()}const mz=(function(){const e=Z_({xdomain:!1});return e&&e.responseType!==null})();class gz extends pz{constructor(t){super(t);const r=t&&t.forceBase64;this.supportsBinary=mz&&!r}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new Yo(Z_,this.uri(),t)}}function Z_(e){const t=e.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||fz))return new XMLHttpRequest}catch{}if(!t)try{return new nr[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const eS=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class vz extends Xg{get name(){return"websocket"}doOpen(){const t=this.uri(),r=this.opts.protocols,i=eS?{}:Q_(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,r,i)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const i=t[r],s=r===t.length-1;Vg(i,this.supportsBinary,c=>{try{this.doWrite(i,c)}catch{}s&&Qd(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",r=this.query||{};return this.opts.timestampRequests&&(r[this.opts.timestampParam]=K_()),this.supportsBinary||(r.b64=1),this.createUri(t,r)}}const Zp=nr.WebSocket||nr.MozWebSocket;class yz extends vz{createSocket(t,r,i){return eS?new Zp(t,r,i):r?new Zp(t,r):new Zp(t)}doWrite(t,r){this.ws.send(r)}}class bz extends Xg{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const r=ez(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=t.readable.pipeThrough(r).getReader(),s=ZM();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const c=()=>{i.read().then(({done:f,value:h})=>{f||(this.onPacket(h),c())}).catch(f=>{})};c();const u={type:"open"};this.query.sid&&(u.data=`{"sid":"${this.query.sid}"}`),this._writer.write(u).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let r=0;r<t.length;r++){const i=t[r],s=r===t.length-1;this._writer.write(i).then(()=>{s&&Qd(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const wz={websocket:yz,webtransport:bz,polling:gz},xz=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,_z=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Ym(e){if(e.length>8e3)throw"URI too long";const t=e,r=e.indexOf("["),i=e.indexOf("]");r!=-1&&i!=-1&&(e=e.substring(0,r)+e.substring(r,i).replace(/:/g,";")+e.substring(i,e.length));let s=xz.exec(e||""),c={},u=14;for(;u--;)c[_z[u]]=s[u]||"";return r!=-1&&i!=-1&&(c.source=t,c.host=c.host.substring(1,c.host.length-1).replace(/;/g,":"),c.authority=c.authority.replace("[","").replace("]","").replace(/;/g,":"),c.ipv6uri=!0),c.pathNames=Sz(c,c.path),c.queryKey=Ez(c,c.query),c}function Sz(e,t){const r=/\/{2,9}/g,i=t.replace(r,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&i.splice(0,1),t.slice(-1)=="/"&&i.splice(i.length-1,1),i}function Ez(e,t){const r={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,s,c){s&&(r[s]=c)}),r}const Vm=typeof addEventListener=="function"&&typeof removeEventListener=="function",Yu=[];Vm&&addEventListener("offline",()=>{Yu.forEach(e=>e())},!1);class Ia extends $t{constructor(t,r){if(super(),this.binaryType=nz,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(r=t,t=null),t){const i=Ym(t);r.hostname=i.host,r.secure=i.protocol==="https"||i.protocol==="wss",r.port=i.port,i.query&&(r.query=i.query)}else r.host&&(r.hostname=Ym(r.host).host);Kd(this,r),this.secure=r.secure!=null?r.secure:typeof location<"u"&&location.protocol==="https:",r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.hostname=r.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=r.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=[],this._transportsByName={},r.transports.forEach(i=>{const s=i.prototype.name;this.transports.push(s),this._transportsByName[s]=i}),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},r),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=cz(this.opts.query)),Vm&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Yu.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const r=Object.assign({},this.opts.query);r.EIO=W_,r.transport=t,this.id&&(r.sid=this.id);const i=Object.assign({},this.opts,{query:r,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&Ia.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const r=this.createTransport(t);r.open(),this.setTransport(r)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",r=>this._onClose("transport close",r))}onOpen(){this.readyState="open",Ia.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush()}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const r=new Error("server error");r.code=t.data,this._onError(r);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let r=1;for(let i=0;i<this.writeBuffer.length;i++){const s=this.writeBuffer[i].data;if(s&&(r+=oz(s)),i>0&&r>this._maxPayload)return this.writeBuffer.slice(0,i);r+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Qd(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,r,i){return this._sendPacket("message",t,r,i),this}send(t,r,i){return this._sendPacket("message",t,r,i),this}_sendPacket(t,r,i,s){if(typeof r=="function"&&(s=r,r=void 0),typeof i=="function"&&(s=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const c={type:t,data:r,options:i};this.emitReserved("packetCreate",c),this.writeBuffer.push(c),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},r=()=>{this.off("upgrade",r),this.off("upgradeError",r),t()},i=()=>{this.once("upgrade",r),this.once("upgradeError",r)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():t()}):this.upgrading?i():t()),this}_onError(t){if(Ia.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,r){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Vm&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const i=Yu.indexOf(this._offlineEventListener);i!==-1&&Yu.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,r),this.writeBuffer=[],this._prevBufferLen=0}}}Ia.protocol=W_;class Tz extends Ia{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_probe(t){let r=this.createTransport(t),i=!1;Ia.priorWebsocketSuccess=!1;const s=()=>{i||(r.send([{type:"ping",data:"probe"}]),r.once("packet",v=>{if(!i)if(v.type==="pong"&&v.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",r),!r)return;Ia.priorWebsocketSuccess=r.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(y(),this.setTransport(r),r.send([{type:"upgrade"}]),this.emitReserved("upgrade",r),r=null,this.upgrading=!1,this.flush())})}else{const w=new Error("probe error");w.transport=r.name,this.emitReserved("upgradeError",w)}}))};function c(){i||(i=!0,y(),r.close(),r=null)}const u=v=>{const w=new Error("probe error: "+v);w.transport=r.name,c(),this.emitReserved("upgradeError",w)};function f(){u("transport closed")}function h(){u("socket closed")}function p(v){r&&v.name!==r.name&&c()}const y=()=>{r.removeListener("open",s),r.removeListener("error",u),r.removeListener("close",f),this.off("close",h),this.off("upgrading",p)};r.once("open",s),r.once("error",u),r.once("close",f),this.once("close",h),this.once("upgrading",p),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{i||r.open()},200):r.open()}onHandshake(t){this._upgrades=this._filterUpgrades(t.upgrades),super.onHandshake(t)}_filterUpgrades(t){const r=[];for(let i=0;i<t.length;i++)~this.transports.indexOf(t[i])&&r.push(t[i]);return r}}let Cz=class extends Tz{constructor(t,r={}){const i=typeof t=="object"?t:r;(!i.transports||i.transports&&typeof i.transports[0]=="string")&&(i.transports=(i.transports||["polling","websocket","webtransport"]).map(s=>wz[s]).filter(s=>!!s)),super(t,i)}};function Nz(e,t="",r){let i=e;r=r||typeof location<"u"&&location,e==null&&(e=r.protocol+"//"+r.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=r.protocol+e:e=r.host+e),/^(https?|wss?):\/\//.test(e)||(typeof r<"u"?e=r.protocol+"//"+e:e="https://"+e),i=Ym(e)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const c=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+c+":"+i.port+t,i.href=i.protocol+"://"+c+(r&&r.port===i.port?"":":"+i.port),i}const kz=typeof ArrayBuffer=="function",Rz=e=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,tS=Object.prototype.toString,Az=typeof Blob=="function"||typeof Blob<"u"&&tS.call(Blob)==="[object BlobConstructor]",Oz=typeof File=="function"||typeof File<"u"&&tS.call(File)==="[object FileConstructor]";function Ig(e){return kz&&(e instanceof ArrayBuffer||Rz(e))||Az&&e instanceof Blob||Oz&&e instanceof File}function Vu(e,t){if(!e||typeof e!="object")return!1;if(Array.isArray(e)){for(let r=0,i=e.length;r<i;r++)if(Vu(e[r]))return!0;return!1}if(Ig(e))return!0;if(e.toJSON&&typeof e.toJSON=="function"&&arguments.length===1)return Vu(e.toJSON(),!0);for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&Vu(e[r]))return!0;return!1}function Mz(e){const t=[],r=e.data,i=e;return i.data=Pm(r,t),i.attachments=t.length,{packet:i,buffers:t}}function Pm(e,t){if(!e)return e;if(Ig(e)){const r={_placeholder:!0,num:t.length};return t.push(e),r}else if(Array.isArray(e)){const r=new Array(e.length);for(let i=0;i<e.length;i++)r[i]=Pm(e[i],t);return r}else if(typeof e=="object"&&!(e instanceof Date)){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=Pm(e[i],t));return r}return e}function zz(e,t){return e.data=Xm(e.data,t),delete e.attachments,e}function Xm(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num=="number"&&e.num>=0&&e.num<t.length)return t[e.num];throw new Error("illegal attachments")}else if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=Xm(e[r],t);else if(typeof e=="object")for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(e[r]=Xm(e[r],t));return e}const Dz=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],jz=5;var Je;(function(e){e[e.CONNECT=0]="CONNECT",e[e.DISCONNECT=1]="DISCONNECT",e[e.EVENT=2]="EVENT",e[e.ACK=3]="ACK",e[e.CONNECT_ERROR=4]="CONNECT_ERROR",e[e.BINARY_EVENT=5]="BINARY_EVENT",e[e.BINARY_ACK=6]="BINARY_ACK"})(Je||(Je={}));class Lz{constructor(t){this.replacer=t}encode(t){return(t.type===Je.EVENT||t.type===Je.ACK)&&Vu(t)?this.encodeAsBinary({type:t.type===Je.EVENT?Je.BINARY_EVENT:Je.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let r=""+t.type;return(t.type===Je.BINARY_EVENT||t.type===Je.BINARY_ACK)&&(r+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(r+=t.nsp+","),t.id!=null&&(r+=t.id),t.data!=null&&(r+=JSON.stringify(t.data,this.replacer)),r}encodeAsBinary(t){const r=Mz(t),i=this.encodeAsString(r.packet),s=r.buffers;return s.unshift(i),s}}function t1(e){return Object.prototype.toString.call(e)==="[object Object]"}class Gg extends $t{constructor(t){super(),this.reviver=t}add(t){let r;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");r=this.decodeString(t);const i=r.type===Je.BINARY_EVENT;i||r.type===Je.BINARY_ACK?(r.type=i?Je.EVENT:Je.ACK,this.reconstructor=new Uz(r),r.attachments===0&&super.emitReserved("decoded",r)):super.emitReserved("decoded",r)}else if(Ig(t)||t.base64)if(this.reconstructor)r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,super.emitReserved("decoded",r));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let r=0;const i={type:Number(t.charAt(0))};if(Je[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Je.BINARY_EVENT||i.type===Je.BINARY_ACK){const c=r+1;for(;t.charAt(++r)!=="-"&&r!=t.length;);const u=t.substring(c,r);if(u!=Number(u)||t.charAt(r)!=="-")throw new Error("Illegal attachments");i.attachments=Number(u)}if(t.charAt(r+1)==="/"){const c=r+1;for(;++r&&!(t.charAt(r)===","||r===t.length););i.nsp=t.substring(c,r)}else i.nsp="/";const s=t.charAt(r+1);if(s!==""&&Number(s)==s){const c=r+1;for(;++r;){const u=t.charAt(r);if(u==null||Number(u)!=u){--r;break}if(r===t.length)break}i.id=Number(t.substring(c,r+1))}if(t.charAt(++r)){const c=this.tryParse(t.substr(r));if(Gg.isPayloadValid(i.type,c))i.data=c;else throw new Error("invalid payload")}return i}tryParse(t){try{return JSON.parse(t,this.reviver)}catch{return!1}}static isPayloadValid(t,r){switch(t){case Je.CONNECT:return t1(r);case Je.DISCONNECT:return r===void 0;case Je.CONNECT_ERROR:return typeof r=="string"||t1(r);case Je.EVENT:case Je.BINARY_EVENT:return Array.isArray(r)&&(typeof r[0]=="number"||typeof r[0]=="string"&&Dz.indexOf(r[0])===-1);case Je.ACK:case Je.BINARY_ACK:return Array.isArray(r)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Uz{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const r=zz(this.reconPack,this.buffers);return this.finishedReconstruction(),r}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Hz=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Gg,Encoder:Lz,get PacketType(){return Je},protocol:jz},Symbol.toStringTag,{value:"Module"}));function mr(e,t,r){return e.on(t,r),function(){e.off(t,r)}}const Bz=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class nS extends $t{constructor(t,r,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=r,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[mr(t,"open",this.onopen.bind(this)),mr(t,"packet",this.onpacket.bind(this)),mr(t,"error",this.onerror.bind(this)),mr(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...r){var i,s,c;if(Bz.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(r.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(r),this;const u={type:Je.EVENT,data:r};if(u.options={},u.options.compress=this.flags.compress!==!1,typeof r[r.length-1]=="function"){const y=this.ids++,v=r.pop();this._registerAckCallback(y,v),u.id=y}const f=(s=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||s===void 0?void 0:s.writable,h=this.connected&&!(!((c=this.io.engine)===null||c===void 0)&&c._hasPingExpired());return this.flags.volatile&&!f||(h?(this.notifyOutgoingListeners(u),this.packet(u)):this.sendBuffer.push(u)),this.flags={},this}_registerAckCallback(t,r){var i;const s=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(s===void 0){this.acks[t]=r;return}const c=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let f=0;f<this.sendBuffer.length;f++)this.sendBuffer[f].id===t&&this.sendBuffer.splice(f,1);r.call(this,new Error("operation has timed out"))},s),u=(...f)=>{this.io.clearTimeoutFn(c),r.apply(this,f)};u.withError=!0,this.acks[t]=u}emitWithAck(t,...r){return new Promise((i,s)=>{const c=(u,f)=>u?s(u):i(f);c.withError=!0,r.push(c),this.emit(t,...r)})}_addToQueue(t){let r;typeof t[t.length-1]=="function"&&(r=t.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...c)=>i!==this._queue[0]?void 0:(s!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),r&&r(s)):(this._queue.shift(),r&&r(null,...c)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const r=this._queue[0];r.pending&&!t||(r.pending=!0,r.tryCount++,this.flags=r.flags,this.emit.apply(this,r.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Je.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,r){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,r),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(i=>String(i.id)===t)){const i=this.acks[t];delete this.acks[t],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Je.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Je.EVENT:case Je.BINARY_EVENT:this.onevent(t);break;case Je.ACK:case Je.BINARY_ACK:this.onack(t);break;case Je.DISCONNECT:this.ondisconnect();break;case Je.CONNECT_ERROR:this.destroy();const i=new Error(t.data.message);i.data=t.data.data,this.emitReserved("connect_error",i);break}}onevent(t){const r=t.data||[];t.id!=null&&r.push(this.ack(t.id)),this.connected?this.emitEvent(r):this.receiveBuffer.push(Object.freeze(r))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const r=this._anyListeners.slice();for(const i of r)i.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const r=this;let i=!1;return function(...s){i||(i=!0,r.packet({type:Je.ACK,id:t,data:s}))}}onack(t){const r=this.acks[t.id];typeof r=="function"&&(delete this.acks[t.id],r.withError&&t.data.unshift(null),r.apply(this,t.data))}onconnect(t,r){this.id=t,this.recovered=r&&this._pid===r,this._pid=r,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Je.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const r=this._anyListeners;for(let i=0;i<r.length;i++)if(t===r[i])return r.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const r=this._anyOutgoingListeners;for(let i=0;i<r.length;i++)if(t===r[i])return r.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const r=this._anyOutgoingListeners.slice();for(const i of r)i.apply(this,t.data)}}}function Zo(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Zo.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),r=Math.floor(t*this.jitter*e);e=(Math.floor(t*10)&1)==0?e-r:e+r}return Math.min(e,this.max)|0};Zo.prototype.reset=function(){this.attempts=0};Zo.prototype.setMin=function(e){this.ms=e};Zo.prototype.setMax=function(e){this.max=e};Zo.prototype.setJitter=function(e){this.jitter=e};class Im extends $t{constructor(t,r){var i;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(r=t,t=void 0),r=r||{},r.path=r.path||"/socket.io",this.opts=r,Kd(this,r),this.reconnection(r.reconnection!==!1),this.reconnectionAttempts(r.reconnectionAttempts||1/0),this.reconnectionDelay(r.reconnectionDelay||1e3),this.reconnectionDelayMax(r.reconnectionDelayMax||5e3),this.randomizationFactor((i=r.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new Zo({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(r.timeout==null?2e4:r.timeout),this._readyState="closed",this.uri=t;const s=r.parser||Hz;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=r.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var r;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(r=this.backoff)===null||r===void 0||r.setMin(t),this)}randomizationFactor(t){var r;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(r=this.backoff)===null||r===void 0||r.setJitter(t),this)}reconnectionDelayMax(t){var r;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(r=this.backoff)===null||r===void 0||r.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Cz(this.uri,this.opts);const r=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const s=mr(r,"open",function(){i.onopen(),t&&t()}),c=f=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",f),t?t(f):this.maybeReconnectOnOpen()},u=mr(r,"error",c);if(this._timeout!==!1){const f=this._timeout,h=this.setTimeoutFn(()=>{s(),c(new Error("timeout")),r.close()},f);this.opts.autoUnref&&h.unref(),this.subs.push(()=>{this.clearTimeoutFn(h)})}return this.subs.push(s),this.subs.push(u),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(mr(t,"ping",this.onping.bind(this)),mr(t,"data",this.ondata.bind(this)),mr(t,"error",this.onerror.bind(this)),mr(t,"close",this.onclose.bind(this)),mr(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(r){this.onclose("parse error",r)}}ondecoded(t){Qd(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,r){let i=this.nsps[t];return i?this._autoConnect&&!i.active&&i.connect():(i=new nS(this,t,r),this.nsps[t]=i),i}_destroy(t){const r=Object.keys(this.nsps);for(const i of r)if(this.nsps[i].active)return;this._close()}_packet(t){const r=this.encoder.encode(t);for(let i=0;i<r.length;i++)this.engine.write(r[i],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,r){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,r),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const r=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},r);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const al={};function Pu(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};const r=Nz(e,t.path||"/socket.io"),i=r.source,s=r.id,c=r.path,u=al[s]&&c in al[s].nsps,f=t.forceNew||t["force new connection"]||t.multiplex===!1||u;let h;return f?h=new Im(i,t):(al[s]||(al[s]=new Im(i,t)),h=al[s]),r.query&&!t.query&&(t.query=r.queryKey),h.socket(r.path,t)}Object.assign(Pu,{Manager:Im,Socket:nS,io:Pu,connect:Pu});const Kt=zt.create({baseURL:location.hostname==="localhost"?"http://localhost:8080/api":"/api",withCredentials:!0}),n1=()=>{const e=location.hostname==="localhost"?"http://localhost:8080":"";return Pu(e)},Fz=(e,t)=>{e+="?";for(let r in t)e+=`${r}=${t[r]}&`;return e.slice(0,-1)},$z=(e,t)=>{let r;for(let i in e)e[i].includes(t)&&(r=i);return r},qz=e=>e.reduce((t,r)=>(t[r.location]?t[r.location]++:t[r.location]=1,t),{}),r1=["🌀 Good things take time — hang tight!","🚀 Fetching the best deals just for you...","💡 Great finds are worth the wait.","🔄 Loading treasures from our marketplace...","🛍️ Almost there! Your next favorite item is on the way."],Yz=["English","Bangla","Hindi"],a1={products:[],loading:!1,submitting:!1,categoryObj:{},productTypes:["Laptop","Mobile","Car","Bike"],locations:[],queryObj:{},theProduct:null,suggestions:[],myProducts:[],page:1,numOfPages:1},Xu=yn("product/getSingleProduct",async(e,t)=>{try{return(await Kt.get(`getsingleproduct/${e}`))?.data}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}}),ml=yn("product/getProducts",async(e,t)=>{let{queryObj:r,page:i}=t.getState().product;try{return(await Kt.get(Fz("/getproducts",r)))?.data}catch(s){return t.rejectWithValue(s?.response?.data?.msg)}}),Iu=yn("product/getSuggestions",async(e,t)=>{try{return(await Kt.get(`/getsuggestions?search=${e}`))?.data}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}}),Gu=yn("product/addProduct",async(e,t)=>{try{return(await Kt.post("/addproduct",e))?.data?.msg}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}}),Wu=yn("product/getMyProducts",async(e,t)=>{try{return(await Kt.get("/getmyproducts"))?.data}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}}),rS=Fg({name:"product",initialState:JSON.parse(localStorage.getItem("product"))||a1,reducers:{landingMakeQuery:(e,{payload:t})=>{e.queryObj={...e.queryObj,...t},delete e.queryObj.type,delete e.queryObj.typeSpecificLocation,delete e.queryObj.priceRange,localStorage.setItem("product",JSON.stringify(e))},filterMakeQuery:(e,{payload:t})=>{e.queryObj={...e.queryObj,...t},delete e.queryObj.location,delete e.queryObj.search,localStorage.setItem("product",JSON.stringify(e))},delQuery:(e,{payload:t})=>{const r={};for(let i in e.queryObj)i!==t&&(r[i]=e.queryObj[i]);e.queryObj=r,localStorage.setItem("product",JSON.stringify(e))},resetFilters:(e,{payload:t})=>{e.queryObj={},localStorage.setItem("product",JSON.stringify(e))},resetSuggestions:(e,t)=>{e.suggestions=[]},setPage:(e,{payload:t})=>{t>=e.numOfPages||(e.page=t)},resetProducts:(e,t)=>a1},extraReducers:e=>{e.addCase(ml.pending,(t,{payload:r})=>{t.loading=!0}).addCase(ml.fulfilled,(t,{payload:r})=>{t.loading=!1,t.products=r?.products,t.categoryObj=r?.products.reduce((i,s)=>(i[s.category]?i[s.category].includes(s.type)||i[s.category].push(s.type):i[s.category]=[s.type],i),t.categoryObj),r?.products.forEach(i=>{t.productTypes.includes(i.type)||t.productTypes.push(i.type),t.locations.includes(i.location.split(",")[0])||t.locations.push(i.location.split(",")[0])}),localStorage.setItem("product",JSON.stringify(t))}).addCase(ml.rejected,(t,{payload:r})=>{t.loading=!1,console.log(r)}).addCase(Xu.pending,(t,{payload:r})=>{t.loading=!0}).addCase(Xu.fulfilled,(t,{payload:r})=>{t.loading=!1,t.theProduct=r?.theProduct,localStorage.setItem("product",JSON.stringify(t))}).addCase(Xu.rejected,(t,{payload:r})=>{t.loading=!1,console.log(r)}).addCase(Iu.pending,(t,{payload:r})=>{t.loading=!0}).addCase(Iu.fulfilled,(t,{payload:r})=>{t.loading=!1,t.suggestions=r?.suggestions,localStorage.setItem("product",JSON.stringify(t))}).addCase(Iu.rejected,(t,{payload:r})=>{t.loading=!1,console.log(r)}).addCase(Gu.pending,(t,{payload:r})=>{t.submitting=!0}).addCase(Gu.fulfilled,(t,{payload:r})=>{t.submitting=!1}).addCase(Gu.rejected,(t,{payload:r})=>{t.submitting=!1,console.log(r)}).addCase(Wu.pending,(t,{payload:r})=>{t.loading=!0}).addCase(Wu.fulfilled,(t,{payload:r})=>{t.loading=!1,t.myProducts=r?.myProducts,localStorage.setItem("product",JSON.stringify(t))}).addCase(Wu.rejected,(t,{payload:r})=>{t.loading=!1,console.log(r)})}}),{landingMakeQuery:aS,filterMakeQuery:kd,delQuery:gl,resetFilters:Vz,resetSuggestions:Wg,setPage:i8,resetProducts:i1}=rS.actions,Pz=rS.reducer,Xz=({loading:e,locations:t})=>{const r=Pt(),i=xr();return T.jsxs("div",{className:"relative w-full max-w-xs ",children:[T.jsxs("select",{className:"select select-ghost w-full pl-10 bg-white border-2 border-black",disabled:e,onChange:s=>{r(aS({location:s.target.value})),i("/")},children:[T.jsx("option",{selected:!0,children:"India"}),t.map((s,c)=>T.jsx("option",{value:s,children:s},c))]}),T.jsx(l_,{className:"absolute top-1/2 left-3 -translate-y-1/2 z-10 pointer-events-none text-gray-400"})]})},Iz=U.memo(Xz),Gz=()=>{const{suggestions:e,loading:t}=Ct(s=>s.product),r=Pt(),i=xr();return T.jsx("div",{className:`${e.length===0?"hidden":"block"} w-full text-xs h-72 overflow-y-scroll rounded-md bg-base-200 lg:text-md`,children:t?T.jsx("h1",{className:"w-full",children:"Loading..."}):T.jsx("div",{className:"flex flex-col gap-1 ",children:e?.map((s,c)=>T.jsxs("button",{onClick:()=>{r(Wg()),r(aS({search:s?.title})),i("/")},className:"flex justify-between gap-1 items-center p-1 m-1 border-b-2 border-slate-300",children:[T.jsx("span",{className:"",children:s?.title}),T.jsx("span",{children:s?.type})]},c))})})},Wz=U.memo(Gz),Qz=({productTypes:e,typeIdx:t,inputValue:r,handleDebounce:i})=>T.jsxs("div",{className:"relative w-full max-w-md ",children:[T.jsx("input",{type:"text",placeholder:`Search "${e[t]}"`,className:"input input-bordered w-full pr-10 border-2 border-black",value:r,onChange:i}),T.jsx("button",{className:"absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 hover:text-gray-700",children:T.jsx(l_,{})}),T.jsx("div",{className:"absolute right-0 z-10",children:T.jsx(Wz,{})})]}),o1={user:null,userLoading:!1,userSubmitting:!1,onlineUsers:[]},Qu=yn("user/login",async(e,t)=>{try{return(await Kt.post("/login",e))?.data}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}}),Ku=yn("user/register",async(e,t)=>{try{return(await Kt.post("/register",e))?.data}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}}),vl=yn("user/getUser",async(e,t)=>{try{return(await Kt.get("/getuser"))?.data}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}}),em=yn("user/logout",async(e,t)=>{try{return(await Kt.post("/api/logout"))?.data}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}}),Ju=yn("user/getLastSeen",async(e,t)=>{try{return(await Kt.get(`/getlastseen/${e}`))?.data}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}}),Zu=yn("user/addToWishList",async(e,t)=>{try{const r=await Kt.patch(`/addtowishlist/${e}`);return t.dispatch(vl()),r?.data?.msg}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}}),iS=Fg({name:"user",initialState:JSON.parse(localStorage.getItem("user"))||o1,reducers:{resetUser:(e,t)=>o1,addOnlineUser:(e,{payload:t})=>{e.onlineUsers.includes(t)||e.onlineUsers.push(t),localStorage.setItem("user",JSON.stringify(e))},removeOnlineUser:(e,{payload:t})=>{e.onlineUsers=e.onlineUsers.filter(r=>r!==t),localStorage.setItem("user",JSON.stringify(e))}},extraReducers:e=>{e.addCase(Qu.pending,(t,{payload:r})=>{t.userSubmitting=!0}).addCase(Qu.fulfilled,(t,{payload:r})=>{t.userSubmitting=!1,t.user=r?.theUser,localStorage.setItem("user",JSON.stringify(t))}).addCase(Qu.rejected,(t,{payload:r})=>{t.userSubmitting=!1}).addCase(Ku.pending,(t,{payload:r})=>{t.userSubmitting=!0}).addCase(Ku.fulfilled,(t,{payload:r})=>{t.userSubmitting=!1}).addCase(Ku.rejected,(t,{payload:r})=>{t.userSubmitting=!1}).addCase(em.pending,(t,{payload:r})=>{t.userSubmitting=!0}).addCase(em.fulfilled,(t,{payload:r})=>{t.userSubmitting=!1}).addCase(em.rejected,(t,{payload:r})=>{t.userSubmitting=!1}).addCase(vl.pending,(t,{payload:r})=>{t.userLoading=!0}).addCase(vl.fulfilled,(t,{payload:r})=>{t.userLoading=!1,t.user=r?.theUser,localStorage.setItem("user",JSON.stringify(t))}).addCase(vl.rejected,(t,{payload:r})=>{t.userLoading=!1}).addCase(Ju.pending,(t,{payload:r})=>{t.userSubmitting=!0}).addCase(Ju.fulfilled,(t,{payload:r})=>{t.userSubmitting=!1}).addCase(Ju.rejected,(t,{payload:r})=>{t.userSubmitting=!1}).addCase(Zu.pending,(t,{payload:r})=>{t.userSubmitting=!0}).addCase(Zu.fulfilled,(t,{payload:r})=>{t.userSubmitting=!1}).addCase(Zu.rejected,(t,{payload:r})=>{t.userSubmitting=!1})}}),{resetUser:s1,addOnlineUser:l1,removeOnlineUser:c1}=iS.actions,Kz=iS.reducer,Jz=({user:e,handleLogout:t})=>T.jsxs("details",{className:"dropdown",children:[T.jsxs("summary",{className:"btn m-1",children:[T.jsx("p",{children:e?.name}),T.jsx(Lg,{className:"text-lg text-black"})]}),T.jsxs("ul",{className:"menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow",children:[T.jsx("li",{children:T.jsx(vn,{to:"/chat",children:"My Chats"})}),T.jsx("li",{children:T.jsx(vn,{to:"/myproducts",children:"My Products"})}),T.jsx("li",{children:T.jsx(vn,{children:"Wishlist"})}),T.jsx("li",{children:T.jsx("button",{onClick:t,children:"Logout"})})]})]}),Zz=U.memo(Jz),e6=()=>T.jsx(vn,{to:"/",className:"block w-44 h-12",children:T.jsx("img",{src:"https://statics.olx.in/external/base/img/olxLogo/olx_logo_2025.svg",className:"w-12 h-12",alt:""})}),t6=U.memo(e6),n6=({languages:e})=>T.jsx("select",{className:"select select-ghost w-full max-w-xs bg-white border-2 border-black",children:e?.map((t,r)=>T.jsx("option",{value:t,children:t},r))}),r6=U.memo(n6),u1={chatHeads:[],theChat:null,isLoading:!1,isSubmitting:!1};let yl=yn("chat/getChatHeads",async(e,t)=>{try{return(await Kt.get("/getchatheads"))?.data}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}}),ed=yn("chat/getTheChat",async(e,t)=>{try{return(await Kt.get(`/getthechat/${e}`))?.data}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}});const td=yn("chat/createChat",async(e,t)=>{try{return(await Kt.post("/createchat",{toUserId:e}))?.data}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}}),nd=yn("chat/removeFromActiveChatList",async(e,t)=>{try{return(await Kt.patch(`/removefromchatactive/${e}`))?.data?.msg}catch(r){return t.rejectWithValue(r?.response?.data?.msg)}}),oS=Fg({name:"chat",initialState:JSON.parse(localStorage.getItem("chat"))||u1,reducers:{addLastMsgViaSocket:(e,{payload:t})=>{e.chatHeads=e.chatHeads.map(r=>r._id===t.chatId?{...r,lastMessage:t.newMessage}:r),localStorage.setItem("chat",JSON.stringify(e))},addNewMessageViaSocket:(e,{payload:{chatId:t,newMessage:r}})=>{e.theChat?._id===t&&e.theChat.messages.push(r),localStorage.setItem("chat",JSON.stringify(e))},updateLastMsgSeen:(e,{payload:{chatId:t,userOpenerId:r}})=>{e.chatHeads=e.chatHeads.map(i=>{if(i._id===t&&i?.lastMessage&&i.lastMessage.sender!==r){const s={...i.lastMessage,seen:!0};return{...i,lastMessage:s}}else return i})},updateMsgsSeen:(e,{payload:{chatId:t,userOpenerId:r}})=>{e.theChat?._id===t&&(e.theChat.messages=e.theChat.messages.map(i=>i.sender!==r?{...i,seen:!0}:i),e.theChat?.lastMessage&&e.theChat.lastMessage.sender!==r&&(e.theChat.lastMessage.seen=!0))},setTyping:(e,{payload:{chatId:t}})=>{e.chatHeads=e.chatHeads.map(r=>r._id===t?{...r,typing:!0}:r)},removeTyping:(e,{payload:{chatId:t}})=>{e.chatHeads=e.chatHeads.map(r=>r._id===t?{...r,typing:!1}:r)},resetChat:(e,t)=>u1},extraReducers:e=>{e.addCase(td.pending,(t,r)=>{t.isSubmitting=!0}).addCase(td.fulfilled,(t,r)=>{t.isSubmitting=!1}).addCase(td.rejected,(t,r)=>{t.isSubmitting=!1}).addCase(ed.pending,(t,r)=>{t.isLoading=!0}).addCase(ed.fulfilled,(t,{payload:r})=>{t.isLoading=!1,t.theChat=r?.theChat,localStorage.setItem("chat",JSON.stringify(t))}).addCase(ed.rejected,(t,r)=>{t.isLoading=!1}).addCase(yl.pending,(t,r)=>{t.isLoading=!0}).addCase(yl.fulfilled,(t,{payload:r})=>{t.isLoading=!1,t.chatHeads=r?.myChatHeads,localStorage.setItem("chat",JSON.stringify(t))}).addCase(yl.rejected,(t,r)=>{t.isLoading=!1}).addCase(nd.pending,(t,r)=>{t.isSubmitting=!0}).addCase(nd.fulfilled,(t,r)=>{t.isSubmitting=!1}).addCase(nd.rejected,(t,r)=>{t.isSubmitting=!1})}}),{addLastMsgViaSocket:sS,addNewMessageViaSocket:a6,updateLastMsgSeen:i6,updateMsgsSeen:o6,setTyping:lS,removeTyping:cS,resetChat:d1}=oS.actions,s6=oS.reducer,l6=()=>{const{loading:e,productTypes:t,locations:r}=Ct(x=>x.product),{user:i}=Ct(x=>x.user),[s,c]=U.useState(0),[u,f]=U.useState(""),h=xr(),p=Pt(),y=U.useRef(null);U.useEffect(()=>{let x;return u||(x=setInterval(()=>{c(_=>_===t.length-1?0:_+1)},2e3)),()=>{clearInterval(x)}},[t,u]);const v=U.useCallback(()=>{(async()=>{try{await Kt.post("/logout"),localStorage.clear(),p(d1()),p(s1()),p(i1()),h("/login")}catch(_){console.log(_),localStorage.clear(),p(d1()),p(s1()),p(i1()),h("/login")}})()},[]),w=x=>{const _=x.target.value;f(_),_||p(Wg()),clearInterval(y.current),y.current=setTimeout(()=>{_&&p(Iu(_))},1e3)};return T.jsxs("nav",{className:"flex bg-blue-100 justify-evenly items-center gap-2 p-2",children:[T.jsx(t6,{}),T.jsx(Iz,{loading:e,locations:r}),T.jsx(Qz,{handleDebounce:w,productTypes:t,typeIdx:s,inputValue:u}),T.jsx(r6,{languages:Yz}),i?T.jsx(Zz,{handleLogout:v,user:i}):T.jsx(vn,{to:"/login",className:"text-lg text-blue-600 font-bold underline",children:"Login"}),T.jsxs(vn,{to:"/sell",className:"btn btn-outline btn-primary rounded-full",children:[T.jsx(NA,{}),"Sell"]})]})},c6=U.memo(l6),u6=({showMenu:e,menuRef:t,categoryObj:r})=>T.jsx("div",{children:e&&T.jsx("div",{ref:t,id:"mega_menu",className:"w-full absolute top-10 left-0 rounded bg-white shadow-xl text-black overflow-y-auto p-4 z-50",children:T.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2",children:Object.keys(r).map((i,s)=>T.jsxs("div",{children:[T.jsx("h1",{className:"font-bold underline",children:i}),T.jsx("ul",{className:"space-y-1 text-sm",children:r[i].map((c,u)=>T.jsx("li",{children:T.jsx(vn,{to:`/filter/${c}`,children:c})},u))})]},s))})})}),d6=()=>{const{loading:e,categoryObj:t,productTypes:r}=Ct(f=>f.product),[i,s]=U.useState(!1),c=U.useRef(null),u=U.useRef(null);return Pt(),U.useEffect(()=>{const f=h=>{c.current&&!c.current.contains(h.target)&&(u.current.contains(h.target)||s(!1))};return document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}},[]),T.jsxs("div",{className:"flex relative justify-around items-center gap-2 p-2",children:[T.jsx("div",{children:T.jsxs("button",{ref:u,className:"py-1 px-2 flex items-center justify-between gap-4",onClick:()=>s(f=>!f),disabled:e,children:["All Categories",T.jsx(Lg,{className:`transition-transform duration-500 ${i?"rotate-180":"rotate-0"}`})]})}),T.jsx("div",{className:"flex justify-center items-center gap-2",children:r.slice(0,8).map((f,h)=>T.jsx(vn,{to:`/filter/${f}`,children:f},h))}),T.jsx("div",{children:T.jsx("h1",{children:new Date().toLocaleDateString()})}),T.jsx(u6,{categoryObj:t,showMenu:i,menuRef:c})]})},f6=U.memo(d6),h6=({item:e})=>{const[t,r]=U.useState(!1),[i,s]=U.useState(0),{user:c,userSubmitting:u}=Ct(y=>y.user),f=Pt(),h=xr();U.useEffect(()=>{let y;return t&&(y=setInterval(()=>{s(v=>v===e?.images.length-1?0:v+1)},1500)),()=>{clearInterval(y)}},[t]);const p=()=>{f(Zu(e._id)).then(y=>{y?.payload==="no cookie"&&h("/login")})};return T.jsxs("div",{className:"relative border basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white",children:[T.jsxs(vn,{to:`/product/${e._id}`,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),className:"block ",children:[e.isFeatured&&T.jsx("span",{className:"absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded z-10",children:"Featured"}),T.jsxs("div",{className:"w-full h-48 overflow-hidden relative",children:[T.jsx("img",{src:e.images[i],alt:e.title,className:"w-full h-full object-cover transition-all duration-300"}),e.images.length>1&&T.jsx("div",{className:"absolute bottom-2 right-2 flex space-x-1",children:e.images.map((y,v)=>T.jsx("span",{className:"w-2 h-2 rounded-full bg-white opacity-70"},v))})]}),T.jsxs("div",{className:"p-4 space-y-1",children:[T.jsx("h2",{className:"text-lg font-semibold line-clamp-1",children:e.title}),T.jsx("p",{className:"text-sm text-gray-500 line-clamp-2",children:e.description}),T.jsx("div",{className:"flex justify-between items-center mt-2",children:T.jsxs("span",{className:"font-bold text-gray-900 text-lg",children:["₹",e.price.toLocaleString()]})}),T.jsxs("div",{className:"flex justify-between items-center text-sm text-gray-500 mt-1",children:[T.jsx("span",{children:e.category}),T.jsx("span",{children:e.location})]}),T.jsxs("div",{className:"flex justify-between items-center text-xs text-gray-400 mt-1",children:[T.jsx("span",{children:new Date(e.createdAt).toLocaleDateString()}),e.isSold&&T.jsx("span",{className:"text-red-500 font-bold",children:"Sold"})]})]})]}),T.jsx("button",{disabled:u,onClick:p,className:`absolute top-2 right-2 ${c?.wishlist.includes(e?._id)?"text-red-500":"text-slate-500"} hover:text-red-500 transition-colors`,children:T.jsx(TA,{})})]})},Qg=U.memo(h6),f1=({header:e,options:t,location:r=!1})=>{const[i,s]=U.useState(!0),[c,u]=U.useState("0px"),f=U.useRef(null),h=Pt();return U.useEffect(()=>{f.current&&u(i?"10rem":"0px")},[t,i]),T.jsxs("div",{className:"border-b border-gray-200 py-3",children:[T.jsxs("div",{className:"flex justify-between items-center cursor-pointer select-none",onClick:()=>s(p=>!p),children:[T.jsx("h2",{className:"text-base font-semibold text-gray-700",children:e}),T.jsx(Lg,{className:`transition-transform duration-500 text-gray-600 ${i?"rotate-180":"rotate-0"}`})]}),T.jsx("div",{ref:f,style:{maxHeight:c,transition:"max-height 0.2s ease-in-out"},className:"overflow-y-scroll mt-2",children:T.jsx("ul",{className:"space-y-1 pl-2 pr-1 text-sm text-gray-600 ",children:r?Object.keys(t)?.map((p,y)=>T.jsx("li",{children:T.jsxs("button",{onClick:()=>h(kd({typeSpecificLocation:p.split(",")[0]})),className:"w-full text-left hover:text-primary hover:bg-gray-50 rounded-md px-2 py-1 transition",children:[p.split(",")[0]," — ",t[p]]})},y)):t?.map((p,y)=>T.jsx("li",{children:T.jsx(vn,{to:`/filter/${p}`,className:"block hover:text-primary hover:bg-gray-50 rounded-md px-2 py-1 transition",children:p})},y))})})]})},p6=({min:e=0,max:t=2e5,step:r=1e3})=>{const[i,s]=U.useState(e),[c,u]=U.useState(t),f=Pt(),h=v=>{const w=Math.min(Number(v.target.value),c-r);s(w)},p=v=>{const w=Math.max(Number(v.target.value),i+r);u(w)},y=()=>{f(kd({priceRange:`${i},${c}`}))};return T.jsxs("div",{className:"py-4 border-b border-gray-200",children:[T.jsx("h2",{className:"text-base font-semibold text-gray-700 mb-2",children:"Price Range"}),T.jsxs("div",{className:"relative mt-4 w-full flex flex-col items-center",children:[T.jsxs("div",{className:"relative w-full h-2 bg-gray-300 rounded-full",children:[T.jsx("div",{className:"absolute h-2 bg-blue-500 rounded-full",style:{left:`${(i-e)/(t-e)*100}%`,right:`${100-(c-e)/(t-e)*100}%`}}),T.jsxs("div",{className:"relative w-full",children:[T.jsx("input",{type:"range",min:e,max:t,step:r,value:i,onChange:h,className:"absolute mt-[-15px] w-full appearance-none bg-transparent pointer-events-auto"}),T.jsx("input",{type:"range",min:e,max:t,step:r,value:c,onChange:p,className:"absolute mt-[7px] w-full appearance-none bg-transparent pointer-events-auto"})]})]}),T.jsxs("div",{className:"flex justify-between w-full text-sm mt-4",children:[T.jsxs("span",{className:"font-medium text-gray-600",children:["₹",i.toLocaleString()]}),T.jsxs("span",{className:"font-medium text-gray-600",children:["₹",c.toLocaleString()]})]}),T.jsxs("div",{className:"flex justify-between mt-4 w-full",children:[T.jsx("button",{onClick:y,className:"btn btn-sm btn-primary text-white w-[48%]",children:"Apply"}),T.jsx("button",{onClick:()=>{s(e),u(t),f(kd({priceRange:`${e},${t}`}))},className:"btn btn-sm btn-outline w-[48%]",children:"Reset"})]})]})]})},m6=({type:e})=>{const{categoryObj:t,products:r}=Ct(i=>i.product);return T.jsxs("div",{className:"flex flex-col gap-4",children:[T.jsx(f1,{header:e,options:t?.[$z(t,e)]}),T.jsx(f1,{header:"Locations",options:qz(r),location:!0}),T.jsx(p6,{min:0,max:2e6,step:1e3})]})},g6=U.memo(m6);function v6(e){return Br({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M140,32V64a12,12,0,0,1-24,0V32a12,12,0,0,1,24,0Zm84,84H192a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm-42.26,48.77a12,12,0,1,0-17,17l22.63,22.63a12,12,0,0,0,17-17ZM128,180a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V192A12,12,0,0,0,128,180ZM74.26,164.77,51.63,187.4a12,12,0,0,0,17,17l22.63-22.63a12,12,0,1,0-17-17ZM76,128a12,12,0,0,0-12-12H32a12,12,0,0,0,0,24H64A12,12,0,0,0,76,128ZM68.6,51.63a12,12,0,1,0-17,17L74.26,91.23a12,12,0,0,0,17-17Z"},child:[]}]})(e)}const y6=()=>{const[e,t]=U.useState(0);return U.useEffect(()=>{const r=setInterval(()=>{t(i=>i===r1.length-1?0:i+1)},1500);return()=>{clearInterval(r)}},[]),T.jsx("div",{className:"flex w-full h-screen justify-center items-center",children:T.jsxs("div",{className:"flex flex-col gap-4 justify-center items-center rounded-md shadow-lg p-4 bg-gray-200",children:[T.jsx("h1",{children:r1[e]}),T.jsx(v6,{className:"text-2xl animate-spin"})]})})},Jd=U.memo(y6),bl=({name:e,type:t,label:r,isRequired:i})=>T.jsxs("div",{className:"form-control",children:[T.jsx("label",{className:"label",children:T.jsx("span",{className:"label-text",children:r})}),T.jsx("input",{type:t,name:e,placeholder:r,className:"input input-bordered"})]}),Gm=({chatList:e,selectedChatId:t=""})=>{const{user:r,onlineUsers:i}=Ct(s=>s.user);return T.jsx("div",{className:"overflow-y-auto",children:e.map(s=>{const c=r._id,u=s.participants.find(p=>p._id!==c),f=i.includes(u._id),h=s?.lastMessage;return T.jsxs(vn,{to:`/chat/${s._id}`,className:`cursor-pointer p-4 flex items-center ${t===s._id?"bg-base-200":""}`,children:[T.jsx("img",{src:u?.avater,alt:u?.name,className:"w-12 h-12 rounded-full mr-3"}),T.jsxs("div",{className:"flex-1",children:[T.jsxs("div",{className:"flex justify-between",children:[T.jsx("span",{className:"font-medium",children:u?.name}),T.jsx("span",{className:f?"text-green-700":"text-gray-400",children:"●"})]}),T.jsx("div",{className:"text-sm text-gray-500 truncate",children:s?.typing?T.jsx("p",{className:"text-green-500 font-semibold",children:"typing..."}):T.jsxs(T.Fragment,{children:[h?.sender===c?"You: ":"",T.jsx("span",{className:`${h?.sender!==c&&!h?.seen?"font-bold":""}`,children:h?.text}),h?.sender===c&&T.jsx(CA,{className:`inline-block ml-2 text-lg  font-bold ${h?.seen?"text-blue-800":"text-slate-600"}`})]})})]})]},s._id)})})};function b6({chat:e}){const{user:t,onlineUsers:r,userSubmitting:i}=Ct(O=>O.user),s=t._id,{socket:c}=Ag(),[u,f]=U.useState(""),h=Pt(),p=U.useRef(),[y,v]=U.useState(""),[w,x]=U.useState(!1);U.useEffect(()=>(setTimeout(()=>{p.current?.scrollIntoView({behavior:"smooth",block:"end"})},500),c&&(c.on("receiveMessage",({chatId:O,newMessage:B})=>{h(sS({chatId:O,newMessage:B})),h(a6({chatId:O,newMessage:B})),setTimeout(()=>{e?._id===O&&p.current?.scrollIntoView({behavior:"smooth",block:"end"})},500)}),c.on("showTyping",({typerId:O,chatId:B})=>{O!==t?._id&&(h(lS({chatId:B})),B===e?._id&&x(!0),setTimeout(()=>{B===e?._id&&x(!1),h(cS({chatId:B}))},500))}),c.on("receiveError",()=>{})),()=>{c&&(c.off("receiveMessage"),c.off("showTyping"),c.off("receiveError"))}),[c]);const _=()=>{u&&(c.emit("sendMessage",{toUserId:E._id,fromUserId:t._id,text:u,chatId:e._id}),f(""))},k=O=>{h(Ju(O)).then(B=>{B.type==="user/getLastSeen/fulfilled"&&v(B?.payload?.lastSeen)})},N=()=>{c.emit("sendTyping",{toUserId:E._id,fromUserId:t._id,chatId:e._id})};if(!e)return T.jsx("div",{children:"Loading chat..."});const E=e.participants.find(O=>O._id!==s),R=r.includes(E._id);return T.jsxs("div",{className:"flex flex-col h-[80vh]",children:[T.jsxs("div",{className:"p-4 border-b flex items-center",children:[T.jsx("img",{src:E?.avater,alt:E?.name,className:"w-10 h-10 rounded-full mr-3"}),T.jsxs("div",{children:[T.jsx("div",{className:"font-medium",children:E?.name}),T.jsxs("div",{className:"flex gap-2 text-xs text-gray-500",children:[R?T.jsx("p",{children:"online"}):y?T.jsx("p",{children:new Date(y).toLocaleString()}):T.jsx("button",{disabled:i,onClick:()=>k(E?._id),children:"get last seen"}),w&&T.jsx("span",{className:"p-1 text-center rounded-lg text-white bg-green-700",children:"typing..."})]})]})]}),T.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[e?.messages.map((O,B)=>{const F=O.sender===s,M=F?"chat-end":"chat-start";return T.jsx("div",{className:`chat ${M}`,children:T.jsxs("div",{className:"chat-bubble",children:[O?.text,T.jsx("div",{className:"text-xs opacity-50 mt-1",children:F?O?.seen?"seen":"delivered":""})]})},B)}),T.jsx("div",{ref:p})]}),T.jsx("div",{className:"p-4 border-t",children:T.jsxs("div",{className:"flex gap-2",children:[T.jsx("input",{type:"text",placeholder:"Type a message...",className:"input input-bordered flex-1 border-2 border-blue-500",value:u,onChange:O=>f(O.target.value),onKeyDown:N}),T.jsx("button",{onClick:_,className:"btn btn-primary",children:"Send"})]})})]})}const w6=U.memo(b6),x6=({isFeatured:e,productId:t})=>{const[r,i]=U.useState(!1),s=U.useRef(null),c=xr(),u=async()=>{try{const h=await Kt.get(`/payment/verify/${s.current}`);console.log(h.data),h?.data?.paymentReceived=="successful"&&(console.log("payment successful"),c(0))}catch(h){console.log(h?.response?.data?.msg)}},f=async()=>{if(!e){i(!0);try{const h=await Kt.get(`/payment/initiate/${t}`),{amount:p,key:y,id:v,notes:{name:w,email:x}}=h?.data;s.current=v,console.log(p,y,v,w,x);const _={key:y,amount:p,currency:"INR",name:"Add to Featured",description:"Test Transaction",order_id:v,prefill:{name:w,email:x},theme:{color:"#F37254"},handler:u};new window.Razorpay(_).open()}catch(h){console.log(h?.response?.data?.msg)}i(!1)}};return T.jsx("div",{className:"form-control",children:T.jsxs("label",{className:"cursor-pointer label",children:[T.jsx("span",{className:"label-text",children:"Mark as Featured"}),e?T.jsx("input",{type:"checkbox",name:"featured",checked:e,className:"checkbox checkbox-primary"}):T.jsx("input",{type:"checkbox",name:"featured",checked:e,onChange:f,disabled:r,className:"checkbox checkbox-primary"})]})})},_6=()=>T.jsxs("footer",{className:"footer bg-neutral text-neutral-content items-center p-1",children:[T.jsxs("aside",{className:"grid-flow-col items-center",children:[T.jsx("svg",{width:"36",height:"36",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",className:"fill-current",children:T.jsx("path",{d:"M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"})}),T.jsxs("p",{children:["Copyright © ",new Date().getFullYear()," - All right reserved"]})]}),T.jsxs("nav",{className:"grid-flow-col gap-4 md:place-self-center md:justify-self-end",children:[T.jsx("a",{children:T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:T.jsx("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),T.jsx("a",{children:T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:T.jsx("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})})}),T.jsx("a",{children:T.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:T.jsx("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})})})]})]});function uS(e){return Br({attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0c-4.355 0-7.898 3.481-7.998 7.812 0.092-3.779 2.966-6.812 6.498-6.812 3.59 0 6.5 3.134 6.5 7 0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-4.418-3.582-8-8-8zM8 16c4.355 0 7.898-3.481 7.998-7.812-0.092 3.779-2.966 6.812-6.498 6.812-3.59 0-6.5-3.134-6.5-7 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 4.418 3.582 8 8 8z"},child:[]}]})(e)}function S6(e){return Br({attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 14.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z"},child:[]},{tag:"path",attr:{d:"M10.5 4l-2.5 2.5-2.5-2.5-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 2.5-2.5 2.5 2.5 1.5-1.5-2.5-2.5 2.5-2.5z"},child:[]}]})(e)}const E6=(e,t)=>T.jsxs(T.Fragment,{children:[T.jsx("span",{children:"Price: "}),T.jsx("span",{children:e[t].split(",")[0]})," - ",T.jsx("span",{children:e[t].split(",")[1]})]}),T6=()=>{const{queryObj:e}=Ct(s=>s.product),t=Pt(),r=xr(),i=s=>{s==="type"?(t(gl(s)),r("/")):t(gl(s))};return T.jsx("div",{className:"flex justify-center items-center gap-2",children:Object.keys(e).map((s,c)=>{if(e[s]!=="India")return T.jsxs("div",{className:"flex p-2 rounded-full text-slate-600 border-2 shadow-lg border-blue-500 justify-center items-center gap-2",children:[s==="priceRange"?E6(e,s):T.jsx("p",{children:e[s]}),T.jsx("button",{onClick:()=>{i(s)},children:T.jsx(S6,{})})]},c)})})},C6=()=>{const{provider:e}=Fd(),t=Pt(),{user:r}=Ct(c=>c.user),[i,s]=U.useState(null);return U.useEffect(()=>{let c;return e==="google"?t(vl()).then(u=>{u.type==="user/getUser/fulfilled"&&(c=n1(),s(c),c.emit("online",u?.payload?.theUser?._id),c.on("userOnline",f=>{t(l1(f))}),c.on("userOffline",f=>{t(c1(f))}))}):r&&(c=n1(),s(c),c.emit("online",r?._id),c.on("userOnline",u=>{t(l1(u))}),c.on("userOffline",u=>{t(c1(u))})),()=>{t(Wg()),(r||e==="google")&&c?.disconnect()}},[]),T.jsxs("main",{children:[T.jsxs("section",{children:[T.jsx(c6,{}),T.jsx(f6,{}),T.jsx(T6,{})]}),T.jsx("section",{className:"max-w-4xl mx-auto",children:T.jsx(fR,{context:{socket:i}})}),T.jsx(_6,{})]})},N6=()=>{const{loading:e,products:t,queryObj:r,page:i,numOfPages:s}=Ct(u=>u.product),c=Pt();return U.useEffect(()=>{c(gl("typeSpecificLocation")),c(gl("priceRange")),c(gl("type")),c(ml())},[r.location,r.search]),e?T.jsx(Jd,{}):T.jsx("section",{children:T.jsx("div",{className:"flex justify-center items-center flex-wrap gap-4",children:t?.map(u=>T.jsx(Qg,{item:u},u._id))})})},k6=()=>{const{type:e}=Fd(),{queryObj:t,products:r,loading:i}=Ct(c=>c.product),s=Pt();return U.useEffect(()=>{s(kd({type:e})),s(ml())},[e,t.typeSpecificLocation,t.priceRange]),i?T.jsx(Jd,{}):T.jsxs("section",{className:"flex gap-2",children:[T.jsx("div",{className:"w-1/4",children:T.jsx(g6,{type:e})}),T.jsx("div",{className:"w-3/4",children:T.jsx("div",{className:"flex justify-center items-center flex-wrap gap-4",children:r?.map(c=>T.jsx(Qg,{item:c},c._id))})})]})},R6=()=>{const{loading:e,theProduct:t}=Ct(y=>y.product),{user:r}=Ct(y=>y.user),[i,s]=U.useState(0),{productId:c}=Fd(),u=Pt(),f=xr();U.useEffect(()=>{u(Vz()),u(Xu(c))},[]);const h=t?.userId?._id===r?._id,p=()=>{u(td(t?.userId?._id)).then(y=>{y.type==="chat/createChat/fulfilled"?f(`/chat/${y?.payload?.theChat?._id}`):y?.payload==="no cookie"&&f("/login")})};return!t||e?T.jsx(Jd,{}):T.jsx("div",{className:"max-w-6xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-sm",children:T.jsxs("div",{className:"flex flex-col md:flex-row gap-8",children:[T.jsxs("div",{className:"flex-1",children:[T.jsx("div",{className:"w-full aspect-video overflow-hidden rounded-lg border border-gray-200",children:T.jsx("img",{src:t.images[i],alt:t.title,className:"w-full h-full object-cover transition-transform duration-300 hover:scale-105"})}),T.jsx("div",{className:"flex gap-3 mt-3 justify-center",children:t.images.map((y,v)=>T.jsx("div",{className:`w-20 h-16 rounded-md overflow-hidden border-2 cursor-pointer ${i===v?"border-blue-500":"border-transparent"}`,onClick:()=>s(v),children:T.jsx("img",{src:y,alt:`Thumbnail ${v+1}`,className:"w-full h-full object-cover hover:opacity-80 transition"})},v))})]}),T.jsxs("div",{className:"flex-1 flex flex-col justify-between",children:[T.jsxs("div",{children:[T.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:t.title}),T.jsxs("p",{className:"text-3xl font-semibold text-green-600 mb-4",children:["₹",t.price.toLocaleString()]}),T.jsxs("div",{className:"text-sm text-gray-600 mb-2",children:[T.jsx("span",{className:"font-medium",children:"Category:"})," ",t.category]}),T.jsxs("div",{className:"text-sm text-gray-600 mb-2",children:[T.jsx("span",{className:"font-medium",children:"Type:"})," ",t.type]}),T.jsxs("div",{className:"text-sm text-gray-600 mb-4",children:[T.jsx("span",{className:"font-medium",children:"Location:"})," ",t.location]}),T.jsxs("div",{children:[T.jsx("h2",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Description"}),T.jsx("p",{className:"text-gray-700 leading-relaxed",children:t.description})]}),T.jsx("div",{className:"mt-4",children:T.jsxs("p",{className:"text-sm text-gray-600",children:[T.jsx("span",{className:"font-medium",children:"Seller:"})," ",t?.userId?.name]})}),h&&T.jsx(x6,{isFeatured:t.featured,productId:t?._id}),t.featured&&T.jsx("span",{className:"mt-2 inline-block px-2 py-1 text-xs font-semibold bg-yellow-400 text-gray-800 rounded",children:"Featured"})]}),T.jsxs("div",{className:"mt-6 text-sm text-gray-500 border-t pt-3",children:[T.jsxs("p",{children:["Posted on: ",new Date(t.createdAt).toLocaleDateString()]}),T.jsxs("p",{children:["Status: ",t.isSold?"Sold":"Available"]})]}),T.jsx("div",{className:"relative",children:T.jsxs("button",{onClick:p,className:"relative mt-4 h-10 w-24 border-2 border-slate-500 text-blue-700 rounded-md flex items-center justify-center",children:["Chat",t?.isUserOnline&&T.jsxs("span",{className:"absolute top-1 right-1 flex h-3 w-3",children:[T.jsx("span",{className:"absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"}),T.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-green-500"})]})]})})]})]})})},A6=()=>{const{userSubmitting:e}=Ct(u=>u.user),t=U.useRef(null),r=Pt(),i=xr(),s=u=>{u.preventDefault();const f=new FormData(t.current),h=Object.fromEntries(f);r(Qu(h)).then(({type:p})=>{p=="user/login/fulfilled"&&i("/")})},c=()=>{window.location.href="http://localhost:8080/api/google"};return T.jsx("div",{className:"hero bg-base-200 min-h-screen",children:T.jsxs("div",{className:"hero-content flex-col lg:flex-row lg:justify-between",children:[T.jsxs("div",{className:"text-center lg:text-left",children:[T.jsx("h1",{className:"text-5xl font-bold",children:"Login now!"}),T.jsx("p",{className:"py-6",children:"Welcome to Olx"})]}),T.jsxs("div",{className:"card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl",children:[T.jsxs("form",{ref:t,onSubmit:s,className:"card-body",children:[T.jsx(bl,{name:"email",label:"Email",type:"text",isRequired:!0}),T.jsx(bl,{name:"password",label:"Password",type:"password",isRequired:!0}),T.jsx("button",{className:"btn btn-ghost",disabled:e,children:e?T.jsxs("span",{className:"flex gap-1 items-center",children:[T.jsx(uS,{className:"animate-spin"}),"Login"]}):T.jsx("span",{children:"Login"})}),T.jsxs("p",{children:["new here ",T.jsx(vn,{to:"/register",className:"underline text-neutral",children:"register"})]})]}),T.jsx("button",{onClick:c,children:T.jsx(EA,{})})]})]})})},O6=()=>{const{userSubmitting:e}=Ct(c=>c.user),t=U.useRef(null),r=Pt(),i=xr(),s=c=>{c.preventDefault();const u=new FormData(t.current),f=Object.fromEntries(u);r(Ku(f)).then(({type:h})=>{h=="user/register/fulfilled"&&i("/login")})};return T.jsx("div",{className:"hero bg-base-200 min-h-screen",children:T.jsxs("div",{className:"hero-content flex-col lg:flex-row lg:justify-between",children:[T.jsxs("div",{className:"text-center lg:text-left",children:[T.jsx("h1",{className:"text-5xl font-bold",children:"Register now!"}),T.jsx("p",{className:"py-6",children:"Welcome to Olx"})]}),T.jsx("div",{className:"card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl",children:T.jsxs("form",{ref:t,onSubmit:s,className:"card-body",children:[T.jsx(bl,{name:"name",label:"Name",type:"text",isRequired:!0}),T.jsx(bl,{name:"email",label:"Email",type:"text",isRequired:!0}),T.jsx(bl,{name:"password",label:"Password",type:"password",isRequired:!0}),T.jsx("button",{className:"btn btn-ghost",disabled:e,children:e?T.jsxs("span",{className:"flex gap-1 items-center",children:[T.jsx(uS,{className:"animate-spin"}),"Register"]}):T.jsx("span",{children:"Register"})}),T.jsxs("p",{children:["already a member ",T.jsx(vn,{to:"/login",className:"underline text-neutral",children:"login"})]})]})})]})})},M6=()=>{const{chatHeads:e,isLoading:t}=Ct(c=>c.chat),{user:r}=Ct(c=>c.user),i=Pt(),{socket:s}=Ag();return U.useEffect(()=>(i(yl()),s&&(e.forEach(c=>{s.emit("joinroom",{toUserId:r._id,fromUserId:c.participants.find(u=>u._id!==r?._id)?._id})}),s.on("receiveMessage",({chatId:c,newMessage:u})=>{i(sS({chatId:c,newMessage:u}))}),s.on("showTyping",({typerId:c,chatId:u})=>{console.log("typing",c,u),c!==r?._id&&(i(lS({chatId:u})),setTimeout(()=>{i(cS({chatId:u}))},500))})),()=>{s&&(s.off("receiveMessage"),s.off("showTyping"))}),[]),e.length===0?T.jsx("h1",{children:"No chats"}):t?T.jsx("h1",{children:"Loading..."}):T.jsxs("div",{className:"flex h-full",children:[T.jsx("div",{className:"hidden md:block w-1/3 border-r",children:T.jsx(Gm,{chatList:e})}),T.jsx("div",{className:"md:hidden flex-1",children:T.jsx(Gm,{chatList:e})}),T.jsx("div",{className:"hidden md:block w-2/3 ",children:T.jsx("div",{className:"flex h-screen items-center justify-center",children:T.jsx("p",{children:"Select a chat"})})})]})},z6=()=>{const{chatId:e}=Fd(),{theChat:t,chatHeads:r,isLoading:i}=Ct(f=>f.chat),{user:s}=Ct(f=>f.user),c=Pt(),{socket:u}=Ag();return U.useEffect(()=>(c(ed(e)).then(()=>{c(yl())}),u&&(r.forEach(f=>{u.emit("joinroom",{toUserId:s._id,fromUserId:f.participants.find(h=>h._id!==s?._id)?._id})}),u.emit("openChat",{chatId:e,userOpenerId:s?._id}),u.on("setMsgSeen",({chatId:f,userOpenerId:h})=>{c(i6({chatId:f,userOpenerId:h})),c(o6({chatId:f,userOpenerId:h}))})),()=>{c(nd(e)),u&&(u.off("setMsgSeen"),u.off("receiveMessage"),u.off("showTyping"),u.off("receiveError"))}),[u,e]),t?i?T.jsx("h1",{children:"Loading..."}):T.jsxs("div",{className:"flex h-full",children:[T.jsx("div",{className:"hidden md:block w-1/3 border-r-2 border-r-blue-500",children:T.jsx(Gm,{chatList:r,selectedChatId:e})}),T.jsx("div",{className:"flex-1",children:T.jsx(w6,{chat:t})})]}):T.jsx("h1",{children:"No chat"})};function D6(e){return Br({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function j6(){const{submitting:e}=Ct(p=>p.product),t=Pt(),r=xr(),[i,s]=U.useState({title:"",description:"",price:"",category:"",location:"",type:"",images:[],featured:!1}),c=p=>{const{name:y,value:v,type:w,checked:x}=p.target;s({...i,[y]:w==="checkbox"?x:v})},u=p=>{const y=p.target.value;s(v=>({...v,images:[...v.images,y]})),p.target.value=""},f=p=>{p.preventDefault(),t(Gu(i)).then(y=>{y?.payload==="no cookie"&&r("/login")})},h=p=>{s(y=>{const v=y.images.filter((w,x)=>x!==p);return{...y,images:v}})};return T.jsx("div",{className:"flex justify-center bg-base-200 min-h-screen p-6",children:T.jsx("div",{className:"card w-full max-w-2xl bg-base-100 shadow-xl",children:T.jsxs("div",{className:"card-body",children:[T.jsx("h2",{className:"text-2xl font-bold text-center mb-4",children:"Sell Your Product"}),T.jsxs("form",{onSubmit:f,onKeyDown:p=>{p.key==="Enter"&&p.preventDefault()},className:"space-y-4",children:[T.jsxs("div",{children:[T.jsx("label",{className:"label",children:T.jsx("span",{className:"label-text",children:"Product Title *"})}),T.jsx("input",{type:"text",name:"title",value:i.title,onChange:c,placeholder:"e.g. Yamaha FZ V3",className:"input input-bordered w-full",required:!0})]}),T.jsxs("div",{children:[T.jsx("label",{className:"label",children:T.jsx("span",{className:"label-text",children:"Description"})}),T.jsx("textarea",{name:"description",value:i.description,onChange:c,placeholder:"Write about your product...",className:"textarea textarea-bordered w-full",rows:"3"})]}),T.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[T.jsxs("div",{children:[T.jsx("label",{className:"label",children:T.jsx("span",{className:"label-text",children:"Price (₹)*"})}),T.jsx("input",{type:"number",name:"price",value:i.price,onChange:c,placeholder:"Enter price",className:"input input-bordered w-full",required:!0})]}),T.jsxs("div",{children:[T.jsx("label",{className:"label",children:T.jsx("span",{className:"label-text",children:"Category *"})}),T.jsxs("select",{name:"category",value:i.category,onChange:c,className:"select select-bordered w-full",required:!0,children:[T.jsx("option",{value:"",children:"Select Category"}),T.jsx("option",{value:"Bike",children:"Bike"}),T.jsx("option",{value:"Electronics",children:"Electronics"}),T.jsx("option",{value:"Furniture",children:"Furniture"}),T.jsx("option",{value:"Mobile",children:"Mobile"}),T.jsx("option",{value:"Property",children:"Property"}),T.jsx("option",{value:"Other",children:"Other"})]})]})]}),T.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[T.jsxs("div",{children:[T.jsx("label",{className:"label",children:T.jsx("span",{className:"label-text",children:"Location *"})}),T.jsx("input",{type:"text",name:"location",value:i.location,onChange:c,placeholder:"City / Area",className:"input input-bordered w-full",required:!0})]}),T.jsxs("div",{children:[T.jsx("label",{className:"label",children:T.jsx("span",{className:"label-text",children:"Type *"})}),T.jsx("input",{type:"text",name:"type",value:i.type,onChange:c,placeholder:"Enter Product Type",className:"input input-bordered w-full",required:!0})]})]}),T.jsxs("div",{children:[T.jsx("label",{className:"label",children:T.jsx("span",{className:"label-text",children:'Upload Images (press "enter" to add image url)'})}),T.jsx("input",{type:"text",onKeyDown:p=>{p.key==="Enter"&&u(p)},className:"file-input file-input-bordered w-full"}),i.images.length>0&&T.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:i.images.map((p,y)=>T.jsxs("div",{className:"relative",children:[T.jsx("img",{src:p,alt:"preview",className:"w-20 h-20 object-cover rounded-md"}),T.jsx(D6,{onClick:()=>h(y),className:"absolute top-1 right-1 cursor-pointer text-black"})]},y))})]}),T.jsx("div",{className:"pt-4",children:T.jsx("button",{disabled:e,type:"submit",className:"btn btn-primary w-full",children:"Post Product"})})]})]})})})}const L6=()=>{const{loading:e,myProducts:t}=Ct(i=>i.product),r=Pt();return U.useEffect(()=>{r(Wu())},[]),e?T.jsx(Jd,{}):T.jsx("section",{children:T.jsx("div",{className:"flex justify-center items-center flex-wrap gap-4",children:t?.map(i=>T.jsx(Qg,{item:i},i._id))})})},U6=LR([{path:"/:provider?",element:T.jsx(C6,{}),errorElement:T.jsx("h1",{children:"Something went wrong..."}),children:[{index:!0,element:T.jsx(N6,{})},{path:"filter/:type",element:T.jsx(k6,{})},{path:"product/:productId",element:T.jsx(R6,{})},{path:"chat",element:T.jsx(M6,{})},{path:"chat/:chatId",element:T.jsx(z6,{})},{path:"sell",element:T.jsx(j6,{})},{path:"myproducts",element:T.jsx(L6,{})}]},{path:"/login",element:T.jsx(A6,{})},{path:"/register",element:T.jsx(O6,{})}]);function H6(){return T.jsx(WR,{router:U6})}const B6=ZA({reducer:{product:Pz,user:Kz,chat:s6}});A5({enabled:!0});U5.createRoot(document.getElementById("root")).render(T.jsx(T.Fragment,{children:T.jsx(fA,{store:B6,children:T.jsx(H6,{})})}));
