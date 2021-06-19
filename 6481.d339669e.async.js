(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6481],{96481:function(S,P,L){var M,E;/*! @preserve
* numeral.js
* version : 2.0.6
* author : Adam Draper
* license : MIT
* http://adamwdraper.github.com/Numeral-js/
*/(function(i,d){M=d,E=typeof M=="function"?M.call(P,L,P,S):M,E!==void 0&&(S.exports=E)})(this,function(){var i,d,z="2.0.6",F={},B={},w={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},c={currentLocale:w.currentLocale,zeroFormat:w.zeroFormat,nullFormat:w.nullFormat,defaultFormat:w.defaultFormat,scalePercentBy100:w.scalePercentBy100};function T(n,e){this._input=n,this._value=e}return i=function(e){var r,l,o,t;if(i.isNumeral(e))r=e.value();else if(e===0||typeof e=="undefined")r=0;else if(e===null||d.isNaN(e))r=null;else if(typeof e=="string")if(c.zeroFormat&&e===c.zeroFormat)r=0;else if(c.nullFormat&&e===c.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(l in F)if(t=typeof F[l].regexps.unformat=="function"?F[l].regexps.unformat():F[l].regexps.unformat,t&&e.match(t)){o=F[l].unformat;break}o=o||i._.stringToNumber,r=o(e)}else r=Number(e)||null;return new T(e,r)},i.version=z,i.isNumeral=function(n){return n instanceof T},i._=d={numberToFormat:function(e,r,l){var o=B[i.options.currentLocale],t=!1,a=!1,s=0,u="",f=1e12,m=1e9,g=1e6,N=1e3,h="",v=!1,p,y,R,A,C,b,_,k,$,x;if(e=e||0,y=Math.abs(e),i._.includes(r,"(")?(t=!0,r=r.replace(/[\(|\)]/g,"")):(i._.includes(r,"+")||i._.includes(r,"-"))&&(k=i._.includes(r,"+")?r.indexOf("+"):e<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),i._.includes(r,"a")&&(p=r.match(/a(k|m|b|t)?/),p=p?p[1]:!1,i._.includes(r," a")&&(u=" "),r=r.replace(new RegExp(u+"a[kmbt]?"),""),y>=f&&!p||p==="t"?(u+=o.abbreviations.trillion,e=e/f):y<f&&y>=m&&!p||p==="b"?(u+=o.abbreviations.billion,e=e/m):y<m&&y>=g&&!p||p==="m"?(u+=o.abbreviations.million,e=e/g):(y<g&&y>=N&&!p||p==="k")&&(u+=o.abbreviations.thousand,e=e/N)),i._.includes(r,"[.]")&&(a=!0,r=r.replace("[.]",".")),b=e.toString().split(".")[0],_=r.split(".")[1],$=r.indexOf(","),s=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,_?(i._.includes(_,"[")?(_=_.replace("]",""),_=_.split("["),h=i._.toFixed(e,_[0].length+_[1].length,l,_[1].length)):h=i._.toFixed(e,_.length,l),b=h.split(".")[0],i._.includes(h,".")?h=o.delimiters.decimal+h.split(".")[1]:h="",a&&Number(h.slice(1))===0&&(h="")):b=i._.toFixed(e,0,l),u&&!p&&Number(b)>=1e3&&u!==o.abbreviations.trillion)switch(b=String(Number(b)/1e3),u){case o.abbreviations.thousand:u=o.abbreviations.million;break;case o.abbreviations.million:u=o.abbreviations.billion;break;case o.abbreviations.billion:u=o.abbreviations.trillion;break}if(i._.includes(b,"-")&&(b=b.slice(1),v=!0),b.length<s)for(var O=s-b.length;O>0;O--)b="0"+b;return $>-1&&(b=b.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+o.delimiters.thousands)),r.indexOf(".")===0&&(b=""),x=b+h+(u||""),t?x=(t&&v?"(":"")+x+(t&&v?")":""):k>=0?x=k===0?(v?"-":"+")+x:x+(v?"-":"+"):v&&(x="-"+x),x},stringToNumber:function(e){var r=B[c.currentLocale],l=e,o={thousand:3,million:6,billion:9,trillion:12},t,a,s,u;if(c.zeroFormat&&e===c.zeroFormat)a=0;else if(c.nullFormat&&e===c.nullFormat||!e.replace(/[^0-9]+/g,"").length)a=null;else{a=1,r.delimiters.decimal!=="."&&(e=e.replace(/\./g,"").replace(r.delimiters.decimal,"."));for(t in o)if(u=new RegExp("[^a-zA-Z]"+r.abbreviations[t]+"(?:\\)|(\\"+r.currency.symbol+")?(?:\\))?)?$"),l.match(u)){a*=Math.pow(10,o[t]);break}a*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),a*=Number(e)}return a},isNaN:function(n){function e(r){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return typeof n=="number"&&isNaN(n)}),includes:function(e,r){return e.indexOf(r)!==-1},insert:function(e,r,l){return e.slice(0,l)+r+e.slice(l)},reduce:function(e,r){if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof r!="function")throw new TypeError(r+" is not a function");var l=Object(e),o=l.length>>>0,t=0,a;if(arguments.length===3)a=arguments[2];else{for(;t<o&&!(t in l);)t++;if(t>=o)throw new TypeError("Reduce of empty array with no initial value");a=l[t++]}for(;t<o;t++)t in l&&(a=r(a,l[t],t,l));return a},multiplier:function(e){var r=e.toString().split(".");return r.length<2?1:Math.pow(10,r[1].length)},correctionFactor:function(){var e=Array.prototype.slice.call(arguments);return e.reduce(function(r,l){var o=d.multiplier(l);return r>o?r:o},1)},toFixed:function(e,r,l,o){var t=e.toString().split("."),a=r-(o||0),s,u,f,m;return t.length===2?s=Math.min(Math.max(t[1].length,a),r):s=a,f=Math.pow(10,s),m=(l(e+"e+"+s)/f).toFixed(s),o>r-s&&(u=new RegExp("\\.?0{1,"+(o-(r-s))+"}$"),m=m.replace(u,"")),m}},i.options=c,i.formats=F,i.locales=B,i.locale=function(n){return n&&(c.currentLocale=n.toLowerCase()),c.currentLocale},i.localeData=function(n){if(!n)return B[c.currentLocale];if(n=n.toLowerCase(),!B[n])throw new Error("Unknown locale : "+n);return B[n]},i.reset=function(){for(var n in w)c[n]=w[n]},i.zeroFormat=function(n){c.zeroFormat=typeof n=="string"?n:null},i.nullFormat=function(n){c.nullFormat=typeof n=="string"?n:null},i.defaultFormat=function(n){c.defaultFormat=typeof n=="string"?n:"0.0"},i.register=function(n,e,r){if(e=e.toLowerCase(),this[n+"s"][e])throw new TypeError(e+" "+n+" already registered.");return this[n+"s"][e]=r,r},i.validate=function(n,e){var r,l,o,t,a,s,u,f;if(typeof n!="string"&&(n+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",n)),n=n.trim(),n.match(/^\d+$/))return!0;if(n==="")return!1;try{u=i.localeData(e)}catch(m){u=i.localeData(i.locale())}return o=u.currency.symbol,a=u.abbreviations,r=u.delimiters.decimal,u.delimiters.thousands==="."?l="\\.":l=u.delimiters.thousands,f=n.match(/^[^\d]+/),f!==null&&(n=n.substr(1),f[0]!==o)||(f=n.match(/[^\d]+$/),f!==null&&(n=n.slice(0,-1),f[0]!==a.thousand&&f[0]!==a.million&&f[0]!==a.billion&&f[0]!==a.trillion))?!1:(s=new RegExp(l+"{2}"),n.match(/[^\d.,]/g)?!1:(t=n.split(r),t.length>2?!1:t.length<2?!!t[0].match(/^\d+.*\d$/)&&!t[0].match(s):t[0].length===1?!!t[0].match(/^\d+$/)&&!t[0].match(s)&&!!t[1].match(/^\d+$/):!!t[0].match(/^\d+.*\d$/)&&!t[0].match(s)&&!!t[1].match(/^\d+$/)))},i.fn=T.prototype={clone:function(){return i(this)},format:function(e,r){var l=this._value,o=e||c.defaultFormat,t,a,s;if(r=r||Math.round,l===0&&c.zeroFormat!==null)a=c.zeroFormat;else if(l===null&&c.nullFormat!==null)a=c.nullFormat;else{for(t in F)if(o.match(F[t].regexps.format)){s=F[t].format;break}s=s||i._.numberToFormat,a=s(l,o,r)}return a},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=d.correctionFactor.call(null,this._value,e);function l(o,t,a,s){return o+Math.round(r*t)}return this._value=d.reduce([this._value,e],l,0)/r,this},subtract:function(e){var r=d.correctionFactor.call(null,this._value,e);function l(o,t,a,s){return o-Math.round(r*t)}return this._value=d.reduce([e],l,Math.round(this._value*r))/r,this},multiply:function(e){function r(l,o,t,a){var s=d.correctionFactor(l,o);return Math.round(l*s)*Math.round(o*s)/Math.round(s*s)}return this._value=d.reduce([this._value,e],r,1),this},divide:function(e){function r(l,o,t,a){var s=d.correctionFactor(l,o);return Math.round(l*s)/Math.round(o*s)}return this._value=d.reduce([this._value,e],r),this},difference:function(e){return Math.abs(i(this._value).subtract(e).value())}},i.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var r=e%10;return~~(e%100/10)==1?"th":r===1?"st":r===2?"nd":r===3?"rd":"th"},currency:{symbol:"$"}}),function(){i.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,r,l){var o=i._.includes(r," BPS")?" ":"",t;return e=e*1e4,r=r.replace(/\s?BPS/,""),t=i._.numberToFormat(e,r,l),i._.includes(t,")")?(t=t.split(""),t.splice(-1,0,o+"BPS"),t=t.join("")):t=t+o+"BPS",t},unformat:function(e){return+(i._.stringToNumber(e)*1e-4).toFixed(15)}})}(),function(){var n={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},e={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},r=n.suffixes.concat(e.suffixes.filter(function(o){return n.suffixes.indexOf(o)<0})),l=r.join("|");l="("+l.replace("B","B(?!PS)")+")",i.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(l)},format:function(t,a,s){var u,f=i._.includes(a,"ib")?e:n,m=i._.includes(a," b")||i._.includes(a," ib")?" ":"",g,N,h;for(a=a.replace(/\s?i?b/,""),g=0;g<=f.suffixes.length;g++)if(N=Math.pow(f.base,g),h=Math.pow(f.base,g+1),t===null||t===0||t>=N&&t<h){m+=f.suffixes[g],N>0&&(t=t/N);break}return u=i._.numberToFormat(t,a,s),u+m},unformat:function(t){var a=i._.stringToNumber(t),s,u;if(a){for(s=n.suffixes.length-1;s>=0;s--){if(i._.includes(t,n.suffixes[s])){u=Math.pow(n.base,s);break}if(i._.includes(t,e.suffixes[s])){u=Math.pow(e.base,s);break}}a*=u||1}return a}})}(),function(){i.register("format","currency",{regexps:{format:/(\$)/},format:function(e,r,l){var o=i.locales[i.options.currentLocale],t={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]},a,s,u;for(r=r.replace(/\s?\$\s?/,""),a=i._.numberToFormat(e,r,l),e>=0?(t.before=t.before.replace(/[\-\(]/,""),t.after=t.after.replace(/[\-\)]/,"")):e<0&&!i._.includes(t.before,"-")&&!i._.includes(t.before,"(")&&(t.before="-"+t.before),u=0;u<t.before.length;u++)switch(s=t.before[u],s){case"$":a=i._.insert(a,o.currency.symbol,u);break;case" ":a=i._.insert(a," ",u+o.currency.symbol.length-1);break}for(u=t.after.length-1;u>=0;u--)switch(s=t.after[u],s){case"$":a=u===t.after.length-1?a+o.currency.symbol:i._.insert(a,o.currency.symbol,-(t.after.length-(1+u)));break;case" ":a=u===t.after.length-1?a+" ":i._.insert(a," ",-(t.after.length-(1+u)+o.currency.symbol.length-1));break}return a}})}(),function(){i.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,r,l){var o,t=typeof e=="number"&&!i._.isNaN(e)?e.toExponential():"0e+0",a=t.split("e");return r=r.replace(/e[\+|\-]{1}0/,""),o=i._.numberToFormat(Number(a[0]),r,l),o+"e"+a[1]},unformat:function(e){var r=i._.includes(e,"e+")?e.split("e+"):e.split("e-"),l=Number(r[0]),o=Number(r[1]);o=i._.includes(e,"e-")?o*=-1:o;function t(a,s,u,f){var m=i._.correctionFactor(a,s),g=a*m*(s*m)/(m*m);return g}return i._.reduce([l,Math.pow(10,o)],t,1)}})}(),function(){i.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,r,l){var o=i.locales[i.options.currentLocale],t,a=i._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),a+=o.ordinal(e),t=i._.numberToFormat(e,r,l),t+a}})}(),function(){i.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,r,l){var o=i._.includes(r," %")?" ":"",t;return i.options.scalePercentBy100&&(e=e*100),r=r.replace(/\s?\%/,""),t=i._.numberToFormat(e,r,l),i._.includes(t,")")?(t=t.split(""),t.splice(-1,0,o+"%"),t=t.join("")):t=t+o+"%",t},unformat:function(e){var r=i._.stringToNumber(e);return i.options.scalePercentBy100?r*.01:r}})}(),function(){i.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,r,l){var o=Math.floor(e/60/60),t=Math.floor((e-o*60*60)/60),a=Math.round(e-o*60*60-t*60);return o+":"+(t<10?"0"+t:t)+":"+(a<10?"0"+a:a)},unformat:function(e){var r=e.split(":"),l=0;return r.length===3?(l=l+Number(r[0])*60*60,l=l+Number(r[1])*60,l=l+Number(r[2])):r.length===2&&(l=l+Number(r[0])*60,l=l+Number(r[1])),Number(l)}})}(),i})}}]);
