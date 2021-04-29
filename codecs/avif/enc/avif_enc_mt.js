
var avif_enc_mt = (function() {
  var _scriptDir = import.meta.url;
  
  return (
function(avif_enc_mt) {
  avif_enc_mt = avif_enc_mt || {};


function aa(){e.buffer!=l&&n(e.buffer);return ba}function r(){e.buffer!=l&&n(e.buffer);return ca}function u(){e.buffer!=l&&n(e.buffer);return da}function fa(){e.buffer!=l&&n(e.buffer);return ha}function w(){e.buffer!=l&&n(e.buffer);return ia}function y(){e.buffer!=l&&n(e.buffer);return ja}function ka(){e.buffer!=l&&n(e.buffer);return la}function ma(){e.buffer!=l&&n(e.buffer);return na}var z;z||(z=typeof avif_enc_mt !== 'undefined' ? avif_enc_mt : {});var oa,pa;
z.ready=new Promise(function(a,b){oa=a;pa=b});var ra={},A;for(A in z)z.hasOwnProperty(A)&&(ra[A]=z[A]);var B=z.ENVIRONMENT_IS_PTHREAD||!1;B&&(l=z.buffer);var C="";function sa(a){return z.locateFile?z.locateFile(a,C):C+a}var ta;C=self.location.href;_scriptDir&&(C=_scriptDir);0!==C.indexOf("blob:")?C=C.substr(0,C.lastIndexOf("/")+1):C="";ta=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)};
var ua=z.print||console.log.bind(console),D=z.printErr||console.warn.bind(console);for(A in ra)ra.hasOwnProperty(A)&&(z[A]=ra[A]);ra=null;var va=0,wa;z.wasmBinary&&(wa=z.wasmBinary);var noExitRuntime;z.noExitRuntime&&(noExitRuntime=z.noExitRuntime);"object"!==typeof WebAssembly&&E("no native wasm support detected");var e,xa,threadInfoStruct=0,selfThreadId=0,ya=!1;function za(a,b){a||E("Assertion failed: "+b)}
function Aa(a,b,c){c=b+c;for(var d="";!(b>=c);){var f=a[b++];if(!f)break;if(f&128){var g=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var h=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function G(a,b){return a?Aa(r(),a,b):""}
function Ba(a,b,c){var d=r();if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}
function Ca(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function Da(a,b){for(var c=0,d="";;){var f=u()[a+2*c>>1];if(0==f||c==b/2)return d;++c;d+=String.fromCharCode(f)}}function Ea(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f){var g=a.charCodeAt(f);u()[b>>1]=g;b+=2}u()[b>>1]=0;return b-d}
function Fa(a){return 2*a.length}function Ga(a,b){for(var c=0,d="";!(c>=b/4);){var f=w()[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}function Ha(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}w()[b>>2]=g;b+=4;if(b+4>c)break}w()[b>>2]=0;return b-d}
function Ia(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var l,ba,ca,da,ha,ia,ja,la,na;function n(a){l=a;z.HEAP8=ba=new Int8Array(a);z.HEAP16=da=new Int16Array(a);z.HEAP32=ia=new Int32Array(a);z.HEAPU8=ca=new Uint8Array(a);z.HEAPU16=ha=new Uint16Array(a);z.HEAPU32=ja=new Uint32Array(a);z.HEAPF32=la=new Float32Array(a);z.HEAPF64=na=new Float64Array(a)}var Ja=z.INITIAL_MEMORY||16777216;
if(B)e=z.wasmMemory,l=z.buffer;else if(z.wasmMemory)e=z.wasmMemory;else if(e=new WebAssembly.Memory({initial:Ja/65536,maximum:32768,shared:!0}),!(e.buffer instanceof SharedArrayBuffer))throw D("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");e&&(l=e.buffer);Ja=l.byteLength;n(l);var H,Ka=[],La=[],Ma=[],Na=[];
function Oa(){var a=z.preRun.shift();Ka.unshift(a)}var I=0,Pa=null,Qa=null;z.preloadedImages={};z.preloadedAudios={};function E(a){if(z.onAbort)z.onAbort(a);B&&console.error("Pthread aborting at "+Error().stack);D(a);ya=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");pa(a);throw a;}function Ra(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="avif_enc_mt.wasm";
Ra()||(K=sa(K));function Sa(){try{if(wa)return new Uint8Array(wa);if(ta)return ta(K);throw"both async and sync fetching of the wasm failed";}catch(a){E(a)}}function Ta(){return wa||"function"!==typeof fetch?Promise.resolve().then(Sa):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Sa()})}
var Va={597269:function(a,b){setTimeout(function(){Ua(a,b)},0)},597347:function(){throw"Canceled!";}};function Wa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(z);else{var c=b.Eb;"number"===typeof c?void 0===b.eb?H.get(c)():H.get(c)(b.eb):c(void 0===b.eb?null:b.eb)}}}function Xa(a,b,c){var d;-1!=a.indexOf("j")?d=c&&c.length?z["dynCall_"+a].apply(null,[b].concat(c)):z["dynCall_"+a].call(null,b):d=H.get(b).apply(null,c);return d}z.dynCall=Xa;var L=0,Ya=0,Za=0;
function $a(a,b,c){L=a|0;Za=b|0;Ya=c|0}z.registerPthreadPtr=$a;function ab(a,b){if(0>=a||a>aa().length||a&1||0>b)return-28;if(0==b)return 0;2147483647<=b&&(b=Infinity);var c=Atomics.load(w(),M.vb>>2),d=0;if(c==a&&Atomics.compareExchange(w(),M.vb>>2,c,0)==c&&(--b,d=1,0>=b))return 1;a=Atomics.notify(w(),a>>2,b);if(0<=a)return a+d;throw"Atomics.notify returned an unexpected value "+a;}z._emscripten_futex_wake=ab;
function bb(a){if(B)throw"Internal Error! cleanupThread() can only ever be called from main application thread!";if(!a)throw"Internal Error! Null pthread_ptr in cleanupThread!";w()[a+12>>2]=0;(a=M.Ya[a])&&M.jb(a.worker)}
var M={ac:1,kc:{yb:0,zb:0},Wa:[],$a:[],Lb:function(){for(var a=navigator.hardwareConcurrency,b=0;b<a;++b)M.pb()},Mb:function(){M.Ua=N(232);for(var a=0;58>a;++a)y()[M.Ua/4+a]=0;w()[M.Ua+12>>2]=M.Ua;a=M.Ua+156;w()[a>>2]=a;var b=N(512);for(a=0;128>a;++a)y()[b/4+a]=0;Atomics.store(y(),M.Ua+104>>2,b);Atomics.store(y(),M.Ua+40>>2,M.Ua);Atomics.store(y(),M.Ua+44>>2,42);M.tb();$a(M.Ua,!1,1);cb(M.Ua)},Nb:function(){M.tb();oa(z);M.receiveObjectTransfer=M.Sb;M.setThreadStatus=M.Tb;M.threadCancel=M.Yb;M.threadExit=
M.Zb},tb:function(){M.vb=db},Ya:{},kb:[],Tb:function(){},xb:function(){for(;0<M.kb.length;)M.kb.pop()();B&&threadInfoStruct&&eb()},Zb:function(a){var b=L|0;b&&(Atomics.store(y(),b+4>>2,a),Atomics.store(y(),b+0>>2,1),Atomics.store(y(),b+60>>2,1),Atomics.store(y(),b+64>>2,0),M.xb(),ab(b+0,2147483647),$a(0,0,0),threadInfoStruct=0,B&&postMessage({cmd:"exit"}))},Yb:function(){M.xb();Atomics.store(y(),threadInfoStruct+4>>2,-1);Atomics.store(y(),threadInfoStruct+0>>2,1);ab(threadInfoStruct+0,2147483647);
threadInfoStruct=selfThreadId=0;$a(0,0,0);postMessage({cmd:"cancelDone"})},rc:function(){for(var a in M.Ya){var b=M.Ya[a];b&&b.worker&&M.jb(b.worker)}M.Ya={};for(a=0;a<M.Wa.length;++a){var c=M.Wa[a];c.terminate()}M.Wa=[];for(a=0;a<M.$a.length;++a)c=M.$a[a],b=c.Va,M.nb(b),c.terminate();M.$a=[]},nb:function(a){if(a){if(a.threadInfoStruct){var b=w()[a.threadInfoStruct+104>>2];w()[a.threadInfoStruct+104>>2]=0;O(b);O(a.threadInfoStruct)}a.threadInfoStruct=0;a.lb&&a.ab&&O(a.ab);a.ab=0;a.worker&&(a.worker.Va=
null)}},jb:function(a){delete M.Ya[a.Va.Ab];M.Wa.push(a);M.$a.splice(M.$a.indexOf(a),1);M.nb(a.Va);a.Va=void 0},Sb:function(){},ub:function(a,b){a.onmessage=function(c){var d=c.data,f=d.cmd;a.Va&&(M.mb=a.Va.threadInfoStruct);if(d.targetThread&&d.targetThread!=(L|0)){var g=M.Ya[d.qc];g?g.worker.postMessage(c.data,d.transferList):console.error('Internal error! Worker sent a message "'+f+'" to target pthread '+d.targetThread+", but that thread no longer exists!")}else if("processQueuedMainThreadWork"===
f)fb();else if("spawnThread"===f)gb(c.data);else if("cleanupThread"===f)bb(d.thread);else if("killThread"===f){c=d.thread;if(B)throw"Internal Error! killThread() can only ever be called from main application thread!";if(!c)throw"Internal Error! Null pthread_ptr in killThread!";w()[c+12>>2]=0;c=M.Ya[c];c.worker.terminate();M.nb(c);M.$a.splice(M.$a.indexOf(c.worker),1);c.worker.Va=void 0}else if("cancelThread"===f){c=d.thread;if(B)throw"Internal Error! cancelThread() can only ever be called from main application thread!";
if(!c)throw"Internal Error! Null pthread_ptr in cancelThread!";M.Ya[c].worker.postMessage({cmd:"cancel"})}else"loaded"===f?(a.loaded=!0,b&&b(a),a.fb&&(a.fb(),delete a.fb)):"print"===f?ua("Thread "+d.threadId+": "+d.text):"printErr"===f?D("Thread "+d.threadId+": "+d.text):"alert"===f?alert("Thread "+d.threadId+": "+d.text):"exit"===f?a.Va&&Atomics.load(y(),a.Va.Ab+68>>2)&&M.jb(a):"cancelDone"===f?M.jb(a):"objectTransfer"!==f&&("setimmediate"===c.data.target?a.postMessage(c.data):D("worker sent an unknown command "+
f));M.mb=void 0};a.onerror=function(c){D("pthread sent an error! "+c.filename+":"+c.lineno+": "+c.message)};a.postMessage({cmd:"load",urlOrBlob:z.mainScriptUrlOrBlob||_scriptDir,wasmMemory:e,wasmModule:xa})},pb:function(){var a=sa("avif_enc_mt.worker.js");M.Wa.push(new Worker(a))},Fb:function(){0==M.Wa.length&&(M.pb(),M.ub(M.Wa[0]));return 0<M.Wa.length?M.Wa.pop():null},bc:function(a){for(a=performance.now()+a;performance.now()<a;);}};z.establishStackSpace=function(a){P(a)};z.getNoExitRuntime=function(){return noExitRuntime};
var hb;hb=B?function(){return performance.now()-z.__performance_now_clock_drift}:function(){return performance.now()};function ib(a,b){M.kb.push(function(){H.get(a)(b)})}var jb=[null,[],[]],kb={};function lb(a,b,c){return B?Q(1,1,a,b,c):0}function mb(a,b,c){return B?Q(2,1,a,b,c):0}function nb(a,b,c){if(B)return Q(3,1,a,b,c)}var ob={};function pb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function qb(a){return this.fromWireType(y()[a>>2])}var S={},T={},rb={};
function sb(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function tb(a,b){a=sb(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function ub(a){var b=Error,c=tb(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var vb=void 0;
function wb(a,b,c){function d(k){k=c(k);if(k.length!==a.length)throw new vb("Mismatched type converter count");for(var m=0;m<a.length;++m)U(a[m],k[m])}a.forEach(function(k){rb[k]=b});var f=Array(b.length),g=[],h=0;b.forEach(function(k,m){T.hasOwnProperty(k)?f[m]=T[k]:(g.push(k),S.hasOwnProperty(k)||(S[k]=[]),S[k].push(function(){f[m]=T[k];++h;h===g.length&&d(f)}))});0===g.length&&d(f)}
function xb(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var yb=void 0;function V(a){for(var b="";r()[a];)b+=yb[r()[a++]];return b}var zb=void 0;function W(a){throw new zb(a);}
function U(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||W('type "'+d+'" must have a positive integer typeid pointer');if(T.hasOwnProperty(a)){if(c.Jb)return;W("Cannot register type '"+d+"' twice")}T[a]=b;delete rb[a];S.hasOwnProperty(a)&&(b=S[a],delete S[a],b.forEach(function(f){f()}))}var Ab=[],X=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Bb(a){4<a&&0===--X[a].ob&&(X[a]=void 0,Ab.push(a))}function Cb(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Ab.length?Ab.pop():X.length;X[b]={ob:1,value:a};return b}}function Db(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Eb(a,b){switch(b){case 2:return function(c){return this.fromWireType(ka()[c>>2])};case 3:return function(c){return this.fromWireType(ma()[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Fb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=tb(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Gb(a,b){var c=z;if(void 0===c[a].Xa){var d=c[a];c[a]=function(){c[a].Xa.hasOwnProperty(arguments.length)||W("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].Xa+")!");return c[a].Xa[arguments.length].apply(this,arguments)};c[a].Xa=[];c[a].Xa[d.Bb]=d}}
function Hb(a,b,c){z.hasOwnProperty(a)?((void 0===c||void 0!==z[a].Xa&&void 0!==z[a].Xa[c])&&W("Cannot register public name '"+a+"' twice"),Gb(a,a),z.hasOwnProperty(c)&&W("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),z[a].Xa[c]=b):(z[a]=b,void 0!==c&&(z[a].nc=c))}function Ib(a,b){for(var c=[],d=0;d<a;d++)c.push(w()[(b>>2)+d]);return c}
function Jb(a,b){za(0<=a.indexOf("j"),"getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];return Xa(a,b,c)}}function Kb(a,b){a=V(a);var c=-1!=a.indexOf("j")?Jb(a,b):H.get(b);"function"!==typeof c&&W("unknown function pointer with signature "+a+": "+b);return c}var Lb=void 0;function Mb(a){a=Nb(a);var b=V(a);O(a);return b}
function Ob(a,b){function c(g){f[g]||T[g]||(rb[g]?rb[g].forEach(c):(d.push(g),f[g]=!0))}var d=[],f={};b.forEach(c);throw new Lb(a+": "+d.map(Mb).join([", "]));}function Pb(a,b,c){switch(b){case 0:return c?function(d){return aa()[d]}:function(d){return r()[d]};case 1:return c?function(d){return u()[d>>1]}:function(d){return fa()[d>>1]};case 2:return c?function(d){return w()[d>>2]}:function(d){return y()[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var Qb={};
function Rb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function Sb(a,b){var c=T[a];void 0===c&&W(b+" has unknown type "+Mb(a));return c}var Tb={};function Ub(a,b,c){if(0>=a||a>aa().length||a&1)return-28;a=Atomics.wait(w(),a>>2,b,c);if("timed-out"===a)return-73;if("not-equal"===a)return-6;if("ok"===a)return 0;throw"Atomics.wait returned an unexpected value "+a;}
function Q(a,b){for(var c=arguments.length-2,d=Y(),f=Vb(8*c),g=f>>3,h=0;h<c;h++)ma()[g+h]=arguments[2+h];c=Wb(a,c,f,b);P(d);return c}var Xb=[],Yb=[],Zb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function $b(a){a=2<a?G(a):a;return Zb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function ac(a,b,c){var d=$b(a);if(!d)return-4;d.ib&&(w()[d.ib>>2]=b,w()[d.ib+4>>2]=c);if(d.wb||!d.dc)d.wb&&(d=d.wb),a=!1,d.hb&&d.hb.gb&&(a=d.hb.gb.getParameter(2978),a=0===a[0]&&0===a[1]&&a[2]===d.width&&a[3]===d.height),d.width=b,d.height=c,a&&d.hb.gb.viewport(0,0,b,c);else{if(d.ib){d=w()[d.ib+8>>2];a=a?G(a):"";var f=Y(),g=Vb(12),h=0;if(a){h=Ca(a)+1;var k=N(h);Ba(a,k,h);h=k}w()[g>>2]=h;w()[g+4>>2]=b;w()[g+8>>2]=c;bc(0,d,657457152,0,h,g);P(f);return 1}return-4}return 0}
function cc(a,b,c){return B?Q(4,1,a,b,c):ac(a,b,c)}function dc(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,g){b.drawArraysInstancedANGLE(c,d,f,g)},a.drawElementsInstanced=function(c,d,f,g,h){b.drawElementsInstancedANGLE(c,d,f,g,h)})}
function ec(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function fc(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function gc(a){a||(a=hc);if(!a.Kb){a.Kb=!0;var b=a.gb;dc(b);ec(b);fc(b);b.ec=b.getExtension("EXT_disjoint_timer_query");b.mc=b.getExtension("WEBGL_multi_draw");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var hc,ic=["default","low-power","high-performance"];function jc(a){return B?Q(5,1,a):0}function kc(a,b,c,d){if(B)return Q(6,1,a,b,c,d);a=kb.hc(a);b=kb.fc(a,b,c);w()[d>>2]=b;return 0}function lc(a,b,c,d,f){if(B)return Q(7,1,a,b,c,d,f)}
function mc(a,b,c,d){if(B)return Q(8,1,a,b,c,d);for(var f=0,g=0;g<c;g++){for(var h=w()[b+8*g>>2],k=w()[b+(8*g+4)>>2],m=0;m<k;m++){var q=r()[h+m],p=jb[a];0===q||10===q?((1===a?ua:D)(Aa(p,0)),p.length=0):p.push(q)}f+=k}w()[d>>2]=f;return 0}
function gb(a){if(B)throw"Internal Error! spawnThread() can only ever be called from main application thread!";var b=M.Fb();if(void 0!==b.Va)throw"Internal error!";if(!a.bb)throw"Internal error, no pthread ptr!";M.$a.push(b);for(var c=N(512),d=0;128>d;++d)w()[c+4*d>>2]=0;var f=a.ab+a.cb;d=M.Ya[a.bb]={worker:b,ab:a.ab,cb:a.cb,lb:a.lb,Ab:a.bb,threadInfoStruct:a.bb};var g=d.threadInfoStruct>>2;Atomics.store(y(),g,0);Atomics.store(y(),g+1,0);Atomics.store(y(),g+2,0);Atomics.store(y(),g+17,a.qb);Atomics.store(y(),
g+26,c);Atomics.store(y(),g+12,0);Atomics.store(y(),g+10,d.threadInfoStruct);Atomics.store(y(),g+11,42);Atomics.store(y(),g+27,a.cb);Atomics.store(y(),g+21,a.cb);Atomics.store(y(),g+20,f);Atomics.store(y(),g+29,f);Atomics.store(y(),g+30,a.qb);Atomics.store(y(),g+32,a.yb);Atomics.store(y(),g+33,a.zb);c=nc()+40;Atomics.store(y(),g+44,c);b.Va=d;var h={cmd:"run",start_routine:a.Xb,arg:a.eb,threadInfoStruct:a.bb,selfThreadId:a.bb,parentThreadId:a.Pb,stackBase:a.ab,stackSize:a.cb};b.fb=function(){h.time=
performance.now();b.postMessage(h,a.$b)};b.loaded&&(b.fb(),delete b.fb)}function oc(){return L|0}z._pthread_self=oc;
function pc(a,b){if(!a)return D("pthread_join attempted on a null thread pointer!"),71;if(B&&selfThreadId==a)return D("PThread "+a+" is attempting to join to itself!"),16;if(!B&&M.Ua==a)return D("Main thread "+a+" is attempting to join to itself!"),16;if(w()[a+12>>2]!==a)return D("pthread_join attempted on thread "+a+", which does not point to a valid thread, or does not exist anymore!"),71;if(Atomics.load(y(),a+68>>2))return D("Attempted to join thread "+a+", which was already detached!"),28;for(;;){var c=
Atomics.load(y(),a+0>>2);if(1==c)return c=Atomics.load(y(),a+4>>2),b&&(w()[b>>2]=c),Atomics.store(y(),a+68>>2,1),B?postMessage({cmd:"cleanupThread",thread:a}):bb(a),0;if(B&&threadInfoStruct&&!Atomics.load(y(),threadInfoStruct+60>>2)&&2==Atomics.load(y(),threadInfoStruct+0>>2))throw"Canceled!";B||fb();Ub(a+0,c,B?100:1)}}B||M.Lb();vb=z.InternalError=ub("InternalError");for(var qc=Array(256),rc=0;256>rc;++rc)qc[rc]=String.fromCharCode(rc);yb=qc;zb=z.BindingError=ub("BindingError");
z.count_emval_handles=function(){for(var a=0,b=5;b<X.length;++b)void 0!==X[b]&&++a;return a};z.get_first_emval=function(){for(var a=5;a<X.length;++a)if(void 0!==X[a])return X[a];return null};Lb=z.UnboundTypeError=ub("UnboundTypeError");var sc=[null,lb,mb,nb,cc,jc,kc,lc,mc];B||La.push({Eb:function(){tc()}});
var Ec={n:function(a,b,c,d){E("Assertion failed: "+G(a)+", at: "+[b?G(b):"unknown filename",c,d?G(d):"unknown function"])},ga:function(a,b){return ib(a,b)},E:lb,Z:mb,_:nb,M:function(a){var b=ob[a];delete ob[a];var c=b.Qb,d=b.Rb,f=b.sb,g=f.map(function(h){return h.Ib}).concat(f.map(function(h){return h.Vb}));wb([a],g,function(h){var k={};f.forEach(function(m,q){var p=h[q],v=m.Gb,x=m.Hb,F=h[q+f.length],t=m.Ub,qa=m.Wb;k[m.Db]={read:function(J){return p.fromWireType(v(x,J))},write:function(J,R){var ea=
[];t(qa,J,F.toWireType(ea,R));pb(ea)}}});return[{name:b.name,fromWireType:function(m){var q={},p;for(p in k)q[p]=k[p].read(m);d(m);return q},toWireType:function(m,q){for(var p in k)if(!(p in q))throw new TypeError('Missing field:  "'+p+'"');var v=c();for(p in k)k[p].write(v,q[p]);null!==m&&m.push(d,v);return v},argPackAdvance:8,readValueFromPointer:qb,Za:d}]})},ba:function(a,b,c,d,f){var g=xb(c);b=V(b);U(a,{name:b,fromWireType:function(h){return!!h},toWireType:function(h,k){return k?d:f},argPackAdvance:8,
readValueFromPointer:function(h){if(1===c)var k=aa();else if(2===c)k=u();else if(4===c)k=w();else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[h>>g])},Za:null})},aa:function(a,b){b=V(b);U(a,{name:b,fromWireType:function(c){var d=X[c].value;Bb(c);return d},toWireType:function(c,d){return Cb(d)},argPackAdvance:8,readValueFromPointer:qb,Za:null})},H:function(a,b,c){c=xb(c);b=V(b);U(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==
typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+Db(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Eb(b,c),Za:null})},L:function(a,b,c,d,f,g){var h=Ib(b,c);a=V(a);f=Kb(d,f);Hb(a,function(){Ob("Cannot call "+a+" due to unbound types",h)},b-1);wb([],h,function(k){var m=a,q=a;k=[k[0],null].concat(k.slice(1));var p=f,v=k.length;2>v&&W("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var x=null!==k[1]&&!1,F=!1,t=1;t<k.length;++t)if(null!==
k[t]&&void 0===k[t].Za){F=!0;break}var qa="void"!==k[0].name,J="",R="";for(t=0;t<v-2;++t)J+=(0!==t?", ":"")+"arg"+t,R+=(0!==t?", ":"")+"arg"+t+"Wired";q="return function "+sb(q)+"("+J+") {\nif (arguments.length !== "+(v-2)+") {\nthrowBindingError('function "+q+" called with ' + arguments.length + ' arguments, expected "+(v-2)+" args!');\n}\n";F&&(q+="var destructors = [];\n");var ea=F?"destructors":"null";J="throwBindingError invoker fn runDestructors retType classParam".split(" ");p=[W,p,g,pb,k[0],
k[1]];x&&(q+="var thisWired = classParam.toWireType("+ea+", this);\n");for(t=0;t<v-2;++t)q+="var arg"+t+"Wired = argType"+t+".toWireType("+ea+", arg"+t+"); // "+k[t+2].name+"\n",J.push("argType"+t),p.push(k[t+2]);x&&(R="thisWired"+(0<R.length?", ":"")+R);q+=(qa?"var rv = ":"")+"invoker(fn"+(0<R.length?", ":"")+R+");\n";if(F)q+="runDestructors(destructors);\n";else for(t=x?1:2;t<k.length;++t)v=1===t?"thisWired":"arg"+(t-2)+"Wired",null!==k[t].Za&&(q+=v+"_dtor("+v+"); // "+k[t].name+"\n",J.push(v+"_dtor"),
p.push(k[t].Za));qa&&(q+="var ret = retType.fromWireType(rv);\nreturn ret;\n");J.push(q+"}\n");k=Fb(J).apply(null,p);t=b-1;if(!z.hasOwnProperty(m))throw new vb("Replacing nonexistant public symbol");void 0!==z[m].Xa&&void 0!==t?z[m].Xa[t]=k:(z[m]=k,z[m].Bb=t);return[]})},o:function(a,b,c,d,f){function g(q){return q}b=V(b);-1===f&&(f=4294967295);var h=xb(c);if(0===d){var k=32-8*c;g=function(q){return q<<k>>>k}}var m=-1!=b.indexOf("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(q,p){if("number"!==
typeof p&&"boolean"!==typeof p)throw new TypeError('Cannot convert "'+Db(p)+'" to '+this.name);if(p<d||p>f)throw new TypeError('Passing a number "'+Db(p)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return m?p>>>0:p|0},argPackAdvance:8,readValueFromPointer:Pb(b,h,0!==d),Za:null})},l:function(a,b,c){function d(g){g>>=2;var h=y();return new f(l,h[g+1],h[g])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,
Float64Array][b];c=V(c);U(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{Jb:!0})},I:function(a,b){b=V(b);var c="std::string"===b;U(a,{name:b,fromWireType:function(d){var f=y()[d>>2];if(c)for(var g=d+4,h=0;h<=f;++h){var k=d+4+h;if(h==f||0==r()[k]){g=G(g,k-g);if(void 0===m)var m=g;else m+=String.fromCharCode(0),m+=g;g=k+1}}else{m=Array(f);for(h=0;h<f;++h)m[h]=String.fromCharCode(r()[d+4+h]);m=m.join("")}O(d);return m},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));
var g="string"===typeof f;g||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array||W("Cannot pass non-string to std::string");var h=(c&&g?function(){return Ca(f)}:function(){return f.length})(),k=N(4+h+1);y()[k>>2]=h;if(c&&g)Ba(f,k+4,h+1);else if(g)for(g=0;g<h;++g){var m=f.charCodeAt(g);255<m&&(O(k),W("String has UTF-16 code units that do not fit in 8 bits"));r()[k+4+g]=m}else for(g=0;g<h;++g)r()[k+4+g]=f[g];null!==d&&d.push(O,k);return k},argPackAdvance:8,readValueFromPointer:qb,
Za:function(d){O(d)}})},z:function(a,b,c){c=V(c);if(2===b){var d=Da;var f=Ea;var g=Fa;var h=function(){return fa()};var k=1}else 4===b&&(d=Ga,f=Ha,g=Ia,h=function(){return y()},k=2);U(a,{name:c,fromWireType:function(m){for(var q=y()[m>>2],p=h(),v,x=m+4,F=0;F<=q;++F){var t=m+4+F*b;if(F==q||0==p[t>>k])x=d(x,t-x),void 0===v?v=x:(v+=String.fromCharCode(0),v+=x),x=t+b}O(m);return v},toWireType:function(m,q){"string"!==typeof q&&W("Cannot pass non-string to C++ string type "+c);var p=g(q),v=N(4+p+b);y()[v>>
2]=p>>k;f(q,v+4,p+b);null!==m&&m.push(O,v);return v},argPackAdvance:8,readValueFromPointer:qb,Za:function(m){O(m)}})},O:function(a,b,c,d,f,g){ob[a]={name:V(b),Qb:Kb(c,d),Rb:Kb(f,g),sb:[]}},m:function(a,b,c,d,f,g,h,k,m,q){ob[a].sb.push({Db:V(b),Ib:c,Gb:Kb(d,f),Hb:g,Vb:h,Ub:Kb(k,m),Wb:q})},ca:function(a,b){b=V(b);U(a,{jc:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},U:function(a,b){if(a==b)postMessage({cmd:"processQueuedMainThreadWork"});else if(B)postMessage({targetThread:a,
cmd:"processThreadQueue"});else{a=(a=M.Ya[a])&&a.worker;if(!a)return;a.postMessage({cmd:"processThreadQueue"})}return 1},v:Bb,$:function(a){if(0===a)return Cb(Rb());var b=Qb[a];a=void 0===b?V(a):b;return Cb(Rb()[a])},K:function(a){4<a&&(X[a].ob+=1)},V:function(a,b,c,d){a||W("Cannot use deleted val. handle = "+a);a=X[a].value;var f=Tb[b];if(!f){f="";for(var g=0;g<b;++g)f+=(0!==g?", ":"")+"arg"+g;var h="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)h+="var argType"+
g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+'], "parameter '+g+'");\nvar arg'+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";f=(new Function("requireRegisteredType","Module","__emval_register",h+("var obj = new constructor("+f+");\nreturn __emval_register(obj);\n}\n")))(Sb,z,Cb);Tb[b]=f}return f(a,c,d)},p:function(){E()},s:function(a,b,c){Yb.length=0;var d;for(c>>=2;d=r()[b++];)(d=105>d)&&c&1&&c++,Yb.push(d?ma()[c++>>1]:w()[c]),++c;
return Va[a].apply(null,Yb)},X:function(){},C:function(){},i:Ub,j:ab,f:hb,u:function(){return Za|0},t:function(){return Ya|0},h:function(a,b){Z(a,b||1);throw"longjmp";},Q:function(a,b,c){r().copyWithin(a,b,b+c)},fa:function(){return navigator.hardwareConcurrency},R:function(a,b,c){Xb.length=b;c>>=3;for(var d=0;d<b;d++)Xb[d]=ma()[c+d];return(0>a?Va[-a-1]:sc[a]).apply(null,Xb)},q:function(a){a>>>=0;var b=r().length;if(a<=b||2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,
a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{e.grow(Math.min(2147483648,d)-l.byteLength+65535>>>16);n(e.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},S:function(a,b,c){return $b(a)?ac(a,b,c):cc(a,b,c)},g:function(){},T:function(a,b){var c={};b>>=2;c.alpha=!!w()[b];c.depth=!!w()[b+1];c.stencil=!!w()[b+2];c.antialias=!!w()[b+3];c.premultipliedAlpha=!!w()[b+4];c.preserveDrawingBuffer=!!w()[b+5];var d=w()[b+6];c.powerPreference=ic[d];c.failIfMajorPerformanceCaveat=
!!w()[b+7];c.Ob=w()[b+8];c.lc=w()[b+9];c.rb=w()[b+10];c.Cb=w()[b+11];c.oc=w()[b+12];c.pc=w()[b+13];a=$b(a);!a||c.Cb?c=0:(a=a.getContext("webgl",c))?(b=N(8),w()[b+4>>2]=L|0,d={ic:b,attributes:c,version:c.Ob,gb:a},a.canvas&&(a.canvas.hb=d),("undefined"===typeof c.rb||c.rb)&&gc(d),c=b):c=0;return c},G:jc,Y:kc,N:lc,F:mc,c:function(){return va|0},P:function(){M.Mb()},w:uc,B:vc,x:wc,A:xc,y:yc,r:zc,k:Ac,d:Bc,a:e||z.wasmMemory,W:function(a){var b=M.kb.pop();a&&b()},D:ib,J:function(a,b,c,d){if("undefined"===
typeof SharedArrayBuffer)return D("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;if(!a)return D("pthread_create called with a null thread pointer!"),28;var f=[];if(B&&0===f.length)return Cc(687865856,a,b,c,d);var g=0,h=0,k=0,m=0;if(b){var q=w()[b>>2];q+=81920;g=w()[b+8>>2];h=0!==w()[b+12>>2];if(0===w()[b+16>>2]){var p=w()[b+20>>2],v=w()[b+24>>2];k=b+20;m=b+24;var x=M.mb?M.mb:L|0;if(k||m)if(x)if(w()[x+12>>2]!==x)D("pthread_getschedparam attempted on thread "+
x+", which does not point to a valid thread, or does not exist anymore!");else{var F=Atomics.load(y(),x+108+20>>2);x=Atomics.load(y(),x+108+24>>2);k&&(w()[k>>2]=F);m&&(w()[m>>2]=x)}else D("pthread_getschedparam called with a null thread pointer!");k=w()[b+20>>2];m=w()[b+24>>2];w()[b+20>>2]=p;w()[b+24>>2]=v}else k=w()[b+20>>2],m=w()[b+24>>2]}else q=2097152;(b=0==g)?g=Dc(16,q):(g-=q,za(0<g));p=N(232);for(v=0;58>v;++v)y()[(p>>2)+v]=0;w()[a>>2]=p;w()[p+12>>2]=p;a=p+156;w()[a>>2]=a;c={ab:g,cb:q,lb:b,yb:k,
zb:m,qb:h,Xb:c,bb:p,Pb:L|0,eb:d,$b:f};B?(c.cc="spawnThread",postMessage(c,f)):gb(c);return 0},da:function(a,b){return pc(a,b)},e:oc,b:function(a){va=a|0},ea:function(a){var b=Date.now()/1E3|0;a&&(w()[a>>2]=b);return b}};
(function(){function a(f,g){z.asm=f.exports;H=z.asm.ha;xa=g;if(!B){var h=M.Wa.length;M.Wa.forEach(function(k){M.ub(k,function(){if(!--h&&(I--,z.monitorRunDependencies&&z.monitorRunDependencies(I),0==I&&(null!==Pa&&(clearInterval(Pa),Pa=null),Qa))){var m=Qa;Qa=null;m()}})})}}function b(f){a(f.instance,f.module)}function c(f){return Ta().then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){D("failed to asynchronously prepare wasm: "+g);E(g)})}var d={a:Ec};B||(za(!B,"addRunDependency cannot be used in a pthread worker"),
I++,z.monitorRunDependencies&&z.monitorRunDependencies(I));if(z.instantiateWasm)try{return z.instantiateWasm(d,a)}catch(f){return D("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return wa||"function"!==typeof WebAssembly.instantiateStreaming||Ra()||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){D("wasm streaming compile failed: "+g);D("falling back to ArrayBuffer instantiation");
return c(b)})})})().catch(pa);return{}})();var tc=z.___wasm_call_ctors=function(){return(tc=z.___wasm_call_ctors=z.asm.ia).apply(null,arguments)},N=z._malloc=function(){return(N=z._malloc=z.asm.ja).apply(null,arguments)},O=z._free=function(){return(O=z._free=z.asm.ka).apply(null,arguments)},Nb=z.___getTypeName=function(){return(Nb=z.___getTypeName=z.asm.la).apply(null,arguments)};
z.___embind_register_native_and_builtin_types=function(){return(z.___embind_register_native_and_builtin_types=z.asm.ma).apply(null,arguments)};var nc=z._emscripten_get_global_libc=function(){return(nc=z._emscripten_get_global_libc=z.asm.na).apply(null,arguments)};z.___em_js__initPthreadsJS=function(){return(z.___em_js__initPthreadsJS=z.asm.oa).apply(null,arguments)};
var Y=z.stackSave=function(){return(Y=z.stackSave=z.asm.pa).apply(null,arguments)},P=z.stackRestore=function(){return(P=z.stackRestore=z.asm.qa).apply(null,arguments)},Vb=z.stackAlloc=function(){return(Vb=z.stackAlloc=z.asm.ra).apply(null,arguments)},Z=z._setThrew=function(){return(Z=z._setThrew=z.asm.sa).apply(null,arguments)},Dc=z._memalign=function(){return(Dc=z._memalign=z.asm.ta).apply(null,arguments)};
z._emscripten_main_browser_thread_id=function(){return(z._emscripten_main_browser_thread_id=z.asm.ua).apply(null,arguments)};var eb=z.___pthread_tsd_run_dtors=function(){return(eb=z.___pthread_tsd_run_dtors=z.asm.va).apply(null,arguments)},fb=z._emscripten_main_thread_process_queued_calls=function(){return(fb=z._emscripten_main_thread_process_queued_calls=z.asm.wa).apply(null,arguments)};
z._emscripten_current_thread_process_queued_calls=function(){return(z._emscripten_current_thread_process_queued_calls=z.asm.xa).apply(null,arguments)};var cb=z._emscripten_register_main_browser_thread_id=function(){return(cb=z._emscripten_register_main_browser_thread_id=z.asm.ya).apply(null,arguments)},Ua=z._do_emscripten_dispatch_to_thread=function(){return(Ua=z._do_emscripten_dispatch_to_thread=z.asm.za).apply(null,arguments)};
z._emscripten_async_run_in_main_thread=function(){return(z._emscripten_async_run_in_main_thread=z.asm.Aa).apply(null,arguments)};z._emscripten_sync_run_in_main_thread=function(){return(z._emscripten_sync_run_in_main_thread=z.asm.Ba).apply(null,arguments)};z._emscripten_sync_run_in_main_thread_0=function(){return(z._emscripten_sync_run_in_main_thread_0=z.asm.Ca).apply(null,arguments)};
z._emscripten_sync_run_in_main_thread_1=function(){return(z._emscripten_sync_run_in_main_thread_1=z.asm.Da).apply(null,arguments)};z._emscripten_sync_run_in_main_thread_2=function(){return(z._emscripten_sync_run_in_main_thread_2=z.asm.Ea).apply(null,arguments)};z._emscripten_sync_run_in_main_thread_xprintf_varargs=function(){return(z._emscripten_sync_run_in_main_thread_xprintf_varargs=z.asm.Fa).apply(null,arguments)};
z._emscripten_sync_run_in_main_thread_3=function(){return(z._emscripten_sync_run_in_main_thread_3=z.asm.Ga).apply(null,arguments)};var Cc=z._emscripten_sync_run_in_main_thread_4=function(){return(Cc=z._emscripten_sync_run_in_main_thread_4=z.asm.Ha).apply(null,arguments)};z._emscripten_sync_run_in_main_thread_5=function(){return(z._emscripten_sync_run_in_main_thread_5=z.asm.Ia).apply(null,arguments)};
z._emscripten_sync_run_in_main_thread_6=function(){return(z._emscripten_sync_run_in_main_thread_6=z.asm.Ja).apply(null,arguments)};z._emscripten_sync_run_in_main_thread_7=function(){return(z._emscripten_sync_run_in_main_thread_7=z.asm.Ka).apply(null,arguments)};
var Wb=z._emscripten_run_in_main_runtime_thread_js=function(){return(Wb=z._emscripten_run_in_main_runtime_thread_js=z.asm.La).apply(null,arguments)},bc=z.__emscripten_call_on_thread=function(){return(bc=z.__emscripten_call_on_thread=z.asm.Ma).apply(null,arguments)};z._emscripten_tls_init=function(){return(z._emscripten_tls_init=z.asm.Na).apply(null,arguments)};z.dynCall_jiiiiiiiii=function(){return(z.dynCall_jiiiiiiiii=z.asm.Oa).apply(null,arguments)};
z.dynCall_jiji=function(){return(z.dynCall_jiji=z.asm.Pa).apply(null,arguments)};z.dynCall_jiiiiiiii=function(){return(z.dynCall_jiiiiiiii=z.asm.Qa).apply(null,arguments)};z.dynCall_jiiiiii=function(){return(z.dynCall_jiiiiii=z.asm.Ra).apply(null,arguments)};z.dynCall_jiiiii=function(){return(z.dynCall_jiiiii=z.asm.Sa).apply(null,arguments)};z.dynCall_iiijii=function(){return(z.dynCall_iiijii=z.asm.Ta).apply(null,arguments)};var db=z._main_thread_futex=899124;
function zc(a,b){var c=Y();try{H.get(a)(b)}catch(d){P(c);if(d!==d+0&&"longjmp"!==d)throw d;Z(1,0)}}function Bc(a,b,c,d,f){var g=Y();try{H.get(a)(b,c,d,f)}catch(h){P(g);if(h!==h+0&&"longjmp"!==h)throw h;Z(1,0)}}function Ac(a,b,c){var d=Y();try{H.get(a)(b,c)}catch(f){P(d);if(f!==f+0&&"longjmp"!==f)throw f;Z(1,0)}}function yc(a,b,c,d,f,g,h,k,m,q){var p=Y();try{return H.get(a)(b,c,d,f,g,h,k,m,q)}catch(v){P(p);if(v!==v+0&&"longjmp"!==v)throw v;Z(1,0)}}
function vc(a,b,c){var d=Y();try{return H.get(a)(b,c)}catch(f){P(d);if(f!==f+0&&"longjmp"!==f)throw f;Z(1,0)}}function wc(a,b,c,d,f){var g=Y();try{return H.get(a)(b,c,d,f)}catch(h){P(g);if(h!==h+0&&"longjmp"!==h)throw h;Z(1,0)}}function uc(a,b){var c=Y();try{return H.get(a)(b)}catch(d){P(c);if(d!==d+0&&"longjmp"!==d)throw d;Z(1,0)}}function xc(a,b,c,d,f,g,h,k,m){var q=Y();try{return H.get(a)(b,c,d,f,g,h,k,m)}catch(p){P(q);if(p!==p+0&&"longjmp"!==p)throw p;Z(1,0)}}z.PThread=M;z.PThread=M;
z._pthread_self=oc;z.wasmMemory=e;z.ExitStatus=Fc;var Gc;function Fc(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Qa=function Hc(){Gc||Ic();Gc||(Qa=Hc)};
function Ic(){function a(){if(!Gc&&(Gc=!0,z.calledRun=!0,!ya)){Wa(La);B||Wa(Ma);oa(z);if(z.onRuntimeInitialized)z.onRuntimeInitialized();if(!B){if(z.postRun)for("function"==typeof z.postRun&&(z.postRun=[z.postRun]);z.postRun.length;){var b=z.postRun.shift();Na.unshift(b)}Wa(Na)}}}if(!(0<I)){if(!B){if(z.preRun)for("function"==typeof z.preRun&&(z.preRun=[z.preRun]);z.preRun.length;)Oa();Wa(Ka)}0<I||(z.setStatus?(z.setStatus("Running..."),setTimeout(function(){setTimeout(function(){z.setStatus("")},
1);a()},1)):a())}}z.run=Ic;if(z.preInit)for("function"==typeof z.preInit&&(z.preInit=[z.preInit]);0<z.preInit.length;)z.preInit.pop()();B||(noExitRuntime=!0);B?M.Nb():Ic();


  return avif_enc_mt.ready
}
);
})();
export default avif_enc_mt;