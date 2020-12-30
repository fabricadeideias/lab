(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ACV0:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("F5WI"),l=n("cVt8"),c=n("/Rk8"),s=n("+Wdg"),u={center:"center",end:"right",start:"left"},f=Object(i.css)(["text-align:",";"],(function(e){return u[e.textAlign]})),d=Object(i.css)(["color:",";"],(function(e){return Object(l.c)(e.colorProp,e.theme)})),m=i.default.h1.withConfig({displayName:"StyledHeading",componentId:"sc-1rdh4aw-0"})([""," "," "," "," "," "," ",""],c.e,(function(e){return function(e){var t=e.theme.heading.level[e.level].font;return t&&t.family?Object(i.css)(["font-family:",";"],t.family):e.theme.heading.font?Object(i.css)(["font-family:",";"],e.theme.heading.font.family):""}(e)}),(function(e){return function(e){var t=e.size||"medium",n=e.theme.heading,r=n.level[e.level];if(r){var o=r[t],l=[Object(i.css)(["font-size:",";line-height:",";max-width:",";font-weight:",";"],o?o.size:t,o?o.height:"normal",o?o.maxWidth:r.medium.maxWidth,r.font.weight||n.weight)];if(e.responsive&&n.responsiveBreakpoint){var c=e.theme.global.breakpoints[n.responsiveBreakpoint];if(c){var s=n.level[Math.min(e.level+1,4)][t];s&&l.push(Object(a.a)(c,"\n            font-size: "+s.size+";\n            line-height: "+s.height+";\n            max-width: "+s.maxWidth+";\n          "))}}return l}return console.warn("Heading level "+e.level+" is not defined in your theme."),""}(e)}),(function(e){return e.textAlign&&f}),(function(e){return e.truncate&&"\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"}),(function(e){return e.colorProp&&d}),(function(e){return e.theme.heading&&e.theme.heading.extend}));function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}m.defaultProps={},Object.setPrototypeOf(m.defaultProps,s.a);var p=Object(r.forwardRef)((function(e,t){var n=e.color,r=e.level,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["color","level"]);return o.a.createElement(m,h({as:"h"+r,colorProp:n,level:+r},i,{ref:t}))}));p.displayName="Heading",p.defaultProps={level:1,responsive:!0};var v=p},PXmS:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("Bl7J"),a=n("vrFN"),l=n("otPn"),c=n("ACV0"),s=n("t7s+"),u=n("vOnD"),f=n("Se+G");var d={global:{colors:{icon:"#666666"}},icon:{size:{small:"12px",medium:"24px",large:"48px",xlarge:"96px"}}},m={theme:d};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=Object(u.css)([""," ",' g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill="none"]{stroke-width:0;}}*[stroke*="#"],*[STROKE*="#"]{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*="#"],*[FILL*="#"]{fill:inherit;stroke:none;}'],(function(e){return Object(f.a)("fill",e.color||e.theme.global.colors.icon,e.theme)}),(function(e){return Object(f.a)("stroke",e.color||e.theme.global.colors.icon,e.theme)})),v=function(e){var t=e.a11yTitle,n=(e.color,e.size,e.theme,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["a11yTitle","color","size","theme"]));return o.a.createElement("svg",h({"aria-label":t},n))};v.displayName="Icon";var g=Object(u.default)(v).withConfig({displayName:"StyledIcon",componentId:"ofa7kd-0"})(["display:inline-block;flex:0 0 auto;"," "," ",""],(function(e){var t=e.size,n=void 0===t?"medium":t,r=e.theme;return"\n    width: "+(r.icon.size[n]||n)+";\n    height: "+(r.icon.size[n]||n)+";\n  "}),(function(e){return"plain"!==e.color&&p}),(function(e){var t=e.theme;return t&&t.icon.extend}));function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}g.defaultProps={},Object.setPrototypeOf(g.defaultProps,m);var O=function(e){return o.a.createElement(g,b({viewBox:"0 0 24 24",a11yTitle:"Github"},e),o.a.createElement("path",{fill:"#333",fillRule:"evenodd",d:"M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1"}))};t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(a.a,null),o.a.createElement(l.a,{align:"center",pad:"medium"},o.a.createElement(c.a,null,"Iniciativa Open Source"),o.a.createElement(s.a,{fill:!0},"Nós acreditamos que para qualquer atividade é melhor executada quando coletivamente. Por isso somos incentivadores e contribuidores de projetos de Software Livre, mantendo um perfil próprio no GitHub e divulgando os projetos open source existentes para seus membros. A iniciativa torna-se completa com a existência de promoção de hackathons e dojos de forma a fomentar o código aberto."),o.a.createElement(l.a,{pad:"medium",size:"large",align:"center",direction:"row",gap:"small",onClick:function(){return window.location="https://github.com/efforia"}},o.a.createElement(O,{size:"large",color:"dark-1"}),o.a.createElement(c.a,{level:2,margin:"none"},"GitHub"))))}}}]);
//# sourceMappingURL=component---src-pages-opensource-js-5446f1b7123be3e1e890.js.map