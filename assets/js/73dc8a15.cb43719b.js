/*! For license information please see 73dc8a15.cb43719b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[955516],{977608:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(824246),i=n(511151);const s={id:"plugin-permission-react",title:"@backstage/plugin-permission-react",description:"API Reference for @backstage/plugin-permission-react"},o=void 0,c={id:"reference/plugin-permission-react",title:"@backstage/plugin-permission-react",description:"API Reference for @backstage/plugin-permission-react",source:"@site/../docs/reference/plugin-permission-react.md",sourceDirName:"reference",slug:"/reference/plugin-permission-react",permalink:"/docs/reference/plugin-permission-react",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-react.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-react",title:"@backstage/plugin-permission-react",description:"API Reference for @backstage/plugin-permission-react"}},a={},l=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function u(e){const r=Object.assign({p:"p",a:"a",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-permission-react"})})]}),"\n",(0,t.jsx)(r.h2,{id:"classes",children:"Classes"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Class"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.identitypermissionapi",children:"IdentityPermissionApi"})}),(0,t.jsxs)(r.td,{children:["The default implementation of the PermissionApi, which simply calls the authorize method of the given ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionclient",children:"PermissionClient"}),"."]})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Function"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.requirepermission",children:"RequirePermission(props)"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:"A boundary that only renders its child elements if the user has the specified permission."}),(0,t.jsxs)(r.p,{children:["While loading, nothing will be rendered. If the user does not have permission, the ",(0,t.jsx)(r.code,{children:"errorPage"})," element will be rendered, falling back to the ",(0,t.jsx)(r.code,{children:"NotFoundErrorPage"})," app component if no ",(0,t.jsx)(r.code,{children:"errorPage"})," is provider."]})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.usepermission",children:"usePermission(input)"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsxs)(r.p,{children:["React hook utility for authorization. Given either a non-resource ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permission",children:"Permission"})," or a ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"})," and an optional resourceRef, it will return whether or not access is allowed (for the given resource, if resourceRef is provided). See  for more details."]}),(0,t.jsxs)(r.p,{children:["The resourceRef field is optional to allow calling this hook with an entity that might be loading asynchronously, but when resourceRef is not supplied, the value of ",(0,t.jsx)(r.code,{children:"allowed"})," will always be false."]}),(0,t.jsxs)(r.p,{children:["Note: This hook uses stale-while-revalidate to help avoid flicker in UI elements that would be conditionally rendered based on the ",(0,t.jsx)(r.code,{children:"allowed"})," result of this hook."]})]})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Variable"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.permissionapiref",children:"permissionApiRef"})}),(0,t.jsxs)(r.td,{children:["A Backstage ApiRef for the Permission API. See ",(0,t.jsx)(r.a,{href:"https://backstage.io/docs/api/utility-apis",children:"https://backstage.io/docs/api/utility-apis"})," for more information on Backstage ApiRefs."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.permissionedroute",children:"PermissionedRoute"})}),(0,t.jsxs)(r.td,{children:["Returns a React Router Route which only renders the element when authorized. If unauthorized, the Route will render a NotFoundErrorPage (see ",(0,t.jsx)(r.a,{href:"/docs/reference/core-app-api.appcomponents",children:"AppComponents"}),")."]})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Type Alias"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.asyncpermissionresult",children:"AsyncPermissionResult"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.permissionapi",children:"PermissionApi"})}),(0,t.jsx)(r.td,{children:"This API is used by various frontend utilities that allow developers to implement authorization within their frontend plugins. A plugin developer will likely not have to interact with this API or its implementations directly, but rather with the aforementioned utility components/hooks."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.requirepermissionprops",children:"RequirePermissionProps"})}),(0,t.jsxs)(r.td,{children:["Properties for ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.requirepermission",children:"RequirePermission()"})]})]})]})]})]})}const d=function(e={}){const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},371426:(e,r,n)=>{var t=n(827378),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,s={},l=null,u=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)o.call(r,t)&&!a.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:i,type:e,key:l,ref:u,props:s,_owner:c.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function j(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||h}function x(){}function b(e,r,n){this.props=e,this.context=r,this.refs=y,this.updater=n||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=j.prototype;var g=b.prototype=new x;g.constructor=b,m(g,j.prototype),g.isPureReactComponent=!0;var v=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,t){var i,s={},o=null,c=null;if(null!=r)for(i in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(o=""+r.key),r)_.call(r,i)&&!w.hasOwnProperty(i)&&(s[i]=r[i]);var a=arguments.length-2;if(1===a)s.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(i in a=e.defaultProps)void 0===s[i]&&(s[i]=a[i]);return{$$typeof:n,type:e,key:o,ref:c,props:s,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function E(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,i,s,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case n:case t:a=!0}}if(a)return o=o(a=e),e=""===s?"."+E(a,0):s,v(o)?(i="",null!=e&&(i=e.replace(S,"$&/")+"/"),C(o,r,i,"",(function(e){return e}))):null!=o&&(P(o)&&(o=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(S,"$&/")+"/")+e)),r.push(o)),1;if(a=0,s=""===s?".":s+":",v(e))for(var l=0;l<e.length;l++){var u=s+E(c=e[l],l);a+=C(c,r,i,u,o)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(c=e.next()).done;)a+=C(c=c.value,r,i,u=s+E(c,l++),o);else if("object"===c)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return a}function A(e,r,n){if(null==e)return e;var t=[],i=0;return C(e,t,"","",(function(e){return r.call(n,e,i++)})),t}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:k};r.Children={map:A,forEach:function(e,r,n){A(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return A(e,(function(){r++})),r},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=j,r.Fragment=i,r.Profiler=o,r.PureComponent=b,r.StrictMode=s,r.Suspense=u,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),s=e.key,o=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(o=r.ref,c=k.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in r)_.call(r,l)&&!w.hasOwnProperty(l)&&(i[l]=void 0===r[l]&&void 0!==a?a[l]:r[l])}var l=arguments.length-2;if(1===l)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:n,type:e.type,key:s,ref:o,props:i,_owner:c}},r.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return O.current.useCallback(e,r)},r.useContext=function(e){return O.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return O.current.useDeferredValue(e)},r.useEffect=function(e,r){return O.current.useEffect(e,r)},r.useId=function(){return O.current.useId()},r.useImperativeHandle=function(e,r,n){return O.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return O.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return O.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return O.current.useMemo(e,r)},r.useReducer=function(e,r,n){return O.current.useReducer(e,r,n)},r.useRef=function(e){return O.current.useRef(e)},r.useState=function(e){return O.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return O.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return O.current.useTransition()},r.version="18.2.0"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>c,ah:()=>s});var t=n(667294);const i=t.createContext({});function s(e){const r=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const o={};function c({components:e,children:r,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:s(e),t.createElement(i.Provider,{value:c},r)}}}]);