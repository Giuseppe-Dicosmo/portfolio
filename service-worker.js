if (!self.define) {
  let o,
    i = {};
  const l = (l, r) => (
    (l = new URL(l + ".js", r).href),
    i[l] ||
      new Promise((i) => {
        if ("document" in self) {
          const o = document.createElement("script");
          (o.src = l), (o.onload = i), document.head.appendChild(o);
        } else (o = l), importScripts(l), i();
      }).then(() => {
        let o = i[l];
        if (!o) throw new Error(`Module ${l} didn’t register its module`);
        return o;
      })
  );
  self.define = (r, s) => {
    const e =
      o ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[e]) return;
    let n = {};
    const t = (o) => l(o, e),
      u = { module: { uri: e }, exports: n, require: t };
    i[e] = Promise.all(r.map((o) => u[o] || t(o))).then((o) => (s(...o), n));
  };
}
define(["./workbox-79ffe3e0"], function (o) {
  "use strict";
  o.setCacheNameDetails({ prefix: "portfolio" }),
    self.addEventListener("message", (o) => {
      o.data && "SKIP_WAITING" === o.data.type && self.skipWaiting();
    }),
    o.precacheAndRoute(
      [
        { url: "/portfolio/css/app.2abcc50d.css", revision: null },
        { url: "/portfolio/css/chunk-vendors.f1056aad.css", revision: null },
        { url: "/portfolio/img/angular.74e49f8c.svg", revision: null },
        { url: "/portfolio/img/bootstrap.86295ace.svg", revision: null },
        { url: "/portfolio/img/css.892d68fc.svg", revision: null },
        { url: "/portfolio/img/html.1758920c.svg", revision: null },
        { url: "/portfolio/img/img-profail-1.169378e5.png", revision: null },
        { url: "/portfolio/img/javascript.891f8ffc.svg", revision: null },
        { url: "/portfolio/img/laravel.575758c4.svg", revision: null },
        { url: "/portfolio/img/mysql.8d3b9d09.svg", revision: null },
        { url: "/portfolio/img/node-js.ef2a17de.svg", revision: null },
        { url: "/portfolio/img/php.117dfae3.svg", revision: null },
        { url: "/portfolio/img/react.92d1d45f.svg", revision: null },
        { url: "/portfolio/img/sass.cf69f2d1.svg", revision: null },
        { url: "/portfolio/img/typescript.a70cac4f.svg", revision: null },
        { url: "/portfolio/img/vue.68af69e9.svg", revision: null },
        {
          url: "/portfolio/index.html",
          revision: "f988cc16a5a396075ae7a16079cb142f",
        },
        { url: "/portfolio/js/about.45eb0a8e.js", revision: null },
        { url: "/portfolio/js/app.b213f956.js", revision: null },
        { url: "/portfolio/js/chunk-vendors.adcf9130.js", revision: null },
        {
          url: "/portfolio/manifest.json",
          revision: "5f57269bc6813d2b71ac1d0bb254ce38",
        },
        {
          url: "/portfolio/robots.txt",
          revision: "b6216d61c03e6ce0c9aea6ca7808f7ca",
        },
      ],
      {}
    );
});
//# sourceMappingURL=service-worker.js.map
