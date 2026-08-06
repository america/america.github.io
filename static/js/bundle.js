(()=>{var OL=Object.create;var d1=Object.defineProperty;var BL=Object.getOwnPropertyDescriptor;var FL=Object.getOwnPropertyNames;var zL=Object.getPrototypeOf,VL=Object.prototype.hasOwnProperty;var D=(e,t)=>()=>(e&&(t=e(e=0)),t);var Ji=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var kL=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of FL(t))!VL.call(e,s)&&s!==n&&d1(e,s,{get:()=>t[s],enumerable:!(i=BL(t,s))||i.enumerable});return e};var xe=(e,t,n)=>(n=e!=null?OL(zL(e)):{},kL(t||!e||!e.__esModule?d1(n,"default",{value:e,enumerable:!0}):n,e));var T1=Ji(Ft=>{"use strict";var ry=Symbol.for("react.transitional.element"),GL=Symbol.for("react.portal"),HL=Symbol.for("react.fragment"),WL=Symbol.for("react.strict_mode"),XL=Symbol.for("react.profiler"),qL=Symbol.for("react.consumer"),YL=Symbol.for("react.context"),ZL=Symbol.for("react.forward_ref"),KL=Symbol.for("react.suspense"),jL=Symbol.for("react.memo"),x1=Symbol.for("react.lazy"),JL=Symbol.for("react.activity"),p1=Symbol.iterator;function QL(e){return e===null||typeof e!="object"?null:(e=p1&&e[p1]||e["@@iterator"],typeof e=="function"?e:null)}var v1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_1=Object.assign,b1={};function qo(e,t,n){this.props=e,this.context=t,this.refs=b1,this.updater=n||v1}qo.prototype.isReactComponent={};qo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function S1(){}S1.prototype=qo.prototype;function ay(e,t,n){this.props=e,this.context=t,this.refs=b1,this.updater=n||v1}var oy=ay.prototype=new S1;oy.constructor=ay;_1(oy,qo.prototype);oy.isPureReactComponent=!0;var m1=Array.isArray;function sy(){}var Ne={H:null,A:null,T:null,S:null},M1=Object.prototype.hasOwnProperty;function ly(e,t,n){var i=n.ref;return{$$typeof:ry,type:e,key:t,ref:i!==void 0?i:null,props:n}}function $L(e,t){return ly(e.type,t,e.props)}function cy(e){return typeof e=="object"&&e!==null&&e.$$typeof===ry}function tU(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var g1=/\/+/g;function iy(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tU(""+e.key):t.toString(36)}function eU(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(sy,sy):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Xo(e,t,n,i,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ry:case GL:a=!0;break;case x1:return a=e._init,Xo(a(e._payload),t,n,i,s)}}if(a)return s=s(e),a=i===""?"."+iy(e,0):i,m1(s)?(n="",a!=null&&(n=a.replace(g1,"$&/")+"/"),Xo(s,t,n,"",function(c){return c})):s!=null&&(cy(s)&&(s=$L(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(g1,"$&/")+"/")+a)),t.push(s)),1;a=0;var o=i===""?".":i+":";if(m1(e))for(var l=0;l<e.length;l++)i=e[l],r=o+iy(i,l),a+=Xo(i,t,n,r,s);else if(l=QL(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+iy(i,l++),a+=Xo(i,t,n,r,s);else if(r==="object"){if(typeof e.then=="function")return Xo(eU(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function _h(e,t,n){if(e==null)return e;var i=[],s=0;return Xo(e,i,"","",function(r){return t.call(n,r,s++)}),i}function nU(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var y1=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},iU={map:_h,forEach:function(e,t,n){_h(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _h(e,function(){t++}),t},toArray:function(e){return _h(e,function(t){return t})||[]},only:function(e){if(!cy(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ft.Activity=JL;Ft.Children=iU;Ft.Component=qo;Ft.Fragment=HL;Ft.Profiler=XL;Ft.PureComponent=ay;Ft.StrictMode=WL;Ft.Suspense=KL;Ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ne;Ft.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ne.H.useMemoCache(e)}};Ft.cache=function(e){return function(){return e.apply(null,arguments)}};Ft.cacheSignal=function(){return null};Ft.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=_1({},e.props),s=e.key;if(t!=null)for(r in t.key!==void 0&&(s=""+t.key),t)!M1.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(i[r]=t[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var a=Array(r),o=0;o<r;o++)a[o]=arguments[o+2];i.children=a}return ly(e.type,s,i)};Ft.createContext=function(e){return e={$$typeof:YL,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:qL,_context:e},e};Ft.createElement=function(e,t,n){var i,s={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)M1.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)s[i]===void 0&&(s[i]=a[i]);return ly(e,r,s)};Ft.createRef=function(){return{current:null}};Ft.forwardRef=function(e){return{$$typeof:ZL,render:e}};Ft.isValidElement=cy;Ft.lazy=function(e){return{$$typeof:x1,_payload:{_status:-1,_result:e},_init:nU}};Ft.memo=function(e,t){return{$$typeof:jL,type:e,compare:t===void 0?null:t}};Ft.startTransition=function(e){var t=Ne.T,n={};Ne.T=n;try{var i=e(),s=Ne.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(sy,y1)}catch(r){y1(r)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ne.T=t}};Ft.unstable_useCacheRefresh=function(){return Ne.H.useCacheRefresh()};Ft.use=function(e){return Ne.H.use(e)};Ft.useActionState=function(e,t,n){return Ne.H.useActionState(e,t,n)};Ft.useCallback=function(e,t){return Ne.H.useCallback(e,t)};Ft.useContext=function(e){return Ne.H.useContext(e)};Ft.useDebugValue=function(){};Ft.useDeferredValue=function(e,t){return Ne.H.useDeferredValue(e,t)};Ft.useEffect=function(e,t){return Ne.H.useEffect(e,t)};Ft.useEffectEvent=function(e){return Ne.H.useEffectEvent(e)};Ft.useId=function(){return Ne.H.useId()};Ft.useImperativeHandle=function(e,t,n){return Ne.H.useImperativeHandle(e,t,n)};Ft.useInsertionEffect=function(e,t){return Ne.H.useInsertionEffect(e,t)};Ft.useLayoutEffect=function(e,t){return Ne.H.useLayoutEffect(e,t)};Ft.useMemo=function(e,t){return Ne.H.useMemo(e,t)};Ft.useOptimistic=function(e,t){return Ne.H.useOptimistic(e,t)};Ft.useReducer=function(e,t,n){return Ne.H.useReducer(e,t,n)};Ft.useRef=function(e){return Ne.H.useRef(e)};Ft.useState=function(e){return Ne.H.useState(e)};Ft.useSyncExternalStore=function(e,t,n){return Ne.H.useSyncExternalStore(e,t,n)};Ft.useTransition=function(){return Ne.H.useTransition()};Ft.version="19.2.0"});var Te=Ji((e6,E1)=>{"use strict";E1.exports=T1()});var I1=Ji(Be=>{"use strict";function dy(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<bh(s,t))e[i]=t,e[n]=s,n=i;else break t}}function gs(e){return e.length===0?null:e[0]}function Mh(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,r=s>>>1;i<r;){var a=2*(i+1)-1,o=e[a],l=a+1,c=e[l];if(0>bh(o,n))l<s&&0>bh(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[a]=n,i=a);else if(l<s&&0>bh(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function bh(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Be.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(A1=performance,Be.unstable_now=function(){return A1.now()}):(uy=Date,w1=uy.now(),Be.unstable_now=function(){return uy.now()-w1});var A1,uy,w1,Gs=[],Dr=[],sU=1,Ni=null,Fn=3,py=!1,Vc=!1,kc=!1,my=!1,D1=typeof setTimeout=="function"?setTimeout:null,P1=typeof clearTimeout=="function"?clearTimeout:null,C1=typeof setImmediate<"u"?setImmediate:null;function Sh(e){for(var t=gs(Dr);t!==null;){if(t.callback===null)Mh(Dr);else if(t.startTime<=e)Mh(Dr),t.sortIndex=t.expirationTime,dy(Gs,t);else break;t=gs(Dr)}}function gy(e){if(kc=!1,Sh(e),!Vc)if(gs(Gs)!==null)Vc=!0,Zo||(Zo=!0,Yo());else{var t=gs(Dr);t!==null&&yy(gy,t.startTime-e)}}var Zo=!1,Gc=-1,N1=5,L1=-1;function U1(){return my?!0:!(Be.unstable_now()-L1<N1)}function fy(){if(my=!1,Zo){var e=Be.unstable_now();L1=e;var t=!0;try{t:{Vc=!1,kc&&(kc=!1,P1(Gc),Gc=-1),py=!0;var n=Fn;try{e:{for(Sh(e),Ni=gs(Gs);Ni!==null&&!(Ni.expirationTime>e&&U1());){var i=Ni.callback;if(typeof i=="function"){Ni.callback=null,Fn=Ni.priorityLevel;var s=i(Ni.expirationTime<=e);if(e=Be.unstable_now(),typeof s=="function"){Ni.callback=s,Sh(e),t=!0;break e}Ni===gs(Gs)&&Mh(Gs),Sh(e)}else Mh(Gs);Ni=gs(Gs)}if(Ni!==null)t=!0;else{var r=gs(Dr);r!==null&&yy(gy,r.startTime-e),t=!1}}break t}finally{Ni=null,Fn=n,py=!1}t=void 0}}finally{t?Yo():Zo=!1}}}var Yo;typeof C1=="function"?Yo=function(){C1(fy)}:typeof MessageChannel<"u"?(hy=new MessageChannel,R1=hy.port2,hy.port1.onmessage=fy,Yo=function(){R1.postMessage(null)}):Yo=function(){D1(fy,0)};var hy,R1;function yy(e,t){Gc=D1(function(){e(Be.unstable_now())},t)}Be.unstable_IdlePriority=5;Be.unstable_ImmediatePriority=1;Be.unstable_LowPriority=4;Be.unstable_NormalPriority=3;Be.unstable_Profiling=null;Be.unstable_UserBlockingPriority=2;Be.unstable_cancelCallback=function(e){e.callback=null};Be.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N1=0<e?Math.floor(1e3/e):5};Be.unstable_getCurrentPriorityLevel=function(){return Fn};Be.unstable_next=function(e){switch(Fn){case 1:case 2:case 3:var t=3;break;default:t=Fn}var n=Fn;Fn=t;try{return e()}finally{Fn=n}};Be.unstable_requestPaint=function(){my=!0};Be.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Fn;Fn=e;try{return t()}finally{Fn=n}};Be.unstable_scheduleCallback=function(e,t,n){var i=Be.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:sU++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,dy(Dr,e),gs(Gs)===null&&e===gs(Dr)&&(kc?(P1(Gc),Gc=-1):kc=!0,yy(gy,n-i))):(e.sortIndex=s,dy(Gs,e),Vc||py||(Vc=!0,Zo||(Zo=!0,Yo()))),e};Be.unstable_shouldYield=U1;Be.unstable_wrapCallback=function(e){var t=Fn;return function(){var n=Fn;Fn=t;try{return e.apply(this,arguments)}finally{Fn=n}}}});var B1=Ji((i6,O1)=>{"use strict";O1.exports=I1()});var z1=Ji(Xn=>{"use strict";var rU=Te();function F1(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Pr(){}var Wn={d:{f:Pr,r:function(){throw Error(F1(522))},D:Pr,C:Pr,L:Pr,m:Pr,X:Pr,S:Pr,M:Pr},p:0,findDOMNode:null},aU=Symbol.for("react.portal");function oU(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:aU,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Hc=rU.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Th(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Wn;Xn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(F1(299));return oU(e,t,null,n)};Xn.flushSync=function(e){var t=Hc.T,n=Wn.p;try{if(Hc.T=null,Wn.p=2,e)return e()}finally{Hc.T=t,Wn.p=n,Wn.d.f()}};Xn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Wn.d.C(e,t))};Xn.prefetchDNS=function(e){typeof e=="string"&&Wn.d.D(e)};Xn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Th(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Wn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:r}):n==="script"&&Wn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Xn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Th(t.as,t.crossOrigin);Wn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Wn.d.M(e)};Xn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Th(n,t.crossOrigin);Wn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Xn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Th(t.as,t.crossOrigin);Wn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Wn.d.m(e)};Xn.requestFormReset=function(e){Wn.d.r(e)};Xn.unstable_batchedUpdates=function(e,t){return e(t)};Xn.useFormState=function(e,t,n){return Hc.H.useFormState(e,t,n)};Xn.useFormStatus=function(){return Hc.H.useHostTransitionStatus()};Xn.version="19.2.0"});var G1=Ji((r6,k1)=>{"use strict";function V1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V1)}catch(e){console.error(e)}}V1(),k1.exports=z1()});var tC=Ji(Kd=>{"use strict";var gn=B1(),pE=Te(),lU=G1();function $(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function mE(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ru(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gE(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yE(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function H1(e){if(Ru(e)!==e)throw Error($(188))}function cU(e){var t=e.alternate;if(!t){if(t=Ru(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return H1(s),e;if(r===i)return H1(s),t;r=r.sibling}throw Error($(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a)throw Error($(189))}}if(n.alternate!==i)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function xE(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=xE(e),t!==null)return t;e=e.sibling}return null}var Ie=Object.assign,uU=Symbol.for("react.element"),Eh=Symbol.for("react.transitional.element"),Jc=Symbol.for("react.portal"),tl=Symbol.for("react.fragment"),vE=Symbol.for("react.strict_mode"),Jy=Symbol.for("react.profiler"),_E=Symbol.for("react.consumer"),js=Symbol.for("react.context"),qx=Symbol.for("react.forward_ref"),Qy=Symbol.for("react.suspense"),$y=Symbol.for("react.suspense_list"),Yx=Symbol.for("react.memo"),Nr=Symbol.for("react.lazy");Symbol.for("react.scope");var tx=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var fU=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var W1=Symbol.iterator;function Wc(e){return e===null||typeof e!="object"?null:(e=W1&&e[W1]||e["@@iterator"],typeof e=="function"?e:null)}var hU=Symbol.for("react.client.reference");function ex(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===hU?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tl:return"Fragment";case Jy:return"Profiler";case vE:return"StrictMode";case Qy:return"Suspense";case $y:return"SuspenseList";case tx:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Jc:return"Portal";case js:return e.displayName||"Context";case _E:return(e._context.displayName||"Context")+".Consumer";case qx:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yx:return t=e.displayName||null,t!==null?t:ex(e.type)||"Memo";case Nr:t=e._payload,e=e._init;try{return ex(e(t))}catch{}}return null}var Qc=Array.isArray,Ot=pE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=lU.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qa={pending:!1,data:null,method:null,action:null},nx=[],el=-1;function bs(e){return{current:e}}function An(e){0>el||(e.current=nx[el],nx[el]=null,el--)}function Re(e,t){el++,nx[el]=e.current,e.current=t}var _s=bs(null),mu=bs(null),Hr=bs(null),sd=bs(null);function rd(e,t){switch(Re(Hr,t),Re(mu,e),Re(_s,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?JT(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=JT(t),e=Vw(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}An(_s),Re(_s,e)}function vl(){An(_s),An(mu),An(Hr)}function ix(e){e.memoizedState!==null&&Re(sd,e);var t=_s.current,n=Vw(t,e.type);t!==n&&(Re(mu,e),Re(_s,n))}function ad(e){mu.current===e&&(An(_s),An(mu)),sd.current===e&&(An(sd),Au._currentValue=qa)}var xy,X1;function Ga(e){if(xy===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xy=t&&t[1]||"",X1=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xy+e+X1}var vy=!1;function _y(e,t){if(!e||vy)return"";vy=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var f=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){f=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){f=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],o=r[1];if(a&&o){var l=a.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{vy=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ga(n):""}function dU(e,t){switch(e.tag){case 26:case 27:case 5:return Ga(e.type);case 16:return Ga("Lazy");case 13:return e.child!==t&&t!==null?Ga("Suspense Fallback"):Ga("Suspense");case 19:return Ga("SuspenseList");case 0:case 15:return _y(e.type,!1);case 11:return _y(e.type.render,!1);case 1:return _y(e.type,!0);case 31:return Ga("Activity");default:return""}}function q1(e){try{var t="",n=null;do t+=dU(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var sx=Object.prototype.hasOwnProperty,Zx=gn.unstable_scheduleCallback,by=gn.unstable_cancelCallback,pU=gn.unstable_shouldYield,mU=gn.unstable_requestPaint,mi=gn.unstable_now,gU=gn.unstable_getCurrentPriorityLevel,bE=gn.unstable_ImmediatePriority,SE=gn.unstable_UserBlockingPriority,od=gn.unstable_NormalPriority,yU=gn.unstable_LowPriority,ME=gn.unstable_IdlePriority,xU=gn.log,vU=gn.unstable_setDisableYieldValue,Du=null,gi=null;function Fr(e){if(typeof xU=="function"&&vU(e),gi&&typeof gi.setStrictMode=="function")try{gi.setStrictMode(Du,e)}catch{}}var yi=Math.clz32?Math.clz32:SU,_U=Math.log,bU=Math.LN2;function SU(e){return e>>>=0,e===0?32:31-(_U(e)/bU|0)|0}var Ah=256,wh=262144,Ch=4194304;function Ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ld(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,r=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?s=Ha(i):(a&=o,a!==0?s=Ha(a):n||(n=o&~e,n!==0&&(s=Ha(n))))):(o=i&~r,o!==0?s=Ha(o):a!==0?s=Ha(a):n||(n=i&~e,n!==0&&(s=Ha(n)))),s===0?0:t!==0&&t!==s&&(t&r)===0&&(r=s&-s,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:s}function Pu(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function MU(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TE(){var e=Ch;return Ch<<=1,(Ch&62914560)===0&&(Ch=4194304),e}function Sy(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nu(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function TU(e,t,n,i,s,r){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=a&~n;0<n;){var u=31-yi(n),h=1<<u;o[u]=0,l[u]=-1;var f=c[u];if(f!==null)for(c[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&EE(e,i,0),r!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=r&~(a&~t))}function EE(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-yi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function AE(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-yi(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function wE(e,t){var n=t&-t;return n=(n&42)!==0?1:Kx(n),(n&(e.suspendedLanes|t))!==0?0:n}function Kx(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jx(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function CE(){var e=le.p;return e!==0?e:(e=window.event,e===void 0?32:Jw(e.type))}function Y1(e,t){var n=le.p;try{return le.p=e,t()}finally{le.p=n}}var na=Math.random().toString(36).slice(2),Nn="__reactFiber$"+na,ii="__reactProps$"+na,Dl="__reactContainer$"+na,rx="__reactEvents$"+na,EU="__reactListeners$"+na,AU="__reactHandles$"+na,Z1="__reactResources$"+na,Lu="__reactMarker$"+na;function Jx(e){delete e[Nn],delete e[ii],delete e[rx],delete e[EU],delete e[AU]}function nl(e){var t=e[Nn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dl]||n[Nn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nE(e);e!==null;){if(n=e[Nn])return n;e=nE(e)}return t}e=n,n=e.parentNode}return null}function Pl(e){if(e=e[Nn]||e[Dl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $c(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error($(33))}function hl(e){var t=e[Z1];return t||(t=e[Z1]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function En(e){e[Lu]=!0}var RE=new Set,DE={};function no(e,t){_l(e,t),_l(e+"Capture",t)}function _l(e,t){for(DE[e]=t,e=0;e<t.length;e++)RE.add(t[e])}var wU=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),K1={},j1={};function CU(e){return sx.call(j1,e)?!0:sx.call(K1,e)?!1:wU.test(e)?j1[e]=!0:(K1[e]=!0,!1)}function Hh(e,t,n){if(CU(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Rh(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Hs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Ui(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function PE(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function RU(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){n=""+a,r.call(this,a)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ax(e){if(!e._valueTracker){var t=PE(e)?"checked":"value";e._valueTracker=RU(e,t,""+e[t])}}function NE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=PE(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ld(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var DU=/[\n"\\]/g;function Bi(e){return e.replace(DU,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ox(e,t,n,i,s,r,a,o){e.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.type=a:e.removeAttribute("type"),t!=null?a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ui(t)):e.value!==""+Ui(t)&&(e.value=""+Ui(t)):a!=="submit"&&a!=="reset"||e.removeAttribute("value"),t!=null?lx(e,a,Ui(t)):n!=null?lx(e,a,Ui(n)):i!=null&&e.removeAttribute("value"),s==null&&r!=null&&(e.defaultChecked=!!r),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Ui(o):e.removeAttribute("name")}function LE(e,t,n,i,s,r,a,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){ax(e);return}n=n!=null?""+Ui(n):"",t=t!=null?""+Ui(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.name=a),ax(e)}function lx(e,t,n){t==="number"&&ld(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function dl(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ui(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function UE(e,t,n){if(t!=null&&(t=""+Ui(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ui(n):""}function IE(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error($(92));if(Qc(i)){if(1<i.length)throw Error($(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ui(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),ax(e)}function bl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var PU=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function J1(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||PU.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function OE(e,t,n){if(t!=null&&typeof t!="object")throw Error($(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&J1(e,s,i)}else for(var r in t)t.hasOwnProperty(r)&&J1(e,r,t[r])}function Qx(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var NU=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),LU=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wh(e){return LU.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Js(){}var cx=null;function $x(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,pl=null;function Q1(e){var t=Pl(e);if(t&&(e=t.stateNode)){var n=e[ii]||null;t:switch(e=t.stateNode,t.type){case"input":if(ox(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Bi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ii]||null;if(!s)throw Error($(90));ox(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&NE(i)}break t;case"textarea":UE(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&dl(e,!!n.multiple,t,!1)}}}var My=!1;function BE(e,t,n){if(My)return e(t,n);My=!0;try{var i=e(t);return i}finally{if(My=!1,(il!==null||pl!==null)&&(Xd(),il&&(t=il,e=pl,pl=il=null,Q1(t),e)))for(t=0;t<e.length;t++)Q1(e[t])}}function gu(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ii]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ux=!1;if(nr)try{Ko={},Object.defineProperty(Ko,"passive",{get:function(){ux=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{ux=!1}var Ko,zr=null,tv=null,Xh=null;function FE(){if(Xh)return Xh;var e,t=tv,n=t.length,i,s="value"in zr?zr.value:zr.textContent,r=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===s[r-i];i++);return Xh=s.slice(e,1<i?1-i:void 0)}function qh(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dh(){return!0}function $1(){return!1}function si(e){function t(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Dh:$1,this.isPropagationStopped=$1,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Dh)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Dh)},persist:function(){},isPersistent:Dh}),t}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ud=si(io),Uu=Ie({},io,{view:0,detail:0}),UU=si(Uu),Ty,Ey,Xc,Id=Ie({},Uu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ev,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xc&&(Xc&&e.type==="mousemove"?(Ty=e.screenX-Xc.screenX,Ey=e.screenY-Xc.screenY):Ey=Ty=0,Xc=e),Ty)},movementY:function(e){return"movementY"in e?e.movementY:Ey}}),tT=si(Id),IU=Ie({},Id,{dataTransfer:0}),OU=si(IU),BU=Ie({},Uu,{relatedTarget:0}),Ay=si(BU),FU=Ie({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),zU=si(FU),VU=Ie({},io,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kU=si(VU),GU=Ie({},io,{data:0}),eT=si(GU),HU={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WU={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XU={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qU(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=XU[e])?!!t[e]:!1}function ev(){return qU}var YU=Ie({},Uu,{key:function(e){if(e.key){var t=HU[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qh(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?WU[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ev,charCode:function(e){return e.type==="keypress"?qh(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qh(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ZU=si(YU),KU=Ie({},Id,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nT=si(KU),jU=Ie({},Uu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ev}),JU=si(jU),QU=Ie({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),$U=si(QU),tI=Ie({},Id,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eI=si(tI),nI=Ie({},io,{newState:0,oldState:0}),iI=si(nI),sI=[9,13,27,32],nv=nr&&"CompositionEvent"in window,nu=null;nr&&"documentMode"in document&&(nu=document.documentMode);var rI=nr&&"TextEvent"in window&&!nu,zE=nr&&(!nv||nu&&8<nu&&11>=nu),iT=" ",sT=!1;function VE(e,t){switch(e){case"keyup":return sI.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kE(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sl=!1;function aI(e,t){switch(e){case"compositionend":return kE(t);case"keypress":return t.which!==32?null:(sT=!0,iT);case"textInput":return e=t.data,e===iT&&sT?null:e;default:return null}}function oI(e,t){if(sl)return e==="compositionend"||!nv&&VE(e,t)?(e=FE(),Xh=tv=zr=null,sl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zE&&t.locale!=="ko"?null:t.data;default:return null}}var lI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rT(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lI[e.type]:t==="textarea"}function GE(e,t,n,i){il?pl?pl.push(i):pl=[i]:il=i,t=Ad(t,"onChange"),0<t.length&&(n=new Ud("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var iu=null,yu=null;function cI(e){Bw(e,0)}function Od(e){var t=$c(e);if(NE(t))return e}function aT(e,t){if(e==="change")return t}var HE=!1;nr&&(nr?(Nh="oninput"in document,Nh||(wy=document.createElement("div"),wy.setAttribute("oninput","return;"),Nh=typeof wy.oninput=="function"),Ph=Nh):Ph=!1,HE=Ph&&(!document.documentMode||9<document.documentMode));var Ph,Nh,wy;function oT(){iu&&(iu.detachEvent("onpropertychange",WE),yu=iu=null)}function WE(e){if(e.propertyName==="value"&&Od(yu)){var t=[];GE(t,yu,e,$x(e)),BE(cI,t)}}function uI(e,t,n){e==="focusin"?(oT(),iu=t,yu=n,iu.attachEvent("onpropertychange",WE)):e==="focusout"&&oT()}function fI(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Od(yu)}function hI(e,t){if(e==="click")return Od(t)}function dI(e,t){if(e==="input"||e==="change")return Od(t)}function pI(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vi=typeof Object.is=="function"?Object.is:pI;function xu(e,t){if(vi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!sx.call(t,s)||!vi(e[s],t[s]))return!1}return!0}function lT(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cT(e,t){var n=lT(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=lT(n)}}function XE(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?XE(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qE(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ld(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ld(e.document)}return t}function iv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mI=nr&&"documentMode"in document&&11>=document.documentMode,rl=null,fx=null,su=null,hx=!1;function uT(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hx||rl==null||rl!==ld(i)||(i=rl,"selectionStart"in i&&iv(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),su&&xu(su,i)||(su=i,i=Ad(fx,"onSelect"),0<i.length&&(t=new Ud("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=rl)))}function ka(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var al={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},Cy={},YE={};nr&&(YE=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function so(e){if(Cy[e])return Cy[e];if(!al[e])return e;var t=al[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in YE)return Cy[e]=t[n];return e}var ZE=so("animationend"),KE=so("animationiteration"),jE=so("animationstart"),gI=so("transitionrun"),yI=so("transitionstart"),xI=so("transitioncancel"),JE=so("transitionend"),QE=new Map,dx="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dx.push("scrollEnd");function ts(e,t){QE.set(e,t),no(t,[e])}var cd=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Li=[],ol=0,sv=0;function Bd(){for(var e=ol,t=sv=ol=0;t<e;){var n=Li[t];Li[t++]=null;var i=Li[t];Li[t++]=null;var s=Li[t];Li[t++]=null;var r=Li[t];if(Li[t++]=null,i!==null&&s!==null){var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}r!==0&&$E(n,s,r)}}function Fd(e,t,n,i){Li[ol++]=e,Li[ol++]=t,Li[ol++]=n,Li[ol++]=i,sv|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function rv(e,t,n,i){return Fd(e,t,n,i),ud(e)}function ro(e,t){return Fd(e,null,null,t),ud(e)}function $E(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(s=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,s&&t!==null&&(s=31-yi(n),e=r.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),r):null}function ud(e){if(50<du)throw du=0,Ux=null,Error($(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ll={};function vI(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,t,n,i){return new vI(e,t,n,i)}function av(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $s(e,t){var n=e.alternate;return n===null?(n=di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function tA(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yh(e,t,n,i,s,r){var a=0;if(i=e,typeof e=="function")av(e)&&(a=1);else if(typeof e=="string")a=SO(e,n,_s.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case tx:return e=di(31,n,t,s),e.elementType=tx,e.lanes=r,e;case tl:return Ya(n.children,s,r,t);case vE:a=8,s|=24;break;case Jy:return e=di(12,n,t,s|2),e.elementType=Jy,e.lanes=r,e;case Qy:return e=di(13,n,t,s),e.elementType=Qy,e.lanes=r,e;case $y:return e=di(19,n,t,s),e.elementType=$y,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case js:a=10;break t;case _E:a=9;break t;case qx:a=11;break t;case Yx:a=14;break t;case Nr:a=16,i=null;break t}a=29,n=Error($(130,e===null?"null":typeof e,"")),i=null}return t=di(a,n,t,s),t.elementType=e,t.type=i,t.lanes=r,t}function Ya(e,t,n,i){return e=di(7,e,i,t),e.lanes=n,e}function Ry(e,t,n){return e=di(6,e,null,t),e.lanes=n,e}function eA(e){var t=di(18,null,null,0);return t.stateNode=e,t}function Dy(e,t,n){return t=di(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var fT=new WeakMap;function Fi(e,t){if(typeof e=="object"&&e!==null){var n=fT.get(e);return n!==void 0?n:(t={value:e,source:t,stack:q1(t)},fT.set(e,t),t)}return{value:e,source:t,stack:q1(t)}}var cl=[],ul=0,fd=null,vu=0,Ii=[],Oi=0,Qr=null,ys=1,xs="";function Zs(e,t){cl[ul++]=vu,cl[ul++]=fd,fd=e,vu=t}function nA(e,t,n){Ii[Oi++]=ys,Ii[Oi++]=xs,Ii[Oi++]=Qr,Qr=e;var i=ys;e=xs;var s=32-yi(i)-1;i&=~(1<<s),n+=1;var r=32-yi(t)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,ys=1<<32-yi(t)+s|n<<s|i,xs=r+e}else ys=1<<r|n<<s|i,xs=e}function ov(e){e.return!==null&&(Zs(e,1),nA(e,1,0))}function lv(e){for(;e===fd;)fd=cl[--ul],cl[ul]=null,vu=cl[--ul],cl[ul]=null;for(;e===Qr;)Qr=Ii[--Oi],Ii[Oi]=null,xs=Ii[--Oi],Ii[Oi]=null,ys=Ii[--Oi],Ii[Oi]=null}function iA(e,t){Ii[Oi++]=ys,Ii[Oi++]=xs,Ii[Oi++]=Qr,ys=t.id,xs=t.overflow,Qr=e}var Ln=null,Ue=null,te=!1,Wr=null,zi=!1,px=Error($(519));function $r(e){var t=Error($(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _u(Fi(t,e)),px}function hT(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Nn]=e,t[ii]=i,n){case"dialog":Zt("cancel",t),Zt("close",t);break;case"iframe":case"object":case"embed":Zt("load",t);break;case"video":case"audio":for(n=0;n<Tu.length;n++)Zt(Tu[n],t);break;case"source":Zt("error",t);break;case"img":case"image":case"link":Zt("error",t),Zt("load",t);break;case"details":Zt("toggle",t);break;case"input":Zt("invalid",t),LE(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Zt("invalid",t);break;case"textarea":Zt("invalid",t),IE(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||zw(t.textContent,n)?(i.popover!=null&&(Zt("beforetoggle",t),Zt("toggle",t)),i.onScroll!=null&&Zt("scroll",t),i.onScrollEnd!=null&&Zt("scrollend",t),i.onClick!=null&&(t.onclick=Js),t=!0):t=!1,t||$r(e,!0)}function dT(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Ln=Ln.return}}function jo(e){if(e!==Ln)return!1;if(!te)return dT(e),te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||zx(e.type,e.memoizedProps)),n=!n),n&&Ue&&$r(e),dT(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));Ue=eE(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));Ue=eE(e)}else t===27?(t=Ue,ia(e.type)?(e=Hx,Hx=null,Ue=e):Ue=t):Ue=Ln?ki(e.stateNode.nextSibling):null;return!0}function Ja(){Ue=Ln=null,te=!1}function Py(){var e=Wr;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),Wr=null),e}function _u(e){Wr===null?Wr=[e]:Wr.push(e)}var mx=bs(null),ao=null,Qs=null;function Ur(e,t,n){Re(mx,t._currentValue),t._currentValue=n}function tr(e){e._currentValue=mx.current,An(mx)}function gx(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function yx(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var r=s.dependencies;if(r!==null){var a=s.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),gx(r.return,n,e),i||(a=null);break t}r=o.next}}else if(s.tag===18){if(a=s.return,a===null)throw Error($(341));a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),gx(a,n,e),a=null}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}}function Nl(e,t,n,i){e=null;for(var s=t,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var a=s.alternate;if(a===null)throw Error($(387));if(a=a.memoizedProps,a!==null){var o=s.type;vi(s.pendingProps.value,a.value)||(e!==null?e.push(o):e=[o])}}else if(s===sd.current){if(a=s.alternate,a===null)throw Error($(387));a.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Au):e=[Au])}s=s.return}e!==null&&yx(t,e,n,i),t.flags|=262144}function hd(e){for(e=e.firstContext;e!==null;){if(!vi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qa(e){ao=e,Qs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return sA(ao,e)}function Lh(e,t){return ao===null&&Qa(e),sA(e,t)}function sA(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Qs===null){if(e===null)throw Error($(308));Qs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qs=Qs.next=t;return n}var _I=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},bI=gn.unstable_scheduleCallback,SI=gn.unstable_NormalPriority,un={$$typeof:js,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cv(){return{controller:new _I,data:new Map,refCount:0}}function Iu(e){e.refCount--,e.refCount===0&&bI(SI,function(){e.controller.abort()})}var ru=null,xx=0,Sl=0,ml=null;function MI(e,t){if(ru===null){var n=ru=[];xx=0,Sl=Uv(),ml={status:"pending",value:void 0,then:function(i){n.push(i)}}}return xx++,t.then(pT,pT),t}function pT(){if(--xx===0&&ru!==null){ml!==null&&(ml.status="fulfilled");var e=ru;ru=null,Sl=0,ml=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function TI(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var mT=Ot.S;Ot.S=function(e,t){xw=mi(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&MI(e,t),mT!==null&&mT(e,t)};var Za=bs(null);function uv(){var e=Za.current;return e!==null?e:Ee.pooledCache}function Zh(e,t){t===null?Re(Za,Za.current):Re(Za,t.pool)}function rA(){var e=uv();return e===null?null:{parent:un._currentValue,pool:e}}var Ll=Error($(460)),fv=Error($(474)),zd=Error($(542)),dd={then:function(){}};function gT(e){return e=e.status,e==="fulfilled"||e==="rejected"}function aA(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Js,Js),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xT(e),e;default:if(typeof t.status=="string")t.then(Js,Js);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error($(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xT(e),e}throw Ka=t,Ll}}function Wa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ka=n,Ll):n}}var Ka=null;function yT(){if(Ka===null)throw Error($(459));var e=Ka;return Ka=null,e}function xT(e){if(e===Ll||e===zd)throw Error($(483))}var gl=null,bu=0;function Uh(e){var t=bu;return bu+=1,gl===null&&(gl=[]),aA(gl,e,t)}function qc(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ih(e,t){throw t.$$typeof===uU?Error($(525)):(e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function oA(e){function t(d,y){if(e){var _=d.deletions;_===null?(d.deletions=[y],d.flags|=16):_.push(y)}}function n(d,y){if(!e)return null;for(;y!==null;)t(d,y),y=y.sibling;return null}function i(d){for(var y=new Map;d!==null;)d.key!==null?y.set(d.key,d):y.set(d.index,d),d=d.sibling;return y}function s(d,y){return d=$s(d,y),d.index=0,d.sibling=null,d}function r(d,y,_){return d.index=_,e?(_=d.alternate,_!==null?(_=_.index,_<y?(d.flags|=67108866,y):_):(d.flags|=67108866,y)):(d.flags|=1048576,y)}function a(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function o(d,y,_,x){return y===null||y.tag!==6?(y=Ry(_,d.mode,x),y.return=d,y):(y=s(y,_),y.return=d,y)}function l(d,y,_,x){var M=_.type;return M===tl?u(d,y,_.props.children,x,_.key):y!==null&&(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Nr&&Wa(M)===y.type)?(y=s(y,_.props),qc(y,_),y.return=d,y):(y=Yh(_.type,_.key,_.props,null,d.mode,x),qc(y,_),y.return=d,y)}function c(d,y,_,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=Dy(_,d.mode,x),y.return=d,y):(y=s(y,_.children||[]),y.return=d,y)}function u(d,y,_,x,M){return y===null||y.tag!==7?(y=Ya(_,d.mode,x,M),y.return=d,y):(y=s(y,_),y.return=d,y)}function h(d,y,_){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Ry(""+y,d.mode,_),y.return=d,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Eh:return _=Yh(y.type,y.key,y.props,null,d.mode,_),qc(_,y),_.return=d,_;case Jc:return y=Dy(y,d.mode,_),y.return=d,y;case Nr:return y=Wa(y),h(d,y,_)}if(Qc(y)||Wc(y))return y=Ya(y,d.mode,_,null),y.return=d,y;if(typeof y.then=="function")return h(d,Uh(y),_);if(y.$$typeof===js)return h(d,Lh(d,y),_);Ih(d,y)}return null}function f(d,y,_,x){var M=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return M!==null?null:o(d,y,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Eh:return _.key===M?l(d,y,_,x):null;case Jc:return _.key===M?c(d,y,_,x):null;case Nr:return _=Wa(_),f(d,y,_,x)}if(Qc(_)||Wc(_))return M!==null?null:u(d,y,_,x,null);if(typeof _.then=="function")return f(d,y,Uh(_),x);if(_.$$typeof===js)return f(d,y,Lh(d,_),x);Ih(d,_)}return null}function p(d,y,_,x,M){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return d=d.get(_)||null,o(y,d,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Eh:return d=d.get(x.key===null?_:x.key)||null,l(y,d,x,M);case Jc:return d=d.get(x.key===null?_:x.key)||null,c(y,d,x,M);case Nr:return x=Wa(x),p(d,y,_,x,M)}if(Qc(x)||Wc(x))return d=d.get(_)||null,u(y,d,x,M,null);if(typeof x.then=="function")return p(d,y,_,Uh(x),M);if(x.$$typeof===js)return p(d,y,_,Lh(y,x),M);Ih(y,x)}return null}function m(d,y,_,x){for(var M=null,T=null,w=y,v=y=0,A=null;w!==null&&v<_.length;v++){w.index>v?(A=w,w=null):A=w.sibling;var C=f(d,w,_[v],x);if(C===null){w===null&&(w=A);break}e&&w&&C.alternate===null&&t(d,w),y=r(C,y,v),T===null?M=C:T.sibling=C,T=C,w=A}if(v===_.length)return n(d,w),te&&Zs(d,v),M;if(w===null){for(;v<_.length;v++)w=h(d,_[v],x),w!==null&&(y=r(w,y,v),T===null?M=w:T.sibling=w,T=w);return te&&Zs(d,v),M}for(w=i(w);v<_.length;v++)A=p(w,d,v,_[v],x),A!==null&&(e&&A.alternate!==null&&w.delete(A.key===null?v:A.key),y=r(A,y,v),T===null?M=A:T.sibling=A,T=A);return e&&w.forEach(function(P){return t(d,P)}),te&&Zs(d,v),M}function b(d,y,_,x){if(_==null)throw Error($(151));for(var M=null,T=null,w=y,v=y=0,A=null,C=_.next();w!==null&&!C.done;v++,C=_.next()){w.index>v?(A=w,w=null):A=w.sibling;var P=f(d,w,C.value,x);if(P===null){w===null&&(w=A);break}e&&w&&P.alternate===null&&t(d,w),y=r(P,y,v),T===null?M=P:T.sibling=P,T=P,w=A}if(C.done)return n(d,w),te&&Zs(d,v),M;if(w===null){for(;!C.done;v++,C=_.next())C=h(d,C.value,x),C!==null&&(y=r(C,y,v),T===null?M=C:T.sibling=C,T=C);return te&&Zs(d,v),M}for(w=i(w);!C.done;v++,C=_.next())C=p(w,d,v,C.value,x),C!==null&&(e&&C.alternate!==null&&w.delete(C.key===null?v:C.key),y=r(C,y,v),T===null?M=C:T.sibling=C,T=C);return e&&w.forEach(function(L){return t(d,L)}),te&&Zs(d,v),M}function g(d,y,_,x){if(typeof _=="object"&&_!==null&&_.type===tl&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Eh:t:{for(var M=_.key;y!==null;){if(y.key===M){if(M=_.type,M===tl){if(y.tag===7){n(d,y.sibling),x=s(y,_.props.children),x.return=d,d=x;break t}}else if(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Nr&&Wa(M)===y.type){n(d,y.sibling),x=s(y,_.props),qc(x,_),x.return=d,d=x;break t}n(d,y);break}else t(d,y);y=y.sibling}_.type===tl?(x=Ya(_.props.children,d.mode,x,_.key),x.return=d,d=x):(x=Yh(_.type,_.key,_.props,null,d.mode,x),qc(x,_),x.return=d,d=x)}return a(d);case Jc:t:{for(M=_.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(d,y.sibling),x=s(y,_.children||[]),x.return=d,d=x;break t}else{n(d,y);break}else t(d,y);y=y.sibling}x=Dy(_,d.mode,x),x.return=d,d=x}return a(d);case Nr:return _=Wa(_),g(d,y,_,x)}if(Qc(_))return m(d,y,_,x);if(Wc(_)){if(M=Wc(_),typeof M!="function")throw Error($(150));return _=M.call(_),b(d,y,_,x)}if(typeof _.then=="function")return g(d,y,Uh(_),x);if(_.$$typeof===js)return g(d,y,Lh(d,_),x);Ih(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,y!==null&&y.tag===6?(n(d,y.sibling),x=s(y,_),x.return=d,d=x):(n(d,y),x=Ry(_,d.mode,x),x.return=d,d=x),a(d)):n(d,y)}return function(d,y,_,x){try{bu=0;var M=g(d,y,_,x);return gl=null,M}catch(w){if(w===Ll||w===zd)throw w;var T=di(29,w,null,d.mode);return T.lanes=x,T.return=d,T}finally{}}}var $a=oA(!0),lA=oA(!1),Lr=!1;function hv(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qr(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(oe&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=ud(e),$E(e,null,n),t}return Fd(e,i,t,n),ud(e)}function au(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,AE(e,n)}}function Ny(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=t:r=r.next=t}else s=r=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var _x=!1;function ou(){if(_x){var e=ml;if(e!==null)throw e}}function lu(e,t,n,i){_x=!1;var s=e.updateQueue;Lr=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?r=c:a.next=c,a=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(r!==null){var h=s.baseState;a=0,u=c=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(Jt&f)===f:(i&f)===f){f!==0&&f===Sl&&(_x=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var m=e,b=o;f=t;var g=n;switch(b.tag){case 1:if(m=b.payload,typeof m=="function"){h=m.call(g,h,f);break t}h=m;break t;case 3:m.flags=m.flags&-65537|128;case 0:if(m=b.payload,f=typeof m=="function"?m.call(g,h,f):m,f==null)break t;h=Ie({},h,f);break t;case 2:Lr=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,a|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);u===null&&(l=h),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,r===null&&(s.shared.lanes=0),ea|=a,e.lanes=a,e.memoizedState=h}}function cA(e,t){if(typeof e!="function")throw Error($(191,e));e.call(t)}function uA(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)cA(n[e],t)}var Ml=bs(null),pd=bs(0);function vT(e,t){e=ar,Re(pd,e),Re(Ml,t),ar=e|t.baseLanes}function bx(){Re(pd,ar),Re(Ml,Ml.current)}function dv(){ar=pd.current,An(Ml),An(pd)}var _i=bs(null),Vi=null;function Ir(e){var t=e.alternate;Re(en,en.current&1),Re(_i,e),Vi===null&&(t===null||Ml.current!==null||t.memoizedState!==null)&&(Vi=e)}function Sx(e){Re(en,en.current),Re(_i,e),Vi===null&&(Vi=e)}function fA(e){e.tag===22?(Re(en,en.current),Re(_i,e),Vi===null&&(Vi=e)):Or(e)}function Or(){Re(en,en.current),Re(_i,_i.current)}function hi(e){An(_i),Vi===e&&(Vi=null),An(en)}var en=bs(0);function md(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||kx(n)||Gx(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ir=0,Gt=null,_e=null,ln=null,gd=!1,yl=!1,to=!1,yd=0,Su=0,xl=null,EI=0;function Ke(){throw Error($(321))}function pv(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vi(e[n],t[n]))return!1;return!0}function mv(e,t,n,i,s,r){return ir=r,Gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ot.H=e===null||e.memoizedState===null?GA:Av,to=!1,r=n(i,s),to=!1,yl&&(r=dA(t,n,i,s)),hA(e),r}function hA(e){Ot.H=Mu;var t=_e!==null&&_e.next!==null;if(ir=0,ln=_e=Gt=null,gd=!1,Su=0,xl=null,t)throw Error($(300));e===null||fn||(e=e.dependencies,e!==null&&hd(e)&&(fn=!0))}function dA(e,t,n,i){Gt=e;var s=0;do{if(yl&&(xl=null),Su=0,yl=!1,25<=s)throw Error($(301));if(s+=1,ln=_e=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ot.H=HA,r=t(n,i)}while(yl);return r}function AI(){var e=Ot.H,t=e.useState()[0];return t=typeof t.then=="function"?Ou(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(Gt.flags|=1024),t}function gv(){var e=yd!==0;return yd=0,e}function yv(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xv(e){if(gd){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gd=!1}ir=0,ln=_e=Gt=null,yl=!1,Su=yd=0,xl=null}function qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?Gt.memoizedState=ln=e:ln=ln.next=e,ln}function nn(){if(_e===null){var e=Gt.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=ln===null?Gt.memoizedState:ln.next;if(t!==null)ln=t,_e=e;else{if(e===null)throw Gt.alternate===null?Error($(467)):Error($(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},ln===null?Gt.memoizedState=ln=e:ln=ln.next=e}return ln}function Vd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ou(e){var t=Su;return Su+=1,xl===null&&(xl=[]),e=aA(xl,e,t),t=Gt,(ln===null?t.memoizedState:ln.next)===null&&(t=t.alternate,Ot.H=t===null||t.memoizedState===null?GA:Av),e}function kd(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ou(e);if(e.$$typeof===js)return Un(e)}throw Error($(438,String(e)))}function vv(e){var t=null,n=Gt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Gt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Vd(),Gt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=fU;return t.index++,n}function sr(e,t){return typeof t=="function"?t(e):t}function Kh(e){var t=nn();return _v(t,_e,e)}function _v(e,t,n){var i=e.queue;if(i===null)throw Error($(311));i.lastRenderedReducer=n;var s=e.baseQueue,r=i.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}t.baseQueue=s=r,i.pending=null}if(r=e.baseState,s===null)e.memoizedState=r;else{t=s.next;var o=a=null,l=null,c=t,u=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(Jt&h)===h:(ir&h)===h){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===Sl&&(u=!0);else if((ir&f)===f){c=c.next,f===Sl&&(u=!0);continue}else h={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,a=r):l=l.next=h,Gt.lanes|=f,ea|=f;h=c.action,to&&n(r,h),r=c.hasEagerState?c.eagerState:n(r,h)}else f={lane:h,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,a=r):l=l.next=f,Gt.lanes|=h,ea|=h;c=c.next}while(c!==null&&c!==t);if(l===null?a=r:l.next=o,!vi(r,e.memoizedState)&&(fn=!0,u&&(n=ml,n!==null)))throw n;e.memoizedState=r,e.baseState=a,e.baseQueue=l,i.lastRenderedState=r}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ly(e){var t=nn(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,r=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=e(r,a.action),a=a.next;while(a!==s);vi(r,t.memoizedState)||(fn=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function pA(e,t,n){var i=Gt,s=nn(),r=te;if(r){if(n===void 0)throw Error($(407));n=n()}else n=t();var a=!vi((_e||s).memoizedState,n);if(a&&(s.memoizedState=n,fn=!0),s=s.queue,bv(yA.bind(null,i,s,e),[e]),s.getSnapshot!==t||a||ln!==null&&ln.memoizedState.tag&1){if(i.flags|=2048,Tl(9,{destroy:void 0},gA.bind(null,i,s,n,t),null),Ee===null)throw Error($(349));r||(ir&127)!==0||mA(i,t,n)}return n}function mA(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Gt.updateQueue,t===null?(t=Vd(),Gt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gA(e,t,n,i){t.value=n,t.getSnapshot=i,xA(t)&&vA(e)}function yA(e,t,n){return n(function(){xA(t)&&vA(e)})}function xA(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vi(e,n)}catch{return!0}}function vA(e){var t=ro(e,2);t!==null&&ni(t,e,2)}function Mx(e){var t=qn();if(typeof e=="function"){var n=e;if(e=n(),to){Fr(!0);try{n()}finally{Fr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},t}function _A(e,t,n,i){return e.baseState=n,_v(e,_e,typeof i=="function"?i:sr)}function wI(e,t,n,i,s){if(Hd(e))throw Error($(485));if(e=t.action,e!==null){var r={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};Ot.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,bA(t,r)):(r.next=n.next,t.pending=n.next=r)}}function bA(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var r=Ot.T,a={};Ot.T=a;try{var o=n(s,i),l=Ot.S;l!==null&&l(a,o),_T(e,t,o)}catch(c){Tx(e,t,c)}finally{r!==null&&a.types!==null&&(r.types=a.types),Ot.T=r}}else try{r=n(s,i),_T(e,t,r)}catch(c){Tx(e,t,c)}}function _T(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){bT(e,t,i)},function(i){return Tx(e,t,i)}):bT(e,t,n)}function bT(e,t,n){t.status="fulfilled",t.value=n,SA(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,bA(e,n)))}function Tx(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,SA(t),t=t.next;while(t!==i)}e.action=null}function SA(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function MA(e,t){return t}function ST(e,t){if(te){var n=Ee.formState;if(n!==null){t:{var i=Gt;if(te){if(Ue){e:{for(var s=Ue,r=zi;s.nodeType!==8;){if(!r){s=null;break e}if(s=ki(s.nextSibling),s===null){s=null;break e}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){Ue=ki(s.nextSibling),i=s.data==="F!";break t}}$r(i)}i=!1}i&&(t=n[0])}}return n=qn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:MA,lastRenderedState:t},n.queue=i,n=zA.bind(null,Gt,i),i.dispatch=n,i=Mx(!1),r=Ev.bind(null,Gt,!1,i.queue),i=qn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=wI.bind(null,Gt,s,r,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function MT(e){var t=nn();return TA(t,_e,e)}function TA(e,t,n){if(t=_v(e,t,MA)[0],e=Kh(sr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ou(t)}catch(a){throw a===Ll?zd:a}else i=t;t=nn();var s=t.queue,r=s.dispatch;return n!==t.memoizedState&&(Gt.flags|=2048,Tl(9,{destroy:void 0},CI.bind(null,s,n),null)),[i,r,e]}function CI(e,t){e.action=t}function TT(e){var t=nn(),n=_e;if(n!==null)return TA(t,n,e);nn(),t=t.memoizedState,n=nn();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Tl(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Gt.updateQueue,t===null&&(t=Vd(),Gt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function EA(){return nn().memoizedState}function jh(e,t,n,i){var s=qn();Gt.flags|=e,s.memoizedState=Tl(1|t,{destroy:void 0},n,i===void 0?null:i)}function Gd(e,t,n,i){var s=nn();i=i===void 0?null:i;var r=s.memoizedState.inst;_e!==null&&i!==null&&pv(i,_e.memoizedState.deps)?s.memoizedState=Tl(t,r,n,i):(Gt.flags|=e,s.memoizedState=Tl(1|t,r,n,i))}function ET(e,t){jh(8390656,8,e,t)}function bv(e,t){Gd(2048,8,e,t)}function RI(e){Gt.flags|=4;var t=Gt.updateQueue;if(t===null)t=Vd(),Gt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function AA(e){var t=nn().memoizedState;return RI({ref:t,nextImpl:e}),function(){if((oe&2)!==0)throw Error($(440));return t.impl.apply(void 0,arguments)}}function wA(e,t){return Gd(4,2,e,t)}function CA(e,t){return Gd(4,4,e,t)}function RA(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function DA(e,t,n){n=n!=null?n.concat([e]):null,Gd(4,4,RA.bind(null,t,e),n)}function Sv(){}function PA(e,t){var n=nn();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&pv(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function NA(e,t){var n=nn();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&pv(t,i[1]))return i[0];if(i=e(),to){Fr(!0);try{e()}finally{Fr(!1)}}return n.memoizedState=[i,t],i}function Mv(e,t,n){return n===void 0||(ir&1073741824)!==0&&(Jt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=_w(),Gt.lanes|=e,ea|=e,n)}function LA(e,t,n,i){return vi(n,t)?n:Ml.current!==null?(e=Mv(e,n,i),vi(e,t)||(fn=!0),e):(ir&42)===0||(ir&1073741824)!==0&&(Jt&261930)===0?(fn=!0,e.memoizedState=n):(e=_w(),Gt.lanes|=e,ea|=e,t)}function UA(e,t,n,i,s){var r=le.p;le.p=r!==0&&8>r?r:8;var a=Ot.T,o={};Ot.T=o,Ev(e,!1,t,n);try{var l=s(),c=Ot.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=TI(l,i);cu(e,t,u,xi(e))}else cu(e,t,i,xi(e))}catch(h){cu(e,t,{then:function(){},status:"rejected",reason:h},xi())}finally{le.p=r,a!==null&&o.types!==null&&(a.types=o.types),Ot.T=a}}function DI(){}function Ex(e,t,n,i){if(e.tag!==5)throw Error($(476));var s=IA(e).queue;UA(e,s,t,qa,n===null?DI:function(){return OA(e),n(i)})}function IA(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:qa,baseState:qa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:qa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function OA(e){var t=IA(e);t.next===null&&(t=e.alternate.memoizedState),cu(e,t.next.queue,{},xi())}function Tv(){return Un(Au)}function BA(){return nn().memoizedState}function FA(){return nn().memoizedState}function PI(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=xi();e=Xr(n);var i=qr(t,e,n);i!==null&&(ni(i,t,n),au(i,t,n)),t={cache:cv()},e.payload=t;return}t=t.return}}function NI(e,t,n){var i=xi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Hd(e)?VA(t,n):(n=rv(e,t,n,i),n!==null&&(ni(n,e,i),kA(n,t,i)))}function zA(e,t,n){var i=xi();cu(e,t,n,i)}function cu(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hd(e))VA(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,o=r(a,n);if(s.hasEagerState=!0,s.eagerState=o,vi(o,a))return Fd(e,t,s,0),Ee===null&&Bd(),!1}catch{}finally{}if(n=rv(e,t,s,i),n!==null)return ni(n,e,i),kA(n,t,i),!0}return!1}function Ev(e,t,n,i){if(i={lane:2,revertLane:Uv(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Hd(e)){if(t)throw Error($(479))}else t=rv(e,n,i,2),t!==null&&ni(t,e,2)}function Hd(e){var t=e.alternate;return e===Gt||t!==null&&t===Gt}function VA(e,t){yl=gd=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kA(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,AE(e,n)}}var Mu={readContext:Un,use:kd,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};Mu.useEffectEvent=Ke;var GA={readContext:Un,use:kd,useCallback:function(e,t){return qn().memoizedState=[e,t===void 0?null:t],e},useContext:Un,useEffect:ET,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,jh(4194308,4,RA.bind(null,t,e),n)},useLayoutEffect:function(e,t){return jh(4194308,4,e,t)},useInsertionEffect:function(e,t){jh(4,2,e,t)},useMemo:function(e,t){var n=qn();t=t===void 0?null:t;var i=e();if(to){Fr(!0);try{e()}finally{Fr(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=qn();if(n!==void 0){var s=n(t);if(to){Fr(!0);try{n(t)}finally{Fr(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=NI.bind(null,Gt,e),[i.memoizedState,e]},useRef:function(e){var t=qn();return e={current:e},t.memoizedState=e},useState:function(e){e=Mx(e);var t=e.queue,n=zA.bind(null,Gt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Sv,useDeferredValue:function(e,t){var n=qn();return Mv(n,e,t)},useTransition:function(){var e=Mx(!1);return e=UA.bind(null,Gt,e.queue,!0,!1),qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Gt,s=qn();if(te){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Ee===null)throw Error($(349));(Jt&127)!==0||mA(i,t,n)}s.memoizedState=n;var r={value:n,getSnapshot:t};return s.queue=r,ET(yA.bind(null,i,r,e),[e]),i.flags|=2048,Tl(9,{destroy:void 0},gA.bind(null,i,r,n,t),null),n},useId:function(){var e=qn(),t=Ee.identifierPrefix;if(te){var n=xs,i=ys;n=(i&~(1<<32-yi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=yd++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=EI++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Tv,useFormState:ST,useActionState:ST,useOptimistic:function(e){var t=qn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ev.bind(null,Gt,!0,n),n.dispatch=t,[e,t]},useMemoCache:vv,useCacheRefresh:function(){return qn().memoizedState=PI.bind(null,Gt)},useEffectEvent:function(e){var t=qn(),n={impl:e};return t.memoizedState=n,function(){if((oe&2)!==0)throw Error($(440));return n.impl.apply(void 0,arguments)}}},Av={readContext:Un,use:kd,useCallback:PA,useContext:Un,useEffect:bv,useImperativeHandle:DA,useInsertionEffect:wA,useLayoutEffect:CA,useMemo:NA,useReducer:Kh,useRef:EA,useState:function(){return Kh(sr)},useDebugValue:Sv,useDeferredValue:function(e,t){var n=nn();return LA(n,_e.memoizedState,e,t)},useTransition:function(){var e=Kh(sr)[0],t=nn().memoizedState;return[typeof e=="boolean"?e:Ou(e),t]},useSyncExternalStore:pA,useId:BA,useHostTransitionStatus:Tv,useFormState:MT,useActionState:MT,useOptimistic:function(e,t){var n=nn();return _A(n,_e,e,t)},useMemoCache:vv,useCacheRefresh:FA};Av.useEffectEvent=AA;var HA={readContext:Un,use:kd,useCallback:PA,useContext:Un,useEffect:bv,useImperativeHandle:DA,useInsertionEffect:wA,useLayoutEffect:CA,useMemo:NA,useReducer:Ly,useRef:EA,useState:function(){return Ly(sr)},useDebugValue:Sv,useDeferredValue:function(e,t){var n=nn();return _e===null?Mv(n,e,t):LA(n,_e.memoizedState,e,t)},useTransition:function(){var e=Ly(sr)[0],t=nn().memoizedState;return[typeof e=="boolean"?e:Ou(e),t]},useSyncExternalStore:pA,useId:BA,useHostTransitionStatus:Tv,useFormState:TT,useActionState:TT,useOptimistic:function(e,t){var n=nn();return _e!==null?_A(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:vv,useCacheRefresh:FA};HA.useEffectEvent=AA;function Uy(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ax={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=xi(),s=Xr(i);s.payload=t,n!=null&&(s.callback=n),t=qr(e,s,i),t!==null&&(ni(t,e,i),au(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=xi(),s=Xr(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=qr(e,s,i),t!==null&&(ni(t,e,i),au(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xi(),i=Xr(n);i.tag=2,t!=null&&(i.callback=t),t=qr(e,i,n),t!==null&&(ni(t,e,n),au(t,e,n))}};function AT(e,t,n,i,s,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,a):t.prototype&&t.prototype.isPureReactComponent?!xu(n,i)||!xu(s,r):!0}function wT(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ax.enqueueReplaceState(t,t.state,null)}function eo(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ie({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function WA(e){cd(e)}function XA(e){console.error(e)}function qA(e){cd(e)}function xd(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function CT(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function wx(e,t,n){return n=Xr(n),n.tag=3,n.payload={element:null},n.callback=function(){xd(e,t)},n}function YA(e){return e=Xr(e),e.tag=3,e}function ZA(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=i.value;e.payload=function(){return s(r)},e.callback=function(){CT(t,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){CT(t,n,i),typeof s!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function LI(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Nl(t,n,s,!0),n=_i.current,n!==null){switch(n.tag){case 31:case 13:return Vi===null?Md():n.alternate===null&&je===0&&(je=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===dd?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Xy(e,i,s)),!1;case 22:return n.flags|=65536,i===dd?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Xy(e,i,s)),!1}throw Error($(435,n.tag))}return Xy(e,i,s),Md(),!1}if(te)return t=_i.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==px&&(e=Error($(422),{cause:i}),_u(Fi(e,n)))):(i!==px&&(t=Error($(423),{cause:i}),_u(Fi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Fi(i,n),s=wx(e.stateNode,i,s),Ny(e,s),je!==4&&(je=2)),!1;var r=Error($(520),{cause:i});if(r=Fi(r,n),hu===null?hu=[r]:hu.push(r),je!==4&&(je=2),t===null)return!0;i=Fi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=wx(n.stateNode,i,e),Ny(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Yr===null||!Yr.has(r))))return n.flags|=65536,s&=-s,n.lanes|=s,s=YA(s),ZA(s,e,n,i),Ny(n,s),!1}n=n.return}while(n!==null);return!1}var wv=Error($(461)),fn=!1;function Pn(e,t,n,i){t.child=e===null?lA(t,null,n,i):$a(t,e.child,n,i)}function RT(e,t,n,i,s){n=n.render;var r=t.ref;if("ref"in i){var a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}else a=i;return Qa(t),i=mv(e,t,n,a,r,s),o=gv(),e!==null&&!fn?(yv(e,t,s),rr(e,t,s)):(te&&o&&ov(t),t.flags|=1,Pn(e,t,i,s),t.child)}function DT(e,t,n,i,s){if(e===null){var r=n.type;return typeof r=="function"&&!av(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,KA(e,t,r,i,s)):(e=Yh(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Cv(e,s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:xu,n(a,i)&&e.ref===t.ref)return rr(e,t,s)}return t.flags|=1,e=$s(r,i),e.ref=t.ref,e.return=t,t.child=e}function KA(e,t,n,i,s){if(e!==null){var r=e.memoizedProps;if(xu(r,i)&&e.ref===t.ref)if(fn=!1,t.pendingProps=i=r,Cv(e,s))(e.flags&131072)!==0&&(fn=!0);else return t.lanes=e.lanes,rr(e,t,s)}return Cx(e,t,n,i,s)}function jA(e,t,n,i){var s=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~r}else i=0,t.child=null;return PT(e,t,r,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zh(t,r!==null?r.cachePool:null),r!==null?vT(t,r):bx(),fA(t);else return i=t.lanes=536870912,PT(e,t,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Zh(t,r.cachePool),vT(t,r),Or(t),t.memoizedState=null):(e!==null&&Zh(t,null),bx(),Or(t));return Pn(e,t,s,n),t.child}function tu(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function PT(e,t,n,i,s){var r=uv();return r=r===null?null:{parent:un._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Zh(t,null),bx(),fA(t),e!==null&&Nl(e,t,i,!0),t.childLanes=s,null}function Jh(e,t){return t=vd({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function NT(e,t,n){return $a(t,e.child,null,n),e=Jh(t,t.pendingProps),e.flags|=2,hi(t),t.memoizedState=null,e}function UI(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(te){if(i.mode==="hidden")return e=Jh(t,i),t.lanes=536870912,tu(null,e);if(Sx(t),(e=Ue)?(e=Gw(e,zi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qr!==null?{id:ys,overflow:xs}:null,retryLane:536870912,hydrationErrors:null},n=eA(e),n.return=t,t.child=n,Ln=t,Ue=null)):e=null,e===null)throw $r(t);return t.lanes=536870912,null}return Jh(t,i)}var r=e.memoizedState;if(r!==null){var a=r.dehydrated;if(Sx(t),s)if(t.flags&256)t.flags&=-257,t=NT(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error($(558));else if(fn||Nl(e,t,n,!1),s=(n&e.childLanes)!==0,fn||s){if(i=Ee,i!==null&&(a=wE(i,n),a!==0&&a!==r.retryLane))throw r.retryLane=a,ro(e,a),ni(i,e,a),wv;Md(),t=NT(e,t,n)}else e=r.treeContext,Ue=ki(a.nextSibling),Ln=t,te=!0,Wr=null,zi=!1,e!==null&&iA(t,e),t=Jh(t,i),t.flags|=4096;return t}return e=$s(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Qh(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error($(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cx(e,t,n,i,s){return Qa(t),n=mv(e,t,n,i,void 0,s),i=gv(),e!==null&&!fn?(yv(e,t,s),rr(e,t,s)):(te&&i&&ov(t),t.flags|=1,Pn(e,t,n,s),t.child)}function LT(e,t,n,i,s,r){return Qa(t),t.updateQueue=null,n=dA(t,i,n,s),hA(e),i=gv(),e!==null&&!fn?(yv(e,t,r),rr(e,t,r)):(te&&i&&ov(t),t.flags|=1,Pn(e,t,n,r),t.child)}function UT(e,t,n,i,s){if(Qa(t),t.stateNode===null){var r=ll,a=n.contextType;typeof a=="object"&&a!==null&&(r=Un(a)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ax,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},hv(t),a=n.contextType,r.context=typeof a=="object"&&a!==null?Un(a):ll,r.state=t.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(Uy(t,n,a,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&Ax.enqueueReplaceState(r,r.state,null),lu(t,i,r,s),ou(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=eo(n,o);r.props=l;var c=r.context,u=n.contextType;a=ll,typeof u=="object"&&u!==null&&(a=Un(u));var h=n.getDerivedStateFromProps;u=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==a)&&wT(t,r,i,a),Lr=!1;var f=t.memoizedState;r.state=f,lu(t,i,r,s),ou(),c=t.memoizedState,o||f!==c||Lr?(typeof h=="function"&&(Uy(t,n,h,i),c=t.memoizedState),(l=Lr||AT(t,n,l,i,f,c,a))?(u||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=a,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,vx(e,t),a=t.memoizedProps,u=eo(n,a),r.props=u,h=t.pendingProps,f=r.context,c=n.contextType,l=ll,typeof c=="object"&&c!==null&&(l=Un(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==h||f!==l)&&wT(t,r,i,l),Lr=!1,f=t.memoizedState,r.state=f,lu(t,i,r,s),ou();var p=t.memoizedState;a!==h||f!==p||Lr||e!==null&&e.dependencies!==null&&hd(e.dependencies)?(typeof o=="function"&&(Uy(t,n,o,i),p=t.memoizedState),(u=Lr||AT(t,n,u,i,f,p,l)||e!==null&&e.dependencies!==null&&hd(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=u):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Qh(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=$a(t,e.child,null,s),t.child=$a(t,null,n,s)):Pn(e,t,n,s),t.memoizedState=r.state,e=t.child):e=rr(e,t,s),e}function IT(e,t,n,i){return Ja(),t.flags|=256,Pn(e,t,n,i),t.child}var Iy={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oy(e){return{baseLanes:e,cachePool:rA()}}function By(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=pi),e}function JA(e,t,n){var i=t.pendingProps,s=!1,r=(t.flags&128)!==0,a;if((a=r)||(a=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),a&&(s=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(s?Ir(t):Or(t),(e=Ue)?(e=Gw(e,zi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qr!==null?{id:ys,overflow:xs}:null,retryLane:536870912,hydrationErrors:null},n=eA(e),n.return=t,t.child=n,Ln=t,Ue=null)):e=null,e===null)throw $r(t);return Gx(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Or(t),s=t.mode,o=vd({mode:"hidden",children:o},s),i=Ya(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Oy(n),i.childLanes=By(e,a,n),t.memoizedState=Iy,tu(null,i)):(Ir(t),Rx(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(Ir(t),t.flags&=-257,t=Fy(e,t,n)):t.memoizedState!==null?(Or(t),t.child=e.child,t.flags|=128,t=null):(Or(t),o=i.fallback,s=t.mode,i=vd({mode:"visible",children:i.children},s),o=Ya(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,$a(t,e.child,null,n),i=t.child,i.memoizedState=Oy(n),i.childLanes=By(e,a,n),t.memoizedState=Iy,t=tu(null,i));else if(Ir(t),Gx(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var c=a.dgst;a=c,i=Error($(419)),i.stack="",i.digest=a,_u({value:i,source:null,stack:null}),t=Fy(e,t,n)}else if(fn||Nl(e,t,n,!1),a=(n&e.childLanes)!==0,fn||a){if(a=Ee,a!==null&&(i=wE(a,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,ro(e,i),ni(a,e,i),wv;kx(o)||Md(),t=Fy(e,t,n)}else kx(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ue=ki(o.nextSibling),Ln=t,te=!0,Wr=null,zi=!1,e!==null&&iA(t,e),t=Rx(t,i.children),t.flags|=4096);return t}return s?(Or(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=$s(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=$s(c,o):(o=Ya(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,tu(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Oy(n):(s=o.cachePool,s!==null?(l=un._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=rA(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=By(e,a,n),t.memoizedState=Iy,tu(e.child,i)):(Ir(t),n=e.child,e=n.sibling,n=$s(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function Rx(e,t){return t=vd({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function vd(e,t){return e=di(22,e,null,t),e.lanes=0,e}function Fy(e,t,n){return $a(t,e.child,null,n),e=Rx(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function OT(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),gx(e.return,t,n)}function zy(e,t,n,i,s,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=s,a.treeForkCount=r)}function QA(e,t,n){var i=t.pendingProps,s=i.revealOrder,r=i.tail;i=i.children;var a=en.current,o=(a&2)!==0;if(o?(a=a&1|2,t.flags|=128):a&=1,Re(en,a),Pn(e,t,i,n),i=te?vu:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&OT(e,n,t);else if(e.tag===19)OT(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&md(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),zy(t,!1,s,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&md(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}zy(t,!0,n,null,r,i);break;case"together":zy(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function rr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ea|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Nl(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=$s(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$s(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cv(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hd(e)))}function II(e,t,n){switch(t.tag){case 3:rd(t,t.stateNode.containerInfo),Ur(t,un,e.memoizedState.cache),Ja();break;case 27:case 5:ix(t);break;case 4:rd(t,t.stateNode.containerInfo);break;case 10:Ur(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Sx(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ir(t),t.flags|=128,null):(n&t.child.childLanes)!==0?JA(e,t,n):(Ir(t),e=rr(e,t,n),e!==null?e.sibling:null);Ir(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Nl(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return QA(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Re(en,en.current),i)break;return null;case 22:return t.lanes=0,jA(e,t,n,t.pendingProps);case 24:Ur(t,un,e.memoizedState.cache)}return rr(e,t,n)}function $A(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)fn=!0;else{if(!Cv(e,n)&&(t.flags&128)===0)return fn=!1,II(e,t,n);fn=(e.flags&131072)!==0}else fn=!1,te&&(t.flags&1048576)!==0&&nA(t,vu,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Wa(t.elementType),t.type=e,typeof e=="function")av(e)?(i=eo(e,i),t.tag=1,t=UT(null,t,e,i,n)):(t.tag=0,t=Cx(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===qx){t.tag=11,t=RT(null,t,e,i,n);break t}else if(s===Yx){t.tag=14,t=DT(null,t,e,i,n);break t}}throw t=ex(e)||e,Error($(306,t,""))}}return t;case 0:return Cx(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=eo(i,t.pendingProps),UT(e,t,i,s,n);case 3:t:{if(rd(t,t.stateNode.containerInfo),e===null)throw Error($(387));i=t.pendingProps;var r=t.memoizedState;s=r.element,vx(e,t),lu(t,i,null,n);var a=t.memoizedState;if(i=a.cache,Ur(t,un,i),i!==r.cache&&yx(t,[un],n,!0),ou(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=IT(e,t,i,n);break t}else if(i!==s){s=Fi(Error($(424)),t),_u(s),t=IT(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=ki(e.firstChild),Ln=t,te=!0,Wr=null,zi=!0,n=lA(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ja(),i===s){t=rr(e,t,n);break t}Pn(e,t,i,n)}t=t.child}return t;case 26:return Qh(e,t),e===null?(n=sE(t.type,null,t.pendingProps,null))?t.memoizedState=n:te||(n=t.type,e=t.pendingProps,i=wd(Hr.current).createElement(n),i[Nn]=t,i[ii]=e,In(i,n,e),En(i),t.stateNode=i):t.memoizedState=sE(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ix(t),e===null&&te&&(i=t.stateNode=Hw(t.type,t.pendingProps,Hr.current),Ln=t,zi=!0,s=Ue,ia(t.type)?(Hx=s,Ue=ki(i.firstChild)):Ue=s),Pn(e,t,t.pendingProps.children,n),Qh(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((s=i=Ue)&&(i=cO(i,t.type,t.pendingProps,zi),i!==null?(t.stateNode=i,Ln=t,Ue=ki(i.firstChild),zi=!1,s=!0):s=!1),s||$r(t)),ix(t),s=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,zx(s,r)?i=null:a!==null&&zx(s,a)&&(t.flags|=32),t.memoizedState!==null&&(s=mv(e,t,AI,null,null,n),Au._currentValue=s),Qh(e,t),Pn(e,t,i,n),t.child;case 6:return e===null&&te&&((e=n=Ue)&&(n=uO(n,t.pendingProps,zi),n!==null?(t.stateNode=n,Ln=t,Ue=null,e=!0):e=!1),e||$r(t)),null;case 13:return JA(e,t,n);case 4:return rd(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=$a(t,null,i,n):Pn(e,t,i,n),t.child;case 11:return RT(e,t,t.type,t.pendingProps,n);case 7:return Pn(e,t,t.pendingProps,n),t.child;case 8:return Pn(e,t,t.pendingProps.children,n),t.child;case 12:return Pn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ur(t,t.type,i.value),Pn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Qa(t),s=Un(s),i=i(s),t.flags|=1,Pn(e,t,i,n),t.child;case 14:return DT(e,t,t.type,t.pendingProps,n);case 15:return KA(e,t,t.type,t.pendingProps,n);case 19:return QA(e,t,n);case 31:return UI(e,t,n);case 22:return jA(e,t,n,t.pendingProps);case 24:return Qa(t),i=Un(un),e===null?(s=uv(),s===null&&(s=Ee,r=cv(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=n),s=r),t.memoizedState={parent:i,cache:s},hv(t),Ur(t,un,s)):((e.lanes&n)!==0&&(vx(e,t),lu(t,null,null,n),ou()),s=e.memoizedState,r=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ur(t,un,i)):(i=r.cache,Ur(t,un,i),i!==s.cache&&yx(t,[un],n,!0))),Pn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error($(156,t.tag))}function Ws(e){e.flags|=4}function Vy(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Mw())e.flags|=8192;else throw Ka=dd,fv}else e.flags&=-16777217}function BT(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qw(t))if(Mw())e.flags|=8192;else throw Ka=dd,fv}function Oh(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?TE():536870912,e.lanes|=t,El|=t)}function Yc(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function OI(e,t,n){var i=t.pendingProps;switch(lv(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),tr(un),vl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(jo(t)?Ws(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Py())),Le(t),null;case 26:var s=t.type,r=t.memoizedState;return e===null?(Ws(t),r!==null?(Le(t),BT(t,r)):(Le(t),Vy(t,s,null,i,n))):r?r!==e.memoizedState?(Ws(t),Le(t),BT(t,r)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ws(t),Le(t),Vy(t,s,e,i,n)),null;case 27:if(ad(t),n=Hr.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ws(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return Le(t),null}e=_s.current,jo(t)?hT(t,e):(e=Hw(s,i,n),t.stateNode=e,Ws(t))}return Le(t),null;case 5:if(ad(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ws(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return Le(t),null}if(r=_s.current,jo(t))hT(t,r);else{var a=wd(Hr.current);switch(r){case 1:r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=a.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=a.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?a.createElement(s,{is:i.is}):a.createElement(s)}}r[Nn]=t,r[ii]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=r;t:switch(In(r,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ws(t)}}return Le(t),Vy(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ws(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error($(166));if(e=Hr.current,jo(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=Ln,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[Nn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||zw(e.nodeValue,n)),e||$r(t,!0)}else e=wd(e).createTextNode(i),e[Nn]=t,t.stateNode=e}return Le(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=jo(t),n!==null){if(e===null){if(!i)throw Error($(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(557));e[Nn]=t}else Ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else n=Py(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(hi(t),t):(hi(t),null);if((t.flags&128)!==0)throw Error($(558))}return Le(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=jo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error($(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Nn]=t}else Ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),s=!1}else s=Py(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(hi(t),t):(hi(t),null)}return hi(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Oh(t,t.updateQueue),Le(t),null);case 4:return vl(),e===null&&Iv(t.stateNode.containerInfo),Le(t),null;case 10:return tr(t.type),Le(t),null;case 19:if(An(en),i=t.memoizedState,i===null)return Le(t),null;if(s=(t.flags&128)!==0,r=i.rendering,r===null)if(s)Yc(i,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=md(e),r!==null){for(t.flags|=128,Yc(i,!1),e=r.updateQueue,t.updateQueue=e,Oh(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)tA(n,e),n=n.sibling;return Re(en,en.current&1|2),te&&Zs(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&mi()>bd&&(t.flags|=128,s=!0,Yc(i,!1),t.lanes=4194304)}else{if(!s)if(e=md(r),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Oh(t,e),Yc(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!te)return Le(t),null}else 2*mi()-i.renderingStartTime>bd&&n!==536870912&&(t.flags|=128,s=!0,Yc(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=mi(),e.sibling=null,n=en.current,Re(en,s?n&1|2:n&1),te&&Zs(t,i.treeForkCount),e):(Le(t),null);case 22:case 23:return hi(t),dv(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&Oh(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&An(Za),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),tr(un),Le(t),null;case 25:return null;case 30:return null}throw Error($(156,t.tag))}function BI(e,t){switch(lv(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(un),vl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ad(t),null;case 31:if(t.memoizedState!==null){if(hi(t),t.alternate===null)throw Error($(340));Ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(hi(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));Ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return An(en),null;case 4:return vl(),null;case 10:return tr(t.type),null;case 22:case 23:return hi(t),dv(),e!==null&&An(Za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return tr(un),null;case 25:return null;default:return null}}function tw(e,t){switch(lv(t),t.tag){case 3:tr(un),vl();break;case 26:case 27:case 5:ad(t);break;case 4:vl();break;case 31:t.memoizedState!==null&&hi(t);break;case 13:hi(t);break;case 19:An(en);break;case 10:tr(t.type);break;case 22:case 23:hi(t),dv(),e!==null&&An(Za);break;case 24:tr(un)}}function Bu(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var r=n.create,a=n.inst;i=r(),a.destroy=i}n=n.next}while(n!==s)}}catch(o){pe(t,t.return,o)}}function ta(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&e)===e){var a=i.inst,o=a.destroy;if(o!==void 0){a.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){pe(s,l,u)}}}i=i.next}while(i!==r)}}catch(u){pe(t,t.return,u)}}function ew(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{uA(t,n)}catch(i){pe(e,e.return,i)}}}function nw(e,t,n){n.props=eo(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){pe(e,t,i)}}function uu(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){pe(e,t,s)}}function vs(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){pe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){pe(e,t,s)}else n.current=null}function iw(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){pe(e,e.return,s)}}function ky(e,t,n){try{var i=e.stateNode;iO(i,e.type,n,t),i[ii]=t}catch(s){pe(e,e.return,s)}}function sw(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function Gy(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||sw(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dx(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Js));else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Dx(e,t,n),e=e.sibling;e!==null;)Dx(e,t,n),e=e.sibling}function _d(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ia(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(_d(e,t,n),e=e.sibling;e!==null;)_d(e,t,n),e=e.sibling}function rw(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);In(t,i,n),t[Nn]=e,t[ii]=n}catch(r){pe(e,e.return,r)}}var Ks=!1,cn=!1,Hy=!1,FT=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function FI(e,t){if(e=e.containerInfo,Bx=Pd,e=qE(e),iv(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var a=0,o=-1,l=-1,c=0,u=0,h=e,f=null;e:for(;;){for(var p;h!==n||s!==0&&h.nodeType!==3||(o=a+s),h!==r||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===e)break e;if(f===n&&++c===s&&(o=a),f===r&&++u===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fx={focusedElem:e,selectionRange:n},Pd=!1,Tn=t;Tn!==null;)if(t=Tn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Tn=e;else for(;Tn!==null;){switch(t=Tn,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,s=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var m=eo(n.type,s);e=i.getSnapshotBeforeUpdate(m,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(b){pe(n,n.return,b)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Vx(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vx(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error($(163))}if(e=t.sibling,e!==null){e.return=t.return,Tn=e;break}Tn=t.return}}function aw(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:qs(e,n),i&4&&Bu(5,n);break;case 1:if(qs(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(a){pe(n,n.return,a)}else{var s=eo(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(a){pe(n,n.return,a)}}i&64&&ew(n),i&512&&uu(n,n.return);break;case 3:if(qs(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{uA(e,t)}catch(a){pe(n,n.return,a)}}break;case 27:t===null&&i&4&&rw(n);case 26:case 5:qs(e,n),t===null&&i&4&&iw(n),i&512&&uu(n,n.return);break;case 12:qs(e,n);break;case 31:qs(e,n),i&4&&cw(e,n);break;case 13:qs(e,n),i&4&&uw(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=YI.bind(null,n),fO(e,n))));break;case 22:if(i=n.memoizedState!==null||Ks,!i){t=t!==null&&t.memoizedState!==null||cn,s=Ks;var r=cn;Ks=i,(cn=t)&&!r?Ys(e,n,(n.subtreeFlags&8772)!==0):qs(e,n),Ks=s,cn=r}break;case 30:break;default:qs(e,n)}}function ow(e){var t=e.alternate;t!==null&&(e.alternate=null,ow(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Jx(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fe=null,ti=!1;function Xs(e,t,n){for(n=n.child;n!==null;)lw(e,t,n),n=n.sibling}function lw(e,t,n){if(gi&&typeof gi.onCommitFiberUnmount=="function")try{gi.onCommitFiberUnmount(Du,n)}catch{}switch(n.tag){case 26:cn||vs(n,t),Xs(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:cn||vs(n,t);var i=Fe,s=ti;ia(n.type)&&(Fe=n.stateNode,ti=!1),Xs(e,t,n),pu(n.stateNode),Fe=i,ti=s;break;case 5:cn||vs(n,t);case 6:if(i=Fe,s=ti,Fe=null,Xs(e,t,n),Fe=i,ti=s,Fe!==null)if(ti)try{(Fe.nodeType===9?Fe.body:Fe.nodeName==="HTML"?Fe.ownerDocument.body:Fe).removeChild(n.stateNode)}catch(r){pe(n,t,r)}else try{Fe.removeChild(n.stateNode)}catch(r){pe(n,t,r)}break;case 18:Fe!==null&&(ti?(e=Fe,$T(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Rl(e)):$T(Fe,n.stateNode));break;case 4:i=Fe,s=ti,Fe=n.stateNode.containerInfo,ti=!0,Xs(e,t,n),Fe=i,ti=s;break;case 0:case 11:case 14:case 15:ta(2,n,t),cn||ta(4,n,t),Xs(e,t,n);break;case 1:cn||(vs(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&nw(n,t,i)),Xs(e,t,n);break;case 21:Xs(e,t,n);break;case 22:cn=(i=cn)||n.memoizedState!==null,Xs(e,t,n),cn=i;break;default:Xs(e,t,n)}}function cw(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rl(e)}catch(n){pe(t,t.return,n)}}}function uw(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rl(e)}catch(n){pe(t,t.return,n)}}function zI(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new FT),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new FT),t;default:throw Error($(435,e.tag))}}function Bh(e,t){var n=zI(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=ZI.bind(null,e,i);i.then(s,s)}})}function Qn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=e,a=t,o=a;t:for(;o!==null;){switch(o.tag){case 27:if(ia(o.type)){Fe=o.stateNode,ti=!1;break t}break;case 5:Fe=o.stateNode,ti=!1;break t;case 3:case 4:Fe=o.stateNode.containerInfo,ti=!0;break t}o=o.return}if(Fe===null)throw Error($(160));lw(r,a,s),Fe=null,ti=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)fw(t,e),t=t.sibling}var $i=null;function fw(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qn(t,e),$n(e),i&4&&(ta(3,e,e.return),Bu(3,e),ta(5,e,e.return));break;case 1:Qn(t,e),$n(e),i&512&&(cn||n===null||vs(n,n.return)),i&64&&Ks&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=$i;if(Qn(t,e),$n(e),i&512&&(cn||n===null||vs(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":r=s.getElementsByTagName("title")[0],(!r||r[Lu]||r[Nn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(i),s.head.insertBefore(r,s.querySelector("head > title"))),In(r,i,n),r[Nn]=e,En(r),i=r;break t;case"link":var a=aE("link","href",s).get(i+(n.href||""));if(a){for(var o=0;o<a.length;o++)if(r=a[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break e}}r=s.createElement(i),In(r,i,n),s.head.appendChild(r);break;case"meta":if(a=aE("meta","content",s).get(i+(n.content||""))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(o,1);break e}}r=s.createElement(i),In(r,i,n),s.head.appendChild(r);break;default:throw Error($(468,i))}r[Nn]=e,En(r),i=r}e.stateNode=i}else oE(s,e.type,e.stateNode);else e.stateNode=rE(s,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?oE(s,e.type,e.stateNode):rE(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ky(e,e.memoizedProps,n.memoizedProps)}break;case 27:Qn(t,e),$n(e),i&512&&(cn||n===null||vs(n,n.return)),n!==null&&i&4&&ky(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Qn(t,e),$n(e),i&512&&(cn||n===null||vs(n,n.return)),e.flags&32){s=e.stateNode;try{bl(s,"")}catch(m){pe(e,e.return,m)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,ky(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Hy=!0);break;case 6:if(Qn(t,e),$n(e),i&4){if(e.stateNode===null)throw Error($(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(m){pe(e,e.return,m)}}break;case 3:if(ed=null,s=$i,$i=Cd(t.containerInfo),Qn(t,e),$i=s,$n(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Rl(t.containerInfo)}catch(m){pe(e,e.return,m)}Hy&&(Hy=!1,hw(e));break;case 4:i=$i,$i=Cd(e.stateNode.containerInfo),Qn(t,e),$n(e),$i=i;break;case 12:Qn(t,e),$n(e);break;case 31:Qn(t,e),$n(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Bh(e,i)));break;case 13:Qn(t,e),$n(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Wd=mi()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Bh(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Ks,u=cn;if(Ks=c||s,cn=u||l,Qn(t,e),cn=u,Ks=c,$n(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||Ks||cn||Xa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,s)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,f=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(m){pe(l,l.return,m)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(m){pe(l,l.return,m)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;s?tE(p,!0):tE(l.stateNode,!1)}catch(m){pe(l,l.return,m)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Bh(e,n))));break;case 19:Qn(t,e),$n(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Bh(e,i)));break;case 30:break;case 21:break;default:Qn(t,e),$n(e)}}function $n(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(sw(i)){n=i;break}i=i.return}if(n==null)throw Error($(160));switch(n.tag){case 27:var s=n.stateNode,r=Gy(e);_d(e,r,s);break;case 5:var a=n.stateNode;n.flags&32&&(bl(a,""),n.flags&=-33);var o=Gy(e);_d(e,o,a);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Gy(e);Dx(e,c,l);break;default:throw Error($(161))}}catch(u){pe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hw(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;hw(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function qs(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)aw(e,t.alternate,t),t=t.sibling}function Xa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ta(4,t,t.return),Xa(t);break;case 1:vs(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&nw(t,t.return,n),Xa(t);break;case 27:pu(t.stateNode);case 26:case 5:vs(t,t.return),Xa(t);break;case 22:t.memoizedState===null&&Xa(t);break;case 30:Xa(t);break;default:Xa(t)}e=e.sibling}}function Ys(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,r=t,a=r.flags;switch(r.tag){case 0:case 11:case 15:Ys(s,r,n),Bu(4,r);break;case 1:if(Ys(s,r,n),i=r,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){pe(i,i.return,c)}if(i=r,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)cA(l[s],o)}catch(c){pe(i,i.return,c)}}n&&a&64&&ew(r),uu(r,r.return);break;case 27:rw(r);case 26:case 5:Ys(s,r,n),n&&i===null&&a&4&&iw(r),uu(r,r.return);break;case 12:Ys(s,r,n);break;case 31:Ys(s,r,n),n&&a&4&&cw(s,r);break;case 13:Ys(s,r,n),n&&a&4&&uw(s,r);break;case 22:r.memoizedState===null&&Ys(s,r,n),uu(r,r.return);break;case 30:break;default:Ys(s,r,n)}t=t.sibling}}function Rv(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Iu(n))}function Dv(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Iu(e))}function Qi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dw(e,t,n,i),t=t.sibling}function dw(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Qi(e,t,n,i),s&2048&&Bu(9,t);break;case 1:Qi(e,t,n,i);break;case 3:Qi(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Iu(e)));break;case 12:if(s&2048){Qi(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,a=r.id,o=r.onPostCommit;typeof o=="function"&&o(a,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){pe(t,t.return,l)}}else Qi(e,t,n,i);break;case 31:Qi(e,t,n,i);break;case 13:Qi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,a=t.alternate,t.memoizedState!==null?r._visibility&2?Qi(e,t,n,i):fu(e,t):r._visibility&2?Qi(e,t,n,i):(r._visibility|=2,Qo(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Rv(a,t);break;case 24:Qi(e,t,n,i),s&2048&&Dv(t.alternate,t);break;default:Qi(e,t,n,i)}}function Qo(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,a=t,o=n,l=i,c=a.flags;switch(a.tag){case 0:case 11:case 15:Qo(r,a,o,l,s),Bu(8,a);break;case 23:break;case 22:var u=a.stateNode;a.memoizedState!==null?u._visibility&2?Qo(r,a,o,l,s):fu(r,a):(u._visibility|=2,Qo(r,a,o,l,s)),s&&c&2048&&Rv(a.alternate,a);break;case 24:Qo(r,a,o,l,s),s&&c&2048&&Dv(a.alternate,a);break;default:Qo(r,a,o,l,s)}t=t.sibling}}function fu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:fu(n,i),s&2048&&Rv(i.alternate,i);break;case 24:fu(n,i),s&2048&&Dv(i.alternate,i);break;default:fu(n,i)}t=t.sibling}}var eu=8192;function Jo(e,t,n){if(e.subtreeFlags&eu)for(e=e.child;e!==null;)pw(e,t,n),e=e.sibling}function pw(e,t,n){switch(e.tag){case 26:Jo(e,t,n),e.flags&eu&&e.memoizedState!==null&&MO(n,$i,e.memoizedState,e.memoizedProps);break;case 5:Jo(e,t,n);break;case 3:case 4:var i=$i;$i=Cd(e.stateNode.containerInfo),Jo(e,t,n),$i=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=eu,eu=16777216,Jo(e,t,n),eu=i):Jo(e,t,n));break;default:Jo(e,t,n)}}function mw(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Zc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Tn=i,yw(i,e)}mw(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gw(e),e=e.sibling}function gw(e){switch(e.tag){case 0:case 11:case 15:Zc(e),e.flags&2048&&ta(9,e,e.return);break;case 3:Zc(e);break;case 12:Zc(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,$h(e)):Zc(e);break;default:Zc(e)}}function $h(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Tn=i,yw(i,e)}mw(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ta(8,t,t.return),$h(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,$h(t));break;default:$h(t)}e=e.sibling}}function yw(e,t){for(;Tn!==null;){var n=Tn;switch(n.tag){case 0:case 11:case 15:ta(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Iu(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Tn=i;else t:for(n=e;Tn!==null;){i=Tn;var s=i.sibling,r=i.return;if(ow(i),i===n){Tn=null;break t}if(s!==null){s.return=r,Tn=s;break t}Tn=r}}}var VI={getCacheForType:function(e){var t=Un(un),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Un(un).controller.signal}},kI=typeof WeakMap=="function"?WeakMap:Map,oe=0,Ee=null,Kt=null,Jt=0,de=0,fi=null,Vr=!1,Ul=!1,Pv=!1,ar=0,je=0,ea=0,ja=0,Nv=0,pi=0,El=0,hu=null,ei=null,Px=!1,Wd=0,xw=0,bd=1/0,Sd=null,Yr=null,mn=0,Zr=null,Al=null,er=0,Nx=0,Lx=null,vw=null,du=0,Ux=null;function xi(){return(oe&2)!==0&&Jt!==0?Jt&-Jt:Ot.T!==null?Uv():CE()}function _w(){if(pi===0)if((Jt&536870912)===0||te){var e=wh;wh<<=1,(wh&3932160)===0&&(wh=262144),pi=e}else pi=536870912;return e=_i.current,e!==null&&(e.flags|=32),pi}function ni(e,t,n){(e===Ee&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(wl(e,0),kr(e,Jt,pi,!1)),Nu(e,n),((oe&2)===0||e!==Ee)&&(e===Ee&&((oe&2)===0&&(ja|=n),je===4&&kr(e,Jt,pi,!1)),Ss(e))}function bw(e,t,n){if((oe&6)!==0)throw Error($(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Pu(e,t),s=i?WI(e,t):Wy(e,t,!0),r=i;do{if(s===0){Ul&&!i&&kr(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!GI(n)){s=Wy(e,t,!1),r=!1;continue}if(s===2){if(r=t,e.errorRecoveryDisabledLanes&r)var a=0;else a=e.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;t:{var o=e;s=hu;var l=o.current.memoizedState.isDehydrated;if(l&&(wl(o,a).flags|=256),a=Wy(o,a,!1),a!==2){if(Pv&&!l){o.errorRecoveryDisabledLanes|=r,ja|=r,s=4;break t}r=ei,ei=s,r!==null&&(ei===null?ei=r:ei.push.apply(ei,r))}s=a}if(r=!1,s!==2)continue}}if(s===1){wl(e,0),kr(e,t,0,!0);break}t:{switch(i=e,r=s,r){case 0:case 1:throw Error($(345));case 4:if((t&4194048)!==t)break;case 6:kr(i,t,pi,!Vr);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error($(329))}if((t&62914560)===t&&(s=Wd+300-mi(),10<s)){if(kr(i,t,pi,!Vr),Ld(i,0,!0)!==0)break t;er=t,i.timeoutHandle=kw(zT.bind(null,i,n,ei,Sd,Px,t,pi,ja,El,Vr,r,"Throttled",-0,0),s);break t}zT(i,n,ei,Sd,Px,t,pi,ja,El,Vr,r,null,-0,0)}}break}while(!0);Ss(e)}function zT(e,t,n,i,s,r,a,o,l,c,u,h,f,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Js},pw(t,r,h);var m=(r&62914560)===r?Wd-mi():(r&4194048)===r?xw-mi():0;if(m=TO(h,m),m!==null){er=r,e.cancelPendingCommit=m(kT.bind(null,e,t,r,n,i,s,a,o,l,u,h,null,f,p)),kr(e,r,a,!c);return}}kT(e,t,r,n,i,s,a,o,l)}function GI(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!vi(r(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kr(e,t,n,i){t&=~Nv,t&=~ja,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var r=31-yi(s),a=1<<r;i[r]=-1,s&=~a}n!==0&&EE(e,n,t)}function Xd(){return(oe&6)===0?(Fu(0,!1),!1):!0}function Lv(){if(Kt!==null){if(de===0)var e=Kt.return;else e=Kt,Qs=ao=null,xv(e),gl=null,bu=0,e=Kt;for(;e!==null;)tw(e.alternate,e),e=e.return;Kt=null}}function wl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,aO(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),er=0,Lv(),Ee=e,Kt=n=$s(e.current,null),Jt=t,de=0,fi=null,Vr=!1,Ul=Pu(e,t),Pv=!1,El=pi=Nv=ja=ea=je=0,ei=hu=null,Px=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-yi(i),r=1<<s;t|=e[s],i&=~r}return ar=t,Bd(),n}function Sw(e,t){Gt=null,Ot.H=Mu,t===Ll||t===zd?(t=yT(),de=3):t===fv?(t=yT(),de=4):de=t===wv?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,fi=t,Kt===null&&(je=1,xd(e,Fi(t,e.current)))}function Mw(){var e=_i.current;return e===null?!0:(Jt&4194048)===Jt?Vi===null:(Jt&62914560)===Jt||(Jt&536870912)!==0?e===Vi:!1}function Tw(){var e=Ot.H;return Ot.H=Mu,e===null?Mu:e}function Ew(){var e=Ot.A;return Ot.A=VI,e}function Md(){je=4,Vr||(Jt&4194048)!==Jt&&_i.current!==null||(Ul=!0),(ea&134217727)===0&&(ja&134217727)===0||Ee===null||kr(Ee,Jt,pi,!1)}function Wy(e,t,n){var i=oe;oe|=2;var s=Tw(),r=Ew();(Ee!==e||Jt!==t)&&(Sd=null,wl(e,t)),t=!1;var a=je;t:do try{if(de!==0&&Kt!==null){var o=Kt,l=fi;switch(de){case 8:Lv(),a=6;break t;case 3:case 2:case 9:case 6:_i.current===null&&(t=!0);var c=de;if(de=0,fi=null,fl(e,o,l,c),n&&Ul){a=0;break t}break;default:c=de,de=0,fi=null,fl(e,o,l,c)}}HI(),a=je;break}catch(u){Sw(e,u)}while(!0);return t&&e.shellSuspendCounter++,Qs=ao=null,oe=i,Ot.H=s,Ot.A=r,Kt===null&&(Ee=null,Jt=0,Bd()),a}function HI(){for(;Kt!==null;)Aw(Kt)}function WI(e,t){var n=oe;oe|=2;var i=Tw(),s=Ew();Ee!==e||Jt!==t?(Sd=null,bd=mi()+500,wl(e,t)):Ul=Pu(e,t);t:do try{if(de!==0&&Kt!==null){t=Kt;var r=fi;e:switch(de){case 1:de=0,fi=null,fl(e,t,r,1);break;case 2:case 9:if(gT(r)){de=0,fi=null,VT(t);break}t=function(){de!==2&&de!==9||Ee!==e||(de=7),Ss(e)},r.then(t,t);break t;case 3:de=7;break t;case 4:de=5;break t;case 7:gT(r)?(de=0,fi=null,VT(t)):(de=0,fi=null,fl(e,t,r,7));break;case 5:var a=null;switch(Kt.tag){case 26:a=Kt.memoizedState;case 5:case 27:var o=Kt;if(a?qw(a):o.stateNode.complete){de=0,fi=null;var l=o.sibling;if(l!==null)Kt=l;else{var c=o.return;c!==null?(Kt=c,qd(c)):Kt=null}break e}}de=0,fi=null,fl(e,t,r,5);break;case 6:de=0,fi=null,fl(e,t,r,6);break;case 8:Lv(),je=6;break t;default:throw Error($(462))}}XI();break}catch(u){Sw(e,u)}while(!0);return Qs=ao=null,Ot.H=i,Ot.A=s,oe=n,Kt!==null?0:(Ee=null,Jt=0,Bd(),je)}function XI(){for(;Kt!==null&&!pU();)Aw(Kt)}function Aw(e){var t=$A(e.alternate,e,ar);e.memoizedProps=e.pendingProps,t===null?qd(e):Kt=t}function VT(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=LT(n,t,t.pendingProps,t.type,void 0,Jt);break;case 11:t=LT(n,t,t.pendingProps,t.type.render,t.ref,Jt);break;case 5:xv(t);default:tw(n,t),t=Kt=tA(t,ar),t=$A(n,t,ar)}e.memoizedProps=e.pendingProps,t===null?qd(e):Kt=t}function fl(e,t,n,i){Qs=ao=null,xv(t),gl=null,bu=0;var s=t.return;try{if(LI(e,s,t,n,Jt)){je=1,xd(e,Fi(n,e.current)),Kt=null;return}}catch(r){if(s!==null)throw Kt=s,r;je=1,xd(e,Fi(n,e.current)),Kt=null;return}t.flags&32768?(te||i===1?e=!0:Ul||(Jt&536870912)!==0?e=!1:(Vr=e=!0,(i===2||i===9||i===3||i===6)&&(i=_i.current,i!==null&&i.tag===13&&(i.flags|=16384))),ww(t,e)):qd(t)}function qd(e){var t=e;do{if((t.flags&32768)!==0){ww(t,Vr);return}e=t.return;var n=OI(t.alternate,t,ar);if(n!==null){Kt=n;return}if(t=t.sibling,t!==null){Kt=t;return}Kt=t=e}while(t!==null);je===0&&(je=5)}function ww(e,t){do{var n=BI(e.alternate,e);if(n!==null){n.flags&=32767,Kt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Kt=e;return}Kt=e=n}while(e!==null);je=6,Kt=null}function kT(e,t,n,i,s,r,a,o,l){e.cancelPendingCommit=null;do Yd();while(mn!==0);if((oe&6)!==0)throw Error($(327));if(t!==null){if(t===e.current)throw Error($(177));if(r=t.lanes|t.childLanes,r|=sv,TU(e,n,r,a,o,l),e===Ee&&(Kt=Ee=null,Jt=0),Al=t,Zr=e,er=n,Nx=r,Lx=s,vw=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,KI(od,function(){return Nw(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ot.T,Ot.T=null,s=le.p,le.p=2,a=oe,oe|=4;try{FI(e,t,n)}finally{oe=a,le.p=s,Ot.T=i}}mn=1,Cw(),Rw(),Dw()}}function Cw(){if(mn===1){mn=0;var e=Zr,t=Al,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Ot.T,Ot.T=null;var i=le.p;le.p=2;var s=oe;oe|=4;try{fw(t,e);var r=Fx,a=qE(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(a!==o&&o&&o.ownerDocument&&XE(o.ownerDocument.documentElement,o)){if(l!==null&&iv(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var h=o.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=o.textContent.length,b=Math.min(l.start,m),g=l.end===void 0?b:Math.min(l.end,m);!p.extend&&b>g&&(a=g,g=b,b=a);var d=cT(o,b),y=cT(o,g);if(d&&y&&(p.rangeCount!==1||p.anchorNode!==d.node||p.anchorOffset!==d.offset||p.focusNode!==y.node||p.focusOffset!==y.offset)){var _=h.createRange();_.setStart(d.node,d.offset),p.removeAllRanges(),b>g?(p.addRange(_),p.extend(y.node,y.offset)):(_.setEnd(y.node,y.offset),p.addRange(_))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var x=h[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Pd=!!Bx,Fx=Bx=null}finally{oe=s,le.p=i,Ot.T=n}}e.current=t,mn=2}}function Rw(){if(mn===2){mn=0;var e=Zr,t=Al,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ot.T,Ot.T=null;var i=le.p;le.p=2;var s=oe;oe|=4;try{aw(e,t.alternate,t)}finally{oe=s,le.p=i,Ot.T=n}}mn=3}}function Dw(){if(mn===4||mn===3){mn=0,mU();var e=Zr,t=Al,n=er,i=vw;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?mn=5:(mn=0,Al=Zr=null,Pw(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Yr=null),jx(n),t=t.stateNode,gi&&typeof gi.onCommitFiberRoot=="function")try{gi.onCommitFiberRoot(Du,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ot.T,s=le.p,le.p=2,Ot.T=null;try{for(var r=e.onRecoverableError,a=0;a<i.length;a++){var o=i[a];r(o.value,{componentStack:o.stack})}}finally{Ot.T=t,le.p=s}}(er&3)!==0&&Yd(),Ss(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Ux?du++:(du=0,Ux=e):du=0,Fu(0,!1)}}function Pw(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Iu(t)))}function Yd(){return Cw(),Rw(),Dw(),Nw()}function Nw(){if(mn!==5)return!1;var e=Zr,t=Nx;Nx=0;var n=jx(er),i=Ot.T,s=le.p;try{le.p=32>n?32:n,Ot.T=null,n=Lx,Lx=null;var r=Zr,a=er;if(mn=0,Al=Zr=null,er=0,(oe&6)!==0)throw Error($(331));var o=oe;if(oe|=4,gw(r.current),dw(r,r.current,a,n),oe=o,Fu(0,!1),gi&&typeof gi.onPostCommitFiberRoot=="function")try{gi.onPostCommitFiberRoot(Du,r)}catch{}return!0}finally{le.p=s,Ot.T=i,Pw(e,t)}}function GT(e,t,n){t=Fi(n,t),t=wx(e.stateNode,t,2),e=qr(e,t,2),e!==null&&(Nu(e,2),Ss(e))}function pe(e,t,n){if(e.tag===3)GT(e,e,n);else for(;t!==null;){if(t.tag===3){GT(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yr===null||!Yr.has(i))){e=Fi(n,e),n=YA(2),i=qr(t,n,2),i!==null&&(ZA(n,i,t,e),Nu(i,2),Ss(i));break}}t=t.return}}function Xy(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new kI;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Pv=!0,s.add(n),e=qI.bind(null,e,t,n),t.then(e,e))}function qI(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ee===e&&(Jt&n)===n&&(je===4||je===3&&(Jt&62914560)===Jt&&300>mi()-Wd?(oe&2)===0&&wl(e,0):Nv|=n,El===Jt&&(El=0)),Ss(e)}function Lw(e,t){t===0&&(t=TE()),e=ro(e,t),e!==null&&(Nu(e,t),Ss(e))}function YI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lw(e,n)}function ZI(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error($(314))}i!==null&&i.delete(t),Lw(e,n)}function KI(e,t){return Zx(e,t)}var Td=null,$o=null,Ix=!1,Ed=!1,qy=!1,Gr=0;function Ss(e){e!==$o&&e.next===null&&($o===null?Td=$o=e:$o=$o.next=e),Ed=!0,Ix||(Ix=!0,JI())}function Fu(e,t){if(!qy&&Ed){qy=!0;do for(var n=!1,i=Td;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var r=0;else{var a=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-yi(42|e)+1)-1,r&=s&~(a&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,HT(i,r))}else r=Jt,r=Ld(i,i===Ee?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Pu(i,r)||(n=!0,HT(i,r));i=i.next}while(n);qy=!1}}function jI(){Uw()}function Uw(){Ed=Ix=!1;var e=0;Gr!==0&&rO()&&(e=Gr);for(var t=mi(),n=null,i=Td;i!==null;){var s=i.next,r=Iw(i,t);r===0?(i.next=null,n===null?Td=s:n.next=s,s===null&&($o=n)):(n=i,(e!==0||(r&3)!==0)&&(Ed=!0)),i=s}mn!==0&&mn!==5||Fu(e,!1),Gr!==0&&(Gr=0)}function Iw(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var a=31-yi(r),o=1<<a,l=s[a];l===-1?((o&n)===0||(o&i)!==0)&&(s[a]=MU(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=Ee,n=Jt,n=Ld(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&by(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Pu(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&by(i),jx(n)){case 2:case 8:n=SE;break;case 32:n=od;break;case 268435456:n=ME;break;default:n=od}return i=Ow.bind(null,e),n=Zx(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&by(i),e.callbackPriority=2,e.callbackNode=null,2}function Ow(e,t){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Yd()&&e.callbackNode!==n)return null;var i=Jt;return i=Ld(e,e===Ee?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(bw(e,i,t),Iw(e,mi()),e.callbackNode!=null&&e.callbackNode===n?Ow.bind(null,e):null)}function HT(e,t){if(Yd())return null;bw(e,t,!0)}function JI(){oO(function(){(oe&6)!==0?Zx(bE,jI):Uw()})}function Uv(){if(Gr===0){var e=Sl;e===0&&(e=Ah,Ah<<=1,(Ah&261888)===0&&(Ah=256)),Gr=e}return Gr}function WT(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wh(""+e)}function XT(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function QI(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var r=WT((s[ii]||null).action),a=i.submitter;a&&(t=(t=a[ii]||null)?WT(t.formAction):a.getAttribute("formAction"),t!==null&&(r=t,a=null));var o=new Ud("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Gr!==0){var l=a?XT(s,a):new FormData(s);Ex(n,{pending:!0,data:l,method:s.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=a?XT(s,a):new FormData(s),Ex(n,{pending:!0,data:l,method:s.method,action:r},r,l))},currentTarget:s}]})}}for(Fh=0;Fh<dx.length;Fh++)zh=dx[Fh],qT=zh.toLowerCase(),YT=zh[0].toUpperCase()+zh.slice(1),ts(qT,"on"+YT);var zh,qT,YT,Fh;ts(ZE,"onAnimationEnd");ts(KE,"onAnimationIteration");ts(jE,"onAnimationStart");ts("dblclick","onDoubleClick");ts("focusin","onFocus");ts("focusout","onBlur");ts(gI,"onTransitionRun");ts(yI,"onTransitionStart");ts(xI,"onTransitionCancel");ts(JE,"onTransitionEnd");_l("onMouseEnter",["mouseout","mouseover"]);_l("onMouseLeave",["mouseout","mouseover"]);_l("onPointerEnter",["pointerout","pointerover"]);_l("onPointerLeave",["pointerout","pointerover"]);no("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));no("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));no("onBeforeInput",["compositionend","keypress","textInput","paste"]);no("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));no("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));no("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$I=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tu));function Bw(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(u){cd(u)}s.currentTarget=null,r=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(u){cd(u)}s.currentTarget=null,r=l}}}}function Zt(e,t){var n=t[rx];n===void 0&&(n=t[rx]=new Set);var i=e+"__bubble";n.has(i)||(Fw(t,e,2,!1),n.add(i))}function Yy(e,t,n){var i=0;t&&(i|=4),Fw(n,e,i,t)}var Vh="_reactListening"+Math.random().toString(36).slice(2);function Iv(e){if(!e[Vh]){e[Vh]=!0,RE.forEach(function(n){n!=="selectionchange"&&($I.has(n)||Yy(n,!1,e),Yy(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vh]||(t[Vh]=!0,Yy("selectionchange",!1,t))}}function Fw(e,t,n,i){switch(Jw(t)){case 2:var s=wO;break;case 8:s=CO;break;default:s=zv}n=s.bind(null,t,n,e),s=void 0,!ux||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Zy(e,t,n,i,s){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===s)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&a.stateNode.containerInfo===s)return;a=a.return}for(;o!==null;){if(a=nl(o),a===null)return;if(l=a.tag,l===5||l===6||l===26||l===27){i=r=a;continue t}o=o.parentNode}}i=i.return}BE(function(){var c=r,u=$x(n),h=[];t:{var f=QE.get(e);if(f!==void 0){var p=Ud,m=e;switch(e){case"keypress":if(qh(n)===0)break t;case"keydown":case"keyup":p=ZU;break;case"focusin":m="focus",p=Ay;break;case"focusout":m="blur",p=Ay;break;case"beforeblur":case"afterblur":p=Ay;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=tT;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=OU;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=JU;break;case ZE:case KE:case jE:p=zU;break;case JE:p=$U;break;case"scroll":case"scrollend":p=UU;break;case"wheel":p=eI;break;case"copy":case"cut":case"paste":p=kU;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=nT;break;case"toggle":case"beforetoggle":p=iI}var b=(t&4)!==0,g=!b&&(e==="scroll"||e==="scrollend"),d=b?f!==null?f+"Capture":null:f;b=[];for(var y=c,_;y!==null;){var x=y;if(_=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||_===null||d===null||(x=gu(y,d),x!=null&&b.push(Eu(y,x,_))),g)break;y=y.return}0<b.length&&(f=new p(f,m,null,n,u),h.push({event:f,listeners:b}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==cx&&(m=n.relatedTarget||n.fromElement)&&(nl(m)||m[Dl]))break t;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?nl(m):null,m!==null&&(g=Ru(m),b=m.tag,m!==g||b!==5&&b!==27&&b!==6)&&(m=null)):(p=null,m=c),p!==m)){if(b=tT,x="onMouseLeave",d="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(b=nT,x="onPointerLeave",d="onPointerEnter",y="pointer"),g=p==null?f:$c(p),_=m==null?f:$c(m),f=new b(x,y+"leave",p,n,u),f.target=g,f.relatedTarget=_,x=null,nl(u)===c&&(b=new b(d,y+"enter",m,n,u),b.target=_,b.relatedTarget=g,x=b),g=x,p&&m)e:{for(b=tO,d=p,y=m,_=0,x=d;x;x=b(x))_++;x=0;for(var M=y;M;M=b(M))x++;for(;0<_-x;)d=b(d),_--;for(;0<x-_;)y=b(y),x--;for(;_--;){if(d===y||y!==null&&d===y.alternate){b=d;break e}d=b(d),y=b(y)}b=null}else b=null;p!==null&&ZT(h,f,p,b,!1),m!==null&&g!==null&&ZT(h,g,m,b,!0)}}t:{if(f=c?$c(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=aT;else if(rT(f))if(HE)T=dI;else{T=fI;var w=uI}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Qx(c.elementType)&&(T=aT):T=hI;if(T&&(T=T(e,c))){GE(h,T,n,u);break t}w&&w(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&lx(f,"number",f.value)}switch(w=c?$c(c):window,e){case"focusin":(rT(w)||w.contentEditable==="true")&&(rl=w,fx=c,su=null);break;case"focusout":su=fx=rl=null;break;case"mousedown":hx=!0;break;case"contextmenu":case"mouseup":case"dragend":hx=!1,uT(h,n,u);break;case"selectionchange":if(mI)break;case"keydown":case"keyup":uT(h,n,u)}var v;if(nv)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else sl?VE(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(zE&&n.locale!=="ko"&&(sl||A!=="onCompositionStart"?A==="onCompositionEnd"&&sl&&(v=FE()):(zr=u,tv="value"in zr?zr.value:zr.textContent,sl=!0)),w=Ad(c,A),0<w.length&&(A=new eT(A,e,null,n,u),h.push({event:A,listeners:w}),v?A.data=v:(v=kE(n),v!==null&&(A.data=v)))),(v=rI?aI(e,n):oI(e,n))&&(A=Ad(c,"onBeforeInput"),0<A.length&&(w=new eT("onBeforeInput","beforeinput",null,n,u),h.push({event:w,listeners:A}),w.data=v)),QI(h,e,c,n,u)}Bw(h,t)})}function Eu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ad(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=gu(e,n),s!=null&&i.unshift(Eu(e,s,r)),s=gu(e,t),s!=null&&i.push(Eu(e,s,r))),e.tag===3)return i;e=e.return}return[]}function tO(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ZT(e,t,n,i,s){for(var r=t._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=gu(n,r),c!=null&&a.unshift(Eu(n,c,l))):s||(c=gu(n,r),c!=null&&a.push(Eu(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var eO=/\r\n?/g,nO=/\u0000|\uFFFD/g;function KT(e){return(typeof e=="string"?e:""+e).replace(eO,`
`).replace(nO,"")}function zw(e,t){return t=KT(t),KT(e)===t}function ve(e,t,n,i,s,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||bl(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&bl(e,""+i);break;case"className":Rh(e,"class",i);break;case"tabIndex":Rh(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Rh(e,n,i);break;case"style":OE(e,i,r);break;case"data":if(t!=="object"){Rh(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Wh(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&ve(e,t,"name",s.name,s,null),ve(e,t,"formEncType",s.formEncType,s,null),ve(e,t,"formMethod",s.formMethod,s,null),ve(e,t,"formTarget",s.formTarget,s,null)):(ve(e,t,"encType",s.encType,s,null),ve(e,t,"method",s.method,s,null),ve(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Wh(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Js);break;case"onScroll":i!=null&&Zt("scroll",e);break;case"onScrollEnd":i!=null&&Zt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error($(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Wh(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Zt("beforetoggle",e),Zt("toggle",e),Hh(e,"popover",i);break;case"xlinkActuate":Hs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Hs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Hs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Hs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Hs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Hs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Hs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Hs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Hs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Hh(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=NU.get(n)||n,Hh(e,n,i))}}function Ox(e,t,n,i,s,r){switch(n){case"style":OE(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error($(60));e.innerHTML=n}}break;case"children":typeof i=="string"?bl(e,i):(typeof i=="number"||typeof i=="bigint")&&bl(e,""+i);break;case"onScroll":i!=null&&Zt("scroll",e);break;case"onScrollEnd":i!=null&&Zt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Js);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!DE.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),r=e[ii]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,s),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Hh(e,n,i)}}}function In(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Zt("error",e),Zt("load",e);var i=!1,s=!1,r;for(r in n)if(n.hasOwnProperty(r)){var a=n[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:ve(e,t,r,a,n,null)}}s&&ve(e,t,"srcSet",n.srcSet,n,null),i&&ve(e,t,"src",n.src,n,null);return;case"input":Zt("invalid",e);var o=r=a=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":a=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":r=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error($(137,t));break;default:ve(e,t,i,u,n,null)}}LE(e,r,o,l,c,a,s,!1);return;case"select":Zt("invalid",e),i=a=r=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":r=o;break;case"defaultValue":a=o;break;case"multiple":i=o;default:ve(e,t,s,o,n,null)}t=r,n=a,e.multiple=!!i,t!=null?dl(e,!!i,t,!1):n!=null&&dl(e,!!i,n,!0);return;case"textarea":Zt("invalid",e),r=s=i=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":i=o;break;case"defaultValue":s=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error($(91));break;default:ve(e,t,a,o,n,null)}IE(e,i,s,r);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ve(e,t,l,i,n,null)}return;case"dialog":Zt("beforetoggle",e),Zt("toggle",e),Zt("cancel",e),Zt("close",e);break;case"iframe":case"object":Zt("load",e);break;case"video":case"audio":for(i=0;i<Tu.length;i++)Zt(Tu[i],e);break;case"image":Zt("error",e),Zt("load",e);break;case"details":Zt("toggle",e);break;case"embed":case"source":case"link":Zt("error",e),Zt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:ve(e,t,c,i,n,null)}return;default:if(Qx(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&Ox(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ve(e,t,o,i,n,null))}function iO(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,a=null,o=null,l=null,c=null,u=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||ve(e,t,p,null,i,h)}}for(var f in i){var p=i[f];if(h=n[f],i.hasOwnProperty(f)&&(p!=null||h!=null))switch(f){case"type":r=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":u=p;break;case"value":a=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error($(137,t));break;default:p!==h&&ve(e,t,f,p,i,h)}}ox(e,a,o,l,c,u,r,s);return;case"select":p=a=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||ve(e,t,r,null,i,l)}for(s in i)if(r=i[s],l=n[s],i.hasOwnProperty(s)&&(r!=null||l!=null))switch(s){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:r!==l&&ve(e,t,s,r,i,l)}t=o,n=a,i=p,f!=null?dl(e,!!n,f,!1):!!i!=!!n&&(t!=null?dl(e,!!n,t,!0):dl(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ve(e,t,o,null,i,s)}for(a in i)if(s=i[a],r=n[a],i.hasOwnProperty(a)&&(s!=null||r!=null))switch(a){case"value":f=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error($(91));break;default:s!==r&&ve(e,t,a,s,i,r)}UE(e,f,p);return;case"option":for(var m in n)if(f=n[m],n.hasOwnProperty(m)&&f!=null&&!i.hasOwnProperty(m))switch(m){case"selected":e.selected=!1;break;default:ve(e,t,m,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:ve(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)f=n[b],n.hasOwnProperty(b)&&f!=null&&!i.hasOwnProperty(b)&&ve(e,t,b,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error($(137,t));break;default:ve(e,t,c,f,i,p)}return;default:if(Qx(t)){for(var g in n)f=n[g],n.hasOwnProperty(g)&&f!==void 0&&!i.hasOwnProperty(g)&&Ox(e,t,g,void 0,i,f);for(u in i)f=i[u],p=n[u],!i.hasOwnProperty(u)||f===p||f===void 0&&p===void 0||Ox(e,t,u,f,i,p);return}}for(var d in n)f=n[d],n.hasOwnProperty(d)&&f!=null&&!i.hasOwnProperty(d)&&ve(e,t,d,null,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f==null&&p==null||ve(e,t,h,f,i,p)}function jT(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function sO(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],r=s.transferSize,a=s.initiatorType,o=s.duration;if(r&&o&&jT(a)){for(a=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,h=l.initiatorType;u&&jT(h)&&(l=l.responseEnd,a+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(r+a)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bx=null,Fx=null;function wd(e){return e.nodeType===9?e:e.ownerDocument}function JT(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vw(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function zx(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ky=null;function rO(){var e=window.event;return e&&e.type==="popstate"?e===Ky?!1:(Ky=e,!0):(Ky=null,!1)}var kw=typeof setTimeout=="function"?setTimeout:void 0,aO=typeof clearTimeout=="function"?clearTimeout:void 0,QT=typeof Promise=="function"?Promise:void 0,oO=typeof queueMicrotask=="function"?queueMicrotask:typeof QT<"u"?function(e){return QT.resolve(null).then(e).catch(lO)}:kw;function lO(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function $T(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Rl(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")pu(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,pu(n);for(var r=n.firstChild;r;){var a=r.nextSibling,o=r.nodeName;r[Lu]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=a}}else n==="body"&&pu(e.ownerDocument.body);n=s}while(n);Rl(t)}function tE(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Vx(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Vx(n),Jx(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function cO(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Lu])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=ki(e.nextSibling),e===null)break}return null}function uO(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ki(e.nextSibling),e===null))return null;return e}function Gw(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ki(e.nextSibling),e===null))return null;return e}function kx(e){return e.data==="$?"||e.data==="$~"}function Gx(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fO(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ki(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hx=null;function eE(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ki(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function nE(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Hw(e,t,n){switch(t=wd(n),e){case"html":if(e=t.documentElement,!e)throw Error($(452));return e;case"head":if(e=t.head,!e)throw Error($(453));return e;case"body":if(e=t.body,!e)throw Error($(454));return e;default:throw Error($(451))}}function pu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Jx(e)}var Gi=new Map,iE=new Set;function Cd(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var or=le.d;le.d={f:hO,r:dO,D:pO,C:mO,L:gO,m:yO,X:vO,S:xO,M:_O};function hO(){var e=or.f(),t=Xd();return e||t}function dO(e){var t=Pl(e);t!==null&&t.tag===5&&t.type==="form"?OA(t):or.r(e)}var Il=typeof document>"u"?null:document;function Ww(e,t,n){var i=Il;if(i&&typeof t=="string"&&t){var s=Bi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),iE.has(s)||(iE.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),In(t,"link",e),En(t),i.head.appendChild(t)))}}function pO(e){or.D(e),Ww("dns-prefetch",e,null)}function mO(e,t){or.C(e,t),Ww("preconnect",e,t)}function gO(e,t,n){or.L(e,t,n);var i=Il;if(i&&e&&t){var s='link[rel="preload"][as="'+Bi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Bi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Bi(n.imageSizes)+'"]')):s+='[href="'+Bi(e)+'"]';var r=s;switch(t){case"style":r=Cl(e);break;case"script":r=Ol(e)}Gi.has(r)||(e=Ie({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Gi.set(r,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(zu(r))||t==="script"&&i.querySelector(Vu(r))||(t=i.createElement("link"),In(t,"link",e),En(t),i.head.appendChild(t)))}}function yO(e,t){or.m(e,t);var n=Il;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Bi(i)+'"][href="'+Bi(e)+'"]',r=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ol(e)}if(!Gi.has(r)&&(e=Ie({rel:"modulepreload",href:e},t),Gi.set(r,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Vu(r)))return}i=n.createElement("link"),In(i,"link",e),En(i),n.head.appendChild(i)}}}function xO(e,t,n){or.S(e,t,n);var i=Il;if(i&&e){var s=hl(i).hoistableStyles,r=Cl(e);t=t||"default";var a=s.get(r);if(!a){var o={loading:0,preload:null};if(a=i.querySelector(zu(r)))o.loading=5;else{e=Ie({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Gi.get(r))&&Ov(e,n);var l=a=i.createElement("link");En(l),In(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,td(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:o},s.set(r,a)}}}function vO(e,t){or.X(e,t);var n=Il;if(n&&e){var i=hl(n).hoistableScripts,s=Ol(e),r=i.get(s);r||(r=n.querySelector(Vu(s)),r||(e=Ie({src:e,async:!0},t),(t=Gi.get(s))&&Bv(e,t),r=n.createElement("script"),En(r),In(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function _O(e,t){or.M(e,t);var n=Il;if(n&&e){var i=hl(n).hoistableScripts,s=Ol(e),r=i.get(s);r||(r=n.querySelector(Vu(s)),r||(e=Ie({src:e,async:!0,type:"module"},t),(t=Gi.get(s))&&Bv(e,t),r=n.createElement("script"),En(r),In(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function sE(e,t,n,i){var s=(s=Hr.current)?Cd(s):null;if(!s)throw Error($(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Cl(n.href),n=hl(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Cl(n.href);var r=hl(s).hoistableStyles,a=r.get(e);if(a||(s=s.ownerDocument||s,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,a),(r=s.querySelector(zu(e)))&&!r._p&&(a.instance=r,a.state.loading=5),Gi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Gi.set(e,n),r||bO(s,e,n,a.state))),t&&i===null)throw Error($(528,""));return a}if(t&&i!==null)throw Error($(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ol(n),n=hl(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error($(444,e))}}function Cl(e){return'href="'+Bi(e)+'"'}function zu(e){return'link[rel="stylesheet"]['+e+"]"}function Xw(e){return Ie({},e,{"data-precedence":e.precedence,precedence:null})}function bO(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),In(t,"link",n),En(t),e.head.appendChild(t))}function Ol(e){return'[src="'+Bi(e)+'"]'}function Vu(e){return"script[async]"+e}function rE(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Bi(n.href)+'"]');if(i)return t.instance=i,En(i),i;var s=Ie({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),En(i),In(i,"style",s),td(i,n.precedence,e),t.instance=i;case"stylesheet":s=Cl(n.href);var r=e.querySelector(zu(s));if(r)return t.state.loading|=4,t.instance=r,En(r),r;i=Xw(n),(s=Gi.get(s))&&Ov(i,s),r=(e.ownerDocument||e).createElement("link"),En(r);var a=r;return a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),In(r,"link",i),t.state.loading|=4,td(r,n.precedence,e),t.instance=r;case"script":return r=Ol(n.src),(s=e.querySelector(Vu(r)))?(t.instance=s,En(s),s):(i=n,(s=Gi.get(r))&&(i=Ie({},n),Bv(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),En(s),In(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error($(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,td(i,n.precedence,e));return t.instance}function td(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,r=s,a=0;a<i.length;a++){var o=i[a];if(o.dataset.precedence===t)r=o;else if(r!==s)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ov(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bv(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ed=null;function aE(e,t,n){if(ed===null){var i=new Map,s=ed=new Map;s.set(n,i)}else s=ed,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var r=n[s];if(!(r[Lu]||r[Nn]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(t)||"";a=e+a;var o=i.get(a);o?o.push(r):i.set(a,[r])}}return i}function oE(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function SO(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function qw(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function MO(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Cl(i.href),r=t.querySelector(zu(s));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Rd.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,En(r);return}r=t.ownerDocument||t,i=Xw(i),(s=Gi.get(s))&&Ov(i,s),r=r.createElement("link"),En(r);var a=r;a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),In(r,"link",i),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Rd.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var jy=0;function TO(e,t){return e.stylesheets&&e.count===0&&nd(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&nd(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&jy===0&&(jy=62500*sO());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nd(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>jy?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Rd(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dd=null;function nd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dd=new Map,t.forEach(EO,e),Dd=null,Rd.call(e))}function EO(e,t){if(!(t.state.loading&4)){var n=Dd.get(e);if(n)var i=n.get(null);else{n=new Map,Dd.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var a=s[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}s=t.instance,a=s.getAttribute("data-precedence"),r=n.get(a)||i,r===i&&n.set(null,s),n.set(a,s),this.count++,i=Rd.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),r?r.parentNode.insertBefore(s,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Au={$$typeof:js,Provider:null,Consumer:null,_currentValue:qa,_currentValue2:qa,_threadCount:0};function AO(e,t,n,i,s,r,a,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sy(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sy(0),this.hiddenUpdates=Sy(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Yw(e,t,n,i,s,r,a,o,l,c,u,h){return e=new AO(e,t,n,a,l,c,u,h,o),t=1,r===!0&&(t|=24),r=di(3,null,null,t),e.current=r,r.stateNode=e,t=cv(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},hv(r),e}function Zw(e){return e?(e=ll,e):ll}function Kw(e,t,n,i,s,r){s=Zw(s),i.context===null?i.context=s:i.pendingContext=s,i=Xr(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=qr(e,i,t),n!==null&&(ni(n,e,t),au(n,e,t))}function lE(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fv(e,t){lE(e,t),(e=e.alternate)&&lE(e,t)}function jw(e){if(e.tag===13||e.tag===31){var t=ro(e,67108864);t!==null&&ni(t,e,67108864),Fv(e,67108864)}}function cE(e){if(e.tag===13||e.tag===31){var t=xi();t=Kx(t);var n=ro(e,t);n!==null&&ni(n,e,t),Fv(e,t)}}var Pd=!0;function wO(e,t,n,i){var s=Ot.T;Ot.T=null;var r=le.p;try{le.p=2,zv(e,t,n,i)}finally{le.p=r,Ot.T=s}}function CO(e,t,n,i){var s=Ot.T;Ot.T=null;var r=le.p;try{le.p=8,zv(e,t,n,i)}finally{le.p=r,Ot.T=s}}function zv(e,t,n,i){if(Pd){var s=Wx(i);if(s===null)Zy(e,t,i,Nd,n),uE(e,i);else if(DO(s,e,t,n,i))i.stopPropagation();else if(uE(e,i),t&4&&-1<RO.indexOf(e)){for(;s!==null;){var r=Pl(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=Ha(r.pendingLanes);if(a!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var l=1<<31-yi(a);o.entanglements[1]|=l,a&=~l}Ss(r),(oe&6)===0&&(bd=mi()+500,Fu(0,!1))}}break;case 31:case 13:o=ro(r,2),o!==null&&ni(o,r,2),Xd(),Fv(r,2)}if(r=Wx(i),r===null&&Zy(e,t,i,Nd,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else Zy(e,t,i,null,n)}}function Wx(e){return e=$x(e),Vv(e)}var Nd=null;function Vv(e){if(Nd=null,e=nl(e),e!==null){var t=Ru(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=gE(t),e!==null)return e;e=null}else if(n===31){if(e=yE(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nd=e,null}function Jw(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gU()){case bE:return 2;case SE:return 8;case od:case yU:return 32;case ME:return 268435456;default:return 32}default:return 32}}var Xx=!1,Kr=null,jr=null,Jr=null,wu=new Map,Cu=new Map,Br=[],RO="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uE(e,t){switch(e){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":wu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cu.delete(t.pointerId)}}function Kc(e,t,n,i,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},t!==null&&(t=Pl(t),t!==null&&jw(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function DO(e,t,n,i,s){switch(t){case"focusin":return Kr=Kc(Kr,e,t,n,i,s),!0;case"dragenter":return jr=Kc(jr,e,t,n,i,s),!0;case"mouseover":return Jr=Kc(Jr,e,t,n,i,s),!0;case"pointerover":var r=s.pointerId;return wu.set(r,Kc(wu.get(r)||null,e,t,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,Cu.set(r,Kc(Cu.get(r)||null,e,t,n,i,s)),!0}return!1}function Qw(e){var t=nl(e.target);if(t!==null){var n=Ru(t);if(n!==null){if(t=n.tag,t===13){if(t=gE(n),t!==null){e.blockedOn=t,Y1(e.priority,function(){cE(n)});return}}else if(t===31){if(t=yE(n),t!==null){e.blockedOn=t,Y1(e.priority,function(){cE(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function id(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wx(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);cx=i,n.target.dispatchEvent(i),cx=null}else return t=Pl(n),t!==null&&jw(t),e.blockedOn=n,!1;t.shift()}return!0}function fE(e,t,n){id(e)&&n.delete(t)}function PO(){Xx=!1,Kr!==null&&id(Kr)&&(Kr=null),jr!==null&&id(jr)&&(jr=null),Jr!==null&&id(Jr)&&(Jr=null),wu.forEach(fE),Cu.forEach(fE)}function kh(e,t){e.blockedOn===t&&(e.blockedOn=null,Xx||(Xx=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,PO)))}var Gh=null;function hE(e){Gh!==e&&(Gh=e,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,function(){Gh===e&&(Gh=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Vv(i||n)===null)continue;break}var r=Pl(n);r!==null&&(e.splice(t,3),t-=3,Ex(r,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Rl(e){function t(l){return kh(l,e)}Kr!==null&&kh(Kr,e),jr!==null&&kh(jr,e),Jr!==null&&kh(Jr,e),wu.forEach(t),Cu.forEach(t);for(var n=0;n<Br.length;n++){var i=Br[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Br.length&&(n=Br[0],n.blockedOn===null);)Qw(n),n.blockedOn===null&&Br.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],r=n[i+1],a=s[ii]||null;if(typeof r=="function")a||hE(n);else if(a){var o=null;if(r&&r.hasAttribute("formAction")){if(s=r,a=r[ii]||null)o=a.formAction;else if(Vv(s)!==null)continue}else o=a.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),hE(n)}}}function $w(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(a){return s=a})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function kv(e){this._internalRoot=e}Zd.prototype.render=kv.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));var n=t.current,i=xi();Kw(n,i,e,t,null,null)};Zd.prototype.unmount=kv.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kw(e.current,2,null,e,null,null),Xd(),t[Dl]=null}};function Zd(e){this._internalRoot=e}Zd.prototype.unstable_scheduleHydration=function(e){if(e){var t=CE();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Br.length&&t!==0&&t<Br[n].priority;n++);Br.splice(n,0,e),n===0&&Qw(e)}};var dE=pE.version;if(dE!=="19.2.0")throw Error($(527,dE,"19.2.0"));le.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=cU(t),e=e!==null?xE(e):null,e=e===null?null:e.stateNode,e};var NO={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:Ot,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(jc=__REACT_DEVTOOLS_GLOBAL_HOOK__,!jc.isDisabled&&jc.supportsFiber))try{Du=jc.inject(NO),gi=jc}catch{}var jc;Kd.createRoot=function(e,t){if(!mE(e))throw Error($(299));var n=!1,i="",s=WA,r=XA,a=qA;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Yw(e,1,!1,null,null,n,i,null,s,r,a,$w),e[Dl]=t.current,Iv(e),new kv(t)};Kd.hydrateRoot=function(e,t,n){if(!mE(e))throw Error($(299));var i=!1,s="",r=WA,a=XA,o=qA,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Yw(e,1,!0,t,n??null,i,s,l,r,a,o,$w),t.context=Zw(null),n=t.current,i=xi(),i=Kx(i),s=Xr(i),s.callback=null,qr(n,s,i),n=i,t.current.lanes=n,Nu(t,n),Ss(t),e[Dl]=t.current,Iv(e),new Zd(t)};Kd.version="19.2.0"});var iC=Ji((o6,nC)=>{"use strict";function eC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eC)}catch(e){console.error(e)}}eC(),nC.exports=tC()});function Hv(){let[e,t]=(0,Je.useState)(!1);return(0,Je.useEffect)(()=>{let n=setTimeout(()=>t(!0),30);return()=>clearTimeout(n)},[]),Je.default.createElement("div",{style:{border:"1px solid var(--border, rgba(148, 163, 184, 0.6))",borderRadius:"14px",padding:"16px 18px",margin:"18px 0",background:"var(--entry, #0f172a)",boxShadow:e?"0 10px 30px rgba(15, 23, 42, 0.18)":"0 2px 10px rgba(15, 23, 42, 0.08)",color:"var(--content, #e5e7eb)",fontSize:"0.95rem",position:"relative",overflow:"hidden",transform:e?"translateY(0px)":"translateY(10px)",opacity:e?1:0,transition:"transform 260ms ease-out, opacity 260ms ease-out, box-shadow 260ms ease-out"}},Je.default.createElement("div",{style:{position:"absolute",inset:"0",background:"radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.22), transparent 55%), radial-gradient(circle at 100% 100%, rgba(129, 140, 248, 0.24), transparent 55%)",pointerEvents:"none"}}),Je.default.createElement("div",{style:{position:"relative"}},Je.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.7rem",marginBottom:"0.8rem"}},Je.default.createElement("div",{style:{width:"32px",height:"32px",borderRadius:"999px",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(56,189,248,0.9), rgba(129,140,248,0.9))",boxShadow:"0 6px 14px rgba(15, 23, 42, 0.6)",fontSize:"1.1rem"}},"\u2699\uFE0F"),Je.default.createElement("div",null,Je.default.createElement("div",{style:{fontWeight:700,fontSize:"1rem"}},"systemd-boot \u8D77\u52D5\u30D5\u30ED\u30FC"),Je.default.createElement("div",{style:{fontSize:"0.8rem",opacity:.8}},"\u300C\u3069\u3053\u304B\u3089\u3069\u3053\u3078\u98DB\u3093\u3067\u3044\u308B\u304B\u300D\u3092\u3056\u3063\u304F\u308A\u63B4\u3080\u305F\u3081\u306E\u56F3"))),Je.default.createElement("ol",{style:{listStyle:"none",padding:0,margin:0}},Gv.map((n,i)=>Je.default.createElement("li",{key:n.title,style:{display:"flex",alignItems:"flex-start",gap:"0.75rem",marginBottom:i===Gv.length-1?0:"0.9rem",opacity:e?1:0,transform:e?"translateY(0px)":"translateY(6px)",transition:"opacity 260ms ease-out, transform 260ms ease-out",transitionDelay:e?`${80+i*90}ms`:"0ms"}},Je.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"2px"}},Je.default.createElement("div",{style:{width:"22px",height:"22px",borderRadius:"999px",border:"1px solid rgba(148,163,184,0.8)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8rem",fontWeight:700,background:"var(--theme, rgba(15,23,42,0.96))"}},i+1),i!==Gv.length-1&&Je.default.createElement("div",{style:{width:"2px",flexGrow:1,marginTop:"2px",background:"linear-gradient(to bottom, rgba(148,163,184,0.8), rgba(148,163,184,0.05))"}})),Je.default.createElement("div",null,Je.default.createElement("div",{style:{fontWeight:600,marginBottom:"2px"}},n.title),Je.default.createElement("div",{style:{fontSize:"0.85rem",opacity:.9}},n.desc))))),Je.default.createElement("p",{style:{fontSize:"0.8rem",opacity:.7,marginTop:"0.85rem"}},"\u203B \u5B9F\u969B\u306E\u30A8\u30F3\u30C8\u30EA\u8A2D\u5B9A\u306F\u672C\u6587\u4E2D\u306E loader/entries/*.conf \u306E\u4F8B\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002")))}var Je,Gv,sC=D(()=>{Je=xe(Te()),Gv=[{title:"UEFI",desc:"ASRock A520M Pro4 \u306E\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2\u304C\u6700\u521D\u306B\u8D77\u52D5\u3059\u308B\u3002"},{title:"ESP\uFF08vfat, /boot\uFF09",desc:"EFI System Partition \u4E0A\u306E /EFI/ \u914D\u4E0B\u304C\u63A2\u7D22\u3055\u308C\u308B\u3002"},{title:"systemd-boot",desc:"systemd-bootx64.efi \u304C\u5B9F\u884C\u3055\u308C\u3001\u30A8\u30F3\u30C8\u30EA\u4E00\u89A7\u3092\u8868\u793A\u3002"},{title:"Arch Linux / Windows Boot Manager",desc:"\u9078\u629E\u3057\u305F\u30A8\u30F3\u30C8\u30EA\u306B\u5FDC\u3058\u3066 vmlinuz \u307E\u305F\u306F bootmgfw.efi \u3092\u8D77\u52D5\u3002"}]});function LO(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function UO(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ju(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function r2(){let e=Ju("canvas");return e.style.display="block",e}function X_(...e){let t="THREE."+e.shift();jl?jl("log",t,...e):console.log(t,...e)}function a2(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Nt(...e){e=a2(e);let t="THREE."+e.shift();if(jl)jl("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function It(...e){e=a2(e);let t="THREE."+e.shift();if(jl)jl("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ho(...e){let t=e.join(" ");t in rC||(rC[t]=!0,Nt(...e))}function o2(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function _f(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[e&255]+zn[e>>8&255]+zn[e>>16&255]+zn[e>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function ee(e,t,n){return Math.max(t,Math.min(n,e))}function IO(e,t){return(e%t+t)%t}function Xv(e,t,n){return(1-n)*e+n*t}function ku(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ri(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function OO(){let e={enabled:!0,workingColorSpace:Zu,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=Kl(s.r),s.g=Kl(s.g),s.b=Kl(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yr?Ku:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ho("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ho("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Zu]:{primaries:t,whitePoint:i,transfer:Ku,toXYZ:oC,fromXYZ:lC,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:oC,fromXYZ:lC,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),e}function dr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Kl(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function Zv(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Up.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}function Jv(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function r_(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){lo.fromArray(e,r);let o=s.x*Math.abs(lo.x)+s.y*Math.abs(lo.y)+s.z*Math.abs(lo.z),l=t.dot(lo),c=n.dot(lo),u=i.dot(lo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}function jO(e,t,n,i,s,r,a,o){let l;if(t.side===Zn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===pr,o),l===null)return null;up.copy(o),up.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(up);return c<n.near||c>n.far?null:{distance:c,point:up.clone(),object:e}}function fp(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,ap),e.getVertexPosition(l,op),e.getVertexPosition(c,lp);let u=jO(e,t,n,i,ap,op,lp,vC);if(u){let h=new O;ua.getBarycoord(vC,ap,op,lp,h),s&&(u.uv=ua.getInterpolatedAttribute(s,o,l,c,h,new jt)),r&&(u.uv1=ua.getInterpolatedAttribute(r,o,l,c,h,new jt)),a&&(u.normal=ua.getInterpolatedAttribute(a,o,l,c,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new O,materialIndex:0};ua.getNormal(ap,op,lp,f.normal),u.face=f,u.barycoord=h}return u}function pp(e,t,n,i,s,r,a){let o=e.geometry.attributes.position;if(Fp.fromBufferAttribute(o,s),zp.fromBufferAttribute(o,r),n.distanceSqToSegment(Fp,zp,d_,bC)>i)return;d_.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(d_);if(!(c<t.near||c>t.far))return{distance:c,point:bC.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}function MC(e,t,n,i,s,r,a){let o=__.distanceSqToPoint(e);if(o<n){let l=new O;__.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}function _o(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(TC(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(TC(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Gn(e){let t={};for(let n=0;n<e.length;n++){let i=_o(e[n]);for(let s in i)t[s]=i[s]}return t}function TC(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function tB(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function q_(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}function yp(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function K_(e,t,n,i){let s=fB(i);switch(n){case V_:return e*t;case G_:return e*t/s.components*s.byteLength;case cm:return e*t/s.components*s.byteLength;case Sa:return e*t*2/s.components*s.byteLength;case um:return e*t*2/s.components*s.byteLength;case k_:return e*t*3/s.components*s.byteLength;case Wi:return e*t*4/s.components*s.byteLength;case fm:return e*t*4/s.components*s.byteLength;case pf:case mf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case gf:case yf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dm:case mm:return Math.max(e,16)*Math.max(t,8)/4;case hm:case pm:return Math.max(e,8)*Math.max(t,8)/2;case gm:case ym:case vm:case _m:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case xm:case xf:case bm:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sm:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Mm:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Tm:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Em:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Am:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case wm:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Cm:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Rm:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Dm:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Pm:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Nm:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Lm:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Um:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Im:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Om:case Bm:case Fm:return Math.ceil(e/4)*Math.ceil(t/4)*16;case zm:case Vm:return Math.ceil(e/4)*Math.ceil(t/4)*8;case vf:case km:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function fB(e){switch(e){case Ci:case O_:return{byteLength:1,components:1};case oc:case B_:case Ds:return{byteLength:2,components:1};case om:case lm:return{byteLength:2,components:4};case os:case am:case ls:return{byteLength:4,components:1};case F_:case z_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}var wC,M_,CC,ff,RC,ac,pr,Zn,wi,Rs,po,T_,E_,A_,DC,fa,PC,NC,LC,UC,IC,OC,BC,FC,bp,Sp,zC,VC,kC,GC,HC,WC,XC,qC,YC,Mp,Tp,Ep,mo,Ap,wp,Cp,Rp,w_,ZC,KC,as,C_,R_,D_,P_,N_,L_,U_,I_,va,vo,im,sm,hf,Dp,Es,Pp,Cn,jC,df,On,rm,_a,Ci,O_,B_,oc,am,os,ls,Ds,om,lm,lc,F_,z_,V_,k_,Wi,As,ba,G_,cm,Sa,um,fm,pf,mf,gf,yf,hm,dm,pm,mm,gm,ym,xm,vm,_m,xf,bm,Sm,Mm,Tm,Em,Am,wm,Cm,Rm,Dm,Pm,Nm,Lm,Um,Im,Om,Bm,Fm,zm,Vm,vf,km,Yu,Np,_p,p_,m_,g_,y_,JC,H_,QC,yr,Mi,Zu,Ku,ue,fo,x_,$C,t2,e2,Gm,n2,i2,Hm,s2,v_,W_,ss,ju,rC,jl,l2,ws,zn,Wv,Lp,jt,Cs,O,qv,aC,Bt,Yv,oC,lC,Qt,Bl,Up,BO,Jl,FO,Kv,ai,Ge,Ip,Ti,Qu,Op,ke,Fl,es,zO,VO,sa,jd,bi,cC,uC,ha,$u,kO,fC,zl,lr,Jd,Gu,GO,HO,hC,dC,pC,mC,WO,Vl,jv,oi,rs,XO,Ql,c2,ra,Qd,ne,Vn,go,ns,cr,Qv,ur,kl,Gl,gC,$v,t_,e_,n_,i_,s_,ua,da,fr,is,$d,Hl,Wl,Xl,aa,oa,oo,Hu,tp,ep,lo,hn,np,qO,Yn,tf,ef,be,YO,Wu,a_,pa,ZO,Hi,o_,ql,Si,Xu,wn,sn,KO,mr,hr,l_,ip,la,c_,sp,u_,$l,yn,yC,co,rp,xC,ap,op,lp,f_,cp,vC,up,De,Bp,h_,JO,QO,Ts,uo,$O,hp,nf,tc,Fp,zp,_C,qu,dp,d_,bC,sf,ec,SC,__,mp,gp,rf,af,gr,Vp,of,nc,yo,kp,lf,ma,ic,sc,rc,u2,eB,nB,Ei,Gp,Hp,Wp,ga,Xp,qp,Yp,Zp,Ai,ya,Kp,jp,Jp,cf,xa,Qp,$p,f2,tm,xp,vp,Ms,uf,ca,EC,AC,kn,xo,Yl,Zl,em,nm,Y_,iB,Z_,sB,rB,aB,oB,lB,cB,uB,b_,Oe,c6,S_,j_=D(()=>{wC=0,M_=1,CC=2,ff=1,RC=2,ac=3,pr=0,Zn=1,wi=2,Rs=0,po=1,T_=2,E_=3,A_=4,DC=5,fa=100,PC=101,NC=102,LC=103,UC=104,IC=200,OC=201,BC=202,FC=203,bp=204,Sp=205,zC=206,VC=207,kC=208,GC=209,HC=210,WC=211,XC=212,qC=213,YC=214,Mp=0,Tp=1,Ep=2,mo=3,Ap=4,wp=5,Cp=6,Rp=7,w_=0,ZC=1,KC=2,as=0,C_=1,R_=2,D_=3,P_=4,N_=5,L_=6,U_=7,I_=300,va=301,vo=302,im=303,sm=304,hf=306,Dp=1e3,Es=1001,Pp=1002,Cn=1003,jC=1004,df=1005,On=1006,rm=1007,_a=1008,Ci=1009,O_=1010,B_=1011,oc=1012,am=1013,os=1014,ls=1015,Ds=1016,om=1017,lm=1018,lc=1020,F_=35902,z_=35899,V_=1021,k_=1022,Wi=1023,As=1026,ba=1027,G_=1028,cm=1029,Sa=1030,um=1031,fm=1033,pf=33776,mf=33777,gf=33778,yf=33779,hm=35840,dm=35841,pm=35842,mm=35843,gm=36196,ym=37492,xm=37496,vm=37488,_m=37489,xf=37490,bm=37491,Sm=37808,Mm=37809,Tm=37810,Em=37811,Am=37812,wm=37813,Cm=37814,Rm=37815,Dm=37816,Pm=37817,Nm=37818,Lm=37819,Um=37820,Im=37821,Om=36492,Bm=36494,Fm=36495,zm=36283,Vm=36284,vf=36285,km=36286,Yu=2300,Np=2301,_p=2302,p_=2303,m_=2400,g_=2401,y_=2402,JC=3200,H_=0,QC=1,yr="",Mi="srgb",Zu="srgb-linear",Ku="linear",ue="srgb",fo=7680,x_=519,$C=512,t2=513,e2=514,Gm=515,n2=516,i2=517,Hm=518,s2=519,v_=35044,W_="300 es",ss=2e3,ju=2001;rC={},jl=null;l2={[Mp]:Tp,[Ep]:Cp,[Ap]:Rp,[mo]:wp,[Tp]:Mp,[Cp]:Ep,[Rp]:Ap,[wp]:mo},ws=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wv=Math.PI/180,Lp=180/Math.PI;jt=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ee(this.x,t.x,n.x),this.y=ee(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ee(this.x,t,n),this.y=ee(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cs=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],p=r[a+1],m=r[a+2],b=r[a+3];if(h!==b||l!==f||c!==p||u!==m){let g=l*f+c*p+u*m+h*b;g<0&&(f=-f,p=-p,m=-m,b=-b,g=-g);let d=1-o;if(g<.9995){let y=Math.acos(g),_=Math.sin(y);d=Math.sin(d*y)/_,o=Math.sin(o*y)/_,l=l*d+f*o,c=c*d+p*o,u=u*d+m*o,h=h*d+b*o}else{l=l*d+f*o,c=c*d+p*o,u=u*d+m*o,h=h*d+b*o;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return t[n]=o*m+u*h+l*p-c*f,t[n+1]=l*m+u*f+c*h-o*p,t[n+2]=c*m+u*p+o*f-l*h,t[n+3]=u*m-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h-f*p*m;break;case"YXZ":this._x=f*u*h+c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h+f*p*m;break;case"ZXY":this._x=f*u*h-c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h-f*p*m;break;case"ZYX":this._x=f*u*h-c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h+f*p*m;break;case"YZX":this._x=f*u*h+c*p*m,this._y=c*p*h+f*u*m,this._z=c*u*m-f*p*h,this._w=c*u*h-f*p*m;break;case"XZY":this._x=f*u*h-c*p*m,this._y=c*p*h-f*u*m,this._z=c*u*m+f*p*h,this._w=c*u*h+f*p*m;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){let p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(aC.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(aC.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*n-r*s),h=2*(r*i-a*n);return this.x=n+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ee(this.x,t.x,n.x),this.y=ee(this.y,t.y,n.y),this.z=ee(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ee(this.x,t,n),this.y=ee(this.y,t,n),this.z=ee(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return qv.copy(this).projectOnVector(t),this.sub(qv)}reflect(t){return this.sub(qv.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qv=new O,aC=new Cs,Bt=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,l,c)}set(t,n,i,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],m=i[8],b=s[0],g=s[3],d=s[6],y=s[1],_=s[4],x=s[7],M=s[2],T=s[5],w=s[8];return r[0]=a*b+o*y+l*M,r[3]=a*g+o*_+l*T,r[6]=a*d+o*x+l*w,r[1]=c*b+u*y+h*M,r[4]=c*g+u*_+h*T,r[7]=c*d+u*x+h*w,r[2]=f*b+p*y+m*M,r[5]=f*g+p*_+m*T,r[8]=f*d+p*x+m*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*a*u-n*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,m=n*h+i*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return t[0]=h*b,t[1]=(s*c-u*i)*b,t[2]=(o*i-s*a)*b,t[3]=f*b,t[4]=(u*n-s*l)*b,t[5]=(s*r-o*n)*b,t[6]=p*b,t[7]=(i*l-c*n)*b,t[8]=(a*n-i*r)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(t,n){return ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yv.makeScale(t,n)),this}rotate(t){return ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yv.makeRotation(-t)),this}translate(t,n){return ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yv.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yv=new Bt,oC=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lC=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt=OO();Up=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Bl===void 0&&(Bl=Ju("canvas")),Bl.width=t.width,Bl.height=t.height;let s=Bl.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Bl}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Ju("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=dr(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(dr(n[i]/255)*255):n[i]=dr(n[i]);return{data:n,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},BO=0,Jl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BO++}),this.uuid=_f(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zv(s[a].image)):r.push(Zv(s[a]))}else r=Zv(s);i.url=r}return n||(t.images[this.uuid]=i),i}};FO=0,Kv=new O,ai=class e extends ws{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Es,s=Es,r=On,a=_a,o=Wi,l=Ci,c=e.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FO++}),this.uuid=_f(),this.name="",this.source=new Jl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kv).x}get height(){return this.source.getSize(Kv).y}get depth(){return this.source.getSize(Kv).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Nt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Nt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==I_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dp:t.x=t.x-Math.floor(t.x);break;case Es:t.x=t.x<0?0:1;break;case Pp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dp:t.y=t.y-Math.floor(t.y);break;case Es:t.y=t.y<0?0:1;break;case Pp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=I_;ai.DEFAULT_ANISOTROPY=1;Ge=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],m=l[9],b=l[2],g=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,x=(p+1)/2,M=(d+1)/2,T=(u+f)/4,w=(h+b)/4,v=(m+g)/4;return _>x&&_>M?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=w/i):x>M?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=v/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=w/r,s=v/r),this.set(i,s,r,n),this}let y=Math.sqrt((g-m)*(g-m)+(h-b)*(h-b)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-b)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ee(this.x,t.x,n.x),this.y=ee(this.y,t.y,n.y),this.z=ee(this.z,t.z,n.z),this.w=ee(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ee(this.x,t,n),this.y=ee(this.y,t,n),this.z=ee(this.z,t,n),this.w=ee(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ip=class extends ws{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ge(0,0,t,n),this.scissorTest=!1,this.viewport=new Ge(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},r=new ai(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Jl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends Ip{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Qu=class extends ai{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Op=class extends ai{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ke=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,r,a,o,l,c,u,h,f,p,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,l,c,u,h,f,p,m,b,g)}set(t,n,i,s,r,a,o,l,c,u,h,f,p,m,b,g){let d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=m,d[11]=b,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Fl.setFromMatrixColumn(t,0).length(),r=1/Fl.setFromMatrixColumn(t,1).length(),a=1/Fl.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=a*u,p=a*h,m=o*u,b=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+m*c,n[5]=f-b*c,n[9]=-o*l,n[2]=b-f*c,n[6]=m+p*c,n[10]=a*l}else if(t.order==="YXZ"){let f=l*u,p=l*h,m=c*u,b=c*h;n[0]=f+b*o,n[4]=m*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=p*o-m,n[6]=b+f*o,n[10]=a*l}else if(t.order==="ZXY"){let f=l*u,p=l*h,m=c*u,b=c*h;n[0]=f-b*o,n[4]=-a*h,n[8]=m+p*o,n[1]=p+m*o,n[5]=a*u,n[9]=b-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(t.order==="ZYX"){let f=a*u,p=a*h,m=o*u,b=o*h;n[0]=l*u,n[4]=m*c-p,n[8]=f*c+b,n[1]=l*h,n[5]=b*c+f,n[9]=p*c-m,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,m=o*l,b=o*c;n[0]=l*u,n[4]=b-f*h,n[8]=m*h+p,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+m,n[10]=f-b*h}else if(t.order==="XZY"){let f=a*l,p=a*c,m=o*l,b=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+b,n[5]=a*u,n[9]=p*h-m,n[2]=m*h-p,n[6]=o*u,n[10]=b*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zO,t,VO)}lookAt(t,n,i){let s=this.elements;return bi.subVectors(t,n),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),sa.crossVectors(i,bi),sa.lengthSq()===0&&(Math.abs(i.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),sa.crossVectors(i,bi)),sa.normalize(),jd.crossVectors(bi,sa),s[0]=sa.x,s[4]=jd.x,s[8]=bi.x,s[1]=sa.y,s[5]=jd.y,s[9]=bi.y,s[2]=sa.z,s[6]=jd.z,s[10]=bi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],m=i[2],b=i[6],g=i[10],d=i[14],y=i[3],_=i[7],x=i[11],M=i[15],T=s[0],w=s[4],v=s[8],A=s[12],C=s[1],P=s[5],L=s[9],q=s[13],H=s[2],B=s[6],W=s[10],X=s[14],Y=s[3],nt=s[7],at=s[11],ot=s[15];return r[0]=a*T+o*C+l*H+c*Y,r[4]=a*w+o*P+l*B+c*nt,r[8]=a*v+o*L+l*W+c*at,r[12]=a*A+o*q+l*X+c*ot,r[1]=u*T+h*C+f*H+p*Y,r[5]=u*w+h*P+f*B+p*nt,r[9]=u*v+h*L+f*W+p*at,r[13]=u*A+h*q+f*X+p*ot,r[2]=m*T+b*C+g*H+d*Y,r[6]=m*w+b*P+g*B+d*nt,r[10]=m*v+b*L+g*W+d*at,r[14]=m*A+b*q+g*X+d*ot,r[3]=y*T+_*C+x*H+M*Y,r[7]=y*w+_*P+x*B+M*nt,r[11]=y*v+_*L+x*W+M*at,r[15]=y*A+_*q+x*X+M*ot,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],m=t[3],b=t[7],g=t[11],d=t[15],y=l*p-c*f,_=o*p-c*h,x=o*f-l*h,M=a*p-c*u,T=a*f-l*u,w=a*h-o*u;return n*(b*y-g*_+d*x)-i*(m*y-g*M+d*T)+s*(m*_-b*M+d*w)-r*(m*x-b*T+g*w)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return n*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],m=t[12],b=t[13],g=t[14],d=t[15],y=n*o-i*a,_=n*l-s*a,x=n*c-r*a,M=i*l-s*o,T=i*c-r*o,w=s*c-r*l,v=u*b-h*m,A=u*g-f*m,C=u*d-p*m,P=h*g-f*b,L=h*d-p*b,q=f*d-p*g,H=y*q-_*L+x*P+M*C-T*A+w*v;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/H;return t[0]=(o*q-l*L+c*P)*B,t[1]=(s*L-i*q-r*P)*B,t[2]=(b*w-g*T+d*M)*B,t[3]=(f*T-h*w-p*M)*B,t[4]=(l*C-a*q-c*A)*B,t[5]=(n*q-s*C+r*A)*B,t[6]=(g*x-m*w-d*_)*B,t[7]=(u*w-f*x+p*_)*B,t[8]=(a*L-o*C+c*v)*B,t[9]=(i*C-n*L-r*v)*B,t[10]=(m*T-b*x+d*y)*B,t[11]=(h*x-u*T-p*y)*B,t[12]=(o*A-a*P-l*v)*B,t[13]=(n*P-i*A+s*v)*B,t[14]=(b*_-m*M-g*y)*B,t[15]=(u*M-h*_+f*y)*B,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,m=r*h,b=a*u,g=a*h,d=o*h,y=l*c,_=l*u,x=l*h,M=i.x,T=i.y,w=i.z;return s[0]=(1-(b+d))*M,s[1]=(p+x)*M,s[2]=(m-_)*M,s[3]=0,s[4]=(p-x)*T,s[5]=(1-(f+d))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(m+_)*w,s[9]=(g-y)*w,s[10]=(1-(f+b))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let a=Fl.set(s[0],s[1],s[2]).length(),o=Fl.set(s[4],s[5],s[6]).length(),l=Fl.set(s[8],s[9],s[10]).length();r<0&&(a=-a),es.copy(this);let c=1/a,u=1/o,h=1/l;return es.elements[0]*=c,es.elements[1]*=c,es.elements[2]*=c,es.elements[4]*=u,es.elements[5]*=u,es.elements[6]*=u,es.elements[8]*=h,es.elements[9]*=h,es.elements[10]*=h,n.setFromRotationMatrix(es),i.x=a,i.y=o,i.z=l,this}makePerspective(t,n,i,s,r,a,o=ss,l=!1){let c=this.elements,u=2*r/(n-t),h=2*r/(i-s),f=(n+t)/(n-t),p=(i+s)/(i-s),m,b;if(l)m=r/(a-r),b=a*r/(a-r);else if(o===ss)m=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===ju)m=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,a,o=ss,l=!1){let c=this.elements,u=2/(n-t),h=2/(i-s),f=-(n+t)/(n-t),p=-(i+s)/(i-s),m,b;if(l)m=1/(a-r),b=a/(a-r);else if(o===ss)m=-2/(a-r),b=-(a+r)/(a-r);else if(o===ju)m=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Fl=new O,es=new ke,zO=new O(0,0,0),VO=new O(1,1,1),sa=new O,jd=new O,bi=new O,cC=new ke,uC=new Cs,ha=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return cC.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cC,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return uC.setFromEuler(this),this.setFromQuaternion(uC,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ha.DEFAULT_ORDER="XYZ";$u=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kO=0,fC=new O,zl=new Cs,lr=new ke,Jd=new O,Gu=new O,GO=new O,HO=new Cs,hC=new O(1,0,0),dC=new O(0,1,0),pC=new O(0,0,1),mC={type:"added"},WO={type:"removed"},Vl={type:"childadded",child:null},jv={type:"childremoved",child:null},oi=class e extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kO++}),this.uuid=_f(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new O,n=new ha,i=new Cs,s=new O(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Bt}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return zl.setFromAxisAngle(t,n),this.quaternion.multiply(zl),this}rotateOnWorldAxis(t,n){return zl.setFromAxisAngle(t,n),this.quaternion.premultiply(zl),this}rotateX(t){return this.rotateOnAxis(hC,t)}rotateY(t){return this.rotateOnAxis(dC,t)}rotateZ(t){return this.rotateOnAxis(pC,t)}translateOnAxis(t,n){return fC.copy(t).applyQuaternion(this.quaternion),this.position.add(fC.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(hC,t)}translateY(t){return this.translateOnAxis(dC,t)}translateZ(t){return this.translateOnAxis(pC,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Jd.copy(t):Jd.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Gu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(Gu,Jd,this.up):lr.lookAt(Jd,Gu,this.up),this.quaternion.setFromRotationMatrix(lr),s&&(lr.extractRotation(s.matrixWorld),zl.setFromRotationMatrix(lr),this.quaternion.premultiply(zl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mC),Vl.child=t,this.dispatchEvent(Vl),Vl.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(WO),jv.child=t,this.dispatchEvent(jv),jv.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),lr.multiply(t.parent.matrixWorld)),t.applyMatrix4(lr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mC),Vl.child=t,this.dispatchEvent(Vl),Vl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gu,t,GO),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gu,HO,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(n){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};oi.DEFAULT_UP=new O(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;rs=class extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}},XO={type:"move"},Ql=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let g=n.getJointPose(b,i),d=this._getHandJoint(c,b);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(XO)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new rs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},c2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ra={h:0,s:0,l:0},Qd={h:0,s:0,l:0};ne=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Qt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Qt.workingColorSpace){if(t=IO(t,1),n=ee(n,0,1),i=ee(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Jv(a,r,t+1/3),this.g=Jv(a,r,t),this.b=Jv(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,n=Mi){function i(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Mi){let i=c2[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}copyLinearToSRGB(t){return this.r=Kl(t.r),this.g=Kl(t.g),this.b=Kl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return Qt.workingToColorSpace(Vn.copy(this),t),Math.round(ee(Vn.r*255,0,255))*65536+Math.round(ee(Vn.g*255,0,255))*256+Math.round(ee(Vn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Qt.workingColorSpace){Qt.workingToColorSpace(Vn.copy(this),n);let i=Vn.r,s=Vn.g,r=Vn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=Qt.workingColorSpace){return Qt.workingToColorSpace(Vn.copy(this),n),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=Mi){Qt.workingToColorSpace(Vn.copy(this),t);let n=Vn.r,i=Vn.g,s=Vn.b;return t!==Mi?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ra),this.setHSL(ra.h+t,ra.s+n,ra.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ra),t.getHSL(Qd);let i=Xv(ra.h,Qd.h,n),s=Xv(ra.s,Qd.s,n),r=Xv(ra.l,Qd.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new ne;ne.NAMES=c2;go=class extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},ns=new O,cr=new O,Qv=new O,ur=new O,kl=new O,Gl=new O,gC=new O,$v=new O,t_=new O,e_=new O,n_=new Ge,i_=new Ge,s_=new Ge,ua=class e{constructor(t=new O,n=new O,i=new O){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),ns.subVectors(t,n),s.cross(ns);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){ns.subVectors(s,n),cr.subVectors(i,n),Qv.subVectors(t,n);let a=ns.dot(ns),o=ns.dot(cr),l=ns.dot(Qv),c=cr.dot(cr),u=cr.dot(Qv),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-o*u)*f,m=(a*u-o*l)*f;return r.set(1-p-m,m,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(t,n,i,s,r,a,o,l){return this.getBarycoord(t,n,i,s,ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ur.x),l.addScaledVector(a,ur.y),l.addScaledVector(o,ur.z),l)}static getInterpolatedAttribute(t,n,i,s,r,a){return n_.setScalar(0),i_.setScalar(0),s_.setScalar(0),n_.fromBufferAttribute(t,n),i_.fromBufferAttribute(t,i),s_.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(n_,r.x),a.addScaledVector(i_,r.y),a.addScaledVector(s_,r.z),a}static isFrontFacing(t,n,i,s){return ns.subVectors(i,n),cr.subVectors(t,n),ns.cross(cr).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ns.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),ns.cross(cr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,a,o;kl.subVectors(s,i),Gl.subVectors(r,i),$v.subVectors(t,i);let l=kl.dot($v),c=Gl.dot($v);if(l<=0&&c<=0)return n.copy(i);t_.subVectors(t,s);let u=kl.dot(t_),h=Gl.dot(t_);if(u>=0&&h<=u)return n.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(kl,a);e_.subVectors(t,r);let p=kl.dot(e_),m=Gl.dot(e_);if(m>=0&&p<=m)return n.copy(r);let b=p*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),n.copy(i).addScaledVector(Gl,o);let g=u*m-p*h;if(g<=0&&h-u>=0&&p-m>=0)return gC.subVectors(r,s),o=(h-u)/(h-u+(p-m)),n.copy(s).addScaledVector(gC,o);let d=1/(g+b+f);return a=b*d,o=f*d,n.copy(i).addScaledVector(kl,a).addScaledVector(Gl,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},da=class{constructor(t=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(is.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(is.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=is.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,is):is.fromBufferAttribute(r,a),is.applyMatrix4(t.matrixWorld),this.expandByPoint(is);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$d.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$d.copy(i.boundingBox)),$d.applyMatrix4(t.matrixWorld),this.union($d)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,is),is.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hu),tp.subVectors(this.max,Hu),Hl.subVectors(t.a,Hu),Wl.subVectors(t.b,Hu),Xl.subVectors(t.c,Hu),aa.subVectors(Wl,Hl),oa.subVectors(Xl,Wl),oo.subVectors(Hl,Xl);let n=[0,-aa.z,aa.y,0,-oa.z,oa.y,0,-oo.z,oo.y,aa.z,0,-aa.x,oa.z,0,-oa.x,oo.z,0,-oo.x,-aa.y,aa.x,0,-oa.y,oa.x,0,-oo.y,oo.x,0];return!r_(n,Hl,Wl,Xl,tp)||(n=[1,0,0,0,1,0,0,0,1],!r_(n,Hl,Wl,Xl,tp))?!1:(ep.crossVectors(aa,oa),n=[ep.x,ep.y,ep.z],r_(n,Hl,Wl,Xl,tp))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,is).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(is).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},fr=[new O,new O,new O,new O,new O,new O,new O,new O],is=new O,$d=new da,Hl=new O,Wl=new O,Xl=new O,aa=new O,oa=new O,oo=new O,Hu=new O,tp=new O,ep=new O,lo=new O;hn=new O,np=new jt,qO=0,Yn=class extends ws{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qO++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=v_,this.updateRanges=[],this.gpuType=ls,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)np.fromBufferAttribute(this,n),np.applyMatrix3(t),this.setXY(n,np.x,np.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=ku(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ku(n,this.array)),n}setX(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ku(n,this.array)),n}setY(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ku(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ku(n,this.array)),n}setW(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),i=ri(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),i=ri(i,this.array),s=ri(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),i=ri(i,this.array),s=ri(s,this.array),r=ri(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==v_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}},tf=class extends Yn{constructor(t,n,i){super(new Uint16Array(t),n,i)}},ef=class extends Yn{constructor(t,n,i){super(new Uint32Array(t),n,i)}},be=class extends Yn{constructor(t,n,i){super(new Float32Array(t),n,i)}},YO=new da,Wu=new O,a_=new O,pa=class{constructor(t=new O,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):YO.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wu.subVectors(t,this.center);let n=Wu.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Wu,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(a_.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wu.copy(t.center).add(a_)),this.expandByPoint(Wu.copy(t.center).sub(a_))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ZO=0,Hi=new ke,o_=new oi,ql=new O,Si=new da,Xu=new da,wn=new O,sn=class e extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZO++}),this.uuid=_f(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(LO(t)?ef:tf)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hi.makeRotationFromQuaternion(t),this.applyMatrix4(Hi),this}rotateX(t){return Hi.makeRotationX(t),this.applyMatrix4(Hi),this}rotateY(t){return Hi.makeRotationY(t),this.applyMatrix4(Hi),this}rotateZ(t){return Hi.makeRotationZ(t),this.applyMatrix4(Hi),this}translate(t,n,i){return Hi.makeTranslation(t,n,i),this.applyMatrix4(Hi),this}scale(t,n,i){return Hi.makeScale(t,n,i),this.applyMatrix4(Hi),this}lookAt(t){return o_.lookAt(t),o_.updateMatrix(),this.applyMatrix4(o_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ql).negate(),this.translate(ql.x,ql.y,ql.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];Si.setFromBufferAttribute(r),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];Xu.setFromBufferAttribute(o),this.morphTargetsRelative?(wn.addVectors(Si.min,Xu.min),Si.expandByPoint(wn),wn.addVectors(Si.max,Xu.max),Si.expandByPoint(wn)):(Si.expandByPoint(Xu.min),Si.expandByPoint(Xu.max))}Si.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)wn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(wn));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wn.fromBufferAttribute(o,c),l&&(ql.fromBufferAttribute(t,c),wn.add(ql)),s=Math.max(s,i.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Yn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new O,l[v]=new O;let c=new O,u=new O,h=new O,f=new jt,p=new jt,m=new jt,b=new O,g=new O;function d(v,A,C){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,C),f.fromBufferAttribute(r,v),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),u.sub(c),h.sub(c),p.sub(f),m.sub(f);let P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(b.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(P),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(P),o[v].add(b),o[A].add(b),o[C].add(b),l[v].add(g),l[A].add(g),l[C].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,A=y.length;v<A;++v){let C=y[v],P=C.start,L=C.count;for(let q=P,H=P+L;q<H;q+=3)d(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let _=new O,x=new O,M=new O,T=new O;function w(v){M.fromBufferAttribute(s,v),T.copy(M);let A=o[v];_.copy(A),_.sub(M.multiplyScalar(M.dot(A))).normalize(),x.crossVectors(T,A);let P=x.dot(l[v])<0?-1:1;a.setXYZW(v,_.x,_.y,_.z,P)}for(let v=0,A=y.length;v<A;++v){let C=y[v],P=C.start,L=C.count;for(let q=P,H=P+L;q<H;q+=3)w(t.getX(q+0)),w(t.getX(q+1)),w(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,u=new O,h=new O;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(n,m),r.fromBufferAttribute(n,b),a.fromBufferAttribute(n,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)wn.fromBufferAttribute(t,n),wn.normalize(),t.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),p=0,m=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*u;for(let d=0;d<u;d++)f[m++]=c[p++]}return new Yn(f,u,h)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},KO=0,mr=class extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KO++}),this.uuid=_f(),this.name="",this.type="Material",this.blending=po,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bp,this.blendDst=Sp,this.blendEquation=fa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Nt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Nt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bp&&(i.blendSrc=this.blendSrc),this.blendDst!==Sp&&(i.blendDst=this.blendDst),this.blendEquation!==fa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(n){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new jt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},hr=new O,l_=new O,ip=new O,la=new O,c_=new O,sp=new O,u_=new O,$l=class{constructor(t=new O,n=new O(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hr)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=hr.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(hr.copy(this.origin).addScaledVector(this.direction,n),hr.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){l_.copy(t).add(n).multiplyScalar(.5),ip.copy(n).sub(t).normalize(),la.copy(this.origin).sub(l_);let r=t.distanceTo(n)*.5,a=-this.direction.dot(ip),o=la.dot(this.direction),l=-la.dot(ip),c=la.lengthSq(),u=Math.abs(1-a*a),h,f,p,m;if(u>0)if(h=a*l-o,f=a*o-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let b=1/u;h*=b,f*=b,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(l_).addScaledVector(ip,f),p}intersectSphere(t,n){hr.subVectors(t.center,this.origin);let i=hr.dot(this.direction),s=hr.dot(hr)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,hr)!==null}intersectTriangle(t,n,i,s,r){c_.subVectors(n,t),sp.subVectors(i,t),u_.crossVectors(c_,sp);let a=this.direction.dot(u_),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;la.subVectors(this.origin,t);let l=o*this.direction.dot(sp.crossVectors(la,sp));if(l<0)return null;let c=o*this.direction.dot(c_.cross(la));if(c<0||l+c>a)return null;let u=-o*la.dot(u_);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=w_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},yC=new ke,co=new $l,rp=new pa,xC=new O,ap=new O,op=new O,lp=new O,f_=new O,cp=new O,vC=new O,up=new O,De=class extends oi{constructor(t=new sn,n=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){cp.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(f_.fromBufferAttribute(h,t),a?cp.addScaledVector(f_,u):cp.addScaledVector(f_.sub(n),u))}n.add(cp)}return n}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rp.copy(i.boundingSphere),rp.applyMatrix4(r),co.copy(t.ray).recast(t.near),!(rp.containsPoint(co.origin)===!1&&(co.intersectSphere(rp,xC)===null||co.origin.distanceToSquared(xC)>(t.far-t.near)**2))&&(yC.copy(r).invert(),co.copy(t.ray).applyMatrix4(yC),!(i.boundingBox!==null&&co.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,co)))}_computeIntersections(t,n,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){let g=f[m],d=a[g.materialIndex],y=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let x=y,M=_;x<M;x+=3){let T=o.getX(x),w=o.getX(x+1),v=o.getX(x+2);s=fp(this,d,t,i,c,u,h,T,w,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let m=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let g=m,d=b;g<d;g+=3){let y=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);s=fp(this,a,t,i,c,u,h,y,_,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){let g=f[m],d=a[g.materialIndex],y=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=y,M=_;x<M;x+=3){let T=x,w=x+1,v=x+2;s=fp(this,d,t,i,c,u,h,T,w,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let m=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let g=m,d=b;g<d;g+=3){let y=g,_=g+1,x=g+2;s=fp(this,a,t,i,c,u,h,y,_,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};Bp=class extends ai{constructor(t=null,n=1,i=1,s,r,a,o,l,c=Cn,u=Cn,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},h_=new O,JO=new O,QO=new Bt,Ts=class{constructor(t=new O(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=h_.subVectors(i,n).cross(JO.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(h_),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:n.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||QO.getNormalMatrix(t),s=this.coplanarPoint(h_).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},uo=new pa,$O=new jt(.5,.5),hp=new O,nf=class{constructor(t=new Ts,n=new Ts,i=new Ts,s=new Ts,r=new Ts,a=new Ts){this.planes=[t,n,i,s,r,a]}set(t,n,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ss,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],m=r[8],b=r[9],g=r[10],d=r[11],y=r[12],_=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-a,p-u,d-m,M-y).normalize(),s[1].setComponents(c+a,p+u,d+m,M+y).normalize(),s[2].setComponents(c+o,p+h,d+b,M+_).normalize(),s[3].setComponents(c-o,p-h,d-b,M-_).normalize(),i)s[4].setComponents(l,f,g,x).normalize(),s[5].setComponents(c-l,p-f,d-g,M-x).normalize();else if(s[4].setComponents(c-l,p-f,d-g,M-x).normalize(),n===ss)s[5].setComponents(c+l,p+f,d+g,M+x).normalize();else if(n===ju)s[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),uo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(uo)}intersectsSprite(t){uo.center.set(0,0,0);let n=$O.distanceTo(t.center);return uo.radius=.7071067811865476+n,uo.applyMatrix4(t.matrixWorld),this.intersectsSphere(uo)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(hp.x=s.normal.x>0?t.max.x:t.min.x,hp.y=s.normal.y>0?t.max.y:t.min.y,hp.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hp)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tc=class extends mr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fp=new O,zp=new O,_C=new ke,qu=new $l,dp=new pa,d_=new O,bC=new O,sf=class extends oi{constructor(t=new sn,n=new tc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let n=t.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Fp.fromBufferAttribute(n,s-1),zp.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Fp.distanceTo(zp);t.setAttribute("lineDistance",new be(i,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dp.copy(i.boundingSphere),dp.applyMatrix4(s),dp.radius+=r,t.ray.intersectsSphere(dp)===!1)return;_C.copy(s).invert(),qu.copy(t.ray).applyMatrix4(_C);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let b=p,g=m-1;b<g;b+=c){let d=u.getX(b),y=u.getX(b+1),_=pp(this,t,qu,l,d,y,b);_&&n.push(_)}if(this.isLineLoop){let b=u.getX(m-1),g=u.getX(p),d=pp(this,t,qu,l,b,g,m-1);d&&n.push(d)}}else{let p=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let b=p,g=m-1;b<g;b+=c){let d=pp(this,t,qu,l,b,b+1,b);d&&n.push(d)}if(this.isLineLoop){let b=pp(this,t,qu,l,m-1,p,m-1);b&&n.push(b)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};ec=class extends mr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},SC=new ke,__=new $l,mp=new pa,gp=new O,rf=class extends oi{constructor(t=new sn,n=new ec){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mp.copy(i.boundingSphere),mp.applyMatrix4(s),mp.radius+=r,t.ray.intersectsSphere(mp)===!1)return;SC.copy(s).invert(),__.copy(t.ray).applyMatrix4(SC);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=f,b=p;m<b;m++){let g=c.getX(m);gp.fromBufferAttribute(h,g),MC(gp,g,l,s,t,n,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=f,b=p;m<b;m++)gp.fromBufferAttribute(h,m),MC(gp,m,l,s,t,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};af=class extends ai{constructor(t=[],n=va,i,s,r,a,o,l,c,u){super(t,n,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gr=class extends ai{constructor(t,n,i=os,s,r,a,o=Cn,l=Cn,c,u=As,h=1){if(u!==As&&u!==ba)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:h};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Vp=class extends gr{constructor(t,n=os,i=va,s,r,a=Cn,o=Cn,l,c=As){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,n,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},of=class extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},nc=class e extends sn{constructor(t=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,p=0;m("z","y","x",-1,-1,i,n,t,a,r,0),m("z","y","x",1,-1,i,n,-t,a,r,1),m("x","z","y",1,1,t,i,n,s,a,2),m("x","z","y",1,-1,t,i,-n,s,a,3),m("x","y","z",1,-1,t,n,i,s,r,4),m("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(h,2));function m(b,g,d,y,_,x,M,T,w,v,A){let C=x/w,P=M/v,L=x/2,q=M/2,H=T/2,B=w+1,W=v+1,X=0,Y=0,nt=new O;for(let at=0;at<W;at++){let ot=at*P-q;for(let _t=0;_t<B;_t++){let ie=_t*C-L;nt[b]=ie*y,nt[g]=ot*_,nt[d]=H,c.push(nt.x,nt.y,nt.z),nt[b]=0,nt[g]=0,nt[d]=T>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(_t/w),h.push(1-at/v),X+=1}}for(let at=0;at<v;at++)for(let ot=0;ot<w;ot++){let _t=f+ot+B*at,ie=f+ot+B*(at+1),Pe=f+(ot+1)+B*(at+1),$t=f+(ot+1)+B*at;l.push(_t,ie,$t),l.push(ie,Pe,$t),Y+=6}o.addGroup(p,Y,A),p+=Y,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},yo=class e extends sn{constructor(t=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],a=[],o=[],l=[],c=new O,u=new jt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=n;h++,f+=3){let p=i+h/n*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(o,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},kp=class e extends sn{constructor(t=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(r.slice(),3)),this.setAttribute("uv",new be(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new O,x=new O,M=new O;for(let T=0;T<n.length;T+=3)p(n[T+0],_),p(n[T+1],x),p(n[T+2],M),l(_,x,M,y)}function l(y,_,x,M){let T=M+1,w=[];for(let v=0;v<=T;v++){w[v]=[];let A=y.clone().lerp(x,v/T),C=_.clone().lerp(x,v/T),P=T-v;for(let L=0;L<=P;L++)L===0&&v===T?w[v][L]=A:w[v][L]=A.clone().lerp(C,L/P)}for(let v=0;v<T;v++)for(let A=0;A<2*(T-v)-1;A++){let C=Math.floor(A/2);A%2===0?(f(w[v][C+1]),f(w[v+1][C]),f(w[v][C])):(f(w[v][C+1]),f(w[v+1][C+1]),f(w[v+1][C]))}}function c(y){let _=new O;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(y),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function u(){let y=new O;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let x=g(y)/2/Math.PI+.5,M=d(y)/Math.PI+.5;a.push(x,1-M)}m(),h()}function h(){for(let y=0;y<a.length;y+=6){let _=a[y+0],x=a[y+2],M=a[y+4],T=Math.max(_,x,M),w=Math.min(_,x,M);T>.9&&w<.1&&(_<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),M<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,_){let x=y*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function m(){let y=new O,_=new O,x=new O,M=new O,T=new jt,w=new jt,v=new jt;for(let A=0,C=0;A<r.length;A+=9,C+=6){y.set(r[A+0],r[A+1],r[A+2]),_.set(r[A+3],r[A+4],r[A+5]),x.set(r[A+6],r[A+7],r[A+8]),T.set(a[C+0],a[C+1]),w.set(a[C+2],a[C+3]),v.set(a[C+4],a[C+5]),M.copy(y).add(_).add(x).divideScalar(3);let P=g(M);b(T,C+0,y,P),b(w,C+2,_,P),b(v,C+4,x,P)}}function b(y,_,x,M){M<0&&y.x===1&&(a[_]=y.x-1),x.x===0&&x.z===0&&(a[_]=M/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},lf=class e extends kp{constructor(t=1,n=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new e(t.radius,t.detail)}},ma=class e extends sn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=n/l,p=[],m=[],b=[],g=[];for(let d=0;d<u;d++){let y=d*f-a;for(let _=0;_<c;_++){let x=_*h-r;m.push(x,-y,0),b.push(0,0,1),g.push(_/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){let _=y+c*d,x=y+c*(d+1),M=y+1+c*(d+1),T=y+1+c*d;p.push(_,x,T),p.push(x,M,T)}this.setIndex(p),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(b,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ic=class e extends sn{constructor(t=.5,n=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=t,f=(n-t)/s,p=new O,m=new jt;for(let b=0;b<=s;b++){for(let g=0;g<=i;g++){let d=r+g/i*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/n+1)/2,m.y=(p.y/n+1)/2,u.push(m.x,m.y)}h+=f}for(let b=0;b<s;b++){let g=b*(i+1);for(let d=0;d<i;d++){let y=d+g,_=y,x=y+i+1,M=y+i+2,T=y+1;o.push(_,x,T),o.push(x,M,T)}}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},sc=class e extends sn{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new O,f=new O,p=[],m=[],b=[],g=[];for(let d=0;d<=i;d++){let y=[],_=d/i,x=a+_*o,M=t*Math.cos(x),T=Math.sqrt(t*t-M*M),w=0;d===0&&a===0?w=.5/n:d===i&&l===Math.PI&&(w=-.5/n);for(let v=0;v<=n;v++){let A=v/n,C=s+A*r;h.x=-T*Math.cos(C),h.y=M,h.z=T*Math.sin(C),m.push(h.x,h.y,h.z),f.copy(h).normalize(),b.push(f.x,f.y,f.z),g.push(A+w,1-_),y.push(c++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<n;y++){let _=u[d][y+1],x=u[d][y],M=u[d+1][y],T=u[d+1][y+1];(d!==0||a>0)&&p.push(_,x,T),(d!==i-1||l<Math.PI)&&p.push(x,M,T)}this.setIndex(p),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(b,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},rc=class e extends sn{constructor(t=1,n=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],h=[],f=new O,p=new O,m=new O;for(let b=0;b<=i;b++){let g=a+b/i*o;for(let d=0;d<=s;d++){let y=d/s*r;p.x=(t+n*Math.cos(g))*Math.cos(y),p.y=(t+n*Math.cos(g))*Math.sin(y),p.z=n*Math.sin(g),c.push(p.x,p.y,p.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),h.push(d/s),h.push(b/i)}}for(let b=1;b<=i;b++)for(let g=1;g<=s;g++){let d=(s+1)*b+g-1,y=(s+1)*(b-1)+g-1,_=(s+1)*(b-1)+g,x=(s+1)*b+g;l.push(d,y,x),l.push(y,_,x)}this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};u2={clone:_o,merge:Gn},eB=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nB=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ei=class extends mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eB,this.fragmentShader=nB,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_o(t.uniforms),this.uniformsGroups=tB(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new ne().setHex(s.value);break;case"v2":this.uniforms[i].value=new jt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ke().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Gp=class extends Ei{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Hp=class extends mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wp=class extends mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};ga=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],t<s)break e}a=n.length;break n}if(!(t>=r)){let o=n[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],t>=r)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xp=class extends ga{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:m_,endingEnd:m_}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case g_:r=t,o=2*n-i;break;case y_:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case g_:a=t,l=2*i-n;break;case y_:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(i-n)/(s-n),b=m*m,g=b*m,d=-f*g+2*f*b-f*m,y=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*m+1,_=(-1-p)*g+(1.5+p)*b+.5*m,x=p*g-p*b;for(let M=0;M!==o;++M)r[M]=d*a[u+M]+y*a[c+M]+_*a[l+M]+x*a[h+M];return r}},qp=class extends ga{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}},Yp=class extends ga{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zp=class extends ga{interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(i-n)/(s-n),b=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*b+a[l+g]*m;return r}let f=o*2,p=t-1;for(let m=0;m!==o;++m){let b=a[c+m],g=a[l+m],d=p*f+m*2,y=h[d],_=h[d+1],x=t*f+m*2,M=u[x],T=u[x+1],w=(i-n)/(s-n),v,A,C,P,L;for(let q=0;q<8;q++){v=w*w,A=v*w,C=1-w,P=C*C,L=P*C;let B=L*n+3*P*w*y+3*C*v*M+A*s-i;if(Math.abs(B)<1e-10)break;let W=3*P*(y-n)+6*C*w*(M-y)+3*v*(s-M);if(Math.abs(W)<1e-10)break;w=w-B/W,w=Math.max(0,Math.min(1,w))}r[m]=L*b+3*P*w*_+3*C*v*T+A*g}return r}},Ai=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yp(n,this.TimeBufferType),this.values=yp(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:yp(t.times,Array),values:yp(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Yp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Zp(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Yu:n=this.InterpolantFactoryMethodDiscrete;break;case Np:n=this.InterpolantFactoryMethodLinear;break;case _p:n=this.InterpolantFactoryMethodSmooth;break;case p_:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Nt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yu;case this.InterpolantFactoryMethodLinear:return Np;case this.InterpolantFactoryMethodSmooth:return _p;case this.InterpolantFactoryMethodBezier:return p_}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(It("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(It("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){It("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){It("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&UO(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){It("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===_p,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let h=o*i,f=h-i,p=h+i;for(let m=0;m!==i;++m){let b=n[h+m];if(b!==n[f+m]||b!==n[p+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*i,f=a*i;for(let p=0;p!==i;++p)n[f+p]=n[h+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=n.slice(0,a*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=Np;ya=class extends Ai{constructor(t,n,i){super(t,n,i)}};ya.prototype.ValueTypeName="bool";ya.prototype.ValueBufferType=Array;ya.prototype.DefaultInterpolation=Yu;ya.prototype.InterpolantFactoryMethodLinear=void 0;ya.prototype.InterpolantFactoryMethodSmooth=void 0;Kp=class extends Ai{constructor(t,n,i,s){super(t,n,i,s)}};Kp.prototype.ValueTypeName="color";jp=class extends Ai{constructor(t,n,i,s){super(t,n,i,s)}};jp.prototype.ValueTypeName="number";Jp=class extends ga{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)Cs.slerpFlat(r,0,a,c-o,a,c,l);return r}},cf=class extends Ai{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Jp(this.times,this.values,this.getValueSize(),t)}};cf.prototype.ValueTypeName="quaternion";cf.prototype.InterpolantFactoryMethodSmooth=void 0;xa=class extends Ai{constructor(t,n,i){super(t,n,i)}};xa.prototype.ValueTypeName="string";xa.prototype.ValueBufferType=Array;xa.prototype.DefaultInterpolation=Yu;xa.prototype.InterpolantFactoryMethodLinear=void 0;xa.prototype.InterpolantFactoryMethodSmooth=void 0;Qp=class extends Ai{constructor(t,n,i,s){super(t,n,i,s)}};Qp.prototype.ValueTypeName="vector";$p=class{constructor(t,n,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],m=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},f2=new $p,tm=class{constructor(t){this.manager=t!==void 0?t:f2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};tm.DEFAULT_MATERIAL_NAME="__DEFAULT";xp=new O,vp=new Cs,Ms=new O,uf=class extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=ss,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xp,vp,Ms),Ms.x===1&&Ms.y===1&&Ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xp,vp,Ms.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(xp,vp,Ms),Ms.x===1&&Ms.y===1&&Ms.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xp,vp,Ms.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ca=new O,EC=new jt,AC=new jt,kn=class extends uf{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Lp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wv*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lp*2*Math.atan(Math.tan(Wv*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ca.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ca.x,ca.y).multiplyScalar(-t/ca.z),ca.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ca.x,ca.y).multiplyScalar(-t/ca.z)}getViewSize(t,n){return this.getViewBounds(t,EC,AC),n.subVectors(AC,EC)}setViewOffset(t,n,i,s,r,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Wv*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},xo=class extends uf{constructor(t=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Yl=-90,Zl=1,em=class extends oi{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kn(Yl,Zl,t,n);s.layers=this.layers,this.add(s);let r=new kn(Yl,Zl,t,n);r.layers=this.layers,this.add(r);let a=new kn(Yl,Zl,t,n);a.layers=this.layers,this.add(a);let o=new kn(Yl,Zl,t,n);o.layers=this.layers,this.add(o);let l=new kn(Yl,Zl,t,n);l.layers=this.layers,this.add(l);let c=new kn(Yl,Zl,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(let c of n)this.remove(c);if(t===ss)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ju)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(h,f,p),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},nm=class extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Y_="\\[\\]\\.:\\/",iB=new RegExp("["+Y_+"]","g"),Z_="[^"+Y_+"]",sB="[^"+Y_.replace("\\.","")+"]",rB=/((?:WC+[\/:])*)/.source.replace("WC",Z_),aB=/(WCOD+)?/.source.replace("WCOD",sB),oB=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Z_),lB=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Z_),cB=new RegExp("^"+rB+aB+oB+lB+"$"),uB=["material","materials","bones","map"],b_=class{constructor(t,n,i){let s=i||Oe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Oe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(iB,"")}static parseTrackName(t){let n=cB.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);uB.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){It("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){It("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){It("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){It("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){It("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){It("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=n.nodeName;It("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){It("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=b_;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];c6=new Float32Array(1),S_=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185")});function U2(){let e=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function dB(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let u=l.array,h=l.updateRanges;if(e.bindBuffer(c,o),h.length===0)e.bufferSubData(c,0,u);else{h.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<h.length;p++){let m=h[f],b=h[p];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++f,h[f]=b)}h.length=f+1;for(let p=0,m=h.length;p<m;p++){let b=h[p];e.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function Kz(e,t,n,i,s,r){let a=new ne(0),o=s===!0?0:1,l,c,u=null,h=0,f=null;function p(y){let _=y.isScene===!0?y.background:null;if(_&&_.isTexture){let x=y.backgroundBlurriness>0;_=t.get(_,x)}return _}function m(y){let _=!1,x=p(y);x===null?g(a,o):x&&x.isColor&&(g(x,1),_=!0);let M=e.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(y,_){let x=p(_);x&&(x.isCubeTexture||x.mapping===hf)?(c===void 0&&(c=new De(new nc(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:_o(Ns.backgroundCube.uniforms),vertexShader:Ns.backgroundCube.vertexShader,fragmentShader:Ns.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zz.makeRotationFromEuler(_.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(I2),c.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ue,(u!==x||h!==x.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new De(new ma(2,2),new Ei({name:"BackgroundMaterial",uniforms:_o(Ns.background.uniforms),vertexShader:Ns.background.vertexShader,fragmentShader:Ns.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,f=e.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,_){y.getRGB(Wm,q_(e)),n.buffers.color.setClear(Wm.r,Wm.g,Wm.b,_,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),o=_,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:m,addToRenderList:b,dispose:d}}function jz(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(P,L,q,H,B){let W=!1,X=h(P,H,q,L);r!==X&&(r=X,c(r.object)),W=p(P,H,q,B),W&&m(P,H,q,B),B!==null&&t.update(B,e.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,x(P,L,q,H),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return e.createVertexArray()}function c(P){return e.bindVertexArray(P)}function u(P){return e.deleteVertexArray(P)}function h(P,L,q,H){let B=H.wireframe===!0,W=i[L.id];W===void 0&&(W={},i[L.id]=W);let X=P.isInstancedMesh===!0?P.id:0,Y=W[X];Y===void 0&&(Y={},W[X]=Y);let nt=Y[q.id];nt===void 0&&(nt={},Y[q.id]=nt);let at=nt[B];return at===void 0&&(at=f(l()),nt[B]=at),at}function f(P){let L=[],q=[],H=[];for(let B=0;B<n;B++)L[B]=0,q[B]=0,H[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:q,attributeDivisors:H,object:P,attributes:{},index:null}}function p(P,L,q,H){let B=r.attributes,W=L.attributes,X=0,Y=q.getAttributes();for(let nt in Y)if(Y[nt].location>=0){let ot=B[nt],_t=W[nt];if(_t===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(_t=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(_t=P.instanceColor)),ot===void 0||ot.attribute!==_t||_t&&ot.data!==_t.data)return!0;X++}return r.attributesNum!==X||r.index!==H}function m(P,L,q,H){let B={},W=L.attributes,X=0,Y=q.getAttributes();for(let nt in Y)if(Y[nt].location>=0){let ot=W[nt];ot===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(ot=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(ot=P.instanceColor));let _t={};_t.attribute=ot,ot&&ot.data&&(_t.data=ot.data),B[nt]=_t,X++}r.attributes=B,r.attributesNum=X,r.index=H}function b(){let P=r.newAttributes;for(let L=0,q=P.length;L<q;L++)P[L]=0}function g(P){d(P,0)}function d(P,L){let q=r.newAttributes,H=r.enabledAttributes,B=r.attributeDivisors;q[P]=1,H[P]===0&&(e.enableVertexAttribArray(P),H[P]=1),B[P]!==L&&(e.vertexAttribDivisor(P,L),B[P]=L)}function y(){let P=r.newAttributes,L=r.enabledAttributes;for(let q=0,H=L.length;q<H;q++)L[q]!==P[q]&&(e.disableVertexAttribArray(q),L[q]=0)}function _(P,L,q,H,B,W,X){X===!0?e.vertexAttribIPointer(P,L,q,B,W):e.vertexAttribPointer(P,L,q,H,B,W)}function x(P,L,q,H){b();let B=H.attributes,W=q.getAttributes(),X=L.defaultAttributeValues;for(let Y in W){let nt=W[Y];if(nt.location>=0){let at=B[Y];if(at===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(at=P.instanceColor)),at!==void 0){let ot=at.normalized,_t=at.itemSize,ie=t.get(at);if(ie===void 0)continue;let Pe=ie.buffer,$t=ie.type,j=ie.bytesPerElement,st=$t===e.INT||$t===e.UNSIGNED_INT||at.gpuType===am;if(at.isInterleavedBufferAttribute){let et=at.data,Dt=et.stride,mt=at.offset;if(et.isInstancedInterleavedBuffer){for(let Et=0;Et<nt.locationSize;Et++)d(nt.location+Et,et.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Et=0;Et<nt.locationSize;Et++)g(nt.location+Et);e.bindBuffer(e.ARRAY_BUFFER,Pe);for(let Et=0;Et<nt.locationSize;Et++)_(nt.location+Et,_t/nt.locationSize,$t,ot,Dt*j,(mt+_t/nt.locationSize*Et)*j,st)}else{if(at.isInstancedBufferAttribute){for(let et=0;et<nt.locationSize;et++)d(nt.location+et,at.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let et=0;et<nt.locationSize;et++)g(nt.location+et);e.bindBuffer(e.ARRAY_BUFFER,Pe);for(let et=0;et<nt.locationSize;et++)_(nt.location+et,_t/nt.locationSize,$t,ot,_t*j,_t/nt.locationSize*et*j,st)}}else if(X!==void 0){let ot=X[Y];if(ot!==void 0)switch(ot.length){case 2:e.vertexAttrib2fv(nt.location,ot);break;case 3:e.vertexAttrib3fv(nt.location,ot);break;case 4:e.vertexAttrib4fv(nt.location,ot);break;default:e.vertexAttrib1fv(nt.location,ot)}}}}y()}function M(){A();for(let P in i){let L=i[P];for(let q in L){let H=L[q];for(let B in H){let W=H[B];for(let X in W)u(W[X].object),delete W[X];delete H[B]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;let L=i[P.id];for(let q in L){let H=L[q];for(let B in H){let W=H[B];for(let X in W)u(W[X].object),delete W[X];delete H[B]}}delete i[P.id]}function w(P){for(let L in i){let q=i[L];for(let H in q){let B=q[H];if(B[P.id]===void 0)continue;let W=B[P.id];for(let X in W)u(W[X].object),delete W[X];delete B[P.id]}}}function v(P){for(let L in i){let q=i[L],H=P.isInstancedMesh===!0?P.id:0,B=q[H];if(B!==void 0){for(let W in B){let X=B[W];for(let Y in X)u(X[Y].object),delete X[Y];delete B[W]}delete q[H],Object.keys(q).length===0&&delete i[L]}}}function A(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:g,disableUnusedAttributes:y}}function Jz(e,t,n){let i;function s(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(e.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];n.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Qz(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Wi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let v=w===Ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ci&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ls&&!v)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(Nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),M=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,maxSamples:M,samples:T}}function $z(e){let t=this,n=null,i=0,s=!1,r=!1,a=new Ts,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,p){let m=h.clippingPlanes,b=h.clipIntersection,g=h.clipShadows,d=e.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let y=r?0:i,_=y*4,x=d.clippingState||null;l.value=x,x=u(m,f,_,p);for(let M=0;M!==_;++M)x[M]=n[M];d.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,m){let b=h!==null?h.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let d=p+b*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<d)&&(g=new Float32Array(d));for(let _=0,x=p;_!==b;++_,x+=4)a.copy(h[_]).applyMatrix4(y,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}function nV(e){let t=[],n=[],i=[],s=e,r=e-Ma+1+h2.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>e-Ma?l=h2[a-e+Ma-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,b=3,g=2,d=1,y=new Float32Array(b*m*p),_=new Float32Array(g*m*p),x=new Float32Array(d*m*p);for(let T=0;T<p;T++){let w=T%3*2/3-1,v=T>2?0:-1,A=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];y.set(A,b*m*T),_.set(f,g*m*T);let C=[T,T,T,T,T,T];x.set(C,d*m*T)}let M=new sn;M.setAttribute("position",new Yn(y,b)),M.setAttribute("uv",new Yn(_,g)),M.setAttribute("faceIndex",new Yn(x,d)),i.push(new De(M,null)),s>Ma&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function p2(e,t,n){let i=new Ti(e,t,n);return i.texture.mapping=hf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cc(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function iV(e,t,n){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tV,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zm(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function sV(e,t,n){let i=new Float32Array(bo),s=new O(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:bo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zm(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function m2(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zm(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function g2(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Zm(){return`

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
	`}function rV(e){let t=new WeakMap,n=new WeakMap,i=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===im||p===sm)if(t.has(f)){let m=t.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let b=new Ym(m.height);return b.fromEquirectangularTexture(e,f),t.set(f,b),f.addEventListener("dispose",c),o(b.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let p=f.mapping,m=p===im||p===sm,b=p===va||p===vo;if(m||b){let g=n.get(f),d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new qm(e)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{let y=f.image;return m&&y&&y.height>0||b&&y&&l(y)?(i===null&&(i=new qm(e)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f,p){return p===im?f.mapping=va:p===sm&&(f.mapping=vo),f}function l(f){let p=0,m=6;for(let b=0;b<m;b++)f[b]!==void 0&&p++;return p===m}function c(f){let p=f.target;p.removeEventListener("dispose",c);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(f){let p=f.target;p.removeEventListener("dispose",u);let m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function h(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function aV(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&ho("WebGLRenderer: "+i+" extension not supported."),s}}}function oV(e,t,n,i){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,n.memory.geometries++),f}function l(h){let f=h.attributes;for(let p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(h){let f=[],p=h.index,m=h.attributes.position,b=0;if(m===void 0)return;if(p!==null){let y=p.array;b=p.version;for(let _=0,x=y.length;_<x;_+=3){let M=y[_+0],T=y[_+1],w=y[_+2];f.push(M,T,T,w,w,M)}}else{let y=m.array;b=m.version;for(let _=0,x=y.length/3-1;_<x;_+=3){let M=_+0,T=_+1,w=_+2;f.push(M,T,T,w,w,M)}}let g=new(m.count>=65535?ef:tf)(f,1);g.version=b;let d=r.get(h);d&&t.remove(d),r.set(h,g)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function lV(e,t,n){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){e.drawElements(i,f,r,h*a),n.update(f,i,1)}function c(h,f,p){p!==0&&(e.drawElementsInstanced(i,f,r,h*a,p),n.update(f,i,p))}function u(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,p);let b=0;for(let g=0;g<p;g++)b+=f[g];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function cV(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:It("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function uV(e,t,n){let i=new WeakMap,s=new Ge;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(o);if(f===void 0||f.count!==h){let A=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],_=0;p===!0&&(_=1),m===!0&&(_=2),b===!0&&(_=3);let x=o.attributes.position.count*_,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*M*4*h),w=new Qu(T,x,M,h);w.type=ls,w.needsUpdate=!0;let v=_*4;for(let C=0;C<h;C++){let P=g[C],L=d[C],q=y[C],H=x*M*4*C;for(let B=0;B<P.count;B++){let W=B*v;p===!0&&(s.fromBufferAttribute(P,B),T[H+W+0]=s.x,T[H+W+1]=s.y,T[H+W+2]=s.z,T[H+W+3]=0),m===!0&&(s.fromBufferAttribute(L,B),T[H+W+4]=s.x,T[H+W+5]=s.y,T[H+W+6]=s.z,T[H+W+7]=0),b===!0&&(s.fromBufferAttribute(q,B),T[H+W+8]=s.x,T[H+W+9]=s.y,T[H+W+10]=s.z,T[H+W+11]=q.itemSize===4?s.w:1)}}f={count:h,texture:w,size:new jt(x,M)},i.set(o,f),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",m),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function fV(e,t,n,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}function dV(e,t,n,i,s,r){let a=new Ti(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new gr(t,n):void 0}),o=new Ti(t,n,{type:Ds,depthBuffer:!1,stencilBuffer:!1}),l=new sn;l.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new be([0,2,0,0,2,0],2));let c=new Gp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new De(l,c),h=new xo(-1,1,1,-1,0,1),f=null,p=null,m=!1,b,g=null,d=[],y=!1;this.setSize=function(_,x){a.setSize(_,x),o.setSize(_,x);for(let M=0;M<d.length;M++){let T=d[M];T.setSize&&T.setSize(_,x)}},this.setEffects=function(_){d=_,y=d.length>0&&d[0].isRenderPass===!0;let x=a.width,M=a.height;for(let T=0;T<d.length;T++){let w=d[T];w.setSize&&w.setSize(x,M)}},this.begin=function(_,x){if(m||_.toneMapping===as&&d.length===0)return!1;if(g=x,x!==null){let M=x.width,T=x.height;(a.width!==M||a.height!==T)&&this.setSize(M,T)}return y===!1&&_.setRenderTarget(a),b=_.toneMapping,_.toneMapping=as,!0},this.hasRenderPass=function(){return y},this.end=function(_,x){_.toneMapping=b,m=!0;let M=a,T=o;for(let w=0;w<d.length;w++){let v=d[w];if(v.enabled!==!1&&(v.render(_,T,M,x),v.needsSwap!==!1)){let A=M;M=T,T=A}}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,c.defines={},Qt.getTransfer(f)===ue&&(c.defines.SRGB_TRANSFER="");let w=hV[p];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(g),_.render(u,h),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}function hc(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=y2[s];if(r===void 0&&(r=new Float32Array(s),y2[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function xn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function vn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Km(e,t){let n=x2[t];n===void 0&&(n=new Int32Array(t),x2[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function pV(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function mV(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;e.uniform2fv(this.addr,t),vn(n,t)}}function gV(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xn(n,t))return;e.uniform3fv(this.addr,t),vn(n,t)}}function yV(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;e.uniform4fv(this.addr,t),vn(n,t)}}function xV(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(xn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),vn(n,t)}else{if(xn(n,i))return;b2.set(i),e.uniformMatrix2fv(this.addr,!1,b2),vn(n,i)}}function vV(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(xn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),vn(n,t)}else{if(xn(n,i))return;_2.set(i),e.uniformMatrix3fv(this.addr,!1,_2),vn(n,i)}}function _V(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(xn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),vn(n,t)}else{if(xn(n,i))return;v2.set(i),e.uniformMatrix4fv(this.addr,!1,v2),vn(n,i)}}function bV(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function SV(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;e.uniform2iv(this.addr,t),vn(n,t)}}function MV(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;e.uniform3iv(this.addr,t),vn(n,t)}}function TV(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;e.uniform4iv(this.addr,t),vn(n,t)}}function EV(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function AV(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;e.uniform2uiv(this.addr,t),vn(n,t)}}function wV(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;e.uniform3uiv(this.addr,t),vn(n,t)}}function CV(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;e.uniform4uiv(this.addr,t),vn(n,t)}}function RV(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(ib.compareFunction=n.isReversedDepthBuffer()?Hm:Gm,r=ib):r=O2,n.setTexture2D(t||r,s)}function DV(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||F2,s)}function PV(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||z2,s)}function NV(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||B2,s)}function LV(e){switch(e){case 5126:return pV;case 35664:return mV;case 35665:return gV;case 35666:return yV;case 35674:return xV;case 35675:return vV;case 35676:return _V;case 5124:case 35670:return bV;case 35667:case 35671:return SV;case 35668:case 35672:return MV;case 35669:case 35673:return TV;case 5125:return EV;case 36294:return AV;case 36295:return wV;case 36296:return CV;case 35678:case 36198:case 36298:case 36306:case 35682:return RV;case 35679:case 36299:case 36307:return DV;case 35680:case 36300:case 36308:case 36293:return PV;case 36289:case 36303:case 36311:case 36292:return NV}}function UV(e,t){e.uniform1fv(this.addr,t)}function IV(e,t){let n=hc(t,this.size,2);e.uniform2fv(this.addr,n)}function OV(e,t){let n=hc(t,this.size,3);e.uniform3fv(this.addr,n)}function BV(e,t){let n=hc(t,this.size,4);e.uniform4fv(this.addr,n)}function FV(e,t){let n=hc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function zV(e,t){let n=hc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function VV(e,t){let n=hc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function kV(e,t){e.uniform1iv(this.addr,t)}function GV(e,t){e.uniform2iv(this.addr,t)}function HV(e,t){e.uniform3iv(this.addr,t)}function WV(e,t){e.uniform4iv(this.addr,t)}function XV(e,t){e.uniform1uiv(this.addr,t)}function qV(e,t){e.uniform2uiv(this.addr,t)}function YV(e,t){e.uniform3uiv(this.addr,t)}function ZV(e,t){e.uniform4uiv(this.addr,t)}function KV(e,t,n){let i=this.cache,s=t.length,r=Km(n,s);xn(i,r)||(e.uniform1iv(this.addr,r),vn(i,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=ib:a=O2;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||a,r[o])}function jV(e,t,n){let i=this.cache,s=t.length,r=Km(n,s);xn(i,r)||(e.uniform1iv(this.addr,r),vn(i,r));for(let a=0;a!==s;++a)n.setTexture3D(t[a]||F2,r[a])}function JV(e,t,n){let i=this.cache,s=t.length,r=Km(n,s);xn(i,r)||(e.uniform1iv(this.addr,r),vn(i,r));for(let a=0;a!==s;++a)n.setTextureCube(t[a]||z2,r[a])}function QV(e,t,n){let i=this.cache,s=t.length,r=Km(n,s);xn(i,r)||(e.uniform1iv(this.addr,r),vn(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||B2,r[a])}function $V(e){switch(e){case 5126:return UV;case 35664:return IV;case 35665:return OV;case 35666:return BV;case 35674:return FV;case 35675:return zV;case 35676:return VV;case 5124:case 35670:return kV;case 35667:case 35671:return GV;case 35668:case 35672:return HV;case 35669:case 35673:return WV;case 5125:return XV;case 36294:return qV;case 36295:return YV;case 36296:return ZV;case 35678:case 36198:case 36298:case 36306:case 35682:return KV;case 35679:case 36299:case 36307:return jV;case 35680:case 36300:case 36308:case 36293:return JV;case 36289:case 36303:case 36311:case 36292:return QV}}function S2(e,t){e.seq.push(t),e.map[t.id]=t}function t4(e,t,n){let i=e.name,s=i.length;for(eb.lastIndex=0;;){let r=eb.exec(i),a=eb.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){S2(n,c===void 0?new sb(o,e,t):new rb(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new ab(o),S2(n,h)),n=h}}}function M2(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}function i4(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function s4(e){Qt._getMatrix(T2,Qt.workingColorSpace,e);let t=`mat3( ${T2.elements.map(n=>n.toFixed(4))} )`;switch(Qt.getTransfer(e)){case Ku:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function E2(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+i4(e.getShaderSource(t),o)}else return r}function r4(e,t){let n=s4(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function o4(e,t){let n=a4[t];return n===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function l4(){Qt.getLuminanceCoefficients(Xm);let e=Xm.x.toFixed(4),t=Xm.y.toFixed(4),n=Xm.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c4(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mf).join(`
`)}function u4(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function f4(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Mf(e){return e!==""}function A2(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function w2(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function ob(e){return e.replace(h4,p4)}function p4(e,t){let n=Xt[t];if(n===void 0){let i=d4.get(t);if(i!==void 0)n=Xt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ob(n)}function C2(e){return e.replace(m4,g4)}function g4(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function R2(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function x4(e){return y4[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function _4(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":v4[e.envMapMode]||"ENVMAP_TYPE_CUBE"}function S4(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":b4[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function T4(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":M4[e.combine]||"ENVMAP_BLENDING_NONE"}function E4(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function A4(e,t,n,i){let s=e.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=x4(n),c=_4(n),u=S4(n),h=T4(n),f=E4(n),p=c4(n),m=u4(r),b=s.createProgram(),g,d,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Mf).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Mf).join(`
`),d.length>0&&(d+=`
`)):(g=[R2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mf).join(`
`),d=[R2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==as?"#define TONE_MAPPING":"",n.toneMapping!==as?Xt.tonemapping_pars_fragment:"",n.toneMapping!==as?o4("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,r4("linearToOutputTexel",n.outputColorSpace),l4(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Mf).join(`
`)),a=ob(a),a=A2(a,n),a=w2(a,n),o=ob(o),o=A2(o,n),o=w2(o,n),a=C2(a),o=C2(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===W_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===W_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let _=y+g+a,x=y+d+o,M=M2(s,s.VERTEX_SHADER,_),T=M2(s,s.FRAGMENT_SHADER,x);s.attachShader(b,M),s.attachShader(b,T),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function w(P){if(e.debug.checkShaderErrors){let L=s.getProgramInfoLog(b)||"",q=s.getShaderInfoLog(M)||"",H=s.getShaderInfoLog(T)||"",B=L.trim(),W=q.trim(),X=H.trim(),Y=!0,nt=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(Y=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,b,M,T);else{let at=E2(s,M,"vertex"),ot=E2(s,T,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+at+`
`+ot)}else B!==""?Nt("WebGLProgram: Program Info Log:",B):(W===""||X==="")&&(nt=!1);nt&&(P.diagnostics={runnable:Y,programLog:B,vertexShader:{log:W,prefix:g},fragmentShader:{log:X,prefix:d}})}s.deleteShader(M),s.deleteShader(T),v=new uc(s,b),A=f4(s,b)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(b,e4)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=n4++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=T,this}function C4(e){return e===Sa||e===xf||e===vf}function R4(e,t,n,i,s,r){let a=new $u,o=new lb,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function b(v,A,C,P,L,q){let H=P.fog,B=L.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=t.get(v.envMap||W,X),nt=Y&&Y.mapping===hf?Y.image.height:null,at=p[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Nt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let ot=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_t=ot!==void 0?ot.length:0,ie=0;B.morphAttributes.position!==void 0&&(ie=1),B.morphAttributes.normal!==void 0&&(ie=2),B.morphAttributes.color!==void 0&&(ie=3);let Pe,$t,j,st;if(at){let Mt=Ns[at];Pe=Mt.vertexShader,$t=Mt.fragmentShader}else{Pe=v.vertexShader,$t=v.fragmentShader;let Mt=o.getVertexShaderStage(v),Ye=o.getFragmentShaderStage(v);o.update(v,Mt,Ye),j=Mt.id,st=Ye.id}let et=e.getRenderTarget(),Dt=e.state.buffers.depth.getReversed(),mt=L.isInstancedMesh===!0,Et=L.isBatchedMesh===!0,Ae=!!v.map,Wt=!!v.matcap,fe=!!Y,ae=!!v.aoMap,se=!!v.lightMap,an=!!v.bumpMap&&v.wireframe===!1,pn=!!v.normalMap,Mn=!!v.displacementMap,Dn=!!v.emissiveMap,qe=!!v.metalnessMap,on=!!v.roughnessMap,U=v.anisotropy>0,Jn=v.clearcoat>0,he=v.dispersion>0,R=v.iridescence>0,S=v.sheen>0,F=v.transmission>0,k=U&&!!v.anisotropyMap,Z=Jn&&!!v.clearcoatMap,rt=Jn&&!!v.clearcoatNormalMap,ct=Jn&&!!v.clearcoatRoughnessMap,K=R&&!!v.iridescenceMap,Q=R&&!!v.iridescenceThicknessMap,ut=S&&!!v.sheenColorMap,wt=S&&!!v.sheenRoughnessMap,dt=!!v.specularMap,ft=!!v.specularColorMap,Pt=!!v.specularIntensityMap,Lt=F&&!!v.transmissionMap,Vt=F&&!!v.thicknessMap,N=!!v.gradientMap,lt=!!v.alphaMap,J=v.alphaTest>0,ht=!!v.alphaHash,xt=!!v.extensions,it=as;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(it=e.toneMapping);let At={shaderID:at,shaderType:v.type,shaderName:v.name,vertexShader:Pe,fragmentShader:$t,defines:v.defines,customVertexShaderID:j,customFragmentShaderID:st,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Et,batchingColor:Et&&L._colorsTexture!==null,instancing:mt,instancingColor:mt&&L.instanceColor!==null,instancingMorph:mt&&L.morphTexture!==null,outputColorSpace:et===null?e.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ae,matcap:Wt,envMap:fe,envMapMode:fe&&Y.mapping,envMapCubeUVHeight:nt,aoMap:ae,lightMap:se,bumpMap:an,normalMap:pn,displacementMap:Mn,emissiveMap:Dn,normalMapObjectSpace:pn&&v.normalMapType===QC,normalMapTangentSpace:pn&&v.normalMapType===H_,packedNormalMap:pn&&v.normalMapType===H_&&C4(v.normalMap.format),metalnessMap:qe,roughnessMap:on,anisotropy:U,anisotropyMap:k,clearcoat:Jn,clearcoatMap:Z,clearcoatNormalMap:rt,clearcoatRoughnessMap:ct,dispersion:he,iridescence:R,iridescenceMap:K,iridescenceThicknessMap:Q,sheen:S,sheenColorMap:ut,sheenRoughnessMap:wt,specularMap:dt,specularColorMap:ft,specularIntensityMap:Pt,transmission:F,transmissionMap:Lt,thicknessMap:Vt,gradientMap:N,opaque:v.transparent===!1&&v.blending===po&&v.alphaToCoverage===!1,alphaMap:lt,alphaTest:J,alphaHash:ht,combine:v.combine,mapUv:Ae&&m(v.map.channel),aoMapUv:ae&&m(v.aoMap.channel),lightMapUv:se&&m(v.lightMap.channel),bumpMapUv:an&&m(v.bumpMap.channel),normalMapUv:pn&&m(v.normalMap.channel),displacementMapUv:Mn&&m(v.displacementMap.channel),emissiveMapUv:Dn&&m(v.emissiveMap.channel),metalnessMapUv:qe&&m(v.metalnessMap.channel),roughnessMapUv:on&&m(v.roughnessMap.channel),anisotropyMapUv:k&&m(v.anisotropyMap.channel),clearcoatMapUv:Z&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:rt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:wt&&m(v.sheenRoughnessMap.channel),specularMapUv:dt&&m(v.specularMap.channel),specularColorMapUv:ft&&m(v.specularColorMap.channel),specularIntensityMapUv:Pt&&m(v.specularIntensityMap.channel),transmissionMapUv:Lt&&m(v.transmissionMap.channel),thicknessMapUv:Vt&&m(v.thicknessMap.channel),alphaMapUv:lt&&m(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pn||U),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Ae||lt),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&pn===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Dt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:it,decodeVideoTexture:Ae&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:Dn&&v.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wi,flipSided:v.side===Zn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&v.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function g(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)A.push(C),A.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(d(A,v),y(A,v),A.push(e.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function d(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function y(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function _(v){let A=p[v.type],C;if(A){let P=Ns[A];C=u2.clone(P.uniforms)}else C=v.uniforms;return C}function x(v,A){let C=u.get(A);return C!==void 0?++C.usedTimes:(C=new A4(e,A,v,s),c.push(C),u.set(A,C)),C}function M(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function w(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:_,acquireProgram:x,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:w}}function D4(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function P4(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function D2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function P2(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,m,b,g,d){let y=e[t];return y===void 0?(y={id:f.id,object:f,geometry:p,material:m,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:d},e[t]=y):(y.id=f.id,y.object=f,y.geometry=p,y.material=m,y.materialVariant=a(f),y.groupOrder=b,y.renderOrder=f.renderOrder,y.z=g,y.group=d),t++,y}function l(f,p,m,b,g,d){let y=o(f,p,m,b,g,d);m.transmission>0?i.push(y):m.transparent===!0?s.push(y):n.push(y)}function c(f,p,m,b,g,d){let y=o(f,p,m,b,g,d);m.transmission>0?i.unshift(y):m.transparent===!0?s.unshift(y):n.unshift(y)}function u(f,p,m){n.length>1&&n.sort(f||P4),i.length>1&&i.sort(p||D2),s.length>1&&s.sort(p||D2),m&&(n.reverse(),i.reverse(),s.reverse())}function h(){for(let f=t,p=e.length;f<p;f++){let m=e[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function N4(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;return r===void 0?(a=new P2,e.set(i,[a])):s>=r.length?(a=new P2,r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function L4(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new O,color:new ne};break;case"SpotLight":n={position:new O,direction:new O,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new ne,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":n={color:new ne,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=n,n}}}function U4(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}function O4(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function B4(e){let t=new L4,n=U4(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,r=new ke,a=new ke;function o(c){let u=0,h=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,m=0,b=0,g=0,d=0,y=0,_=0,x=0,M=0,T=0,w=0;c.sort(O4);for(let A=0,C=c.length;A<C;A++){let P=c[A],L=P.color,q=P.intensity,H=P.distance,B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Sa?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=L.r*q,h+=L.g*q,f+=L.b*q;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],q);w++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,Y=n.get(P);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=P.shadow.matrix,y++}i.directional[p]=W,p++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(L).multiplyScalar(q),W.distance=H,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[b]=W;let X=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,X.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[b]=X.matrix,P.castShadow){let Y=n.get(P);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,i.spotShadow[b]=Y,i.spotShadowMap[b]=B,x++}b++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(L).multiplyScalar(q),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=W,g++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let X=P.shadow,Y=n.get(P);Y.shadowIntensity=X.intensity,Y.shadowBias=X.bias,Y.shadowNormalBias=X.normalBias,Y.shadowRadius=X.radius,Y.shadowMapSize=X.mapSize,Y.shadowCameraNear=X.camera.near,Y.shadowCameraFar=X.camera.far,i.pointShadow[m]=Y,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=P.shadow.matrix,_++}i.point[m]=W,m++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(q),W.groundColor.copy(P.groundColor).multiplyScalar(q),i.hemi[d]=W,d++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let v=i.hash;(v.directionalLength!==p||v.pointLength!==m||v.spotLength!==b||v.rectAreaLength!==g||v.hemiLength!==d||v.numDirectionalShadows!==y||v.numPointShadows!==_||v.numSpotShadows!==x||v.numSpotMaps!==M||v.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=b,i.rectArea.length=g,i.point.length=m,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+M-T,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,v.directionalLength=p,v.pointLength=m,v.spotLength=b,v.rectAreaLength=g,v.hemiLength=d,v.numDirectionalShadows=y,v.numPointShadows=_,v.numSpotShadows=x,v.numSpotMaps=M,v.numLightProbes=w,i.version=I4++)}function l(c,u){let h=0,f=0,p=0,m=0,b=0,g=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){let _=c[d];if(_.isDirectionalLight){let x=i.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(_.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let x=i.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let x=i.hemi[b];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:i}}function N2(e){let t=new B4(e),n=[],i=[],s=[];function r(f){h.camera=f,n.length=0,i.length=0,s.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(n)}function u(f){t.setupView(n,f)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function F4(e){let t=new WeakMap;function n(s,r=0){let a=t.get(s),o;return a===void 0?(o=new N2(e),t.set(s,[o])):r>=a.length?(o=new N2(e),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}function H4(e,t,n){let i=new nf,s=new jt,r=new jt,a=new Ge,o=new Hp,l=new Wp,c={},u=n.maxTextureSize,h={[pr]:Zn,[Zn]:pr,[wi]:wi},f=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:z4,fragmentShader:V4}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new sn;m.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new De(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ff;let d=this.type;this.render=function(T,w,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===RC&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ff);let A=e.getRenderTarget(),C=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),L=e.state;L.setBlending(Rs),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let q=d!==this.type;q&&w.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(B=>B.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,B=T.length;H<B;H++){let W=T[H],X=W.shadow;if(X===void 0){Nt("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let Y=X.getFrameExtents();s.multiply(Y),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,X.mapSize.y=r.y));let nt=e.state.buffers.depth.getReversed();if(X.camera._reversedDepth=nt,X.map===null||q===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ac){if(W.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ti(s.x,s.y,{format:Sa,type:Ds,minFilter:On,magFilter:On,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new gr(s.x,s.y,ls),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=As,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Cn,X.map.depthTexture.magFilter=Cn}else W.isPointLight?(X.map=new Ym(s.x),X.map.depthTexture=new Vp(s.x,os)):(X.map=new Ti(s.x,s.y),X.map.depthTexture=new gr(s.x,s.y,os)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=As,this.type===ff?(X.map.depthTexture.compareFunction=nt?Hm:Gm,X.map.depthTexture.minFilter=On,X.map.depthTexture.magFilter=On):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Cn,X.map.depthTexture.magFilter=Cn);X.camera.updateProjectionMatrix()}let at=X.map.isWebGLCubeRenderTarget?6:1;for(let ot=0;ot<at;ot++){if(X.map.isWebGLCubeRenderTarget)e.setRenderTarget(X.map,ot),e.clear();else{ot===0&&(e.setRenderTarget(X.map),e.clear());let _t=X.getViewport(ot);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),L.viewport(a)}if(W.isPointLight){let _t=X.camera,ie=X.matrix,Pe=W.distance||_t.far;Pe!==_t.far&&(_t.far=Pe,_t.updateProjectionMatrix()),Sf.setFromMatrixPosition(W.matrixWorld),_t.position.copy(Sf),nb.copy(_t.position),nb.add(k4[ot]),_t.up.copy(G4[ot]),_t.lookAt(nb),_t.updateMatrixWorld(),ie.makeTranslation(-Sf.x,-Sf.y,-Sf.z),L2.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),X._frustum.setFromProjectionMatrix(L2,_t.coordinateSystem,_t.reversedDepth)}else X.updateMatrices(W);i=X.getFrustum(),x(w,v,X.camera,W,this.type)}X.isPointLightShadow!==!0&&this.type===ac&&y(X,v),X.needsUpdate=!1}d=this.type,g.needsUpdate=!1,e.setRenderTarget(A,C,P)};function y(T,w){let v=t.update(b);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ti(s.x,s.y,{format:Sa,type:Ds})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(w,null,v,f,b,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(w,null,v,p,b,null)}function _(T,w,v,A){let C=null,P=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)C=P;else if(C=v.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let L=C.uuid,q=w.uuid,H=c[L];H===void 0&&(H={},c[L]=H);let B=H[q];B===void 0&&(B=C.clone(),H[q]=B,w.addEventListener("dispose",M)),C=B}if(C.visible=w.visible,C.wireframe=w.wireframe,A===ac?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:h[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=e.properties.get(C);L.light=v}return C}function x(T,w,v,A,C){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===ac)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let q=t.update(T),H=T.material;if(Array.isArray(H)){let B=q.groups;for(let W=0,X=B.length;W<X;W++){let Y=B[W],nt=H[Y.materialIndex];if(nt&&nt.visible){let at=_(T,nt,A,C);T.onBeforeShadow(e,T,w,v,q,at,Y),e.renderBufferDirect(v,null,q,at,T,Y),T.onAfterShadow(e,T,w,v,q,at,Y)}}}else if(H.visible){let B=_(T,H,A,C);T.onBeforeShadow(e,T,w,v,q,B,null),e.renderBufferDirect(v,null,q,B,T,null),T.onAfterShadow(e,T,w,v,q,B,null)}}let L=T.children;for(let q=0,H=L.length;q<H;q++)x(L[q],w,v,A,C)}function M(T){T.target.removeEventListener("dispose",M);for(let v in c){let A=c[v],C=T.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function W4(e,t){function n(){let N=!1,lt=new Ge,J=null,ht=new Ge(0,0,0,0);return{setMask:function(xt){J!==xt&&!N&&(e.colorMask(xt,xt,xt,xt),J=xt)},setLocked:function(xt){N=xt},setClear:function(xt,it,At,Mt,Ye){Ye===!0&&(xt*=Mt,it*=Mt,At*=Mt),lt.set(xt,it,At,Mt),ht.equals(lt)===!1&&(e.clearColor(xt,it,At,Mt),ht.copy(lt))},reset:function(){N=!1,J=null,ht.set(-1,0,0,0)}}}function i(){let N=!1,lt=!1,J=null,ht=null,xt=null;return{setReversed:function(it){if(lt!==it){let At=t.get("EXT_clip_control");it?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),lt=it;let Mt=xt;xt=null,this.setClear(Mt)}},getReversed:function(){return lt},setTest:function(it){it?et(e.DEPTH_TEST):Dt(e.DEPTH_TEST)},setMask:function(it){J!==it&&!N&&(e.depthMask(it),J=it)},setFunc:function(it){if(lt&&(it=l2[it]),ht!==it){switch(it){case Mp:e.depthFunc(e.NEVER);break;case Tp:e.depthFunc(e.ALWAYS);break;case Ep:e.depthFunc(e.LESS);break;case mo:e.depthFunc(e.LEQUAL);break;case Ap:e.depthFunc(e.EQUAL);break;case wp:e.depthFunc(e.GEQUAL);break;case Cp:e.depthFunc(e.GREATER);break;case Rp:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ht=it}},setLocked:function(it){N=it},setClear:function(it){xt!==it&&(xt=it,lt&&(it=1-it),e.clearDepth(it))},reset:function(){N=!1,J=null,ht=null,xt=null,lt=!1}}}function s(){let N=!1,lt=null,J=null,ht=null,xt=null,it=null,At=null,Mt=null,Ye=null;return{setTest:function(we){N||(we?et(e.STENCIL_TEST):Dt(e.STENCIL_TEST))},setMask:function(we){lt!==we&&!N&&(e.stencilMask(we),lt=we)},setFunc:function(we,ds,ps){(J!==we||ht!==ds||xt!==ps)&&(e.stencilFunc(we,ds,ps),J=we,ht=ds,xt=ps)},setOp:function(we,ds,ps){(it!==we||At!==ds||Mt!==ps)&&(e.stencilOp(we,ds,ps),it=we,At=ds,Mt=ps)},setLocked:function(we){N=we},setClear:function(we){Ye!==we&&(e.clearStencil(we),Ye=we)},reset:function(){N=!1,lt=null,J=null,ht=null,xt=null,it=null,At=null,Mt=null,Ye=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},f={},p=new WeakMap,m=[],b=null,g=!1,d=null,y=null,_=null,x=null,M=null,T=null,w=null,v=new ne(0,0,0),A=0,C=!1,P=null,L=null,q=null,H=null,B=null,W=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,Y=0,nt=e.getParameter(e.VERSION);nt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(nt)[1]),X=Y>=1):nt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),X=Y>=2);let at=null,ot={},_t=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),Pe=new Ge().fromArray(_t),$t=new Ge().fromArray(ie);function j(N,lt,J,ht){let xt=new Uint8Array(4),it=e.createTexture();e.bindTexture(N,it),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let At=0;At<J;At++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(lt,0,e.RGBA,1,1,ht,0,e.RGBA,e.UNSIGNED_BYTE,xt):e.texImage2D(lt+At,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,xt);return it}let st={};st[e.TEXTURE_2D]=j(e.TEXTURE_2D,e.TEXTURE_2D,1),st[e.TEXTURE_CUBE_MAP]=j(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[e.TEXTURE_2D_ARRAY]=j(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),st[e.TEXTURE_3D]=j(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(e.DEPTH_TEST),a.setFunc(mo),an(!1),pn(M_),et(e.CULL_FACE),ae(Rs);function et(N){u[N]!==!0&&(e.enable(N),u[N]=!0)}function Dt(N){u[N]!==!1&&(e.disable(N),u[N]=!1)}function mt(N,lt){return f[N]!==lt?(e.bindFramebuffer(N,lt),f[N]=lt,N===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=lt),N===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=lt),!0):!1}function Et(N,lt){let J=m,ht=!1;if(N){J=p.get(lt),J===void 0&&(J=[],p.set(lt,J));let xt=N.textures;if(J.length!==xt.length||J[0]!==e.COLOR_ATTACHMENT0){for(let it=0,At=xt.length;it<At;it++)J[it]=e.COLOR_ATTACHMENT0+it;J.length=xt.length,ht=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,ht=!0);ht&&e.drawBuffers(J)}function Ae(N){return b!==N?(e.useProgram(N),b=N,!0):!1}let Wt={[fa]:e.FUNC_ADD,[PC]:e.FUNC_SUBTRACT,[NC]:e.FUNC_REVERSE_SUBTRACT};Wt[LC]=e.MIN,Wt[UC]=e.MAX;let fe={[IC]:e.ZERO,[OC]:e.ONE,[BC]:e.SRC_COLOR,[bp]:e.SRC_ALPHA,[HC]:e.SRC_ALPHA_SATURATE,[kC]:e.DST_COLOR,[zC]:e.DST_ALPHA,[FC]:e.ONE_MINUS_SRC_COLOR,[Sp]:e.ONE_MINUS_SRC_ALPHA,[GC]:e.ONE_MINUS_DST_COLOR,[VC]:e.ONE_MINUS_DST_ALPHA,[WC]:e.CONSTANT_COLOR,[XC]:e.ONE_MINUS_CONSTANT_COLOR,[qC]:e.CONSTANT_ALPHA,[YC]:e.ONE_MINUS_CONSTANT_ALPHA};function ae(N,lt,J,ht,xt,it,At,Mt,Ye,we){if(N===Rs){g===!0&&(Dt(e.BLEND),g=!1);return}if(g===!1&&(et(e.BLEND),g=!0),N!==DC){if(N!==d||we!==C){if((y!==fa||M!==fa)&&(e.blendEquation(e.FUNC_ADD),y=fa,M=fa),we)switch(N){case po:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case T_:e.blendFunc(e.ONE,e.ONE);break;case E_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case A_:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:It("WebGLState: Invalid blending: ",N);break}else switch(N){case po:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case T_:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case E_:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case A_:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",N);break}_=null,x=null,T=null,w=null,v.set(0,0,0),A=0,d=N,C=we}return}xt=xt||lt,it=it||J,At=At||ht,(lt!==y||xt!==M)&&(e.blendEquationSeparate(Wt[lt],Wt[xt]),y=lt,M=xt),(J!==_||ht!==x||it!==T||At!==w)&&(e.blendFuncSeparate(fe[J],fe[ht],fe[it],fe[At]),_=J,x=ht,T=it,w=At),(Mt.equals(v)===!1||Ye!==A)&&(e.blendColor(Mt.r,Mt.g,Mt.b,Ye),v.copy(Mt),A=Ye),d=N,C=!1}function se(N,lt){N.side===wi?Dt(e.CULL_FACE):et(e.CULL_FACE);let J=N.side===Zn;lt&&(J=!J),an(J),N.blending===po&&N.transparent===!1?ae(Rs):ae(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ht=N.stencilWrite;o.setTest(ht),ht&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Dn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(e.SAMPLE_ALPHA_TO_COVERAGE):Dt(e.SAMPLE_ALPHA_TO_COVERAGE)}function an(N){P!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),P=N)}function pn(N){N!==wC?(et(e.CULL_FACE),N!==L&&(N===M_?e.cullFace(e.BACK):N===CC?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Dt(e.CULL_FACE),L=N}function Mn(N){N!==q&&(X&&e.lineWidth(N),q=N)}function Dn(N,lt,J){N?(et(e.POLYGON_OFFSET_FILL),(H!==lt||B!==J)&&(H=lt,B=J,a.getReversed()&&(lt=-lt),e.polygonOffset(lt,J))):Dt(e.POLYGON_OFFSET_FILL)}function qe(N){N?et(e.SCISSOR_TEST):Dt(e.SCISSOR_TEST)}function on(N){N===void 0&&(N=e.TEXTURE0+W-1),at!==N&&(e.activeTexture(N),at=N)}function U(N,lt,J){J===void 0&&(at===null?J=e.TEXTURE0+W-1:J=at);let ht=ot[J];ht===void 0&&(ht={type:void 0,texture:void 0},ot[J]=ht),(ht.type!==N||ht.texture!==lt)&&(at!==J&&(e.activeTexture(J),at=J),e.bindTexture(N,lt||st[N]),ht.type=N,ht.texture=lt)}function Jn(){let N=ot[at];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function he(){try{e.compressedTexImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function R(){try{e.compressedTexImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function S(){try{e.texSubImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function F(){try{e.texSubImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function Z(){try{e.compressedTexSubImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function rt(){try{e.texStorage2D(...arguments)}catch(N){It("WebGLState:",N)}}function ct(){try{e.texStorage3D(...arguments)}catch(N){It("WebGLState:",N)}}function K(){try{e.texImage2D(...arguments)}catch(N){It("WebGLState:",N)}}function Q(){try{e.texImage3D(...arguments)}catch(N){It("WebGLState:",N)}}function ut(N){return h[N]!==void 0?h[N]:e.getParameter(N)}function wt(N,lt){h[N]!==lt&&(e.pixelStorei(N,lt),h[N]=lt)}function dt(N){Pe.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),Pe.copy(N))}function ft(N){$t.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),$t.copy(N))}function Pt(N,lt){let J=c.get(lt);J===void 0&&(J=new WeakMap,c.set(lt,J));let ht=J.get(N);ht===void 0&&(ht=e.getUniformBlockIndex(lt,N.name),J.set(N,ht))}function Lt(N,lt){let ht=c.get(lt).get(N);l.get(lt)!==ht&&(e.uniformBlockBinding(lt,ht,N.__bindingPointIndex),l.set(lt,ht))}function Vt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},h={},at=null,ot={},f={},p=new WeakMap,m=[],b=null,g=!1,d=null,y=null,_=null,x=null,M=null,T=null,w=null,v=new ne(0,0,0),A=0,C=!1,P=null,L=null,q=null,H=null,B=null,Pe.set(0,0,e.canvas.width,e.canvas.height),$t.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:Dt,bindFramebuffer:mt,drawBuffers:Et,useProgram:Ae,setBlending:ae,setMaterial:se,setFlipSided:an,setCullFace:pn,setLineWidth:Mn,setPolygonOffset:Dn,setScissorTest:qe,activeTexture:on,bindTexture:U,unbindTexture:Jn,compressedTexImage2D:he,compressedTexImage3D:R,texImage2D:K,texImage3D:Q,pixelStorei:wt,getParameter:ut,updateUBOMapping:Pt,uniformBlockBinding:Lt,texStorage2D:rt,texStorage3D:ct,texSubImage2D:S,texSubImage3D:F,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:dt,viewport:ft,reset:Vt}}function X4(e,t,n,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,u=new WeakMap,h=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,S){return m?new OffscreenCanvas(R,S):Ju("canvas")}function g(R,S,F){let k=1,Z=he(R);if((Z.width>F||Z.height>F)&&(k=F/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let rt=Math.floor(k*Z.width),ct=Math.floor(k*Z.height);f===void 0&&(f=b(rt,ct));let K=S?b(rt,ct):f;return K.width=rt,K.height=ct,K.getContext("2d").drawImage(R,0,0,rt,ct),Nt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+rt+"x"+ct+")."),K}else return"data"in R&&Nt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function d(R){return R.generateMipmaps}function y(R){e.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(R,S,F,k,Z,rt=!1){if(R!==null){if(e[R]!==void 0)return e[R];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ct;k&&(ct=t.get("EXT_texture_norm16"),ct||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=S;if(S===e.RED&&(F===e.FLOAT&&(K=e.R32F),F===e.HALF_FLOAT&&(K=e.R16F),F===e.UNSIGNED_BYTE&&(K=e.R8),F===e.UNSIGNED_SHORT&&ct&&(K=ct.R16_EXT),F===e.SHORT&&ct&&(K=ct.R16_SNORM_EXT)),S===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.R8UI),F===e.UNSIGNED_SHORT&&(K=e.R16UI),F===e.UNSIGNED_INT&&(K=e.R32UI),F===e.BYTE&&(K=e.R8I),F===e.SHORT&&(K=e.R16I),F===e.INT&&(K=e.R32I)),S===e.RG&&(F===e.FLOAT&&(K=e.RG32F),F===e.HALF_FLOAT&&(K=e.RG16F),F===e.UNSIGNED_BYTE&&(K=e.RG8),F===e.UNSIGNED_SHORT&&ct&&(K=ct.RG16_EXT),F===e.SHORT&&ct&&(K=ct.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RG8UI),F===e.UNSIGNED_SHORT&&(K=e.RG16UI),F===e.UNSIGNED_INT&&(K=e.RG32UI),F===e.BYTE&&(K=e.RG8I),F===e.SHORT&&(K=e.RG16I),F===e.INT&&(K=e.RG32I)),S===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RGB8UI),F===e.UNSIGNED_SHORT&&(K=e.RGB16UI),F===e.UNSIGNED_INT&&(K=e.RGB32UI),F===e.BYTE&&(K=e.RGB8I),F===e.SHORT&&(K=e.RGB16I),F===e.INT&&(K=e.RGB32I)),S===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(K=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(K=e.RGBA16UI),F===e.UNSIGNED_INT&&(K=e.RGBA32UI),F===e.BYTE&&(K=e.RGBA8I),F===e.SHORT&&(K=e.RGBA16I),F===e.INT&&(K=e.RGBA32I)),S===e.RGB&&(F===e.UNSIGNED_SHORT&&ct&&(K=ct.RGB16_EXT),F===e.SHORT&&ct&&(K=ct.RGB16_SNORM_EXT),F===e.UNSIGNED_INT_5_9_9_9_REV&&(K=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(K=e.R11F_G11F_B10F)),S===e.RGBA){let Q=rt?Ku:Qt.getTransfer(Z);F===e.FLOAT&&(K=e.RGBA32F),F===e.HALF_FLOAT&&(K=e.RGBA16F),F===e.UNSIGNED_BYTE&&(K=Q===ue?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT&&ct&&(K=ct.RGBA16_EXT),F===e.SHORT&&ct&&(K=ct.RGBA16_SNORM_EXT),F===e.UNSIGNED_SHORT_4_4_4_4&&(K=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(K=e.RGB5_A1)}return(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(R,S){let F;return R?S===null||S===os||S===lc?F=e.DEPTH24_STENCIL8:S===ls?F=e.DEPTH32F_STENCIL8:S===oc&&(F=e.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===os||S===lc?F=e.DEPTH_COMPONENT24:S===ls?F=e.DEPTH_COMPONENT32F:S===oc&&(F=e.DEPTH_COMPONENT16),F}function T(R,S){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Cn&&R.minFilter!==On?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){let S=R.target;S.removeEventListener("dispose",w),A(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&h.delete(S)}function v(R){let S=R.target;S.removeEventListener("dispose",v),P(S)}function A(R){let S=i.get(R);if(S.__webglInit===void 0)return;let F=R.source,k=p.get(F);if(k){let Z=k[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(R),Object.keys(k).length===0&&p.delete(F)}i.remove(R)}function C(R){let S=i.get(R);e.deleteTexture(S.__webglTexture);let F=R.source,k=p.get(F);delete k[S.__cacheKey],a.memory.textures--}function P(R){let S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(S.__webglFramebuffer[k]))for(let Z=0;Z<S.__webglFramebuffer[k].length;Z++)e.deleteFramebuffer(S.__webglFramebuffer[k][Z]);else e.deleteFramebuffer(S.__webglFramebuffer[k]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[k])}else{if(Array.isArray(S.__webglFramebuffer))for(let k=0;k<S.__webglFramebuffer.length;k++)e.deleteFramebuffer(S.__webglFramebuffer[k]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let k=0;k<S.__webglColorRenderbuffer.length;k++)S.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[k]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=R.textures;for(let k=0,Z=F.length;k<Z;k++){let rt=i.get(F[k]);rt.__webglTexture&&(e.deleteTexture(rt.__webglTexture),a.memory.textures--),i.remove(F[k])}i.remove(R)}let L=0;function q(){L=0}function H(){return L}function B(R){L=R}function W(){let R=L;return R>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function X(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Y(R,S){let F=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){let k=R.image;if(k===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(F,R,S);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+S)}function nt(R,S){let F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){Dt(F,R,S);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+S)}function at(R,S){let F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){Dt(F,R,S);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+S)}function ot(R,S){let F=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){mt(F,R,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+S)}let _t={[Dp]:e.REPEAT,[Es]:e.CLAMP_TO_EDGE,[Pp]:e.MIRRORED_REPEAT},ie={[Cn]:e.NEAREST,[jC]:e.NEAREST_MIPMAP_NEAREST,[df]:e.NEAREST_MIPMAP_LINEAR,[On]:e.LINEAR,[rm]:e.LINEAR_MIPMAP_NEAREST,[_a]:e.LINEAR_MIPMAP_LINEAR},Pe={[$C]:e.NEVER,[s2]:e.ALWAYS,[t2]:e.LESS,[Gm]:e.LEQUAL,[e2]:e.EQUAL,[Hm]:e.GEQUAL,[n2]:e.GREATER,[i2]:e.NOTEQUAL};function $t(R,S){if(S.type===ls&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===On||S.magFilter===rm||S.magFilter===df||S.magFilter===_a||S.minFilter===On||S.minFilter===rm||S.minFilter===df||S.minFilter===_a)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,_t[S.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,_t[S.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,_t[S.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,ie[S.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,ie[S.minFilter]),S.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,Pe[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Cn||S.minFilter!==df&&S.minFilter!==_a||S.type===ls&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function j(R,S){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));let k=S.source,Z=p.get(k);Z===void 0&&(Z={},p.set(k,Z));let rt=X(S);if(rt!==R.__cacheKey){Z[rt]===void 0&&(Z[rt]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[rt].usedTimes++;let ct=Z[R.__cacheKey];ct!==void 0&&(Z[R.__cacheKey].usedTimes--,ct.usedTimes===0&&C(S)),R.__cacheKey=rt,R.__webglTexture=Z[rt].texture}return F}function st(R,S,F){return Math.floor(Math.floor(R/F)/S)}function et(R,S,F,k){let rt=R.updateRanges;if(rt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,F,k,S.data);else{rt.sort((wt,dt)=>wt.start-dt.start);let ct=0;for(let wt=1;wt<rt.length;wt++){let dt=rt[ct],ft=rt[wt],Pt=dt.start+dt.count,Lt=st(ft.start,S.width,4),Vt=st(dt.start,S.width,4);ft.start<=Pt+1&&Lt===Vt&&st(ft.start+ft.count-1,S.width,4)===Lt?dt.count=Math.max(dt.count,ft.start+ft.count-dt.start):(++ct,rt[ct]=ft)}rt.length=ct+1;let K=n.getParameter(e.UNPACK_ROW_LENGTH),Q=n.getParameter(e.UNPACK_SKIP_PIXELS),ut=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let wt=0,dt=rt.length;wt<dt;wt++){let ft=rt[wt],Pt=Math.floor(ft.start/4),Lt=Math.ceil(ft.count/4),Vt=Pt%S.width,N=Math.floor(Pt/S.width),lt=Lt,J=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Vt),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,Vt,N,lt,J,F,k,S.data)}R.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,K),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(e.UNPACK_SKIP_ROWS,ut)}}function Dt(R,S,F){let k=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(k=e.TEXTURE_3D);let Z=j(R,S),rt=S.source;n.bindTexture(k,R.__webglTexture,e.TEXTURE0+F);let ct=i.get(rt);if(rt.version!==ct.__version||Z===!0){if(n.activeTexture(e.TEXTURE0+F),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let J=Qt.getPrimaries(Qt.workingColorSpace),ht=S.colorSpace===yr?null:Qt.getPrimaries(S.colorSpace),xt=S.colorSpace===yr||J===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let Q=g(S.image,!1,s.maxTextureSize);Q=Jn(S,Q);let ut=r.convert(S.format,S.colorSpace),wt=r.convert(S.type),dt=x(S.internalFormat,ut,wt,S.normalized,S.colorSpace,S.isVideoTexture);$t(k,S);let ft,Pt=S.mipmaps,Lt=S.isVideoTexture!==!0,Vt=ct.__version===void 0||Z===!0,N=rt.dataReady,lt=T(S,Q);if(S.isDepthTexture)dt=M(S.format===ba,S.type),Vt&&(Lt?n.texStorage2D(e.TEXTURE_2D,1,dt,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,dt,Q.width,Q.height,0,ut,wt,null));else if(S.isDataTexture)if(Pt.length>0){Lt&&Vt&&n.texStorage2D(e.TEXTURE_2D,lt,dt,Pt[0].width,Pt[0].height);for(let J=0,ht=Pt.length;J<ht;J++)ft=Pt[J],Lt?N&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,ft.width,ft.height,ut,wt,ft.data):n.texImage2D(e.TEXTURE_2D,J,dt,ft.width,ft.height,0,ut,wt,ft.data);S.generateMipmaps=!1}else Lt?(Vt&&n.texStorage2D(e.TEXTURE_2D,lt,dt,Q.width,Q.height),N&&et(S,Q,ut,wt)):n.texImage2D(e.TEXTURE_2D,0,dt,Q.width,Q.height,0,ut,wt,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Lt&&Vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,lt,dt,Pt[0].width,Pt[0].height,Q.depth);for(let J=0,ht=Pt.length;J<ht;J++)if(ft=Pt[J],S.format!==Wi)if(ut!==null)if(Lt){if(N)if(S.layerUpdates.size>0){let xt=K_(ft.width,ft.height,S.format,S.type);for(let it of S.layerUpdates){let At=ft.data.subarray(it*xt/ft.data.BYTES_PER_ELEMENT,(it+1)*xt/ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,it,ft.width,ft.height,1,ut,At)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,ft.width,ft.height,Q.depth,ut,ft.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,dt,ft.width,ft.height,Q.depth,0,ft.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,ft.width,ft.height,Q.depth,ut,wt,ft.data):n.texImage3D(e.TEXTURE_2D_ARRAY,J,dt,ft.width,ft.height,Q.depth,0,ut,wt,ft.data)}else{Lt&&Vt&&n.texStorage2D(e.TEXTURE_2D,lt,dt,Pt[0].width,Pt[0].height);for(let J=0,ht=Pt.length;J<ht;J++)ft=Pt[J],S.format!==Wi?ut!==null?Lt?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,ft.width,ft.height,ut,ft.data):n.compressedTexImage2D(e.TEXTURE_2D,J,dt,ft.width,ft.height,0,ft.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?N&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,ft.width,ft.height,ut,wt,ft.data):n.texImage2D(e.TEXTURE_2D,J,dt,ft.width,ft.height,0,ut,wt,ft.data)}else if(S.isDataArrayTexture)if(Lt){if(Vt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,lt,dt,Q.width,Q.height,Q.depth),N)if(S.layerUpdates.size>0){let J=K_(Q.width,Q.height,S.format,S.type);for(let ht of S.layerUpdates){let xt=Q.data.subarray(ht*J/Q.data.BYTES_PER_ELEMENT,(ht+1)*J/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ht,Q.width,Q.height,1,ut,wt,xt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,wt,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,dt,Q.width,Q.height,Q.depth,0,ut,wt,Q.data);else if(S.isData3DTexture)Lt?(Vt&&n.texStorage3D(e.TEXTURE_3D,lt,dt,Q.width,Q.height,Q.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,wt,Q.data)):n.texImage3D(e.TEXTURE_3D,0,dt,Q.width,Q.height,Q.depth,0,ut,wt,Q.data);else if(S.isFramebufferTexture){if(Vt)if(Lt)n.texStorage2D(e.TEXTURE_2D,lt,dt,Q.width,Q.height);else{let J=Q.width,ht=Q.height;for(let xt=0;xt<lt;xt++)n.texImage2D(e.TEXTURE_2D,xt,dt,J,ht,0,ut,wt,null),J>>=1,ht>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let J=e.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),h.add(S),J.onpaint=ht=>{let xt=ht.changedElements;for(let it of h)xt.includes(it.image)&&(it.needsUpdate=!0)},J.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Q);else{let xt=e.RGBA,it=e.RGBA,At=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,xt,it,At,Q)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Lt&&Vt){let J=he(Pt[0]);n.texStorage2D(e.TEXTURE_2D,lt,dt,J.width,J.height)}for(let J=0,ht=Pt.length;J<ht;J++)ft=Pt[J],Lt?N&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,ut,wt,ft):n.texImage2D(e.TEXTURE_2D,J,dt,ut,wt,ft);S.generateMipmaps=!1}else if(Lt){if(Vt){let J=he(Q);n.texStorage2D(e.TEXTURE_2D,lt,dt,J.width,J.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,wt,Q)}else n.texImage2D(e.TEXTURE_2D,0,dt,ut,wt,Q);d(S)&&y(k),ct.__version=rt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function mt(R,S,F){if(S.image.length!==6)return;let k=j(R,S),Z=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+F);let rt=i.get(Z);if(Z.version!==rt.__version||k===!0){n.activeTexture(e.TEXTURE0+F);let ct=Qt.getPrimaries(Qt.workingColorSpace),K=S.colorSpace===yr?null:Qt.getPrimaries(S.colorSpace),Q=S.colorSpace===yr||ct===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ut=S.isCompressedTexture||S.image[0].isCompressedTexture,wt=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let it=0;it<6;it++)!ut&&!wt?dt[it]=g(S.image[it],!0,s.maxCubemapSize):dt[it]=wt?S.image[it].image:S.image[it],dt[it]=Jn(S,dt[it]);let ft=dt[0],Pt=r.convert(S.format,S.colorSpace),Lt=r.convert(S.type),Vt=x(S.internalFormat,Pt,Lt,S.normalized,S.colorSpace),N=S.isVideoTexture!==!0,lt=rt.__version===void 0||k===!0,J=Z.dataReady,ht=T(S,ft);$t(e.TEXTURE_CUBE_MAP,S);let xt;if(ut){N&&lt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,Vt,ft.width,ft.height);for(let it=0;it<6;it++){xt=dt[it].mipmaps;for(let At=0;At<xt.length;At++){let Mt=xt[At];S.format!==Wi?Pt!==null?N?J&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,0,0,Mt.width,Mt.height,Pt,Mt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,Vt,Mt.width,Mt.height,0,Mt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,0,0,Mt.width,Mt.height,Pt,Lt,Mt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,At,Vt,Mt.width,Mt.height,0,Pt,Lt,Mt.data)}}}else{if(xt=S.mipmaps,N&&lt){xt.length>0&&ht++;let it=he(dt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,Vt,it.width,it.height)}for(let it=0;it<6;it++)if(wt){N?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,dt[it].width,dt[it].height,Pt,Lt,dt[it].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,dt[it].width,dt[it].height,0,Pt,Lt,dt[it].data);for(let At=0;At<xt.length;At++){let Ye=xt[At].image[it].image;N?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,0,0,Ye.width,Ye.height,Pt,Lt,Ye.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,Vt,Ye.width,Ye.height,0,Pt,Lt,Ye.data)}}else{N?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Pt,Lt,dt[it]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Vt,Pt,Lt,dt[it]);for(let At=0;At<xt.length;At++){let Mt=xt[At];N?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,0,0,Pt,Lt,Mt.image[it]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,At+1,Vt,Pt,Lt,Mt.image[it])}}}d(S)&&y(e.TEXTURE_CUBE_MAP),rt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Et(R,S,F,k,Z,rt){let ct=r.convert(F.format,F.colorSpace),K=r.convert(F.type),Q=x(F.internalFormat,ct,K,F.normalized,F.colorSpace),ut=i.get(S),wt=i.get(F);if(wt.__renderTarget=S,!ut.__hasExternalTextures){let dt=Math.max(1,S.width>>rt),ft=Math.max(1,S.height>>rt);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,rt,Q,dt,ft,S.depth,0,ct,K,null):n.texImage2D(Z,rt,Q,dt,ft,0,ct,K,null)}n.bindFramebuffer(e.FRAMEBUFFER,R),on(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,Z,wt.__webglTexture,0,qe(S)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,Z,wt.__webglTexture,rt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(R,S,F){if(e.bindRenderbuffer(e.RENDERBUFFER,R),S.depthBuffer){let k=S.depthTexture,Z=k&&k.isDepthTexture?k.type:null,rt=M(S.stencilBuffer,Z),ct=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;on(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,qe(S),rt,S.width,S.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,qe(S),rt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,rt,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ct,e.RENDERBUFFER,R)}else{let k=S.textures;for(let Z=0;Z<k.length;Z++){let rt=k[Z],ct=r.convert(rt.format,rt.colorSpace),K=r.convert(rt.type),Q=x(rt.internalFormat,ct,K,rt.normalized,rt.colorSpace);on(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,qe(S),Q,S.width,S.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,qe(S),Q,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Q,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Wt(R,S,F){let k=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),$t(e.TEXTURE_CUBE_MAP,S.depthTexture);let ut=r.convert(S.depthTexture.format),wt=r.convert(S.depthTexture.type),dt;S.depthTexture.format===As?dt=e.DEPTH_COMPONENT24:S.depthTexture.format===ba&&(dt=e.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,dt,S.width,S.height,0,ut,wt,null)}}else Y(S.depthTexture,0);let rt=Z.__webglTexture,ct=qe(S),K=k?e.TEXTURE_CUBE_MAP_POSITIVE_X+F:e.TEXTURE_2D,Q=S.depthTexture.format===ba?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===As)on(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,K,rt,0,ct):e.framebufferTexture2D(e.FRAMEBUFFER,Q,K,rt,0);else if(S.depthTexture.format===ba)on(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,K,rt,0,ct):e.framebufferTexture2D(e.FRAMEBUFFER,Q,K,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(R){let S=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let k=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),k){let Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=k}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(F)for(let k=0;k<6;k++)Wt(S.__webglFramebuffer[k],R,k);else{let k=R.texture.mipmaps;k&&k.length>0?Wt(S.__webglFramebuffer[0],R,0):Wt(S.__webglFramebuffer,R,0)}else if(F){S.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[k]),S.__webglDepthbuffer[k]===void 0)S.__webglDepthbuffer[k]=e.createRenderbuffer(),Ae(S.__webglDepthbuffer[k],R,!1);else{let Z=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,rt)}}else{let k=R.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Ae(S.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,rt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ae(R,S,F){let k=i.get(R);S!==void 0&&Et(k.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&fe(R)}function se(R){let S=R.texture,F=i.get(R),k=i.get(S);R.addEventListener("dispose",v);let Z=R.textures,rt=R.isWebGLCubeRenderTarget===!0,ct=Z.length>1;if(ct||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=S.version,a.memory.textures++),rt){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let Q=0;Q<S.mipmaps.length;Q++)F.__webglFramebuffer[K][Q]=e.createFramebuffer()}else F.__webglFramebuffer[K]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<S.mipmaps.length;K++)F.__webglFramebuffer[K]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(ct)for(let K=0,Q=Z.length;K<Q;K++){let ut=i.get(Z[K]);ut.__webglTexture===void 0&&(ut.__webglTexture=e.createTexture(),a.memory.textures++)}if(R.samples>0&&on(R)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let Q=Z[K];F.__webglColorRenderbuffer[K]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[K]);let ut=r.convert(Q.format,Q.colorSpace),wt=r.convert(Q.type),dt=x(Q.internalFormat,ut,wt,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),ft=qe(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,ft,dt,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,F.__webglColorRenderbuffer[K])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),Ae(F.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(rt){n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),$t(e.TEXTURE_CUBE_MAP,S);for(let K=0;K<6;K++)if(S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)Et(F.__webglFramebuffer[K][Q],R,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else Et(F.__webglFramebuffer[K],R,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);d(S)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ct){for(let K=0,Q=Z.length;K<Q;K++){let ut=Z[K],wt=i.get(ut),dt=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(dt,wt.__webglTexture),$t(dt,ut),Et(F.__webglFramebuffer,R,ut,e.COLOR_ATTACHMENT0+K,dt,0),d(ut)&&y(dt)}n.unbindTexture()}else{let K=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(K,k.__webglTexture),$t(K,S),S.mipmaps&&S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)Et(F.__webglFramebuffer[Q],R,S,e.COLOR_ATTACHMENT0,K,Q);else Et(F.__webglFramebuffer,R,S,e.COLOR_ATTACHMENT0,K,0);d(S)&&y(K),n.unbindTexture()}R.depthBuffer&&fe(R)}function an(R){let S=R.textures;for(let F=0,k=S.length;F<k;F++){let Z=S[F];if(d(Z)){let rt=_(R),ct=i.get(Z).__webglTexture;n.bindTexture(rt,ct),y(rt),n.unbindTexture()}}}let pn=[],Mn=[];function Dn(R){if(R.samples>0){if(on(R)===!1){let S=R.textures,F=R.width,k=R.height,Z=e.COLOR_BUFFER_BIT,rt=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ct=i.get(R),K=S.length>1;if(K)for(let ut=0;ut<S.length;ut++)n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let Q=R.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),K){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let wt=i.get(S[ut]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,wt,0)}e.blitFramebuffer(0,0,F,k,0,0,F,k,Z,e.NEAREST),l===!0&&(pn.length=0,Mn.length=0,pn.push(e.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.resolveDepthBuffer===!1&&(pn.push(rt),Mn.push(rt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Mn)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,pn))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),K)for(let ut=0;ut<S.length;ut++){n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let wt=i.get(S[ut]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ct.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,wt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function qe(R){return Math.min(s.maxSamples,R.samples)}function on(R){let S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(R){let S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Jn(R,S){let F=R.colorSpace,k=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Zu&&F!==yr&&(Qt.getTransfer(F)===ue?(k!==Wi||Z!==Ci)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",F)),S}function he(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.getTextureUnits=H,this.setTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=nt,this.setTexture3D=at,this.setTextureCube=ot,this.rebindTextures=ae,this.setupRenderTarget=se,this.updateRenderTargetMipmap=an,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=on,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function q4(e,t){function n(i,s=yr){let r,a=Qt.getTransfer(s);if(i===Ci)return e.UNSIGNED_BYTE;if(i===om)return e.UNSIGNED_SHORT_4_4_4_4;if(i===lm)return e.UNSIGNED_SHORT_5_5_5_1;if(i===F_)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===z_)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===O_)return e.BYTE;if(i===B_)return e.SHORT;if(i===oc)return e.UNSIGNED_SHORT;if(i===am)return e.INT;if(i===os)return e.UNSIGNED_INT;if(i===ls)return e.FLOAT;if(i===Ds)return e.HALF_FLOAT;if(i===V_)return e.ALPHA;if(i===k_)return e.RGB;if(i===Wi)return e.RGBA;if(i===As)return e.DEPTH_COMPONENT;if(i===ba)return e.DEPTH_STENCIL;if(i===G_)return e.RED;if(i===cm)return e.RED_INTEGER;if(i===Sa)return e.RG;if(i===um)return e.RG_INTEGER;if(i===fm)return e.RGBA_INTEGER;if(i===pf||i===mf||i===gf||i===yf)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===pf)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yf)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===pf)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mf)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gf)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yf)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hm||i===dm||i===pm||i===mm)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hm)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dm)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pm)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mm)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gm||i===ym||i===xm||i===vm||i===_m||i===xf||i===bm)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gm||i===ym)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xm)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===vm)return r.COMPRESSED_R11_EAC;if(i===_m)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xf)return r.COMPRESSED_RG11_EAC;if(i===bm)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sm||i===Mm||i===Tm||i===Em||i===Am||i===wm||i===Cm||i===Rm||i===Dm||i===Pm||i===Nm||i===Lm||i===Um||i===Im)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sm)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mm)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tm)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Em)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Am)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wm)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cm)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rm)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dm)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pm)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nm)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lm)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Um)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Im)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Om||i===Bm||i===Fm)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Om)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bm)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fm)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zm||i===Vm||i===vf||i===km)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===zm)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vm)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===km)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lc?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}function j4(e,t){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,q_(e)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,y,_,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),h(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,x)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),b(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,y,_):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Zn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Zn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let y=t.get(d),_=y.envMap,x=y.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(K4.makeRotationFromEuler(x)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(V2),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,y,_){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*y,g.scale.value=_*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,y){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function b(g,d){let y=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function J4(e,t,n,i){let s={},r={},a=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let T=M.program;i.uniformBlockBinding(x,T)}function c(x,M){let T=s[x.id];T===void 0&&(g(x),T=u(x),s[x.id]=T,x.addEventListener("dispose",y));let w=M.program;i.updateUBOMapping(x,w);let v=t.render.frame;r[x.id]!==v&&(f(x),r[x.id]=v)}function u(x){let M=h();x.__bindingPointIndex=M;let T=e.createBuffer(),w=x.__size,v=x.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,w,v),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,T),T}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let M=s[x.id],T=x.uniforms,w=x.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let v=0,A=T.length;v<A;v++){let C=T[v];if(Array.isArray(C))for(let P=0,L=C.length;P<L;P++)p(C[P],v,P,w);else p(C,v,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(x,M,T,w){if(b(x,M,T,w)===!0){let v=x.__offset,A=x.value;if(Array.isArray(A)){let C=0;for(let P=0;P<A.length;P++){let L=A[P],q=d(L);m(L,x.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,x.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,v,x.__data)}}function m(x,M,T){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,T)}function b(x,M,T,w){let v=x.value,A=M+"_"+T;if(w[A]===void 0)return typeof v=="number"||typeof v=="boolean"?w[A]=v:ArrayBuffer.isView(v)?w[A]=v.slice():w[A]=v.clone(),!0;{let C=w[A];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return w[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function g(x){let M=x.uniforms,T=0,w=16;for(let A=0,C=M.length;A<C;A++){let P=Array.isArray(M[A])?M[A]:[M[A]];for(let L=0,q=P.length;L<q;L++){let H=P[L],B=Array.isArray(H.value)?H.value:[H.value];for(let W=0,X=B.length;W<X;W++){let Y=B[W],nt=d(Y),at=T%w,ot=at%nt.boundary,_t=at+ot;T+=ot,_t!==0&&w-_t<nt.storage&&(T+=w-_t),H.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=nt.storage}}}let v=T%w;return v>0&&(T+=w-v),x.__size=T,x.__cache={},this}function d(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",x),M}function y(x){let M=x.target;M.removeEventListener("dispose",y);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),e.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function _(){for(let x in s)e.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:_}}function $4(){return Ps===null&&(Ps=new Bp(Q4,16,16,Sa,Ds),Ps.name="DFG_LUT",Ps.minFilter=On,Ps.magFilter=On,Ps.wrapS=Es,Ps.wrapT=Es,Ps.generateMipmaps=!1,Ps.needsUpdate=!0),Ps}var pB,mB,gB,yB,xB,vB,_B,bB,SB,MB,TB,EB,AB,wB,CB,RB,DB,PB,NB,LB,UB,IB,OB,BB,FB,zB,VB,kB,GB,HB,WB,XB,qB,YB,ZB,KB,jB,JB,QB,$B,tF,eF,nF,iF,sF,rF,aF,oF,lF,cF,uF,fF,hF,dF,pF,mF,gF,yF,xF,vF,_F,bF,SF,MF,TF,EF,AF,wF,CF,RF,DF,PF,NF,LF,UF,IF,OF,BF,FF,zF,VF,kF,GF,HF,WF,XF,qF,YF,ZF,KF,jF,JF,QF,$F,tz,ez,nz,iz,sz,rz,az,oz,lz,cz,uz,fz,hz,dz,pz,mz,gz,yz,xz,vz,_z,bz,Sz,Mz,Tz,Ez,Az,wz,Cz,Rz,Dz,Pz,Nz,Lz,Uz,Iz,Oz,Bz,Fz,zz,Vz,kz,Gz,Hz,Wz,Xz,qz,Yz,Xt,pt,Ns,Wm,Zz,I2,Ma,h2,bo,tV,bf,d2,J_,Q_,$_,tb,eV,qm,Ym,hV,O2,ib,B2,F2,z2,y2,x2,v2,_2,b2,sb,rb,ab,eb,uc,e4,n4,T2,a4,Xm,h4,d4,m4,y4,v4,b4,M4,w4,lb,cb,I4,z4,V4,k4,G4,L2,Sf,nb,Y4,Z4,ub,fb,K4,V2,Q4,Ps,fc,hb=D(()=>{j_();j_();pB=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mB=`#ifdef USE_ALPHAHASH
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
#endif`,gB=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yB=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xB=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vB=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_B=`#ifdef USE_AOMAP
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
#endif`,bB=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SB=`#ifdef USE_BATCHING
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
#endif`,MB=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TB=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EB=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AB=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wB=`#ifdef USE_IRIDESCENCE
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
#endif`,CB=`#ifdef USE_BUMPMAP
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
#endif`,RB=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DB=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PB=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NB=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LB=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,UB=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IB=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OB=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,BB=`#define PI 3.141592653589793
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
} // validated`,FB=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zB=`vec3 transformedNormal = objectNormal;
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
#endif`,VB=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kB=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GB=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HB=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WB="gl_FragColor = linearToOutputTexel( gl_FragColor );",XB=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qB=`#ifdef USE_ENVMAP
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
#endif`,YB=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ZB=`#ifdef USE_ENVMAP
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
#endif`,KB=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jB=`#ifdef USE_ENVMAP
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
#endif`,JB=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QB=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$B=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eF=`#ifdef USE_GRADIENTMAP
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
}`,nF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rF=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,aF=`#ifdef USE_ENVMAP
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
#endif`,oF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fF=`PhysicalMaterial material;
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
#endif`,hF=`uniform sampler2D dfgLUT;
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
}`,dF=`
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
#endif`,pF=`#if defined( RE_IndirectDiffuse )
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
#endif`,mF=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gF=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,yF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_F=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TF=`#if defined( USE_POINTS_UV )
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
#endif`,EF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wF=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CF=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RF=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DF=`#ifdef USE_MORPHTARGETS
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
#endif`,PF=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LF=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,UF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,BF=`#ifdef USE_NORMALMAP
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
#endif`,FF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HF=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$F=`float getShadowMask() {
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
}`,tz=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ez=`#ifdef USE_SKINNING
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
#endif`,nz=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iz=`#ifdef USE_SKINNING
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
#endif`,sz=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rz=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,az=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oz=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lz=`#ifdef USE_TRANSMISSION
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
#endif`,cz=`#ifdef USE_TRANSMISSION
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
#endif`,uz=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fz=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hz=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dz=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pz=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mz=`uniform sampler2D t2D;
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
}`,gz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yz=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vz=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_z=`#include <common>
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
}`,bz=`#if DEPTH_PACKING == 3200
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
}`,Sz=`#define DISTANCE
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
}`,Mz=`#define DISTANCE
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
}`,Tz=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ez=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Az=`uniform float scale;
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
}`,wz=`uniform vec3 diffuse;
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
}`,Cz=`#include <common>
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
}`,Rz=`uniform vec3 diffuse;
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
}`,Dz=`#define LAMBERT
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
}`,Pz=`#define LAMBERT
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
}`,Nz=`#define MATCAP
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
}`,Lz=`#define MATCAP
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
}`,Uz=`#define NORMAL
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
}`,Iz=`#define NORMAL
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
}`,Oz=`#define PHONG
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
}`,Bz=`#define PHONG
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
}`,Fz=`#define STANDARD
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
}`,zz=`#define STANDARD
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
}`,Vz=`#define TOON
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
}`,kz=`#define TOON
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
}`,Gz=`uniform float size;
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
}`,Hz=`uniform vec3 diffuse;
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
}`,Wz=`#include <common>
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
}`,Xz=`uniform vec3 color;
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
}`,qz=`uniform float rotation;
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
}`,Yz=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:pB,alphahash_pars_fragment:mB,alphamap_fragment:gB,alphamap_pars_fragment:yB,alphatest_fragment:xB,alphatest_pars_fragment:vB,aomap_fragment:_B,aomap_pars_fragment:bB,batching_pars_vertex:SB,batching_vertex:MB,begin_vertex:TB,beginnormal_vertex:EB,bsdfs:AB,iridescence_fragment:wB,bumpmap_pars_fragment:CB,clipping_planes_fragment:RB,clipping_planes_pars_fragment:DB,clipping_planes_pars_vertex:PB,clipping_planes_vertex:NB,color_fragment:LB,color_pars_fragment:UB,color_pars_vertex:IB,color_vertex:OB,common:BB,cube_uv_reflection_fragment:FB,defaultnormal_vertex:zB,displacementmap_pars_vertex:VB,displacementmap_vertex:kB,emissivemap_fragment:GB,emissivemap_pars_fragment:HB,colorspace_fragment:WB,colorspace_pars_fragment:XB,envmap_fragment:qB,envmap_common_pars_fragment:YB,envmap_pars_fragment:ZB,envmap_pars_vertex:KB,envmap_physical_pars_fragment:aF,envmap_vertex:jB,fog_vertex:JB,fog_pars_vertex:QB,fog_fragment:$B,fog_pars_fragment:tF,gradientmap_pars_fragment:eF,lightmap_pars_fragment:nF,lights_lambert_fragment:iF,lights_lambert_pars_fragment:sF,lights_pars_begin:rF,lights_toon_fragment:oF,lights_toon_pars_fragment:lF,lights_phong_fragment:cF,lights_phong_pars_fragment:uF,lights_physical_fragment:fF,lights_physical_pars_fragment:hF,lights_fragment_begin:dF,lights_fragment_maps:pF,lights_fragment_end:mF,lightprobes_pars_fragment:gF,logdepthbuf_fragment:yF,logdepthbuf_pars_fragment:xF,logdepthbuf_pars_vertex:vF,logdepthbuf_vertex:_F,map_fragment:bF,map_pars_fragment:SF,map_particle_fragment:MF,map_particle_pars_fragment:TF,metalnessmap_fragment:EF,metalnessmap_pars_fragment:AF,morphinstance_vertex:wF,morphcolor_vertex:CF,morphnormal_vertex:RF,morphtarget_pars_vertex:DF,morphtarget_vertex:PF,normal_fragment_begin:NF,normal_fragment_maps:LF,normal_pars_fragment:UF,normal_pars_vertex:IF,normal_vertex:OF,normalmap_pars_fragment:BF,clearcoat_normal_fragment_begin:FF,clearcoat_normal_fragment_maps:zF,clearcoat_pars_fragment:VF,iridescence_pars_fragment:kF,opaque_fragment:GF,packing:HF,premultiplied_alpha_fragment:WF,project_vertex:XF,dithering_fragment:qF,dithering_pars_fragment:YF,roughnessmap_fragment:ZF,roughnessmap_pars_fragment:KF,shadowmap_pars_fragment:jF,shadowmap_pars_vertex:JF,shadowmap_vertex:QF,shadowmask_pars_fragment:$F,skinbase_vertex:tz,skinning_pars_vertex:ez,skinning_vertex:nz,skinnormal_vertex:iz,specularmap_fragment:sz,specularmap_pars_fragment:rz,tonemapping_fragment:az,tonemapping_pars_fragment:oz,transmission_fragment:lz,transmission_pars_fragment:cz,uv_pars_fragment:uz,uv_pars_vertex:fz,uv_vertex:hz,worldpos_vertex:dz,background_vert:pz,background_frag:mz,backgroundCube_vert:gz,backgroundCube_frag:yz,cube_vert:xz,cube_frag:vz,depth_vert:_z,depth_frag:bz,distance_vert:Sz,distance_frag:Mz,equirect_vert:Tz,equirect_frag:Ez,linedashed_vert:Az,linedashed_frag:wz,meshbasic_vert:Cz,meshbasic_frag:Rz,meshlambert_vert:Dz,meshlambert_frag:Pz,meshmatcap_vert:Nz,meshmatcap_frag:Lz,meshnormal_vert:Uz,meshnormal_frag:Iz,meshphong_vert:Oz,meshphong_frag:Bz,meshphysical_vert:Fz,meshphysical_frag:zz,meshtoon_vert:Vz,meshtoon_frag:kz,points_vert:Gz,points_frag:Hz,shadow_vert:Wz,shadow_frag:Xz,sprite_vert:qz,sprite_frag:Yz},pt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Ns={basic:{uniforms:Gn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Gn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Gn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Gn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Gn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Gn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Gn([pt.points,pt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Gn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Gn([pt.common,pt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Gn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Gn([pt.sprite,pt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Gn([pt.common,pt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Gn([pt.lights,pt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Ns.physical={uniforms:Gn([Ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};Wm={r:0,b:0,g:0},Zz=new ke,I2=new Bt;I2.set(-1,0,0,0,1,0,0,0,1);Ma=4,h2=[.125,.215,.35,.446,.526,.582],bo=20,tV=256,bf=new xo,d2=new ne,J_=null,Q_=0,$_=0,tb=!1,eV=new O,qm=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){let{size:a=256,position:o=eV}=r;J_=this._renderer.getRenderTarget(),Q_=this._renderer.getActiveCubeFace(),$_=this._renderer.getActiveMipmapLevel(),tb=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g2(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m2(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(J_,Q_,$_),this._renderer.xr.enabled=tb,t.scissorTest=!1,cc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===va||t.mapping===vo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),J_=this._renderer.getRenderTarget(),Q_=this._renderer.getActiveCubeFace(),$_=this._renderer.getActiveMipmapLevel(),tb=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ds,format:Wi,colorSpace:Zu,depthBuffer:!1},s=p2(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p2(t,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nV(r)),this._blurMaterial=sV(r,t,n),this._ggxMaterial=iV(r,t,n)}return s}_compileMaterial(t){let n=new De(new sn,t);this._renderer.compile(n,bf)}_sceneToCubeUV(t,n,i,s,r){let l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(d2),h.toneMapping=as,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new nc,new yn({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,d=!1,y=t.background;y?y.isColor&&(g.color.copy(y),t.background=null,d=!0):(g.color.copy(d2),d=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[_],r.y,r.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[_]));let M=this._cubeSize;cc(s,x*M,_>2?M:0,M,M),h.setRenderTarget(s),d&&h.render(b,l),h.render(t,l)}h.toneMapping=p,h.autoClear=f,t.background=y}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===va||t.mapping===vo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=g2()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m2());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;cc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,bf)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:m}=this,b=this._sizeLods[i],g=3*b*(i>m-Ma?i-m+Ma:0),d=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=m-n,cc(r,g,d,3*b,2*b),s.setRenderTarget(r),s.render(o,bf),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,cc(t,g,d,3*b,2*b),s.setRenderTarget(t),s.render(o,bf)}_blur(t,n,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[s];h.material=c;let f=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bo-1),b=r/m,g=isFinite(r)?1+Math.floor(u*b):bo;g>bo&&Nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bo}`);let d=[],y=0;for(let w=0;w<bo;++w){let v=w/b,A=Math.exp(-v*v/2);d.push(A),w===0?y+=A:w<g&&(y+=2*A)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-i;let x=this._sizeLods[s],M=3*x*(s>_-Ma?s-_+Ma:0),T=4*(this._cubeSize-x);cc(n,M,T,3*x,2*x),l.setRenderTarget(n),l.render(h,bf)}};Ym=class extends Ti{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new af(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nc(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:Rs});r.uniforms.tEquirect.value=n;let a=new De(s,r),o=n.minFilter;return n.minFilter===_a&&(n.minFilter=On),new em(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,s);t.setRenderTarget(r)}};hV={[C_]:"LINEAR_TONE_MAPPING",[R_]:"REINHARD_TONE_MAPPING",[D_]:"CINEON_TONE_MAPPING",[P_]:"ACES_FILMIC_TONE_MAPPING",[L_]:"AGX_TONE_MAPPING",[U_]:"NEUTRAL_TONE_MAPPING",[N_]:"CUSTOM_TONE_MAPPING"};O2=new ai,ib=new gr(1,1),B2=new Qu,F2=new Op,z2=new af,y2=[],x2=[],v2=new Float32Array(16),_2=new Float32Array(9),b2=new Float32Array(4);sb=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=LV(n.type)}},rb=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$V(n.type)}},ab=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,n[o.id],i)}}},eb=/(\w+)(\])?(\[|\.)?/g;uc=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(n,a),l=t.getUniformLocation(n,o.name);t4(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in n&&i.push(a)}return i}};e4=37297,n4=0;T2=new Bt;a4={[C_]:"Linear",[R_]:"Reinhard",[D_]:"Cineon",[P_]:"ACESFilmic",[L_]:"AgX",[U_]:"Neutral",[N_]:"Custom"};Xm=new O;h4=/^[ \t]*#include +<([\w\d./]+)>/gm;d4=new Map;m4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;y4={[ff]:"SHADOWMAP_TYPE_PCF",[ac]:"SHADOWMAP_TYPE_VSM"};v4={[va]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE",[hf]:"ENVMAP_TYPE_CUBE_UV"};b4={[vo]:"ENVMAP_MODE_REFRACTION"};M4={[w_]:"ENVMAP_BLENDING_MULTIPLY",[ZC]:"ENVMAP_BLENDING_MIX",[KC]:"ENVMAP_BLENDING_ADD"};w4=0,lb=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new cb(t),n.set(t,i)),i}},cb=class{constructor(t){this.id=w4++,this.code=t,this.usedTimes=0}};I4=0;z4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V4=`uniform sampler2D shadow_pass;
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
}`,k4=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],G4=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],L2=new ke,Sf=new O,nb=new O;Y4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z4=`
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

}`,ub=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new of(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Ei({vertexShader:Y4,fragmentShader:Z4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new De(new ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fb=class extends ws{constructor(t,n){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,m=null,b=typeof XRWebGLBinding<"u",g=new ub,d={},y=n.getContextAttributes(),_=null,x=null,M=[],T=[],w=new jt,v=null,A=new kn;A.viewport=new Ge;let C=new kn;C.viewport=new Ge;let P=[A,C],L=new nm,q=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=M[j];return st===void 0&&(st=new Ql,M[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=M[j];return st===void 0&&(st=new Ql,M[j]=st),st.getGripSpace()},this.getHand=function(j){let st=M[j];return st===void 0&&(st=new Ql,M[j]=st),st.getHandSpace()};function B(j){let st=T.indexOf(j.inputSource);if(st===-1)return;let et=M[st];et!==void 0&&(et.update(j.inputSource,j.frame,c||a),et.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",X);for(let j=0;j<M.length;j++){let st=T[j];st!==null&&(T[j]=null,M[j].disconnect(st))}q=null,H=null,g.reset();for(let j in d)delete d[j];t.setRenderTarget(_),p=null,f=null,h=null,s=null,x=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(s,n)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await n.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(w),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,Dt=null,mt=null;y.depth&&(mt=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,et=y.stencil?ba:As,Dt=y.stencil?lc:os);let Et={colorFormat:n.RGBA8,depthFormat:mt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Ti(f.textureWidth,f.textureHeight,{format:Wi,type:Ci,depthTexture:new gr(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let et={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ti(p.framebufferWidth,p.framebufferHeight,{format:Wi,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(j){for(let st=0;st<j.removed.length;st++){let et=j.removed[st],Dt=T.indexOf(et);Dt>=0&&(T[Dt]=null,M[Dt].disconnect(et))}for(let st=0;st<j.added.length;st++){let et=j.added[st],Dt=T.indexOf(et);if(Dt===-1){for(let Et=0;Et<M.length;Et++)if(Et>=T.length){T.push(et),Dt=Et;break}else if(T[Et]===null){T[Et]=et,Dt=Et;break}if(Dt===-1)break}let mt=M[Dt];mt&&mt.connect(et)}}let Y=new O,nt=new O;function at(j,st,et){Y.setFromMatrixPosition(st.matrixWorld),nt.setFromMatrixPosition(et.matrixWorld);let Dt=Y.distanceTo(nt),mt=st.projectionMatrix.elements,Et=et.projectionMatrix.elements,Ae=mt[14]/(mt[10]-1),Wt=mt[14]/(mt[10]+1),fe=(mt[9]+1)/mt[5],ae=(mt[9]-1)/mt[5],se=(mt[8]-1)/mt[0],an=(Et[8]+1)/Et[0],pn=Ae*se,Mn=Ae*an,Dn=Dt/(-se+an),qe=Dn*-se;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(qe),j.translateZ(Dn),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),mt[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let on=Ae+Dn,U=Wt+Dn,Jn=pn-qe,he=Mn+(Dt-qe),R=fe*Wt/U*on,S=ae*Wt/U*on;j.projectionMatrix.makePerspective(Jn,he,R,S,on,U),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ot(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let st=j.near,et=j.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(et=g.depthFar)),L.near=C.near=A.near=st,L.far=C.far=A.far=et,(q!==L.near||H!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),q=L.near,H=L.far),L.layers.mask=j.layers.mask|6,A.layers.mask=L.layers.mask&-5,C.layers.mask=L.layers.mask&-3;let Dt=j.parent,mt=L.cameras;ot(L,Dt);for(let Et=0;Et<mt.length;Et++)ot(mt[Et],Dt);mt.length===2?at(L,A,C):L.projectionMatrix.copy(A.projectionMatrix),_t(j,L,Dt)};function _t(j,st,et){et===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(et.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Lp*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(j){return d[j]};let ie=null;function Pe(j,st){if(u=st.getViewerPose(c||a),m=st,u!==null){let et=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Dt=!1;et.length!==L.cameras.length&&(L.cameras.length=0,Dt=!0);for(let Wt=0;Wt<et.length;Wt++){let fe=et[Wt],ae=null;if(p!==null)ae=p.getViewport(fe);else{let an=h.getViewSubImage(f,fe);ae=an.viewport,Wt===0&&(t.setRenderTargetTextures(x,an.colorTexture,an.depthStencilTexture),t.setRenderTarget(x))}let se=P[Wt];se===void 0&&(se=new kn,se.layers.enable(Wt),se.viewport=new Ge,P[Wt]=se),se.matrix.fromArray(fe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(fe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ae.x,ae.y,ae.width,ae.height),Wt===0&&(L.matrix.copy(se.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Dt===!0&&L.cameras.push(se)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){h=i.getBinding();let Wt=h.getDepthInformation(et[0]);Wt&&Wt.isValid&&Wt.texture&&g.init(Wt,s.renderState)}if(mt&&mt.includes("camera-access")&&b){t.state.unbindTexture(),h=i.getBinding();for(let Wt=0;Wt<et.length;Wt++){let fe=et[Wt].camera;if(fe){let ae=d[fe];ae||(ae=new of,d[fe]=ae);let se=h.getCameraImage(fe);ae.sourceTexture=se}}}}for(let et=0;et<M.length;et++){let Dt=T[et],mt=M[et];Dt!==null&&mt!==void 0&&mt.update(Dt,st,c||a)}ie&&ie(j,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),m=null}let $t=new U2;$t.setAnimationLoop(Pe),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}},K4=new ke,V2=new Bt;V2.set(-1,0,0,0,1,0,0,0,1);Q4=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ps=null;fc=class{constructor(t={}){let{canvas:n=r2(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Ci}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let b=p,g=new Set([fm,um,cm]),d=new Set([Ci,os,oc,lc,om,lm]),y=new Uint32Array(4),_=new Int32Array(4),x=new O,M=null,T=null,w=[],v=[],A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=as,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,L=null,q=null,H=null,B=null;this._outputColorSpace=Mi;let W=0,X=0,Y=null,nt=-1,at=null,ot=new Ge,_t=new Ge,ie=null,Pe=new ne(0),$t=0,j=n.width,st=n.height,et=1,Dt=null,mt=null,Et=new Ge(0,0,j,st),Ae=new Ge(0,0,j,st),Wt=!1,fe=new nf,ae=!1,se=!1,an=new ke,pn=new O,Mn=new Ge,Dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function on(){return Y===null?et:1}let U=i;function Jn(E,I){return n.getContext(E,I)}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",Ye,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",ds,!1),U===null){let I="webgl2";if(U=Jn(I,E),U===null)throw Jn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw It("WebGLRenderer: "+E.message),E}let he,R,S,F,k,Z,rt,ct,K,Q,ut,wt,dt,ft,Pt,Lt,Vt,N,lt,J,ht,xt,it;function At(){he=new aV(U),he.init(),ht=new q4(U,he),R=new Qz(U,he,t,ht),S=new W4(U,he),R.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),q=U.createFramebuffer(),H=U.createFramebuffer(),B=U.createFramebuffer(),F=new cV(U),k=new D4,Z=new X4(U,he,S,k,R,ht,F),rt=new rV(C),ct=new dB(U),xt=new jz(U,ct),K=new oV(U,ct,F,xt),Q=new fV(U,K,ct,xt,F),N=new uV(U,R,Z),Pt=new $z(k),ut=new R4(C,rt,he,R,xt,Pt),wt=new j4(C,k),dt=new N4,ft=new F4(he),Vt=new Kz(C,rt,S,Q,m,l),Lt=new H4(C,Q,R),it=new J4(U,F,R,S),lt=new Jz(U,he,F),J=new lV(U,he,F),F.programs=ut.programs,C.capabilities=R,C.extensions=he,C.properties=k,C.renderLists=dt,C.shadowMap=Lt,C.state=S,C.info=F}At(),b!==Ci&&(A=new dV(b,n.width,n.height,o,s,r));let Mt=new fb(C,U);this.xr=Mt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(E){E!==void 0&&(et=E,this.setSize(j,st,!1))},this.getSize=function(E){return E.set(j,st)},this.setSize=function(E,I,G=!0){if(Mt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,st=I,n.width=Math.floor(E*et),n.height=Math.floor(I*et),G===!0&&(n.style.width=E+"px",n.style.height=I+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(j*et,st*et).floor()},this.setDrawingBufferSize=function(E,I,G){j=E,st=I,et=G,n.width=Math.floor(E*G),n.height=Math.floor(I*G),this.setViewport(0,0,E,I)},this.setEffects=function(E){if(b===Ci){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let I=0;I<E.length;I++)if(E[I].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ot)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,I,G,z){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,I,G,z),S.viewport(ot.copy(Et).multiplyScalar(et).round())},this.getScissor=function(E){return E.copy(Ae)},this.setScissor=function(E,I,G,z){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,I,G,z),S.scissor(_t.copy(Ae).multiplyScalar(et).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(E){S.setScissorTest(Wt=E)},this.setOpaqueSort=function(E){Dt=E},this.setTransparentSort=function(E){mt=E},this.getClearColor=function(E){return E.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,G=!0){let z=0;if(E){let V=!1;if(Y!==null){let yt=Y.texture.format;V=g.has(yt)}if(V){let yt=Y.texture.type,St=d.has(yt),gt=Vt.getClearColor(),Tt=Vt.getClearAlpha(),Ct=gt.r,kt=gt.g,Yt=gt.b;St?(y[0]=Ct,y[1]=kt,y[2]=Yt,y[3]=Tt,U.clearBufferuiv(U.COLOR,0,y)):(_[0]=Ct,_[1]=kt,_[2]=Yt,_[3]=Tt,U.clearBufferiv(U.COLOR,0,_))}else z|=U.COLOR_BUFFER_BIT}I&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Ye,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",ds,!1),Vt.dispose(),dt.dispose(),ft.dispose(),k.dispose(),rt.dispose(),Q.dispose(),xt.dispose(),it.dispose(),ut.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",r1),Mt.removeEventListener("sessionend",a1),Va.stop()};function Ye(E){E.preventDefault(),X_("WebGLRenderer: Context Lost."),P=!0}function we(){X_("WebGLRenderer: Context Restored."),P=!1;let E=F.autoReset,I=Lt.enabled,G=Lt.autoUpdate,z=Lt.needsUpdate,V=Lt.type;At(),F.autoReset=E,Lt.enabled=I,Lt.autoUpdate=G,Lt.needsUpdate=z,Lt.type=V}function ds(E){It("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ps(E){let I=E.target;I.removeEventListener("dispose",ps),RL(I)}function RL(E){DL(E),k.remove(E)}function DL(E){let I=k.get(E).programs;I!==void 0&&(I.forEach(function(G){ut.releaseProgram(G)}),E.isShaderMaterial&&ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,G,z,V,yt){I===null&&(I=Dn);let St=V.isMesh&&V.matrixWorld.determinantAffine()<0,gt=LL(E,I,G,z,V);S.setMaterial(z,St);let Tt=G.index,Ct=1;if(z.wireframe===!0){if(Tt=K.getWireframeAttribute(G),Tt===void 0)return;Ct=2}let kt=G.drawRange,Yt=G.attributes.position,Rt=kt.start*Ct,ye=(kt.start+kt.count)*Ct;yt!==null&&(Rt=Math.max(Rt,yt.start*Ct),ye=Math.min(ye,(yt.start+yt.count)*Ct)),Tt!==null?(Rt=Math.max(Rt,0),ye=Math.min(ye,Tt.count)):Yt!=null&&(Rt=Math.max(Rt,0),ye=Math.min(ye,Yt.count));let $e=ye-Rt;if($e<0||$e===1/0)return;xt.setup(V,z,gt,G,Tt);let Ze,Se=lt;if(Tt!==null&&(Ze=ct.get(Tt),Se=J,Se.setIndex(Ze)),V.isMesh)z.wireframe===!0?(S.setLineWidth(z.wireframeLinewidth*on()),Se.setMode(U.LINES)):Se.setMode(U.TRIANGLES);else if(V.isLine){let Bn=z.linewidth;Bn===void 0&&(Bn=1),S.setLineWidth(Bn*on()),V.isLineSegments?Se.setMode(U.LINES):V.isLineLoop?Se.setMode(U.LINE_LOOP):Se.setMode(U.LINE_STRIP)}else V.isPoints?Se.setMode(U.POINTS):V.isSprite&&Se.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Se.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Bn=V._multiDrawStarts,bt=V._multiDrawCounts,ui=V._multiDrawCount,re=Tt?ct.get(Tt).bytesPerElement:1,Pi=k.get(z).currentProgram.getUniforms();for(let ms=0;ms<ui;ms++)Pi.setValue(U,"_gl_DrawID",ms),Se.render(Bn[ms]/re,bt[ms])}else if(V.isInstancedMesh)Se.renderInstances(Rt,$e,V.count);else if(G.isInstancedBufferGeometry){let Bn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bt=Math.min(G.instanceCount,Bn);Se.renderInstances(Rt,$e,bt)}else Se.render(Rt,$e)};function s1(E,I,G){E.transparent===!0&&E.side===wi&&E.forceSinglePass===!1?(E.side=Zn,E.needsUpdate=!0,vh(E,I,G),E.side=pr,E.needsUpdate=!0,vh(E,I,G),E.side=wi):vh(E,I,G)}this.compile=function(E,I,G=null){G===null&&(G=E),T=ft.get(G),T.init(I),v.push(T),G.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),E!==G&&E.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();let z=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let yt=V.material;if(yt)if(Array.isArray(yt))for(let St=0;St<yt.length;St++){let gt=yt[St];s1(gt,G,V),z.add(gt)}else s1(yt,G,V),z.add(yt)}),T=v.pop(),z},this.compileAsync=function(E,I,G=null){let z=this.compile(E,I,G);return new Promise(V=>{function yt(){if(z.forEach(function(St){k.get(St).currentProgram.isReady()&&z.delete(St)}),z.size===0){V(E);return}setTimeout(yt,10)}he.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let ey=null;function PL(E){ey&&ey(E)}function r1(){Va.stop()}function a1(){Va.start()}let Va=new U2;Va.setAnimationLoop(PL),typeof self<"u"&&Va.setContext(self),this.setAnimationLoop=function(E){ey=E,Mt.setAnimationLoop(E),E===null?Va.stop():Va.start()},Mt.addEventListener("sessionstart",r1),Mt.addEventListener("sessionend",a1),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(E,I);let G=Mt.enabled===!0&&Mt.isPresenting===!0,z=A!==null&&(Y===null||G)&&A.begin(C,Y);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(I),I=Mt.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,I,Y),T=ft.get(E,v.length),T.init(I),T.state.textureUnits=Z.getTextureUnits(),v.push(T),an.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),fe.setFromProjectionMatrix(an,ss,I.reversedDepth),se=this.localClippingEnabled,ae=Pt.init(this.clippingPlanes,se),M=dt.get(E,w.length),M.init(),w.push(M),Mt.enabled===!0&&Mt.isPresenting===!0){let St=C.xr.getDepthSensingMesh();St!==null&&ny(St,I,-1/0,C.sortObjects)}ny(E,I,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(Dt,mt,I.reversedDepth),qe=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,qe&&Vt.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Pt.beginShadows();let V=T.state.shadowsArray;if(Lt.render(V,E,I),ae===!0&&Pt.endShadows(),(z&&A.hasRenderPass())===!1){let St=M.opaque,gt=M.transmissive;if(T.setupLights(),I.isArrayCamera){let Tt=I.cameras;if(gt.length>0)for(let Ct=0,kt=Tt.length;Ct<kt;Ct++){let Yt=Tt[Ct];l1(St,gt,E,Yt)}qe&&Vt.render(E);for(let Ct=0,kt=Tt.length;Ct<kt;Ct++){let Yt=Tt[Ct];o1(M,E,Yt,Yt.viewport)}}else gt.length>0&&l1(St,gt,E,I),qe&&Vt.render(E),o1(M,E,I)}Y!==null&&X===0&&(Z.updateMultisampleRenderTarget(Y),Z.updateRenderTargetMipmap(Y)),z&&A.end(C),E.isScene===!0&&E.onAfterRender(C,E,I),xt.resetDefaultState(),nt=-1,at=null,v.pop(),v.length>0?(T=v[v.length-1],Z.setTextureUnits(T.state.textureUnits),ae===!0&&Pt.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,L!==null&&L.renderEnd()};function ny(E,I,G,z){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||fe.intersectsSprite(E)){z&&Mn.setFromMatrixPosition(E.matrixWorld).applyMatrix4(an);let St=Q.update(E),gt=E.material;gt.visible&&M.push(E,St,gt,G,Mn.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||fe.intersectsObject(E))){let St=Q.update(E),gt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Mn.copy(E.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Mn.copy(St.boundingSphere.center)),Mn.applyMatrix4(E.matrixWorld).applyMatrix4(an)),Array.isArray(gt)){let Tt=St.groups;for(let Ct=0,kt=Tt.length;Ct<kt;Ct++){let Yt=Tt[Ct],Rt=gt[Yt.materialIndex];Rt&&Rt.visible&&M.push(E,St,Rt,G,Mn.z,Yt)}}else gt.visible&&M.push(E,St,gt,G,Mn.z,null)}}let yt=E.children;for(let St=0,gt=yt.length;St<gt;St++)ny(yt[St],I,G,z)}function o1(E,I,G,z){let{opaque:V,transmissive:yt,transparent:St}=E;T.setupLightsView(G),ae===!0&&Pt.setGlobalState(C.clippingPlanes,G),z&&S.viewport(ot.copy(z)),V.length>0&&xh(V,I,G),yt.length>0&&xh(yt,I,G),St.length>0&&xh(St,I,G),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function l1(E,I,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let Rt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Ti(1,1,{generateMipmaps:!0,type:Rt?Ds:Ci,minFilter:_a,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let yt=T.state.transmissionRenderTarget[z.id],St=z.viewport||ot;yt.setSize(St.z*C.transmissionResolutionScale,St.w*C.transmissionResolutionScale);let gt=C.getRenderTarget(),Tt=C.getActiveCubeFace(),Ct=C.getActiveMipmapLevel();C.setRenderTarget(yt),C.getClearColor(Pe),$t=C.getClearAlpha(),$t<1&&C.setClearColor(16777215,.5),C.clear(),qe&&Vt.render(G);let kt=C.toneMapping;C.toneMapping=as;let Yt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),ae===!0&&Pt.setGlobalState(C.clippingPlanes,z),xh(E,G,z),Z.updateMultisampleRenderTarget(yt),Z.updateRenderTargetMipmap(yt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ye=0,$e=I.length;ye<$e;ye++){let Ze=I[ye],{object:Se,geometry:Bn,material:bt,group:ui}=Ze;if(bt.side===wi&&Se.layers.test(z.layers)){let re=bt.side;bt.side=Zn,bt.needsUpdate=!0,c1(Se,G,z,Bn,bt,ui),bt.side=re,bt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Z.updateMultisampleRenderTarget(yt),Z.updateRenderTargetMipmap(yt))}C.setRenderTarget(gt,Tt,Ct),C.setClearColor(Pe,$t),Yt!==void 0&&(z.viewport=Yt),C.toneMapping=kt}function xh(E,I,G){let z=I.isScene===!0?I.overrideMaterial:null;for(let V=0,yt=E.length;V<yt;V++){let St=E[V],{object:gt,geometry:Tt,group:Ct}=St,kt=St.material;kt.allowOverride===!0&&z!==null&&(kt=z),gt.layers.test(G.layers)&&c1(gt,I,G,Tt,kt,Ct)}}function c1(E,I,G,z,V,yt){E.onBeforeRender(C,I,G,z,V,yt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(C,I,G,z,E,yt),V.transparent===!0&&V.side===wi&&V.forceSinglePass===!1?(V.side=Zn,V.needsUpdate=!0,C.renderBufferDirect(G,I,z,V,E,yt),V.side=pr,V.needsUpdate=!0,C.renderBufferDirect(G,I,z,V,E,yt),V.side=wi):C.renderBufferDirect(G,I,z,V,E,yt),E.onAfterRender(C,I,G,z,V,yt)}function vh(E,I,G){I.isScene!==!0&&(I=Dn);let z=k.get(E),V=T.state.lights,yt=T.state.shadowsArray,St=V.state.version,gt=ut.getParameters(E,V.state,yt,I,G,T.state.lightProbeGridArray),Tt=ut.getProgramCacheKey(gt),Ct=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;let kt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=rt.get(E.envMap||z.environment,kt),z.envMapRotation=z.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Ct===void 0&&(E.addEventListener("dispose",ps),Ct=new Map,z.programs=Ct);let Yt=Ct.get(Tt);if(Yt!==void 0){if(z.currentProgram===Yt&&z.lightsStateVersion===St)return f1(E,gt),Yt}else gt.uniforms=ut.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,G,gt),E.onBeforeCompile(gt,C),Yt=ut.acquireProgram(gt,Tt),Ct.set(Tt,Yt),z.uniforms=gt.uniforms;let Rt=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Rt.clippingPlanes=Pt.uniform),f1(E,gt),z.needsLights=IL(E),z.lightsStateVersion=St,z.needsLights&&(Rt.ambientLightColor.value=V.state.ambient,Rt.lightProbe.value=V.state.probe,Rt.directionalLights.value=V.state.directional,Rt.directionalLightShadows.value=V.state.directionalShadow,Rt.spotLights.value=V.state.spot,Rt.spotLightShadows.value=V.state.spotShadow,Rt.rectAreaLights.value=V.state.rectArea,Rt.ltc_1.value=V.state.rectAreaLTC1,Rt.ltc_2.value=V.state.rectAreaLTC2,Rt.pointLights.value=V.state.point,Rt.pointLightShadows.value=V.state.pointShadow,Rt.hemisphereLights.value=V.state.hemi,Rt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Rt.spotLightMatrix.value=V.state.spotLightMatrix,Rt.spotLightMap.value=V.state.spotLightMap,Rt.pointShadowMatrix.value=V.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Yt,z.uniformsList=null,Yt}function u1(E){if(E.uniformsList===null){let I=E.currentProgram.getUniforms();E.uniformsList=uc.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function f1(E,I){let G=k.get(E);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function NL(E,I){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(I.matrixWorld);for(let G=0,z=E.length;G<z;G++){let V=E[G];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function LL(E,I,G,z,V){I.isScene!==!0&&(I=Dn),Z.resetTextureUnits();let yt=I.fog,St=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,gt=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Qt.workingColorSpace,Tt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ct=rt.get(z.envMap||St,Tt),kt=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Yt=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Rt=!!G.morphAttributes.position,ye=!!G.morphAttributes.normal,$e=!!G.morphAttributes.color,Ze=as;z.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ze=C.toneMapping);let Se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Bn=Se!==void 0?Se.length:0,bt=k.get(z),ui=T.state.lights;if(ae===!0&&(se===!0||E!==at)){let Ce=E===at&&z.id===nt;Pt.setState(z,E,Ce)}let re=!1;z.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==ui.state.version||bt.outputColorSpace!==gt||V.isBatchedMesh&&bt.batching===!1||!V.isBatchedMesh&&bt.batching===!0||V.isBatchedMesh&&bt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&bt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&bt.instancing===!1||!V.isInstancedMesh&&bt.instancing===!0||V.isSkinnedMesh&&bt.skinning===!1||!V.isSkinnedMesh&&bt.skinning===!0||V.isInstancedMesh&&bt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&bt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&bt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&bt.instancingMorph===!1&&V.morphTexture!==null||bt.envMap!==Ct||z.fog===!0&&bt.fog!==yt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Pt.numPlanes||bt.numIntersection!==Pt.numIntersection)||bt.vertexAlphas!==kt||bt.vertexTangents!==Yt||bt.morphTargets!==Rt||bt.morphNormals!==ye||bt.morphColors!==$e||bt.toneMapping!==Ze||bt.morphTargetsCount!==Bn||!!bt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,bt.__version=z.version);let Pi=bt.currentProgram;re===!0&&(Pi=vh(z,I,V),L&&z.isNodeMaterial&&L.onUpdateProgram(z,Pi,bt));let ms=!1,wr=!1,Ho=!1,Me=Pi.getUniforms(),tn=bt.uniforms;if(S.useProgram(Pi.program)&&(ms=!0,wr=!0,Ho=!0),z.id!==nt&&(nt=z.id,wr=!0),bt.needsLights){let Ce=NL(T.state.lightProbeGridArray,V);bt.lightProbeGrid!==Ce&&(bt.lightProbeGrid=Ce,wr=!0)}if(ms||at!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Me.setValue(U,"projectionMatrix",E.projectionMatrix),Me.setValue(U,"viewMatrix",E.matrixWorldInverse);let Rr=Me.map.cameraPosition;Rr!==void 0&&Rr.setValue(U,pn.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&Me.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Me.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),at!==E&&(at=E,wr=!0,Ho=!0)}if(bt.needsLights&&(ui.state.directionalShadowMap.length>0&&Me.setValue(U,"directionalShadowMap",ui.state.directionalShadowMap,Z),ui.state.spotShadowMap.length>0&&Me.setValue(U,"spotShadowMap",ui.state.spotShadowMap,Z),ui.state.pointShadowMap.length>0&&Me.setValue(U,"pointShadowMap",ui.state.pointShadowMap,Z)),V.isSkinnedMesh){Me.setOptional(U,V,"bindMatrix"),Me.setOptional(U,V,"bindMatrixInverse");let Ce=V.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Me.setValue(U,"boneTexture",Ce.boneTexture,Z))}V.isBatchedMesh&&(Me.setOptional(U,V,"batchingTexture"),Me.setValue(U,"batchingTexture",V._matricesTexture,Z),Me.setOptional(U,V,"batchingIdTexture"),Me.setValue(U,"batchingIdTexture",V._indirectTexture,Z),Me.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Me.setValue(U,"batchingColorTexture",V._colorsTexture,Z));let Cr=G.morphAttributes;if((Cr.position!==void 0||Cr.normal!==void 0||Cr.color!==void 0)&&N.update(V,G,Pi),(wr||bt.receiveShadow!==V.receiveShadow)&&(bt.receiveShadow=V.receiveShadow,Me.setValue(U,"receiveShadow",V.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(tn.envMapIntensity.value=I.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=$4()),wr){if(Me.setValue(U,"toneMappingExposure",C.toneMappingExposure),bt.needsLights&&UL(tn,Ho),yt&&z.fog===!0&&wt.refreshFogUniforms(tn,yt),wt.refreshMaterialUniforms(tn,z,et,st,T.state.transmissionRenderTarget[E.id]),bt.needsLights&&bt.lightProbeGrid){let Ce=bt.lightProbeGrid;tn.probesSH.value=Ce.texture,tn.probesMin.value.copy(Ce.boundingBox.min),tn.probesMax.value.copy(Ce.boundingBox.max),tn.probesResolution.value.copy(Ce.resolution)}uc.upload(U,u1(bt),tn,Z)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(uc.upload(U,u1(bt),tn,Z),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Me.setValue(U,"center",V.center),Me.setValue(U,"modelViewMatrix",V.modelViewMatrix),Me.setValue(U,"normalMatrix",V.normalMatrix),Me.setValue(U,"modelMatrix",V.matrixWorld),z.uniformsGroups!==void 0){let Ce=z.uniformsGroups;for(let Rr=0,Wo=Ce.length;Rr<Wo;Rr++){let h1=Ce[Rr];it.update(h1,Pi),it.bind(h1,Pi)}}return Pi}function UL(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function IL(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(E,I,G){let z=k.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),k.get(E.texture).__webglTexture=I,k.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){let G=k.get(E);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,G=0){Y=E,W=I,X=G;let z=null,V=!1,yt=!1;if(E){let gt=k.get(E);if(gt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(U.FRAMEBUFFER,gt.__webglFramebuffer),ot.copy(E.viewport),_t.copy(E.scissor),ie=E.scissorTest,S.viewport(ot),S.scissor(_t),S.setScissorTest(ie),nt=-1;return}else if(gt.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(gt.__hasExternalTextures)Z.rebindTextures(E,k.get(E.texture).__webglTexture,k.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let kt=E.depthTexture;if(gt.__boundDepthTexture!==kt){if(kt!==null&&k.has(kt)&&(E.width!==kt.image.width||E.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let Tt=E.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(yt=!0);let Ct=k.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ct[I])?z=Ct[I][G]:z=Ct[I],V=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?z=k.get(E).__webglMultisampledFramebuffer:Array.isArray(Ct)?z=Ct[G]:z=Ct,ot.copy(E.viewport),_t.copy(E.scissor),ie=E.scissorTest}else ot.copy(Et).multiplyScalar(et).floor(),_t.copy(Ae).multiplyScalar(et).floor(),ie=Wt;if(G!==0&&(z=q),S.bindFramebuffer(U.FRAMEBUFFER,z)&&S.drawBuffers(E,z),S.viewport(ot),S.scissor(_t),S.setScissorTest(ie),V){let gt=k.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,G)}else if(yt){let gt=I;for(let Tt=0;Tt<E.textures.length;Tt++){let Ct=k.get(E.textures[Tt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Tt,Ct.__webglTexture,G,gt)}}else if(E!==null&&G!==0){let gt=k.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gt.__webglTexture,G)}nt=-1},this.readRenderTargetPixels=function(E,I,G,z,V,yt,St,gt=0){if(!(E&&E.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=k.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){S.bindFramebuffer(U.FRAMEBUFFER,Tt);try{let Ct=E.textures[gt],kt=Ct.format,Yt=Ct.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt),!R.textureFormatReadable(kt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Yt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-z&&G>=0&&G<=E.height-V&&U.readPixels(I,G,z,V,ht.convert(kt),ht.convert(Yt),yt)}finally{let Ct=Y!==null?k.get(Y).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(E,I,G,z,V,yt,St,gt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=k.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt)if(I>=0&&I<=E.width-z&&G>=0&&G<=E.height-V){S.bindFramebuffer(U.FRAMEBUFFER,Tt);let Ct=E.textures[gt],kt=Ct.format,Yt=Ct.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+gt),!R.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Rt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Rt),U.bufferData(U.PIXEL_PACK_BUFFER,yt.byteLength,U.STREAM_READ),U.readPixels(I,G,z,V,ht.convert(kt),ht.convert(Yt),0);let ye=Y!==null?k.get(Y).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,ye);let $e=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await o2(U,$e,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Rt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,yt),U.deleteBuffer(Rt),U.deleteSync($e),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,G=0){let z=Math.pow(2,-G),V=Math.floor(E.image.width*z),yt=Math.floor(E.image.height*z),St=I!==null?I.x:0,gt=I!==null?I.y:0;Z.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,St,gt,V,yt),S.unbindTexture()},this.copyTextureToTexture=function(E,I,G=null,z=null,V=0,yt=0){let St,gt,Tt,Ct,kt,Yt,Rt,ye,$e,Ze=E.isCompressedTexture?E.mipmaps[yt]:E.image;if(G!==null)St=G.max.x-G.min.x,gt=G.max.y-G.min.y,Tt=G.isBox3?G.max.z-G.min.z:1,Ct=G.min.x,kt=G.min.y,Yt=G.isBox3?G.min.z:0;else{let tn=Math.pow(2,-V);St=Math.floor(Ze.width*tn),gt=Math.floor(Ze.height*tn),E.isDataArrayTexture?Tt=Ze.depth:E.isData3DTexture?Tt=Math.floor(Ze.depth*tn):Tt=1,Ct=0,kt=0,Yt=0}z!==null?(Rt=z.x,ye=z.y,$e=z.z):(Rt=0,ye=0,$e=0);let Se=ht.convert(I.format),Bn=ht.convert(I.type),bt;I.isData3DTexture?(Z.setTexture3D(I,0),bt=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Z.setTexture2DArray(I,0),bt=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(I,0),bt=U.TEXTURE_2D),S.activeTexture(U.TEXTURE0),S.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),S.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),S.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);let ui=S.getParameter(U.UNPACK_ROW_LENGTH),re=S.getParameter(U.UNPACK_IMAGE_HEIGHT),Pi=S.getParameter(U.UNPACK_SKIP_PIXELS),ms=S.getParameter(U.UNPACK_SKIP_ROWS),wr=S.getParameter(U.UNPACK_SKIP_IMAGES);S.pixelStorei(U.UNPACK_ROW_LENGTH,Ze.width),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ze.height),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Ct),S.pixelStorei(U.UNPACK_SKIP_ROWS,kt),S.pixelStorei(U.UNPACK_SKIP_IMAGES,Yt);let Ho=E.isDataArrayTexture||E.isData3DTexture,Me=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){let tn=k.get(E),Cr=k.get(I),Ce=k.get(tn.__renderTarget),Rr=k.get(Cr.__renderTarget);S.bindFramebuffer(U.READ_FRAMEBUFFER,Ce.__webglFramebuffer),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Wo=0;Wo<Tt;Wo++)Ho&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(E).__webglTexture,V,Yt+Wo),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,k.get(I).__webglTexture,yt,$e+Wo)),U.blitFramebuffer(Ct,kt,St,gt,Rt,ye,St,gt,U.DEPTH_BUFFER_BIT,U.NEAREST);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||k.has(E)){let tn=k.get(E),Cr=k.get(I);S.bindFramebuffer(U.READ_FRAMEBUFFER,H),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let Ce=0;Ce<Tt;Ce++)Ho?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,tn.__webglTexture,V,Yt+Ce):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,tn.__webglTexture,V),Me?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Cr.__webglTexture,yt,$e+Ce):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Cr.__webglTexture,yt),V!==0?U.blitFramebuffer(Ct,kt,St,gt,Rt,ye,St,gt,U.COLOR_BUFFER_BIT,U.NEAREST):Me?U.copyTexSubImage3D(bt,yt,Rt,ye,$e+Ce,Ct,kt,St,gt):U.copyTexSubImage2D(bt,yt,Rt,ye,Ct,kt,St,gt);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Me?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(bt,yt,Rt,ye,$e,St,gt,Tt,Se,Bn,Ze.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(bt,yt,Rt,ye,$e,St,gt,Tt,Se,Ze.data):U.texSubImage3D(bt,yt,Rt,ye,$e,St,gt,Tt,Se,Bn,Ze):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,yt,Rt,ye,St,gt,Se,Bn,Ze.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,yt,Rt,ye,Ze.width,Ze.height,Se,Ze.data):U.texSubImage2D(U.TEXTURE_2D,yt,Rt,ye,St,gt,Se,Bn,Ze);S.pixelStorei(U.UNPACK_ROW_LENGTH,ui),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,re),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Pi),S.pixelStorei(U.UNPACK_SKIP_ROWS,ms),S.pixelStorei(U.UNPACK_SKIP_IMAGES,wr),yt===0&&I.generateMipmaps&&U.generateMipmap(bt),S.unbindTexture()},this.initRenderTarget=function(E){k.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){W=0,X=0,Y=null,S.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Qt._getUnpackColorSpace()}}});function t5(e){return e.replace(/(\d,\d{3}|\b\d{3,5}\b)(?=ダメージ)/g,'<mark class="kmbly-hit">$1</mark>').replace(/\bOD\b/g,'<mark class="kmbly-od">OD</mark>').replace(/\bSA\d?\b/g,t=>`<mark class="kmbly-sa">${t}</mark>`).replace(/\bCA\b/g,'<mark class="kmbly-sa">CA</mark>').replace(/([大中小強弱]?)(P)(?![A-Za-z])/g,(t,n,i)=>`${n}<mark class="kmbly-p">${i}</mark>`).replace(/([大中小強弱]?)(K)(?![A-Za-z])/g,(t,n,i)=>`${n}<mark class="kmbly-k">${i}</mark>`)}function e5(e){return/[PK＞>→]/.test(e)&&/[0-9OKPSA]/.test(e)}function n5(){let e=(0,tt.useRef)(null);return(0,tt.useEffect)(()=>{let t=e.current;if(!t)return;let n=new fc({canvas:t,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2));let i=new go,s=new kn(45,1,.1,100);s.position.set(0,0,6.4);let r=t.parentElement;function a(){let H=r.clientWidth,B=r.clientHeight;n.setSize(H,B),s.aspect=H/B,s.updateProjectionMatrix()}a();let o=new ResizeObserver(a);o.observe(r);let l=new rs;l.position.set(1.1,-.1,0),i.add(l);let c=new lf(1.55,2),u=new yn({color:2757968,transparent:!0,opacity:.35}),h=new De(c,u);l.add(h);let f=new sc(1.6,28,20),p=new yn({color:11036159,wireframe:!0,transparent:!0,opacity:.55}),m=new De(f,p);l.add(m);let b=new rc(2.05,.008,8,100),g=new yn({color:16723838,transparent:!0,opacity:.7}),d=new De(b,g);d.rotation.x=Math.PI/2.3,l.add(d);let y=new yn({color:2091208,transparent:!0,opacity:.5}),_=new De(new rc(2.25,.006,8,100),y);_.rotation.x=Math.PI/1.8,_.rotation.y=.4,l.add(_);let x=new sn,M=240,T=new Float32Array(M*3);for(let H=0;H<M;H++)T[H*3]=(Math.random()-.5)*14,T[H*3+1]=(Math.random()-.5)*9,T[H*3+2]=(Math.random()-.5)*6-1;x.setAttribute("position",new Yn(T,3));let w=new ec({color:16777215,size:.02,transparent:!0,opacity:.55}),v=new rf(x,w);i.add(v);let A=new sc(.028,8,8),C=new yn({color:16723838});for(let H=0;H<10;H++){let B=new De(A,C),W=Math.random()*Math.PI*2,X=Math.acos(Math.random()*2-1),Y=1.62;B.position.set(Y*Math.sin(X)*Math.cos(W),Y*Math.sin(X)*Math.sin(W),Y*Math.cos(X)),l.add(B)}let P=0,L;function q(){L=requestAnimationFrame(q),P+=.0032,l.rotation.y=P,l.rotation.x=Math.sin(P*.5)*.08,d.rotation.z+=.0015,_.rotation.z-=.0011,v.rotation.y+=25e-5,n.render(i,s)}return q(),()=>{cancelAnimationFrame(L),o.disconnect(),c.dispose(),u.dispose(),f.dispose(),p.dispose(),b.dispose(),g.dispose(),y.dispose(),x.dispose(),w.dispose(),A.dispose(),C.dispose(),n.dispose()}},[]),tt.default.createElement("canvas",{ref:e,className:"kmbly-globe-canvas"})}function i5(){let e=[{text:"\u516848\u4EF6\u53CE\u9332"},{text:"\u30D1\u30CB\u30AB\u30F3\u59CB\u52D5\u304C\u4E3B\u529B",cls:"kmbly-pk"},{text:"OD\u80F4\u520E\u306D\u9023\u643A\u306B\u6CE8\u610F",cls:"kmbly-odtx"},{text:"\u7AEF\u30B3\u30F3\u30DC\u306F5555\u30C0\u30E1\u30FC\u30B8"},{text:"\u7206\u5F3E2\u500B\u9023\u643A\u306F\u6700\u59278632\u30C0\u30E1\u30FC\u30B8",cls:"kmbly-pk"},{text:"SA3\u7DE0\u3081\u304C\u57FA\u672C\u30EB\u30FC\u30C8"},{text:"D\u30B2\u30FC\u30B8\u7BA1\u7406\u3067\u30B9\u30BF\u30F3\u5F8C\u30C0\u30E1\u30FC\u30B8\u5909\u52D5",cls:"kmbly-odtx"}],t=[...e,...e];return tt.default.createElement("div",{className:"kmbly-ticker-wrap"},tt.default.createElement("div",{className:"kmbly-ticker"},t.map((n,i)=>tt.default.createElement(tt.default.Fragment,{key:i},tt.default.createElement("span",{className:"kmbly-dot"},"\u25C6"),tt.default.createElement("span",{className:n.cls},n.text)))))}function s5({section:e,index:t,filter:n,collapsed:i,onToggle:s,onItemClick:r,registerItemRef:a}){let o=n?e.items.filter(l=>l.toLowerCase().includes(n.toLowerCase())):e.items;return n&&o.length===0?null:tt.default.createElement("div",{className:"kmbly-section"+(i?" kmbly-collapsed":"")},tt.default.createElement("div",{className:"kmbly-section-head",onClick:s},tt.default.createElement("span",{className:"kmbly-num"},String(t+1).padStart(2,"0")),tt.default.createElement("h2",null,e.title),tt.default.createElement("span",{className:"kmbly-badge"},o.length,"\u4EF6"),tt.default.createElement("span",{className:"kmbly-chev"},"\u25BC")),tt.default.createElement("div",{className:"kmbly-items"},o.map((l,c)=>{let u=e5(l),h=`${t}-${e.items.indexOf(l)}-${c}`;return u?tt.default.createElement("div",{key:h,ref:f=>a(h,f),className:"kmbly-item kmbly-combo",onClick:f=>r(f,l,h),dangerouslySetInnerHTML:{__html:t5(l)}}):tt.default.createElement("div",{key:h,className:"kmbly-item kmbly-note"},l)})))}function G2(){let e=(0,tt.useRef)(null),t=(0,tt.useRef)({}),n=(0,tt.useRef)(null),[i,s]=(0,tt.useState)(""),[r,a]=(0,tt.useState)({}),[o,l]=(0,tt.useState)({show:!1,msg:""}),c=(0,tt.useRef)(null);(0,tt.useEffect)(()=>{if(document.getElementById("kmbly-fonts"))return;let x=document.createElement("link");x.id="kmbly-fonts",x.rel="stylesheet",x.href="https://fonts.googleapis.com/css2?family=Bungee&family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&family=Noto+Sans+JP:wght@400;500;700;900&display=swap",document.head.appendChild(x)},[]);let u=(0,tt.useMemo)(()=>Array.from({length:10},(x,M)=>({size:80+Math.random()*160,left:Math.random()*100,top:Math.random()*100,variant:M%2})),[]),h=(0,tt.useMemo)(()=>i.trim()?Jm.reduce((x,M)=>x+M.items.filter(T=>T.toLowerCase().includes(i.toLowerCase())).length,0):jm,[i]),f=i.trim().length>0&&h===0;function p(){document.getElementById("kmbly-combo-list")?.scrollIntoView({behavior:"smooth"})}function m(x){clearTimeout(c.current),l({show:!0,msg:x}),c.current=setTimeout(()=>l(M=>({...M,show:!1})),1600)}function b(x){if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(x).catch(()=>{});else{let M=document.createElement("textarea");M.value=x,document.body.appendChild(M),M.select();try{document.execCommand("copy")}catch{}M.remove()}}function g(x,M){let T=e.current;if(!T)return;let w=["#1fe8c8","#ff2f7e","#ffd23f"];for(let v=0;v<14;v++){let A=document.createElement("div");A.className="kmbly-burst-particle",A.style.left=x+"px",A.style.top=M+"px",A.style.background=w[v%w.length],T.appendChild(A);let C=Math.PI*2*v/14+Math.random()*.5,P=40+Math.random()*60,L=Math.cos(C)*P,q=Math.sin(C)*P;A.animate([{transform:"translate(0,0) scale(1)",opacity:1},{transform:`translate(${L}px, ${q}px) scale(0)`,opacity:0}],{duration:500+Math.random()*300,easing:"cubic-bezier(.2,.8,.2,1)"}).onfinish=()=>A.remove()}}function d(x){x&&(x.classList.remove("kmbly-flash"),x.offsetWidth,x.classList.add("kmbly-flash"))}function y(x,M,T){b(M.replace(/\s+/g," ").trim()),g(x.clientX,x.clientY),d(t.current[T]),m("\u30BF\u30B0\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F \u{1F4CB}")}function _(){let x=Object.keys(t.current).filter(v=>t.current[v]);if(x.length===0)return;let M=n.current;M&&(M.classList.add("kmbly-spinning"),setTimeout(()=>M.classList.remove("kmbly-spinning"),500));let T=x[Math.floor(Math.random()*x.length)],w=Number(T.split("-")[0]);a(v=>({...v,[w]:!1})),setTimeout(()=>{let v=t.current[T];v&&(v.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>d(v),350))},30),m("\u30B3\u30F3\u30DC\u30921\u500B\u5F15\u304D\u307E\u3057\u305F \u{1F3B2}")}return tt.default.createElement("div",{className:"kmbly-root",ref:e},tt.default.createElement("style",null,r5),tt.default.createElement("svg",{width:"0",height:"0",style:{position:"absolute"}},tt.default.createElement("defs",null,tt.default.createElement("radialGradient",{id:"kmbly-g1"},tt.default.createElement("stop",{offset:"0%",stopColor:"#ff2f7e"}),tt.default.createElement("stop",{offset:"100%",stopColor:"#ff2f7e",stopOpacity:"0"})),tt.default.createElement("radialGradient",{id:"kmbly-g2"},tt.default.createElement("stop",{offset:"0%",stopColor:"#1fe8c8"}),tt.default.createElement("stop",{offset:"100%",stopColor:"#1fe8c8",stopOpacity:"0"})))),u.map((x,M)=>tt.default.createElement("div",{key:M,className:"kmbly-splat",style:{width:x.size,height:x.size,left:`${x.left}%`,top:`${x.top}%`,background:x.variant===0?"radial-gradient(circle, rgba(255,47,126,0.25), transparent 70%)":"radial-gradient(circle, rgba(31,232,200,0.22), transparent 70%)"}})),tt.default.createElement("nav",{className:"kmbly-nav"},tt.default.createElement("div",{className:"kmbly-logo"},tt.default.createElement("span",{className:"kmbly-dot"}),"KIMBERLY GUIDE"),tt.default.createElement("div",{className:"kmbly-navlinks"},tt.default.createElement("span",null,"MODE"),tt.default.createElement("span",null,"CHARACTER"),tt.default.createElement("span",{onClick:p},"COMBO"),tt.default.createElement("span",null,"COLUMN")),tt.default.createElement("div",{className:"kmbly-buy",onClick:p},"\u8AAD\u3080")),tt.default.createElement("section",{className:"kmbly-hero"},tt.default.createElement("div",{className:"kmbly-hero-bg"}),tt.default.createElement("div",{className:"kmbly-beam kmbly-b1"}),tt.default.createElement("div",{className:"kmbly-beam kmbly-b2"}),tt.default.createElement(n5,null),tt.default.createElement("div",{className:"kmbly-hero-content"},tt.default.createElement("div",{className:"kmbly-eyebrow-bar"}),tt.default.createElement("h1",{className:"kmbly-hero-title"},"COMBO",tt.default.createElement("span",{className:"kmbly-ghost"},"INDEX")),tt.default.createElement("p",{className:"kmbly-hero-sub"},"STREET FIGHTER 6 / KIMBERLY \u653B\u7565\u30CE\u30FC\u30C8",tt.default.createElement("br",null),"\u7528\u8A9E\u7D71\u4E00\u6E08\u307F\u30FB\u691C\u7D22\u5BFE\u5FDC\u30FB\u5168",jm,"\u4EF6\u53CE\u9332"),tt.default.createElement("div",{className:"kmbly-stamp-block"})),tt.default.createElement("div",{className:"kmbly-panels"},tt.default.createElement("div",{className:"kmbly-panel",onClick:p},tt.default.createElement("div",{className:"kmbly-panel-bg kmbly-p1"}),tt.default.createElement("div",{className:"kmbly-panel-inner"},tt.default.createElement("div",{className:"kmbly-panel-arrow"},"\u203A"),tt.default.createElement("div",null,tt.default.createElement("div",{className:"kmbly-panel-label"},"FIGHTING TAGS"),tt.default.createElement("div",{className:"kmbly-panel-sub"},"\u30B3\u30F3\u30DC\u4E00\u89A7\u3092\u898B\u308B")))),tt.default.createElement("div",{className:"kmbly-panel",onClick:()=>{p(),e.current?.querySelector(".kmbly-search")?.focus()}},tt.default.createElement("div",{className:"kmbly-panel-bg kmbly-p2"}),tt.default.createElement("div",{className:"kmbly-panel-inner"},tt.default.createElement("div",{className:"kmbly-panel-arrow"},"\u203A"),tt.default.createElement("div",null,tt.default.createElement("div",{className:"kmbly-panel-label"},"SEARCH INDEX"),tt.default.createElement("div",{className:"kmbly-panel-sub"},"\u30BF\u30B0\u3067\u691C\u7D22\u3059\u308B"))))),tt.default.createElement("div",{className:"kmbly-scrolldown",onClick:p},tt.default.createElement("div",{className:"kmbly-line"}),"SCROLL")),tt.default.createElement("div",{id:"kmbly-combo-list"}),tt.default.createElement(i5,null),tt.default.createElement("header",{className:"kmbly-header"},tt.default.createElement("div",{className:"kmbly-bg-tape"}),tt.default.createElement("div",{className:"kmbly-tagstamp"},"KMBRLY.EXE"),tt.default.createElement("div",{className:"kmbly-eyebrow"},tt.default.createElement("span",{className:"kmbly-eq"},tt.default.createElement("span",null),tt.default.createElement("span",null),tt.default.createElement("span",null),tt.default.createElement("span",null),tt.default.createElement("span",null)),"STREET FIGHTER 6 / NOTEBOOK"),tt.default.createElement("h1",null,"KIMBERLY"),tt.default.createElement("div",{className:"kmbly-sub"},"COMBO TAGS \xA0\u2014\xA0 \u7528\u8A9E\u7D71\u4E00\u6E08\u307F(",tt.default.createElement("b",null,"P")," / ",tt.default.createElement("b",null,"K")," / ",tt.default.createElement("b",null,"OD")," / ",tt.default.createElement("b",null,"SA"),")")),tt.default.createElement("div",{className:"kmbly-toolbar"},tt.default.createElement("div",{className:"kmbly-tagbox"},tt.default.createElement("input",{className:"kmbly-search",type:"text",placeholder:"\u30B3\u30F3\u30DC\u3092\u691C\u7D22(\u4F8B: SA3, \u30D1\u30CB\u30AB\u30F3, \u7AEF)",autoComplete:"off",value:i,onChange:x=>s(x.target.value)})),tt.default.createElement("div",{className:"kmbly-legend"},tt.default.createElement("span",{className:"kmbly-lp"},"P = \u30D1\u30F3\u30C1"),tt.default.createElement("span",{className:"kmbly-lk"},"K = \u30AD\u30C3\u30AF"),tt.default.createElement("span",{className:"kmbly-lod"},"OD / SA = \u30B2\u30FC\u30B8\u6280"))),tt.default.createElement("div",{className:"kmbly-count"},i.trim()?`${h}\u4EF6\u30D2\u30C3\u30C8 / \u5168${jm}\u4EF6`:`\u5168${jm}\u4EF6 / ${Jm.length}\u30BB\u30AF\u30B7\u30E7\u30F3`),tt.default.createElement("main",{className:"kmbly-main"},Jm.map((x,M)=>tt.default.createElement(s5,{key:M,section:x,index:M,filter:i,collapsed:!!r[M],onToggle:()=>a(T=>({...T,[M]:!T[M]})),onItemClick:y,registerItemRef:(T,w)=>{t.current[T]=w}}))),f&&tt.default.createElement("div",{className:"kmbly-empty"},"\u8A72\u5F53\u3059\u308B\u30B3\u30F3\u30DC\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093"),tt.default.createElement("footer",{className:"kmbly-footer"},"KIMBERLY COMBO NOTES \u2014 \u81EA\u52D5\u6574\u5F62 / \u5143\u30C7\u30FC\u30BF: Google\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8"),tt.default.createElement("div",{className:"kmbly-toast"+(o.show?" kmbly-show":"")},o.msg),tt.default.createElement("button",{ref:n,className:"kmbly-roll-btn",onClick:_},tt.default.createElement("span",{className:"kmbly-dice"},"\u{1F3B2}"),"\u30E9\u30F3\u30C0\u30E0"))}var tt,Jm,jm,r5,H2=D(()=>{tt=xe(Te());hb();Jm=[{title:"\u30A4\u30F3\u30D1\u30AF\u30C8\u30AC\u30FC\u30C9\uFF08\u58C1\u30C9\u30F3\uFF09\u59CB\u52D5",items:["\u30A4\u30F3\u30D1\u30AF\u30C8\uFF1E\u58C1\uFF1E2\u5927P\uFF1EOD\u80F4\u520E\u306D\uFF1E\u524DJ\u4E2DP\uFF1EOD\u65CB\u98A8\uFF1ESA2"]},{title:"\u7121\u6575\u30D6\u30C3\u30D1\u306B\u5BFE\u3059\u308B\u304A\u3057\u304A\u304D",items:["\u3042\u3068\u306F\u3001\u30B8\u30E5\u30EA\u306B\u753B\u9762\u7AEF\u3067\u5F37\u8A2D\u7F6E\u3057\u3066\u3001OD\u7121\u6575\u98DF\u3089\u3063\u305F\u969B\u306E\u30EA\u30FC\u30B5\u30EB\u72D9\u3044\u3067\u3001","\u5F8C\u308D\u53D7\u3051\u8EAB\uFF1E(\u7206\u767A\u5F53\u305F\u308B)\uFF1E\u30E9\u30C3\u30B7\u30E55\u5927P\uFF1EOD\u80F4\u520E\u306D\uFF1EOD\u8352\u9DB4\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\u80F4\u520E\u306D\uFF1E236LP\uFF1ESA3","\u3067\u30C0\u30E1\u30FC\u30B84873","\u7121\u6575\u6280\u5F53\u3066\u305F\u306E\u306B\u6B7B\u306C\u30B8\u30E5\u30EA"]},{title:"\uFF14\u30D5\u30EC\u30FC\u30E0\u4EE5\u4E0A\u306E\u78BA\u5B9A\u53CD\u6483\u3068\u3057\u3066",items:["\u4E0B\u5F31P\u2192\u4E0B\u5F31P\u2192\u30E9\u30C3\u30B7\u30E5\u4E0B\u5F31P\u2192\u4E0B\u5F37P\u2192\u5F37\u4E00\u6587\u5B57\u2192\u30B8\u30E3\u30F3\u30D7\u4E2DP\u2192\u7A7A\u4E2D\u7ADC\u5DFB","\u7ACB\u3061\u4E2DK\u30AD\u30E3\u30F3\u30BB\u30EB\u30E9\u30C3\u30B7\u30E5\u4E0B\u4E2DP\xD72\uFF1E\u7ACB\u3061\u4E2DP\u30FB\u5927P\u30AD\u30E3\u30F3\u30BB\u30EB\u75BE\u99C6\u3051","\u8A2D\u7F6E 2\u5927P\u4E2D\u6D41\u8EE2 \u30E9\u30C3\u30B7\u30E52\u5927P\u8E74\u308A\u4E0A\u3052\u30E9\u30C3\u30B7\u30E52\u5927P\u8E74\u308A\u4E0A\u3052\u30E9\u30C3\u30B7\u30E5\u7ACB\u5F31PTC\u3060\u306D","SA3\u5F8C\u2192\u30E9\u30C3\u30B7\u30E52\u5927P\u8E74\u308A\u4E0A\u3052\u21922\u5927POD\u8E74\u308A\u4E0A\u3052\u21922\u5927POD\u8E74\u308A\u4E0A\u3052\u2192\uFF12\u5927P\u30A4\u30F3\u30D1\u30AF\u30C8 \u6B69\u3044\u3066\uFF12\u500B\u8A2D\u7F6EOD\u8E74\u308A\u4E0A\u3052 OD\u7A7A\u6295\u3052 \u524D\u5F37K\u30B8\u30E3\u30F3\u30D7\u4E2DPSA1","SA3\u5F8C\u306E\u524A\u308A\u30B3\u30F3\u30DC\u3067\u3059\u304C\u3001 \u30E9\u30C3\u30B7\u30E52\u5927P\u8E74\u308A\u4E0A\u3052\u306E\u6240\u304C 5F\u3042\u308B\u3088\u3046\u3067\u3001\u30B3\u30D1\u30F3\u3067\u5272\u3089\u308C\u307E\u3059\u3002\u96D1\u9B5A\u3067\u3057\u305F\u3002\u3059\u3044\u307E\u305B\u3093\u3002","\u3061\u306A\u307F\u306B\u4E00\u6483\u5FC5\u6BBA\u30EB\u30FC\u30C8\u306F \u7121\u6575\u6280\u30AC\u30FC\u30C9\u5F8C\u5F37P\u306F\u3084\u304B\u30512\u5927P\u5927\u6D41\u8EE2 \u4F4E\u7A7AOD\u7ADC\u5DFB\u5F31\u6D41\u8EE2 CA","\u30B2\u30FC\u30B8\u306A\u30892\u5927POD\u8E74\u308A\u4E0A\u3052\u30B8\u30E3\u30F3\u30D7\u4E2DPOD\u7ADC\u5DFBSA\uFF12","\u30A4\u30F3\u30D1\u30AF\u30C8\u2192OD\u306F\u306D\u3042\u3052\u2192OD\u7A7A\u6295\u3052\u2192\u524D\u5927K\u2192\u30B8\u30E3\u30F3\u30D7\u4E2DP\u2192\u7740\u5730\u2192SA2","\u4E2D\u5927P\u2192\u5F31\u6D41\u8EE2\u2192\u7206\u5F3E\u2192\u4E0B\u5927P\u2192\u9996\u72E9\u308A","D\u30B2\u30FC\u30B82.5\u6E1B\u3089\u305B\u308B\u3002","\u30B9\u30BF\u30F3\u2192\u6700\u901F\u8A2D\u7F6E\u21922\u5927P\u2192\u4E2D\u6D41\u8EE2\u2192\u7206\u767A\u2192\u75BE\u99C6\u3051\u306F\u306D\u3042\u3052\u2192\u5F31\u6D41\u8EE2\u30AD\u30E3\u30F3\u30BB\u30EBSA3","\u5927K>\u4E2D\u5927>\u30E9\u30C3\u30B7\u30E52\u4E2DK>2\u5927P>\u65E9\u99C6\u3051","\u3067\u76F8\u624B\u306E\u30B2\u30FC\u30B8\u7D50\u69CB\u524A\u308C\u308B\u306E\u3067\u3001\u7121\u7406\u3084\u308A\u30B2\u30FC\u30B8\u524A\u308A\u305F\u3044\u6642\u3068\u304B\u304A\u3059\u3059\u3081\u3067\u3059"]},{title:"F\u5F0F",items:["OD\u65E9\u99C6\u3051\u2192K\u3067\u58C1\u5F53\u3066","\u5F37\u8A2D\u7F6E\u2192\u524D\u30B8\u30E3\u30F3\u30D7\u5F37K\u2192\u767B\u308A\u5F31K\u3067\u3059\uFF01"]},{title:"\u7AEF",items:["\u5F37P\u30D1\u30CB\u30AB\u30F3\u25B6OD\u30C9\u30ED\u30F3\u25B6J\u5F37P\u25B62\u5F37P\u25B6\u5F37\u4E00\u6587\u5B57\u25B6OD\u8352\u9D7A\u25B6OD\u80F4\u64A5\u306D\u25B6\u5F311\u6587\u5B57\u25B6SA3\u30675555\u3067\u3059","OD\u30C9\u30ED\u30F3\u7A7A\u5927K\u5C48\u5927P\u5F37\u4E00\u6587\u5B57\u306E\u65B9\u304C\u6E1B\u308A\u307E\u3059"]},{title:"\u3082\u306E\u306B\u3057\u305F\u3044\u30B3\u30F3\u30DC\u30D1\u30FC\u30C4",items:["\u30AD\u30E3\u30F3\u30BB\u30EB\u30E9\u30C3\u30B7\u30E52\u5F37P\u2192\u306F\u3084\u304C\u3051\u6025\u505C\u6B62\u21922\u4E2DP\u21922\u4E2DP\u21925\u4E2DP\u30AD\u30E3\u30F3\u30BB\u30EB\u30E9\u30C3\u30B7\u30E5\u306E\u30EB\u30FC\u30D7\u3067\u3059"]},{title:"OD\u8352\u9D7A\u7206\u5F3E\u9023\u643A",items:["5\u5927P\u2192\u5927\u4E00\u6587\u5B57\u2192OD\u30B3\u30DE\u6295\u3052\u2192\u4E2D\u7206\u5F3E\u2192\u75BE\u99C6\u3051\u6025\u505C\u6B62\u2192\u8098\u843D\u3068\u3057\uFF08\u8868\uFF09","5\u5927P\u2192\u5927\u4E00\u6587\u5B57\u2192OD\u30B3\u30DE\u6295\u3052\u2192\u4E2D\u7206\u5F3E\u2192\u75BE\u99C6\u3051\u6025\u505C\u6B62\u2192J\u4E2DK\uFF08\u88CF\uFF09","5\u5927P\u2192\u5927\u4E00\u6587\u5B57\u2192OD\u30B3\u30DE\u6295\u3052\u2192\u5927\u7206\u5F3E\u21923\u4E2DK\u21923\u4E2DK","5\u5927P\u2192\u5927\u4E00\u6587\u5B57\u2192OD\u30B3\u30DE\u6295\u3052\u2192\u5927\u7206\u5F3E\u21923\u4E2DK\u21923\u4E2DK\u21922\u5927P\u2192OD\u30C9\u30ED\u30F3\u2192J\u5C0FK\u21922\u4E2DP\u2192\u7ACB\u4E2DP\u2192\u5F71\u63AC\u3044","5\u5927P\u2192\u5927\u4E00\u6587\u5B57\u2192OD\u30B3\u30DE\u6295\u3052\u2192\u4E2D\u7206\u5F3E\u21923\u4E2DK\u21924\u5927K"]},{title:"\u7206\u5F3E\uFF12\u500B\u9023\u643A",items:["1.\uFF08\u7AEF\uFF09\u864E\u9023\u7259\u2192OD\u75BE\u99C6\u3051\uFF5E\u927E\u5203\u811A\u2192\u80F4\u520E\u306D\u2192\u7206\u5F3E2\u500B\u8A2D\u7F6E\u21922\u5F37P\u2192\u30A4\u30F3\u30D1\u30AF\u30C8\u21922\u5F37P\u21924\u5F37K\u21922\u5F31P\u2192\u30AD\u30E3\u30F3\u30BB\u30EB\u30E9\u30C3\u30B7\u30E52\u5F31P\u21922\u5F37P\u2192\u5F37\u4E00\u6587\u5B57\u2192OD\u8352\u9D7A\u2192\u80F4\u520E\u306D\u2192\u5F31\u4E00\u6587\u5B57\u2192SA3\u306B\u3059\u308C\u30707,999\u30C0\u30E1\u30FC\u30B8","2.\uFF08\u7AEF\uFF09\u864E\u9023\u7259\u2192OD\u75BE\u99C6\u3051\uFF5E\u927E\u5203\u811A\u2192\u80F4\u520E\u306D\u2192\u7206\u5F3E2\u500B\u8A2D\u7F6E\u21922\u5F37P\u2192\u30A4\u30F3\u30D1\u30AF\u30C8\u2192\u30E9\u30C3\u30B7\u30E55\u4E2DK\u21925\u5F31K\u2192\u30A4\u30F3\u30D1\u30AF\u30C8\uFF08\u58C1\u30C9\u30F3\uFF092\u5F37P\u2192\u80F4\u520E\u306D\u2192OD\u8352\u9D7A\u2192\u80F4\u520E\u306D\u2192\u5F31\u4E00\u6587\u5B57\u2192SA3\u306B\u3059\u308C\u30708,632\u30C0\u30E1\u30FC\u30B8"]},{title:"\u30D2\u30E3\u30C3\u30CF\u30FC",items:["\u5927\u8A2D\u7F6E\u2192\u6295\u3052\u2192\u7206\u5F3E\u30D2\u30C3\u30C8\u21922\u5C0FP\u2192\u30A4\u30F3\u30D1\u30AF\u30C8\u2192\uFF12\u5927P\u2192OD\u80F4\u520E\u306D\u2192\u30E9\u30C3\u30B7\u30E52\u5927P\u2192\u80F4\u520E\u306D\u2192\u30E9\u30C3\u30B72\u5C0FP\u2192OD\u80F4\u520E\u306D\u2192\u5F31\u4E00\u6587\u2192SA3","\u7C21\u5358\u30B9\u30BF\u30F3\u30B3\u30F3\u30DC","\u30A4\u30F3\u30D1\u30AF\u30C8\u2192\u7206\u5F3E2\u500B\u8A2D\u7F6E\u21922\u5927P\u2192\u4E2D\u4E00\u6587\u5B57\u2192\u7206\u5F3E\u30D2\u30C3\u30C8\u2192\u30E9\u30C3\u30B7\u30E5\uFF12\u5927P\u2192\u80F4\u520E\u306D\u2192\u767B\u308AOD\u8352\u9D7A\u2192\u80F4\u520E\u306D\u2192CA","\u5F37P\u30D1\u30CB\u30AB\u30F3\u304B\u3089","\u5FAE\u6B69\u304D\u5F37K\u2192\u4E2DP\u2192\u5F37P\u2192\u4E2D\u306F\u3084\u304C\u3051\uFF08\u30B9\u30E9\uFF09","\u30B9\u30C6\u30B9\u30C6\u6B69\u304D\u3067\u6295\u3052\u91CD\u306A\u308B\u3057\u3000\u30B7\u30DF\u30FC\u53EF\u80FD","\u5F37P\u30D1\u30CB\u30AB\u30F3\u304B\u3089\u3000\u5FAE\u6B69\u304D\u5F37K\u2192\u4E2DP\u2192\u5F37P\u2192\u4E2D\u306F\u3084\u304C\u3051\u62BC\u3057\u3063\u3071\u306A\u3057\u2192K\u6D3E\u751F\u304B\u3089\u3000\u5F31\u306F\u3084\u304C\u3051\u6025\u505C\u6B62\u3067\u30D7\u30E9\u30B9\u306B2\u3068\u308C\u3066\u6295\u3052\u3082\u57CB\u307E\u308B\u3000\u3000\u3000\u305F\u3060\u30B7\u30DF\u30FC\u4E0D\u53EF","5\u5927P\u30D1\u30CB\u30AB\u30F3\uFF1EOD\u30C9\u30ED\u30F3\uFF1EJ\u5927P\uFF1E2\u5927P\uFF1EOD\u6025\u505C\u6B62\uFF1E2\u4E2DP\uFF1E5\u4E2DP\uFF1EOD\u4E00\u6587\u5B57\uFF1E\u4F4E\u7A7A\u7A7A\u4E2DOD\u65CB\u98A8\u811A\uFF1E\u5F31\u4E00\u6587\u5B57\uFF1ESA3","5\u5927P\u30D1\u30CB\u30AB\u30F3\uFF1E\u9045\u3089\u305B5\u5927K\uFF1E5\u5927P\uFF1EOD\u6025\u505C\u6B62\uFF1E5\u4E2DP\uFF1EOD\u4E00\u6587\u5B57\uFF1E\u4F4E\u7A7A\u7A7A\u4E2DOD\u65CB\u98A8\u811A\uFF1E\u5F31\u4E00\u6587\u5B57\uFF1ESA"]},{title:"\u7206\u5F3E\u30B3\u30F3\u30DC",items:["OD\u8A2D\u7F6E\uFF1E2\u5927P\u30AD\u30E3\u30F3\u30BB\u30EB\u4E2D\u4E00\u6587\u5B57\uFF1E1\u767A\u76EE\u7206\u5F3E\u30D2\u30C3\u30C8\uFF1E2\u767A\u76EE\u7206\u5F3E\u30D2\u30C3\u30C8\uFF1E\u5C0F\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\u30AD\u30E3\u30F3\u30BB\u30EBOD\u80F4\u520E\u306D\uFF1E","\u30E9\u30C3\u30B7\u30E52\u5927P\u30AD\u30E3\u30F3\u30BB\u30EB\u30E9\u30C3\u30B7\u30E52\u5927P(BO)\u30AD\u30E3\u30F3\u30BB\u30EB\u5C0F\u30C9\u30ED\u30F3\uFF1E5\u4E2DP\u30AD\u30E3\u30F3\u30BB\u30EB\u5C0F\u4E00\u6587\u5B57\u30AD\u30E3\u30F3\u30BB\u30EBSA3"]},{title:"\u30B9\u30BF\u30F3\u30B3\u30F3\u30DC",items:["\u30B9\u30BF\u30F3\uFF1EOD\u8A2D\u7F6E\uFF1E2\u5927P\uFF1E\u4E2D\u6D41\u8EE2\uFF1E2\u4E2DK\uFF08\u7A7A\u632F\u308A\uFF09\uFF1E \u80F4\u520E\u306D\uFF1E\u3053\u3053\u304B\u3089\u6B8B\u308AD\u30B2\u30FC\u30B8\u3067\u5206\u5C90","D\u30B2\u30FC\u30B8","\u30FB4\u672C\u4EE5\u4E0A\uFF1A \u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1E\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1EOD\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1EC\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1E\u30C9\u30ED\u30F35\u4E2DP\uFF1E\u80F4\u520E\u306D\uFF1E\u5F31\u6D41\u8EE2SA3","\u30FB2\u672C\u4EE5\u4E0A\uFF1A \u30C9\u30ED\u30F32\u5927P\uFF1E\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1EOD\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1EC\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1E\u30C9\u30ED\u30F35\u4E2DP\uFF1E\u80F4\u520E\u306D\uFF1E\u5F31\u6D41\u8EE2SA3","\u30FB1\u672C\u4EE5\u4E0A\uFF1A \u30C9\u30ED\u30F32\u5927P\uFF1E\u30C9\u30ED\u30F32\u5927P\uFF1EOD\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1EC\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1E\u30C9\u30ED\u30F35\u4E2DP\uFF1E\u80F4\u520E\u306D\uFF1E\u5F31\u6D41\u8EE2SA3","\u30FB0\u672C\u3088\u308A\uFF1A \u30C9\u30ED\u30F32\u5927P\uFF1E\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5927P\uFF1E\u80F4\u520E\u306D\uFF1E\u30E9\u30C3\u30B7\u30E52\u5C0FP\uFF1EC\u30E9\u30C3\u30B7\u30E5\u7344\u9396\u62F3\uFF1E\u5F31\u6D41\u8EE2SA3","\u30FBBO\uFF1A \u30C9\u30ED\u30F32\u5927P\uFF1E\u30C9\u30ED\u30F32\u5927P\uFF1E\u80F4\u520E\u306D\uFF1E\u5F31\u6D41\u8EE2SA3"]}],jm=Jm.reduce((e,t)=>e+t.items.length,0);r5=`
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
`});var X2=Ji(Qm=>{"use strict";var a5=Symbol.for("react.transitional.element"),o5=Symbol.for("react.fragment");function W2(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:a5,type:e,key:i,ref:t!==void 0?t:null,props:n}}Qm.Fragment=o5;Qm.jsx=W2;Qm.jsxs=W2});var $m=Ji((H9,q2)=>{"use strict";q2.exports=X2()});var Y2,tg,db=D(()=>{"use client";Y2=xe(Te(),1),tg=(0,Y2.createContext)({})});function eg(e){let t=(0,Z2.useRef)(null);return t.current===null&&(t.current=e()),t.current}var Z2,pb=D(()=>{"use client";Z2=xe(Te(),1)});var K2,j2=D(()=>{K2=typeof window<"u"});var ng,J2,Q2=D(()=>{"use client";ng=xe(Te(),1);j2();J2=K2?ng.useLayoutEffect:ng.useEffect});var $2,dc,ig=D(()=>{"use client";$2=xe(Te(),1),dc=(0,$2.createContext)(null)});function So(e,t){e.indexOf(t)===-1&&e.push(t)}function Ta(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var mb=D(()=>{});var _n,tR=D(()=>{_n=(e,t,n)=>n>t?t:n<e?e:n});var xr,li,gb=D(()=>{xr=()=>{},li=()=>{}});var Kn,eR=D(()=>{Kn={}});var Tf,nR=D(()=>{Tf=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)});var Ef,iR=D(()=>{Ef=e=>typeof e=="object"&&e!==null});var Af,sR=D(()=>{Af=e=>/^0[^.\s]+$/u.test(e)});function wf(e){let t;return()=>(t===void 0&&(t=e()),t)}var rR=D(()=>{});var He,sg=D(()=>{He=e=>e});var cs,aR=D(()=>{cs=(...e)=>e.reduce((t,n)=>i=>n(t(i)))});var Ls,oR=D(()=>{Ls=(e,t,n)=>{let i=t-e;return i?(n-e)/i:1}});var vr,lR=D(()=>{mb();vr=class{constructor(){this.subscriptions=[]}add(t){return So(this.subscriptions,t),()=>Ta(this.subscriptions,t)}notify(t,n,i){let s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,n,i);else for(let r=0;r<s;r++){let a=this.subscriptions[r];a&&a(t,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}});var rn,Rn,cR=D(()=>{rn=e=>e*1e3,Rn=e=>e/1e3});var Cf,uR=D(()=>{Cf=(e,t)=>t?e*(1e3/t):0});function u5(e,t,n,i,s){let r,a,o=0;do a=t+(n-t)/2,r=fR(a,i,s)-e,r>0?n=a:t=a;while(Math.abs(r)>l5&&++o<c5);return a}function Ea(e,t,n,i){if(e===t&&n===i)return He;let s=r=>u5(r,0,1,e,n);return r=>r===0||r===1?r:fR(s(r),t,i)}var fR,l5,c5,rg=D(()=>{sg();fR=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,l5=1e-7,c5=12});var ag,yb=D(()=>{ag=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2});var og,xb=D(()=>{og=e=>t=>1-e(1-t)});var lg,pc,Rf,cg=D(()=>{rg();yb();xb();lg=Ea(.33,1.53,.69,.99),pc=og(lg),Rf=ag(pc)});var Df,vb=D(()=>{cg();Df=e=>e>=1?1:(e*=2)<1?.5*pc(e):.5*(2-Math.pow(2,-10*(e-1)))});var Pf,Nf,Lf,_b=D(()=>{yb();xb();Pf=e=>1-Math.sin(Math.acos(e)),Nf=og(Pf),Lf=ag(Pf)});var bb,Sb,Uf,Mb=D(()=>{rg();bb=Ea(.42,0,1,1),Sb=Ea(0,0,.58,1),Uf=Ea(.42,0,.58,1)});var Tb,hR=D(()=>{Tb=e=>Array.isArray(e)&&typeof e[0]!="number"});var If,Eb=D(()=>{If=e=>Array.isArray(e)&&typeof e[0]=="number"});var dR,f5,ug,pR=D(()=>{gb();sg();vb();cg();_b();rg();Mb();Eb();dR={linear:He,easeIn:bb,easeInOut:Uf,easeOut:Sb,circIn:Pf,circInOut:Lf,circOut:Nf,backIn:pc,backInOut:Rf,backOut:lg,anticipate:Df},f5=e=>typeof e=="string",ug=e=>{if(If(e)){li(e.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");let[t,n,i,s]=e;return Ea(t,n,i,s)}else if(f5(e))return li(dR[e]!==void 0,`Invalid easing type '${e}'`,"invalid-easing-type"),dR[e];return e}});var zt=D(()=>{mb();tR();gb();eR();nR();iR();sR();rR();sg();aR();oR();lR();cR();uR();vb();cg();_b();Mb();Eb();hR();pR()});var Of,mR=D(()=>{Of=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"]});function gR(e){let t=new Set,n=new Set,i=!1,s=!1,r=new WeakSet,a={delta:0,timestamp:0,isProcessing:!1};function o(c){r.has(c)&&(l.schedule(c),e()),c(a)}let l={schedule:(c,u=!1,h=!1)=>{let p=h&&i?t:n;return u&&r.add(c),p.add(c),c},cancel:c=>{n.delete(c),r.delete(c)},process:c=>{if(a=c,i){s=!0;return}i=!0;let u=t;t=n,n=u,t.forEach(o),t.clear(),i=!1,s&&(s=!1,l.process(c))}};return l}var yR=D(()=>{});function fg(e,t){let n=!1,i=!0,s={delta:0,timestamp:0,isProcessing:!1},r=()=>n=!0,a=Of.reduce((_,x)=>(_[x]=gR(r),_),{}),{setup:o,read:l,resolveKeyframes:c,preUpdate:u,update:h,preRender:f,render:p,postRender:m}=a,b=()=>{let _=Kn.useManualTiming,x=_?s.timestamp:performance.now();n=!1,_||(s.delta=i?1e3/60:Math.max(Math.min(x-s.timestamp,h5),1)),s.timestamp=x,s.isProcessing=!0,o.process(s),l.process(s),c.process(s),u.process(s),h.process(s),f.process(s),p.process(s),m.process(s),s.isProcessing=!1,n&&t&&(i=!1,e(b))},g=()=>{n=!0,i=!0,s.isProcessing||e(b)};return{schedule:Of.reduce((_,x)=>{let M=a[x];return _[x]=(T,w=!1,v=!1)=>(n||g(),M.schedule(T,w,v)),_},{}),cancel:_=>{for(let x=0;x<Of.length;x++)a[Of[x]].cancel(_)},state:s,steps:a}}var h5,Ab=D(()=>{zt();mR();yR();h5=40});var Ht,ci,Qe,Bf,us=D(()=>{zt();Ab();({schedule:Ht,cancel:ci,state:Qe,steps:Bf}=fg(typeof requestAnimationFrame<"u"?requestAnimationFrame:He,!0))});function d5(){hg=void 0}var hg,We,_r=D(()=>{zt();us();We={now:()=>(hg===void 0&&We.set(Qe.isProcessing||Kn.useManualTiming?Qe.timestamp:performance.now()),hg),set:e=>{hg=e,queueMicrotask(d5)}}});function wb(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}var xR,dg,p5,mc,m5,gc=D(()=>{xR=e=>t=>typeof t=="string"&&t.startsWith(e),dg=xR("--"),p5=xR("var(--"),mc=e=>p5(e)?m5.test(e.split("/*")[0].trim()):!1,m5=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu});var Us,br,Ff,Aa=D(()=>{zt();Us={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},br={...Us,transform:e=>_n(0,1,e)},Ff={...Us,default:1}});var wa,pg=D(()=>{wa=e=>Math.round(e*1e5)/1e5});var yc,mg=D(()=>{yc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu});function vR(e){return e==null}var _R=D(()=>{});var bR,SR=D(()=>{bR=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu});var xc,gg,yg=D(()=>{mg();_R();SR();xc=(e,t)=>n=>!!(typeof n=="string"&&bR.test(n)&&n.startsWith(e)||t&&!vR(n)&&Object.prototype.hasOwnProperty.call(n,t)),gg=(e,t,n)=>i=>{if(typeof i!="string")return i;let[s,r,a,o]=i.match(yc);return{[e]:parseFloat(s),[t]:parseFloat(r),[n]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}}});var g5,Cb,Is,xg=D(()=>{zt();Aa();pg();yg();g5=e=>_n(0,255,e),Cb={...Us,transform:e=>Math.round(g5(e))},Is={test:xc("rgb","red"),parse:gg("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+Cb.transform(e)+", "+Cb.transform(t)+", "+Cb.transform(n)+", "+wa(br.transform(i))+")"}});function y5(e){let t="",n="",i="",s="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,i+=i,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}var zf,Rb=D(()=>{xg();yg();zf={test:xc("#"),parse:y5,transform:Is.transform}});var Vf,Xi,Hn,vt,Db,Pb,vg,Os=D(()=>{Vf=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Xi=Vf("deg"),Hn=Vf("%"),vt=Vf("px"),Db=Vf("vh"),Pb=Vf("vw"),vg={...Hn,parse:e=>Hn.parse(e)/100,transform:e=>Hn.transform(e*100)}});var Ca,Nb=D(()=>{Aa();Os();pg();yg();Ca={test:xc("hsl","hue"),parse:gg("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+Hn.transform(wa(t))+", "+Hn.transform(wa(n))+", "+wa(br.transform(i))+")"}});var ze,kf=D(()=>{Rb();Nb();xg();ze={test:e=>Is.test(e)||zf.test(e)||Ca.test(e),parse:e=>Is.test(e)?Is.parse(e):Ca.test(e)?Ca.parse(e):zf.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Is.transform(e):Ca.transform(e),getAnimatableNone:e=>{let t=ze.parse(e);return t.alpha=0,ze.transform(t)}}});var MR,TR=D(()=>{MR=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu});function x5(e){return isNaN(e)&&typeof e=="string"&&(e.match(yc)?.length||0)+(e.match(MR)?.length||0)>0}function Ra(e){let t=e.toString(),n=[],i={color:[],number:[],var:[]},s=[],r=0,o=t.replace(b5,l=>(ze.test(l)?(i.color.push(r),s.push(wR),n.push(ze.parse(l))):l.startsWith(_5)?(i.var.push(r),s.push(v5),n.push(l)):(i.number.push(r),s.push(AR),n.push(parseFloat(l))),++r,ER)).split(ER);return{values:n,split:o,indexes:i,types:s}}function S5(e){return Ra(e).values}function CR({split:e,types:t}){let n=e.length;return i=>{let s="";for(let r=0;r<n;r++)if(s+=e[r],i[r]!==void 0){let a=t[r];a===AR?s+=wa(i[r]):a===wR?s+=ze.transform(i[r]):s+=i[r]}return s}}function M5(e){return CR(Ra(e))}function A5(e){let t=Ra(e);return CR(t)(t.values.map((i,s)=>E5(i,t.split[s])))}var AR,wR,v5,_5,ER,b5,T5,E5,bn,Bs=D(()=>{kf();TR();mg();pg();AR="number",wR="color",v5="var",_5="var(",ER="${}",b5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;T5=e=>typeof e=="number"?0:ze.test(e)?ze.getAnimatableNone(e):e,E5=(e,t)=>typeof e=="number"?t?.trim().endsWith("/")?e:0:T5(e);bn={test:x5,parse:S5,createTransformer:M5,getAnimatableNone:A5}});function Lb(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function RR({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,t/=100,n/=100;let s=0,r=0,a=0;if(!t)s=r=a=n;else{let o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;s=Lb(l,o,e+1/3),r=Lb(l,o,e),a=Lb(l,o,e-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:i}}var DR=D(()=>{});function vc(e,t){return n=>n>0?t:e}var Ub=D(()=>{});var qt,qi=D(()=>{qt=(e,t,n)=>e+(t-e)*n});function PR(e){let t=C5(e);if(xr(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!t)return!1;let n=t.parse(e);return t===Ca&&(n=RR(n)),n}var Ib,w5,C5,Ob,NR=D(()=>{zt();Rb();Nb();DR();xg();Ub();qi();Ib=(e,t,n)=>{let i=e*e,s=n*(t*t-i)+i;return s<0?0:Math.sqrt(s)},w5=[zf,Is,Ca],C5=e=>w5.find(t=>t.test(e));Ob=(e,t)=>{let n=PR(e),i=PR(t);if(!n||!i)return vc(e,t);let s={...n};return r=>(s.red=Ib(n.red,i.red,r),s.green=Ib(n.green,i.green,r),s.blue=Ib(n.blue,i.blue,r),s.alpha=qt(n.alpha,i.alpha,r),Is.transform(s))}});function LR(e,t){return _g.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}var _g,UR=D(()=>{_g=new Set(["none","hidden"])});function R5(e,t){return n=>qt(e,t,n)}function bg(e){return typeof e=="number"?R5:typeof e=="string"?mc(e)?vc:ze.test(e)?Ob:N5:Array.isArray(e)?IR:typeof e=="object"?ze.test(e)?Ob:D5:vc}function IR(e,t){let n=[...e],i=n.length,s=e.map((r,a)=>bg(r)(r,t[a]));return r=>{for(let a=0;a<i;a++)n[a]=s[a](r);return n}}function D5(e,t){let n={...e,...t},i={};for(let s in n)e[s]!==void 0&&t[s]!==void 0&&(i[s]=bg(e[s])(e[s],t[s]));return s=>{for(let r in i)n[r]=i[r](s);return n}}function P5(e,t){let n=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){let r=t.types[s],a=e.indexes[r][i[r]],o=e.values[a]??0;n[s]=o,i[r]++}return n}var N5,OR=D(()=>{zt();gc();kf();Bs();NR();Ub();qi();UR();N5=(e,t)=>{let n=bn.createTransformer(t),i=Ra(e),s=Ra(t);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?_g.has(e)&&!s.values.length||_g.has(t)&&!i.values.length?LR(e,t):cs(IR(P5(i,s),s.values),n):(xr(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),vc(e,t))}});function Sg(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?qt(e,t,n):bg(e)(e,t)}var Bb=D(()=>{OR();qi()});var BR,FR=D(()=>{_r();us();BR=e=>{let t=({timestamp:n})=>e(n);return{start:(n=!0)=>Ht.update(t,n),stop:()=>ci(t),now:()=>Qe.isProcessing?Qe.timestamp:We.now()}}});var Mg,Fb=D(()=>{Mg=(e,t,n=10)=>{let i="",s=Math.max(Math.round(t/n),2);for(let r=0;r<s;r++)i+=Math.round(e(r/(s-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`}});function _c(e){let t=0,n=50,i=e.next(t);for(;!i.done&&t<2e4;)t+=n,i=e.next(t);return t>=2e4?1/0:t}var Tg=D(()=>{});function zR(e,t=100,n){let i=n({...e,keyframes:[0,t]}),s=Math.min(_c(i),2e4);return{type:"keyframes",ease:r=>i.next(s*r).value/t,duration:Rn(s)}}var VR=D(()=>{zt();Tg()});function kb(e,t){return e*Math.sqrt(1-t*t)}function U5(e,t,n){let i=n;for(let s=1;s<L5;s++)i=i-e(i)/t(i);return i}function I5({duration:e=Xe.duration,bounce:t=Xe.bounce,velocity:n=Xe.velocity,mass:i=Xe.mass}){let s,r;xr(e<=rn(Xe.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let a=1-t;a=_n(Xe.minDamping,Xe.maxDamping,a),e=_n(Xe.minDuration,Xe.maxDuration,Rn(e)),a<1?(s=c=>{let u=c*a,h=u*e,f=u-n,p=kb(c,a),m=Math.exp(-h);return Vb-f/p*m},r=c=>{let h=c*a*e,f=h*n+n,p=Math.pow(a,2)*Math.pow(c,2)*e,m=Math.exp(-h),b=kb(Math.pow(c,2),a);return(-s(c)+Vb>0?-1:1)*((f-p)*m)/b}):(s=c=>{let u=Math.exp(-c*e),h=(c-n)*e+1;return-Vb+u*h},r=c=>{let u=Math.exp(-c*e),h=(n-c)*(e*e);return u*h});let o=5/e,l=U5(s,r,o);if(e=rn(e),isNaN(l))return{stiffness:Xe.stiffness,damping:Xe.damping,duration:e};{let c=Math.pow(l,2)*i;return{stiffness:c,damping:a*2*Math.sqrt(i*c),duration:e}}}function kR(e,t){return t.some(n=>e[n]!==void 0)}function F5(e){let t={velocity:Xe.velocity,stiffness:Xe.stiffness,damping:Xe.damping,mass:Xe.mass,isResolvedFromDuration:!1,...e};if(!kR(e,B5)&&kR(e,O5))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,i=2*Math.PI/(n*1.2),s=i*i,r=2*_n(.05,1,1-(e.bounce||0))*Math.sqrt(s);t={...t,mass:Xe.mass,stiffness:s,damping:r}}else{let n=I5({...e,velocity:0});t={...t,...n,mass:Xe.mass},t.isResolvedFromDuration=!0}return t}function bc(e=Xe.visualDuration,t=Xe.bounce){let n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e,{restSpeed:i,restDelta:s}=n,r=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],o={done:!1,value:r},{stiffness:l,damping:c,mass:u,duration:h,velocity:f,isResolvedFromDuration:p}=F5({...n,velocity:-Rn(n.velocity||0)}),m=f||0,b=c/(2*Math.sqrt(l*u)),g=a-r,d=Rn(Math.sqrt(l/u)),y=Math.abs(g)<5;i||(i=y?Xe.restSpeed.granular:Xe.restSpeed.default),s||(s=y?Xe.restDelta.granular:Xe.restDelta.default);let _,x,M,T,w,v;if(b<1)M=kb(d,b),T=(m+b*d*g)/M,_=C=>{let P=Math.exp(-b*d*C);return a-P*(T*Math.sin(M*C)+g*Math.cos(M*C))},w=b*d*T+g*M,v=b*d*g-T*M,x=C=>Math.exp(-b*d*C)*(w*Math.sin(M*C)+v*Math.cos(M*C));else if(b===1){_=P=>a-Math.exp(-d*P)*(g+(m+d*g)*P);let C=m+d*g;x=P=>Math.exp(-d*P)*(d*C*P-m)}else{let C=d*Math.sqrt(b*b-1);_=H=>{let B=Math.exp(-b*d*H),W=Math.min(C*H,300);return a-B*((m+b*d*g)*Math.sinh(W)+C*g*Math.cosh(W))/C};let P=(m+b*d*g)/C,L=b*d*P-g*C,q=b*d*g-P*C;x=H=>{let B=Math.exp(-b*d*H),W=Math.min(C*H,300);return B*(L*Math.sinh(W)+q*Math.cosh(W))}}let A={calculatedDuration:p&&h||null,velocity:C=>rn(x(C)),next:C=>{if(!p&&b<1){let L=Math.exp(-b*d*C),q=Math.sin(M*C),H=Math.cos(M*C),B=a-L*(T*q+g*H),W=rn(L*(w*q+v*H));return o.done=Math.abs(W)<=i&&Math.abs(a-B)<=s,o.value=o.done?a:B,o}let P=_(C);if(p)o.done=C>=h;else{let L=rn(x(C));o.done=Math.abs(L)<=i&&Math.abs(a-P)<=s}return o.value=o.done?a:P,o},toString:()=>{let C=Math.min(_c(A),2e4),P=Mg(L=>A.next(C*L).value,C,30);return C+"ms "+P},toTransition:()=>{}};return A}var Xe,L5,Vb,O5,B5,Gb=D(()=>{zt();Fb();Tg();VR();Xe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};L5=12;Vb=.001;O5=["duration","bounce"],B5=["stiffness","damping","mass"];bc.applyToOptions=e=>{let t=zR(e,100,bc);return e.ease=t.ease,e.duration=rn(t.duration),e.type="keyframes",e}});function Eg(e,t,n){let i=Math.max(t-z5,0);return Cf(n-e(i),t-i)}var z5,Hb=D(()=>{zt();z5=5});function Gf({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:a,min:o,max:l,restDelta:c=.5,restSpeed:u}){let h=e[0],f={done:!1,value:h},p=v=>o!==void 0&&v<o||l!==void 0&&v>l,m=v=>o===void 0?l:l===void 0||Math.abs(o-v)<Math.abs(l-v)?o:l,b=n*t,g=h+b,d=a===void 0?g:a(g);d!==g&&(b=d-h);let y=v=>-b*Math.exp(-v/i),_=v=>d+y(v),x=v=>{let A=y(v),C=_(v);f.done=Math.abs(A)<=c,f.value=f.done?d:C},M,T,w=v=>{p(f.value)&&(M=v,T=bc({keyframes:[f.value,m(f.value)],velocity:Eg(_,v,f.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return w(0),{calculatedDuration:null,next:v=>{let A=!1;return!T&&M===void 0&&(A=!0,x(v),w(v)),M!==void 0&&v>=M?T.next(v-M):(!A&&x(v),f)}}}var Wb=D(()=>{Gb();Hb()});function V5(e,t,n){let i=[],s=n||Kn.mix||Sg,r=e.length-1;for(let a=0;a<r;a++){let o=s(e[a],e[a+1]);if(t){let l=Array.isArray(t)?t[a]||He:t;o=cs(l,o)}i.push(o)}return i}function GR(e,t,{clamp:n=!0,ease:i,mixer:s}={}){let r=e.length;if(li(r===t.length,"Both input and output ranges must be the same length","range-length"),r===1)return()=>t[0];if(r===2&&t[0]===t[1])return()=>t[1];let a=e[0]===e[1];e[0]>e[r-1]&&(e=[...e].reverse(),t=[...t].reverse());let o=V5(t,i,s),l=o.length,c=u=>{if(a&&u<e[0])return t[0];let h=0;if(l>1)for(;h<e.length-2&&!(u<e[h+1]);h++);let f=Ls(e[h],e[h+1],u);return o[h](f)};return n?u=>c(_n(e[0],e[r-1],u)):c}var HR=D(()=>{zt();Bb()});function WR(e,t){let n=e[e.length-1];for(let i=1;i<=t;i++){let s=Ls(0,t,i);e.push(qt(n,1,s))}}var XR=D(()=>{zt();qi()});function qR(e){let t=[0];return WR(t,e.length-1),t}var YR=D(()=>{XR()});function ZR(e,t){return e.map(n=>n*t)}var KR=D(()=>{});function k5(e,t){return e.map(()=>t||Uf).splice(0,e.length-1)}function Mo({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){let s=Tb(i)?i.map(ug):ug(i),r={done:!1,value:t[0]},a=ZR(n&&n.length===t.length?n:qR(t),e),o=GR(a,t,{ease:Array.isArray(s)?s:k5(t,s)});return{calculatedDuration:e,next:l=>(r.value=o(l),r.done=l>=e,r)}}var Xb=D(()=>{zt();HR();YR();KR()});function Da(e,{repeat:t,repeatType:n="loop"},i,s=1){let r=e.filter(G5),o=s<0||t&&n!=="loop"&&t%2===1?0:r.length-1;return!o||i===void 0?r[o]:i}var G5,Hf=D(()=>{G5=e=>e!==null});function Ag(e){typeof e.type=="string"&&(e.type=H5[e.type])}var H5,qb=D(()=>{Wb();Xb();Gb();H5={decay:Gf,inertia:Gf,tween:Mo,keyframes:Mo,spring:bc}});var Pa,wg=D(()=>{Pa=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}});var W5,Sr,Cg=D(()=>{zt();_r();Bb();FR();Wb();Xb();Tg();Hb();Hf();qb();wg();W5=e=>e/100,Sr=class extends Pa{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:n}=this.options;n&&n.updatedAt!==We.now()&&this.tick(We.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){let{options:t}=this;Ag(t);let{type:n=Mo,repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:a=0}=t,{keyframes:o}=t,l=n||Mo;l!==Mo&&typeof o[0]!="number"&&(this.mixKeyframes=cs(W5,Sg(o[0],o[1])),o=[0,100]);let c=l({...t,keyframes:o});r==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=_c(c));let{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+s,this.totalDuration=this.resolvedDuration*(i+1)-s,this.generator=c}updateTime(t){let n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){let{generator:i,totalDuration:s,mixKeyframes:r,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);let{delay:c=0,keyframes:u,repeat:h,repeatType:f,repeatDelay:p,type:m,onUpdate:b,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-s/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);let d=this.currentTime-c*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?d<0:d>s;this.currentTime=Math.max(d,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let _=this.currentTime,x=i;if(h){let v=Math.min(this.currentTime,s)/o,A=Math.floor(v),C=v%1;!C&&v>=1&&(C=1),C===1&&A--,A=Math.min(A,h+1),!!(A%2)&&(f==="reverse"?(C=1-C,p&&(C-=p/o)):f==="mirror"&&(x=a)),_=_n(0,1,C)*o}let M;y?(this.delayState.value=u[0],M=this.delayState):M=x.next(_),r&&!y&&(M.value=r(M.value));let{done:T}=M;!y&&l!==null&&(T=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);let w=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return w&&m!==Gf&&(M.value=Da(u,this.options,g,this.speed)),b&&b(M.value),w&&this.finish(),M}then(t,n){return this.finished.then(t,n)}get duration(){return Rn(this.calculatedDuration)}get iterationDuration(){let{delay:t=0}=this.options||{};return this.duration+Rn(t)}get time(){return Rn(this.currentTime)}set time(t){t=rn(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){let t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);let n=this.generator.next(t).value;return Eg(i=>this.generator.next(i).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){let n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(We.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=Rn(this.currentTime))}play(){if(this.isStopped)return;let{driver:t=BR,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),this.options.onPlay?.();let i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(We.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}});function jR(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var JR=D(()=>{});function Rg(e){return e.includes("scale")?1:0}function Dg(e,t){if(!e||e==="none")return Rg(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),i,s;if(n)i=q5,s=n;else{let o=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=X5,s=o}if(!s)return Rg(t);let r=i[t],a=s[1].split(",").map(Y5);return typeof r=="function"?r(a):a[r]}function Y5(e){return parseFloat(e.trim())}var To,Yb,X5,Zb,QR,$R,t3,q5,e3,Kb=D(()=>{To=e=>e*180/Math.PI,Yb=e=>{let t=To(Math.atan2(e[1],e[0]));return Zb(t)},X5={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Yb,rotateZ:Yb,skewX:e=>To(Math.atan(e[1])),skewY:e=>To(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Zb=e=>(e=e%360,e<0&&(e+=360),e),QR=Yb,$R=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),t3=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),q5={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:$R,scaleY:t3,scale:e=>($R(e)+t3(e))/2,rotateX:e=>Zb(To(Math.atan2(e[6],e[5]))),rotateY:e=>Zb(To(Math.atan2(-e[2],e[0]))),rotateZ:QR,rotate:QR,skewX:e=>To(Math.atan(e[4])),skewY:e=>To(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};e3=(e,t)=>{let{transform:n="none"}=getComputedStyle(e);return Dg(n,t)}});var Fs,Yi,fs=D(()=>{Fs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Yi=new Set([...Fs,"pathRotation"])});function n3(e){let t=[];return K5.forEach(n=>{let i=e.getValue(n);i!==void 0&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),t}var jb,Z5,K5,Mr,Jb=D(()=>{Kb();fs();Aa();Os();jb=e=>e===Us||e===vt,Z5=new Set(["x","y","z"]),K5=Fs.filter(e=>!Z5.has(e));Mr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:i})=>{let s=e.max-e.min;return i==="border-box"?s:s-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:i})=>{let s=e.max-e.min;return i==="border-box"?s:s-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Dg(t,"x"),y:(e,{transform:t})=>Dg(t,"y")};Mr.translateX=Mr.x;Mr.translateY=Mr.y});function i3(){if($b){let e=Array.from(Eo).filter(i=>i.needsMeasurement),t=new Set(e.map(i=>i.element)),n=new Map;t.forEach(i=>{let s=n3(i);s.length&&(n.set(i,s),i.render())}),e.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();let s=n.get(i);s&&s.forEach(([r,a])=>{i.getValue(r)?.set(a)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}$b=!1,Qb=!1,Eo.forEach(e=>e.complete(tS)),Eo.clear()}function s3(){Eo.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&($b=!0)})}function r3(){tS=!0,s3(),i3(),tS=!1}var Eo,Qb,$b,tS,Na,Pg=D(()=>{JR();Jb();us();Eo=new Set,Qb=!1,$b=!1,tS=!1;Na=class{constructor(t,n,i,s,r,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=i,this.motionValue=s,this.element=r,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(Eo.add(this),Qb||(Qb=!0,Ht.read(s3),Ht.resolveKeyframes(i3))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:t,name:n,element:i,motionValue:s}=this;if(t[0]===null){let r=s?.get(),a=t[t.length-1];if(r!==void 0)t[0]=r;else if(i&&n){let o=i.readValue(n,a);o!=null&&(t[0]=o)}t[0]===void 0&&(t[0]=a),s&&r===void 0&&s.set(t[0])}jR(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Eo.delete(this)}cancel(){this.state==="scheduled"&&(Eo.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}});var a3,o3=D(()=>{a3=e=>e.startsWith("--")});function Ng(e,t,n){a3(t)?e.style.setProperty(t,n):e.style[t]=n}var eS=D(()=>{o3()});var l3,c3=D(()=>{l3={}});function Lg(e,t){let n=wf(e);return()=>l3[t]??n()}var nS=D(()=>{zt();c3()});var u3,f3=D(()=>{nS();u3=Lg(()=>window.ScrollTimeline!==void 0,"scrollTimeline")});var Ug,iS=D(()=>{nS();Ug=Lg(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing")});var Ao,sS=D(()=>{Ao=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`});var rS,h3=D(()=>{sS();rS={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ao([0,.65,.55,1]),circOut:Ao([.55,0,1,.45]),backIn:Ao([.31,.01,.66,-.59]),backOut:Ao([.33,1.53,.69,.99])}});function aS(e,t){if(e)return typeof e=="function"?Ug()?Mg(e,t):"ease-out":If(e)?Ao(e):Array.isArray(e)?e.map(n=>aS(n,t)||rS.easeOut):rS[e]}var d3=D(()=>{zt();iS();Fb();sS();h3()});function p3(e,t,n,{delay:i=0,duration:s=300,repeat:r=0,repeatType:a="loop",ease:o="easeOut",times:l}={},c=void 0){let u={[t]:n};l&&(u.offset=l);let h=aS(o,s);Array.isArray(h)&&(u.easing=h);let f={delay:i,duration:s,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:r+1,direction:a==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),e.animate(u,f)}var m3=D(()=>{d3()});function Ig(e){return typeof e=="function"&&"applyToOptions"in e}var oS=D(()=>{});function g3({type:e,...t}){return Ig(e)&&Ug()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}var y3=D(()=>{iS();oS()});var Sc,lS=D(()=>{zt();eS();f3();Hf();wg();m3();y3();Sc=class extends Pa{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;let{element:n,name:i,keyframes:s,pseudoElement:r,allowFlatten:a=!1,finalKeyframe:o,onComplete:l}=t;this.isPseudoElement=!!r,this.allowFlatten=a,this.options=t,li(typeof t.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");let c=g3(t);this.animation=p3(n,i,s,c,r),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){let u=Da(s,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(u),Ng(n,i,u),this.animation.cancel()}l?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let t=this.options?.element;!this.isPseudoElement&&t?.isConnected&&this.animation.commitStyles?.()}get duration(){let t=this.animation.effect?.getComputedTiming?.().duration||0;return Rn(Number(t))}get iterationDuration(){let{delay:t=0}=this.options||{};return this.duration+Rn(t)}get time(){return Rn(Number(this.animation.currentTime)||0)}set time(t){let n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=rn(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:i,observe:s}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&u3()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),He):s(this)}}});function j5(e){return e in x3}function v3(e){typeof e.ease=="string"&&j5(e.ease)&&(e.ease=x3[e.ease])}var x3,_3=D(()=>{zt();x3={anticipate:Df,backInOut:Rf,circInOut:Lf}});var cS,Og,b3=D(()=>{zt();_r();eS();Cg();lS();qb();_3();cS=10,Og=class extends Sc{constructor(t){v3(t),Ag(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){let{motionValue:n,onUpdate:i,onComplete:s,element:r,...a}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}let o=new Sr({...a,autoplay:!1}),l=Math.max(cS,We.now()-this.startTime),c=_n(0,cS,l-cS),u=o.sample(l).value,{name:h}=this.options;r&&h&&Ng(r,h,u),n.setWithVelocity(o.sample(Math.max(0,l-c)).value,u,c),o.stop()}}});var uS,S3=D(()=>{Bs();uS=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(bn.test(e)||e==="0")&&!e.startsWith("url("))});function J5(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function M3(e,t,n,i){let s=e[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;let r=e[e.length-1],a=uS(s,t),o=uS(r,t);return xr(a===o,`You are trying to animate ${t} from "${s}" to "${r}". "${a?r:s}" is not an animatable value.`,"value-not-animatable"),!a||!o?!1:J5(e)||(n==="spring"||Ig(n))&&i}var T3=D(()=>{zt();oS();S3()});function Wf(e){e.duration=0,e.type="keyframes"}var fS=D(()=>{});var Bg,hS=D(()=>{Bg=new Set(["opacity","clipPath","filter","transform","backgroundColor"])});function E3(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&Q5.test(e[t]))return!0;return!1}var Q5,A3=D(()=>{Q5=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/});function w3(e){let{motionValue:t,name:n,repeatDelay:i,repeatType:s,damping:r,type:a,keyframes:o}=e,l=t?.owner?.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;let{onUpdate:c,transformTemplate:u}=t.owner.getProps();return tk()&&n&&(Bg.has(n)||$5.has(n)&&E3(o))&&(n!=="transform"||!u)&&!c&&!i&&s!=="mirror"&&r!==0&&a!=="inertia"}var $5,tk,C3=D(()=>{zt();hS();A3();$5=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),tk=wf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"))});var ek,Fg,R3=D(()=>{zt();_r();Cg();Hf();Pg();b3();T3();fS();wg();C3();ek=40,Fg=class extends Pa{constructor({autoplay:t=!0,delay:n=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:a="loop",keyframes:o,name:l,motionValue:c,element:u,...h}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=We.now();let f={autoplay:t,delay:n,type:i,repeat:s,repeatDelay:r,repeatType:a,name:l,motionValue:c,element:u,...h},p=u?.KeyframeResolver||Na;this.keyframeResolver=new p(o,(m,b,g)=>this.onKeyframesResolved(m,b,f,!g),l,c,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,n,i,s){this.keyframeResolver=void 0;let{name:r,type:a,velocity:o,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=We.now();let h=!0;M3(t,r,a,o)||(h=!1,(Kn.instantAnimations||!l)&&u?.(Da(t,i,n)),t[0]=t[t.length-1],Wf(i),i.repeat=0);let p={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>ek?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:t},m=h&&!c&&w3(p),b=p.motionValue?.owner?.current,g;if(m)try{g=new Og({...p,element:b})}catch{g=new Sr(p)}else g=new Sr(p);g.finished.then(()=>{this.notifyFinished()}).catch(He),this.pendingTimeline&&(this.stopTimeline=g.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=g}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),r3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}});function zg(e,t,n,i=0,s=1){let r=Array.from(e).sort((c,u)=>c.sortNodePosition(u)).indexOf(t),a=e.size,o=(a-1)*i;return typeof n=="function"?n(r,a):s===1?r*i:o-r*i}var dS=D(()=>{});function hs(e,t){return new pS(e,t)}var D3,nk,P3,pS,Mc=D(()=>{zt();_r();us();D3=30,nk=e=>!isNaN(parseFloat(e)),P3={current:void 0},pS=class{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{let s=We.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let r of this.dependents)r.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=We.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=nk(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new vr);let i=this.events[t].add(n);return t==="change"?()=>{i(),Ht.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(let t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return P3.current&&P3.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let t=We.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>D3)return 0;let n=Math.min(this.updatedAt-this.prevUpdatedAt,D3);return Cf(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}});function wo(e,t){if(e?.inherit&&t){let{inherit:n,...i}=e;return{...t,...i}}return e}var Vg=D(()=>{});function Tc(e,t){let n=e?.[t]??e?.default??e;return n!==e?wo(n,e):n}var kg=D(()=>{Vg()});var ik,sk,rk,ak,N3,L3=D(()=>{fs();ik={type:"spring",stiffness:500,damping:25,restSpeed:10},sk=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),rk={type:"keyframes",duration:.8},ak={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},N3=(e,{keyframes:t})=>t.length>2?rk:Yi.has(e)?e.startsWith("scale")?sk(t[1]):ik:ak});function U3(e){for(let t in e)if(!ok.has(t))return!0;return!1}var ok,I3=D(()=>{ok=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"])});var Co,Gg=D(()=>{zt();R3();Cg();kg();fS();L3();Hf();I3();us();Co=(e,t,n,i={},s,r)=>a=>{let o=Tc(i,e)||{},l=o.delay||i.delay||0,{elapsed:c=0}=i;c=c-rn(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...o,delay:-c,onUpdate:f=>{t.set(f),o.onUpdate&&o.onUpdate(f)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:e,motionValue:t,element:r?void 0:s};U3(o)||Object.assign(u,N3(e,u)),u.duration&&(u.duration=rn(u.duration)),u.repeatDelay&&(u.repeatDelay=rn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Wf(u),u.delay===0&&(h=!0)),(Kn.instantAnimations||Kn.skipAnimations||s?.shouldSkipAnimations||o.skipAnimations)&&(h=!0,Wf(u),u.delay=0),u.allowFlatten=!o.type&&!o.ease,h&&!r&&t.get()!==void 0){let f=Da(u.keyframes,o);if(f!==void 0){Ht.update(()=>{u.onUpdate(f),u.onComplete()});return}}return o.isSync?new Sr(u):new Fg(u)}});function ck(e){let t=lk.exec(e);if(!t)return[,];let[,n,i,s]=t;return[`--${n??i}`,s]}function mS(e,t,n=1){li(n<=uk,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,"max-css-var-depth");let[i,s]=ck(e);if(!i)return;let r=window.getComputedStyle(t).getPropertyValue(i);if(r){let a=r.trim();return Tf(a)?parseFloat(a):a}return mc(s)?mS(s,t,n+1):s}var lk,uk,O3=D(()=>{zt();gc();lk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;uk=4});function B3(e){let t=[{},{}];return e?.values.forEach((n,i)=>{t[0][i]=n.get(),t[1][i]=n.getVelocity()}),t}function Ro(e,t,n,i){if(typeof t=="function"){let[s,r]=B3(i);t=t(n!==void 0?n:e.custom,s,r)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){let[s,r]=B3(i);t=t(n!==void 0?n:e.custom,s,r)}return t}var Hg=D(()=>{});function Ri(e,t,n){let i=e.getProps();return Ro(i,t,n!==void 0?n:i.custom,e)}var Ec=D(()=>{Hg()});var Wg,gS=D(()=>{fs();Wg=new Set(["width","height","top","left","right","bottom",...Fs])});var Xf,yS=D(()=>{Xf=e=>Array.isArray(e)});function fk(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,hs(n))}function hk(e){return Xf(e)?e[e.length-1]||0:e}function F3(e,t){let n=Ri(e,t),{transitionEnd:i={},transition:s={},...r}=n||{};r={...r,...i};for(let a in r){let o=hk(r[a]);fk(e,a,o)}}var z3=D(()=>{Mc();Ec();yS()});var me,zs=D(()=>{me=e=>!!(e&&e.getVelocity)});function V3(e){return!!(me(e)&&e.add)}var k3=D(()=>{zs()});function Ac(e,t){let n=e.getValue("willChange");if(V3(n))return n.add(t);if(!n&&Kn.WillChange){let i=new Kn.WillChange("auto");e.addValue("willChange",i),i.add(t)}}var xS=D(()=>{zt();k3()});function wc(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}var Xg=D(()=>{});var G3,qf,vS=D(()=>{Xg();G3="framerAppearId",qf="data-"+wc(G3)});function qg(e){return e.props[qf]}var _S=D(()=>{vS()});function dk({protectedKeys:e,needsAnimating:t},n){let i=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,i}function Yg(e,t,{delay:n=0,transitionOverride:i,type:s}={}){let{transition:r,transitionEnd:a,...o}=t,l=e.getDefaultTransition();r=r?wo(r,l):l;let c=r?.reduceMotion,u=r?.skipAnimations;i&&(r=i);let h=[],f=s&&e.animationState&&e.animationState.getState()[s],p=r?.path;p&&p.animateVisualElement(e,o,r,n,h);for(let m in o){let b=e.getValue(m,e.latestValues[m]??null),g=o[m];if(g===void 0||f&&dk(f,m))continue;let d={delay:n,...Tc(r||{},m)};u&&(d.skipAnimations=!0);let y=b.get();if(y!==void 0&&!b.isAnimating()&&!Array.isArray(g)&&g===y&&!d.velocity){Ht.update(()=>b.set(g));continue}let _=!1;if(window.MotionHandoffAnimation){let T=qg(e);if(T){let w=window.MotionHandoffAnimation(T,m,Ht);w!==null&&(d.startTime=w,_=!0)}}Ac(e,m);let x=c??e.shouldReduceMotion;b.start(Co(m,b,g,x&&Wg.has(m)?{type:!1}:d,e,_));let M=b.animation;M&&h.push(M)}if(a){let m=()=>Ht.update(()=>{a&&F3(e,a)});h.length?Promise.all(h).then(m):m()}return h}var bS=D(()=>{kg();Vg();gS();z3();xS();_S();Gg();us()});function Zg(e,t,n={}){let i=Ri(e,t,n.type==="exit"?e.presenceContext?.custom:void 0),{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);let r=i?()=>Promise.all(Yg(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(l=0)=>{let{delayChildren:c=0,staggerChildren:u,staggerDirection:h}=s;return pk(e,t,l,c,u,h,n)}:()=>Promise.resolve(),{when:o}=s;if(o){let[l,c]=o==="beforeChildren"?[r,a]:[a,r];return l().then(()=>c())}else return Promise.all([r(),a(n.delay)])}function pk(e,t,n=0,i=0,s=0,r=1,a){let o=[];for(let l of e.variantChildren)l.notify("AnimationStart",t),o.push(Zg(l,t,{...a,delay:n+(typeof i=="function"?0:i)+zg(e.variantChildren,l,i,s,r)}).then(()=>l.notify("AnimationComplete",t)));return Promise.all(o)}var H3=D(()=>{Ec();dS();bS()});function W3(e,t,n={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){let s=t.map(r=>Zg(e,r,n));i=Promise.all(s)}else if(typeof t=="string")i=Zg(e,t,n);else{let s=typeof t=="function"?Ri(e,t,n.custom):t;i=Promise.all(Yg(e,s,n))}return i.then(()=>{e.notify("AnimationComplete",t)})}var X3=D(()=>{Ec();bS();H3()});var q3,Y3=D(()=>{q3={test:e=>e==="auto",parse:e=>e}});var Kg,SS=D(()=>{Kg=e=>t=>t.test(e)});var MS,TS,ES=D(()=>{Y3();Aa();Os();SS();MS=[Us,vt,Hn,Xi,Pb,Db,q3],TS=e=>MS.find(Kg(e))});function Z3(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Af(e):!0}var K3=D(()=>{zt()});function gk(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;let[i]=n.match(yc)||[];if(!i)return e;let s=n.replace(i,""),r=mk.has(t)?1:0;return i!==n&&(r*=100),t+"("+r+s+")"}var mk,yk,Yf,AS=D(()=>{Bs();mg();mk=new Set(["brightness","contrast","saturate","opacity"]);yk=/\b([a-z-]*)\(.*?\)/gu,Yf={...bn,getAnimatableNone:e=>{let t=e.match(yk);return t?t.map(gk).join(" "):e}}});var Zf,wS=D(()=>{Bs();Zf={...bn,getAnimatableNone:e=>{let t=bn.parse(e);return bn.createTransformer(e)(t.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}}});var CS,j3=D(()=>{Aa();CS={...Us,transform:Math.round}});var J3,Q3=D(()=>{Aa();Os();J3={rotate:Xi,pathRotation:Xi,rotateX:Xi,rotateY:Xi,rotateZ:Xi,scale:Ff,scaleX:Ff,scaleY:Ff,scaleZ:Ff,skew:Xi,skewX:Xi,skewY:Xi,distance:vt,translateX:vt,translateY:vt,translateZ:vt,x:vt,y:vt,z:vt,perspective:vt,transformPerspective:vt,opacity:br,originX:vg,originY:vg,originZ:vt}});var Do,jg=D(()=>{j3();Aa();Os();Q3();Do={borderWidth:vt,borderTopWidth:vt,borderRightWidth:vt,borderBottomWidth:vt,borderLeftWidth:vt,borderRadius:vt,borderTopLeftRadius:vt,borderTopRightRadius:vt,borderBottomRightRadius:vt,borderBottomLeftRadius:vt,width:vt,maxWidth:vt,height:vt,maxHeight:vt,top:vt,right:vt,bottom:vt,left:vt,inset:vt,insetBlock:vt,insetBlockStart:vt,insetBlockEnd:vt,insetInline:vt,insetInlineStart:vt,insetInlineEnd:vt,padding:vt,paddingTop:vt,paddingRight:vt,paddingBottom:vt,paddingLeft:vt,paddingBlock:vt,paddingBlockStart:vt,paddingBlockEnd:vt,paddingInline:vt,paddingInlineStart:vt,paddingInlineEnd:vt,margin:vt,marginTop:vt,marginRight:vt,marginBottom:vt,marginLeft:vt,marginBlock:vt,marginBlockStart:vt,marginBlockEnd:vt,marginInline:vt,marginInlineStart:vt,marginInlineEnd:vt,fontSize:vt,backgroundPositionX:vt,backgroundPositionY:vt,...J3,zIndex:CS,fillOpacity:br,strokeOpacity:br,numOctaves:CS}});var xk,Jg,RS=D(()=>{kf();AS();wS();jg();xk={...Do,color:ze,backgroundColor:ze,outlineColor:ze,fill:ze,stroke:ze,borderColor:ze,borderTopColor:ze,borderRightColor:ze,borderBottomColor:ze,borderLeftColor:ze,filter:Yf,WebkitFilter:Yf,mask:Zf,WebkitMask:Zf},Jg=e=>xk[e]});function Qg(e,t){let n=Jg(e);return vk.has(n)||(n=bn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var vk,DS=D(()=>{Bs();AS();wS();RS();vk=new Set([Yf,Zf])});function $3(e,t,n){let i=0,s;for(;i<e.length&&!s;){let r=e[i];typeof r=="string"&&!_k.has(r)&&Ra(r).values.length&&(s=e[i]),i++}if(s&&n)for(let r of t)e[r]=Qg(n,s)}var _k,tD=D(()=>{Bs();DS();_k=new Set(["auto","none","0"])});var $g,eD=D(()=>{gS();ES();O3();gc();Pg();K3();tD();Jb();$g=class extends Na{constructor(t,n,i,s,r){super(t,n,i,s,r,!0)}readKeyframes(){let{unresolvedKeyframes:t,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<t.length;u++){let h=t[u];if(typeof h=="string"&&(h=h.trim(),mc(h))){let f=mS(h,n.current);f!==void 0&&(t[u]=f),u===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Wg.has(i)||t.length!==2)return;let[s,r]=t,a=TS(s),o=TS(r),l=wb(s),c=wb(r);if(l!==c&&Mr[i]){this.needsMeasurement=!0;return}if(a!==o)if(jb(a)&&jb(o))for(let u=0;u<t.length;u++){let h=t[u];typeof h=="string"&&(t[u]=parseFloat(h))}else Mr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:t,name:n}=this,i=[];for(let s=0;s<t.length;s++)(t[s]===null||Z3(t[s]))&&i.push(s);i.length&&$3(t,i,n)}measureInitialState(){let{element:t,unresolvedKeyframes:n,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mr[i](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;let s=n[n.length-1];s!==void 0&&t.getValue(i,s).jump(s,!1)}measureEndState(){let{element:t,name:n,unresolvedKeyframes:i}=this;if(!t||!t.current)return;let s=t.getValue(n);s&&s.jump(this.measuredOrigin,!1);let r=i.length-1,a=i[r];i[r]=Mr[n](t.measureViewportBox(),window.getComputedStyle(t.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([o,l])=>{t.getValue(o).set(l)}),this.resolveNoneKeyframes()}}});var Kf,PS=D(()=>{Kf=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"]});function t0(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let i=document;t&&(i=t.current);let s=n?.[e]??i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e).filter(i=>i!=null)}var NS=D(()=>{});var jf,LS=D(()=>{jf=(e,t)=>t&&typeof e=="number"?t.transform(e):e});function nD(e){return Ef(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}var iD=D(()=>{zt()});var Po,bk,e0=D(()=>{Ab();({schedule:Po,cancel:bk}=fg(queueMicrotask,!1))});function n0(){return Zi.x||Zi.y}var Zi,i0=D(()=>{Zi={x:!1,y:!1}});function US(e){return e==="x"||e==="y"?Zi[e]?null:(Zi[e]=!0,()=>{Zi[e]=!1}):Zi.x||Zi.y?null:(Zi.x=Zi.y=!0,()=>{Zi.x=Zi.y=!1})}var sD=D(()=>{i0()});function s0(e,t){let n=t0(e),i=new AbortController,s={passive:!0,...t,signal:i.signal};return[n,s,()=>i.abort()]}var IS=D(()=>{NS()});function Sk(e){return!(e.pointerType==="touch"||n0())}function OS(e,t,n={}){let[i,s,r]=s0(e,n);return i.forEach(a=>{let o=!1,l=!1,c,u=()=>{a.removeEventListener("pointerleave",m)},h=g=>{c&&(c(g),c=void 0),u()},f=g=>{o=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),l&&(l=!1,h(g))},p=()=>{o=!0,window.addEventListener("pointerup",f,s),window.addEventListener("pointercancel",f,s)},m=g=>{if(g.pointerType!=="touch"){if(o){l=!0;return}h(g)}},b=g=>{if(!Sk(g))return;l=!1;let d=t(a,g);typeof d=="function"&&(c=d,a.addEventListener("pointerleave",m,s))};a.addEventListener("pointerenter",b,s),a.addEventListener("pointerdown",p,s)}),r}var rD=D(()=>{i0();IS()});var BS,aD=D(()=>{BS=(e,t)=>t?e===t?!0:BS(e,t.parentElement):!1});var No,FS=D(()=>{No=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1});function zS(e){return Mk.has(e.tagName)||e.isContentEditable===!0}function VS(e){return Tk.has(e.tagName)||e.isContentEditable===!0}var Mk,Tk,kS=D(()=>{Mk=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);Tk=new Set(["INPUT","SELECT","TEXTAREA"])});var Cc,GS=D(()=>{Cc=new WeakSet});function oD(e){return t=>{t.key==="Enter"&&e(t)}}function HS(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}var lD,cD=D(()=>{GS();lD=(e,t)=>{let n=e.currentTarget;if(!n)return;let i=oD(()=>{if(Cc.has(n))return;HS(n,"down");let s=oD(()=>{HS(n,"up")}),r=()=>HS(n,"cancel");n.addEventListener("keyup",s,t),n.addEventListener("blur",r,t)});n.addEventListener("keydown",i,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),t)}});function uD(e){return No(e)&&!n0()}function WS(e,t,n={}){let[i,s,r]=s0(e,n),a=o=>{let l=o.currentTarget;if(!uD(o)||fD.has(o))return;Cc.add(l),n.stopPropagation&&fD.add(o);let c=t(l,o),u={...s,capture:!0},h=(m,b)=>{window.removeEventListener("pointerup",f,u),window.removeEventListener("pointercancel",p,u),Cc.has(l)&&Cc.delete(l),uD(m)&&typeof c=="function"&&c(m,{success:b})},f=m=>{h(m,l===window||l===document||n.useGlobalTarget||BS(l,m.target))},p=m=>{h(m,!1)};window.addEventListener("pointerup",f,u),window.addEventListener("pointercancel",p,u)};return i.forEach(o=>{(n.useGlobalTarget?window:o).addEventListener("pointerdown",a,s),nD(o)&&(o.addEventListener("focus",c=>lD(c,s)),!zS(o)&&!o.hasAttribute("tabindex")&&(o.tabIndex=0))}),r}var fD,hD=D(()=>{iD();i0();aD();FS();IS();kS();cD();GS();fD=new WeakSet});function Rc(e){return Ef(e)&&"ownerSVGElement"in e}var r0=D(()=>{zt()});function wk({target:e,borderBoxSize:t}){a0.get(e)?.forEach(n=>{n(e,{get width(){return Ek(e,t)},get height(){return Ak(e,t)}})})}function Ck(e){e.forEach(wk)}function Rk(){typeof ResizeObserver>"u"||(o0=new ResizeObserver(Ck))}function pD(e,t){o0||Rk();let n=t0(e);return n.forEach(i=>{let s=a0.get(i);s||(s=new Set,a0.set(i,s)),s.add(t),o0?.observe(i)}),()=>{n.forEach(i=>{let s=a0.get(i);s?.delete(t),s?.size||o0?.unobserve(i)})}}var a0,o0,dD,Ek,Ak,mD=D(()=>{r0();NS();a0=new WeakMap,dD=(e,t,n)=>(i,s)=>s&&s[0]?s[0][e+"Size"]:Rc(i)&&"getBBox"in i?i.getBBox()[t]:i[n],Ek=dD("inline","width","offsetWidth"),Ak=dD("block","height","offsetHeight")});function Dk(){Dc=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};l0.forEach(t=>t(e))},window.addEventListener("resize",Dc)}function gD(e){return l0.add(e),Dc||Dk(),()=>{l0.delete(e),!l0.size&&typeof Dc=="function"&&(window.removeEventListener("resize",Dc),Dc=void 0)}}var l0,Dc,yD=D(()=>{l0=new Set});function c0(e,t){return typeof e=="function"?gD(e):pD(e,t)}var xD=D(()=>{mD();yD()});var Lo,vD=D(()=>{Lo={value:null,addProjectionMetrics:null}});function _D(e){return Rc(e)&&e.tagName==="svg"}var bD=D(()=>{r0()});var Pk,SD,MD=D(()=>{kf();Bs();ES();SS();Pk=[...MS,ze,bn],SD=e=>Pk.find(Kg(e))});var XS,La,qS,Ve,Jf=D(()=>{XS=()=>({translate:0,scale:1,origin:0,originPoint:0}),La=()=>({x:XS(),y:XS()}),qS=()=>({min:0,max:0}),Ve=()=>({x:qS(),y:qS()})});var TD,ED=D(()=>{TD=new WeakMap});function Tr(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}var u0=D(()=>{});function Vs(e){return typeof e=="string"||Array.isArray(e)}var Qf=D(()=>{});var f0,$f,h0=D(()=>{f0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],$f=["initial",...f0]});function Ua(e){return Tr(e.animate)||$f.some(t=>Vs(e[t]))}function th(e){return!!(Ua(e)||e.variants)}var YS=D(()=>{u0();Qf();h0()});function AD(e,t,n){for(let i in t){let s=t[i],r=n[i];if(me(s))e.addValue(i,s);else if(me(r))e.addValue(i,hs(s,{owner:e}));else if(r!==s)if(e.hasValue(i)){let a=e.getValue(i);a.liveStyle===!0?a.jump(s):a.hasAnimated||a.set(s)}else{let a=e.getStaticValue(i);e.addValue(i,hs(a!==void 0?a:s,{owner:e}))}}for(let i in n)t[i]===void 0&&e.removeValue(i);return t}var wD=D(()=>{Mc();zs()});var eh,d0,ZS=D(()=>{eh={current:null},d0={current:!1}});function CD(){if(d0.current=!0,!!Nk)if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>eh.current=e.matches;e.addEventListener("change",t),t()}else eh.current=!1}var Nk,RD=D(()=>{ZS();Nk=typeof window<"u"});function ih(e){p0=e}function KS(){return p0}var DD,p0,nh,jS=D(()=>{zt();Pg();lS();hS();e0();_r();Jf();Mc();Bs();DS();MD();zs();ED();YS();fs();wD();RD();Hg();ZS();us();DD=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],p0={};nh=class{scrapeMotionValuesFromProps(t,n,i){return{}}constructor({parent:t,props:n,presenceContext:i,reducedMotionConfig:s,skipAnimations:r,blockInitialAnimation:a,visualState:o},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Na,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let p=We.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,Ht.render(this.render,!1,!0))};let{latestValues:c,renderState:u}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.skipAnimationsConfig=r,this.options=l,this.blockInitialAnimation=!!a,this.isControllingVariants=Ua(n),this.isVariantNode=th(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);let{willChange:h,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(let p in f){let m=f[p];c[p]!==void 0&&me(m)&&m.set(c[p])}}mount(t){if(this.hasBeenMounted)for(let n in this.initialValues)this.values.get(n)?.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=t,TD.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(d0.current||CD(),this.shouldReduceMotion=eh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),ci(this.notifyUpdate),ci(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let t in this.events)this.events[t].clear();for(let t in this.features){let n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&Bg.has(t)&&this.current instanceof HTMLElement){let{factory:a,keyframes:o,times:l,ease:c,duration:u}=n.accelerate,h=new Sc({element:this.current,name:t,keyframes:o,times:l,ease:c,duration:rn(u)}),f=a(h);this.valueSubscriptions.set(t,()=>{f(),h.cancel()});return}let i=Yi.has(t);i&&this.onBindTransform&&this.onBindTransform();let s=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&Ht.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),r;typeof window<"u"&&window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{s(),r&&r()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in p0){let n=p0[t];if(!n)continue;let{isEnabled:i,Feature:s}=n;if(!this.features[t]&&s&&i(this.props)&&(this.features[t]=new s(this)),this.features[t]){let r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ve()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<DD.length;i++){let s=DD[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);let r="on"+s,a=t[r];a&&(this.propEventSubscriptions[s]=this.on(s,a))}this.prevMotionValues=AD(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){let n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){let i=this.values.get(t);n!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);let n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&n!==void 0&&(i=hs(n===null?void 0:n,{owner:this}),this.addValue(t,i)),i}readValue(t,n){let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Tf(i)||Af(i))?i=parseFloat(i):!SD(i)&&bn.test(n)&&(i=Qg(t,n)),this.setBaseTarget(t,me(i)?i.get():i)),me(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){let{initial:n}=this.props,i;if(typeof n=="string"||typeof n=="object"){let r=Ro(this.props,n,this.presenceContext?.custom);r&&(i=r[t])}if(n&&i!==void 0)return i;let s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!me(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new vr),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Po.render(this.render)}}});var Pc,JS=D(()=>{zs();eD();jS();Pc=class extends nh{constructor(){super(...arguments),this.KeyframeResolver=$g}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){let i=t.style;return i?i[n]:void 0}removeValueFromRenderState(t,{vars:n,style:i}){delete n[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:t}=this.props;me(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}});var Sn,PD=D(()=>{Sn=class{constructor(t){this.isMounted=!1,this.node=t}update(){}}});function sh({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}function QS({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function $S(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}var tM=D(()=>{});function eM(e){return e===void 0||e===1}function m0({scale:e,scaleX:t,scaleY:n}){return!eM(e)||!eM(t)||!eM(n)}function Er(e){return m0(e)||nM(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function nM(e){return ND(e.x)||ND(e.y)}function ND(e){return e&&e!=="0%"}var iM=D(()=>{});function rh(e,t,n){let i=e-n,s=t*i;return n+s}function LD(e,t,n,i,s){return s!==void 0&&(e=rh(e,s,i)),rh(e,n,i)+t}function sM(e,t=0,n=1,i,s){e.min=LD(e.min,t,n,i,s),e.max=LD(e.max,t,n,i,s)}function rM(e,{x:t,y:n}){sM(e.x,t.translate,t.scale,t.originPoint),sM(e.y,n.translate,n.scale,n.originPoint)}function FD(e,t,n,i=!1){let s=n.length;if(!s)return;t.x=t.y=1;let r,a;for(let o=0;o<s;o++){r=n[o],a=r.projectionDelta;let{visualElement:l}=r.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&(Ki(e.x,-r.scroll.offset.x),Ki(e.y,-r.scroll.offset.y)),a&&(t.x*=a.x.scale,t.y*=a.y.scale,rM(e,a)),i&&Er(r.latestValues)&&ah(e,r.latestValues,r.layout?.layoutBox))}t.x<ID&&t.x>UD&&(t.x=1),t.y<ID&&t.y>UD&&(t.y=1)}function Ki(e,t){e.min+=t,e.max+=t}function OD(e,t,n,i,s=.5){let r=qt(e.min,e.max,s);sM(e,t,n,r,i)}function BD(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function ah(e,t,n){let i=n??e;OD(e.x,BD(t.x,i.x),t.scaleX,t.scale,t.originX),OD(e.y,BD(t.y,i.y),t.scaleY,t.scale,t.originY)}var UD,ID,g0=D(()=>{qi();iM();UD=.999999999999,ID=1.0000000000001});function y0(e,t){return sh($S(e.getBoundingClientRect(),t))}function aM(e,t,n){let i=y0(e,n),{scroll:s}=t;return s&&(Ki(i.x,s.offset.x),Ki(i.y,s.offset.y)),i}var oM=D(()=>{tM();g0()});function zD(e,t,n){let i="",s=!0;for(let a=0;a<Uk;a++){let o=Fs[a],l=e[o];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(o.startsWith("scale")?1:0);else{let u=parseFloat(l);c=o.startsWith("scale")?u===1:u===0}if(!c||n){let u=jf(l,Do[o]);if(!c){s=!1;let h=Lk[o]||o;i+=`${h}(${u}) `}n&&(t[o]=u)}}let r=e.pathRotation;return r&&(s=!1,i+=`rotate(${jf(r,Do.pathRotation)}) `),i=i.trim(),n?i=n(t,s?"":i):s&&(i="none"),i}var Lk,Uk,VD=D(()=>{LS();jg();fs();Lk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Uk=Fs.length});function Uo(e,t,n){let{style:i,vars:s,transformOrigin:r}=e,a=!1,o=!1;for(let l in t){let c=t[l];if(Yi.has(l)){a=!0;continue}else if(dg(l)){s[l]=c;continue}else{let u=jf(c,Do[l]);l.startsWith("origin")?(o=!0,r[l]=u):i[l]=u}}if(t.transform||(a||n?i.transform=zD(t,e.transform,n):i.transform&&(i.transform="none")),o){let{originX:l="50%",originY:c="50%",originZ:u=0}=r;i.transformOrigin=`${l} ${c} ${u}`}}var x0=D(()=>{LS();jg();fs();gc();VD()});function v0(e,{style:t,vars:n},i,s){let r=e.style,a;for(a in t)r[a]=t[a];s?.applyProjectionStyles(r,i);for(a in n)r.setProperty(a,n[a])}var lM=D(()=>{});function kD(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Nc,GD=D(()=>{Os();Nc={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(vt.test(e))e=parseFloat(e);else return e;let n=kD(e,t.target.x),i=kD(e,t.target.y);return`${n}% ${i}%`}}});var HD,WD=D(()=>{Bs();qi();HD={correct:(e,{treeScale:t,projectionDelta:n})=>{let i=e,s=bn.parse(e);if(s.length>5)return i;let r=bn.createTransformer(e),a=typeof s[0]!="number"?1:0,o=n.x.scale*t.x,l=n.y.scale*t.y;s[0+a]/=o,s[1+a]/=l;let c=qt(o,l,.5);return typeof s[2+a]=="number"&&(s[2+a]/=c),typeof s[3+a]=="number"&&(s[3+a]/=c),r(s)}}});var oh,cM=D(()=>{PS();GD();WD();oh={borderRadius:{...Nc,applyTo:[...Kf]},borderTopLeftRadius:Nc,borderTopRightRadius:Nc,borderBottomLeftRadius:Nc,borderBottomRightRadius:Nc,boxShadow:HD}});function lh(e,{layout:t,layoutId:n}){return Yi.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!oh[e]||e==="opacity")}var uM=D(()=>{fs();cM()});function Io(e,t,n){let i=e.style,s=t?.style,r={};if(!i)return r;for(let a in i)(me(i[a])||s&&me(s[a])||lh(a,e)||n?.getValue(a)?.liveStyle!==void 0)&&(r[a]=i[a]);return r}var _0=D(()=>{zs();uM()});function Ik(e){return window.getComputedStyle(e)}var ch,XD=D(()=>{zt();gc();fs();Kb();oM();JS();x0();lM();_0();ch=class extends Pc{constructor(){super(...arguments),this.type="html",this.renderInstance=v0}mount(t){li(!!t.style,"motion.create() components must forward their ref to a HTML or SVG element","custom-component-ref"),super.mount(t)}readValueFromInstance(t,n){if(Yi.has(n))return this.projection?.isProjecting?Rg(n):e3(t,n);{let i=Ik(t),s=(dg(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return y0(t,n)}build(t,n,i){Uo(t,n,i.transformTemplate)}scrapeMotionValuesFromProps(t,n,i){return Io(t,n,i)}}});function qD(e,t,n=1,i=0,s=!0){e.pathLength=1;let r=s?Ok:Bk;e[r.offset]=`${-i}`,e[r.array]=`${t} ${n}`}var Ok,Bk,YD=D(()=>{Ok={offset:"stroke-dashoffset",array:"stroke-dasharray"},Bk={offset:"strokeDashoffset",array:"strokeDasharray"}});function uh(e,{attrX:t,attrY:n,attrScale:i,pathLength:s,pathSpacing:r=1,pathOffset:a=0,...o},l,c,u){if(Uo(e,o,c),l){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:h,style:f}=e;for(let p of fM)h[p]!==void 0&&(f[p]=h[p],delete h[p]);(f.transform||h.transformOrigin)&&(f.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??"fill-box",delete h.transformBox),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),s!==void 0&&qD(h,s,r,a,!1)}var fM,hM=D(()=>{x0();YD();fM=["transform","opacity","offsetDistance","offsetPath","offsetRotate","offsetAnchor"]});var b0,dM=D(()=>{b0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"])});var fh,pM=D(()=>{fh=e=>typeof e=="string"&&e.toLowerCase()==="svg"});function ZD(e,t,n,i){v0(e,t,void 0,i);for(let s in t.attrs)e.setAttribute(b0.has(s)?s:wc(s),t.attrs[s])}var KD=D(()=>{Xg();lM();dM()});function hh(e,t,n){let i=Io(e,t,n);for(let s in e)if(me(e[s])||me(t[s])){let r=Fs.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[r]=e[s]}return i}var mM=D(()=>{zs();fs();_0()});var dh,jD=D(()=>{fs();RS();Jf();JS();Xg();hM();dM();pM();KD();mM();dh=class extends Pc{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ve}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Yi.has(n)){let i=Jg(n);return i&&i.default||0}if(fM.includes(n)){let s=getComputedStyle(t)[n];if(typeof s=="string"&&s)return s.trim()}return n=b0.has(n)?n:wc(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,i){return hh(t,n,i)}build(t,n,i){uh(t,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(t,n,i,s){ZD(t,n,i,s)}mount(t){this.isSVGTag=fh(t.tagName),super.mount(t)}}});function gM(e){if(!e)return;if(!e.isControllingVariants){let n=e.parent?gM(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}let t={};for(let n=0;n<Fk;n++){let i=$f[n],s=e.props[i];(Vs(s)||s===!1)&&(t[i]=s)}return t}var Fk,JD=D(()=>{Qf();h0();Fk=$f.length});function yM(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}var QD=D(()=>{});function kk(e){return t=>Promise.all(t.map(({animation:n,options:i})=>W3(e,n,i)))}function xM(e){let t=kk(e),n=$D(),i=!0,s=!1,r=c=>(u,h)=>{let f=Ri(e,h,c==="exit"?e.presenceContext?.custom:void 0);if(f){let{transition:p,transitionEnd:m,...b}=f;u={...u,...b,...m}}return u};function a(c){t=c(e)}function o(c){let{props:u}=e,h=gM(e.parent)||{},f=[],p=new Set,m={},b=1/0;for(let d=0;d<Vk;d++){let y=zk[d],_=n[y],x=u[y]!==void 0?u[y]:h[y],M=Vs(x),T=y===c?_.isActive:null;T===!1&&(b=d);let w=x===h[y]&&x!==u[y]&&M;if(w&&(i||s)&&e.manuallyAnimateOnMount&&(w=!1),_.protectedKeys={...m},!_.isActive&&T===null||!x&&!_.prevProp||Tr(x)||typeof x=="boolean")continue;if(y==="exit"&&_.isActive&&T!==!0){_.prevResolvedValues&&(m={...m,..._.prevResolvedValues});continue}let v=tP(_.prevProp,x),A=v||y===c&&_.isActive&&!w&&M||d>b&&M,C=!1,P=Array.isArray(x)?x:[x],L=P.reduce(r(y),{});T===!1&&(L={});let{prevResolvedValues:q={}}=_,H={...q,...L},B=Y=>{A=!0,p.has(Y)&&(C=!0,p.delete(Y)),_.needsAnimating[Y]=!0;let nt=e.getValue(Y);nt&&(nt.liveStyle=!1)};for(let Y in H){let nt=L[Y],at=q[Y];if(m.hasOwnProperty(Y))continue;let ot=!1;Xf(nt)&&Xf(at)?ot=!yM(nt,at)||v:ot=nt!==at,ot?nt!=null?B(Y):p.add(Y):nt!==void 0&&p.has(Y)?B(Y):_.protectedKeys[Y]=!0}_.prevProp=x,_.prevResolvedValues=L,_.isActive&&(m={...m,...L}),(i||s)&&e.blockInitialAnimation&&(A=!1);let W=w&&v;A&&(!W||C)&&f.push(...P.map(Y=>{let nt={type:y};if(typeof Y=="string"&&(i||s)&&!W&&e.manuallyAnimateOnMount&&e.parent){let{parent:at}=e,ot=Ri(at,Y);if(at.enteringChildren&&ot){let{delayChildren:_t}=ot.transition||{};nt.delay=zg(at.enteringChildren,e,_t)}}return{animation:Y,options:nt}}))}if(p.size){let d={};if(typeof u.initial!="boolean"){let y=Ri(e,Array.isArray(u.initial)?u.initial[0]:u.initial);y&&y.transition&&(d.transition=y.transition)}p.forEach(y=>{let _=e.getBaseTarget(y),x=e.getValue(y);x&&(x.liveStyle=!0),d[y]=_??null}),f.push({animation:d})}let g=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(g=!1),i=!1,s=!1,g?t(f):Promise.resolve()}function l(c,u){if(n[c].isActive===u)return Promise.resolve();e.variantChildren?.forEach(f=>f.animationState?.setActive(c,u)),n[c].isActive=u;let h=o(c);for(let f in n)n[f].protectedKeys={};return h}return{animateChanges:o,setActive:l,setAnimateFunction:a,getState:()=>n,reset:()=>{n=$D(),s=!0}}}function tP(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!yM(t,e):!1}function Oo(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function $D(){return{animate:Oo(!0),whileInView:Oo(),whileHover:Oo(),whileTap:Oo(),whileDrag:Oo(),whileFocus:Oo(),exit:Oo()}}var zk,Vk,eP=D(()=>{X3();dS();JD();u0();yS();Qf();Ec();QD();h0();zk=[...f0].reverse(),Vk=f0.length});function S0(e,t){e.min=t.min,e.max=t.max}function ji(e,t){S0(e.x,t.x),S0(e.y,t.y)}function vM(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var nP=D(()=>{});function dn(e){return e.max-e.min}function MM(e,t,n){return Math.abs(e-t)<=n}function _M(e,t,n,i=.5){e.origin=i,e.originPoint=qt(t.min,t.max,e.origin),e.scale=dn(n)/dn(t),e.translate=qt(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Gk&&e.scale<=Hk||isNaN(e.scale))&&(e.scale=1),(e.translate>=Wk&&e.translate<=Xk||isNaN(e.translate))&&(e.translate=0)}function Bo(e,t,n,i){_M(e.x,t.x,n.x,i?i.originX:void 0),_M(e.y,t.y,n.y,i?i.originY:void 0)}function bM(e,t,n,i=0){let s=i?qt(n.min,n.max,i):n.min;e.min=s+t.min,e.max=e.min+dn(t)}function TM(e,t,n,i){bM(e.x,t.x,n.x,i?.x),bM(e.y,t.y,n.y,i?.y)}function SM(e,t,n,i=0){let s=i?qt(n.min,n.max,i):n.min;e.min=t.min-s,e.max=e.min+dn(t)}function Lc(e,t,n,i){SM(e.x,t.x,n.x,i?.x),SM(e.y,t.y,n.y,i?.y)}var iP,Gk,Hk,sP,Wk,Xk,M0=D(()=>{qi();iP=1e-4,Gk=1-iP,Hk=1+iP,sP=.01,Wk=0-sP,Xk=0+sP});function rP(e,t,n,i,s){return e-=t,e=rh(e,1/n,i),s!==void 0&&(e=rh(e,1/s,i)),e}function qk(e,t=0,n=1,i=.5,s,r=e,a=e){if(Hn.test(t)&&(t=parseFloat(t),t=qt(a.min,a.max,t/100)-a.min),typeof t!="number")return;let o=qt(r.min,r.max,i);e===r&&(o-=t),e.min=rP(e.min,t,n,o,s),e.max=rP(e.max,t,n,o,s)}function aP(e,t,[n,i,s],r,a){qk(e,t[n],t[i],t[s],t.scale,r,a)}function EM(e,t,n,i){aP(e.x,t,Yk,n?n.x:void 0,i?i.x:void 0),aP(e.y,t,Zk,n?n.y:void 0,i?i.y:void 0)}var Yk,Zk,oP=D(()=>{qi();Os();g0();Yk=["x","scaleX","originX"],Zk=["y","scaleY","originY"]});function lP(e){return e.translate===0&&e.scale===1}function AM(e){return lP(e.x)&&lP(e.y)}function cP(e,t){return e.min===t.min&&e.max===t.max}function fP(e,t){return cP(e.x,t.x)&&cP(e.y,t.y)}function uP(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function wM(e,t){return uP(e.x,t.x)&&uP(e.y,t.y)}function CM(e){return dn(e.x)/dn(e.y)}function RM(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}var hP=D(()=>{M0()});function Di(e){return[e("x"),e("y")]}var DM=D(()=>{});function dP(e,t,n){let i="",s=e.x.translate/t.x,r=e.y.translate/t.y,a=n?.z||0;if((s||r||a)&&(i=`translate3d(${s}px, ${r}px, ${a}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:c,rotate:u,pathRotation:h,rotateX:f,rotateY:p,skewX:m,skewY:b}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),h&&(i+=`rotate(${h}deg) `),f&&(i+=`rotateX(${f}deg) `),p&&(i+=`rotateY(${p}deg) `),m&&(i+=`skewX(${m}deg) `),b&&(i+=`skewY(${b}deg) `)}let o=e.x.scale*t.x,l=e.y.scale*t.y;return(o!==1||l!==1)&&(i+=`scale(${o}, ${l})`),i||"none"}var pP=D(()=>{});function xP(e,t,n,i,s,r){s?(e.opacity=qt(0,n.opacity??1,jk(i)),e.opacityExit=qt(t.opacity??1,0,Jk(i))):r&&(e.opacity=qt(t.opacity??1,n.opacity??1,i));for(let a=0;a<Kk;a++){let o=Kf[a],l=yP(t,o),c=yP(n,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||gP(l)===gP(c)?(e[o]=Math.max(qt(mP(l),mP(c),i),0),(Hn.test(c)||Hn.test(l))&&(e[o]+="%")):e[o]=c}(t.rotate||n.rotate)&&(e.rotate=qt(t.rotate||0,n.rotate||0,i))}function yP(e,t){return e[t]!==void 0?e[t]:e.borderRadius}function vP(e,t,n){return i=>i<e?0:i>t?1:n(Ls(e,t,i))}var Kk,mP,gP,jk,Jk,_P=D(()=>{qi();Os();zt();PS();Kk=Kf.length,mP=e=>typeof e=="string"?parseFloat(e):e,gP=e=>typeof e=="number"||vt.test(e);jk=vP(0,.5,Nf),Jk=vP(.5,.95,He)});function bP(e,t,n){let i=me(e)?e:hs(e);return i.start(Co("",i,t,n)),i.animation}var SP=D(()=>{Gg();Mc();zs()});function ks(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}var PM=D(()=>{});var MP,TP=D(()=>{MP=(e,t)=>e.depth-t.depth});var T0,EP=D(()=>{zt();TP();T0=class{constructor(){this.children=[],this.isDirty=!1}add(t){So(this.children,t),this.isDirty=!0}remove(t){Ta(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(MP),this.isDirty=!1,this.children.forEach(t)}}});function AP(e,t){let n=We.now(),i=({timestamp:s})=>{let r=s-n;r>=t&&(ci(i),e(r-t))};return Ht.setup(i,!0),()=>ci(i)}var wP=D(()=>{_r();us()});function Fo(e){return me(e)?e.get():e}var NM=D(()=>{zs()});var E0,CP=D(()=>{zt();E0=class{constructor(){this.members=[]}add(t){So(this.members,t);for(let n=this.members.length-1;n>=0;n--){let i=this.members[n];if(i===t||i===this.lead||i===this.prevLead)continue;let s=i.instance;(!s||s.isConnected===!1)&&!i.snapshot&&(Ta(this.members,i),i.unmount())}t.scheduleRender()}remove(t){if(Ta(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){let n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){for(let n=this.members.indexOf(t)-1;n>=0;n--){let i=this.members[n];if(i.isPresent!==!1&&i.instance?.isConnected!==!1)return this.promote(i),!0}return!1}promote(t,n){let i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.updateSnapshot(),t.scheduleRender();let{layoutDependency:s}=i.options,{layoutDependency:r}=t.options;(s===void 0||s!==r)&&(t.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root?.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{t.options.onExitComplete?.(),t.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}});var zo,LM=D(()=>{zo={hasAnimatedSinceResize:!0,hasEverUpdated:!1}});function IM(e,t,n,i){let{latestValues:s}=t;s[e]&&(n[e]=s[e],t.setStaticValue(e,0),i&&(i[e]=0))}function BP(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=qg(t);if(window.MotionHasOptimisedAnimation(n,"transform")){let{layout:s,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Ht,!(s||r))}let{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&BP(i)}function A0({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(a={},o=t?.()){this.id=$k++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Lo.value&&(Vo.nodes=Vo.calculatedTargetDeltas=Vo.calculatedProjections=0),this.nodes.forEach(nG),this.nodes.forEach(lG),this.nodes.forEach(cG),this.nodes.forEach(iG),Lo.addProjectionMetrics&&Lo.addProjectionMetrics(Vo)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new T0)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new vr),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){let l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=Rc(a)&&!_D(a),this.instance=a;let{layoutId:o,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||o)&&(this.isLayoutDirty=!0),e){let u,h=0,f=()=>this.root.updateBlockedByResize=!1;Ht.read(()=>{h=window.innerWidth}),e(a,()=>{let p=window.innerWidth;p!==h&&(h=p,this.root.updateBlockedByResize=!0,u&&u(),u=AP(f,250),zo.hasAnimatedSinceResize&&(zo.hasAnimatedSinceResize=!1,this.nodes.forEach(PP)))})}o&&this.root.registerSharedNode(o,this),this.options.animate!==!1&&c&&(o||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:f,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let m=this.options.transition||c.getDefaultTransition()||pG,{onLayoutAnimationStart:b,onLayoutAnimationComplete:g}=c.getProps(),d=!this.targetLayout||!wM(this.targetLayout,p),y=!h&&f;if(this.options.layoutRoot||this.resumeFrom||y||h&&(d||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let _={...Tc(m,"layout"),onPlay:b,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(u,y,_.path)}else h||PP(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ci(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(uG),this.animationId++)}getTransformTemplate(){let{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&BP(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){let h=this.path[u];h.shouldResetTransform=!0,(typeof h.latestValues.x=="string"||typeof h.latestValues.y=="string")&&(h.isLayoutDirty=!0),h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}let{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;let c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(rG),this.nodes.forEach(RP);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(DP);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(aG),this.nodes.forEach(oG),this.nodes.forEach(tG),this.nodes.forEach(eG)):this.nodes.forEach(DP),this.clearAllSnapshots();let o=We.now();Qe.delta=_n(0,1e3/60,o-Qe.timestamp),Qe.timestamp=o,Qe.isProcessing=!0,Bf.update.process(Qe),Bf.preRender.process(Qe),Bf.render.process(Qe),Qe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Po.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(sG),this.sharedNodes.forEach(fG)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ht.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ht.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!dn(this.snapshot.measuredBox.x)&&!dn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();let a=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ve()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o&&this.instance){let l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;let a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!AM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;a&&this.instance&&(o||Er(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){let o=this.measurePageBox(),l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),mG(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:a}=this.options;if(!a)return Ve();let o=a.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(gG))){let{scroll:c}=this.root;c&&(Ki(o.x,c.offset.x),Ki(o.y,c.offset.y))}return o}removeElementScroll(a){let o=Ve();if(ji(o,a),this.scroll?.wasRoot)return o;for(let l=0;l<this.path.length;l++){let c=this.path[l],{scroll:u,options:h}=c;c!==this.root&&u&&h.layoutScroll&&(u.wasRoot&&ji(o,a),Ki(o.x,u.offset.x),Ki(o.y,u.offset.y))}return o}applyTransform(a,o=!1,l){let c=l||Ve();ji(c,a);for(let u=0;u<this.path.length;u++){let h=this.path[u];!o&&h.options.layoutScroll&&h.scroll&&h!==h.root&&(Ki(c.x,-h.scroll.offset.x),Ki(c.y,-h.scroll.offset.y)),Er(h.latestValues)&&ah(c,h.latestValues,h.layout?.layoutBox)}return Er(this.latestValues)&&ah(c,this.latestValues,this.layout?.layoutBox),c}removeTransform(a){let o=Ve();ji(o,a);for(let l=0;l<this.path.length;l++){let c=this.path[l];if(!Er(c.latestValues))continue;let u;c.instance&&(m0(c.latestValues)&&c.updateSnapshot(),u=Ve(),ji(u,c.measurePageBox())),EM(o,c.latestValues,c.snapshot?.layoutBox,u)}return Er(this.latestValues)&&EM(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Qe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){let o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);let l=!!this.resumingFrom||this!==o;if(!(a||l&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:u,layoutId:h}=this.options;if(!this.layout||!(u||h))return;this.resolvedRelativeTargetAt=Qe.timestamp;let f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ve(),this.targetWithTransforms=Ve()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),TM(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):ji(this.target,this.layout.layoutBox),rM(this.target,this.targetDelta)):ji(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0),Lo.value&&Vo.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||m0(this.parent.latestValues)||nM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(a,o,l){this.relativeParent=a,this.linkedParentVersion=a.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ve(),this.relativeTargetOrigin=Ve(),Lc(this.relativeTargetOrigin,o,l,this.options.layoutAnchor||void 0),ji(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let a=this.getLead(),o=!!this.resumingFrom||this!==a,l=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(l=!1),o&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Qe.timestamp&&(l=!1),l)return;let{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;ji(this.layoutCorrected,this.layout.layoutBox);let h=this.treeScale.x,f=this.treeScale.y;FD(this.layoutCorrected,this.treeScale,this.path,o),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Ve());let{target:p}=a;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(vM(this.prevProjectionDelta.x,this.projectionDelta.x),vM(this.prevProjectionDelta.y,this.projectionDelta.y)),Bo(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==f||!RM(this.projectionDelta.x,this.prevProjectionDelta.x)||!RM(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p)),Lo.value&&Vo.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.visualElement?.scheduleRender(),a){let o=this.getStack();o&&o.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=La(),this.projectionDelta=La(),this.projectionDeltaWithTransform=La()}setAnimationOrigin(a,o=!1,l){let c=this.snapshot,u=c?c.latestValues:{},h={...this.latestValues},f=La();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;let p=Ve(),m=c?c.source:void 0,b=this.layout?this.layout.source:void 0,g=m!==b,d=this.getStack(),y=!d||d.members.length<=1,_=!!(g&&!y&&this.options.crossfade===!0&&!this.path.some(dG));this.animationProgress=0;let x,M=l?.interpolateProjection(a);this.mixTargetDelta=T=>{let w=T/1e3,v=M?.(w);v?(f.x.translate=v.x,f.x.scale=qt(a.x.scale,1,w),f.x.origin=a.x.origin,f.x.originPoint=a.x.originPoint,f.y.translate=v.y,f.y.scale=qt(a.y.scale,1,w),f.y.origin=a.y.origin,f.y.originPoint=a.y.originPoint):(NP(f.x,a.x,w),NP(f.y,a.y,w)),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Lc(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),hG(this.relativeTarget,this.relativeTargetOrigin,p,w),x&&fP(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Ve()),ji(x,this.relativeTarget)),g&&(this.animationValues=h,xP(h,u,this.latestValues,w,_,y)),v&&v.rotate!==void 0&&(this.animationValues||(this.animationValues=h),this.animationValues.pathRotation=v.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ci(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ht.update(()=>{zo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=hs(0)),this.motionValue.jump(0,!1),this.currentAnimation=bP(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Qk),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let a=this.getLead(),{targetWithTransforms:o,target:l,layout:c,latestValues:u}=a;if(!(!o||!l||!c)){if(this!==a&&this.layout&&c&&FP(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Ve();let h=dn(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+h;let f=dn(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+f}ji(o,l),ah(o,u),Bo(this.projectionDeltaWithTransform,this.layoutCorrected,o,u)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new E0),this.sharedNodes.get(a).add(o);let c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){let a=this.getStack();return a?a.lead===this:!0}getLead(){let{layoutId:a}=this.options;return a?this.getStack()?.lead||this:this}getPrevLead(){let{layoutId:a}=this.options;return a?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){let c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){let a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){let{visualElement:a}=this.options;if(!a)return;let o=!1,{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;let c={};l.z&&IM("z",a,c,this.animationValues);for(let u=0;u<UM.length;u++)IM(`rotate${UM[u]}`,a,c,this.animationValues),IM(`skew${UM[u]}`,a,c,this.animationValues);a.render();for(let u in c)a.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);a.scheduleRender()}applyProjectionStyles(a,o){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}let l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=Fo(o?.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none";return}let c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=Fo(o?.pointerEvents)||""),this.hasProjected&&!Er(this.latestValues)&&(a.transform=l?l({},""):"none",this.hasProjected=!1);return}a.visibility="";let u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let h=dP(this.projectionDeltaWithTransform,this.treeScale,u);l&&(h=l(u,h)),a.transform=h;let{x:f,y:p}=this.projectionDelta;a.transformOrigin=`${f.origin*100}% ${p.origin*100}% 0`,c.animationValues?a.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:a.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(let m in oh){if(u[m]===void 0)continue;let{correct:b,applyTo:g,isCSSVariable:d}=oh[m],y=h==="none"?u[m]:b(u[m],c);if(g){let _=g.length;for(let x=0;x<_;x++)a[g[x]]=y}else d?this.options.visualElement.renderState.vars[m]=y:a[m]=y}this.options.layoutId&&(a.pointerEvents=c===this?Fo(o?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>a.currentAnimation?.stop()),this.root.nodes.forEach(RP),this.root.sharedNodes.clear()}}}function tG(e){e.updateLayout()}function eG(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){let{layoutBox:n,measuredBox:i}=e.layout,{animationType:s}=e.options,r=t.source!==e.layout.source;if(s==="size")Di(u=>{let h=r?t.measuredBox[u]:t.layoutBox[u],f=dn(h);h.min=n[u].min,h.max=h.min+f});else if(s==="x"||s==="y"){let u=s==="x"?"y":"x";S0(r?t.measuredBox[u]:t.layoutBox[u],n[u])}else FP(s,t.layoutBox,n)&&Di(u=>{let h=r?t.measuredBox[u]:t.layoutBox[u],f=dn(n[u]);h.max=h.min+f,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[u].max=e.relativeTarget[u].min+f)});let a=La();Bo(a,n,t.layoutBox);let o=La();r?Bo(o,e.applyTransform(i,!0),t.measuredBox):Bo(o,n,t.layoutBox);let l=!AM(a),c=!1;if(!e.resumeFrom){let u=e.getClosestProjectingParent();if(u&&!u.resumeFrom){let{snapshot:h,layout:f}=u;if(h&&f){let p=e.options.layoutAnchor||void 0,m=Ve();Lc(m,t.layoutBox,h.layoutBox,p);let b=Ve();Lc(b,n,f.layoutBox,p),wM(m,b)||(c=!0),u.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=m,e.relativeParent=u)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:o,layoutDelta:a,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){let{onExitComplete:n}=e.options;n&&n()}e.options.transition=void 0}function nG(e){Lo.value&&Vo.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function iG(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function sG(e){e.clearSnapshot()}function RP(e){e.clearMeasurements()}function rG(e){e.isLayoutDirty=!0,e.updateLayout()}function DP(e){e.isLayoutDirty=!1}function aG(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function oG(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function PP(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function lG(e){e.resolveTargetDelta()}function cG(e){e.calcProjection()}function uG(e){e.resetSkewAndRotation()}function fG(e){e.removeLeadSnapshot()}function NP(e,t,n){e.translate=qt(t.translate,0,n),e.scale=qt(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function LP(e,t,n,i){e.min=qt(t.min,n.min,i),e.max=qt(t.max,n.max,i)}function hG(e,t,n,i){LP(e.x,t.x,n.x,i),LP(e.y,t.y,n.y,i)}function dG(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}function OP(e){e.min=IP(e.min),e.max=IP(e.max)}function mG(e){OP(e.x),OP(e.y)}function FP(e,t,n){return e==="position"||e==="preserve-aspect"&&!MM(CM(t),CM(n),.2)}function gG(e){return e!==e.root&&e.scroll?.wasRoot}var Vo,UM,Qk,$k,pG,UP,IP,OM=D(()=>{zt();SP();_S();kg();e0();_r();cM();vD();wP();r0();bD();qi();Mc();NM();_P();nP();g0();M0();oP();Jf();hP();CP();pP();DM();EP();iM();LM();us();Vo={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},UM=["","X","Y","Z"],Qk=1e3,$k=0;pG={duration:.45,ease:[.4,0,.1,1]},UP=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),IP=UP("applewebkit/")&&!UP("chrome/")?Math.round:He});var zP,VP=D(()=>{PM();OM();zP=A0({attachResizeListener:(e,t)=>ks(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0})});var w0,ph,kP=D(()=>{OM();VP();w0={current:void 0},ph=A0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!w0.current){let e=new zP({});e.mount(window),e.setOptions({layoutScroll:!0}),w0.current=e}return w0.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"})});var ce=D(()=>{Vg();Gg();vS();e0();sD();rD();hD();kS();FS();xD();qi();Os();zs();xS();PD();XD();jD();jS();eP();u0();YS();uM();Qf();Ec();Hg();tM();M0();Jf();DM();oM();PM();NM();kP();LM();x0();_0();hM();pM();mM();us()});var GP,ko,C0=D(()=>{"use client";GP=xe(Te(),1),ko=(0,GP.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"})});function HP(e=!0){let t=(0,Ia.useContext)(dc);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:i,register:s}=t,r=(0,Ia.useId)();(0,Ia.useEffect)(()=>{if(e)return s(r)},[e]);let a=(0,Ia.useCallback)(()=>e&&i&&i(r),[r,i,e]);return!n&&i?[!1,a]:[!0]}var Ia,WP=D(()=>{"use client";Ia=xe(Te(),1);ig()});var XP,R0,BM=D(()=>{"use client";XP=xe(Te(),1),R0=(0,XP.createContext)({strict:!1})});function yG(){if(YP)return;let e={};for(let t in qP)e[t]={isEnabled:n=>qP[t].some(i=>!!n[i])};ih(e),YP=!0}function D0(){return yG(),KS()}var qP,YP,FM=D(()=>{ce();qP={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},YP=!1});function ZP(e){let t=D0();for(let n in e)t[n]={...t[n],...e[n]};ih(t)}var KP=D(()=>{ce();FM()});function zM({children:e,...t}){let n=(0,P0.useContext)(ko);t={...n,...t},t.transition=wo(t.transition,n.transition),t.isStatic=eg(()=>t.isStatic);let i=(0,P0.useMemo)(()=>t,[JSON.stringify(t.transition),t.transformPagePoint,t.reducedMotion,t.skipAnimations,t.isValidProp]);return(0,jP.jsx)(ko.Provider,{value:i,children:e})}var jP,P0,JP=D(()=>{"use client";jP=xe($m(),1),P0=xe(Te(),1);ce();C0();pb()});var QP,Oa,mh=D(()=>{"use client";QP=xe(Te(),1),Oa=(0,QP.createContext)({})});function $P(e,t){if(Ua(e)){let{initial:n,animate:i}=e;return{initial:n===!1||Vs(n)?n:void 0,animate:Vs(i)?i:void 0}}return e.inherit!==!1?t:{}}var tN=D(()=>{ce()});function nN(e){let{initial:t,animate:n}=$P(e,(0,N0.useContext)(Oa));return(0,N0.useMemo)(()=>({initial:t,animate:n}),[eN(t),eN(n)])}function eN(e){return Array.isArray(e)?e.join(" "):e}var N0,iN=D(()=>{"use client";N0=xe(Te(),1);mh();tN()});var Uc,L0=D(()=>{Uc=()=>({style:{},transform:{},transformOrigin:{},vars:{}})});function VM(e,t,n){for(let i in t)!me(t[i])&&!lh(i,n)&&(e[i]=t[i])}function xG({transformTemplate:e},t){return(0,sN.useMemo)(()=>{let n=Uc();return Uo(n,t,e),Object.assign({},n.vars,n.style)},[t])}function vG(e,t){let n=e.style||{},i={};return VM(i,n,e),Object.assign(i,xG(e,t)),i}function rN(e,t){let n={},i=vG(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}var sN,kM=D(()=>{"use client";ce();sN=xe(Te(),1);L0()});var U0,GM=D(()=>{L0();U0=()=>({...Uc(),attrs:{}})});function oN(e,t,n,i){let s=(0,aN.useMemo)(()=>{let r=U0();return uh(r,t,fh(i),e.transformTemplate,e.style),{...r.attrs,style:{...r.style}}},[t]);if(e.style){let r={};VM(r,e.style,e),s.style={...r,...s.style}}return s}var aN,lN=D(()=>{"use client";ce();aN=xe(Te(),1);kM();GM()});function gh(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||_G.has(e)}var _G,cN=D(()=>{_G=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"])});function bG(e,t){return e.startsWith("on")?!gh(e):t?.(e)??!gh(e)}function uN(e,t,n,i){let s={};for(let r in e)r==="values"&&typeof e.values=="object"||me(e[r])||(bG(r,i)||n===!0&&gh(r)||!t&&!gh(r)||e.draggable&&r.startsWith("onDrag"))&&(s[r]=e[r]);return s}var fN=D(()=>{ce();cN()});var hN,dN=D(()=>{hN=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"]});function Ic(e){return typeof e!="string"||e.includes("-")?!1:!!(hN.indexOf(e)>-1||/[A-Z]/u.test(e))}var I0=D(()=>{dN()});function pN(e,t,n,{latestValues:i},s,r=!1,a,o){let c=(a??Ic(e)?oN:rN)(t,i,s,e),u=uN(t,typeof e=="string",r,o),h=e!==Oc.Fragment?{...u,...c,ref:n}:{},{children:f}=t,p=(0,Oc.useMemo)(()=>me(f)?f.get():f,[f]);return(0,Oc.createElement)(e,{...h,children:p})}var Oc,mN=D(()=>{"use client";ce();Oc=xe(Te(),1);kM();lN();fN();I0()});function SG({scrapeMotionValuesFromProps:e,createRenderState:t},n,i,s){return{latestValues:MG(n,i,s,e),renderState:t()}}function MG(e,t,n,i){let s={},r=i(e,{});for(let f in r)s[f]=Fo(r[f]);let{initial:a,animate:o}=e,l=Ua(e),c=th(e);t&&c&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),o===void 0&&(o=t.animate));let u=n?n.initial===!1:!1;u=u||a===!1;let h=u?o:a;if(h&&typeof h!="boolean"&&!Tr(h)){let f=Array.isArray(h)?h:[h];for(let p=0;p<f.length;p++){let m=Ro(e,f[p]);if(m){let{transitionEnd:b,transition:g,...d}=m;for(let y in d){let _=d[y];if(Array.isArray(_)){let x=u?_.length-1:0;_=_[x]}_!==null&&(s[y]=_)}for(let y in b)s[y]=b[y]}}}return s}var HM,O0,WM=D(()=>{"use client";ce();HM=xe(Te(),1);mh();ig();pb();O0=e=>(t,n)=>{let i=(0,HM.useContext)(Oa),s=(0,HM.useContext)(dc),r=()=>SG(e,t,i,s);return n?r():eg(r)}});var gN,yN=D(()=>{"use client";ce();WM();L0();gN=O0({scrapeMotionValuesFromProps:Io,createRenderState:Uc})});var xN,vN=D(()=>{"use client";ce();WM();GM();xN=O0({scrapeMotionValuesFromProps:hh,createRenderState:U0})});var _N,bN=D(()=>{_N=Symbol.for("motionComponentSymbol")});function SN(e,t,n){let i=(0,Go.useRef)(n);(0,Go.useInsertionEffect)(()=>{i.current=n});let s=(0,Go.useRef)(null);return(0,Go.useCallback)(r=>{r&&e.onMount?.(r),t&&(r?t.mount(r):t.unmount());let a=i.current;if(typeof a=="function")if(r){let o=a(r);typeof o=="function"&&(s.current=o)}else s.current?(s.current(),s.current=null):a(r);else a&&(a.current=r)},[t])}var Go,MN=D(()=>{"use client";Go=xe(Te(),1)});var TN,B0,XM=D(()=>{"use client";TN=xe(Te(),1),B0=(0,TN.createContext)({})});function Ba(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}var qM=D(()=>{});function EN(e,t,n,i,s,r){let{visualElement:a}=(0,jn.useContext)(Oa),o=(0,jn.useContext)(R0),l=(0,jn.useContext)(dc),c=(0,jn.useContext)(ko),u=c.reducedMotion,h=c.skipAnimations,f=(0,jn.useRef)(null),p=(0,jn.useRef)(!1);i=i||o.renderer,!f.current&&i&&(f.current=i(e,{visualState:t,parent:a,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:h,isSVG:r}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,b=(0,jn.useContext)(B0);m&&!m.projection&&s&&(m.type==="html"||m.type==="svg")&&TG(f.current,n,s,b);let g=(0,jn.useRef)(!1);(0,jn.useInsertionEffect)(()=>{m&&g.current&&m.update(n,l)});let d=n[qf],y=(0,jn.useRef)(!!d&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(d)&&window.MotionHasOptimisedAnimation?.(d));return J2(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),y.current&&m.animationState&&m.animationState.animateChanges())}),(0,jn.useEffect)(()=>{m&&(!y.current&&m.animationState&&m.animationState.animateChanges(),y.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(d)}),y.current=!1),m.enteringChildren=void 0)}),m}function TG(e,t,n,i){let{layoutId:s,layout:r,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:h}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:AN(e.parent)),e.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!a||o&&Ba(o),visualElement:e,animationType:typeof r=="string"?r:"both",initialPromotionConfig:i,crossfade:h,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function AN(e){if(e)return e.options.allowProjection!==!1?e.projection:AN(e.parent)}var jn,wN=D(()=>{"use client";ce();jn=xe(Te(),1);BM();C0();mh();ig();XM();qM();Q2()});function z0(e,{forwardMotionProps:t=!1,type:n}={},i,s){i&&ZP(i);let r=n?n==="svg":Ic(e),a=r?xN:gN;function o(c,u){let h,f={...(0,Bc.useContext)(ko),...c,layoutId:EG(c)},{isStatic:p,isValidProp:m}=f,b=nN(c),g=a(c,p);if(!p&&typeof window<"u"){AG(f,i);let d=wG(f);h=d.MeasureLayout,b.visualElement=EN(e,g,f,s,d.ProjectionNode,r)}return(0,F0.jsxs)(Oa.Provider,{value:b,children:[h&&b.visualElement?(0,F0.jsx)(h,{visualElement:b.visualElement,...f}):null,pN(e,c,SN(g,b.visualElement,u),g,p,t,r,m)]})}o.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;let l=(0,Bc.forwardRef)(o);return l[_N]=e,l}function EG({layoutId:e}){let t=(0,Bc.useContext)(tg).id;return t&&e!==void 0?t+"-"+e:e}function AG(e,t){let n=(0,Bc.useContext)(R0).strict}function wG(e){let t=D0(),{drag:n,layout:i}=t;if(!n&&!i)return{};let s={...n,...i};return{MeasureLayout:n?.isEnabled(e)||i?.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}var F0,Bc,CN=D(()=>{"use client";F0=xe($m(),1),Bc=xe(Te(),1);db();BM();C0();mh();iN();mN();I0();yN();vN();FM();KP();bN();MN();wN()});function RN(e,t){if(typeof Proxy>"u")return z0;let n=new Map,i=(r,a)=>z0(r,a,e,t),s=(r,a)=>i(r,a);return new Proxy(s,{get:(r,a)=>a==="create"?i:(n.has(a)||n.set(a,z0(a,void 0,e,t)),n.get(a))})}var DN=D(()=>{CN()});var PN,NN,LN=D(()=>{ce();PN=xe(Te(),1);I0();NN=(e,t)=>t.isSVG??Ic(e)?new dh(t):new ch(t,{allowProjection:e!==PN.Fragment})});var V0,UN=D(()=>{ce();V0=class extends Sn{constructor(t){super(t),t.animationState||(t.animationState=xM(t))}updateAnimationControlsSubscription(){let{animate:t}=this.node.getProps();Tr(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}});var CG,k0,IN=D(()=>{ce();CG=0,k0=class extends Sn{constructor(){super(...arguments),this.id=CG++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;if(t&&i===!1){if(this.isExitComplete){let{initial:r,custom:a}=this.node.getProps();if(typeof r=="string"||typeof r=="object"&&r!==null&&!Array.isArray(r)){let o=Ri(this.node,r,a);if(o){let{transition:l,transitionEnd:c,...u}=o;for(let h in u)this.node.getValue(h)?.jump(u[h])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}let s=this.node.animationState.setActive("exit",!t);n&&!t&&s.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){let{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}});var ON,BN=D(()=>{UN();IN();ON={animation:{Feature:V0},exit:{Feature:k0}}});function Ar(e){return{point:{x:e.pageX,y:e.pageY}}}var FN,Fc=D(()=>{ce();FN=e=>t=>No(t)&&e(t,Ar(t))});function Fa(e,t,n,i){return ks(e,t,FN(n),i)}var G0=D(()=>{ce();Fc()});var H0,YM=D(()=>{H0=({current:e})=>e?e.ownerDocument.defaultView:null});function VN(e,t){let n=zN(e.x,t.x),i=zN(e.y,t.y);return Math.sqrt(n**2+i**2)}var zN,kN=D(()=>{zN=(e,t)=>Math.abs(e-t)});function W0(e,t){return t?{point:t(e.point)}:e}function HN(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ZM({point:e},t){return{point:e,delta:HN(e,WN(t)),offset:HN(e,RG(t)),velocity:DG(t,.1)}}function RG(e){return e[0]}function WN(e){return e[e.length-1]}function DG(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null,s=WN(e);for(;n>=0&&(i=e[n],!(s.timestamp-i.timestamp>rn(t)));)n--;if(!i)return{x:0,y:0};i===e[0]&&e.length>2&&s.timestamp-i.timestamp>rn(t)*2&&(i=e[1]);let r=Rn(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};let a={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}var GN,zc,KM=D(()=>{ce();zt();G0();Fc();kN();GN=new Set(["auto","scroll"]),zc=class{constructor(t,n,{transformPagePoint:i,contextWindow:s=window,dragSnapToOrigin:r=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=W0(this.lastRawMoveEventInfo,this.transformPagePoint));let m=ZM(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,g=VN(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!b&&!g)return;let{point:d}=m,{timestamp:y}=Qe;this.history.push({...d,timestamp:y});let{onStart:_,onMove:x}=this.handlers;b||(_&&_(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,m)},this.handlePointerMove=(m,b)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=b,this.lastMoveEventInfo=W0(b,this.transformPagePoint),Ht.update(this.updatePoint,!0)},this.handlePointerUp=(m,b)=>{this.end();let{onEnd:g,onSessionEnd:d,resumeAnimation:y}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let _=ZM(m.type==="pointercancel"?this.lastMoveEventInfo:W0(b,this.transformPagePoint),this.history);this.startEvent&&g&&g(m,_),d&&d(m,_)},!No(t))return;this.dragSnapToOrigin=r,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=a,this.contextWindow=s||window;let l=Ar(t),c=W0(l,this.transformPagePoint),{point:u}=c,{timestamp:h}=Qe;this.history=[{...u,timestamp:h}];let{onSessionStart:f}=n;f&&f(t,ZM(c,this.history));let p={passive:!0,capture:!0};this.removeListeners=cs(Fa(this.contextWindow,"pointermove",this.handlePointerMove,p),Fa(this.contextWindow,"pointerup",this.handlePointerUp,p),Fa(this.contextWindow,"pointercancel",this.handlePointerUp,p)),o&&this.startScrollTracking(o)}startScrollTracking(t){let n=t.parentElement;for(;n;){let i=getComputedStyle(n);(GN.has(i.overflowX)||GN.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){let n=this.scrollPositions.get(t);if(!n)return;let i=t===window,s=i?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},r={x:s.x-n.x,y:s.y-n.y};r.x===0&&r.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=r.x,this.lastMoveEventInfo.point.y+=r.y):this.history.length>0&&(this.history[0].x-=r.x,this.history[0].y-=r.y),this.scrollPositions.set(t,s),Ht.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ci(this.updatePoint)}}});function KN(e,{min:t,max:n},i){return t!==void 0&&e<t?e=i?qt(t,e,i.min):Math.max(e,t):n!==void 0&&e>n&&(e=i?qt(n,e,i.max):Math.min(e,n)),e}function XN(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function jN(e,{top:t,left:n,bottom:i,right:s}){return{x:XN(e.x,n,s),y:XN(e.y,t,i)}}function qN(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}function JN(e,t){return{x:qN(e.x,t.x),y:qN(e.y,t.y)}}function QN(e,t){let n=.5,i=dn(e),s=dn(t);return s>i?n=Ls(t.min,t.max-i,e.min):i>s&&(n=Ls(e.min,e.max-s,t.min)),_n(0,1,n)}function $N(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}function tL(e=X0){return e===!1?e=0:e===!0&&(e=X0),{x:YN(e,"left","right"),y:YN(e,"top","bottom")}}function YN(e,t,n){return{min:ZN(e,t),max:ZN(e,n)}}function ZN(e,t){return typeof e=="number"?e:e[t]||0}var X0,eL=D(()=>{ce();zt();X0=.35});function nL(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function NG(e,t,n){let i=c0(e,nL(n)),s=c0(t,nL(n));return()=>{i(),s()}}function q0(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function LG(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}var PG,Y0,iL=D(()=>{ce();zt();G0();Fc();YM();qM();KM();eL();PG=new WeakMap,Y0=class{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ve(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:i}={}){let{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;let r=h=>{n&&this.snapToCursor(Ar(h).point),this.stopAnimation()},a=(h,f)=>{let{drag:p,dragPropagation:m,onDragStart:b}=this.getProps();if(p&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=US(p),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Di(d=>{let y=this.getAxisMotionValue(d).get()||0;if(Hn.test(y)){let{projection:_}=this.visualElement;if(_&&_.layout){let x=_.layout.layoutBox[d];x&&(y=dn(x)*(parseFloat(y)/100))}}this.originPoint[d]=y}),b&&Ht.update(()=>b(h,f),!1,!0),Ac(this.visualElement,"transform");let{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},o=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f;let{dragPropagation:p,dragDirectionLock:m,onDirectionLock:b,onDrag:g}=this.getProps();if(!p&&!this.openDragLock)return;let{offset:d}=f;if(m&&this.currentDirection===null){this.currentDirection=LG(d),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",f.point,d),this.updateAxis("y",f.point,d),this.visualElement.render(),g&&Ht.update(()=>g(h,f),!1,!0)},l=(h,f)=>{this.latestPointerEvent=h,this.latestPanInfo=f,this.stop(h,f),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new zc(t,{onSessionStart:r,onStart:a,onMove:o,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:H0(this.visualElement),element:this.visualElement.current})}stop(t,n){let i=t||this.latestPointerEvent,s=n||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!s||!i)return;let{velocity:a}=s;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&Ht.postRender(()=>o(i,s))}cancel(){this.isDragging=!1;let{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,i){let{drag:s}=this.getProps();if(!i||!q0(t,s,this.currentDirection))return;let r=this.getAxisMotionValue(t),a=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(a=KN(a,this.constraints[t],this.elastic[t])),r.set(a)}resolveConstraints(){let{dragConstraints:t,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,s=this.constraints;t&&Ba(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=jN(i.layoutBox,t):this.constraints=!1,this.elastic=tL(n),s!==this.constraints&&!Ba(t)&&i&&this.constraints&&!this.hasMutatedConstraints&&Di(r=>{this.constraints!==!1&&this.getAxisMotionValue(r)&&(this.constraints[r]=$N(i.layoutBox[r],this.constraints[r]))})}resolveRefConstraints(){let{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ba(t))return!1;let i=t.current;li(i!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");let{projection:s}=this.visualElement;if(!s||!s.layout)return!1;s.root&&(s.root.scroll=void 0,s.root.updateScroll());let r=aM(i,s.root,this.visualElement.getTransformPagePoint()),a=JN(s.layout.layoutBox,r);if(n){let o=n(QS(a));this.hasMutatedConstraints=!!o,o&&(a=sh(o))}return a}startAnimation(t){let{drag:n,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=Di(u=>{if(!q0(u,n,this.currentDirection))return;let h=l&&l[u]||{};(a===!0||a===u)&&(h={min:0,max:0});let f=s?200:1e6,p=s?40:1e7,m={type:"inertia",velocity:i?t[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...r,...h};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(o)}startAxisValueAnimation(t,n){let i=this.getAxisMotionValue(t);return Ac(this.visualElement,t),i.start(Co(t,i,0,n,this.visualElement,!1))}stopAnimation(){Di(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){let n=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps()[n];return s||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){Di(n=>{let{drag:i}=this.getProps();if(!q0(n,i,this.currentDirection))return;let{projection:s}=this.visualElement,r=this.getAxisMotionValue(n);if(s&&s.layout){let{min:a,max:o}=s.layout.layoutBox[n],l=r.get()||0;r.set(t[n]-qt(a,o,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:t,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ba(n)||!i||!this.constraints)return;this.stopAnimation();let s={x:0,y:0};Di(a=>{let o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){let l=o.get();s[a]=QN({min:l,max:l},this.constraints[a])}});let{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),Di(a=>{if(!q0(a,t,null))return;let o=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];o.set(qt(l,c,s[a]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;PG.set(this.visualElement,this);let t=this.visualElement.current,n=Fa(t,"pointerdown",c=>{let{drag:u,dragListener:h=!0}=this.getProps(),f=c.target,p=f!==t&&VS(f);u&&h&&!p&&this.start(c)}),i,s=()=>{let{dragConstraints:c}=this.getProps();Ba(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=NG(t,c.current,()=>this.scalePositionWithinConstraints())))},{projection:r}=this.visualElement,a=r.addEventListener("measure",s);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),Ht.read(s);let o=ks(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",(({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Di(h=>{let f=this.getAxisMotionValue(h);f&&(this.originPoint[h]+=c[h].translate,f.set(f.get()+c[h].translate))}),this.visualElement.render())}));return()=>{o(),n(),a(),l&&l(),i&&i()}}getProps(){let t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:a=X0,dragMomentum:o=!0}=t;return{...t,drag:n,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:a,dragMomentum:o}}}});var Z0,sL=D(()=>{ce();zt();iL();Z0=class extends Sn{constructor(t){super(t),this.removeGroupControls=He,this.removeListeners=He,this.controls=new Y0(t)}mount(){let{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||He}update(){let{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}});var jM,K0,rL=D(()=>{ce();zt();G0();YM();KM();jM=e=>(t,n)=>{e&&Ht.update(()=>e(t,n),!1,!0)},K0=class extends Sn{constructor(){super(...arguments),this.removePointerDownListener=He}onPointerDown(t){this.session=new zc(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:H0(this.node)})}createPanHandlers(){let{onPanSessionStart:t,onPanStart:n,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:jM(t),onStart:jM(n),onMove:jM(i),onEnd:(r,a)=>{delete this.session,s&&Ht.postRender(()=>s(r,a))}}}mount(){this.removePointerDownListener=Fa(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}});function j0(e){let[t,n]=HP(),i=(0,yh.useContext)(tg);return(0,aL.jsx)(QM,{...e,layoutGroup:i,switchLayoutGroup:(0,yh.useContext)(B0),isPresent:t,safeToRemove:n})}var aL,yh,JM,QM,$M=D(()=>{"use client";aL=xe($m(),1);ce();yh=xe(Te(),1);WP();db();XM();JM=!1,QM=class extends yh.Component{componentDidMount(){let{visualElement:t,layoutGroup:n,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=t;r&&(n.group&&n.group.add(r),i&&i.register&&s&&i.register(r),JM&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),zo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){let{layoutDependency:n,visualElement:i,drag:s,isPresent:r}=this.props,{projection:a}=i;return a&&(a.isPresent=r,t.layoutDependency!==n&&a.setOptions({...a.options,layoutDependency:n}),JM=!0,s||t.layoutDependency!==n||n===void 0||t.isPresent!==r?a.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?a.promote():a.relegate()||Ht.postRender(()=>{let o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){let{visualElement:t,layoutAnchor:n}=this.props,{projection:i}=t;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),Po.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:t,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:s}=t;JM=!0,s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){let{safeToRemove:t}=this.props;t&&t()}render(){return null}}});var oL,lL=D(()=>{sL();rL();$M();ce();oL={pan:{Feature:K0},drag:{Feature:Z0,ProjectionNode:ph,MeasureLayout:j0}}});function cL(e,t,n){let{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",n==="Start");let s="onHover"+n,r=i[s];r&&Ht.postRender(()=>r(t,Ar(t)))}var J0,uL=D(()=>{ce();Fc();J0=class extends Sn{mount(){let{current:t}=this.node;t&&(this.unmount=OS(t,(n,i)=>(cL(this.node,i,"Start"),s=>cL(this.node,s,"End"))))}unmount(){}}});var Q0,fL=D(()=>{ce();zt();Q0=class extends Sn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=cs(ks(this.node.current,"focus",()=>this.onFocus()),ks(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}});function hL(e,t,n){let{props:i}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap",n==="Start");let s="onTap"+(n==="End"?"":n),r=i[s];r&&Ht.postRender(()=>r(t,Ar(t)))}var $0,dL=D(()=>{ce();Fc();$0=class extends Sn{mount(){let{current:t}=this.node;if(!t)return;let{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=WS(t,(s,r)=>(hL(this.node,r,"Start"),(a,{success:o})=>hL(this.node,a,o?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:i?.tap===!1})}unmount(){}}});function OG({root:e,...t}){let n=e||document;t1.has(n)||t1.set(n,{});let i=t1.get(n),s=JSON.stringify(t);return i[s]||(i[s]=new IntersectionObserver(IG,{root:e,...t})),i[s]}function pL(e,t,n){let i=OG(t);return e1.set(e,n),i.observe(e),()=>{e1.delete(e),i.unobserve(e)}}var e1,t1,UG,IG,mL=D(()=>{e1=new WeakMap,t1=new WeakMap,UG=e=>{let t=e1.get(e.target);t&&t(e)},IG=e=>{e.forEach(UG)}});function FG({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var BG,ty,gL=D(()=>{ce();mL();BG={some:0,all:1},ty=class extends Sn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:t={}}=this.node.getProps(),{root:n,margin:i,amount:s="some",once:r}=t,a={root:n?n.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:BG[s]},o=l=>{let{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);let{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),f=c?u:h;f&&f(l)};this.stopObserver=pL(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;let{props:t,prevProps:n}=this.node;["amount","margin","root"].some(FG(t,n))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}});var yL,xL=D(()=>{uL();fL();dL();gL();yL={inView:{Feature:ty},tap:{Feature:$0},focus:{Feature:Q0},hover:{Feature:J0}}});var vL,_L=D(()=>{ce();$M();vL={layout:{ProjectionNode:ph,MeasureLayout:j0}}});var bL,SL=D(()=>{BN();lL();xL();_L();bL={...ON,...yL,...oL,...vL}});var za,ML=D(()=>{LN();DN();SL();za=RN(bL,NN)});var TL=D(()=>{JP();ML();ce();zt()});function XG(){let e=(0,Ut.useRef)(null),t=(0,Ut.useRef)(null);return(0,Ut.useEffect)(()=>{let n=e.current;if(!n)return;let i=new fc({canvas:n,antialias:!0,alpha:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2));let s=new go,r=6,a=10,o=new xo(-a/2,a/2,r/2,-r/2,.1,20);o.position.set(0,0,10);let l=t.current;function c(){let st=l.clientWidth,et=l.clientHeight;i.setSize(st,et),a=r*(st/et),o.left=-a/2,o.right=a/2,o.updateProjectionMatrix()}c();let u=new ResizeObserver(c);u.observe(l);let h=-6,f=1,p=-1,m=-.4,b=8.5;function g(st,et,Dt,mt,Et,Ae=h){let Wt=new sn().setFromPoints([new O(Ae,st,0),new O(et,Dt,0)]),fe=new tc({color:mt,transparent:!0,opacity:Et});return new sf(Wt,fe)}s.add(g(f,m,f,8173987,.55)),s.add(g(f,b,f,8173987,.12,m)),s.add(g(p,b,p,14199114,.45));let d=new yo(.075,24),y=new yn({color:9078136}),_=new De(d,y);_.position.set(h,0,.2),s.add(_);let x=new ic(.08,.1,28),T=[0,1].map(()=>new yn({color:10135452,transparent:!0,opacity:0,side:wi})).map(st=>{let et=new De(x,st);return et.position.set(h,0,.15),s.add(et),et}),w=new ma(.05,.6),v=new yn({color:14258047,transparent:!0,opacity:.75}),A=new De(w,v);A.position.set(m,f,.1),s.add(A);let C=new ma(.22,.85),P=new yn({color:14258047,transparent:!0,opacity:.12}),L=new De(C,P);L.position.set(m,f,.05),s.add(L);let q=new ic(.06,.09,24),H=new yn({color:14199114,transparent:!0,opacity:.65,side:wi}),B=new De(q,H);B.position.set(b,p,0),s.add(B);let W=new yo(.05,16),X=new yo(.12,16);function Y(st){let et=new rs,Dt=new De(X,new yn({color:st,transparent:!0,opacity:.22})),mt=new De(W,new yn({color:st,transparent:!0,opacity:.9}));return et.add(Dt,mt),s.add(et),{group:et,glowMat:Dt.material,coreMat:mt.material}}let nt=2.1,at=1.7,ot=Array.from({length:3},()=>({p:Y(8173987),x:h-Math.random()*5,dead:0})),_t=Array.from({length:3},()=>({p:Y(14199114),x:h-Math.random()*5})),ie,Pe=performance.now(),$t=0;function j(){ie=requestAnimationFrame(j);let st=performance.now(),et=Math.min((st-Pe)/1e3,.05);Pe=st,$t+=et;for(let mt of ot){if(mt.dead>0){mt.dead-=et;let Et=Math.max(mt.dead/.5,0);mt.p.group.scale.setScalar(.5+Et*.7),mt.p.glowMat.opacity=.22*Et,mt.p.coreMat.opacity=.9*Et,mt.dead<=0&&(mt.x=h-Math.random()*2,mt.p.group.scale.setScalar(1),mt.p.glowMat.opacity=.22,mt.p.coreMat.opacity=.9)}else mt.x+=nt*et,mt.x>=m&&(mt.x=m,mt.dead=.5);mt.p.group.position.set(mt.x,f,.2)}for(let mt of _t)mt.x+=at*et,mt.x>b&&(mt.x=h-Math.random()*2),mt.p.group.position.set(mt.x,p,.2);P.opacity=.1+Math.sin($t*2)*.03;let Dt=1.7;T.forEach((mt,Et)=>{let Ae=($t+Et*Dt/T.length)%Dt/Dt,Wt=1+Ae*9;mt.scale.setScalar(Wt),mt.material.opacity=(1-Ae)*.35}),i.render(s,o)}return j(),()=>{cancelAnimationFrame(ie),u.disconnect(),s.traverse(st=>{st.geometry&&st.geometry.dispose(),st.material&&st.material.dispose()}),i.dispose()}},[]),Ut.default.createElement("div",{className:"sf6ime-signal",ref:t},Ut.default.createElement("canvas",{ref:e,className:"sf6ime-signal-canvas"}),Ut.default.createElement("div",{className:"sf6ime-signal-label sf6ime-signal-label-origin"},"\u30AD\u30FC\u5165\u529B"),Ut.default.createElement("div",{className:"sf6ime-signal-label sf6ime-signal-label-xim"},"XIM \u7D4C\u8DEF",Ut.default.createElement("span",{className:"sf6ime-tag sf6ime-tag-fail"},"\u906E\u65AD")),Ut.default.createElement("div",{className:"sf6ime-signal-label sf6ime-signal-label-imm"},"imm \u7D4C\u8DEF",Ut.default.createElement("span",{className:"sf6ime-tag sf6ime-tag-warn"},"\u51E6\u7406\u3055\u308C\u305A\u7D42\u7740")))}function qG(){let e=[...EL,...EL];return Ut.default.createElement("div",{className:"sf6ime-ticker-wrap"},Ut.default.createElement("div",{className:"sf6ime-ticker"},e.map((t,n)=>Ut.default.createElement("span",{key:n,className:"sf6ime-ticker-item"},Ut.default.createElement("span",{className:"sf6ime-ticker-dot"},"\u25CF"),t))))}function YG({tone:e,children:t}){let n=n1[e],i=e==="cause"?{animate:{boxShadow:["0 0 0 0 rgba(245,158,11,0.35)","0 0 0 5px rgba(245,158,11,0)","0 0 0 0 rgba(245,158,11,0)"]},transition:{duration:2.2,repeat:1/0,ease:"easeInOut"}}:{};return Ut.default.createElement(za.span,{className:"sf6ime-badge",style:{color:n.text,background:n.bg,borderColor:n.border},...i},Ut.default.createElement("span",{className:"sf6ime-badge-icon"},n.icon),t)}function AL(){return Ut.default.createElement(zM,{reducedMotion:"user"},Ut.default.createElement(za.div,{className:"sf6ime-root",initial:{opacity:0,y:70,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{type:"spring",stiffness:260,damping:15,mass:.7}},Ut.default.createElement("style",null,ZG),Ut.default.createElement("div",{className:"sf6ime-frame"},Ut.default.createElement("div",{className:"sf6ime-blob sf6ime-blob-1"}),Ut.default.createElement("div",{className:"sf6ime-blob sf6ime-blob-2"}),Ut.default.createElement("div",{className:"sf6ime-blob sf6ime-blob-3"}),Ut.default.createElement("div",{className:"sf6ime-content"},Ut.default.createElement("div",{className:"sf6ime-head"},Ut.default.createElement("div",{className:"sf6ime-eyebrow"},"CASE FILE"),Ut.default.createElement("div",{className:"sf6ime-title"},"\u5207\u308A\u5206\u3051\u306E\u7D4C\u7DEF"),Ut.default.createElement("div",{className:"sf6ime-subtitle"},"Street Fighter 6 (Proton) \u65E5\u672C\u8A9E\u5165\u529B\u30C8\u30E9\u30D6\u30EB")),Ut.default.createElement(XG,null),Ut.default.createElement(za.div,{className:"sf6ime-steps",initial:"hidden",animate:"visible",variants:zG},Ut.default.createElement("div",{className:"sf6ime-steps-line"}),HG.map(e=>{let t=n1[e.tone];return Ut.default.createElement(za.div,{className:"sf6ime-step",key:e.step,variants:VG},Ut.default.createElement("div",{className:"sf6ime-step-num",style:{background:t.bg,color:t.text,borderColor:t.border}},String(e.step).padStart(2,"0")),Ut.default.createElement("div",{className:"sf6ime-step-body"},Ut.default.createElement("div",{className:"sf6ime-step-head"},Ut.default.createElement("span",{className:"sf6ime-step-title"},e.title),Ut.default.createElement(YG,{tone:e.tone},e.verdict)),Ut.default.createElement("div",{className:"sf6ime-step-detail"},e.detail)))})),Ut.default.createElement("div",{className:"sf6ime-results"},Ut.default.createElement("div",{className:"sf6ime-results-title"},"\u691C\u8A3C\u3057\u305F\u5BFE\u7B56"),Ut.default.createElement(za.div,{className:"sf6ime-results-grid",initial:"hidden",animate:"visible",variants:kG},WG.map((e,t)=>{let n=n1[e.tone];return Ut.default.createElement(za.div,{key:t,className:"sf6ime-result-chip",variants:GG,whileHover:{y:-4,scale:1.03},transition:{type:"spring",stiffness:400,damping:18}},Ut.default.createElement("div",{className:"sf6ime-result-icon",style:{background:n.bg,color:n.text,borderColor:n.border}},n.icon),Ut.default.createElement("div",{className:"sf6ime-result-text"},Ut.default.createElement("div",{className:"sf6ime-result-measure"},e.measure),Ut.default.createElement("div",{className:"sf6ime-result-verdict",style:{color:n.text}},e.verdict)))})))),Ut.default.createElement(qG,null))))}var Ut,zG,VG,kG,GG,n1,HG,WG,EL,ZG,wL=D(()=>{Ut=xe(Te());TL();hb();zG={hidden:{},visible:{transition:{staggerChildren:.08,delayChildren:.15}}},VG={hidden:{opacity:0,x:-90},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:420,damping:13,mass:.6}}},kG={hidden:{},visible:{transition:{staggerChildren:.05,delayChildren:.45}}},GG={hidden:{opacity:0,y:60,scale:.75},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:450,damping:13,mass:.5}}},n1={clear:{text:"#3f7a5c",bg:"#e2f5ea",border:"#aee0c4",icon:"\u2713"},cause:{text:"#966a1f",bg:"#fbf0d9",border:"#efd49b",icon:"\u25CF"},fail:{text:"#a1524f",bg:"#fbe8e6",border:"#eebab6",icon:"\u2715"},solved:{text:"#2c7a68",bg:"#def5ee",border:"#a2ddc9",icon:"\u2713"}},HG=[{step:1,title:"\u30B3\u30F3\u30DD\u30B8\u30BF/fcitx5\u306E\u8A2D\u5B9A\u3092\u78BA\u8A8D",verdict:"\u554F\u984C\u306A\u3057",tone:"clear",detail:"Sway\u306E\u30AD\u30FC\u30D0\u30A4\u30F3\u30C9\u7AF6\u5408\u3001GTK_IM_MODULE\u7B49\u306E\u74B0\u5883\u5909\u6570\u3001fcitx5\u306E\u8A2D\u5B9A\u3002\u3044\u305A\u308C\u3082\u554F\u984C\u306A\u3057\u3002"},{step:2,title:"Proton\u304C\u610F\u56F3\u7684\u306BXIM\u3092\u7121\u52B9\u5316\u3057\u3066\u3044\u308B\u3068\u5224\u660E",verdict:"\u539F\u56E0\u3092\u7279\u5B9A",tone:"cause",detail:"\u53E4\u3044libX11\u306E\u30AF\u30E9\u30C3\u30B7\u30E5\u56DE\u907F\u306E\u305F\u3081\u3001\u516C\u5F0FProton\u306F\u30D3\u30EB\u30C9\u6642\u306BXIM\u30B5\u30DD\u30FC\u30C8\u3092\u7121\u52B9\u5316\u3057\u3066\u3044\u305F\u3002"},{step:3,title:"\u30EC\u30B8\u30B9\u30C8\u30EA\u3067UseXIM\u3092\u518D\u6709\u52B9\u5316",verdict:"\u52B9\u679C\u306A\u3057",tone:"fail",detail:"UseXIM=y\u3092\u66F8\u304D\u8FBC\u307F\u3001\u5024\u306E\u53CD\u6620\u3082\u78BA\u8A8D\u3067\u304D\u305F\u304C\u3001\u6319\u52D5\u306F\u5909\u308F\u3089\u305A\u3002"},{step:4,title:"WINEDEBUG\u3067\u30AD\u30FC\u5165\u529B\u306E\u7D4C\u8DEF\u3092\u78BA\u8A8D",verdict:"\u6839\u672C\u539F\u56E0\u3092\u78BA\u8A8D",tone:"cause",detail:"xim\u7CFB\u30ED\u30B0\u306F\u6C88\u9ED9\u3001imm\u7CFB\u3060\u3051\u304C\u52D5\u4F5C\u3002Wine\u65B0IME\u5B9F\u88C5\u304C\u30AD\u30FC\u5165\u529B\u3092XIM\u307E\u3067\u6A4B\u6E21\u3057\u3057\u3066\u3044\u306A\u304B\u3063\u305F\u3002"},{step:5,title:"fcitx5-remote\u3067\u5F37\u5236\u30C8\u30B0\u30EB",verdict:"\u52B9\u679C\u306A\u3057",tone:"fail",detail:"fcitx5\u81EA\u4F53\u306E\u72B6\u614B\u306F\u30C8\u30B0\u30EB\u3067\u304D\u305F\u304C\u3001Wine\u30A2\u30D7\u30EA\u306E\u5165\u529B\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u306B\u306F\u53CD\u6620\u3055\u308C\u305A\u3002"},{step:6,title:"GE-Proton\u3067\u518D\u691C\u8A3C",verdict:"\u540C\u4E00\u75C7\u72B6",tone:"fail",detail:"\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u7248\u306B\u5207\u308A\u66FF\u3048\u3066\u3082\u75C7\u72B6\u306F\u540C\u4E00\u3002\u7279\u5B9A\u30D3\u30EB\u30C9\u306E\u30D0\u30B0\u3067\u306F\u306A\u3044\u3068\u78BA\u5B9A\u3002"}],WG=[{measure:"\u30B3\u30F3\u30DD\u30B8\u30BF\u306E\u30AD\u30FC\u30D0\u30A4\u30F3\u30C9",verdict:"\u554F\u984C\u306A\u3057",tone:"clear"},{measure:"fcitx5\u306E\u8A2D\u5B9A",verdict:"\u554F\u984C\u306A\u3057",tone:"clear"},{measure:"\u30EC\u30B8\u30B9\u30C8\u30EA\u3067 UseXIM=y",verdict:"\u52B9\u679C\u306A\u3057",tone:"fail"},{measure:"fcitx5-remote \u3067\u5F37\u5236\u30C8\u30B0\u30EB",verdict:"\u52B9\u679C\u306A\u3057",tone:"fail"},{measure:"GE-Proton\u3078\u306E\u5207\u308A\u66FF\u3048",verdict:"\u52B9\u679C\u306A\u3057",tone:"fail"},{measure:"\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u8CBC\u308A\u4ED8\u3051",verdict:"\u52D5\u4F5C\u3059\u308B",tone:"solved"}];EL=["Proton\u516C\u5F0F\u30D3\u30EB\u30C9\u306FXIM\u3092\u7121\u52B9\u5316","\u30EC\u30B8\u30B9\u30C8\u30EA\u3067UseXIM=y\u3092\u66F8\u3044\u3066\u3082\u52B9\u679C\u306A\u3057","Wine\u65B0IME\u5B9F\u88C5\u304C\u30AD\u30FC\u5165\u529B\u3092XIM\u307E\u3067\u6A4B\u6E21\u3057\u3057\u3066\u3044\u306A\u3044","GE-Proton\u3067\u3082\u540C\u4E00\u75C7\u72B6","\u56DE\u907F\u7B56\u306F\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u7D4C\u7531\u306E\u8CBC\u308A\u4ED8\u3051"];ZG=`
.sf6ime-root{
  position:relative;
  border-radius:28px;
  padding:2.5px;
  margin:32px 0;
  background:linear-gradient(135deg, #6fb89c 0%, #dbb15a 45%, #7fa6d6 100%);
  background-size:220% 220%;
  animation:sf6ime-gradient-drift 9s ease-in-out infinite;
  box-shadow:0 20px 50px -20px rgba(60,70,90,0.35);
  font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Hiragino Sans",sans-serif;
}

.sf6ime-frame{
  position:relative;
  border-radius:26px;
  overflow:hidden;
  background:linear-gradient(150deg, #f7f9fc 0%, #fbf8f2 45%, #f2f9f5 100%);
  color:#2a2d34;
}

:root[data-theme="dark"] .sf6ime-root{
  background:linear-gradient(135deg, #4d8b73 0%, #a3812f 45%, #4f6f97 100%);
}
:root[data-theme="dark"] .sf6ime-frame{
  background:linear-gradient(150deg, #1b2027 0%, #201d1a 45%, #172019 100%);
  color:#dcdee2;
}
:root[data-theme="dark"] .sf6ime-title{color:#eceef1;}
:root[data-theme="dark"] .sf6ime-step-title{color:#e5e7eb;}
:root[data-theme="dark"] .sf6ime-results-title{color:#e5e7eb;}
:root[data-theme="dark"] .sf6ime-signal{background:rgba(0,0,0,0.22);}
:root[data-theme="dark"] .sf6ime-step-num{background:rgba(255,255,255,0.06)!important;}
:root[data-theme="dark"] .sf6ime-step:hover{background:rgba(255,255,255,0.05);}
:root[data-theme="dark"] .sf6ime-result-chip{background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.08);}
:root[data-theme="dark"] .sf6ime-result-chip:hover{background:rgba(255,255,255,0.08);}

@keyframes sf6ime-gradient-drift{
  0%,100%{background-position:0% 50%;}
  50%{background-position:100% 50%;}
}

.sf6ime-blob{
  position:absolute;
  border-radius:50%;
  filter:blur(38px);
  pointer-events:none;
  opacity:0.55;
  animation:sf6ime-float 14s ease-in-out infinite;
}
.sf6ime-blob-1{width:220px;height:220px;top:-70px;right:-50px;background:#bfe3d0;animation-duration:16s;}
.sf6ime-blob-2{width:180px;height:180px;bottom:-60px;left:-40px;background:#f3d9c4;animation-duration:19s;animation-delay:-4s;}
.sf6ime-blob-3{width:150px;height:150px;top:40%;right:8%;background:#dbe6fb;opacity:0.4;animation-duration:12s;animation-delay:-8s;}

@keyframes sf6ime-float{
  0%,100%{transform:translate(0,0) scale(1);}
  33%{transform:translate(14px,-18px) scale(1.06);}
  66%{transform:translate(-10px,10px) scale(0.96);}
}

.sf6ime-content{position:relative;padding:30px 32px 32px;}

.sf6ime-head{margin-bottom:1.4rem;}
.sf6ime-eyebrow{
  font-size:0.66rem;
  font-weight:700;
  letter-spacing:0.16em;
  color:#7c9a8c;
  margin-bottom:6px;
}
.sf6ime-title{
  font-family:"Newsreader",Georgia,serif;
  font-weight:700;
  font-size:1.7rem;
  letter-spacing:0.002em;
  background:linear-gradient(100deg, #3f7a5c 0%, #966a1f 55%, #4b6f97 100%);
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;
}
.sf6ime-subtitle{font-size:0.8rem;color:#6b7280;margin-top:6px;}

.sf6ime-ticker-wrap{
  position:relative;
  overflow:hidden;
  background:#20242c;
  padding:10px 0;
  white-space:nowrap;
}
.sf6ime-ticker-wrap::before,
.sf6ime-ticker-wrap::after{
  content:"";
  position:absolute;
  top:0;bottom:0;
  width:36px;
  z-index:2;
  pointer-events:none;
}
.sf6ime-ticker-wrap::before{left:0;background:linear-gradient(90deg,#20242c,transparent);}
.sf6ime-ticker-wrap::after{right:0;background:linear-gradient(-90deg,#20242c,transparent);}
.sf6ime-ticker{
  display:inline-block;
  animation:sf6ime-ticker-scroll 22s linear infinite;
  font-size:0.72rem;
  font-weight:500;
  letter-spacing:0.02em;
  color:#cdeadb;
}
.sf6ime-ticker-item{margin:0 22px;}
.sf6ime-ticker-dot{color:#dbb15a;margin-right:8px;font-size:0.5rem;vertical-align:middle;}
@keyframes sf6ime-ticker-scroll{from{transform:translateX(0);}to{transform:translateX(-50%);}}

.sf6ime-signal{
  position:relative;
  height:140px;
  border-radius:18px;
  overflow:hidden;
  background:rgba(255,255,255,0.5);
  margin-bottom:1.8rem;
}
.sf6ime-signal-canvas{position:absolute;inset:0;width:100%;height:100%;display:block;}
.sf6ime-signal-label{
  position:absolute;
  font-size:0.72rem;
  letter-spacing:0.01em;
  color:#4b5563;
  white-space:nowrap;
  display:flex;
  align-items:center;
  gap:6px;
  pointer-events:none;
}
.sf6ime-signal-label-origin{left:5%;top:47%;transform:translateY(-50%);opacity:0.7;}
.sf6ime-signal-label-xim{left:8%;top:22%;color:#4b8a71;}
.sf6ime-signal-label-imm{left:8%;bottom:16%;color:#a3792f;}

.sf6ime-tag{
  font-size:0.65rem;
  font-weight:600;
  padding:1px 8px;
  border-radius:999px;
}
.sf6ime-tag-fail{color:#a1524f;background:#fbe8e6;}
.sf6ime-tag-warn{color:#966a1f;background:#fbf0d9;}

.sf6ime-steps{position:relative;display:flex;flex-direction:column;margin-bottom:1.8rem;}
.sf6ime-steps-line{
  position:absolute;
  left:16px;
  top:8px;
  bottom:8px;
  width:1.5px;
  background:linear-gradient(180deg, rgba(148,163,184,0.35), rgba(148,163,184,0.08));
  z-index:0;
}
.sf6ime-step{
  position:relative;
  z-index:1;
  display:flex;
  gap:1.1rem;
  padding:0.9rem 0.2rem;
  border-bottom:1px solid rgba(148,163,184,0.18);
  transition:background 150ms ease;
  border-radius:10px;
}
.sf6ime-step:hover{background:rgba(255,255,255,0.45);}
.sf6ime-step:last-child{border-bottom:none;}
.sf6ime-step-num{
  flex-shrink:0;
  width:32px;
  height:32px;
  border-radius:50%;
  border:1.5px solid;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:0.72rem;
  font-weight:700;
  background:#fff;
}
.sf6ime-step-body{flex:1;min-width:0;}
.sf6ime-step-head{
  display:flex;
  align-items:center;
  gap:0.6rem;
  flex-wrap:wrap;
  margin-bottom:0.3rem;
}
.sf6ime-step-title{font-weight:600;font-size:0.92rem;color:#242832;}
.sf6ime-step-detail{font-size:0.83rem;color:#6b7280;line-height:1.65;}

.sf6ime-badge{
  display:inline-flex;
  align-items:center;
  gap:5px;
  padding:2px 10px;
  border-radius:999px;
  font-size:0.68rem;
  font-weight:600;
  border:1px solid;
  white-space:nowrap;
}
.sf6ime-badge-icon{font-size:0.7rem;}
.sf6ime-badge.sf6ime-pulse{animation:sf6ime-badge-pulse 2.2s ease-in-out infinite;}
@keyframes sf6ime-badge-pulse{
  0%,100%{box-shadow:0 0 0 0 rgba(245,158,11,0.35);}
  50%{box-shadow:0 0 0 5px rgba(245,158,11,0);}
}

.sf6ime-results{padding-top:0.4rem;}
.sf6ime-results-title{font-weight:600;font-size:0.88rem;color:#242832;margin-bottom:0.8rem;}
.sf6ime-results-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(210px, 1fr));
  gap:0.6rem;
}
.sf6ime-result-chip{
  display:flex;
  align-items:center;
  gap:0.7rem;
  border-radius:14px;
  padding:0.6rem 0.8rem;
  background:rgba(255,255,255,0.6);
  border:1px solid rgba(148,163,184,0.16);
  transition:box-shadow 160ms ease, background 160ms ease;
}
.sf6ime-result-chip:hover{
  background:rgba(255,255,255,0.9);
  box-shadow:0 10px 22px -12px rgba(60,70,90,0.35);
}
.sf6ime-result-icon{
  flex-shrink:0;
  width:26px;
  height:26px;
  border-radius:50%;
  border:1.5px solid;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:0.78rem;
  font-weight:700;
}
.sf6ime-result-text{min-width:0;}
.sf6ime-result-measure{font-size:0.76rem;color:#4b5563;}
.sf6ime-result-verdict{margin-top:0.2rem;font-weight:700;font-size:0.78rem;}

@media (prefers-reduced-motion: reduce){
  .sf6ime-root, .sf6ime-blob, .sf6ime-badge.sf6ime-pulse, .sf6ime-step, .sf6ime-result-chip, .sf6ime-ticker{
    transition:none!important;
    animation:none!important;
  }
}
`});var QG=Ji(()=>{var ge=xe(Te()),i1=xe(iC());sC();H2();wL();function CL({title:e,subtitle:t,children:n}){let[i,s]=(0,ge.useState)(!1);return(0,ge.useEffect)(()=>{let r=setTimeout(()=>s(!0),25);return()=>clearTimeout(r)},[]),ge.default.createElement("div",{style:{border:"1px solid var(--border, rgba(148, 163, 184, 0.45))",borderRadius:"18px",padding:"20px 22px",margin:"26px 0",background:"var(--entry, rgba(15, 23, 42, 0.96))",boxShadow:i?"0 18px 40px rgba(0,0,0,0.18)":"0 4px 18px rgba(0,0,0,0.08)",color:"var(--content, #e5e7eb)",transform:i?"translateY(0px)":"translateY(18px)",opacity:i?1:0,transition:"transform 260ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 260ms ease-out, box-shadow 260ms ease-out"}},ge.default.createElement("div",{style:{position:"relative"}},ge.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0.7rem",marginBottom:"1rem"}},ge.default.createElement("div",{style:{width:"34px",height:"34px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, rgba(56,189,248,1), rgba(129,140,248,1))",boxShadow:"0 4px 12px rgba(56,189,248,0.35)",fontSize:"1.15rem",fontWeight:700}},"\u2699"),ge.default.createElement("div",null,ge.default.createElement("div",{style:{fontWeight:700,fontSize:"1.05rem"}},e),t&&ge.default.createElement("div",{style:{fontSize:"0.8rem",opacity:.75}},t))),ge.default.createElement("div",{style:{fontSize:"0.88rem",opacity:.96,lineHeight:1.6}},n)))}function KG(){return ge.default.createElement(CL,{title:"Windows 11 \u306E\u8D77\u52D5\u30D5\u30ED\u30FC",subtitle:"UEFI \u2192 Boot Manager \u2192 winload \u2192 \u30AB\u30FC\u30CD\u30EB"},ge.default.createElement("ol",{style:{listStyle:"none",padding:0}},[{title:"UEFI \u521D\u671F\u5316",desc:"ASRock \u306E UEFI \u304C\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u3092\u521D\u671F\u5316\u3057\u3001\u300C\u3069\u306E EFI \u3092\u8D77\u52D5\u3059\u308B\u304B\u300D\u3092\u6C7A\u3081\u308B\u3002"},{title:"Windows Boot Manager \u8D77\u52D5",desc:"\u901A\u5E38\u306F EFI/Microsoft/Boot/bootmgfw.efi \u304C\u547C\u3073\u51FA\u3055\u308C\u308B\u3002"},{title:"BCD \u8AAD\u307F\u8FBC\u307F",desc:"Boot Configuration Data \u3092\u8AAD\u307F\u8FBC\u3080\u3002"},{title:"winload.efi \u5B9F\u884C",desc:"Windows \u30ED\u30FC\u30C0\u30FC\u304C\u30AB\u30FC\u30CD\u30EB\u30FB\u30C9\u30E9\u30A4\u30D0\u3092\u30E1\u30E2\u30EA\u3078\u5C55\u958B\u3002"},{title:"Windows \u30AB\u30FC\u30CD\u30EB\u521D\u671F\u5316",desc:"ntoskrnl.exe \u304C\u30C7\u30D0\u30A4\u30B9\u30C9\u30E9\u30A4\u30D0\u3084\u30B5\u30FC\u30D3\u30B9\u3092\u8D77\u52D5\u3002"},{title:"\u30ED\u30B0\u30AA\u30F3\u753B\u9762",desc:"\u30B5\u30A4\u30F3\u30A4\u30F3\u753B\u9762\u304C\u8868\u793A\u3055\u308C\u308B\u3002"}].map((t,n)=>ge.default.createElement("li",{key:n,style:{display:"flex",gap:"0.75rem",marginBottom:"0.8rem"}},ge.default.createElement("div",{style:{width:"22px",height:"22px",borderRadius:"999px",border:"1px solid rgba(148,163,184,0.8)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8rem",fontWeight:700,background:"rgba(15,23,42,0.96)",marginTop:"2px"}},n+1),ge.default.createElement("div",null,ge.default.createElement("div",{style:{fontWeight:600}},t.title),ge.default.createElement("div",null,t.desc))))),ge.default.createElement("p",{style:{fontSize:"0.8rem",opacity:.7,marginTop:"1rem"}},"\u203B bootmgfw.efi \u304C\u8907\u6570\u3042\u3063\u305F\u308A\u3001NVRAM \u306E Boot Manager \u304C\u5897\u6B96\u3057\u3066\u3044\u308B\u3068\u4E0D\u5177\u5408\u304C\u8D77\u304D\u3084\u3059\u3044\u30BE\u30FC\u30F3\u3002"))}function jG(){return ge.default.createElement(CL,{title:"systemd-boot \u306E\u30E1\u30CB\u30E5\u30FC\u69CB\u9020",subtitle:"/boot/loader \u914D\u4E0B"},ge.default.createElement("pre",{style:{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New"',fontSize:"0.8rem",padding:"0.6rem 0.8rem",background:"rgba(15,23,42,0.9)",borderRadius:"0.5rem",border:"1px solid rgba(55,65,81,0.9)",overflowX:"auto",marginBottom:"0.8rem"}},String.raw`/boot/loader/
  loader.conf
  entries/
    arch.conf
    arch-fallback.conf
    windows.conf`),ge.default.createElement("ul",{style:{paddingLeft:"1rem",fontSize:"0.85rem"}},ge.default.createElement("li",null,"loader.conf: default / timeout / console-mode \u3092\u8A2D\u5B9A\u3002"),ge.default.createElement("li",null,"entries/*.conf \u304C\u30E1\u30CB\u30E5\u30FC\u9805\u76EE\u306B\u306A\u308B\u3002"),ge.default.createElement("li",null,"windows.conf \u306F efi \u884C\u3067 bootmgfw.efi \u3078\u306E\u30D1\u30B9\u3092\u66F8\u304F\u3002")))}function JG(){let e=document.getElementById("dualboot-diagram");e&&!e.dataset.mounted&&(e.dataset.mounted="true",(0,i1.createRoot)(e).render(ge.default.createElement(Hv,null)));let t={dualboot:Hv,windows:KG,"systemd-menu":jG,"kimberly-combos":G2,"sf6-mozc-investigation":AL};document.querySelectorAll("[data-diagram]").forEach(n=>{let i=n.getAttribute("data-diagram"),s=t[i];s&&n.dataset.mounted!=="true"&&(n.dataset.mounted="true",(0,i1.createRoot)(n).render(ge.default.createElement(s,null)))})}document.addEventListener("DOMContentLoaded",JG)});QG();})();
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

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=bundle.js.map
