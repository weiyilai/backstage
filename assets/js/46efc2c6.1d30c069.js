/*! For license information please see 46efc2c6.1d30c069.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[115998],{307673:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(824246),o=r(511151);const a={id:"plugin-catalog-backend.catalogbuilder.addlocationanalyzers",title:"CatalogBuilder.addLocationAnalyzers()",description:"API reference for CatalogBuilder.addLocationAnalyzers()"},c=void 0,l={id:"reference/plugin-catalog-backend.catalogbuilder.addlocationanalyzers",title:"CatalogBuilder.addLocationAnalyzers()",description:"API reference for CatalogBuilder.addLocationAnalyzers()",source:"@site/../docs/reference/plugin-catalog-backend.catalogbuilder.addlocationanalyzers.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend.catalogbuilder.addlocationanalyzers",permalink:"/docs/reference/plugin-catalog-backend.catalogbuilder.addlocationanalyzers",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend.catalogbuilder.addlocationanalyzers.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend.catalogbuilder.addlocationanalyzers",title:"CatalogBuilder.addLocationAnalyzers()",description:"API reference for CatalogBuilder.addLocationAnalyzers()"}},u={},i=[{value:"Parameters",id:"parameters",level:2}];function s(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder",children:(0,n.jsx)(t.code,{children:"CatalogBuilder"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder.addlocationanalyzers",children:(0,n.jsx)(t.code,{children:"addLocationAnalyzers"})})]}),"\n",(0,n.jsx)(t.p,{children:"Adds Location Analyzers. These are responsible for analyzing repositories when onboarding them into the catalog, by finding catalog-info.yaml files and other artifacts that can help automatically register or create catalog data on the user's behalf."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"addLocationAnalyzers(...analyzers: Array<ScmLocationAnalyzer | Array<ScmLocationAnalyzer>>): CatalogBuilder;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"analyzers"}),(0,n.jsxs)(t.td,{children:["Array<",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node.scmlocationanalyzer",children:"ScmLocationAnalyzer"})," | Array<",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node.scmlocationanalyzer",children:"ScmLocationAnalyzer"}),">>"]}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend.catalogbuilder",children:"CatalogBuilder"})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,a={},i=null,s=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(s=t.ref),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:l.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}function m(){}function _(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var j=_.prototype=new m;j.constructor=_,h(j,b.prototype),j.isPureReactComponent=!0;var v=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var o,a={},c=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var i=Array(u),s=0;s<u;s++)i[s]=arguments[s+2];a.children=i}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:r,type:e,key:c,ref:l,props:a,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function z(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,o,a,c){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return c=c(u=e),e=""===a?"."+z(u,0):a,v(c)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),A(c,t,o,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),t.push(c)),1;if(u=0,a=""===a?".":a+":",v(e))for(var i=0;i<e.length;i++){var s=a+z(l=e[i],i);u+=A(l,t,o,s,c)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),i=0;!(l=e.next()).done;)u+=A(l=l.value,t,o,s=a+z(l,i++),c);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function R(e,t,r){if(null==e)return e;var n=[],o=0;return A(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},P={transition:null},L={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:P,ReactCurrentOwner:k};t.Children={map:R,forEach:function(e,t,r){R(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=c,t.PureComponent=_,t.StrictMode=a,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=k.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(i in t)x.call(t,i)&&!S.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==u?u[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){u=Array(i);for(var s=0;s<i;s++)u[s]=arguments[s+2];o.children=u}return{$$typeof:r,type:e.type,key:a,ref:c,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,r){return O.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,r){return O.current.useReducer(e,t,r)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return O.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>l,ah:()=>a});var n=r(667294);const o=n.createContext({});function a(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function l({components:e,children:t,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||c:a(e),n.createElement(o.Provider,{value:l},t)}}}]);