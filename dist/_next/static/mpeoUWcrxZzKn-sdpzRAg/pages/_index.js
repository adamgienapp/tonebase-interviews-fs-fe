(window.webpackJsonp=window.webpackJsonp||[]).push([["f4eb"],{"2eoD":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"autoEffect",function(){return P}),n.d(t,"batch",function(){return y}),n.d(t,"store",function(){return E}),n.d(t,"view",function(){return d});var r=n("q1tI"),o=n("+NY/");n.d(t,"clearEffect",function(){return o.e});var a=n("tsJx");const c="undefined"!=typeof window?window:void 0!==e?e:void 0,s="function"==typeof r.useState;let i=!1,u=!1,l=!1;const f=Symbol("owner component");function d(e){const t=!(e.prototype&&e.prototype.isReactComponent);let n;if(t&&s)n=(t=>{const[,n]=Object(r.useState)(),a=Object(r.useMemo)(()=>Object(o.c)(e,{scheduler:()=>n({}),lazy:!0}),[e]);Object(r.useEffect)(()=>()=>Object(o.e)(a),[]),i=!0;try{return a(t)}finally{i=!1}});else{const a=t?r.Component:e;class c extends a{constructor(e,t){super(e,t),this.state=this.state||{},this.state[f]=this,this.render=Object(o.c)(this.render,{scheduler:()=>this.setState({}),lazy:!0})}render(){u=!t,l=t;try{return t?e(this.props,this.context):super.render()}finally{u=!1,l=!1}}shouldComponentUpdate(e,t){const{props:n,state:r}=this;if(super.shouldComponentUpdate)return super.shouldComponentUpdate(e,t);if(r!==t)return!0;const o=Object.keys(n),a=Object.keys(e);return a.length!==o.length||a.some(t=>n[t]!==e[t])}static getDerivedStateFromProps(e,t){if(super.deriveStoresFromProps){const n=function(e){const t=e[f];return Object.keys(t).map(e=>t[e]).filter(o.a).map(o.d)}(t);super.deriveStoresFromProps(e,...n)}return super.getDerivedStateFromProps?super.getDerivedStateFromProps(e,t):null}componentWillUnmount(){super.componentWillUnmount&&super.componentWillUnmount(),Object(o.e)(this.render)}}n=c}return n.displayName=e.displayName||e.name,t&&Object.keys(e).forEach(t=>{n[t]=e[t]}),t&&s?Object(r.memo)(n):n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}const b=new Set,h={isOn:!1,add(e){h.isOn?b.add(e):e()},flush(){b.forEach(e=>e()),b.clear()},on(){h.isOn=!0},off(){h.isOn=!1}};function y(e,t,n){if(h.isOn)return Object(a.unstable_batchedUpdates)(()=>e.apply(t,n));try{return h.on(),Object(a.unstable_batchedUpdates)(()=>e.apply(t,n))}finally{h.flush(),h.off()}}const w=new WeakMap;function O(e){if("function"!=typeof e)return e;let t=w.get(e);return t||(t=new Proxy(e,{apply:(e,t,n)=>y(e,t,n)}),w.set(e,t)),t}function j(e,t){t.forEach(t=>(function(e,t){const n=Object.getOwnPropertyDescriptor(e,t);n&&n.writable&&"function"==typeof n.value&&(e[t]=new Proxy(n.value,{apply:(e,t,n)=>Reflect.apply(e,t,n.map(O))}))})(e,t))}function x(e,t){const n=Object.getOwnPropertyDescriptor(e,t);if(!n)return;const{value:r,writable:o,set:a,configurable:c}=n;c&&"function"==typeof a?Object.defineProperty(e,t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){p(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},n,{set:O(a)})):o&&"function"==typeof r&&(e[t]=O(r))}function v(e,t){return(t=t||Object.getOwnPropertyNames(e)).forEach(t=>x(e,t)),e}function g(e){return v(Object(o.b)("function"==typeof e?e():e))}function E(e){if(i)return Object(r.useMemo)(()=>g(e),[]);if(l)throw new Error("You cannot use state inside a function component with a pre-hooks version of React. Please update your React version to at least v16.8.0 to use this feature.");if(u)throw new Error("You cannot use state inside a render of a class component. Please create your store outside of the render function.");return g(e)}function P(e,t=[]){if(i)return Object(r.useEffect)(()=>{const t=Object(o.c)(e,{scheduler:()=>h.add(t)});return()=>Object(o.e)(t)},t);if(l)throw new Error("You cannot use autoEffect inside a function component with a pre-hooks version of React. Please update your React version to at least v16.8.0 to use this feature.");if(u)throw new Error("You cannot use autoEffect inside a render of a class component. Please use it in the constructor or lifecycle methods instead.");const n=Object(o.c)(e,{scheduler:()=>h.add(n)});return n}j(c,["setTimeout","setInterval","requestAnimationFrame","requestIdleCallback"]),c.Promise&&j(Promise.prototype,["then","catch"]),c.WebSocket&&v(WebSocket.prototype,["onopen","onmessage","onerror","onclose"])}.call(this,n("yLpj"))},Mp9Y:function(e,t,n){"use strict";var r=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("MX0m")),a=r(n("q1tI")),c=r(n("/HRN")),s=r(n("WaGi")),i=r(n("ZDA2")),u=r(n("/+P4")),l=r(n("K47E")),f=r(n("N9n2")),d=r(n("xHqa")),p=n("2eoD"),m=r(n("m/Pd")),b=function(e){function t(){var e,n;(0,c.default)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=(0,i.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(o))),(0,d.default)((0,l.default)(n),"counter",(0,p.store)({num:0,increment:function(){return n.counter.num++},decrement:function(){return n.counter.num--}})),n}return(0,f.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.autoUpdate()}},{key:"autoUpdate",value:function(){var e=(new Date).getHours();e>=9&&e<=17&&this.counter.increment(),(e<=8||e>=18)&&this.counter.decrement(),setTimeout(this.autoUpdate.bind(this),36e5)}},{key:"render",value:function(){return a.default.createElement("div",{className:"jsx-127934482"},a.default.createElement(m.default,null,a.default.createElement("title",{className:"jsx-127934482"},"Simple Counter by Adam Gienapp")),a.default.createElement("div",{className:"jsx-127934482 container"},a.default.createElement("div",{className:"jsx-127934482"},a.default.createElement("h1",{className:"jsx-127934482 title"},"Simple Counter"),a.default.createElement("h3",{className:"jsx-127934482 subtitle"},"By Adam Gienapp")),a.default.createElement("div",{className:"jsx-127934482 number"},this.counter.num),a.default.createElement("div",{className:"jsx-127934482 btn-container"},a.default.createElement("button",{onClick:this.counter.increment,className:"jsx-127934482 btn"},"+"),a.default.createElement("button",{onClick:this.counter.decrement,className:"jsx-127934482 btn"},"-"))),a.default.createElement(o.default,{id:"127934482"},["body{background:steelblue;color:#fff;font-family:Arial;}",".container{width:70%;min-width:600px;margin:0 auto;}",".title{width:500px;font-size:66px;margin:25px auto 0 auto;text-align:center;}",".subtitle{width:470px;margin:0 auto 15px auto;text-align:right;}",".number{font-size:150px;text-align:center;margin:75px 0;}",".btn-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}",".btn{height:90px;width:90px;border-radius:50%;background:darkblue;color:#fff;font-size:60px;line-height:90px;text-align:center;box-shadow:0 1px 6px black;}",".btn:hover{cursor:pointer;}",".btn:focus{outline:none;}"]))}}]),t}(a.default.Component),h=(0,p.view)(b);t.default=h},nzL9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_index",function(){var e=n("Mp9Y");return{page:e.default||e}}])},tsJx:function(e,t,n){"use strict";var r=n("i8i4");n.o(r,"unstable_batchedUpdates")&&n.d(t,"unstable_batchedUpdates",function(){return r.unstable_batchedUpdates})}},[["nzL9","5d41","9da1"]]]);