
var Module = (function() {
  var _scriptDir = import.meta.url;
  
  return (
function(Module) {
  Module = Module || {};


function aa(){e.buffer!=l&&n(e.buffer);return ba}function r(){e.buffer!=l&&n(e.buffer);return ca}function u(){e.buffer!=l&&n(e.buffer);return da}function fa(){e.buffer!=l&&n(e.buffer);return ha}function w(){e.buffer!=l&&n(e.buffer);return ia}function x(){e.buffer!=l&&n(e.buffer);return ja}function ka(){e.buffer!=l&&n(e.buffer);return la}var y;y||(y=typeof Module !== 'undefined' ? Module : {});var ma,na;y.ready=new Promise(function(a,b){ma=a;na=b});var oa={},z;
for(z in y)y.hasOwnProperty(z)&&(oa[z]=y[z]);function qa(a,b){throw b;}var A=y.ENVIRONMENT_IS_PTHREAD||!1,B="",ra;B=self.location.href;_scriptDir&&(B=_scriptDir);0!==B.indexOf("blob:")?B=B.substr(0,B.lastIndexOf("/")+1):B="";ra=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)};var sa=y.print||console.log.bind(console),C=y.printErr||console.warn.bind(console);for(z in oa)oa.hasOwnProperty(z)&&(y[z]=oa[z]);oa=null;
y.quit&&(qa=y.quit);var ta=0,ua;y.wasmBinary&&(ua=y.wasmBinary);var noExitRuntime=y.noExitRuntime||!0;"object"!==typeof WebAssembly&&D("no native wasm support detected");var e,va,wa=!1;
function xa(a,b,c){c=b+c;for(var d="";!(b>=c);){var f=a[b++];if(!f)break;if(f&128){var g=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var h=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function E(a,b){return a?xa(r(),a,b):""}
function ya(a,b,c){var d=r();if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}
function za(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function Aa(a,b){for(var c="",d=0;!(d>=b/2);++d){var f=u()[a+2*d>>1];if(0==f)break;c+=String.fromCharCode(f)}return c}function Ba(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f){var g=a.charCodeAt(f);u()[b>>1]=g;b+=2}u()[b>>1]=0;return b-d}
function Ca(a){return 2*a.length}function Da(a,b){for(var c=0,d="";!(c>=b/4);){var f=w()[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}function Ea(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}w()[b>>2]=g;b+=4;if(b+4>c)break}w()[b>>2]=0;return b-d}
function Fa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var l,ba,ca,da,ha,ia,ja,Ga,la;A&&(l=y.buffer);function n(a){l=a;y.HEAP8=ba=new Int8Array(a);y.HEAP16=da=new Int16Array(a);y.HEAP32=ia=new Int32Array(a);y.HEAPU8=ca=new Uint8Array(a);y.HEAPU16=ha=new Uint16Array(a);y.HEAPU32=ja=new Uint32Array(a);y.HEAPF32=Ga=new Float32Array(a);y.HEAPF64=la=new Float64Array(a)}var Ha=y.INITIAL_MEMORY||16777216;
if(A)e=y.wasmMemory,l=y.buffer;else if(y.wasmMemory)e=y.wasmMemory;else if(e=new WebAssembly.Memory({initial:Ha/65536,maximum:32768,shared:!0}),!(e.buffer instanceof SharedArrayBuffer))throw C("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");e&&(l=e.buffer);Ha=l.byteLength;n(l);var F,Ia=[],Ja=[],Ka=[];
function La(){var a=y.preRun.shift();Ia.unshift(a)}var H=0,Ma=null,Na=null;y.preloadedImages={};y.preloadedAudios={};function D(a){if(y.onAbort)y.onAbort(a);A&&console.error("Pthread aborting at "+Error().stack);C(a);wa=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");na(a);throw a;}var K=(new URL("avif_enc_mt.wasm",import.meta.url)).toString();
function Oa(){try{if(K==K&&ua)return new Uint8Array(ua);if(ra)return ra(K);throw"both async and sync fetching of the wasm failed";}catch(a){D(a)}}function Pa(){return ua||"function"!==typeof fetch?Promise.resolve().then(function(){return Oa()}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Oa()})}
var Ra={580596:function(){throw"Canceled!";},580614:function(a,b){setTimeout(function(){Qa(a,b)},0)}};function Sa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(y);else{var c=b.Wb;"number"===typeof c?void 0===b.Ua?F.get(c)():F.get(c)(b.Ua):c(void 0===b.Ua?null:b.Ua)}}}
function Ta(a,b){if(0>=a||a>aa().length||a&1||0>b)return-28;if(0==b)return 0;2147483647<=b&&(b=Infinity);var c=Atomics.load(w(),Ua>>2),d=0;if(c==a&&Atomics.compareExchange(w(),Ua>>2,c,0)==c&&(--b,d=1,0>=b))return 1;a=Atomics.notify(w(),a>>2,b);if(0<=a)return a+d;throw"Atomics.notify returned an unexpected value "+a;}y._emscripten_futex_wake=Ta;
function Va(a){if(A)throw"Internal Error! cleanupThread() can only ever be called from main application thread!";if(!a)throw"Internal Error! Null pthread_ptr in cleanupThread!";var b=L.Oa[a];b&&(w()[a+12>>2]=0,L.$a(b.worker))}
var L={Ma:[],Ra:[],fb:[],yb:function(){for(var a=navigator.hardwareConcurrency,b=0;b<a;++b)L.gb()},zb:function(){for(var a=M(228),b=0;57>b;++b)x()[a/4+b]=0;w()[a+12>>2]=a;b=a+152;w()[b>>2]=b;var c=M(512);for(b=0;128>b;++b)x()[c/4+b]=0;Atomics.store(x(),a+100>>2,c);Atomics.store(x(),a+40>>2,a);Wa(a,!1,1);Xa(a)},Ab:function(){L.receiveObjectTransfer=L.Eb;L.threadInit=L.Pb;L.threadCancel=L.Nb;L.threadExit=L.Ob;L.setExitStatus=L.Hb},Oa:{},ab:[],Fb:function(){for(;0<L.ab.length;)L.ab.pop()();A&&N()&&Ya()},
nb:function(a,b){Atomics.store(x(),a+56>>2,1);Atomics.store(x(),a+60>>2,0);L.Fb();Atomics.store(x(),a+4>>2,b);Atomics.store(x(),a+0>>2,1);Ta(a+0,2147483647);Wa(0,0,0)},Hb:function(){},Ob:function(a){var b=N();b&&(L.nb(b,a),A&&postMessage({cmd:"exit"}))},Nb:function(){L.nb(N(),-1);postMessage({cmd:"cancelDone"})},Mb:function(){for(var a in L.Oa){var b=L.Oa[a];b&&b.worker&&L.$a(b.worker)}L.Oa={};for(a=0;a<L.Ma.length;++a){var c=L.Ma[a];c.terminate()}L.Ma=[];for(a=0;a<L.Ra.length;++a)c=L.Ra[a],b=c.La,
L.cb(b),c.terminate();L.Ra=[]},cb:function(a){if(a){if(a.Pa){var b=w()[a.Pa+100>>2];w()[a.Pa+100>>2]=0;O(b);O(a.Pa)}a.Pa=0;a.bb&&a.Sa&&O(a.Sa);a.Sa=0;a.worker&&(a.worker.La=null)}},$a:function(a){L.Gb(function(){delete L.Oa[a.La.Pa];L.Ma.push(a);L.Ra.splice(L.Ra.indexOf(a),1);L.cb(a.La);a.La=void 0})},Gb:function(a){w()[Za>>2]=0;try{a()}finally{w()[Za>>2]=1}},Eb:function(){},Pb:function(){for(var a in L.fb)L.fb[a]()},lb:function(a,b){a.onmessage=function(c){var d=c.data,f=d.cmd;a.La&&(L.pb=a.La.Pa);
if(d.targetThread&&d.targetThread!=N()){var g=L.Oa[d.ec];g?g.worker.postMessage(c.data,d.transferList):console.error('Internal error! Worker sent a message "'+f+'" to target pthread '+d.targetThread+", but that thread no longer exists!")}else if("processQueuedMainThreadWork"===f)$a();else if("spawnThread"===f)ab(c.data);else if("cleanupThread"===f)Va(d.thread);else if("killThread"===f){c=d.thread;if(A)throw"Internal Error! killThread() can only ever be called from main application thread!";if(!c)throw"Internal Error! Null pthread_ptr in killThread!";
w()[c+12>>2]=0;c=L.Oa[c];c.worker.terminate();L.cb(c);L.Ra.splice(L.Ra.indexOf(c.worker),1);c.worker.La=void 0}else if("cancelThread"===f){c=d.thread;if(A)throw"Internal Error! cancelThread() can only ever be called from main application thread!";if(!c)throw"Internal Error! Null pthread_ptr in cancelThread!";L.Oa[c].worker.postMessage({cmd:"cancel"})}else if("loaded"===f)a.loaded=!0,b&&b(a),a.Va&&(a.Va(),delete a.Va);else if("print"===f)sa("Thread "+d.threadId+": "+d.text);else if("printErr"===f)C("Thread "+
d.threadId+": "+d.text);else if("alert"===f)alert("Thread "+d.threadId+": "+d.text);else if("exit"===f)a.La&&Atomics.load(x(),a.La.Pa+64>>2)&&L.$a(a);else if("exitProcess"===f)try{g=d.returnCode;if(A)throw postMessage({cmd:"exitProcess",returnCode:g}),new bb(g);if(!cb()){L.Mb();if(y.onExit)y.onExit(g);wa=!0}qa(g,new bb(g))}catch(h){if(h instanceof bb)return;throw h;}else"cancelDone"===f?L.$a(a):"objectTransfer"!==f&&("setimmediate"===c.data.target?a.postMessage(c.data):C("worker sent an unknown command "+
f));L.pb=void 0};a.onerror=function(c){C("pthread sent an error! "+c.filename+":"+c.lineno+": "+c.message)};a.postMessage({cmd:"load",urlOrBlob:y.mainScriptUrlOrBlob,wasmMemory:e,wasmModule:va})},gb:function(){if(y.locateFile){var a=y.locateFile?y.locateFile("avif_enc_mt.worker.js",B):B+"avif_enc_mt.worker.js";L.Ma.push(new Worker(a))}else L.Ma.push(new Worker(new URL("avif_enc_mt.worker.js",import.meta.url)))},sb:function(){0==L.Ma.length&&(L.gb(),L.lb(L.Ma[0]));return L.Ma.pop()},Rb:function(a){for(a=
performance.now()+a;performance.now()<a;);}};y.establishStackSpace=function(a,b){db(a,b);P(a)};y.invokeEntryPoint=function(a,b){return F.get(a)(b)};var eb=0;function cb(){return noExitRuntime||0<eb}y.keepRuntimeAlive=cb;var fb;fb=A?function(){return performance.now()-y.__performance_now_clock_drift}:function(){return performance.now()};function gb(a,b){L.ab.push(function(){F.get(a)(b)})}var hb=[null,[],[]],ib={};function jb(a,b,c){return A?Q(1,1,a,b,c):0}
function kb(a,b,c){return A?Q(2,1,a,b,c):0}function lb(a,b,c){if(A)return Q(3,1,a,b,c)}var mb={};function nb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function ob(a){return this.fromWireType(x()[a>>2])}var R={},T={},pb={};function qb(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function rb(a,b){a=qb(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function sb(a){var b=Error,c=rb(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var tb=void 0;function ub(a,b,c){function d(k){k=c(k);if(k.length!==a.length)throw new tb("Mismatched type converter count");for(var m=0;m<a.length;++m)U(a[m],k[m])}a.forEach(function(k){pb[k]=b});var f=Array(b.length),g=[],h=0;b.forEach(function(k,m){T.hasOwnProperty(k)?f[m]=T[k]:(g.push(k),R.hasOwnProperty(k)||(R[k]=[]),R[k].push(function(){f[m]=T[k];++h;h===g.length&&d(f)}))});0===g.length&&d(f)}
function vb(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var wb=void 0;function V(a){for(var b="";r()[a];)b+=wb[r()[a++]];return b}var xb=void 0;function W(a){throw new xb(a);}
function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||W('type "'+d+'" must have a positive integer typeid pointer');if(T.hasOwnProperty(a)){if(c.wb)return;W("Cannot register type '"+d+"' twice")}T[a]=b;delete pb[a];R.hasOwnProperty(a)&&(b=R[a],delete R[a],b.forEach(function(f){f()}))}var yb=[],X=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function zb(a){4<a&&0===--X[a].eb&&(X[a]=void 0,yb.push(a))}function Ab(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=yb.length?yb.pop():X.length;X[b]={eb:1,value:a};return b}}function Bb(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Cb(a,b){switch(b){case 2:return function(c){var d=this.fromWireType;e.buffer!=l&&n(e.buffer);return d.call(this,Ga[c>>2])};case 3:return function(c){return this.fromWireType(ka()[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Db(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=rb(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Eb(a,b){var c=y;if(void 0===c[a].Na){var d=c[a];c[a]=function(){c[a].Na.hasOwnProperty(arguments.length)||W("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].Na+")!");return c[a].Na[arguments.length].apply(this,arguments)};c[a].Na=[];c[a].Na[d.ob]=d}}
function Fb(a,b,c){y.hasOwnProperty(a)?((void 0===c||void 0!==y[a].Na&&void 0!==y[a].Na[c])&&W("Cannot register public name '"+a+"' twice"),Eb(a,a),y.hasOwnProperty(c)&&W("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),y[a].Na[c]=b):(y[a]=b,void 0!==c&&(y[a].bc=c))}function Gb(a,b){for(var c=[],d=0;d<a;d++)c.push(w()[(b>>2)+d]);return c}
function Hb(a,b){var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];a.includes("j")?(d=y["dynCall_"+a],d=c&&c.length?d.apply(null,[b].concat(c)):d.call(null,b)):d=F.get(b).apply(null,c);return d}}function Ib(a,b){a=V(a);var c=a.includes("j")?Hb(a,b):F.get(b);"function"!==typeof c&&W("unknown function pointer with signature "+a+": "+b);return c}var Jb=void 0;function Kb(a){a=Lb(a);var b=V(a);O(a);return b}
function Mb(a,b){function c(g){f[g]||T[g]||(pb[g]?pb[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new Jb(a+": "+d.map(Kb).join([", "]));}function Nb(a,b,c){switch(b){case 0:return c?function(d){return aa()[d]}:function(d){return r()[d]};case 1:return c?function(d){return u()[d>>1]}:function(d){return fa()[d>>1]};case 2:return c?function(d){return w()[d>>2]}:function(d){return x()[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var Ob={};
function Pb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function Qb(a,b){var c=T[a];void 0===c&&W(b+" has unknown type "+Kb(a));return c}var Rb={},Sb=[];function Tb(a,b,c){if(0>=a||a>aa().length||a&1)return-28;a=Atomics.wait(w(),a>>2,b,c);if("timed-out"===a)return-73;if("not-equal"===a)return-6;if("ok"===a)return 0;throw"Atomics.wait returned an unexpected value "+a;}
function Q(a,b){for(var c=arguments.length-2,d=Y(),f=Ub(8*c),g=f>>3,h=0;h<c;h++){var k=arguments[2+h];ka()[g+h]=k}c=Vb(a,c,f,b);P(d);return c}var Wb=[],Xb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Yb(a){a=2<a?E(a):a;return Xb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function Zb(a,b,c){var d=Yb(a);if(!d)return-4;d.Ya&&(w()[d.Ya>>2]=b,w()[d.Ya+4>>2]=c);if(d.mb||!d.Tb)d.mb&&(d=d.mb),a=!1,d.Xa&&d.Xa.Wa&&(a=d.Xa.Wa.getParameter(2978),a=0===a[0]&&0===a[1]&&a[2]===d.width&&a[3]===d.height),d.width=b,d.height=c,a&&d.Xa.Wa.viewport(0,0,b,c);else{if(d.Ya){d=w()[d.Ya+8>>2];a=a?E(a):"";var f=Y(),g=Ub(12),h=0;if(a){h=za(a)+1;var k=M(h);ya(a,k,h);h=k}w()[g>>2]=h;w()[g+4>>2]=b;w()[g+8>>2]=c;$b(0,d,657457152,0,h,g);P(f);return 1}return-4}return 0}
function ac(a,b,c){return A?Q(4,1,a,b,c):Zb(a,b,c)}function bc(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,g){b.drawArraysInstancedANGLE(c,d,f,g)},a.drawElementsInstanced=function(c,d,f,g,h){b.drawElementsInstancedANGLE(c,d,f,g,h)})}
function cc(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function dc(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ec(a,b){a.kb||(a.kb=a.getContext,a.getContext=function(d,f){f=a.kb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=a.getContext("webgl",b);return c?fc(c,b):0}function fc(a,b){var c=M(8);w()[c+4>>2]=N();var d={Yb:c,attributes:b,version:b.Bb,Wa:a};a.canvas&&(a.canvas.Xa=d);("undefined"===typeof b.ib||b.ib)&&gc(d);return c}
function gc(a){a||(a=hc);if(!a.xb){a.xb=!0;var b=a.Wa;bc(b);cc(b);dc(b);b.Ub=b.getExtension("EXT_disjoint_timer_query");b.ac=b.getExtension("WEBGL_multi_draw");(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var hc,ic=["default","low-power","high-performance"];function jc(a){return A?Q(5,1,a):0}function kc(a,b,c,d){if(A)return Q(6,1,a,b,c,d);a=ib.Xb(a);b=ib.Vb(a,b,c);w()[d>>2]=b;return 0}
function lc(a,b,c,d,f){if(A)return Q(7,1,a,b,c,d,f)}function mc(a,b,c,d){if(A)return Q(8,1,a,b,c,d);for(var f=0,g=0;g<c;g++){for(var h=w()[b+8*g>>2],k=w()[b+(8*g+4)>>2],m=0;m<k;m++){var p=r()[h+m],q=hb[a];0===p||10===p?((1===a?sa:C)(xa(q,0)),q.length=0):q.push(p)}f+=k}w()[d>>2]=f;return 0}
function ab(a){if(A)throw"Internal Error! spawnThread() can only ever be called from main application thread!";var b=L.sb();if(!b)return 6;if(void 0!==b.La)throw"Internal error!";if(!a.Za)throw"Internal error, no pthread ptr!";L.Ra.push(b);for(var c=M(512),d=0;128>d;++d)w()[c+4*d>>2]=0;var f=a.Sa+a.Ta;d=L.Oa[a.Za]={worker:b,Sa:a.Sa,Ta:a.Ta,bb:a.bb,Pa:a.Za};var g=d.Pa>>2;Atomics.store(x(),g+16,a.hb);Atomics.store(x(),g+25,c);Atomics.store(x(),g+10,d.Pa);Atomics.store(x(),g+20,a.Ta);Atomics.store(x(),
g+19,f);Atomics.store(x(),g+26,a.Ta);Atomics.store(x(),g+28,f);Atomics.store(x(),g+29,a.hb);c=nc()+40;Atomics.store(x(),g+43,c);b.La=d;var h={cmd:"run",start_routine:a.Lb,arg:a.Ua,threadInfoStruct:a.Za,stackBase:a.Sa,stackSize:a.Ta};b.Va=function(){h.time=performance.now();b.postMessage(h,a.Qb)};b.loaded&&(b.Va(),delete b.Va);return 0}
function oc(a,b){if(!a)return C("pthread_join attempted on a null thread pointer!"),71;if(A&&N()==a)return C("PThread "+a+" is attempting to join to itself!"),16;if(!A&&pc()==a)return C("Main thread "+a+" is attempting to join to itself!"),16;if(w()[a+12>>2]!==a)return C("pthread_join attempted on thread "+a+", which does not point to a valid thread, or does not exist anymore!"),71;if(Atomics.load(x(),a+64>>2))return C("Attempted to join thread "+a+", which was already detached!"),28;for(;;){var c=
Atomics.load(x(),a+0>>2);if(1==c)return c=Atomics.load(x(),a+4>>2),b&&(w()[b>>2]=c),Atomics.store(x(),a+64>>2,1),A?postMessage({cmd:"cleanupThread",thread:a}):Va(a),0;if(A){var d=N();if(d&&!Atomics.load(x(),d+56>>2)&&2==Atomics.load(x(),d+0>>2))throw"Canceled!";}A||$a();Tb(a+0,c,A?100:1)}}A||L.yb();tb=y.InternalError=sb("InternalError");for(var qc=Array(256),rc=0;256>rc;++rc)qc[rc]=String.fromCharCode(rc);wb=qc;xb=y.BindingError=sb("BindingError");
y.count_emval_handles=function(){for(var a=0,b=5;b<X.length;++b)void 0!==X[b]&&++a;return a};y.get_first_emval=function(){for(var a=5;a<X.length;++a)if(void 0!==X[a])return X[a];return null};Jb=y.UnboundTypeError=sb("UnboundTypeError");
var sc=[null,jb,kb,lb,ac,jc,kc,lc,mc],Dc={k:function(a,b,c,d){D("Assertion failed: "+E(a)+", at: "+[b?E(b):"unknown filename",c,d?E(d):"unknown function"])},B:function(a,b){return gb(a,b)},u:jb,Q:kb,R:lb,E:function(a){var b=mb[a];delete mb[a];var c=b.Cb,d=b.Db,f=b.jb,g=f.map(function(h){return h.vb}).concat(f.map(function(h){return h.Jb}));ub([a],g,function(h){var k={};f.forEach(function(m,p){var q=h[p],v=m.tb,G=m.ub,I=h[p+f.length],t=m.Ib,pa=m.Kb;k[m.rb]={read:function(J){return q.fromWireType(v(G,
J))},write:function(J,S){var ea=[];t(pa,J,I.toWireType(ea,S));nb(ea)}}});return[{name:b.name,fromWireType:function(m){var p={},q;for(q in k)p[q]=k[q].read(m);d(m);return p},toWireType:function(m,p){for(var q in k)if(!(q in p))throw new TypeError('Missing field:  "'+q+'"');var v=c();for(q in k)k[q].write(v,p[q]);null!==m&&m.push(d,v);return v},argPackAdvance:8,readValueFromPointer:ob,Qa:d}]})},H:function(){},aa:function(a,b,c,d,f){var g=vb(c);b=V(b);U(a,{name:b,fromWireType:function(h){return!!h},
toWireType:function(h,k){return k?d:f},argPackAdvance:8,readValueFromPointer:function(h){if(1===c)var k=aa();else if(2===c)k=u();else if(4===c)k=w();else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[h>>g])},Qa:null})},$:function(a,b){b=V(b);U(a,{name:b,fromWireType:function(c){var d=X[c].value;zb(c);return d},toWireType:function(c,d){return Ab(d)},argPackAdvance:8,readValueFromPointer:ob,Qa:null})},y:function(a,b,c){c=vb(c);b=V(b);U(a,{name:b,fromWireType:function(d){return d},
toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+Bb(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Cb(b,c),Qa:null})},D:function(a,b,c,d,f,g){var h=Gb(b,c);a=V(a);f=Ib(d,f);Fb(a,function(){Mb("Cannot call "+a+" due to unbound types",h)},b-1);ub([],h,function(k){var m=a,p=a;k=[k[0],null].concat(k.slice(1));var q=f,v=k.length;2>v&&W("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var G=
null!==k[1]&&!1,I=!1,t=1;t<k.length;++t)if(null!==k[t]&&void 0===k[t].Qa){I=!0;break}var pa="void"!==k[0].name,J="",S="";for(t=0;t<v-2;++t)J+=(0!==t?", ":"")+"arg"+t,S+=(0!==t?", ":"")+"arg"+t+"Wired";p="return function "+qb(p)+"("+J+") {\nif (arguments.length !== "+(v-2)+") {\nthrowBindingError('function "+p+" called with ' + arguments.length + ' arguments, expected "+(v-2)+" args!');\n}\n";I&&(p+="var destructors = [];\n");var ea=I?"destructors":"null";J="throwBindingError invoker fn runDestructors retType classParam".split(" ");
q=[W,q,g,nb,k[0],k[1]];G&&(p+="var thisWired = classParam.toWireType("+ea+", this);\n");for(t=0;t<v-2;++t)p+="var arg"+t+"Wired = argType"+t+".toWireType("+ea+", arg"+t+"); // "+k[t+2].name+"\n",J.push("argType"+t),q.push(k[t+2]);G&&(S="thisWired"+(0<S.length?", ":"")+S);p+=(pa?"var rv = ":"")+"invoker(fn"+(0<S.length?", ":"")+S+");\n";if(I)p+="runDestructors(destructors);\n";else for(t=G?1:2;t<k.length;++t)v=1===t?"thisWired":"arg"+(t-2)+"Wired",null!==k[t].Qa&&(p+=v+"_dtor("+v+"); // "+k[t].name+
"\n",J.push(v+"_dtor"),q.push(k[t].Qa));pa&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n");J.push(p+"}\n");k=Db(J).apply(null,q);t=b-1;if(!y.hasOwnProperty(m))throw new tb("Replacing nonexistant public symbol");void 0!==y[m].Na&&void 0!==t?y[m].Na[t]=k:(y[m]=k,y[m].ob=t);return[]})},i:function(a,b,c,d,f){function g(p){return p}b=V(b);-1===f&&(f=4294967295);var h=vb(c);if(0===d){var k=32-8*c;g=function(p){return p<<k>>>k}}var m=b.includes("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(p,
q){if("number"!==typeof q&&"boolean"!==typeof q)throw new TypeError('Cannot convert "'+Bb(q)+'" to '+this.name);if(q<d||q>f)throw new TypeError('Passing a number "'+Bb(q)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return m?q>>>0:q|0},argPackAdvance:8,readValueFromPointer:Nb(b,h,0!==d),Qa:null})},f:function(a,b,c){function d(g){g>>=2;var h=x();return new f(l,h[g+1],h[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,
Uint32Array,Float32Array,Float64Array][b];c=V(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{wb:!0})},z:function(a,b){b=V(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var f=x()[d>>2];if(c)for(var g=d+4,h=0;h<=f;++h){var k=d+4+h;if(h==f||0==r()[k]){g=E(g,k-g);if(void 0===m)var m=g;else m+=String.fromCharCode(0),m+=g;g=k+1}}else{m=Array(f);for(h=0;h<f;++h)m[h]=String.fromCharCode(r()[d+4+h]);m=m.join("")}O(d);return m},toWireType:function(d,f){f instanceof
ArrayBuffer&&(f=new Uint8Array(f));var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||W("Cannot pass non-string to std::string");var h=(c&&g?function(){return za(f)}:function(){return f.length})(),k=M(4+h+1);x()[k>>2]=h;if(c&&g)ya(f,k+4,h+1);else if(g)for(g=0;g<h;++g){var m=f.charCodeAt(g);255<m&&(O(k),W("String has UTF-16 code units that do not fit in 8 bits"));r()[k+4+g]=m}else for(g=0;g<h;++g)r()[k+4+g]=f[g];null!==d&&d.push(O,k);return k},
argPackAdvance:8,readValueFromPointer:ob,Qa:function(d){O(d)}})},r:function(a,b,c){c=V(c);if(2===b){var d=Aa;var f=Ba;var g=Ca;var h=function(){return fa()};var k=1}else 4===b&&(d=Da,f=Ea,g=Fa,h=function(){return x()},k=2);U(a,{name:c,fromWireType:function(m){for(var p=x()[m>>2],q=h(),v,G=m+4,I=0;I<=p;++I){var t=m+4+I*b;if(I==p||0==q[t>>k])G=d(G,t-G),void 0===v?v=G:(v+=String.fromCharCode(0),v+=G),G=t+b}O(m);return v},toWireType:function(m,p){"string"!==typeof p&&W("Cannot pass non-string to C++ string type "+
c);var q=g(p),v=M(4+q+b);x()[v>>2]=q>>k;f(p,v+4,q+b);null!==m&&m.push(O,v);return v},argPackAdvance:8,readValueFromPointer:ob,Qa:function(m){O(m)}})},K:function(a,b,c,d,f,g){mb[a]={name:V(b),Cb:Ib(c,d),Db:Ib(f,g),jb:[]}},j:function(a,b,c,d,f,g,h,k,m,p){mb[a].jb.push({rb:V(b),vb:c,tb:Ib(d,f),ub:g,Jb:h,Ib:Ib(k,m),Kb:p})},ba:function(a,b){b=V(b);U(a,{Zb:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},X:function(a,b){if(a==b)postMessage({cmd:"processQueuedMainThreadWork"});
else if(A)postMessage({targetThread:a,cmd:"processThreadQueue"});else{a=(a=L.Oa[a])&&a.worker;if(!a)return;a.postMessage({cmd:"processThreadQueue"})}return 1},p:zb,_:function(a){if(0===a)return Ab(Pb());var b=Ob[a];a=void 0===b?V(a):b;return Ab(Pb()[a])},C:function(a){4<a&&(X[a].eb+=1)},P:function(a,b,c,d){a||W("Cannot use deleted val. handle = "+a);a=X[a].value;var f=Rb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var h="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";
for(g=0;g<b;++g)h+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+'], "parameter '+g+'");\nvar arg'+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=(new Function("requireRegisteredType","Module","__emval_register",h+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n")))(Qb,y,Ab);Rb[b]=f}return f(a,c,d)},g:function(){D()},x:function(a,b,c){Sb.length=0;var d;for(c>>=2;d=r()[b++];)(d=105>d)&&c&1&&c++,
Sb.push(d?ka()[c++>>1]:w()[c]),++c;return Ra[a].apply(null,Sb)},T:function(){},w:function(){},l:Tb,m:Ta,q:fb,e:function(a,b){Z(a,b||1);throw"longjmp";},M:function(a,b,c){r().copyWithin(a,b,b+c)},ea:function(){return navigator.hardwareConcurrency},U:function(a,b,c){Wb.length=b;c>>=3;for(var d=0;d<b;d++)Wb[d]=ka()[c+d];return(0>a?Ra[-a-1]:sc[a]).apply(null,Wb)},N:function(a){var b=r().length;a>>>=0;if(a<=b||2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,
d);0<d%65536&&(d+=65536-d%65536);a:{try{e.grow(Math.min(2147483648,d)-l.byteLength+65535>>>16);n(e.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},V:function(a,b,c){return Yb(a)?Zb(a,b,c):ac(a,b,c)},v:function(){},W:function(a,b){b>>=2;var c=w()[b+6];b={alpha:!!w()[b],depth:!!w()[b+1],stencil:!!w()[b+2],antialias:!!w()[b+3],premultipliedAlpha:!!w()[b+4],preserveDrawingBuffer:!!w()[b+5],powerPreference:ic[c],failIfMajorPerformanceCaveat:!!w()[b+7],Bb:w()[b+8],$b:w()[b+9],ib:w()[b+
10],qb:w()[b+11],cc:w()[b+12],dc:w()[b+13]};a=Yb(a);return!a||b.qb?0:ec(a,b)},t:jc,O:kc,G:lc,S:mc,c:function(){return ta},L:function(){L.zb()},I:tc,s:uc,n:vc,J:wc,F:xc,o:yc,h:zc,d:Ac,a:e||y.wasmMemory,Y:function(a){var b=L.ab.pop();a&&b()},Z:gb,A:function(a,b,c,d){if("undefined"===typeof SharedArrayBuffer)return C("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;if(!a)return C("pthread_create called with a null thread pointer!"),28;var f=[];if(A&&0===f.length)return Bc(687865856,
a,b,c,d);var g=0,h=0;if(b&&-1!=b){var k=w()[b>>2];k+=81920;g=w()[b+8>>2];h=0!==w()[b+12>>2]}else k=2097152;(b=0==g)?g=Cc(16,k):(g-=k,0<g||D("Assertion failed: undefined"));for(var m=M(228),p=0;57>p;++p)x()[(m>>2)+p]=0;w()[a>>2]=m;w()[m+12>>2]=m;a=m+152;w()[a>>2]=a;c={Sa:g,Ta:k,bb:b,hb:h,Lb:c,Za:m,Ua:d,Qb:f};return A?(c.Sb="spawnThread",postMessage(c,f),0):ab(c)},ca:function(a,b){return oc(a,b)},b:function(a){ta=a},da:function(a){var b=Date.now()/1E3|0;a&&(w()[a>>2]=b);return b}};
(function(){function a(f,g){y.asm=f.exports;F=y.asm.ja;Ja.unshift(y.asm.fa);L.fb.push(y.asm.ia);va=g;if(!A){var h=L.Ma.length;L.Ma.forEach(function(k){L.lb(k,function(){if(!--h&&(H--,y.monitorRunDependencies&&y.monitorRunDependencies(H),0==H&&(null!==Ma&&(clearInterval(Ma),Ma=null),Na))){var m=Na;Na=null;m()}})})}}function b(f){a(f.instance,f.module)}function c(f){return Pa().then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){C("failed to asynchronously prepare wasm: "+g);D(g)})}
var d={a:Dc};A||(!A||D("Assertion failed: addRunDependency cannot be used in a pthread worker"),H++,y.monitorRunDependencies&&y.monitorRunDependencies(H));if(y.instantiateWasm)try{return y.instantiateWasm(d,a)}catch(f){return C("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return ua||"function"!==typeof WebAssembly.instantiateStreaming||K.startsWith("data:application/octet-stream;base64,")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,
d).then(b,function(g){C("wasm streaming compile failed: "+g);C("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(na);return{}})();y.___wasm_call_ctors=function(){return(y.___wasm_call_ctors=y.asm.fa).apply(null,arguments)};var M=y._malloc=function(){return(M=y._malloc=y.asm.ga).apply(null,arguments)},O=y._free=function(){return(O=y._free=y.asm.ha).apply(null,arguments)};y._emscripten_tls_init=function(){return(y._emscripten_tls_init=y.asm.ia).apply(null,arguments)};
var Lb=y.___getTypeName=function(){return(Lb=y.___getTypeName=y.asm.ka).apply(null,arguments)};y.___embind_register_native_and_builtin_types=function(){return(y.___embind_register_native_and_builtin_types=y.asm.la).apply(null,arguments)};y._emscripten_current_thread_process_queued_calls=function(){return(y._emscripten_current_thread_process_queued_calls=y.asm.ma).apply(null,arguments)};
var Xa=y._emscripten_register_main_browser_thread_id=function(){return(Xa=y._emscripten_register_main_browser_thread_id=y.asm.na).apply(null,arguments)},pc=y._emscripten_main_browser_thread_id=function(){return(pc=y._emscripten_main_browser_thread_id=y.asm.oa).apply(null,arguments)},Qa=y.__emscripten_do_dispatch_to_thread=function(){return(Qa=y.__emscripten_do_dispatch_to_thread=y.asm.pa).apply(null,arguments)},Bc=y._emscripten_sync_run_in_main_thread_4=function(){return(Bc=y._emscripten_sync_run_in_main_thread_4=
y.asm.qa).apply(null,arguments)},$a=y._emscripten_main_thread_process_queued_calls=function(){return($a=y._emscripten_main_thread_process_queued_calls=y.asm.ra).apply(null,arguments)},Vb=y._emscripten_run_in_main_runtime_thread_js=function(){return(Vb=y._emscripten_run_in_main_runtime_thread_js=y.asm.sa).apply(null,arguments)},$b=y.__emscripten_call_on_thread=function(){return($b=y.__emscripten_call_on_thread=y.asm.ta).apply(null,arguments)},Wa=y.__emscripten_thread_init=function(){return(Wa=y.__emscripten_thread_init=
y.asm.ua).apply(null,arguments)},N=y._pthread_self=function(){return(N=y._pthread_self=y.asm.va).apply(null,arguments)},Ya=y.___pthread_tsd_run_dtors=function(){return(Ya=y.___pthread_tsd_run_dtors=y.asm.wa).apply(null,arguments)},nc=y._emscripten_get_global_libc=function(){return(nc=y._emscripten_get_global_libc=y.asm.xa).apply(null,arguments)},Y=y.stackSave=function(){return(Y=y.stackSave=y.asm.ya).apply(null,arguments)},P=y.stackRestore=function(){return(P=y.stackRestore=y.asm.za).apply(null,arguments)},
Ub=y.stackAlloc=function(){return(Ub=y.stackAlloc=y.asm.Aa).apply(null,arguments)},db=y._emscripten_stack_set_limits=function(){return(db=y._emscripten_stack_set_limits=y.asm.Ba).apply(null,arguments)},Z=y._setThrew=function(){return(Z=y._setThrew=y.asm.Ca).apply(null,arguments)},Cc=y._memalign=function(){return(Cc=y._memalign=y.asm.Da).apply(null,arguments)};y.dynCall_jiiiiiiiii=function(){return(y.dynCall_jiiiiiiiii=y.asm.Ea).apply(null,arguments)};
var Ec=y.dynCall_ijiii=function(){return(Ec=y.dynCall_ijiii=y.asm.Fa).apply(null,arguments)};y.dynCall_jiji=function(){return(y.dynCall_jiji=y.asm.Ga).apply(null,arguments)};y.dynCall_jiiiiiiii=function(){return(y.dynCall_jiiiiiiii=y.asm.Ha).apply(null,arguments)};y.dynCall_jiiiiii=function(){return(y.dynCall_jiiiiii=y.asm.Ia).apply(null,arguments)};y.dynCall_jiiiii=function(){return(y.dynCall_jiiiii=y.asm.Ja).apply(null,arguments)};
y.dynCall_iiijii=function(){return(y.dynCall_iiijii=y.asm.Ka).apply(null,arguments)};var Za=y.__emscripten_allow_main_runtime_queued_calls=580288,Ua=y.__emscripten_main_thread_futex=876764;function yc(a,b){var c=Y();try{F.get(a)(b)}catch(d){P(c);if(d!==d+0&&"longjmp"!==d)throw d;Z(1,0)}}function Ac(a,b,c,d,f){var g=Y();try{F.get(a)(b,c,d,f)}catch(h){P(g);if(h!==h+0&&"longjmp"!==h)throw h;Z(1,0)}}
function zc(a,b,c){var d=Y();try{F.get(a)(b,c)}catch(f){P(d);if(f!==f+0&&"longjmp"!==f)throw f;Z(1,0)}}function vc(a,b,c,d,f,g,h,k,m){var p=Y();try{return F.get(a)(b,c,d,f,g,h,k,m)}catch(q){P(p);if(q!==q+0&&"longjmp"!==q)throw q;Z(1,0)}}function wc(a,b,c,d,f,g,h,k,m,p){var q=Y();try{return F.get(a)(b,c,d,f,g,h,k,m,p)}catch(v){P(q);if(v!==v+0&&"longjmp"!==v)throw v;Z(1,0)}}function uc(a,b,c,d,f){var g=Y();try{return F.get(a)(b,c,d,f)}catch(h){P(g);if(h!==h+0&&"longjmp"!==h)throw h;Z(1,0)}}
function tc(a,b,c,d){var f=Y();try{return F.get(a)(b,c,d)}catch(g){P(f);if(g!==g+0&&"longjmp"!==g)throw g;Z(1,0)}}function xc(a,b,c,d,f,g){var h=Y();try{return Ec(a,b,c,d,f,g)}catch(k){P(h);if(k!==k+0&&"longjmp"!==k)throw k;Z(1,0)}}y.PThread=L;y.PThread=L;y.wasmMemory=e;y.ExitStatus=bb;var Fc;function bb(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Na=function Gc(){Fc||Hc();Fc||(Na=Gc)};
function Hc(){function a(){if(!Fc&&(Fc=!0,y.calledRun=!0,!wa)){A||Sa(Ja);ma(y);if(y.onRuntimeInitialized)y.onRuntimeInitialized();if(!A){if(y.postRun)for("function"==typeof y.postRun&&(y.postRun=[y.postRun]);y.postRun.length;){var b=y.postRun.shift();Ka.unshift(b)}Sa(Ka)}}}if(!(0<H))if(A)ma(y),A||Sa(Ja),postMessage({cmd:"loaded"});else{if(!A){if(y.preRun)for("function"==typeof y.preRun&&(y.preRun=[y.preRun]);y.preRun.length;)La();Sa(Ia)}0<H||(y.setStatus?(y.setStatus("Running..."),setTimeout(function(){setTimeout(function(){y.setStatus("")},
1);a()},1)):a())}}y.run=Hc;if(y.preInit)for("function"==typeof y.preInit&&(y.preInit=[y.preInit]);0<y.preInit.length;)y.preInit.pop()();A&&(noExitRuntime=!1,L.Ab());Hc();


  return Module.ready
}
);
})();
export default Module;