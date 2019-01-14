/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.4
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.4
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.4'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.4
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.4'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.4
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.4'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.4
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.4'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.4
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.4'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--                        // up
    if (e.which == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.4
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.4'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.4
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.4'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (self && self.$tip && self.$tip.is(':visible')) {
      self.hoverState = 'in'
      return
    }

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()
        var containerDim = this.getPosition($container)

        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.4
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.4'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.4
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.4'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.4
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.3.4'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.4
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.4'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = $(document.body).height()

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});

/*
 * metismenu - v1.1.3
 * Easy menu jQuery plugin for Twitter Bootstrap 3
 * https://github.com/onokumus/metisMenu
 *
 * Made by Osman Nuri Okumus
 * Under MIT License
 */
;(function($, window, document, undefined) {

    var pluginName = "metisMenu",
        defaults = {
            toggle: true,
            doubleTapToGo: false
        };

    function Plugin(element, options) {
        this.element = $(element);
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {

            var $this = this.element,
                $toggle = this.settings.toggle,
                obj = this;

            if (this.isIE() <= 9) {
                $this.find("li.active").has("ul").children("ul").collapse("show");
                $this.find("li").not(".active").has("ul").children("ul").collapse("hide");
            } else {
                $this.find("li.active").has("ul").children("ul").addClass("collapse in");
                $this.find("li").not(".active").has("ul").children("ul").addClass("collapse");
            }

            //add the "doubleTapToGo" class to active items if needed
            if (obj.settings.doubleTapToGo) {
                $this.find("li.active").has("ul").children("a").addClass("doubleTapToGo");
            }

            $this.find("li").has("ul").children("a").on("click" + "." + pluginName, function(e) {
                e.preventDefault();

                //Do we need to enable the double tap
                if (obj.settings.doubleTapToGo) {

                    //if we hit a second time on the link and the href is valid, navigate to that url
                    if (obj.doubleTapToGo($(this)) && $(this).attr("href") !== "#" && $(this).attr("href") !== "") {
                        e.stopPropagation();
                        document.location = $(this).attr("href");
                        return;
                    }
                }

                $(this).parent("li").toggleClass("active").children("ul").collapse("toggle");

                if ($toggle) {
                    $(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide");
                }

            });
        },

        isIE: function() { //https://gist.github.com/padolsey/527683
            var undef,
                v = 3,
                div = document.createElement("div"),
                all = div.getElementsByTagName("i");

            while (
                div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->",
                all[0]
            ) {
                return v > 4 ? v : undef;
            }
        },

        //Enable the link on the second click.
        doubleTapToGo: function(elem) {
            var $this = this.element;

            //if the class "doubleTapToGo" exists, remove it and return
            if (elem.hasClass("doubleTapToGo")) {
                elem.removeClass("doubleTapToGo");
                return true;
            }

            //does not exists, add a new class and return false
            if (elem.parent().children("ul").length) {
                 //first remove all other class
                $this.find(".doubleTapToGo").removeClass("doubleTapToGo");
                //add the class on the current element
                elem.addClass("doubleTapToGo");
                return false;
            }
        },

        remove: function() {
            this.element.off("." + pluginName);
            this.element.removeData(pluginName);
        }

    };

    $.fn[pluginName] = function(options) {
        this.each(function () {
            var el = $(this);
            if (el.data(pluginName)) {
                el.data(pluginName).remove();
            }
            el.data(pluginName, new Plugin(this, options));
        });
        return this;
    };

})(jQuery, window, document);
/**
 * Created by edwin on 11/7/15.
 */

$(document).ready(function(){

    $('#selectAllBoxes').click(function(event){

        if(this.checked) {

            $('.checkBoxes').each(function(){

                this.checked = true;

            });

        } else {


            $('.checkBoxes').each(function(){

                this.checked = false;

            });


        }

    });





    /**************** User Profile **********************/



    var panels = $('.user-infos');
    var panelsButton = $('.dropdown-user');
    panels.hide();

    //Click dropdown
    panelsButton.click(function() {
        //get data-for attribute
        var dataFor = $(this).attr('data-for');
        var idFor = $(dataFor);

        //current button
        var currentButton = $(this);
        idFor.slideToggle(400, function() {
            //Completed slidetoggle
            if(idFor.is(':visible'))
            {
                currentButton.html('<i class="glyphicon glyphicon-chevron-up text-muted"></i>');
            }
            else
            {
                currentButton.html('<i class="glyphicon glyphicon-chevron-down text-muted"></i>');
            }
        })
    });


    $('[data-toggle="tooltip"]').tooltip();

    //$('button').click(function(e) {
    //    e.preventDefault();
    //    alert("This is a demo.\n :-)");
    //});






});
/*! algoliasearch 3.32.0 | © 2014, 2015 Algolia SAS | github.com/algolia/algoliasearch-client-js */
!function(e){var t;"undefined"!=typeof window?t=window:"undefined"!=typeof self&&(t=self),t.ALGOLIA_MIGRATION_LAYER=e()}(function(){return function e(t,r,o){function n(s,a){if(!r[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return n(r?r:e)},l,l.exports,e,t,r,o)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e,t,r){function o(e,t){for(var r in t)e.setAttribute(r,t[r])}function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function i(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}t.exports=function(e,t,r){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof t&&(r=t,t={}),t=t||{},r=r||function(){},a.type=t.type||"text/javascript",a.charset=t.charset||"utf8",a.async=!("async"in t)||!!t.async,a.src=e,t.attrs&&o(a,t.attrs),t.text&&(a.text=""+t.text);var c="onload"in a?n:i;c(a,r),a.onload||n(a,r),s.appendChild(a)}},{}],2:[function(e,t,r){"use strict";function o(e){for(var t=new RegExp("cdn\\.jsdelivr\\.net/algoliasearch/latest/"+e.replace(".","\\.")+"(?:\\.min)?\\.js$"),r=document.getElementsByTagName("script"),o=!1,n=0,i=r.length;n<i;n++)if(r[n].src&&t.test(r[n].src)){o=!0;break}return o}t.exports=o},{}],3:[function(e,t,r){"use strict";function o(t){var r=e(1),o="//cdn.jsdelivr.net/algoliasearch/2/"+t+".min.js",i="-- AlgoliaSearch `latest` warning --\nWarning, you are using the `latest` version string from jsDelivr to load the AlgoliaSearch library.\nUsing `latest` is no more recommended, you should load //cdn.jsdelivr.net/algoliasearch/2/algoliasearch.min.js\n\nAlso, we updated the AlgoliaSearch JavaScript client to V3. If you want to upgrade,\nplease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch  `latest` warning --";window.console&&(window.console.warn?window.console.warn(i):window.console.log&&window.console.log(i));try{document.write("<script>window.ALGOLIA_SUPPORTS_DOCWRITE = true</script>"),window.ALGOLIA_SUPPORTS_DOCWRITE===!0?(document.write('<script src="'+o+'"></script>'),n("document.write")()):r(o,n("DOMElement"))}catch(s){r(o,n("DOMElement"))}}function n(e){return function(){var t="AlgoliaSearch: loaded V2 script using "+e;window.console&&window.console.log&&window.console.log(t)}}t.exports=o},{1:1}],4:[function(e,t,r){"use strict";function o(){var e="-- AlgoliaSearch V2 => V3 error --\nYou are trying to use a new version of the AlgoliaSearch JavaScript client with an old notation.\nPlease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch V2 => V3 error --";window.AlgoliaSearch=function(){throw new Error(e)},window.AlgoliaSearchHelper=function(){throw new Error(e)},window.AlgoliaExplainResults=function(){throw new Error(e)}}t.exports=o},{}],5:[function(e,t,r){"use strict";function o(t){var r=e(2),o=e(3),n=e(4);r(t)?o(t):n()}o("algoliasearch")},{2:2,3:3,4:4}]},{},[5])(5)}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.algoliasearch=e()}}(function(){var e;return function t(e,r,o){function n(s,a){if(!r[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return n(r?r:t)},l,l.exports,t,e,r,o)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e,t,r){(function(o){function n(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+r.humanize(this.diff),t){var o="color: "+this.color;e.splice(1,0,o,"color: inherit");var n=0,i=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(n++,"%c"===e&&(i=n))}),e.splice(i,0,o)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(e){try{null==e?r.storage.removeItem("debug"):r.storage.debug=e}catch(t){}}function c(){var e;try{e=r.storage.debug}catch(t){}return!e&&"undefined"!=typeof o&&"env"in o&&(e=o.env.DEBUG),e}function u(){try{return window.localStorage}catch(e){}}r=t.exports=e(2),r.log=s,r.formatArgs=i,r.save=a,r.load=c,r.useColors=n,r.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],r.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},r.enable(c())}).call(this,e(12))},{12:12,2:2}],2:[function(e,t,r){function o(e){var t,o=0;for(t in e)o=(o<<5)-o+e.charCodeAt(t),o|=0;return r.colors[Math.abs(o)%r.colors.length]}function n(e){function t(){if(t.enabled){var e=t,o=+new Date,n=o-(u||o);e.diff=n,e.prev=u,e.curr=o,u=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=r.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var a=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(t,o){if("%%"===t)return t;a++;var n=r.formatters[o];if("function"==typeof n){var s=i[a];t=n.call(e,s),i.splice(a,1),a--}return t}),r.formatArgs.call(e,i);var c=t.log||r.log||console.log.bind(console);c.apply(e,i)}}return t.namespace=e,t.enabled=r.enabled(e),t.useColors=r.useColors(),t.color=o(e),"function"==typeof r.init&&r.init(t),t}function i(e){r.save(e),r.names=[],r.skips=[];for(var t=("string"==typeof e?e:"").split(/[\s,]+/),o=t.length,n=0;n<o;n++)t[n]&&(e=t[n].replace(/\*/g,".*?"),"-"===e[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")))}function s(){r.enable("")}function a(e){var t,o;for(t=0,o=r.skips.length;t<o;t++)if(r.skips[t].test(e))return!1;for(t=0,o=r.names.length;t<o;t++)if(r.names[t].test(e))return!0;return!1}function c(e){return e instanceof Error?e.stack||e.message:e}r=t.exports=n.debug=n["default"]=n,r.coerce=c,r.disable=s,r.enable=i,r.enabled=a,r.humanize=e(9),r.names=[],r.skips=[],r.formatters={};var u},{9:9}],3:[function(t,r,o){(function(n,i){!function(t,n){"object"==typeof o&&"undefined"!=typeof r?r.exports=n():"function"==typeof e&&e.amd?e(n):t.ES6Promise=n()}(this,function(){"use strict";function e(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}function r(e){return"function"==typeof e}function o(e){X=e}function s(e){W=e}function a(){return function(){return n.nextTick(d)}}function c(){return"undefined"!=typeof V?function(){V(d)}:p()}function u(){var e=0,t=new Z(d),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){r.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=d,function(){return e.port2.postMessage(0)}}function p(){var e=setTimeout;return function(){return e(d,1)}}function d(){for(var e=0;e<$;e+=2){var t=re[e],r=re[e+1];t(r),re[e]=void 0,re[e+1]=void 0}$=0}function h(){try{var e=t,r=e("vertx");return V=r.runOnLoop||r.runOnContext,c()}catch(o){return p()}}function f(e,t){var r=arguments,o=this,n=new this.constructor(m);void 0===n[ne]&&C(n);var i=o._state;return i?!function(){var e=r[i-1];W(function(){return E(i,n,e,o._result)})}():I(o,n,e,t),n}function y(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var r=new t(m);return R(r,e),r}function m(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function g(){return new TypeError("A promises callback cannot return that same promise.")}function b(e){try{return e.then}catch(t){return ce.error=t,ce}}function w(e,t,r,o){try{e.call(t,r,o)}catch(n){return n}}function _(e,t,r){W(function(e){var o=!1,n=w(r,t,function(r){o||(o=!0,t!==r?R(e,r):j(e,r))},function(t){o||(o=!0,S(e,t))},"Settle: "+(e._label||" unknown promise"));!o&&n&&(o=!0,S(e,n))},e)}function T(e,t){t._state===se?j(e,t._result):t._state===ae?S(e,t._result):I(t,void 0,function(t){return R(e,t)},function(t){return S(e,t)})}function x(e,t,o){t.constructor===e.constructor&&o===f&&t.constructor.resolve===y?T(e,t):o===ce?(S(e,ce.error),ce.error=null):void 0===o?j(e,t):r(o)?_(e,t,o):j(e,t)}function R(t,r){t===r?S(t,v()):e(r)?x(t,r,b(r)):j(t,r)}function A(e){e._onerror&&e._onerror(e._result),k(e)}function j(e,t){e._state===ie&&(e._result=t,e._state=se,0!==e._subscribers.length&&W(k,e))}function S(e,t){e._state===ie&&(e._state=ae,e._result=t,W(A,e))}function I(e,t,r,o){var n=e._subscribers,i=n.length;e._onerror=null,n[i]=t,n[i+se]=r,n[i+ae]=o,0===i&&e._state&&W(k,e)}function k(e){var t=e._subscribers,r=e._state;if(0!==t.length){for(var o=void 0,n=void 0,i=e._result,s=0;s<t.length;s+=3)o=t[s],n=t[s+r],o?E(r,o,n,i):n(i);e._subscribers.length=0}}function O(){this.error=null}function q(e,t){try{return e(t)}catch(r){return ue.error=r,ue}}function E(e,t,o,n){var i=r(o),s=void 0,a=void 0,c=void 0,u=void 0;if(i){if(s=q(o,n),s===ue?(u=!0,a=s.error,s.error=null):c=!0,t===s)return void S(t,g())}else s=n,c=!0;t._state!==ie||(i&&c?R(t,s):u?S(t,a):e===se?j(t,s):e===ae&&S(t,s))}function U(e,t){try{t(function(t){R(e,t)},function(t){S(e,t)})}catch(r){S(e,r)}}function P(){return le++}function C(e){e[ne]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function N(e,t){this._instanceConstructor=e,this.promise=new e(m),this.promise[ne]||C(this.promise),G(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&j(this.promise,this._result))):S(this.promise,D())}function D(){return new Error("Array Methods must be provided an Array")}function K(e){return new N(this,e).promise}function L(e){var t=this;return new t(G(e)?function(r,o){for(var n=e.length,i=0;i<n;i++)t.resolve(e[i]).then(r,o)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function H(e){var t=this,r=new t(m);return S(r,e),r}function M(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function J(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function F(e){this[ne]=P(),this._result=this._state=void 0,this._subscribers=[],m!==e&&("function"!=typeof e&&M(),this instanceof F?U(this,e):J())}function B(){var e=void 0;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var r=e.Promise;if(r){var o=null;try{o=Object.prototype.toString.call(r.resolve())}catch(t){}if("[object Promise]"===o&&!r.cast)return}e.Promise=F}var Q=void 0;Q=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var G=Q,$=0,V=void 0,X=void 0,W=function(e,t){re[$]=e,re[$+1]=t,$+=2,2===$&&(X?X(d):oe())},Y="undefined"!=typeof window?window:void 0,z=Y||{},Z=z.MutationObserver||z.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof n&&"[object process]"==={}.toString.call(n),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,re=new Array(1e3),oe=void 0;oe=ee?a():Z?u():te?l():void 0===Y&&"function"==typeof t?h():p();var ne=Math.random().toString(36).substring(16),ie=void 0,se=1,ae=2,ce=new O,ue=new O,le=0;return N.prototype._enumerate=function(e){for(var t=0;this._state===ie&&t<e.length;t++)this._eachEntry(e[t],t)},N.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,o=r.resolve;if(o===y){var n=b(e);if(n===f&&e._state!==ie)this._settledAt(e._state,t,e._result);else if("function"!=typeof n)this._remaining--,this._result[t]=e;else if(r===F){var i=new r(m);x(i,e,n),this._willSettleAt(i,t)}else this._willSettleAt(new r(function(t){return t(e)}),t)}else this._willSettleAt(o(e),t)},N.prototype._settledAt=function(e,t,r){var o=this.promise;o._state===ie&&(this._remaining--,e===ae?S(o,r):this._result[t]=r),0===this._remaining&&j(o,this._result)},N.prototype._willSettleAt=function(e,t){var r=this;I(e,void 0,function(e){return r._settledAt(se,t,e)},function(e){return r._settledAt(ae,t,e)})},F.all=K,F.race=L,F.resolve=y,F.reject=H,F._setScheduler=o,F._setAsap=s,F._asap=W,F.prototype={constructor:F,then:f,"catch":function(e){return this.then(null,e)}},F.polyfill=B,F.Promise=F,F})}).call(this,t(12),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{12:12}],4:[function(e,t,r){function o(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function i(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._maxListeners=void 0,o.defaultMaxListeners=10,o.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},o.prototype.emit=function(e){var t,r,o,i,c,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(r=this._events[e],a(r))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),r.apply(this,i)}else if(s(r))for(i=Array.prototype.slice.call(arguments,1),u=r.slice(),o=u.length,c=0;c<o;c++)u[c].apply(this,i);return!0},o.prototype.addListener=function(e,t){var r;if(!n(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned&&(r=a(this._maxListeners)?o.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},o.prototype.on=o.prototype.addListener,o.prototype.once=function(e,t){function r(){this.removeListener(e,r),o||(o=!0,t.apply(this,arguments))}if(!n(t))throw TypeError("listener must be a function");var o=!1;return r.listener=t,this.on(e,r),this},o.prototype.removeListener=function(e,t){var r,o,i,a;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],i=r.length,o=-1,r===t||n(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(r)){for(a=i;a-- >0;)if(r[a]===t||r[a].listener&&r[a].listener===t){o=a;break}if(o<0)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(o,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},o.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],n(r))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},o.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},o.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},o.listenerCount=function(e,t){return e.listenerCount(t)}},{}],5:[function(e,t,r){var o=Object.prototype.hasOwnProperty,n=Object.prototype.toString;t.exports=function(e,t,r){if("[object Function]"!==n.call(t))throw new TypeError("iterator must be a function");var i=e.length;if(i===+i)for(var s=0;s<i;s++)t.call(r,e[s],s,e);else for(var a in e)o.call(e,a)&&t.call(r,e[a],a,e)}},{}],6:[function(e,t,r){(function(e){var r;r="undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:{},t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t,r){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},{}],8:[function(e,t,r){var o={}.toString;t.exports=Array.isArray||function(e){return"[object Array]"==o.call(e)}},{}],9:[function(e,t,r){function o(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]),o=(t[2]||"ms").toLowerCase();switch(o){case"years":case"year":case"yrs":case"yr":case"y":return r*p;case"days":case"day":case"d":return r*l;case"hours":case"hour":case"hrs":case"hr":case"h":return r*u;case"minutes":case"minute":case"mins":case"min":case"m":return r*c;case"seconds":case"second":case"secs":case"sec":case"s":return r*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function n(e){return e>=l?Math.round(e/l)+"d":e>=u?Math.round(e/u)+"h":e>=c?Math.round(e/c)+"m":e>=a?Math.round(e/a)+"s":e+"ms"}function i(e){return s(e,l,"day")||s(e,u,"hour")||s(e,c,"minute")||s(e,a,"second")||e+" ms"}function s(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}var a=1e3,c=60*a,u=60*c,l=24*u,p=365.25*l;t.exports=function(e,t){t=t||{};var r=typeof e;if("string"===r&&e.length>0)return o(e);if("number"===r&&isNaN(e)===!1)return t["long"]?i(e):n(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],10:[function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=Object.prototype.toString,i=Array.prototype.slice,s=e(11),a=Object.prototype.propertyIsEnumerable,c=!a.call({toString:null},"toString"),u=a.call(function(){},"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(e){var t=e.constructor;return t&&t.prototype===e},d={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},h=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!d["$"+e]&&o.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{p(window[e])}catch(t){return!0}}catch(t){return!0}return!1}(),f=function(e){if("undefined"==typeof window||!h)return p(e);try{return p(e)}catch(t){return!1}},y=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===n.call(e),i=s(e),a=t&&"[object String]"===n.call(e),p=[];if(!t&&!r&&!i)throw new TypeError("Object.keys called on a non-object");var d=u&&r;if(a&&e.length>0&&!o.call(e,0))for(var h=0;h<e.length;++h)p.push(String(h));if(i&&e.length>0)for(var y=0;y<e.length;++y)p.push(String(y));else for(var m in e)d&&"prototype"===m||!o.call(e,m)||p.push(String(m));if(c)for(var v=f(e),g=0;g<l.length;++g)v&&"constructor"===l[g]||!o.call(e,l[g])||p.push(l[g]);return p};y.shim=function(){if(Object.keys){var e=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!e){var t=Object.keys;Object.keys=function(e){return t(s(e)?i.call(e):e)}}}else Object.keys=y;return Object.keys||y},t.exports=y},{11:11}],11:[function(e,t,r){"use strict";var o=Object.prototype.toString;t.exports=function(e){var t=o.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===o.call(e.callee)),r}},{}],12:[function(e,t,r){function o(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(e){if(p===setTimeout)return setTimeout(e,0);if((p===o||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}function s(e){if(d===clearTimeout)return clearTimeout(e);if((d===n||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){m&&f&&(m=!1,f.length?y=f.concat(y):v=-1,y.length&&c())}function c(){if(!m){var e=i(a);m=!0;for(var t=y.length;t;){for(f=y,y=[];++v<t;)f&&f[v].run();v=-1,t=y.length}f=null,m=!1,s(e)}}function u(e,t){this.fun=e,this.array=t}function l(){}var p,d,h=t.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:o}catch(e){p=o}try{d="function"==typeof clearTimeout?clearTimeout:n}catch(e){d=n}}();var f,y=[],m=!1,v=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];y.push(new u(e,t)),1!==y.length||m||i(c)},u.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=l,h.addListener=l,h.once=l,h.off=l,h.removeListener=l,h.removeAllListeners=l,h.emit=l,h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}],13:[function(e,t,r){"use strict";function o(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,r,i){t=t||"&",r=r||"=";var s={};if("string"!=typeof e||0===e.length)return s;var a=/\+/g;e=e.split(t);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var u=e.length;c>0&&u>c&&(u=c);for(var l=0;l<u;++l){var p,d,h,f,y=e[l].replace(a,"%20"),m=y.indexOf(r);m>=0?(p=y.substr(0,m),d=y.substr(m+1)):(p=y,d=""),h=decodeURIComponent(p),f=decodeURIComponent(d),o(s,h)?n(s[h])?s[h].push(f):s[h]=[s[h],f]:s[h]=f}return s};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],14:[function(e,t,r){"use strict";function o(e,t){if(e.map)return e.map(t);for(var r=[],o=0;o<e.length;o++)r.push(t(e[o],o));return r}var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,r,a){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?o(s(e),function(s){var a=encodeURIComponent(n(s))+r;return i(e[s])?o(e[s],function(e){return a+encodeURIComponent(n(e))}).join(t):a+encodeURIComponent(n(e[s]))}).join(t):a?encodeURIComponent(n(a))+r+encodeURIComponent(n(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},{}],15:[function(e,t,r){"use strict";r.decode=r.parse=e(13),r.encode=r.stringify=e(14)},{13:13,14:14}],16:[function(e,t,r){function o(){c.apply(this,arguments)}function n(){var e="Not implemented in this environment.\nIf you feel this is a mistake, write to support@algolia.com";throw new l.AlgoliaSearchError(e)}t.exports=o;var i=e(18),s=e(28),a=e(29),c=e(17),u=e(7),l=e(30);u(o,c),o.prototype.deleteIndex=function(e,t){return this._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(e),hostType:"write",callback:t})},o.prototype.moveIndex=function(e,t,r){var o={operation:"move",destination:t};return this._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(e)+"/operation",body:o,hostType:"write",callback:r})},o.prototype.copyIndex=function(e,t,r,o){var n={operation:"copy",destination:t},i=o;if("function"==typeof r)i=r;else if(Array.isArray(r)&&r.length>0)n.scope=r;else if("undefined"!=typeof r)throw new Error("the scope given to `copyIndex` was not an array with settings, synonyms or rules");return this._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(e)+"/operation",body:n,hostType:"write",callback:i})},o.prototype.getLogs=function(t,r,o){var n=e(26),i={};return"object"==typeof t?(i=n(t),o=r):0===arguments.length||"function"==typeof t?o=t:1===arguments.length||"function"==typeof r?(o=r,i.offset=t):(i.offset=t,i.length=r),void 0===i.offset&&(i.offset=0),void 0===i.length&&(i.length=10),this._jsonRequest({method:"GET",url:"/1/logs?"+this._getSearchParams(i,""),hostType:"read",callback:o})},o.prototype.listIndexes=function(e,t){var r="";return void 0===e||"function"==typeof e?t=e:r="?page="+e,this._jsonRequest({method:"GET",url:"/1/indexes"+r,hostType:"read",callback:t})},o.prototype.initIndex=function(e){return new i(this,e)},o.prototype.initAnalytics=function(t){var r=e(27);return r(this.applicationID,this.apiKey,t)},o.prototype.listUserKeys=s(function(e){return this.listApiKeys(e)},a("client.listUserKeys()","client.listApiKeys()")),o.prototype.listApiKeys=function(e){return this._jsonRequest({method:"GET",url:"/1/keys",hostType:"read",callback:e})},o.prototype.getUserKeyACL=s(function(e,t){return this.getApiKey(e,t)},a("client.getUserKeyACL()","client.getApiKey()")),o.prototype.getApiKey=function(e,t){return this._jsonRequest({method:"GET",url:"/1/keys/"+e,hostType:"read",callback:t})},o.prototype.deleteUserKey=s(function(e,t){return this.deleteApiKey(e,t)},a("client.deleteUserKey()","client.deleteApiKey()")),o.prototype.deleteApiKey=function(e,t){return this._jsonRequest({method:"DELETE",url:"/1/keys/"+e,hostType:"write",callback:t})},o.prototype.addUserKey=s(function(e,t,r){return this.addApiKey(e,t,r)},a("client.addUserKey()","client.addApiKey()")),o.prototype.addApiKey=function(t,r,o){var n=e(8),i="Usage: client.addApiKey(arrayOfAcls[, params, callback])";if(!n(t))throw new Error(i);1!==arguments.length&&"function"!=typeof r||(o=r,r=null);var s={acl:t};return r&&(s.validity=r.validity,s.maxQueriesPerIPPerHour=r.maxQueriesPerIPPerHour,s.maxHitsPerQuery=r.maxHitsPerQuery,s.indexes=r.indexes,s.description=r.description,r.queryParameters&&(s.queryParameters=this._getSearchParams(r.queryParameters,"")),s.referers=r.referers),this._jsonRequest({method:"POST",url:"/1/keys",body:s,hostType:"write",callback:o})},o.prototype.addUserKeyWithValidity=s(function(e,t,r){return this.addApiKey(e,t,r)},a("client.addUserKeyWithValidity()","client.addApiKey()")),o.prototype.updateUserKey=s(function(e,t,r,o){return this.updateApiKey(e,t,r,o)},a("client.updateUserKey()","client.updateApiKey()")),o.prototype.updateApiKey=function(t,r,o,n){var i=e(8),s="Usage: client.updateApiKey(key, arrayOfAcls[, params, callback])";if(!i(r))throw new Error(s);2!==arguments.length&&"function"!=typeof o||(n=o,o=null);var a={acl:r};return o&&(a.validity=o.validity,a.maxQueriesPerIPPerHour=o.maxQueriesPerIPPerHour,a.maxHitsPerQuery=o.maxHitsPerQuery,a.indexes=o.indexes,a.description=o.description,o.queryParameters&&(a.queryParameters=this._getSearchParams(o.queryParameters,"")),a.referers=o.referers),this._jsonRequest({method:"PUT",url:"/1/keys/"+t,body:a,hostType:"write",callback:n})},o.prototype.startQueriesBatch=s(function(){this._batch=[]},a("client.startQueriesBatch()","client.search()")),o.prototype.addQueryInBatch=s(function(e,t,r){this._batch.push({indexName:e,query:t,params:r})},a("client.addQueryInBatch()","client.search()")),o.prototype.sendQueriesBatch=s(function(e){return this.search(this._batch,e)},a("client.sendQueriesBatch()","client.search()")),o.prototype.batch=function(t,r){var o=e(8),n="Usage: client.batch(operations[, callback])";if(!o(t))throw new Error(n);return this._jsonRequest({method:"POST",url:"/1/indexes/*/batch",body:{requests:t},hostType:"write",callback:r})},o.prototype.assignUserID=function(e,t){if(!e.userID||!e.cluster)throw new l.AlgoliaSearchError("You have to provide both a userID and cluster",e);return this._jsonRequest({method:"POST",url:"/1/clusters/mapping",hostType:"write",body:{cluster:e.cluster},callback:t,headers:{"x-algolia-user-id":e.userID}})},o.prototype.getTopUserID=function(e){return this._jsonRequest({method:"GET",url:"/1/clusters/mapping/top",hostType:"read",callback:e})},o.prototype.getUserID=function(e,t){if(!e.userID)throw new l.AlgoliaSearchError("You have to provide a userID",{debugData:e});return this._jsonRequest({method:"GET",url:"/1/clusters/mapping/"+e.userID,hostType:"read",callback:t})},o.prototype.listClusters=function(e){return this._jsonRequest({method:"GET",url:"/1/clusters",hostType:"read",callback:e})},o.prototype.listUserIDs=function(e,t){return this._jsonRequest({method:"GET",url:"/1/clusters/mapping",body:e,hostType:"read",callback:t})},o.prototype.removeUserID=function(e,t){if(!e.userID)throw new l.AlgoliaSearchError("You have to provide a userID",{debugData:e});return this._jsonRequest({method:"DELETE",url:"/1/clusters/mapping",hostType:"write",callback:t,headers:{"x-algolia-user-id":e.userID}})},o.prototype.searchUserIDs=function(e,t){return this._jsonRequest({method:"POST",url:"/1/clusters/mapping/search",body:e,hostType:"read",callback:t})},o.prototype.setPersonalizationStrategy=function(e,t){return this._jsonRequest({method:"POST",url:"/1/recommendation/personalization/strategy",body:e,hostType:"write",callback:t})},o.prototype.getPersonalizationStrategy=function(e){return this._jsonRequest({method:"GET",url:"/1/recommendation/personalization/strategy",hostType:"write",callback:e})},o.prototype.destroy=n,o.prototype.enableRateLimitForward=n,o.prototype.disableRateLimitForward=n,o.prototype.useSecuredAPIKey=n,o.prototype.disableSecuredAPIKey=n,o.prototype.generateSecuredApiKey=n},{17:17,18:18,26:26,27:27,28:28,29:29,30:30,7:7,8:8}],17:[function(e,t,r){(function(r){function o(t,r,o){var i=e(1)("algoliasearch"),s=e(26),a=e(8),u=e(32),l="Usage: algoliasearch(applicationID, apiKey, opts)";if(o._allowEmptyCredentials!==!0&&!t)throw new c.AlgoliaSearchError("Please provide an application ID. "+l);if(o._allowEmptyCredentials!==!0&&!r)throw new c.AlgoliaSearchError("Please provide an API key. "+l);this.applicationID=t,this.apiKey=r,this.hosts={read:[],write:[]},o=o||{},this._timeouts=o.timeouts||{connect:1e3,read:2e3,write:3e4
},o.timeout&&(this._timeouts.connect=this._timeouts.read=this._timeouts.write=o.timeout);var p=o.protocol||"https:";if(/:$/.test(p)||(p+=":"),"http:"!==p&&"https:"!==p)throw new c.AlgoliaSearchError("protocol must be `http:` or `https:` (was `"+o.protocol+"`)");if(this._checkAppIdData(),o.hosts)a(o.hosts)?(this.hosts.read=s(o.hosts),this.hosts.write=s(o.hosts)):(this.hosts.read=s(o.hosts.read),this.hosts.write=s(o.hosts.write));else{var d=u(this._shuffleResult,function(e){return t+"-"+e+".algolianet.com"}),h=(o.dsn===!1?"":"-dsn")+".algolia.net";this.hosts.read=[this.applicationID+h].concat(d),this.hosts.write=[this.applicationID+".algolia.net"].concat(d)}this.hosts.read=u(this.hosts.read,n(p)),this.hosts.write=u(this.hosts.write,n(p)),this.extraHeaders={},this.cache=o._cache||{},this._ua=o._ua,this._useCache=!(void 0!==o._useCache&&!o._cache)||o._useCache,this._useRequestCache=this._useCache&&o._useRequestCache,this._useFallback=void 0===o.useFallback||o.useFallback,this._setTimeout=o._setTimeout,i("init done, %j",this)}function n(e){return function(t){return e+"//"+t.toLowerCase()}}function i(e){if(void 0===Array.prototype.toJSON)return JSON.stringify(e);var t=Array.prototype.toJSON;delete Array.prototype.toJSON;var r=JSON.stringify(e);return Array.prototype.toJSON=t,r}function s(e){for(var t,r,o=e.length;0!==o;)r=Math.floor(Math.random()*o),o-=1,t=e[o],e[o]=e[r],e[r]=t;return e}function a(e){var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o;o="x-algolia-api-key"===r||"x-algolia-application-id"===r?"**hidden for security purposes**":e[r],t[r]=o}return t}t.exports=o;var c=e(30),u=e(31),l=e(20),p=e(36),d=500,h=r.env.RESET_APP_DATA_TIMER&&parseInt(r.env.RESET_APP_DATA_TIMER,10)||12e4;o.prototype.initIndex=function(e){return new l(this,e)},o.prototype.setExtraHeader=function(e,t){this.extraHeaders[e.toLowerCase()]=t},o.prototype.getExtraHeader=function(e){return this.extraHeaders[e.toLowerCase()]},o.prototype.unsetExtraHeader=function(e){delete this.extraHeaders[e.toLowerCase()]},o.prototype.addAlgoliaAgent=function(e){this._ua.indexOf(";"+e)===-1&&(this._ua+=";"+e)},o.prototype._jsonRequest=function(t){function r(e,n){function u(e){var t=e&&e.body&&e.body.message&&e.body.status||e.statusCode||e&&e.body&&200;h("received response: statusCode: %s, computed statusCode: %d, headers: %j",e.statusCode,t,e.headers);var r=2===Math.floor(t/100),o=new Date;if(w.push({currentHost:A,headers:a(p),content:s||null,contentLength:void 0!==s?s.length:null,method:n.method,timeouts:n.timeouts,url:n.url,startTime:x,endTime:o,duration:o-x,statusCode:t}),r)return m._useCache&&!m._useRequestCache&&y&&(y[l]=e.responseText),{responseText:e.responseText,body:e.body};var i=4!==Math.floor(t/100);if(i)return v+=1,_();h("unrecoverable error");var u=new c.AlgoliaSearchError(e.body&&e.body.message,{debugData:w,statusCode:t});return m._promise.reject(u)}function d(e){h("error: %s, stack: %s",e.message,e.stack);var r=new Date;return w.push({currentHost:A,headers:a(p),content:s||null,contentLength:void 0!==s?s.length:null,method:n.method,timeouts:n.timeouts,url:n.url,startTime:x,endTime:r,duration:r-x}),e instanceof c.AlgoliaSearchError||(e=new c.Unknown(e&&e.message,e)),v+=1,e instanceof c.Unknown||e instanceof c.UnparsableJSON||v>=m.hosts[t.hostType].length&&(g||!b)?(e.debugData=w,m._promise.reject(e)):e instanceof c.RequestTimeout?T():_()}function _(){return h("retrying request"),m._incrementHostIndex(t.hostType),r(e,n)}function T(){return h("retrying request with higher timeout"),m._incrementHostIndex(t.hostType),m._incrementTimeoutMultipler(),n.timeouts=m._getTimeoutsForRequest(t.hostType),r(e,n)}m._checkAppIdData();var x=new Date;if(m._useCache&&!m._useRequestCache&&(l=t.url),m._useCache&&!m._useRequestCache&&s&&(l+="_body_"+n.body),o(!m._useRequestCache,y,l)){h("serving response from cache");var R=y[l];return m._promise.resolve({body:JSON.parse(R),responseText:R})}if(v>=m.hosts[t.hostType].length)return!b||g?(h("could not get any response"),m._promise.reject(new c.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: "+m.applicationID,{debugData:w}))):(h("switching to fallback"),v=0,n.method=t.fallback.method,n.url=t.fallback.url,n.jsonBody=t.fallback.body,n.jsonBody&&(n.body=i(n.jsonBody)),p=m._computeRequestHeaders({additionalUA:f,headers:t.headers}),n.timeouts=m._getTimeoutsForRequest(t.hostType),m._setHostIndexByType(0,t.hostType),g=!0,r(m._request.fallback,n));var A=m._getHostByType(t.hostType),j=A+n.url,S={body:n.body,jsonBody:n.jsonBody,method:n.method,headers:p,timeouts:n.timeouts,debug:h,forceAuthHeaders:n.forceAuthHeaders};return h("method: %s, url: %s, headers: %j, timeouts: %d",S.method,j,S.headers,S.timeouts),e===m._request.fallback&&h("using fallback"),e.call(m,j,S).then(u,d)}function o(e,t,r){return m._useCache&&e&&t&&void 0!==t[r]}function n(e,r){return o(m._useRequestCache,y,l)&&e["catch"](function(){delete y[l]}),"function"!=typeof t.callback?e.then(r):void e.then(function(e){u(function(){t.callback(null,r(e))},m._setTimeout||setTimeout)},function(e){u(function(){t.callback(e)},m._setTimeout||setTimeout)})}this._checkAppIdData();var s,l,p,h=e(1)("algoliasearch:"+t.url),f=t.additionalUA||"",y=t.cache,m=this,v=0,g=!1,b=m._useFallback&&m._request.fallback&&t.fallback;this.apiKey.length>d&&void 0!==t.body&&(void 0!==t.body.params||void 0!==t.body.requests)?(t.body.apiKey=this.apiKey,p=this._computeRequestHeaders({additionalUA:f,withApiKey:!1,headers:t.headers})):p=this._computeRequestHeaders({additionalUA:f,headers:t.headers}),void 0!==t.body&&(s=i(t.body)),h("request start");var w=[];if(m._useCache&&m._useRequestCache&&(l=t.url),m._useCache&&m._useRequestCache&&s&&(l+="_body_"+s),o(m._useRequestCache,y,l)){h("serving request from cache");var _=y[l],T="function"!=typeof _.then?m._promise.resolve({responseText:_}):_;return n(T,function(e){return JSON.parse(e.responseText)})}var x=r(m._request,{url:t.url,method:t.method,body:s,jsonBody:t.body,timeouts:m._getTimeoutsForRequest(t.hostType),forceAuthHeaders:t.forceAuthHeaders});return m._useCache&&m._useRequestCache&&y&&(y[l]=x),n(x,function(e){return e.body})},o.prototype._getSearchParams=function(e,t){if(void 0===e||null===e)return t;for(var r in e)null!==r&&void 0!==e[r]&&e.hasOwnProperty(r)&&(t+=""===t?"":"&",t+=r+"="+encodeURIComponent("[object Array]"===Object.prototype.toString.call(e[r])?i(e[r]):e[r]));return t},o.prototype._computeRequestHeaders=function(t){var r=e(5),o=t.additionalUA?this._ua+";"+t.additionalUA:this._ua,n={"x-algolia-agent":o,"x-algolia-application-id":this.applicationID};return t.withApiKey!==!1&&(n["x-algolia-api-key"]=this.apiKey),this.userToken&&(n["x-algolia-usertoken"]=this.userToken),this.securityTags&&(n["x-algolia-tagfilters"]=this.securityTags),r(this.extraHeaders,function(e,t){n[t]=e}),t.headers&&r(t.headers,function(e,t){n[t]=e}),n},o.prototype.search=function(t,r,o){var n=e(8),i=e(32),s="Usage: client.search(arrayOfQueries[, callback])";if(!n(t))throw new Error(s);"function"==typeof r?(o=r,r={}):void 0===r&&(r={});var a=this,c={requests:i(t,function(e){var t="";return void 0!==e.query&&(t+="query="+encodeURIComponent(e.query)),{indexName:e.indexName,params:a._getSearchParams(e.params,t)}})},u=i(c.requests,function(e,t){return t+"="+encodeURIComponent("/1/indexes/"+encodeURIComponent(e.indexName)+"?"+e.params)}).join("&"),l="/1/indexes/*/queries";return void 0!==r.strategy&&(c.strategy=r.strategy),this._jsonRequest({cache:this.cache,method:"POST",url:l,body:c,hostType:"read",fallback:{method:"GET",url:"/1/indexes/*",body:{params:u}},callback:o})},o.prototype.searchForFacetValues=function(t){var r=e(8),o=e(32),n="Usage: client.searchForFacetValues([{indexName, params: {facetName, facetQuery, ...params}}, ...queries])";if(!r(t))throw new Error(n);var i=this;return i._promise.all(o(t,function(t){if(!t||void 0===t.indexName||void 0===t.params.facetName||void 0===t.params.facetQuery)throw new Error(n);var r=e(26),o=e(34),s=t.indexName,a=t.params,c=a.facetName,u=o(r(a),function(e){return"facetName"===e}),l=i._getSearchParams(u,"");return i._jsonRequest({cache:i.cache,method:"POST",url:"/1/indexes/"+encodeURIComponent(s)+"/facets/"+encodeURIComponent(c)+"/query",hostType:"read",body:{params:l}})}))},o.prototype.setSecurityTags=function(e){if("[object Array]"===Object.prototype.toString.call(e)){for(var t=[],r=0;r<e.length;++r)if("[object Array]"===Object.prototype.toString.call(e[r])){for(var o=[],n=0;n<e[r].length;++n)o.push(e[r][n]);t.push("("+o.join(",")+")")}else t.push(e[r]);e=t.join(",")}this.securityTags=e},o.prototype.setUserToken=function(e){this.userToken=e},o.prototype.clearCache=function(){this.cache={}},o.prototype.setRequestTimeout=function(e){e&&(this._timeouts.connect=this._timeouts.read=this._timeouts.write=e)},o.prototype.setTimeouts=function(e){this._timeouts=e},o.prototype.getTimeouts=function(){return this._timeouts},o.prototype._getAppIdData=function(){var e=p.get(this.applicationID);return null!==e&&this._cacheAppIdData(e),e},o.prototype._setAppIdData=function(e){return e.lastChange=(new Date).getTime(),this._cacheAppIdData(e),p.set(this.applicationID,e)},o.prototype._checkAppIdData=function(){var e=this._getAppIdData(),t=(new Date).getTime();return null===e||t-e.lastChange>h?this._resetInitialAppIdData(e):e},o.prototype._resetInitialAppIdData=function(e){var t=e||{};return t.hostIndexes={read:0,write:0},t.timeoutMultiplier=1,t.shuffleResult=t.shuffleResult||s([1,2,3]),this._setAppIdData(t)},o.prototype._cacheAppIdData=function(e){this._hostIndexes=e.hostIndexes,this._timeoutMultiplier=e.timeoutMultiplier,this._shuffleResult=e.shuffleResult},o.prototype._partialAppIdDataUpdate=function(t){var r=e(5),o=this._getAppIdData();return r(t,function(e,t){o[t]=e}),this._setAppIdData(o)},o.prototype._getHostByType=function(e){return this.hosts[e][this._getHostIndexByType(e)]},o.prototype._getTimeoutMultiplier=function(){return this._timeoutMultiplier},o.prototype._getHostIndexByType=function(e){return this._hostIndexes[e]},o.prototype._setHostIndexByType=function(t,r){var o=e(26),n=o(this._hostIndexes);return n[r]=t,this._partialAppIdDataUpdate({hostIndexes:n}),t},o.prototype._incrementHostIndex=function(e){return this._setHostIndexByType((this._getHostIndexByType(e)+1)%this.hosts[e].length,e)},o.prototype._incrementTimeoutMultipler=function(){var e=Math.max(this._timeoutMultiplier+1,4);return this._partialAppIdDataUpdate({timeoutMultiplier:e})},o.prototype._getTimeoutsForRequest=function(e){return{connect:this._timeouts.connect*this._timeoutMultiplier,complete:this._timeouts[e]*this._timeoutMultiplier}}}).call(this,e(12))},{1:1,12:12,20:20,26:26,30:30,31:31,32:32,34:34,36:36,5:5,8:8}],18:[function(e,t,r){function o(){s.apply(this,arguments)}function n(e,t,r){function o(r,n){var i={page:r||0,hitsPerPage:t||100},s=n||[];return e(i).then(function(e){var t=e.hits,r=e.nbHits,n=t.map(function(e){return delete e._highlightResult,e}),a=s.concat(n);return a.length<r?o(i.page+1,a):a})}return o().then(function(e){return"function"==typeof r?void r(e):e})}var i=e(7),s=e(20),a=e(28),c=e(29),u=e(31),l=e(30),p=a(function(){},c("forwardToSlaves","forwardToReplicas"));t.exports=o,i(o,s),o.prototype.addObject=function(e,t,r){var o=this;return 1!==arguments.length&&"function"!=typeof t||(r=t,t=void 0),this.as._jsonRequest({method:void 0!==t?"PUT":"POST",url:"/1/indexes/"+encodeURIComponent(o.indexName)+(void 0!==t?"/"+encodeURIComponent(t):""),body:e,hostType:"write",callback:r})},o.prototype.addObjects=function(t,r){var o=e(8),n="Usage: index.addObjects(arrayOfObjects[, callback])";if(!o(t))throw new Error(n);for(var i=this,s={requests:[]},a=0;a<t.length;++a){var c={action:"addObject",body:t[a]};s.requests.push(c)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(i.indexName)+"/batch",body:s,hostType:"write",callback:r})},o.prototype.partialUpdateObject=function(e,t,r){1!==arguments.length&&"function"!=typeof t||(r=t,t=void 0);var o=this,n="/1/indexes/"+encodeURIComponent(o.indexName)+"/"+encodeURIComponent(e.objectID)+"/partial";return t===!1&&(n+="?createIfNotExists=false"),this.as._jsonRequest({method:"POST",url:n,body:e,hostType:"write",callback:r})},o.prototype.partialUpdateObjects=function(t,r,o){1!==arguments.length&&"function"!=typeof r||(o=r,r=!0);var n=e(8),i="Usage: index.partialUpdateObjects(arrayOfObjects[, callback])";if(!n(t))throw new Error(i);for(var s=this,a={requests:[]},c=0;c<t.length;++c){var u={action:r===!0?"partialUpdateObject":"partialUpdateObjectNoCreate",objectID:t[c].objectID,body:t[c]};a.requests.push(u)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(s.indexName)+"/batch",body:a,hostType:"write",callback:o})},o.prototype.saveObject=function(e,t){var r=this;return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/"+encodeURIComponent(e.objectID),body:e,hostType:"write",callback:t})},o.prototype.saveObjects=function(t,r){var o=e(8),n="Usage: index.saveObjects(arrayOfObjects[, callback])";if(!o(t))throw new Error(n);for(var i=this,s={requests:[]},a=0;a<t.length;++a){var c={action:"updateObject",objectID:t[a].objectID,body:t[a]};s.requests.push(c)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(i.indexName)+"/batch",body:s,hostType:"write",callback:r})},o.prototype.deleteObject=function(e,t){if("function"==typeof e||"string"!=typeof e&&"number"!=typeof e){var r=new l.AlgoliaSearchError(e&&"function"!=typeof e?"ObjectID must be a string":"Cannot delete an object without an objectID");return t=e,"function"==typeof t?t(r):this.as._promise.reject(r)}var o=this;return this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(o.indexName)+"/"+encodeURIComponent(e),hostType:"write",callback:t})},o.prototype.deleteObjects=function(t,r){var o=e(8),n=e(32),i="Usage: index.deleteObjects(arrayOfObjectIDs[, callback])";if(!o(t))throw new Error(i);var s=this,a={requests:n(t,function(e){return{action:"deleteObject",objectID:e,body:{objectID:e}}})};return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(s.indexName)+"/batch",body:a,hostType:"write",callback:r})},o.prototype.deleteByQuery=a(function(t,r,o){function n(e){if(0===e.nbHits)return e;var t=p(e.hits,function(e){return e.objectID});return d.deleteObjects(t).then(i).then(s)}function i(e){return d.waitTask(e.taskID)}function s(){return d.deleteByQuery(t,r)}function a(){u(function(){o(null)},h._setTimeout||setTimeout)}function c(e){u(function(){o(e)},h._setTimeout||setTimeout)}var l=e(26),p=e(32),d=this,h=d.as;1===arguments.length||"function"==typeof r?(o=r,r={}):r=l(r),r.attributesToRetrieve="objectID",r.hitsPerPage=1e3,r.distinct=!1,this.clearCache();var f=this.search(t,r).then(n);return o?void f.then(a,c):f},c("index.deleteByQuery()","index.deleteBy()")),o.prototype.deleteBy=function(e,t){var r=this;return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/deleteByQuery",body:{params:r.as._getSearchParams(e,"")},hostType:"write",callback:t})},o.prototype.browseAll=function(t,r){function o(e){if(!a._stopped){var t;t=void 0!==e?{cursor:e}:{params:l},c._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(u.indexName)+"/browse",hostType:"read",body:t,callback:n})}}function n(e,t){if(!a._stopped)return e?void a._error(e):(a._result(t),void 0===t.cursor?void a._end():void o(t.cursor))}"object"==typeof t&&(r=t,t=void 0);var i=e(33),s=e(19),a=new s,c=this.as,u=this,l=c._getSearchParams(i({},r||{},{query:t}),"");return o(),a},o.prototype.ttAdapter=a(function(e){var t=this;return function(r,o,n){var i;i="function"==typeof n?n:o,t.search(r,e,function(e,t){return e?void i(e):void i(t.hits)})}},"ttAdapter is not necessary anymore and will be removed in the next version,\nhave a look at autocomplete.js (https://github.com/algolia/autocomplete.js)"),o.prototype.waitTask=function(e,t){function r(){return l._jsonRequest({method:"GET",hostType:"read",url:"/1/indexes/"+encodeURIComponent(c.indexName)+"/task/"+e}).then(function(e){a++;var t=i*a*a;return t>s&&(t=s),"published"!==e.status?l._promise.delay(t).then(r):e})}function o(e){u(function(){t(null,e)},l._setTimeout||setTimeout)}function n(e){u(function(){t(e)},l._setTimeout||setTimeout)}var i=100,s=5e3,a=0,c=this,l=c.as,p=r();return t?void p.then(o,n):p},o.prototype.clearIndex=function(e){var t=this;return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/clear",hostType:"write",callback:e})},o.prototype.getSettings=function(e,t){1===arguments.length&&"function"==typeof e&&(t=e,e={}),e=e||{};var r=encodeURIComponent(this.indexName);return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+r+"/settings?getVersion=2"+(e.advanced?"&advanced="+e.advanced:""),hostType:"read",callback:t})},o.prototype.searchSynonyms=function(e,t){return"function"==typeof e?(t=e,e={}):void 0===e&&(e={}),this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/search",body:e,hostType:"read",callback:t})},o.prototype.exportSynonyms=function(e,t){return n(this.searchSynonyms.bind(this),e,t)},o.prototype.saveSynonym=function(e,t,r){"function"==typeof t?(r=t,t={}):void 0===t&&(t={}),void 0!==t.forwardToSlaves&&p();var o=t.forwardToSlaves||t.forwardToReplicas?"true":"false";return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/"+encodeURIComponent(e.objectID)+"?forwardToReplicas="+o,body:e,hostType:"write",callback:r})},o.prototype.getSynonym=function(e,t){return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/"+encodeURIComponent(e),hostType:"read",callback:t})},o.prototype.deleteSynonym=function(e,t,r){"function"==typeof t?(r=t,t={}):void 0===t&&(t={}),void 0!==t.forwardToSlaves&&p();var o=t.forwardToSlaves||t.forwardToReplicas?"true":"false";return this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/"+encodeURIComponent(e)+"?forwardToReplicas="+o,hostType:"write",callback:r})},o.prototype.clearSynonyms=function(e,t){"function"==typeof e?(t=e,e={}):void 0===e&&(e={}),void 0!==e.forwardToSlaves&&p();var r=e.forwardToSlaves||e.forwardToReplicas?"true":"false";return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/clear?forwardToReplicas="+r,hostType:"write",callback:t})},o.prototype.batchSynonyms=function(e,t,r){"function"==typeof t?(r=t,t={}):void 0===t&&(t={}),void 0!==t.forwardToSlaves&&p();var o=t.forwardToSlaves||t.forwardToReplicas?"true":"false";return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/batch?forwardToReplicas="+o+"&replaceExistingSynonyms="+(t.replaceExistingSynonyms?"true":"false"),hostType:"write",body:e,callback:r})},o.prototype.searchRules=function(e,t){return"function"==typeof e?(t=e,e={}):void 0===e&&(e={}),this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/rules/search",body:e,hostType:"read",callback:t})},o.prototype.exportRules=function(e,t){return n(this.searchRules.bind(this),e,t)},o.prototype.saveRule=function(e,t,r){if("function"==typeof t?(r=t,t={}):void 0===t&&(t={}),!e.objectID)throw new l.AlgoliaSearchError("Missing or empty objectID field for rule");var o=t.forwardToReplicas===!0?"true":"false";return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/rules/"+encodeURIComponent(e.objectID)+"?forwardToReplicas="+o,body:e,hostType:"write",callback:r})},o.prototype.getRule=function(e,t){return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/rules/"+encodeURIComponent(e),hostType:"read",callback:t})},o.prototype.deleteRule=function(e,t,r){"function"==typeof t?(r=t,t={}):void 0===t&&(t={});var o=t.forwardToReplicas===!0?"true":"false";return this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/rules/"+encodeURIComponent(e)+"?forwardToReplicas="+o,hostType:"write",callback:r})},o.prototype.clearRules=function(e,t){"function"==typeof e?(t=e,e={}):void 0===e&&(e={});var r=e.forwardToReplicas===!0?"true":"false";return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/rules/clear?forwardToReplicas="+r,hostType:"write",callback:t})},o.prototype.batchRules=function(e,t,r){"function"==typeof t?(r=t,t={}):void 0===t&&(t={});var o=t.forwardToReplicas===!0?"true":"false";return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/rules/batch?forwardToReplicas="+o+"&clearExistingRules="+(t.clearExistingRules===!0?"true":"false"),hostType:"write",body:e,callback:r})},o.prototype.setSettings=function(e,t,r){1!==arguments.length&&"function"!=typeof t||(r=t,t={}),void 0!==t.forwardToSlaves&&p();var o=t.forwardToSlaves||t.forwardToReplicas?"true":"false",n=this;return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(n.indexName)+"/settings?forwardToReplicas="+o,hostType:"write",body:e,callback:r})},o.prototype.listUserKeys=a(function(e){return this.listApiKeys(e)},c("index.listUserKeys()","client.listApiKeys()")),o.prototype.listApiKeys=a(function(e){var t=this;return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/keys",hostType:"read",callback:e})},c("index.listApiKeys()","client.listApiKeys()")),o.prototype.getUserKeyACL=a(function(e,t){return this.getApiKey(e,t)},c("index.getUserKeyACL()","client.getApiKey()")),o.prototype.getApiKey=a(function(e,t){var r=this;return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/keys/"+e,hostType:"read",callback:t})},c("index.getApiKey()","client.getApiKey()")),o.prototype.deleteUserKey=a(function(e,t){return this.deleteApiKey(e,t)},c("index.deleteUserKey()","client.deleteApiKey()")),o.prototype.deleteApiKey=a(function(e,t){var r=this;return this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/keys/"+e,hostType:"write",callback:t})},c("index.deleteApiKey()","client.deleteApiKey()")),o.prototype.addUserKey=a(function(e,t,r){return this.addApiKey(e,t,r)},c("index.addUserKey()","client.addApiKey()")),o.prototype.addApiKey=a(function(t,r,o){var n=e(8),i="Usage: index.addApiKey(arrayOfAcls[, params, callback])";if(!n(t))throw new Error(i);1!==arguments.length&&"function"!=typeof r||(o=r,r=null);var s={acl:t};return r&&(s.validity=r.validity,s.maxQueriesPerIPPerHour=r.maxQueriesPerIPPerHour,s.maxHitsPerQuery=r.maxHitsPerQuery,s.description=r.description,r.queryParameters&&(s.queryParameters=this.as._getSearchParams(r.queryParameters,"")),s.referers=r.referers),this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/keys",body:s,hostType:"write",callback:o})},c("index.addApiKey()","client.addApiKey()")),o.prototype.addUserKeyWithValidity=a(function(e,t,r){return this.addApiKey(e,t,r)},c("index.addUserKeyWithValidity()","client.addApiKey()")),o.prototype.updateUserKey=a(function(e,t,r,o){return this.updateApiKey(e,t,r,o)},c("index.updateUserKey()","client.updateApiKey()")),o.prototype.updateApiKey=a(function(t,r,o,n){var i=e(8),s="Usage: index.updateApiKey(key, arrayOfAcls[, params, callback])";if(!i(r))throw new Error(s);2!==arguments.length&&"function"!=typeof o||(n=o,o=null);var a={acl:r};return o&&(a.validity=o.validity,a.maxQueriesPerIPPerHour=o.maxQueriesPerIPPerHour,a.maxHitsPerQuery=o.maxHitsPerQuery,a.description=o.description,o.queryParameters&&(a.queryParameters=this.as._getSearchParams(o.queryParameters,"")),a.referers=o.referers),this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/keys/"+t,body:a,hostType:"write",callback:n})},c("index.updateApiKey()","client.updateApiKey()"))},{19:19,20:20,26:26,28:28,29:29,30:30,31:31,32:32,33:33,7:7,8:8}],19:[function(e,t,r){"use strict";function o(){}t.exports=o;var n=e(7),i=e(4).EventEmitter;n(o,i),o.prototype.stop=function(){this._stopped=!0,this._clean()},o.prototype._end=function(){this.emit("end"),this._clean()},o.prototype._error=function(e){this.emit("error",e),this._clean()},o.prototype._result=function(e){this.emit("result",e)},o.prototype._clean=function(){this.removeAllListeners("stop"),this.removeAllListeners("end"),this.removeAllListeners("error"),this.removeAllListeners("result")}},{4:4,7:7}],20:[function(e,t,r){function o(e,t){this.indexName=t,this.as=e,this.typeAheadArgs=null,this.typeAheadValueOption=null,this.cache={}}var n=e(25),i=e(28),s=e(29);t.exports=o,o.prototype.clearCache=function(){this.cache={}},o.prototype.search=n("query"),o.prototype.similarSearch=i(n("similarQuery"),s("index.similarSearch(query[, callback])","index.search({ similarQuery: query }[, callback])")),o.prototype.browse=function(t,r,o){var n,i,s=e(33),a=this;0===arguments.length||1===arguments.length&&"function"==typeof arguments[0]?(n=0,o=arguments[0],t=void 0):"number"==typeof arguments[0]?(n=arguments[0],"number"==typeof arguments[1]?i=arguments[1]:"function"==typeof arguments[1]&&(o=arguments[1],i=void 0),t=void 0,r=void 0):"object"==typeof arguments[0]?("function"==typeof arguments[1]&&(o=arguments[1]),r=arguments[0],t=void 0):"string"==typeof arguments[0]&&"function"==typeof arguments[1]&&(o=arguments[1],r=void 0),r=s({},r||{},{page:n,hitsPerPage:i,query:t});var c=this.as._getSearchParams(r,"");return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(a.indexName)+"/browse",body:{params:c},hostType:"read",callback:o})},o.prototype.browseFrom=function(e,t){return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/browse",body:{cursor:e},hostType:"read",callback:t})},o.prototype.searchForFacetValues=function(t,r){var o=e(26),n=e(34),i="Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])";if(void 0===t.facetName||void 0===t.facetQuery)throw new Error(i);var s=t.facetName,a=n(o(t),function(e){return"facetName"===e}),c=this.as._getSearchParams(a,"");return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/facets/"+encodeURIComponent(s)+"/query",hostType:"read",body:{params:c},callback:r})},o.prototype.searchFacet=i(function(e,t){return this.searchForFacetValues(e,t)},s("index.searchFacet(params[, callback])","index.searchForFacetValues(params[, callback])")),o.prototype._search=function(e,t,r,o){return this.as._jsonRequest({cache:this.cache,method:"POST",url:t||"/1/indexes/"+encodeURIComponent(this.indexName)+"/query",body:{params:e},hostType:"read",fallback:{method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName),body:{params:e}},callback:r,additionalUA:o})},o.prototype.getObject=function(e,t,r){var o=this;1!==arguments.length&&"function"!=typeof t||(r=t,t=void 0);var n="";if(void 0!==t){n="?attributes=";for(var i=0;i<t.length;++i)0!==i&&(n+=","),n+=t[i]}return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(o.indexName)+"/"+encodeURIComponent(e)+n,hostType:"read",callback:r})},o.prototype.getObjects=function(t,r,o){var n=e(8),i=e(32),s="Usage: index.getObjects(arrayOfObjectIDs[, callback])";if(!n(t))throw new Error(s);var a=this;1!==arguments.length&&"function"!=typeof r||(o=r,r=void 0);var c={requests:i(t,function(e){var t={indexName:a.indexName,objectID:e};return r&&(t.attributesToRetrieve=r.join(",")),t})};return this.as._jsonRequest({method:"POST",url:"/1/indexes/*/objects",hostType:"read",body:c,callback:o})},o.prototype.as=null,o.prototype.indexName=null,o.prototype.typeAheadArgs=null,o.prototype.typeAheadValueOption=null},{25:25,26:26,28:28,29:29,32:32,33:33,34:34,8:8}],21:[function(e,t,r){"use strict";var o=e(16),n=e(22);t.exports=n(o)},{16:16,22:22}],22:[function(e,t,r){(function(r){"use strict";var o=e(6),n=o.Promise||e(3).Promise;t.exports=function(t,i){function s(t,r,o){var n=e(26);return o=n(o||{}),o._ua=o._ua||s.ua,new a(t,r,o)}function a(){t.apply(this,arguments)}var c=e(7),u=e(30),l=e(23),p=e(24),d=e(35);i=i||"","debug"===r.env.NODE_ENV&&e(1).enable("algoliasearch*"),s.version=e(37),s.ua="Algolia for vanilla JavaScript "+i+s.version,s.initPlaces=d(s),o.__algolia={debug:e(1),algoliasearch:s};var h={hasXMLHttpRequest:"XMLHttpRequest"in o,hasXDomainRequest:"XDomainRequest"in o};return h.hasXMLHttpRequest&&(h.cors="withCredentials"in new XMLHttpRequest),c(a,t),a.prototype._request=function(e,t){return new n(function(r,o){function n(){if(!f){clearTimeout(d);var e;try{e={body:JSON.parse(m.responseText),responseText:m.responseText,statusCode:m.status,headers:m.getAllResponseHeaders&&m.getAllResponseHeaders()||{}}}catch(t){e=new u.UnparsableJSON({more:m.responseText})}e instanceof u.UnparsableJSON?o(e):r(e)}}function i(e){f||(clearTimeout(d),o(new u.Network({more:e})))}function s(){f=!0,m.abort(),o(new u.RequestTimeout)}function a(){v=!0,clearTimeout(d),d=setTimeout(s,t.timeouts.complete)}function c(){v||a()}function p(){!v&&m.readyState>1&&a()}if(!h.cors&&!h.hasXDomainRequest)return void o(new u.Network("CORS not supported"));e=l(e,t.headers);var d,f,y=t.body,m=h.cors?new XMLHttpRequest:new XDomainRequest,v=!1;d=setTimeout(s,t.timeouts.connect),m.onprogress=c,"onreadystatechange"in m&&(m.onreadystatechange=p),m.onload=n,m.onerror=i,m instanceof XMLHttpRequest?(m.open(t.method,e,!0),t.forceAuthHeaders&&(m.setRequestHeader("x-algolia-application-id",t.headers["x-algolia-application-id"]),m.setRequestHeader("x-algolia-api-key",t.headers["x-algolia-api-key"]))):m.open(t.method,e),h.cors&&(y&&("POST"===t.method?m.setRequestHeader("content-type","application/x-www-form-urlencoded"):m.setRequestHeader("content-type","application/json")),m.setRequestHeader("accept","application/json")),y?m.send(y):m.send()})},a.prototype._request.fallback=function(e,t){return e=l(e,t.headers),new n(function(r,o){p(e,t,function(e,t){return e?void o(e):void r(t)})})},a.prototype._promise={reject:function(e){return n.reject(e)},resolve:function(e){return n.resolve(e)},delay:function(e){return new n(function(t){setTimeout(t,e)})},all:function(e){return n.all(e)}},s}}).call(this,e(12))},{1:1,12:12,23:23,24:24,26:26,3:3,30:30,35:35,37:37,6:6,7:7}],23:[function(e,t,r){"use strict";function o(e,t){return e+=/\?/.test(e)?"&":"?",e+n(t)}t.exports=o;var n=e(14)},{14:14}],24:[function(e,t,r){"use strict";function o(e,t,r){function o(){t.debug("JSONP: success"),m||d||(m=!0,p||(t.debug("JSONP: Fail. Script loaded but did not call the callback"),a(),r(new n.JSONPScriptFail)))}function s(){"loaded"!==this.readyState&&"complete"!==this.readyState||o()}function a(){clearTimeout(v),f.onload=null,f.onreadystatechange=null,f.onerror=null,h.removeChild(f)}function c(){try{delete window[y],delete window[y+"_loaded"]}catch(e){window[y]=window[y+"_loaded"]=void 0}}function u(){t.debug("JSONP: Script timeout"),d=!0,a(),r(new n.RequestTimeout)}function l(){t.debug("JSONP: Script error"),m||d||(a(),r(new n.JSONPScriptError))}if("GET"!==t.method)return void r(new Error("Method "+t.method+" "+e+" is not supported by JSONP."));t.debug("JSONP: start");var p=!1,d=!1;i+=1;var h=document.getElementsByTagName("head")[0],f=document.createElement("script"),y="algoliaJSONP_"+i,m=!1;window[y]=function(e){return c(),d?void t.debug("JSONP: Late answer, ignoring"):(p=!0,a(),void r(null,{body:e,responseText:JSON.stringify(e)}))},e+="&callback="+y,t.jsonBody&&t.jsonBody.params&&(e+="&"+t.jsonBody.params);var v=setTimeout(u,t.timeouts.complete);f.onreadystatechange=s,f.onload=o,f.onerror=l,f.async=!0,f.defer=!0,f.src=e,h.appendChild(f)}t.exports=o;var n=e(30),i=0},{30:30}],25:[function(e,t,r){function o(e,t){return function(r,o,i){if("function"==typeof r&&"object"==typeof o||"object"==typeof i)throw new n.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");
0===arguments.length||"function"==typeof r?(i=r,r=""):1!==arguments.length&&"function"!=typeof o||(i=o,o=void 0),"object"==typeof r&&null!==r?(o=r,r=void 0):void 0!==r&&null!==r||(r="");var s="";void 0!==r&&(s+=e+"="+encodeURIComponent(r));var a;return void 0!==o&&(o.additionalUA&&(a=o.additionalUA,delete o.additionalUA),s=this.as._getSearchParams(o,s)),this._search(s,t,i,a)}}t.exports=o;var n=e(30)},{30:30}],26:[function(e,t,r){t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],27:[function(e,t,r){function o(e,t,r){var o={};return r=r||{},r.hosts=r.hosts||["analytics.algolia.com","analytics.algolia.com","analytics.algolia.com","analytics.algolia.com"],r.protocol=r.protocol||"https:",o.as=n(e,t,r),o.getABTests=function(e,t){var r=r||{},o=r.offset||0,n=r.limit||10;return this.as._jsonRequest({method:"GET",url:"/2/abtests?offset="+encodeURIComponent(o)+"&limit="+encodeURIComponent(n),hostType:"read",forceAuthHeaders:!0,callback:t})},o.getABTest=function(e,t){return this.as._jsonRequest({method:"GET",url:"/2/abtests/"+encodeURIComponent(e),hostType:"read",forceAuthHeaders:!0,callback:t})},o.addABTest=function(e,t){return this.as._jsonRequest({method:"POST",url:"/2/abtests",body:e,hostType:"read",forceAuthHeaders:!0,callback:t})},o.stopABTest=function(e,t){return this.as._jsonRequest({method:"POST",url:"/2/abtests/"+encodeURIComponent(e)+"/stop",hostType:"read",forceAuthHeaders:!0,callback:t})},o.deleteABTest=function(e,t){return this.as._jsonRequest({method:"DELETE",url:"/2/abtests/"+encodeURIComponent(e),hostType:"write",forceAuthHeaders:!0,callback:t})},o.waitTask=function(e,t,r){return this.as.initIndex(e).waitTask(t,r)},o}t.exports=o;var n=e(21)},{21:21}],28:[function(e,t,r){t.exports=function(e,t){function r(){return o||(console.warn(t),o=!0),e.apply(this,arguments)}var o=!1;return r}},{}],29:[function(e,t,r){t.exports=function(e,t){var r=e.toLowerCase().replace(/[\.\(\)]/g,"");return"algoliasearch: `"+e+"` was replaced by `"+t+"`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#"+r}},{}],30:[function(e,t,r){"use strict";function o(t,r){var o=e(5),n=this;"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):n.stack=(new Error).stack||"Cannot get a stacktrace, browser is too old",this.name="AlgoliaSearchError",this.message=t||"Unknown error",r&&o(r,function(e,t){n[t]=e})}function n(e,t){function r(){var r=Array.prototype.slice.call(arguments,0);"string"!=typeof r[0]&&r.unshift(t),o.apply(this,r),this.name="AlgoliaSearch"+e+"Error"}return i(r,o),r}var i=e(7);i(o,Error),t.exports={AlgoliaSearchError:o,UnparsableJSON:n("UnparsableJSON","Could not parse the incoming response as JSON, see err.more for details"),RequestTimeout:n("RequestTimeout","Request timedout before getting a response"),Network:n("Network","Network issue, see err.more for details"),JSONPScriptFail:n("JSONPScriptFail","<script> was loaded but did not call our provided callback"),JSONPScriptError:n("JSONPScriptError","<script> unable to load due to an `error` event on it"),Unknown:n("Unknown","Unknown error occured")}},{5:5,7:7}],31:[function(e,t,r){t.exports=function(e,t){t(e,0)}},{}],32:[function(e,t,r){var o=e(5);t.exports=function(e,t){var r=[];return o(e,function(o,n){r.push(t(o,n,e))}),r}},{5:5}],33:[function(e,t,r){var o=e(5);t.exports=function n(e){var t=Array.prototype.slice.call(arguments);return o(t,function(t){for(var r in t)t.hasOwnProperty(r)&&("object"==typeof e[r]&&"object"==typeof t[r]?e[r]=n({},e[r],t[r]):void 0!==t[r]&&(e[r]=t[r]))}),e}},{5:5}],34:[function(e,t,r){t.exports=function(t,r){var o=e(10),n=e(5),i={};return n(o(t),function(e){r(e)!==!0&&(i[e]=t[e])}),i}},{10:10,5:5}],35:[function(e,t,r){function o(t){return function(r,o,s){var a=e(26);s=s&&a(s)||{},s.hosts=s.hosts||["places-dsn.algolia.net","places-1.algolianet.com","places-2.algolianet.com","places-3.algolianet.com"],0!==arguments.length&&"object"!=typeof r&&void 0!==r||(r="",o="",s._allowEmptyCredentials=!0);var c=t(r,o,s),u=c.initIndex("places");return u.search=i("query","/1/places/query"),u.reverse=function(e,t){var r=n.encode(e);return this.as._jsonRequest({method:"GET",url:"/1/places/reverse?"+r,hostType:"read",callback:t})},u.getObject=function(e,t){return this.as._jsonRequest({method:"GET",url:"/1/places/"+encodeURIComponent(e),hostType:"read",callback:t})},u}}t.exports=o;var n=e(15),i=e(25)},{15:15,25:25,26:26}],36:[function(e,t,r){(function(r){function o(e,t){return c("localStorage failed with",t),s(),a=l,a.get(e)}function n(e,t){return 1===arguments.length?a.get(e):a.set(e,t)}function i(){try{return"localStorage"in r&&null!==r.localStorage&&(r.localStorage[u]||r.localStorage.setItem(u,JSON.stringify({})),!0)}catch(e){return!1}}function s(){try{r.localStorage.removeItem(u)}catch(e){}}var a,c=e(1)("algoliasearch:src/hostIndexState.js"),u="algoliasearch-client-js",l={state:{},set:function(e,t){return this.state[e]=t,this.state[e]},get:function(e){return this.state[e]||null}},p={set:function(e,t){l.set(e,t);try{var n=JSON.parse(r.localStorage[u]);return n[e]=t,r.localStorage[u]=JSON.stringify(n),n[e]}catch(i){return o(e,i)}},get:function(e){try{return JSON.parse(r.localStorage[u])[e]||null}catch(t){return o(e,t)}}};a=i()?p:l,t.exports={get:n,set:n,supportsLocalStorage:i}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1}],37:[function(e,t,r){"use strict";t.exports="3.32.0"},{}]},{},[21])(21)});

/*!
 * autocomplete.js 0.35.0
 * https://github.com/algolia/autocomplete.js
 * Copyright 2018 Algolia, Inc. and other contributors; Licensed MIT
 */
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.autocomplete=b():a.autocomplete=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";a.exports=c(1)},function(a,b,c){"use strict";function d(a,b,c,d){c=f.isArray(c)?c:[].slice.call(arguments,2);var j=e(a).each(function(a,f){var j=e(f),k=new i({el:j}),l=d||new h({input:j,eventBus:k,dropdownMenuContainer:b.dropdownMenuContainer,hint:void 0===b.hint||!!b.hint,minLength:b.minLength,autoselect:b.autoselect,autoselectOnBlur:b.autoselectOnBlur,tabAutocomplete:b.tabAutocomplete,openOnFocus:b.openOnFocus,templates:b.templates,debug:b.debug,clearOnSelected:b.clearOnSelected,cssClasses:b.cssClasses,datasets:c,keyboardShortcuts:b.keyboardShortcuts,appendTo:b.appendTo,autoWidth:b.autoWidth});j.data(g,l)});return j.autocomplete={},f.each(["open","close","getVal","setVal","destroy","getWrapper"],function(a){j.autocomplete[a]=function(){var b,c=arguments;return j.each(function(d,f){var h=e(f).data(g);b=h[a].apply(h,c)}),b}}),j}var e=c(2);c(3).element=e;var f=c(4);f.isArray=e.isArray,f.isFunction=e.isFunction,f.isObject=e.isPlainObject,f.bind=e.proxy,f.each=function(a,b){function c(a,c){return b(c,a)}e.each(a,c)},f.map=e.map,f.mixin=e.extend,f.Event=e.Event;var g="aaAutocomplete",h=c(5),i=c(6);d.sources=h.sources,d.escapeHighlightedString=f.escapeHighlightedString;var j="autocomplete"in window,k=window.autocomplete;d.noConflict=function(){return j?window.autocomplete=k:delete window.autocomplete,d},a.exports=d},function(a,b){!function(b,c){a.exports=function(a){var b=function(){function b(a){return null==a?String(a):V[W.call(a)]||"object"}function c(a){return"function"==b(a)}function d(a){return null!=a&&a==a.window}function e(a){return null!=a&&a.nodeType==a.DOCUMENT_NODE}function f(a){return"object"==b(a)}function g(a){return f(a)&&!d(a)&&Object.getPrototypeOf(a)==Object.prototype}function h(a){var b=!!a&&"length"in a&&a.length,c=z.type(a);return"function"!=c&&!d(a)&&("array"==c||0===b||"number"==typeof b&&b>0&&b-1 in a)}function i(a){return F.call(a,function(a){return null!=a})}function j(a){return a.length>0?z.fn.concat.apply([],a):a}function k(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(a){return a in J?J[a]:J[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function m(a,b){return"number"!=typeof b||K[k(a)]?b:b+"px"}function n(a){var b,c;return I[a]||(b=H.createElement(a),H.body.appendChild(b),c=getComputedStyle(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),"none"==c&&(c="block"),I[a]=c),I[a]}function o(a){return"children"in a?G.call(a.children):z.map(a.childNodes,function(a){if(1==a.nodeType)return a})}function p(a,b){var c,d=a?a.length:0;for(c=0;c<d;c++)this[c]=a[c];this.length=d,this.selector=b||""}function q(a,b,c){for(y in b)c&&(g(b[y])||$(b[y]))?(g(b[y])&&!g(a[y])&&(a[y]={}),$(b[y])&&!$(a[y])&&(a[y]=[]),q(a[y],b[y],c)):b[y]!==x&&(a[y]=b[y])}function r(a,b){return null==b?z(a):z(a).filter(b)}function s(a,b,d,e){return c(b)?b.call(a,d,e):b}function t(a,b,c){null==c?a.removeAttribute(b):a.setAttribute(b,c)}function u(a,b){var c=a.className||"",d=c&&c.baseVal!==x;if(b===x)return d?c.baseVal:c;d?c.baseVal=b:a.className=b}function v(a){try{return a?"true"==a||"false"!=a&&("null"==a?null:+a+""==a?+a:/^[\[\{]/.test(a)?z.parseJSON(a):a):a}catch(b){return a}}function w(a,b){b(a);for(var c=0,d=a.childNodes.length;c<d;c++)w(a.childNodes[c],b)}var x,y,z,A,B,C,D=[],E=D.concat,F=D.filter,G=D.slice,H=a.document,I={},J={},K={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},L=/^\s*<(\w+|!)[^>]*>/,M=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,N=/^(?:body|html)$/i,O=["val","css","html","text","data","width","height","offset"],P=["after","prepend","before","append"],Q=H.createElement("table"),R=H.createElement("tr"),S={tr:H.createElement("tbody"),tbody:Q,thead:Q,tfoot:Q,td:R,th:R,"*":H.createElement("div")},T=/complete|loaded|interactive/,U=/^[\w-]*$/,V={},W=V.toString,X={},Y=H.createElement("div"),Z={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},$=Array.isArray||function(a){return a instanceof Array};return X.matches=function(a,b){if(!b||!a||1!==a.nodeType)return!1;var c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=Y).appendChild(a),d=~X.qsa(e,b).indexOf(a),f&&Y.removeChild(a),d},B=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},C=function(a){return F.call(a,function(b,c){return a.indexOf(b)==c})},X.fragment=function(a,b,c){var d,e,f;return M.test(a)&&(d=z(H.createElement(RegExp.$1))),d||(a.replace&&(a=a.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,"<$1></$2>")),b===x&&(b=L.test(a)&&RegExp.$1),b in S||(b="*"),f=S[b],f.innerHTML=""+a,d=z.each(G.call(f.childNodes),function(){f.removeChild(this)})),g(c)&&(e=z(d),z.each(c,function(a,b){O.indexOf(a)>-1?e[a](b):e.attr(a,b)})),d},X.Z=function(a,b){return new p(a,b)},X.isZ=function(a){return a instanceof X.Z},X.init=function(a,b){var d;if(!a)return X.Z();if("string"==typeof a)if(a=a.trim(),"<"==a[0]&&L.test(a))d=X.fragment(a,RegExp.$1,b),a=null;else{if(b!==x)return z(b).find(a);d=X.qsa(H,a)}else{if(c(a))return z(H).ready(a);if(X.isZ(a))return a;if($(a))d=i(a);else if(f(a))d=[a],a=null;else if(L.test(a))d=X.fragment(a.trim(),RegExp.$1,b),a=null;else{if(b!==x)return z(b).find(a);d=X.qsa(H,a)}}return X.Z(d,a)},z=function(a,b){return X.init(a,b)},z.extend=function(a){var b,c=G.call(arguments,1);return"boolean"==typeof a&&(b=a,a=c.shift()),c.forEach(function(c){q(a,c,b)}),a},X.qsa=function(a,b){var c,d="#"==b[0],e=!d&&"."==b[0],f=d||e?b.slice(1):b,g=U.test(f);return a.getElementById&&g&&d?(c=a.getElementById(f))?[c]:[]:1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType?[]:G.call(g&&!d&&a.getElementsByClassName?e?a.getElementsByClassName(f):a.getElementsByTagName(b):a.querySelectorAll(b))},z.contains=H.documentElement.contains?function(a,b){return a!==b&&a.contains(b)}:function(a,b){for(;b&&(b=b.parentNode);)if(b===a)return!0;return!1},z.type=b,z.isFunction=c,z.isWindow=d,z.isArray=$,z.isPlainObject=g,z.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},z.isNumeric=function(a){var b=Number(a),c=typeof a;return null!=a&&"boolean"!=c&&("string"!=c||a.length)&&!isNaN(b)&&isFinite(b)||!1},z.inArray=function(a,b,c){return D.indexOf.call(b,a,c)},z.camelCase=B,z.trim=function(a){return null==a?"":String.prototype.trim.call(a)},z.uuid=0,z.support={},z.expr={},z.noop=function(){},z.map=function(a,b){var c,d,e,f=[];if(h(a))for(d=0;d<a.length;d++)null!=(c=b(a[d],d))&&f.push(c);else for(e in a)null!=(c=b(a[e],e))&&f.push(c);return j(f)},z.each=function(a,b){var c,d;if(h(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},z.grep=function(a,b){return F.call(a,b)},a.JSON&&(z.parseJSON=JSON.parse),z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()}),z.fn={constructor:X.Z,length:0,forEach:D.forEach,reduce:D.reduce,push:D.push,sort:D.sort,splice:D.splice,indexOf:D.indexOf,concat:function(){var a,b,c=[];for(a=0;a<arguments.length;a++)b=arguments[a],c[a]=X.isZ(b)?b.toArray():b;return E.apply(X.isZ(this)?this.toArray():this,c)},map:function(a){return z(z.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return z(G.apply(this,arguments))},ready:function(a){return T.test(H.readyState)&&H.body?a(z):H.addEventListener("DOMContentLoaded",function(){a(z)},!1),this},get:function(a){return a===x?G.call(this):this[a>=0?a:a+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(a){return D.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return c(a)?this.not(this.not(a)):z(F.call(this,function(b){return X.matches(b,a)}))},add:function(a,b){return z(C(this.concat(z(a,b))))},is:function(a){return this.length>0&&X.matches(this[0],a)},not:function(a){var b=[];if(c(a)&&a.call!==x)this.each(function(c){a.call(this,c)||b.push(this)});else{var d="string"==typeof a?this.filter(a):h(a)&&c(a.item)?G.call(a):z(a);this.forEach(function(a){d.indexOf(a)<0&&b.push(a)})}return z(b)},has:function(a){return this.filter(function(){return f(a)?z.contains(this,a):z(this).find(a).size()})},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!f(a)?a:z(a)},last:function(){var a=this[this.length-1];return a&&!f(a)?a:z(a)},find:function(a){var b=this;return a?"object"==typeof a?z(a).filter(function(){var a=this;return D.some.call(b,function(b){return z.contains(b,a)})}):1==this.length?z(X.qsa(this[0],a)):this.map(function(){return X.qsa(this,a)}):z()},closest:function(a,b){var c=[],d="object"==typeof a&&z(a);return this.each(function(f,g){for(;g&&!(d?d.indexOf(g)>=0:X.matches(g,a));)g=g!==b&&!e(g)&&g.parentNode;g&&c.indexOf(g)<0&&c.push(g)}),z(c)},parents:function(a){for(var b=[],c=this;c.length>0;)c=z.map(c,function(a){if((a=a.parentNode)&&!e(a)&&b.indexOf(a)<0)return b.push(a),a});return r(b,a)},parent:function(a){return r(C(this.pluck("parentNode")),a)},children:function(a){return r(this.map(function(){return o(this)}),a)},contents:function(){return this.map(function(){return this.contentDocument||G.call(this.childNodes)})},siblings:function(a){return r(this.map(function(a,b){return F.call(o(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return z.map(this,function(b){return b[a]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=n(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var b=c(a);if(this[0]&&!b)var d=z(a).get(0),e=d.parentNode||this.length>1;return this.each(function(c){z(this).wrapAll(b?a.call(this,c):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){z(this[0]).before(a=z(a));for(var b;(b=a.children()).length;)a=b.first();z(a).append(this)}return this},wrapInner:function(a){var b=c(a);return this.each(function(c){var d=z(this),e=d.contents(),f=b?a.call(this,c):a;e.length?e.wrapAll(f):d.append(f)})},unwrap:function(){return this.parent().each(function(){z(this).replaceWith(z(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(a){return this.each(function(){var b=z(this);(a===x?"none"==b.css("display"):a)?b.show():b.hide()})},prev:function(a){return z(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return z(this.pluck("nextElementSibling")).filter(a||"*")},html:function(a){return 0 in arguments?this.each(function(b){var c=this.innerHTML;z(this).empty().append(s(this,a,b,c))}):0 in this?this[0].innerHTML:null},text:function(a){return 0 in arguments?this.each(function(b){var c=s(this,a,b,this.textContent);this.textContent=null==c?"":""+c}):0 in this?this.pluck("textContent").join(""):null},attr:function(a,b){var c;return"string"!=typeof a||1 in arguments?this.each(function(c){if(1===this.nodeType)if(f(a))for(y in a)t(this,y,a[y]);else t(this,a,s(this,b,c,this.getAttribute(a)))}):0 in this&&1==this[0].nodeType&&null!=(c=this[0].getAttribute(a))?c:x},removeAttr:function(a){return this.each(function(){1===this.nodeType&&a.split(" ").forEach(function(a){t(this,a)},this)})},prop:function(a,b){return a=Z[a]||a,1 in arguments?this.each(function(c){this[a]=s(this,b,c,this[a])}):this[0]&&this[0][a]},removeProp:function(a){return a=Z[a]||a,this.each(function(){delete this[a]})},data:function(a,b){var c="data-"+a.replace(/([A-Z])/g,"-$1").toLowerCase(),d=1 in arguments?this.attr(c,b):this.attr(c);return null!==d?v(d):x},val:function(a){return 0 in arguments?(null==a&&(a=""),this.each(function(b){this.value=s(this,a,b,this.value)})):this[0]&&(this[0].multiple?z(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(b){if(b)return this.each(function(a){var c=z(this),d=s(this,b,a,c.offset()),e=c.offsetParent().offset(),f={top:d.top-e.top,left:d.left-e.left};"static"==c.css("position")&&(f.position="relative"),c.css(f)});if(!this.length)return null;if(H.documentElement!==this[0]&&!z.contains(H.documentElement,this[0]))return{top:0,left:0};var c=this[0].getBoundingClientRect();return{left:c.left+a.pageXOffset,top:c.top+a.pageYOffset,width:Math.round(c.width),height:Math.round(c.height)}},css:function(a,c){if(arguments.length<2){var d=this[0];if("string"==typeof a){if(!d)return;return d.style[B(a)]||getComputedStyle(d,"").getPropertyValue(a)}if($(a)){if(!d)return;var e={},f=getComputedStyle(d,"");return z.each(a,function(a,b){e[b]=d.style[B(b)]||f.getPropertyValue(b)}),e}}var g="";if("string"==b(a))c||0===c?g=k(a)+":"+m(a,c):this.each(function(){this.style.removeProperty(k(a))});else for(y in a)a[y]||0===a[y]?g+=k(y)+":"+m(y,a[y])+";":this.each(function(){this.style.removeProperty(k(y))});return this.each(function(){this.style.cssText+=";"+g})},index:function(a){return a?this.indexOf(z(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return!!a&&D.some.call(this,function(a){return this.test(u(a))},l(a))},addClass:function(a){return a?this.each(function(b){if("className"in this){A=[];var c=u(this);s(this,a,b,c).split(/\s+/g).forEach(function(a){z(this).hasClass(a)||A.push(a)},this),A.length&&u(this,c+(c?" ":"")+A.join(" "))}}):this},removeClass:function(a){return this.each(function(b){if("className"in this){if(a===x)return u(this,"");A=u(this),s(this,a,b,A).split(/\s+/g).forEach(function(a){A=A.replace(l(a)," ")}),u(this,A.trim())}})},toggleClass:function(a,b){return a?this.each(function(c){var d=z(this);s(this,a,c,u(this)).split(/\s+/g).forEach(function(a){(b===x?!d.hasClass(a):b)?d.addClass(a):d.removeClass(a)})}):this},scrollTop:function(a){if(this.length){var b="scrollTop"in this[0];return a===x?b?this[0].scrollTop:this[0].pageYOffset:this.each(b?function(){this.scrollTop=a}:function(){this.scrollTo(this.scrollX,a)})}},scrollLeft:function(a){if(this.length){var b="scrollLeft"in this[0];return a===x?b?this[0].scrollLeft:this[0].pageXOffset:this.each(b?function(){this.scrollLeft=a}:function(){this.scrollTo(a,this.scrollY)})}},position:function(){if(this.length){var a=this[0],b=this.offsetParent(),c=this.offset(),d=N.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(z(a).css("margin-top"))||0,c.left-=parseFloat(z(a).css("margin-left"))||0,d.top+=parseFloat(z(b[0]).css("border-top-width"))||0,d.left+=parseFloat(z(b[0]).css("border-left-width"))||0,{top:c.top-d.top,left:c.left-d.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||H.body;a&&!N.test(a.nodeName)&&"static"==z(a).css("position");)a=a.offsetParent;return a})}},z.fn.detach=z.fn.remove,["width","height"].forEach(function(a){var b=a.replace(/./,function(a){return a[0].toUpperCase()});z.fn[a]=function(c){var f,g=this[0];return c===x?d(g)?g["inner"+b]:e(g)?g.documentElement["scroll"+b]:(f=this.offset())&&f[a]:this.each(function(b){g=z(this),g.css(a,s(this,c,b,g[a]()))})}}),P.forEach(function(c,d){var e=d%2;z.fn[c]=function(){var c,f,g=z.map(arguments,function(a){var d=[];return c=b(a),"array"==c?(a.forEach(function(a){return a.nodeType!==x?d.push(a):z.zepto.isZ(a)?d=d.concat(a.get()):void(d=d.concat(X.fragment(a)))}),d):"object"==c||null==a?a:X.fragment(a)}),h=this.length>1;return g.length<1?this:this.each(function(b,c){f=e?c:c.parentNode,c=0==d?c.nextSibling:1==d?c.firstChild:2==d?c:null;var i=z.contains(H.documentElement,f);g.forEach(function(b){if(h)b=b.cloneNode(!0);else if(!f)return z(b).remove();f.insertBefore(b,c),i&&w(b,function(b){if(!(null==b.nodeName||"SCRIPT"!==b.nodeName.toUpperCase()||b.type&&"text/javascript"!==b.type||b.src)){var c=b.ownerDocument?b.ownerDocument.defaultView:a;c.eval.call(c,b.innerHTML)}})})})},z.fn[e?c+"To":"insert"+(d?"Before":"After")]=function(a){return z(a)[c](this),this}}),X.Z.prototype=p.prototype=z.fn,X.uniq=C,X.deserializeValue=v,z.zepto=X,z}();return function(b){function c(a){return a._zid||(a._zid=n++)}function d(a,b,d,g){if(b=e(b),b.ns)var h=f(b.ns);return(r[c(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||h.test(a.ns))&&(!d||c(a.fn)===c(d))&&(!g||a.sel==g)})}function e(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function f(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function g(a,b){return a.del&&!t&&a.e in u||!!b}function h(a){return v[a]||t&&u[a]||a}function i(a,d,f,i,j,l,n){var o=c(a),p=r[o]||(r[o]=[]);d.split(/\s/).forEach(function(c){if("ready"==c)return b(document).ready(f);var d=e(c);d.fn=f,d.sel=j,d.e in v&&(f=function(a){var c=a.relatedTarget;if(!c||c!==this&&!b.contains(this,c))return d.fn.apply(this,arguments)}),d.del=l;var o=l||f;d.proxy=function(b){if(b=k(b),!b.isImmediatePropagationStopped()){try{var c=Object.getOwnPropertyDescriptor(b,"data");c&&!c.writable||(b.data=i)}catch(b){}var d=o.apply(a,b._args==m?[b]:[b].concat(b._args));return d===!1&&(b.preventDefault(),b.stopPropagation()),d}},d.i=p.length,p.push(d),"addEventListener"in a&&a.addEventListener(h(d.e),d.proxy,g(d,n))})}function j(a,b,e,f,i){var j=c(a);(b||"").split(/\s/).forEach(function(b){d(a,b,e,f).forEach(function(b){delete r[j][b.i],"removeEventListener"in a&&a.removeEventListener(h(b.e),b.proxy,g(b,i))})})}function k(a,c){return!c&&a.isDefaultPrevented||(c||(c=a),b.each(z,function(b,d){var e=c[b];a[b]=function(){return this[d]=w,e&&e.apply(c,arguments)},a[d]=x}),a.timeStamp||(a.timeStamp=Date.now()),(c.defaultPrevented!==m?c.defaultPrevented:"returnValue"in c?c.returnValue===!1:c.getPreventDefault&&c.getPreventDefault())&&(a.isDefaultPrevented=w)),a}function l(a){var b,c={originalEvent:a};for(b in a)y.test(b)||a[b]===m||(c[b]=a[b]);return k(c,a)}var m,n=1,o=Array.prototype.slice,p=b.isFunction,q=function(a){return"string"==typeof a},r={},s={},t="onfocusin"in a,u={focus:"focusin",blur:"focusout"},v={mouseenter:"mouseover",mouseleave:"mouseout"};s.click=s.mousedown=s.mouseup=s.mousemove="MouseEvents",b.event={add:i,remove:j},b.proxy=function(a,d){var e=2 in arguments&&o.call(arguments,2);if(p(a)){var f=function(){return a.apply(d,e?e.concat(o.call(arguments)):arguments)};return f._zid=c(a),f}if(q(d))return e?(e.unshift(a[d],a),b.proxy.apply(null,e)):b.proxy(a[d],a);throw new TypeError("expected function")},b.fn.bind=function(a,b,c){return this.on(a,b,c)},b.fn.unbind=function(a,b){return this.off(a,b)},b.fn.one=function(a,b,c,d){return this.on(a,b,c,d,1)};var w=function(){return!0},x=function(){return!1},y=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,z={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};b.fn.delegate=function(a,b,c){return this.on(b,a,c)},b.fn.undelegate=function(a,b,c){return this.off(b,a,c)},b.fn.live=function(a,c){return b(document.body).delegate(this.selector,a,c),this},b.fn.die=function(a,c){return b(document.body).undelegate(this.selector,a,c),this},b.fn.on=function(a,c,d,e,f){var g,h,k=this;return a&&!q(a)?(b.each(a,function(a,b){k.on(a,c,d,b,f)}),k):(q(c)||p(e)||e===!1||(e=d,d=c,c=m),e!==m&&d!==!1||(e=d,d=m),e===!1&&(e=x),k.each(function(k,m){f&&(g=function(a){return j(m,a.type,e),e.apply(this,arguments)}),c&&(h=function(a){var d,f=b(a.target).closest(c,m).get(0);if(f&&f!==m)return d=b.extend(l(a),{currentTarget:f,liveFired:m}),(g||e).apply(f,[d].concat(o.call(arguments,1)))}),i(m,a,e,d,c,h||g)}))},b.fn.off=function(a,c,d){var e=this;return a&&!q(a)?(b.each(a,function(a,b){e.off(a,c,b)}),e):(q(c)||p(d)||d===!1||(d=c,c=m),d===!1&&(d=x),e.each(function(){j(this,a,d,c)}))},b.fn.trigger=function(a,c){return a=q(a)||b.isPlainObject(a)?b.Event(a):k(a),a._args=c,this.each(function(){a.type in u&&"function"==typeof this[a.type]?this[a.type]():"dispatchEvent"in this?this.dispatchEvent(a):b(this).triggerHandler(a,c)})},b.fn.triggerHandler=function(a,c){var e,f;return this.each(function(g,h){e=l(q(a)?b.Event(a):a),e._args=c,e.target=h,b.each(d(h,a.type||a),function(a,b){if(f=b.proxy(e),e.isImmediatePropagationStopped())return!1})}),f},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(a){b.fn[a]=function(b){return 0 in arguments?this.bind(a,b):this.trigger(a)}}),b.Event=function(a,b){q(a)||(b=a,a=b.type);var c=document.createEvent(s[a]||"Events"),d=!0;if(b)for(var e in b)"bubbles"==e?d=!!b[e]:c[e]=b[e];return c.initEvent(a,d,!0),k(c)}}(b),function(a){var b,c=[];a.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(c.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",b&&clearTimeout(b),b=setTimeout(function(){c=[]},6e4)),this.parentNode.removeChild(this))})}}(b),function(a){function b(b,d){var i=b[h],j=i&&e[i];if(void 0===d)return j||c(b);if(j){if(d in j)return j[d];var k=g(d);if(k in j)return j[k]}return f.call(a(b),d)}function c(b,c,f){var i=b[h]||(b[h]=++a.uuid),j=e[i]||(e[i]=d(b));return void 0!==c&&(j[g(c)]=f),j}function d(b){var c={};return a.each(b.attributes||i,function(b,d){0==d.name.indexOf("data-")&&(c[g(d.name.replace("data-",""))]=a.zepto.deserializeValue(d.value))}),c}var e={},f=a.fn.data,g=a.camelCase,h=a.expando="Zepto"+ +new Date,i=[];a.fn.data=function(d,e){return void 0===e?a.isPlainObject(d)?this.each(function(b,e){a.each(d,function(a,b){c(e,a,b)})}):0 in this?b(this[0],d):void 0:this.each(function(){c(this,d,e)})},a.data=function(b,c,d){return a(b).data(c,d)},a.hasData=function(b){var c=b[h],d=c&&e[c];return!!d&&!a.isEmptyObject(d)},a.fn.removeData=function(b){return"string"==typeof b&&(b=b.split(/\s+/)),this.each(function(){var c=this[h],d=c&&e[c];d&&a.each(b||d,function(a){delete d[b?g(this):a]})})},["remove","empty"].forEach(function(b){var c=a.fn[b];a.fn[b]=function(){var a=this.find("*");return"remove"===b&&(a=a.add(this)),a.removeData(),c.call(this)}})}(b),b}(b)}(window)},function(a,b){"use strict";a.exports={element:null}},function(a,b,c){"use strict";function d(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var e=c(3);a.exports={isArray:null,isFunction:null,isObject:null,bind:null,each:null,map:null,mixin:null,isMsie:function(a){if(void 0===a&&(a=navigator.userAgent),/(msie|trident)/i.test(a)){var b=a.match(/(msie |rv:)(\d+(.\d+)?)/i);if(b)return b[2]}return!1},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isNumber:function(a){return"number"==typeof a},toStr:function(a){return void 0===a||null===a?"":a+""},cloneDeep:function(a){var b=this.mixin({},a),c=this;return this.each(b,function(a,d){a&&(c.isArray(a)?b[d]=[].concat(a):c.isObject(a)&&(b[d]=c.cloneDeep(a)))}),b},error:function(a){throw new Error(a)},every:function(a,b){var c=!0;return a?(this.each(a,function(d,e){c&&(c=b.call(null,d,e,a)&&c)}),!!c):c},any:function(a,b){var c=!1;return a?(this.each(a,function(d,e){if(b.call(null,d,e,a))return c=!0,!1}),c):c},getUniqueId:function(){var a=0;return function(){return a++}}(),templatify:function(a){if(this.isFunction(a))return a;var b=e.element(a);return"SCRIPT"===b.prop("tagName")?function(){return b.text()}:function(){return String(a)}},defer:function(a){setTimeout(a,0)},noop:function(){},formatPrefix:function(a,b){return b?"":a+"-"},className:function(a,b,c){return(c?"":".")+a+b},escapeHighlightedString:function(a,b,c){b=b||"<em>";var e=document.createElement("div");e.appendChild(document.createTextNode(b)),c=c||"</em>";var f=document.createElement("div");f.appendChild(document.createTextNode(c));var g=document.createElement("div");return g.appendChild(document.createTextNode(a)),g.innerHTML.replace(RegExp(d(e.innerHTML),"g"),b).replace(RegExp(d(f.innerHTML),"g"),c)}}},function(a,b,c){"use strict";function d(a){var b,c;if(a=a||{},a.input||i.error("missing input"),this.isActivated=!1,this.debug=!!a.debug,this.autoselect=!!a.autoselect,this.autoselectOnBlur=!!a.autoselectOnBlur,this.openOnFocus=!!a.openOnFocus,this.minLength=i.isNumber(a.minLength)?a.minLength:1,this.autoWidth=void 0===a.autoWidth||!!a.autoWidth,this.clearOnSelected=!!a.clearOnSelected,this.tabAutocomplete=void 0===a.tabAutocomplete||!!a.tabAutocomplete,a.hint=!!a.hint,a.hint&&a.appendTo)throw new Error("[autocomplete.js] hint and appendTo options can't be used at the same time");this.css=a.css=i.mixin({},o,a.appendTo?o.appendTo:{}),this.cssClasses=a.cssClasses=i.mixin({},o.defaultClasses,a.cssClasses||{}),this.cssClasses.prefix=a.cssClasses.formattedPrefix=i.formatPrefix(this.cssClasses.prefix,this.cssClasses.noPrefix),this.listboxId=a.listboxId=[this.cssClasses.root,"listbox",i.getUniqueId()].join("-");var f=e(a);this.$node=f.wrapper;var g=this.$input=f.input;b=f.menu,c=f.hint,a.dropdownMenuContainer&&j.element(a.dropdownMenuContainer).css("position","relative").append(b.css("top","0")),g.on("blur.aa",function(a){var c=document.activeElement;i.isMsie()&&(b[0]===c||b[0].contains(c))&&(a.preventDefault(),a.stopImmediatePropagation(),i.defer(function(){g.focus()}))}),b.on("mousedown.aa",function(a){a.preventDefault()}),this.eventBus=a.eventBus||new k({el:g}),this.dropdown=new d.Dropdown({appendTo:a.appendTo,wrapper:this.$node,menu:b,datasets:a.datasets,templates:a.templates,cssClasses:a.cssClasses,minLength:this.minLength}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onSync("shown",this._onShown,this).onSync("empty",this._onEmpty,this).onSync("redrawn",this._onRedrawn,this).onAsync("datasetRendered",this._onDatasetRendered,this),this.input=new d.Input({input:g,hint:c}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this),this._bindKeyboardShortcuts(a),this._setLanguageDirection()}function e(a){var b,c,d,e;b=j.element(a.input),c=j.element(n.wrapper.replace("%ROOT%",a.cssClasses.root)).css(a.css.wrapper),a.appendTo||"block"!==b.css("display")||"table"!==b.parent().css("display")||c.css("display","table-cell");var g=n.dropdown.replace("%PREFIX%",a.cssClasses.prefix).replace("%DROPDOWN_MENU%",a.cssClasses.dropdownMenu);d=j.element(g).css(a.css.dropdown).attr({role:"listbox",id:a.listboxId}),a.templates&&a.templates.dropdownMenu&&d.html(i.templatify(a.templates.dropdownMenu)()),e=b.clone().css(a.css.hint).css(f(b)),e.val("").addClass(i.className(a.cssClasses.prefix,a.cssClasses.hint,!0)).removeAttr("id name placeholder required").prop("readonly",!0).attr({"aria-hidden":"true",autocomplete:"off",spellcheck:"false",tabindex:-1}),e.removeData&&e.removeData(),b.data(h,{"aria-autocomplete":b.attr("aria-autocomplete"),"aria-expanded":b.attr("aria-expanded"),"aria-owns":b.attr("aria-owns"),autocomplete:b.attr("autocomplete"),dir:b.attr("dir"),role:b.attr("role"),spellcheck:b.attr("spellcheck"),style:b.attr("style"),type:b.attr("type")}),b.addClass(i.className(a.cssClasses.prefix,a.cssClasses.input,!0)).attr({autocomplete:"off",spellcheck:!1,role:"combobox","aria-autocomplete":a.datasets&&a.datasets[0]&&a.datasets[0].displayKey?"both":"list","aria-expanded":"false","aria-label":a.ariaLabel,"aria-owns":a.listboxId}).css(a.hint?a.css.input:a.css.inputWithNoHint);try{b.attr("dir")||b.attr("dir","auto")}catch(a){}return c=a.appendTo?c.appendTo(j.element(a.appendTo).eq(0)).eq(0):b.wrap(c).parent(),c.prepend(a.hint?e:null).append(d),{wrapper:c,input:b,hint:e,menu:d}}function f(a){return{backgroundAttachment:a.css("background-attachment"),backgroundClip:a.css("background-clip"),backgroundColor:a.css("background-color"),backgroundImage:a.css("background-image"),backgroundOrigin:a.css("background-origin"),backgroundPosition:a.css("background-position"),backgroundRepeat:a.css("background-repeat"),backgroundSize:a.css("background-size")}}function g(a,b){var c=a.find(i.className(b.prefix,b.input));i.each(c.data(h),function(a,b){void 0===a?c.removeAttr(b):c.attr(b,a)}),c.detach().removeClass(i.className(b.prefix,b.input,!0)).insertAfter(a),c.removeData&&c.removeData(h),a.remove()}var h="aaAttrs",i=c(4),j=c(3),k=c(6),l=c(7),m=c(16),n=c(18),o=c(19);i.mixin(d.prototype,{_bindKeyboardShortcuts:function(a){if(a.keyboardShortcuts){var b=this.$input,c=[];i.each(a.keyboardShortcuts,function(a){"string"==typeof a&&(a=a.toUpperCase().charCodeAt(0)),c.push(a)}),j.element(document).keydown(function(a){var d=a.target||a.srcElement,e=d.tagName;if(!d.isContentEditable&&"INPUT"!==e&&"SELECT"!==e&&"TEXTAREA"!==e){var f=a.which||a.keyCode;c.indexOf(f)!==-1&&(b.focus(),a.stopPropagation(),a.preventDefault())}})}},_onSuggestionClicked:function(a,b){var c,d={selectionMethod:"click"};(c=this.dropdown.getDatumForSuggestion(b))&&this._select(c,d)},_onCursorMoved:function(a,b){var c=this.dropdown.getDatumForCursor(),d=this.dropdown.getCurrentCursor().attr("id");this.input.setActiveDescendant(d),c&&(b&&this.input.setInputValue(c.value,!0),this.eventBus.trigger("cursorchanged",c.raw,c.datasetName))},_onCursorRemoved:function(){this.input.resetInputValue(),this._updateHint(),this.eventBus.trigger("cursorremoved")},_onDatasetRendered:function(){this._updateHint(),this.eventBus.trigger("updated")},_onOpened:function(){this._updateHint(),this.input.expand(),this.eventBus.trigger("opened")},_onEmpty:function(){this.eventBus.trigger("empty")},_onRedrawn:function(){this.$node.css("top","0px"),this.$node.css("left","0px");var a=this.$input[0].getBoundingClientRect();this.autoWidth&&this.$node.css("width",a.width+"px");var b=this.$node[0].getBoundingClientRect(),c=a.bottom-b.top;this.$node.css("top",c+"px");var d=a.left-b.left;this.$node.css("left",d+"px"),this.eventBus.trigger("redrawn")},_onShown:function(){this.eventBus.trigger("shown"),this.autoselect&&this.dropdown.cursorTopSuggestion()},_onClosed:function(){this.input.clearHint(),this.input.removeActiveDescendant(),this.input.collapse(),this.eventBus.trigger("closed")},_onFocused:function(){if(this.isActivated=!0,this.openOnFocus){var a=this.input.getQuery();a.length>=this.minLength?this.dropdown.update(a):this.dropdown.empty(),this.dropdown.open()}},_onBlurred:function(){var a,b;a=this.dropdown.getDatumForCursor(),b=this.dropdown.getDatumForTopSuggestion();var c={selectionMethod:"blur"};this.debug||(this.autoselectOnBlur&&a?this._select(a,c):this.autoselectOnBlur&&b?this._select(b,c):(this.isActivated=!1,this.dropdown.empty(),this.dropdown.close()))},_onEnterKeyed:function(a,b){var c,d;c=this.dropdown.getDatumForCursor(),d=this.dropdown.getDatumForTopSuggestion();var e={
selectionMethod:"enterKey"};c?(this._select(c,e),b.preventDefault()):this.autoselect&&d&&(this._select(d,e),b.preventDefault())},_onTabKeyed:function(a,b){if(!this.tabAutocomplete)return void this.dropdown.close();var c,d={selectionMethod:"tabKey"};(c=this.dropdown.getDatumForCursor())?(this._select(c,d),b.preventDefault()):this._autocomplete(!0)},_onEscKeyed:function(){this.dropdown.close(),this.input.resetInputValue()},_onUpKeyed:function(){var a=this.input.getQuery();this.dropdown.isEmpty&&a.length>=this.minLength?this.dropdown.update(a):this.dropdown.moveCursorUp(),this.dropdown.open()},_onDownKeyed:function(){var a=this.input.getQuery();this.dropdown.isEmpty&&a.length>=this.minLength?this.dropdown.update(a):this.dropdown.moveCursorDown(),this.dropdown.open()},_onLeftKeyed:function(){"rtl"===this.dir&&this._autocomplete()},_onRightKeyed:function(){"ltr"===this.dir&&this._autocomplete()},_onQueryChanged:function(a,b){this.input.clearHintIfInvalid(),b.length>=this.minLength?this.dropdown.update(b):this.dropdown.empty(),this.dropdown.open(),this._setLanguageDirection()},_onWhitespaceChanged:function(){this._updateHint(),this.dropdown.open()},_setLanguageDirection:function(){var a=this.input.getLanguageDirection();this.dir!==a&&(this.dir=a,this.$node.css("direction",a),this.dropdown.setLanguageDirection(a))},_updateHint:function(){var a,b,c,d,e,f;a=this.dropdown.getDatumForTopSuggestion(),a&&this.dropdown.isVisible()&&!this.input.hasOverflow()?(b=this.input.getInputValue(),c=l.normalizeQuery(b),d=i.escapeRegExChars(c),e=new RegExp("^(?:"+d+")(.+$)","i"),f=e.exec(a.value),f?this.input.setHint(b+f[1]):this.input.clearHint()):this.input.clearHint()},_autocomplete:function(a){var b,c,d,e;b=this.input.getHint(),c=this.input.getQuery(),d=a||this.input.isCursorAtEnd(),b&&c!==b&&d&&(e=this.dropdown.getDatumForTopSuggestion(),e&&this.input.setInputValue(e.value),this.eventBus.trigger("autocompleted",e.raw,e.datasetName))},_select:function(a,b){void 0!==a.value&&this.input.setQuery(a.value),this.clearOnSelected?this.setVal(""):this.input.setInputValue(a.value,!0),this._setLanguageDirection(),this.eventBus.trigger("selected",a.raw,a.datasetName,b).isDefaultPrevented()===!1&&(this.dropdown.close(),i.defer(i.bind(this.dropdown.empty,this.dropdown)))},open:function(){if(!this.isActivated){var a=this.input.getInputValue();a.length>=this.minLength?this.dropdown.update(a):this.dropdown.empty()}this.dropdown.open()},close:function(){this.dropdown.close()},setVal:function(a){a=i.toStr(a),this.isActivated?this.input.setInputValue(a):(this.input.setQuery(a),this.input.setInputValue(a,!0)),this._setLanguageDirection()},getVal:function(){return this.input.getQuery()},destroy:function(){this.input.destroy(),this.dropdown.destroy(),g(this.$node,this.cssClasses),this.$node=null},getWrapper:function(){return this.dropdown.$container[0]}}),d.Dropdown=m,d.Input=l,d.sources=c(20),a.exports=d},function(a,b,c){"use strict";function d(a){a&&a.el||e.error("EventBus initialized without el"),this.$el=f.element(a.el)}var e=c(4),f=c(3);e.mixin(d.prototype,{trigger:function(a,b,c,d){var f=e.Event("autocomplete:"+a);return this.$el.trigger(f,[b,c,d]),f}}),a.exports=d},function(a,b,c){"use strict";function d(a){var b,c,d,f,g=this;a=a||{},a.input||i.error("input is missing"),b=i.bind(this._onBlur,this),c=i.bind(this._onFocus,this),d=i.bind(this._onKeydown,this),f=i.bind(this._onInput,this),this.$hint=j.element(a.hint),this.$input=j.element(a.input).on("blur.aa",b).on("focus.aa",c).on("keydown.aa",d),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=i.noop),i.isMsie()?this.$input.on("keydown.aa keypress.aa cut.aa paste.aa",function(a){h[a.which||a.keyCode]||i.defer(i.bind(g._onInput,g,a))}):this.$input.on("input.aa",f),this.query=this.$input.val(),this.$overflowHelper=e(this.$input)}function e(a){return j.element('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:a.css("font-family"),fontSize:a.css("font-size"),fontStyle:a.css("font-style"),fontVariant:a.css("font-variant"),fontWeight:a.css("font-weight"),wordSpacing:a.css("word-spacing"),letterSpacing:a.css("letter-spacing"),textIndent:a.css("text-indent"),textRendering:a.css("text-rendering"),textTransform:a.css("text-transform")}).insertAfter(a)}function f(a,b){return d.normalizeQuery(a)===d.normalizeQuery(b)}function g(a){return a.altKey||a.ctrlKey||a.metaKey||a.shiftKey}var h;h={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"};var i=c(4),j=c(3),k=c(8);d.normalizeQuery=function(a){return(a||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")},i.mixin(d.prototype,k,{_onBlur:function(){this.resetInputValue(),this.$input.removeAttr("aria-activedescendant"),this.trigger("blurred")},_onFocus:function(){this.trigger("focused")},_onKeydown:function(a){var b=h[a.which||a.keyCode];this._managePreventDefault(b,a),b&&this._shouldTrigger(b,a)&&this.trigger(b+"Keyed",a)},_onInput:function(){this._checkInputValue()},_managePreventDefault:function(a,b){var c,d,e;switch(a){case"tab":d=this.getHint(),e=this.getInputValue(),c=d&&d!==e&&!g(b);break;case"up":case"down":c=!g(b);break;default:c=!1}c&&b.preventDefault()},_shouldTrigger:function(a,b){var c;switch(a){case"tab":c=!g(b);break;default:c=!0}return c},_checkInputValue:function(){var a,b,c;a=this.getInputValue(),b=f(a,this.query),c=!(!b||!this.query)&&this.query.length!==a.length,this.query=a,b?c&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},setQuery:function(a){this.query=a},getInputValue:function(){return this.$input.val()},setInputValue:function(a,b){void 0===a&&(a=this.query),this.$input.val(a),b?this.clearHint():this._checkInputValue()},expand:function(){this.$input.attr("aria-expanded","true")},collapse:function(){this.$input.attr("aria-expanded","false")},setActiveDescendant:function(a){this.$input.attr("aria-activedescendant",a)},removeActiveDescendant:function(){this.$input.removeAttr("aria-activedescendant")},resetInputValue:function(){this.setInputValue(this.query,!0)},getHint:function(){return this.$hint.val()},setHint:function(a){this.$hint.val(a)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var a,b,c,d;a=this.getInputValue(),b=this.getHint(),c=a!==b&&0===b.indexOf(a),(d=""!==a&&c&&!this.hasOverflow())||this.clearHint()},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},hasOverflow:function(){var a=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=a},isCursorAtEnd:function(){var a,b,c;return a=this.$input.val().length,b=this.$input[0].selectionStart,i.isNumber(b)?b===a:!document.selection||(c=document.selection.createRange(),c.moveStart("character",-a),a===c.text.length)},destroy:function(){this.$hint.off(".aa"),this.$input.off(".aa"),this.$hint=this.$input=this.$overflowHelper=null}}),a.exports=d},function(a,b,c){"use strict";function d(a,b,c,d){var e;if(!c)return this;for(b=b.split(l),c=d?j(c,d):c,this._callbacks=this._callbacks||{};e=b.shift();)this._callbacks[e]=this._callbacks[e]||{sync:[],async:[]},this._callbacks[e][a].push(c);return this}function e(a,b,c){return d.call(this,"async",a,b,c)}function f(a,b,c){return d.call(this,"sync",a,b,c)}function g(a){var b;if(!this._callbacks)return this;for(a=a.split(l);b=a.shift();)delete this._callbacks[b];return this}function h(a){var b,c,d,e,f;if(!this._callbacks)return this;for(a=a.split(l),d=[].slice.call(arguments,1);(b=a.shift())&&(c=this._callbacks[b]);)e=i(c.sync,this,[b].concat(d)),f=i(c.async,this,[b].concat(d)),e()&&k(f);return this}function i(a,b,c){function d(){for(var d,e=0,f=a.length;!d&&e<f;e+=1)d=a[e].apply(b,c)===!1;return!d}return d}function j(a,b){return a.bind?a.bind(b):function(){a.apply(b,[].slice.call(arguments,0))}}var k=c(9),l=/\s+/;a.exports={onSync:f,onAsync:e,off:g,trigger:h}},function(a,b,c){"use strict";function d(){h&&i&&(h=!1,i.length?m=i.concat(m):l=-1,m.length&&e())}function e(){if(!h){n=!1,h=!0;for(var a=m.length,b=setTimeout(d);a;){for(i=m,m=[];i&&++l<a;)i[l].run();l=-1,a=m.length}i=null,l=-1,h=!1,clearTimeout(b)}}function f(a,b){this.fun=a,this.array=b}function g(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];m.push(new f(a,b)),n||h||(n=!0,j())}for(var h,i,j,k=[c(10),c(12),c(13),c(14),c(15)],l=-1,m=[],n=!1,o=-1,p=k.length;++o<p;)if(k[o]&&k[o].test&&k[o].test()){j=k[o].install(e);break}f.prototype.run=function(){var a=this.fun,b=this.array;switch(b.length){case 0:return a();case 1:return a(b[0]);case 2:return a(b[0],b[1]);case 3:return a(b[0],b[1],b[2]);default:return a.apply(null,b)}},a.exports=g},function(a,b,c){(function(a){"use strict";b.test=function(){return void 0!==a&&!a.browser},b.install=function(b){return function(){a.nextTick(b)}}}).call(b,c(11))},function(a,b){function c(){throw new Error("setTimeout has not been defined")}function d(){throw new Error("clearTimeout has not been defined")}function e(a){if(k===setTimeout)return setTimeout(a,0);if((k===c||!k)&&setTimeout)return k=setTimeout,setTimeout(a,0);try{return k(a,0)}catch(b){try{return k.call(null,a,0)}catch(b){return k.call(this,a,0)}}}function f(a){if(l===clearTimeout)return clearTimeout(a);if((l===d||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(a);try{return l(a)}catch(b){try{return l.call(null,a)}catch(b){return l.call(this,a)}}}function g(){p&&n&&(p=!1,n.length?o=n.concat(o):q=-1,o.length&&h())}function h(){if(!p){var a=e(g);p=!0;for(var b=o.length;b;){for(n=o,o=[];++q<b;)n&&n[q].run();q=-1,b=o.length}n=null,p=!1,f(a)}}function i(a,b){this.fun=a,this.array=b}function j(){}var k,l,m=a.exports={};!function(){try{k="function"==typeof setTimeout?setTimeout:c}catch(a){k=c}try{l="function"==typeof clearTimeout?clearTimeout:d}catch(a){l=d}}();var n,o=[],p=!1,q=-1;m.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];o.push(new i(a,b)),1!==o.length||p||e(h)},i.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=j,m.addListener=j,m.once=j,m.off=j,m.removeListener=j,m.removeAllListeners=j,m.emit=j,m.binding=function(a){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(a){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},function(a,b){(function(a){"use strict";var c=a.MutationObserver||a.WebKitMutationObserver;b.test=function(){return c},b.install=function(b){var d=0,e=new c(b),f=a.document.createTextNode("");return e.observe(f,{characterData:!0}),function(){f.data=d=++d%2}}}).call(b,function(){return this}())},function(a,b){(function(a){"use strict";b.test=function(){return!a.setImmediate&&void 0!==a.MessageChannel},b.install=function(b){var c=new a.MessageChannel;return c.port1.onmessage=b,function(){c.port2.postMessage(0)}}}).call(b,function(){return this}())},function(a,b){(function(a){"use strict";b.test=function(){return"document"in a&&"onreadystatechange"in a.document.createElement("script")},b.install=function(b){return function(){var c=a.document.createElement("script");return c.onreadystatechange=function(){b(),c.onreadystatechange=null,c.parentNode.removeChild(c),c=null},a.document.documentElement.appendChild(c),b}}}).call(b,function(){return this}())},function(a,b){"use strict";b.test=function(){return!0},b.install=function(a){return function(){setTimeout(a,0)}}},function(a,b,c){"use strict";function d(a){var b,c,d,h=this;a=a||{},a.menu||f.error("menu is required"),f.isArray(a.datasets)||f.isObject(a.datasets)||f.error("1 or more datasets required"),a.datasets||f.error("datasets is required"),this.isOpen=!1,this.isEmpty=!0,this.minLength=a.minLength||0,this.templates={},this.appendTo=a.appendTo||!1,this.css=f.mixin({},j,a.appendTo?j.appendTo:{}),this.cssClasses=a.cssClasses=f.mixin({},j.defaultClasses,a.cssClasses||{}),this.cssClasses.prefix=a.cssClasses.formattedPrefix||f.formatPrefix(this.cssClasses.prefix,this.cssClasses.noPrefix),b=f.bind(this._onSuggestionClick,this),c=f.bind(this._onSuggestionMouseEnter,this),d=f.bind(this._onSuggestionMouseLeave,this);var i=f.className(this.cssClasses.prefix,this.cssClasses.suggestion);this.$menu=g.element(a.menu).on("mouseenter.aa",i,c).on("mouseleave.aa",i,d).on("click.aa",i,b),this.$container=a.appendTo?a.wrapper:this.$menu,a.templates&&a.templates.header&&(this.templates.header=f.templatify(a.templates.header),this.$menu.prepend(this.templates.header())),a.templates&&a.templates.empty&&(this.templates.empty=f.templatify(a.templates.empty),this.$empty=g.element('<div class="'+f.className(this.cssClasses.prefix,this.cssClasses.empty,!0)+'"></div>'),this.$menu.append(this.$empty),this.$empty.hide()),this.datasets=f.map(a.datasets,function(b){return e(h.$menu,b,a.cssClasses)}),f.each(this.datasets,function(a){var b=a.getRoot();b&&0===b.parent().length&&h.$menu.append(b),a.onSync("rendered",h._onRendered,h)}),a.templates&&a.templates.footer&&(this.templates.footer=f.templatify(a.templates.footer),this.$menu.append(this.templates.footer()));var k=this;g.element(window).resize(function(){k._redraw()})}function e(a,b,c){return new d.Dataset(f.mixin({$menu:a,cssClasses:c},b))}var f=c(4),g=c(3),h=c(8),i=c(17),j=c(19);f.mixin(d.prototype,h,{_onSuggestionClick:function(a){this.trigger("suggestionClicked",g.element(a.currentTarget))},_onSuggestionMouseEnter:function(a){var b=g.element(a.currentTarget);if(!b.hasClass(f.className(this.cssClasses.prefix,this.cssClasses.cursor,!0))){this._removeCursor();var c=this;setTimeout(function(){c._setCursor(b,!1)},0)}},_onSuggestionMouseLeave:function(a){if(a.relatedTarget){if(g.element(a.relatedTarget).closest("."+f.className(this.cssClasses.prefix,this.cssClasses.cursor,!0)).length>0)return}this._removeCursor(),this.trigger("cursorRemoved")},_onRendered:function(a,b){function c(a){return a.isEmpty()}function d(a){return a.templates&&a.templates.empty}if(this.isEmpty=f.every(this.datasets,c),this.isEmpty)if(b.length>=this.minLength&&this.trigger("empty"),this.$empty)if(b.length<this.minLength)this._hide();else{var e=this.templates.empty({query:this.datasets[0]&&this.datasets[0].query});this.$empty.html(e),this.$empty.show(),this._show()}else f.any(this.datasets,d)?b.length<this.minLength?this._hide():this._show():this._hide();else this.isOpen&&(this.$empty&&(this.$empty.empty(),this.$empty.hide()),b.length>=this.minLength?this._show():this._hide());this.trigger("datasetRendered")},_hide:function(){this.$container.hide()},_show:function(){this.$container.css("display","block"),this._redraw(),this.trigger("shown")},_redraw:function(){this.isOpen&&this.appendTo&&this.trigger("redrawn")},_getSuggestions:function(){return this.$menu.find(f.className(this.cssClasses.prefix,this.cssClasses.suggestion))},_getCursor:function(){return this.$menu.find(f.className(this.cssClasses.prefix,this.cssClasses.cursor)).first()},_setCursor:function(a,b){a.first().addClass(f.className(this.cssClasses.prefix,this.cssClasses.cursor,!0)).attr("aria-selected","true"),this.trigger("cursorMoved",b)},_removeCursor:function(){this._getCursor().removeClass(f.className(this.cssClasses.prefix,this.cssClasses.cursor,!0)).removeAttr("aria-selected")},_moveCursor:function(a){var b,c,d,e;if(this.isOpen){if(c=this._getCursor(),b=this._getSuggestions(),this._removeCursor(),d=b.index(c)+a,(d=(d+1)%(b.length+1)-1)===-1)return void this.trigger("cursorRemoved");d<-1&&(d=b.length-1),this._setCursor(e=b.eq(d),!0),this._ensureVisible(e)}},_ensureVisible:function(a){var b,c,d,e;b=a.position().top,c=b+a.height()+parseInt(a.css("margin-top"),10)+parseInt(a.css("margin-bottom"),10),d=this.$menu.scrollTop(),e=this.$menu.height()+parseInt(this.$menu.css("padding-top"),10)+parseInt(this.$menu.css("padding-bottom"),10),b<0?this.$menu.scrollTop(d+b):e<c&&this.$menu.scrollTop(d+(c-e))},close:function(){this.isOpen&&(this.isOpen=!1,this._removeCursor(),this._hide(),this.trigger("closed"))},open:function(){this.isOpen||(this.isOpen=!0,this.isEmpty||this._show(),this.trigger("opened"))},setLanguageDirection:function(a){this.$menu.css("ltr"===a?this.css.ltr:this.css.rtl)},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getDatumForSuggestion:function(a){var b=null;return a.length&&(b={raw:i.extractDatum(a),value:i.extractValue(a),datasetName:i.extractDatasetName(a)}),b},getCurrentCursor:function(){return this._getCursor().first()},getDatumForCursor:function(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForTopSuggestion:function(){return this.getDatumForSuggestion(this._getSuggestions().first())},cursorTopSuggestion:function(){this._setCursor(this._getSuggestions().first(),!1)},update:function(a){function b(b){b.update(a)}f.each(this.datasets,b)},empty:function(){function a(a){a.clear()}f.each(this.datasets,a),this.isEmpty=!0},isVisible:function(){return this.isOpen&&!this.isEmpty},destroy:function(){function a(a){a.destroy()}this.$menu.off(".aa"),this.$menu=null,f.each(this.datasets,a)}}),d.Dataset=i,a.exports=d},function(a,b,c){"use strict";function d(a){a=a||{},a.templates=a.templates||{},a.source||k.error("missing source"),a.name&&!g(a.name)&&k.error("invalid dataset name: "+a.name),this.query=null,this._isEmpty=!0,this.highlight=!!a.highlight,this.name=void 0===a.name||null===a.name?k.getUniqueId():a.name,this.source=a.source,this.displayFn=e(a.display||a.displayKey),this.debounce=a.debounce,this.cache=a.cache!==!1,this.templates=f(a.templates,this.displayFn),this.css=k.mixin({},n,a.appendTo?n.appendTo:{}),this.cssClasses=a.cssClasses=k.mixin({},n.defaultClasses,a.cssClasses||{}),this.cssClasses.prefix=a.cssClasses.formattedPrefix||k.formatPrefix(this.cssClasses.prefix,this.cssClasses.noPrefix);var b=k.className(this.cssClasses.prefix,this.cssClasses.dataset);this.$el=a.$menu&&a.$menu.find(b+"-"+this.name).length>0?l.element(a.$menu.find(b+"-"+this.name)[0]):l.element(m.dataset.replace("%CLASS%",this.name).replace("%PREFIX%",this.cssClasses.prefix).replace("%DATASET%",this.cssClasses.dataset)),this.$menu=a.$menu,this.clearCachedSuggestions()}function e(a){function b(b){return b[a]}return a=a||"value",k.isFunction(a)?a:b}function f(a,b){function c(a){return"<p>"+b(a)+"</p>"}return{empty:a.empty&&k.templatify(a.empty),header:a.header&&k.templatify(a.header),footer:a.footer&&k.templatify(a.footer),suggestion:a.suggestion||c}}function g(a){return/^[_a-zA-Z0-9-]+$/.test(a)}var h="aaDataset",i="aaValue",j="aaDatum",k=c(4),l=c(3),m=c(18),n=c(19),o=c(8);d.extractDatasetName=function(a){return l.element(a).data(h)},d.extractValue=function(a){return l.element(a).data(i)},d.extractDatum=function(a){var b=l.element(a).data(j);return"string"==typeof b&&(b=JSON.parse(b)),b},k.mixin(d.prototype,o,{_render:function(a,b){function c(){var b=[].slice.call(arguments,0);return b=[{query:a,isEmpty:!0}].concat(b),n.templates.empty.apply(this,b)}function d(){function a(a){var b,c=m.suggestion.replace("%PREFIX%",f.cssClasses.prefix).replace("%SUGGESTION%",f.cssClasses.suggestion);return b=l.element(c).attr({role:"option",id:["option",Math.floor(1e8*Math.random())].join("-")}).append(n.templates.suggestion.apply(this,[a].concat(e))),b.data(h,n.name),b.data(i,n.displayFn(a)||void 0),b.data(j,JSON.stringify(a)),b.children().each(function(){l.element(this).css(f.css.suggestionChild)}),b}var c,d,e=[].slice.call(arguments,0),f=this,g=m.suggestions.replace("%PREFIX%",this.cssClasses.prefix).replace("%SUGGESTIONS%",this.cssClasses.suggestions);return c=l.element(g).css(this.css.suggestions),d=k.map(b,a),c.append.apply(c,d),c}function e(){var b=[].slice.call(arguments,0);return b=[{query:a,isEmpty:!g}].concat(b),n.templates.header.apply(this,b)}function f(){var b=[].slice.call(arguments,0);return b=[{query:a,isEmpty:!g}].concat(b),n.templates.footer.apply(this,b)}if(this.$el){var g,n=this,o=[].slice.call(arguments,2);if(this.$el.empty(),g=b&&b.length,this._isEmpty=!g,!g&&this.templates.empty)this.$el.html(c.apply(this,o)).prepend(n.templates.header?e.apply(this,o):null).append(n.templates.footer?f.apply(this,o):null);else if(g)this.$el.html(d.apply(this,o)).prepend(n.templates.header?e.apply(this,o):null).append(n.templates.footer?f.apply(this,o):null);else if(b&&!Array.isArray(b))throw new TypeError("suggestions must be an array");this.$menu&&this.$menu.addClass(this.cssClasses.prefix+(g?"with":"without")+"-"+this.name).removeClass(this.cssClasses.prefix+(g?"without":"with")+"-"+this.name),this.trigger("rendered",a)}},getRoot:function(){return this.$el},update:function(a){function b(b){if(!this.canceled&&a===this.query){var c=[].slice.call(arguments,1);this.cacheSuggestions(a,b,c),this._render.apply(this,[a,b].concat(c))}}if(this.query=a,this.canceled=!1,this.shouldFetchFromCache(a))b.apply(this,[this.cachedSuggestions].concat(this.cachedRenderExtraArgs));else{var c=this,d=function(){c.canceled||c.source(a,b.bind(c))};if(this.debounce){var e=function(){c.debounceTimeout=null,d()};clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout(e,this.debounce)}else d()}},cacheSuggestions:function(a,b,c){this.cachedQuery=a,this.cachedSuggestions=b,this.cachedRenderExtraArgs=c},shouldFetchFromCache:function(a){return this.cache&&this.cachedQuery===a&&this.cachedSuggestions&&this.cachedSuggestions.length},clearCachedSuggestions:function(){delete this.cachedQuery,delete this.cachedSuggestions,delete this.cachedRenderExtraArgs},cancel:function(){this.canceled=!0},clear:function(){this.cancel(),this.$el.empty(),this.trigger("rendered","")},isEmpty:function(){return this._isEmpty},destroy:function(){this.clearCachedSuggestions(),this.$el=null}}),a.exports=d},function(a,b){"use strict";a.exports={wrapper:'<span class="%ROOT%"></span>',dropdown:'<span class="%PREFIX%%DROPDOWN_MENU%"></span>',dataset:'<div class="%PREFIX%%DATASET%-%CLASS%"></div>',suggestions:'<span class="%PREFIX%%SUGGESTIONS%"></span>',suggestion:'<div class="%PREFIX%%SUGGESTION%"></div>'}},function(a,b,c){"use strict";var d=c(4),e={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:"0"},defaultClasses:{root:"algolia-autocomplete",prefix:"aa",noPrefix:!1,dropdownMenu:"dropdown-menu",input:"input",hint:"hint",suggestions:"suggestions",suggestion:"suggestion",cursor:"cursor",dataset:"dataset",empty:"empty"},appendTo:{wrapper:{position:"absolute",zIndex:"100",display:"none"},input:{},inputWithNoHint:{},dropdown:{display:"block"}}};d.isMsie()&&d.mixin(e.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),d.isMsie()&&d.isMsie()<=7&&d.mixin(e.input,{marginTop:"-1px"}),a.exports=e},function(a,b,c){"use strict";a.exports={hits:c(21),popularIn:c(24)}},function(a,b,c){"use strict";var d=c(4),e=c(22),f=c(23);a.exports=function(a,b){function c(c,e){a.search(c,b,function(a,b){if(a)return void d.error(a.message);e(b.hits,b)})}var g=f(a.as._ua);return g&&g[0]>=3&&g[1]>20&&(b=b||{},b.additionalUA="autocomplete.js "+e),c}},function(a,b){a.exports="0.35.0"},function(a,b){"use strict";a.exports=function(a){var b=a.match(/Algolia for vanilla JavaScript (\d+\.)(\d+\.)(\d+)/);if(b)return[b[1],b[2],b[3]]}},function(a,b,c){"use strict";var d=c(4),e=c(22),f=c(23);a.exports=function(a,b,c,g){function h(h,i){a.search(h,b,function(a,h){if(a)return void d.error(a.message);if(h.hits.length>0){var l=h.hits[0],m=d.mixin({hitsPerPage:0},c);delete m.source,delete m.index;var n=f(k.as._ua);return n&&n[0]>=3&&n[1]>20&&(b.additionalUA="autocomplete.js "+e),void k.search(j(l),m,function(a,b){if(a)return void d.error(a.message);var c=[];if(g.includeAll){var e=g.allTitle||"All departments";c.push(d.mixin({facet:{value:e,count:b.nbHits}},d.cloneDeep(l)))}d.each(b.facets,function(a,b){d.each(a,function(a,e){c.push(d.mixin({facet:{facet:b,value:e,count:a}},d.cloneDeep(l)))})});for(var f=1;f<h.hits.length;++f)c.push(h.hits[f]);i(c,h)})}i([])})}var i=f(a.as._ua);if(i&&i[0]>=3&&i[1]>20&&(b=b||{},b.additionalUA="autocomplete.js "+e),!c.source)return d.error("Missing 'source' key");var j=d.isFunction(c.source)?c.source:function(a){return a[c.source]};if(!c.index)return d.error("Missing 'index' key");var k=c.index;return g=g||{},h}}])});
var client = algoliasearch(algoliaAppId, algoliaSearchKey);
var posts = client.initIndex('posts');

if (typeof posts !== 'undefined') {

    autocomplete('#aa-search-input', {}, [
        {
            source: autocomplete.sources.hits(posts, {hitsPerPage: 5}),
            displayKey: 'title',
            templates: {
                header: '<div class="aa-suggestions-category">Posts</div>',
                footer: '<div class="branding">Powered by <img height="30" src="https://www.algolia.com/static_assets/images/press/downloads/algolia-logo-light.svg" /></div>',
                suggestion: function (suggestion) {
                    return '<span>' + '<a href="' + postUri + '/' + suggestion.slug + '">' +
                        suggestion._highlightResult.title.value + '</a>' + '</span><span>';

                }
            }
        }
    ]).on('autocomplete:selected', function (event, suggestion, dataset, context) {
        // Do nothing on click, as the browser will already do it
        if (context.selectionMethod === 'click') {
            return;
        }
        // Change the page, for example, on other events
        window.location.assign(postUri + '/' + suggestion.slug);
    });
}