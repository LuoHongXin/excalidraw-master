! function (t) {
  var e = {};

  function r(n) {
    if (e[n]) return e[n].exports;
    var o = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
  }
  r.m = t, r.c = e, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  }, r.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var o in t) r.d(n, o, function (e) {
        return t[e]
      }.bind(null, o));
    return n
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return r.d(e, "a", e), e
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, r.p = "./", r(r.s = 2)
}([function (t, e, r) {
  t.exports = r(1)
}, function (t, e, r) {
  var n = function (t) {
    "use strict";
    var e, r = Object.prototype,
      n = r.hasOwnProperty,
      o = "function" === typeof Symbol ? Symbol : {},
      i = o.iterator || "@@iterator",
      a = o.asyncIterator || "@@asyncIterator",
      c = o.toStringTag || "@@toStringTag";

    function u(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e]
    }
    try {
      u({}, "")
    } catch (T) {
      u = function (t, e, r) {
        return t[e] = r
      }
    }

    function s(t, e, r, n) {
      var o = e && e.prototype instanceof v ? e : v,
        i = Object.create(o.prototype),
        a = new P(n || []);
      return i._invoke = function (t, e, r) {
        var n = l;
        return function (o, i) {
          if (n === p) throw new Error("Generator is already running");
          if (n === y) {
            if ("throw" === o) throw i;
            return N()
          }
          for (r.method = o, r.arg = i;;) {
            var a = r.delegate;
            if (a) {
              var c = k(a, r);
              if (c) {
                if (c === d) continue;
                return c
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if (n === l) throw n = y, r.arg;
              r.dispatchException(r.arg)
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = p;
            var u = f(t, e, r);
            if ("normal" === u.type) {
              if (n = r.done ? y : h, u.arg === d) continue;
              return {
                value: u.arg,
                done: r.done
              }
            }
            "throw" === u.type && (n = y, r.method = "throw", r.arg = u.arg)
          }
        }
      }(t, r, a), i
    }

    function f(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        }
      } catch (T) {
        return {
          type: "throw",
          arg: T
        }
      }
    }
    t.wrap = s;
    var l = "suspendedStart",
      h = "suspendedYield",
      p = "executing",
      y = "completed",
      d = {};

    function v() {}

    function g() {}

    function w() {}
    var m = {};
    u(m, i, (function () {
      return this
    }));
    var b = Object.getPrototypeOf,
      x = b && b(b(S([])));
    x && x !== r && n.call(x, i) && (m = x);
    var L = w.prototype = v.prototype = Object.create(m);

    function E(t) {
      ["next", "throw", "return"].forEach((function (e) {
        u(t, e, (function (t) {
          return this._invoke(e, t)
        }))
      }))
    }

    function _(t, e) {
      function r(o, i, a, c) {
        var u = f(t[o], t, i);
        if ("throw" !== u.type) {
          var s = u.arg,
            l = s.value;
          return l && "object" === typeof l && n.call(l, "__await") ? e.resolve(l.__await).then((function (t) {
            r("next", t, a, c)
          }), (function (t) {
            r("throw", t, a, c)
          })) : e.resolve(l).then((function (t) {
            s.value = t, a(s)
          }), (function (t) {
            return r("throw", t, a, c)
          }))
        }
        c(u.arg)
      }
      var o;
      this._invoke = function (t, n) {
        function i() {
          return new e((function (e, o) {
            r(t, n, e, o)
          }))
        }
        return o = o ? o.then(i, i) : i()
      }
    }

    function k(t, r) {
      var n = t.iterator[r.method];
      if (n === e) {
        if (r.delegate = null, "throw" === r.method) {
          if (t.iterator.return && (r.method = "return", r.arg = e, k(t, r), "throw" === r.method)) return d;
          r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
        }
        return d
      }
      var o = f(n, t.iterator, r.arg);
      if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, d;
      var i = o.arg;
      return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, d) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d)
    }

    function j(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
    }

    function O(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e
    }

    function P(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(j, this), this.reset(!0)
    }

    function S(t) {
      if (t) {
        var r = t[i];
        if (r) return r.call(t);
        if ("function" === typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            a = function r() {
              for (; ++o < t.length;)
                if (n.call(t, o)) return r.value = t[o], r.done = !1, r;
              return r.value = e, r.done = !0, r
            };
          return a.next = a
        }
      }
      return {
        next: N
      }
    }

    function N() {
      return {
        value: e,
        done: !0
      }
    }
    return g.prototype = w, u(L, "constructor", w), u(w, "constructor", g), g.displayName = u(w, c, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
      var e = "function" === typeof t && t.constructor;
      return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
    }, t.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, u(t, c, "GeneratorFunction")), t.prototype = Object.create(L), t
    }, t.awrap = function (t) {
      return {
        __await: t
      }
    }, E(_.prototype), u(_.prototype, a, (function () {
      return this
    })), t.AsyncIterator = _, t.async = function (e, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new _(s(e, r, n, o), i);
      return t.isGeneratorFunction(r) ? a : a.next().then((function (t) {
        return t.done ? t.value : a.next()
      }))
    }, E(L), u(L, c, "Generator"), u(L, i, (function () {
      return this
    })), u(L, "toString", (function () {
      return "[object Generator]"
    })), t.keys = function (t) {
      var e = [];
      for (var r in t) e.push(r);
      return e.reverse(),
        function r() {
          for (; e.length;) {
            var n = e.pop();
            if (n in t) return r.value = n, r.done = !1, r
          }
          return r.done = !0, r
        }
    }, t.values = S, P.prototype = {
      constructor: P,
      reset: function (t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(O), !t)
          for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval
      },
      dispatchException: function (t) {
        if (this.done) throw t;
        var r = this;

        function o(n, o) {
          return c.type = "throw", c.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var a = this.tryEntries[i],
            c = a.completion;
          if ("root" === a.tryLoc) return o("end");
          if (a.tryLoc <= this.prev) {
            var u = n.call(a, "catchLoc"),
              s = n.call(a, "finallyLoc");
            if (u && s) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return o(a.finallyLoc)
            } else if (u) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
            } else {
              if (!s) throw new Error("try statement without catch or finally");
              if (this.prev < a.finallyLoc) return o(a.finallyLoc)
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a)
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), d
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              O(r)
            }
            return o
          }
        }
        throw new Error("illegal catch attempt")
      },
      delegateYield: function (t, r, n) {
        return this.delegate = {
          iterator: S(t),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = e), d
      }
    }, t
  }(t.exports);
  try {
    regeneratorRuntime = n
  } catch (o) {
    "object" === typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
  }
}, function (t, e, r) {
  "use strict";
  r.r(e);
  var n = r(0),
    o = r.n(n);

  function i(t, e, r, n, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value
    } catch (s) {
      return void r(s)
    }
    c.done ? e(u) : Promise.resolve(u).then(n, o)
  }
  importScripts("/excalidraw-master/build/workbox/workbox-sw.js"), workbox.setConfig({
    modulePathPrefix: "/workbox/"
  }), self.addEventListener("message", (function (t) {
    t.data && "SKIP_WAITING" === t.data.type && self.skipWaiting()
  })), workbox.core.clientsClaim(), workbox.precaching.precacheAndRoute([{
    'revision': '369e43324ac2fd77cccd7fb9e2080a66',
    'url': './index.html'
  }, {
    'revision': null,
    'url': './static/css/main.4fd37e33.chunk.css'
  }, {
    'revision': null,
    'url': './static/js/0.bf9febb4.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/1.38fa5db6.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/47.d140f33a.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/48.c91405e9.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/49.fba70dc2.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/50.3fd7ef0a.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/51.e55a917e.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/52.30933269.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/53.f57d7776.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/54.9f009b6d.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/55.97489b95.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/56.fce9106f.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/57.755fd20b.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/58.0053dd24.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/59.a8efc97b.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/60.8385b3c7.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/bug-issue-template.cecf5a08.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/firebase.87ebc418.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-ar-SA-json.c7a50dcc.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-bg-BG-json.e889c15a.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-ca-ES-json.44501650.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-cs-CZ-json.edd08f36.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-da-DK-json.88cbf577.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-de-DE-json.66d773e2.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-el-GR-json.9ffb1ee4.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-es-ES-json.2e57418b.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-fa-IR-json.c4e6f145.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-fi-FI-json.21a72d4e.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-fr-FR-json.037e53db.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-he-IL-json.8cb9f92b.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-hi-IN-json.20525ffc.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-hu-HU-json.7597c367.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-id-ID-json.3ce3b44c.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-it-IT-json.28c4c364.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-ja-JP-json.31d4c4bc.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-kab-KAB-json.94527851.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-kk-KZ-json.217c4a92.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-ko-KR-json.edaa3541.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-lv-LV-json.d17cc4e7.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-my-MM-json.f125f60e.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-nb-NO-json.7de37715.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-nl-NL-json.40d1bd55.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-nn-NO-json.e3f600b4.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-oc-FR-json.4a01d96f.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-pa-IN-json.02198bd5.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-pl-PL-json.54d7cd5b.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-pt-BR-json.d9d298a2.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-pt-PT-json.e42e76a2.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-ro-RO-json.9161f3c7.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-ru-RU-json.11375089.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-sk-SK-json.b0f6a5d3.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-sv-SE-json.c04fd2f2.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-tr-TR-json.91dadbb1.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-uk-UA-json.330a3eec.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-zh-CN-json.71f297d2.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/i18n-zh-TW-json.7e02089b.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/image.6075fbfa.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/main.8062f074.chunk.js'
  }, {
    'revision': null,
    'url': './excalidraw-master/build/static/js/pwacompat.36f3b5f9.chunk.js'
  }, {
    'revision': null,
    'url': './static/js/runtime-main.528f2c38.js'
  }, {
    'revision': null,
    'url': './static/js/socketIoClient.43041662.chunk.js'
  }]), workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("./index.html"), {
    blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/]
  }), workbox.routing.registerRoute(new RegExp("/(fonts.css|.+.(ttf|woff2|otf))"), new workbox.strategies.StaleWhileRevalidate({
    cacheName: "fonts",
    plugins: [new workbox.expiration.Plugin({
      maxEntries: 10
    })]
  })), self.addEventListener("fetch", (function (t) {
    if ("POST" === t.request.method && t.request.url.endsWith("/web-share-target")) return t.respondWith((e = o.a.mark((function e() {
      var r, n, i;
      return o.a.wrap((function (e) {
        for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2, t.request.formData();
          case 2:
            return r = e.sent, n = r.get("file"), e.next = 6, caches.open("web-share-target");
          case 6:
            return i = e.sent, e.next = 9, i.put("shared-file", new Response(n));
          case 9:
            return e.abrupt("return", Response.redirect("/?web-share-target", 303));
          case 10:
          case "end":
            return e.stop()
        }
      }), e)
    })), function () {
      var t = this,
        r = arguments;
      return new Promise((function (n, o) {
        var a = e.apply(t, r);

        function c(t) {
          i(a, n, o, c, u, "next", t)
        }

        function u(t) {
          i(a, n, o, c, u, "throw", t)
        }
        c(void 0)
      }))
    })());
    var e
  }))
}]);
//# sourceMappingURL=service-worker.js.map
