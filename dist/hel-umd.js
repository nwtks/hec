!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.hel=t()}(this,function(){"use strict";function d(t,e){Array.isArray(e)?e.forEach(function(e){return d(t,e)}):t.push(e)}return function(e,t){for(var n=[],r=arguments,o=2;o<r.length;o+=1)d(n,r[o]);if("function"==typeof e)return e(t||{},n);var i=document.createElement(e||"div");for(var f in t){var u=t[f];if(null!=u)if("dataset"===f)for(var a in u){var s=u[a];null!=s&&(i.dataset[a]=s)}else if("style"===f)if("string"==typeof u)i.style.cssText=u;else for(var l in u){var c=u[l];null!=c&&(i.style[l]=c)}else f in i||"function"==typeof u?!0===(i[f]=u)&&i.setAttribute(f.toLowerCase(),""):i.setAttribute(f,u)}return function t(n,e){e.forEach(function(e){null!=e&&(e.nodeType?n.appendChild(e):"string"==typeof e||"number"==typeof e?n.appendChild(document.createTextNode(e)):Array.isArray(e)&&t(n,e))})}(i,n),i}});