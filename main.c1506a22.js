(this.ordle = this.ordle || {}),
  (this.ordle.bundle = (function (e) {
    "use strict";

    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
            return typeof e;
          }
          : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          })(e);
    }

    function s(e, a) {
      if (!(e instanceof a)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function t(e, a) {
      for (var s = 0; s < a.length; s++) {
        var t = a[s];
        (t.enumerable = t.enumerable || !1), (t.configurable = !0), "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
      }
    }

    function o(e, a, s) {
      return a && t(e.prototype, a), s && t(e, s), e;
    }

    function n(e, a, s) {
      return a in e ? Object.defineProperty(e, a, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : (e[a] = s), e;
    }

    function r(e, a) {
      if ("function" != typeof a && null !== a) {
        throw new TypeError("Super expression must either be null or a function");
      }
      (e.prototype = Object.create(a && a.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      })), a && l(e, a);
    }

    function i(e) {
      return (i = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }

    function l(e, a) {
      return (l =
        Object.setPrototypeOf ||
        function (e, a) {
          return (e.__proto__ = a), e;
        })(e, a);
    }

    function d() {
      if ("undefined" == typeof Reflect || !Reflect.construct) {
        return !1;
      }
      if (Reflect.construct.sham) {
        return !1;
      }
      if ("function" == typeof Proxy) {
        return !0;
      }
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
        })), !0;
      }
      catch (e) {
        return !1;
      }
    }

    function u(e, a, s) {
      return (u = d()
        ? Reflect.construct
        : function (e, a, s) {
          var t = [null];
          t.push.apply(t, a);
          var o = new (Function.bind.apply(e, t))();
          return s && l(o, s.prototype), o;
        }).apply(null, arguments);
    }

    function c(e) {
      var a = "function" == typeof Map ? new Map() : void 0;
      return (c = function (e) {
        if (null === e || ((s = e), -1 === Function.toString.call(s).indexOf("[native code]"))) {
          return e;
        }
        var s;
        if ("function" != typeof e) {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (void 0 !== a) {
          if (a.has(e)) {
            return a.get(e);
          }
          a.set(e, t);
        }

        function t() {
          return u(e, arguments, i(this).constructor);
        }

        return (t.prototype = Object.create(e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })), l(t, e);
      })(e);
    }

    function p(e) {
      if (void 0 === e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return e;
    }

    function m(e, a) {
      return !a || ("object" != typeof a && "function" != typeof a) ? p(e) : a;
    }

    function h(e) {
      var a = d();
      return function () {
        var s,
          t = i(e);
        if (a) {
          var o = i(this).constructor;
          s = Reflect.construct(t, arguments, o);
        }
        else {
          s = t.apply(this, arguments);
        }
        return m(this, s);
      };
    }

    function y(e, a) {
      return (
        (function (e) {
          if (Array.isArray(e)) {
            return e;
          }
        })(e) ||
        (function (e, a) {
          var s = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null == s) {
            return;
          }
          var t,
            o,
            n = [],
            r = !0,
            i = !1;
          try {
            for (s = s.call(e); !(r = (t = s.next()).done) && (n.push(t.value), !a || n.length !== a); r = !0) {
              ;
            }
          }
          catch (e) {
            (i = !0), (o = e);
          }
          finally {
            try {
              r || null == s.return || s.return();
            }
            finally {
              if (i) {
                throw o;
              }
            }
          }
          return n;
        })(e, a) ||
        b(e, a) ||
        (function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })()
      );
    }

    function g(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) {
            return f(e);
          }
        })(e) ||
        (function (e) {
          if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) {
            return Array.from(e);
          }
        })(e) ||
        b(e) ||
        (function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        })()
      );
    }

    function b(e, a) {
      if (e) {
        if ("string" == typeof e) {
          return f(e, a);
        }
        var s = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s ? Array.from(e) : "Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? f(e, a) : void 0;
      }
    }

    function f(e, a) {
      (null == a || a > e.length) && (a = e.length);
      for (var s = 0, t = new Array(a); s < a; s++) {
        t[s] = e[s];
      }
      return t;
    }

    var k = document.createElement("template");
    k.innerHTML =
      "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
    var v = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return s(this, t), n(p((e = a.call(this))), "_letter", ""), n(p(e), "_state", "empty"), n(p(e), "_animation", "idle"), n(p(e), "_last", !1), n(p(e), "_reveal", !1), e.attachShadow({mode: "open"}), e;
      }

      return (
        o(
          t,
          [
            {
              key: "last",
              set: function (e) {
                this._last = e;
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(k.content.cloneNode(!0)),
                  (this.$tile = this.shadowRoot.querySelector(".tile")),
                  this.$tile.addEventListener("animationend", function (a) {
                    "PopIn" === a.animationName && (e._animation = "idle"),
                    "FlipIn" === a.animationName && ((e.$tile.dataset.state = e._state), (e._animation = "flip-out")),
                    "FlipOut" === a.animationName && ((e._animation = "idle"), e._last && e.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                      bubbles: !0,
                      composed: !0
                    }))),
                      e._render();
                  }),
                  this._render();
              },
            },
            {
              key: "attributeChangedCallback",
              value: function (e, a, s) {
                switch (e) {
                  case "letter":
                    if (s === a) {
                      break;
                    }
                    var t = "null" === s ? "" : s;
                    (this._letter = t), (this._state = t ? "tbd" : "empty"), (this._animation = t ? "pop" : "idle");
                    break;
                  case "evaluation":
                    if (!s) {
                      break;
                    }
                    this._state = s;
                    break;
                  case "reveal":
                    (this._animation = "flip-in"), (this._reveal = !0);
                }
                this._render();
              },
            },
            {
              key: "_render",
              value: function () {
                this.$tile &&
                ((this.$tile.textContent = this._letter),
                ["empty", "tbd"].includes(this._state) && (this.$tile.dataset.state = this._state),
                (["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation && (this.$tile.dataset.animation = this._animation));
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return ["letter", "evaluation", "reveal"];
              },
            },
          ]
        ),
          t
      );
    })(c(HTMLElement));
    customElements.define("game-tile", v);
    var w = document.createElement("template");
    w.innerHTML =
      '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
    var x = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({mode: "open"}), (e._letters = ""), (e._evaluation = []), e._length, e;
      }

      return (
        o(
          t,
          [
            {
              key: "evaluation",
              get: function () {
                return this._evaluation;
              },
              set: function (e) {
                var a = this;
                (this._evaluation = e),
                this.$tiles &&
                this.$tiles.forEach(function (e, s) {
                  e.setAttribute("evaluation", a._evaluation[s]),
                    setTimeout(function () {
                      e.setAttribute("reveal", "");
                    }, 300 * s);
                });
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(w.content.cloneNode(!0)), (this.$row = this.shadowRoot.querySelector(".row"));
                for (
                  var a = function (a) {
                      var s = document.createElement("game-tile"),
                        t = e._letters[a];
                      (t && s.setAttribute("letter", t), e._evaluation[a]) &&
                      (s.setAttribute("evaluation", e._evaluation[a]),
                        setTimeout(function () {
                          s.setAttribute("reveal", "");
                        }, 100 * a));
                      a === e._length - 1 && (s.last = !0), e.$row.appendChild(s);
                    },
                    s = 0;
                  s < this._length;
                  s++
                ) {
                  a(s);
                }
                (this.$tiles = this.shadowRoot.querySelectorAll("game-tile")),
                  this.addEventListener("animationend", function (a) {
                    "Shake" === a.animationName && e.removeAttribute("invalid");
                  });
              },
            },
            {
              key: "attributeChangedCallback",
              value: function (e, a, s) {
                switch (e) {
                  case "letters":
                    this._letters = s || "";
                    break;
                  case "length":
                    this._length = parseInt(s, 10);
                    break;
                  case "win":
                    if (null === s) {
                      this.$tiles.forEach(function (e) {
                        e.classList.remove("win");
                      });
                      break;
                    }
                    this.$tiles.forEach(function (e, a) {
                      e.classList.add("win"), (e.style.animationDelay = "".concat(100 * a, "ms"));
                    });
                }
                this._render();
              },
            },
            {
              key: "_render",
              value: function () {
                var e = this;
                this.$row &&
                this.$tiles.forEach(function (a, s) {
                  var t = e._letters[s];
                  t ? a.setAttribute("letter", t) : a.removeAttribute("letter");
                });
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return ["letters", "length", "invalid", "win"];
              },
            },
          ]
        ),
          t
      );
    })(c(HTMLElement));
    customElements.define("game-row", x);
    var z = document.createElement("template");
    z.innerHTML = "\n  <slot></slot>\n";
    var j = "darkTheme",
      S = "colorBlindTheme",
      _ = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          s(this, t), n(p((e = a.call(this))), "isDarkTheme", !1), n(p(e), "isColorBlindTheme", !1), e.attachShadow({mode: "open"});
          var o = JSON.parse(window.localStorage.getItem(j)),
            r = window.matchMedia("(prefers-color-scheme: dark)").matches,
            i = JSON.parse(window.localStorage.getItem(S));
          return !0 === o || !1 === o ? e.setDarkTheme(o) : r && e.setDarkTheme(!0), (!0 !== i && !1 !== i) || e.setColorBlindTheme(i), e;
        }

        return (
          o(t, [
            {
              key: "setDarkTheme",
              value: function (e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("nightmode") ? a.classList.add("nightmode") : a.classList.remove("nightmode"), (this.isDarkTheme = e), window.localStorage.setItem(j, JSON.stringify(e));
              },
            },
            {
              key: "setColorBlindTheme",
              value: function (e) {
                var a = document.querySelector("body");
                e && !a.classList.contains("colorblind") ? a.classList.add("colorblind") : a.classList.remove("colorblind"), (this.isColorBlindTheme = e), window.localStorage.setItem(S, JSON.stringify(e));
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(z.content.cloneNode(!0)),
                  this.shadowRoot.addEventListener("game-setting-change", function (a) {
                    var s = a.detail,
                      t = s.name,
                      o = s.checked;
                    switch (t) {
                      case "dark-theme":
                        return void e.setDarkTheme(o);
                      case "color-blind-theme":
                        return void e.setColorBlindTheme(o);
                    }
                  });
              },
            },
          ]),
            t
        );
      })(c(HTMLElement));

    function q(e, a) {
      return e === a || (e != e && a != a);
    }

    function E(e, a) {
      for (var s = e.length; s--;) {
        if (q(e[s][0], a)) {
          return s;
        }
      }
      return -1;
    }

    customElements.define("game-theme-manager", _);
    var A = Array.prototype.splice;

    function C(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s;) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }

    (C.prototype.clear = function () {
      (this.__data__ = []), (this.size = 0);
    }),
      (C.prototype.delete = function (e) {
        var a = this.__data__,
          s = E(a, e);
        return !(s < 0) && (s == a.length - 1 ? a.pop() : A.call(a, s, 1), --this.size, !0);
      }),
      (C.prototype.get = function (e) {
        var a = this.__data__,
          s = E(a, e);
        return s < 0 ? void 0 : a[s][1];
      }),
      (C.prototype.has = function (e) {
        return E(this.__data__, e) > -1;
      }),
      (C.prototype.set = function (e, a) {
        var s = this.__data__,
          t = E(s, e);
        return t < 0 ? (++this.size, s.push([e, a])) : (s[t][1] = a), this;
      });
    var L = "object" == ("undefined" == typeof global ? "undefined" : a(global)) && global && global.Object === Object && global,
      T = "object" == ("undefined" == typeof self ? "undefined" : a(self)) && self && self.Object === Object && self,
      I = L || T || Function("return this")(),
      M = I.Symbol,
      O = Object.prototype,
      R = O.hasOwnProperty,
      $ = O.toString,
      P = M ? M.toStringTag : void 0;
    var H = Object.prototype.toString;
    var N = M ? M.toStringTag : void 0;

    function D(e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : N && N in Object(e)
          ? (function (e) {
            var a = R.call(e, P),
              s = e[P];
            try {
              e[P] = void 0;
              var t = !0;
            }
            catch (e) {
            }
            var o = $.call(e);
            return t && (a ? (e[P] = s) : delete e[P]), o;
          })(e)
          : (function (e) {
            return H.call(e);
          })(e);
    }

    function G(e) {
      var s = a(e);
      return null != e && ("object" == s || "function" == s);
    }

    function B(e) {
      if (!G(e)) {
        return !1;
      }
      var a = D(e);
      return "[object Function]" == a || "[object GeneratorFunction]" == a || "[object AsyncFunction]" == a || "[object Proxy]" == a;
    }

    var F,
      W = I["__core-js_shared__"],
      Y = (F = /[^.]+$/.exec((W && W.keys && W.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + F : "";
    var J = Function.prototype.toString;
    var U = /^\[object .+?Constructor\]$/,
      X = Function.prototype,
      V = Object.prototype,
      K = X.toString,
      Q = V.hasOwnProperty,
      Z = RegExp(
        "^" +
        K.call(Q)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$"
      );

    function ee(e) {
      return (
        !(!G(e) || ((a = e), Y && Y in a)) &&
        (B(e) ? Z : U).test(
          (function (e) {
            if (null != e) {
              try {
                return J.call(e);
              }
              catch (e) {
              }
              try {
                return e + "";
              }
              catch (e) {
              }
            }
            return "";
          })(e)
        )
      );
      var a;
    }

    function ae(e, a) {
      var s = (function (e, a) {
        return null == e ? void 0 : e[a];
      })(e, a);
      return ee(s) ? s : void 0;
    }

    var se = ae(I, "Map"),
      te = ae(Object, "create");
    var oe = Object.prototype.hasOwnProperty;
    var ne = Object.prototype.hasOwnProperty;

    function re(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s;) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }

    function ie(e, s) {
      var t,
        o,
        n = e.__data__;
      return ("string" == (o = a((t = s))) || "number" == o || "symbol" == o || "boolean" == o ? "__proto__" !== t : null === t) ? n["string" == typeof s ? "string" : "hash"] : n.map;
    }

    function le(e) {
      var a = -1,
        s = null == e ? 0 : e.length;
      for (this.clear(); ++a < s;) {
        var t = e[a];
        this.set(t[0], t[1]);
      }
    }

    (re.prototype.clear = function () {
      (this.__data__ = te ? te(null) : {}), (this.size = 0);
    }),
      (re.prototype.delete = function (e) {
        var a = this.has(e) && delete this.__data__[e];
        return (this.size -= a ? 1 : 0), a;
      }),
      (re.prototype.get = function (e) {
        var a = this.__data__;
        if (te) {
          var s = a[e];
          return "__lodash_hash_undefined__" === s ? void 0 : s;
        }
        return oe.call(a, e) ? a[e] : void 0;
      }),
      (re.prototype.has = function (e) {
        var a = this.__data__;
        return te ? void 0 !== a[e] : ne.call(a, e);
      }),
      (re.prototype.set = function (e, a) {
        var s = this.__data__;
        return (this.size += this.has(e) ? 0 : 1), (s[e] = te && void 0 === a ? "__lodash_hash_undefined__" : a), this;
      }),
      (le.prototype.clear = function () {
        (this.size = 0), (this.__data__ = {
          hash: new re(),
          map: new (se || C)(),
          string: new re()
        });
      }),
      (le.prototype.delete = function (e) {
        var a = ie(this, e).delete(e);
        return (this.size -= a ? 1 : 0), a;
      }),
      (le.prototype.get = function (e) {
        return ie(this, e).get(e);
      }),
      (le.prototype.has = function (e) {
        return ie(this, e).has(e);
      }),
      (le.prototype.set = function (e, a) {
        var s = ie(this, e),
          t = s.size;
        return s.set(e, a), (this.size += s.size == t ? 0 : 1), this;
      });

    function de(e) {
      var a = (this.__data__ = new C(e));
      this.size = a.size;
    }

    (de.prototype.clear = function () {
      (this.__data__ = new C()), (this.size = 0);
    }),
      (de.prototype.delete = function (e) {
        var a = this.__data__,
          s = a.delete(e);
        return (this.size = a.size), s;
      }),
      (de.prototype.get = function (e) {
        return this.__data__.get(e);
      }),
      (de.prototype.has = function (e) {
        return this.__data__.has(e);
      }),
      (de.prototype.set = function (e, a) {
        var s = this.__data__;
        if (s instanceof C) {
          var t = s.__data__;
          if (!se || t.length < 199) {
            return t.push([e, a]), (this.size = ++s.size), this;
          }
          s = this.__data__ = new le(t);
        }
        return s.set(e, a), (this.size = s.size), this;
      });
    var ue = (function () {
      try {
        var e = ae(Object, "defineProperty");
        return e({}, "", {}), e;
      }
      catch (e) {
      }
    })();

    function ce(e, a, s) {
      "__proto__" == a && ue ? ue(e, a, {
        configurable: !0,
        enumerable: !0,
        value: s,
        writable: !0
      }) : (e[a] = s);
    }

    function pe(e, a, s) {
      ((void 0 !== s && !q(e[a], s)) || (void 0 === s && !(a in e))) && ce(e, a, s);
    }

    var me,
      he = function (e, a, s) {
        for (var t = -1, o = Object(e), n = s(e), r = n.length; r--;) {
          var i = n[me ? r : ++t];
          if (!1 === a(o[i], i, o)) {
            break;
          }
        }
        return e;
      },
      ye = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
      ge = ye && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
      be = ge && ge.exports === ye ? I.Buffer : void 0,
      fe = be ? be.allocUnsafe : void 0;
    var ke = I.Uint8Array;

    function ve(e, a) {
      var s,
        t,
        o = a ? ((s = e.buffer), (t = new s.constructor(s.byteLength)), new ke(t).set(new ke(s)), t) : e.buffer;
      return new e.constructor(o, e.byteOffset, e.length);
    }

    var we = Object.create,
      xe = (function () {
        function e() {
        }

        return function (a) {
          if (!G(a)) {
            return {};
          }
          if (we) {
            return we(a);
          }
          e.prototype = a;
          var s = new e();
          return (e.prototype = void 0), s;
        };
      })();
    var ze,
      je,
      Se =
        ((ze = Object.getPrototypeOf),
          (je = Object),
          function (e) {
            return ze(je(e));
          }),
      _e = Object.prototype;

    function qe(e) {
      var a = e && e.constructor;
      return e === (("function" == typeof a && a.prototype) || _e);
    }

    function Ee(e) {
      return null != e && "object" == a(e);
    }

    function Ae(e) {
      return Ee(e) && "[object Arguments]" == D(e);
    }

    var Ce = Object.prototype,
      Le = Ce.hasOwnProperty,
      Te = Ce.propertyIsEnumerable,
      Ie = Ae(
        (function () {
          return arguments;
        })()
      )
        ? Ae
        : function (e) {
          return Ee(e) && Le.call(e, "callee") && !Te.call(e, "callee");
        },
      Me = Array.isArray;

    function Oe(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
    }

    function Re(e) {
      return null != e && Oe(e.length) && !B(e);
    }

    var $e = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
      Pe = $e && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
      He = Pe && Pe.exports === $e ? I.Buffer : void 0,
      Ne =
        (He ? He.isBuffer : void 0) ||
        function () {
          return !1;
        },
      De = Function.prototype,
      Ge = Object.prototype,
      Be = De.toString,
      Fe = Ge.hasOwnProperty,
      We = Be.call(Object);
    var Ye = {};
    (Ye["[object Float32Array]"] = Ye["[object Float64Array]"] = Ye["[object Int8Array]"] = Ye["[object Int16Array]"] = Ye["[object Int32Array]"] = Ye["[object Uint8Array]"] = Ye["[object Uint8ClampedArray]"] = Ye[
      "[object Uint16Array]"
      ] = Ye["[object Uint32Array]"] = !0),
      (Ye["[object Arguments]"] = Ye["[object Array]"] = Ye["[object ArrayBuffer]"] = Ye["[object Boolean]"] = Ye["[object DataView]"] = Ye["[object Date]"] = Ye["[object Error]"] = Ye["[object Function]"] = Ye["[object Map]"] = Ye[
        "[object Number]"
        ] = Ye["[object Object]"] = Ye["[object RegExp]"] = Ye["[object Set]"] = Ye["[object String]"] = Ye["[object WeakMap]"] = !1);
    var Je = "object" == (void 0 === e ? "undefined" : a(e)) && e && !e.nodeType && e,
      Ue = Je && "object" == ("undefined" == typeof module ? "undefined" : a(module)) && module && !module.nodeType && module,
      Xe = Ue && Ue.exports === Je && L.process,
      Ve = (function () {
        try {
          var e = Ue && Ue.require && Ue.require("util").types;
          return e || (Xe && Xe.binding && Xe.binding("util"));
        }
        catch (e) {
        }
      })(),
      Ke = Ve && Ve.isTypedArray,
      Qe = Ke
        ? (function (e) {
          return function (a) {
            return e(a);
          };
        })(Ke)
        : function (e) {
          return Ee(e) && Oe(e.length) && !!Ye[D(e)];
        };

    function Ze(e, a) {
      if (("constructor" !== a || "function" != typeof e[a]) && "__proto__" != a) {
        return e[a];
      }
    }

    var ea = Object.prototype.hasOwnProperty;

    function aa(e, a, s) {
      var t = e[a];
      (ea.call(e, a) && q(t, s) && (void 0 !== s || a in e)) || ce(e, a, s);
    }

    var sa = /^(?:0|[1-9]\d*)$/;

    function ta(e, s) {
      var t = a(e);
      return !!(s = null == s ? 9007199254740991 : s) && ("number" == t || ("symbol" != t && sa.test(e))) && e > -1 && e % 1 == 0 && e < s;
    }

    var oa = Object.prototype.hasOwnProperty;

    function na(e, a) {
      var s = Me(e),
        t = !s && Ie(e),
        o = !s && !t && Ne(e),
        n = !s && !t && !o && Qe(e),
        r = s || t || o || n,
        i = r
          ? (function (e, a) {
            for (var s = -1, t = Array(e); ++s < e;) {
              t[s] = a(s);
            }
            return t;
          })(e.length, String)
          : [],
        l = i.length;
      for (var d in e) {
        (!a && !oa.call(e, d)) || (r && ("length" == d || (o && ("offset" == d || "parent" == d)) || (n && ("buffer" == d || "byteLength" == d || "byteOffset" == d)) || ta(d, l))) || i.push(d);
      }
      return i;
    }

    var ra = Object.prototype.hasOwnProperty;

    function ia(e) {
      if (!G(e)) {
        return (function (e) {
          var a = [];
          if (null != e) {
            for (var s in Object(e)) {
              a.push(s);
            }
          }
          return a;
        })(e);
      }
      var a = qe(e),
        s = [];
      for (var t in e) {
        ("constructor" != t || (!a && ra.call(e, t))) && s.push(t);
      }
      return s;
    }

    function la(e) {
      return Re(e) ? na(e, !0) : ia(e);
    }

    function da(e) {
      return (function (e, a, s, t) {
        var o = !s;
        s || (s = {});
        for (var n = -1, r = a.length; ++n < r;) {
          var i = a[n],
            l = t ? t(s[i], e[i], i, s, e) : void 0;
          void 0 === l && (l = e[i]), o ? ce(s, i, l) : aa(s, i, l);
        }
        return s;
      })(e, la(e));
    }

    function ua(e, a, s, t, o, n, r) {
      var i = Ze(e, s),
        l = Ze(a, s),
        d = r.get(l);
      if (d) {
        pe(e, s, d);
      }
      else {
        var u,
          c = n ? n(i, l, s + "", e, a, r) : void 0,
          p = void 0 === c;
        if (p) {
          var m = Me(l),
            h = !m && Ne(l),
            y = !m && !h && Qe(l);
          (c = l),
            m || h || y
              ? Me(i)
                ? (c = i)
                : Ee((u = i)) && Re(u)
                  ? (c = (function (e, a) {
                    var s = -1,
                      t = e.length;
                    for (a || (a = Array(t)); ++s < t;) {
                      a[s] = e[s];
                    }
                    return a;
                  })(i))
                  : h
                    ? ((p = !1),
                      (c = (function (e, a) {
                        if (a) {
                          return e.slice();
                        }
                        var s = e.length,
                          t = fe ? fe(s) : new e.constructor(s);
                        return e.copy(t), t;
                      })(l, !0)))
                    : y
                      ? ((p = !1), (c = ve(l, !0)))
                      : (c = [])
              : (function (e) {
                if (!Ee(e) || "[object Object]" != D(e)) {
                  return !1;
                }
                var a = Se(e);
                if (null === a) {
                  return !0;
                }
                var s = Fe.call(a, "constructor") && a.constructor;
                return "function" == typeof s && s instanceof s && Be.call(s) == We;
              })(l) || Ie(l)
                ? ((c = i),
                  Ie(i)
                    ? (c = da(i))
                    : (G(i) && !B(i)) ||
                    (c = (function (e) {
                      return "function" != typeof e.constructor || qe(e) ? {} : xe(Se(e));
                    })(l)))
                : (p = !1);
        }
        p && (r.set(l, c), o(c, l, t, n, r), r.delete(l)), pe(e, s, c);
      }
    }

    function ca(e, a, s, t, o) {
      e !== a &&
      he(
        a,
        function (n, r) {
          if ((o || (o = new de()), G(n))) {
            ua(e, a, r, s, ca, t, o);
          }
          else {
            var i = t ? t(Ze(e, r), n, r + "", e, a, o) : void 0;
            void 0 === i && (i = n), pe(e, r, i);
          }
        },
        la
      );
    }

    function pa(e) {
      return e;
    }

    function ma(e, a, s) {
      switch (s.length) {
        case 0:
          return e.call(a);
        case 1:
          return e.call(a, s[0]);
        case 2:
          return e.call(a, s[0], s[1]);
        case 3:
          return e.call(a, s[0], s[1], s[2]);
      }
      return e.apply(a, s);
    }

    var ha = Math.max;
    var ya = ue
        ? function (e, a) {
          return ue(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value:
              ((s = a),
                function () {
                  return s;
                }),
            writable: !0,
          });
          var s;
        }
        : pa,
      ga = Date.now;
    var ba = (function (e) {
      var a = 0,
        s = 0;
      return function () {
        var t = ga(),
          o = 16 - (t - s);
        if (((s = t), o > 0)) {
          if (++a >= 800) {
            return arguments[0];
          }
        }
        else {
          a = 0;
        }
        return e.apply(void 0, arguments);
      };
    })(ya);

    function fa(e, a) {
      return ba(
        (function (e, a, s) {
          return (
            (a = ha(void 0 === a ? e.length - 1 : a, 0)),
              function () {
                for (var t = arguments, o = -1, n = ha(t.length - a, 0), r = Array(n); ++o < n;) {
                  r[o] = t[a + o];
                }
                o = -1;
                for (var i = Array(a + 1); ++o < a;) {
                  i[o] = t[o];
                }
                return (i[a] = s(r)), ma(e, this, i);
              }
          );
        })(e, a, pa),
        e + ""
      );
    }

    var ka,
      va =
        ((ka = function (e, a, s) {
          ca(e, a, s);
        }),
          fa(function (e, s) {
            var t = -1,
              o = s.length,
              n = o > 1 ? s[o - 1] : void 0,
              r = o > 2 ? s[2] : void 0;
            for (
              n = ka.length > 3 && "function" == typeof n ? (o--, n) : void 0,
              r &&
              (function (e, s, t) {
                if (!G(t)) {
                  return !1;
                }
                var o = a(s);
                return !!("number" == o ? Re(t) && ta(s, t.length) : "string" == o && (s in t)) && q(t[s], e);
              })(s[0], s[1], r) &&
              ((n = o < 3 ? void 0 : n), (o = 1)),
                e = Object(e);
              ++t < o;
            ) {
              var i = s[t];
              i && ka(e, i, t, n);
            }
            return e;
          })),
      wa = "gameState",
      xa = {
        boardState: null,
        evaluations: null,
        rowIndex: null,
        solution: null,
        gameStatus: null,
        lastPlayedTs: null,
        lastCompletedTs: null,
        restoringFromLocalStorage: null,
        hardMode: !1
      };

    function za() {
      var e = window.localStorage.getItem(wa) || JSON.stringify(xa);
      return JSON.parse(e);
    }

    function ja(e) {
      var a = za();
      !(function (e) {
        window.localStorage.setItem(wa, JSON.stringify(e));
      })(va(a, e));
    }

    var Sa = document.createElement("template");
    Sa.innerHTML =
      '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>\n  <div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Vanskelig modus</div>\n          <div class="description">Eventuelle avslørte hint må brukes i etterfølgende gjetninger</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Mørkt tema</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Fargeblindmodus</div>\n          <div class="description">Høykontrastsfarger</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Tilbakemeldinger</div>\n        </div>\n        <div class="control">\n          <a href="https://github.com/oyvind-stromsvik/ordle">Github</a>\n        </div>\n      </div>\n    </section>\n  </div>\n  <div id="footnote">\n    <div id="copyright">Copyright 2021-2022. All Rights Reserved.</div>\n    <div>\n      <div id="puzzle-number"></div>\n      <div id="hash"></div>\n    </div>\n  </div>\n';
    var _a = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return s(this, t), n(p((e = a.call(this))), "gameApp", void 0), e.attachShadow({mode: "open"}), e;
      }

      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              var e,
                a = this;
              this.shadowRoot.appendChild(Sa.content.cloneNode(!0)),
                (this.shadowRoot.querySelector("#hash").textContent = null === (e = window.ordle) || void 0 === e ? void 0 : e.hash),
                (this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset)),
                this.shadowRoot.addEventListener("game-switch-change", function (e) {
                  e.stopPropagation();
                  var s = e.detail,
                    t = s.name,
                    o = s.checked,
                    n = s.disabled;
                  a.dispatchEvent(new CustomEvent("game-setting-change", {
                    bubbles: !0,
                    composed: !0,
                    detail: {name: t, checked: o, disabled: n}
                  })), a.render();
                }),
                this.render();
            },
          },
          {
            key: "render",
            value: function () {
              var e = document.querySelector("body");
              e.classList.contains("nightmode") && this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", ""),
              e.classList.contains("colorblind") && this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
              var a = za();
              a.hardMode && this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", ""),
              a.hardMode ||
              "IN_PROGRESS" !== a.gameStatus ||
              0 === a.rowIndex ||
              (this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked"), this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", ""));
            },
          },
        ]),
          t
      );
    })(c(HTMLElement));
    customElements.define("game-settings", _a);
    var qa = document.createElement("template");
    qa.innerHTML =
      '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
    var Ea,
      Aa = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          return s(this, t), n(p((e = a.call(this))), "_duration", void 0), e.attachShadow({mode: "open"}), e;
        }

        return (
          o(t, [
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(qa.content.cloneNode(!0));
                var a = this.shadowRoot.querySelector(".toast");
                (a.textContent = this.getAttribute("text")),
                  (this._duration = this.getAttribute("duration") || 1e3),
                "Infinity" !== this._duration &&
                setTimeout(function () {
                  a.classList.add("fade");
                }, this._duration),
                  a.addEventListener("transitionend", function (a) {
                    e.parentNode.removeChild(e);
                  });
              },
            },
          ]),
            t
        );
      })(c(HTMLElement));

    function Ca() {
      console.log(arguments);
      dataLayer.push(arguments);
    }

    customElements.define("game-toast", Aa), (window.dataLayer = window.dataLayer || []), Ca("js", new Date());
    Ca("config", "G-2SSGMHY3NP", {
      app_version: null === (Ea = window.ordle) || void 0 === Ea ? void 0 : Ea.hash,
      debug_mode: !1
    });
    var La = [
"abaca", "abaki", "abasi", "abaya", "abbed", "abbor", "abera", "abere", "abild", "abort", "abrin", "abrot", "abuli", "acida", "acren", "acres", "actus", "adder", "addes", "addet", "adept", "adios", "adjøa", "adjøs", "adler", "adles", "adlet", "adlyd", "adlød", "adobe", "adult", "advar", "advis", "aerob", "afagi", "afaki", "afasi", "affin", "afobi", "afone", "afoni", "afont", "afori", "aften", "after", "aftes", "aftøs", "agami", "agape", "agari", "agave", "agede", "agens", "agent", "agere", "agert", "agete", "agget", "agile", "agilt", "aging", "agnat", "agnen", "agner", "agnes", "agnet", "agnor", "agogo", "agone", "agoni", "agora", "agrar", "agurk", "aguti", "agyni", "ahorn", "aioli", "airen", "akeen", "akeer", "akene", "akere", "aking", "akita", "akkar", "akker", "akkes", "akket", "akmen", "akmer", "aknen", "akner", "akoli", "akryl", "aksel", "aksen", "akser", "akset", "aksje", "aksla", "aksle", "akson", "akten", "akter", "aktes", "aktet", "aktin", "aktiv", "aktor", "aktre", "aktør", "akutt", "akyli", "alaen", "alaer", "alali", "alant", "alarm", "albin", "albua", "albue", "album", "alder", "aldol", "aldra", "aldre", "aldri", "alede", "alene", "alert", "alete", "aleut", "algen", "alger", "algin", "alias", "alibi", "alien", "aling", "alitt", "alkan", "alken", "alker", "alkis", "alkyd", "alkyl", "alkyn", "allel", "aller", "allez", "alliv", "allyl", "almen", "almer", "alner", "alnes", "alnet", "aloen", "aloer", "alogi", "alpen", "alper", "alpin", "alrik", "altan", "altea", "alten", "alter", "altet", "altra", "altre", "altså", "alumn", "aluna", "alved", "alven", "alver", "alvor", "amant", "amaui", "amaut", "ambar", "amber", "ambis", "ambod", "ambon", "ambra", "amcar", "amede", "ameli", "amena", "amene", "amete", "amfen", "amfia", "amida", "amimi", "amina", "aming", "amish", "ammen", "ammer", "ammes", "ammet", "ammin", "amorf", "amour", "ampel", "amper", "ampre", "amter", "amtet", "amusi", "amøbe", "anale", "analt", "anbor", "anbud", "andel", "anden", "ander", "andes", "andet", "andra", "andre", "andro", "anduv", "andøv", "anemi", "anene", "anfør", "angav", "angel", "angen", "anger", "anget", "angir", "angis", "angla", "angle", "angra", "angre", "angst", "angår", "angås", "anhal", "anien", "anier", "anima", "anime", "aning", "anion", "ankel", "anken", "anker", "ankes", "anket", "ankom", "ankra", "ankre", "anlyd", "anløp", "anmod", "annal", "annam", "annen", "annet", "annua", "annus", "anode", "anomi", "anrik", "anrop", "ansen", "anser", "anses", "anset", "ansig", "ansku", "anslo", "anslå", "ansne", "anste", "ansto", "anstå", "ansøk", "antar", "antas", "anten", "anter", "antes", "antet", "antok", "anton", "antyd", "anuri", "anvis", "anyon", "aorta", "apati", "apeks", "apene", "aperi", "aphel", "aping", "apoge", "apori", "appen", "apper", "april", "apsid", "apsis", "apter", "araen", "araer", "arcus", "arden", "arder", "ardes", "ardet", "areal", "arena", "arene", "arger", "arges", "arget", "argon", "argot", "argus", "aride", "arien", "arier", "arild", "arisk", "arken", "arker", "arket", "arkiv", "armen", "armer", "armes", "armet", "armgå", "armod", "arnen", "arner", "aroma", "arpen", "arrer", "arres", "arret", "arrig", "arsen", "arses", "arsis", "artel", "arten", "arter", "artes", "artet", "artig", "arven", "arver", "arves", "arvet", "arvta", "asdic", "asell", "asemi", "asena", "asene", "asete", "asiat", "asien", "asier", "asing", "asken", "asker", "asket", "aspen", "asper", "aspik", "aspis", "assai", "assen", "asser", "astat", "astma", "asyla", "atale", "atalt", "atlas", "atlet", "atman", "atoll", "atoma", "atoni", "atopi", "atout", "atria", "atrop", "atsjo", "atten", "atter", "attom", "attpå", "attra", "attre", "attrå", "attåt", "atymi", "atypi", "aubin", "auene", "augur", "auing", "auken", "auker", "aukes", "auket", "aukte", "auler", "aulet", "aulos", "aulte", "auren", "aurer", "auret", "aurne", "aurum", "ausen", "auser", "auses", "austa", "auste", "autor", "auxid", "auxin", "avart", "avbet", "avbit", "avbud", "avbøt", "avbøy", "avdag", "avdal", "avdel", "avdra", "avdro", "avduk", "avdød", "avdør", "avegn", "avene", "aveny", "avers", "avfas", "avfei", "avfil", "avfir", "avfyr", "avfød", "avfør", "avgav", "avgir", "avgis", "avgud", "avgår", "avgås", "avhol", "avhud", "avhus", "avhøl", "avhør", "avind", "aving", "avisa", "avise", "aviso", "avist", "aviær", "avkle", "avkod", "avkok", "avkol", "avkom", "avlat", "avled", "avlei", "avlen", "avler", "avles", "avlet", "avlid", "avlir", "avliv", "avlur", "avlus", "avlut", "avlyd", "avlys", "avlås", "avlær", "avløp", "avløs", "avløv", "avmål", "avnei", "avrev", "avrim", "avriv", "avrop", "avrus", "avsel", "avser", "avses", "avsig", "avsil", "avsky", "avslo", "avslå", "avson", "avsop", "avsto", "avstå", "avsug", "avsvi", "avsyr", "avsys", "avsøk", "avtak", "avtal", "avtar", "avtas", "avtin", "avtok", "avton", "avund", "avveg", "avvei", "avvek", "avvik", "avvis", "azida", "azina",
"babel", "baben", "baber", "babes", "babla", "bable", "bacon", "bader", "bades", "badet", "badge", "bagel", "bagen", "bager", "bagge", "baggy", "bahai", "baien", "baier", "baila", "baile", "baiss", "bajan", "bajas", "baken", "baker", "bakes", "baket", "bakis", "bakka", "bakke", "bakla", "bakli", "bakol", "bakom", "bakpå", "bakre", "bakro", "baksa", "bakse", "bakst", "bakte", "baktå", "bakut", "baler", "bales", "balet", "balja", "balje", "balla", "balle", "balsa", "balte", "balur", "bamla", "bamle", "bamse", "banal", "banan", "banda", "bande", "bandt", "bandy", "banen", "baner", "banes", "banet", "banga", "bange", "banjo", "banka", "banke", "banko", "banna", "banne", "bante", "bantu", "baoen", "baoer", "baosj", "barbe", "barde", "baren", "barer", "baret", "barge", "barin", "baris", "barka", "barke", "barkø", "barna", "baron", "barre", "barsk", "barsl", "basal", "basar", "basen", "baser", "bases", "baset", "basic", "basis", "baska", "baske", "basma", "basme", "basse", "bassi", "basso", "basta", "baste", "basun", "batak", "batch", "baten", "bater", "bates", "batet", "batna", "batne", "battl", "bauen", "bauer", "bauga", "bauge", "baula", "baule", "bault", "baume", "bause", "baust", "bauta", "baute", "bavla", "bavle", "bayer", "beach", "beakt", "bebor", "bebos", "bebud", "bedag", "beder", "bedes", "bedet", "bedra", "bedre", "bedro", "bedte", "bedyr", "bedår", "bedøk", "bedøm", "bedøv", "befal", "befar", "befri", "beføl", "begav", "beger", "begge", "begin", "begir", "beglo", "begra", "begre", "begro", "begum", "begår", "begås", "behag", "behov", "behøv", "beige", "beila", "beile", "beilt", "beina", "beine", "being", "beink", "beins", "beint", "beisa", "beise", "beisk", "beist", "beita", "beite", "bejaa", "bejae", "bejel", "beker", "bekes", "beket", "bekle", "bekom", "bekra", "bekre", "bekte", "belag", "belen", "belet", "belit", "beliv", "belja", "belje", "belma", "belme", "belta", "belte", "belur", "belys", "belån", "belær", "beløp", "bemal", "bemba", "bemøy", "benda", "bende", "bendt", "bener", "benes", "benet", "benka", "benke", "benzo", "benåd", "beoen", "beoer", "beram", "bered", "beret", "berga", "berge", "berik", "berme", "berop", "beror", "berse", "berta", "berte", "bertl", "berus", "beråd", "berår", "berøm", "berør", "berøv", "beser", "beses", "besik", "besje", "beske", "beskn", "beskt", "besku", "beslo", "beslå", "besna", "besne", "besov", "besta", "beste", "besto", "bestå", "besyv", "besår", "besås", "besøk", "betal", "betar", "betas", "betel", "beten", "beter", "betes", "betet", "betla", "betle", "betok", "beton", "betre", "betro", "betyd", "betyr", "betød", "bevar", "bevde", "beveg", "beven", "bever", "bevet", "bevis", "bevra", "bevre", "beyen", "beyer", "beånd", "beæra", "beære", "biavl", "bibel", "bibok", "bidde", "bidea", "bidig", "bidos", "bidra", "bidro", "bielv", "biene", "bifag", "biffa", "biffe", "bifil", "bifyr", "bigam", "bigge", "bihav", "biing", "bijou", "biker", "bikka", "bikke", "bikse", "bikta", "bikte", "bilag", "bilby", "bilda", "bilde", "bilen", "biler", "biles", "bilis", "bilkø", "bille", "bilos", "bilte", "bilus", "bilyd", "biløk", "bimbo", "bimma", "bimme", "binda", "binde", "bindi", "binga", "binge", "bingo", "binna", "binne", "binom", "binær", "bioen", "bioma", "biord", "biota", "biped", "bipet", "bipod", "bippa", "bippe", "birik", "birka", "bisak", "bisam", "bisen", "biser", "biske", "biskt", "bisla", "bisle", "bisna", "bisne", "bisol", "bison", "bisse", "bisto", "bistå", "bitch", "biten", "biter", "bites", "bitne", "bitre", "bitta", "bitte", "bitåa", "bitær", "biulv", "biura", "biveg", "bivei", "bivra", "bivre", "bivån", "bjart", "bjeff", "bjelk", "bjell", "bjerk", "bjore", "bjuge", "bjugt", "bjukt", "bjørg", "bjørk", "bjørn", "black", "blada", "bladd", "blaff", "blafr", "blaga", "blage", "blaka", "blake", "blakk", "blakn", "blakr", "blakt", "blama", "blame", "bland", "blank", "blant", "blara", "blare", "blass", "blast", "blaud", "blaut", "bledd", "blega", "blege", "bleia", "bleie", "bleig", "bleik", "bleiv", "bleka", "bleke", "blekk", "blekn", "blekr", "blekt", "blend", "bleng", "blenk", "blesa", "blese", "blesk", "blest", "blide", "blidk", "blidn", "blidt", "blikk", "blimp", "blind", "bling", "blini", "blink", "blipp", "blits", "blitt", "blive", "bloda", "blode", "blods", "blogg", "bloka", "bloke", "blokk", "blome", "blond", "blota", "blote", "blott", "blues", "blund", "blunk", "blurb", "blusa", "bluse", "blush", "bluss", "blyet", "blygd", "blyge", "blygt", "blåen", "blåer", "blåes", "blået", "blåis", "blåna", "blåne", "blåsa", "blåse", "blåst", "blått", "blæra", "blære", "blødd", "bløff", "bløgg", "bløme", "blømt", "bløte", "bløtn", "bløtt", "bløyt", "boaen", "boaer", "board", "bobby", "boben", "bober", "bobil", "bobin", "bobla", "boble", "boche", "bodde", "boden", "boder", "boene", "boere", "boffa", "boffe", "bogen", "boger", "boges", "boget", "bogey", "boggi", "bogna", "bogne", "bohem", "boien", "boier", "boing", "bojan", "bojar", "bokby", "bokeh", "boken", "boker", "bokna", "bokne", "boksa", "bokse", "bokår", "bolag", "bolde", "boldt", "bolen", "boler", "boles", "bolet", "bolig", "bolka", "bolke", "bolla", "bolle", "bolna", "bolne", "bolta", "bolte", "boltr", "bolus", "bomba", "bombe", "bomkø", "bomma", "bomme", "bonda", "bonde", "bonds", "boner", "bones", "bonet", "bonga", "bonge", "bongo", "bonte", "bonum", "bonus", "booka", "booke", "boost", "boots", "bopel", "bopen", "boran", "borat", "borda", "borde", "bords", "borer", "bores", "boret", "borga", "borge", "borid", "borra", "borre", "borsj", "borte", "borti", "bosoa", "boson", "bossa", "bosse", "boten", "boter", "botes", "botet", "botid", "botla", "botna", "botne", "botns", "botox", "bovin", "bowen", "bower", "bowla", "bowle", "boyen", "boyer", "braga", "bragd", "brage", "braka", "brake", "brakk", "brakt", "brand", "brank", "brann", "brant", "brase", "brask", "brass", "brast", "bratn", "bratt", "braut", "brave", "bravo", "bravt", "break", "bredd", "brede", "bredt", "breen", "breer", "breia", "breid", "breie", "breik", "breis", "breit", "breka", "breke", "brekk", "brekt", "brems", "brenn", "brent", "brese", "brest", "brett", "breva", "breve", "briar", "brien", "brier", "brifa", "brife", "brigd", "brigg", "brika", "briks", "bring", "brink", "brisa", "brise", "brisk", "brist", "brite", "broch", "brodd", "broen", "broer", "broka", "broke", "brokk", "brola", "brons", "brosa", "brose", "brotn", "brott", "brows", "brrrr", "bruda", "brudd", "bruen", "bruer", "bruka", "bruke", "brukt", "brula", "bruml", "bruna", "brund", "brune", "brunk", "brunt", "bruse", "brusk", "brust", "brutt", "brydd", "bryen", "bryer", "bryet", "brygg", "bryna", "bryne", "brynt", "brysk", "bryst", "bryte", "brådø", "bråka", "bråke", "bråkt", "bråna", "bråne", "brånt", "bråta", "bråte", "brått", "brøda", "brøde", "brøla", "brøle", "brølt", "brønn", "brønt", "brøst", "brøta", "brøte", "brøyt", "bubil", "bubon", "budde", "buden", "budet", "budne", "budte", "budøl", "budør", "buede", "buehi", "buene", "buete", "bufar", "buffe", "buffo", "bufra", "bufre", "bufør", "bugen", "buger", "buges", "buget", "bugga", "bugge", "buggy", "bugna", "bugne", "build", "buing", "buken", "buker", "bukes", "buket", "bukka", "bukke", "bukla", "bukle", "buksa", "bukse", "bukta", "bukte", "bulag", "buldr", "bulen", "buler", "bulet", "bulka", "bulke", "bulla", "bulle", "bulme", "bulna", "bulne", "bulta", "bulte", "bultr", "bumat", "bumla", "bumle", "bumpa", "bumpe", "bumsa", "bumse", "bunad", "bundl", "bunen", "buner", "bunge", "bunka", "bunke", "bunkr", "bunna", "bunne", "bunns", "bunta", "bunte", "bunød", "buorm", "buran", "burda", "burde", "buren", "burer", "bures", "buret", "burka", "burma", "burna", "burne", "burom", "burot", "bursa", "burte", "buråk", "busen", "buser", "buses", "buset", "buska", "buske", "bussa", "busse", "busta", "buste", "busti", "bustø", "butan", "butch", "buten", "butid", "butta", "butte", "butyl", "buveg", "buvei", "bybad", "bybil", "bybok", "bybro", "bybru", "bybud", "bydag", "bydde", "bydel", "byder", "bydes", "bydua", "bydue", "byede", "byene", "byete", "byfin", "byfis", "byfut", "bygda", "bygde", "bygds", "bygel", "bygen", "byger", "byget", "bygga", "bygge", "bygsl", "byhus", "bying", "byjul", "bykar", "byksa", "bykse", "bykst", "bylag", "byliv", "bylov", "bylta", "bylte", "bylua", "bylue", "byløp", "bymas", "bymat", "bymur", "bymus", "bymål", "bynær", "byrde", "byrek", "byrge", "byrgt", "byrom", "byråa", "byråd", "bysed", "bysnø", "byssa", "bysse", "bysta", "byste", "byten", "byter", "bytog", "bytta", "bytte", "bytur", "byveg", "byvei", "byvis", "båden", "båder", "bådes", "bådet", "båene", "båing", "båken", "båker", "bålen", "båler", "båles", "bålet", "bålos", "bålte", "bånda", "båren", "bårer", "båret", "bårne", "båsen", "båser", "båses", "båset", "båsku", "båste", "båtbu", "båtdo", "båten", "båter", "båtis", "båtkø", "bæder", "bædes", "bædet", "bæene", "bægde", "bægja", "bægje", "bægne", "bæing", "bælam", "bæren", "bærer", "bæres", "bæret", "bærår", "bæser", "bæses", "bæset", "bæsja", "bæsje", "bøene", "bøffa", "bøffe", "bøgen", "bøger", "bøken", "bøker", "bøkes", "bøkra", "bøkre", "bøkte", "bølen", "bøler", "bøles", "bølet", "bølga", "bølge", "bølla", "bølle", "bølte", "bønna", "bønne", "bønsj", "børek", "børen", "bører", "børsa", "børse", "børst", "børta", "børte", "bøssa", "bøsse", "bøten", "bøter", "bøtes", "bøtta", "bøtte", "bøyde", "bøyen", "bøyer", "bøyes", "bøyet", "bøyka", "bøyke", "bøykt", "bøyle",
"cabin", "cacha", "cache", "cairn", "cajun", "calor", "campa", "campe", "canto", "capen", "caper", "caput", "cargo", "carre", "casen", "caser", "casha", "cashe", "casta", "caste", "cauda", "causa", "cavum", "ceder", "cella", "celle", "cello", "cento", "cerat", "cesur", "cetan", "chaga", "chaja", "chaly", "chant", "chaps", "charm", "chatt", "cheng", "chert", "chice", "chict", "chief", "chili", "chill", "ching", "chipp", "chips", "choka", "choke", "choko", "chuck", "cilia", "cilie", "cirka", "cista", "civis", "claim", "claro", "clean", "cloua", "coach", "cocky", "colon", "comfy", "comte", "conga", "conge", "corda", "coret", "corgi", "corno", "corny", "corps", "corso", "costa", "count", "coupa", "coupe", "cover", "covra", "covre", "coxen", "coxer", "coxes", "coxet", "crack", "crazy", "credo", "creen", "creer", "crema", "crepe", "crest", "crewa", "crocs", "croon", "cross", "crush", "cruxa", "cubeb", "cuene", "culpa", "cupen", "cuper", "curie", "curla", "curle", "curry", "cuten", "cutis", "cuvee", "cykel", "cymen", "cyste", "cæsar", "cølom",
"dabba", "dabbe", "daben", "dachs", "dadda", "dadla", "dadle", "daffa", "daffe", "dafne", "dagen", "dager", "dages", "daget", "dagna", "dagne", "dagop", "dajak", "dalbu", "dalen", "daler", "dalet", "dalit", "dalka", "dalke", "dalla", "dalle", "dalom", "dalta", "dalte", "damen", "damer", "damet", "dampa", "dampe", "dance", "dandy", "danen", "daner", "dangl", "danka", "danke", "danna", "danne", "dansa", "danse", "dansk", "dapen", "daper", "darcy", "darra", "darre", "dasha", "dashe", "daska", "daske", "dasla", "dasle", "dassa", "dasse", "datel", "daten", "dater", "dates", "datet", "datid", "dativ", "dator", "datum", "daude", "daudt", "dauer", "dauet", "davit", "davra", "davre", "deala", "deale", "debet", "debil", "debut", "decca", "decem", "deffa", "deffe", "degga", "degge", "degos", "degus", "deien", "deier", "deiga", "deige", "deild", "deisa", "deise", "deist", "dekal", "dekan", "dekar", "deker", "dekka", "dekke", "dekod", "dekor", "dekte", "delda", "delen", "deler", "deles", "delet", "delir", "delja", "delje", "delta", "delte", "demet", "demla", "demle", "demma", "demme", "demon", "demos", "dempa", "dempe", "demra", "demre", "demte", "denar", "denge", "dengt", "denim", "denne", "deoen", "deoer", "depel", "depot", "deppa", "deppe", "depta", "derav", "derbe", "derbt", "derby", "deres", "derma", "derom", "derpå", "derre", "derta", "derte", "desil", "desim", "desis", "deska", "deske", "despe", "despt", "desto", "detne", "detox", "dette", "deuce", "devon", "devot", "dhole", "diare", "diasa", "dibla", "dible", "dicta", "didym", "diede", "diena", "diese", "diete", "diett", "digel", "diger", "digga", "digge", "digna", "digne", "digre", "diing", "diker", "dikes", "diket", "dikka", "dikke", "dikta", "dikte", "dildo", "dilen", "diler", "dilla", "dille", "dilta", "dilte", "dimen", "dimer", "dimes", "dimma", "dimme", "dimne", "dimpl", "dimte", "dinar", "diner", "dingl", "dingo", "dings", "dingy", "dinka", "dinsa", "dinse", "dinst", "diode", "dioik", "dipol", "dippa", "dippe", "dirka", "dirke", "dirra", "dirre", "dirty", "disen", "diser", "dises", "diset", "disig", "diska", "diske", "disko", "disne", "dissa", "disse", "ditch", "ditto", "divan", "divis", "djakn", "djerv", "djinn", "djupa", "djupe", "djupn", "djupt", "dobba", "dobbe", "dobla", "doble", "dobok", "dobra", "dobro", "dobås", "dodre", "dodør", "doene", "dogen", "doger", "dogga", "dogge", "dogma", "dogme", "dohol", "doket", "dokka", "dokke", "dolby", "dolce", "dolin", "dolka", "dolke", "dolla", "dolle", "dolma", "dolpa", "dolus", "domen", "domer", "domra", "donat", "donen", "doner", "donet", "donna", "donor", "donte", "donut", "dopen", "doper", "dopes", "dopet", "doppa", "doppe", "doren", "dorer", "dores", "doret", "dorga", "dorge", "dorma", "dorme", "dorsk", "dorte", "dosen", "doser", "doses", "doset", "dosis", "dossa", "doten", "doter", "dotid", "dotta", "dotte", "dotur", "doula", "doven", "dover", "dovet", "dovna", "dovne", "doyen", "dradd", "draft", "draga", "drage", "dragn", "drags", "drake", "drakk", "drakt", "dralt", "drama", "dramb", "drank", "drapa", "drape", "drapp", "drass", "dratt", "draug", "drega", "drege", "dregg", "dreia", "dreid", "dreie", "dreis", "dreit", "dreiv", "drekt", "drena", "drene", "dreng", "drenk", "drent", "drepe", "drept", "dress", "drett", "dreva", "dreve", "dribl", "drift", "drikk", "driks", "drile", "drill", "drilt", "drink", "drisl", "drist", "drita", "drite", "dritt", "driva", "drive", "drivl", "drodl", "droga", "droge", "drogs", "drolt", "drone", "dropl", "dropp", "drops", "drosa", "drosl", "drost", "drott", "drude", "druen", "druer", "drugg", "drugs", "drukn", "drult", "drunt", "drupe", "drupt", "druse", "drust", "drygd", "dryge", "drygt", "dryle", "drylt", "drypp", "drypt", "dryss", "dryst", "dråka", "dråpa", "dråpe", "dråse", "drått", "drøft", "drøga", "drøge", "drøle", "drølt", "drømt", "drønn", "drønt", "drøse", "drøss", "drøst", "drøyd", "drøye", "drøyp", "drøyt", "duale", "dualt", "dubba", "dubbe", "duben", "duble", "duden", "duder", "dueal", "duede", "duell", "duene", "duete", "duett", "duffa", "duffe", "dufta", "dufte", "dugde", "dugen", "duger", "dugga", "dugge", "duing", "dukat", "duken", "duker", "dukes", "duket", "dukka", "dukke", "dulce", "dulda", "duler", "dulgt", "dulla", "dulle", "dulma", "dulme", "dulpa", "dulpe", "dulta", "dulte", "dumma", "dumme", "dummy", "dumpa", "dumpe", "dumpt", "dundr", "dundå", "dunen", "duner", "dunet", "dunga", "dunge", "dunka", "dunke", "dunna", "dunne", "dunsa", "dunse", "dunst", "dunte", "duoen", "duoer", "duolo", "duper", "duplo", "duppa", "duppe", "duren", "durer", "dures", "duret", "durik", "durka", "durke", "duroc", "durra", "durte", "dusen", "duser", "duses", "dusin", "dusja", "dusje", "duska", "duske", "dusne", "dusta", "duste", "dusør", "dutta", "dutte", "duvde", "duver", "duves", "duvet", "duvla", "duvle", "dvale", "dvask", "dveil", "dvele", "dvelg", "dvelt", "dverg", "dvina", "dvine", "dvint", "dyade", "dybde", "dybel", "dydde", "dyden", "dyder", "dydig", "dyete", "dyfta", "dyfte", "dygda", "dying", "dykka", "dykke", "dylla", "dylle", "dylta", "dylte", "dynen", "dyner", "dynga", "dynge", "dynka", "dynke", "dypet", "dypna", "dypne", "dyppa", "dyppe", "dypål", "dyret", "dyrka", "dyrke", "dysen", "dyser", "dysiv", "dyssa", "dysse", "dysta", "dyste", "dytta", "dytte", "dyvåt", "dåden", "dåder", "dådyr", "dåene", "dåmen", "dåmer", "dåmet", "dåmte", "dåner", "dånet", "dånte", "dåpen", "dåper", "dåren", "dårer", "dåres", "dåret", "dåsen", "dåser", "dåset", "dæken", "dælen", "dæler", "dæmet", "dæser", "dæste", "dæven", "døbla", "døble", "døden", "døder", "dødes", "dødet", "dødis", "dødla", "dødsa", "dødse", "døgna", "døgne", "døing", "døkke", "dølen", "døler", "dølga", "dølge", "dølgt", "dølle", "dølsk", "dømer", "dømes", "dømet", "dømme", "dømte", "dønna", "dønne", "dønte", "døper", "døpes", "døpte", "døren", "dører", "døsen", "døser", "døses", "døset", "døsig", "døsne", "døste", "døtre", "døtte", "døvde", "døver", "døves", "døvet", "døyde", "døyer", "døyes", "døyet", "døyva", "døyvd", "døyve",
"eagle", "ebben", "ebber", "ebbet", "ebola", "eclat", "ecuen", "edden", "edder", "eddik", "edelt", "edene", "eders", "edikt", "edrue", "edtar", "edtas", "edtok", "efaen", "effen", "efugl", "egale", "egalt", "egard", "egden", "egder", "egdsk", "egent", "eggen", "egger", "egges", "egget", "egler", "egles", "eglet", "egnen", "egner", "egnes", "egnet", "egnte", "egoer", "egoet", "egser", "egses", "egset", "egste", "ehusa", "eider", "eidet", "eiede", "eiere", "eiete", "eigen", "eigna", "eigne", "eiing", "eiken", "eiker", "eimen", "eimer", "eimet", "einbu", "einer", "eirer", "eiret", "eisen", "eiser", "eista", "eiste", "eitel", "eiter", "eitra", "eitre", "ekall", "ekkel", "ekkoa", "ekkoe", "ekler", "ekles", "eklet", "eklog", "ekorn", "ekren", "ekrer", "eksem", "eksen", "ekser", "ekses", "ekset", "eksil", "eksis", "ekson", "eksos", "ekter", "ektes", "ektet", "ekval", "eland", "elbil", "elbåt", "elden", "elder", "eldes", "eldet", "eldre", "eldst", "eleat", "elegi", "elemi", "elene", "elfag", "elfly", "elgen", "elger", "elges", "elget", "elgku", "eling", "elisk", "elite", "eljen", "eller", "elles", "ellet", "ellok", "eloge", "elovn", "elsag", "elska", "elske", "elten", "elter", "eltes", "eltet", "eltne", "eltog", "eluer", "elven", "elver", "emesi", "emjer", "emjes", "emjet", "emmen", "emmer", "emner", "emnes", "emnet", "emoen", "emoer", "emoji", "empor", "emsig", "emuen", "emuer", "enark", "enden", "ender", "endes", "endiv", "endog", "endra", "endre", "endte", "enebo", "enere", "enfin", "engel", "engen", "enger", "enget", "engla", "engst", "enhet", "enige", "ening", "enkel", "enken", "enker", "enket", "enkla", "enkle", "enkom", "enorm", "enrom", "enser", "enses", "enset", "enske", "ensom", "enste", "enten", "enter", "entes", "entra", "entre", "entåa", "envis", "envoi", "enzym", "enøra", "enøre", "enøyd", "eocen", "eoler", "eonen", "eoner", "eosin", "epakt", "epark", "epikk", "episk", "epizo", "epler", "eplet", "epode", "epoke", "epope", "eposa", "erakt", "erfar", "ergen", "erger", "erges", "erget", "ergot", "ergra", "ergre", "erica", "erika", "erkna", "erlen", "erler", "ermer", "ermet", "ernær", "erobr", "error", "erten", "erter", "ertes", "ertet", "ertne", "ertog", "esing", "esjen", "esjer", "esjne", "esken", "esker", "eskes", "esket", "esler", "esles", "eslet", "espri", "essay", "essen", "esser", "esset", "essiv", "ester", "estet", "etaen", "etaer", "etbar", "etere", "etikk", "eting", "etisk", "etler", "etles", "etlet", "etser", "etses", "etset", "etter", "etuia", "etyde", "evaen", "evaer", "evdøl", "event", "evert", "evige", "eving", "evjen", "evjer", "evler", "evles", "evlet", "evnen", "evner", "evnes", "evnet", "evret", "ewene", "exing",
"fabel", "fabla", "fable", "facer", "faces", "facet", "facts", "fader", "fades", "fadet", "faene", "faens", "fager", "faget", "fagna", "fagne", "fagre", "faila", "faile", "faita", "faite", "faken", "faker", "fakes", "faket", "fakir", "fakka", "fakke", "fakla", "fakle", "faksa", "fakse", "fakta", "fakte", "falby", "falda", "falde", "falen", "faler", "fales", "falet", "falla", "falle", "falma", "falme", "falne", "falsa", "false", "falsk", "famla", "famle", "famøs", "fancy", "fanen", "faner", "fanet", "fanga", "fange", "fanta", "fante", "fanti", "farad", "farao", "faren", "farer", "fares", "faret", "farga", "farge", "farin", "farka", "farke", "farne", "farse", "farsi", "farta", "farte", "fasan", "fasen", "faser", "fases", "faset", "fasie", "fasil", "fasit", "fasla", "fasle", "fasta", "faste", "fastn", "fastr", "fatal", "fater", "fates", "fatet", "fatla", "fatle", "fatna", "fatne", "fatta", "fatte", "fatum", "fatwa", "fatøl", "fauka", "fauke", "fauna", "faura", "faure", "fausa", "fause", "fausk", "faust", "favna", "favne", "favus", "favør", "feavl", "feber", "febre", "febua", "feces", "fecit", "fedda", "fedde", "fedme", "fedre", "feeds", "feene", "feeri", "fefar", "fefot", "fegda", "fegen", "fegna", "fegne", "fegod", "fegra", "fegre", "fehua", "fehue", "fehus", "fehår", "feida", "feide", "feien", "feier", "feies", "feiet", "feiga", "feigd", "feige", "feigt", "feika", "feike", "feila", "feile", "feilt", "feine", "feira", "feire", "feisk", "feita", "feite", "feitn", "feitt", "fekal", "fekar", "fekta", "fekte", "felag", "felen", "feler", "felga", "felge", "fella", "felle", "felta", "felte", "felts", "felås", "femen", "femte", "femti", "femur", "femår", "fenad", "fendr", "fenen", "fenet", "fenga", "fenge", "fengt", "fenne", "fenol", "fenta", "fente", "fenyl", "ferda", "ferde", "feren", "ferer", "ferga", "ferge", "ferie", "ferja", "ferje", "ferle", "ferma", "ferme", "fermt", "fersk", "ferta", "ferte", "feråk", "feset", "fesja", "fesje", "fesjå", "fesla", "fesle", "fessa", "fesse", "festa", "feste", "festn", "feten", "feter", "fetes", "fetet", "fetla", "fetle", "fetna", "fetne", "fetrå", "fetrø", "fetta", "fette", "feuen", "feveg", "fevei", "fibel", "fiber", "fibla", "fible", "fibre", "fichu", "fidel", "fides", "fidus", "fiero", "fiffa", "fiffe", "fifla", "fifle", "fight", "figur", "fiken", "fiker", "fikes", "fiket", "fikka", "fikke", "fikla", "fikle", "fikna", "fikne", "fiksa", "fikse", "fikst", "fikta", "fikte", "filen", "filer", "files", "filet", "filla", "fille", "filma", "filme", "filta", "filte", "filtr", "filts", "filur", "fimra", "fimre", "final", "finer", "finet", "fingr", "finis", "finke", "finne", "finsk", "finta", "finte", "firer", "fires", "firet", "firma", "first", "firte", "fisen", "fiser", "fises", "fishy", "fiska", "fiske", "fisla", "fisle", "fisne", "fista", "fiste", "fistl", "fitla", "fitle", "fitta", "fitte", "fivel", "fjagg", "fjakk", "fjakl", "fjams", "fjant", "fjasa", "fjase", "fjask", "fjasl", "fjast", "fjatl", "fjeda", "fjegg", "fjela", "fjelg", "fjell", "fjerd", "fjern", "fjert", "fjesa", "fjesk", "fjetr", "fjoga", "fjoll", "fjols", "fjoma", "fjomp", "fjoms", "fjona", "fjong", "fjord", "fjott", "fjuka", "fjuna", "fjusa", "fjuse", "fjusk", "fjåge", "fjågt", "fjåke", "fjåkt", "fjæra", "fjære", "fjøla", "fjøld", "fjølg", "fjøra", "fjøre", "fjøsa", "flabb", "flaet", "flaga", "flagd", "flage", "flagg", "flagr", "flair", "flaka", "flake", "flakk", "flakn", "flaks", "flakt", "flana", "flane", "flant", "flapp", "flaps", "flara", "flare", "flarn", "flart", "flash", "flask", "flass", "flata", "flate", "flatn", "flatt", "flaua", "flaue", "flaut", "flein", "fleip", "fleir", "fleis", "flekk", "fleks", "flekt", "fleng", "flens", "flepe", "flept", "flere", "flerr", "flesa", "flesk", "flest", "flett", "flidd", "flien", "flier", "fligg", "flika", "flike", "flikk", "flikr", "flikt", "flimr", "fline", "fling", "flink", "flint", "flipp", "flira", "flire", "flirt", "flisa", "flise", "flist", "float", "floda", "flodd", "floem", "floen", "floer", "floet", "floga", "floka", "floke", "flokk", "floks", "flola", "flopp", "flora", "flore", "flort", "floss", "flotn", "flott", "fludd", "fluen", "fluer", "fluid", "fluks", "flukt", "fluor", "flura", "flure", "flurt", "fluse", "flush", "flusk", "fluss", "flust", "flydd", "flydo", "flyen", "flyer", "flyet", "flyge", "flygg", "flyil", "flykt", "flykø", "flyss", "flyst", "flyte", "flytt", "flådd", "flåen", "flåer", "flåna", "flåne", "flåse", "flåst", "flåte", "flått", "flædd", "flæer", "flæet", "flæra", "flære", "flæse", "flæst", "flødd", "fløer", "fløes", "fløet", "fløka", "fløke", "fløkt", "flømt", "flørt", "fløta", "fløte", "fløts", "fløtt", "fløya", "fløyt", "fnask", "fnatt", "fnisa", "fnise", "fnist", "fnokk", "fnugg", "fnutt", "fnysa", "fnyse", "fnyst", "fnøse", "fnøst", "foaje", "foger", "foges", "foget", "fokal", "fokka", "fokke", "fokus", "folat", "folda", "folde", "folen", "foler", "foles", "folet", "folga", "folge", "folie", "folio", "folka", "folke", "folla", "folle", "folna", "folne", "fomla", "fomle", "fonda", "fonds", "fondy", "fonem", "fonen", "foner", "fonga", "fonna", "fonne", "fonon", "foran", "forbi", "forby", "fordi", "fordr", "foren", "forer", "fores", "foret", "forga", "forgi", "forgå", "forku", "forla", "forle", "forlo", "forma", "forme", "formå", "forna", "forne", "fornt", "forny", "forre", "forrå", "forse", "forsk", "forså", "forta", "forte", "forti", "fortn", "forum", "forut", "forza", "forår", "foråt", "forær", "forød", "forøk", "forøv", "fosen", "foser", "fossa", "fosse", "fostr", "foten", "foter", "fotes", "fotet", "fotgå", "fotoa", "foton", "foule", "fraba", "frabe", "fragå", "frakk", "frakt", "frala", "frami", "framt", "franc", "frank", "frarå", "frasa", "frase", "frasi", "frass", "frast", "fraså", "frata", "fraua", "fraus", "freda", "frede", "frega", "frege", "freke", "frekk", "frekt", "frels", "fremi", "fremt", "frene", "frent", "freon", "frese", "fresh", "fresk", "frest", "frett", "friby", "fridd", "fride", "frier", "friga", "frigg", "frigi", "frika", "frike", "frila", "frise", "frisk", "frist", "frita", "fritt", "friår", "frode", "fromt", "front", "frosk", "frost", "fruen", "fruer", "fruet", "frukt", "fruse", "frust", "fryda", "fryde", "frykt", "fryne", "fryns", "frynt", "frysa", "fryse", "fryst", "fråda", "fråde", "fråss", "fråts", "frægd", "fræge", "frægt", "fræve", "frævt", "frødd", "frøet", "frøna", "frøne", "frønt", "frøse", "frøst", "frøyd", "frøye", "frøyn", "frøys", "frøår", "fucka", "fucke", "fuene", "fugal", "fugen", "fuger", "fuges", "fuget", "fugue", "fuksa", "fukse", "fukta", "fukte", "fulas", "fulgt", "fulle", "fullt", "fundi", "funds", "fungi", "funka", "funke", "funkl", "funky", "funna", "funne", "funny", "fuoco", "furan", "furen", "furer", "fures", "furet", "furia", "furie", "furke", "furor", "furta", "furte", "furua", "fusel", "fusen", "fuser", "fuses", "fuska", "fuske", "fusse", "fusta", "fuste", "fusti", "futen", "futer", "futil", "futon", "futta", "futte", "fying", "fyken", "fyker", "fykes", "fyket", "fylde", "fylen", "fyler", "fylka", "fylke", "fylkt", "fylla", "fylle", "fylte", "fymat", "fynbo", "fynen", "fynsk", "fynte", "fyord", "fyren", "fyrer", "fyres", "fyret", "fyrig", "fyrop", "fyrst", "fyrte", "fysak", "fysen", "fyser", "fyses", "fysio", "fysja", "fysje", "fysna", "fysne", "fyste", "fytat", "fytol", "fådde", "fåene", "fåent", "fåing", "fåmen", "fåmer", "fåmne", "fåner", "fånet", "fåren", "fårer", "fåret", "fåtte", "fåvis", "fælen", "fæler", "fæles", "fælna", "fælne", "fælte", "færre", "fødde", "føden", "føder", "fødes", "fødte", "føing", "føket", "føkka", "føkke", "føler", "føles", "følga", "følge", "følla", "følle", "følte", "fønen", "føner", "fønes", "fønet", "fønte", "fører", "føres", "føret", "førne", "førre", "førsl", "først", "førte", "førti", "føser", "føste", "føtal", "føtor", "føtta", "føtus", "føyde", "føyer", "føyes", "føyet", "føyka", "føyke", "føykt", "føyra", "føyre", "føyse", "føyst", "føyta", "føyte",
"gabba", "gabbe", "gabun", "gaffa", "gaffe", "gafla", "gafle", "gagat", "gagen", "gager", "gages", "gaget", "gagla", "gagna", "gagne", "gagns", "gaida", "gaide", "gaier", "gakka", "gakke", "galan", "galda", "galde", "galdr", "galei", "galen", "galer", "gales", "galet", "galge", "galla", "galle", "galne", "galon", "galte", "gaman", "gambe", "gambl", "gamer", "games", "gamet", "gamin", "gamla", "gamle", "gamma", "gamme", "gampa", "gampe", "gamsa", "gamse", "ganda", "gande", "ganen", "ganer", "ganes", "ganet", "ganga", "gange", "ganja", "ganta", "gante", "gapen", "gaper", "gapes", "gapet", "gaple", "gaplo", "gapne", "gapte", "garda", "garde", "gards", "garen", "garer", "gares", "garet", "garma", "garme", "garna", "garne", "garpa", "garpe", "garta", "garte", "garva", "garve", "gasel", "gasen", "gaser", "gases", "gaset", "gasje", "gasol", "gassa", "gasse", "gasta", "gaten", "gater", "gatta", "gauda", "gauer", "gaues", "gauet", "gauge", "gauka", "gauke", "gaula", "gaule", "gault", "gauma", "gaume", "gaupa", "gaupe", "gaupn", "gausa", "gause", "gauss", "gaust", "gauta", "gaute", "gauva", "gauve", "gauvr", "gaven", "gaver", "gavla", "gavle", "gayal", "gebet", "gebyr", "gehør", "geila", "geile", "geilt", "geima", "geime", "geina", "geine", "geint", "geipa", "geipe", "geipl", "geipt", "geira", "geire", "geirt", "geisa", "geise", "geist", "geita", "geite", "geivl", "gekko", "gelen", "geler", "gelik", "gemal", "gemen", "gemme", "gemse", "genen", "gener", "genet", "genia", "genom", "genre", "genus", "geode", "geoen", "geren", "gerer", "geråd", "gesso", "geter", "getto", "gevir", "gevær", "ghost", "giaur", "giben", "giber", "gibne", "gidda", "gidde", "gidne", "gidra", "gidre", "gifen", "gifer", "gifta", "gifte", "gigen", "giger", "gigga", "gigge", "gigla", "gigle", "gigot", "giing", "gikta", "gilda", "gilde", "gildr", "gildt", "gilen", "giler", "gilja", "gilje", "gilså", "gimla", "gimle", "gimpa", "gimpe", "gimra", "gimre", "gimsa", "gimse", "ginen", "giner", "ginet", "ginst", "gipen", "giper", "gipsa", "gipse", "gipst", "gipyr", "giren", "girer", "gires", "giret", "girte", "girth", "gisla", "gisna", "gisne", "gispa", "gispe", "gissa", "gisse", "gistn", "gitar", "gitau", "gitra", "gitre", "gitte", "given", "giver", "gjall", "gjegn", "gjekk", "gjela", "gjeld", "gjell", "gjelt", "gjema", "gjeme", "gjemt", "gjene", "gjeng", "gjent", "gjepp", "gjerd", "gjese", "gjesp", "gjess", "gjest", "gjete", "gjeti", "gjett", "gjeve", "gjevt", "gjord", "gjors", "gjort", "gjura", "gjure", "gjurt", "gjæra", "gjære", "gjært", "gjødd", "gjøde", "gjøen", "gjøet", "gjøfe", "gjøgl", "gjøle", "gjølm", "gjølt", "gjømt", "gjøne", "gjønt", "gjøre", "gjørm", "gjørs", "glace", "gladd", "glade", "glafs", "glamr", "gland", "glane", "glans", "glant", "glapa", "glape", "glapp", "glapt", "glasa", "glass", "glatt", "gleda", "gledd", "glede", "glefs", "gleim", "glein", "glemt", "glens", "glepp", "glett", "glida", "glidd", "glide", "glima", "glime", "glimr", "glimt", "glins", "gliom", "glipa", "glipe", "glipp", "glipt", "glire", "glirt", "glisa", "glise", "glisn", "glisp", "glist", "glitr", "glitt", "globe", "glock", "glodd", "gloen", "glora", "glore", "glort", "glosa", "glose", "gloss", "glost", "glova", "glove", "gluen", "glufs", "glugg", "gluma", "glume", "glumt", "glunk", "glunt", "gluon", "glupe", "glupt", "glutt", "glyen", "glyme", "glymt", "glynn", "glynt", "glyre", "glyrt", "glådd", "glåma", "glåme", "glåmt", "glåpe", "glåpt", "gløda", "glødd", "gløde", "gløgg", "gløgt", "glømt", "gløse", "gløst", "gløtt", "gløyp", "gnafs", "gnagd", "gnage", "gnall", "gnask", "gnatt", "gnaur", "gnavl", "gnefs", "gneis", "gnell", "gnelt", "gnett", "gnidd", "gnidr", "gnien", "gnier", "gnikk", "gniks", "gnirk", "gnisk", "gnisl", "gniss", "gnist", "gnome", "gnubb", "gnudd", "gnuen", "gnuer", "gnugg", "gnukk", "gnura", "gnure", "gnurk", "gnurp", "gnurt", "gnusl", "gnuss", "gnuvl", "gnydd", "gnyet", "gnåle", "gnålt", "goaen", "goaer", "goala", "goale", "godbø", "goden", "goder", "godet", "godis", "godna", "godne", "godsa", "godta", "godte", "gogna", "gojim", "golde", "goldt", "golem", "golfa", "golfe", "golva", "golve", "gomla", "gomle", "gomme", "gondi", "gonen", "gonzo", "googl", "gopak", "goped", "gopla", "gople", "goral", "gorge", "goroa", "gosen", "goser", "gossa", "gosse", "goter", "gouda", "goven", "gover", "govet", "grabb", "grace", "grada", "grade", "grafe", "grafs", "graft", "grain", "graks", "grams", "gramt", "grana", "grand", "grann", "grant", "grape", "graps", "grasa", "grase", "graup", "graut", "grava", "gravd", "grave", "gredd", "green", "greia", "greid", "greie", "grein", "greip", "greis", "greit", "grele", "grell", "grelt", "gremt", "grena", "grend", "grene", "grens", "grent", "grepa", "grepp", "gresk", "gress", "greva", "greve", "gribb", "griff", "grifl", "grill", "grima", "grime", "grimt", "grina", "grind", "grine", "grint", "gripe", "grisa", "grise", "grisk", "grisl", "grisn", "grist", "grita", "grjot", "grodd", "groen", "groer", "grogg", "gromt", "groom", "gropa", "grope", "gross", "grosz", "grova", "grove", "grovt", "growl", "grrrr", "grual", "grubl", "grudd", "gruen", "gruer", "grues", "gruet", "gruff", "grufs", "grugg", "grukk", "grums", "grumt", "grunk", "grunn", "grunt", "grusa", "gruse", "grusk", "grust", "gruta", "grute", "gruva", "gruve", "gruvt", "grydd", "gryet", "gryle", "grylt", "gryna", "gryne", "grynn", "grynt", "gryta", "gryte", "gryug", "gråen", "gråer", "gråes", "grået", "gråfe", "gråhå", "gråle", "grålt", "gråna", "gråne", "gråor", "gråte", "grått", "græla", "græle", "grælt", "grøda", "grødd", "grøde", "grøft", "grønk", "grønn", "grønt", "grøpe", "grøpp", "grøpt", "grøss", "grøst", "grøta", "grøte", "grøtt", "grøyp", "guano", "guava", "gubbe", "guden", "guder", "guffa", "guffe", "gufne", "gufsa", "gufse", "gugga", "gugge", "guida", "guide", "gulag", "guldå", "gulen", "guler", "gules", "gulet", "gulhå", "gulka", "gulke", "gulla", "gulna", "gulne", "gulpa", "gulpe", "gulva", "gulve", "gulål", "gumbo", "gummi", "gungr", "gunne", "gunst", "guppa", "guppy", "guren", "gurgl", "gurma", "gurme", "gurpa", "gurpe", "guska", "guske", "gusle", "gusli", "gusta", "guste", "gustn", "guten", "guter", "gutsa", "gutse", "gutsy", "gutta", "gutua", "guyot", "gyden", "gyder", "gydja", "gydje", "gyger", "gygra", "gygre", "gylla", "gylle", "gylna", "gylne", "gylta", "gylte", "gymma", "gymme", "gympa", "gympe", "gynga", "gynge", "gyoza", "gyren", "gyrer", "gyros", "gyser", "gyses", "gyset", "gysja", "gysje", "gyste", "gyten", "gyter", "gytes", "gytja", "gytje", "gytte", "gyvel", "gyver", "gyves", "gyvet", "gåbil", "gådde", "gåene", "gåent", "gåere", "gåing", "gårde", "gårds", "gåren", "gårer", "gåres", "gåret", "gåsen", "gåset", "gåsko", "gåten", "gåter", "gåtid", "gåtta", "gåtte", "gåtur", "gåveg", "gåvei", "gæler", "gæren", "gærna", "gærne", "gønna", "gønne", "gørja", "gørje", "gørra", "gørre", "gøten", "gøter", "gøyal", "gøyer", "gøyes", "gøyet", "gøysa", "gøyse", "gøyst", "gøyvd", "gøyve",
"habil", "hacek", "hacka", "hacke", "hadde", "hadsj", "hagel", "hagen", "hager", "hages", "haget", "hagla", "hagle", "haida", "haien", "haier", "haies", "haiet", "haika", "haike", "haiku", "haing", "haken", "haker", "hakes", "haket", "hakka", "hakke", "hakte", "halal", "halat", "halen", "haler", "hales", "halet", "halla", "halle", "hallo", "halma", "halme", "halon", "halsa", "halse", "halta", "halte", "halva", "halve", "halvt", "hamam", "hambo", "hamla", "hamle", "hamna", "hamne", "hamra", "hamre", "hamsa", "hamse", "handa", "hande", "handl", "hands", "handy", "hanen", "haner", "hangl", "hanka", "hanke", "hansa", "hanse", "happy", "haram", "harde", "hardn", "hardt", "harem", "haren", "harer", "harka", "harke", "harma", "harme", "harmt", "harpa", "harpe", "harpy", "harry", "harsk", "harva", "harve", "hasen", "haser", "hasid", "hasja", "hasje", "hasla", "hasle", "haspa", "haspe", "haspl", "hasta", "haste", "hatal", "hater", "hates", "hatet", "hatig", "hatsj", "hatsk", "hatta", "hatte", "hauer", "hauga", "hauge", "hauka", "hauke", "hauld", "hausa", "hauss", "haust", "hauyn", "haven", "haver", "havet", "havis", "havna", "havne", "havre", "havrå", "havål", "heada", "heade", "heala", "heale", "healt", "heata", "heavy", "hebel", "heben", "heber", "hedda", "hedde", "heden", "heder", "hedga", "hedge", "hedra", "hedre", "hedøl", "hefta", "hefte", "hegda", "hegde", "hegen", "heger", "hegla", "hegle", "hegna", "hegne", "hegra", "hegre", "heida", "heien", "heier", "heies", "heiet", "heile", "heilo", "heilt", "heima", "heime", "heiml", "heine", "heint", "heisa", "heise", "heist", "heite", "heiti", "heitn", "heitt", "hekka", "hekke", "hekla", "hekle", "heksa", "hekse", "hekta", "hekte", "hekto", "helan", "helda", "helde", "helen", "heler", "heles", "helet", "helga", "helge", "hella", "helle", "helma", "helme", "helot", "helsa", "helse", "helst", "helte", "helvt", "hemet", "hemin", "hemma", "hemme", "hempa", "hempe", "hemse", "hemsk", "henad", "henda", "hende", "hendt", "henga", "henge", "hengi", "hengl", "hengt", "hengå", "henla", "henlå", "henna", "henne", "henry", "henta", "hente", "hepar", "hepna", "hepne", "heppa", "heppe", "herav", "herda", "herde", "herdn", "herja", "herje", "herke", "herkt", "herma", "herme", "hermt", "herom", "heros", "herpa", "herpe", "herpå", "herre", "hersa", "herse", "hersk", "hertz", "herut", "hesen", "heser", "heses", "hesja", "hesje", "hesne", "hespa", "hespe", "hespl", "heste", "heten", "heter", "hetes", "hetet", "hetna", "hetne", "hetsa", "hetse", "hetta", "hette", "hevda", "hevde", "hevel", "heven", "hever", "heves", "hevet", "hevla", "hevle", "hevna", "hevne", "hevre", "hiene", "higen", "higer", "higes", "higet", "hihat", "hiing", "hijab", "hiker", "hikes", "hiket", "hikka", "hikke", "hikst", "hilal", "hilda", "hilde", "hildr", "hilen", "hiler", "hiles", "hilet", "hilse", "hilst", "hilte", "hilum", "hilus", "hilær", "himen", "himer", "himet", "himla", "himle", "hinda", "hindi", "hindr", "hindu", "hinka", "hinke", "hinna", "hinne", "hinta", "hinte", "hipen", "hiper", "hipes", "hipet", "hipne", "hippa", "hippe", "hipsa", "hipse", "hipte", "hirda", "hiren", "hirer", "hirne", "hirse", "hirte", "hissa", "hisse", "hiten", "hiter", "hitla", "hitle", "hitne", "hitre", "hitta", "hitte", "hivde", "hiven", "hiver", "hives", "hivet", "hjale", "hjalp", "hjalt", "hjell", "hjelm", "hjelp", "hjeml", "hjona", "hjord", "hjort", "hjula", "hjule", "hjupa", "hjupe", "hmong", "hobba", "hobbe", "hobby", "hocke", "hodda", "hodde", "hoder", "hodet", "hodøl", "hoede", "hoete", "hoffa", "hofta", "hofte", "hogde", "hogga", "hogge", "hogst", "hoier", "hoies", "hoiet", "hoing", "hokka", "hokko", "hokus", "holda", "holde", "holdt", "holen", "holer", "holes", "holet", "holka", "holke", "holma", "holme", "holna", "holne", "holoi", "holta", "holte", "homer", "homma", "homme", "homse", "honen", "honer", "hones", "honet", "honka", "hooka", "hooke", "hopen", "hoper", "hopes", "hopet", "hoppa", "hoppe", "horde", "horen", "horer", "hores", "horet", "horga", "horka", "horna", "horsa", "horse", "horst", "horte", "horvd", "horve", "hosen", "hoser", "hosta", "hoste", "hoten", "hoter", "hotes", "hotet", "hotte", "house", "hovde", "hovel", "hoven", "hover", "hovet", "hovla", "hovle", "hovna", "hovne", "hovra", "hovre", "hovåt", "huben", "huber", "hubro", "hudde", "huden", "huder", "huene", "huffa", "huffe", "hufsa", "hufse", "hugal", "hugav", "hugde", "hugen", "huger", "huges", "huget", "hugga", "hugge", "hugla", "hugst", "hugta", "huhei", "huien", "huier", "huies", "huiet", "huken", "huker", "hukes", "huket", "hukka", "hukne", "hukra", "hukre", "hukte", "hulag", "hulen", "huler", "hules", "hulet", "hulka", "hulke", "hulla", "hulle", "hulna", "hulne", "hulte", "hultr", "human", "humid", "humla", "humle", "humor", "humpa", "humpe", "humra", "humre", "humsa", "humse", "humul", "humus", "humør", "hunch", "hunds", "hunen", "huner", "hungr", "hunza", "hurda", "hurka", "hurke", "hurkl", "huron", "hurpa", "hurpe", "hurra", "hurre", "hurva", "hurve", "husar", "huser", "huses", "huset", "husja", "husje", "huska", "huske", "husky", "huskø", "husla", "husle", "husly", "husro", "huste", "hustr", "huter", "hutes", "hutet", "hutla", "hutle", "hutra", "hutre", "huven", "huver", "hvass", "hvast", "hvelv", "hvers", "hvert", "hvesa", "hvese", "hvess", "hvest", "hvete", "hvila", "hvile", "hvilt", "hvina", "hvine", "hvint", "hvisk", "hviss", "hvite", "hvitn", "hvitt", "hvori", "hybel", "hyben", "hydde", "hyder", "hydes", "hydra", "hyede", "hyene", "hyere", "hyete", "hyfen", "hyfer", "hyfsa", "hyfse", "hyfst", "hygde", "hygga", "hygge", "hying", "hyken", "hyker", "hykla", "hykle", "hyler", "hyles", "hylet", "hylia", "hylla", "hylle", "hylsa", "hylse", "hylte", "hymen", "hymne", "hynda", "hynde", "hynna", "hynne", "hypen", "hyper", "hypes", "hypet", "hyppa", "hyppe", "hypre", "hyrde", "hyren", "hyrer", "hyres", "hyret", "hyrpe", "hyrpt", "hyrte", "hysen", "hyser", "hysja", "hysje", "hyssa", "hysse", "hytta", "hytte", "hyven", "håden", "håene", "håken", "håker", "hålis", "hålka", "hålke", "hånda", "hånde", "hånen", "håner", "hånes", "hånet", "hånle", "hånlo", "hånsk", "hånte", "håper", "håpes", "håpet", "håpte", "hårer", "håres", "håret", "håtta", "håtte", "håven", "håver", "håves", "håvet", "hædde", "hæder", "hædes", "hæern", "hæken", "hækna", "hækne", "hælen", "hæler", "hæles", "hælet", "hælte", "hæren", "hærer", "hæres", "hærta", "hærte", "høene", "høgda", "høgde", "høgre", "høkel", "høker", "høkra", "høkre", "hølen", "høler", "høles", "hølet", "hølja", "hølje", "hølka", "hølke", "hølte", "hønen", "høner", "hønet", "hønsa", "hønse", "høren", "hører", "høres", "hørte", "høsta", "høste", "høvde", "høvel", "høver", "høvet", "høvla", "høvle", "høvra", "høvre", "høybu", "høyde", "høyer", "høyes", "høyet", "høymo", "høyna", "høyne", "høyre", "høyst", "høyår",
"iatri", "iboen", "iboer", "ibota", "icing", "ideal", "ideen", "ideer", "idene", "ident", "idest", "idige", "iding", "idiom", "idiot", "idkal", "idken", "idker", "idkes", "idket", "idoen", "idola", "idyll", "idømt", "ifall", "ifyll", "ifylt", "iføre", "iført", "igden", "igder", "igjen", "iglen", "igler", "iglet", "iguan", "iheks", "ihuga", "ihuge", "ikken", "ikker", "ikkun", "ikler", "ikles", "ikona", "iktal", "ikten", "ikter", "iktus", "iktys", "ilagt", "ilbud", "ilden", "ilder", "ildes", "ildet", "ildhu", "ildig", "ildna", "ildne", "ildre", "ilegg", "ilene", "ileum", "ileus", "ilign", "ilikn", "iling", "iljen", "iljer", "ilken", "ilker", "ilket", "ilmen", "ilmer", "ilska", "ilske", "ilskn", "ilskt", "ilsom", "ilter", "iltog", "iltre", "ilåta", "imaga", "image", "imago", "imens", "imida", "imina", "immer", "immun", "impro", "incel", "inden", "inder", "indie", "indol", "indra", "indre", "indri", "indøk", "inert", "infam", "inful", "infus", "ingen", "ingot", "innad", "innat", "innba", "innbe", "innbo", "innbu", "innby", "innen", "innga", "inngi", "inngå", "innla", "innom", "innos", "innpå", "innse", "innsy", "innså", "innta", "innvi", "innåt", "innøv", "input", "insja", "insje", "intet", "intim", "intro", "invar", "ioner", "ionet", "ionon", "irade", "irene", "iring", "irisk", "iritt", "iroko", "ironi", "irrer", "irres", "irret", "irske", "irtes", "irørt", "isand", "isbad", "isbar", "isben", "isbil", "isbit", "isblå", "isbod", "isbor", "isbre", "isbro", "isbru", "isbua", "isbåt", "isdam", "isede", "isene", "isent", "isere", "isete", "isfat", "isfot", "isfri", "isfør", "isgrå", "ishav", "ishud", "ishus", "ising", "isjer", "isjes", "isjet", "iskam", "islag", "islam", "islei", "islom", "islos", "islyn", "isløp", "ismen", "ismer", "ismur", "isner", "isnet", "isnål", "ispel", "isper", "ispes", "ispil", "ispol", "ispæl", "isras", "isrem", "isren", "isres", "isrik", "isråk", "issag", "issen", "isser", "issjø", "issnø", "issua", "issue", "issøl", "istak", "istem", "ister", "istid", "istme", "istra", "istre", "isveg", "isvei", "isvin", "isvåk", "isvær", "isydd", "isåra", "isøde", "isøks", "isøsa", "isøse", "isøya", "isøye", "itlen", "itler", "itlet", "ivdøl", "ivevd", "ivrer", "ivres", "ivret", "ivrig",
"jabba", "jabbe", "jabot", "jaden", "jader", "jaene", "jafsa", "jafse", "jagde", "jager", "jages", "jaget", "jaggu", "jaina", "jaing", "jaken", "jaker", "jakka", "jakke", "jakku", "jakta", "jakte", "jaleo", "jalla", "jalma", "jalme", "jambe", "jamla", "jamma", "jamme", "jamna", "jamne", "jamra", "jamre", "jamsa", "jamse", "jamta", "jamte", "janen", "janer", "jaord", "japon", "jaren", "jarer", "jares", "jaret", "jarop", "jarra", "jasen", "jaser", "jaska", "jaske", "jaspe", "jassa", "jasse", "jatta", "jatte", "javla", "javle", "jazza", "jazze", "jeans", "jeger", "jeget", "jeier", "jeies", "jeiet", "jekka", "jekke", "jekta", "jelka", "jelke", "jemte", "jenka", "jenke", "jenta", "jente", "jeres", "jerma", "jerme", "jerna", "jerpa", "jerpe", "jeten", "jeter", "jette", "jevna", "jevne", "jevnt", "jibba", "jibbe", "jihad", "jingo", "jinxa", "jinxe", "jippi", "jippo", "jirga", "jiven", "jiver", "jobba", "jobbe", "jobby", "jodat", "joden", "joder", "jodet", "jodid", "jodla", "jodle", "joene", "jogga", "jogge", "joggu", "johan", "joika", "joike", "joina", "joine", "joint", "joken", "joker", "joket", "jokka", "jokke", "jolen", "joler", "jolla", "jolle", "joner", "jorda", "jorde", "jorta", "jorte", "jotun", "joule", "jubel", "jubla", "juble", "judas", "jugde", "juger", "juges", "juget", "jugla", "jugle", "juice", "juicy", "jukka", "jukke", "juksa", "jukse", "julen", "juler", "jules", "julet", "julla", "julle", "julte", "jumar", "jumbo", "jumla", "jumle", "jumpa", "jumpe", "junge", "junka", "junke", "junse", "junta", "juret", "jurte", "jusen", "juser", "juten", "jutul", "juvel", "juver", "juves", "juvet", "jyden", "jyder", "jyska", "jyske", "jålen", "jåler", "jåles", "jålet", "jålte", "jåser", "jåses", "jåset", "jåssa", "jåsse", "jækel", "jækla", "jærbu", "jærlo", "jærsk", "jævel", "jævla", "jævle", "jøden", "jøder", "jøkel", "jøpel", "jøyer", "jøyet",
"kabal", "kabba", "kabbe", "kabel", "kaben", "kaber", "kabin", "kabla", "kable", "kabyl", "kadde", "kader", "kadre", "kaene", "kaffe", "kafir", "kagen", "kager", "kagga", "kagge", "kaien", "kaier", "kaies", "kaiet", "kaing", "kajal", "kajun", "kakao", "kaken", "kaker", "kaket", "kakka", "kakke", "kakla", "kakle", "kaksa", "kakse", "kalas", "kalde", "kaldt", "kalen", "kaler", "kalif", "kalka", "kalke", "kalla", "kalle", "kalte", "kalun", "kalva", "kalve", "kamao", "kamba", "kamel", "kamfr", "kamin", "kamma", "kamme", "kammo", "kampa", "kampe", "kamra", "kamre", "kamsa", "kamse", "kanak", "kanal", "kanel", "kanen", "kaner", "kanin", "kanji", "kanka", "kanke", "kanna", "kanne", "kanon", "kanta", "kante", "kantr", "kaona", "kaper", "kapok", "kappa", "kappe", "kapra", "kapre", "kapsl", "kapun", "karat", "karda", "karde", "karen", "karer", "kares", "karet", "karge", "kargo", "kargt", "karib", "karka", "karke", "karma", "karol", "karpe", "karra", "karre", "karri", "karse", "karsk", "karst", "karta", "karte", "karva", "karve", "kasen", "kaser", "kases", "kaset", "kasja", "kaska", "kaske", "kasko", "kasne", "kassa", "kasse", "kasta", "kaste", "kasus", "katal", "katar", "katen", "kater", "katet", "katre", "katta", "katte", "kauer", "kaues", "kauet", "kauka", "kauke", "kaula", "kaule", "kaupa", "kaupe", "kaura", "kaure", "kauri", "kause", "kaute", "kavai", "kavde", "kaven", "kaver", "kaves", "kavet", "kavla", "kavle", "kazoo", "keaen", "keaer", "kebab", "kediv", "keefa", "keefe", "keene", "kefir", "kegel", "kegen", "keger", "keier", "keies", "keiet", "keika", "keike", "keikt", "keile", "keilt", "keise", "keist", "keita", "keite", "keiva", "keive", "keivl", "keivt", "kelat", "kelim", "kenaf", "kendo", "keram", "kerry", "kesam", "keten", "ketla", "ketle", "keton", "ketsj", "khien", "khier", "khmer", "kiang", "kibba", "kibbe", "kicka", "kicke", "kiden", "kidet", "kidsa", "kifen", "kifer", "kifes", "kifet", "kiken", "kiker", "kikes", "kiket", "kikka", "kikke", "kikna", "kikne", "kikra", "kikre", "kiksa", "kikse", "kikte", "kilde", "kildr", "kilen", "kiler", "kiles", "kilet", "kilke", "killa", "kille", "kilne", "kiloa", "kilte", "kiltr", "kimen", "kimer", "kimes", "kimet", "kimme", "kimsa", "kimse", "kimte", "kinga", "kinge", "kings", "kinin", "kinka", "kinke", "kinks", "kinky", "kinna", "kinne", "kinon", "kiosk", "kiowa", "kipen", "kiper", "kipne", "kippa", "kippe", "kipra", "kipre", "kipte", "kiral", "kiren", "kirka", "kirke", "kisel", "kisen", "kiser", "kises", "kiset", "kishu", "kisla", "kisle", "kisma", "kista", "kiste", "kiten", "kiter", "kites", "kitet", "kitin", "kitla", "kitle", "kiton", "kitsj", "kitta", "kitte", "kivde", "kiver", "kives", "kivet", "kjaga", "kjage", "kjaka", "kjake", "kjaks", "kjalk", "kjapp", "kjapt", "kjase", "kjast", "kjatr", "kjava", "kjavd", "kjave", "kjavt", "kjeda", "kjede", "kjedt", "kjeer", "kjees", "kjeet", "kjeft", "kjegl", "kjeia", "kjekk", "kjekl", "kjeks", "kjekt", "kjele", "kjelk", "kjemi", "kjemp", "kjemt", "kjeng", "kjenn", "kjens", "kjent", "kjepp", "kjera", "kjern", "kjerr", "kjerv", "kjese", "kjesk", "kjest", "kjeve", "kjevl", "kjipe", "kjipt", "kjoks", "kjole", "kjona", "kjone", "kjuka", "kjuke", "kjæla", "kjæle", "kjælt", "kjære", "kjært", "kjæta", "kjæte", "kjætt", "kjøen", "kjøer", "kjøla", "kjøld", "kjøle", "kjøln", "kjølt", "kjømd", "kjøne", "kjønn", "kjønt", "kjøpa", "kjøpe", "kjøps", "kjøpt", "kjøre", "kjørn", "kjørr", "kjørt", "kjøtt", "kjøva", "kjøvd", "kjøve", "klabb", "kladd", "klade", "klaff", "klaga", "klagd", "klage", "klaka", "klake", "klakk", "klakn", "klamp", "klamr", "klams", "klamt", "klang", "klank", "klant", "klapp", "klapr", "klaps", "klara", "klare", "klarn", "klart", "klasa", "klase", "klask", "klass", "klast", "klatr", "klatt", "klaus", "klauv", "klava", "klavd", "klave", "klavr", "kleba", "klebe", "klebt", "kleda", "kledd", "klede", "kleet", "klegg", "kleia", "kleid", "kleie", "kleim", "klein", "kleip", "kleis", "kleiv", "klekk", "klekt", "klemt", "klene", "kleng", "klent", "klepp", "klerk", "kless", "klest", "klett", "kleve", "klidd", "klien", "klier", "klies", "kliet", "klikk", "klima", "kline", "kling", "klink", "klint", "klipa", "klipe", "klipp", "klips", "klipt", "klirr", "klisj", "kliss", "klitt", "kliva", "klivd", "klive", "klode", "kloen", "kloke", "klokk", "klokt", "klona", "klone", "klopp", "klora", "klore", "klort", "kloss", "klova", "klove", "klovn", "klubb", "kludd", "kludr", "kluft", "klukk", "klukt", "klump", "klums", "klunk", "kluns", "klure", "kluss", "klyde", "klyks", "klyng", "klynk", "klypa", "klype", "klypt", "klysa", "klyse", "klyss", "klyva", "klyvd", "klyve", "klyvi", "klådd", "klåen", "klåta", "klåte", "klæsj", "klødd", "kløen", "kløft", "kløkk", "kløkt", "kløna", "kløne", "klønt", "kløtr", "kløva", "kløvd", "kløve", "kløvj", "kløvn", "kløvt", "kløya", "kløye", "kløyv", "knabb", "knadd", "knagg", "knaka", "knake", "knakk", "knakt", "knall", "knape", "knapp", "knapt", "knark", "knarp", "knarr", "knart", "knasa", "knase", "knask", "knast", "knatr", "knatt", "knaus", "knavr", "knebl", "kneer", "knees", "kneet", "knega", "knegd", "knege", "knegg", "knegå", "kneik", "kneip", "kneis", "knekk", "knekt", "knele", "knell", "knelt", "knepa", "knepp", "knepr", "knept", "knert", "knest", "knett", "kniks", "knipa", "knipe", "knipl", "knipp", "knips", "knirk", "knisa", "knise", "knisl", "knist", "knitl", "knitr", "kniva", "knive", "knock", "knodd", "knode", "knoga", "knoge", "knoke", "knoll", "knopa", "knope", "knopp", "knort", "knota", "knote", "knott", "knubb", "knuen", "knuer", "knuff", "knuga", "knuge", "knull", "knult", "knupp", "knups", "knurk", "knurp", "knurr", "knurv", "knuse", "knusk", "knusl", "knusp", "knust", "knuta", "knute", "knutt", "knuvl", "knydd", "knyet", "knyst", "knyte", "knytt", "knåse", "knåst", "knæsj", "knødd", "knøen", "knøer", "knøla", "knøle", "knøtt", "knøve", "knøvl", "knøvt", "koaen", "koaer", "koaks", "koala", "kobbe", "koben", "kober", "kobla", "koble", "kobra", "kobre", "kodde", "kodek", "koden", "koder", "kodes", "kodet", "kodon", "kofta", "kofte", "kogge", "kogla", "kogle", "kogra", "kogre", "koien", "koier", "koine", "koken", "koker", "kokes", "koket", "kokis", "kokka", "kokke", "kokle", "kokne", "kokos", "kokra", "kokre", "koksa", "kokse", "kokte", "kolba", "kolbe", "kolby", "kolen", "koler", "koles", "kolet", "kolin", "kolja", "kolje", "kolla", "kolle", "kolli", "kolon", "kolos", "kolur", "kombo", "kombu", "komet", "komfy", "komma", "komme", "komne", "kompa", "kompe", "komsa", "komse", "komte", "konen", "koner", "kones", "konet", "konga", "konge", "konka", "konke", "konsa", "konse", "konta", "konte", "konti", "konto", "kontr", "konus", "kopal", "kopek", "kopen", "koper", "kopes", "kopla", "kople", "kopne", "koppa", "koppe", "kopra", "kopre", "kopte", "koral", "koran", "korat", "korde", "koreg", "koren", "korer", "kores", "koret", "korga", "korka", "korke", "korna", "korne", "korny", "korps", "korsa", "korse", "korta", "korte", "kortn", "kosen", "koser", "koses", "koset", "kossa", "kosta", "koste", "koten", "koter", "kotta", "koven", "kover", "kovet", "kovna", "kovne", "kovra", "kovre", "kraal", "krabb", "krabl", "kraer", "kraes", "kraet", "krafs", "kraft", "kraga", "krage", "kragg", "kraka", "krake", "krakk", "kraks", "krama", "krame", "kramp", "krams", "kramt", "krana", "krane", "krank", "krans", "krapp", "krapt", "krasa", "krase", "krasj", "krasl", "krass", "krast", "kratl", "kratt", "kraul", "kraum", "krava", "krave", "kravl", "kreas", "kreda", "kredd", "krede", "kreen", "kreer", "kreet", "kreft", "kreka", "kreke", "krekt", "krell", "krema", "kreme", "kreml", "kremt", "kreng", "krenk", "kreol", "krepp", "kreps", "krept", "krete", "kreti", "krets", "krevd", "kreve", "kribb", "kribl", "kridd", "kriet", "kriga", "krige", "krikl", "krill", "krime", "krims", "krina", "krine", "kring", "krink", "krins", "krint", "krisa", "krise", "krisl", "krisp", "krita", "krite", "kritl", "kritt", "kroat", "krodd", "kroen", "kroer", "kroka", "kroke", "kroki", "krokn", "krona", "krone", "kront", "kroon", "kropp", "krota", "krote", "krugg", "krugt", "kruke", "kruks", "krukt", "krull", "krumt", "krupp", "krusa", "kruse", "krusl", "krusp", "krust", "krutt", "krydd", "krydr", "kryer", "kryet", "kryla", "kryle", "kryll", "krylt", "krymp", "kryne", "krynt", "krypa", "krype", "krypt", "kryss", "kryst", "kråen", "kråer", "kråka", "kråke", "kråla", "kråle", "krålt", "kråpa", "krøka", "krøke", "krøkl", "krøkn", "krøkt", "krøll", "krøna", "krøpl", "krøpp", "krøsa", "krøss", "krøyp", "ksien", "ksier", "kubba", "kubbe", "kuben", "kuber", "kubes", "kubet", "kubus", "kubås", "kudos", "kuede", "kuene", "kuete", "kufis", "kufor", "kufsa", "kufse", "kufta", "kufte", "kuhud", "kuhår", "kuing", "kujon", "kujur", "kuken", "kuker", "kukri", "kulan", "kulda", "kulde", "kulen", "kuler", "kules", "kulet", "kulka", "kulke", "kulla", "kulle", "kulsa", "kulse", "kulsk", "kulsl", "kulsn", "kulta", "kulte", "kultn", "kulør", "kumla", "kumle", "kumme", "kumpa", "kumpe", "kumpl", "kumra", "kumre", "kumte", "kumys", "kunde", "kunka", "kunke", "kunne", "kunst", "kuost", "kupen", "kuper", "kupla", "kuple", "kupol", "kuppa", "kuppe", "kuren", "kurer", "kures", "kuret", "kurie", "kurla", "kurle", "kurne", "kurol", "kurra", "kurre", "kursa", "kurse", "kurta", "kurte", "kurva", "kurve", "kusen", "kuser", "kuska", "kuske", "kusma", "kusse", "kusta", "kuste", "kusti", "kutan", "kuten", "kuter", "kutes", "kutet", "kutra", "kutre", "kutrø", "kutta", "kutte", "kuvde", "kuven", "kuver", "kuves", "kuvet", "kuvne", "kuøra", "kuøre", "kuøya", "kuøyd", "kuøye", "kvabb", "kvabl", "kvada", "kvaen", "kvakk", "kvakl", "kvala", "kvale", "kvall", "kvalm", "kvalt", "kvamn", "kvann", "kvant", "kvape", "kvapn", "kvapp", "kvaps", "kvapt", "kvara", "kvare", "kvarg", "kvark", "kvart", "kvarv", "kvase", "kvasi", "kvass", "kvast", "kvate", "kvatn", "kvatr", "kvatt", "kvave", "kvavt", "kveda", "kvede", "kveen", "kveer", "kvees", "kveet", "kvega", "kvege", "kveif", "kveik", "kveil", "kvein", "kveis", "kveiv", "kveka", "kveke", "kvekk", "kvekt", "kveld", "kvele", "kvell", "kvelt", "kvelv", "kvepp", "kvept", "kverk", "kvern", "kverv", "kvesa", "kvese", "kvess", "kvest", "kvidd", "kvide", "kvier", "kviet", "kviga", "kvige", "kvike", "kvikk", "kvikn", "kvikt", "kvila", "kvile", "kvilt", "kvina", "kvine", "kvink", "kvinn", "kvint", "kvisa", "kvise", "kvisl", "kviss", "kvist", "kvita", "kvite", "kvitn", "kvitr", "kvitt", "kvote", "kvåme", "kvåmt", "kvævd", "kvæve", "kvævt", "kwaen", "kybel", "kyler", "kyles", "kylla", "kylle", "kyllt", "kylna", "kylne", "kylpa", "kylpe", "kylte", "kylus", "kymus", "kynda", "kynde", "kynne", "kypen", "kyper", "kyria", "kyrie", "kyrne", "kyrre", "kysen", "kyser", "kyses", "kysja", "kysje", "kyske", "kyskt", "kyssa", "kysse", "kysst", "kyste", "kyten", "kyter", "kytes", "kytet", "kytne", "kytte", "kådde", "kåing", "kåken", "kåker", "kåket", "kålen", "kåler", "kåles", "kålet", "kåpen", "kåper", "kårde", "kåren", "kårer", "kåres", "kåret", "kårku", "kårne", "kåsen", "kåser", "kåsør", "kåsøs", "kåten", "kåter", "kåtes", "kåtet", "kåtna", "kåtne", "kåtri", "kåver", "kåves", "kåvet", "kæben", "kæber", "kødag", "kødda", "kødde", "kødne", "køene", "køfri", "køfte", "køing", "køler", "køles", "kølet", "kølla", "kølle", "køtid", "køyen", "køyer", "køyes", "køyet", "køyna", "køyne", "køyta", "køyte",
"laban", "labba", "labbe", "label", "laben", "laber", "labia", "labil", "labre", "ladda", "ladde", "laden", "lader", "lades", "ladet", "laene", "lafta", "lafte", "lagde", "lagen", "lager", "lages", "laget", "lagga", "lagge", "lagje", "lagom", "lagra", "lagre", "lagte", "laien", "laier", "laika", "laing", "lakei", "laken", "laker", "lakes", "laket", "lakka", "lakke", "laksa", "laler", "lales", "lalet", "lalla", "lalle", "lambå", "lamma", "lamme", "lampa", "lampe", "landa", "lande", "lands", "lanen", "laner", "lanes", "lanet", "langa", "lange", "langs", "langt", "lanke", "lansa", "lanse", "laoen", "lapis", "lappa", "lappe", "lapsa", "lapse", "lardo", "laren", "larer", "large", "largo", "larka", "larke", "larma", "larme", "larom", "larva", "larve", "lasen", "laser", "laset", "laska", "laske", "lassa", "lassi", "lasso", "lasta", "laste", "lasur", "laten", "later", "lates", "latet", "latid", "latin", "latte", "lauen", "lauer", "lauga", "lauge", "laure", "lause", "laust", "lauta", "lauva", "lauve", "lavde", "laven", "laver", "lavet", "lavvo", "layup", "leasa", "lease", "leben", "lebåt", "ledda", "ledde", "leden", "leder", "ledes", "ledet", "ledig", "leede", "leete", "lefla", "lefle", "lefsa", "lefse", "legal", "legat", "legda", "legde", "legen", "leger", "leges", "leget", "legga", "legge", "legio", "legte", "lehus", "leida", "leide", "leien", "leier", "leies", "leiet", "leika", "leike", "leikt", "leina", "leine", "leing", "leint", "leira", "leire", "leita", "leite", "leitt", "leiva", "leivd", "leive", "leken", "leker", "lekes", "lekka", "lekke", "lekne", "lekra", "lekre", "leksa", "lekse", "lekta", "lekte", "lektr", "lelig", "lemen", "lemma", "lemme", "lempa", "lempe", "lemur", "lemus", "lenda", "lende", "lener", "lenes", "lenet", "lenga", "lenge", "lengt", "lenis", "lenka", "lenke", "lensa", "lense", "lente", "lento", "leone", "lepen", "leper", "lepet", "lepja", "lepje", "leppa", "leppe", "lepra", "lepre", "lepte", "lerka", "lerke", "lesba", "lesbe", "leser", "leses", "leska", "leske", "lespa", "lespe", "lespt", "lessa", "lesse", "lesst", "lesta", "leste", "lesto", "letal", "leten", "leter", "letes", "letna", "letne", "letta", "lette", "leuen", "leuge", "levde", "levee", "level", "leven", "lever", "leves", "levis", "levla", "levle", "levna", "levne", "levra", "levre", "liand", "liban", "liber", "libra", "lidar", "lidde", "liden", "lider", "lides", "lidte", "liene", "liere", "liert", "liger", "ligga", "ligge", "light", "ligna", "ligne", "liing", "liken", "liker", "likes", "liket", "likka", "likke", "likla", "likna", "likne", "likså", "likte", "liktå", "likør", "lilja", "lilje", "lilla", "lille", "limba", "limbe", "limbo", "limen", "limer", "limes", "limet", "limit", "limmo", "limon", "limte", "linda", "linde", "lindr", "linen", "liner", "linet", "lingo", "lings", "linja", "linje", "linka", "linke", "links", "linna", "linne", "linon", "linsa", "linse", "linål", "liper", "lipes", "lipid", "lipom", "lipte", "liren", "lirer", "lires", "liret", "lirka", "lirke", "lirte", "lisen", "liser", "lissa", "lisse", "lista", "liste", "litas", "liten", "liter", "lites", "litot", "litra", "liung", "livat", "livda", "livde", "liver", "lives", "livet", "livfe", "livid", "livku", "livna", "livne", "livre", "ljoma", "ljome", "ljore", "ljote", "ljott", "ljuge", "ljåen", "ljåer", "loada", "loade", "lobba", "lobbe", "lobby", "loben", "lober", "lobåt", "lobær", "locus", "lodda", "lodde", "loden", "lodje", "lodne", "loede", "loene", "loete", "loffa", "loffe", "lofri", "lofta", "logen", "loger", "loget", "logga", "logge", "logna", "logne", "lognt", "logos", "logra", "logre", "loing", "loins", "lojal", "lokal", "loken", "loker", "lokes", "loket", "lokka", "lokke", "lokre", "lokum", "lomma", "lomme", "lompa", "lompe", "lomra", "lomre", "lomvi", "lonen", "loner", "longa", "longe", "longs", "lonsa", "lonse", "loopa", "loope", "lopne", "loppa", "loppe", "loran", "lorja", "lorje", "losen", "loser", "loses", "loset", "losje", "losji", "lossa", "losse", "loste", "lotta", "lotte", "lotto", "lotus", "lovby", "lovde", "loven", "lover", "loves", "lovet", "lovga", "lovgi", "lovta", "lovte", "lovær", "lubba", "lubbe", "lubne", "lucia", "lucid", "luder", "luene", "luffa", "luffe", "lufsa", "lufse", "lufta", "lufte", "lugar", "luger", "lugga", "lugge", "lugna", "lugne", "lugnt", "lugom", "lugum", "luing", "luken", "luker", "lukes", "luket", "lukka", "lukke", "lukta", "lukte", "lulla", "lulle", "lumen", "lumpa", "lumpe", "lumra", "lumre", "lumsk", "lunar", "lunde", "luner", "lunes", "lunet", "lunga", "lunge", "lungo", "lunka", "lunke", "lunkn", "lunna", "lunne", "lunsj", "lunta", "lunte", "luoen", "luoer", "lupen", "luper", "lupin", "lupus", "luren", "lurer", "lures", "luret", "lurka", "lurke", "lurte", "lurva", "lurve", "lurås", "lusen", "luser", "luses", "luset", "luska", "luske", "lusne", "luste", "luten", "luter", "lutes", "lutet", "lutne", "lutra", "lutre", "lutte", "luvar", "luven", "luver", "luxen", "lyase", "lybsk", "lycea", "lydde", "lyden", "lyder", "lydes", "lydig", "lydla", "lydte", "lyede", "lyere", "lyest", "lyete", "lyger", "lyges", "lying", "lyker", "lykka", "lykke", "lykla", "lykle", "lykta", "lykte", "lyløs", "lymfe", "lyner", "lynet", "lynne", "lynol", "lynsj", "lynte", "lyren", "lyrer", "lysen", "lyser", "lyses", "lyset", "lysin", "lyska", "lyske", "lysla", "lysna", "lysne", "lysol", "lyssa", "lysta", "lyste", "lystr", "lysår", "lyter", "lytes", "lytet", "lytta", "lytte", "lyver", "lyves", "lyvær", "lågen", "låger", "låges", "låget", "lågna", "lågne", "låmen", "låmer", "låmes", "låmte", "lånen", "låner", "lånes", "lånet", "lånta", "lånte", "lårer", "låres", "låret", "lårte", "låsen", "låser", "låses", "låset", "låste", "låten", "låter", "låtes", "låtet", "låven", "låver", "lægda", "læger", "lægra", "lægre", "lærde", "læren", "lærer", "læres", "læret", "lærte", "læser", "læses", "læste", "læter", "lætet", "lødde", "løden", "lødig", "løene", "løent", "løfta", "løfte", "løgna", "løgst", "løing", "løken", "løker", "løkka", "løkke", "lønna", "lønne", "lønsk", "lønte", "løper", "løpes", "løpet", "løpsk", "løpte", "lørja", "lørje", "løsen", "løser", "løses", "løsga", "løsgi", "løsna", "løsne", "løssa", "løssi", "løste", "løvda", "løven", "løver", "løvet", "løvli", "løyen", "løyer", "løyet", "løynd", "løyne", "løynt", "løypa", "løype", "løypt", "løyse", "løyst", "løyva", "løyvd", "løyve",
"macho", "madam", "madet", "mafia", "magen", "mager", "mages", "maget", "magga", "magge", "magma", "magot", "magra", "magre", "magus", "mahdi", "maier", "maies", "maiet", "maila", "maile", "maire", "major", "makak", "makan", "makel", "maken", "maker", "makes", "maket", "makka", "makke", "makko", "makne", "makro", "maksa", "makse", "maksi", "maksl", "makta", "makte", "malay", "malen", "maler", "males", "malia", "malja", "malje", "malle", "malme", "malta", "malte", "malum", "malus", "malva", "malør", "mamba", "mambo", "mamma", "manat", "manen", "maner", "manes", "manet", "manga", "mange", "mangl", "mango", "mangt", "manka", "manke", "manko", "manna", "manne", "manns", "mansi", "mansk", "mante", "mantl", "manus", "maori", "mappa", "mappe", "maren", "marer", "marga", "marge", "marin", "marja", "marje", "marka", "marke", "marki", "marma", "marme", "maron", "marsj", "marsk", "martr", "masai", "masen", "maser", "mases", "maset", "maska", "maske", "masne", "masra", "masre", "masse", "masta", "maste", "mastr", "masur", "masut", "matbu", "matby", "match", "maten", "mater", "mates", "matet", "matkø", "matna", "matne", "matos", "matro", "matså", "matta", "matte", "matøl", "maula", "maule", "maura", "maure", "mauve", "maven", "maver", "maves", "mavet", "medda", "medde", "meded", "meden", "meder", "medet", "medga", "medgi", "medgå", "media", "medio", "medoc", "medta", "meget", "megga", "megge", "megla", "megle", "mehea", "meidd", "meide", "meien", "meier", "meies", "meiet", "meina", "meine", "meins", "meint", "meisa", "meise", "meisl", "meist", "meita", "meite", "meken", "mekka", "mekke", "mekla", "mekle", "mekra", "mekre", "melde", "meldt", "melen", "meler", "meles", "melet", "melis", "melka", "melke", "mella", "melle", "melne", "melon", "melta", "melte", "memer", "memes", "memet", "memoa", "menda", "mende", "mened", "mener", "menes", "menet", "menga", "menge", "mengt", "menig", "menis", "menta", "mente", "mergl", "merka", "merke", "merla", "merle", "merra", "mersa", "mesan", "mesen", "meska", "meske", "meson", "messa", "messe", "meste", "mesto", "mestr", "metal", "metan", "meten", "meter", "metol", "metoo", "metra", "metro", "metta", "mette", "metyl", "meute", "mezzo", "mhoen", "midja", "midje", "midla", "midle", "midte", "midtr", "miene", "miger", "miges", "miget", "mikka", "mikke", "mikra", "mikre", "mikro", "miksa", "mikse", "milda", "milde", "mildn", "mildt", "milen", "miler", "miles", "milie", "miljø", "mille", "mimen", "mimer", "mimes", "mimet", "mimra", "mimre", "minen", "miner", "mines", "minet", "mingl", "minka", "minke", "minna", "minne", "minor", "minsk", "minst", "minte", "minus", "minør", "miose", "miren", "mirer", "mirin", "misby", "misen", "miser", "missa", "misse", "mista", "miste", "misår", "mitra", "mixed", "mjaua", "mjaue", "mjele", "mjelt", "mjuka", "mjuke", "mjukn", "mjukt", "mjått", "mjødm", "mjøla", "mjøle", "mjølk", "mjøll", "mjølt", "moaen", "moaer", "moare", "mobba", "mobbe", "moben", "mober", "mobil", "moblå", "modal", "modem", "moden", "moder", "modig", "modna", "modne", "modul", "modus", "modøl", "moene", "moere", "moest", "moffe", "mogop", "mogul", "mohet", "moing", "moker", "mokka", "moksa", "molal", "molar", "molbo", "molda", "molde", "moldn", "molen", "moler", "moles", "molet", "molok", "molta", "molte", "molto", "mompa", "mompe", "momsa", "momse", "mongo", "monna", "monne", "monom", "monte", "moona", "moone", "moped", "mopla", "moppa", "moppe", "moral", "morda", "moren", "morer", "mores", "moret", "morfa", "morfe", "morgn", "morin", "morkn", "morna", "moroa", "moron", "moros", "morra", "morsa", "morse", "morsk", "morte", "mosen", "moser", "moses", "moset", "moske", "mosso", "moste", "moten", "moter", "motet", "motiv", "motor", "motsa", "motsi", "motta", "motti", "motto", "moven", "mover", "moves", "movet", "mucin", "mudra", "mudre", "muffa", "muffe", "mufti", "mugen", "muger", "muges", "muget", "mugga", "mugge", "mugna", "mugne", "mukka", "mukke", "mukøs", "mulda", "mulde", "muldn", "mulen", "muler", "mules", "mulig", "mulkt", "mulla", "mulle", "mulna", "mulne", "mulra", "mulre", "multa", "multe", "mumie", "mumla", "mumle", "mumpa", "mumpe", "mumsa", "mumse", "munda", "mungo", "munka", "munke", "munna", "munne", "muntr", "mural", "murby", "muren", "murer", "mures", "muret", "murka", "murke", "murpa", "murpe", "murra", "murre", "murte", "musak", "musea", "musen", "muser", "muses", "muset", "muska", "muske", "mussa", "musse", "muste", "musår", "mutae", "muten", "muter", "mutes", "mutet", "mutra", "mutre", "mutte", "mycel", "myene", "mygla", "mygle", "mykdå", "myken", "myker", "mykes", "myket", "mykis", "mykna", "mykne", "mykte", "mylar", "mylda", "mylde", "myldr", "myldt", "myler", "myles", "mylte", "mynde", "mynta", "mynte", "myoma", "myona", "myope", "myopi", "myopt", "myose", "myrak", "myrda", "myrde", "myren", "myrer", "myret", "myrra", "mysen", "myser", "myses", "mysis", "myska", "myske", "mysli", "myste", "myten", "myter", "mytet", "mytte", "måbær", "mågen", "måger", "måken", "måker", "måkes", "måket", "måkte", "måler", "måles", "målet", "målsy", "målte", "måned", "månen", "måner", "måper", "måpes", "måpte", "måral", "måren", "mårer", "måsen", "måser", "måten", "måter", "måtes", "måtet", "måtte", "måved", "mælen", "mæler", "mæles", "mælet", "mælte", "mæter", "mætes", "mætte", "møbel", "møbla", "mødde", "møden", "mødig", "mødom", "mødre", "møene", "møfrø", "møkka", "møkke", "mølet", "mølja", "mølje", "mølla", "mølle", "mølne", "møner", "mønes", "mønet", "mønja", "mønje", "mønte", "mørja", "mørje", "mørka", "mørke", "mørkn", "mørkt", "mørna", "mørne", "møter", "møtes", "møtet", "møtte", "møyde", "møyen", "møyer",
"nabba", "nabbe", "nabob", "nacha", "nache", "nadir", "nafsa", "nafse", "nafst", "nafta", "nagde", "nager", "nages", "naget", "nagga", "nagge", "nagla", "nagle", "naide", "naier", "naies", "naiet", "naila", "naile", "naira", "naive", "naivt", "naken", "nakfa", "nakka", "nakke", "nakne", "nalen", "naler", "namet", "nandu", "nanny", "nappa", "nappe", "naras", "narko", "narra", "narre", "narva", "narve", "nasal", "naska", "naske", "naskt", "nasse", "nasti", "nasty", "natal", "naten", "nater", "nates", "natet", "natig", "nativ", "natra", "natre", "natta", "natte", "natur", "nauba", "naube", "naude", "nauer", "naues", "nauet", "naure", "naust", "nauta", "navar", "naver", "naves", "navet", "navla", "navle", "navna", "navne", "nebba", "nebbe", "nedad", "nedba", "nedbe", "neden", "nedis", "nedla", "nedom", "nedpå", "nedre", "nedta", "neene", "negat", "neger", "negla", "negle", "negre", "nehei", "neide", "neier", "neies", "neiet", "neigu", "neing", "neise", "neist", "neket", "nekta", "nekte", "nelde", "nemma", "nemme", "nemnd", "nenie", "nenna", "nenne", "nente", "nepal", "nepen", "neper", "nepne", "neppe", "nerda", "nerde", "nerts", "nerve", "nesbu", "nesen", "neser", "neses", "neset", "nesla", "nesle", "nesta", "neste", "netta", "nette", "netto", "neume", "neven", "never", "neves", "nevet", "nevne", "nevnt", "nevra", "nevre", "nibad", "nibba", "nibbe", "niber", "nibes", "nibla", "nible", "nicka", "nidel", "nider", "nides", "nidet", "nidsk", "niere", "niert", "niesa", "niese", "nifse", "nifst", "nigla", "nigle", "niglo", "nihil", "nikab", "nikka", "nikke", "niksa", "nikse", "niles", "nilot", "ninja", "nipen", "niper", "nippa", "nippe", "nirøk", "nisan", "nisen", "niser", "nisje", "nissa", "nisse", "nista", "niste", "nisyr", "nisys", "niten", "niter", "nitet", "nitid", "nitne", "nitta", "nitte", "nitti", "nival", "nivåa", "niårs", "niøye", "njaet", "nobel", "noble", "noddy", "noden", "noder", "nodul", "nogen", "noils", "nokke", "nokså", "nomen", "nomoi", "nomos", "nonen", "noner", "nones", "nonet", "nonie", "nonna", "nonne", "nonte", "noobs", "norda", "nordi", "nordr", "noret", "norna", "norne", "norsk", "nosen", "noser", "noses", "nossa", "noste", "notam", "notar", "notat", "noten", "noter", "notis", "noven", "nover", "noxen", "nubba", "nubbe", "nubne", "nubuk", "nudda", "nudde", "nudel", "nuene", "nufsa", "nufse", "nufst", "nugat", "nugde", "nugga", "nugge", "nulla", "nulle", "nulte", "numne", "numra", "numre", "nupen", "nuper", "nuppa", "nuppe", "nupra", "nupre", "nurag", "nurka", "nuska", "nuske", "nusla", "nusle", "nussa", "nusse", "nuten", "nuter", "nutsj", "nuven", "nuver", "nuvet", "nyala", "nybil", "nybær", "nyene", "nyeng", "nyere", "nyest", "nygla", "nygle", "nyhet", "nying", "nyken", "nyker", "nykka", "nykke", "nykte", "nykål", "nylag", "nyles", "nylig", "nylon", "nymfa", "nymfe", "nynna", "nynne", "nyord", "nypen", "nyper", "nypes", "nypet", "nypte", "nyren", "nyrer", "nyret", "nyrik", "nysen", "nyser", "nyses", "nyset", "nysko", "nysnø", "nyste", "nyter", "nytes", "nytid", "nytta", "nytte", "nyvde", "nyved", "nyveg", "nyvei", "nyven", "nyver", "nyves", "nyvle", "nyåra", "nåblå", "nådde", "nåden", "nådig", "nåeld", "nåene", "nåent", "nåing", "nålen", "nåler", "nåles", "nålte", "nålys", "nåmet", "nåtid", "nåtla", "nåtle", "nåvel", "nærer", "næres", "næret", "nærig", "nærma", "nærme", "nærpå", "nærte", "nævus", "nødbu", "nødde", "nøden", "nøder", "nødes", "nødet", "nødig", "nødår", "nøffa", "nøffe", "nøgda", "nøgde", "nøker", "nøkes", "nøkka", "nøkke", "nøkla", "nøkle", "nøkte", "nølen", "nøler", "nøles", "nølte", "nøren", "nører", "nøres", "nøret", "nørte", "nøser", "nøset", "nøsta", "nøste", "nøter", "nøtta", "nøyde", "nøyen", "nøyer", "nøyes", "nøyte", "nøytt",
"oasen", "oaser", "oasis", "obien", "obier", "oblat", "oblig", "oblik", "oboen", "oboer", "odden", "odder", "oddes", "oddet", "odene", "odere", "odest", "odiøs", "odler", "odles", "odlet", "offer", "ofrer", "ofres", "ofret", "ofsen", "ofser", "ogive", "ohmen", "ohmer", "ohmes", "ohmet", "ohmsk", "oiene", "oiing", "okapi", "okere", "okker", "okkes", "okket", "oksen", "okser", "oksid", "oktal", "oktan", "oktav", "olden", "older", "oldis", "oldra", "oldre", "olein", "olene", "oleum", "oljen", "oljer", "oljes", "oljet", "ollen", "oller", "ollet", "olmen", "olmer", "olmes", "olmet", "olsok", "omarm", "ombar", "ombot", "ombre", "ombud", "ombyr", "ombys", "ombær", "ombød", "ombøy", "omdel", "omdåp", "omdøp", "omega", "omegn", "omena", "oment", "omfar", "omfat", "omgav", "omgir", "omgis", "omgår", "omgås", "omhug", "omina", "omkod", "omkom", "omlag", "omlak", "omlyd", "omløp", "ompod", "omram", "områr", "omrøm", "omrør", "omsen", "omsko", "omsmi", "omsut", "omsyn", "omsyr", "omsys", "omsøm", "omtal", "omtyd", "omveg", "omvei", "omvis", "omvøl", "onani", "onder", "ondet", "onera", "oning", "onkel", "onkos", "onnen", "onner", "onnes", "onnet", "onnig", "onnug", "onyks", "oogam", "opake", "opakt", "opart", "opera", "opiat", "opium", "oppad", "oppal", "oppby", "opper", "oppet", "oppfø", "oppga", "oppgi", "oppgå", "oppla", "oppny", "oppnå", "oppom", "oppsa", "oppsi", "oppta", "oppøv", "opter", "opusa", "orale", "oralt", "orant", "orbis", "orbit", "orden", "order", "ordes", "ordet", "ordla", "ordna", "ordne", "ordra", "ordre", "oreli", "orene", "orfen", "organ", "orgel", "orger", "orges", "orget", "orgie", "orgla", "orgon", "origo", "oriya", "orkan", "orken", "orker", "orkes", "orket", "orlog", "orlon", "orlov", "ormen", "ormer", "ormet", "ornat", "orner", "oromo", "orren", "orrer", "orten", "orter", "orvet", "osean", "osene", "oshol", "osing", "osker", "osman", "ospen", "osper", "osset", "ossia", "osten", "oster", "ostet", "ostis", "otere", "otiet", "otitt", "otium", "otrer", "otres", "otret", "otten", "ottes", "ouden", "ouder", "ouene", "ounce", "outer", "outes", "outet", "outro", "ovale", "ovalt", "ovapå", "overs", "ovgod", "ovhet", "ovkar", "ovlig", "ovnen", "ovner", "ovrer", "ovret", "ovrik",
"pabst", "pacen", "pacer", "paces", "pacet", "padda", "padde", "padel", "paden", "pader", "padla", "padle", "padre", "paffa", "paffe", "pagai", "pagan", "paien", "paier", "paiet", "paken", "paket", "pakka", "pakke", "paksa", "pakta", "pakte", "palea", "palen", "paler", "pales", "palio", "palje", "palla", "palle", "palma", "palme", "palte", "panda", "panel", "paner", "panga", "panko", "panna", "panne", "pansr", "panta", "pante", "panty", "papat", "papel", "papir", "pappa", "pappe", "parat", "parce", "pareo", "parer", "pares", "paret", "paria", "parti", "party", "paryr", "paset", "pasja", "pasje", "passa", "passe", "pasta", "paste", "patch", "pater", "patio", "patos", "patre", "patsj", "patta", "patte", "pauke", "paula", "paule", "pauli", "pault", "pause", "pauta", "paute", "paven", "paver", "pavet", "pavor", "peang", "pedal", "peela", "peele", "peers", "pegen", "peger", "pegga", "pegge", "peila", "peile", "peilt", "peisa", "peise", "peist", "peiva", "peive", "peker", "pekes", "peket", "pekte", "pelen", "peler", "peles", "pelet", "pella", "pelle", "pelsa", "pelse", "pelte", "penat", "pence", "pendl", "penga", "penge", "penis", "penna", "penne", "penni", "penny", "pensa", "pense", "pensl", "penta", "pente", "pepen", "pepet", "peppa", "peppe", "pepra", "pepre", "perfa", "perfe", "perla", "perle", "persa", "perse", "pervo", "pesen", "peser", "peses", "peset", "pesos", "pesta", "peste", "pesto", "peten", "peter", "petet", "petit", "petra", "petre", "petum", "phien", "phier", "phoen", "piaff", "piano", "picot", "piden", "pider", "piece", "piene", "pieta", "piffa", "piffe", "pifta", "pifte", "pigga", "pigge", "pigna", "pigne", "piken", "piker", "piket", "pikka", "pikke", "pikot", "pikør", "pilar", "pilen", "piler", "piles", "pilka", "pilke", "pilla", "pille", "pilne", "pilot", "pilra", "pilre", "pilsa", "pilse", "pilta", "pilte", "pimpa", "pimpe", "pinen", "piner", "pines", "pinet", "pinga", "pinge", "pingl", "pingo", "pings", "pinje", "pinka", "pinke", "pinna", "pinne", "pinol", "pinot", "pinsa", "pinse", "pinst", "pinta", "pinte", "pinto", "pints", "pinup", "piona", "pipen", "piper", "pipes", "pipet", "pipil", "pipla", "piple", "piplo", "pippa", "pippe", "pipra", "pipre", "pirat", "piren", "pirer", "pirka", "pirke", "pirne", "pirog", "pirol", "pirra", "pirre", "pirsa", "pirse", "pirum", "pirål", "piska", "piske", "pissa", "pisse", "pista", "piste", "pistr", "pitch", "pitla", "pitle", "pitra", "pitre", "pitte", "pivot", "pizza", "pjakk", "pjaks", "pjall", "pjalt", "pjank", "pjask", "pjatr", "pjatt", "pjokk", "pjona", "pjone", "pjont", "pjota", "pjote", "pjusk", "pjutr", "pjutt", "pjåta", "pjåte", "plaff", "plafr", "plaga", "plagd", "plage", "plagg", "plakk", "plana", "plane", "plank", "plant", "plapr", "plask", "plass", "plast", "plata", "plate", "platt", "platå", "pleas", "plebs", "pledd", "pleia", "pleid", "pleie", "plena", "plent", "pleti", "plett", "plien", "plikt", "pling", "plint", "plire", "plirt", "plitt", "ploga", "ploge", "plogg", "plopp", "plota", "plott", "pludr", "plugg", "plukk", "plump", "plumr", "plums", "pluss", "plysj", "plytt", "pløre", "pløsa", "pløse", "pløst", "pløya", "pløyd", "pløye", "podda", "podde", "poden", "poder", "podes", "podet", "podia", "poema", "poene", "poeng", "poesi", "poilu", "point", "poise", "pokal", "poker", "pokes", "poket", "pokra", "pokre", "pokus", "polar", "polen", "poler", "poles", "polet", "polio", "polis", "polje", "polka", "polkø", "polsk", "polte", "polær", "poløl", "pomor", "pompa", "pompe", "poner", "ponni", "ponto", "poola", "poole", "popen", "poper", "poppa", "poppe", "popup", "poren", "porer", "poret", "porno", "porto", "porøs", "posen", "poser", "poses", "poset", "poshe", "posht", "posne", "posta", "poste", "posør", "poten", "poter", "potet", "potta", "potte", "potto", "praia", "praie", "prakk", "prakt", "prale", "pralt", "prang", "prank", "prasl", "prata", "prate", "preet", "prega", "prege", "preik", "preka", "preke", "prekt", "prell", "prent", "prepp", "press", "prest", "prett", "priar", "pride", "prier", "prikk", "prikl", "prill", "prima", "prime", "primo", "primt", "prins", "print", "prion", "prior", "prisa", "prise", "prist", "probe", "proer", "proes", "proet", "proff", "proft", "promo", "promp", "propp", "props", "prosa", "pross", "prost", "prott", "prova", "prove", "provo", "proxy", "prude", "prunk", "prupp", "prust", "pruta", "prute", "pryda", "pryde", "pryle", "prylt", "prøva", "prøvd", "prøve", "prøys", "psien", "psier", "psyka", "psyke", "psyko", "ptose", "ptroa", "ptroe", "puben", "puber", "pubes", "pudet", "pudla", "pudle", "pudra", "pudre", "puffa", "puffe", "puger", "puges", "puget", "pugga", "pugge", "puken", "puker", "pukka", "pukke", "puldr", "puler", "pules", "pulje", "pulpa", "pulsa", "pulse", "pulte", "pumpa", "pumpe", "pumps", "punch", "punda", "puner", "punga", "punge", "punka", "punkt", "punsa", "punse", "punsj", "punsl", "puppa", "puppe", "purda", "purim", "purin", "purka", "purke", "purla", "purle", "purra", "purre", "pusen", "puser", "puset", "pusha", "pushe", "puska", "puske", "pusla", "pusle", "pussa", "pusse", "pusta", "puste", "puten", "puter", "putet", "putla", "putle", "putne", "putra", "putre", "putsj", "putta", "putte", "putti", "putto", "pyemi", "pygme", "pyken", "pyket", "pylon", "pylra", "pylre", "pynta", "pynte", "pyore", "pyren", "pyrer", "pyres", "pyrop", "pyrte", "pysen", "pyser", "pyses", "pyset", "pysne", "pyste", "pytia", "pyton", "pytta", "pytte", "pyuri", "påakt", "påank", "påbud", "påbyr", "påbys", "påbød", "påbøy", "pådra", "pådro", "pådøm", "påemn", "påfør", "pågår", "påhør", "påken", "påker", "påkle", "påkom", "pålen", "påler", "pålur", "påløp", "pånød", "påpek", "påser", "påses", "påska", "påske", "påsto", "påstå", "påsyn", "påsyr", "påsys", "påtal", "påtar", "påtok", "påtår", "påver", "påvis", "påvre", "pælen", "pæler", "pæles", "pælet", "pælma", "pælme", "pælte", "pæren", "pærer", "pøbel", "pøbla", "pøble", "pøker", "pøkes", "pøket", "pølen", "pøler", "pølla", "pølle", "pølsa", "pølse", "pønal", "pønka", "pønsa", "pønse", "pønsk", "pøsen", "pøser", "pøses", "pøste", "pøter", "pøtes", "pøtet", "pøyta", "pøyte",
"qibla", "quale", "quart", "quilt", "quipu", "quiza", "quize",
"rabab", "rabba", "rabbe", "rabbi", "rabid", "rabla", "rable", "rabus", "racer", "racet", "racka", "racon", "radar", "radda", "radde", "raden", "rader", "rades", "radet", "radig", "radio", "radix", "radom", "radon", "radså", "raene", "raffe", "rafia", "rafla", "rafle", "rafsa", "rafse", "rafta", "rafte", "ragen", "rager", "rages", "raget", "ragga", "ragge", "ragla", "ragle", "ragne", "raida", "raide", "raien", "raila", "raile", "rails", "raing", "raita", "rajen", "rajer", "rajes", "rajet", "rajon", "rakel", "raken", "raker", "rakes", "raket", "rakka", "rakke", "rakla", "rakle", "rakna", "rakne", "raksa", "rakse", "rakst", "rakte", "ralla", "ralle", "rally", "ramen", "ramin", "ramla", "ramle", "ramma", "ramme", "rampa", "rampe", "ramsa", "ramse", "ranch", "randa", "rande", "raner", "ranes", "ranet", "ranga", "range", "rangl", "rangt", "ranka", "ranke", "rankt", "rante", "rapen", "raper", "rapes", "rapet", "rapid", "rapir", "rapla", "raple", "rappa", "rappe", "rapsa", "rapse", "rapte", "rasen", "raser", "rases", "raset", "raska", "raske", "raskt", "rasla", "rasle", "raspa", "raspe", "rassa", "rasse", "rasta", "raste", "rasur", "raten", "rater", "rates", "ratet", "ratin", "ratio", "ratla", "ratle", "ratne", "ratsj", "ratta", "ratte", "rauka", "rauke", "raula", "raule", "rausa", "rause", "raust", "rauta", "raute", "raven", "raver", "raves", "ravet", "ravla", "ravle", "ravna", "ravne", "rayon", "ready", "reale", "realt", "rebab", "rebus", "recap", "redda", "redde", "reden", "reder", "redes", "redet", "redie", "redig", "reell", "reelt", "reene", "refil", "refsa", "refse", "refst", "regal", "regel", "regen", "reger", "regla", "regle", "regna", "regne", "regnt", "rehab", "reide", "reien", "reier", "reies", "reifa", "reife", "reika", "reike", "reiki", "reikt", "reile", "reima", "reime", "reina", "reine", "reing", "reint", "reipa", "reipe", "reira", "reire", "reisa", "reise", "reist", "reita", "reite", "reiva", "reivd", "reive", "rekel", "reken", "reker", "rekes", "reket", "rekis", "rekka", "rekke", "rekkt", "rekla", "rekle", "rekst", "rekte", "rekto", "rekyl", "relat", "relea", "remen", "remis", "remja", "remje", "remma", "remme", "remsa", "remse", "renal", "renin", "renke", "renna", "renne", "rensa", "rense", "rensk", "renta", "rente", "repen", "reper", "repet", "repli", "repos", "repro", "reser", "reset", "resin", "retna", "retne", "retor", "retro", "retta", "rette", "retur", "revde", "reven", "rever", "reves", "revet", "revir", "revja", "revje", "revle", "revna", "revne", "rexen", "rhoen", "rhoer", "ribba", "ribbe", "riben", "riber", "ricin", "ridde", "rider", "rides", "riene", "riere", "riffa", "riffe", "rifla", "rifle", "rifta", "rigel", "riger", "riget", "rigga", "rigge", "rigid", "rigla", "rigle", "rigor", "riing", "rijal", "riker", "riket", "rikka", "rikke", "rikla", "rikle", "rikna", "rikne", "riksa", "rikse", "riksl", "rikta", "rikte", "rilen", "riler", "rilla", "rille", "rimen", "rimer", "rimes", "rimet", "rimma", "rimme", "rimpa", "rimpe", "rimte", "rinde", "riner", "rines", "rinet", "ringa", "ringe", "ringl", "ringt", "rinne", "rinte", "rioja", "ripen", "riper", "ripes", "ripet", "rippa", "rippe", "ripte", "riren", "rirer", "risen", "riser", "rises", "riset", "riska", "riske", "risky", "risla", "risle", "rispa", "rispe", "rissa", "risse", "rista", "riste", "risøl", "riten", "riter", "rites", "ritet", "ritsj", "ritta", "ritus", "rival", "riven", "river", "rives", "rivet", "robba", "robbe", "roben", "rober", "robot", "robåt", "rocka", "rocke", "rodde", "rodel", "roden", "rodeo", "roder", "roede", "roene", "roere", "roete", "roeål", "rogga", "rogge", "rogna", "roing", "rojal", "roker", "rokka", "rokke", "rokoa", "roksa", "rolag", "rolig", "rolla", "rolle", "rollo", "roman", "rombe", "romen", "romer", "romma", "romme", "romsk", "rondo", "ronga", "rongl", "ronin", "ronki", "roots", "roper", "ropes", "ropet", "ropte", "rorbu", "roren", "roret", "roråk", "rosen", "roser", "roses", "roset", "rosin", "rossa", "rosse", "rosta", "roste", "rotak", "rotal", "roten", "roter", "rotes", "rotet", "rotid", "rotor", "rotta", "rotte", "rotur", "rotål", "rouge", "rough", "roven", "rover", "rovet", "roåra", "roåre", "rubba", "rubbe", "rubel", "rubin", "rubis", "rubne", "rubor", "ruede", "ruelo", "ruene", "ruere", "ruest", "ruete", "ruffa", "ruffe", "rufsa", "rufse", "rugby", "rugda", "rugde", "rugen", "ruger", "ruges", "ruget", "rugga", "rugge", "rugla", "rugle", "rugål", "ruhet", "ruing", "ruken", "ruker", "rukes", "ruket", "rukka", "rukke", "rukla", "rukle", "rukne", "ruler", "rules", "rulet", "rulla", "rulle", "rulta", "rulte", "rumba", "rumla", "rumle", "rummy", "rumor", "rumpa", "rumpe", "runda", "runde", "rundt", "runen", "runer", "runes", "runet", "runga", "runge", "runka", "runke", "runne", "runsa", "runse", "rural", "ruren", "rurer", "ruret", "rusen", "ruser", "ruses", "ruset", "rusha", "rushe", "ruska", "ruske", "rusla", "rusle", "rusta", "ruste", "rustn", "ruten", "ruter", "rutes", "rutet", "rutil", "rutla", "rutle", "rutsj", "rutta", "rutte", "ruvde", "ruven", "ruver", "ruvet", "ruvla", "ruvle", "ruvne", "rydda", "rydde", "ryene", "ryent", "ryere", "ryest", "ryfta", "ryfte", "ryger", "rygga", "rygge", "rygja", "rygna", "rygne", "rying", "ryker", "rykka", "rykke", "rykta", "rykte", "rylen", "ryler", "rynka", "rynke", "rypen", "ryper", "ryren", "ryrna", "ryrne", "rysja", "rysje", "ryske", "ryssa", "rysse", "rysta", "ryste", "ryter", "rytes", "rytet", "rytme", "råbar", "råbra", "rådde", "råden", "råder", "rådes", "rådet", "rådga", "rådgi", "rådig", "rådla", "rådne", "rådyr", "råene", "råere", "råest", "råfil", "råfin", "rågod", "råhet", "råhud", "råhøy", "råing", "råken", "råker", "råkes", "råket", "råkne", "råkte", "råkul", "rålam", "råler", "råles", "rålet", "rålik", "rålte", "rålær", "råmen", "råmne", "rånen", "råner", "rånes", "rånet", "rånte", "råris", "råsen", "råser", "råske", "råsur", "råten", "råter", "råtev", "råtna", "råtne", "råull", "råved", "råvåt", "råvær", "ræler", "ræles", "rælet", "rælte", "rærne", "ræven", "ræver", "rødde", "røden", "røder", "rødes", "rødma", "rødme", "rødna", "rødne", "røene", "røffe", "røfla", "røfle", "røfta", "røfte", "røken", "røker", "røkes", "røket", "røkje", "røkla", "røkne", "røkta", "røkte", "røler", "røles", "rølet", "rølpa", "rølpe", "rølte", "rømma", "rømme", "rømte", "rønna", "rønne", "røntg", "røper", "røpes", "røpet", "røpte", "røren", "rører", "røres", "røret", "rørig", "rørla", "rørne", "rørte", "røska", "røske", "røsta", "røste", "røsti", "røter", "røtet", "røvde", "røver", "røves", "røvet", "røyen", "røyer", "røyka", "røyke", "røykt", "røyna", "røynd", "røyne", "røynt", "røyra", "røysa", "røyse", "røyst", "røyta", "røyte", "røyvd", "røyve",
"saale", "sabba", "sabbe", "sabel", "sabla", "sable", "sabne", "sabra", "sadel", "sadhu", "sadla", "sadle", "safen", "safer", "safes", "safet", "safir", "safta", "safte", "sagde", "sagen", "sager", "sages", "saget", "sagga", "sagge", "sagmo", "sagna", "sagte", "sahib", "saien", "saier", "saiga", "saike", "saint", "saken", "saker", "sakes", "saket", "sakga", "sakgi", "sakha", "sakka", "sakke", "sakna", "sakne", "saksa", "sakse", "sakta", "sakte", "saktn", "salak", "salam", "salat", "saldo", "salen", "salep", "saler", "sales", "salet", "salga", "salgs", "salig", "salin", "saliv", "salme", "salol", "salpe", "salsa", "salta", "salte", "salto", "salva", "salve", "salær", "samba", "sambo", "sambu", "samde", "samen", "samer", "samla", "samle", "samme", "sampl", "samrå", "samsa", "samse", "samum", "sanda", "sande", "saner", "sanga", "sangl", "sangr", "sanka", "sanke", "sankt", "sanna", "sanne", "sansa", "sanse", "sanst", "saola", "sappe", "saren", "sarer", "sarin", "sarod", "sarra", "sarre", "sarsi", "sarte", "sarva", "sarve", "satan", "satay", "satsa", "satse", "satte", "satyr", "saual", "saudi", "sauen", "sauer", "sauet", "sauna", "saura", "saure", "sausa", "sause", "saute", "saven", "saver", "saves", "savet", "savla", "savle", "savna", "savne", "scatt", "scene", "schmø", "schpa", "schwa", "scoop", "scora", "score", "scout", "sebra", "secco", "sedan", "sedat", "seden", "seder", "sedes", "sedla", "sedle", "sedre", "seeda", "seede", "seere", "sefyr", "segen", "seger", "seget", "segla", "segle", "segls", "segna", "segne", "segno", "seida", "seide", "seien", "seier", "seifa", "seife", "seift", "seige", "seign", "seigr", "seigt", "seila", "seile", "seils", "seilt", "seine", "seing", "seint", "seipa", "seipe", "seira", "seire", "seisa", "seise", "seist", "sekel", "sekka", "sekke", "sekla", "seksa", "sekst", "sekta", "selen", "seler", "seles", "selet", "selge", "selja", "selje", "sella", "selle", "selot", "selta", "selte", "selve", "semem", "semin", "semja", "semje", "semre", "semsk", "senar", "senat", "senda", "sende", "sendt", "senen", "sener", "senet", "senga", "sengs", "senil", "senit", "senka", "senke", "senna", "senne", "senor", "sensa", "sense", "sentr", "senza", "sepet", "sepia", "sepoy", "septa", "seraf", "serai", "serge", "serie", "serin", "serom", "seron", "serra", "serre", "serum", "serva", "serve", "servo", "serøs", "sesam", "sessa", "sesse", "seten", "seter", "setet", "setra", "setre", "setta", "sette", "settl", "sevja", "sevje", "sevla", "sevle", "sexby", "sexen", "sexer", "sexes", "sexet", "sexus", "sfære", "shady", "shaka", "shake", "shaky", "shama", "shame", "shava", "shave", "shelf", "shiba", "shift", "shims", "shina", "shine", "shire", "shogi", "shona", "shopp", "short", "shots", "shott", "showa", "showe", "shunt", "shura", "sibet", "sidda", "sidde", "siden", "sider", "sidna", "sidne", "sidre", "siena", "siene", "sifon", "sifra", "sifre", "sigar", "sigel", "sigen", "siger", "siget", "sigga", "sigge", "sigla", "sigma", "signa", "signe", "siida", "siing", "siken", "siker", "sikes", "siket", "sikka", "sikke", "sikla", "sikle", "sikra", "sikre", "siksa", "sikse", "sikta", "sikte", "silan", "silda", "silde", "sildr", "silen", "siler", "siles", "silet", "silke", "silte", "silur", "simen", "simer", "simla", "simle", "simpa", "simpe", "simra", "simre", "simsa", "simse", "sindi", "sindr", "siner", "sinet", "singl", "singr", "sinka", "sinke", "sinku", "sinna", "sinne", "sinns", "sinte", "sinti", "sintr", "sinus", "sioux", "siper", "sipes", "sipet", "sipla", "siple", "sippa", "sippe", "sipra", "sipre", "sipte", "sirat", "siren", "sirer", "sires", "siret", "sirka", "sirkl", "sirla", "sirle", "sirte", "sirup", "sisal", "sisel", "sisik", "sisla", "sisle", "siste", "sitar", "sitat", "siter", "sitka", "sitra", "sitre", "sitte", "situp", "siver", "sivet", "sivil", "sivåt", "sjabb", "sjaga", "sjage", "sjakk", "sjakl", "sjako", "sjakr", "sjakt", "sjala", "sjalt", "sjalu", "sjans", "sjant", "sjapp", "sjaps", "sjark", "sjarm", "sjask", "sjaua", "sjaue", "sjefa", "sjefe", "sjeid", "sjeik", "sjekk", "sjela", "sjete", "sjett", "sjevr", "sjikt", "sjofa", "sjofe", "sjofl", "sjoga", "sjoge", "sjogs", "sjokk", "sjubb", "sjuer", "sjuke", "sjukn", "sjukt", "sjure", "sjurt", "sjusk", "sjyen", "sjyer", "sjået", "sjåka", "sjåke", "sjøbu", "sjøby", "sjøen", "sjøer", "sjøet", "sjøis", "sjøku", "skabb", "skada", "skadd", "skade", "skaen", "skaff", "skaft", "skaga", "skage", "skaka", "skake", "skakk", "skakn", "skakt", "skala", "skald", "skalk", "skall", "skalp", "skalt", "skalv", "skank", "skann", "skant", "skapa", "skape", "skapt", "skara", "skare", "skark", "skarn", "skarp", "skarr", "skarv", "skata", "skate", "skatt", "skaud", "skaus", "skaut", "skava", "skavd", "skave", "skavl", "skeet", "skeia", "skeid", "skeie", "skein", "skeis", "skeit", "skeiv", "skibb", "skibu", "skidd", "skien", "skier", "skies", "skiet", "skiff", "skift", "skikk", "skill", "skils", "skilt", "skiml", "skimr", "skimt", "skink", "skinn", "skint", "skipa", "skipe", "skipl", "skipp", "skira", "skire", "skirn", "skirt", "skita", "skite", "skitn", "skitt", "skiva", "skive", "skjak", "skjea", "skjel", "skjem", "skjen", "skjep", "skjer", "skjet", "skjev", "skjor", "skjot", "skjul", "skjæl", "skjær", "skjød", "skjøl", "skjør", "skjøt", "skjøv", "skled", "sklei", "sklia", "sklie", "sklir", "sklis", "skodd", "skoen", "skoft", "skogr", "skogs", "skokk", "skola", "skole", "skoll", "skolm", "skolp", "skolt", "skord", "skorp", "skort", "skosa", "skose", "skost", "skott", "skova", "skovd", "skove", "skovl", "skral", "skram", "skrap", "skrat", "skred", "skrei", "skrek", "skrem", "skrer", "skres", "skrev", "skria", "skrid", "skrie", "skrik", "skrin", "skrip", "skrir", "skris", "skriv", "skrog", "skrot", "skrov", "skrud", "skrue", "skrur", "skrus", "skruv", "skryp", "skryt", "skryv", "skråa", "skråe", "skrål", "skrån", "skråp", "skrår", "skrås", "skrær", "skræs", "skrøn", "skrør", "skrøs", "skrøt", "skubb", "skudd", "skuer", "skues", "skuet", "skuff", "skufl", "skule", "skulk", "skulm", "skuls", "skult", "skuml", "skump", "skumr", "skumt", "skunk", "skuns", "skupa", "skura", "skurd", "skure", "skurk", "skurr", "skurt", "skurv", "skusl", "skuta", "skute", "skutl", "skutt", "skval", "skvip", "skvis", "skvær", "skydd", "skyen", "skyer", "skyet", "skyfl", "skygd", "skygg", "skygt", "skyla", "skyld", "skyll", "skylt", "skyma", "skyme", "skymr", "skymt", "skynd", "skypa", "skype", "skyru", "skyss", "skyte", "skyts", "skyva", "skyve", "skåka", "skåla", "skåld", "skåle", "skålt", "skåna", "skåne", "skånt", "skåra", "skåre", "skårt", "skåta", "skåte", "skått", "skøya", "skøye", "skøyt", "skøyv", "slabb", "sladd", "sladr", "slaen", "slaer", "slaet", "slafs", "slaga", "slage", "slagg", "slags", "slake", "slakk", "slakn", "slakt", "slamp", "slamr", "slams", "slang", "slank", "slant", "slapn", "slapp", "slaps", "slapt", "slark", "slarv", "slash", "slask", "slatr", "slatt", "slaur", "slava", "slave", "slede", "slegd", "slegg", "sleid", "sleik", "sleip", "sleis", "sleit", "sleiv", "slekt", "slemt", "sleng", "slepa", "slepe", "slepp", "slept", "slesk", "sletn", "slett", "sleva", "slevd", "sleve", "slica", "slice", "slide", "slien", "sliet", "slike", "slikk", "slikt", "slima", "slime", "slimt", "slind", "sling", "slipe", "slipp", "slips", "slipt", "slira", "slire", "slirk", "slirt", "slisk", "sliss", "slite", "slitn", "slitt", "sliul", "slodd", "sloen", "sloer", "sloes", "sloet", "sloka", "slokk", "slokn", "slokt", "sloss", "slott", "slubb", "slubr", "sludd", "sludr", "sluff", "slufs", "slugg", "sluka", "sluke", "slukk", "slukn", "slukt", "slump", "slumr", "slums", "slunk", "slunt", "slupp", "slups", "slura", "slure", "slurk", "slurp", "slurt", "slurv", "slusa", "sluse", "slush", "slusk", "slust", "slute", "slutt", "slyen", "slyer", "slyet", "slyng", "slåen", "slåer", "slåes", "slåpa", "slåpe", "slåss", "slåta", "slåte", "slått", "sløen", "sløer", "sløka", "sløke", "sløra", "sløre", "slørt", "sløse", "sløst", "sløva", "sløve", "sløvn", "sløvt", "sløya", "sløyd", "sløye", "sløyf", "sløyt", "smadr", "smake", "smakt", "smala", "smale", "small", "smaln", "smalt", "smart", "smash", "smask", "smatr", "smatt", "smaua", "smaus", "smeda", "smede", "smeik", "smeis", "smeit", "smekk", "smekt", "smele", "smell", "smelt", "smert", "smett", "smidd", "smien", "smier", "smigr", "smikk", "smila", "smile", "smilt", "smink", "smisk", "smite", "smitt", "smokk", "smole", "smolt", "smude", "smuga", "smugl", "smukk", "smukt", "smula", "smule", "smuln", "smult", "smurf", "smurt", "smusk", "smuss", "smutt", "smyga", "smyge", "smykk", "smyle", "småby", "småen", "smået", "småfe", "smågå", "småis", "småkø", "småle", "smålo", "smått", "smååt", "småøy", "smære", "smøra", "smøre", "smøyd", "smøye", "smøyg", "snabb", "snack", "snadd", "snadr", "snafs", "snaga", "snage", "snaka", "snake", "snakk", "snaks", "snakt", "snapp", "snaps", "snapt", "snara", "snare", "snarp", "snart", "snasa", "snase", "snask", "snast", "snaua", "snaue", "snaus", "snaut", "snavl", "snegl", "sneia", "sneid", "sneie", "sneik", "sneip", "sneis", "sneka", "sneke", "snekr", "snell", "snelt", "snerk", "snerp", "snerr", "snert", "snesa", "snevr", "snidd", "sniff", "snike", "snikk", "snikt", "snile", "snill", "snilt", "snipa", "snipe", "snipp", "snitt", "sniva", "snive", "snobb", "snodd", "snoen", "snoka", "snoke", "snokt", "snopa", "snope", "snopp", "snopt", "snora", "snork", "snort", "snose", "snost", "snott", "snubb", "snubl", "snudd", "snuen", "snuet", "snuff", "snufs", "snuft", "snugg", "snupp", "snupt", "snurl", "snurp", "snurr", "snurt", "snuse", "snusk", "snust", "snuta", "snute", "snutr", "snutt", "snykt", "snylt", "snyrt", "snyta", "snyte", "snytt", "snåka", "snåle", "snålt", "snåpe", "snåpt", "snåva", "snåve", "snæra", "snære", "snært", "snødd", "snøen", "snøet", "snøfl", "snøfs", "snøft", "snøgg", "snøgt", "snøis", "snølo", "snøra", "snøre", "snøri", "snørr", "snørt", "snøse", "snøst", "snøvl", "snøyd", "snøye", "snøyr", "snøår", "soare", "sobel", "sober", "sobre", "sodar", "soene", "softe", "sogen", "soger", "sogna", "sogne", "sokka", "sokke", "sokna", "sokne", "solar", "solen", "soler", "soles", "solet", "solgt", "solid", "solli", "solmo", "solte", "solur", "solår", "soman", "somen", "somla", "somle", "somme", "somra", "somre", "sonal", "sonar", "sonde", "sondr", "sonen", "soner", "sones", "sonet", "sonor", "sonte", "sopen", "soper", "sopes", "sopet", "sopne", "sopor", "soppa", "soppe", "sopte", "sorbe", "sorga", "sorit", "sorry", "sorte", "sorti", "soser", "soses", "soset", "soste", "sosøk", "soten", "soter", "sotes", "sotet", "sotho", "sotta", "souen", "sound", "sover", "soves", "sovet", "sovna", "sovne", "spaca", "space", "spadd", "spade", "spaet", "spahi", "spake", "spakn", "spakt", "spalt", "spana", "spane", "spank", "spann", "spant", "spara", "spare", "spark", "sparr", "spart", "spasa", "spase", "spast", "spatl", "spatt", "spedd", "spede", "spedt", "speed", "speid", "speil", "speke", "spekk", "spekn", "speks", "spekt", "spela", "spell", "spelt", "spend", "spene", "spenn", "spent", "sperm", "sperr", "spete", "spets", "spett", "spica", "spice", "spicy", "spidd", "spika", "spike", "spikk", "spikr", "spikt", "spila", "spile", "spill", "spilt", "spink", "spinn", "spion", "spira", "spire", "spirt", "spise", "spisk", "spiss", "spist", "spita", "spite", "spitz", "spjåk", "spjær", "splid", "spoil", "spole", "spolt", "spong", "spons", "spoof", "spoon", "spora", "spord", "spore", "sport", "spott", "spove", "sprad", "sprak", "spral", "spray", "spred", "sprek", "sprer", "spres", "spria", "sprik", "sprir", "spris", "sprit", "sprue", "sprut", "spryd", "språk", "sprøa", "sprøe", "sprør", "sprøs", "spuns", "spunt", "spurt", "spurv", "spyda", "spydd", "spyet", "spyle", "spylt", "spytt", "spådd", "spåen", "spåer", "spøen", "spøer", "spøke", "spøkt", "spøle", "spølt", "spøne", "spønt", "spørs", "spøta", "spøte", "spøtt", "squaw", "stabb", "stabl", "stada", "stade", "staen", "staer", "staff", "staga", "stage", "stagg", "staka", "stake", "stakk", "stakr", "stakt", "stalk", "stall", "stamp", "stamt", "stana", "stand", "stane", "stang", "stank", "stans", "stant", "stapl", "stapp", "stare", "starr", "start", "starv", "stasa", "stase", "stash", "stast", "stauk", "staup", "staur", "staut", "stava", "stave", "stavn", "stavr", "steam", "stedd", "stede", "stedt", "steet", "stega", "stege", "stegg", "stegl", "steig", "steik", "steil", "stein", "steka", "steke", "stekk", "stekt", "stele", "stell", "stelp", "stelt", "stemt", "steng", "stenk", "stent", "stepp", "sterk", "sters", "stert", "stetl", "stett", "steva", "stevj", "stevl", "stevn", "stien", "stier", "sties", "stiet", "stift", "stige", "stikk", "stikl", "stiks", "stilb", "stile", "stilk", "still", "stiln", "stilt", "stima", "stime", "stiml", "stimt", "sting", "stink", "stinn", "stint", "stipl", "stirr", "stiva", "stive", "stivn", "stivt", "stjal", "stjel", "stoda", "stode", "stods", "stoen", "stoer", "stoet", "stoff", "stogg", "stokk", "stola", "stole", "stoll", "stolp", "stolt", "stoma", "stomi", "stoml", "stomp", "stopl", "stopp", "store", "stork", "storm", "stort", "story", "stotr", "stout", "stova", "stove", "strak", "stram", "streb", "stred", "strei", "strek", "stren", "strev", "stria", "strid", "strie", "strik", "stril", "strip", "strir", "stris", "strul", "strup", "strut", "stryk", "stryp", "stråa", "stråk", "strål", "strøk", "strøm", "strør", "strøs", "stubb", "stuck", "stuen", "stuer", "stues", "stuet", "stuff", "stuka", "stuke", "stukk", "stukt", "stull", "stump", "stums", "stumt", "stund", "stunt", "stupa", "stupe", "stupn", "stups", "stupt", "stura", "sture", "sturt", "stusl", "stuss", "stust", "stutn", "stutt", "stygg", "stygt", "stykk", "stykt", "styla", "style", "stylt", "styra", "styre", "styrk", "styrt", "styvd", "styve", "ståen", "ståer", "ståka", "ståke", "ståla", "ståle", "stålt", "stått", "stæsj", "stødd", "støen", "støer", "støes", "støet", "støkk", "støkt", "støla", "støle", "støln", "stølt", "støna", "støne", "stønn", "stønt", "støpa", "støpe", "støpt", "støta", "støte", "støtt", "støva", "støve", "støvl", "støya", "støyd", "støye", "støyp", "støyt", "subba", "subbe", "subus", "sudda", "sudde", "sudor", "suene", "sufta", "sufte", "sugde", "sugen", "suger", "suges", "suget", "sugga", "sugge", "sugne", "suite", "sukat", "sukka", "sukke", "sukla", "sukle", "sukra", "sukre", "suldr", "sulen", "suler", "sules", "sulet", "sulfa", "sulka", "sulke", "sulky", "sulla", "sulle", "sulra", "sulre", "sulta", "sulte", "sumak", "summa", "summe", "sunda", "sunde", "sundt", "sunna", "sunne", "sunni", "supen", "super", "supes", "suppa", "suppe", "supra", "supre", "supte", "suren", "surer", "surfa", "surfe", "surhå", "surka", "surke", "surkl", "surla", "surle", "surna", "surne", "surra", "surre", "surta", "surte", "surva", "surve", "surøl", "susen", "suser", "suses", "suset", "sushi", "susla", "susle", "sussa", "susse", "suste", "sutak", "sutan", "sutar", "suten", "suter", "sutes", "sutet", "sutla", "sutle", "sutra", "sutre", "sutta", "sutte", "sutur", "suvla", "suvle", "svabb", "svabr", "svada", "svadd", "svaen", "svaet", "svaga", "svage", "svaia", "svaie", "svait", "svake", "svakk", "svakt", "svala", "svale", "svalk", "svall", "svalm", "svaln", "svalt", "svamp", "svana", "svane", "svang", "svank", "svans", "svant", "svara", "svare", "svars", "svart", "svarv", "svass", "svear", "sveen", "sveer", "sveet", "sveif", "sveig", "sveik", "svein", "sveip", "sveis", "sveit", "sveiv", "svekk", "svekt", "svela", "svele", "svelg", "svell", "svelt", "svenn", "svepa", "svepe", "sverd", "sverg", "sverm", "svert", "svett", "sveva", "svevd", "sveve", "svidd", "svien", "svika", "svike", "svikk", "svikl", "svikt", "svill", "svima", "svime", "sviml", "svimr", "svimt", "svina", "svine", "sving", "svinn", "svins", "svint", "svipa", "svipe", "svipp", "svira", "svire", "svirr", "svirt", "svisj", "sviss", "sviva", "svivd", "svive", "svolk", "svosj", "svovl", "svull", "svulm", "svuln", "svupp", "svusj", "svære", "svært", "svæva", "svævd", "svæve", "svømt", "svøpa", "svøpe", "svøpt", "swaps", "swazi", "sweet", "swing", "sydde", "syder", "sydet", "sydpå", "syere", "sying", "syken", "syker", "sykla", "sykle", "sykna", "sykne", "sylen", "syler", "sylfe", "sylla", "sylta", "sylte", "symra", "symre", "synda", "synde", "syner", "synes", "synet", "synge", "synka", "synke", "synsa", "synse", "synsk", "synte", "synth", "synål", "syrah", "syrem", "syren", "syrer", "syres", "syret", "syrin", "syrna", "syrne", "syrom", "syrte", "sysla", "sysle", "syten", "syter", "sytes", "sytet", "sytne", "sytte", "sytti", "sytøy", "syver", "såbed", "sådag", "sådan", "sådde", "såene", "såere", "såete", "såfrø", "såfør", "sågar", "såing", "sålda", "sålde", "sålen", "såler", "såles", "sålet", "sålte", "sånad", "sånne", "såpen", "såper", "såpes", "såpet", "såpte", "sårer", "såres", "såret", "sårør", "såten", "såter", "såtes", "såtet", "såtid", "såvær", "sæden", "sædet", "sælda", "sælde", "sælen", "særbo", "særbu", "sæter", "sætes", "sætte", "sødme", "søfta", "søfte", "søget", "søken", "søker", "søkes", "søket", "søkka", "søkke", "søkkt", "søkna", "søkne", "søkte", "sølen", "søler", "søles", "sølet", "sølja", "sølje", "sølle", "sølte", "sølva", "sømda", "sømma", "sømme", "sømte", "sønna", "sønst", "søpla", "søple", "søren", "sører", "søret", "sørga", "sørgd", "sørge", "sørjo", "sørli", "sørpa", "sørpe", "sørpå", "sørva", "sørve", "søten", "søter", "søtes", "søtet", "søtna", "søtne", "søvne", "søyen", "søyer", "søyla", "søyle",
"tabba", "tabbe", "taben", "taber", "tabes", "tabla", "tablå", "tabua", "tabun", "tacet", "tacky", "tadet", "tafla", "tafsa", "tafse", "tagal", "tagga", "tagge", "tagla", "tagna", "tagne", "taiga", "taiko", "taima", "taime", "taing", "tajer", "tajet", "taket", "takin", "takka", "takke", "takla", "takle", "taksa", "takse", "takst", "takta", "takås", "talar", "talen", "taler", "tales", "talga", "talge", "talja", "talje", "talla", "talle", "tally", "talma", "talme", "talmi", "talte", "talus", "tamen", "tamfe", "tamil", "tamme", "tampa", "tampe", "tamsa", "tamse", "tandr", "tanen", "taner", "tanes", "tanet", "tanga", "tange", "tango", "tanka", "tanke", "tanks", "tanna", "tanne", "tanta", "tante", "tanto", "tantr", "tapas", "tapen", "taper", "tapes", "tapet", "tapir", "tappa", "tappe", "tapre", "tapte", "tapto", "tardo", "taren", "tarer", "targa", "tarot", "tarve", "tasal", "tasen", "taser", "tases", "taset", "taska", "taske", "tasla", "tasle", "tasne", "tassa", "tasse", "tasta", "taste", "tatar", "tater", "tatla", "tatle", "tatra", "tatre", "tatta", "tatte", "tauen", "tauer", "taues", "tauet", "tausa", "tause", "taust", "tauvr", "taven", "taver", "taves", "tavet", "tavla", "tavle", "taxis", "teama", "teasa", "tease", "teavl", "tedde", "teddy", "teduk", "teede", "teene", "teete", "tefat", "tefta", "tefte", "tegen", "teger", "tegla", "tegna", "tegne", "tehus", "teien", "teier", "teies", "teiet", "teina", "teine", "teing", "teint", "teipa", "teipe", "teist", "teita", "teite", "teken", "tekka", "tekke", "tekno", "teksl", "tekst", "tekte", "telen", "teler", "telet", "telgd", "telgj", "tella", "telle", "telna", "telne", "telta", "telte", "telys", "temma", "temme", "tempi", "tempo", "tempr", "temte", "tenar", "tendo", "tenel", "tener", "tenes", "tenet", "tenge", "tenke", "tenkt", "tenla", "tenle", "tenna", "tenne", "tenor", "tente", "tenår", "teori", "teppa", "teppe", "tepte", "terga", "terge", "terme", "terna", "terne", "terpa", "terpe", "terra", "terre", "tersa", "terse", "tersk", "terta", "terte", "tesen", "teser", "teses", "teset", "tesil", "tesis", "tesla", "testa", "teste", "tesøl", "teten", "tetid", "tetna", "tetne", "tetra", "tetre", "tetta", "tette", "tetut", "tetøy", "teven", "tever", "tevet", "tevla", "tevle", "texas", "texel", "texen", "theta", "thorn", "tiara", "tibia", "ticet", "tidde", "tidel", "tiden", "tider", "tidig", "tiene", "tient", "tiere", "tiest", "tigde", "tiger", "tigga", "tigge", "tight", "tigla", "tigle", "tigon", "tigre", "tiing", "tiken", "tiker", "tikka", "tikke", "tikla", "tikle", "tiksa", "tikse", "tilba", "tilbe", "tilby", "tilde", "tiler", "tilet", "tilga", "tilgi", "tilgå", "tilja", "tilje", "tilla", "tille", "tillå", "tilra", "tilre", "tilrå", "tilsa", "tilse", "tilsi", "tilså", "tilta", "tilte", "timal", "timen", "timer", "times", "timet", "timid", "timil", "timpe", "timte", "timål", "tinda", "tinde", "tindr", "tinea", "tinen", "tiner", "tines", "tinet", "tinga", "tinge", "tingl", "tings", "tinkl", "tinna", "tinne", "tinte", "tipla", "tiple", "tippa", "tippe", "tipsa", "tipse", "tiren", "tirer", "tires", "tirla", "tirle", "tirra", "tirre", "tirte", "tiska", "tiske", "tiskr", "tisla", "tisle", "tispa", "tispe", "tissa", "tisse", "titan", "titen", "titer", "titra", "titre", "titta", "titte", "tiåra", "tiårs", "tiøre", "tjadr", "tjaet", "tjafs", "tjalk", "tjall", "tjatr", "tjatt", "tjaua", "tjeld", "tjene", "tjent", "tjern", "tjerv", "tjihi", "tjoer", "tjoes", "tjoet", "tjoho", "tjona", "tjone", "tjont", "tjora", "tjore", "tjort", "tjuga", "tjuge", "tjukk", "tjukn", "tjukt", "tjusn", "tjuva", "tjuvd", "tjuve", "tjåka", "tjåke", "tjæra", "tjære", "toast", "tobbe", "tobin", "tobis", "toddi", "toddy", "todel", "toede", "toene", "toere", "toete", "tofta", "tofte", "tofus", "togby", "togdo", "toger", "toges", "toget", "togkø", "togna", "tohet", "toile", "toing", "tokar", "tokay", "token", "toker", "tokig", "tokka", "tokke", "tokna", "tokta", "tokte", "tolar", "tolen", "toler", "tolka", "tolke", "tolla", "tolle", "tomat", "tomen", "tomer", "tomma", "tomme", "tomsa", "tomse", "tomta", "tomte", "tonad", "tonal", "tondo", "tonem", "tonen", "toner", "tones", "tonet", "tonfa", "tonga", "tonic", "tonna", "tonte", "tonus", "topas", "topol", "toppa", "toppe", "topps", "toque", "torde", "tordn", "toren", "torer", "tores", "toret", "torga", "torgs", "torii", "torpa", "torre", "torsk", "torso", "torte", "torus", "torva", "torve", "tosom", "tossa", "tosse", "total", "totem", "totna", "totne", "totta", "totte", "totåa", "touch", "toven", "tover", "toves", "tovet", "tovna", "tovne", "toåra", "toårs", "toøra", "toøre", "toøyd", "trabb", "traca", "trace", "trada", "trade", "traff", "trafo", "trafs", "trake", "trakk", "trakt", "trala", "trale", "trall", "tralt", "tramp", "trana", "trane", "trang", "trans", "trant", "trapp", "trasa", "trase", "trash", "trask", "trasl", "trass", "traua", "traud", "traut", "trava", "travd", "trave", "treak", "trebu", "treby", "treda", "tredd", "trede", "tredj", "treen", "treer", "treet", "treff", "trega", "trege", "tregt", "treif", "treig", "treiv", "trekk", "trelk", "trell", "trema", "trena", "trend", "trene", "treng", "trens", "trent", "tresk", "tress", "tretn", "trett", "treva", "treve", "trevl", "treår", "triac", "trial", "trias", "triel", "trien", "trigg", "trike", "trikk", "triks", "trill", "trilt", "trine", "trinn", "trins", "trint", "triol", "tripl", "tripp", "trips", "trisa", "trise", "trist", "tritt", "trivd", "trive", "trivl", "trivs", "triør", "trodd", "troen", "troer", "troet", "trofe", "troke", "troll", "troml", "trona", "trone", "trope", "tropp", "tross", "trost", "trote", "trotl", "trott", "truck", "trudd", "truen", "truer", "trues", "truet", "truga", "truge", "trull", "trult", "trumf", "trump", "trunk", "trupp", "trusa", "truse", "trusk", "trust", "truta", "trute", "trutn", "trutt", "trygd", "trygg", "trygl", "trygt", "trykk", "trykt", "tryll", "tryna", "tryne", "tryta", "tryte", "trytt", "tråda", "trådd", "tråde", "trådt", "tråen", "tråer", "trået", "tråga", "tråka", "tråke", "tråkk", "tråkl", "tråkt", "tråla", "tråle", "trålt", "tråna", "tråne", "trått", "trædd", "træla", "træle", "trøbl", "trødd", "trøen", "trøer", "trøet", "trøkk", "trøsk", "trøst", "trøtn", "trøtt", "trøya", "trøye", "trøys", "trøyt", "tuben", "tuber", "tubus", "tudor", "tuene", "tuete", "tufsa", "tufse", "tufst", "tufta", "tufte", "tugga", "tugge", "tuien", "tuier", "tukan", "tukla", "tukle", "tukta", "tukte", "tulla", "tulle", "tumba", "tumla", "tumle", "tumor", "tuner", "tunes", "tunet", "tunga", "tunge", "tungt", "tunna", "tunne", "tuper", "tuppa", "tuppe", "turba", "turbo", "turen", "turer", "tures", "turet", "turko", "turna", "turne", "turta", "turte", "turtl", "turve", "turvt", "tusen", "tusja", "tusje", "tuska", "tuske", "tusla", "tusle", "tussa", "tusse", "tusta", "tuste", "tustr", "tutel", "tuten", "tuter", "tutes", "tutet", "tutla", "tutle", "tutor", "tutra", "tutre", "tutsi", "tutta", "tutte", "tutti", "tvaga", "tvage", "tvang", "tvara", "tvare", "tvebo", "tvebu", "tveit", "tverk", "tverr", "tvers", "tvert", "tvett", "tvidd", "tvier", "tvies", "tvika", "tvike", "tvile", "tvill", "tvilt", "tvina", "tvine", "tving", "tvinl", "tvinn", "tvint", "tvirr", "tvist", "tvitr", "tvåga", "tvåge", "tværa", "tvære", "twaen", "twaer", "tweed", "tweet", "twerk", "twist", "tydde", "tyder", "tydes", "tydet", "tyere", "tyest", "tyfon", "tyfus", "tyføs", "tygde", "tygga", "tygge", "tying", "tykka", "tykke", "tykna", "tykne", "tykte", "tylen", "tyler", "tylft", "tylla", "tylle", "tymin", "tymol", "tymus", "tyner", "tynes", "tynga", "tyngd", "tynge", "tynna", "tynne", "tynte", "typen", "typer", "types", "typet", "typus", "tyren", "tyrer", "tyska", "tyske", "tyssa", "tysse", "tysta", "tyste", "tystn", "tyten", "tyter", "tytes", "tytet", "tytta", "tytte", "tyved", "tyven", "tyver", "tyvjo", "tåben", "tåede", "tåene", "tåent", "tåete", "tåfis", "tågen", "tåger", "tåget", "tåhev", "tåing", "tåken", "tåker", "tåkes", "tåket", "tåler", "tåles", "tålig", "tålte", "tåpen", "tåper", "tåpne", "tåren", "tårer", "tåres", "tåret", "tårna", "tårne", "tåsko", "tåten", "tåter", "tåtes", "tåtet", "tæger", "tælen", "tælet", "tæppa", "tæppe", "tærer", "tæres", "tæret", "tærig", "tærne", "tærte", "tæsja", "tæsje", "tødde", "tøene", "tøffa", "tøffe", "tøfla", "tøfle", "tøing", "tølen", "tøler", "tøles", "tølet", "tølta", "tølte", "tømme", "tømra", "tømre", "tømte", "tønna", "tønne", "tørka", "tørke", "tørna", "tørne", "tørra", "tørre", "tørst", "tøsen", "tøser", "tøset", "tøsnø", "tøtsj", "tøtta", "tøtte", "tøvde", "tøver", "tøves", "tøvet", "tøvla", "tøvle", "tøvra", "tøvre", "tøvær", "tøyde", "tøyen", "tøyer", "tøyes", "tøyet", "tøyla", "tøyle", "tøysa", "tøyse", "tøyst", "tøyta", "tøyte",
"uanet", "uante", "ubakt", "ubana", "ubant", "ubedt", "ubest", "ublid", "ublue", "ublyg", "ubodd", "ubona", "ubont", "ubruk", "ubudd", "ubygd", "ubyrg", "ubytt", "ubøyd", "uchic", "udekt", "udelt", "udigg", "udjup", "udott", "udryg", "udrøy", "uduft", "uduge", "udygd", "udype", "udypt", "udyra", "udøde", "udødt", "udømt", "udøpt", "uedel", "uedle", "uefne", "uegal", "uegna", "uekte", "uenig", "uensa", "uenst", "ueren", "uerne", "ufase", "ufast", "uferd", "uffer", "uffet", "ufiks", "ufine", "ufint", "ufisk", "uflyg", "ufoen", "ufoer", "ufolk", "ufora", "ufred", "ufrie", "ufrom", "ufrøa", "ufsen", "ufser", "ufset", "ufuen", "ufuer", "ufugl", "ufysa", "ufyse", "ufyst", "ufødt", "ufølt", "uføre", "uført", "ugagn", "ugali", "uggal", "uggen", "ugger", "ugget", "ugift", "ugild", "ugjev", "ugjør", "uglad", "uglen", "ugler", "ugles", "uglet", "ugras", "ugrei", "ugrer", "uhage", "uhagt", "uheil", "uhele", "uhell", "uhelt", "uhipp", "uhipt", "uhuga", "uhyra", "uhyre", "uhørt", "uigur", "ujamn", "ujamt", "ujevn", "ukalt", "ukene", "ukjær", "ukjøm", "ukjøp", "uklar", "uklok", "ukokt", "ukuet", "ukule", "ukult", "ukysk", "ulada", "uladd", "ulaga", "ulagd", "ulage", "uland", "ulcus", "ulema", "ulene", "ulent", "ulere", "ulest", "ulett", "ulevd", "ulike", "ulikt", "ulimt", "uling", "ulken", "ulker", "ulket", "ullen", "ullua", "ullue", "ullus", "ulmer", "ulmet", "ulnar", "ulner", "ulnet", "uloen", "uloer", "uluen", "uluer", "ulukt", "ulune", "ulven", "ulver", "ulyst", "ulåst", "ulærd", "ulært", "ulønt", "uløst", "umaka", "umake", "umalt", "umami", "umark", "umbra", "umiak", "umild", "umota", "umåka", "umåkt", "umålt", "umåte", "unaiv", "unaue", "unaut", "unavn", "undas", "under", "undik", "undra", "undre", "unemt", "unert", "unett", "ungen", "unger", "unget", "ungfe", "ungku", "ungmø", "unike", "unikt", "union", "unnba", "unnbe", "unner", "unnes", "unngå", "unnsa", "unnse", "unnsi", "unnså", "unnta", "unote", "unsen", "unser", "unåde", "unære", "unært", "unøgd", "unøyd", "uorda", "upara", "upare", "upene", "upent", "upoda", "upope", "upopp", "upopt", "upper", "upris", "upult", "uraka", "urakt", "urata", "uravl", "urban", "urdal", "urdyr", "ureal", "ureat", "uredd", "urede", "uredt", "ureid", "urein", "uremi", "urene", "urent", "urete", "urett", "urfar", "urger", "urgrå", "urgås", "urhav", "urian", "urien", "urier", "urima", "urimt", "uring", "urmor", "urnen", "urner", "urodd", "uroen", "uroer", "uroes", "uroet", "urost", "ursau", "urten", "urter", "urtid", "urund", "urven", "urvne", "urydd", "urykk", "uråda", "urøkt", "urørt", "usagt", "usalt", "usamd", "usams", "usann", "usans", "usant", "usett", "usexy", "usilt", "uskap", "usmak", "usona", "usont", "ussel", "ussen", "usser", "usses", "usset", "ustiv", "ustyr", "ustøe", "usunn", "usunt", "usydd", "usynt", "usyra", "usyrt", "usådd", "usåra", "usæla", "usæle", "usælt", "usøkt", "usøta", "utakk", "utakt", "utala", "utall", "utalt", "utame", "utamt", "utapå", "utarm", "utart", "utarv", "utast", "utaus", "utavl", "utbad", "utbak", "utben", "utber", "utbes", "utbor", "utbre", "utbua", "utbud", "utbur", "utbyr", "utbys", "utbød", "utbøy", "utdel", "utdyp", "utdør", "utebu", "utedo", "utekk", "utekt", "utelt", "utemt", "utent", "utesk", "utett", "uteøl", "utfar", "utfas", "utfor", "utfri", "utfør", "utgav", "utgir", "utgis", "utgyt", "utgår", "uthal", "uthav", "uthev", "uthol", "uthul", "uthus", "utide", "utina", "uting", "utint", "utisa", "utise", "utist", "utjag", "utkik", "utkok", "utkom", "utkår", "utlad", "utlar", "utlas", "utlat", "utled", "utleg", "utlei", "utles", "utlot", "utlov", "utlut", "utlyd", "utlys", "utlån", "utløa", "utlød", "utløe", "utløp", "utløs", "utmai", "utmal", "utman", "utmat", "utmed", "utmur", "utmål", "utoen", "utoer", "utoet", "utopi", "utosa", "utpek", "utpin", "utras", "utred", "utrer", "utrev", "utrik", "utriv", "utroe", "utrom", "utrop", "utror", "utrue", "utrug", "utrøn", "utsel", "utser", "utses", "utsig", "utsil", "utslo", "utslå", "utsmi", "utson", "utsop", "utsto", "utstå", "utsug", "utsyn", "utsyr", "utsys", "utsæd", "uttak", "uttal", "uttar", "uttas", "uttog", "uttok", "uttun", "uttur", "uttyd", "uttær", "uttøm", "utukt", "utved", "utveg", "utvei", "utvid", "utvis", "utvær", "utygd", "utysk", "utånd", "utøka", "utøke", "utøkt", "utøse", "utøst", "utøva", "utøvd", "utøve", "utøya", "uvand", "uvane", "uvant", "uvdøl", "uvenn", "uverd", "uverk", "uvett", "uvise", "uviss", "uvist", "uvula", "uværa", "uzien", "uzier", "uåpna", "uåret", "uæren", "uømme", "uøvde", "uøvet",
"vabba", "vabbe", "vable", "vacat", "vadde", "vaden", "vader", "vades", "vadet", "vadra", "vadre", "vafla", "vafle", "vafsa", "vafse", "vagal", "vager", "vaget", "vagga", "vagge", "vagil", "vagla", "vagle", "vagus", "vaier", "vaies", "vaiet", "vaing", "vaire", "vakat", "vaken", "vaker", "vakes", "vaket", "vakke", "vakla", "vakle", "vakna", "vakne", "vakre", "vakta", "vakte", "valda", "valde", "valdr", "valen", "valer", "valga", "valgt", "valid", "valin", "valka", "valke", "valle", "valma", "valme", "valna", "valne", "valpa", "valpe", "valsa", "valse", "valsk", "valta", "valte", "valtr", "valør", "vamle", "vampa", "vampe", "vanda", "vande", "vandl", "vandr", "vandt", "vanen", "vaner", "vange", "vanka", "vanke", "vanna", "vanne", "vanns", "vanry", "vansk", "vanta", "vante", "vanær", "vappa", "vappe", "varan", "varda", "varde", "varen", "varer", "vares", "varet", "varia", "varig", "varix", "varla", "varle", "varma", "varme", "varmt", "varpa", "varpe", "varsl", "varta", "varte", "varus", "varva", "vasen", "vaser", "vases", "vaset", "vaska", "vaske", "vasle", "vasne", "vassa", "vasse", "vasså", "vasta", "vaste", "vater", "vatna", "vatne", "vatns", "vatra", "vatre", "vaver", "vaves", "vavet", "vavla", "vavle", "vavra", "vavre", "vebba", "vebbe", "vedbu", "vedda", "vedde", "veden", "veder", "vedes", "vedet", "vedgå", "vedla", "vedlå", "vedra", "vedre", "vedta", "veene", "vefta", "vefte", "vegan", "vegde", "vegen", "veger", "veges", "veggs", "vegis", "vegna", "vegne", "vegra", "vegre", "veida", "veidd", "veide", "veidn", "veien", "veier", "veies", "veiet", "veiis", "veike", "veikn", "veikt", "veila", "veile", "veilt", "veisa", "veise", "veita", "veite", "veiva", "veivd", "veive", "veken", "veker", "veket", "vekka", "vekke", "vekna", "vekne", "veksl", "vekst", "vekta", "vekte", "velan", "velar", "velda", "velde", "veler", "velet", "velge", "velig", "velin", "vella", "velle", "velsa", "velse", "velsk", "velst", "velta", "velte", "velum", "velur", "vemma", "vemme", "vemod", "venal", "venda", "vende", "vendt", "venen", "vener", "venne", "venns", "venta", "vente", "venus", "venøs", "verba", "verbe", "verda", "verdi", "verdt", "verft", "verga", "verge", "verka", "verke", "verks", "verkt", "verna", "verne", "verop", "verpa", "verpe", "verpt", "verre", "versa", "verse", "versn", "verso", "verst", "verva", "verve", "vesak", "vesal", "vesel", "vesen", "vesir", "veska", "veske", "vesla", "vesle", "vesta", "vesti", "vestr", "veten", "veter", "vetoa", "vetta", "vette", "vevde", "veven", "vever", "veves", "vevet", "vevla", "vevle", "vevre", "vichy", "vidda", "vidde", "viden", "video", "vider", "vides", "videt", "vidja", "vidje", "viede", "viere", "viete", "vifta", "vifte", "vigde", "vigga", "vigge", "viggo", "vigil", "vigla", "vigle", "vigne", "vigsl", "vigør", "viing", "vikar", "viken", "viker", "vikes", "viket", "vikje", "vikka", "vikke", "vikla", "vikle", "viksa", "vikse", "viksk", "vikta", "vikte", "vildr", "vilen", "viler", "viles", "vilje", "villa", "ville", "vilte", "viltr", "vimen", "vimer", "vimet", "vimla", "vimle", "vimma", "vimme", "vimne", "vimpl", "vimra", "vimre", "vimsa", "vimse", "vimst", "vinbu", "vinby", "vinda", "vinde", "vindt", "vindu", "vinen", "viner", "vinga", "vinge", "vingl", "vinka", "vinke", "vinkl", "vinna", "vinne", "vinsj", "vinst", "vinte", "vintr", "vinyl", "vinår", "vinøs", "viola", "vipen", "viper", "vippa", "vippe", "vipps", "vipsa", "vipse", "virak", "viral", "viren", "vireo", "virer", "vires", "virga", "virgo", "viril", "virka", "virke", "virne", "virra", "virre", "virte", "virus", "virvl", "virøs", "visen", "viser", "vises", "viset", "visir", "viska", "viske", "visla", "visle", "visna", "visne", "vispa", "vispe", "vissa", "visse", "visst", "vista", "viste", "visum", "visus", "vital", "viten", "viter", "vites", "vitja", "vitje", "vitna", "vitne", "vitra", "vitre", "vitsa", "vitse", "vivas", "vivat", "viven", "viver", "vivet", "vivre", "vivør", "vlies", "vlogg", "vodka", "voffa", "voffe", "vogga", "vogge", "vogna", "vogul", "voile", "vokal", "vokka", "vokke", "voksa", "vokse", "vokst", "vokta", "vokte", "volar", "volde", "voldt", "volen", "voler", "volfa", "volfe", "volla", "volle", "volma", "volme", "volte", "volum", "volva", "volve", "vomer", "vomma", "vomme", "vonde", "vondl", "vondt", "vonen", "voner", "vones", "vonet", "vonom", "vonte", "vorde", "voren", "vorer", "vorma", "vorme", "vorsa", "vorse", "vorta", "vorte", "vossa", "vosse", "voter", "votum", "voven", "vover", "voves", "vovet", "vraka", "vrake", "vrakt", "vralt", "vrang", "vrant", "vrede", "vredt", "vreng", "vridd", "vrien", "vrier", "vrikk", "vrikl", "vriml", "vrins", "vrist", "vroom", "vråen", "vråer", "vræla", "vræle", "vrælt", "vrøvl", "vugga", "vugge", "vulan", "vulka", "vulke", "vulst", "vulva", "vunde", "vunne", "vurst", "vuten", "vuter", "vyene", "vyrke", "vyrkt", "våbud", "våden", "våder", "våene", "vågal", "vågde", "vågen", "våger", "våges", "våget", "våhøv", "våken", "våker", "våkes", "våket", "våkna", "våkne", "våkte", "vålen", "våler", "våles", "vålet", "vålla", "vålte", "vånda", "vånde", "våpen", "våpna", "våren", "vårer", "våres", "våret", "våris", "vårny", "vårru", "vårså", "vårtø", "våryr", "våser", "våses", "våset", "våste", "våtna", "våtne", "våtår", "væpna", "væpne", "væren", "værer", "væres", "været", "væris", "værur", "væska", "væske", "væten", "væter", "vætes", "vætet", "vætte", "vølen", "vøler", "vøles", "vølet", "vølsa", "vølse", "vølte", "vørde", "vørdt", "vører", "vøres", "vørte",
"waden", "wadet", "wafer", "wagyu", "wanne", "wapen", "wappa", "wappe", "warao", "waste", "water", "webba", "webbe", "weben", "weber", "wedge", "welta", "welte", "wenge", "whiff", "whips", "whist", "wiren", "wirer", "witen", "woken", "woker", "wokka", "wokke", "wolla", "wolof", "wonen", "woods", "wowen", "wowet", "wraps", "wurst",
"xenie", "xenon", "xhosa", "xiang", "xylan", "xylem", "xylen",
"yacht", "yaoen", "yards", "yatzy", "ybben", "ydder", "yddet", "ydmyk", "yenen", "yiene", "ylene", "yling", "ymist", "ymten", "ymter", "ymtes", "ymtet", "ynden", "ynder", "yndes", "yndet", "yndig", "yngel", "ynger", "ynges", "ynget", "yngla", "yngle", "yngre", "yngst", "ynken", "ynker", "ynkes", "ynket", "yppal", "ypper", "yppes", "yppet", "yppig", "yrent", "yrere", "yrest", "yrete", "yrhet", "yring", "yrken", "yrker", "yrkes", "yrket", "yrmen", "yrmer", "yrsnø", "yrvak", "ysmen", "ysmne", "ystel", "yster", "ystes", "ystet", "ytede", "ytene", "ytere", "ytete", "yting", "ytrer", "ytres", "ytret", "yucca", "yvent", "yving",
"zappa", "zappe", "zenen", "zippa", "zippe", "zloty", "zooen", "zooer", "zooma", "zoome", "zumba", "zweck",
"ægide", "æonen", "æoner", "æraen", "æraer", "ærbar", "ærdun", "ærede", "ærend", "ærene", "ærete", "æring", "ærlig", "ærvær", "æsene", "ætten", "ætter", "ættes", "ættet", "ævene",
"ødede", "ødela", "ødema", "ødene", "ødere", "ødest", "ødete", "øding", "ødsel", "ødsla", "ødsle", "øglen", "øgler", "økede", "økene", "økete", "øking", "øksel", "øksen", "økser", "økses", "økset", "øksla", "øksle", "øksne", "økten", "økter", "øktes", "øktet", "ølbar", "ølbil", "ølbok", "ølene", "ølete", "ølfat", "ølfet", "ølfør", "ølgul", "ølgås", "ølhol", "ølhus", "øling", "ølkar", "ølkro", "øller", "ølles", "øllet", "ølmål", "ølost", "ølrap", "ølrus", "ølsbu", "ølsøl", "øltyv", "øltår", "ølvom", "ølvåt", "ømhet", "ømmer", "ømmes", "ømmet", "øning", "ønska", "ønske", "ønskt", "ørede", "ørene", "ørent", "ørere", "ørest", "ørete", "ørfin", "ørhet", "øring", "ørken", "ørlei", "ørnen", "ørner", "ørnet", "ørret", "ørska", "ørske", "ørskt", "ørsmå", "ørten", "ørter", "ørtes", "ørtet", "ørtug", "ørung", "øsene", "øsent", "øsere", "øsest", "øsing", "øsken", "øskja", "øskje", "østis", "østli", "østpå", "østre", "øvede", "øvete", "øving", "øvrig", "øydde", "øyden", "øyder", "øydes", "øydna", "øydne", "øyene", "øying", "øyken", "øyker", "øyliv", "øymål", "øyner", "øynes", "øynet", "øyren", "øyrer", "øyres", "øyret", "øytur",
"åband", "åbend", "åbota", "åbryr", "åbrys", "åbuen", "åbøte", "åbøtt", "ådrer", "ådres", "ådret", "ående", "åfara", "åfløy", "ågang", "åglip", "ågrer", "ågres", "ågret", "åinga", "åkall", "åkant", "åkave", "åkene", "åkere", "åking", "åklær", "åkorn", "åkrer", "ålene", "ålete", "ålett", "ålhus", "åling", "åløpa", "åmene", "åmota", "åmøta", "åmøte", "ånden", "ånder", "åndes", "åndet", "åndig", "åndra", "åndre", "åpene", "åpent", "åpner", "åpnes", "åpnet", "årbok", "årbuk", "årdøl", "årene", "årete", "årett", "åring", "årlig", "årsak", "årsku", "årtes", "årtia", "årvak", "årveg", "årvei", "åsabu", "åsdøl", "åsegg", "åsene", "åsete", "åsing", "åskam", "åslag", "åslia", "åssen", "åstak", "åsted", "åsyna", "åtaka", "åtale", "åtene", "åthug", "åtsel", "åtsla", "åtter", "åverk", "åvint", "åvirk",
      ],
      Ta = La,
      Ia = "present",
      Ma = "correct",
      Oa = "absent";
    var Ra = {unknown: 0, absent: 1, present: 2, correct: 3};

    function $a(e, a) {
      var s = {};
      return (
        e.forEach(function (e, t) {
          if (a[t]) {
            for (var o = 0; o < e.length; o++) {
              var n = e[o],
                r = a[t][o],
                i = s[n] || "unknown";
              Ra[r] > Ra[i] && (s[n] = r);
            }
          }
        }),
          s
      );
    }

    function Pa(e) {
      var a = ["th", "st", "nd", "rd"],
        s = e % 100;
      return e + (a[(s - 20) % 10] || a[s] || a[0]);
    }

    var Ha = new Date(2021, 5, 19, 0, 0, 0, 0);

    function Na(e, a) {
      var s = new Date(e),
        t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
      return Math.round(t / 864e5);
    }

    function Da(e) {
      var a,
        s = Ga(e);
      return (a = s % La.length), La[a];
    }

    function Ga(e) {
      return Na(Ha, e);
    }

    var Ba = "abcdefghijklmnopqrstuvwxyzæøå",
      Fa = [].concat(g(Ba.split("").slice(13)), g(Ba.split("").slice(0, 13)));

    function Wa(e) {
      for (var a = "", s = 0; s < e.length; s++) {
        var t = Ba.indexOf(e[s]);
        a += t >= 0 ? Fa[t] : "_";
      }
      return a;
    }

    var Ya = "statistics",
      Ja = "fail",
      Ua = {
        currentStreak: 0,
        maxStreak: 0,
        guesses: n({1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}, Ja, 0),
        winPercentage: 0,
        gamesPlayed: 0,
        gamesWon: 0,
        averageGuesses: 0
      };

    function Xa() {
      var e = window.localStorage.getItem(Ya) || JSON.stringify(Ua);
      return JSON.parse(e);
    }

    function Va(e) {
      var a = e.isWin,
        s = e.isStreak,
        t = e.numGuesses,
        o = Xa();
      a ? ((o.guesses[t] += 1), s ? (o.currentStreak += 1) : (o.currentStreak = 1)) : ((o.currentStreak = 0), (o.guesses.fail += 1)),
        (o.maxStreak = Math.max(o.currentStreak, o.maxStreak)),
        (o.gamesPlayed += 1),
        (o.gamesWon += a ? 1 : 0),
        (o.winPercentage = Math.round((o.gamesWon / o.gamesPlayed) * 100)),
        (o.averageGuesses = Math.round(
          Object.entries(o.guesses).reduce(function (e, a) {
            var s = y(a, 2),
              t = s[0],
              o = s[1];
            return t !== Ja ? (e += t * o) : e;
          }, 0) / o.gamesWon
        )),
        (function (e) {
          window.localStorage.setItem(Ya, JSON.stringify(e));
        })(o);
    }

    var Ka = document.createElement("template");
    Ka.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: "
      .concat(1e3, ";\n  }\n  #system-toaster {\n    z-index: ")
      .concat(
        4e3,
        ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         ORDLE\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n'
      );
    var Qa = document.createElement("template");
    Qa.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
    var Za = "IN_PROGRESS",
      es = "WIN",
      as = "FAIL",
      ss = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"],
      ts = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          s(this, t),
            n(p((e = a.call(this))), "tileIndex", 0),
            n(p(e), "rowIndex", 0),
            n(p(e), "solution", void 0),
            n(p(e), "boardState", void 0),
            n(p(e), "evaluations", void 0),
            n(p(e), "canInput", !0),
            n(p(e), "gameStatus", Za),
            n(p(e), "letterEvaluations", {}),
            n(p(e), "$board", void 0),
            n(p(e), "$keyboard", void 0),
            n(p(e), "$game", void 0),
            n(p(e), "today", void 0),
            n(p(e), "lastPlayedTs", void 0),
            n(p(e), "lastCompletedTs", void 0),
            n(p(e), "hardMode", void 0),
            n(p(e), "dayOffset", void 0),
            e.attachShadow({mode: "open"}),
            (e.today = new Date());
          var o = za();
          return (
            (e.lastPlayedTs = o.lastPlayedTs),
              !e.lastPlayedTs || Na(new Date(e.lastPlayedTs), e.today) >= 1
                ? ((e.boardState = new Array(6).fill("")),
                  (e.evaluations = new Array(6).fill(null)),
                  (e.solution = Da(e.today)),
                  (e.dayOffset = Ga(e.today)),
                  (e.lastCompletedTs = o.lastCompletedTs),
                  (e.hardMode = o.hardMode),
                  (e.restoringFromLocalStorage = !1),
                  ja({
                    rowIndex: e.rowIndex,
                    boardState: e.boardState,
                    evaluations: e.evaluations,
                    solution: e.solution,
                    gameStatus: e.gameStatus
                  }),
                  Ca("event", "level_start", {level_name: Wa(e.solution)}))
                : ((e.boardState = o.boardState),
                  (e.evaluations = o.evaluations),
                  (e.rowIndex = o.rowIndex),
                  (e.solution = o.solution),
                  (e.dayOffset = Ga(e.today)),
                  (e.letterEvaluations = $a(e.boardState, e.evaluations)),
                  (e.gameStatus = o.gameStatus),
                  (e.lastCompletedTs = o.lastCompletedTs),
                  (e.hardMode = o.hardMode),
                e.gameStatus !== Za && (e.canInput = !1),
                  (e.restoringFromLocalStorage = !0)),
              e
          );
        }

        return (
          o(t, [
            {
              key: "evaluateRow",
              value: function () {
                if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
                  var e,
                    a = this.$board.querySelectorAll("game-row")[this.rowIndex],
                    s = this.boardState[this.rowIndex];
                  if (((e = s), !Ta.includes(e) && !La.includes(e))) {
                    return a.setAttribute("invalid", ""), void this.addToast("Ikke i ordliste");
                  }
                  if (this.hardMode) {
                    var t = (function (e, a, s) {
                        if (!e || !a || !s) {
                          return {validGuess: !0};
                        }
                        for (var t = 0; t < s.length; t++) {
                          if (s[t] === Ma && e[t] !== a[t]) {
                            return {
                              validGuess: !1,
                              errorMessage: "".concat(Pa(t + 1), " bokstav må være ").concat(a[t].toUpperCase())
                            };
                          }
                        }
                        for (var o = {}, n = 0; n < s.length; n++) {
                          [Ma, Ia].includes(s[n]) && (o[a[n]] ? (o[a[n]] += 1) : (o[a[n]] = 1));
                        }
                        var r = e.split("").reduce(function (e, a) {
                          return e[a] ? (e[a] += 1) : (e[a] = 1), e;
                        }, {});
                        for (var i in o) {
                          if ((r[i] || 0) < o[i]) {
                            return {
                              validGuess: !1,
                              errorMessage: "Gjetning må inneholde ".concat(i.toUpperCase())
                            };
                          }
                        }
                        return {validGuess: !0};
                      })(s, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]),
                      o = t.validGuess,
                      n = t.errorMessage;
                    if (!o) {
                      return a.setAttribute("invalid", ""), void this.addToast(n || "Ikke gyldig i vanskelig modus");
                    }
                  }
                  var r = (function (e, a) {
                    for (var s = Array(a.length).fill(Oa), t = Array(a.length).fill(!0), o = Array(a.length).fill(!0), n = 0; n < e.length; n++) {
                      e[n] === a[n] && o[n] && ((s[n] = Ma), (t[n] = !1), (o[n] = !1));
                    }
                    for (var r = 0; r < e.length; r++) {
                      var i = e[r];
                      if (t[r]) {
                        for (var l = 0; l < a.length; l++) {
                          var d = a[l];
                          if (o[l] && i === d) {
                            (s[r] = Ia), (o[l] = !1);
                            break;
                          }
                        }
                      }
                    }
                    return s;
                  })(s, this.solution);
                  (this.evaluations[this.rowIndex] = r), (this.letterEvaluations = $a(this.boardState, this.evaluations)), (a.evaluation = this.evaluations[this.rowIndex]), (this.rowIndex += 1);
                  var i = this.rowIndex >= 6,
                    l = r.every(function (e) {
                      return "correct" === e;
                    });
                  if (i || l) {
                    Va({
                      isWin: l,
                      isStreak: !!this.lastCompletedTs && 1 === Na(new Date(this.lastCompletedTs), new Date()),
                      numGuesses: this.rowIndex
                    }),
                      ja({lastCompletedTs: Date.now()}),
                      (this.gameStatus = l ? es : as),
                      Ca("event", "level_end", {
                        level_name: Wa(this.solution),
                        num_guesses: this.rowIndex,
                        success: l
                      });
                  }
                  (this.tileIndex = 0),
                    (this.canInput = !1),
                    ja({
                      rowIndex: this.rowIndex,
                      boardState: this.boardState,
                      evaluations: this.evaluations,
                      solution: this.solution,
                      gameStatus: this.gameStatus,
                      lastPlayedTs: Date.now()
                    });
                }
              },
            },
            {
              key: "addLetter",
              value: function (e) {
                this.gameStatus === Za &&
                this.canInput &&
                (this.tileIndex >= 5 || ((this.boardState[this.rowIndex] += e), this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]), (this.tileIndex += 1)));
              },
            },
            {
              key: "removeLetter",
              value: function () {
                if (this.gameStatus === Za && this.canInput && !(this.tileIndex <= 0)) {
                  this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
                  var e = this.$board.querySelectorAll("game-row")[this.rowIndex];
                  this.boardState[this.rowIndex] ? e.setAttribute("letters", this.boardState[this.rowIndex]) : e.removeAttribute("letters"), e.removeAttribute("invalid"), (this.tileIndex -= 1);
                }
              },
            },
            {
              key: "submitGuess",
              value: function () {
                if (this.gameStatus === Za && this.canInput) {
                  if (5 !== this.tileIndex) {
                    return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Not enough letters");
                  }
                  this.evaluateRow();
                }
              },
            },
            {
              key: "addToast",
              value: function (e, a) {
                var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  t = document.createElement("game-toast");
                t.setAttribute("text", e), a && t.setAttribute("duration", a), s ? this.shadowRoot.querySelector("#system-toaster").prepend(t) : this.shadowRoot.querySelector("#game-toaster").prepend(t);
              },
            },
            {
              key: "sizeBoard",
              value: function () {
                var e = this.shadowRoot.querySelector("#board-container"),
                  a = Math.min(Math.floor(e.clientHeight * (5 / 6)), 350),
                  s = 6 * Math.floor(a / 5);
                (this.$board.style.width = "".concat(a, "px")), (this.$board.style.height = "".concat(s, "px"));
              },
            },
            {
              key: "showStatsModal",
              value: function () {
                var e = this.$game.querySelector("game-modal"),
                  a = document.createElement("game-stats");
                this.gameStatus === es && this.rowIndex <= 6 && a.setAttribute("highlight-guess", this.rowIndex), (a.gameApp = this), e.appendChild(a), e.setAttribute("open", "");
              },
            },
            {
              key: "showHelpModal",
              value: function () {
                var e = this.$game.querySelector("game-modal");
                e.appendChild(document.createElement("game-help")), e.setAttribute("open", "");
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Ka.content.cloneNode(!0)),
                  (this.$game = this.shadowRoot.querySelector("#game")),
                  (this.$board = this.shadowRoot.querySelector("#board")),
                  (this.$keyboard = this.shadowRoot.querySelector("game-keyboard")),
                  this.sizeBoard(),
                this.lastPlayedTs ||
                setTimeout(function () {
                  return e.showHelpModal();
                }, 100);
                for (var a = 0; a < 6; a++) {
                  var s = document.createElement("game-row");
                  s.setAttribute("letters", this.boardState[a]), s.setAttribute("length", 5), this.evaluations[a] && (s.evaluation = this.evaluations[a]), this.$board.appendChild(s);
                }
                this.$game.addEventListener("game-key-press", function (a) {
                  var s = a.detail.key;
                  "←" === s || "Backspace" === s ? e.removeLetter() : "↵" === s || "Enter" === s ? e.submitGuess() : Ba.includes(s.toLowerCase()) && e.addLetter(s.toLowerCase());
                }),
                  this.$game.addEventListener("game-last-tile-revealed-in-row", function (a) {
                    (e.$keyboard.letterEvaluations = e.letterEvaluations), e.rowIndex < 6 && (e.canInput = !0);
                    var s = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                    (a.path || (a.composedPath && a.composedPath())).includes(s) &&
                    ([es, as].includes(e.gameStatus) &&
                    (e.restoringFromLocalStorage
                      ? e.showStatsModal()
                      : (e.gameStatus === es && (s.setAttribute("win", ""), e.addToast(ss[e.rowIndex - 1], 2e3)),
                      e.gameStatus === as && e.addToast(e.solution.toUpperCase(), 1 / 0),
                        setTimeout(function () {
                          e.showStatsModal();
                        }, 2500))),
                      (e.restoringFromLocalStorage = !1));
                  }),
                  this.shadowRoot.addEventListener("game-setting-change", function (a) {
                    var s = a.detail,
                      t = s.name,
                      o = s.checked,
                      n = s.disabled;
                    switch (t) {
                      case "hard-mode":
                        return void (n ? e.addToast("Hard mode can only be enabled at the start of a round", 1500, !0) : ((e.hardMode = o), ja({hardMode: o})));
                    }
                  }),
                  this.shadowRoot.getElementById("settings-button").addEventListener("click", function (a) {
                    var s = e.$game.querySelector("game-page"),
                      t = document.createTextNode("Innstillinger");
                    s.appendChild(t);
                    var o = document.createElement("game-settings");
                    o.setAttribute("slot", "content"), (o.gameApp = e), s.appendChild(o), s.setAttribute("open", "");
                  }),
                  this.shadowRoot.getElementById("help-button").addEventListener("click", function (a) {
                    var s = e.$game.querySelector("game-page"),
                      t = document.createTextNode("Hvordan spille");
                    s.appendChild(t);
                    var o = document.createElement("game-help");
                    o.setAttribute("page", ""), o.setAttribute("slot", "content"), s.appendChild(o), s.setAttribute("open", "");
                  }),
                  this.shadowRoot.getElementById("statistics-button").addEventListener("click", function (a) {
                    e.showStatsModal();
                  }),
                  window.addEventListener("resize", this.sizeBoard.bind(this));
              },
            },
            {
              key: "disconnectedCallback", value: function () {
              }
            },
            {
              key: "debugTools",
              value: function () {
                var e = this;
                this.shadowRoot.getElementById("debug-tools").appendChild(Qa.content.cloneNode(!0)),
                  this.shadowRoot.getElementById("toast").addEventListener("click", function (a) {
                    e.addToast("hello world");
                  }),
                  this.shadowRoot.getElementById("modal").addEventListener("click", function (a) {
                    var s = e.$game.querySelector("game-modal");
                    (s.textContent = "hello plz"), s.setAttribute("open", "");
                  }),
                  this.shadowRoot.getElementById("reveal").addEventListener("click", function () {
                    e.evaluateRow();
                  }),
                  this.shadowRoot.getElementById("shake").addEventListener("click", function () {
                    e.$board.querySelectorAll("game-row")[e.rowIndex].setAttribute("invalid", "");
                  }),
                  this.shadowRoot.getElementById("bounce").addEventListener("click", function () {
                    var a = e.$board.querySelectorAll("game-row")[e.rowIndex - 1];
                    "" === a.getAttribute("win") ? a.removeAttribute("win") : a.setAttribute("win", "");
                  });
              },
            },
          ]),
            t
        );
      })(c(HTMLElement));
    customElements.define("game-app", ts);
    var os = document.createElement("template");
    os.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(
      3e3,
      ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n'
    );
    var ns = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({mode: "open"}), e;
      }

      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              var e = this;
              this.shadowRoot.appendChild(os.content.cloneNode(!0)),
                this.addEventListener("click", function (a) {
                  e.shadowRoot.querySelector(".content").classList.add("closing");
                }),
                this.shadowRoot.addEventListener("animationend", function (a) {
                  "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".content").classList.remove("closing"), e.removeChild(e.firstChild), e.removeAttribute("open"));
                });
            },
          },
        ]),
          t
      );
    })(c(HTMLElement));
    customElements.define("game-modal", ns);
    var rs = document.createElement("template");
    rs.innerHTML =
      "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
    var is = document.createElement("template");
    is.innerHTML = "\n  <button>key</button>\n";
    var ls = document.createElement("template");
    ls.innerHTML = '\n  <div class="spacer"></div>\n';
    var ds = [
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "å"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ø", "æ"],
        ["↵", "z", "x", "c", "v", "b", "n", "m", "←"],
      ],
      us = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          return s(this, t), n(p((e = a.call(this))), "_letterEvaluations", {}), e.attachShadow({mode: "open"}), e;
        }

        return (
          o(t, [
            {
              key: "letterEvaluations",
              set: function (e) {
                (this._letterEvaluations = e), this._render();
              },
            },
            {
              key: "dispatchKeyPressEvent",
              value: function (e) {
                this.dispatchEvent(new CustomEvent("game-key-press", {
                  bubbles: !0,
                  composed: !0,
                  detail: {key: e}
                }));
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(rs.content.cloneNode(!0)),
                  (this.$keyboard = this.shadowRoot.getElementById("keyboard")),
                  this.$keyboard.addEventListener("click", function (a) {
                    var s = a.target.closest("button");
                    s && e.$keyboard.contains(s) && e.dispatchKeyPressEvent(s.dataset.key);
                  }),
                  window.addEventListener("keydown", function (a) {
                    if (!0 !== a.repeat) {
                      var s = a.key,
                        t = a.metaKey,
                        o = a.ctrlKey;
                      t || o || ((Ba.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) && e.dispatchKeyPressEvent(s));
                    }
                  }),
                  this.$keyboard.addEventListener("transitionend", function (a) {
                    var s = a.target.closest("button");
                    s && e.$keyboard.contains(s) && s.classList.remove("fade");
                  }),
                  ds.forEach(function (a) {
                    var s = document.createElement("div");
                    s.classList.add("row"),
                      a.forEach(function (e) {
                        var a;
                        if ((e >= "a" && e <= "ø") || e === "←" || e === "↵") {
                          if ((((a = is.content.cloneNode(!0).firstElementChild).dataset.key = e), (a.textContent = e), "←" === e)) {
                            var t = document.createElement("game-icon");
                            t.setAttribute("icon", "backspace"), (a.textContent = ""), a.appendChild(t), a.classList.add("one-and-a-half");
                          }
                          "↵" == e && ((a.textContent = "enter"), a.classList.add("one-and-a-half"));
                        }
                        else {
                          (a = ls.content.cloneNode(!0).firstElementChild).classList.add(1 === e.length ? "half" : "one");
                        }
                        s.appendChild(a);
                      }),
                      e.$keyboard.appendChild(s);
                  }),
                  this._render();
              },
            },
            {
              key: "_render",
              value: function () {
                for (var e in this._letterEvaluations) {
                  var a = this.$keyboard.querySelector('[data-key="'.concat(e, '"]'));
                  (a.dataset.state = this._letterEvaluations[e]), a.classList.add("fade");
                }
              },
            },
          ]),
            t
        );
      })(c(HTMLElement));

    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
    function cs(e, a, s, t) {
      return new (s || (s = Promise))(function (o, n) {
        function r(e) {
          try {
            l(t.next(e));
          }
          catch (e) {
            n(e);
          }
        }

        function i(e) {
          try {
            l(t.throw(e));
          }
          catch (e) {
            n(e);
          }
        }

        function l(e) {
          var a;
          e.done
            ? o(e.value)
            : ((a = e.value),
              a instanceof s
                ? a
                : new s(function (e) {
                  e(a);
                })).then(r, i);
        }

        l((t = t.apply(e, a || [])).next());
      });
    }

    function ps(e, a) {
      var s,
        t,
        o,
        n,
        r = {
          label: 0,
          sent: function () {
            if (1 & o[0]) {
              throw o[1];
            }
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (n = {next: i(0), throw: i(1), return: i(2)}),
        "function" == typeof Symbol &&
        (n[Symbol.iterator] = function () {
          return this;
        }),
          n
      );

      function i(n) {
        return function (i) {
          return (function (n) {
            if (s) {
              throw new TypeError("Generator is already executing.");
            }
            for (; r;) {
              try {
                if (((s = 1), t && (o = 2 & n[0] ? t.return : n[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, n[1])).done)) {
                  return o;
                }
                switch (((t = 0), o && (n = [2 & n[0], o.value]), n[0])) {
                  case 0:
                  case 1:
                    o = n;
                    break;
                  case 4:
                    return r.label++, {value: n[1], done: !1};
                  case 5:
                    r.label++, (t = n[1]), (n = [0]);
                    continue;
                  case 7:
                    (n = r.ops.pop()), r.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = r.trys).length > 0 && o[o.length - 1]) || (6 !== n[0] && 2 !== n[0]))) {
                      r = 0;
                      continue;
                    }
                    if (3 === n[0] && (!o || (n[1] > o[0] && n[1] < o[3]))) {
                      r.label = n[1];
                      break;
                    }
                    if (6 === n[0] && r.label < o[1]) {
                      (r.label = o[1]), (o = n);
                      break;
                    }
                    if (o && r.label < o[2]) {
                      (r.label = o[2]), r.ops.push(n);
                      break;
                    }
                    o[2] && r.ops.pop(), r.trys.pop();
                    continue;
                }
                n = a.call(e, r);
              }
              catch (e) {
                (n = [6, e]), (t = 0);
              }
              finally {
                s = o = 0;
              }
            }
            if (5 & n[0]) {
              throw n[1];
            }
            return {value: n[0] ? n[1] : void 0, done: !0};
          })([n, i]);
        };
      }
    }

    customElements.define("game-keyboard", us),
      function () {
        (console.warn || console.log).apply(console, arguments);
      }.bind("[clipboard-polyfill]");
    var ms,
      hs,
      ys,
      gs,
      bs = "undefined" == typeof navigator ? void 0 : navigator,
      fs = null == bs ? void 0 : bs.clipboard;
    null === (ms = null == fs ? void 0 : fs.read) || void 0 === ms || ms.bind(fs), null === (hs = null == fs ? void 0 : fs.readText) || void 0 === hs || hs.bind(fs);
    var ks = (null === (ys = null == fs ? void 0 : fs.write) || void 0 === ys || ys.bind(fs), null === (gs = null == fs ? void 0 : fs.writeText) || void 0 === gs ? void 0 : gs.bind(fs)),
      vs = "undefined" == typeof window ? void 0 : window,
      ws = (null == vs || vs.ClipboardItem, vs);
    var xs = function () {
      this.success = !1;
    };

    function zs(e, a, s) {
      for (var t in ((e.success = !0), a)) {
        var o = a[t],
          n = s.clipboardData;
        n.setData(t, o), "text/plain" === t && n.getData(t) !== o && (e.success = !1);
      }
      s.preventDefault();
    }

    function js(e) {
      var a = new xs(),
        s = zs.bind(this, a, e);
      document.addEventListener("copy", s);
      try {
        document.execCommand("copy");
      }
      finally {
        document.removeEventListener("copy", s);
      }
      return a.success;
    }

    function Ss(e, a) {
      _s(e);
      var s = js(a);
      return qs(), s;
    }

    function _s(e) {
      var a = document.getSelection();
      if (a) {
        var s = document.createRange();
        s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s);
      }
    }

    function qs() {
      var e = document.getSelection();
      e && e.removeAllRanges();
    }

    function Es(e) {
      return cs(this, void 0, void 0, function () {
        var a;
        return ps(this, function (s) {
          if (((a = "text/plain" in e), "undefined" == typeof ClipboardEvent && void 0 !== ws.clipboardData && void 0 !== ws.clipboardData.setData)) {
            if (!a) {
              throw new Error("No `text/plain` value was specified.");
            }
            if (((t = e["text/plain"]), ws.clipboardData.setData("Text", t))) {
              return [2, !0];
            }
            throw new Error("Copying failed, possibly because the user rejected it.");
          }
          var t;
          return js(e) ||
          navigator.userAgent.indexOf("Edge") > -1 ||
          Ss(document.body, e) ||
          (function (e) {
            var a = document.createElement("div");
            a.setAttribute("style", "-webkit-user-select: text !important"), (a.textContent = "temporary element"), document.body.appendChild(a);
            var s = Ss(a, e);
            return document.body.removeChild(a), s;
          })(e) ||
          (function (e) {
            var a = document.createElement("div");
            a.setAttribute("style", "-webkit-user-select: text !important");
            var s = a;
            a.attachShadow && (s = a.attachShadow({mode: "open"}));
            var t = document.createElement("span");
            (t.innerText = e), s.appendChild(t), document.body.appendChild(a), _s(t);
            var o = document.execCommand("copy");
            return qs(), document.body.removeChild(a), o;
          })(e["text/plain"])
            ? [2, !0]
            : [2, !1];
        });
      });
    }

    function As(e, a, s) {
      try {
        (t = navigator.userAgent || navigator.vendor || window.opera),
          (!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              t
            ) &&
            !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              t.substr(0, 4)
            )) ||
          navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ||
          void 0 === navigator.share ||
          !navigator.canShare ||
          !navigator.canShare(e)
            ? (function (e) {
              return cs(this, void 0, void 0, function () {
                return ps(this, function (a) {
                  if (ks) {
                    return [2, ks(e)];
                  }
                  if (
                    !Es(
                      (function (e) {
                        var a = {};
                        return (a["text/plain"] = e), a;
                      })(e)
                    )
                  ) {
                    throw new Error("writeText() failed");
                  }
                  return [2];
                });
              });
            })(e.text).then(a, s)
            : navigator.share(e);
      }
      catch (e) {
        s();
      }
      var t;
    }

    var Cs = document.createElement("template");
    Cs.innerHTML =
      '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistikk</h1>\n    <div id="statistics"></div>\n    <h1>Distribusjon av gjetninger</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
    var Ls = document.createElement("template");
    Ls.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
    var Ts = document.createElement("template");
    Ts.innerHTML =
      '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
    var Is = document.createElement("template");
    Is.innerHTML =
      '\n  <div class="countdown">\n    <h1>Neste ORDLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Del <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
    var Ms = {
        currentStreak: "Nåværende seiersrekke",
        maxStreak: "Maks seiersrekke",
        winPercentage: "Seiersprosent",
        gamesPlayed: "Spilt",
        gamesWon: "Vunnet",
        averageGuesses: "Gj. gjetninger"
      },
      Os = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          return s(this, t), n(p((e = a.call(this))), "stats", {}), n(p(e), "gameApp", void 0), e.attachShadow({mode: "open"}), (e.stats = Xa()), e;
        }

        return (
          o(t, [
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Cs.content.cloneNode(!0));
                var a = this.shadowRoot.getElementById("statistics"),
                  s = this.shadowRoot.getElementById("guess-distribution"),
                  t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
                if (
                  Object.values(this.stats.guesses).every(function (e) {
                    return 0 === e;
                  })
                ) {
                  var o = document.createElement("div");
                  o.classList.add("no-data"), (o.innerText = "No Data"), s.appendChild(o);
                }
                else {
                  for (var n = 1; n < Object.keys(this.stats.guesses).length; n++) {
                    var r = n,
                      i = this.stats.guesses[n],
                      l = Ts.content.cloneNode(!0),
                      d = Math.max(7, Math.round((i / t) * 100));
                    l.querySelector(".guess").textContent = r;
                    var u = l.querySelector(".graph-bar");
                    if (((u.style.width = "".concat(d, "%")), "number" == typeof i)) {
                      (l.querySelector(".num-guesses").textContent = i), i > 0 && u.classList.add("align-right");
                      var c = parseInt(this.getAttribute("highlight-guess"), 10);
                      c && n === c && u.classList.add("highlight");
                    }
                    s.appendChild(l);
                  }
                }
                if (
                  (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach(function (s) {
                    var t = Ms[s],
                      o = e.stats[s],
                      n = Ls.content.cloneNode(!0);
                    (n.querySelector(".label").textContent = t), (n.querySelector(".statistic").textContent = o), a.appendChild(n);
                  }),
                  this.gameApp.gameStatus !== Za)
                ) {
                  var p = this.shadowRoot.querySelector(".footer"),
                    m = Is.content.cloneNode(!0);
                  p.appendChild(m),
                    this.shadowRoot.querySelector("button#share-button").addEventListener("click", function (a) {
                      a.preventDefault(), a.stopPropagation();
                      As(
                        (function (e) {
                          var a = e.evaluations,
                            s = e.dayOffset,
                            t = e.rowIndex,
                            o = e.isHardMode,
                            n = e.isWin,
                            r = JSON.parse(window.localStorage.getItem(j)),
                            i = JSON.parse(window.localStorage.getItem(S)),
                            l = "Ordle ".concat(s);
                          (l += " ".concat(n ? t : "X", "/").concat(6)), o && (l += "*");
                          var d = "";
                          return (
                            a.forEach(function (e) {
                              e &&
                              (e.forEach(function (e) {
                                if (e) {
                                  var a = "";
                                  switch (e) {
                                    case Ma:
                                      a = (function (e) {
                                        return e ? "🟧" : "🟩";
                                      })(i);
                                      break;
                                    case Ia:
                                      a = (function (e) {
                                        return e ? "🟦" : "🟨";
                                      })(i);
                                      break;
                                    case Oa:
                                      a = (function (e) {
                                        return e ? "⬛" : "⬜";
                                      })(r);
                                  }
                                  d += a;
                                }
                              }),
                                (d += "\n"));
                            }),
                              {text: "".concat(l, "\n\n").concat(d.trimEnd())}
                          );
                        })({
                          evaluations: e.gameApp.evaluations,
                          dayOffset: e.gameApp.dayOffset,
                          rowIndex: e.gameApp.rowIndex,
                          isHardMode: e.gameApp.hardMode,
                          isWin: e.gameApp.gameStatus === es
                        }),
                        function () {
                          e.gameApp.addToast("Copied results to clipboard", 2e3, !0);
                        },
                        function () {
                          e.gameApp.addToast("Share failed", 2e3, !0);
                        }
                      );
                    });
                }
              },
            },
          ]),
            t
        );
      })(c(HTMLElement));
    customElements.define("game-stats", Os);
    var Rs = document.createElement("template");
    Rs.innerHTML =
      '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
    var $s = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({mode: "open"}), e;
      }

      return (
        o(
          t,
          [
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Rs.content.cloneNode(!0)),
                  this.shadowRoot.querySelector(".container").addEventListener("click", function (a) {
                    a.stopPropagation(),
                      e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""),
                      e.dispatchEvent(
                        new CustomEvent("game-switch-change", {
                          bubbles: !0,
                          composed: !0,
                          detail: {
                            name: e.getAttribute("name"),
                            checked: e.hasAttribute("checked"),
                            disabled: e.hasAttribute("disabled")
                          }
                        })
                      );
                  });
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return ["checked"];
              },
            },
          ]
        ),
          t
      );
    })(c(HTMLElement));
    customElements.define("game-switch", $s);
    var Ps = document.createElement("template");
    Ps.innerHTML =
      '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Gjett <strong>ORDLE</strong>n på 6 forsøk.</p>\n      <p>Hver gjetning må være et gyldig ord på 5 bokstaver. Trykk på enter-knappen for å sende inn.</p>\n      <p>Etter hver gjetning vil fargen på flisene endres for å vise hvor nær gjettingen din var ordet.</p>\n      <div class="examples">\n        <p><strong>Eksempler</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="h" evaluation="correct" reveal></game-tile>\n            <game-tile letter="u"></game-tile>\n            <game-tile letter="m"></game-tile>\n            <game-tile letter="o"></game-tile>\n            <game-tile letter="r"></game-tile>\n          </div>\n          <p>Bokstaven <strong>H</strong> er i ordet og på riktig sted.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="e" evaluation="present" reveal></game-tile>\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="æ"></game-tile>\n            <game-tile letter="r"></game-tile>\n          </div>\n          <p>Bokstaven <strong>E</strong> er i ordet, men på feil sted.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="s"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="b" evaluation="absent" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="l"></game-tile>\n          </div>\n          <p>Bokstaven <strong>B</strong> er ikke i ordet på noe sted.</p>\n        </div>\n      </div>\n      <p><strong>En ny ORDLE vil være tilgjengelig hver dag!<strong></p>\n    </div>\n  </section>\n';
    var Hs = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({mode: "open"}), e;
      }

      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              this.shadowRoot.appendChild(Ps.content.cloneNode(!0));
            },
          },
        ]),
          t
      );
    })(c(HTMLElement));
    customElements.define("game-help", Hs);
    var Ns = document.createElement("template");
    Ns.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(
      2e3,
      ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n'
    );
    var Ds = (function (e) {
      r(t, e);
      var a = h(t);

      function t() {
        var e;
        return s(this, t), (e = a.call(this)).attachShadow({mode: "open"}), e;
      }

      return (
        o(t, [
          {
            key: "connectedCallback",
            value: function () {
              var e = this;
              this.shadowRoot.appendChild(Ns.content.cloneNode(!0)),
                this.shadowRoot.querySelector("game-icon").addEventListener("click", function (a) {
                  e.shadowRoot.querySelector(".overlay").classList.add("closing");
                }),
                this.shadowRoot.addEventListener("animationend", function (a) {
                  "SlideOut" === a.animationName &&
                  (e.shadowRoot.querySelector(".overlay").classList.remove("closing"),
                    Array.from(e.childNodes).forEach(function (a) {
                      e.removeChild(a);
                    }),
                    e.removeAttribute("open"));
                });
            },
          },
        ]),
          t
      );
    })(c(HTMLElement));
    customElements.define("game-page", Ds);
    var Gs = document.createElement("template");
    Gs.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
    var Bs = {
        help:
          "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
        settings:
          "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
        backspace:
          "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
        close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        share:
          "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
        statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z",
      },
      Fs = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          return s(this, t), (e = a.call(this)).attachShadow({mode: "open"}), e;
        }

        return (
          o(t, [
            {
              key: "connectedCallback",
              value: function () {
                this.shadowRoot.appendChild(Gs.content.cloneNode(!0));
                var e = this.getAttribute("icon");
                this.shadowRoot.querySelector("path").setAttribute("d", Bs[e]),
                "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"),
                "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)");
              },
            },
          ]),
            t
        );
      })(c(HTMLElement));
    customElements.define("game-icon", Fs);
    var Ws = document.createElement("template");
    Ws.innerHTML = '\n  <div id="timer"></div>\n';
    var Ys = 6e4,
      Js = 36e5,
      Us = (function (e) {
        r(t, e);
        var a = h(t);

        function t() {
          var e;
          s(this, t), n(p((e = a.call(this))), "targetEpochMS", void 0), n(p(e), "intervalId", void 0), n(p(e), "$timer", void 0), e.attachShadow({mode: "open"});
          var o = new Date();
          return o.setDate(o.getDate() + 1), o.setHours(0, 0, 0, 0), (e.targetEpochMS = o.getTime()), e;
        }

        return (
          o(t, [
            {
              key: "padDigit",
              value: function (e) {
                return e.toString().padStart(2, "0");
              },
            },
            {
              key: "updateTimer",
              value: function () {
                var e,
                  a = new Date().getTime(),
                  s = Math.floor(this.targetEpochMS - a);
                if (s <= 0) {
                  e = "00:00:00";
                }
                else {
                  var t = Math.floor((s % 864e5) / Js),
                    o = Math.floor((s % Js) / Ys),
                    n = Math.floor((s % Ys) / 1e3);
                  e = "".concat(this.padDigit(t), ":").concat(this.padDigit(o), ":").concat(this.padDigit(n));
                }
                this.$timer.textContent = e;
              },
            },
            {
              key: "connectedCallback",
              value: function () {
                var e = this;
                this.shadowRoot.appendChild(Ws.content.cloneNode(!0)),
                  (this.$timer = this.shadowRoot.querySelector("#timer")),
                  (this.intervalId = setInterval(function () {
                    e.updateTimer();
                  }, 200));
              },
            },
            {
              key: "disconnectedCallback",
              value: function () {
                clearInterval(this.intervalId);
              },
            },
          ]),
            t
        );
      })(c(HTMLElement));
    return (
      customElements.define("countdown-timer", Us),
        (e.CountdownTimer = Us),
        (e.GameApp = ts),
        (e.GameHelp = Hs),
        (e.GameIcon = Fs),
        (e.GameKeyboard = us),
        (e.GameModal = ns),
        (e.GamePage = Ds),
        (e.GameRow = x),
        (e.GameSettings = _a),
        (e.GameStats = Os),
        (e.GameSwitch = $s),
        (e.GameThemeManager = _),
        (e.GameTile = v),
        (e.GameToast = Aa),
        Object.defineProperty(e, "__esModule", {value: !0}),
        e
    );
  })({}));
