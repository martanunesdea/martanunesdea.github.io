(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7j6X":function(e,t,n){"use strict";var a=n("dZvc");function i(e,t){return function(e){var t=Object(a.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var r=/([A-Z])/g;var o=/^ms-/;function l(e){return function(e){return e.replace(r,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",a="";if("string"==typeof t)return e.style.getPropertyValue(l(t))||i(e).getPropertyValue(l(t));Object.keys(t).forEach((function(i){var r=t[i];r||0===r?!function(e){return!(!e||!s.test(e))}(i)?n+=l(i)+": "+r+";":a+=i+"("+r+") ":e.style.removeProperty(l(i))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n}},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("vOnD"),o=n("Bl7J"),l=n("vrFN"),s=(n("+eM2"),n("cWnB")),u=n("wx14"),c=n("zLVn"),d=n("TSYQ"),p=n.n(d),m=n("7j6X"),E=n("GEtZ");function f(e,t,n){void 0===n&&(n=5);var a=!1,i=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),r=Object(E.a)(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(i),r()}}function h(e,t,n,a){var i,r,o;null==n&&(i=e,r=Object(m.a)(i,"transitionDuration")||"",o=-1===r.indexOf("ms")?1e3:1,n=parseFloat(r)*o||0);var l=f(e,n,a),s=Object(E.a)(e,"transitionend",t);return function(){l(),s()}}var x=n("dI71"),g=n("i8i4"),v=n.n(g),b=!1,O=i.a.createContext(null),S=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var i,r=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?r?(i="exited",a.appearStatus="entering"):i="entered":i=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",a.state={status:i},a.nextCallback=null,a}Object(x.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,i=this.props.nodeRef?[a]:[v.a.findDOMNode(this),a],r=i[0],o=i[1],l=this.getTimeouts(),s=a?l.appear:l.enter;!e&&!n||b?this.safeSetState({status:"entered"},(function(){t.props.onEntered(r)})):(this.props.onEnter(r,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(r,o),t.onTransitionEnd(s,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(r,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:v.a.findDOMNode(this);t&&!b?(this.props.onExit(a),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:v.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=i[0],o=i[1];this.props.addEndListener(r,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(c.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.a.createElement(O.Provider,{value:null},"function"==typeof n?n(e,a):i.a.cloneElement(i.a.Children.only(n),a))},t}(i.a.Component);function C(){}S.contextType=O,S.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C},S.UNMOUNTED="unmounted",S.EXITED="exited",S.ENTERING="entering",S.ENTERED="entered",S.EXITING="exiting";var k,y=S,j=n("Qg85");var w={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function T(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],a=w[e];return n+parseInt(Object(m.a)(t,a[0]),10)+parseInt(Object(m.a)(t,a[1]),10)}var N=((k={}).exited="collapse",k.exiting="collapsing",k.entering="collapsing",k.entered="collapse show",k),I={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:T},M=i.a.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,o=e.onEntered,l=e.onExit,s=e.onExiting,d=e.className,m=e.children,E=e.dimension,f=void 0===E?"height":E,x=e.getDimensionValue,g=void 0===x?T:x,v=Object(c.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),b="function"==typeof f?f():f,O=Object(a.useMemo)((function(){return Object(j.a)((function(e){e.style[b]="0"}),n)}),[b,n]),S=Object(a.useMemo)((function(){return Object(j.a)((function(e){var t="scroll"+b[0].toUpperCase()+b.slice(1);e.style[b]=e[t]+"px"}),r)}),[b,r]),C=Object(a.useMemo)((function(){return Object(j.a)((function(e){e.style[b]=null}),o)}),[b,o]),k=Object(a.useMemo)((function(){return Object(j.a)((function(e){e.style[b]=g(b,e)+"px",e.offsetHeight}),l)}),[l,g,b]),w=Object(a.useMemo)((function(){return Object(j.a)((function(e){e.style[b]=null}),s)}),[b,s]);return i.a.createElement(y,Object(u.a)({ref:t,addEndListener:h},v,{"aria-expanded":v.role?v.in:null,onEnter:O,onEntering:S,onEntered:C,onExit:k,onExiting:w}),(function(e,t){return i.a.cloneElement(m,Object(u.a)({},t,{className:p()(d,m.props.className,N[e],"width"===b&&"width")}))}))}));M.defaultProps=I;var R=M,P=(n("IP2g"),r.a.main.withConfig({displayName:"pages__CustomMain",componentId:"sc-6kvjaa-0"})(["margin:0 auto;max-width:500px;padding:0;text-align:center;h1{padding:0;margin:10vh 0 2vh 0;}h3{padding:0;margin:2vh 0 7vh 0;}h4{padding:0;margin:0;}button{margin:2vh 0;}ul,li{padding:0;margin:0;list-style-type:none;}"])),D=r.a.div.withConfig({displayName:"pages__CustomList",componentId:"sc-6kvjaa-1"})(["margin:0 auto;max-width:400px;text-align:center;"]);function L(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{onClick:function(){return n(!t)},"aria-controls":"example-collapse-text","aria-expanded":t,variant:"outline-dark"},i.a.createElement("h4",null,"Embedded Systems Experience")),i.a.createElement(R,{in:t},i.a.createElement(D,{id:"example-collapse-text"},i.a.createElement("ul",null,i.a.createElement("li",null,"Environments: Command line tools, Code Composer Studio, IAR Embedded Workbench"),i.a.createElement("li",null,"Processors: ESP32, TI-CC2650, ARM Cortex M"),i.a.createElement("li",null,"Protocols: Bluetooth Low Energy, WiFi, UART, SPI, I2C"),i.a.createElement("li",null,"Operating systems: FreeRTOS, Bare-metal"),i.a.createElement("li",null,"Standards: MISRA C 2004, ISO 13485 and ISO 14972")))))}function A(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{onClick:function(){return n(!t)},"aria-controls":"example-collapse-text","aria-expanded":t,variant:"outline-dark"},i.a.createElement("h4",null,"Software Engineering skills")),i.a.createElement(R,{in:t},i.a.createElement(D,{id:"example-collapse-text"},i.a.createElement("ul",null,i.a.createElement("li",null,"Languages: C++, Python, Go, Javascript"),i.a.createElement("li",null,"Paradigms: Procedural programming, Object-oriented, Test-driven development"),i.a.createElement("li",null,"Tools: MySQL, AWS, React, Docker, Enterprise Architect")))))}function F(){var e=Object(a.useState)(!1),t=e[0],n=e[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{onClick:function(){return n(!t)},"aria-controls":"example-collapse-text","aria-expanded":t,variant:"outline-dark",size:"sm"},i.a.createElement("h4",null,"I don't only talk to machines!")),i.a.createElement(R,{in:t},i.a.createElement(D,{id:"example-collapse-text"},i.a.createElement("ul",null,i.a.createElement("li",null,"Fluent in Spanish and Portuguese"),i.a.createElement("li",null,"Sailor, skiier and tennis aficionado"),i.a.createElement("li",null,"Advocate for circular economics"),i.a.createElement("li",null,"Avid reader and amateur writer")))))}t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(l.a,{title:"Home"}),i.a.createElement(P,null,i.a.createElement("h1",null,"Hi, I'm Marta."),i.a.createElement("h3",null,"A software engineer with an interest in Internet of Things and data security."),i.a.createElement(L,null),i.a.createElement(A,null),i.a.createElement(F,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-32fe0f8a76da07774ece.js.map