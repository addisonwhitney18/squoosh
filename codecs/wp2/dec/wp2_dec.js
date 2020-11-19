var wp2_dec = (function () {
  var _scriptDir = import.meta.url;

  return function (wp2_dec) {
    wp2_dec = wp2_dec || {};

    var e;
    e || (e = typeof wp2_dec !== 'undefined' ? wp2_dec : {});
    var aa, ba;
    e.ready = new Promise(function (a, b) {
      aa = a;
      ba = b;
    });
    var r = {},
      t;
    for (t in e) e.hasOwnProperty(t) && (r[t] = e[t]);
    var u = '',
      ca;
    u = self.location.href;
    _scriptDir && (u = _scriptDir);
    0 !== u.indexOf('blob:')
      ? (u = u.substr(0, u.lastIndexOf('/') + 1))
      : (u = '');
    ca = function (a) {
      var b = new XMLHttpRequest();
      b.open('GET', a, !1);
      b.responseType = 'arraybuffer';
      b.send(null);
      return new Uint8Array(b.response);
    };
    var da = e.print || console.log.bind(console),
      v = e.printErr || console.warn.bind(console);
    for (t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
    r = null;
    var w;
    e.wasmBinary && (w = e.wasmBinary);
    var noExitRuntime;
    e.noExitRuntime && (noExitRuntime = e.noExitRuntime);
    'object' !== typeof WebAssembly && y('no native wasm support detected');
    var z,
      ea = !1,
      fa = new TextDecoder('utf8');
    function ha(a, b, c) {
      var d = A;
      if (0 < c) {
        c = b + c - 1;
        for (var f = 0; f < a.length; ++f) {
          var g = a.charCodeAt(f);
          if (55296 <= g && 57343 >= g) {
            var l = a.charCodeAt(++f);
            g = (65536 + ((g & 1023) << 10)) | (l & 1023);
          }
          if (127 >= g) {
            if (b >= c) break;
            d[b++] = g;
          } else {
            if (2047 >= g) {
              if (b + 1 >= c) break;
              d[b++] = 192 | (g >> 6);
            } else {
              if (65535 >= g) {
                if (b + 2 >= c) break;
                d[b++] = 224 | (g >> 12);
              } else {
                if (b + 3 >= c) break;
                d[b++] = 240 | (g >> 18);
                d[b++] = 128 | ((g >> 12) & 63);
              }
              d[b++] = 128 | ((g >> 6) & 63);
            }
            d[b++] = 128 | (g & 63);
          }
        }
        d[b] = 0;
      }
    }
    var ia = new TextDecoder('utf-16le');
    function ja(a, b) {
      var c = a >> 1;
      for (b = c + b / 2; !(c >= b) && B[c]; ) ++c;
      return ia.decode(A.subarray(a, c << 1));
    }
    function ka(a, b, c) {
      void 0 === c && (c = 2147483647);
      if (2 > c) return 0;
      c -= 2;
      var d = b;
      c = c < 2 * a.length ? c / 2 : a.length;
      for (var f = 0; f < c; ++f) (D[b >> 1] = a.charCodeAt(f)), (b += 2);
      D[b >> 1] = 0;
      return b - d;
    }
    function la(a) {
      return 2 * a.length;
    }
    function ma(a, b) {
      for (var c = 0, d = ''; !(c >= b / 4); ) {
        var f = E[(a + 4 * c) >> 2];
        if (0 == f) break;
        ++c;
        65536 <= f
          ? ((f -= 65536),
            (d += String.fromCharCode(55296 | (f >> 10), 56320 | (f & 1023))))
          : (d += String.fromCharCode(f));
      }
      return d;
    }
    function na(a, b, c) {
      void 0 === c && (c = 2147483647);
      if (4 > c) return 0;
      var d = b;
      c = d + c - 4;
      for (var f = 0; f < a.length; ++f) {
        var g = a.charCodeAt(f);
        if (55296 <= g && 57343 >= g) {
          var l = a.charCodeAt(++f);
          g = (65536 + ((g & 1023) << 10)) | (l & 1023);
        }
        E[b >> 2] = g;
        b += 4;
        if (b + 4 > c) break;
      }
      E[b >> 2] = 0;
      return b - d;
    }
    function oa(a) {
      for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && ++c;
        b += 4;
      }
      return b;
    }
    var F, G, A, D, B, E, H, pa, qa;
    function ra(a) {
      F = a;
      e.HEAP8 = G = new Int8Array(a);
      e.HEAP16 = D = new Int16Array(a);
      e.HEAP32 = E = new Int32Array(a);
      e.HEAPU8 = A = new Uint8Array(a);
      e.HEAPU16 = B = new Uint16Array(a);
      e.HEAPU32 = H = new Uint32Array(a);
      e.HEAPF32 = pa = new Float32Array(a);
      e.HEAPF64 = qa = new Float64Array(a);
    }
    var sa = e.INITIAL_MEMORY || 16777216;
    e.wasmMemory
      ? (z = e.wasmMemory)
      : (z = new WebAssembly.Memory({ initial: sa / 65536, maximum: 32768 }));
    z && (F = z.buffer);
    sa = F.byteLength;
    ra(F);
    var J,
      ta = [],
      ua = [],
      va = [],
      wa = [];
    function xa() {
      var a = e.preRun.shift();
      ta.unshift(a);
    }
    var K = 0,
      ya = null,
      L = null;
    e.preloadedImages = {};
    e.preloadedAudios = {};
    function y(a) {
      if (e.onAbort) e.onAbort(a);
      v(a);
      ea = !0;
      a = new WebAssembly.RuntimeError(
        'abort(' + a + '). Build with -s ASSERTIONS=1 for more info.',
      );
      ba(a);
      throw a;
    }
    function za() {
      var a = N;
      return String.prototype.startsWith
        ? a.startsWith('data:application/octet-stream;base64,')
        : 0 === a.indexOf('data:application/octet-stream;base64,');
    }
    var N = 'wp2_dec.wasm';
    if (!za()) {
      var Aa = N;
      N = e.locateFile ? e.locateFile(Aa, u) : u + Aa;
    }
    function Ba() {
      try {
        if (w) return new Uint8Array(w);
        if (ca) return ca(N);
        throw 'both async and sync fetching of the wasm failed';
      } catch (a) {
        y(a);
      }
    }
    function Ca() {
      return w || 'function' !== typeof fetch
        ? Promise.resolve().then(Ba)
        : fetch(N, { credentials: 'same-origin' })
            .then(function (a) {
              if (!a.ok) throw "failed to load wasm binary file at '" + N + "'";
              return a.arrayBuffer();
            })
            .catch(function () {
              return Ba();
            });
    }
    function O(a) {
      for (; 0 < a.length; ) {
        var b = a.shift();
        if ('function' == typeof b) b(e);
        else {
          var c = b.P;
          'number' === typeof c
            ? void 0 === b.L
              ? J.get(c)()
              : J.get(c)(b.L)
            : c(void 0 === b.L ? null : b.L);
        }
      }
    }
    function Da(a) {
      this.K = a - 16;
      this.X = function (b) {
        E[(this.K + 8) >> 2] = b;
      };
      this.U = function (b) {
        E[(this.K + 0) >> 2] = b;
      };
      this.V = function () {
        E[(this.K + 4) >> 2] = 0;
      };
      this.T = function () {
        G[(this.K + 12) >> 0] = 0;
      };
      this.W = function () {
        G[(this.K + 13) >> 0] = 0;
      };
      this.S = function (b, c) {
        this.X(b);
        this.U(c);
        this.V();
        this.T();
        this.W();
      };
    }
    function P() {
      return 0 < P.N;
    }
    function Ea(a) {
      switch (a) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError('Unknown type size: ' + a);
      }
    }
    var Fa = void 0;
    function Q(a) {
      for (var b = ''; A[a]; ) b += Fa[A[a++]];
      return b;
    }
    var R = {},
      S = {},
      T = {};
    function Ga(a) {
      if (void 0 === a) return '_unknown';
      a = a.replace(/[^a-zA-Z0-9_]/g, '$');
      var b = a.charCodeAt(0);
      return 48 <= b && 57 >= b ? '_' + a : a;
    }
    function Ha(a, b) {
      a = Ga(a);
      return new Function(
        'body',
        'return function ' +
          a +
          '() {\n    "use strict";    return body.apply(this, arguments);\n};\n',
      )(b);
    }
    function Ia(a) {
      var b = Error,
        c = Ha(a, function (d) {
          this.name = a;
          this.message = d;
          d = Error(d).stack;
          void 0 !== d &&
            (this.stack =
              this.toString() + '\n' + d.replace(/^Error(:[^\n]*)?\n/, ''));
        });
      c.prototype = Object.create(b.prototype);
      c.prototype.constructor = c;
      c.prototype.toString = function () {
        return void 0 === this.message
          ? this.name
          : this.name + ': ' + this.message;
      };
      return c;
    }
    var Ja = void 0;
    function U(a) {
      throw new Ja(a);
    }
    var Ka = void 0;
    function La(a, b) {
      function c(h) {
        h = b(h);
        if (h.length !== d.length)
          throw new Ka('Mismatched type converter count');
        for (var p = 0; p < d.length; ++p) V(d[p], h[p]);
      }
      var d = [];
      d.forEach(function (h) {
        T[h] = a;
      });
      var f = Array(a.length),
        g = [],
        l = 0;
      a.forEach(function (h, p) {
        S.hasOwnProperty(h)
          ? (f[p] = S[h])
          : (g.push(h),
            R.hasOwnProperty(h) || (R[h] = []),
            R[h].push(function () {
              f[p] = S[h];
              ++l;
              l === g.length && c(f);
            }));
      });
      0 === g.length && c(f);
    }
    function V(a, b, c) {
      c = c || {};
      if (!('argPackAdvance' in b))
        throw new TypeError(
          'registerType registeredInstance requires argPackAdvance',
        );
      var d = b.name;
      a || U('type "' + d + '" must have a positive integer typeid pointer');
      if (S.hasOwnProperty(a)) {
        if (c.R) return;
        U("Cannot register type '" + d + "' twice");
      }
      S[a] = b;
      delete T[a];
      R.hasOwnProperty(a) &&
        ((b = R[a]),
        delete R[a],
        b.forEach(function (f) {
          f();
        }));
    }
    var Oa = [],
      W = [
        {},
        { value: void 0 },
        { value: null },
        { value: !0 },
        { value: !1 },
      ];
    function Pa(a) {
      4 < a && 0 === --W[a].M && ((W[a] = void 0), Oa.push(a));
    }
    function X(a) {
      switch (a) {
        case void 0:
          return 1;
        case null:
          return 2;
        case !0:
          return 3;
        case !1:
          return 4;
        default:
          var b = Oa.length ? Oa.pop() : W.length;
          W[b] = { M: 1, value: a };
          return b;
      }
    }
    function Qa(a) {
      return this.fromWireType(H[a >> 2]);
    }
    function Ra(a) {
      if (null === a) return 'null';
      var b = typeof a;
      return 'object' === b || 'array' === b || 'function' === b
        ? a.toString()
        : '' + a;
    }
    function Sa(a, b) {
      switch (b) {
        case 2:
          return function (c) {
            return this.fromWireType(pa[c >> 2]);
          };
        case 3:
          return function (c) {
            return this.fromWireType(qa[c >> 3]);
          };
        default:
          throw new TypeError('Unknown float type: ' + a);
      }
    }
    function Ta(a) {
      var b = Function;
      if (!(b instanceof Function))
        throw new TypeError(
          'new_ called with constructor type ' +
            typeof b +
            ' which is not a function',
        );
      var c = Ha(b.name || 'unknownFunctionName', function () {});
      c.prototype = b.prototype;
      c = new c();
      a = b.apply(c, a);
      return a instanceof Object ? a : c;
    }
    function Ua(a) {
      for (; a.length; ) {
        var b = a.pop();
        a.pop()(b);
      }
    }
    function Va(a, b) {
      var c = e;
      if (void 0 === c[a].I) {
        var d = c[a];
        c[a] = function () {
          c[a].I.hasOwnProperty(arguments.length) ||
            U(
              "Function '" +
                b +
                "' called with an invalid number of arguments (" +
                arguments.length +
                ') - expects one of (' +
                c[a].I +
                ')!',
            );
          return c[a].I[arguments.length].apply(this, arguments);
        };
        c[a].I = [];
        c[a].I[d.O] = d;
      }
    }
    function Wa(a, b, c) {
      e.hasOwnProperty(a)
        ? ((void 0 === c || (void 0 !== e[a].I && void 0 !== e[a].I[c])) &&
            U("Cannot register public name '" + a + "' twice"),
          Va(a, a),
          e.hasOwnProperty(c) &&
            U(
              'Cannot register multiple overloads of a function with the same number of arguments (' +
                c +
                ')!',
            ),
          (e[a].I[c] = b))
        : ((e[a] = b), void 0 !== c && (e[a].Z = c));
    }
    function Xa(a, b) {
      for (var c = [], d = 0; d < a; d++) c.push(E[(b >> 2) + d]);
      return c;
    }
    function Ya(a, b) {
      0 <= a.indexOf('j') ||
        y('Assertion failed: getDynCaller should only be called with i64 sigs');
      var c = [];
      return function () {
        c.length = arguments.length;
        for (var d = 0; d < arguments.length; d++) c[d] = arguments[d];
        var f;
        -1 != a.indexOf('j')
          ? (f =
              c && c.length
                ? e['dynCall_' + a].apply(null, [b].concat(c))
                : e['dynCall_' + a].call(null, b))
          : (f = J.get(b).apply(null, c));
        return f;
      };
    }
    function Za(a, b) {
      a = Q(a);
      var c = -1 != a.indexOf('j') ? Ya(a, b) : J.get(b);
      'function' !== typeof c &&
        U('unknown function pointer with signature ' + a + ': ' + b);
      return c;
    }
    var $a = void 0;
    function ab(a) {
      a = bb(a);
      var b = Q(a);
      Y(a);
      return b;
    }
    function cb(a, b) {
      function c(g) {
        f[g] || S[g] || (T[g] ? T[g].forEach(c) : (d.push(g), (f[g] = !0)));
      }
      var d = [],
        f = {};
      b.forEach(c);
      throw new $a(a + ': ' + d.map(ab).join([', ']));
    }
    function db(a, b, c) {
      switch (b) {
        case 0:
          return c
            ? function (d) {
                return G[d];
              }
            : function (d) {
                return A[d];
              };
        case 1:
          return c
            ? function (d) {
                return D[d >> 1];
              }
            : function (d) {
                return B[d >> 1];
              };
        case 2:
          return c
            ? function (d) {
                return E[d >> 2];
              }
            : function (d) {
                return H[d >> 2];
              };
        default:
          throw new TypeError('Unknown integer type: ' + a);
      }
    }
    var eb = {};
    function fb() {
      return 'object' === typeof globalThis
        ? globalThis
        : Function('return this')();
    }
    function gb(a, b) {
      var c = S[a];
      void 0 === c && U(b + ' has unknown type ' + ab(a));
      return c;
    }
    for (var hb = {}, ib = [null, [], []], jb = Array(256), Z = 0; 256 > Z; ++Z)
      jb[Z] = String.fromCharCode(Z);
    Fa = jb;
    Ja = e.BindingError = Ia('BindingError');
    Ka = e.InternalError = Ia('InternalError');
    e.count_emval_handles = function () {
      for (var a = 0, b = 5; b < W.length; ++b) void 0 !== W[b] && ++a;
      return a;
    };
    e.get_first_emval = function () {
      for (var a = 5; a < W.length; ++a) if (void 0 !== W[a]) return W[a];
      return null;
    };
    $a = e.UnboundTypeError = Ia('UnboundTypeError');
    ua.push({
      P: function () {
        kb();
      },
    });
    var mb = {
      s: function (a) {
        return lb(a + 16) + 16;
      },
      g: function () {},
      r: function (a, b, c) {
        new Da(a).S(b, c);
        'uncaught_exception' in P ? P.N++ : (P.N = 1);
        throw a;
      },
      x: function (a, b, c, d, f) {
        var g = Ea(c);
        b = Q(b);
        V(a, {
          name: b,
          fromWireType: function (l) {
            return !!l;
          },
          toWireType: function (l, h) {
            return h ? d : f;
          },
          argPackAdvance: 8,
          readValueFromPointer: function (l) {
            if (1 === c) var h = G;
            else if (2 === c) h = D;
            else if (4 === c) h = E;
            else throw new TypeError('Unknown boolean type size: ' + b);
            return this.fromWireType(h[l >> g]);
          },
          J: null,
        });
      },
      w: function (a, b) {
        b = Q(b);
        V(a, {
          name: b,
          fromWireType: function (c) {
            var d = W[c].value;
            Pa(c);
            return d;
          },
          toWireType: function (c, d) {
            return X(d);
          },
          argPackAdvance: 8,
          readValueFromPointer: Qa,
          J: null,
        });
      },
      m: function (a, b, c) {
        c = Ea(c);
        b = Q(b);
        V(a, {
          name: b,
          fromWireType: function (d) {
            return d;
          },
          toWireType: function (d, f) {
            if ('number' !== typeof f && 'boolean' !== typeof f)
              throw new TypeError(
                'Cannot convert "' + Ra(f) + '" to ' + this.name,
              );
            return f;
          },
          argPackAdvance: 8,
          readValueFromPointer: Sa(b, c),
          J: null,
        });
      },
      t: function (a, b, c, d, f, g) {
        var l = Xa(b, c);
        a = Q(a);
        f = Za(d, f);
        Wa(
          a,
          function () {
            cb('Cannot call ' + a + ' due to unbound types', l);
          },
          b - 1,
        );
        La(l, function (h) {
          var p = a,
            k = a;
          h = [h[0], null].concat(h.slice(1));
          var m = f,
            q = h.length;
          2 > q &&
            U(
              "argTypes array size mismatch! Must at least get return value and 'this' types!",
            );
          for (var x = null !== h[1] && !1, C = !1, n = 1; n < h.length; ++n)
            if (null !== h[n] && void 0 === h[n].J) {
              C = !0;
              break;
            }
          var Ma = 'void' !== h[0].name,
            I = '',
            M = '';
          for (n = 0; n < q - 2; ++n)
            (I += (0 !== n ? ', ' : '') + 'arg' + n),
              (M += (0 !== n ? ', ' : '') + 'arg' + n + 'Wired');
          k =
            'return function ' +
            Ga(k) +
            '(' +
            I +
            ') {\nif (arguments.length !== ' +
            (q - 2) +
            ") {\nthrowBindingError('function " +
            k +
            " called with ' + arguments.length + ' arguments, expected " +
            (q - 2) +
            " args!');\n}\n";
          C && (k += 'var destructors = [];\n');
          var Na = C ? 'destructors' : 'null';
          I = 'throwBindingError invoker fn runDestructors retType classParam'.split(
            ' ',
          );
          m = [U, m, g, Ua, h[0], h[1]];
          x &&
            (k += 'var thisWired = classParam.toWireType(' + Na + ', this);\n');
          for (n = 0; n < q - 2; ++n)
            (k +=
              'var arg' +
              n +
              'Wired = argType' +
              n +
              '.toWireType(' +
              Na +
              ', arg' +
              n +
              '); // ' +
              h[n + 2].name +
              '\n'),
              I.push('argType' + n),
              m.push(h[n + 2]);
          x && (M = 'thisWired' + (0 < M.length ? ', ' : '') + M);
          k +=
            (Ma ? 'var rv = ' : '') +
            'invoker(fn' +
            (0 < M.length ? ', ' : '') +
            M +
            ');\n';
          if (C) k += 'runDestructors(destructors);\n';
          else
            for (n = x ? 1 : 2; n < h.length; ++n)
              (q = 1 === n ? 'thisWired' : 'arg' + (n - 2) + 'Wired'),
                null !== h[n].J &&
                  ((k += q + '_dtor(' + q + '); // ' + h[n].name + '\n'),
                  I.push(q + '_dtor'),
                  m.push(h[n].J));
          Ma && (k += 'var ret = retType.fromWireType(rv);\nreturn ret;\n');
          I.push(k + '}\n');
          h = Ta(I).apply(null, m);
          n = b - 1;
          if (!e.hasOwnProperty(p))
            throw new Ka('Replacing nonexistant public symbol');
          void 0 !== e[p].I && void 0 !== n
            ? (e[p].I[n] = h)
            : ((e[p] = h), (e[p].O = n));
          return [];
        });
      },
      c: function (a, b, c, d, f) {
        function g(k) {
          return k;
        }
        b = Q(b);
        -1 === f && (f = 4294967295);
        var l = Ea(c);
        if (0 === d) {
          var h = 32 - 8 * c;
          g = function (k) {
            return (k << h) >>> h;
          };
        }
        var p = -1 != b.indexOf('unsigned');
        V(a, {
          name: b,
          fromWireType: g,
          toWireType: function (k, m) {
            if ('number' !== typeof m && 'boolean' !== typeof m)
              throw new TypeError(
                'Cannot convert "' + Ra(m) + '" to ' + this.name,
              );
            if (m < d || m > f)
              throw new TypeError(
                'Passing a number "' +
                  Ra(m) +
                  '" from JS side to C/C++ side to an argument of type "' +
                  b +
                  '", which is outside the valid range [' +
                  d +
                  ', ' +
                  f +
                  ']!',
              );
            return p ? m >>> 0 : m | 0;
          },
          argPackAdvance: 8,
          readValueFromPointer: db(b, l, 0 !== d),
          J: null,
        });
      },
      b: function (a, b, c) {
        function d(g) {
          g >>= 2;
          var l = H;
          return new f(F, l[g + 1], l[g]);
        }
        var f = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
        ][b];
        c = Q(c);
        V(
          a,
          {
            name: c,
            fromWireType: d,
            argPackAdvance: 8,
            readValueFromPointer: d,
          },
          { R: !0 },
        );
      },
      n: function (a, b) {
        b = Q(b);
        var c = 'std::string' === b;
        V(a, {
          name: b,
          fromWireType: function (d) {
            var f = H[d >> 2];
            if (c)
              for (var g = d + 4, l = 0; l <= f; ++l) {
                var h = d + 4 + l;
                if (l == f || 0 == A[h]) {
                  if (g) {
                    for (var p = g + (h - g), k = g; !(k >= p) && A[k]; ) ++k;
                    g = fa.decode(A.subarray(g, k));
                  } else g = '';
                  if (void 0 === m) var m = g;
                  else (m += String.fromCharCode(0)), (m += g);
                  g = h + 1;
                }
              }
            else {
              m = Array(f);
              for (l = 0; l < f; ++l) m[l] = String.fromCharCode(A[d + 4 + l]);
              m = m.join('');
            }
            Y(d);
            return m;
          },
          toWireType: function (d, f) {
            f instanceof ArrayBuffer && (f = new Uint8Array(f));
            var g = 'string' === typeof f;
            g ||
              f instanceof Uint8Array ||
              f instanceof Uint8ClampedArray ||
              f instanceof Int8Array ||
              U('Cannot pass non-string to std::string');
            var l = (c && g
                ? function () {
                    for (var k = 0, m = 0; m < f.length; ++m) {
                      var q = f.charCodeAt(m);
                      55296 <= q &&
                        57343 >= q &&
                        (q =
                          (65536 + ((q & 1023) << 10)) |
                          (f.charCodeAt(++m) & 1023));
                      127 >= q
                        ? ++k
                        : (k = 2047 >= q ? k + 2 : 65535 >= q ? k + 3 : k + 4);
                    }
                    return k;
                  }
                : function () {
                    return f.length;
                  })(),
              h = lb(4 + l + 1);
            H[h >> 2] = l;
            if (c && g) ha(f, h + 4, l + 1);
            else if (g)
              for (g = 0; g < l; ++g) {
                var p = f.charCodeAt(g);
                255 < p &&
                  (Y(h),
                  U('String has UTF-16 code units that do not fit in 8 bits'));
                A[h + 4 + g] = p;
              }
            else for (g = 0; g < l; ++g) A[h + 4 + g] = f[g];
            null !== d && d.push(Y, h);
            return h;
          },
          argPackAdvance: 8,
          readValueFromPointer: Qa,
          J: function (d) {
            Y(d);
          },
        });
      },
      h: function (a, b, c) {
        c = Q(c);
        if (2 === b) {
          var d = ja;
          var f = ka;
          var g = la;
          var l = function () {
            return B;
          };
          var h = 1;
        } else
          4 === b &&
            ((d = ma),
            (f = na),
            (g = oa),
            (l = function () {
              return H;
            }),
            (h = 2));
        V(a, {
          name: c,
          fromWireType: function (p) {
            for (var k = H[p >> 2], m = l(), q, x = p + 4, C = 0; C <= k; ++C) {
              var n = p + 4 + C * b;
              if (C == k || 0 == m[n >> h])
                (x = d(x, n - x)),
                  void 0 === q
                    ? (q = x)
                    : ((q += String.fromCharCode(0)), (q += x)),
                  (x = n + b);
            }
            Y(p);
            return q;
          },
          toWireType: function (p, k) {
            'string' !== typeof k &&
              U('Cannot pass non-string to C++ string type ' + c);
            var m = g(k),
              q = lb(4 + m + b);
            H[q >> 2] = m >> h;
            f(k, q + 4, m + b);
            null !== p && p.push(Y, q);
            return q;
          },
          argPackAdvance: 8,
          readValueFromPointer: Qa,
          J: function (p) {
            Y(p);
          },
        });
      },
      y: function (a, b) {
        b = Q(b);
        V(a, {
          Y: !0,
          name: b,
          argPackAdvance: 0,
          fromWireType: function () {},
          toWireType: function () {},
        });
      },
      e: Pa,
      f: function (a) {
        if (0 === a) return X(fb());
        var b = eb[a];
        a = void 0 === b ? Q(a) : b;
        return X(fb()[a]);
      },
      i: function (a) {
        4 < a && (W[a].M += 1);
      },
      j: function (a, b, c, d) {
        a || U('Cannot use deleted val. handle = ' + a);
        a = W[a].value;
        var f = hb[b];
        if (!f) {
          f = '';
          for (var g = 0; g < b; ++g) f += (0 !== g ? ', ' : '') + 'arg' + g;
          var l =
            'return function emval_allocator_' +
            b +
            '(constructor, argTypes, args) {\n';
          for (g = 0; g < b; ++g)
            l +=
              'var argType' +
              g +
              " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " +
              g +
              '], "parameter ' +
              g +
              '");\nvar arg' +
              g +
              ' = argType' +
              g +
              '.readValueFromPointer(args);\nargs += argType' +
              g +
              "['argPackAdvance'];\n";
          f = new Function(
            'requireRegisteredType',
            'Module',
            '__emval_register',
            l +
              ('var obj = new constructor(' +
                f +
                ');\nreturn __emval_register(obj);\n}\n'),
          )(gb, e, X);
          hb[b] = f;
        }
        return f(a, c, d);
      },
      k: function () {
        y();
      },
      v: function (a, b, c) {
        A.copyWithin(a, b, b + c);
      },
      d: function (a) {
        a >>>= 0;
        var b = A.length;
        if (2147483648 < a) return !1;
        for (var c = 1; 4 >= c; c *= 2) {
          var d = b * (1 + 0.2 / c);
          d = Math.min(d, a + 100663296);
          d = Math.max(16777216, a, d);
          0 < d % 65536 && (d += 65536 - (d % 65536));
          a: {
            try {
              z.grow((Math.min(2147483648, d) - F.byteLength + 65535) >>> 16);
              ra(z.buffer);
              var f = 1;
              break a;
            } catch (g) {}
            f = void 0;
          }
          if (f) return !0;
        }
        return !1;
      },
      l: function (a, b, c, d) {
        for (var f = 0, g = 0; g < c; g++) {
          for (
            var l = E[(b + 8 * g) >> 2], h = E[(b + (8 * g + 4)) >> 2], p = 0;
            p < h;
            p++
          ) {
            var k = A[l + p],
              m = ib[a];
            if (0 === k || 10 === k) {
              for (k = 0; m[k] && !(NaN <= k); ) ++k;
              k = fa.decode(
                m.subarray ? m.subarray(0, k) : new Uint8Array(m.slice(0, k)),
              );
              (1 === a ? da : v)(k);
              m.length = 0;
            } else m.push(k);
          }
          f += h;
        }
        E[d >> 2] = f;
        return 0;
      },
      a: z,
      o: function () {
        return 0;
      },
      q: function () {
        return 0;
      },
      p: function () {},
      A: function () {
        return 6;
      },
      z: function () {},
      u: function () {},
    };
    (function () {
      function a(f) {
        e.asm = f.exports;
        J = e.asm.B;
        K--;
        e.monitorRunDependencies && e.monitorRunDependencies(K);
        0 == K &&
          (null !== ya && (clearInterval(ya), (ya = null)),
          L && ((f = L), (L = null), f()));
      }
      function b(f) {
        a(f.instance);
      }
      function c(f) {
        return Ca()
          .then(function (g) {
            return WebAssembly.instantiate(g, d);
          })
          .then(f, function (g) {
            v('failed to asynchronously prepare wasm: ' + g);
            y(g);
          });
      }
      var d = { a: mb };
      K++;
      e.monitorRunDependencies && e.monitorRunDependencies(K);
      if (e.instantiateWasm)
        try {
          return e.instantiateWasm(d, a);
        } catch (f) {
          return (
            v('Module.instantiateWasm callback failed with error: ' + f), !1
          );
        }
      (function () {
        return w ||
          'function' !== typeof WebAssembly.instantiateStreaming ||
          za() ||
          'function' !== typeof fetch
          ? c(b)
          : fetch(N, { credentials: 'same-origin' }).then(function (f) {
              return WebAssembly.instantiateStreaming(f, d).then(b, function (
                g,
              ) {
                v('wasm streaming compile failed: ' + g);
                v('falling back to ArrayBuffer instantiation');
                return c(b);
              });
            });
      })().catch(ba);
      return {};
    })();
    var kb = (e.___wasm_call_ctors = function () {
        return (kb = e.___wasm_call_ctors = e.asm.C).apply(null, arguments);
      }),
      lb = (e._malloc = function () {
        return (lb = e._malloc = e.asm.D).apply(null, arguments);
      }),
      Y = (e._free = function () {
        return (Y = e._free = e.asm.E).apply(null, arguments);
      }),
      bb = (e.___getTypeName = function () {
        return (bb = e.___getTypeName = e.asm.F).apply(null, arguments);
      });
    e.___embind_register_native_and_builtin_types = function () {
      return (e.___embind_register_native_and_builtin_types = e.asm.G).apply(
        null,
        arguments,
      );
    };
    e.dynCall_jiji = function () {
      return (e.dynCall_jiji = e.asm.H).apply(null, arguments);
    };
    var nb;
    L = function ob() {
      nb || pb();
      nb || (L = ob);
    };
    function pb() {
      function a() {
        if (!nb && ((nb = !0), (e.calledRun = !0), !ea)) {
          O(ua);
          O(va);
          aa(e);
          if (e.onRuntimeInitialized) e.onRuntimeInitialized();
          if (e.postRun)
            for (
              'function' == typeof e.postRun && (e.postRun = [e.postRun]);
              e.postRun.length;

            ) {
              var b = e.postRun.shift();
              wa.unshift(b);
            }
          O(wa);
        }
      }
      if (!(0 < K)) {
        if (e.preRun)
          for (
            'function' == typeof e.preRun && (e.preRun = [e.preRun]);
            e.preRun.length;

          )
            xa();
        O(ta);
        0 < K ||
          (e.setStatus
            ? (e.setStatus('Running...'),
              setTimeout(function () {
                setTimeout(function () {
                  e.setStatus('');
                }, 1);
                a();
              }, 1))
            : a());
      }
    }
    e.run = pb;
    if (e.preInit)
      for (
        'function' == typeof e.preInit && (e.preInit = [e.preInit]);
        0 < e.preInit.length;

      )
        e.preInit.pop()();
    noExitRuntime = !0;
    pb();

    return wp2_dec.ready;
  };
})();
export default wp2_dec;
