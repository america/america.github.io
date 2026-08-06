(()=>{var qS=Object.create;var o0=Object.defineProperty;var YS=Object.getOwnPropertyDescriptor;var ZS=Object.getOwnPropertyNames;var JS=Object.getPrototypeOf,KS=Object.prototype.hasOwnProperty;var xo=(e,t)=>()=>(e&&(t=e(e=0)),t);var qi=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var QS=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ZS(t))!KS.call(e,s)&&s!==n&&o0(e,s,{get:()=>t[s],enumerable:!(i=YS(t,s))||i.enumerable});return e};var bo=(e,t,n)=>(n=e!=null?qS(JS(e)):{},QS(t||!e||!e.__esModule?o0(n,"default",{value:e,enumerable:!0}):n,e));var _0=qi(Ot=>{"use strict";var Xf=Symbol.for("react.transitional.element"),jS=Symbol.for("react.portal"),$S=Symbol.for("react.fragment"),tM=Symbol.for("react.strict_mode"),eM=Symbol.for("react.profiler"),nM=Symbol.for("react.consumer"),iM=Symbol.for("react.context"),sM=Symbol.for("react.forward_ref"),aM=Symbol.for("react.suspense"),rM=Symbol.for("react.memo"),f0=Symbol.for("react.lazy"),oM=Symbol.for("react.activity"),l0=Symbol.iterator;function lM(e){return e===null||typeof e!="object"?null:(e=l0&&e[l0]||e["@@iterator"],typeof e=="function"?e:null)}var d0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p0=Object.assign,m0={};function nr(e,t,n){this.props=e,this.context=t,this.refs=m0,this.updater=n||d0}nr.prototype.isReactComponent={};nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function g0(){}g0.prototype=nr.prototype;function Wf(e,t,n){this.props=e,this.context=t,this.refs=m0,this.updater=n||d0}var qf=Wf.prototype=new g0;qf.constructor=Wf;p0(qf,nr.prototype);qf.isPureReactComponent=!0;var c0=Array.isArray;function Hf(){}var _e={H:null,A:null,T:null,S:null},y0=Object.prototype.hasOwnProperty;function Yf(e,t,n){var i=n.ref;return{$$typeof:Xf,type:e,key:t,ref:i!==void 0?i:null,props:n}}function cM(e,t){return Yf(e.type,t,e.props)}function Zf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xf}function uM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var u0=/\/+/g;function Gf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uM(""+e.key):t.toString(36)}function hM(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Hf,Hf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function er(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Xf:case jS:r=!0;break;case f0:return r=e._init,er(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Gf(e,0):i,c0(s)?(n="",r!=null&&(n=r.replace(u0,"$&/")+"/"),er(s,t,n,"",function(c){return c})):s!=null&&(Zf(s)&&(s=cM(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(u0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(c0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Gf(i,l),r+=er(i,t,n,a,s);else if(l=lM(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Gf(i,l++),r+=er(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return er(hM(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function cc(e,t,n){if(e==null)return e;var i=[],s=0;return er(e,i,"","",function(a){return t.call(n,a,s++)}),i}function fM(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var h0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},dM={map:cc,forEach:function(e,t,n){cc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cc(e,function(){t++}),t},toArray:function(e){return cc(e,function(t){return t})||[]},only:function(e){if(!Zf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ot.Activity=oM;Ot.Children=dM;Ot.Component=nr;Ot.Fragment=$S;Ot.Profiler=eM;Ot.PureComponent=Wf;Ot.StrictMode=tM;Ot.Suspense=aM;Ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_e;Ot.__COMPILER_RUNTIME={__proto__:null,c:function(e){return _e.H.useMemoCache(e)}};Ot.cache=function(e){return function(){return e.apply(null,arguments)}};Ot.cacheSignal=function(){return null};Ot.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=p0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!y0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Yf(e.type,s,i)};Ot.createContext=function(e){return e={$$typeof:iM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:nM,_context:e},e};Ot.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)y0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Yf(e,a,s)};Ot.createRef=function(){return{current:null}};Ot.forwardRef=function(e){return{$$typeof:sM,render:e}};Ot.isValidElement=Zf;Ot.lazy=function(e){return{$$typeof:f0,_payload:{_status:-1,_result:e},_init:fM}};Ot.memo=function(e,t){return{$$typeof:rM,type:e,compare:t===void 0?null:t}};Ot.startTransition=function(e){var t=_e.T,n={};_e.T=n;try{var i=e(),s=_e.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Hf,h0)}catch(a){h0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),_e.T=t}};Ot.unstable_useCacheRefresh=function(){return _e.H.useCacheRefresh()};Ot.use=function(e){return _e.H.use(e)};Ot.useActionState=function(e,t,n){return _e.H.useActionState(e,t,n)};Ot.useCallback=function(e,t){return _e.H.useCallback(e,t)};Ot.useContext=function(e){return _e.H.useContext(e)};Ot.useDebugValue=function(){};Ot.useDeferredValue=function(e,t){return _e.H.useDeferredValue(e,t)};Ot.useEffect=function(e,t){return _e.H.useEffect(e,t)};Ot.useEffectEvent=function(e){return _e.H.useEffectEvent(e)};Ot.useId=function(){return _e.H.useId()};Ot.useImperativeHandle=function(e,t,n){return _e.H.useImperativeHandle(e,t,n)};Ot.useInsertionEffect=function(e,t){return _e.H.useInsertionEffect(e,t)};Ot.useLayoutEffect=function(e,t){return _e.H.useLayoutEffect(e,t)};Ot.useMemo=function(e,t){return _e.H.useMemo(e,t)};Ot.useOptimistic=function(e,t){return _e.H.useOptimistic(e,t)};Ot.useReducer=function(e,t,n){return _e.H.useReducer(e,t,n)};Ot.useRef=function(e){return _e.H.useRef(e)};Ot.useState=function(e){return _e.H.useState(e)};Ot.useSyncExternalStore=function(e,t,n){return _e.H.useSyncExternalStore(e,t,n)};Ot.useTransition=function(){return _e.H.useTransition()};Ot.version="19.2.0"});var xa=qi((A3,v0)=>{"use strict";v0.exports=_0()});var R0=qi(Me=>{"use strict";function jf(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<uc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Ci(e){return e.length===0?null:e[0]}function fc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>uc(o,n))l<s&&0>uc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>uc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function uc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Me.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(x0=performance,Me.unstable_now=function(){return x0.now()}):(Jf=Date,b0=Jf.now(),Me.unstable_now=function(){return Jf.now()-b0});var x0,Jf,b0,Yi=[],As=[],pM=1,ei=null,pn=3,$f=!1,So=!1,Mo=!1,td=!1,T0=typeof setTimeout=="function"?setTimeout:null,E0=typeof clearTimeout=="function"?clearTimeout:null,S0=typeof setImmediate<"u"?setImmediate:null;function hc(e){for(var t=Ci(As);t!==null;){if(t.callback===null)fc(As);else if(t.startTime<=e)fc(As),t.sortIndex=t.expirationTime,jf(Yi,t);else break;t=Ci(As)}}function ed(e){if(Mo=!1,hc(e),!So)if(Ci(Yi)!==null)So=!0,sr||(sr=!0,ir());else{var t=Ci(As);t!==null&&nd(ed,t.startTime-e)}}var sr=!1,To=-1,A0=5,w0=-1;function C0(){return td?!0:!(Me.unstable_now()-w0<A0)}function Kf(){if(td=!1,sr){var e=Me.unstable_now();w0=e;var t=!0;try{t:{So=!1,Mo&&(Mo=!1,E0(To),To=-1),$f=!0;var n=pn;try{e:{for(hc(e),ei=Ci(Yi);ei!==null&&!(ei.expirationTime>e&&C0());){var i=ei.callback;if(typeof i=="function"){ei.callback=null,pn=ei.priorityLevel;var s=i(ei.expirationTime<=e);if(e=Me.unstable_now(),typeof s=="function"){ei.callback=s,hc(e),t=!0;break e}ei===Ci(Yi)&&fc(Yi),hc(e)}else fc(Yi);ei=Ci(Yi)}if(ei!==null)t=!0;else{var a=Ci(As);a!==null&&nd(ed,a.startTime-e),t=!1}}break t}finally{ei=null,pn=n,$f=!1}t=void 0}}finally{t?ir():sr=!1}}}var ir;typeof S0=="function"?ir=function(){S0(Kf)}:typeof MessageChannel<"u"?(Qf=new MessageChannel,M0=Qf.port2,Qf.port1.onmessage=Kf,ir=function(){M0.postMessage(null)}):ir=function(){T0(Kf,0)};var Qf,M0;function nd(e,t){To=T0(function(){e(Me.unstable_now())},t)}Me.unstable_IdlePriority=5;Me.unstable_ImmediatePriority=1;Me.unstable_LowPriority=4;Me.unstable_NormalPriority=3;Me.unstable_Profiling=null;Me.unstable_UserBlockingPriority=2;Me.unstable_cancelCallback=function(e){e.callback=null};Me.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A0=0<e?Math.floor(1e3/e):5};Me.unstable_getCurrentPriorityLevel=function(){return pn};Me.unstable_next=function(e){switch(pn){case 1:case 2:case 3:var t=3;break;default:t=pn}var n=pn;pn=t;try{return e()}finally{pn=n}};Me.unstable_requestPaint=function(){td=!0};Me.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=pn;pn=e;try{return t()}finally{pn=n}};Me.unstable_scheduleCallback=function(e,t,n){var i=Me.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:pM++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,jf(As,e),Ci(Yi)===null&&e===Ci(As)&&(Mo?(E0(To),To=-1):Mo=!0,nd(ed,n-i))):(e.sortIndex=s,jf(Yi,e),So||$f||(So=!0,sr||(sr=!0,ir()))),e};Me.unstable_shouldYield=C0;Me.unstable_wrapCallback=function(e){var t=pn;return function(){var n=pn;pn=t;try{return e.apply(this,arguments)}finally{pn=n}}}});var N0=qi((C3,D0)=>{"use strict";D0.exports=R0()});var L0=qi(bn=>{"use strict";var mM=xa();function U0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ws(){}var xn={d:{f:ws,r:function(){throw Error(U0(522))},D:ws,C:ws,L:ws,m:ws,X:ws,S:ws,M:ws},p:0,findDOMNode:null},gM=Symbol.for("react.portal");function yM(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gM,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Eo=mM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function dc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xn;bn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(U0(299));return yM(e,t,null,n)};bn.flushSync=function(e){var t=Eo.T,n=xn.p;try{if(Eo.T=null,xn.p=2,e)return e()}finally{Eo.T=t,xn.p=n,xn.d.f()}};bn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,xn.d.C(e,t))};bn.prefetchDNS=function(e){typeof e=="string"&&xn.d.D(e)};bn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=dc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?xn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&xn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};bn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=dc(t.as,t.crossOrigin);xn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&xn.d.M(e)};bn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=dc(n,t.crossOrigin);xn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};bn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=dc(t.as,t.crossOrigin);xn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else xn.d.m(e)};bn.requestFormReset=function(e){xn.d.r(e)};bn.unstable_batchedUpdates=function(e,t){return e(t)};bn.useFormState=function(e,t,n){return Eo.H.useFormState(e,t,n)};bn.useFormStatus=function(){return Eo.H.useHostTransitionStatus()};bn.version="19.2.0"});var P0=qi((D3,I0)=>{"use strict";function O0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O0)}catch(e){console.error(e)}}O0(),I0.exports=L0()});var Zx=qi(zu=>{"use strict";var Je=N0(),l_=xa(),_M=P0();function Q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function B0(e){if(hl(e)!==e)throw Error(Q(188))}function vM(e){var t=e.alternate;if(!t){if(t=hl(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return B0(s),e;if(a===i)return B0(s),t;a=a.sibling}throw Error(Q(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function f_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f_(e),t!==null)return t;e=e.sibling}return null}var be=Object.assign,xM=Symbol.for("react.element"),pc=Symbol.for("react.transitional.element"),Lo=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),d_=Symbol.for("react.strict_mode"),Pd=Symbol.for("react.profiler"),p_=Symbol.for("react.consumer"),es=Symbol.for("react.context"),Np=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),zd=Symbol.for("react.suspense_list"),Up=Symbol.for("react.memo"),Cs=Symbol.for("react.lazy");Symbol.for("react.scope");var Fd=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var bM=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var z0=Symbol.iterator;function Ao(e){return e===null||typeof e!="object"?null:(e=z0&&e[z0]||e["@@iterator"],typeof e=="function"?e:null)}var SM=Symbol.for("react.client.reference");function kd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===SM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case Pd:return"Profiler";case d_:return"StrictMode";case Bd:return"Suspense";case zd:return"SuspenseList";case Fd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Lo:return"Portal";case es:return e.displayName||"Context";case p_:return(e._context.displayName||"Context")+".Consumer";case Np:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Up:return t=e.displayName||null,t!==null?t:kd(e.type)||"Memo";case Cs:t=e._payload,e=e._init;try{return kd(e(t))}catch{}}return null}var Oo=Array.isArray,Nt=l_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=_M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Aa={pending:!1,data:null,method:null,action:null},Vd=[],hr=-1;function Li(e){return{current:e}}function en(e){0>hr||(e.current=Vd[hr],Vd[hr]=null,hr--)}function ye(e,t){hr++,Vd[hr]=e.current,e.current=t}var Ui=Li(null),Qo=Li(null),Fs=Li(null),Yc=Li(null);function Zc(e,t){switch(ye(Fs,t),ye(Qo,e),ye(Ui,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wy(t),e=Ox(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}en(Ui),ye(Ui,e)}function Rr(){en(Ui),en(Qo),en(Fs)}function Gd(e){e.memoizedState!==null&&ye(Yc,e);var t=Ui.current,n=Ox(t,e.type);t!==n&&(ye(Qo,e),ye(Ui,n))}function Jc(e){Qo.current===e&&(en(Ui),en(Qo)),Yc.current===e&&(en(Yc),ll._currentValue=Aa)}var id,F0;function Sa(e){if(id===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);id=t&&t[1]||"",F0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+id+e+F0}var sd=!1;function ad(e,t){if(!e||sd)return"";sd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){u=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{sd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Sa(n):""}function MM(e,t){switch(e.tag){case 26:case 27:case 5:return Sa(e.type);case 16:return Sa("Lazy");case 13:return e.child!==t&&t!==null?Sa("Suspense Fallback"):Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 15:return ad(e.type,!1);case 11:return ad(e.type.render,!1);case 1:return ad(e.type,!0);case 31:return Sa("Activity");default:return""}}function k0(e){try{var t="",n=null;do t+=MM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Hd=Object.prototype.hasOwnProperty,Lp=Je.unstable_scheduleCallback,rd=Je.unstable_cancelCallback,TM=Je.unstable_shouldYield,EM=Je.unstable_requestPaint,kn=Je.unstable_now,AM=Je.unstable_getCurrentPriorityLevel,m_=Je.unstable_ImmediatePriority,g_=Je.unstable_UserBlockingPriority,Kc=Je.unstable_NormalPriority,wM=Je.unstable_LowPriority,y_=Je.unstable_IdlePriority,CM=Je.log,RM=Je.unstable_setDisableYieldValue,fl=null,Vn=null;function Os(e){if(typeof CM=="function"&&RM(e),Vn&&typeof Vn.setStrictMode=="function")try{Vn.setStrictMode(fl,e)}catch{}}var Gn=Math.clz32?Math.clz32:UM,DM=Math.log,NM=Math.LN2;function UM(e){return e>>>=0,e===0?32:31-(DM(e)/NM|0)|0}var mc=256,gc=262144,yc=4194304;function Ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Su(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ma(i):(r&=o,r!==0?s=Ma(r):n||(n=o&~e,n!==0&&(s=Ma(n))))):(o=i&~a,o!==0?s=Ma(o):r!==0?s=Ma(r):n||(n=i&~e,n!==0&&(s=Ma(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function dl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function LM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function __(){var e=yc;return yc<<=1,(yc&62914560)===0&&(yc=4194304),e}function od(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function OM(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Gn(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&v_(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function v_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Gn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function x_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Gn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function b_(e,t){var n=t&-t;return n=(n&42)!==0?1:Op(n),(n&(e.suspendedLanes|t))!==0?0:n}function Op(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ip(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function S_(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:Wx(e.type))}function V0(e,t){var n=ne.p;try{return ne.p=e,t()}finally{ne.p=n}}var js=Math.random().toString(36).slice(2),ln="__reactFiber$"+js,Nn="__reactProps$"+js,kr="__reactContainer$"+js,Xd="__reactEvents$"+js,IM="__reactListeners$"+js,PM="__reactHandles$"+js,G0="__reactResources$"+js,ml="__reactMarker$"+js;function Pp(e){delete e[ln],delete e[Nn],delete e[Xd],delete e[IM],delete e[PM]}function fr(e){var t=e[ln];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kr]||n[ln]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ky(e);e!==null;){if(n=e[ln])return n;e=Ky(e)}return t}e=n,n=e.parentNode}return null}function Vr(e){if(e=e[ln]||e[kr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Io(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Q(33))}function Sr(e){var t=e[G0];return t||(t=e[G0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tn(e){e[ml]=!0}var M_=new Set,T_={};function Pa(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(T_[e]=t,e=0;e<t.length;e++)M_.add(t[e])}var BM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),H0={},X0={};function zM(e){return Hd.call(X0,e)?!0:Hd.call(H0,e)?!1:BM.test(e)?X0[e]=!0:(H0[e]=!0,!1)}function Uc(e,t,n){if(zM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function _c(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Zi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function ii(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function E_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function FM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wd(e){if(!e._valueTracker){var t=E_(e)?"checked":"value";e._valueTracker=FM(e,t,""+e[t])}}function A_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=E_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Qc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kM=/[\n"\\]/g;function ri(e){return e.replace(kM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function qd(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ii(t)):e.value!==""+ii(t)&&(e.value=""+ii(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Yd(e,r,ii(t)):n!=null?Yd(e,r,ii(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ii(o):e.removeAttribute("name")}function w_(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Wd(e);return}n=n!=null?""+ii(n):"",t=t!=null?""+ii(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Wd(e)}function Yd(e,t,n){t==="number"&&Qc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Mr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ii(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function C_(e,t,n){if(t!=null&&(t=""+ii(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ii(n):""}function R_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Q(92));if(Oo(i)){if(1<i.length)throw Error(Q(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ii(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Wd(e)}function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var VM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function W0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||VM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function D_(e,t,n){if(t!=null&&typeof t!="object")throw Error(Q(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&W0(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&W0(e,a,t[a])}function Bp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var GM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),HM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lc(e){return HM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ns(){}var Zd=null;function zp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dr=null,Tr=null;function q0(e){var t=Vr(e);if(t&&(e=t.stateNode)){var n=e[Nn]||null;t:switch(e=t.stateNode,t.type){case"input":if(qd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ri(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Nn]||null;if(!s)throw Error(Q(90));qd(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&A_(i)}break t;case"textarea":C_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Mr(e,!!n.multiple,t,!1)}}}var ld=!1;function N_(e,t,n){if(ld)return e(t,n);ld=!0;try{var i=e(t);return i}finally{if(ld=!1,(dr!==null||Tr!==null)&&(Ou(),dr&&(t=dr,e=Tr,Tr=dr=null,q0(t),e)))for(t=0;t<e.length;t++)q0(e[t])}}function jo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Nn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var os=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=!1;if(os)try{ar={},Object.defineProperty(ar,"passive",{get:function(){Jd=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{Jd=!1}var ar,Is=null,Fp=null,Oc=null;function U_(){if(Oc)return Oc;var e,t=Fp,n=t.length,i,s="value"in Is?Is.value:Is.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Oc=s.slice(e,1<i?1-i:void 0)}function Ic(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vc(){return!0}function Y0(){return!1}function Un(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?vc:Y0,this.isPropagationStopped=Y0,this}return be(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vc)},persist:function(){},isPersistent:vc}),t}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mu=Un(Ba),gl=be({},Ba,{view:0,detail:0}),XM=Un(gl),cd,ud,wo,Tu=be({},gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wo&&(wo&&e.type==="mousemove"?(cd=e.screenX-wo.screenX,ud=e.screenY-wo.screenY):ud=cd=0,wo=e),cd)},movementY:function(e){return"movementY"in e?e.movementY:ud}}),Z0=Un(Tu),WM=be({},Tu,{dataTransfer:0}),qM=Un(WM),YM=be({},gl,{relatedTarget:0}),hd=Un(YM),ZM=be({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),JM=Un(ZM),KM=be({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),QM=Un(KM),jM=be({},Ba,{data:0}),J0=Un(jM),$M={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=e1[e])?!!t[e]:!1}function kp(){return n1}var i1=be({},gl,{key:function(e){if(e.key){var t=$M[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ic(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?t1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kp,charCode:function(e){return e.type==="keypress"?Ic(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ic(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),s1=Un(i1),a1=be({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),K0=Un(a1),r1=be({},gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kp}),o1=Un(r1),l1=be({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),c1=Un(l1),u1=be({},Tu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),h1=Un(u1),f1=be({},Ba,{newState:0,oldState:0}),d1=Un(f1),p1=[9,13,27,32],Vp=os&&"CompositionEvent"in window,zo=null;os&&"documentMode"in document&&(zo=document.documentMode);var m1=os&&"TextEvent"in window&&!zo,L_=os&&(!Vp||zo&&8<zo&&11>=zo),Q0=" ",j0=!1;function O_(e,t){switch(e){case"keyup":return p1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function g1(e,t){switch(e){case"compositionend":return I_(t);case"keypress":return t.which!==32?null:(j0=!0,Q0);case"textInput":return e=t.data,e===Q0&&j0?null:e;default:return null}}function y1(e,t){if(pr)return e==="compositionend"||!Vp&&O_(e,t)?(e=U_(),Oc=Fp=Is=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return L_&&t.locale!=="ko"?null:t.data;default:return null}}var _1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_1[e.type]:t==="textarea"}function P_(e,t,n,i){dr?Tr?Tr.push(i):Tr=[i]:dr=i,t=mu(t,"onChange"),0<t.length&&(n=new Mu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Fo=null,$o=null;function v1(e){Nx(e,0)}function Eu(e){var t=Io(e);if(A_(t))return e}function ty(e,t){if(e==="change")return t}var B_=!1;os&&(os?(bc="oninput"in document,bc||(fd=document.createElement("div"),fd.setAttribute("oninput","return;"),bc=typeof fd.oninput=="function"),xc=bc):xc=!1,B_=xc&&(!document.documentMode||9<document.documentMode));var xc,bc,fd;function ey(){Fo&&(Fo.detachEvent("onpropertychange",z_),$o=Fo=null)}function z_(e){if(e.propertyName==="value"&&Eu($o)){var t=[];P_(t,$o,e,zp(e)),N_(v1,t)}}function x1(e,t,n){e==="focusin"?(ey(),Fo=t,$o=n,Fo.attachEvent("onpropertychange",z_)):e==="focusout"&&ey()}function b1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eu($o)}function S1(e,t){if(e==="click")return Eu(t)}function M1(e,t){if(e==="input"||e==="change")return Eu(t)}function T1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xn=typeof Object.is=="function"?Object.is:T1;function tl(e,t){if(Xn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Hd.call(t,s)||!Xn(e[s],t[s]))return!1}return!0}function ny(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iy(e,t){var n=ny(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=ny(n)}}function F_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?F_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function k_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qc(e.document)}return t}function Gp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var E1=os&&"documentMode"in document&&11>=document.documentMode,mr=null,Kd=null,ko=null,Qd=!1;function sy(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qd||mr==null||mr!==Qc(i)||(i=mr,"selectionStart"in i&&Gp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ko&&tl(ko,i)||(ko=i,i=mu(Kd,"onSelect"),0<i.length&&(t=new Mu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=mr)))}function ba(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gr={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionrun:ba("Transition","TransitionRun"),transitionstart:ba("Transition","TransitionStart"),transitioncancel:ba("Transition","TransitionCancel"),transitionend:ba("Transition","TransitionEnd")},dd={},V_={};os&&(V_=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function za(e){if(dd[e])return dd[e];if(!gr[e])return e;var t=gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in V_)return dd[e]=t[n];return e}var G_=za("animationend"),H_=za("animationiteration"),X_=za("animationstart"),A1=za("transitionrun"),w1=za("transitionstart"),C1=za("transitioncancel"),W_=za("transitionend"),q_=new Map,jd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jd.push("scrollEnd");function gi(e,t){q_.set(e,t),Pa(t,[e])}var jc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],yr=0,Hp=0;function Au(){for(var e=yr,t=Hp=yr=0;t<e;){var n=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var s=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Y_(n,s,a)}}function wu(e,t,n,i){ni[yr++]=e,ni[yr++]=t,ni[yr++]=n,ni[yr++]=i,Hp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Xp(e,t,n,i){return wu(e,t,n,i),$c(e)}function Fa(e,t){return wu(e,null,null,t),$c(e)}function Y_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Gn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function $c(e){if(50<Jo)throw Jo=0,vp=null,Error(Q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _r={};function R1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(e,t,n,i){return new R1(e,t,n,i)}function Wp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ss(e,t){var n=e.alternate;return n===null?(n=zn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Z_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Pc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Wp(e)&&(r=1);else if(typeof e=="string")r=UT(e,n,Ui.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Fd:return e=zn(31,n,t,s),e.elementType=Fd,e.lanes=a,e;case ur:return wa(n.children,s,a,t);case d_:r=8,s|=24;break;case Pd:return e=zn(12,n,t,s|2),e.elementType=Pd,e.lanes=a,e;case Bd:return e=zn(13,n,t,s),e.elementType=Bd,e.lanes=a,e;case zd:return e=zn(19,n,t,s),e.elementType=zd,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case es:r=10;break t;case p_:r=9;break t;case Np:r=11;break t;case Up:r=14;break t;case Cs:r=16,i=null;break t}r=29,n=Error(Q(130,e===null?"null":typeof e,"")),i=null}return t=zn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function wa(e,t,n,i){return e=zn(7,e,i,t),e.lanes=n,e}function pd(e,t,n){return e=zn(6,e,null,t),e.lanes=n,e}function J_(e){var t=zn(18,null,null,0);return t.stateNode=e,t}function md(e,t,n){return t=zn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ay=new WeakMap;function oi(e,t){if(typeof e=="object"&&e!==null){var n=ay.get(e);return n!==void 0?n:(t={value:e,source:t,stack:k0(t)},ay.set(e,t),t)}return{value:e,source:t,stack:k0(t)}}var vr=[],xr=0,tu=null,el=0,si=[],ai=0,Zs=null,Ri=1,Di="";function $i(e,t){vr[xr++]=el,vr[xr++]=tu,tu=e,el=t}function K_(e,t,n){si[ai++]=Ri,si[ai++]=Di,si[ai++]=Zs,Zs=e;var i=Ri;e=Di;var s=32-Gn(i)-1;i&=~(1<<s),n+=1;var a=32-Gn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ri=1<<32-Gn(t)+s|n<<s|i,Di=a+e}else Ri=1<<a|n<<s|i,Di=e}function qp(e){e.return!==null&&($i(e,1),K_(e,1,0))}function Yp(e){for(;e===tu;)tu=vr[--xr],vr[xr]=null,el=vr[--xr],vr[xr]=null;for(;e===Zs;)Zs=si[--ai],si[ai]=null,Di=si[--ai],si[ai]=null,Ri=si[--ai],si[ai]=null}function Q_(e,t){si[ai++]=Ri,si[ai++]=Di,si[ai++]=Zs,Ri=t.id,Di=t.overflow,Zs=e}var cn=null,xe=null,qt=!1,ks=null,li=!1,$d=Error(Q(519));function Js(e){var t=Error(Q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nl(oi(t,e)),$d}function ry(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ln]=e,t[Nn]=i,n){case"dialog":Vt("cancel",t),Vt("close",t);break;case"iframe":case"object":case"embed":Vt("load",t);break;case"video":case"audio":for(n=0;n<rl.length;n++)Vt(rl[n],t);break;case"source":Vt("error",t);break;case"img":case"image":case"link":Vt("error",t),Vt("load",t);break;case"details":Vt("toggle",t);break;case"input":Vt("invalid",t),w_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Vt("invalid",t);break;case"textarea":Vt("invalid",t),R_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Lx(t.textContent,n)?(i.popover!=null&&(Vt("beforetoggle",t),Vt("toggle",t)),i.onScroll!=null&&Vt("scroll",t),i.onScrollEnd!=null&&Vt("scrollend",t),i.onClick!=null&&(t.onclick=ns),t=!0):t=!1,t||Js(e,!0)}function oy(e){for(cn=e.return;cn;)switch(cn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:cn=cn.return}}function rr(e){if(e!==cn)return!1;if(!qt)return oy(e),qt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tp(e.type,e.memoizedProps)),n=!n),n&&xe&&Js(e),oy(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));xe=Jy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));xe=Jy(e)}else t===27?(t=xe,$s(e.type)?(e=Cp,Cp=null,xe=e):xe=t):xe=cn?ui(e.stateNode.nextSibling):null;return!0}function Na(){xe=cn=null,qt=!1}function gd(){var e=ks;return e!==null&&(Rn===null?Rn=e:Rn.push.apply(Rn,e),ks=null),e}function nl(e){ks===null?ks=[e]:ks.push(e)}var tp=Li(null),ka=null,is=null;function Ds(e,t,n){ye(tp,t._currentValue),t._currentValue=n}function as(e){e._currentValue=tp.current,en(tp)}function ep(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function np(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ep(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Q(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),ep(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Gr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Q(387));if(r=r.memoizedProps,r!==null){var o=s.type;Xn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Yc.current){if(r=s.alternate,r===null)throw Error(Q(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(ll):e=[ll])}s=s.return}e!==null&&np(t,e,n,i),t.flags|=262144}function eu(e){for(e=e.firstContext;e!==null;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){ka=e,is=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function un(e){return j_(ka,e)}function Sc(e,t){return ka===null&&Ua(e),j_(e,t)}function j_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},is===null){if(e===null)throw Error(Q(308));is=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else is=is.next=t;return n}var D1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},N1=Je.unstable_scheduleCallback,U1=Je.unstable_NormalPriority,Xe={$$typeof:es,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zp(){return{controller:new D1,data:new Map,refCount:0}}function yl(e){e.refCount--,e.refCount===0&&N1(U1,function(){e.controller.abort()})}var Vo=null,ip=0,Ur=0,Er=null;function L1(e,t){if(Vo===null){var n=Vo=[];ip=0,Ur=vm(),Er={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ip++,t.then(ly,ly),t}function ly(){if(--ip===0&&Vo!==null){Er!==null&&(Er.status="fulfilled");var e=Vo;Vo=null,Ur=0,Er=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function O1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var cy=Nt.S;Nt.S=function(e,t){fx=kn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&L1(e,t),cy!==null&&cy(e,t)};var Ca=Li(null);function Jp(){var e=Ca.current;return e!==null?e:pe.pooledCache}function Bc(e,t){t===null?ye(Ca,Ca.current):ye(Ca,t.pool)}function $_(){var e=Jp();return e===null?null:{parent:Xe._currentValue,pool:e}}var Hr=Error(Q(460)),Kp=Error(Q(474)),Cu=Error(Q(542)),nu={then:function(){}};function uy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ns,ns),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fy(e),e;default:if(typeof t.status=="string")t.then(ns,ns);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(Q(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fy(e),e}throw Ra=t,Hr}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ra=n,Hr):n}}var Ra=null;function hy(){if(Ra===null)throw Error(Q(459));var e=Ra;return Ra=null,e}function fy(e){if(e===Hr||e===Cu)throw Error(Q(483))}var Ar=null,il=0;function Mc(e){var t=il;return il+=1,Ar===null&&(Ar=[]),tv(Ar,e,t)}function Co(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Tc(e,t){throw t.$$typeof===xM?Error(Q(525)):(e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ev(e){function t(h,g){if(e){var b=h.deletions;b===null?(h.deletions=[g],h.flags|=16):b.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function i(h){for(var g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function s(h,g){return h=ss(h,g),h.index=0,h.sibling=null,h}function a(h,g,b){return h.index=b,e?(b=h.alternate,b!==null?(b=b.index,b<g?(h.flags|=67108866,g):b):(h.flags|=67108866,g)):(h.flags|=1048576,g)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,g,b,m){return g===null||g.tag!==6?(g=pd(b,h.mode,m),g.return=h,g):(g=s(g,b),g.return=h,g)}function l(h,g,b,m){var T=b.type;return T===ur?f(h,g,b.props.children,m,b.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Cs&&Ta(T)===g.type)?(g=s(g,b.props),Co(g,b),g.return=h,g):(g=Pc(b.type,b.key,b.props,null,h.mode,m),Co(g,b),g.return=h,g)}function c(h,g,b,m){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=md(b,h.mode,m),g.return=h,g):(g=s(g,b.children||[]),g.return=h,g)}function f(h,g,b,m,T){return g===null||g.tag!==7?(g=wa(b,h.mode,m,T),g.return=h,g):(g=s(g,b),g.return=h,g)}function p(h,g,b){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=pd(""+g,h.mode,b),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pc:return b=Pc(g.type,g.key,g.props,null,h.mode,b),Co(b,g),b.return=h,b;case Lo:return g=md(g,h.mode,b),g.return=h,g;case Cs:return g=Ta(g),p(h,g,b)}if(Oo(g)||Ao(g))return g=wa(g,h.mode,b,null),g.return=h,g;if(typeof g.then=="function")return p(h,Mc(g),b);if(g.$$typeof===es)return p(h,Sc(h,g),b);Tc(h,g)}return null}function u(h,g,b,m){var T=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return T!==null?null:o(h,g,""+b,m);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case pc:return b.key===T?l(h,g,b,m):null;case Lo:return b.key===T?c(h,g,b,m):null;case Cs:return b=Ta(b),u(h,g,b,m)}if(Oo(b)||Ao(b))return T!==null?null:f(h,g,b,m,null);if(typeof b.then=="function")return u(h,g,Mc(b),m);if(b.$$typeof===es)return u(h,g,Sc(h,b),m);Tc(h,b)}return null}function d(h,g,b,m,T){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return h=h.get(b)||null,o(g,h,""+m,T);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case pc:return h=h.get(m.key===null?b:m.key)||null,l(g,h,m,T);case Lo:return h=h.get(m.key===null?b:m.key)||null,c(g,h,m,T);case Cs:return m=Ta(m),d(h,g,b,m,T)}if(Oo(m)||Ao(m))return h=h.get(b)||null,f(g,h,m,T,null);if(typeof m.then=="function")return d(h,g,b,Mc(m),T);if(m.$$typeof===es)return d(h,g,b,Sc(g,m),T);Tc(g,m)}return null}function v(h,g,b,m){for(var T=null,E=null,w=g,_=g=0,A=null;w!==null&&_<b.length;_++){w.index>_?(A=w,w=null):A=w.sibling;var R=u(h,w,b[_],m);if(R===null){w===null&&(w=A);break}e&&w&&R.alternate===null&&t(h,w),g=a(R,g,_),E===null?T=R:E.sibling=R,E=R,w=A}if(_===b.length)return n(h,w),qt&&$i(h,_),T;if(w===null){for(;_<b.length;_++)w=p(h,b[_],m),w!==null&&(g=a(w,g,_),E===null?T=w:E.sibling=w,E=w);return qt&&$i(h,_),T}for(w=i(w);_<b.length;_++)A=d(w,h,_,b[_],m),A!==null&&(e&&A.alternate!==null&&w.delete(A.key===null?_:A.key),g=a(A,g,_),E===null?T=A:E.sibling=A,E=A);return e&&w.forEach(function(D){return t(h,D)}),qt&&$i(h,_),T}function M(h,g,b,m){if(b==null)throw Error(Q(151));for(var T=null,E=null,w=g,_=g=0,A=null,R=b.next();w!==null&&!R.done;_++,R=b.next()){w.index>_?(A=w,w=null):A=w.sibling;var D=u(h,w,R.value,m);if(D===null){w===null&&(w=A);break}e&&w&&D.alternate===null&&t(h,w),g=a(D,g,_),E===null?T=D:E.sibling=D,E=D,w=A}if(R.done)return n(h,w),qt&&$i(h,_),T;if(w===null){for(;!R.done;_++,R=b.next())R=p(h,R.value,m),R!==null&&(g=a(R,g,_),E===null?T=R:E.sibling=R,E=R);return qt&&$i(h,_),T}for(w=i(w);!R.done;_++,R=b.next())R=d(w,h,_,R.value,m),R!==null&&(e&&R.alternate!==null&&w.delete(R.key===null?_:R.key),g=a(R,g,_),E===null?T=R:E.sibling=R,E=R);return e&&w.forEach(function(O){return t(h,O)}),qt&&$i(h,_),T}function y(h,g,b,m){if(typeof b=="object"&&b!==null&&b.type===ur&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case pc:t:{for(var T=b.key;g!==null;){if(g.key===T){if(T=b.type,T===ur){if(g.tag===7){n(h,g.sibling),m=s(g,b.props.children),m.return=h,h=m;break t}}else if(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Cs&&Ta(T)===g.type){n(h,g.sibling),m=s(g,b.props),Co(m,b),m.return=h,h=m;break t}n(h,g);break}else t(h,g);g=g.sibling}b.type===ur?(m=wa(b.props.children,h.mode,m,b.key),m.return=h,h=m):(m=Pc(b.type,b.key,b.props,null,h.mode,m),Co(m,b),m.return=h,h=m)}return r(h);case Lo:t:{for(T=b.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){n(h,g.sibling),m=s(g,b.children||[]),m.return=h,h=m;break t}else{n(h,g);break}else t(h,g);g=g.sibling}m=md(b,h.mode,m),m.return=h,h=m}return r(h);case Cs:return b=Ta(b),y(h,g,b,m)}if(Oo(b))return v(h,g,b,m);if(Ao(b)){if(T=Ao(b),typeof T!="function")throw Error(Q(150));return b=T.call(b),M(h,g,b,m)}if(typeof b.then=="function")return y(h,g,Mc(b),m);if(b.$$typeof===es)return y(h,g,Sc(h,b),m);Tc(h,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,g!==null&&g.tag===6?(n(h,g.sibling),m=s(g,b),m.return=h,h=m):(n(h,g),m=pd(b,h.mode,m),m.return=h,h=m),r(h)):n(h,g)}return function(h,g,b,m){try{il=0;var T=y(h,g,b,m);return Ar=null,T}catch(w){if(w===Hr||w===Cu)throw w;var E=zn(29,w,null,h.mode);return E.lanes=m,E.return=h,E}finally{}}}var La=ev(!0),nv=ev(!1),Rs=!1;function Qp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ee&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=$c(e),Y_(e,null,n),t}return wu(e,i,t,n),$c(e)}function Go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,x_(e,n)}}function yd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ap=!1;function Ho(){if(ap){var e=Er;if(e!==null)throw e}}function Xo(e,t,n,i){ap=!1;var s=e.updateQueue;Rs=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(Xt&u)===u:(i&u)===u){u!==0&&u===Ur&&(ap=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,M=o;u=t;var y=n;switch(M.tag){case 1:if(v=M.payload,typeof v=="function"){p=v.call(y,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,u=typeof v=="function"?v.call(y,p,u):v,u==null)break t;p=be({},p,u);break t;case 2:Rs=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),Qs|=r,e.lanes=r,e.memoizedState=p}}function iv(e,t){if(typeof e!="function")throw Error(Q(191,e));e.call(t)}function sv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)iv(n[e],t)}var Lr=Li(null),iu=Li(0);function dy(e,t){e=hs,ye(iu,e),ye(Lr,t),hs=e|t.baseLanes}function rp(){ye(iu,hs),ye(Lr,Lr.current)}function jp(){hs=iu.current,en(Lr),en(iu)}var Wn=Li(null),ci=null;function Ns(e){var t=e.alternate;ye(Be,Be.current&1),ye(Wn,e),ci===null&&(t===null||Lr.current!==null||t.memoizedState!==null)&&(ci=e)}function op(e){ye(Be,Be.current),ye(Wn,e),ci===null&&(ci=e)}function av(e){e.tag===22?(ye(Be,Be.current),ye(Wn,e),ci===null&&(ci=e)):Us(e)}function Us(){ye(Be,Be.current),ye(Wn,Wn.current)}function Bn(e){en(Wn),ci===e&&(ci=null),en(Be)}var Be=Li(0);function su(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ap(n)||wp(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ls=0,zt=null,ue=null,Ge=null,au=!1,wr=!1,Oa=!1,ru=0,sl=0,Cr=null,I1=0;function De(){throw Error(Q(321))}function $p(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xn(e[n],t[n]))return!1;return!0}function tm(e,t,n,i,s,a){return ls=a,zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nt.H=e===null||e.memoizedState===null?Pv:hm,Oa=!1,a=n(i,s),Oa=!1,wr&&(a=ov(t,n,i,s)),rv(e),a}function rv(e){Nt.H=al;var t=ue!==null&&ue.next!==null;if(ls=0,Ge=ue=zt=null,au=!1,sl=0,Cr=null,t)throw Error(Q(300));e===null||We||(e=e.dependencies,e!==null&&eu(e)&&(We=!0))}function ov(e,t,n,i){zt=e;var s=0;do{if(wr&&(Cr=null),sl=0,wr=!1,25<=s)throw Error(Q(301));if(s+=1,Ge=ue=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Nt.H=Bv,a=t(n,i)}while(wr);return a}function P1(){var e=Nt.H,t=e.useState()[0];return t=typeof t.then=="function"?_l(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(zt.flags|=1024),t}function em(){var e=ru!==0;return ru=0,e}function nm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function im(e){if(au){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}au=!1}ls=0,Ge=ue=zt=null,wr=!1,sl=ru=0,Cr=null}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?zt.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function ze(){if(ue===null){var e=zt.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=Ge===null?zt.memoizedState:Ge.next;if(t!==null)Ge=t,ue=e;else{if(e===null)throw zt.alternate===null?Error(Q(467)):Error(Q(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Ge===null?zt.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _l(e){var t=sl;return sl+=1,Cr===null&&(Cr=[]),e=tv(Cr,e,t),t=zt,(Ge===null?t.memoizedState:Ge.next)===null&&(t=t.alternate,Nt.H=t===null||t.memoizedState===null?Pv:hm),e}function Du(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _l(e);if(e.$$typeof===es)return un(e)}throw Error(Q(438,String(e)))}function sm(e){var t=null,n=zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ru(),zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=bM;return t.index++,n}function cs(e,t){return typeof t=="function"?t(e):t}function zc(e){var t=ze();return am(t,ue,e)}function am(e,t,n){var i=e.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Xt&p)===p:(ls&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Ur&&(f=!0);else if((ls&u)===u){c=c.next,u===Ur&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,zt.lanes|=u,Qs|=u;p=c.action,Oa&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,zt.lanes|=p,Qs|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Xn(a,e.memoizedState)&&(We=!0,f&&(n=Er,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function _d(e){var t=ze(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Xn(a,t.memoizedState)||(We=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function lv(e,t,n){var i=zt,s=ze(),a=qt;if(a){if(n===void 0)throw Error(Q(407));n=n()}else n=t();var r=!Xn((ue||s).memoizedState,n);if(r&&(s.memoizedState=n,We=!0),s=s.queue,rm(hv.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||Ge!==null&&Ge.memoizedState.tag&1){if(i.flags|=2048,Or(9,{destroy:void 0},uv.bind(null,i,s,n,t),null),pe===null)throw Error(Q(349));a||(ls&127)!==0||cv(i,t,n)}return n}function cv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=zt.updateQueue,t===null?(t=Ru(),zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function uv(e,t,n,i){t.value=n,t.getSnapshot=i,fv(t)&&dv(e)}function hv(e,t,n){return n(function(){fv(t)&&dv(e)})}function fv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xn(e,n)}catch{return!0}}function dv(e){var t=Fa(e,2);t!==null&&Dn(t,e,2)}function lp(e){var t=Sn();if(typeof e=="function"){var n=e;if(e=n(),Oa){Os(!0);try{n()}finally{Os(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:e},t}function pv(e,t,n,i){return e.baseState=n,am(e,ue,typeof i=="function"?i:cs)}function B1(e,t,n,i,s){if(Uu(e))throw Error(Q(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Nt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,mv(t,a)):(a.next=n.next,t.pending=n.next=a)}}function mv(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Nt.T,r={};Nt.T=r;try{var o=n(s,i),l=Nt.S;l!==null&&l(r,o),py(e,t,o)}catch(c){cp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Nt.T=a}}else try{a=n(s,i),py(e,t,a)}catch(c){cp(e,t,c)}}function py(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){my(e,t,i)},function(i){return cp(e,t,i)}):my(e,t,n)}function my(e,t,n){t.status="fulfilled",t.value=n,gv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,mv(e,n)))}function cp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,gv(t),t=t.next;while(t!==i)}e.action=null}function gv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function yv(e,t){return t}function gy(e,t){if(qt){var n=pe.formState;if(n!==null){t:{var i=zt;if(qt){if(xe){e:{for(var s=xe,a=li;s.nodeType!==8;){if(!a){s=null;break e}if(s=ui(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){xe=ui(s.nextSibling),i=s.data==="F!";break t}}Js(i)}i=!1}i&&(t=n[0])}}return n=Sn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yv,lastRenderedState:t},n.queue=i,n=Lv.bind(null,zt,i),i.dispatch=n,i=lp(!1),a=um.bind(null,zt,!1,i.queue),i=Sn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=B1.bind(null,zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function yy(e){var t=ze();return _v(t,ue,e)}function _v(e,t,n){if(t=am(e,t,yv)[0],e=zc(cs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=_l(t)}catch(r){throw r===Hr?Cu:r}else i=t;t=ze();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(zt.flags|=2048,Or(9,{destroy:void 0},z1.bind(null,s,n),null)),[i,a,e]}function z1(e,t){e.action=t}function _y(e){var t=ze(),n=ue;if(n!==null)return _v(t,n,e);ze(),t=t.memoizedState,n=ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Or(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=zt.updateQueue,t===null&&(t=Ru(),zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function vv(){return ze().memoizedState}function Fc(e,t,n,i){var s=Sn();zt.flags|=e,s.memoizedState=Or(1|t,{destroy:void 0},n,i===void 0?null:i)}function Nu(e,t,n,i){var s=ze();i=i===void 0?null:i;var a=s.memoizedState.inst;ue!==null&&i!==null&&$p(i,ue.memoizedState.deps)?s.memoizedState=Or(t,a,n,i):(zt.flags|=e,s.memoizedState=Or(1|t,a,n,i))}function vy(e,t){Fc(8390656,8,e,t)}function rm(e,t){Nu(2048,8,e,t)}function F1(e){zt.flags|=4;var t=zt.updateQueue;if(t===null)t=Ru(),zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function xv(e){var t=ze().memoizedState;return F1({ref:t,nextImpl:e}),function(){if((ee&2)!==0)throw Error(Q(440));return t.impl.apply(void 0,arguments)}}function bv(e,t){return Nu(4,2,e,t)}function Sv(e,t){return Nu(4,4,e,t)}function Mv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tv(e,t,n){n=n!=null?n.concat([e]):null,Nu(4,4,Mv.bind(null,t,e),n)}function om(){}function Ev(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&$p(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Av(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&$p(t,i[1]))return i[0];if(i=e(),Oa){Os(!0);try{e()}finally{Os(!1)}}return n.memoizedState=[i,t],i}function lm(e,t,n){return n===void 0||(ls&1073741824)!==0&&(Xt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=px(),zt.lanes|=e,Qs|=e,n)}function wv(e,t,n,i){return Xn(n,t)?n:Lr.current!==null?(e=lm(e,n,i),Xn(e,t)||(We=!0),e):(ls&42)===0||(ls&1073741824)!==0&&(Xt&261930)===0?(We=!0,e.memoizedState=n):(e=px(),zt.lanes|=e,Qs|=e,t)}function Cv(e,t,n,i,s){var a=ne.p;ne.p=a!==0&&8>a?a:8;var r=Nt.T,o={};Nt.T=o,um(e,!1,t,n);try{var l=s(),c=Nt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=O1(l,i);Wo(e,t,f,Hn(e))}else Wo(e,t,i,Hn(e))}catch(p){Wo(e,t,{then:function(){},status:"rejected",reason:p},Hn())}finally{ne.p=a,r!==null&&o.types!==null&&(r.types=o.types),Nt.T=r}}function k1(){}function up(e,t,n,i){if(e.tag!==5)throw Error(Q(476));var s=Rv(e).queue;Cv(e,s,t,Aa,n===null?k1:function(){return Dv(e),n(i)})}function Rv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Aa,baseState:Aa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:Aa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dv(e){var t=Rv(e);t.next===null&&(t=e.alternate.memoizedState),Wo(e,t.next.queue,{},Hn())}function cm(){return un(ll)}function Nv(){return ze().memoizedState}function Uv(){return ze().memoizedState}function V1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Hn();e=Vs(n);var i=Gs(t,e,n);i!==null&&(Dn(i,t,n),Go(i,t,n)),t={cache:Zp()},e.payload=t;return}t=t.return}}function G1(e,t,n){var i=Hn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Uu(e)?Ov(t,n):(n=Xp(e,t,n,i),n!==null&&(Dn(n,e,i),Iv(n,t,i)))}function Lv(e,t,n){var i=Hn();Wo(e,t,n,i)}function Wo(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uu(e))Ov(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Xn(o,r))return wu(e,t,s,0),pe===null&&Au(),!1}catch{}finally{}if(n=Xp(e,t,s,i),n!==null)return Dn(n,e,i),Iv(n,t,i),!0}return!1}function um(e,t,n,i){if(i={lane:2,revertLane:vm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Uu(e)){if(t)throw Error(Q(479))}else t=Xp(e,n,i,2),t!==null&&Dn(t,e,2)}function Uu(e){var t=e.alternate;return e===zt||t!==null&&t===zt}function Ov(e,t){wr=au=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Iv(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,x_(e,n)}}var al={readContext:un,use:Du,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};al.useEffectEvent=De;var Pv={readContext:un,use:Du,useCallback:function(e,t){return Sn().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:vy,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Fc(4194308,4,Mv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fc(4194308,4,e,t)},useInsertionEffect:function(e,t){Fc(4,2,e,t)},useMemo:function(e,t){var n=Sn();t=t===void 0?null:t;var i=e();if(Oa){Os(!0);try{e()}finally{Os(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Sn();if(n!==void 0){var s=n(t);if(Oa){Os(!0);try{n(t)}finally{Os(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=G1.bind(null,zt,e),[i.memoizedState,e]},useRef:function(e){var t=Sn();return e={current:e},t.memoizedState=e},useState:function(e){e=lp(e);var t=e.queue,n=Lv.bind(null,zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:om,useDeferredValue:function(e,t){var n=Sn();return lm(n,e,t)},useTransition:function(){var e=lp(!1);return e=Cv.bind(null,zt,e.queue,!0,!1),Sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=zt,s=Sn();if(qt){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),pe===null)throw Error(Q(349));(Xt&127)!==0||cv(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,vy(hv.bind(null,i,a,e),[e]),i.flags|=2048,Or(9,{destroy:void 0},uv.bind(null,i,a,n,t),null),n},useId:function(){var e=Sn(),t=pe.identifierPrefix;if(qt){var n=Di,i=Ri;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ru++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=I1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:cm,useFormState:gy,useActionState:gy,useOptimistic:function(e){var t=Sn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=um.bind(null,zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:sm,useCacheRefresh:function(){return Sn().memoizedState=V1.bind(null,zt)},useEffectEvent:function(e){var t=Sn(),n={impl:e};return t.memoizedState=n,function(){if((ee&2)!==0)throw Error(Q(440));return n.impl.apply(void 0,arguments)}}},hm={readContext:un,use:Du,useCallback:Ev,useContext:un,useEffect:rm,useImperativeHandle:Tv,useInsertionEffect:bv,useLayoutEffect:Sv,useMemo:Av,useReducer:zc,useRef:vv,useState:function(){return zc(cs)},useDebugValue:om,useDeferredValue:function(e,t){var n=ze();return wv(n,ue.memoizedState,e,t)},useTransition:function(){var e=zc(cs)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:_l(e),t]},useSyncExternalStore:lv,useId:Nv,useHostTransitionStatus:cm,useFormState:yy,useActionState:yy,useOptimistic:function(e,t){var n=ze();return pv(n,ue,e,t)},useMemoCache:sm,useCacheRefresh:Uv};hm.useEffectEvent=xv;var Bv={readContext:un,use:Du,useCallback:Ev,useContext:un,useEffect:rm,useImperativeHandle:Tv,useInsertionEffect:bv,useLayoutEffect:Sv,useMemo:Av,useReducer:_d,useRef:vv,useState:function(){return _d(cs)},useDebugValue:om,useDeferredValue:function(e,t){var n=ze();return ue===null?lm(n,e,t):wv(n,ue.memoizedState,e,t)},useTransition:function(){var e=_d(cs)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:_l(e),t]},useSyncExternalStore:lv,useId:Nv,useHostTransitionStatus:cm,useFormState:_y,useActionState:_y,useOptimistic:function(e,t){var n=ze();return ue!==null?pv(n,ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:sm,useCacheRefresh:Uv};Bv.useEffectEvent=xv;function vd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:be({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Hn(),s=Vs(i);s.payload=t,n!=null&&(s.callback=n),t=Gs(e,s,i),t!==null&&(Dn(t,e,i),Go(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Hn(),s=Vs(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Gs(e,s,i),t!==null&&(Dn(t,e,i),Go(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Hn(),i=Vs(n);i.tag=2,t!=null&&(i.callback=t),t=Gs(e,i,n),t!==null&&(Dn(t,e,n),Go(t,e,n))}};function xy(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!tl(n,i)||!tl(s,a):!0}function by(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&hp.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=be({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function zv(e){jc(e)}function Fv(e){console.error(e)}function kv(e){jc(e)}function ou(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Sy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function fp(e,t,n){return n=Vs(n),n.tag=3,n.payload={element:null},n.callback=function(){ou(e,t)},n}function Vv(e){return e=Vs(e),e.tag=3,e}function Gv(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Sy(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Sy(t,n,i),typeof s!="function"&&(Hs===null?Hs=new Set([this]):Hs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function H1(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Gr(t,n,s,!0),n=Wn.current,n!==null){switch(n.tag){case 31:case 13:return ci===null?fu():n.alternate===null&&Ne===0&&(Ne=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===nu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Dd(e,i,s)),!1;case 22:return n.flags|=65536,i===nu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Dd(e,i,s)),!1}throw Error(Q(435,n.tag))}return Dd(e,i,s),fu(),!1}if(qt)return t=Wn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==$d&&(e=Error(Q(422),{cause:i}),nl(oi(e,n)))):(i!==$d&&(t=Error(Q(423),{cause:i}),nl(oi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=oi(i,n),s=fp(e.stateNode,i,s),yd(e,s),Ne!==4&&(Ne=2)),!1;var a=Error(Q(520),{cause:i});if(a=oi(a,n),Zo===null?Zo=[a]:Zo.push(a),Ne!==4&&(Ne=2),t===null)return!0;i=oi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=fp(n.stateNode,i,e),yd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Hs===null||!Hs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Vv(s),Gv(s,e,n,i),yd(n,s),!1}n=n.return}while(n!==null);return!1}var fm=Error(Q(461)),We=!1;function on(e,t,n,i){t.child=e===null?nv(t,null,n,i):La(t,e.child,n,i)}function My(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ua(t),i=tm(e,t,n,r,a,s),o=em(),e!==null&&!We?(nm(e,t,s),us(e,t,s)):(qt&&o&&qp(t),t.flags|=1,on(e,t,i,s),t.child)}function Ty(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Wp(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Hv(e,t,a,i,s)):(e=Pc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!dm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:tl,n(r,i)&&e.ref===t.ref)return us(e,t,s)}return t.flags|=1,e=ss(a,i),e.ref=t.ref,e.return=t,t.child=e}function Hv(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(tl(a,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=a,dm(e,s))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,us(e,t,s)}return dp(e,t,n,i,s)}function Xv(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Ey(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bc(t,a!==null?a.cachePool:null),a!==null?dy(t,a):rp(),av(t);else return i=t.lanes=536870912,Ey(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Bc(t,a.cachePool),dy(t,a),Us(t),t.memoizedState=null):(e!==null&&Bc(t,null),rp(),Us(t));return on(e,t,s,n),t.child}function Po(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ey(e,t,n,i,s){var a=Jp();return a=a===null?null:{parent:Xe._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Bc(t,null),rp(),av(t),e!==null&&Gr(e,t,i,!0),t.childLanes=s,null}function kc(e,t){return t=lu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ay(e,t,n){return La(t,e.child,null,n),e=kc(t,t.pendingProps),e.flags|=2,Bn(t),t.memoizedState=null,e}function X1(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(qt){if(i.mode==="hidden")return e=kc(t,i),t.lanes=536870912,Po(null,e);if(op(t),(e=xe)?(e=Px(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zs!==null?{id:Ri,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},n=J_(e),n.return=t,t.child=n,cn=t,xe=null)):e=null,e===null)throw Js(t);return t.lanes=536870912,null}return kc(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(op(t),s)if(t.flags&256)t.flags&=-257,t=Ay(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Q(558));else if(We||Gr(e,t,n,!1),s=(n&e.childLanes)!==0,We||s){if(i=pe,i!==null&&(r=b_(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Fa(e,r),Dn(i,e,r),fm;fu(),t=Ay(e,t,n)}else e=a.treeContext,xe=ui(r.nextSibling),cn=t,qt=!0,ks=null,li=!1,e!==null&&Q_(t,e),t=kc(t,i),t.flags|=4096;return t}return e=ss(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Q(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function dp(e,t,n,i,s){return Ua(t),n=tm(e,t,n,i,void 0,s),i=em(),e!==null&&!We?(nm(e,t,s),us(e,t,s)):(qt&&i&&qp(t),t.flags|=1,on(e,t,n,s),t.child)}function wy(e,t,n,i,s,a){return Ua(t),t.updateQueue=null,n=ov(t,i,n,s),rv(e),i=em(),e!==null&&!We?(nm(e,t,a),us(e,t,a)):(qt&&i&&qp(t),t.flags|=1,on(e,t,n,a),t.child)}function Cy(e,t,n,i,s){if(Ua(t),t.stateNode===null){var a=_r,r=n.contextType;typeof r=="object"&&r!==null&&(a=un(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=hp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Qp(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?un(r):_r,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(vd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&hp.enqueueReplaceState(a,a.state,null),Xo(t,i,a,s),Ho(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Ia(n,o);a.props=l;var c=a.context,f=n.contextType;r=_r,typeof f=="object"&&f!==null&&(r=un(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&by(t,a,i,r),Rs=!1;var u=t.memoizedState;a.state=u,Xo(t,i,a,s),Ho(),c=t.memoizedState,o||u!==c||Rs?(typeof p=="function"&&(vd(t,n,p,i),c=t.memoizedState),(l=Rs||xy(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,sp(e,t),r=t.memoizedProps,f=Ia(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=_r,typeof c=="object"&&c!==null&&(l=un(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&by(t,a,i,l),Rs=!1,u=t.memoizedState,a.state=u,Xo(t,i,a,s),Ho();var d=t.memoizedState;r!==p||u!==d||Rs||e!==null&&e.dependencies!==null&&eu(e.dependencies)?(typeof o=="function"&&(vd(t,n,o,i),d=t.memoizedState),(f=Rs||xy(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&eu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Vc(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=La(t,e.child,null,s),t.child=La(t,null,n,s)):on(e,t,n,s),t.memoizedState=a.state,e=t.child):e=us(e,t,s),e}function Ry(e,t,n,i){return Na(),t.flags|=256,on(e,t,n,i),t.child}var xd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bd(e){return{baseLanes:e,cachePool:$_()}}function Sd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Fn),e}function Wv(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(qt){if(s?Ns(t):Us(t),(e=xe)?(e=Px(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Zs!==null?{id:Ri,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},n=J_(e),n.return=t,t.child=n,cn=t,xe=null)):e=null,e===null)throw Js(t);return wp(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Us(t),s=t.mode,o=lu({mode:"hidden",children:o},s),i=wa(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=bd(n),i.childLanes=Sd(e,r,n),t.memoizedState=xd,Po(null,i)):(Ns(t),pp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Ns(t),t.flags&=-257,t=Md(e,t,n)):t.memoizedState!==null?(Us(t),t.child=e.child,t.flags|=128,t=null):(Us(t),o=i.fallback,s=t.mode,i=lu({mode:"visible",children:i.children},s),o=wa(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,La(t,e.child,null,n),i=t.child,i.memoizedState=bd(n),i.childLanes=Sd(e,r,n),t.memoizedState=xd,t=Po(null,i));else if(Ns(t),wp(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(Q(419)),i.stack="",i.digest=r,nl({value:i,source:null,stack:null}),t=Md(e,t,n)}else if(We||Gr(e,t,n,!1),r=(n&e.childLanes)!==0,We||r){if(r=pe,r!==null&&(i=b_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Fa(e,i),Dn(r,e,i),fm;Ap(o)||fu(),t=Md(e,t,n)}else Ap(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,xe=ui(o.nextSibling),cn=t,qt=!0,ks=null,li=!1,e!==null&&Q_(t,e),t=pp(t,i.children),t.flags|=4096);return t}return s?(Us(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=ss(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ss(c,o):(o=wa(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Po(null,i),i=t.child,o=e.child.memoizedState,o===null?o=bd(n):(s=o.cachePool,s!==null?(l=Xe._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=$_(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Sd(e,r,n),t.memoizedState=xd,Po(e.child,i)):(Ns(t),n=e.child,e=n.sibling,n=ss(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function pp(e,t){return t=lu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function lu(e,t){return e=zn(22,e,null,t),e.lanes=0,e}function Md(e,t,n){return La(t,e.child,null,n),e=pp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ep(e.return,t,n)}function Td(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function qv(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Be.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ye(Be,r),on(e,t,i,n),i=qt?el:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dy(e,n,t);else if(e.tag===19)Dy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&su(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Td(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&su(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Td(t,!0,n,null,a,i);break;case"together":Td(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function us(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qs|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Gr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=ss(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ss(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&eu(e)))}function W1(e,t,n){switch(t.tag){case 3:Zc(t,t.stateNode.containerInfo),Ds(t,Xe,e.memoizedState.cache),Na();break;case 27:case 5:Gd(t);break;case 4:Zc(t,t.stateNode.containerInfo);break;case 10:Ds(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,op(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ns(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Wv(e,t,n):(Ns(t),e=us(e,t,n),e!==null?e.sibling:null);Ns(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Gr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return qv(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ye(Be,Be.current),i)break;return null;case 22:return t.lanes=0,Xv(e,t,n,t.pendingProps);case 24:Ds(t,Xe,e.memoizedState.cache)}return us(e,t,n)}function Yv(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!dm(e,n)&&(t.flags&128)===0)return We=!1,W1(e,t,n);We=(e.flags&131072)!==0}else We=!1,qt&&(t.flags&1048576)!==0&&K_(t,el,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e=="function")Wp(e)?(i=Ia(e,i),t.tag=1,t=Cy(null,t,e,i,n)):(t.tag=0,t=dp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Np){t.tag=11,t=My(null,t,e,i,n);break t}else if(s===Up){t.tag=14,t=Ty(null,t,e,i,n);break t}}throw t=kd(e)||e,Error(Q(306,t,""))}}return t;case 0:return dp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Ia(i,t.pendingProps),Cy(e,t,i,s,n);case 3:t:{if(Zc(t,t.stateNode.containerInfo),e===null)throw Error(Q(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,sp(e,t),Xo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ds(t,Xe,i),i!==a.cache&&np(t,[Xe],n,!0),Ho(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Ry(e,t,i,n);break t}else if(i!==s){s=oi(Error(Q(424)),t),nl(s),t=Ry(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(xe=ui(e.firstChild),cn=t,qt=!0,ks=null,li=!0,n=nv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Na(),i===s){t=us(e,t,n);break t}on(e,t,i,n)}t=t.child}return t;case 26:return Vc(e,t),e===null?(n=jy(t.type,null,t.pendingProps,null))?t.memoizedState=n:qt||(n=t.type,e=t.pendingProps,i=gu(Fs.current).createElement(n),i[ln]=t,i[Nn]=e,hn(i,n,e),tn(i),t.stateNode=i):t.memoizedState=jy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gd(t),e===null&&qt&&(i=t.stateNode=Bx(t.type,t.pendingProps,Fs.current),cn=t,li=!0,s=xe,$s(t.type)?(Cp=s,xe=ui(i.firstChild)):xe=s),on(e,t,t.pendingProps.children,n),Vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&qt&&((s=i=xe)&&(i=vT(i,t.type,t.pendingProps,li),i!==null?(t.stateNode=i,cn=t,xe=ui(i.firstChild),li=!1,s=!0):s=!1),s||Js(t)),Gd(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Tp(s,a)?i=null:r!==null&&Tp(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=tm(e,t,P1,null,null,n),ll._currentValue=s),Vc(e,t),on(e,t,i,n),t.child;case 6:return e===null&&qt&&((e=n=xe)&&(n=xT(n,t.pendingProps,li),n!==null?(t.stateNode=n,cn=t,xe=null,e=!0):e=!1),e||Js(t)),null;case 13:return Wv(e,t,n);case 4:return Zc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=La(t,null,i,n):on(e,t,i,n),t.child;case 11:return My(e,t,t.type,t.pendingProps,n);case 7:return on(e,t,t.pendingProps,n),t.child;case 8:return on(e,t,t.pendingProps.children,n),t.child;case 12:return on(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ds(t,t.type,i.value),on(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ua(t),s=un(s),i=i(s),t.flags|=1,on(e,t,i,n),t.child;case 14:return Ty(e,t,t.type,t.pendingProps,n);case 15:return Hv(e,t,t.type,t.pendingProps,n);case 19:return qv(e,t,n);case 31:return X1(e,t,n);case 22:return Xv(e,t,n,t.pendingProps);case 24:return Ua(t),i=un(Xe),e===null?(s=Jp(),s===null&&(s=pe,a=Zp(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Qp(t),Ds(t,Xe,s)):((e.lanes&n)!==0&&(sp(e,t),Xo(t,null,null,n),Ho()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ds(t,Xe,i)):(i=a.cache,Ds(t,Xe,i),i!==s.cache&&np(t,[Xe],n,!0))),on(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Q(156,t.tag))}function Ji(e){e.flags|=4}function Ed(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(yx())e.flags|=8192;else throw Ra=nu,Kp}else e.flags&=-16777217}function Ny(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kx(t))if(yx())e.flags|=8192;else throw Ra=nu,Kp}function Ec(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?__():536870912,e.lanes|=t,Ir|=t)}function Ro(e,t){if(!qt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function q1(e,t,n){var i=t.pendingProps;switch(Yp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return ve(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),as(Xe),Rr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(rr(t)?Ji(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gd())),ve(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Ji(t),a!==null?(ve(t),Ny(t,a)):(ve(t),Ed(t,s,null,i,n))):a?a!==e.memoizedState?(Ji(t),ve(t),Ny(t,a)):(ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ji(t),ve(t),Ed(t,s,e,i,n)),null;case 27:if(Jc(t),n=Fs.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ji(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return ve(t),null}e=Ui.current,rr(t)?ry(t,e):(e=Bx(s,i,n),t.stateNode=e,Ji(t))}return ve(t),null;case 5:if(Jc(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ji(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return ve(t),null}if(a=Ui.current,rr(t))ry(t,a);else{var r=gu(Fs.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[ln]=t,a[Nn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(hn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ji(t)}}return ve(t),Ed(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ji(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Q(166));if(e=Fs.current,rr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=cn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[ln]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Lx(e.nodeValue,n)),e||Js(t,!0)}else e=gu(e).createTextNode(i),e[ln]=t,t.stateNode=e}return ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=rr(t),n!==null){if(e===null){if(!i)throw Error(Q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(557));e[ln]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),e=!1}else n=gd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Bn(t),t):(Bn(t),null);if((t.flags&128)!==0)throw Error(Q(558))}return ve(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=rr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[ln]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),s=!1}else s=gd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Bn(t),t):(Bn(t),null)}return Bn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ec(t,t.updateQueue),ve(t),null);case 4:return Rr(),e===null&&xm(t.stateNode.containerInfo),ve(t),null;case 10:return as(t.type),ve(t),null;case 19:if(en(Be),i=t.memoizedState,i===null)return ve(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Ro(i,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=su(e),a!==null){for(t.flags|=128,Ro(i,!1),e=a.updateQueue,t.updateQueue=e,Ec(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Z_(n,e),n=n.sibling;return ye(Be,Be.current&1|2),qt&&$i(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&kn()>uu&&(t.flags|=128,s=!0,Ro(i,!1),t.lanes=4194304)}else{if(!s)if(e=su(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Ec(t,e),Ro(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!qt)return ve(t),null}else 2*kn()-i.renderingStartTime>uu&&n!==536870912&&(t.flags|=128,s=!0,Ro(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=kn(),e.sibling=null,n=Be.current,ye(Be,s?n&1|2:n&1),qt&&$i(t,i.treeForkCount),e):(ve(t),null);case 22:case 23:return Bn(t),jp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),n=t.updateQueue,n!==null&&Ec(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&en(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),as(Xe),ve(t),null;case 25:return null;case 30:return null}throw Error(Q(156,t.tag))}function Y1(e,t){switch(Yp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return as(Xe),Rr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Jc(t),null;case 31:if(t.memoizedState!==null){if(Bn(t),t.alternate===null)throw Error(Q(340));Na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Bn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return en(Be),null;case 4:return Rr(),null;case 10:return as(t.type),null;case 22:case 23:return Bn(t),jp(),e!==null&&en(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return as(Xe),null;case 25:return null;default:return null}}function Zv(e,t){switch(Yp(t),t.tag){case 3:as(Xe),Rr();break;case 26:case 27:case 5:Jc(t);break;case 4:Rr();break;case 31:t.memoizedState!==null&&Bn(t);break;case 13:Bn(t);break;case 19:en(Be);break;case 10:as(t.type);break;case 22:case 23:Bn(t),jp(),e!==null&&en(Ca);break;case 24:as(Xe)}}function vl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){re(t,t.return,o)}}function Ks(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){re(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){re(t,t.return,f)}}function Jv(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{sv(t,n)}catch(i){re(e,e.return,i)}}}function Kv(e,t,n){n.props=Ia(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){re(e,t,i)}}function qo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){re(e,t,s)}}function Ni(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){re(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){re(e,t,s)}else n.current=null}function Qv(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){re(e,e.return,s)}}function Ad(e,t,n){try{var i=e.stateNode;dT(i,e.type,n,t),i[Nn]=t}catch(s){re(e,e.return,s)}}function jv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$s(e.type)||e.tag===4}function wd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||jv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$s(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ns));else if(i!==4&&(i===27&&$s(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(mp(e,t,n),e=e.sibling;e!==null;)mp(e,t,n),e=e.sibling}function cu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&$s(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(cu(e,t,n),e=e.sibling;e!==null;)cu(e,t,n),e=e.sibling}function $v(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);hn(t,i,n),t[ln]=e,t[Nn]=n}catch(a){re(e,e.return,a)}}var ts=!1,He=!1,Cd=!1,Uy=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Z1(e,t){if(e=e.containerInfo,Sp=xu,e=k_(e),Gp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,f=0,p=e,u=null;e:for(;;){for(var d;p!==n||s!==0&&p.nodeType!==3||(o=r+s),p!==a||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===e)break e;if(u===n&&++c===s&&(o=r),u===a&&++f===i&&(l=r),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mp={focusedElem:e,selectionRange:n},xu=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var v=Ia(n.type,s);e=i.getSnapshotBeforeUpdate(v,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){re(n,n.return,M)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ep(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ep(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(Q(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function tx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Qi(e,n),i&4&&vl(5,n);break;case 1:if(Qi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){re(n,n.return,r)}else{var s=Ia(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){re(n,n.return,r)}}i&64&&Jv(n),i&512&&qo(n,n.return);break;case 3:if(Qi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{sv(e,t)}catch(r){re(n,n.return,r)}}break;case 27:t===null&&i&4&&$v(n);case 26:case 5:Qi(e,n),t===null&&i&4&&Qv(n),i&512&&qo(n,n.return);break;case 12:Qi(e,n);break;case 31:Qi(e,n),i&4&&ix(e,n);break;case 13:Qi(e,n),i&4&&sx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=iT.bind(null,n),bT(e,n))));break;case 22:if(i=n.memoizedState!==null||ts,!i){t=t!==null&&t.memoizedState!==null||He,s=ts;var a=He;ts=i,(He=t)&&!a?ji(e,n,(n.subtreeFlags&8772)!==0):Qi(e,n),ts=s,He=a}break;case 30:break;default:Qi(e,n)}}function ex(e){var t=e.alternate;t!==null&&(e.alternate=null,ex(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Pp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,Cn=!1;function Ki(e,t,n){for(n=n.child;n!==null;)nx(e,t,n),n=n.sibling}function nx(e,t,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(fl,n)}catch{}switch(n.tag){case 26:He||Ni(n,t),Ki(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:He||Ni(n,t);var i=Te,s=Cn;$s(n.type)&&(Te=n.stateNode,Cn=!1),Ki(e,t,n),Ko(n.stateNode),Te=i,Cn=s;break;case 5:He||Ni(n,t);case 6:if(i=Te,s=Cn,Te=null,Ki(e,t,n),Te=i,Cn=s,Te!==null)if(Cn)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(n.stateNode)}catch(a){re(n,t,a)}else try{Te.removeChild(n.stateNode)}catch(a){re(n,t,a)}break;case 18:Te!==null&&(Cn?(e=Te,Yy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Fr(e)):Yy(Te,n.stateNode));break;case 4:i=Te,s=Cn,Te=n.stateNode.containerInfo,Cn=!0,Ki(e,t,n),Te=i,Cn=s;break;case 0:case 11:case 14:case 15:Ks(2,n,t),He||Ks(4,n,t),Ki(e,t,n);break;case 1:He||(Ni(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Kv(n,t,i)),Ki(e,t,n);break;case 21:Ki(e,t,n);break;case 22:He=(i=He)||n.memoizedState!==null,Ki(e,t,n),He=i;break;default:Ki(e,t,n)}}function ix(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fr(e)}catch(n){re(t,t.return,n)}}}function sx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fr(e)}catch(n){re(t,t.return,n)}}function J1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Uy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Uy),t;default:throw Error(Q(435,e.tag))}}function Ac(e,t){var n=J1(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=sT.bind(null,e,i);i.then(s,s)}})}function An(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if($s(o.type)){Te=o.stateNode,Cn=!1;break t}break;case 5:Te=o.stateNode,Cn=!1;break t;case 3:case 4:Te=o.stateNode.containerInfo,Cn=!0;break t}o=o.return}if(Te===null)throw Error(Q(160));nx(a,r,s),Te=null,Cn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ax(t,e),t=t.sibling}var mi=null;function ax(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:An(t,e),wn(e),i&4&&(Ks(3,e,e.return),vl(3,e),Ks(5,e,e.return));break;case 1:An(t,e),wn(e),i&512&&(He||n===null||Ni(n,n.return)),i&64&&ts&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=mi;if(An(t,e),wn(e),i&512&&(He||n===null||Ni(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[ml]||a[ln]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),hn(a,i,n),a[ln]=e,tn(a),i=a;break t;case"link":var r=t_("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),hn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=t_("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),hn(a,i,n),s.head.appendChild(a);break;default:throw Error(Q(468,i))}a[ln]=e,tn(a),i=a}e.stateNode=i}else e_(s,e.type,e.stateNode);else e.stateNode=$y(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?e_(s,e.type,e.stateNode):$y(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Ad(e,e.memoizedProps,n.memoizedProps)}break;case 27:An(t,e),wn(e),i&512&&(He||n===null||Ni(n,n.return)),n!==null&&i&4&&Ad(e,e.memoizedProps,n.memoizedProps);break;case 5:if(An(t,e),wn(e),i&512&&(He||n===null||Ni(n,n.return)),e.flags&32){s=e.stateNode;try{Nr(s,"")}catch(v){re(e,e.return,v)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Ad(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Cd=!0);break;case 6:if(An(t,e),wn(e),i&4){if(e.stateNode===null)throw Error(Q(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){re(e,e.return,v)}}break;case 3:if(Xc=null,s=mi,mi=yu(t.containerInfo),An(t,e),mi=s,wn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(v){re(e,e.return,v)}Cd&&(Cd=!1,rx(e));break;case 4:i=mi,mi=yu(e.stateNode.containerInfo),An(t,e),wn(e),mi=i;break;case 12:An(t,e),wn(e);break;case 31:An(t,e),wn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ac(e,i)));break;case 13:An(t,e),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Lu=kn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ac(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ts,f=He;if(ts=c||s,He=f||l,An(t,e),He=f,ts=c,wn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||ts||He||Ea(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(v){re(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(v){re(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;s?Zy(d,!0):Zy(l.stateNode,!1)}catch(v){re(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Ac(e,n))));break;case 19:An(t,e),wn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Ac(e,i)));break;case 30:break;case 21:break;default:An(t,e),wn(e)}}function wn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(jv(i)){n=i;break}i=i.return}if(n==null)throw Error(Q(160));switch(n.tag){case 27:var s=n.stateNode,a=wd(e);cu(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Nr(r,""),n.flags&=-33);var o=wd(e);cu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=wd(e);mp(e,c,l);break;default:throw Error(Q(161))}}catch(f){re(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;rx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tx(e,t.alternate,t),t=t.sibling}function Ea(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ks(4,t,t.return),Ea(t);break;case 1:Ni(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Kv(t,t.return,n),Ea(t);break;case 27:Ko(t.stateNode);case 26:case 5:Ni(t,t.return),Ea(t);break;case 22:t.memoizedState===null&&Ea(t);break;case 30:Ea(t);break;default:Ea(t)}e=e.sibling}}function ji(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:ji(s,a,n),vl(4,a);break;case 1:if(ji(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){re(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)iv(l[s],o)}catch(c){re(i,i.return,c)}}n&&r&64&&Jv(a),qo(a,a.return);break;case 27:$v(a);case 26:case 5:ji(s,a,n),n&&i===null&&r&4&&Qv(a),qo(a,a.return);break;case 12:ji(s,a,n);break;case 31:ji(s,a,n),n&&r&4&&ix(s,a);break;case 13:ji(s,a,n),n&&r&4&&sx(s,a);break;case 22:a.memoizedState===null&&ji(s,a,n),qo(a,a.return);break;case 30:break;default:ji(s,a,n)}t=t.sibling}}function pm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&yl(n))}function mm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yl(e))}function pi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ox(e,t,n,i),t=t.sibling}function ox(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:pi(e,t,n,i),s&2048&&vl(9,t);break;case 1:pi(e,t,n,i);break;case 3:pi(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yl(e)));break;case 12:if(s&2048){pi(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){re(t,t.return,l)}}else pi(e,t,n,i);break;case 31:pi(e,t,n,i);break;case 13:pi(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?pi(e,t,n,i):Yo(e,t):a._visibility&2?pi(e,t,n,i):(a._visibility|=2,lr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&pm(r,t);break;case 24:pi(e,t,n,i),s&2048&&mm(t.alternate,t);break;default:pi(e,t,n,i)}}function lr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:lr(a,r,o,l,s),vl(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?lr(a,r,o,l,s):Yo(a,r):(f._visibility|=2,lr(a,r,o,l,s)),s&&c&2048&&pm(r.alternate,r);break;case 24:lr(a,r,o,l,s),s&&c&2048&&mm(r.alternate,r);break;default:lr(a,r,o,l,s)}t=t.sibling}}function Yo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Yo(n,i),s&2048&&pm(i.alternate,i);break;case 24:Yo(n,i),s&2048&&mm(i.alternate,i);break;default:Yo(n,i)}t=t.sibling}}var Bo=8192;function or(e,t,n){if(e.subtreeFlags&Bo)for(e=e.child;e!==null;)lx(e,t,n),e=e.sibling}function lx(e,t,n){switch(e.tag){case 26:or(e,t,n),e.flags&Bo&&e.memoizedState!==null&&LT(n,mi,e.memoizedState,e.memoizedProps);break;case 5:or(e,t,n);break;case 3:case 4:var i=mi;mi=yu(e.stateNode.containerInfo),or(e,t,n),mi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Bo,Bo=16777216,or(e,t,n),Bo=i):or(e,t,n));break;default:or(e,t,n)}}function cx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Do(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,hx(i,e)}cx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ux(e),e=e.sibling}function ux(e){switch(e.tag){case 0:case 11:case 15:Do(e),e.flags&2048&&Ks(9,e,e.return);break;case 3:Do(e);break;case 12:Do(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gc(e)):Do(e);break;default:Do(e)}}function Gc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,hx(i,e)}cx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ks(8,t,t.return),Gc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gc(t));break;default:Gc(t)}e=e.sibling}}function hx(e,t){for(;$e!==null;){var n=$e;switch(n.tag){case 0:case 11:case 15:Ks(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:yl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,$e=i;else t:for(n=e;$e!==null;){i=$e;var s=i.sibling,a=i.return;if(ex(i),i===n){$e=null;break t}if(s!==null){s.return=a,$e=s;break t}$e=a}}}var K1={getCacheForType:function(e){var t=un(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return un(Xe).controller.signal}},Q1=typeof WeakMap=="function"?WeakMap:Map,ee=0,pe=null,Gt=null,Xt=0,ae=0,Pn=null,Ps=!1,Xr=!1,gm=!1,hs=0,Ne=0,Qs=0,Da=0,ym=0,Fn=0,Ir=0,Zo=null,Rn=null,gp=!1,Lu=0,fx=0,uu=1/0,hu=null,Hs=null,Ze=0,Xs=null,Pr=null,rs=0,yp=0,_p=null,dx=null,Jo=0,vp=null;function Hn(){return(ee&2)!==0&&Xt!==0?Xt&-Xt:Nt.T!==null?vm():S_()}function px(){if(Fn===0)if((Xt&536870912)===0||qt){var e=gc;gc<<=1,(gc&3932160)===0&&(gc=262144),Fn=e}else Fn=536870912;return e=Wn.current,e!==null&&(e.flags|=32),Fn}function Dn(e,t,n){(e===pe&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(Br(e,0),Bs(e,Xt,Fn,!1)),pl(e,n),((ee&2)===0||e!==pe)&&(e===pe&&((ee&2)===0&&(Da|=n),Ne===4&&Bs(e,Xt,Fn,!1)),Oi(e))}function mx(e,t,n){if((ee&6)!==0)throw Error(Q(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||dl(e,t),s=i?tT(e,t):Rd(e,t,!0),a=i;do{if(s===0){Xr&&!i&&Bs(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!j1(n)){s=Rd(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Zo;var l=o.current.memoizedState.isDehydrated;if(l&&(Br(o,r).flags|=256),r=Rd(o,r,!1),r!==2){if(gm&&!l){o.errorRecoveryDisabledLanes|=a,Da|=a,s=4;break t}a=Rn,Rn=s,a!==null&&(Rn===null?Rn=a:Rn.push.apply(Rn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Br(e,0),Bs(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Q(345));case 4:if((t&4194048)!==t)break;case 6:Bs(i,t,Fn,!Ps);break t;case 2:Rn=null;break;case 3:case 5:break;default:throw Error(Q(329))}if((t&62914560)===t&&(s=Lu+300-kn(),10<s)){if(Bs(i,t,Fn,!Ps),Su(i,0,!0)!==0)break t;rs=t,i.timeoutHandle=Ix(Ly.bind(null,i,n,Rn,hu,gp,t,Fn,Da,Ir,Ps,a,"Throttled",-0,0),s);break t}Ly(i,n,Rn,hu,gp,t,Fn,Da,Ir,Ps,a,null,-0,0)}}break}while(!0);Oi(e)}function Ly(e,t,n,i,s,a,r,o,l,c,f,p,u,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ns},lx(t,a,p);var v=(a&62914560)===a?Lu-kn():(a&4194048)===a?fx-kn():0;if(v=OT(p,v),v!==null){rs=a,e.cancelPendingCommit=v(Iy.bind(null,e,t,a,n,i,s,r,o,l,f,p,null,u,d)),Bs(e,a,r,!c);return}}Iy(e,t,a,n,i,s,r,o,l)}function j1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Xn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bs(e,t,n,i){t&=~ym,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Gn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&v_(e,n,t)}function Ou(){return(ee&6)===0?(xl(0,!1),!1):!0}function _m(){if(Gt!==null){if(ae===0)var e=Gt.return;else e=Gt,is=ka=null,im(e),Ar=null,il=0,e=Gt;for(;e!==null;)Zv(e.alternate,e),e=e.return;Gt=null}}function Br(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,gT(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),rs=0,_m(),pe=e,Gt=n=ss(e.current,null),Xt=t,ae=0,Pn=null,Ps=!1,Xr=dl(e,t),gm=!1,Ir=Fn=ym=Da=Qs=Ne=0,Rn=Zo=null,gp=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Gn(i),a=1<<s;t|=e[s],i&=~a}return hs=t,Au(),n}function gx(e,t){zt=null,Nt.H=al,t===Hr||t===Cu?(t=hy(),ae=3):t===Kp?(t=hy(),ae=4):ae=t===fm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Pn=t,Gt===null&&(Ne=1,ou(e,oi(t,e.current)))}function yx(){var e=Wn.current;return e===null?!0:(Xt&4194048)===Xt?ci===null:(Xt&62914560)===Xt||(Xt&536870912)!==0?e===ci:!1}function _x(){var e=Nt.H;return Nt.H=al,e===null?al:e}function vx(){var e=Nt.A;return Nt.A=K1,e}function fu(){Ne=4,Ps||(Xt&4194048)!==Xt&&Wn.current!==null||(Xr=!0),(Qs&134217727)===0&&(Da&134217727)===0||pe===null||Bs(pe,Xt,Fn,!1)}function Rd(e,t,n){var i=ee;ee|=2;var s=_x(),a=vx();(pe!==e||Xt!==t)&&(hu=null,Br(e,t)),t=!1;var r=Ne;t:do try{if(ae!==0&&Gt!==null){var o=Gt,l=Pn;switch(ae){case 8:_m(),r=6;break t;case 3:case 2:case 9:case 6:Wn.current===null&&(t=!0);var c=ae;if(ae=0,Pn=null,br(e,o,l,c),n&&Xr){r=0;break t}break;default:c=ae,ae=0,Pn=null,br(e,o,l,c)}}$1(),r=Ne;break}catch(f){gx(e,f)}while(!0);return t&&e.shellSuspendCounter++,is=ka=null,ee=i,Nt.H=s,Nt.A=a,Gt===null&&(pe=null,Xt=0,Au()),r}function $1(){for(;Gt!==null;)xx(Gt)}function tT(e,t){var n=ee;ee|=2;var i=_x(),s=vx();pe!==e||Xt!==t?(hu=null,uu=kn()+500,Br(e,t)):Xr=dl(e,t);t:do try{if(ae!==0&&Gt!==null){t=Gt;var a=Pn;e:switch(ae){case 1:ae=0,Pn=null,br(e,t,a,1);break;case 2:case 9:if(uy(a)){ae=0,Pn=null,Oy(t);break}t=function(){ae!==2&&ae!==9||pe!==e||(ae=7),Oi(e)},a.then(t,t);break t;case 3:ae=7;break t;case 4:ae=5;break t;case 7:uy(a)?(ae=0,Pn=null,Oy(t)):(ae=0,Pn=null,br(e,t,a,7));break;case 5:var r=null;switch(Gt.tag){case 26:r=Gt.memoizedState;case 5:case 27:var o=Gt;if(r?kx(r):o.stateNode.complete){ae=0,Pn=null;var l=o.sibling;if(l!==null)Gt=l;else{var c=o.return;c!==null?(Gt=c,Iu(c)):Gt=null}break e}}ae=0,Pn=null,br(e,t,a,5);break;case 6:ae=0,Pn=null,br(e,t,a,6);break;case 8:_m(),Ne=6;break t;default:throw Error(Q(462))}}eT();break}catch(f){gx(e,f)}while(!0);return is=ka=null,Nt.H=i,Nt.A=s,ee=n,Gt!==null?0:(pe=null,Xt=0,Au(),Ne)}function eT(){for(;Gt!==null&&!TM();)xx(Gt)}function xx(e){var t=Yv(e.alternate,e,hs);e.memoizedProps=e.pendingProps,t===null?Iu(e):Gt=t}function Oy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=wy(n,t,t.pendingProps,t.type,void 0,Xt);break;case 11:t=wy(n,t,t.pendingProps,t.type.render,t.ref,Xt);break;case 5:im(t);default:Zv(n,t),t=Gt=Z_(t,hs),t=Yv(n,t,hs)}e.memoizedProps=e.pendingProps,t===null?Iu(e):Gt=t}function br(e,t,n,i){is=ka=null,im(t),Ar=null,il=0;var s=t.return;try{if(H1(e,s,t,n,Xt)){Ne=1,ou(e,oi(n,e.current)),Gt=null;return}}catch(a){if(s!==null)throw Gt=s,a;Ne=1,ou(e,oi(n,e.current)),Gt=null;return}t.flags&32768?(qt||i===1?e=!0:Xr||(Xt&536870912)!==0?e=!1:(Ps=e=!0,(i===2||i===9||i===3||i===6)&&(i=Wn.current,i!==null&&i.tag===13&&(i.flags|=16384))),bx(t,e)):Iu(t)}function Iu(e){var t=e;do{if((t.flags&32768)!==0){bx(t,Ps);return}e=t.return;var n=q1(t.alternate,t,hs);if(n!==null){Gt=n;return}if(t=t.sibling,t!==null){Gt=t;return}Gt=t=e}while(t!==null);Ne===0&&(Ne=5)}function bx(e,t){do{var n=Y1(e.alternate,e);if(n!==null){n.flags&=32767,Gt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Gt=e;return}Gt=e=n}while(e!==null);Ne=6,Gt=null}function Iy(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do Pu();while(Ze!==0);if((ee&6)!==0)throw Error(Q(327));if(t!==null){if(t===e.current)throw Error(Q(177));if(a=t.lanes|t.childLanes,a|=Hp,OM(e,n,a,r,o,l),e===pe&&(Gt=pe=null,Xt=0),Pr=t,Xs=e,rs=n,yp=a,_p=s,dx=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,aT(Kc,function(){return Ax(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Nt.T,Nt.T=null,s=ne.p,ne.p=2,r=ee,ee|=4;try{Z1(e,t,n)}finally{ee=r,ne.p=s,Nt.T=i}}Ze=1,Sx(),Mx(),Tx()}}function Sx(){if(Ze===1){Ze=0;var e=Xs,t=Pr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Nt.T,Nt.T=null;var i=ne.p;ne.p=2;var s=ee;ee|=4;try{ax(t,e);var a=Mp,r=k_(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&F_(o.ownerDocument.documentElement,o)){if(l!==null&&Gp(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,M=Math.min(l.start,v),y=l.end===void 0?M:Math.min(l.end,v);!d.extend&&M>y&&(r=y,y=M,M=r);var h=iy(o,M),g=iy(o,y);if(h&&g&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==g.node||d.focusOffset!==g.offset)){var b=p.createRange();b.setStart(h.node,h.offset),d.removeAllRanges(),M>y?(d.addRange(b),d.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),d.addRange(b))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var m=p[o];m.element.scrollLeft=m.left,m.element.scrollTop=m.top}}xu=!!Sp,Mp=Sp=null}finally{ee=s,ne.p=i,Nt.T=n}}e.current=t,Ze=2}}function Mx(){if(Ze===2){Ze=0;var e=Xs,t=Pr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Nt.T,Nt.T=null;var i=ne.p;ne.p=2;var s=ee;ee|=4;try{tx(e,t.alternate,t)}finally{ee=s,ne.p=i,Nt.T=n}}Ze=3}}function Tx(){if(Ze===4||Ze===3){Ze=0,EM();var e=Xs,t=Pr,n=rs,i=dx;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Pr=Xs=null,Ex(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Hs=null),Ip(n),t=t.stateNode,Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(fl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Nt.T,s=ne.p,ne.p=2,Nt.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Nt.T=t,ne.p=s}}(rs&3)!==0&&Pu(),Oi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===vp?Jo++:(Jo=0,vp=e):Jo=0,xl(0,!1)}}function Ex(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,yl(t)))}function Pu(){return Sx(),Mx(),Tx(),Ax()}function Ax(){if(Ze!==5)return!1;var e=Xs,t=yp;yp=0;var n=Ip(rs),i=Nt.T,s=ne.p;try{ne.p=32>n?32:n,Nt.T=null,n=_p,_p=null;var a=Xs,r=rs;if(Ze=0,Pr=Xs=null,rs=0,(ee&6)!==0)throw Error(Q(331));var o=ee;if(ee|=4,ux(a.current),ox(a,a.current,r,n),ee=o,xl(0,!1),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(fl,a)}catch{}return!0}finally{ne.p=s,Nt.T=i,Ex(e,t)}}function Py(e,t,n){t=oi(n,t),t=fp(e.stateNode,t,2),e=Gs(e,t,2),e!==null&&(pl(e,2),Oi(e))}function re(e,t,n){if(e.tag===3)Py(e,e,n);else for(;t!==null;){if(t.tag===3){Py(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hs===null||!Hs.has(i))){e=oi(n,e),n=Vv(2),i=Gs(t,n,2),i!==null&&(Gv(n,i,t,e),pl(i,2),Oi(i));break}}t=t.return}}function Dd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Q1;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(gm=!0,s.add(n),e=nT.bind(null,e,t,n),t.then(e,e))}function nT(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,pe===e&&(Xt&n)===n&&(Ne===4||Ne===3&&(Xt&62914560)===Xt&&300>kn()-Lu?(ee&2)===0&&Br(e,0):ym|=n,Ir===Xt&&(Ir=0)),Oi(e)}function wx(e,t){t===0&&(t=__()),e=Fa(e,t),e!==null&&(pl(e,t),Oi(e))}function iT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wx(e,n)}function sT(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Q(314))}i!==null&&i.delete(t),wx(e,n)}function aT(e,t){return Lp(e,t)}var du=null,cr=null,xp=!1,pu=!1,Nd=!1,zs=0;function Oi(e){e!==cr&&e.next===null&&(cr===null?du=cr=e:cr=cr.next=e),pu=!0,xp||(xp=!0,oT())}function xl(e,t){if(!Nd&&pu){Nd=!0;do for(var n=!1,i=du;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Gn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,By(i,a))}else a=Xt,a=Su(i,i===pe?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||dl(i,a)||(n=!0,By(i,a));i=i.next}while(n);Nd=!1}}function rT(){Cx()}function Cx(){pu=xp=!1;var e=0;zs!==0&&mT()&&(e=zs);for(var t=kn(),n=null,i=du;i!==null;){var s=i.next,a=Rx(i,t);a===0?(i.next=null,n===null?du=s:n.next=s,s===null&&(cr=n)):(n=i,(e!==0||(a&3)!==0)&&(pu=!0)),i=s}Ze!==0&&Ze!==5||xl(e,!1),zs!==0&&(zs=0)}function Rx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Gn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=LM(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=pe,n=Xt,n=Su(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&rd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||dl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&rd(i),Ip(n)){case 2:case 8:n=g_;break;case 32:n=Kc;break;case 268435456:n=y_;break;default:n=Kc}return i=Dx.bind(null,e),n=Lp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&rd(i),e.callbackPriority=2,e.callbackNode=null,2}function Dx(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Pu()&&e.callbackNode!==n)return null;var i=Xt;return i=Su(e,e===pe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(mx(e,i,t),Rx(e,kn()),e.callbackNode!=null&&e.callbackNode===n?Dx.bind(null,e):null)}function By(e,t){if(Pu())return null;mx(e,t,!0)}function oT(){yT(function(){(ee&6)!==0?Lp(m_,rT):Cx()})}function vm(){if(zs===0){var e=Ur;e===0&&(e=mc,mc<<=1,(mc&261888)===0&&(mc=256)),zs=e}return zs}function zy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Lc(""+e)}function Fy(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function lT(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=zy((s[Nn]||null).action),r=i.submitter;r&&(t=(t=r[Nn]||null)?zy(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Mu("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(zs!==0){var l=r?Fy(s,r):new FormData(s);up(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?Fy(s,r):new FormData(s),up(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(wc=0;wc<jd.length;wc++)Cc=jd[wc],ky=Cc.toLowerCase(),Vy=Cc[0].toUpperCase()+Cc.slice(1),gi(ky,"on"+Vy);var Cc,ky,Vy,wc;gi(G_,"onAnimationEnd");gi(H_,"onAnimationIteration");gi(X_,"onAnimationStart");gi("dblclick","onDoubleClick");gi("focusin","onFocus");gi("focusout","onBlur");gi(A1,"onTransitionRun");gi(w1,"onTransitionStart");gi(C1,"onTransitionCancel");gi(W_,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);Pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));function Nx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){jc(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){jc(f)}s.currentTarget=null,a=l}}}}function Vt(e,t){var n=t[Xd];n===void 0&&(n=t[Xd]=new Set);var i=e+"__bubble";n.has(i)||(Ux(t,e,2,!1),n.add(i))}function Ud(e,t,n){var i=0;t&&(i|=4),Ux(n,e,i,t)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function xm(e){if(!e[Rc]){e[Rc]=!0,M_.forEach(function(n){n!=="selectionchange"&&(cT.has(n)||Ud(n,!1,e),Ud(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rc]||(t[Rc]=!0,Ud("selectionchange",!1,t))}}function Ux(e,t,n,i){switch(Wx(t)){case 2:var s=BT;break;case 8:s=zT;break;default:s=Tm}n=s.bind(null,t,n,e),s=void 0,!Jd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ld(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=fr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}N_(function(){var c=a,f=zp(n),p=[];t:{var u=q_.get(e);if(u!==void 0){var d=Mu,v=e;switch(e){case"keypress":if(Ic(n)===0)break t;case"keydown":case"keyup":d=s1;break;case"focusin":v="focus",d=hd;break;case"focusout":v="blur",d=hd;break;case"beforeblur":case"afterblur":d=hd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Z0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=qM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=o1;break;case G_:case H_:case X_:d=JM;break;case W_:d=c1;break;case"scroll":case"scrollend":d=XM;break;case"wheel":d=h1;break;case"copy":case"cut":case"paste":d=QM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=K0;break;case"toggle":case"beforetoggle":d=d1}var M=(t&4)!==0,y=!M&&(e==="scroll"||e==="scrollend"),h=M?u!==null?u+"Capture":null:u;M=[];for(var g=c,b;g!==null;){var m=g;if(b=m.stateNode,m=m.tag,m!==5&&m!==26&&m!==27||b===null||h===null||(m=jo(g,h),m!=null&&M.push(ol(g,m,b))),y)break;g=g.return}0<M.length&&(u=new d(u,v,null,n,f),p.push({event:u,listeners:M}))}}if((t&7)===0){t:{if(u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",u&&n!==Zd&&(v=n.relatedTarget||n.fromElement)&&(fr(v)||v[kr]))break t;if((d||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,d?(v=n.relatedTarget||n.toElement,d=c,v=v?fr(v):null,v!==null&&(y=hl(v),M=v.tag,v!==y||M!==5&&M!==27&&M!==6)&&(v=null)):(d=null,v=c),d!==v)){if(M=Z0,m="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(M=K0,m="onPointerLeave",h="onPointerEnter",g="pointer"),y=d==null?u:Io(d),b=v==null?u:Io(v),u=new M(m,g+"leave",d,n,f),u.target=y,u.relatedTarget=b,m=null,fr(f)===c&&(M=new M(h,g+"enter",v,n,f),M.target=b,M.relatedTarget=y,m=M),y=m,d&&v)e:{for(M=uT,h=d,g=v,b=0,m=h;m;m=M(m))b++;m=0;for(var T=g;T;T=M(T))m++;for(;0<b-m;)h=M(h),b--;for(;0<m-b;)g=M(g),m--;for(;b--;){if(h===g||g!==null&&h===g.alternate){M=h;break e}h=M(h),g=M(g)}M=null}else M=null;d!==null&&Gy(p,u,d,M,!1),v!==null&&y!==null&&Gy(p,y,v,M,!0)}}t:{if(u=c?Io(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var E=ty;else if($0(u))if(B_)E=M1;else{E=b1;var w=x1}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Bp(c.elementType)&&(E=ty):E=S1;if(E&&(E=E(e,c))){P_(p,E,n,f);break t}w&&w(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&Yd(u,"number",u.value)}switch(w=c?Io(c):window,e){case"focusin":($0(w)||w.contentEditable==="true")&&(mr=w,Kd=c,ko=null);break;case"focusout":ko=Kd=mr=null;break;case"mousedown":Qd=!0;break;case"contextmenu":case"mouseup":case"dragend":Qd=!1,sy(p,n,f);break;case"selectionchange":if(E1)break;case"keydown":case"keyup":sy(p,n,f)}var _;if(Vp)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else pr?O_(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(L_&&n.locale!=="ko"&&(pr||A!=="onCompositionStart"?A==="onCompositionEnd"&&pr&&(_=U_()):(Is=f,Fp="value"in Is?Is.value:Is.textContent,pr=!0)),w=mu(c,A),0<w.length&&(A=new J0(A,e,null,n,f),p.push({event:A,listeners:w}),_?A.data=_:(_=I_(n),_!==null&&(A.data=_)))),(_=m1?g1(e,n):y1(e,n))&&(A=mu(c,"onBeforeInput"),0<A.length&&(w=new J0("onBeforeInput","beforeinput",null,n,f),p.push({event:w,listeners:A}),w.data=_)),lT(p,e,c,n,f)}Nx(p,t)})}function ol(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=jo(e,n),s!=null&&i.unshift(ol(e,s,a)),s=jo(e,t),s!=null&&i.push(ol(e,s,a))),e.tag===3)return i;e=e.return}return[]}function uT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=jo(n,a),c!=null&&r.unshift(ol(n,c,l))):s||(c=jo(n,a),c!=null&&r.push(ol(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var hT=/\r\n?/g,fT=/\u0000|\uFFFD/g;function Hy(e){return(typeof e=="string"?e:""+e).replace(hT,`
`).replace(fT,"")}function Lx(e,t){return t=Hy(t),Hy(e)===t}function ce(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Nr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Nr(e,""+i);break;case"className":_c(e,"class",i);break;case"tabIndex":_c(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":_c(e,n,i);break;case"style":D_(e,i,a);break;case"data":if(t!=="object"){_c(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Lc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ce(e,t,"name",s.name,s,null),ce(e,t,"formEncType",s.formEncType,s,null),ce(e,t,"formMethod",s.formMethod,s,null),ce(e,t,"formTarget",s.formTarget,s,null)):(ce(e,t,"encType",s.encType,s,null),ce(e,t,"method",s.method,s,null),ce(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Lc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ns);break;case"onScroll":i!=null&&Vt("scroll",e);break;case"onScrollEnd":i!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Lc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),Uc(e,"popover",i);break;case"xlinkActuate":Zi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Zi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Zi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Zi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Zi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Zi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Zi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Zi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Zi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Uc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=GM.get(n)||n,Uc(e,n,i))}}function bp(e,t,n,i,s,a){switch(n){case"style":D_(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Nr(e,i):(typeof i=="number"||typeof i=="bigint")&&Nr(e,""+i);break;case"onScroll":i!=null&&Vt("scroll",e);break;case"onScrollEnd":i!=null&&Vt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ns);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!T_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Nn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Uc(e,n,i)}}}function hn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:ce(e,t,a,r,n,null)}}s&&ce(e,t,"srcSet",n.srcSet,n,null),i&&ce(e,t,"src",n.src,n,null);return;case"input":Vt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Q(137,t));break;default:ce(e,t,i,f,n,null)}}w_(e,a,o,l,c,r,s,!1);return;case"select":Vt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ce(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Mr(e,!!i,t,!1):n!=null&&Mr(e,!!i,n,!0);return;case"textarea":Vt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Q(91));break;default:ce(e,t,r,o,n,null)}R_(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ce(e,t,l,i,n,null)}return;case"dialog":Vt("beforetoggle",e),Vt("toggle",e),Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(i=0;i<rl.length;i++)Vt(rl[i],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:ce(e,t,c,i,n,null)}return;default:if(Bp(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&bp(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ce(e,t,o,i,n,null))}function dT(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||ce(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":f=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Q(137,t));break;default:d!==p&&ce(e,t,u,d,i,p)}}qd(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||ce(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&ce(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?Mr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Mr(e,!!n,t,!0):Mr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ce(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Q(91));break;default:s!==a&&ce(e,t,r,s,i,a)}C_(e,u,d);return;case"option":for(var v in n)if(u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:ce(e,t,v,null,i,u)}for(l in i)if(u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ce(e,t,l,u,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&ce(e,t,M,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(Q(137,t));break;default:ce(e,t,c,u,i,d)}return;default:if(Bp(t)){for(var y in n)u=n[y],n.hasOwnProperty(y)&&u!==void 0&&!i.hasOwnProperty(y)&&bp(e,t,y,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||bp(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&ce(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||ce(e,t,p,u,i,d)}function Xy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Xy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&Xy(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Sp=null,Mp=null;function gu(e){return e.nodeType===9?e:e.ownerDocument}function Wy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ox(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Od=null;function mT(){var e=window.event;return e&&e.type==="popstate"?e===Od?!1:(Od=e,!0):(Od=null,!1)}var Ix=typeof setTimeout=="function"?setTimeout:void 0,gT=typeof clearTimeout=="function"?clearTimeout:void 0,qy=typeof Promise=="function"?Promise:void 0,yT=typeof queueMicrotask=="function"?queueMicrotask:typeof qy<"u"?function(e){return qy.resolve(null).then(e).catch(_T)}:Ix;function _T(e){setTimeout(function(){throw e})}function $s(e){return e==="head"}function Yy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Fr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ko(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ko(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[ml]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Ko(e.ownerDocument.body);n=s}while(n);Fr(t)}function Zy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Ep(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ep(n),Pp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function vT(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ml])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function xT(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Px(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ui(e.nextSibling),e===null))return null;return e}function Ap(e){return e.data==="$?"||e.data==="$~"}function wp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bT(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ui(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Cp=null;function Jy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ui(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Ky(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Bx(e,t,n){switch(t=gu(n),e){case"html":if(e=t.documentElement,!e)throw Error(Q(452));return e;case"head":if(e=t.head,!e)throw Error(Q(453));return e;case"body":if(e=t.body,!e)throw Error(Q(454));return e;default:throw Error(Q(451))}}function Ko(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Pp(e)}var hi=new Map,Qy=new Set;function yu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fs=ne.d;ne.d={f:ST,r:MT,D:TT,C:ET,L:AT,m:wT,X:RT,S:CT,M:DT};function ST(){var e=fs.f(),t=Ou();return e||t}function MT(e){var t=Vr(e);t!==null&&t.tag===5&&t.type==="form"?Dv(t):fs.r(e)}var Wr=typeof document>"u"?null:document;function zx(e,t,n){var i=Wr;if(i&&typeof t=="string"&&t){var s=ri(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Qy.has(s)||(Qy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),hn(t,"link",e),tn(t),i.head.appendChild(t)))}}function TT(e){fs.D(e),zx("dns-prefetch",e,null)}function ET(e,t){fs.C(e,t),zx("preconnect",e,t)}function AT(e,t,n){fs.L(e,t,n);var i=Wr;if(i&&e&&t){var s='link[rel="preload"][as="'+ri(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ri(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ri(n.imageSizes)+'"]')):s+='[href="'+ri(e)+'"]';var a=s;switch(t){case"style":a=zr(e);break;case"script":a=qr(e)}hi.has(a)||(e=be({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),hi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(bl(a))||t==="script"&&i.querySelector(Sl(a))||(t=i.createElement("link"),hn(t,"link",e),tn(t),i.head.appendChild(t)))}}function wT(e,t){fs.m(e,t);var n=Wr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ri(i)+'"][href="'+ri(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=qr(e)}if(!hi.has(a)&&(e=be({rel:"modulepreload",href:e},t),hi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sl(a)))return}i=n.createElement("link"),hn(i,"link",e),tn(i),n.head.appendChild(i)}}}function CT(e,t,n){fs.S(e,t,n);var i=Wr;if(i&&e){var s=Sr(i).hoistableStyles,a=zr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(bl(a)))o.loading=5;else{e=be({rel:"stylesheet",href:e,"data-precedence":t},n),(n=hi.get(a))&&bm(e,n);var l=r=i.createElement("link");tn(l),hn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Hc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function RT(e,t){fs.X(e,t);var n=Wr;if(n&&e){var i=Sr(n).hoistableScripts,s=qr(e),a=i.get(s);a||(a=n.querySelector(Sl(s)),a||(e=be({src:e,async:!0},t),(t=hi.get(s))&&Sm(e,t),a=n.createElement("script"),tn(a),hn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function DT(e,t){fs.M(e,t);var n=Wr;if(n&&e){var i=Sr(n).hoistableScripts,s=qr(e),a=i.get(s);a||(a=n.querySelector(Sl(s)),a||(e=be({src:e,async:!0,type:"module"},t),(t=hi.get(s))&&Sm(e,t),a=n.createElement("script"),tn(a),hn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function jy(e,t,n,i){var s=(s=Fs.current)?yu(s):null;if(!s)throw Error(Q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=zr(n.href),n=Sr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=zr(n.href);var a=Sr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(bl(e)))&&!a._p&&(r.instance=a,r.state.loading=5),hi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hi.set(e,n),a||NT(s,e,n,r.state))),t&&i===null)throw Error(Q(528,""));return r}if(t&&i!==null)throw Error(Q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=qr(n),n=Sr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Q(444,e))}}function zr(e){return'href="'+ri(e)+'"'}function bl(e){return'link[rel="stylesheet"]['+e+"]"}function Fx(e){return be({},e,{"data-precedence":e.precedence,precedence:null})}function NT(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),hn(t,"link",n),tn(t),e.head.appendChild(t))}function qr(e){return'[src="'+ri(e)+'"]'}function Sl(e){return"script[async]"+e}function $y(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ri(n.href)+'"]');if(i)return t.instance=i,tn(i),i;var s=be({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tn(i),hn(i,"style",s),Hc(i,n.precedence,e),t.instance=i;case"stylesheet":s=zr(n.href);var a=e.querySelector(bl(s));if(a)return t.state.loading|=4,t.instance=a,tn(a),a;i=Fx(n),(s=hi.get(s))&&bm(i,s),a=(e.ownerDocument||e).createElement("link"),tn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),hn(a,"link",i),t.state.loading|=4,Hc(a,n.precedence,e),t.instance=a;case"script":return a=qr(n.src),(s=e.querySelector(Sl(a)))?(t.instance=s,tn(s),s):(i=n,(s=hi.get(a))&&(i=be({},n),Sm(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),tn(s),hn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Hc(i,n.precedence,e));return t.instance}function Hc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function bm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Sm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xc=null;function t_(e,t,n){if(Xc===null){var i=new Map,s=Xc=new Map;s.set(n,i)}else s=Xc,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[ml]||a[ln]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function e_(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function UT(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function kx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function LT(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=zr(i.href),a=t.querySelector(bl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=_u.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,tn(a);return}a=t.ownerDocument||t,i=Fx(i),(s=hi.get(s))&&bm(i,s),a=a.createElement("link"),tn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),hn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=_u.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Id=0;function OT(e,t){return e.stylesheets&&e.count===0&&Wc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Wc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Id===0&&(Id=62500*pT());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wc(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Id?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function _u(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vu=null;function Wc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vu=new Map,t.forEach(IT,e),vu=null,_u.call(e))}function IT(e,t){if(!(t.state.loading&4)){var n=vu.get(e);if(n)var i=n.get(null);else{n=new Map,vu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=_u.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var ll={$$typeof:es,Provider:null,Consumer:null,_currentValue:Aa,_currentValue2:Aa,_threadCount:0};function PT(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=od(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=od(0),this.hiddenUpdates=od(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Vx(e,t,n,i,s,a,r,o,l,c,f,p){return e=new PT(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=zn(3,null,null,t),e.current=a,a.stateNode=e,t=Zp(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Qp(a),e}function Gx(e){return e?(e=_r,e):_r}function Hx(e,t,n,i,s,a){s=Gx(s),i.context===null?i.context=s:i.pendingContext=s,i=Vs(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Gs(e,i,t),n!==null&&(Dn(n,e,t),Go(n,e,t))}function n_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mm(e,t){n_(e,t),(e=e.alternate)&&n_(e,t)}function Xx(e){if(e.tag===13||e.tag===31){var t=Fa(e,67108864);t!==null&&Dn(t,e,67108864),Mm(e,67108864)}}function i_(e){if(e.tag===13||e.tag===31){var t=Hn();t=Op(t);var n=Fa(e,t);n!==null&&Dn(n,e,t),Mm(e,t)}}var xu=!0;function BT(e,t,n,i){var s=Nt.T;Nt.T=null;var a=ne.p;try{ne.p=2,Tm(e,t,n,i)}finally{ne.p=a,Nt.T=s}}function zT(e,t,n,i){var s=Nt.T;Nt.T=null;var a=ne.p;try{ne.p=8,Tm(e,t,n,i)}finally{ne.p=a,Nt.T=s}}function Tm(e,t,n,i){if(xu){var s=Rp(i);if(s===null)Ld(e,t,i,bu,n),s_(e,i);else if(kT(s,e,t,n,i))i.stopPropagation();else if(s_(e,i),t&4&&-1<FT.indexOf(e)){for(;s!==null;){var a=Vr(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ma(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Gn(r);o.entanglements[1]|=l,r&=~l}Oi(a),(ee&6)===0&&(uu=kn()+500,xl(0,!1))}}break;case 31:case 13:o=Fa(a,2),o!==null&&Dn(o,a,2),Ou(),Mm(a,2)}if(a=Rp(i),a===null&&Ld(e,t,i,bu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Ld(e,t,i,null,n)}}function Rp(e){return e=zp(e),Em(e)}var bu=null;function Em(e){if(bu=null,e=fr(e),e!==null){var t=hl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u_(t),e!==null)return e;e=null}else if(n===31){if(e=h_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bu=e,null}function Wx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(AM()){case m_:return 2;case g_:return 8;case Kc:case wM:return 32;case y_:return 268435456;default:return 32}default:return 32}}var Dp=!1,Ws=null,qs=null,Ys=null,cl=new Map,ul=new Map,Ls=[],FT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function s_(e,t){switch(e){case"focusin":case"focusout":Ws=null;break;case"dragenter":case"dragleave":qs=null;break;case"mouseover":case"mouseout":Ys=null;break;case"pointerover":case"pointerout":cl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(t.pointerId)}}function No(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Vr(t),t!==null&&Xx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function kT(e,t,n,i,s){switch(t){case"focusin":return Ws=No(Ws,e,t,n,i,s),!0;case"dragenter":return qs=No(qs,e,t,n,i,s),!0;case"mouseover":return Ys=No(Ys,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return cl.set(a,No(cl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,ul.set(a,No(ul.get(a)||null,e,t,n,i,s)),!0}return!1}function qx(e){var t=fr(e.target);if(t!==null){var n=hl(t);if(n!==null){if(t=n.tag,t===13){if(t=u_(n),t!==null){e.blockedOn=t,V0(e.priority,function(){i_(n)});return}}else if(t===31){if(t=h_(n),t!==null){e.blockedOn=t,V0(e.priority,function(){i_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rp(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Zd=i,n.target.dispatchEvent(i),Zd=null}else return t=Vr(n),t!==null&&Xx(t),e.blockedOn=n,!1;t.shift()}return!0}function a_(e,t,n){qc(e)&&n.delete(t)}function VT(){Dp=!1,Ws!==null&&qc(Ws)&&(Ws=null),qs!==null&&qc(qs)&&(qs=null),Ys!==null&&qc(Ys)&&(Ys=null),cl.forEach(a_),ul.forEach(a_)}function Dc(e,t){e.blockedOn===t&&(e.blockedOn=null,Dp||(Dp=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,VT)))}var Nc=null;function r_(e){Nc!==e&&(Nc=e,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,function(){Nc===e&&(Nc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Em(i||n)===null)continue;break}var a=Vr(n);a!==null&&(e.splice(t,3),t-=3,up(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Fr(e){function t(l){return Dc(l,e)}Ws!==null&&Dc(Ws,e),qs!==null&&Dc(qs,e),Ys!==null&&Dc(Ys,e),cl.forEach(t),ul.forEach(t);for(var n=0;n<Ls.length;n++){var i=Ls[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ls.length&&(n=Ls[0],n.blockedOn===null);)qx(n),n.blockedOn===null&&Ls.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Nn]||null;if(typeof a=="function")r||r_(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Nn]||null)o=r.formAction;else if(Em(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),r_(n)}}}function Yx(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Am(e){this._internalRoot=e}Bu.prototype.render=Am.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));var n=t.current,i=Hn();Hx(n,i,e,t,null,null)};Bu.prototype.unmount=Am.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hx(e.current,2,null,e,null,null),Ou(),t[kr]=null}};function Bu(e){this._internalRoot=e}Bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=S_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ls.length&&t!==0&&t<Ls[n].priority;n++);Ls.splice(n,0,e),n===0&&qx(e)}};var o_=l_.version;if(o_!=="19.2.0")throw Error(Q(527,o_,"19.2.0"));ne.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=vM(t),e=e!==null?f_(e):null,e=e===null?null:e.stateNode,e};var GT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:Nt,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Uo.isDisabled&&Uo.supportsFiber))try{fl=Uo.inject(GT),Vn=Uo}catch{}var Uo;zu.createRoot=function(e,t){if(!c_(e))throw Error(Q(299));var n=!1,i="",s=zv,a=Fv,r=kv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Vx(e,1,!1,null,null,n,i,null,s,a,r,Yx),e[kr]=t.current,xm(e),new Am(t)};zu.hydrateRoot=function(e,t,n){if(!c_(e))throw Error(Q(299));var i=!1,s="",a=zv,r=Fv,o=kv,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Vx(e,1,!0,t,n??null,i,s,l,a,r,o,Yx),t.context=Gx(null),n=t.current,i=Hn(),i=Op(i),s=Vs(i),s.callback=null,Gs(n,s,i),n=i,t.current.lanes=n,pl(t,n),Oi(t),e[kr]=t.current,xm(e),new Bu(t)};zu.version="19.2.0"});var Qx=qi((U3,Kx)=>{"use strict";function Jx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jx)}catch(e){console.error(e)}}Jx(),Kx.exports=Zx()});function Cm(){let[e,t]=(0,Ue.useState)(!1);return(0,Ue.useEffect)(()=>{let n=setTimeout(()=>t(!0),30);return()=>clearTimeout(n)},[]),Ue.default.createElement("div",{style:{border:"1px solid rgba(148, 163, 184, 0.6)",borderRadius:"14px",padding:"16px 18px",margin:"18px 0",background:"var(--entry-bg, #0f172a)",boxShadow:e?"0 10px 30px rgba(15, 23, 42, 0.45)":"0 2px 10px rgba(15, 23, 42, 0.15)",color:"var(--content-fg, #e5e7eb)",fontSize:"0.95rem",position:"relative",overflow:"hidden",transform:e?"translateY(0px)":"translateY(10px)",opacity:e?1:0,transition:"transform 260ms ease-out, opacity 260ms ease-out, box-shadow 260ms ease-out"}},Ue.default.createElement("div",{style:{position:"absolute",inset:"0",background:"radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.22), transparent 55%), radial-gradient(circle at 100% 100%, rgba(129, 140, 248, 0.24), transparent 55%)",pointerEvents:"none"}}),Ue.default.createElement("div",{style:{position:"relative"}},Ue.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.7rem",marginBottom:"0.8rem"}},Ue.default.createElement("div",{style:{width:"32px",height:"32px",borderRadius:"999px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(56,189,248,0.9), rgba(129,140,248,0.9))",boxShadow:"0 6px 14px rgba(15, 23, 42, 0.6)",fontSize:"1.1rem"}},"\u2699\uFE0F"),Ue.default.createElement("div",null,Ue.default.createElement("div",{style:{fontWeight:700,fontSize:"1rem"}},"systemd-boot \u8D77\u52D5\u30D5\u30ED\u30FC"),Ue.default.createElement("div",{style:{fontSize:"0.8rem",opacity:.8}},"\u300C\u3069\u3053\u304B\u3089\u3069\u3053\u3078\u98DB\u3093\u3067\u3044\u308B\u304B\u300D\u3092\u3056\u3063\u304F\u308A\u63B4\u3080\u305F\u3081\u306E\u56F3"))),Ue.default.createElement("ol",{style:{listStyle:"none",padding:0,margin:0}},wm.map((n,i)=>Ue.default.createElement("li",{key:n.title,style:{display:"flex",alignItems:"flex-start",gap:"0.75rem",marginBottom:i===wm.length-1?0:"0.9rem",opacity:e?1:0,transform:e?"translateY(0px)":"translateY(6px)",transition:"opacity 260ms ease-out, transform 260ms ease-out",transitionDelay:e?`${80+i*90}ms`:"0ms"}},Ue.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"2px"}},Ue.default.createElement("div",{style:{width:"22px",height:"22px",borderRadius:"999px",border:"1px solid rgba(148,163,184,0.8)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8rem",fontWeight:700,background:"rgba(15,23,42,0.96)"}},i+1),i!==wm.length-1&&Ue.default.createElement("div",{style:{width:"2px",flexGrow:1,marginTop:"2px",background:"linear-gradient(to bottom, rgba(148,163,184,0.8), rgba(148,163,184,0.05))"}})),Ue.default.createElement("div",null,Ue.default.createElement("div",{style:{fontWeight:600,marginBottom:"2px"}},n.title),Ue.default.createElement("div",{style:{fontSize:"0.85rem",opacity:.9}},n.desc))))),Ue.default.createElement("p",{style:{fontSize:"0.8rem",opacity:.7,marginTop:"0.85rem"}},"\u203B \u5B9F\u969B\u306E\u30A8\u30F3\u30C8\u30EA\u8A2D\u5B9A\u306F\u672C\u6587\u4E2D\u306E loader/entries/*.conf \u306E\u4F8B\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")))}var Ue,wm,jx=xo(()=>{Ue=bo(xa()),wm=[{title:"UEFI",desc:"ASRock A520M Pro4 \u306E\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u304C\u6700\u521D\u306B\u8D77\u52D5\u3059\u308B\u3002"},{title:"ESP\uFF08vfat, /boot\uFF09",desc:"EFI System Partition \u4E0A\u306E /EFI/ \u914D\u4E0B\u304C\u63A2\u7D22\u3055\u308C\u308B\u3002"},{title:"systemd-boot",desc:"systemd-bootx64.efi \u304C\u5B9F\u884C\u3055\u308C\u3001\u30A8\u30F3\u30C8\u30EA\u4E00\u89A7\u3092\u8868\u793A\u3002"},{title:"Arch Linux / Windows Boot Manager",desc:"\u9078\u629E\u3057\u305F\u30A8\u30F3\u30C8\u30EA\u306B\u5FDC\u3058\u3066 vmlinuz \u307E\u305F\u306F bootmgfw.efi \u3092\u8D77\u52D5\u3002"}]});function HT(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function XT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ul(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Qb(){let e=Ul("canvas");return e.style.display="block",e}function Rg(...e){let t="THREE."+e.shift();ro?ro("log",t,...e):console.log(t,...e)}function jb(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Rt(...e){e=jb(e);let t="THREE."+e.shift();if(ro)ro("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Dt(...e){e=jb(e);let t="THREE."+e.shift();if(ro)ro("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function qa(...e){let t=e.join(" ");t in $x||($x[t]=!0,Rt(...e))}function $b(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}function ic(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[e&255]+mn[e>>8&255]+mn[e>>16&255]+mn[e>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function Yt(e,t,n){return Math.max(t,Math.min(n,e))}function WT(e,t){return(e%t+t)%t}function Dm(e,t,n){return(1-n)*e+n*t}function Ml(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ln(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qT(){let e={enabled:!0,workingColorSpace:Rl,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ie&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ie&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ss?Dl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Rl]:{primaries:t,whitePoint:i,transfer:Dl,toXYZ:eb,fromXYZ:nb,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:eb,fromXYZ:nb,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),e}function vs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ao(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function Lm(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?bh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}function Pm(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function Xm(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Ga.fromArray(e,a);let o=s.x*Math.abs(Ga.x)+s.y*Math.abs(Ga.y)+s.z*Math.abs(Ga.z),l=t.dot(Ga),c=n.dot(Ga),f=i.dot(Ga);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}function rE(e,t,n,i,s,a,r,o){let l;if(t.side===Tn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===xs,o),l===null)return null;$u.copy(o),$u.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo($u);return c<n.near||c>n.far?null:{distance:c,point:$u.clone(),object:e}}function th(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Ju),e.getVertexPosition(l,Ku),e.getVertexPosition(c,Qu);let f=rE(e,t,n,i,Ju,Ku,Qu,db);if(f){let p=new P;ra.getBarycoord(db,Ju,Ku,Qu,p),s&&(f.uv=ra.getInterpolatedAttribute(s,o,l,c,p,new Zt)),a&&(f.uv1=ra.getInterpolatedAttribute(a,o,l,c,p,new Zt)),r&&(f.normal=ra.getInterpolatedAttribute(r,o,l,c,p,new P),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};ra.getNormal(Ju,Ku,Qu,u.normal),f.face=u,f.barycoord=p}return f}function mb(e,t,n,i,s,a,r){let o=sg.distanceSqToPoint(e);if(o<n){let l=new P;sg.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}function Qa(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(gb(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(gb(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function vn(e){let t={};for(let n=0;n<e.length;n++){let i=Qa(e[n]);for(let s in i)t[s]=i[s]}return t}function gb(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function uE(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Dg(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}function sh(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Lg(e,t,n,i){let s=bE(i);switch(n){case Tg:return e*t;case Ag:return e*t/s.components*s.byteLength;case Zh:return e*t/s.components*s.byteLength;case ya:return e*t*2/s.components*s.byteLength;case Jh:return e*t*2/s.components*s.byteLength;case Eg:return e*t*3/s.components*s.byteLength;case di:return e*t*4/s.components*s.byteLength;case Kh:return e*t*4/s.components*s.byteLength;case Ql:case jl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $l:case tc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case jh:case tf:return Math.max(e,16)*Math.max(t,8)/4;case Qh:case $h:return Math.max(e,8)*Math.max(t,8)/2;case ef:case nf:case af:case rf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case sf:case ec:case of:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case lf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case cf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case uf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case hf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ff:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case df:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case pf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case mf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case gf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case yf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case _f:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case vf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case bf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Sf:case Mf:case Tf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ef:case Af:return Math.ceil(e/4)*Math.ceil(t/4)*8;case nc:case wf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bE(e){switch(e){case $n:case xg:return{byteLength:1,components:1};case mo:case bg:case Hi:return{byteLength:2,components:1};case qh:case Yh:return{byteLength:2,components:4};case Mi:case Wh:case Ti:return{byteLength:4,components:1};case Sg:case Mg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}var vb,og,xb,Zl,bb,po,xs,Tn,Vi,Gi,Ya,lg,cg,ug,Sb,oa,Mb,Tb,Eb,Ab,wb,Cb,Rb,Db,lh,ch,Nb,Ub,Lb,Ob,Ib,Pb,Bb,zb,Fb,uh,hh,fh,Za,dh,ph,mh,gh,hg,kb,Vb,Si,fg,dg,pg,mg,gg,yg,_g,vg,pa,Ka,Gh,Hh,Jl,yh,Bi,_h,sn,Gb,Kl,fn,Xh,ma,$n,xg,bg,mo,Wh,Mi,Ti,Hi,qh,Yh,go,Sg,Mg,Tg,Eg,di,zi,ga,Ag,Zh,ya,Jh,Kh,Ql,jl,$l,tc,Qh,jh,$h,tf,ef,nf,sf,af,rf,ec,of,lf,cf,uf,hf,ff,df,pf,mf,gf,yf,_f,vf,xf,bf,Sf,Mf,Tf,Ef,Af,nc,wf,Cl,vh,oh,jm,$m,tg,eg,Hb,wg,Xb,Ss,Zn,Rl,Dl,ie,Wa,ng,Wb,qb,Yb,Cf,Zb,Jb,Rf,Kb,ig,Cg,xi,Nl,$x,ro,tS,Fi,mn,Rm,xh,Zt,ki,P,Nm,tb,Lt,Um,eb,nb,Wt,Yr,bh,YT,oo,ZT,Om,On,Ee,Sh,Jn,Ll,Mh,Le,Zr,yi,JT,KT,ta,Fu,qn,ib,sb,la,Ol,QT,ab,Jr,ds,ku,Tl,jT,$T,rb,ob,lb,cb,tE,Kr,Im,Kn,_s,eE,lo,eS,ea,Vu,Jt,gn,Il,_i,ps,Bm,ms,Qr,jr,ub,zm,Fm,km,Vm,Gm,Hm,ra,ca,gs,vi,Gu,$r,to,eo,na,ia,Va,El,Hu,Xu,Ga,qe,Wu,nE,Mn,Pl,Bl,Fe,iE,Al,Wm,Ja,sE,fi,qm,no,Yn,wl,nn,_n,aE,ua,ys,Ym,qu,sa,Zm,Yu,Jm,zl,bi,hb,Ha,Zu,fb,Ju,Ku,Qu,Km,ju,db,$u,an,Th,Qm,oE,lE,Pi,Xa,cE,eh,Fl,co,pb,sg,nh,ih,kl,Vl,bs,Eh,Gl,uo,Ah,Hl,Xl,ho,fo,nS,hE,fE,Qn,wh,Ch,Rh,ha,Dh,Nh,Uh,Lh,jn,fa,Oh,Ih,Ph,Wl,da,Bh,zh,iS,Fh,ah,rh,Ii,ql,aa,yb,_b,yn,Yl,io,so,kh,Vh,Ng,dE,Ug,pE,mE,gE,yE,_E,vE,xE,ag,Se,O3,rg,Og=xo(()=>{vb=0,og=1,xb=2,Zl=1,bb=2,po=3,xs=0,Tn=1,Vi=2,Gi=0,Ya=1,lg=2,cg=3,ug=4,Sb=5,oa=100,Mb=101,Tb=102,Eb=103,Ab=104,wb=200,Cb=201,Rb=202,Db=203,lh=204,ch=205,Nb=206,Ub=207,Lb=208,Ob=209,Ib=210,Pb=211,Bb=212,zb=213,Fb=214,uh=0,hh=1,fh=2,Za=3,dh=4,ph=5,mh=6,gh=7,hg=0,kb=1,Vb=2,Si=0,fg=1,dg=2,pg=3,mg=4,gg=5,yg=6,_g=7,vg=300,pa=301,Ka=302,Gh=303,Hh=304,Jl=306,yh=1e3,Bi=1001,_h=1002,sn=1003,Gb=1004,Kl=1005,fn=1006,Xh=1007,ma=1008,$n=1009,xg=1010,bg=1011,mo=1012,Wh=1013,Mi=1014,Ti=1015,Hi=1016,qh=1017,Yh=1018,go=1020,Sg=35902,Mg=35899,Tg=1021,Eg=1022,di=1023,zi=1026,ga=1027,Ag=1028,Zh=1029,ya=1030,Jh=1031,Kh=1033,Ql=33776,jl=33777,$l=33778,tc=33779,Qh=35840,jh=35841,$h=35842,tf=35843,ef=36196,nf=37492,sf=37496,af=37488,rf=37489,ec=37490,of=37491,lf=37808,cf=37809,uf=37810,hf=37811,ff=37812,df=37813,pf=37814,mf=37815,gf=37816,yf=37817,_f=37818,vf=37819,xf=37820,bf=37821,Sf=36492,Mf=36494,Tf=36495,Ef=36283,Af=36284,nc=36285,wf=36286,Cl=2300,vh=2301,oh=2302,jm=2303,$m=2400,tg=2401,eg=2402,Hb=3200,wg=0,Xb=1,Ss="",Zn="srgb",Rl="srgb-linear",Dl="linear",ie="srgb",Wa=7680,ng=519,Wb=512,qb=513,Yb=514,Cf=515,Zb=516,Jb=517,Rf=518,Kb=519,ig=35044,Cg="300 es",xi=2e3,Nl=2001;$x={},ro=null;tS={[uh]:hh,[fh]:mh,[dh]:gh,[Za]:ph,[hh]:uh,[mh]:fh,[gh]:dh,[ph]:Za},Fi=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rm=Math.PI/180,xh=180/Math.PI;Zt=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ki=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],v=a[r+2],M=a[r+3];if(p!==M||l!==u||c!==d||f!==v){let y=l*u+c*d+f*v+p*M;y<0&&(u=-u,d=-d,v=-v,M=-M,y=-y);let h=1-o;if(y<.9995){let g=Math.acos(y),b=Math.sin(g);h=Math.sin(h*g)/b,o=Math.sin(o*g)/b,l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+M*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+M*o;let g=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=g,c*=g,f*=g,p*=g}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],v=a[r+3];return t[n]=o*v+f*p+l*d-c*u,t[n+1]=l*v+f*u+c*p-o*d,t[n+2]=c*v+f*d+o*u-l*p,t[n+3]=f*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"YXZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"ZXY":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"ZYX":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"YZX":this._x=u*f*p+c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p-u*d*v;break;case"XZY":this._x=u*f*p-c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p+u*d*v;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(tb.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(tb.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Nm.copy(this).projectOnVector(t),this.sub(Nm)}reflect(t){return this.sub(Nm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nm=new P,tb=new ki,Lt=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],v=i[8],M=s[0],y=s[3],h=s[6],g=s[1],b=s[4],m=s[7],T=s[2],E=s[5],w=s[8];return a[0]=r*M+o*g+l*T,a[3]=r*y+o*b+l*E,a[6]=r*h+o*m+l*w,a[1]=c*M+f*g+p*T,a[4]=c*y+f*b+p*E,a[7]=c*h+f*m+p*w,a[2]=u*M+d*g+v*T,a[5]=u*y+d*b+v*E,a[8]=u*h+d*m+v*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,v=n*p+i*u+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return t[0]=p*M,t[1]=(s*c-f*i)*M,t[2]=(o*i-s*r)*M,t[3]=u*M,t[4]=(f*n-s*l)*M,t[5]=(s*a-o*n)*M,t[6]=d*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*a)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return qa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Um.makeScale(t,n)),this}rotate(t){return qa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Um.makeRotation(-t)),this}translate(t,n){return qa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Um.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Um=new Lt,eb=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nb=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt=qT();bh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Yr===void 0&&(Yr=Ul("canvas")),Yr.width=t.width,Yr.height=t.height;let s=Yr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Yr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Ul("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=vs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vs(n[i]/255)*255):n[i]=vs(n[i]);return{data:n,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},YT=0,oo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=ic(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Lm(s[r].image)):a.push(Lm(s[r]))}else a=Lm(s);i.url=a}return n||(t.images[this.uuid]=i),i}};ZT=0,Om=new P,On=class e extends Fi{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Bi,s=Bi,a=fn,r=ma,o=di,l=$n,c=e.DEFAULT_ANISOTROPY,f=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=ic(),this.name="",this.source=new oo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Om).x}get height(){return this.source.getSize(Om).y}get depth(){return this.source.getSize(Om).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Rt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Rt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yh:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case _h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yh:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case _h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=vg;On.DEFAULT_ANISOTROPY=1;Ee=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],v=l[9],M=l[2],y=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-M)<.01&&Math.abs(v-y)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+M)<.1&&Math.abs(v+y)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let b=(c+1)/2,m=(d+1)/2,T=(h+1)/2,E=(f+u)/4,w=(p+M)/4,_=(v+y)/4;return b>m&&b>T?b<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(b),s=E/i,a=w/i):m>T?m<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(m),i=E/s,a=_/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=w/a,s=_/a),this.set(i,s,a,n),this}let g=Math.sqrt((y-v)*(y-v)+(p-M)*(p-M)+(u-f)*(u-f));return Math.abs(g)<.001&&(g=1),this.x=(y-v)/g,this.y=(p-M)/g,this.z=(u-f)/g,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this.w=Yt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this.w=Yt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sh=class extends Fi{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ee(0,0,t,n),this.scissorTest=!1,this.viewport=new Ee(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new On(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new oo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Sh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Ll=class extends On{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Mh=class extends On{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Le=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,v,M,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,M,y)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,M,y){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=v,h[11]=M,h[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Zr.setFromMatrixColumn(t,0).length(),a=1/Zr.setFromMatrixColumn(t,1).length(),r=1/Zr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,v=o*f,M=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,v=c*f,M=c*p;n[0]=u+M*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-v,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,v=c*f,M=c*p;n[0]=u-M*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*f,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,v=o*f,M=o*p;n[0]=l*f,n[4]=v*c-d,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,v=o*l,M=o*c;n[0]=l*f,n[4]=M-u*p,n[8]=v*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+v,n[10]=u-M*p}else if(t.order==="XZY"){let u=r*l,d=r*c,v=o*l,M=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+M,n[5]=r*f,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*f,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(JT,t,KT)}lookAt(t,n,i){let s=this.elements;return qn.subVectors(t,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),ta.crossVectors(i,qn),ta.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),ta.crossVectors(i,qn)),ta.normalize(),Fu.crossVectors(qn,ta),s[0]=ta.x,s[4]=Fu.x,s[8]=qn.x,s[1]=ta.y,s[5]=Fu.y,s[9]=qn.y,s[2]=ta.z,s[6]=Fu.z,s[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],v=i[2],M=i[6],y=i[10],h=i[14],g=i[3],b=i[7],m=i[11],T=i[15],E=s[0],w=s[4],_=s[8],A=s[12],R=s[1],D=s[5],O=s[9],Y=s[13],X=s[2],B=s[6],W=s[10],G=s[14],$=s[3],et=s[7],ft=s[11],gt=s[15];return a[0]=r*E+o*R+l*X+c*$,a[4]=r*w+o*D+l*B+c*et,a[8]=r*_+o*O+l*W+c*ft,a[12]=r*A+o*Y+l*G+c*gt,a[1]=f*E+p*R+u*X+d*$,a[5]=f*w+p*D+u*B+d*et,a[9]=f*_+p*O+u*W+d*ft,a[13]=f*A+p*Y+u*G+d*gt,a[2]=v*E+M*R+y*X+h*$,a[6]=v*w+M*D+y*B+h*et,a[10]=v*_+M*O+y*W+h*ft,a[14]=v*A+M*Y+y*G+h*gt,a[3]=g*E+b*R+m*X+T*$,a[7]=g*w+b*D+m*B+T*et,a[11]=g*_+b*O+m*W+T*ft,a[15]=g*A+b*Y+m*G+T*gt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],v=t[3],M=t[7],y=t[11],h=t[15],g=l*d-c*u,b=o*d-c*p,m=o*u-l*p,T=r*d-c*f,E=r*u-l*f,w=r*p-o*f;return n*(M*g-y*b+h*m)-i*(v*g-y*T+h*E)+s*(v*b-M*T+h*w)-a*(v*m-M*E+y*w)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],v=t[12],M=t[13],y=t[14],h=t[15],g=n*o-i*r,b=n*l-s*r,m=n*c-a*r,T=i*l-s*o,E=i*c-a*o,w=s*c-a*l,_=f*M-p*v,A=f*y-u*v,R=f*h-d*v,D=p*y-u*M,O=p*h-d*M,Y=u*h-d*y,X=g*Y-b*O+m*D+T*R-E*A+w*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/X;return t[0]=(o*Y-l*O+c*D)*B,t[1]=(s*O-i*Y-a*D)*B,t[2]=(M*w-y*E+h*T)*B,t[3]=(u*E-p*w-d*T)*B,t[4]=(l*R-r*Y-c*A)*B,t[5]=(n*Y-s*R+a*A)*B,t[6]=(y*m-v*w-h*b)*B,t[7]=(f*w-u*m+d*b)*B,t[8]=(r*O-o*R+c*_)*B,t[9]=(i*R-n*O-a*_)*B,t[10]=(v*E-M*m+h*g)*B,t[11]=(p*m-f*E-d*g)*B,t[12]=(o*A-r*D-l*_)*B,t[13]=(n*D-i*A+s*_)*B,t[14]=(M*b-v*T-y*g)*B,t[15]=(f*T-p*b+u*g)*B,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,v=a*p,M=r*f,y=r*p,h=o*p,g=l*c,b=l*f,m=l*p,T=i.x,E=i.y,w=i.z;return s[0]=(1-(M+h))*T,s[1]=(d+m)*T,s[2]=(v-b)*T,s[3]=0,s[4]=(d-m)*E,s[5]=(1-(u+h))*E,s[6]=(y+g)*E,s[7]=0,s[8]=(v+b)*w,s[9]=(y-g)*w,s[10]=(1-(u+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Zr.set(s[0],s[1],s[2]).length(),o=Zr.set(s[4],s[5],s[6]).length(),l=Zr.set(s[8],s[9],s[10]).length();a<0&&(r=-r),yi.copy(this);let c=1/r,f=1/o,p=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=f,yi.elements[5]*=f,yi.elements[6]*=f,yi.elements[8]*=p,yi.elements[9]*=p,yi.elements[10]*=p,n.setFromRotationMatrix(yi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=xi,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),v,M;if(l)v=a/(r-a),M=r*a/(r-a);else if(o===xi)v=-(r+a)/(r-a),M=-2*r*a/(r-a);else if(o===Nl)v=-r/(r-a),M=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=xi,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),v,M;if(l)v=1/(r-a),M=r/(r-a);else if(o===xi)v=-2/(r-a),M=-(r+a)/(r-a);else if(o===Nl)v=-1/(r-a),M=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Zr=new P,yi=new Le,JT=new P(0,0,0),KT=new P(1,1,1),ta=new P,Fu=new P,qn=new P,ib=new Le,sb=new ki,la=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Yt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return ib.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ib,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return sb.setFromEuler(this),this.setFromQuaternion(sb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};la.DEFAULT_ORDER="XYZ";Ol=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},QT=0,ab=new P,Jr=new ki,ds=new Le,ku=new P,Tl=new P,jT=new P,$T=new ki,rb=new P(1,0,0),ob=new P(0,1,0),lb=new P(0,0,1),cb={type:"added"},tE={type:"removed"},Kr={type:"childadded",child:null},Im={type:"childremoved",child:null},Kn=class e extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=ic(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new P,n=new la,i=new ki,s=new P(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Lt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(rb,t)}rotateY(t){return this.rotateOnAxis(ob,t)}rotateZ(t){return this.rotateOnAxis(lb,t)}translateOnAxis(t,n){return ab.copy(t).applyQuaternion(this.quaternion),this.position.add(ab.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(rb,t)}translateY(t){return this.translateOnAxis(ob,t)}translateZ(t){return this.translateOnAxis(lb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?ku.copy(t):ku.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(Tl,ku,this.up):ds.lookAt(ku,Tl,this.up),this.quaternion.setFromRotationMatrix(ds),s&&(ds.extractRotation(s.matrixWorld),Jr.setFromRotationMatrix(ds),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cb),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(tE),Im.child=t,this.dispatchEvent(Im),Im.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cb),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,t,jT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,$T,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Kn.DEFAULT_UP=new P(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;_s=class extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}},eE={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let M of t.hand.values()){let y=n.getJointPose(M,i),h=this._getHandJoint(c,M);y!==null&&(h.matrix.fromArray(y.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=y.radius),h.visible=y!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eE)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new _s;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},eS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ea={h:0,s:0,l:0},Vu={h:0,s:0,l:0};Jt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Wt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Wt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Wt.workingColorSpace){if(t=WT(t,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Pm(r,a,t+1/3),this.g=Pm(r,a,t),this.b=Pm(r,a,t-1/3)}return Wt.colorSpaceToWorking(this,s),this}setStyle(t,n=Zn){function i(a){a!==void 0&&parseFloat(a)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Zn){let i=eS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Zn){return Wt.workingToColorSpace(gn.copy(this),t),Math.round(Yt(gn.r*255,0,255))*65536+Math.round(Yt(gn.g*255,0,255))*256+Math.round(Yt(gn.b*255,0,255))}getHexString(t=Zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Wt.workingColorSpace){Wt.workingToColorSpace(gn.copy(this),n);let i=gn.r,s=gn.g,a=gn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Wt.workingColorSpace){return Wt.workingToColorSpace(gn.copy(this),n),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=Zn){Wt.workingToColorSpace(gn.copy(this),t);let n=gn.r,i=gn.g,s=gn.b;return t!==Zn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ea),this.setHSL(ea.h+t,ea.s+n,ea.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ea),t.getHSL(Vu);let i=Dm(ea.h,Vu.h,n),s=Dm(ea.s,Vu.s,n),a=Dm(ea.l,Vu.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Jt;Jt.NAMES=eS;Il=class extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new la,this.environmentIntensity=1,this.environmentRotation=new la,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},_i=new P,ps=new P,Bm=new P,ms=new P,Qr=new P,jr=new P,ub=new P,zm=new P,Fm=new P,km=new P,Vm=new Ee,Gm=new Ee,Hm=new Ee,ra=class e{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),_i.subVectors(t,n),s.cross(_i);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){_i.subVectors(s,n),ps.subVectors(i,n),Bm.subVectors(t,n);let r=_i.dot(_i),o=_i.dot(ps),l=_i.dot(Bm),c=ps.dot(ps),f=ps.dot(Bm),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,v=(r*f-o*l)*u;return a.set(1-d-v,v,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ms)===null?!1:ms.x>=0&&ms.y>=0&&ms.x+ms.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,ms)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ms.x),l.addScaledVector(r,ms.y),l.addScaledVector(o,ms.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Vm.setScalar(0),Gm.setScalar(0),Hm.setScalar(0),Vm.fromBufferAttribute(t,n),Gm.fromBufferAttribute(t,i),Hm.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Vm,a.x),r.addScaledVector(Gm,a.y),r.addScaledVector(Hm,a.z),r}static isFrontFacing(t,n,i,s){return _i.subVectors(i,n),ps.subVectors(t,n),_i.cross(ps).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),ps.subVectors(this.a,this.b),_i.cross(ps).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Qr.subVectors(s,i),jr.subVectors(a,i),zm.subVectors(t,i);let l=Qr.dot(zm),c=jr.dot(zm);if(l<=0&&c<=0)return n.copy(i);Fm.subVectors(t,s);let f=Qr.dot(Fm),p=jr.dot(Fm);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(Qr,r);km.subVectors(t,a);let d=Qr.dot(km),v=jr.dot(km);if(v>=0&&d<=v)return n.copy(a);let M=d*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(jr,o);let y=f*v-d*p;if(y<=0&&p-f>=0&&d-v>=0)return ub.subVectors(a,s),o=(p-f)/(p-f+(d-v)),n.copy(s).addScaledVector(ub,o);let h=1/(y+M+u);return r=M*h,o=u*h,n.copy(i).addScaledVector(Qr,r).addScaledVector(jr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ca=class{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(vi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=vi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,vi):vi.fromBufferAttribute(a,r),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gu.copy(i.boundingBox)),Gu.applyMatrix4(t.matrixWorld),this.union(Gu)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(El),Hu.subVectors(this.max,El),$r.subVectors(t.a,El),to.subVectors(t.b,El),eo.subVectors(t.c,El),na.subVectors(to,$r),ia.subVectors(eo,to),Va.subVectors($r,eo);let n=[0,-na.z,na.y,0,-ia.z,ia.y,0,-Va.z,Va.y,na.z,0,-na.x,ia.z,0,-ia.x,Va.z,0,-Va.x,-na.y,na.x,0,-ia.y,ia.x,0,-Va.y,Va.x,0];return!Xm(n,$r,to,eo,Hu)||(n=[1,0,0,0,1,0,0,0,1],!Xm(n,$r,to,eo,Hu))?!1:(Xu.crossVectors(na,ia),n=[Xu.x,Xu.y,Xu.z],Xm(n,$r,to,eo,Hu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},gs=[new P,new P,new P,new P,new P,new P,new P,new P],vi=new P,Gu=new ca,$r=new P,to=new P,eo=new P,na=new P,ia=new P,Va=new P,El=new P,Hu=new P,Xu=new P,Ga=new P;qe=new P,Wu=new Zt,nE=0,Mn=class extends Fi{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=ig,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wu.fromBufferAttribute(this,n),Wu.applyMatrix3(t),this.setXY(n,Wu.x,Wu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix3(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix4(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyNormalMatrix(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.transformDirection(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ml(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Ln(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ml(n,this.array)),n}setX(t,n){return this.normalized&&(n=Ln(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ml(n,this.array)),n}setY(t,n){return this.normalized&&(n=Ln(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ml(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Ln(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ml(n,this.array)),n}setW(t,n){return this.normalized&&(n=Ln(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array),s=Ln(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Ln(n,this.array),i=Ln(i,this.array),s=Ln(s,this.array),a=Ln(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ig&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}},Pl=class extends Mn{constructor(t,n,i){super(new Uint16Array(t),n,i)}},Bl=class extends Mn{constructor(t,n,i){super(new Uint32Array(t),n,i)}},Fe=class extends Mn{constructor(t,n,i){super(new Float32Array(t),n,i)}},iE=new ca,Al=new P,Wm=new P,Ja=class{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):iE.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Al.subVectors(t,this.center);let n=Al.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Al,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Al.copy(t.center).add(Wm)),this.expandByPoint(Al.copy(t.center).sub(Wm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},sE=0,fi=new Le,qm=new Kn,no=new P,Yn=new ca,wl=new ca,nn=new P,_n=class e extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=ic(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(HT(t)?Bl:Pl)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Lt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,n,i){return fi.makeTranslation(t,n,i),this.applyMatrix4(fi),this}scale(t,n,i){return fi.makeScale(t,n,i),this.applyMatrix4(fi),this}lookAt(t){return qm.lookAt(t),qm.updateMatrix(),this.applyMatrix4(qm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Fe(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Yn.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ja);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];wl.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Yn.min,wl.min),Yn.expandByPoint(nn),nn.addVectors(Yn.max,wl.max),Yn.expandByPoint(nn)):(Yn.expandByPoint(wl.min),Yn.expandByPoint(wl.max))}Yn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)nn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(nn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)nn.fromBufferAttribute(o,c),l&&(no.fromBufferAttribute(t,c),nn.add(no)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new P,l[_]=new P;let c=new P,f=new P,p=new P,u=new Zt,d=new Zt,v=new Zt,M=new P,y=new P;function h(_,A,R){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,A),p.fromBufferAttribute(i,R),u.fromBufferAttribute(a,_),d.fromBufferAttribute(a,A),v.fromBufferAttribute(a,R),f.sub(c),p.sub(c),d.sub(u),v.sub(u);let D=1/(d.x*v.y-v.x*d.y);isFinite(D)&&(M.copy(f).multiplyScalar(v.y).addScaledVector(p,-d.y).multiplyScalar(D),y.copy(p).multiplyScalar(d.x).addScaledVector(f,-v.x).multiplyScalar(D),o[_].add(M),o[A].add(M),o[R].add(M),l[_].add(y),l[A].add(y),l[R].add(y))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let _=0,A=g.length;_<A;++_){let R=g[_],D=R.start,O=R.count;for(let Y=D,X=D+O;Y<X;Y+=3)h(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let b=new P,m=new P,T=new P,E=new P;function w(_){T.fromBufferAttribute(s,_),E.copy(T);let A=o[_];b.copy(A),b.sub(T.multiplyScalar(T.dot(A))).normalize(),m.crossVectors(E,A);let D=m.dot(l[_])<0?-1:1;r.setXYZW(_,b.x,b.y,b.z,D)}for(let _=0,A=g.length;_<A;++_){let R=g[_],D=R.start,O=R.count;for(let Y=D,X=D+O;Y<X;Y+=3)w(t.getX(Y+0)),w(t.getX(Y+1)),w(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new P,a=new P,r=new P,o=new P,l=new P,c=new P,f=new P,p=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){let v=t.getX(u+0),M=t.getX(u+1),y=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,M),r.fromBufferAttribute(n,y),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,y),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)nn.fromBufferAttribute(t,n),nn.normalize(),t.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,v=0;for(let M=0,y=l.length;M<y;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*f;for(let h=0;h<f;h++)u[v++]=c[d++]}return new Mn(u,f,p)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},aE=0,ua=class extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=ic(),this.name="",this.type="Material",this.blending=Ya,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=oa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Rt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Rt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ya&&(i.blending=this.blending),this.side!==xs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==lh&&(i.blendSrc=this.blendSrc),this.blendDst!==ch&&(i.blendDst=this.blendDst),this.blendEquation!==oa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ng&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Zt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ys=new P,Ym=new P,qu=new P,sa=new P,Zm=new P,Yu=new P,Jm=new P,zl=class{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ys)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ys.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ys.copy(this.origin).addScaledVector(this.direction,n),ys.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Ym.copy(t).add(n).multiplyScalar(.5),qu.copy(n).sub(t).normalize(),sa.copy(this.origin).sub(Ym);let a=t.distanceTo(n)*.5,r=-this.direction.dot(qu),o=sa.dot(this.direction),l=-sa.dot(qu),c=sa.lengthSq(),f=Math.abs(1-r*r),p,u,d,v;if(f>0)if(p=r*l-o,u=r*o-l,v=a*f,p>=0)if(u>=-v)if(u<=v){let M=1/f;p*=M,u*=M,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Ym).addScaledVector(qu,u),d}intersectSphere(t,n){ys.subVectors(t.center,this.origin);let i=ys.dot(this.direction),s=ys.dot(ys)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,ys)!==null}intersectTriangle(t,n,i,s,a){Zm.subVectors(n,t),Yu.subVectors(i,t),Jm.crossVectors(Zm,Yu);let r=this.direction.dot(Jm),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;sa.subVectors(this.origin,t);let l=o*this.direction.dot(Yu.crossVectors(sa,Yu));if(l<0)return null;let c=o*this.direction.dot(Zm.cross(sa));if(c<0||l+c>r)return null;let f=-o*sa.dot(Jm);return f<0?null:this.at(f/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bi=class extends ua{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.combine=hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},hb=new Le,Ha=new zl,Zu=new Ja,fb=new P,Ju=new P,Ku=new P,Qu=new P,Km=new P,ju=new P,db=new P,$u=new P,an=class extends Kn{constructor(t=new _n,n=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){ju.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(Km.fromBufferAttribute(p,t),r?ju.addScaledVector(Km,f):ju.addScaledVector(Km.sub(n),f))}n.add(ju)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zu.copy(i.boundingSphere),Zu.applyMatrix4(a),Ha.copy(t.ray).recast(t.near),!(Zu.containsPoint(Ha.origin)===!1&&(Ha.intersectSphere(Zu,fb)===null||Ha.origin.distanceToSquared(fb)>(t.far-t.near)**2))&&(hb.copy(a).invert(),Ha.copy(t.ray).applyMatrix4(hb),!(i.boundingBox!==null&&Ha.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ha)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){let y=u[v],h=r[y.materialIndex],g=Math.max(y.start,d.start),b=Math.min(o.count,Math.min(y.start+y.count,d.start+d.count));for(let m=g,T=b;m<T;m+=3){let E=o.getX(m),w=o.getX(m+1),_=o.getX(m+2);s=th(this,h,t,i,c,f,p,E,w,_),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let y=v,h=M;y<h;y+=3){let g=o.getX(y),b=o.getX(y+1),m=o.getX(y+2);s=th(this,r,t,i,c,f,p,g,b,m),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){let y=u[v],h=r[y.materialIndex],g=Math.max(y.start,d.start),b=Math.min(l.count,Math.min(y.start+y.count,d.start+d.count));for(let m=g,T=b;m<T;m+=3){let E=m,w=m+1,_=m+2;s=th(this,h,t,i,c,f,p,E,w,_),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let y=v,h=M;y<h;y+=3){let g=y,b=y+1,m=y+2;s=th(this,r,t,i,c,f,p,g,b,m),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}}};Th=class extends On{constructor(t=null,n=1,i=1,s,a,r,o,l,c=sn,f=sn,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qm=new P,oE=new P,lE=new Lt,Pi=class{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Qm.subVectors(i,n).cross(oE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Qm),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||lE.getNormalMatrix(t),s=this.coplanarPoint(Qm).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xa=new Ja,cE=new Zt(.5,.5),eh=new P,Fl=class{constructor(t=new Pi,n=new Pi,i=new Pi,s=new Pi,a=new Pi,r=new Pi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=xi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],v=a[8],M=a[9],y=a[10],h=a[11],g=a[12],b=a[13],m=a[14],T=a[15];if(s[0].setComponents(c-r,d-f,h-v,T-g).normalize(),s[1].setComponents(c+r,d+f,h+v,T+g).normalize(),s[2].setComponents(c+o,d+p,h+M,T+b).normalize(),s[3].setComponents(c-o,d-p,h-M,T-b).normalize(),i)s[4].setComponents(l,u,y,m).normalize(),s[5].setComponents(c-l,d-u,h-y,T-m).normalize();else if(s[4].setComponents(c-l,d-u,h-y,T-m).normalize(),n===xi)s[5].setComponents(c+l,d+u,h+y,T+m).normalize();else if(n===Nl)s[5].setComponents(l,u,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xa)}intersectsSprite(t){Xa.center.set(0,0,0);let n=cE.distanceTo(t.center);return Xa.radius=.7071067811865476+n,Xa.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xa)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(eh.x=s.normal.x>0?t.max.x:t.min.x,eh.y=s.normal.y>0?t.max.y:t.min.y,eh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(eh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},co=class extends ua{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pb=new Le,sg=new zl,nh=new Ja,ih=new P,kl=class extends Kn{constructor(t=new _n,n=new co){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nh.copy(i.boundingSphere),nh.applyMatrix4(s),nh.radius+=a,t.ray.intersectsSphere(nh)===!1)return;pb.copy(s).invert(),sg.copy(t.ray).applyMatrix4(pb);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){let u=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let v=u,M=d;v<M;v++){let y=c.getX(v);ih.fromBufferAttribute(p,y),mb(ih,y,l,s,t,n,this)}}else{let u=Math.max(0,r.start),d=Math.min(p.count,r.start+r.count);for(let v=u,M=d;v<M;v++)ih.fromBufferAttribute(p,v),mb(ih,v,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};Vl=class extends On{constructor(t=[],n=pa,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bs=class extends On{constructor(t,n,i=Mi,s,a,r,o=sn,l=sn,c,f=zi,p=1){if(f!==zi&&f!==ga)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new oo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Eh=class extends bs{constructor(t,n=Mi,i=pa,s,a,r=sn,o=sn,l,c=zi){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Gl=class extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},uo=class e extends _n{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(f,3)),this.setAttribute("uv",new Fe(p,2));function v(M,y,h,g,b,m,T,E,w,_,A){let R=m/w,D=T/_,O=m/2,Y=T/2,X=E/2,B=w+1,W=_+1,G=0,$=0,et=new P;for(let ft=0;ft<W;ft++){let gt=ft*D-Y;for(let vt=0;vt<B;vt++){let jt=vt*R-O;et[M]=jt*g,et[y]=gt*b,et[h]=X,c.push(et.x,et.y,et.z),et[M]=0,et[y]=0,et[h]=E>0?1:-1,f.push(et.x,et.y,et.z),p.push(vt/w),p.push(1-ft/_),G+=1}}for(let ft=0;ft<_;ft++)for(let gt=0;gt<w;gt++){let vt=u+gt+B*ft,jt=u+gt+B*(ft+1),Ae=u+(gt+1)+B*(ft+1),$t=u+(gt+1)+B*ft;l.push(vt,jt,$t),l.push(jt,Ae,$t),$+=6}o.addGroup(d,$,A),d+=$,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ah=class e extends _n{constructor(t=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:s};let a=[],r=[];o(s),c(i),f(),this.setAttribute("position",new Fe(a,3)),this.setAttribute("normal",new Fe(a.slice(),3)),this.setAttribute("uv",new Fe(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(g){let b=new P,m=new P,T=new P;for(let E=0;E<n.length;E+=3)d(n[E+0],b),d(n[E+1],m),d(n[E+2],T),l(b,m,T,g)}function l(g,b,m,T){let E=T+1,w=[];for(let _=0;_<=E;_++){w[_]=[];let A=g.clone().lerp(m,_/E),R=b.clone().lerp(m,_/E),D=E-_;for(let O=0;O<=D;O++)O===0&&_===E?w[_][O]=A:w[_][O]=A.clone().lerp(R,O/D)}for(let _=0;_<E;_++)for(let A=0;A<2*(E-_)-1;A++){let R=Math.floor(A/2);A%2===0?(u(w[_][R+1]),u(w[_+1][R]),u(w[_][R])):(u(w[_][R+1]),u(w[_+1][R+1]),u(w[_+1][R]))}}function c(g){let b=new P;for(let m=0;m<a.length;m+=3)b.x=a[m+0],b.y=a[m+1],b.z=a[m+2],b.normalize().multiplyScalar(g),a[m+0]=b.x,a[m+1]=b.y,a[m+2]=b.z}function f(){let g=new P;for(let b=0;b<a.length;b+=3){g.x=a[b+0],g.y=a[b+1],g.z=a[b+2];let m=y(g)/2/Math.PI+.5,T=h(g)/Math.PI+.5;r.push(m,1-T)}v(),p()}function p(){for(let g=0;g<r.length;g+=6){let b=r[g+0],m=r[g+2],T=r[g+4],E=Math.max(b,m,T),w=Math.min(b,m,T);E>.9&&w<.1&&(b<.2&&(r[g+0]+=1),m<.2&&(r[g+2]+=1),T<.2&&(r[g+4]+=1))}}function u(g){a.push(g.x,g.y,g.z)}function d(g,b){let m=g*3;b.x=t[m+0],b.y=t[m+1],b.z=t[m+2]}function v(){let g=new P,b=new P,m=new P,T=new P,E=new Zt,w=new Zt,_=new Zt;for(let A=0,R=0;A<a.length;A+=9,R+=6){g.set(a[A+0],a[A+1],a[A+2]),b.set(a[A+3],a[A+4],a[A+5]),m.set(a[A+6],a[A+7],a[A+8]),E.set(r[R+0],r[R+1]),w.set(r[R+2],r[R+3]),_.set(r[R+4],r[R+5]),T.copy(g).add(b).add(m).divideScalar(3);let D=y(T);M(E,R+0,g,D),M(w,R+2,b,D),M(_,R+4,m,D)}}function M(g,b,m,T){T<0&&g.x===1&&(r[b]=g.x-1),m.x===0&&m.z===0&&(r[b]=T/2/Math.PI+.5)}function y(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Hl=class e extends Ah{constructor(t=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}},Xl=class e extends _n{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],v=[],M=[],y=[];for(let h=0;h<f;h++){let g=h*u-r;for(let b=0;b<c;b++){let m=b*p-a;v.push(m,-g,0),M.push(0,0,1),y.push(b/o),y.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){let b=g+c*h,m=g+c*(h+1),T=g+1+c*(h+1),E=g+1+c*h;d.push(b,m,E),d.push(m,T,E)}this.setIndex(d),this.setAttribute("position",new Fe(v,3)),this.setAttribute("normal",new Fe(M,3)),this.setAttribute("uv",new Fe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ho=class e extends _n{constructor(t=1,n=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,f=[],p=new P,u=new P,d=[],v=[],M=[],y=[];for(let h=0;h<=i;h++){let g=[],b=h/i,m=r+b*o,T=t*Math.cos(m),E=Math.sqrt(t*t-T*T),w=0;h===0&&r===0?w=.5/n:h===i&&l===Math.PI&&(w=-.5/n);for(let _=0;_<=n;_++){let A=_/n,R=s+A*a;p.x=-E*Math.cos(R),p.y=T,p.z=E*Math.sin(R),v.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),y.push(A+w,1-b),g.push(c++)}f.push(g)}for(let h=0;h<i;h++)for(let g=0;g<n;g++){let b=f[h][g+1],m=f[h][g],T=f[h+1][g],E=f[h+1][g+1];(h!==0||r>0)&&d.push(b,m,E),(h!==i-1||l<Math.PI)&&d.push(m,T,E)}this.setIndex(d),this.setAttribute("position",new Fe(v,3)),this.setAttribute("normal",new Fe(M,3)),this.setAttribute("uv",new Fe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},fo=class e extends _n{constructor(t=1,n=.4,i=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],f=[],p=[],u=new P,d=new P,v=new P;for(let M=0;M<=i;M++){let y=r+M/i*o;for(let h=0;h<=s;h++){let g=h/s*a;d.x=(t+n*Math.cos(y))*Math.cos(g),d.y=(t+n*Math.cos(y))*Math.sin(g),d.z=n*Math.sin(y),c.push(d.x,d.y,d.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),v.subVectors(d,u).normalize(),f.push(v.x,v.y,v.z),p.push(h/s),p.push(M/i)}}for(let M=1;M<=i;M++)for(let y=1;y<=s;y++){let h=(s+1)*M+y-1,g=(s+1)*(M-1)+y-1,b=(s+1)*(M-1)+y,m=(s+1)*M+y;l.push(h,g,m),l.push(g,b,m)}this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(f,3)),this.setAttribute("uv",new Fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};nS={clone:Qa,merge:vn},hE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends ua{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hE,this.fragmentShader=fE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qa(t.uniforms),this.uniformsGroups=uE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Le().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wh=class extends Qn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ch=class extends ua{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Rh=class extends ua{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};ha=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dh=class extends ha{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$m,endingEnd:$m}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case tg:a=t,o=2*n-i;break;case eg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case tg:r=t,l=2*i-n;break;case eg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,v=(i-n)/(s-n),M=v*v,y=M*v,h=-u*y+2*u*M-u*v,g=(1+u)*y+(-1.5-2*u)*M+(-.5+u)*v+1,b=(-1-d)*y+(1.5+d)*M+.5*v,m=d*y-d*M;for(let T=0;T!==o;++T)a[T]=h*r[f+T]+g*r[c+T]+b*r[l+T]+m*r[p+T];return a}},Nh=class extends ha{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},Uh=class extends ha{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Lh=class extends ha{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let v=(i-n)/(s-n),M=1-v;for(let y=0;y!==o;++y)a[y]=r[c+y]*M+r[l+y]*v;return a}let u=o*2,d=t-1;for(let v=0;v!==o;++v){let M=r[c+v],y=r[l+v],h=d*u+v*2,g=p[h],b=p[h+1],m=t*u+v*2,T=f[m],E=f[m+1],w=(i-n)/(s-n),_,A,R,D,O;for(let Y=0;Y<8;Y++){_=w*w,A=_*w,R=1-w,D=R*R,O=D*R;let B=O*n+3*D*w*g+3*R*_*T+A*s-i;if(Math.abs(B)<1e-10)break;let W=3*D*(g-n)+6*R*w*(T-g)+3*_*(s-T);if(Math.abs(W)<1e-10)break;w=w-B/W,w=Math.max(0,Math.min(1,w))}a[v]=O*M+3*D*w*b+3*R*_*E+A*y}return a}},jn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sh(n,this.TimeBufferType),this.values=sh(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:sh(t.times,Array),values:sh(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Uh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Lh(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Cl:n=this.InterpolantFactoryMethodDiscrete;break;case vh:n=this.InterpolantFactoryMethodLinear;break;case oh:n=this.InterpolantFactoryMethodSmooth;break;case jm:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Rt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cl;case this.InterpolantFactoryMethodLinear:return vh;case this.InterpolantFactoryMethodSmooth:return oh;case this.InterpolantFactoryMethodBezier:return jm}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Dt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Dt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&XT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Dt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===oh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let v=0;v!==i;++v){let M=n[p+v];if(M!==n[u+v]||M!==n[d+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=vh;fa=class extends jn{constructor(t,n,i){super(t,n,i)}};fa.prototype.ValueTypeName="bool";fa.prototype.ValueBufferType=Array;fa.prototype.DefaultInterpolation=Cl;fa.prototype.InterpolantFactoryMethodLinear=void 0;fa.prototype.InterpolantFactoryMethodSmooth=void 0;Oh=class extends jn{constructor(t,n,i,s){super(t,n,i,s)}};Oh.prototype.ValueTypeName="color";Ih=class extends jn{constructor(t,n,i,s){super(t,n,i,s)}};Ih.prototype.ValueTypeName="number";Ph=class extends ha{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)ki.slerpFlat(a,0,r,c-o,r,c,l);return a}},Wl=class extends jn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Ph(this.times,this.values,this.getValueSize(),t)}};Wl.prototype.ValueTypeName="quaternion";Wl.prototype.InterpolantFactoryMethodSmooth=void 0;da=class extends jn{constructor(t,n,i){super(t,n,i)}};da.prototype.ValueTypeName="string";da.prototype.ValueBufferType=Array;da.prototype.DefaultInterpolation=Cl;da.prototype.InterpolantFactoryMethodLinear=void 0;da.prototype.InterpolantFactoryMethodSmooth=void 0;Bh=class extends jn{constructor(t,n,i,s){super(t,n,i,s)}};Bh.prototype.ValueTypeName="vector";zh=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},iS=new zh,Fh=class{constructor(t){this.manager=t!==void 0?t:iS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fh.DEFAULT_MATERIAL_NAME="__DEFAULT";ah=new P,rh=new ki,Ii=new P,ql=class extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ah,rh,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ah,rh,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(ah,rh,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ah,rh,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},aa=new P,yb=new Zt,_b=new Zt,yn=class extends ql{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rm*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xh*2*Math.atan(Math.tan(Rm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){aa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(aa.x,aa.y).multiplyScalar(-t/aa.z),aa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(aa.x,aa.y).multiplyScalar(-t/aa.z)}getViewSize(t,n){return this.getViewBounds(t,yb,_b),n.subVectors(_b,yb)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Rm*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Yl=class extends ql{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},io=-90,so=1,kh=class extends Kn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(io,so,t,n);s.layers=this.layers,this.add(s);let a=new yn(io,so,t,n);a.layers=this.layers,this.add(a);let r=new yn(io,so,t,n);r.layers=this.layers,this.add(r);let o=new yn(io,so,t,n);o.layers=this.layers,this.add(o);let l=new yn(io,so,t,n);l.layers=this.layers,this.add(l);let c=new yn(io,so,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Vh=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ng="\\[\\]\\.:\\/",dE=new RegExp("["+Ng+"]","g"),Ug="[^"+Ng+"]",pE="[^"+Ng.replace("\\.","")+"]",mE=/((?:WC+[\/:])*)/.source.replace("WC",Ug),gE=/(WCOD+)?/.source.replace("WCOD",pE),yE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ug),_E=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ug),vE=new RegExp("^"+mE+gE+yE+_E+"$"),xE=["material","materials","bones","map"],ag=class{constructor(t,n,i){let s=i||Se.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Se=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dE,"")}static parseTrackName(t){let n=vE.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);xE.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Dt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=ag;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];O3=new Float32Array(1),rg=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185")});function AS(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function ME(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){let v=p[u],M=p[d];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,p[u]=M)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){let M=p[d];e.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}function a2(e,t,n,i,s,a){let r=new Jt(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(g){let b=g.isScene===!0?g.background:null;if(b&&b.isTexture){let m=g.backgroundBlurriness>0;b=t.get(b,m)}return b}function v(g){let b=!1,m=d(g);m===null?y(r,o):m&&m.isColor&&(y(m,1),b=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(g,b){let m=d(b);m&&(m.isCubeTexture||m.mapping===Jl)?(c===void 0&&(c=new an(new uo(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Qa(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(s2.makeRotationFromEuler(b.backgroundRotation)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wS),c.material.toneMapped=Wt.getTransfer(m.colorSpace)!==ie,(f!==m||p!==m.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=m,p=m.version,u=e.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new an(new Xl(2,2),new Qn({name:"BackgroundMaterial",uniforms:Qa(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=m,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(m.colorSpace)!==ie,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||p!==m.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=m,p=m.version,u=e.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function y(g,b){g.getRGB(Df,Dg(e)),n.buffers.color.setClear(Df.r,Df.g,Df.b,b,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(g,b=1){r.set(g),o=b,y(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,y(r,o)},render:v,addToRenderList:M,dispose:h}}function r2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(D,O,Y,X,B){let W=!1,G=p(D,X,Y,O);a!==G&&(a=G,c(a.object)),W=d(D,X,Y,B),W&&v(D,X,Y,B),B!==null&&t.update(B,e.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,m(D,O,Y,X),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function f(D){return e.deleteVertexArray(D)}function p(D,O,Y,X){let B=X.wireframe===!0,W=i[O.id];W===void 0&&(W={},i[O.id]=W);let G=D.isInstancedMesh===!0?D.id:0,$=W[G];$===void 0&&($={},W[G]=$);let et=$[Y.id];et===void 0&&(et={},$[Y.id]=et);let ft=et[B];return ft===void 0&&(ft=u(l()),et[B]=ft),ft}function u(D){let O=[],Y=[],X=[];for(let B=0;B<n;B++)O[B]=0,Y[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:X,object:D,attributes:{},index:null}}function d(D,O,Y,X){let B=a.attributes,W=O.attributes,G=0,$=Y.getAttributes();for(let et in $)if($[et].location>=0){let gt=B[et],vt=W[et];if(vt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(vt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(vt=D.instanceColor)),gt===void 0||gt.attribute!==vt||vt&&gt.data!==vt.data)return!0;G++}return a.attributesNum!==G||a.index!==X}function v(D,O,Y,X){let B={},W=O.attributes,G=0,$=Y.getAttributes();for(let et in $)if($[et].location>=0){let gt=W[et];gt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(gt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(gt=D.instanceColor));let vt={};vt.attribute=gt,gt&&gt.data&&(vt.data=gt.data),B[et]=vt,G++}a.attributes=B,a.attributesNum=G,a.index=X}function M(){let D=a.newAttributes;for(let O=0,Y=D.length;O<Y;O++)D[O]=0}function y(D){h(D,0)}function h(D,O){let Y=a.newAttributes,X=a.enabledAttributes,B=a.attributeDivisors;Y[D]=1,X[D]===0&&(e.enableVertexAttribArray(D),X[D]=1),B[D]!==O&&(e.vertexAttribDivisor(D,O),B[D]=O)}function g(){let D=a.newAttributes,O=a.enabledAttributes;for(let Y=0,X=O.length;Y<X;Y++)O[Y]!==D[Y]&&(e.disableVertexAttribArray(Y),O[Y]=0)}function b(D,O,Y,X,B,W,G){G===!0?e.vertexAttribIPointer(D,O,Y,B,W):e.vertexAttribPointer(D,O,Y,X,B,W)}function m(D,O,Y,X){M();let B=X.attributes,W=Y.getAttributes(),G=O.defaultAttributeValues;for(let $ in W){let et=W[$];if(et.location>=0){let ft=B[$];if(ft===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ft=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ft=D.instanceColor)),ft!==void 0){let gt=ft.normalized,vt=ft.itemSize,jt=t.get(ft);if(jt===void 0)continue;let Ae=jt.buffer,$t=jt.type,K=jt.bytesPerElement,at=$t===e.INT||$t===e.UNSIGNED_INT||ft.gpuType===Wh;if(ft.isInterleavedBufferAttribute){let nt=ft.data,Ut=nt.stride,It=ft.offset;if(nt.isInstancedInterleavedBuffer){for(let wt=0;wt<et.locationSize;wt++)h(et.location+wt,nt.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let wt=0;wt<et.locationSize;wt++)y(et.location+wt);e.bindBuffer(e.ARRAY_BUFFER,Ae);for(let wt=0;wt<et.locationSize;wt++)b(et.location+wt,vt/et.locationSize,$t,gt,Ut*K,(It+vt/et.locationSize*wt)*K,at)}else{if(ft.isInstancedBufferAttribute){for(let nt=0;nt<et.locationSize;nt++)h(et.location+nt,ft.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let nt=0;nt<et.locationSize;nt++)y(et.location+nt);e.bindBuffer(e.ARRAY_BUFFER,Ae);for(let nt=0;nt<et.locationSize;nt++)b(et.location+nt,vt/et.locationSize,$t,gt,vt*K,vt/et.locationSize*nt*K,at)}}else if(G!==void 0){let gt=G[$];if(gt!==void 0)switch(gt.length){case 2:e.vertexAttrib2fv(et.location,gt);break;case 3:e.vertexAttrib3fv(et.location,gt);break;case 4:e.vertexAttrib4fv(et.location,gt);break;default:e.vertexAttrib1fv(et.location,gt)}}}}g()}function T(){A();for(let D in i){let O=i[D];for(let Y in O){let X=O[Y];for(let B in X){let W=X[B];for(let G in W)f(W[G].object),delete W[G];delete X[B]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let O=i[D.id];for(let Y in O){let X=O[Y];for(let B in X){let W=X[B];for(let G in W)f(W[G].object),delete W[G];delete X[B]}}delete i[D.id]}function w(D){for(let O in i){let Y=i[O];for(let X in Y){let B=Y[X];if(B[D.id]===void 0)continue;let W=B[D.id];for(let G in W)f(W[G].object),delete W[G];delete B[D.id]}}}function _(D){for(let O in i){let Y=i[O],X=D.isInstancedMesh===!0?D.id:0,B=Y[X];if(B!==void 0){for(let W in B){let G=B[W];for(let $ in G)f(G[$].object),delete G[$];delete B[W]}delete Y[X],Object.keys(Y).length===0&&delete i[O]}}}function A(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:y,disableUnusedAttributes:g}}function o2(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function l2(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==di&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let _=w===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==$n&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ti&&!_)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Rt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),y=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:y,maxAttributes:h,maxVertexUniforms:g,maxVaryings:b,maxFragmentUniforms:m,maxSamples:T,samples:E}}function c2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Pi,o=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let v=p.clippingPlanes,M=p.clipIntersection,y=p.clipShadows,h=e.get(p);if(!s||v===null||v.length===0||a&&!y)a?f(null):c();else{let g=a?0:i,b=g*4,m=h.clippingState||null;l.value=m,m=f(v,u,b,d);for(let T=0;T!==b;++T)m[T]=n[T];h.clippingState=m,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,v){let M=p!==null?p.length:0,y=null;if(M!==0){if(y=l.value,v!==!0||y===null){let h=d+M*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(y===null||y.length<h)&&(y=new Float32Array(h));for(let b=0,m=d;b!==M;++b,m+=4)r.copy(p[b]).applyMatrix4(g,o),r.normal.toArray(y,m),y[m+3]=r.constant}l.value=y,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}function f2(e){let t=[],n=[],i=[],s=e,a=e-_a+1+sS.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);t.push(o);let l=1/o;r>e-_a?l=sS[r-e+_a-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),f=-c,p=1+c,u=[f,f,p,f,p,p,f,f,p,p,f,p],d=6,v=6,M=3,y=2,h=1,g=new Float32Array(M*v*d),b=new Float32Array(y*v*d),m=new Float32Array(h*v*d);for(let E=0;E<d;E++){let w=E%3*2/3-1,_=E>2?0:-1,A=[w,_,0,w+2/3,_,0,w+2/3,_+1,0,w,_,0,w+2/3,_+1,0,w,_+1,0];g.set(A,M*v*E),b.set(u,y*v*E);let R=[E,E,E,E,E,E];m.set(R,h*v*E)}let T=new _n;T.setAttribute("position",new Mn(g,M)),T.setAttribute("uv",new Mn(b,y)),T.setAttribute("faceIndex",new Mn(m,h)),i.push(new an(T,null)),s>_a&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function rS(e,t,n){let i=new Jn(e,t,n);return i.texture.mapping=Jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function d2(e,t,n){return new Qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:u2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:If(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function p2(e,t,n){let i=new Float32Array(ja),s=new P(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:ja,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function oS(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function lS(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function If(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function m2(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Gh||d===Hh)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let M=new Lf(v.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,v=d===Gh||d===Hh,M=d===pa||d===Ka;if(v||M){let y=n.get(u),h=y!==void 0?y.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Uf(e)),y=v?i.fromEquirectangular(u,y):i.fromCubemap(u,y),y.texture.pmremVersion=u.pmremVersion,n.set(u,y),y.texture;if(y!==void 0)return y.texture;{let g=u.image;return v&&g&&g.height>0||M&&g&&l(g)?(i===null&&(i=new Uf(e)),y=v?i.fromEquirectangular(u):i.fromCubemap(u),y.texture.pmremVersion=u.pmremVersion,n.set(u,y),u.addEventListener("dispose",f),y.texture):null}}}return u}function o(u,d){return d===Gh?u.mapping=pa:d===Hh&&(u.mapping=Ka),u}function l(u){let d=0,v=6;for(let M=0;M<v;M++)u[M]!==void 0&&d++;return d===v}function c(u){let d=u.target;d.removeEventListener("dispose",c);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function g2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&qa("WebGLRenderer: "+i+" extension not supported."),s}}}function y2(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,v=p.attributes.position,M=0;if(v===void 0)return;if(d!==null){let g=d.array;M=d.version;for(let b=0,m=g.length;b<m;b+=3){let T=g[b+0],E=g[b+1],w=g[b+2];u.push(T,E,E,w,w,T)}}else{let g=v.array;M=v.version;for(let b=0,m=g.length/3-1;b<m;b+=3){let T=b+0,E=b+1,w=b+2;u.push(T,E,E,w,w,T)}}let y=new(v.count>=65535?Bl:Pl)(u,1);y.version=M;let h=a.get(p);h&&t.remove(h),a.set(p,y)}function f(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function _2(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let M=0;for(let y=0;y<d;y++)M+=u[y];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function v2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Dt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function x2(e,t,n){let i=new WeakMap,s=new Ee;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let A=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,y=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],b=0;d===!0&&(b=1),v===!0&&(b=2),M===!0&&(b=3);let m=o.attributes.position.count*b,T=1;m>t.maxTextureSize&&(T=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let E=new Float32Array(m*T*4*p),w=new Ll(E,m,T,p);w.type=Ti,w.needsUpdate=!0;let _=b*4;for(let R=0;R<p;R++){let D=y[R],O=h[R],Y=g[R],X=m*T*4*R;for(let B=0;B<D.count;B++){let W=B*_;d===!0&&(s.fromBufferAttribute(D,B),E[X+W+0]=s.x,E[X+W+1]=s.y,E[X+W+2]=s.z,E[X+W+3]=0),v===!0&&(s.fromBufferAttribute(O,B),E[X+W+4]=s.x,E[X+W+5]=s.y,E[X+W+6]=s.z,E[X+W+7]=0),M===!0&&(s.fromBufferAttribute(Y,B),E[X+W+8]=s.x,E[X+W+9]=s.y,E[X+W+10]=s.z,E[X+W+11]=Y.itemSize===4?s.w:1)}}u={count:p,texture:w,size:new Zt(m,T)},i.set(o,u),o.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function b2(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}function M2(e,t,n,i,s,a){let r=new Jn(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,depthTexture:s?new bs(t,n):void 0}),o=new Jn(t,n,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),l=new _n;l.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Fe([0,2,0,0,2,0],2));let c=new wh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new an(l,c),p=new Yl(-1,1,1,-1,0,1),u=null,d=null,v=!1,M,y=null,h=[],g=!1;this.setSize=function(b,m){r.setSize(b,m),o.setSize(b,m);for(let T=0;T<h.length;T++){let E=h[T];E.setSize&&E.setSize(b,m)}},this.setEffects=function(b){h=b,g=h.length>0&&h[0].isRenderPass===!0;let m=r.width,T=r.height;for(let E=0;E<h.length;E++){let w=h[E];w.setSize&&w.setSize(m,T)}},this.begin=function(b,m){if(v||b.toneMapping===Si&&h.length===0)return!1;if(y=m,m!==null){let T=m.width,E=m.height;(r.width!==T||r.height!==E)&&this.setSize(T,E)}return g===!1&&b.setRenderTarget(r),M=b.toneMapping,b.toneMapping=Si,!0},this.hasRenderPass=function(){return g},this.end=function(b,m){b.toneMapping=M,v=!0;let T=r,E=o;for(let w=0;w<h.length;w++){let _=h[w];if(_.enabled!==!1&&(_.render(b,E,T,m),_.needsSwap!==!1)){let A=T;T=E,E=A}}if(u!==b.outputColorSpace||d!==b.toneMapping){u=b.outputColorSpace,d=b.toneMapping,c.defines={},Wt.getTransfer(u)===ie&&(c.defines.SRGB_TRANSFER="");let w=S2[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(y),b.render(f,p),y=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}function vo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=cS[s];if(a===void 0&&(a=new Float32Array(s),cS[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Ke(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Pf(e,t){let n=uS[t];n===void 0&&(n=new Int32Array(t),uS[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function T2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function E2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2fv(this.addr,t),Qe(n,t)}}function A2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ke(n,t))return;e.uniform3fv(this.addr,t),Qe(n,t)}}function w2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4fv(this.addr,t),Qe(n,t)}}function C2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qe(n,t)}else{if(Ke(n,i))return;dS.set(i),e.uniformMatrix2fv(this.addr,!1,dS),Qe(n,i)}}function R2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qe(n,t)}else{if(Ke(n,i))return;fS.set(i),e.uniformMatrix3fv(this.addr,!1,fS),Qe(n,i)}}function D2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qe(n,t)}else{if(Ke(n,i))return;hS.set(i),e.uniformMatrix4fv(this.addr,!1,hS),Qe(n,i)}}function N2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function U2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2iv(this.addr,t),Qe(n,t)}}function L2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ke(n,t))return;e.uniform3iv(this.addr,t),Qe(n,t)}}function O2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4iv(this.addr,t),Qe(n,t)}}function I2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function P2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2uiv(this.addr,t),Qe(n,t)}}function B2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ke(n,t))return;e.uniform3uiv(this.addr,t),Qe(n,t)}}function z2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4uiv(this.addr,t),Qe(n,t)}}function F2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Vg.compareFunction=n.isReversedDepthBuffer()?Rf:Cf,a=Vg):a=CS,n.setTexture2D(t||a,s)}function k2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||DS,s)}function V2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||NS,s)}function G2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||RS,s)}function H2(e){switch(e){case 5126:return T2;case 35664:return E2;case 35665:return A2;case 35666:return w2;case 35674:return C2;case 35675:return R2;case 35676:return D2;case 5124:case 35670:return N2;case 35667:case 35671:return U2;case 35668:case 35672:return L2;case 35669:case 35673:return O2;case 5125:return I2;case 36294:return P2;case 36295:return B2;case 36296:return z2;case 35678:case 36198:case 36298:case 36306:case 35682:return F2;case 35679:case 36299:case 36307:return k2;case 35680:case 36300:case 36308:case 36293:return V2;case 36289:case 36303:case 36311:case 36292:return G2}}function X2(e,t){e.uniform1fv(this.addr,t)}function W2(e,t){let n=vo(t,this.size,2);e.uniform2fv(this.addr,n)}function q2(e,t){let n=vo(t,this.size,3);e.uniform3fv(this.addr,n)}function Y2(e,t){let n=vo(t,this.size,4);e.uniform4fv(this.addr,n)}function Z2(e,t){let n=vo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function J2(e,t){let n=vo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function K2(e,t){let n=vo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Q2(e,t){e.uniform1iv(this.addr,t)}function j2(e,t){e.uniform2iv(this.addr,t)}function $2(e,t){e.uniform3iv(this.addr,t)}function tC(e,t){e.uniform4iv(this.addr,t)}function eC(e,t){e.uniform1uiv(this.addr,t)}function nC(e,t){e.uniform2uiv(this.addr,t)}function iC(e,t){e.uniform3uiv(this.addr,t)}function sC(e,t){e.uniform4uiv(this.addr,t)}function aC(e,t,n){let i=this.cache,s=t.length,a=Pf(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=Vg:r=CS;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function rC(e,t,n){let i=this.cache,s=t.length,a=Pf(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||DS,a[r])}function oC(e,t,n){let i=this.cache,s=t.length,a=Pf(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||NS,a[r])}function lC(e,t,n){let i=this.cache,s=t.length,a=Pf(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||RS,a[r])}function cC(e){switch(e){case 5126:return X2;case 35664:return W2;case 35665:return q2;case 35666:return Y2;case 35674:return Z2;case 35675:return J2;case 35676:return K2;case 5124:case 35670:return Q2;case 35667:case 35671:return j2;case 35668:case 35672:return $2;case 35669:case 35673:return tC;case 5125:return eC;case 36294:return nC;case 36295:return iC;case 36296:return sC;case 35678:case 36198:case 36298:case 36306:case 35682:return aC;case 35679:case 36299:case 36307:return rC;case 35680:case 36300:case 36308:case 36293:return oC;case 36289:case 36303:case 36311:case 36292:return lC}}function pS(e,t){e.seq.push(t),e.map[t.id]=t}function uC(e,t,n){let i=e.name,s=i.length;for(Fg.lastIndex=0;;){let a=Fg.exec(i),r=Fg.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){pS(n,c===void 0?new Gg(o,e,t):new Hg(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new Xg(o),pS(n,p)),n=p}}}function mS(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}function dC(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}function pC(e){Wt._getMatrix(gS,Wt.workingColorSpace,e);let t=`mat3( ${gS.elements.map(n=>n.toFixed(4))} )`;switch(Wt.getTransfer(e)){case Dl:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function yS(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+dC(e.getShaderSource(t),o)}else return a}function mC(e,t){let n=pC(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function yC(e,t){let n=gC[t];return n===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function _C(){Wt.getLuminanceCoefficients(Nf);let e=Nf.x.toFixed(4),t=Nf.y.toFixed(4),n=Nf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vC(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rc).join(`
`)}function xC(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function bC(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function rc(e){return e!==""}function _S(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vS(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Wg(e){return e.replace(SC,TC)}function TC(e,t){let n=Ft[t];if(n===void 0){let i=MC.get(t);if(i!==void 0)n=Ft[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Wg(n)}function xS(e){return e.replace(EC,AC)}function AC(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function bS(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function CC(e){return wC[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function DC(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":RC[e.envMapMode]||"ENVMAP_TYPE_CUBE"}function UC(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":NC[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function OC(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":LC[e.combine]||"ENVMAP_BLENDING_NONE"}function IC(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function PC(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=CC(n),c=DC(n),f=UC(n),p=OC(n),u=IC(n),d=vC(n),v=xC(a),M=s.createProgram(),y,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(rc).join(`
`),y.length>0&&(y+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(rc).join(`
`),h.length>0&&(h+=`
`)):(y=[bS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rc).join(`
`),h=[bS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?Ft.tonemapping_pars_fragment:"",n.toneMapping!==Si?yC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,mC("linearToOutputTexel",n.outputColorSpace),_C(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rc).join(`
`)),r=Wg(r),r=_S(r,n),r=vS(r,n),o=Wg(o),o=_S(o,n),o=vS(o,n),r=xS(r),o=xS(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,h=["#define varying in",n.glslVersion===Cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let b=g+y+r,m=g+h+o,T=mS(s,s.VERTEX_SHADER,b),E=mS(s,s.FRAGMENT_SHADER,m);s.attachShader(M,T),s.attachShader(M,E),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(D){if(e.debug.checkShaderErrors){let O=s.getProgramInfoLog(M)||"",Y=s.getShaderInfoLog(T)||"",X=s.getShaderInfoLog(E)||"",B=O.trim(),W=Y.trim(),G=X.trim(),$=!0,et=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if($=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,M,T,E);else{let ft=yS(s,T,"vertex"),gt=yS(s,E,"fragment");Dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+ft+`
`+gt)}else B!==""?Rt("WebGLProgram: Program Info Log:",B):(W===""||G==="")&&(et=!1);et&&(D.diagnostics={runnable:$,programLog:B,vertexShader:{log:W,prefix:y},fragmentShader:{log:G,prefix:h}})}s.deleteShader(T),s.deleteShader(E),_=new _o(s,M),A=bC(s,M)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,hC)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fC++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=E,this}function zC(e){return e===ya||e===ec||e===nc}function FC(e,t,n,i,s,a){let r=new Ol,o=new qg,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,A,R,D,O,Y){let X=D.fog,B=O.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,$=t.get(_.envMap||W,G),et=$&&$.mapping===Jl?$.image.height:null,ft=d[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Rt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let gt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,vt=gt!==void 0?gt.length:0,jt=0;B.morphAttributes.position!==void 0&&(jt=1),B.morphAttributes.normal!==void 0&&(jt=2),B.morphAttributes.color!==void 0&&(jt=3);let Ae,$t,K,at;if(ft){let xt=Wi[ft];Ae=xt.vertexShader,$t=xt.fragmentShader}else{Ae=_.vertexShader,$t=_.fragmentShader;let xt=o.getVertexShaderStage(_),Ce=o.getFragmentShaderStage(_);o.update(_,xt,Ce),K=xt.id,at=Ce.id}let nt=e.getRenderTarget(),Ut=e.state.buffers.depth.getReversed(),It=O.isInstancedMesh===!0,wt=O.isBatchedMesh===!0,Oe=!!_.map,Ht=!!_.matcap,he=!!$,te=!!_.aoMap,Kt=!!_.lightMap,ke=!!_.bumpMap&&_.wireframe===!1,Ye=!!_.normalMap,je=!!_.displacementMap,rn=!!_.emissiveMap,we=!!_.metalnessMap,Ve=!!_.roughnessMap,U=_.anisotropy>0,En=_.clearcoat>0,se=_.dispersion>0,C=_.iridescence>0,x=_.sheen>0,I=_.transmission>0,k=U&&!!_.anisotropyMap,H=En&&!!_.clearcoatMap,it=En&&!!_.clearcoatNormalMap,rt=En&&!!_.clearcoatRoughnessMap,q=C&&!!_.iridescenceMap,J=C&&!!_.iridescenceThicknessMap,ot=x&&!!_.sheenColorMap,Mt=x&&!!_.sheenRoughnessMap,ut=!!_.specularMap,lt=!!_.specularColorMap,At=!!_.specularIntensityMap,Ct=I&&!!_.transmissionMap,Pt=I&&!!_.thicknessMap,N=!!_.gradientMap,st=!!_.alphaMap,Z=_.alphaTest>0,ct=!!_.alphaHash,mt=!!_.extensions,tt=Si;_.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(tt=e.toneMapping);let St={shaderID:ft,shaderType:_.type,shaderName:_.name,vertexShader:Ae,fragmentShader:$t,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:at,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:wt,batchingColor:wt&&O._colorsTexture!==null,instancing:It,instancingColor:It&&O.instanceColor!==null,instancingMorph:It&&O.morphTexture!==null,outputColorSpace:nt===null?e.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:Ht,envMap:he,envMapMode:he&&$.mapping,envMapCubeUVHeight:et,aoMap:te,lightMap:Kt,bumpMap:ke,normalMap:Ye,displacementMap:je,emissiveMap:rn,normalMapObjectSpace:Ye&&_.normalMapType===Xb,normalMapTangentSpace:Ye&&_.normalMapType===wg,packedNormalMap:Ye&&_.normalMapType===wg&&zC(_.normalMap.format),metalnessMap:we,roughnessMap:Ve,anisotropy:U,anisotropyMap:k,clearcoat:En,clearcoatMap:H,clearcoatNormalMap:it,clearcoatRoughnessMap:rt,dispersion:se,iridescence:C,iridescenceMap:q,iridescenceThicknessMap:J,sheen:x,sheenColorMap:ot,sheenRoughnessMap:Mt,specularMap:ut,specularColorMap:lt,specularIntensityMap:At,transmission:I,transmissionMap:Ct,thicknessMap:Pt,gradientMap:N,opaque:_.transparent===!1&&_.blending===Ya&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:Z,alphaHash:ct,combine:_.combine,mapUv:Oe&&v(_.map.channel),aoMapUv:te&&v(_.aoMap.channel),lightMapUv:Kt&&v(_.lightMap.channel),bumpMapUv:ke&&v(_.bumpMap.channel),normalMapUv:Ye&&v(_.normalMap.channel),displacementMapUv:je&&v(_.displacementMap.channel),emissiveMapUv:rn&&v(_.emissiveMap.channel),metalnessMapUv:we&&v(_.metalnessMap.channel),roughnessMapUv:Ve&&v(_.roughnessMap.channel),anisotropyMapUv:k&&v(_.anisotropyMap.channel),clearcoatMapUv:H&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(_.sheenRoughnessMap.channel),specularMapUv:ut&&v(_.specularMap.channel),specularColorMapUv:lt&&v(_.specularColorMap.channel),specularIntensityMapUv:At&&v(_.specularIntensityMap.channel),transmissionMapUv:Ct&&v(_.transmissionMap.channel),thicknessMapUv:Pt&&v(_.thicknessMap.channel),alphaMapUv:st&&v(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ye||U),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(Oe||st),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&Ye===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ut,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:jt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:tt,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&Wt.getTransfer(_.map.colorSpace)===ie,decodeVideoTextureEmissive:rn&&_.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(_.emissiveMap.colorSpace)===ie,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vi,flipSided:_.side===Tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:mt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&_.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function y(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)A.push(R),A.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(h(A,_),g(A,_),A.push(e.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function h(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function g(_,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function b(_){let A=d[_.type],R;if(A){let D=Wi[A];R=nS.clone(D.uniforms)}else R=_.uniforms;return R}function m(_,A){let R=f.get(A);return R!==void 0?++R.usedTimes:(R=new PC(e,A,_,s),c.push(R),f.set(A,R)),R}function T(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function w(){o.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:b,acquireProgram:m,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:w}}function kC(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function VC(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function SS(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function MS(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,M,y,h){let g=e[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:v,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:y,group:h},e[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=v,g.materialVariant=r(u),g.groupOrder=M,g.renderOrder=u.renderOrder,g.z=y,g.group=h),t++,g}function l(u,d,v,M,y,h){let g=o(u,d,v,M,y,h);v.transmission>0?i.push(g):v.transparent===!0?s.push(g):n.push(g)}function c(u,d,v,M,y,h){let g=o(u,d,v,M,y,h);v.transmission>0?i.unshift(g):v.transparent===!0?s.unshift(g):n.unshift(g)}function f(u,d,v){n.length>1&&n.sort(u||VC),i.length>1&&i.sort(d||SS),s.length>1&&s.sort(d||SS),v&&(n.reverse(),i.reverse(),s.reverse())}function p(){for(let u=t,d=e.length;u<d;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function GC(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new MS,e.set(i,[r])):s>=a.length?(r=new MS,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function HC(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new Jt};break;case"SpotLight":n={position:new P,direction:new P,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":n={color:new Jt,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function XC(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}function qC(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function YC(e){let t=new HC,n=XC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,a=new Le,r=new Le;function o(c){let f=0,p=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,v=0,M=0,y=0,h=0,g=0,b=0,m=0,T=0,E=0,w=0;c.sort(qC);for(let A=0,R=c.length;A<R;A++){let D=c[A],O=D.color,Y=D.intensity,X=D.distance,B=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ya?B=D.shadow.map.texture:B=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=O.r*Y,p+=O.g*Y,u+=O.b*Y;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],Y);w++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let G=D.shadow,$=n.get(D);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=B,i.directionalShadowMatrix[d]=D.shadow.matrix,g++}i.directional[d]=W,d++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(Y),W.distance=X,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[M]=W;let G=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,G.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[M]=G.matrix,D.castShadow){let $=n.get(D);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,i.spotShadow[M]=$,i.spotShadowMap[M]=B,m++}M++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(O).multiplyScalar(Y),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=W,y++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let G=D.shadow,$=n.get(D);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,i.pointShadow[v]=$,i.pointShadowMap[v]=B,i.pointShadowMatrix[v]=D.shadow.matrix,b++}i.point[v]=W,v++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(Y),W.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[h]=W,h++}}y>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let _=i.hash;(_.directionalLength!==d||_.pointLength!==v||_.spotLength!==M||_.rectAreaLength!==y||_.hemiLength!==h||_.numDirectionalShadows!==g||_.numPointShadows!==b||_.numSpotShadows!==m||_.numSpotMaps!==T||_.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=y,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=m,i.spotShadowMap.length=m,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=m+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,_.directionalLength=d,_.pointLength=v,_.spotLength=M,_.rectAreaLength=y,_.hemiLength=h,_.numDirectionalShadows=g,_.numPointShadows=b,_.numSpotShadows=m,_.numSpotMaps=T,_.numLightProbes=w,i.version=WC++)}function l(c,f){let p=0,u=0,d=0,v=0,M=0,y=f.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){let b=c[h];if(b.isDirectionalLight){let m=i.directional[p];m.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(y),p++}else if(b.isSpotLight){let m=i.spot[d];m.position.setFromMatrixPosition(b.matrixWorld),m.position.applyMatrix4(y),m.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(y),d++}else if(b.isRectAreaLight){let m=i.rectArea[v];m.position.setFromMatrixPosition(b.matrixWorld),m.position.applyMatrix4(y),r.identity(),a.copy(b.matrixWorld),a.premultiply(y),r.extractRotation(a),m.halfWidth.set(b.width*.5,0,0),m.halfHeight.set(0,b.height*.5,0),m.halfWidth.applyMatrix4(r),m.halfHeight.applyMatrix4(r),v++}else if(b.isPointLight){let m=i.point[u];m.position.setFromMatrixPosition(b.matrixWorld),m.position.applyMatrix4(y),u++}else if(b.isHemisphereLight){let m=i.hemi[M];m.direction.setFromMatrixPosition(b.matrixWorld),m.direction.transformDirection(y),M++}}}return{setup:o,setupView:l,state:i}}function TS(e){let t=new YC(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function ZC(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new TS(e),t.set(s,[o])):a>=r.length?(o=new TS(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}function $C(e,t,n){let i=new Fl,s=new Zt,a=new Zt,r=new Ee,o=new Ch,l=new Rh,c={},f=n.maxTextureSize,p={[xs]:Tn,[Tn]:xs,[Vi]:Vi},u=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:JC,fragmentShader:KC}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let v=new _n;v.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new an(v,u),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let h=this.type;this.render=function(E,w,_){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||E.length===0)return;this.type===bb&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zl);let A=e.getRenderTarget(),R=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),O=e.state;O.setBlending(Gi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Y=h!==this.type;Y&&w.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(B=>B.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,B=E.length;X<B;X++){let W=E[X],G=W.shadow;if(G===void 0){Rt("WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let $=G.getFrameExtents();s.multiply($),a.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/$.x),s.x=a.x*$.x,G.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/$.y),s.y=a.y*$.y,G.mapSize.y=a.y));let et=e.state.buffers.depth.getReversed();if(G.camera._reversedDepth=et,G.map===null||Y===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===po){if(W.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Jn(s.x,s.y,{format:ya,type:Hi,minFilter:fn,magFilter:fn,generateMipmaps:!1}),G.map.texture.name=W.name+".shadowMap",G.map.depthTexture=new bs(s.x,s.y,Ti),G.map.depthTexture.name=W.name+".shadowMapDepth",G.map.depthTexture.format=zi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=sn,G.map.depthTexture.magFilter=sn}else W.isPointLight?(G.map=new Lf(s.x),G.map.depthTexture=new Eh(s.x,Mi)):(G.map=new Jn(s.x,s.y),G.map.depthTexture=new bs(s.x,s.y,Mi)),G.map.depthTexture.name=W.name+".shadowMap",G.map.depthTexture.format=zi,this.type===Zl?(G.map.depthTexture.compareFunction=et?Rf:Cf,G.map.depthTexture.minFilter=fn,G.map.depthTexture.magFilter=fn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=sn,G.map.depthTexture.magFilter=sn);G.camera.updateProjectionMatrix()}let ft=G.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<ft;gt++){if(G.map.isWebGLCubeRenderTarget)e.setRenderTarget(G.map,gt),e.clear();else{gt===0&&(e.setRenderTarget(G.map),e.clear());let vt=G.getViewport(gt);r.set(a.x*vt.x,a.y*vt.y,a.x*vt.z,a.y*vt.w),O.viewport(r)}if(W.isPointLight){let vt=G.camera,jt=G.matrix,Ae=W.distance||vt.far;Ae!==vt.far&&(vt.far=Ae,vt.updateProjectionMatrix()),ac.setFromMatrixPosition(W.matrixWorld),vt.position.copy(ac),kg.copy(vt.position),kg.add(QC[gt]),vt.up.copy(jC[gt]),vt.lookAt(kg),vt.updateMatrixWorld(),jt.makeTranslation(-ac.x,-ac.y,-ac.z),ES.multiplyMatrices(vt.projectionMatrix,vt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ES,vt.coordinateSystem,vt.reversedDepth)}else G.updateMatrices(W);i=G.getFrustum(),m(w,_,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===po&&g(G,_),G.needsUpdate=!1}h=this.type,y.needsUpdate=!1,e.setRenderTarget(A,R,D)};function g(E,w){let _=t.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Jn(s.x,s.y,{format:ya,type:Hi})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(w,null,_,u,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(w,null,_,d,M,null)}function b(E,w,_,A){let R=null,D=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=_.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let O=R.uuid,Y=w.uuid,X=c[O];X===void 0&&(X={},c[O]=X);let B=X[Y];B===void 0&&(B=R.clone(),X[Y]=B,w.addEventListener("dispose",T)),R=B}if(R.visible=w.visible,R.wireframe=w.wireframe,A===po?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:p[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=e.properties.get(R);O.light=_}return R}function m(E,w,_,A,R){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===po)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let Y=t.update(E),X=E.material;if(Array.isArray(X)){let B=Y.groups;for(let W=0,G=B.length;W<G;W++){let $=B[W],et=X[$.materialIndex];if(et&&et.visible){let ft=b(E,et,A,R);E.onBeforeShadow(e,E,w,_,Y,ft,$),e.renderBufferDirect(_,null,Y,ft,E,$),E.onAfterShadow(e,E,w,_,Y,ft,$)}}}else if(X.visible){let B=b(E,X,A,R);E.onBeforeShadow(e,E,w,_,Y,B,null),e.renderBufferDirect(_,null,Y,B,E,null),E.onAfterShadow(e,E,w,_,Y,B,null)}}let O=E.children;for(let Y=0,X=O.length;Y<X;Y++)m(O[Y],w,_,A,R)}function T(E){E.target.removeEventListener("dispose",T);for(let _ in c){let A=c[_],R=E.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function t3(e,t){function n(){let N=!1,st=new Ee,Z=null,ct=new Ee(0,0,0,0);return{setMask:function(mt){Z!==mt&&!N&&(e.colorMask(mt,mt,mt,mt),Z=mt)},setLocked:function(mt){N=mt},setClear:function(mt,tt,St,xt,Ce){Ce===!0&&(mt*=xt,tt*=xt,St*=xt),st.set(mt,tt,St,xt),ct.equals(st)===!1&&(e.clearColor(mt,tt,St,xt),ct.copy(st))},reset:function(){N=!1,Z=null,ct.set(-1,0,0,0)}}}function i(){let N=!1,st=!1,Z=null,ct=null,mt=null;return{setReversed:function(tt){if(st!==tt){let St=t.get("EXT_clip_control");tt?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),st=tt;let xt=mt;mt=null,this.setClear(xt)}},getReversed:function(){return st},setTest:function(tt){tt?nt(e.DEPTH_TEST):Ut(e.DEPTH_TEST)},setMask:function(tt){Z!==tt&&!N&&(e.depthMask(tt),Z=tt)},setFunc:function(tt){if(st&&(tt=tS[tt]),ct!==tt){switch(tt){case uh:e.depthFunc(e.NEVER);break;case hh:e.depthFunc(e.ALWAYS);break;case fh:e.depthFunc(e.LESS);break;case Za:e.depthFunc(e.LEQUAL);break;case dh:e.depthFunc(e.EQUAL);break;case ph:e.depthFunc(e.GEQUAL);break;case mh:e.depthFunc(e.GREATER);break;case gh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ct=tt}},setLocked:function(tt){N=tt},setClear:function(tt){mt!==tt&&(mt=tt,st&&(tt=1-tt),e.clearDepth(tt))},reset:function(){N=!1,Z=null,ct=null,mt=null,st=!1}}}function s(){let N=!1,st=null,Z=null,ct=null,mt=null,tt=null,St=null,xt=null,Ce=null;return{setTest:function(me){N||(me?nt(e.STENCIL_TEST):Ut(e.STENCIL_TEST))},setMask:function(me){st!==me&&!N&&(e.stencilMask(me),st=me)},setFunc:function(me,Ei,Ai){(Z!==me||ct!==Ei||mt!==Ai)&&(e.stencilFunc(me,Ei,Ai),Z=me,ct=Ei,mt=Ai)},setOp:function(me,Ei,Ai){(tt!==me||St!==Ei||xt!==Ai)&&(e.stencilOp(me,Ei,Ai),tt=me,St=Ei,xt=Ai)},setLocked:function(me){N=me},setClear:function(me){Ce!==me&&(e.clearStencil(me),Ce=me)},reset:function(){N=!1,st=null,Z=null,ct=null,mt=null,tt=null,St=null,xt=null,Ce=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},p={},u={},d=new WeakMap,v=[],M=null,y=!1,h=null,g=null,b=null,m=null,T=null,E=null,w=null,_=new Jt(0,0,0),A=0,R=!1,D=null,O=null,Y=null,X=null,B=null,W=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,et=e.getParameter(e.VERSION);et.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(et)[1]),G=$>=1):et.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),G=$>=2);let ft=null,gt={},vt=e.getParameter(e.SCISSOR_BOX),jt=e.getParameter(e.VIEWPORT),Ae=new Ee().fromArray(vt),$t=new Ee().fromArray(jt);function K(N,st,Z,ct){let mt=new Uint8Array(4),tt=e.createTexture();e.bindTexture(N,tt),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let St=0;St<Z;St++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(st,0,e.RGBA,1,1,ct,0,e.RGBA,e.UNSIGNED_BYTE,mt):e.texImage2D(st+St,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,mt);return tt}let at={};at[e.TEXTURE_2D]=K(e.TEXTURE_2D,e.TEXTURE_2D,1),at[e.TEXTURE_CUBE_MAP]=K(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[e.TEXTURE_2D_ARRAY]=K(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),at[e.TEXTURE_3D]=K(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),nt(e.DEPTH_TEST),r.setFunc(Za),ke(!1),Ye(og),nt(e.CULL_FACE),te(Gi);function nt(N){f[N]!==!0&&(e.enable(N),f[N]=!0)}function Ut(N){f[N]!==!1&&(e.disable(N),f[N]=!1)}function It(N,st){return u[N]!==st?(e.bindFramebuffer(N,st),u[N]=st,N===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=st),N===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=st),!0):!1}function wt(N,st){let Z=v,ct=!1;if(N){Z=d.get(st),Z===void 0&&(Z=[],d.set(st,Z));let mt=N.textures;if(Z.length!==mt.length||Z[0]!==e.COLOR_ATTACHMENT0){for(let tt=0,St=mt.length;tt<St;tt++)Z[tt]=e.COLOR_ATTACHMENT0+tt;Z.length=mt.length,ct=!0}}else Z[0]!==e.BACK&&(Z[0]=e.BACK,ct=!0);ct&&e.drawBuffers(Z)}function Oe(N){return M!==N?(e.useProgram(N),M=N,!0):!1}let Ht={[oa]:e.FUNC_ADD,[Mb]:e.FUNC_SUBTRACT,[Tb]:e.FUNC_REVERSE_SUBTRACT};Ht[Eb]=e.MIN,Ht[Ab]=e.MAX;let he={[wb]:e.ZERO,[Cb]:e.ONE,[Rb]:e.SRC_COLOR,[lh]:e.SRC_ALPHA,[Ib]:e.SRC_ALPHA_SATURATE,[Lb]:e.DST_COLOR,[Nb]:e.DST_ALPHA,[Db]:e.ONE_MINUS_SRC_COLOR,[ch]:e.ONE_MINUS_SRC_ALPHA,[Ob]:e.ONE_MINUS_DST_COLOR,[Ub]:e.ONE_MINUS_DST_ALPHA,[Pb]:e.CONSTANT_COLOR,[Bb]:e.ONE_MINUS_CONSTANT_COLOR,[zb]:e.CONSTANT_ALPHA,[Fb]:e.ONE_MINUS_CONSTANT_ALPHA};function te(N,st,Z,ct,mt,tt,St,xt,Ce,me){if(N===Gi){y===!0&&(Ut(e.BLEND),y=!1);return}if(y===!1&&(nt(e.BLEND),y=!0),N!==Sb){if(N!==h||me!==R){if((g!==oa||T!==oa)&&(e.blendEquation(e.FUNC_ADD),g=oa,T=oa),me)switch(N){case Ya:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case lg:e.blendFunc(e.ONE,e.ONE);break;case cg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ug:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Dt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ya:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case lg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case cg:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ug:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",N);break}b=null,m=null,E=null,w=null,_.set(0,0,0),A=0,h=N,R=me}return}mt=mt||st,tt=tt||Z,St=St||ct,(st!==g||mt!==T)&&(e.blendEquationSeparate(Ht[st],Ht[mt]),g=st,T=mt),(Z!==b||ct!==m||tt!==E||St!==w)&&(e.blendFuncSeparate(he[Z],he[ct],he[tt],he[St]),b=Z,m=ct,E=tt,w=St),(xt.equals(_)===!1||Ce!==A)&&(e.blendColor(xt.r,xt.g,xt.b,Ce),_.copy(xt),A=Ce),h=N,R=!1}function Kt(N,st){N.side===Vi?Ut(e.CULL_FACE):nt(e.CULL_FACE);let Z=N.side===Tn;st&&(Z=!Z),ke(Z),N.blending===Ya&&N.transparent===!1?te(Gi):te(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let ct=N.stencilWrite;o.setTest(ct),ct&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),rn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?nt(e.SAMPLE_ALPHA_TO_COVERAGE):Ut(e.SAMPLE_ALPHA_TO_COVERAGE)}function ke(N){D!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),D=N)}function Ye(N){N!==vb?(nt(e.CULL_FACE),N!==O&&(N===og?e.cullFace(e.BACK):N===xb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ut(e.CULL_FACE),O=N}function je(N){N!==Y&&(G&&e.lineWidth(N),Y=N)}function rn(N,st,Z){N?(nt(e.POLYGON_OFFSET_FILL),(X!==st||B!==Z)&&(X=st,B=Z,r.getReversed()&&(st=-st),e.polygonOffset(st,Z))):Ut(e.POLYGON_OFFSET_FILL)}function we(N){N?nt(e.SCISSOR_TEST):Ut(e.SCISSOR_TEST)}function Ve(N){N===void 0&&(N=e.TEXTURE0+W-1),ft!==N&&(e.activeTexture(N),ft=N)}function U(N,st,Z){Z===void 0&&(ft===null?Z=e.TEXTURE0+W-1:Z=ft);let ct=gt[Z];ct===void 0&&(ct={type:void 0,texture:void 0},gt[Z]=ct),(ct.type!==N||ct.texture!==st)&&(ft!==Z&&(e.activeTexture(Z),ft=Z),e.bindTexture(N,st||at[N]),ct.type=N,ct.texture=st)}function En(){let N=gt[ft];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function se(){try{e.compressedTexImage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function x(){try{e.texSubImage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function I(){try{e.texSubImage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function H(){try{e.compressedTexSubImage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function it(){try{e.texStorage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function rt(){try{e.texStorage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function q(){try{e.texImage2D(...arguments)}catch(N){Dt("WebGLState:",N)}}function J(){try{e.texImage3D(...arguments)}catch(N){Dt("WebGLState:",N)}}function ot(N){return p[N]!==void 0?p[N]:e.getParameter(N)}function Mt(N,st){p[N]!==st&&(e.pixelStorei(N,st),p[N]=st)}function ut(N){Ae.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),Ae.copy(N))}function lt(N){$t.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),$t.copy(N))}function At(N,st){let Z=c.get(st);Z===void 0&&(Z=new WeakMap,c.set(st,Z));let ct=Z.get(N);ct===void 0&&(ct=e.getUniformBlockIndex(st,N.name),Z.set(N,ct))}function Ct(N,st){let ct=c.get(st).get(N);l.get(st)!==ct&&(e.uniformBlockBinding(st,ct,N.__bindingPointIndex),l.set(st,ct))}function Pt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},ft=null,gt={},u={},d=new WeakMap,v=[],M=null,y=!1,h=null,g=null,b=null,m=null,T=null,E=null,w=null,_=new Jt(0,0,0),A=0,R=!1,D=null,O=null,Y=null,X=null,B=null,Ae.set(0,0,e.canvas.width,e.canvas.height),$t.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:nt,disable:Ut,bindFramebuffer:It,drawBuffers:wt,useProgram:Oe,setBlending:te,setMaterial:Kt,setFlipSided:ke,setCullFace:Ye,setLineWidth:je,setPolygonOffset:rn,setScissorTest:we,activeTexture:Ve,bindTexture:U,unbindTexture:En,compressedTexImage2D:se,compressedTexImage3D:C,texImage2D:q,texImage3D:J,pixelStorei:Mt,getParameter:ot,updateUBOMapping:At,uniformBlockBinding:Ct,texStorage2D:it,texStorage3D:rt,texSubImage2D:x,texSubImage3D:I,compressedTexSubImage2D:k,compressedTexSubImage3D:H,scissor:ut,viewport:lt,reset:Pt}}function e3(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,f=new WeakMap,p=new Set,u,d=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(C,x){return v?new OffscreenCanvas(C,x):Ul("canvas")}function y(C,x,I){let k=1,H=se(C);if((H.width>I||H.height>I)&&(k=I/Math.max(H.width,H.height)),k<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let it=Math.floor(k*H.width),rt=Math.floor(k*H.height);u===void 0&&(u=M(it,rt));let q=x?M(it,rt):u;return q.width=it,q.height=rt,q.getContext("2d").drawImage(C,0,0,it,rt),Rt("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+it+"x"+rt+")."),q}else return"data"in C&&Rt("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),C;return C}function h(C){return C.generateMipmaps}function g(C){e.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function m(C,x,I,k,H,it=!1){if(C!==null){if(e[C]!==void 0)return e[C];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt;k&&(rt=t.get("EXT_texture_norm16"),rt||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=x;if(x===e.RED&&(I===e.FLOAT&&(q=e.R32F),I===e.HALF_FLOAT&&(q=e.R16F),I===e.UNSIGNED_BYTE&&(q=e.R8),I===e.UNSIGNED_SHORT&&rt&&(q=rt.R16_EXT),I===e.SHORT&&rt&&(q=rt.R16_SNORM_EXT)),x===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(q=e.R8UI),I===e.UNSIGNED_SHORT&&(q=e.R16UI),I===e.UNSIGNED_INT&&(q=e.R32UI),I===e.BYTE&&(q=e.R8I),I===e.SHORT&&(q=e.R16I),I===e.INT&&(q=e.R32I)),x===e.RG&&(I===e.FLOAT&&(q=e.RG32F),I===e.HALF_FLOAT&&(q=e.RG16F),I===e.UNSIGNED_BYTE&&(q=e.RG8),I===e.UNSIGNED_SHORT&&rt&&(q=rt.RG16_EXT),I===e.SHORT&&rt&&(q=rt.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(q=e.RG8UI),I===e.UNSIGNED_SHORT&&(q=e.RG16UI),I===e.UNSIGNED_INT&&(q=e.RG32UI),I===e.BYTE&&(q=e.RG8I),I===e.SHORT&&(q=e.RG16I),I===e.INT&&(q=e.RG32I)),x===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(q=e.RGB8UI),I===e.UNSIGNED_SHORT&&(q=e.RGB16UI),I===e.UNSIGNED_INT&&(q=e.RGB32UI),I===e.BYTE&&(q=e.RGB8I),I===e.SHORT&&(q=e.RGB16I),I===e.INT&&(q=e.RGB32I)),x===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),I===e.UNSIGNED_INT&&(q=e.RGBA32UI),I===e.BYTE&&(q=e.RGBA8I),I===e.SHORT&&(q=e.RGBA16I),I===e.INT&&(q=e.RGBA32I)),x===e.RGB&&(I===e.UNSIGNED_SHORT&&rt&&(q=rt.RGB16_EXT),I===e.SHORT&&rt&&(q=rt.RGB16_SNORM_EXT),I===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(q=e.R11F_G11F_B10F)),x===e.RGBA){let J=it?Dl:Wt.getTransfer(H);I===e.FLOAT&&(q=e.RGBA32F),I===e.HALF_FLOAT&&(q=e.RGBA16F),I===e.UNSIGNED_BYTE&&(q=J===ie?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT&&rt&&(q=rt.RGBA16_EXT),I===e.SHORT&&rt&&(q=rt.RGBA16_SNORM_EXT),I===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function T(C,x){let I;return C?x===null||x===Mi||x===go?I=e.DEPTH24_STENCIL8:x===Ti?I=e.DEPTH32F_STENCIL8:x===mo&&(I=e.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mi||x===go?I=e.DEPTH_COMPONENT24:x===Ti?I=e.DEPTH_COMPONENT32F:x===mo&&(I=e.DEPTH_COMPONENT16),I}function E(C,x){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==sn&&C.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function w(C){let x=C.target;x.removeEventListener("dispose",w),A(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&p.delete(x)}function _(C){let x=C.target;x.removeEventListener("dispose",_),D(x)}function A(C){let x=i.get(C);if(x.__webglInit===void 0)return;let I=C.source,k=d.get(I);if(k){let H=k[x.__cacheKey];H.usedTimes--,H.usedTimes===0&&R(C),Object.keys(k).length===0&&d.delete(I)}i.remove(C)}function R(C){let x=i.get(C);e.deleteTexture(x.__webglTexture);let I=C.source,k=d.get(I);delete k[x.__cacheKey],r.memory.textures--}function D(C){let x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let H=0;H<x.__webglFramebuffer[k].length;H++)e.deleteFramebuffer(x.__webglFramebuffer[k][H]);else e.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)e.deleteFramebuffer(x.__webglFramebuffer[k]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let I=C.textures;for(let k=0,H=I.length;k<H;k++){let it=i.get(I[k]);it.__webglTexture&&(e.deleteTexture(it.__webglTexture),r.memory.textures--),i.remove(I[k])}i.remove(C)}let O=0;function Y(){O=0}function X(){return O}function B(C){O=C}function W(){let C=O;return C>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function G(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function $(C,x){let I=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){let k=C.image;if(k===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(I,C,x);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+x)}function et(C,x){let I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){Ut(I,C,x);return}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+x)}function ft(C,x){let I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){Ut(I,C,x);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+x)}function gt(C,x){let I=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&I.__version!==C.version){It(I,C,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+x)}let vt={[yh]:e.REPEAT,[Bi]:e.CLAMP_TO_EDGE,[_h]:e.MIRRORED_REPEAT},jt={[sn]:e.NEAREST,[Gb]:e.NEAREST_MIPMAP_NEAREST,[Kl]:e.NEAREST_MIPMAP_LINEAR,[fn]:e.LINEAR,[Xh]:e.LINEAR_MIPMAP_NEAREST,[ma]:e.LINEAR_MIPMAP_LINEAR},Ae={[Wb]:e.NEVER,[Kb]:e.ALWAYS,[qb]:e.LESS,[Cf]:e.LEQUAL,[Yb]:e.EQUAL,[Rf]:e.GEQUAL,[Zb]:e.GREATER,[Jb]:e.NOTEQUAL};function $t(C,x){if(x.type===Ti&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===Xh||x.magFilter===Kl||x.magFilter===ma||x.minFilter===fn||x.minFilter===Xh||x.minFilter===Kl||x.minFilter===ma)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,vt[x.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,vt[x.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,vt[x.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,jt[x.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,jt[x.minFilter]),x.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,Ae[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===sn||x.minFilter!==Kl&&x.minFilter!==ma||x.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function K(C,x){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",w));let k=x.source,H=d.get(k);H===void 0&&(H={},d.set(k,H));let it=G(x);if(it!==C.__cacheKey){H[it]===void 0&&(H[it]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,I=!0),H[it].usedTimes++;let rt=H[C.__cacheKey];rt!==void 0&&(H[C.__cacheKey].usedTimes--,rt.usedTimes===0&&R(x)),C.__cacheKey=it,C.__webglTexture=H[it].texture}return I}function at(C,x,I){return Math.floor(Math.floor(C/I)/x)}function nt(C,x,I,k){let it=C.updateRanges;if(it.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,I,k,x.data);else{it.sort((Mt,ut)=>Mt.start-ut.start);let rt=0;for(let Mt=1;Mt<it.length;Mt++){let ut=it[rt],lt=it[Mt],At=ut.start+ut.count,Ct=at(lt.start,x.width,4),Pt=at(ut.start,x.width,4);lt.start<=At+1&&Ct===Pt&&at(lt.start+lt.count-1,x.width,4)===Ct?ut.count=Math.max(ut.count,lt.start+lt.count-ut.start):(++rt,it[rt]=lt)}it.length=rt+1;let q=n.getParameter(e.UNPACK_ROW_LENGTH),J=n.getParameter(e.UNPACK_SKIP_PIXELS),ot=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let Mt=0,ut=it.length;Mt<ut;Mt++){let lt=it[Mt],At=Math.floor(lt.start/4),Ct=Math.ceil(lt.count/4),Pt=At%x.width,N=Math.floor(At/x.width),st=Ct,Z=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Pt),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,Pt,N,st,Z,I,k,x.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,q),n.pixelStorei(e.UNPACK_SKIP_PIXELS,J),n.pixelStorei(e.UNPACK_SKIP_ROWS,ot)}}function Ut(C,x,I){let k=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=e.TEXTURE_3D);let H=K(C,x),it=x.source;n.bindTexture(k,C.__webglTexture,e.TEXTURE0+I);let rt=i.get(it);if(it.version!==rt.__version||H===!0){if(n.activeTexture(e.TEXTURE0+I),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Z=Wt.getPrimaries(Wt.workingColorSpace),ct=x.colorSpace===Ss?null:Wt.getPrimaries(x.colorSpace),mt=x.colorSpace===Ss||Z===ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let J=y(x.image,!1,s.maxTextureSize);J=En(x,J);let ot=a.convert(x.format,x.colorSpace),Mt=a.convert(x.type),ut=m(x.internalFormat,ot,Mt,x.normalized,x.colorSpace,x.isVideoTexture);$t(k,x);let lt,At=x.mipmaps,Ct=x.isVideoTexture!==!0,Pt=rt.__version===void 0||H===!0,N=it.dataReady,st=E(x,J);if(x.isDepthTexture)ut=T(x.format===ga,x.type),Pt&&(Ct?n.texStorage2D(e.TEXTURE_2D,1,ut,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,ut,J.width,J.height,0,ot,Mt,null));else if(x.isDataTexture)if(At.length>0){Ct&&Pt&&n.texStorage2D(e.TEXTURE_2D,st,ut,At[0].width,At[0].height);for(let Z=0,ct=At.length;Z<ct;Z++)lt=At[Z],Ct?N&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,lt.width,lt.height,ot,Mt,lt.data):n.texImage2D(e.TEXTURE_2D,Z,ut,lt.width,lt.height,0,ot,Mt,lt.data);x.generateMipmaps=!1}else Ct?(Pt&&n.texStorage2D(e.TEXTURE_2D,st,ut,J.width,J.height),N&&nt(x,J,ot,Mt)):n.texImage2D(e.TEXTURE_2D,0,ut,J.width,J.height,0,ot,Mt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ct&&Pt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,ut,At[0].width,At[0].height,J.depth);for(let Z=0,ct=At.length;Z<ct;Z++)if(lt=At[Z],x.format!==di)if(ot!==null)if(Ct){if(N)if(x.layerUpdates.size>0){let mt=Lg(lt.width,lt.height,x.format,x.type);for(let tt of x.layerUpdates){let St=lt.data.subarray(tt*mt/lt.data.BYTES_PER_ELEMENT,(tt+1)*mt/lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,tt,lt.width,lt.height,1,ot,St)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,lt.width,lt.height,J.depth,ot,lt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,ut,lt.width,lt.height,J.depth,0,lt.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ct?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,lt.width,lt.height,J.depth,ot,Mt,lt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Z,ut,lt.width,lt.height,J.depth,0,ot,Mt,lt.data)}else{Ct&&Pt&&n.texStorage2D(e.TEXTURE_2D,st,ut,At[0].width,At[0].height);for(let Z=0,ct=At.length;Z<ct;Z++)lt=At[Z],x.format!==di?ot!==null?Ct?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,lt.width,lt.height,ot,lt.data):n.compressedTexImage2D(e.TEXTURE_2D,Z,ut,lt.width,lt.height,0,lt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?N&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,lt.width,lt.height,ot,Mt,lt.data):n.texImage2D(e.TEXTURE_2D,Z,ut,lt.width,lt.height,0,ot,Mt,lt.data)}else if(x.isDataArrayTexture)if(Ct){if(Pt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,ut,J.width,J.height,J.depth),N)if(x.layerUpdates.size>0){let Z=Lg(J.width,J.height,x.format,x.type);for(let ct of x.layerUpdates){let mt=J.data.subarray(ct*Z/J.data.BYTES_PER_ELEMENT,(ct+1)*Z/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ct,J.width,J.height,1,ot,Mt,mt)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ot,Mt,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ut,J.width,J.height,J.depth,0,ot,Mt,J.data);else if(x.isData3DTexture)Ct?(Pt&&n.texStorage3D(e.TEXTURE_3D,st,ut,J.width,J.height,J.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ot,Mt,J.data)):n.texImage3D(e.TEXTURE_3D,0,ut,J.width,J.height,J.depth,0,ot,Mt,J.data);else if(x.isFramebufferTexture){if(Pt)if(Ct)n.texStorage2D(e.TEXTURE_2D,st,ut,J.width,J.height);else{let Z=J.width,ct=J.height;for(let mt=0;mt<st;mt++)n.texImage2D(e.TEXTURE_2D,mt,ut,Z,ct,0,ot,Mt,null),Z>>=1,ct>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){let Z=e.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),J.parentNode!==Z){Z.appendChild(J),p.add(x),Z.onpaint=ct=>{let mt=ct.changedElements;for(let tt of p)mt.includes(tt.image)&&(tt.needsUpdate=!0)},Z.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,J);else{let mt=e.RGBA,tt=e.RGBA,St=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,mt,tt,St,J)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(At.length>0){if(Ct&&Pt){let Z=se(At[0]);n.texStorage2D(e.TEXTURE_2D,st,ut,Z.width,Z.height)}for(let Z=0,ct=At.length;Z<ct;Z++)lt=At[Z],Ct?N&&n.texSubImage2D(e.TEXTURE_2D,Z,0,0,ot,Mt,lt):n.texImage2D(e.TEXTURE_2D,Z,ut,ot,Mt,lt);x.generateMipmaps=!1}else if(Ct){if(Pt){let Z=se(J);n.texStorage2D(e.TEXTURE_2D,st,ut,Z.width,Z.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ot,Mt,J)}else n.texImage2D(e.TEXTURE_2D,0,ut,ot,Mt,J);h(x)&&g(k),rt.__version=it.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function It(C,x,I){if(x.image.length!==6)return;let k=K(C,x),H=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+I);let it=i.get(H);if(H.version!==it.__version||k===!0){n.activeTexture(e.TEXTURE0+I);let rt=Wt.getPrimaries(Wt.workingColorSpace),q=x.colorSpace===Ss?null:Wt.getPrimaries(x.colorSpace),J=x.colorSpace===Ss||rt===q?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ot=x.isCompressedTexture||x.image[0].isCompressedTexture,Mt=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let tt=0;tt<6;tt++)!ot&&!Mt?ut[tt]=y(x.image[tt],!0,s.maxCubemapSize):ut[tt]=Mt?x.image[tt].image:x.image[tt],ut[tt]=En(x,ut[tt]);let lt=ut[0],At=a.convert(x.format,x.colorSpace),Ct=a.convert(x.type),Pt=m(x.internalFormat,At,Ct,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,st=it.__version===void 0||k===!0,Z=H.dataReady,ct=E(x,lt);$t(e.TEXTURE_CUBE_MAP,x);let mt;if(ot){N&&st&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ct,Pt,lt.width,lt.height);for(let tt=0;tt<6;tt++){mt=ut[tt].mipmaps;for(let St=0;St<mt.length;St++){let xt=mt[St];x.format!==di?At!==null?N?Z&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,xt.width,xt.height,At,xt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,Pt,xt.width,xt.height,0,xt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,0,0,xt.width,xt.height,At,Ct,xt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St,Pt,xt.width,xt.height,0,At,Ct,xt.data)}}}else{if(mt=x.mipmaps,N&&st){mt.length>0&&ct++;let tt=se(ut[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ct,Pt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(Mt){N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ut[tt].width,ut[tt].height,At,Ct,ut[tt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Pt,ut[tt].width,ut[tt].height,0,At,Ct,ut[tt].data);for(let St=0;St<mt.length;St++){let Ce=mt[St].image[tt].image;N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,Ce.width,Ce.height,At,Ct,Ce.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,Pt,Ce.width,Ce.height,0,At,Ct,Ce.data)}}else{N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,At,Ct,ut[tt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Pt,At,Ct,ut[tt]);for(let St=0;St<mt.length;St++){let xt=mt[St];N?Z&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,0,0,At,Ct,xt.image[tt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St+1,Pt,At,Ct,xt.image[tt])}}}h(x)&&g(e.TEXTURE_CUBE_MAP),it.__version=H.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function wt(C,x,I,k,H,it){let rt=a.convert(I.format,I.colorSpace),q=a.convert(I.type),J=m(I.internalFormat,rt,q,I.normalized,I.colorSpace),ot=i.get(x),Mt=i.get(I);if(Mt.__renderTarget=x,!ot.__hasExternalTextures){let ut=Math.max(1,x.width>>it),lt=Math.max(1,x.height>>it);H===e.TEXTURE_3D||H===e.TEXTURE_2D_ARRAY?n.texImage3D(H,it,J,ut,lt,x.depth,0,rt,q,null):n.texImage2D(H,it,J,ut,lt,0,rt,q,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Ve(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,H,Mt.__webglTexture,0,we(x)):(H===e.TEXTURE_2D||H>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,H,Mt.__webglTexture,it),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(C,x,I){if(e.bindRenderbuffer(e.RENDERBUFFER,C),x.depthBuffer){let k=x.depthTexture,H=k&&k.isDepthTexture?k.type:null,it=T(x.stencilBuffer,H),rt=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ve(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(x),it,x.width,x.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(x),it,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,it,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,rt,e.RENDERBUFFER,C)}else{let k=x.textures;for(let H=0;H<k.length;H++){let it=k[H],rt=a.convert(it.format,it.colorSpace),q=a.convert(it.type),J=m(it.internalFormat,rt,q,it.normalized,it.colorSpace);Ve(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(x),J,x.width,x.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(x),J,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,J,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ht(C,x,I){let k=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=i.get(x.depthTexture);if(H.__renderTarget=x,(!H.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k){if(H.__webglInit===void 0&&(H.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),H.__webglTexture===void 0){H.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),$t(e.TEXTURE_CUBE_MAP,x.depthTexture);let ot=a.convert(x.depthTexture.format),Mt=a.convert(x.depthTexture.type),ut;x.depthTexture.format===zi?ut=e.DEPTH_COMPONENT24:x.depthTexture.format===ga&&(ut=e.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ut,x.width,x.height,0,ot,Mt,null)}}else $(x.depthTexture,0);let it=H.__webglTexture,rt=we(x),q=k?e.TEXTURE_CUBE_MAP_POSITIVE_X+I:e.TEXTURE_2D,J=x.depthTexture.format===ga?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===zi)Ve(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,q,it,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,J,q,it,0);else if(x.depthTexture.format===ga)Ve(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,q,it,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,J,q,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(C){let x=i.get(C),I=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let k=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),k){let H=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,k.removeEventListener("dispose",H)};k.addEventListener("dispose",H),x.__depthDisposeCallback=H}x.__boundDepthTexture=k}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(I)for(let k=0;k<6;k++)Ht(x.__webglFramebuffer[k],C,k);else{let k=C.texture.mipmaps;k&&k.length>0?Ht(x.__webglFramebuffer[0],C,0):Ht(x.__webglFramebuffer,C,0)}else if(I){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]===void 0)x.__webglDepthbuffer[k]=e.createRenderbuffer(),Oe(x.__webglDepthbuffer[k],C,!1);else{let H=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,it),e.framebufferRenderbuffer(e.FRAMEBUFFER,H,e.RENDERBUFFER,it)}}else{let k=C.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Oe(x.__webglDepthbuffer,C,!1);else{let H=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,it),e.framebufferRenderbuffer(e.FRAMEBUFFER,H,e.RENDERBUFFER,it)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function te(C,x,I){let k=i.get(C);x!==void 0&&wt(k.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&he(C)}function Kt(C){let x=C.texture,I=i.get(C),k=i.get(x);C.addEventListener("dispose",_);let H=C.textures,it=C.isWebGLCubeRenderTarget===!0,rt=H.length>1;if(rt||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=x.version,r.memory.textures++),it){I.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[q]=[];for(let J=0;J<x.mipmaps.length;J++)I.__webglFramebuffer[q][J]=e.createFramebuffer()}else I.__webglFramebuffer[q]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)I.__webglFramebuffer[q]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(rt)for(let q=0,J=H.length;q<J;q++){let ot=i.get(H[q]);ot.__webglTexture===void 0&&(ot.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&Ve(C)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let q=0;q<H.length;q++){let J=H[q];I.__webglColorRenderbuffer[q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[q]);let ot=a.convert(J.format,J.colorSpace),Mt=a.convert(J.type),ut=m(J.internalFormat,ot,Mt,J.normalized,J.colorSpace,C.isXRRenderTarget===!0),lt=we(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,lt,ut,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+q,e.RENDERBUFFER,I.__webglColorRenderbuffer[q])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Oe(I.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(it){n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),$t(e.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)wt(I.__webglFramebuffer[q][J],C,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,J);else wt(I.__webglFramebuffer[q],C,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);h(x)&&g(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(rt){for(let q=0,J=H.length;q<J;q++){let ot=H[q],Mt=i.get(ot),ut=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,Mt.__webglTexture),$t(ut,ot),wt(I.__webglFramebuffer,C,ot,e.COLOR_ATTACHMENT0+q,ut,0),h(ot)&&g(ut)}n.unbindTexture()}else{let q=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(q,k.__webglTexture),$t(q,x),x.mipmaps&&x.mipmaps.length>0)for(let J=0;J<x.mipmaps.length;J++)wt(I.__webglFramebuffer[J],C,x,e.COLOR_ATTACHMENT0,q,J);else wt(I.__webglFramebuffer,C,x,e.COLOR_ATTACHMENT0,q,0);h(x)&&g(q),n.unbindTexture()}C.depthBuffer&&he(C)}function ke(C){let x=C.textures;for(let I=0,k=x.length;I<k;I++){let H=x[I];if(h(H)){let it=b(C),rt=i.get(H).__webglTexture;n.bindTexture(it,rt),g(it),n.unbindTexture()}}}let Ye=[],je=[];function rn(C){if(C.samples>0){if(Ve(C)===!1){let x=C.textures,I=C.width,k=C.height,H=e.COLOR_BUFFER_BIT,it=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=i.get(C),q=x.length>1;if(q)for(let ot=0;ot<x.length;ot++)n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let J=C.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let ot=0;ot<x.length;ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(H|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(H|=e.STENCIL_BUFFER_BIT)),q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,rt.__webglColorRenderbuffer[ot]);let Mt=i.get(x[ot]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Mt,0)}e.blitFramebuffer(0,0,I,k,0,0,I,k,H,e.NEAREST),l===!0&&(Ye.length=0,je.length=0,Ye.push(e.COLOR_ATTACHMENT0+ot),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ye.push(it),je.push(it),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,je)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),q)for(let ot=0;ot<x.length;ot++){n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,rt.__webglColorRenderbuffer[ot]);let Mt=i.get(x[ot]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,Mt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let x=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function we(C){return Math.min(s.maxSamples,C.samples)}function Ve(C){let x=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(C){let x=r.render.frame;f.get(C)!==x&&(f.set(C,x),C.update())}function En(C,x){let I=C.colorSpace,k=C.format,H=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==Rl&&I!==Ss&&(Wt.getTransfer(I)===ie?(k!==di||H!==$n)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",I)),x}function se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=Y,this.getTextureUnits=X,this.setTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=et,this.setTexture3D=ft,this.setTextureCube=gt,this.rebindTextures=te,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function n3(e,t){function n(i,s=Ss){let a,r=Wt.getTransfer(s);if(i===$n)return e.UNSIGNED_BYTE;if(i===qh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Yh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Sg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Mg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===xg)return e.BYTE;if(i===bg)return e.SHORT;if(i===mo)return e.UNSIGNED_SHORT;if(i===Wh)return e.INT;if(i===Mi)return e.UNSIGNED_INT;if(i===Ti)return e.FLOAT;if(i===Hi)return e.HALF_FLOAT;if(i===Tg)return e.ALPHA;if(i===Eg)return e.RGB;if(i===di)return e.RGBA;if(i===zi)return e.DEPTH_COMPONENT;if(i===ga)return e.DEPTH_STENCIL;if(i===Ag)return e.RED;if(i===Zh)return e.RED_INTEGER;if(i===ya)return e.RG;if(i===Jh)return e.RG_INTEGER;if(i===Kh)return e.RGBA_INTEGER;if(i===Ql||i===jl||i===$l||i===tc)if(r===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ql)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ql)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$l)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qh||i===jh||i===$h||i===tf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Qh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$h)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ef||i===nf||i===sf||i===af||i===rf||i===ec||i===of)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ef||i===nf)return r===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===sf)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===af)return a.COMPRESSED_R11_EAC;if(i===rf)return a.COMPRESSED_SIGNED_R11_EAC;if(i===ec)return a.COMPRESSED_RG11_EAC;if(i===of)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lf||i===cf||i===uf||i===hf||i===ff||i===df||i===pf||i===mf||i===gf||i===yf||i===_f||i===vf||i===xf||i===bf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===lf)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cf)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uf)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hf)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ff)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===df)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pf)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mf)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gf)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yf)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_f)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vf)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xf)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bf)return r===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sf||i===Mf||i===Tf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Sf)return r===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ef||i===Af||i===nc||i===wf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ef)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Af)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===go?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}function r3(e,t){function n(y,h){y.matrixAutoUpdate===!0&&y.updateMatrix(),h.value.copy(y.matrix)}function i(y,h){h.color.getRGB(y.fogColor.value,Dg(e)),h.isFog?(y.fogNear.value=h.near,y.fogFar.value=h.far):h.isFogExp2&&(y.fogDensity.value=h.density)}function s(y,h,g,b,m){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(y,h):h.isMeshLambertMaterial?(a(y,h),h.envMap&&(y.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(y,h),p(y,h)):h.isMeshPhongMaterial?(a(y,h),f(y,h),h.envMap&&(y.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(y,h),u(y,h),h.isMeshPhysicalMaterial&&d(y,h,m)):h.isMeshMatcapMaterial?(a(y,h),v(y,h)):h.isMeshDepthMaterial?a(y,h):h.isMeshDistanceMaterial?(a(y,h),M(y,h)):h.isMeshNormalMaterial?a(y,h):h.isLineBasicMaterial?(r(y,h),h.isLineDashedMaterial&&o(y,h)):h.isPointsMaterial?l(y,h,g,b):h.isSpriteMaterial?c(y,h):h.isShadowMaterial?(y.color.value.copy(h.color),y.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(y,h){y.opacity.value=h.opacity,h.color&&y.diffuse.value.copy(h.color),h.emissive&&y.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(y.map.value=h.map,n(h.map,y.mapTransform)),h.alphaMap&&(y.alphaMap.value=h.alphaMap,n(h.alphaMap,y.alphaMapTransform)),h.bumpMap&&(y.bumpMap.value=h.bumpMap,n(h.bumpMap,y.bumpMapTransform),y.bumpScale.value=h.bumpScale,h.side===Tn&&(y.bumpScale.value*=-1)),h.normalMap&&(y.normalMap.value=h.normalMap,n(h.normalMap,y.normalMapTransform),y.normalScale.value.copy(h.normalScale),h.side===Tn&&y.normalScale.value.negate()),h.displacementMap&&(y.displacementMap.value=h.displacementMap,n(h.displacementMap,y.displacementMapTransform),y.displacementScale.value=h.displacementScale,y.displacementBias.value=h.displacementBias),h.emissiveMap&&(y.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,y.emissiveMapTransform)),h.specularMap&&(y.specularMap.value=h.specularMap,n(h.specularMap,y.specularMapTransform)),h.alphaTest>0&&(y.alphaTest.value=h.alphaTest);let g=t.get(h),b=g.envMap,m=g.envMapRotation;b&&(y.envMap.value=b,y.envMapRotation.value.setFromMatrix4(a3.makeRotationFromEuler(m)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(US),y.reflectivity.value=h.reflectivity,y.ior.value=h.ior,y.refractionRatio.value=h.refractionRatio),h.lightMap&&(y.lightMap.value=h.lightMap,y.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,y.lightMapTransform)),h.aoMap&&(y.aoMap.value=h.aoMap,y.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,y.aoMapTransform))}function r(y,h){y.diffuse.value.copy(h.color),y.opacity.value=h.opacity,h.map&&(y.map.value=h.map,n(h.map,y.mapTransform))}function o(y,h){y.dashSize.value=h.dashSize,y.totalSize.value=h.dashSize+h.gapSize,y.scale.value=h.scale}function l(y,h,g,b){y.diffuse.value.copy(h.color),y.opacity.value=h.opacity,y.size.value=h.size*g,y.scale.value=b*.5,h.map&&(y.map.value=h.map,n(h.map,y.uvTransform)),h.alphaMap&&(y.alphaMap.value=h.alphaMap,n(h.alphaMap,y.alphaMapTransform)),h.alphaTest>0&&(y.alphaTest.value=h.alphaTest)}function c(y,h){y.diffuse.value.copy(h.color),y.opacity.value=h.opacity,y.rotation.value=h.rotation,h.map&&(y.map.value=h.map,n(h.map,y.mapTransform)),h.alphaMap&&(y.alphaMap.value=h.alphaMap,n(h.alphaMap,y.alphaMapTransform)),h.alphaTest>0&&(y.alphaTest.value=h.alphaTest)}function f(y,h){y.specular.value.copy(h.specular),y.shininess.value=Math.max(h.shininess,1e-4)}function p(y,h){h.gradientMap&&(y.gradientMap.value=h.gradientMap)}function u(y,h){y.metalness.value=h.metalness,h.metalnessMap&&(y.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,y.metalnessMapTransform)),y.roughness.value=h.roughness,h.roughnessMap&&(y.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,y.roughnessMapTransform)),h.envMap&&(y.envMapIntensity.value=h.envMapIntensity)}function d(y,h,g){y.ior.value=h.ior,h.sheen>0&&(y.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),y.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(y.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,y.sheenColorMapTransform)),h.sheenRoughnessMap&&(y.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,y.sheenRoughnessMapTransform))),h.clearcoat>0&&(y.clearcoat.value=h.clearcoat,y.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(y.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,y.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(y.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tn&&y.clearcoatNormalScale.value.negate())),h.dispersion>0&&(y.dispersion.value=h.dispersion),h.iridescence>0&&(y.iridescence.value=h.iridescence,y.iridescenceIOR.value=h.iridescenceIOR,y.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(y.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,y.iridescenceMapTransform)),h.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),h.transmission>0&&(y.transmission.value=h.transmission,y.transmissionSamplerMap.value=g.texture,y.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(y.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,y.transmissionMapTransform)),y.thickness.value=h.thickness,h.thicknessMap&&(y.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=h.attenuationDistance,y.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(y.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(y.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=h.specularIntensity,y.specularColor.value.copy(h.specularColor),h.specularColorMap&&(y.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,y.specularColorMapTransform)),h.specularIntensityMap&&(y.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,y.specularIntensityMapTransform))}function v(y,h){h.matcap&&(y.matcap.value=h.matcap)}function M(y,h){let g=t.get(h).light;y.referencePosition.value.setFromMatrixPosition(g.matrixWorld),y.nearDistance.value=g.shadow.camera.near,y.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function o3(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,T){let E=T.program;i.uniformBlockBinding(m,E)}function c(m,T){let E=s[m.id];E===void 0&&(y(m),E=f(m),s[m.id]=E,m.addEventListener("dispose",g));let w=T.program;i.updateUBOMapping(m,w);let _=t.render.frame;a[m.id]!==_&&(u(m),a[m.id]=_)}function f(m){let T=p();m.__bindingPointIndex=T;let E=e.createBuffer(),w=m.__size,_=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,w,_),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,E),E}function p(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){let T=s[m.id],E=m.uniforms,w=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let _=0,A=E.length;_<A;_++){let R=E[_];if(Array.isArray(R))for(let D=0,O=R.length;D<O;D++)d(R[D],_,D,w);else d(R,_,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(m,T,E,w){if(M(m,T,E,w)===!0){let _=m.__offset,A=m.value;if(Array.isArray(A)){let R=0;for(let D=0;D<A.length;D++){let O=A[D],Y=h(O);v(O,m.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,_,m.__data)}}function v(m,T,E){typeof m=="number"||typeof m=="boolean"?T[0]=m:m.isMatrix3?(T[0]=m.elements[0],T[1]=m.elements[1],T[2]=m.elements[2],T[3]=0,T[4]=m.elements[3],T[5]=m.elements[4],T[6]=m.elements[5],T[7]=0,T[8]=m.elements[6],T[9]=m.elements[7],T[10]=m.elements[8],T[11]=0):ArrayBuffer.isView(m)?T.set(new m.constructor(m.buffer,m.byteOffset,T.length)):m.toArray(T,E)}function M(m,T,E,w){let _=m.value,A=T+"_"+E;if(w[A]===void 0)return typeof _=="number"||typeof _=="boolean"?w[A]=_:ArrayBuffer.isView(_)?w[A]=_.slice():w[A]=_.clone(),!0;{let R=w[A];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return w[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function y(m){let T=m.uniforms,E=0,w=16;for(let A=0,R=T.length;A<R;A++){let D=Array.isArray(T[A])?T[A]:[T[A]];for(let O=0,Y=D.length;O<Y;O++){let X=D[O],B=Array.isArray(X.value)?X.value:[X.value];for(let W=0,G=B.length;W<G;W++){let $=B[W],et=h($),ft=E%w,gt=ft%et.boundary,vt=ft+gt;E+=gt,vt!==0&&w-vt<et.storage&&(E+=w-vt),X.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=E,E+=et.storage}}}let _=E%w;return _>0&&(E+=w-_),m.__size=E,m.__cache={},this}function h(m){let T={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(T.boundary=4,T.storage=4):m.isVector2?(T.boundary=8,T.storage=8):m.isVector3||m.isColor?(T.boundary=16,T.storage=12):m.isVector4?(T.boundary=16,T.storage=16):m.isMatrix3?(T.boundary=48,T.storage=48):m.isMatrix4?(T.boundary=64,T.storage=64):m.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(T.boundary=16,T.storage=m.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",m),T}function g(m){let T=m.target;T.removeEventListener("dispose",g);let E=r.indexOf(T.__bindingPointIndex);r.splice(E,1),e.deleteBuffer(s[T.id]),delete s[T.id],delete a[T.id]}function b(){for(let m in s)e.deleteBuffer(s[m]);r=[],s={},a={}}return{bind:l,update:c,dispose:b}}function c3(){return Xi===null&&(Xi=new Th(l3,16,16,ya,Hi),Xi.name="DFG_LUT",Xi.minFilter=fn,Xi.magFilter=fn,Xi.wrapS=Bi,Xi.wrapT=Bi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var TE,EE,AE,wE,CE,RE,DE,NE,UE,LE,OE,IE,PE,BE,zE,FE,kE,VE,GE,HE,XE,WE,qE,YE,ZE,JE,KE,QE,jE,$E,tA,eA,nA,iA,sA,aA,rA,oA,lA,cA,uA,hA,fA,dA,pA,mA,gA,yA,_A,vA,xA,bA,SA,MA,TA,EA,AA,wA,CA,RA,DA,NA,UA,LA,OA,IA,PA,BA,zA,FA,kA,VA,GA,HA,XA,WA,qA,YA,ZA,JA,KA,QA,jA,$A,tw,ew,nw,iw,sw,aw,rw,ow,lw,cw,uw,hw,fw,dw,pw,mw,gw,yw,_w,vw,xw,bw,Sw,Mw,Tw,Ew,Aw,ww,Cw,Rw,Dw,Nw,Uw,Lw,Ow,Iw,Pw,Bw,zw,Fw,kw,Vw,Gw,Hw,Xw,Ww,qw,Yw,Zw,Jw,Kw,Qw,jw,$w,t2,e2,n2,i2,Ft,ht,Wi,Df,s2,wS,_a,sS,ja,u2,sc,aS,Ig,Pg,Bg,zg,h2,Uf,Lf,S2,CS,Vg,RS,DS,NS,cS,uS,hS,fS,dS,Gg,Hg,Xg,Fg,_o,hC,fC,gS,gC,Nf,SC,MC,EC,wC,RC,NC,LC,BC,qg,Yg,WC,JC,KC,QC,jC,ES,ac,kg,i3,s3,Zg,Jg,a3,US,l3,Xi,Of,LS=xo(()=>{Og();Og();TE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,LE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,YE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tA="gl_FragColor = linearToOutputTexel( gl_FragColor );",eA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,iA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,gA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_A=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,SA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,EA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,YA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$A=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ew=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_w=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ew=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ww=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Uw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ww=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:TE,alphahash_pars_fragment:EE,alphamap_fragment:AE,alphamap_pars_fragment:wE,alphatest_fragment:CE,alphatest_pars_fragment:RE,aomap_fragment:DE,aomap_pars_fragment:NE,batching_pars_vertex:UE,batching_vertex:LE,begin_vertex:OE,beginnormal_vertex:IE,bsdfs:PE,iridescence_fragment:BE,bumpmap_pars_fragment:zE,clipping_planes_fragment:FE,clipping_planes_pars_fragment:kE,clipping_planes_pars_vertex:VE,clipping_planes_vertex:GE,color_fragment:HE,color_pars_fragment:XE,color_pars_vertex:WE,color_vertex:qE,common:YE,cube_uv_reflection_fragment:ZE,defaultnormal_vertex:JE,displacementmap_pars_vertex:KE,displacementmap_vertex:QE,emissivemap_fragment:jE,emissivemap_pars_fragment:$E,colorspace_fragment:tA,colorspace_pars_fragment:eA,envmap_fragment:nA,envmap_common_pars_fragment:iA,envmap_pars_fragment:sA,envmap_pars_vertex:aA,envmap_physical_pars_fragment:gA,envmap_vertex:rA,fog_vertex:oA,fog_pars_vertex:lA,fog_fragment:cA,fog_pars_fragment:uA,gradientmap_pars_fragment:hA,lightmap_pars_fragment:fA,lights_lambert_fragment:dA,lights_lambert_pars_fragment:pA,lights_pars_begin:mA,lights_toon_fragment:yA,lights_toon_pars_fragment:_A,lights_phong_fragment:vA,lights_phong_pars_fragment:xA,lights_physical_fragment:bA,lights_physical_pars_fragment:SA,lights_fragment_begin:MA,lights_fragment_maps:TA,lights_fragment_end:EA,lightprobes_pars_fragment:AA,logdepthbuf_fragment:wA,logdepthbuf_pars_fragment:CA,logdepthbuf_pars_vertex:RA,logdepthbuf_vertex:DA,map_fragment:NA,map_pars_fragment:UA,map_particle_fragment:LA,map_particle_pars_fragment:OA,metalnessmap_fragment:IA,metalnessmap_pars_fragment:PA,morphinstance_vertex:BA,morphcolor_vertex:zA,morphnormal_vertex:FA,morphtarget_pars_vertex:kA,morphtarget_vertex:VA,normal_fragment_begin:GA,normal_fragment_maps:HA,normal_pars_fragment:XA,normal_pars_vertex:WA,normal_vertex:qA,normalmap_pars_fragment:YA,clearcoat_normal_fragment_begin:ZA,clearcoat_normal_fragment_maps:JA,clearcoat_pars_fragment:KA,iridescence_pars_fragment:QA,opaque_fragment:jA,packing:$A,premultiplied_alpha_fragment:tw,project_vertex:ew,dithering_fragment:nw,dithering_pars_fragment:iw,roughnessmap_fragment:sw,roughnessmap_pars_fragment:aw,shadowmap_pars_fragment:rw,shadowmap_pars_vertex:ow,shadowmap_vertex:lw,shadowmask_pars_fragment:cw,skinbase_vertex:uw,skinning_pars_vertex:hw,skinning_vertex:fw,skinnormal_vertex:dw,specularmap_fragment:pw,specularmap_pars_fragment:mw,tonemapping_fragment:gw,tonemapping_pars_fragment:yw,transmission_fragment:_w,transmission_pars_fragment:vw,uv_pars_fragment:xw,uv_pars_vertex:bw,uv_vertex:Sw,worldpos_vertex:Mw,background_vert:Tw,background_frag:Ew,backgroundCube_vert:Aw,backgroundCube_frag:ww,cube_vert:Cw,cube_frag:Rw,depth_vert:Dw,depth_frag:Nw,distance_vert:Uw,distance_frag:Lw,equirect_vert:Ow,equirect_frag:Iw,linedashed_vert:Pw,linedashed_frag:Bw,meshbasic_vert:zw,meshbasic_frag:Fw,meshlambert_vert:kw,meshlambert_frag:Vw,meshmatcap_vert:Gw,meshmatcap_frag:Hw,meshnormal_vert:Xw,meshnormal_frag:Ww,meshphong_vert:qw,meshphong_frag:Yw,meshphysical_vert:Zw,meshphysical_frag:Jw,meshtoon_vert:Kw,meshtoon_frag:Qw,points_vert:jw,points_frag:$w,shadow_vert:t2,shadow_frag:e2,sprite_vert:n2,sprite_frag:i2},ht={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Wi={basic:{uniforms:vn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:vn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:vn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:vn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:vn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:vn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:vn([ht.points,ht.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:vn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:vn([ht.common,ht.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:vn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:vn([ht.sprite,ht.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distance:{uniforms:vn([ht.common,ht.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distance_vert,fragmentShader:Ft.distance_frag},shadow:{uniforms:vn([ht.lights,ht.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Wi.physical={uniforms:vn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};Df={r:0,b:0,g:0},s2=new Le,wS=new Lt;wS.set(-1,0,0,0,1,0,0,0,1);_a=4,sS=[.125,.215,.35,.446,.526,.582],ja=20,u2=256,sc=new Yl,aS=new Jt,Ig=null,Pg=0,Bg=0,zg=!1,h2=new P,Uf=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=h2}=a;Ig=this._renderer.getRenderTarget(),Pg=this._renderer.getActiveCubeFace(),Bg=this._renderer.getActiveMipmapLevel(),zg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ig,Pg,Bg),this._renderer.xr.enabled=zg,t.scissorTest=!1,yo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===pa||t.mapping===Ka?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ig=this._renderer.getRenderTarget(),Pg=this._renderer.getActiveCubeFace(),Bg=this._renderer.getActiveMipmapLevel(),zg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Hi,format:di,colorSpace:Rl,depthBuffer:!1},s=rS(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rS(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=f2(a)),this._blurMaterial=p2(a,t,n),this._ggxMaterial=d2(a,t,n)}return s}_compileMaterial(t){let n=new an(new _n,t);this._renderer.compile(n,sc)}_sceneToCubeUV(t,n,i,s,a){let l=new yn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(aS),p.toneMapping=Si,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new an(new uo,new bi({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,y=M.material,h=!1,g=t.background;g?g.isColor&&(y.color.copy(g),t.background=null,h=!0):(y.color.copy(aS),h=!0);for(let b=0;b<6;b++){let m=b%3;m===0?(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[b],a.y,a.z)):m===1?(l.up.set(0,0,c[b]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[b],a.z)):(l.up.set(0,c[b],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[b]));let T=this._cubeSize;yo(s,m*T,b>2?T:0,T,T),p.setRenderTarget(s),h&&p.render(M,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===pa||t.mapping===Ka;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oS());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;yo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,sc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=0+c*1.25,d=p*u,{_lodMax:v}=this,M=this._sizeLods[i],y=3*M*(i>v-_a?i-v+_a:0),h=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=v-n,yo(a,y,h,3*M,2*M),s.setRenderTarget(a),s.render(o,sc),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=v-i,yo(t,y,h,3*M,2*M),s.setRenderTarget(t),s.render(o,sc)}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");let f=3,p=this._lodMeshes[s];p.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*ja-1),M=a/v,y=isFinite(a)?1+Math.floor(f*M):ja;y>ja&&Rt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ja}`);let h=[],g=0;for(let w=0;w<ja;++w){let _=w/M,A=Math.exp(-_*_/2);h.push(A),w===0?g+=A:w<y&&(g+=2*A)}for(let w=0;w<h.length;w++)h[w]=h[w]/g;u.envMap.value=t.texture,u.samples.value=y,u.weights.value=h,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:b}=this;u.dTheta.value=v,u.mipInt.value=b-i;let m=this._sizeLods[s],T=3*m*(s>b-_a?s-b+_a:0),E=4*(this._cubeSize-m);yo(n,T,E,3*m,2*m),l.setRenderTarget(n),l.render(p,sc)}};Lf=class extends Jn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Vl(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new uo(5,5,5),a=new Qn({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Gi});a.uniforms.tEquirect.value=n;let r=new an(s,a),o=n.minFilter;return n.minFilter===ma&&(n.minFilter=fn),new kh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};S2={[fg]:"LINEAR_TONE_MAPPING",[dg]:"REINHARD_TONE_MAPPING",[pg]:"CINEON_TONE_MAPPING",[mg]:"ACES_FILMIC_TONE_MAPPING",[yg]:"AGX_TONE_MAPPING",[_g]:"NEUTRAL_TONE_MAPPING",[gg]:"CUSTOM_TONE_MAPPING"};CS=new On,Vg=new bs(1,1),RS=new Ll,DS=new Mh,NS=new Vl,cS=[],uS=[],hS=new Float32Array(16),fS=new Float32Array(9),dS=new Float32Array(4);Gg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=H2(n.type)}},Hg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=cC(n.type)}},Xg=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Fg=/(\w+)(\])?(\[|\.)?/g;_o=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);uC(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};hC=37297,fC=0;gS=new Lt;gC={[fg]:"Linear",[dg]:"Reinhard",[pg]:"Cineon",[mg]:"ACESFilmic",[yg]:"AgX",[_g]:"Neutral",[gg]:"Custom"};Nf=new P;SC=/^[ \t]*#include +<([\w\d./]+)>/gm;MC=new Map;EC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;wC={[Zl]:"SHADOWMAP_TYPE_PCF",[po]:"SHADOWMAP_TYPE_VSM"};RC={[pa]:"ENVMAP_TYPE_CUBE",[Ka]:"ENVMAP_TYPE_CUBE",[Jl]:"ENVMAP_TYPE_CUBE_UV"};NC={[Ka]:"ENVMAP_MODE_REFRACTION"};LC={[hg]:"ENVMAP_BLENDING_MULTIPLY",[kb]:"ENVMAP_BLENDING_MIX",[Vb]:"ENVMAP_BLENDING_ADD"};BC=0,qg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Yg(t),n.set(t,i)),i}},Yg=class{constructor(t){this.id=BC++,this.code=t,this.usedTimes=0}};WC=0;JC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QC=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],jC=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],ES=new Le,ac=new P,kg=new P;i3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Gl(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Qn({vertexShader:i3,fragmentShader:s3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new an(new Xl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jg=class extends Fi{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,v=null,M=typeof XRWebGLBinding<"u",y=new Zg,h={},g=n.getContextAttributes(),b=null,m=null,T=[],E=[],w=new Zt,_=null,A=new yn;A.viewport=new Ee;let R=new yn;R.viewport=new Ee;let D=[A,R],O=new Vh,Y=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let at=T[K];return at===void 0&&(at=new lo,T[K]=at),at.getTargetRaySpace()},this.getControllerGrip=function(K){let at=T[K];return at===void 0&&(at=new lo,T[K]=at),at.getGripSpace()},this.getHand=function(K){let at=T[K];return at===void 0&&(at=new lo,T[K]=at),at.getHandSpace()};function B(K){let at=E.indexOf(K.inputSource);if(at===-1)return;let nt=T[at];nt!==void 0&&(nt.update(K.inputSource,K.frame,c||r),nt.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",G);for(let K=0;K<T.length;K++){let at=E[K];at!==null&&(E[K]=null,T[K].disconnect(at))}Y=null,X=null,y.reset();for(let K in h)delete h[K];t.setRenderTarget(b),d=null,u=null,p=null,s=null,m=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await n.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Ut=null,It=null;g.depth&&(It=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,nt=g.stencil?ga:zi,Ut=g.stencil?go:Mi);let wt={colorFormat:n.RGBA8,depthFormat:It,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),m=new Jn(u.textureWidth,u.textureHeight,{format:di,type:$n,depthTexture:new bs(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Jn(d.framebufferWidth,d.framebufferHeight,{format:di,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(K){for(let at=0;at<K.removed.length;at++){let nt=K.removed[at],Ut=E.indexOf(nt);Ut>=0&&(E[Ut]=null,T[Ut].disconnect(nt))}for(let at=0;at<K.added.length;at++){let nt=K.added[at],Ut=E.indexOf(nt);if(Ut===-1){for(let wt=0;wt<T.length;wt++)if(wt>=E.length){E.push(nt),Ut=wt;break}else if(E[wt]===null){E[wt]=nt,Ut=wt;break}if(Ut===-1)break}let It=T[Ut];It&&It.connect(nt)}}let $=new P,et=new P;function ft(K,at,nt){$.setFromMatrixPosition(at.matrixWorld),et.setFromMatrixPosition(nt.matrixWorld);let Ut=$.distanceTo(et),It=at.projectionMatrix.elements,wt=nt.projectionMatrix.elements,Oe=It[14]/(It[10]-1),Ht=It[14]/(It[10]+1),he=(It[9]+1)/It[5],te=(It[9]-1)/It[5],Kt=(It[8]-1)/It[0],ke=(wt[8]+1)/wt[0],Ye=Oe*Kt,je=Oe*ke,rn=Ut/(-Kt+ke),we=rn*-Kt;if(at.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(we),K.translateZ(rn),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),It[10]===-1)K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let Ve=Oe+rn,U=Ht+rn,En=Ye-we,se=je+(Ut-we),C=he*Ht/U*Ve,x=te*Ht/U*Ve;K.projectionMatrix.makePerspective(En,se,C,x,Ve,U),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function gt(K,at){at===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(at.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let at=K.near,nt=K.far;y.texture!==null&&(y.depthNear>0&&(at=y.depthNear),y.depthFar>0&&(nt=y.depthFar)),O.near=R.near=A.near=at,O.far=R.far=A.far=nt,(Y!==O.near||X!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),Y=O.near,X=O.far),O.layers.mask=K.layers.mask|6,A.layers.mask=O.layers.mask&-5,R.layers.mask=O.layers.mask&-3;let Ut=K.parent,It=O.cameras;gt(O,Ut);for(let wt=0;wt<It.length;wt++)gt(It[wt],Ut);It.length===2?ft(O,A,R):O.projectionMatrix.copy(A.projectionMatrix),vt(K,O,Ut)};function vt(K,at,nt){nt===null?K.matrix.copy(at.matrixWorld):(K.matrix.copy(nt.matrixWorld),K.matrix.invert(),K.matrix.multiply(at.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=xh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(O)},this.getCameraTexture=function(K){return h[K]};let jt=null;function Ae(K,at){if(f=at.getViewerPose(c||r),v=at,f!==null){let nt=f.views;d!==null&&(t.setRenderTargetFramebuffer(m,d.framebuffer),t.setRenderTarget(m));let Ut=!1;nt.length!==O.cameras.length&&(O.cameras.length=0,Ut=!0);for(let Ht=0;Ht<nt.length;Ht++){let he=nt[Ht],te=null;if(d!==null)te=d.getViewport(he);else{let ke=p.getViewSubImage(u,he);te=ke.viewport,Ht===0&&(t.setRenderTargetTextures(m,ke.colorTexture,ke.depthStencilTexture),t.setRenderTarget(m))}let Kt=D[Ht];Kt===void 0&&(Kt=new yn,Kt.layers.enable(Ht),Kt.viewport=new Ee,D[Ht]=Kt),Kt.matrix.fromArray(he.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(he.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(te.x,te.y,te.width,te.height),Ht===0&&(O.matrix.copy(Kt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ut===!0&&O.cameras.push(Kt)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=i.getBinding();let Ht=p.getDepthInformation(nt[0]);Ht&&Ht.isValid&&Ht.texture&&y.init(Ht,s.renderState)}if(It&&It.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let Ht=0;Ht<nt.length;Ht++){let he=nt[Ht].camera;if(he){let te=h[he];te||(te=new Gl,h[he]=te);let Kt=p.getCameraImage(he);te.sourceTexture=Kt}}}}for(let nt=0;nt<T.length;nt++){let Ut=E[nt],It=T[nt];Ut!==null&&It!==void 0&&It.update(Ut,at,c||r)}jt&&jt(K,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),v=null}let $t=new AS;$t.setAnimationLoop(Ae),this.setAnimationLoop=function(K){jt=K},this.dispose=function(){}}},a3=new Le,US=new Lt;US.set(-1,0,0,0,1,0,0,0,1);l3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;Of=class{constructor(t={}){let{canvas:n=Qb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=$n}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let M=d,y=new Set([Kh,Jh,Zh]),h=new Set([$n,Mi,mo,go,qh,Yh]),g=new Uint32Array(4),b=new Int32Array(4),m=new P,T=null,E=null,w=[],_=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,O=null,Y=null,X=null,B=null;this._outputColorSpace=Zn;let W=0,G=0,$=null,et=-1,ft=null,gt=new Ee,vt=new Ee,jt=null,Ae=new Jt(0),$t=0,K=n.width,at=n.height,nt=1,Ut=null,It=null,wt=new Ee(0,0,K,at),Oe=new Ee(0,0,K,at),Ht=!1,he=new Fl,te=!1,Kt=!1,ke=new Le,Ye=new P,je=new Ee,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Ve(){return $===null?nt:1}let U=i;function En(S,L){return n.getContext(S,L)}try{let S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",Ce,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",Ei,!1),U===null){let L="webgl2";if(U=En(L,S),U===null)throw En(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Dt("WebGLRenderer: "+S.message),S}let se,C,x,I,k,H,it,rt,q,J,ot,Mt,ut,lt,At,Ct,Pt,N,st,Z,ct,mt,tt;function St(){se=new g2(U),se.init(),ct=new n3(U,se),C=new l2(U,se,t,ct),x=new t3(U,se),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),Y=U.createFramebuffer(),X=U.createFramebuffer(),B=U.createFramebuffer(),I=new v2(U),k=new kC,H=new e3(U,se,x,k,C,ct,I),it=new m2(R),rt=new ME(U),mt=new r2(U,rt),q=new y2(U,rt,I,mt),J=new b2(U,q,rt,mt,I),N=new x2(U,C,H),At=new c2(k),ot=new FC(R,it,se,C,mt,At),Mt=new r3(R,k),ut=new GC,lt=new ZC(se),Pt=new a2(R,it,x,J,v,l),Ct=new $C(R,J,C),tt=new o3(U,I,C,x),st=new o2(U,se,I),Z=new _2(U,se,I),I.programs=ot.programs,R.capabilities=C,R.extensions=se,R.properties=k,R.renderLists=ut,R.shadowMap=Ct,R.state=x,R.info=I}St(),M!==$n&&(A=new M2(M,n.width,n.height,o,s,a));let xt=new Jg(R,U);this.xr=xt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=se.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=se.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(S){S!==void 0&&(nt=S,this.setSize(K,at,!1))},this.getSize=function(S){return S.set(K,at)},this.setSize=function(S,L,V=!0){if(xt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,at=L,n.width=Math.floor(S*nt),n.height=Math.floor(L*nt),V===!0&&(n.style.width=S+"px",n.style.height=L+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(K*nt,at*nt).floor()},this.setDrawingBufferSize=function(S,L,V){K=S,at=L,nt=V,n.width=Math.floor(S*V),n.height=Math.floor(L*V),this.setViewport(0,0,S,L)},this.setEffects=function(S){if(M===$n){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let L=0;L<S.length;L++)if(S[L].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(gt)},this.getViewport=function(S){return S.copy(wt)},this.setViewport=function(S,L,V,z){S.isVector4?wt.set(S.x,S.y,S.z,S.w):wt.set(S,L,V,z),x.viewport(gt.copy(wt).multiplyScalar(nt).round())},this.getScissor=function(S){return S.copy(Oe)},this.setScissor=function(S,L,V,z){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,L,V,z),x.scissor(vt.copy(Oe).multiplyScalar(nt).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(S){x.setScissorTest(Ht=S)},this.setOpaqueSort=function(S){Ut=S},this.setTransparentSort=function(S){It=S},this.getClearColor=function(S){return S.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(S=!0,L=!0,V=!0){let z=0;if(S){let F=!1;if($!==null){let pt=$.texture.format;F=y.has(pt)}if(F){let pt=$.texture.type,_t=h.has(pt),dt=Pt.getClearColor(),bt=Pt.getClearAlpha(),Tt=dt.r,Bt=dt.g,kt=dt.b;_t?(g[0]=Tt,g[1]=Bt,g[2]=kt,g[3]=bt,U.clearBufferuiv(U.COLOR,0,g)):(b[0]=Tt,b[1]=Bt,b[2]=kt,b[3]=bt,U.clearBufferiv(U.COLOR,0,b))}else z|=U.COLOR_BUFFER_BIT}L&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",Ei,!1),Pt.dispose(),ut.dispose(),lt.dispose(),k.dispose(),it.dispose(),J.dispose(),mt.dispose(),tt.dispose(),ot.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",$g),xt.removeEventListener("sessionend",t0),va.stop()};function Ce(S){S.preventDefault(),Rg("WebGLRenderer: Context Lost."),D=!0}function me(){Rg("WebGLRenderer: Context Restored."),D=!1;let S=I.autoReset,L=Ct.enabled,V=Ct.autoUpdate,z=Ct.needsUpdate,F=Ct.type;St(),I.autoReset=S,Ct.enabled=L,Ct.autoUpdate=V,Ct.needsUpdate=z,Ct.type=F}function Ei(S){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ai(S){let L=S.target;L.removeEventListener("dispose",Ai),FS(L)}function FS(S){kS(S),k.remove(S)}function kS(S){let L=k.get(S).programs;L!==void 0&&(L.forEach(function(V){ot.releaseProgram(V)}),S.isShaderMaterial&&ot.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,V,z,F,pt){L===null&&(L=rn);let _t=F.isMesh&&F.matrixWorld.determinantAffine()<0,dt=HS(S,L,V,z,F);x.setMaterial(z,_t);let bt=V.index,Tt=1;if(z.wireframe===!0){if(bt=q.getWireframeAttribute(V),bt===void 0)return;Tt=2}let Bt=V.drawRange,kt=V.attributes.position,Et=Bt.start*Tt,le=(Bt.start+Bt.count)*Tt;pt!==null&&(Et=Math.max(Et,pt.start*Tt),le=Math.min(le,(pt.start+pt.count)*Tt)),bt!==null?(Et=Math.max(Et,0),le=Math.min(le,bt.count)):kt!=null&&(Et=Math.max(Et,0),le=Math.min(le,kt.count));let Ie=le-Et;if(Ie<0||Ie===1/0)return;mt.setup(F,z,dt,V,bt);let Re,fe=st;if(bt!==null&&(Re=rt.get(bt),fe=Z,fe.setIndex(Re)),F.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*Ve()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(F.isLine){let dn=z.linewidth;dn===void 0&&(dn=1),x.setLineWidth(dn*Ve()),F.isLineSegments?fe.setMode(U.LINES):F.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else F.isPoints?fe.setMode(U.POINTS):F.isSprite&&fe.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(se.get("WEBGL_multi_draw"))fe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let dn=F._multiDrawStarts,yt=F._multiDrawCounts,In=F._multiDrawCount,Qt=bt?rt.get(bt).bytesPerElement:1,ti=k.get(z).currentProgram.getUniforms();for(let wi=0;wi<In;wi++)ti.setValue(U,"_gl_DrawID",wi),fe.render(dn[wi]/Qt,yt[wi])}else if(F.isInstancedMesh)fe.renderInstances(Et,Ie,F.count);else if(V.isInstancedBufferGeometry){let dn=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,yt=Math.min(V.instanceCount,dn);fe.renderInstances(Et,Ie,yt)}else fe.render(Et,Ie)};function jg(S,L,V){S.transparent===!0&&S.side===Vi&&S.forceSinglePass===!1?(S.side=Tn,S.needsUpdate=!0,lc(S,L,V),S.side=xs,S.needsUpdate=!0,lc(S,L,V),S.side=Vi):lc(S,L,V)}this.compile=function(S,L,V=null){V===null&&(V=S),E=lt.get(V),E.init(L),_.push(E),V.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(E.pushLight(F),F.castShadow&&E.pushShadow(F))}),S!==V&&S.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(E.pushLight(F),F.castShadow&&E.pushShadow(F))}),E.setupLights();let z=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let pt=F.material;if(pt)if(Array.isArray(pt))for(let _t=0;_t<pt.length;_t++){let dt=pt[_t];jg(dt,V,F),z.add(dt)}else jg(pt,V,F),z.add(pt)}),E=_.pop(),z},this.compileAsync=function(S,L,V=null){let z=this.compile(S,L,V);return new Promise(F=>{function pt(){if(z.forEach(function(_t){k.get(_t).currentProgram.isReady()&&z.delete(_t)}),z.size===0){F(S);return}setTimeout(pt,10)}se.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let kf=null;function VS(S){kf&&kf(S)}function $g(){va.stop()}function t0(){va.start()}let va=new AS;va.setAnimationLoop(VS),typeof self<"u"&&va.setContext(self),this.setAnimationLoop=function(S){kf=S,xt.setAnimationLoop(S),S===null?va.stop():va.start()},xt.addEventListener("sessionstart",$g),xt.addEventListener("sessionend",t0),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(S,L);let V=xt.enabled===!0&&xt.isPresenting===!0,z=A!==null&&($===null||V)&&A.begin(R,$);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(L),L=xt.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,L,$),E=lt.get(S,_.length),E.init(L),E.state.textureUnits=H.getTextureUnits(),_.push(E),ke.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),he.setFromProjectionMatrix(ke,xi,L.reversedDepth),Kt=this.localClippingEnabled,te=At.init(this.clippingPlanes,Kt),T=ut.get(S,w.length),T.init(),w.push(T),xt.enabled===!0&&xt.isPresenting===!0){let _t=R.xr.getDepthSensingMesh();_t!==null&&Vf(_t,L,-1/0,R.sortObjects)}Vf(S,L,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(Ut,It,L.reversedDepth),we=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,we&&Pt.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),te===!0&&At.beginShadows();let F=E.state.shadowsArray;if(Ct.render(F,S,L),te===!0&&At.endShadows(),(z&&A.hasRenderPass())===!1){let _t=T.opaque,dt=T.transmissive;if(E.setupLights(),L.isArrayCamera){let bt=L.cameras;if(dt.length>0)for(let Tt=0,Bt=bt.length;Tt<Bt;Tt++){let kt=bt[Tt];n0(_t,dt,S,kt)}we&&Pt.render(S);for(let Tt=0,Bt=bt.length;Tt<Bt;Tt++){let kt=bt[Tt];e0(T,S,kt,kt.viewport)}}else dt.length>0&&n0(_t,dt,S,L),we&&Pt.render(S),e0(T,S,L)}$!==null&&G===0&&(H.updateMultisampleRenderTarget($),H.updateRenderTargetMipmap($)),z&&A.end(R),S.isScene===!0&&S.onAfterRender(R,S,L),mt.resetDefaultState(),et=-1,ft=null,_.pop(),_.length>0?(E=_[_.length-1],H.setTextureUnits(E.state.textureUnits),te===!0&&At.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,O!==null&&O.renderEnd()};function Vf(S,L,V,z){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||he.intersectsSprite(S)){z&&je.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ke);let _t=J.update(S),dt=S.material;dt.visible&&T.push(S,_t,dt,V,je.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||he.intersectsObject(S))){let _t=J.update(S),dt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),je.copy(S.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),je.copy(_t.boundingSphere.center)),je.applyMatrix4(S.matrixWorld).applyMatrix4(ke)),Array.isArray(dt)){let bt=_t.groups;for(let Tt=0,Bt=bt.length;Tt<Bt;Tt++){let kt=bt[Tt],Et=dt[kt.materialIndex];Et&&Et.visible&&T.push(S,_t,Et,V,je.z,kt)}}else dt.visible&&T.push(S,_t,dt,V,je.z,null)}}let pt=S.children;for(let _t=0,dt=pt.length;_t<dt;_t++)Vf(pt[_t],L,V,z)}function e0(S,L,V,z){let{opaque:F,transmissive:pt,transparent:_t}=S;E.setupLightsView(V),te===!0&&At.setGlobalState(R.clippingPlanes,V),z&&x.viewport(gt.copy(z)),F.length>0&&oc(F,L,V),pt.length>0&&oc(pt,L,V),_t.length>0&&oc(_t,L,V),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function n0(S,L,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Et=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new Jn(1,1,{generateMipmaps:!0,type:Et?Hi:$n,minFilter:ma,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}let pt=E.state.transmissionRenderTarget[z.id],_t=z.viewport||gt;pt.setSize(_t.z*R.transmissionResolutionScale,_t.w*R.transmissionResolutionScale);let dt=R.getRenderTarget(),bt=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(pt),R.getClearColor(Ae),$t=R.getClearAlpha(),$t<1&&R.setClearColor(16777215,.5),R.clear(),we&&Pt.render(V);let Bt=R.toneMapping;R.toneMapping=Si;let kt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),te===!0&&At.setGlobalState(R.clippingPlanes,z),oc(S,V,z),H.updateMultisampleRenderTarget(pt),H.updateRenderTargetMipmap(pt),se.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let le=0,Ie=L.length;le<Ie;le++){let Re=L[le],{object:fe,geometry:dn,material:yt,group:In}=Re;if(yt.side===Vi&&fe.layers.test(z.layers)){let Qt=yt.side;yt.side=Tn,yt.needsUpdate=!0,i0(fe,V,z,dn,yt,In),yt.side=Qt,yt.needsUpdate=!0,Et=!0}}Et===!0&&(H.updateMultisampleRenderTarget(pt),H.updateRenderTargetMipmap(pt))}R.setRenderTarget(dt,bt,Tt),R.setClearColor(Ae,$t),kt!==void 0&&(z.viewport=kt),R.toneMapping=Bt}function oc(S,L,V){let z=L.isScene===!0?L.overrideMaterial:null;for(let F=0,pt=S.length;F<pt;F++){let _t=S[F],{object:dt,geometry:bt,group:Tt}=_t,Bt=_t.material;Bt.allowOverride===!0&&z!==null&&(Bt=z),dt.layers.test(V.layers)&&i0(dt,L,V,bt,Bt,Tt)}}function i0(S,L,V,z,F,pt){S.onBeforeRender(R,L,V,z,F,pt),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(R,L,V,z,S,pt),F.transparent===!0&&F.side===Vi&&F.forceSinglePass===!1?(F.side=Tn,F.needsUpdate=!0,R.renderBufferDirect(V,L,z,F,S,pt),F.side=xs,F.needsUpdate=!0,R.renderBufferDirect(V,L,z,F,S,pt),F.side=Vi):R.renderBufferDirect(V,L,z,F,S,pt),S.onAfterRender(R,L,V,z,F,pt)}function lc(S,L,V){L.isScene!==!0&&(L=rn);let z=k.get(S),F=E.state.lights,pt=E.state.shadowsArray,_t=F.state.version,dt=ot.getParameters(S,F.state,pt,L,V,E.state.lightProbeGridArray),bt=ot.getProgramCacheKey(dt),Tt=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;let Bt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=it.get(S.envMap||z.environment,Bt),z.envMapRotation=z.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Tt===void 0&&(S.addEventListener("dispose",Ai),Tt=new Map,z.programs=Tt);let kt=Tt.get(bt);if(kt!==void 0){if(z.currentProgram===kt&&z.lightsStateVersion===_t)return a0(S,dt),kt}else dt.uniforms=ot.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,V,dt),S.onBeforeCompile(dt,R),kt=ot.acquireProgram(dt,bt),Tt.set(bt,kt),z.uniforms=dt.uniforms;let Et=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=At.uniform),a0(S,dt),z.needsLights=WS(S),z.lightsStateVersion=_t,z.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=kt,z.uniformsList=null,kt}function s0(S){if(S.uniformsList===null){let L=S.currentProgram.getUniforms();S.uniformsList=_o.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function a0(S,L){let V=k.get(S);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function GS(S,L){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;m.setFromMatrixPosition(L.matrixWorld);for(let V=0,z=S.length;V<z;V++){let F=S[V];if(F.texture!==null&&F.boundingBox.containsPoint(m))return F}return null}function HS(S,L,V,z,F){L.isScene!==!0&&(L=rn),H.resetTextureUnits();let pt=L.fog,_t=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,dt=$===null?R.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Wt.workingColorSpace,bt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Tt=it.get(z.envMap||_t,bt),Bt=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,kt=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Et=!!V.morphAttributes.position,le=!!V.morphAttributes.normal,Ie=!!V.morphAttributes.color,Re=Si;z.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Re=R.toneMapping);let fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dn=fe!==void 0?fe.length:0,yt=k.get(z),In=E.state.lights;if(te===!0&&(Kt===!0||S!==ft)){let ge=S===ft&&z.id===et;At.setState(z,S,ge)}let Qt=!1;z.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==In.state.version||yt.outputColorSpace!==dt||F.isBatchedMesh&&yt.batching===!1||!F.isBatchedMesh&&yt.batching===!0||F.isBatchedMesh&&yt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&yt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&yt.instancing===!1||!F.isInstancedMesh&&yt.instancing===!0||F.isSkinnedMesh&&yt.skinning===!1||!F.isSkinnedMesh&&yt.skinning===!0||F.isInstancedMesh&&yt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&yt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&yt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&yt.instancingMorph===!1&&F.morphTexture!==null||yt.envMap!==Tt||z.fog===!0&&yt.fog!==pt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==At.numPlanes||yt.numIntersection!==At.numIntersection)||yt.vertexAlphas!==Bt||yt.vertexTangents!==kt||yt.morphTargets!==Et||yt.morphNormals!==le||yt.morphColors!==Ie||yt.toneMapping!==Re||yt.morphTargetsCount!==dn||!!yt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Qt=!0):(Qt=!0,yt.__version=z.version);let ti=yt.currentProgram;Qt===!0&&(ti=lc(z,L,F),O&&z.isNodeMaterial&&O.onUpdateProgram(z,ti,yt));let wi=!1,Ms=!1,$a=!1,de=ti.getUniforms(),Pe=yt.uniforms;if(x.useProgram(ti.program)&&(wi=!0,Ms=!0,$a=!0),z.id!==et&&(et=z.id,Ms=!0),yt.needsLights){let ge=GS(E.state.lightProbeGridArray,F);yt.lightProbeGrid!==ge&&(yt.lightProbeGrid=ge,Ms=!0)}if(wi||ft!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),de.setValue(U,"projectionMatrix",S.projectionMatrix),de.setValue(U,"viewMatrix",S.matrixWorldInverse);let Es=de.map.cameraPosition;Es!==void 0&&Es.setValue(U,Ye.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&de.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&de.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),ft!==S&&(ft=S,Ms=!0,$a=!0)}if(yt.needsLights&&(In.state.directionalShadowMap.length>0&&de.setValue(U,"directionalShadowMap",In.state.directionalShadowMap,H),In.state.spotShadowMap.length>0&&de.setValue(U,"spotShadowMap",In.state.spotShadowMap,H),In.state.pointShadowMap.length>0&&de.setValue(U,"pointShadowMap",In.state.pointShadowMap,H)),F.isSkinnedMesh){de.setOptional(U,F,"bindMatrix"),de.setOptional(U,F,"bindMatrixInverse");let ge=F.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),de.setValue(U,"boneTexture",ge.boneTexture,H))}F.isBatchedMesh&&(de.setOptional(U,F,"batchingTexture"),de.setValue(U,"batchingTexture",F._matricesTexture,H),de.setOptional(U,F,"batchingIdTexture"),de.setValue(U,"batchingIdTexture",F._indirectTexture,H),de.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&de.setValue(U,"batchingColorTexture",F._colorsTexture,H));let Ts=V.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&N.update(F,V,ti),(Ms||yt.receiveShadow!==F.receiveShadow)&&(yt.receiveShadow=F.receiveShadow,de.setValue(U,"receiveShadow",F.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(Pe.envMapIntensity.value=L.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=c3()),Ms){if(de.setValue(U,"toneMappingExposure",R.toneMappingExposure),yt.needsLights&&XS(Pe,$a),pt&&z.fog===!0&&Mt.refreshFogUniforms(Pe,pt),Mt.refreshMaterialUniforms(Pe,z,nt,at,E.state.transmissionRenderTarget[S.id]),yt.needsLights&&yt.lightProbeGrid){let ge=yt.lightProbeGrid;Pe.probesSH.value=ge.texture,Pe.probesMin.value.copy(ge.boundingBox.min),Pe.probesMax.value.copy(ge.boundingBox.max),Pe.probesResolution.value.copy(ge.resolution)}_o.upload(U,s0(yt),Pe,H)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(_o.upload(U,s0(yt),Pe,H),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&de.setValue(U,"center",F.center),de.setValue(U,"modelViewMatrix",F.modelViewMatrix),de.setValue(U,"normalMatrix",F.normalMatrix),de.setValue(U,"modelMatrix",F.matrixWorld),z.uniformsGroups!==void 0){let ge=z.uniformsGroups;for(let Es=0,tr=ge.length;Es<tr;Es++){let r0=ge[Es];tt.update(r0,ti),tt.bind(r0,ti)}}return ti}function XS(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function WS(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(S,L,V){let z=k.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),k.get(S.texture).__webglTexture=L,k.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,L){let V=k.get(S);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,V=0){$=S,W=L,G=V;let z=null,F=!1,pt=!1;if(S){let dt=k.get(S);if(dt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,dt.__webglFramebuffer),gt.copy(S.viewport),vt.copy(S.scissor),jt=S.scissorTest,x.viewport(gt),x.scissor(vt),x.setScissorTest(jt),et=-1;return}else if(dt.__webglFramebuffer===void 0)H.setupRenderTarget(S);else if(dt.__hasExternalTextures)H.rebindTextures(S,k.get(S.texture).__webglTexture,k.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Bt=S.depthTexture;if(dt.__boundDepthTexture!==Bt){if(Bt!==null&&k.has(Bt)&&(S.width!==Bt.image.width||S.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(S)}}let bt=S.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(pt=!0);let Tt=k.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Tt[L])?z=Tt[L][V]:z=Tt[L],F=!0):S.samples>0&&H.useMultisampledRTT(S)===!1?z=k.get(S).__webglMultisampledFramebuffer:Array.isArray(Tt)?z=Tt[V]:z=Tt,gt.copy(S.viewport),vt.copy(S.scissor),jt=S.scissorTest}else gt.copy(wt).multiplyScalar(nt).floor(),vt.copy(Oe).multiplyScalar(nt).floor(),jt=Ht;if(V!==0&&(z=Y),x.bindFramebuffer(U.FRAMEBUFFER,z)&&x.drawBuffers(S,z),x.viewport(gt),x.scissor(vt),x.setScissorTest(jt),F){let dt=k.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,V)}else if(pt){let dt=L;for(let bt=0;bt<S.textures.length;bt++){let Tt=k.get(S.textures[bt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+bt,Tt.__webglTexture,V,dt)}}else if(S!==null&&V!==0){let dt=k.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dt.__webglTexture,V)}et=-1},this.readRenderTargetPixels=function(S,L,V,z,F,pt,_t,dt=0){if(!(S&&S.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){x.bindFramebuffer(U.FRAMEBUFFER,bt);try{let Tt=S.textures[dt],Bt=Tt.format,kt=Tt.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+dt),!C.textureFormatReadable(Bt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(kt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-z&&V>=0&&V<=S.height-F&&U.readPixels(L,V,z,F,ct.convert(Bt),ct.convert(kt),pt)}finally{let Tt=$!==null?k.get($).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(S,L,V,z,F,pt,_t,dt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt)if(L>=0&&L<=S.width-z&&V>=0&&V<=S.height-F){x.bindFramebuffer(U.FRAMEBUFFER,bt);let Tt=S.textures[dt],Bt=Tt.format,kt=Tt.type;if(S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+dt),!C.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.bufferData(U.PIXEL_PACK_BUFFER,pt.byteLength,U.STREAM_READ),U.readPixels(L,V,z,F,ct.convert(Bt),ct.convert(kt),0);let le=$!==null?k.get($).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,le);let Ie=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await $b(U,Ie,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Et),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pt),U.deleteBuffer(Et),U.deleteSync(Ie),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,L=null,V=0){let z=Math.pow(2,-V),F=Math.floor(S.image.width*z),pt=Math.floor(S.image.height*z),_t=L!==null?L.x:0,dt=L!==null?L.y:0;H.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,_t,dt,F,pt),x.unbindTexture()},this.copyTextureToTexture=function(S,L,V=null,z=null,F=0,pt=0){let _t,dt,bt,Tt,Bt,kt,Et,le,Ie,Re=S.isCompressedTexture?S.mipmaps[pt]:S.image;if(V!==null)_t=V.max.x-V.min.x,dt=V.max.y-V.min.y,bt=V.isBox3?V.max.z-V.min.z:1,Tt=V.min.x,Bt=V.min.y,kt=V.isBox3?V.min.z:0;else{let Pe=Math.pow(2,-F);_t=Math.floor(Re.width*Pe),dt=Math.floor(Re.height*Pe),S.isDataArrayTexture?bt=Re.depth:S.isData3DTexture?bt=Math.floor(Re.depth*Pe):bt=1,Tt=0,Bt=0,kt=0}z!==null?(Et=z.x,le=z.y,Ie=z.z):(Et=0,le=0,Ie=0);let fe=ct.convert(L.format),dn=ct.convert(L.type),yt;L.isData3DTexture?(H.setTexture3D(L,0),yt=U.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(H.setTexture2DArray(L,0),yt=U.TEXTURE_2D_ARRAY):(H.setTexture2D(L,0),yt=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,L.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,L.unpackAlignment);let In=x.getParameter(U.UNPACK_ROW_LENGTH),Qt=x.getParameter(U.UNPACK_IMAGE_HEIGHT),ti=x.getParameter(U.UNPACK_SKIP_PIXELS),wi=x.getParameter(U.UNPACK_SKIP_ROWS),Ms=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,Re.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Re.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Tt),x.pixelStorei(U.UNPACK_SKIP_ROWS,Bt),x.pixelStorei(U.UNPACK_SKIP_IMAGES,kt);let $a=S.isDataArrayTexture||S.isData3DTexture,de=L.isDataArrayTexture||L.isData3DTexture;if(S.isDepthTexture){let Pe=k.get(S),Ts=k.get(L),ge=k.get(Pe.__renderTarget),Es=k.get(Ts.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,ge.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,Es.__webglFramebuffer);for(let tr=0;tr<bt;tr++)$a&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(S).__webglTexture,F,kt+tr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(L).__webglTexture,pt,Ie+tr)),U.blitFramebuffer(Tt,Bt,_t,dt,Et,le,_t,dt,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||k.has(S)){let Pe=k.get(S),Ts=k.get(L);x.bindFramebuffer(U.READ_FRAMEBUFFER,X),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let ge=0;ge<bt;ge++)$a?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.__webglTexture,F,kt+ge):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pe.__webglTexture,F),de?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ts.__webglTexture,pt,Ie+ge):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ts.__webglTexture,pt),F!==0?U.blitFramebuffer(Tt,Bt,_t,dt,Et,le,_t,dt,U.COLOR_BUFFER_BIT,U.NEAREST):de?U.copyTexSubImage3D(yt,pt,Et,le,Ie+ge,Tt,Bt,_t,dt):U.copyTexSubImage2D(yt,pt,Et,le,Tt,Bt,_t,dt);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else de?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(yt,pt,Et,le,Ie,_t,dt,bt,fe,dn,Re.data):L.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,pt,Et,le,Ie,_t,dt,bt,fe,Re.data):U.texSubImage3D(yt,pt,Et,le,Ie,_t,dt,bt,fe,dn,Re):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pt,Et,le,_t,dt,fe,dn,Re.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pt,Et,le,Re.width,Re.height,fe,Re.data):U.texSubImage2D(U.TEXTURE_2D,pt,Et,le,_t,dt,fe,dn,Re);x.pixelStorei(U.UNPACK_ROW_LENGTH,In),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt),x.pixelStorei(U.UNPACK_SKIP_PIXELS,ti),x.pixelStorei(U.UNPACK_SKIP_ROWS,wi),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Ms),pt===0&&L.generateMipmaps&&U.generateMipmap(yt),x.unbindTexture()},this.initRenderTarget=function(S){k.get(S).__webglFramebuffer===void 0&&H.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?H.setTextureCube(S,0):S.isData3DTexture?H.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?H.setTexture2DArray(S,0):H.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){W=0,G=0,$=null,x.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Wt._getUnpackColorSpace()}}});function h3(e){return e.replace(/(\d,\d{3}|\b\d{3,5}\b)(?=ダメージ)/g,'<mark class="kmbly-hit">$1</mark>').replace(/\bOD\b/g,'<mark class="kmbly-od">OD</mark>').replace(/\bSA\d?\b/g,t=>`<mark class="kmbly-sa">${t}</mark>`).replace(/\bCA\b/g,'<mark class="kmbly-sa">CA</mark>').replace(/([大中小強弱]?)(P)(?![A-Za-z])/g,(t,n,i)=>`${n}<mark class="kmbly-p">${i}</mark>`).replace(/([大中小強弱]?)(K)(?![A-Za-z])/g,(t,n,i)=>`${n}<mark class="kmbly-k">${i}</mark>`)}function f3(e){return/[PK＞>→]/.test(e)&&/[0-9OKPSA]/.test(e)}function d3(){let e=(0,j.useRef)(null);return(0,j.useEffect)(()=>{let t=e.current;if(!t)return;let n=new Of({canvas:t,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2));let i=new Il,s=new yn(45,1,.1,100);s.position.set(0,0,6.4);let a=t.parentElement;function r(){let X=a.clientWidth,B=a.clientHeight;n.setSize(X,B),s.aspect=X/B,s.updateProjectionMatrix()}r();let o=new ResizeObserver(r);o.observe(a);let l=new _s;l.position.set(1.1,-.1,0),i.add(l);let c=new Hl(1.55,2),f=new bi({color:2757968,transparent:!0,opacity:.35}),p=new an(c,f);l.add(p);let u=new ho(1.6,28,20),d=new bi({color:11036159,wireframe:!0,transparent:!0,opacity:.55}),v=new an(u,d);l.add(v);let M=new fo(2.05,.008,8,100),y=new bi({color:16723838,transparent:!0,opacity:.7}),h=new an(M,y);h.rotation.x=Math.PI/2.3,l.add(h);let g=new bi({color:2091208,transparent:!0,opacity:.5}),b=new an(new fo(2.25,.006,8,100),g);b.rotation.x=Math.PI/1.8,b.rotation.y=.4,l.add(b);let m=new _n,T=240,E=new Float32Array(T*3);for(let X=0;X<T;X++)E[X*3]=(Math.random()-.5)*14,E[X*3+1]=(Math.random()-.5)*9,E[X*3+2]=(Math.random()-.5)*6-1;m.setAttribute("position",new Mn(E,3));let w=new co({color:16777215,size:.02,transparent:!0,opacity:.55}),_=new kl(m,w);i.add(_);let A=new ho(.028,8,8),R=new bi({color:16723838});for(let X=0;X<10;X++){let B=new an(A,R),W=Math.random()*Math.PI*2,G=Math.acos(Math.random()*2-1),$=1.62;B.position.set($*Math.sin(G)*Math.cos(W),$*Math.sin(G)*Math.sin(W),$*Math.cos(G)),l.add(B)}let D=0,O;function Y(){O=requestAnimationFrame(Y),D+=.0032,l.rotation.y=D,l.rotation.x=Math.sin(D*.5)*.08,h.rotation.z+=.0015,b.rotation.z-=.0011,_.rotation.y+=25e-5,n.render(i,s)}return Y(),()=>{cancelAnimationFrame(O),o.disconnect(),c.dispose(),f.dispose(),u.dispose(),d.dispose(),M.dispose(),y.dispose(),g.dispose(),m.dispose(),w.dispose(),A.dispose(),R.dispose(),n.dispose()}},[]),j.default.createElement("canvas",{ref:e,className:"kmbly-globe-canvas"})}function p3(){let e=[{text:"\u516848\u4EF6\u53CE\u9332"},{text:"\u30D1\u30CB\u30AB\u30F3\u59CB\u52D5\u304C\u4E3B\u529B",cls:"kmbly-pk"},{text:"OD\u80F4\u520E\u306D\u9023\u643A\u306B\u6CE8\u610F",cls:"kmbly-odtx"},{text:"\u7AEF\u30B3\u30F3\u30DC\u306F5555\u30C0\u30E1\u30FC\u30B8"},{text:"\u7206\u5F3E2\u500B\u9023\u643A\u306F\u6700\u59278632\u30C0\u30E1\u30FC\u30B8",cls:"kmbly-pk"},{text:"SA3\u7DE0\u3081\u304C\u57FA\u672C\u30EB\u30FC\u30C8"},{text:"D\u30B2\u30FC\u30B8\u7BA1\u7406\u3067\u30B9\u30BF\u30F3\u5F8C\u30C0\u30E1\u30FC\u30B8\u5909\u52D5",cls:"kmbly-odtx"}],t=[...e,...e];return j.default.createElement("div",{className:"kmbly-ticker-wrap"},j.default.createElement("div",{className:"kmbly-ticker"},t.map((n,i)=>j.default.createElement(j.default.Fragment,{key:i},j.default.createElement("span",{className:"kmbly-dot"},"\u25C6"),j.default.createElement("span",{className:n.cls},n.text)))))}function m3({section:e,index:t,filter:n,collapsed:i,onToggle:s,onItemClick:a,registerItemRef:r}){let o=n?e.items.filter(l=>l.toLowerCase().includes(n.toLowerCase())):e.items;return n&&o.length===0?null:j.default.createElement("div",{className:"kmbly-section"+(i?" kmbly-collapsed":"")},j.default.createElement("div",{className:"kmbly-section-head",onClick:s},j.default.createElement("span",{className:"kmbly-num"},String(t+1).padStart(2,"0")),j.default.createElement("h2",null,e.title),j.default.createElement("span",{className:"kmbly-badge"},o.length,"\u4EF6"),j.default.createElement("span",{className:"kmbly-chev"},"\u25BC")),j.default.createElement("div",{className:"kmbly-items"},o.map((l,c)=>{let f=f3(l),p=`${t}-${e.items.indexOf(l)}-${c}`;return f?j.default.createElement("div",{key:p,ref:u=>r(p,u),className:"kmbly-item kmbly-combo",onClick:u=>a(u,l,p),dangerouslySetInnerHTML:{__html:h3(l)}}):j.default.createElement("div",{key:p,className:"kmbly-item kmbly-note"},l)})))}function OS(){let e=(0,j.useRef)(null),t=(0,j.useRef)({}),n=(0,j.useRef)(null),[i,s]=(0,j.useState)(""),[a,r]=(0,j.useState)({}),[o,l]=(0,j.useState)({show:!1,msg:""}),c=(0,j.useRef)(null);(0,j.useEffect)(()=>{if(document.getElementById("kmbly-fonts"))return;let m=document.createElement("link");m.id="kmbly-fonts",m.rel="stylesheet",m.href="https://fonts.googleapis.com/css2?family=Bungee&family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&family=Noto+Sans+JP:wght@400;500;700;900&display=swap",document.head.appendChild(m)},[]);let f=(0,j.useMemo)(()=>Array.from({length:10},(m,T)=>({size:80+Math.random()*160,left:Math.random()*100,top:Math.random()*100,variant:T%2})),[]),p=(0,j.useMemo)(()=>i.trim()?zf.reduce((m,T)=>m+T.items.filter(E=>E.toLowerCase().includes(i.toLowerCase())).length,0):Bf,[i]),u=i.trim().length>0&&p===0;function d(){document.getElementById("kmbly-combo-list")?.scrollIntoView({behavior:"smooth"})}function v(m){clearTimeout(c.current),l({show:!0,msg:m}),c.current=setTimeout(()=>l(T=>({...T,show:!1})),1600)}function M(m){if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(m).catch(()=>{});else{let T=document.createElement("textarea");T.value=m,document.body.appendChild(T),T.select();try{document.execCommand("copy")}catch{}T.remove()}}function y(m,T){let E=e.current;if(!E)return;let w=["#1fe8c8","#ff2f7e","#ffd23f"];for(let _=0;_<14;_++){let A=document.createElement("div");A.className="kmbly-burst-particle",A.style.left=m+"px",A.style.top=T+"px",A.style.background=w[_%w.length],E.appendChild(A);let R=Math.PI*2*_/14+Math.random()*.5,D=40+Math.random()*60,O=Math.cos(R)*D,Y=Math.sin(R)*D;A.animate([{transform:"translate(0,0) scale(1)",opacity:1},{transform:`translate(${O}px, ${Y}px) scale(0)`,opacity:0}],{duration:500+Math.random()*300,easing:"cubic-bezier(.2,.8,.2,1)"}).onfinish=()=>A.remove()}}function h(m){m&&(m.classList.remove("kmbly-flash"),m.offsetWidth,m.classList.add("kmbly-flash"))}function g(m,T,E){M(T.replace(/\s+/g," ").trim()),y(m.clientX,m.clientY),h(t.current[E]),v("\u30BF\u30B0\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F \u{1F4CB}")}function b(){let m=Object.keys(t.current).filter(_=>t.current[_]);if(m.length===0)return;let T=n.current;T&&(T.classList.add("kmbly-spinning"),setTimeout(()=>T.classList.remove("kmbly-spinning"),500));let E=m[Math.floor(Math.random()*m.length)],w=Number(E.split("-")[0]);r(_=>({..._,[w]:!1})),setTimeout(()=>{let _=t.current[E];_&&(_.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>h(_),350))},30),v("\u30B3\u30F3\u30DC\u30921\u500B\u5F15\u304D\u307E\u3057\u305F \u{1F3B2}")}return j.default.createElement("div",{className:"kmbly-root",ref:e},j.default.createElement("style",null,g3),j.default.createElement("svg",{width:"0",height:"0",style:{position:"absolute"}},j.default.createElement("defs",null,j.default.createElement("radialGradient",{id:"kmbly-g1"},j.default.createElement("stop",{offset:"0%",stopColor:"#ff2f7e"}),j.default.createElement("stop",{offset:"100%",stopColor:"#ff2f7e",stopOpacity:"0"})),j.default.createElement("radialGradient",{id:"kmbly-g2"},j.default.createElement("stop",{offset:"0%",stopColor:"#1fe8c8"}),j.default.createElement("stop",{offset:"100%",stopColor:"#1fe8c8",stopOpacity:"0"})))),f.map((m,T)=>j.default.createElement("div",{key:T,className:"kmbly-splat",style:{width:m.size,height:m.size,left:`${m.left}%`,top:`${m.top}%`,background:m.variant===0?"radial-gradient(circle, rgba(255,47,126,0.25), transparent 70%)":"radial-gradient(circle, rgba(31,232,200,0.22), transparent 70%)"}})),j.default.createElement("nav",{className:"kmbly-nav"},j.default.createElement("div",{className:"kmbly-logo"},j.default.createElement("span",{className:"kmbly-dot"}),"KIMBERLY GUIDE"),j.default.createElement("div",{className:"kmbly-navlinks"},j.default.createElement("span",null,"MODE"),j.default.createElement("span",null,"CHARACTER"),j.default.createElement("span",{onClick:d},"COMBO"),j.default.createElement("span",null,"COLUMN")),j.default.createElement("div",{className:"kmbly-buy",onClick:d},"\u8AAD\u3080")),j.default.createElement("section",{className:"kmbly-hero"},j.default.createElement("div",{className:"kmbly-hero-bg"}),j.default.createElement("div",{className:"kmbly-beam kmbly-b1"}),j.default.createElement("div",{className:"kmbly-beam kmbly-b2"}),j.default.createElement(d3,null),j.default.createElement("div",{className:"kmbly-hero-content"},j.default.createElement("div",{className:"kmbly-eyebrow-bar"}),j.default.createElement("h1",{className:"kmbly-hero-title"},"COMBO",j.default.createElement("span",{className:"kmbly-ghost"},"INDEX")),j.default.createElement("p",{className:"kmbly-hero-sub"},"STREET FIGHTER 6 / KIMBERLY \u653B\u7565\u30CE\u30FC\u30C8",j.default.createElement("br",null),"\u7528\u8A9E\u7D71\u4E00\u6E08\u307F\u30FB\u691C\u7D22\u5BFE\u5FDC\u30FB\u5168",Bf,"\u4EF6\u53CE\u9332"),j.default.createElement("div",{className:"kmbly-stamp-block"})),j.default.createElement("div",{className:"kmbly-panels"},j.default.createElement("div",{className:"kmbly-panel",onClick:d},j.default.createElement("div",{className:"kmbly-panel-bg kmbly-p1"}),j.default.createElement("div",{className:"kmbly-panel-inner"},j.default.createElement("div",{className:"kmbly-panel-arrow"},"\u203A"),j.default.createElement("div",null,j.default.createElement("div",{className:"kmbly-panel-label"},"FIGHTING TAGS"),j.default.createElement("div",{className:"kmbly-panel-sub"},"\u30B3\u30F3\u30DC\u4E00\u89A7\u3092\u898B\u308B")))),j.default.createElement("div",{className:"kmbly-panel",onClick:()=>{d(),e.current?.querySelector(".kmbly-search")?.focus()}},j.default.createElement("div",{className:"kmbly-panel-bg kmbly-p2"}),j.default.createElement("div",{className:"kmbly-panel-inner"},j.default.createElement("div",{className:"kmbly-panel-arrow"},"\u203A"),j.default.createElement("div",null,j.default.createElement("div",{className:"kmbly-panel-label"},"SEARCH INDEX"),j.default.createElement("div",{className:"kmbly-panel-sub"},"\u30BF\u30B0\u3067\u691C\u7D22\u3059\u308B"))))),j.default.createElement("div",{className:"kmbly-scrolldown",onClick:d},j.default.createElement("div",{className:"kmbly-line"}),"SCROLL")),j.default.createElement("div",{id:"kmbly-combo-list"}),j.default.createElement(p3,null),j.default.createElement("header",{className:"kmbly-header"},j.default.createElement("div",{className:"kmbly-bg-tape"}),j.default.createElement("div",{className:"kmbly-tagstamp"},"KMBRLY.EXE"),j.default.createElement("div",{className:"kmbly-eyebrow"},j.default.createElement("span",{className:"kmbly-eq"},j.default.createElement("span",null),j.default.createElement("span",null),j.default.createElement("span",null),j.default.createElement("span",null),j.default.createElement("span",null)),"STREET FIGHTER 6 / NOTEBOOK"),j.default.createElement("h1",null,"KIMBERLY"),j.default.createElement("div",{className:"kmbly-sub"},"COMBO TAGS \xA0\u2014\xA0 \u7528\u8A9E\u7D71\u4E00\u6E08\u307F(",j.default.createElement("b",null,"P")," / ",j.default.createElement("b",null,"K")," / ",j.default.createElement("b",null,"OD")," / ",j.default.createElement("b",null,"SA"),")")),j.default.createElement("div",{className:"kmbly-toolbar"},j.default.createElement("div",{className:"kmbly-tagbox"},j.default.createElement("input",{className:"kmbly-search",type:"text",placeholder:"\u30B3\u30F3\u30DC\u3092\u691C\u7D22(\u4F8B: SA3, \u30D1\u30CB\u30AB\u30F3, \u7AEF)",autoComplete:"off",value:i,onChange:m=>s(m.target.value)})),j.default.createElement("div",{className:"kmbly-legend"},j.default.createElement("span",{className:"kmbly-lp"},"P = \u30D1\u30F3\u30C1"),j.default.createElement("span",{className:"kmbly-lk"},"K = \u30AD\u30C3\u30AF"),j.default.createElement("span",{className:"kmbly-lod"},"OD / SA = \u30B2\u30FC\u30B8\u6280"))),j.default.createElement("div",{className:"kmbly-count"},i.trim()?`${p}\u4EF6\u30D2\u30C3\u30C8 / \u5168${Bf}\u4EF6`:`\u5168${Bf}\u4EF6 / ${zf.length}\u30BB\u30AF\u30B7\u30E7\u30F3`),j.default.createElement("main",{className:"kmbly-main"},zf.map((m,T)=>j.default.createElement(m3,{key:T,section:m,index:T,filter:i,collapsed:!!a[T],onToggle:()=>r(E=>({...E,[T]:!E[T]})),onItemClick:g,registerItemRef:(E,w)=>{t.current[E]=w}}))),u&&j.default.createElement("div",{className:"kmbly-empty"},"\u8A72\u5F53\u3059\u308B\u30B3\u30F3\u30DC\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093"),j.default.createElement("footer",{className:"kmbly-footer"},"KIMBERLY COMBO NOTES \u2014 \u81EA\u52D5\u6574\u5F62 / \u5143\u30C7\u30FC\u30BF: Google\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8"),j.default.createElement("div",{className:"kmbly-toast"+(o.show?" kmbly-show":"")},o.msg),j.default.createElement("button",{ref:n,className:"kmbly-roll-btn",onClick:b},j.default.createElement("span",{className:"kmbly-dice"},"\u{1F3B2}"),"\u30E9\u30F3\u30C0\u30E0"))}var j,zf,Bf,g3,IS=xo(()=>{j=bo(xa());LS();zf=[{title:"\u30A4\u30F3\u30D1\u30AF\u30C8\u30AC\u30FC\u30C9\uFF08\u58C1\u30C9\u30F3\uFF09\u59CB\u52D5",items:["\u30A4\u30F3\u30D1\u30AF\u30C8\uFF1E\u58C1\uFF1E2\u5927P\uFF1EOD\u80F4\u520E\u306D\uFF1E\u524DJ\u4E2DP\uFF1EOD\u65CB\u98A8\uFF1ESA2"]},{title:"\u7121\u6575\u30D6\u30C3\u30D1\u306B\u5BFE\u3059\u308B\u304A\u3057\u304A\u304D",items:["\u3042\u3068\u306F\u3001\u30B8\u30E5\u30EA\u306B\u753B\u9762\u7AEF\u3067\u5F37\u8A2D\u7F6E\u3057\u3066\u3001OD\u7121\u6575\u98DF\u3089\u3063\u305F\u969B\u306E\u30EA\u30FC\u30B5\u30EB\u72D9\u3044\u3067\u3001","\u5F8C\u308D\u53D7\u3051\u8EAB\uFF1E(\u7206\u767A\u5F53\u305F\u308B)\uFF1E\u30E9\u30C3\u30B7\u30E55\u5927P\uFF1EOD\u80F4\u520E\u306D\uFF1EOD\u8352\u9DB4\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\u80F4\u520E\u306D\uFF1E236LP\uFF1ESA3","\u3067\u30C0\u30E1\u30FC\u30B84873","\u7121\u6575\u6280\u5F53\u3066\u305F\u306E\u306B\u6B7B\u306C\u30B8\u30E5\u30EA"]},{title:"\uFF14\u30D5\u30EC\u30FC\u30E0\u4EE5\u4E0A\u306E\u78BA\u5B9A\u53CD\u6483\u3068\u3057\u3066",items:["\u4E0B\u5F31P\u2192\u4E0B\u5F31P\u2192\u30E9\u30C3\u30B7\u30E5\u4E0B\u5F31P\u2192\u4E0B\u5F37P\u2192\u5F37\u4E00\u6587\u5B57\u2192\u30B8\u30E3\u30F3\u30D7\u4E2DP\u2192\u7A7A\u4E2D\u7ADC\u5DFB","\u7ACB\u3061\u4E2DK\u30AD\u30E3\u30F3\u30BB\u30EB\u30E9\u30C3\u30B7\u30E5\u4E0B\u4E2DP\xD72\uFF1E\u7ACB\u3061\u4E2DP\u30FB\u5927P\u30AD\u30E3\u30F3\u30BB\u30EB\u75BE\u99C6\u3051","\u8A2D\u7F6E 2\u5927P\u4E2D\u6D41\u8EE2 \u30E9\u30C3\u30B7\u30E52\u5927P\u8E74\u308A\u4E0A\u3052\u30E9\u30C3\u30B7\u30E52\u5927P\u8E74\u308A\u4E0A\u3052\u30E9\u30C3\u30B7\u30E5\u7ACB\u5F31PTC\u3060\u306D","SA3\u5F8C\u2192\u30E9\u30C3\u30B7\u30E52\u5927P\u8E74\u308A\u4E0A\u3052\u21922\u5927POD\u8E74\u308A\u4E0A\u3052\u21922\u5927POD\u8E74\u308A\u4E0A\u3052\u2192\uFF12\u5927P\u30A4\u30F3\u30D1\u30AF\u30C8 \u6B69\u3044\u3066\uFF12\u500B\u8A2D\u7F6EOD\u8E74\u308A\u4E0A\u3052 OD\u7A7A\u6295\u3052 \u524D\u5F37K\u30B8\u30E3\u30F3\u30D7\u4E2DPSA1","SA3\u5F8C\u306E\u524A\u308A\u30B3\u30F3\u30DC\u3067\u3059\u304C\u3001 \u30E9\u30C3\u30B7\u30E52\u5927P\u8E74\u308A\u4E0A\u3052\u306E\u6240\u304C 5F\u3042\u308B\u3088\u3046\u3067\u3001\u30B3\u30D1\u30F3\u3067\u5272\u3089\u308C\u307E\u3059\u3002\u96D1\u9B5A\u3067\u3057\u305F\u3002\u3059\u3044\u307E\u305B\u3093\u3002","\u3061\u306A\u307F\u306B\u4E00\u6483\u5FC5\u6BBA\u30EB\u30FC\u30C8\u306F \u7121\u6575\u6280\u30AC\u30FC\u30C9\u5F8C\u5F37P\u306F\u3084\u304B\u30512\u5927P\u5927\u6D41\u8EE2 \u4F4E\u7A7AOD\u7ADC\u5DFB\u5F31\u6D41\u8EE2 CA","\u30B2\u30FC\u30B8\u306A\u30892\u5927POD\u8E74\u308A\u4E0A\u3052\u30B8\u30E3\u30F3\u30D7\u4E2DPOD\u7ADC\u5DFBSA\uFF12","\u30A4\u30F3\u30D1\u30AF\u30C8\u2192OD\u306F\u306D\u3042\u3052\u2192OD\u7A7A\u6295\u3052\u2192\u524D\u5927K\u2192\u30B8\u30E3\u30F3\u30D7\u4E2DP\u2192\u7740\u5730\u2192SA2","\u4E2D\u5927P\u2192\u5F31\u6D41\u8EE2\u2192\u7206\u5F3E\u2192\u4E0B\u5927P\u2192\u9996\u72E9\u308A","D\u30B2\u30FC\u30B82.5\u6E1B\u3089\u305B\u308B\u3002","\u30B9\u30BF\u30F3\u2192\u6700\u901F\u8A2D\u7F6E\u21922\u5927P\u2192\u4E2D\u6D41\u8EE2\u2192\u7206\u767A\u2192\u75BE\u99C6\u3051\u306F\u306D\u3042\u3052\u2192\u5F31\u6D41\u8EE2\u30AD\u30E3\u30F3\u30BB\u30EBSA3","\u5927K>\u4E2D\u5927>\u30E9\u30C3\u30B7\u30E52\u4E2DK>2\u5927P>\u65E9\u99C6\u3051","\u3067\u76F8\u624B\u306E\u30B2\u30FC\u30B8\u7D50\u69CB\u524A\u308C\u308B\u306E\u3067\u3001\u7121\u7406\u3084\u308A\u30B2\u30FC\u30B8\u524A\u308A\u305F\u3044\u6642\u3068\u304B\u304A\u3059\u3059\u3081\u3067\u3059"]},{title:"F\u5F0F",items:["OD\u65E9\u99C6\u3051\u2192K\u3067\u58C1\u5F53\u3066","\u5F37\u8A2D\u7F6E\u2192\u524D\u30B8\u30E3\u30F3\u30D7\u5F37K\u2192\u767B\u308A\u5F31K\u3067\u3059\uFF01"]},{title:"\u7AEF",items:["\u5F37P\u30D1\u30CB\u30AB\u30F3\u25B6OD\u30C9\u30ED\u30F3\u25B6J\u5F37P\u25B62\u5F37P\u25B6\u5F37\u4E00\u6587\u5B57\u25B6OD\u8352\u9D7A\u25B6OD\u80F4\u64A5\u306D\u25B6\u5F311\u6587\u5B57\u25B6SA3\u30675555\u3067\u3059","OD\u30C9\u30ED\u30F3\u7A7A\u5927K\u5C48\u5927P\u5F37\u4E00\u6587\u5B57\u306E\u65B9\u304C\u6E1B\u308A\u307E\u3059"]},{title:"\u3082\u306E\u306B\u3057\u305F\u3044\u30B3\u30F3\u30DC\u30D1\u30FC\u30C4",items:["\u30AD\u30E3\u30F3\u30BB\u30EB\u30E9\u30C3\u30B7\u30E52\u5F37P\u2192\u306F\u3084\u304C\u3051\u6025\u505C\u6B62\u21922\u4E2DP\u21922\u4E2DP\u21925\u4E2DP\u30AD\u30E3\u30F3\u30BB\u30EB\u30E9\u30C3\u30B7\u30E5\u306E\u30EB\u30FC\u30D7\u3067\u3059"]},{title:"OD\u8352\u9D7A\u7206\u5F3E\u9023\u643A",items:["5\u5927P\u2192\u5927\u4E00\u6587\u5B57\u2192OD\u30B3\u30DE\u6295\u3052\u2192\u4E2D\u7206\u5F3E\u2192\u75BE\u99C6\u3051\u6025\u505C\u6B62\u2192\u8098\u843D\u3068\u3057\uFF08\u8868\uFF09","5\u5927P\u2192\u5927\u4E00\u6587\u5B57\u2192OD\u30B3\u30DE\u6295\u3052\u2192\u4E2D\u7206\u5F3E\u2192\u75BE\u99C6\u3051\u6025\u505C\u6B62\u2192J\u4E2DK\uFF08\u88CF\uFF09","5\u5927P\u2192\u5927\u4E00\u6587\u5B57\u2192OD\u30B3\u30DE\u6295\u3052\u2192\u5927\u7206\u5F3E\u21923\u4E2DK\u21923\u4E2DK","5\u5927P\u2192\u5927\u4E00\u6587\u5B57\u2192OD\u30B3\u30DE\u6295\u3052\u2192\u5927\u7206\u5F3E\u21923\u4E2DK\u21923\u4E2DK\u21922\u5927P\u2192OD\u30C9\u30ED\u30F3\u2192J\u5C0FK\u21922\u4E2DP\u2192\u7ACB\u4E2DP\u2192\u5F71\u63AC\u3044","5\u5927P\u2192\u5927\u4E00\u6587\u5B57\u2192OD\u30B3\u30DE\u6295\u3052\u2192\u4E2D\u7206\u5F3E\u21923\u4E2DK\u21924\u5927K"]},{title:"\u7206\u5F3E\uFF12\u500B\u9023\u643A",items:["1.\uFF08\u7AEF\uFF09\u864E\u9023\u7259\u2192OD\u75BE\u99C6\u3051\uFF5E\u927E\u5203\u811A\u2192\u80F4\u520E\u306D\u2192\u7206\u5F3E2\u500B\u8A2D\u7F6E\u21922\u5F37P\u2192\u30A4\u30F3\u30D1\u30AF\u30C8\u21922\u5F37P\u21924\u5F37K\u21922\u5F31P\u2192\u30AD\u30E3\u30F3\u30BB\u30EB\u30E9\u30C3\u30B7\u30E52\u5F31P\u21922\u5F37P\u2192\u5F37\u4E00\u6587\u5B57\u2192OD\u8352\u9D7A\u2192\u80F4\u520E\u306D\u2192\u5F31\u4E00\u6587\u5B57\u2192SA3\u306B\u3059\u308C\u30707,999\u30C0\u30E1\u30FC\u30B8","2.\uFF08\u7AEF\uFF09\u864E\u9023\u7259\u2192OD\u75BE\u99C6\u3051\uFF5E\u927E\u5203\u811A\u2192\u80F4\u520E\u306D\u2192\u7206\u5F3E2\u500B\u8A2D\u7F6E\u21922\u5F37P\u2192\u30A4\u30F3\u30D1\u30AF\u30C8\u2192\u30E9\u30C3\u30B7\u30E55\u4E2DK\u21925\u5F31K\u2192\u30A4\u30F3\u30D1\u30AF\u30C8\uFF08\u58C1\u30C9\u30F3\uFF092\u5F37P\u2192\u80F4\u520E\u306D\u2192OD\u8352\u9D7A\u2192\u80F4\u520E\u306D\u2192\u5F31\u4E00\u6587\u5B57\u2192SA3\u306B\u3059\u308C\u30708,632\u30C0\u30E1\u30FC\u30B8"]},{title:"\u30D2\u30E3\u30C3\u30CF\u30FC",items:["\u5927\u8A2D\u7F6E\u2192\u6295\u3052\u2192\u7206\u5F3E\u30D2\u30C3\u30C8\u21922\u5C0FP\u2192\u30A4\u30F3\u30D1\u30AF\u30C8\u2192\uFF12\u5927P\u2192OD\u80F4\u520E\u306D\u2192\u30E9\u30C3\u30B7\u30E52\u5927P\u2192\u80F4\u520E\u306D\u2192\u30E9\u30C3\u30B72\u5C0FP\u2192OD\u80F4\u520E\u306D\u2192\u5F31\u4E00\u6587\u2192SA3","\u7C21\u5358\u30B9\u30BF\u30F3\u30B3\u30F3\u30DC","\u30A4\u30F3\u30D1\u30AF\u30C8\u2192\u7206\u5F3E2\u500B\u8A2D\u7F6E\u21922\u5927P\u2192\u4E2D\u4E00\u6587\u5B57\u2192\u7206\u5F3E\u30D2\u30C3\u30C8\u2192\u30E9\u30C3\u30B7\u30E5\uFF12\u5927P\u2192\u80F4\u520E\u306D\u2192\u767B\u308AOD\u8352\u9D7A\u2192\u80F4\u520E\u306D\u2192CA","\u5F37P\u30D1\u30CB\u30AB\u30F3\u304B\u3089","\u5FAE\u6B69\u304D\u5F37K\u2192\u4E2DP\u2192\u5F37P\u2192\u4E2D\u306F\u3084\u304C\u3051\uFF08\u30B9\u30E9\uFF09","\u30B9\u30C6\u30B9\u30C6\u6B69\u304D\u3067\u6295\u3052\u91CD\u306A\u308B\u3057\u3000\u30B7\u30DF\u30FC\u53EF\u80FD","\u5F37P\u30D1\u30CB\u30AB\u30F3\u304B\u3089\u3000\u5FAE\u6B69\u304D\u5F37K\u2192\u4E2DP\u2192\u5F37P\u2192\u4E2D\u306F\u3084\u304C\u3051\u62BC\u3057\u3063\u3071\u306A\u3057\u2192K\u6D3E\u751F\u304B\u3089\u3000\u5F31\u306F\u3084\u304C\u3051\u6025\u505C\u6B62\u3067\u30D7\u30E9\u30B9\u306B2\u3068\u308C\u3066\u6295\u3052\u3082\u57CB\u307E\u308B\u3000\u3000\u3000\u305F\u3060\u30B7\u30DF\u30FC\u4E0D\u53EF","5\u5927P\u30D1\u30CB\u30AB\u30F3\uFF1EOD\u30C9\u30ED\u30F3\uFF1EJ\u5927P\uFF1E2\u5927P\uFF1EOD\u6025\u505C\u6B62\uFF1E2\u4E2DP\uFF1E5\u4E2DP\uFF1EOD\u4E00\u6587\u5B57\uFF1E\u4F4E\u7A7A\u7A7A\u4E2DOD\u65CB\u98A8\u811A\uFF1E\u5F31\u4E00\u6587\u5B57\uFF1ESA3","5\u5927P\u30D1\u30CB\u30AB\u30F3\uFF1E\u9045\u3089\u305B5\u5927K\uFF1E5\u5927P\uFF1EOD\u6025\u505C\u6B62\uFF1E5\u4E2DP\uFF1EOD\u4E00\u6587\u5B57\uFF1E\u4F4E\u7A7A\u7A7A\u4E2DOD\u65CB\u98A8\u811A\uFF1E\u5F31\u4E00\u6587\u5B57\uFF1ESA"]},{title:"\u7206\u5F3E\u30B3\u30F3\u30DC",items:["OD\u8A2D\u7F6E\uFF1E2\u5927P\u30AD\u30E3\u30F3\u30BB\u30EB\u4E2D\u4E00\u6587\u5B57\uFF1E1\u767A\u76EE\u7206\u5F3E\u30D2\u30C3\u30C8\uFF1E2\u767A\u76EE\u7206\u5F3E\u30D2\u30C3\u30C8\uFF1E\u5C0F\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\u30AD\u30E3\u30F3\u30BB\u30EBOD\u80F4\u520E\u306D\uFF1E","\u30E9\u30C3\u30B7\u30E52\u5927P\u30AD\u30E3\u30F3\u30BB\u30EB\u30E9\u30C3\u30B7\u30E52\u5927P(BO)\u30AD\u30E3\u30F3\u30BB\u30EB\u5C0F\u30C9\u30ED\u30F3\uFF1E5\u4E2DP\u30AD\u30E3\u30F3\u30BB\u30EB\u5C0F\u4E00\u6587\u5B57\u30AD\u30E3\u30F3\u30BB\u30EBSA3"]},{title:"\u30B9\u30BF\u30F3\u30B3\u30F3\u30DC",items:["\u30B9\u30BF\u30F3\uFF1EOD\u8A2D\u7F6E\uFF1E2\u5927P\uFF1E\u4E2D\u6D41\u8EE2\uFF1E2\u4E2DK\uFF08\u7A7A\u632F\u308A\uFF09\uFF1E \u80F4\u520E\u306D\uFF1E\u3053\u3053\u304B\u3089\u6B8B\u308AD\u30B2\u30FC\u30B8\u3067\u5206\u5C90","D\u30B2\u30FC\u30B8","\u30FB4\u672C\u4EE5\u4E0A\uFF1A \u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1E\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1EOD\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1EC\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1E\u30C9\u30ED\u30F35\u4E2DP\uFF1E\u80F4\u520E\u306D\uFF1E\u5F31\u6D41\u8EE2SA3","\u30FB2\u672C\u4EE5\u4E0A\uFF1A \u30C9\u30ED\u30F32\u5927P\uFF1E\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1EOD\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1EC\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1E\u30C9\u30ED\u30F35\u4E2DP\uFF1E\u80F4\u520E\u306D\uFF1E\u5F31\u6D41\u8EE2SA3","\u30FB1\u672C\u4EE5\u4E0A\uFF1A \u30C9\u30ED\u30F32\u5927P\uFF1E\u30C9\u30ED\u30F32\u5927P\uFF1EOD\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1EC\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1E\u30C9\u30ED\u30F35\u4E2DP\uFF1E\u80F4\u520E\u306D\uFF1E\u5F31\u6D41\u8EE2SA3","\u30FB0\u672C\u3088\u308A\uFF1A \u30C9\u30ED\u30F32\u5927P\uFF1E\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1E\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5C0FP\uFF1EC\u30E9\u30C3\u30B7\u30E5\u7344\u9396\u62F3\uFF1E\u5F31\u6D41\u8EE2SA3","\u30FBBO\uFF1A \u30C9\u30ED\u30F32\u5927P\uFF1E\u30C9\u30ED\u30F32\u5927P\uFF1E\u80F4\u520E\u306D\uFF1E\u5F31\u6D41\u8EE2SA3"]}],Bf=zf.reduce((e,t)=>e+t.items.length,0);g3=`
.kmbly-root{
  --kmbly-ink:#0a0c0d;
  --kmbly-wall:#131617;
  --kmbly-card:#181c1d;
  --kmbly-teal:#1fe8c8;
  --kmbly-teal-dim:#12897a;
  --kmbly-pink:#ff2f7e;
  --kmbly-pink-dim:#a31c53;
  --kmbly-yellow:#ffd23f;
  --kmbly-concrete:#7d8388;
  --kmbly-paper:#f2ede1;
  --kmbly-hero-ink:#08060c;
  --kmbly-hero-violet:#7b2ff7;
  --kmbly-hero-violet-glow:#a865ff;
  --kmbly-hero-concrete:#8e88a0;

  position:relative;
  margin:32px 0;
  padding:0;
  background:var(--kmbly-ink);
  color:var(--kmbly-paper);
  font-family:'Noto Sans JP',sans-serif;
  overflow:hidden;
  border-radius:8px;
  isolation:isolate;
}

.kmbly-root ::selection{background:var(--kmbly-pink);color:var(--kmbly-ink);}

.kmbly-root{
  background-image:
    radial-gradient(circle at 8% 5%, rgba(31,232,200,0.10), transparent 38%),
    radial-gradient(circle at 92% 90%, rgba(255,47,126,0.12), transparent 42%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.014) 0px, rgba(255,255,255,0.014) 1px, transparent 1px, transparent 3px);
}

.kmbly-root::after{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  z-index:1;
  opacity:0.5;
  mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>");
}

.kmbly-splat{
  position:absolute;
  border-radius:50%;
  filter:blur(1px);
  pointer-events:none;
  opacity:0.5;
  z-index:0;
}

/* ===== \u30CA\u30D3 ===== */
.kmbly-nav{
  position:relative;
  z-index:10;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:16px 24px;
  background:linear-gradient(180deg, rgba(21,11,40,0.95), rgba(21,11,40,0.75));
  border-bottom:1px solid rgba(168,101,255,0.25);
}
.kmbly-logo{
  font-family:'Bungee',sans-serif;
  font-size:16px;
  letter-spacing:0.04em;
  color:var(--kmbly-paper);
  display:flex;
  align-items:center;
  gap:8px;
}
.kmbly-logo .kmbly-dot{width:8px;height:8px;background:var(--kmbly-pink);border-radius:50%;box-shadow:0 0 10px var(--kmbly-pink);}
.kmbly-navlinks{
  display:flex;
  gap:24px;
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  letter-spacing:0.08em;
  color:#b9b2cc;
}
.kmbly-navlinks span{cursor:pointer;transition:color .15s ease;}
.kmbly-navlinks span:hover{color:var(--kmbly-hero-violet-glow);}
.kmbly-buy{
  background:linear-gradient(90deg, var(--kmbly-hero-violet), var(--kmbly-pink));
  color:#fff;
  font-family:'Bungee',sans-serif;
  font-size:12px;
  padding:9px 18px;
  border-radius:3px;
  letter-spacing:0.05em;
  cursor:pointer;
}
@media (max-width:800px){ .kmbly-navlinks{display:none;} }

/* ===== \u30D2\u30FC\u30ED\u30FC ===== */
.kmbly-hero{
  position:relative;
  min-height:78vh;
  display:flex;
  align-items:center;
  overflow:hidden;
}
.kmbly-hero-bg{
  position:absolute;
  inset:0;
  background:
    radial-gradient(ellipse 60% 50% at 65% 45%, rgba(123,47,247,0.35), transparent 60%),
    radial-gradient(ellipse 40% 40% at 20% 80%, rgba(255,47,126,0.15), transparent 60%),
    linear-gradient(180deg, #0c0716, #08060c 70%);
}
.kmbly-beam{
  position:absolute;
  height:6px;
  border-radius:99px;
  background:linear-gradient(90deg, transparent, rgba(168,101,255,0.9), transparent);
  filter:blur(2px);
  opacity:0.8;
}
.kmbly-beam.kmbly-b1{width:280px;top:22%;left:8%;transform:rotate(2deg);}
.kmbly-beam.kmbly-b2{width:220px;top:32%;right:6%;transform:rotate(-2deg);}

.kmbly-globe-canvas{
  position:absolute;
  top:0;left:0;
  width:100%;
  height:100%;
  z-index:1;
  display:block;
}

.kmbly-hero-content{
  position:relative;
  z-index:3;
  padding:0 5vw;
  max-width:560px;
}
.kmbly-eyebrow-bar{
  width:60px;
  height:6px;
  background:var(--kmbly-hero-violet-glow);
  box-shadow:0 0 14px var(--kmbly-hero-violet-glow);
  margin-bottom:20px;
}
.kmbly-hero-title{
  font-family:'Bungee',sans-serif;
  font-size:clamp(36px, 6vw, 72px);
  line-height:0.94;
  color:#fff;
  letter-spacing:0.01em;
}
.kmbly-hero-title .kmbly-ghost{
  display:block;
  color:transparent;
  -webkit-text-stroke:1.5px rgba(242,237,225,0.28);
  font-size:0.62em;
  margin-top:4px;
}
.kmbly-hero-sub{
  margin-top:18px;
  font-family:'JetBrains Mono',monospace;
  font-size:13px;
  color:var(--kmbly-hero-concrete);
  letter-spacing:0.03em;
  line-height:1.7;
}
.kmbly-stamp-block{
  margin-top:30px;
  display:inline-block;
  background:var(--kmbly-hero-violet-glow);
  width:56px;height:38px;
  border-radius:2px;
  box-shadow:0 0 24px rgba(168,101,255,0.6);
}

.kmbly-panels{
  position:absolute;
  right:0;
  top:24%;
  z-index:4;
  display:flex;
  flex-direction:column;
  gap:6px;
}
.kmbly-panel{
  position:relative;
  width:min(42vw, 520px);
  height:104px;
  display:flex;
  align-items:center;
  overflow:hidden;
  border-left:4px solid var(--kmbly-hero-violet-glow);
  cursor:pointer;
  transition:transform .25s ease, border-color .2s ease;
}
.kmbly-panel:hover{transform:translateX(-10px);border-color:var(--kmbly-pink);}
.kmbly-panel-bg{
  position:absolute;
  inset:0;
  background-size:cover;
  background-position:center;
  filter:brightness(0.55) saturate(1.2);
  transition:filter .25s ease;
}
.kmbly-panel:hover .kmbly-panel-bg{filter:brightness(0.75) saturate(1.3);}
.kmbly-panel-bg.kmbly-p1{background:linear-gradient(135deg, #2a1550, #ff2f7e 130%);}
.kmbly-panel-bg.kmbly-p2{background:linear-gradient(135deg, #0c2b2a, #1fe8c8 140%);}
.kmbly-panel-inner{
  position:relative;
  z-index:2;
  display:flex;
  align-items:center;
  gap:14px;
  padding-left:22px;
}
.kmbly-panel-arrow{
  width:30px;height:30px;
  background:rgba(255,255,255,0.92);
  color:var(--kmbly-hero-ink);
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:700;
  flex-shrink:0;
}
.kmbly-panel-label{
  font-family:'Bungee',sans-serif;
  font-size:19px;
  color:#fff;
  letter-spacing:0.02em;
  text-shadow:0 2px 12px rgba(0,0,0,0.6);
}
.kmbly-panel-sub{
  font-family:'JetBrains Mono',monospace;
  font-size:10px;
  color:rgba(255,255,255,0.75);
  margin-top:2px;
}
@media (max-width:900px){
  .kmbly-panels{position:relative;top:0;margin-top:32px;padding:0 5vw 40px;}
  .kmbly-panel{width:100%;}
  .kmbly-hero{flex-direction:column;padding-top:32px;min-height:auto;}
}

.kmbly-scrolldown{
  position:absolute;
  bottom:20px;
  left:5vw;
  z-index:4;
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  color:var(--kmbly-hero-concrete);
  letter-spacing:0.15em;
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
}
.kmbly-scrolldown .kmbly-line{width:36px;height:1px;background:var(--kmbly-hero-concrete);position:relative;overflow:hidden;}
.kmbly-scrolldown .kmbly-line::after{
  content:"";
  position:absolute;
  left:-100%;top:0;bottom:0;width:100%;
  background:var(--kmbly-hero-violet-glow);
  animation:kmbly-slide 2.4s linear infinite;
}
@keyframes kmbly-slide{to{left:100%;}}

/* ===== \u96FB\u5149\u63B2\u793A\u677F\u30C6\u30A3\u30C3\u30AB\u30FC ===== */
.kmbly-ticker-wrap{
  position:relative;
  z-index:3;
  overflow:hidden;
  background:var(--kmbly-ink);
  border-bottom:2px solid var(--kmbly-pink);
  box-shadow:0 2px 20px rgba(255,47,126,0.25);
  white-space:nowrap;
}
.kmbly-ticker-wrap::before,
.kmbly-ticker-wrap::after{
  content:"";
  position:absolute;
  top:0;bottom:0;
  width:50px;
  z-index:2;
  pointer-events:none;
}
.kmbly-ticker-wrap::before{left:0;background:linear-gradient(90deg, var(--kmbly-ink), transparent);}
.kmbly-ticker-wrap::after{right:0;background:linear-gradient(-90deg, var(--kmbly-ink), transparent);}
.kmbly-ticker{
  display:inline-block;
  padding-left:100%;
  animation:kmbly-ticker-scroll 26s linear infinite;
  font-family:'JetBrains Mono',monospace;
  font-size:12px;
  font-weight:700;
  letter-spacing:0.08em;
  color:var(--kmbly-teal);
  padding-top:9px;
  padding-bottom:9px;
}
.kmbly-ticker span{margin:0 24px;text-shadow:0 0 10px rgba(31,232,200,0.5);}
.kmbly-ticker span.kmbly-pk{color:var(--kmbly-pink);text-shadow:0 0 10px rgba(255,47,126,0.5);}
.kmbly-ticker span.kmbly-odtx{color:var(--kmbly-yellow);text-shadow:0 0 10px rgba(255,210,63,0.5);}
.kmbly-ticker span.kmbly-dot{color:#3f4345;margin:0 8px;}
@keyframes kmbly-ticker-scroll{from{transform:translateX(0);}to{transform:translateX(-100%);}}

/* ===== \u30D8\u30C3\u30C0\u30FC(\u65E2\u5B58\u30CE\u30FC\u30C8\u90E8) ===== */
.kmbly-header{
  position:relative;
  padding:48px 24px 40px;
  text-align:center;
  overflow:hidden;
  border-bottom:3px solid var(--kmbly-teal);
  box-shadow:0 2px 30px rgba(31,232,200,0.15);
  z-index:2;
}
.kmbly-bg-tape{
  position:absolute;
  inset:0;
  background:
    repeating-linear-gradient(135deg, transparent 0 26px, rgba(255,210,63,0.05) 26px 28px),
    linear-gradient(115deg, transparent 42%, rgba(255,47,126,0.07) 42%, rgba(255,47,126,0.07) 44%, transparent 44%),
    linear-gradient(115deg, transparent 58%, rgba(31,232,200,0.09) 58%, rgba(31,232,200,0.09) 61%, transparent 61%);
  pointer-events:none;
}
.kmbly-eyebrow{
  position:relative;
  font-family:'JetBrains Mono',monospace;
  letter-spacing:0.4em;
  font-size:11px;
  color:var(--kmbly-concrete);
  text-transform:uppercase;
  margin-bottom:16px;
  display:inline-flex;
  align-items:center;
  gap:10px;
}
.kmbly-eq{display:inline-flex;align-items:flex-end;gap:2px;height:12px;}
.kmbly-eq span{width:3px;background:var(--kmbly-pink);display:block;animation:kmbly-eqbar 1.1s ease-in-out infinite;}
.kmbly-eq span:nth-child(1){height:40%;animation-delay:-0.9s;}
.kmbly-eq span:nth-child(2){height:100%;animation-delay:-0.6s;}
.kmbly-eq span:nth-child(3){height:65%;animation-delay:-0.3s;}
.kmbly-eq span:nth-child(4){height:85%;animation-delay:-1.05s;}
.kmbly-eq span:nth-child(5){height:50%;animation-delay:-0.15s;}
@keyframes kmbly-eqbar{0%,100%{transform:scaleY(0.35);}50%{transform:scaleY(1);}}

.kmbly-root h1{
  position:relative;
  font-family:'Bungee',sans-serif;
  font-weight:400;
  font-size:clamp(38px, 9vw, 78px);
  margin:0;
  line-height:0.92;
  letter-spacing:0.01em;
  color:var(--kmbly-paper);
  text-shadow:3px 3px 0 var(--kmbly-pink), 6px 6px 0 var(--kmbly-teal-dim), 0 0 40px rgba(31,232,200,0.25);
  transform:rotate(-1.4deg);
  display:inline-block;
  animation:kmbly-flicker 6s ease-in-out infinite;
}
@keyframes kmbly-flicker{
  0%,92%,100%{text-shadow:3px 3px 0 var(--kmbly-pink),6px 6px 0 var(--kmbly-teal-dim),0 0 40px rgba(31,232,200,0.25);}
  93%{text-shadow:3px 3px 0 var(--kmbly-pink),6px 6px 0 var(--kmbly-teal-dim),0 0 6px rgba(31,232,200,0.05);}
  94%{text-shadow:3px 3px 0 var(--kmbly-pink),6px 6px 0 var(--kmbly-teal-dim),0 0 40px rgba(31,232,200,0.25);}
}
.kmbly-sub{
  position:relative;
  margin-top:20px;
  font-family:'JetBrains Mono',monospace;
  color:var(--kmbly-teal);
  font-size:14px;
  letter-spacing:0.05em;
}
.kmbly-sub b{color:var(--kmbly-yellow);}
.kmbly-tagstamp{
  position:absolute;
  top:18px;
  right:6%;
  font-family:'Bungee',sans-serif;
  font-size:12px;
  color:var(--kmbly-ink);
  background:var(--kmbly-yellow);
  padding:6px 12px;
  transform:rotate(8deg);
  border-radius:2px;
  box-shadow:3px 3px 0 rgba(0,0,0,0.4);
  letter-spacing:0.05em;
}

.kmbly-toolbar{
  position:relative;
  z-index:2;
  max-width:920px;
  margin:28px auto 0;
  padding:0 20px;
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  align-items:center;
}
.kmbly-tagbox{flex:1;min-width:220px;position:relative;}
.kmbly-tagbox::before{
  content:"TAG:";
  position:absolute;
  left:16px;top:50%;
  transform:translateY(-50%);
  font-family:'JetBrains Mono',monospace;
  color:var(--kmbly-pink);
  font-weight:700;
  font-size:13px;
  pointer-events:none;
}
.kmbly-search{
  width:100%;
  padding:15px 16px 15px 66px;
  background:var(--kmbly-wall);
  border:2px solid #262b2c;
  border-radius:3px;
  color:var(--kmbly-paper);
  font-family:'JetBrains Mono',monospace;
  font-size:15px;
  outline:none;
  transition:border-color .15s ease, box-shadow .15s ease;
  box-sizing:border-box;
}
.kmbly-search:focus{border-color:var(--kmbly-teal);box-shadow:0 0 0 3px rgba(31,232,200,0.15);}
.kmbly-search::placeholder{color:#565b5e;}
.kmbly-legend{display:flex;gap:10px;flex-wrap:wrap;font-family:'JetBrains Mono',monospace;font-size:12px;}
.kmbly-legend span{padding:7px 11px;border-radius:2px;border:1px solid #262b2c;color:var(--kmbly-concrete);transition:transform .12s ease;}
.kmbly-legend span:hover{transform:translateY(-2px);}
.kmbly-lp{color:var(--kmbly-teal);border-color:var(--kmbly-teal-dim);}
.kmbly-lk{color:var(--kmbly-pink);border-color:var(--kmbly-pink-dim);}
.kmbly-lod{color:var(--kmbly-yellow);border-color:#8a7016;}

.kmbly-count{
  position:relative;
  z-index:2;
  max-width:920px;
  margin:16px auto 0;
  padding:0 24px;
  font-family:'JetBrains Mono',monospace;
  font-size:12px;
  color:#565b5e;
}

.kmbly-main{
  position:relative;
  z-index:2;
  max-width:920px;
  margin:30px auto 60px;
  padding:0 20px;
  display:flex;
  flex-direction:column;
  gap:20px;
}

.kmbly-section{
  background:var(--kmbly-card);
  border:1px solid #24282a;
  border-radius:4px;
  overflow:hidden;
  position:relative;
  transition:border-color .15s ease;
}
.kmbly-section:hover{border-color:#33393b;}
.kmbly-section::before{
  content:"";
  position:absolute;
  left:0;top:0;bottom:0;
  width:3px;
  background:linear-gradient(180deg, var(--kmbly-teal), var(--kmbly-pink));
  opacity:0.7;
}
.kmbly-section-head{
  display:flex;
  align-items:center;
  gap:12px;
  padding:17px 20px 17px 24px;
  cursor:pointer;
  user-select:none;
  background:linear-gradient(90deg, rgba(31,232,200,0.05), transparent 75%);
}
.kmbly-section-head:hover{background:linear-gradient(90deg, rgba(31,232,200,0.11), transparent 75%);}
.kmbly-num{
  font-family:'JetBrains Mono',monospace;
  font-size:12px;
  color:var(--kmbly-ink);
  background:var(--kmbly-yellow);
  padding:3px 9px;
  border-radius:2px;
  font-weight:700;
  flex-shrink:0;
  transform:rotate(-2deg);
  box-shadow:2px 2px 0 rgba(0,0,0,0.35);
}
.kmbly-section-head h2{
  flex:1;
  margin:0;
  font-family:'Bungee',sans-serif;
  font-weight:400;
  font-size:17px;
  letter-spacing:0.01em;
  color:var(--kmbly-paper);
}
.kmbly-badge{
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  color:var(--kmbly-concrete);
  border:1px solid #2a2e30;
  padding:2px 9px;
  border-radius:99px;
  flex-shrink:0;
}
.kmbly-chev{color:var(--kmbly-teal);font-family:'JetBrains Mono',monospace;transition:transform .18s ease;flex-shrink:0;}
.kmbly-section.kmbly-collapsed .kmbly-chev{transform:rotate(-90deg);}
.kmbly-items{
  padding:6px 20px 20px 24px;
  display:flex;
  flex-direction:column;
  gap:10px;
  animation:kmbly-reveal .18s ease;
}
@keyframes kmbly-reveal{from{opacity:0;transform:translateY(-4px);}to{opacity:1;transform:translateY(0);}}
.kmbly-section.kmbly-collapsed .kmbly-items{display:none;}

.kmbly-item{
  font-family:'JetBrains Mono',monospace;
  font-size:14.5px;
  line-height:1.7;
  color:#d7d3c9;
  background:var(--kmbly-wall);
  border-left:3px solid #2a2e30;
  padding:12px 14px;
  border-radius:0 3px 3px 0;
  word-break:break-word;
  transition:border-color .15s ease, background .15s ease;
}
.kmbly-item.kmbly-combo{border-left-color:var(--kmbly-teal-dim);cursor:pointer;position:relative;}
.kmbly-item.kmbly-combo:hover{border-left-color:var(--kmbly-teal);background:#1a1f20;}
.kmbly-item.kmbly-combo:active{transform:scale(0.99);}
.kmbly-item.kmbly-combo.kmbly-flash{animation:kmbly-flash-hit .6s ease;}
@keyframes kmbly-flash-hit{
  0%{box-shadow:0 0 0 0 rgba(255,210,63,0.6);}
  40%{box-shadow:0 0 0 8px rgba(255,210,63,0);}
  100%{box-shadow:0 0 0 0 rgba(255,210,63,0);}
}
.kmbly-item.kmbly-note{
  color:var(--kmbly-concrete);
  font-family:'Noto Sans JP',sans-serif;
  border-left-color:var(--kmbly-pink-dim);
  font-size:13.5px;
  cursor:default;
}

.kmbly-toast{
  position:fixed;
  bottom:26px;
  left:50%;
  transform:translateX(-50%) translateY(20px);
  background:var(--kmbly-yellow);
  color:var(--kmbly-ink);
  font-family:'JetBrains Mono',monospace;
  font-weight:700;
  font-size:13px;
  padding:11px 20px;
  border-radius:3px;
  box-shadow:0 6px 24px rgba(0,0,0,0.5);
  opacity:0;
  pointer-events:none;
  transition:opacity .18s ease, transform .18s ease;
  z-index:50;
  letter-spacing:0.03em;
}
.kmbly-toast.kmbly-show{opacity:1;transform:translateX(-50%) translateY(0);}

.kmbly-roll-btn{
  position:fixed;
  right:22px;
  bottom:26px;
  z-index:40;
  background:var(--kmbly-pink);
  color:var(--kmbly-ink);
  border:none;
  font-family:'Bungee',sans-serif;
  font-size:13px;
  padding:14px 18px;
  border-radius:99px;
  cursor:pointer;
  box-shadow:0 6px 20px rgba(255,47,126,0.4);
  display:flex;
  align-items:center;
  gap:8px;
  transition:transform .15s ease, box-shadow .15s ease;
}
.kmbly-roll-btn:hover{transform:translateY(-3px);box-shadow:0 10px 26px rgba(255,47,126,0.55);}
.kmbly-roll-btn:active{transform:translateY(0) scale(0.96);}
.kmbly-roll-btn .kmbly-dice{display:inline-block;transition:transform .5s ease;}
.kmbly-roll-btn.kmbly-spinning .kmbly-dice{transform:rotate(360deg);}

.kmbly-burst-particle{
  position:fixed;
  width:6px;
  height:6px;
  border-radius:50%;
  pointer-events:none;
  z-index:60;
}

.kmbly-root mark.kmbly-p{color:var(--kmbly-teal);background:none;font-weight:700;text-shadow:0 0 12px rgba(31,232,200,0.35);}
.kmbly-root mark.kmbly-k{color:var(--kmbly-pink);background:none;font-weight:700;text-shadow:0 0 12px rgba(255,47,126,0.35);}
.kmbly-root mark.kmbly-od{color:var(--kmbly-yellow);background:none;font-weight:700;text-shadow:0 0 12px rgba(255,210,63,0.3);}
.kmbly-root mark.kmbly-sa{color:var(--kmbly-yellow);background:none;font-weight:700;text-decoration:underline;text-decoration-style:dotted;text-shadow:0 0 12px rgba(255,210,63,0.3);}
.kmbly-root mark.kmbly-hit{background:rgba(255,210,63,0.35);color:var(--kmbly-ink);border-radius:2px;padding:0 3px;font-weight:700;}

.kmbly-empty{
  text-align:center;
  color:#565b5e;
  font-family:'JetBrains Mono',monospace;
  padding:60px 20px;
  position:relative;
  z-index:2;
}

.kmbly-footer{
  position:relative;
  z-index:2;
  text-align:center;
  padding:30px 20px 44px;
  font-family:'JetBrains Mono',monospace;
  font-size:11px;
  color:#3f4345;
  letter-spacing:0.08em;
}

@media (prefers-reduced-motion: reduce){
  .kmbly-root *{animation:none !important;transition:none !important;}
}

@media (max-width:520px){
  .kmbly-tagstamp{display:none;}
}
`});function v3({tone:e,children:t}){let n=Kg[e];return React.createElement("span",{style:{display:"inline-block",padding:"2px 10px",borderRadius:"999px",fontSize:"0.72rem",fontWeight:700,color:n.text,background:n.bg,border:`1px solid ${n.dot}`,whiteSpace:"nowrap"}},t)}function PS(){let[e,t]=(0,Ff.useState)(!1);return(0,Ff.useEffect)(()=>{let n=setTimeout(()=>t(!0),25);return()=>clearTimeout(n)},[]),React.createElement("div",{style:{border:"1px solid rgba(148, 163, 184, 0.45)",borderRadius:"18px",padding:"24px 24px 20px",margin:"28px 0",background:"rgba(15, 23, 42, 0.96)",boxShadow:e?"0 18px 40px rgba(0,0,0,0.55)":"0 4px 18px rgba(0,0,0,0.20)",color:"#e5e7eb",transform:e?"translateY(0px)":"translateY(18px)",opacity:e?1:0,transition:"transform 260ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 260ms ease-out, box-shadow 260ms ease-out",fontSize:"0.88rem"}},React.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.7rem",marginBottom:"1.4rem"}},React.createElement("div",{style:{width:"34px",height:"34px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(244,63,94,1), rgba(245,158,11,1))",boxShadow:"0 4px 12px rgba(244,63,94,0.35)",fontSize:"1.1rem"}},"\u{1F575}\uFE0F"),React.createElement("div",null,React.createElement("div",{style:{fontWeight:700,fontSize:"1.05rem"}},"\u8ABF\u67FB\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3"),React.createElement("div",{style:{fontSize:"0.78rem",opacity:.7}},"Street Fighter 6 (Proton) \u65E5\u672C\u8A9E\u5165\u529B\u30C8\u30E9\u30D6\u30EB"))),React.createElement("div",{style:{position:"relative",paddingLeft:"6px"}},React.createElement("div",{style:{position:"absolute",left:"16px",top:"6px",bottom:"6px",width:"2px",background:"rgba(148,163,184,0.25)"}}),y3.map(n=>{let i=Kg[n.tone];return React.createElement("div",{key:n.round,style:{display:"flex",gap:"1rem",marginBottom:"1.1rem",position:"relative"}},React.createElement("div",{style:{width:"32px",height:"32px",borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.78rem",fontWeight:700,background:"rgba(15,23,42,0.96)",border:`2px solid ${i.dot}`,color:i.text,zIndex:1}},n.round),React.createElement("div",{style:{paddingTop:"3px"}},React.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",flexWrap:"wrap",marginBottom:"0.3rem"}},React.createElement("span",{style:{fontWeight:700}},n.title),React.createElement(v3,{tone:n.tone},n.verdict)),React.createElement("div",{style:{opacity:.85,lineHeight:1.6}},n.detail)))})),React.createElement("div",{style:{marginTop:"1.6rem",paddingTop:"1.4rem",borderTop:"1px solid rgba(148,163,184,0.25)"}},React.createElement("div",{style:{fontWeight:700,fontSize:"0.95rem",marginBottom:"0.9rem"}},"\u6226\u7E3E\u8868"),React.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:"0.6rem"}},_3.map((n,i)=>{let s=Kg[n.tone];return React.createElement("div",{key:i,style:{border:`1px solid ${s.dot}55`,background:s.bg,borderRadius:"10px",padding:"0.7rem 0.8rem"}},React.createElement("div",{style:{fontSize:"0.8rem",opacity:.85}},n.suspect),React.createElement("div",{style:{marginTop:"0.35rem",fontWeight:700,color:s.text,fontSize:"0.82rem"}},n.verdict))}))))}var Ff,Kg,y3,_3,BS=xo(()=>{Ff=bo(xa()),Kg={clear:{dot:"#64748b",text:"#cbd5e1",bg:"rgba(100,116,139,0.15)"},cause:{dot:"#f59e0b",text:"#fbbf24",bg:"rgba(245,158,11,0.15)"},fail:{dot:"#f43f5e",text:"#fb7185",bg:"rgba(244,63,94,0.15)"},solved:{dot:"#22c55e",text:"#4ade80",bg:"rgba(34,197,94,0.15)"}},y3=[{round:1,title:"\u30B3\u30F3\u30DD\u30B8\u30BF\u306F\u7121\u7F6A",verdict:"\u30B7\u30ED",tone:"clear",detail:"Sway\u306E\u30AD\u30FC\u30D0\u30A4\u30F3\u30C9\u7AF6\u5408\u3001GTK_IM_MODULE\u7B49\u306E\u74B0\u5883\u5909\u6570\u3001fcitx5\u306E\u8A2D\u5B9A\u3002\u3044\u305A\u308C\u3082\u7570\u5E38\u306A\u3057\u3002"},{round:2,title:"Proton\u304C\u610F\u56F3\u7684\u306BXIM\u3092\u7121\u52B9\u5316",verdict:"\u539F\u56E0\u306E\u8F2A\u90ED",tone:"cause",detail:"\u53E4\u3044libX11\u306E\u30AF\u30E9\u30C3\u30B7\u30E5\u56DE\u907F\u306E\u305F\u3081\u3001\u516C\u5F0FProton\u306F\u30D3\u30EB\u30C9\u6642\u306BXIM\u30B5\u30DD\u30FC\u30C8\u3092\u7121\u52B9\u5316\u3057\u3066\u3044\u305F\u3002"},{round:3,title:"\u30EC\u30B8\u30B9\u30C8\u30EA\u66F8\u304D\u63DB\u3048",verdict:"\u52B9\u679C\u306A\u3057",tone:"fail",detail:"UseXIM=y\u3092\u66F8\u304D\u8FBC\u307F\u3001\u5024\u306E\u53CD\u6620\u3082\u78BA\u8A8D\u3067\u304D\u305F\u304C\u3001\u6319\u52D5\u306F\u5909\u308F\u3089\u305A\u3002"},{round:4,title:"\u5BB9\u7591\u8005\u3092\u4E38\u88F8\u306B\u3059\u308B",verdict:"\u6C7A\u5B9A\u7684\u8A3C\u62E0",tone:"cause",detail:"WINEDEBUG\u30ED\u30B0\u3067 xim \u7CFB\u306F\u6C88\u9ED9\u3001imm \u7CFB\u3060\u3051\u304C\u52D5\u4F5C\u3002Wine\u65B0IME\u5B9F\u88C5\u304C\u30AD\u30FC\u5165\u529B\u3092XIM\u307E\u3067\u6A4B\u6E21\u3057\u3057\u3066\u3044\u306A\u304B\u3063\u305F\u3002"},{round:5,title:"\u5916\u304B\u3089\u7121\u7406\u3084\u308A\u6BB4\u308B",verdict:"\u52B9\u679C\u306A\u3057",tone:"fail",detail:"fcitx5-remote\u3067\u30B0\u30ED\u30FC\u30D0\u30EB\u72B6\u614B\u306F\u30C8\u30B0\u30EB\u3067\u304D\u305F\u304C\u3001Wine\u30A2\u30D7\u30EA\u306E\u5165\u529B\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u306F\u53CD\u6620\u3055\u308C\u305A\u3002"},{round:6,title:"\u5897\u63F4\u3001GE-Proton",verdict:"\u52B9\u679C\u306A\u3057\u30FB\u540C\u4E00\u75C7\u72B6",tone:"fail",detail:"\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u7248\u306B\u5207\u308A\u66FF\u3048\u3066\u3082\u75C7\u72B6\u306F\u540C\u4E00\u3002Wine\u672C\u4F53\u306E\u69CB\u9020\u7684\u306A\u5236\u7D04\u3068\u78BA\u5B9A\u3002"}],_3=[{suspect:"\u30B3\u30F3\u30DD\u30B8\u30BF\u306E\u30AD\u30FC\u30D0\u30A4\u30F3\u30C9\u7AF6\u5408",verdict:"\u30B7\u30ED",tone:"clear"},{suspect:"fcitx5\u306E\u8A2D\u5B9A",verdict:"\u30B7\u30ED",tone:"clear"},{suspect:"\u30EC\u30B8\u30B9\u30C8\u30EA\u3067 UseXIM=y",verdict:"\u52B9\u679C\u306A\u3057",tone:"fail"},{suspect:"fcitx5-remote \u3067\u5F37\u5236\u30C8\u30B0\u30EB",verdict:"\u52B9\u679C\u306A\u3057",tone:"fail"},{suspect:"GE-Proton\u3078\u306E\u5207\u308A\u66FF\u3048",verdict:"\u52B9\u679C\u306A\u3057\u30FB\u540C\u4E00\u75C7\u72B6",tone:"fail"},{suspect:"\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u8CBC\u308A\u4ED8\u3051",verdict:"\u52D5\u4F5C\u78BA\u8A8D\u6E08\u307F\u30FB\u552F\u4E00\u306E\u5B9F\u7528\u89E3",tone:"solved"}]});var M3=qi(()=>{var oe=bo(xa()),Qg=bo(Qx());jx();IS();BS();function zS({title:e,subtitle:t,children:n}){let[i,s]=(0,oe.useState)(!1);return(0,oe.useEffect)(()=>{let a=setTimeout(()=>s(!0),25);return()=>clearTimeout(a)},[]),oe.default.createElement("div",{style:{border:"1px solid rgba(148, 163, 184, 0.45)",borderRadius:"18px",padding:"20px 22px",margin:"26px 0",background:"rgba(15, 23, 42, 0.96)",boxShadow:i?"0 18px 40px rgba(0,0,0,0.55)":"0 4px 18px rgba(0,0,0,0.20)",color:"var(--content-fg, #e5e7eb)",transform:i?"translateY(0px)":"translateY(18px)",opacity:i?1:0,transition:"transform 260ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 260ms ease-out, box-shadow 260ms ease-out"}},oe.default.createElement("div",{style:{position:"relative"}},oe.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.7rem",marginBottom:"1rem"}},oe.default.createElement("div",{style:{width:"34px",height:"34px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(56,189,248,1), rgba(129,140,248,1))",boxShadow:"0 4px 12px rgba(56,189,248,0.35)",fontSize:"1.15rem",fontWeight:700}},"\u2699"),oe.default.createElement("div",null,oe.default.createElement("div",{style:{fontWeight:700,fontSize:"1.05rem"}},e),t&&oe.default.createElement("div",{style:{fontSize:"0.8rem",opacity:.75}},t))),oe.default.createElement("div",{style:{fontSize:"0.88rem",opacity:.96,lineHeight:1.6}},n)))}function x3(){return oe.default.createElement(zS,{title:"Windows 11 \u306E\u8D77\u52D5\u30D5\u30ED\u30FC",subtitle:"UEFI \u2192 Boot Manager \u2192 winload \u2192 \u30AB\u30FC\u30CD\u30EB"},oe.default.createElement("ol",{style:{listStyle:"none",padding:0}},[{title:"UEFI \u521D\u671F\u5316",desc:"ASRock \u306E UEFI \u304C\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u521D\u671F\u5316\u3057\u3001\u300C\u3069\u306E EFI \u3092\u8D77\u52D5\u3059\u308B\u304B\u300D\u3092\u6C7A\u3081\u308B\u3002"},{title:"Windows Boot Manager \u8D77\u52D5",desc:"\u901A\u5E38\u306F EFI/Microsoft/Boot/bootmgfw.efi \u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u3002"},{title:"BCD \u8AAD\u307F\u8FBC\u307F",desc:"Boot Configuration Data \u3092\u8AAD\u307F\u8FBC\u3080\u3002"},{title:"winload.efi \u5B9F\u884C",desc:"Windows \u30ED\u30FC\u30C0\u30FC\u304C\u30AB\u30FC\u30CD\u30EB\u30FB\u30C9\u30E9\u30A4\u30D0\u3092\u30E1\u30E2\u30EA\u3078\u5C55\u958B\u3002"},{title:"Windows \u30AB\u30FC\u30CD\u30EB\u521D\u671F\u5316",desc:"ntoskrnl.exe \u304C\u30C7\u30D0\u30A4\u30B9\u30C9\u30E9\u30A4\u30D0\u3084\u30B5\u30FC\u30D3\u30B9\u3092\u8D77\u52D5\u3002"},{title:"\u30ED\u30B0\u30AA\u30F3\u753B\u9762",desc:"\u30B5\u30A4\u30F3\u30A4\u30F3\u753B\u9762\u304C\u8868\u793A\u3055\u308C\u308B\u3002"}].map((t,n)=>oe.default.createElement("li",{key:n,style:{display:"flex",gap:"0.75rem",marginBottom:"0.8rem"}},oe.default.createElement("div",{style:{width:"22px",height:"22px",borderRadius:"999px",border:"1px solid rgba(148,163,184,0.8)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8rem",fontWeight:700,background:"rgba(15,23,42,0.96)",marginTop:"2px"}},n+1),oe.default.createElement("div",null,oe.default.createElement("div",{style:{fontWeight:600}},t.title),oe.default.createElement("div",null,t.desc))))),oe.default.createElement("p",{style:{fontSize:"0.8rem",opacity:.7,marginTop:"1rem"}},"\u203B bootmgfw.efi \u304C\u8907\u6570\u3042\u3063\u305F\u308A\u3001NVRAM \u306E Boot Manager \u304C\u5897\u6B96\u3057\u3066\u3044\u308B\u3068\u4E0D\u5177\u5408\u304C\u8D77\u304D\u3084\u3059\u3044\u30BE\u30FC\u30F3\u3002"))}function b3(){return oe.default.createElement(zS,{title:"systemd-boot \u306E\u30E1\u30CB\u30E5\u30FC\u69CB\u9020",subtitle:"/boot/loader \u914D\u4E0B"},oe.default.createElement("pre",{style:{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New"',fontSize:"0.8rem",padding:"0.6rem 0.8rem",background:"rgba(15,23,42,0.9)",borderRadius:"0.5rem",border:"1px solid rgba(55,65,81,0.9)",overflowX:"auto",marginBottom:"0.8rem"}},String.raw`/boot/loader/
  loader.conf
  entries/
    arch.conf
    arch-fallback.conf
    windows.conf`),oe.default.createElement("ul",{style:{paddingLeft:"1rem",fontSize:"0.85rem"}},oe.default.createElement("li",null,"loader.conf: default / timeout / console-mode \u3092\u8A2D\u5B9A\u3002"),oe.default.createElement("li",null,"entries/*.conf \u304C\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u306B\u306A\u308B\u3002"),oe.default.createElement("li",null,"windows.conf \u306F efi \u884C\u3067 bootmgfw.efi \u3078\u306E\u30D1\u30B9\u3092\u66F8\u304F\u3002")))}function S3(){let e=document.getElementById("dualboot-diagram");e&&!e.dataset.mounted&&(e.dataset.mounted="true",(0,Qg.createRoot)(e).render(oe.default.createElement(Cm,null)));let t={dualboot:Cm,windows:x3,"systemd-menu":b3,"kimberly-combos":OS,"sf6-mozc-investigation":PS};document.querySelectorAll("[data-diagram]").forEach(n=>{let i=n.getAttribute("data-diagram"),s=t[i];s&&n.dataset.mounted!=="true"&&(n.dataset.mounted="true",(0,Qg.createRoot)(n).render(oe.default.createElement(s,null)))})}document.addEventListener("DOMContentLoaded",S3)});M3();})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=bundle.js.map
