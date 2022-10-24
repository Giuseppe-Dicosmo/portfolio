(function () {
  "use strict";
  var t = {
      889: function (t, e, o) {
        var n = o(144),
          i = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                class: 1 == t.$store.state.dark ? "bg-dark active" : "bg-light",
                attrs: { id: "app" },
              },
              [
                e(
                  "b-navbar",
                  {
                    staticClass: "navbar-router sticky-top",
                    attrs: { toggleable: "sm" },
                  },
                  [
                    e(
                      "b-container",
                      { attrs: { fluid: "lg" } },
                      [
                        e(
                          "b-navbar-nav",
                          [
                            e("b-nav-item", { on: { click: t.darkMode } }, [
                              e("div", {
                                staticClass: "ball",
                                class: 1 == t.$store.state.dark ? "active" : "",
                              }),
                            ]),
                          ],
                          1
                        ),
                        e(
                          "b-navbar-toggle",
                          {
                            staticClass: "text-warning",
                            attrs: { target: "nav-collapse" },
                            on: {
                              click: function (e) {
                                t.$store.state.navbarIcon =
                                  !t.$store.state.navbarIcon;
                              },
                            },
                          },
                          [
                            1 == t.$store.state.navbarIcon
                              ? e(
                                  "span",
                                  [
                                    e("b-icon", {
                                      attrs: { scale: "1.5", icon: "list" },
                                    }),
                                  ],
                                  1
                                )
                              : e(
                                  "span",
                                  [e("b-icon", { attrs: { icon: "x-lg" } })],
                                  1
                                ),
                          ]
                        ),
                        e(
                          "b-collapse",
                          {
                            staticClass: "d-xl-flex justify-content-end",
                            attrs: { id: "nav-collapse", "is-nav": "" },
                          },
                          [
                            e(
                              "b-navbar-nav",
                              {
                                directives: [
                                  {
                                    name: "b-scrollspy",
                                    rawName: "v-b-scrollspy:nav-scroller",
                                    arg: "nav-scroller",
                                  },
                                ],
                                staticClass: "container-link text-warning",
                              },
                              [
                                t._l(t.NavbarRouter, function (o, n) {
                                  return e(
                                    "b-nav-item",
                                    { key: n, attrs: { to: o.to } },
                                    [t._v(" " + t._s(o.text) + " ")]
                                  );
                                }),
                                t._l(t.NavbarLink, function (o, n) {
                                  return e(
                                    "b-nav-item",
                                    { key: n, attrs: { href: o.href } },
                                    [
                                      "/" === t.$router.history.current["path"]
                                        ? e("span", [
                                            t._v(" " + t._s(o.text) + " "),
                                          ])
                                        : t._e(),
                                    ]
                                  );
                                }),
                              ],
                              2
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e("router-view"),
              ],
              1
            );
          },
          r = [],
          a = o(629),
          s = {
            name: "App",
            data() {
              return {
                NavbarRouter: [
                  { to: "/about", text: "About" },
                  { to: "/", text: "Home" },
                ],
                NavbarLink: [
                  { href: "#chi-sono", text: "Chi sono?" },
                  { href: "#tipo-2", text: "tipo 2" },
                  { href: "#tipo-3", text: "tipo 3" },
                ],
              };
            },
            methods: { ...(0, a.OI)(["darkMode"]) },
          },
          c = s,
          l = o(1),
          u = (0, l.Z)(c, i, r, !1, null, null, null),
          p = u.exports,
          f = o(205);
        (0, f.z)("/portfolio/service-worker.js", {
          ready() {
            console.log(
              "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
            );
          },
          registered() {
            console.log("Service worker has been registered.");
          },
          cached() {
            console.log("Content has been cached for offline use.");
          },
          updatefound() {
            console.log("New content is downloading.");
          },
          updated() {
            console.log("New content is available; please refresh.");
          },
          offline() {
            console.log(
              "No internet connection found. App is running in offline mode."
            );
          },
          error(t) {
            console.error("Error during service worker registration:", t);
          },
        });
        var m = o(345),
          d = function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "home",
                staticStyle: { "overflow-x": "hidden" },
                attrs: { id: "nav-scroller" },
              },
              [
                e("jumbotron"),
                e("presentation", { attrs: { id: "chi-sono" } }),
              ],
              1
            );
          },
          v = [],
          g = function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-container",
              {
                staticClass: "container-jumbotron position-relative",
                attrs: { fluid: "" },
              },
              [
                e(
                  "b-row",
                  {
                    staticClass:
                      "container-circle rounded-circle d-flex flex-column flex-wrap align-content-center justify-content-end",
                  },
                  [
                    e(
                      "b-col",
                      {
                        staticClass:
                          "presentation-container d-flex justify-content-center text-center",
                        attrs: { cols: "9", md: "6" },
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "d-flex flex-column align-items-center",
                          },
                          [
                            e(
                              "h1",
                              {
                                staticClass: "mb-5",
                                class:
                                  1 == t.$store.state.dark
                                    ? "text-light"
                                    : "text-dark",
                              },
                              [
                                t._v(" Ciao sono Giuseppe Dicosmo "),
                                e("span", [
                                  t._v("Jr. Full Stack Web Developer"),
                                ]),
                              ]
                            ),
                            e(
                              "figure",
                              {
                                directives: [
                                  {
                                    name: "motion-pop",
                                    rawName: "v-motion-pop",
                                  },
                                ],
                                staticClass:
                                  "img-profail-container col-10 col-md-8 col-lg-5 rounded-circle overflow-hidden",
                                attrs: { delay: 800 },
                              },
                              [e("img", { attrs: { src: o(180), alt: "" } })]
                            ),
                          ]
                        ),
                        e(
                          "div",
                          {
                            staticClass:
                              "circle bg-light rounded-circle d-flex justify-content-center align-items-center",
                            class:
                              1 == t.$store.state.dark ? "bg-dark" : "bg-light",
                            style: `--n: ${t.iconsProgramming.length}; --t: ${t.time}s`,
                          },
                          [
                            e(
                              "ul",
                              { staticClass: "d-flex justify-content-center" },
                              t._l(t.iconsProgramming, function (t, o) {
                                return e(
                                  "li",
                                  {
                                    key: o,
                                    staticClass:
                                      "item col-7 col-lg-7 d-flex justify-content-center",
                                    style: `animation-delay: calc(${t.position} * var(--t) / var(--n))`,
                                  },
                                  [
                                    e(
                                      "figure",
                                      { staticClass: "col-2 col-lg-1" },
                                      [
                                        e("img", {
                                          attrs: { src: t.img, alt: "" },
                                        }),
                                      ]
                                    ),
                                  ]
                                );
                              }),
                              0
                            ),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          b = [],
          h = {
            name: "jumboTron",
            data() {
              return {
                time: 30,
                iconsProgramming: [
                  { img: o(951), position: -0 },
                  { img: o(532), position: -1 },
                  { img: o(893), position: -2 },
                  { img: o(754), position: -3 },
                  { img: o(310), position: -4 },
                  { img: o(214), position: -5 },
                  { img: o(331), position: -6 },
                  { img: o(600), position: -7 },
                  { img: o(450), position: -8 },
                  { img: o(100), position: -9 },
                  { img: o(442), position: -10 },
                  { img: o(717), position: -11 },
                  { img: o(952), position: -12 },
                ],
              };
            },
          },
          x = h,
          y = (0, l.Z)(x, g, b, !1, null, "e58009e8", null),
          k = y.exports,
          w = function () {
            var t = this,
              e = t._self._c;
            return e(
              "b-container",
              {
                directives: [
                  {
                    name: "motion",
                    rawName: "v-motion",
                    value: "custom1",
                    expression: "'custom1'",
                  },
                ],
                staticClass:
                  "container-presentation d-flex justify-content-center align-items-center",
                attrs: {
                  initial: { opacity: 0, x: 100 },
                  visibleOnce: { opacity: 1, x: 0 },
                  delay: 500,
                  fluid: "xl",
                },
              },
              [
                e(
                  "b-row",
                  { staticClass: "row-presentation" },
                  [
                    e(
                      "b-col",
                      {
                        directives: [
                          {
                            name: "motion",
                            rawName: "v-motion",
                            value: "custom2",
                            expression: "'custom2'",
                          },
                        ],
                        staticClass:
                          "p-3 d-flex justify-content-center align-items-center",
                        attrs: {
                          initial: { opacity: 0, x: 100 },
                          visibleOnce: { opacity: 1, x: 0 },
                          delay: 800,
                          cols: "12",
                          md: "4",
                        },
                      },
                      [
                        e(
                          "figure",
                          {
                            staticClass:
                              "img-presentation p-0 m-0 col-12 overflow-hidden",
                          },
                          [e("img", { attrs: { src: o(291), alt: "" } })]
                        ),
                      ]
                    ),
                    e(
                      "b-col",
                      {
                        directives: [
                          {
                            name: "motion",
                            rawName: "v-motion",
                            value: "custom3",
                            expression: "'custom3'",
                          },
                        ],
                        staticClass:
                          "p-3 d-flex flex-column justify-content-center",
                        attrs: {
                          initial: { opacity: 0, x: 100 },
                          visibleOnce: { opacity: 1, x: 0 },
                          delay: 1100,
                          cols: "12",
                          md: "8",
                        },
                      },
                      [
                        e("h2", { staticClass: "title-presentation" }, [
                          t._v("salve mi presento"),
                        ]),
                        e("p", [
                          t._v(
                            " Sono un ragazzo empatico e capace di ascoltare e comprendere rapidamente il problema da affrontare."
                          ),
                          e("br"),
                          t._v(
                            "L'ambizione e la determinazione non mi mancano e mi aiutano certamente a perseguire gli obiettivi che mi prefiggo o che mi vengono dati."
                          ),
                          e("br"),
                          t._v(
                            "La relazione con le altre persone è un ottimo carburante per me e spiega la mia propensione al lavoro in team."
                          ),
                          e("br"),
                          t._v(
                            "Ho deciso di investire su di me come sviluppatore per trasformare in lavoro la mia passione per la tecnologia e per la logica unita al desiderio e al benessere che provo nell'aiutare il prossimo. "
                          ),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          C = [],
          j = o(165);
        const { custom1: _ } = (0, j.wV)(),
          { custom2: O } = (0, j.wV)(),
          { custom3: N } = (0, j.wV)();
        var P = {
            name: "generalPresentation",
            methods: {
              customEvent() {
                (_.variant.value = "custom"),
                  (O.variant.value = "custom"),
                  (N.variant.value = "custom");
              },
            },
          },
          S = P,
          $ = (0, l.Z)(S, w, C, !1, null, "5bdfbdaa", null),
          A = $.exports,
          E = {
            name: "HomeView",
            components: { jumbotron: k, presentation: A },
          },
          T = E,
          Z = (0, l.Z)(T, d, v, !1, null, "029aa9c7", null),
          F = Z.exports;
        n["default"].use(m.ZP);
        const z = [
            {
              path: "/",
              name: "home",
              component: F,
              meta: { title: "Giuseppe Dicosmo | Full Stack Web Developer" },
            },
            {
              path: "/about",
              name: "about",
              component: () => o.e(443).then(o.bind(o, 488)),
              meta: { title: "Sasso Carta Forbici" },
            },
          ],
          L = new m.ZP({ mode: "history", base: "/portfolio/", routes: z });
        L.beforeEach((t, e, o) => {
          (document.title = t.meta.title), o();
        });
        var I = L;
        n["default"].use(a.ZP);
        var M = new a.ZP.Store({
            state: { dark: !1, navbarIcon: !0 },
            getters: {},
            mutations: {
              darkMode: (t) => {
                t.dark = !t.dark;
              },
            },
            actions: {},
            modules: {},
          }),
          D = o(69),
          V = o(17);
        o(24);
        n["default"].use(D.XG7),
          n["default"].use(V.A7),
          n["default"].use(j.tc),
          (n["default"].config.productionTip = !1),
          new n["default"]({ router: I, store: M, render: (t) => t(p) }).$mount(
            "#app"
          );
      },
      100: function (t, e, o) {
        t.exports = o.p + "img/angular.74e49f8c.svg";
      },
      893: function (t, e, o) {
        t.exports = o.p + "img/bootstrap.86295ace.svg";
      },
      532: function (t, e, o) {
        t.exports = o.p + "img/css.892d68fc.svg";
      },
      951: function (t, e, o) {
        t.exports = o.p + "img/html.1758920c.svg";
      },
      310: function (t, e, o) {
        t.exports = o.p + "img/javascript.891f8ffc.svg";
      },
      952: function (t, e, o) {
        t.exports = o.p + "img/laravel.575758c4.svg";
      },
      442: function (t, e, o) {
        t.exports = o.p + "img/mysql.8d3b9d09.svg";
      },
      331: function (t, e, o) {
        t.exports = o.p + "img/node-js.ef2a17de.svg";
      },
      717: function (t, e, o) {
        t.exports = o.p + "img/php.117dfae3.svg";
      },
      450: function (t, e, o) {
        t.exports = o.p + "img/react.92d1d45f.svg";
      },
      754: function (t, e, o) {
        t.exports = o.p + "img/sass.cf69f2d1.svg";
      },
      214: function (t, e, o) {
        t.exports = o.p + "img/typescript.a70cac4f.svg";
      },
      600: function (t, e, o) {
        t.exports = o.p + "img/vue.68af69e9.svg";
      },
      180: function (t, e, o) {
        t.exports = o.p + "img/img-profail-1.169378e5.png";
      },
      291: function (t, e, o) {
        t.exports = o.p + "img/img-profail-2.51559e59.png";
      },
    },
    e = {};
  function o(n) {
    var i = e[n];
    if (void 0 !== i) return i.exports;
    var r = (e[n] = { exports: {} });
    return t[n](r, r.exports, o), r.exports;
  }
  (o.m = t),
    (function () {
      var t = [];
      o.O = function (e, n, i, r) {
        if (!n) {
          var a = 1 / 0;
          for (u = 0; u < t.length; u++) {
            (n = t[u][0]), (i = t[u][1]), (r = t[u][2]);
            for (var s = !0, c = 0; c < n.length; c++)
              (!1 & r || a >= r) &&
              Object.keys(o.O).every(function (t) {
                return o.O[t](n[c]);
              })
                ? n.splice(c--, 1)
                : ((s = !1), r < a && (a = r));
            if (s) {
              t.splice(u--, 1);
              var l = i();
              void 0 !== l && (e = l);
            }
          }
          return e;
        }
        r = r || 0;
        for (var u = t.length; u > 0 && t[u - 1][2] > r; u--) t[u] = t[u - 1];
        t[u] = [n, i, r];
      };
    })(),
    (function () {
      o.d = function (t, e) {
        for (var n in e)
          o.o(e, n) &&
            !o.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
      };
    })(),
    (function () {
      (o.f = {}),
        (o.e = function (t) {
          return Promise.all(
            Object.keys(o.f).reduce(function (e, n) {
              return o.f[n](t, e), e;
            }, [])
          );
        });
    })(),
    (function () {
      o.u = function (t) {
        return "js/about.45eb0a8e.js";
      };
    })(),
    (function () {
      o.miniCssF = function (t) {};
    })(),
    (function () {
      o.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      var t = {},
        e = "portfolio:";
      o.l = function (n, i, r, a) {
        if (t[n]) t[n].push(i);
        else {
          var s, c;
          if (void 0 !== r)
            for (
              var l = document.getElementsByTagName("script"), u = 0;
              u < l.length;
              u++
            ) {
              var p = l[u];
              if (
                p.getAttribute("src") == n ||
                p.getAttribute("data-webpack") == e + r
              ) {
                s = p;
                break;
              }
            }
          s ||
            ((c = !0),
            (s = document.createElement("script")),
            (s.charset = "utf-8"),
            (s.timeout = 120),
            o.nc && s.setAttribute("nonce", o.nc),
            s.setAttribute("data-webpack", e + r),
            (s.src = n)),
            (t[n] = [i]);
          var f = function (e, o) {
              (s.onerror = s.onload = null), clearTimeout(m);
              var i = t[n];
              if (
                (delete t[n],
                s.parentNode && s.parentNode.removeChild(s),
                i &&
                  i.forEach(function (t) {
                    return t(o);
                  }),
                e)
              )
                return e(o);
            },
            m = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = f.bind(null, s.onerror)),
            (s.onload = f.bind(null, s.onload)),
            c && document.head.appendChild(s);
        }
      };
    })(),
    (function () {
      o.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      o.p = "/portfolio/";
    })(),
    (function () {
      var t = { 143: 0 };
      (o.f.j = function (e, n) {
        var i = o.o(t, e) ? t[e] : void 0;
        if (0 !== i)
          if (i) n.push(i[2]);
          else {
            var r = new Promise(function (o, n) {
              i = t[e] = [o, n];
            });
            n.push((i[2] = r));
            var a = o.p + o.u(e),
              s = new Error(),
              c = function (n) {
                if (o.o(t, e) && ((i = t[e]), 0 !== i && (t[e] = void 0), i)) {
                  var r = n && ("load" === n.type ? "missing" : n.type),
                    a = n && n.target && n.target.src;
                  (s.message =
                    "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = r),
                    (s.request = a),
                    i[1](s);
                }
              };
            o.l(a, c, "chunk-" + e, e);
          }
      }),
        (o.O.j = function (e) {
          return 0 === t[e];
        });
      var e = function (e, n) {
          var i,
            r,
            a = n[0],
            s = n[1],
            c = n[2],
            l = 0;
          if (
            a.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (i in s) o.o(s, i) && (o.m[i] = s[i]);
            if (c) var u = c(o);
          }
          for (e && e(n); l < a.length; l++)
            (r = a[l]), o.o(t, r) && t[r] && t[r][0](), (t[r] = 0);
          return o.O(u);
        },
        n = (self["webpackChunkportfolio"] =
          self["webpackChunkportfolio"] || []);
      n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
    })();
  var n = o.O(void 0, [998], function () {
    return o(889);
  });
  n = o.O(n);
})();
//# sourceMappingURL=app.b213f956.js.map
