(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[567],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return p},mdx:function(){return b},useMDXComponents:function(){return s},withMDXComponents:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),f=function(e){return function(t){var n=s(t.components);return r.createElement(e,c({},t,{components:n}))}},s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),p=o,v=f["".concat(a,".").concat(p)]||f[p]||d[p]||c;return n?r.createElement(v,i(i({ref:t},l),{},{components:n})):r.createElement(v,i({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var c=n.length,a=new Array(c);a[0]=v;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"===typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},8093:function(e,t,n){"use strict";var r=n(7294),o=n(3905);function c(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var i=c(r),u=a(o);"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)}),t.R=function({compiledSource:e,scope:t,components:n={},lazy:o}){const[c,a]=r.useState(!o||"undefined"===typeof window);r.useEffect((()=>{if(o){const e=window.requestIdleCallback((()=>{a(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const l=r.useMemo((()=>{const n=Object.assign({mdx:u.mdx,React:i.default},t),r=Object.keys(n),o=Object.values(n),c=Reflect.construct(Function,r.concat(`${e}; return MDXContent;`));return c.apply(c,o)}),[t,e]);if(!c)return i.default.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const f=i.default.createElement(u.MDXProvider,{components:n},i.default.createElement(l,null));return o?i.default.createElement("div",null,f):f}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,c=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),i=n(4651),u=n(7426);var l={};function f(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),s=c.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),c=n[0],i=n[1];return{href:c,as:e.as?a.resolveHref(o,e.as):i||c}}),[o,e.href,e.as]),p=s.href,d=s.as,v=e.children,b=e.replace,y=e.shallow,m=e.scroll,O=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var h=(t=c.default.Children.only(v))&&"object"===typeof t&&t.ref,g=u.useIntersection({rootMargin:"200px"}),j=r(g,2),w=j[0],E=j[1],P=c.default.useCallback((function(e){w(e),h&&("function"===typeof h?h(e):"object"===typeof h&&(h.current=e))}),[h,w]);c.default.useEffect((function(){var e=E&&n&&a.isLocalURL(p),t="undefined"!==typeof O?O:o&&o.locale,r=l[p+"%"+d+(t?"%"+t:"")];e&&!r&&f(o,p,d,{locale:t})}),[d,p,E,O,n,o]);var _={ref:P,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:c,locale:u,scroll:i}))}(e,o,p,d,b,y,m,O)},onMouseEnter:function(e){a.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof O?O:o&&o.locale,k=o&&o.isLocaleDomain&&a.getDomainLocale(d,x,o&&o.locales,o&&o.domainLocales);_.href=k||a.addBasePath(a.addLocale(d,x,o&&o.defaultLocale))}return c.default.cloneElement(t,_)};t.default=s},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=o.useRef(),l=o.useState(!1),f=r(l,2),s=f[0],p=f[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||s||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,a=r.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!a&&!s){var e=c.requestIdleCallback((function(){return p(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),c=n(3447),a="undefined"!==typeof IntersectionObserver;var i=new Map},4844:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var r=n(2809),o=n(8093),c=n(9008),a=n(1664),i=n(9301),u=n.n(i),l=n(5893);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={img:function(e){var t=e.src,n=e.alt;return(0,l.jsx)("a",{href:t,children:(0,l.jsx)("img",{src:t,alt:n})})}},d=!0;t.default=function(e){var t=e.post;return(0,l.jsxs)("div",{className:u().container,children:[(0,l.jsxs)(c.default,{children:[(0,l.jsx)("title",{children:"Ethan McAuliffe"}),(0,l.jsx)("meta",{name:"description",content:"My personal website and blog"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsx)("div",{className:u().backButton,children:(0,l.jsx)(a.default,{href:"/blog",children:"\u25c0 All Posts"})}),(0,l.jsx)("h1",{children:t.title}),(0,l.jsx)(o.R,s(s({},t.content),{},{components:p}))]})}},3884:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[postName]",function(){return n(4844)}])},9301:function(e){e.exports={container:"Post_container__39vXa",backButton:"Post_backButton__2By7j"}},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=3884,e(e.s=t);var t}));var t=e.O();_N_E=t}]);