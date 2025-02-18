if (!self.define) {
  let o,
    l = {};
  const i = (i, r) => (
    (i = new URL(i + ".js", r).href),
    l[i] ||
      new Promise((l) => {
        if ("document" in self) {
          const o = document.createElement("script");
          (o.src = i), (o.onload = l), document.head.appendChild(o);
        } else (o = i), importScripts(i), l();
      }).then(() => {
        let o = l[i];
        if (!o) throw new Error(`Module ${i} didn’t register its module`);
        return o;
      })
  );
  self.define = (r, e) => {
    const n =
      o ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (l[n]) return;
    let s = {};
    const f = (o) => i(o, n),
      t = { module: { uri: n }, exports: s, require: f };
    l[n] = Promise.all(r.map((o) => t[o] || f(o))).then((o) => (e(...o), s));
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
        {
          url: "/portfolio/GiuseppeDicosmoCv.pdf",
          revision: "8283a1251e50d82b8f508afff22d9bbc",
        },
        { url: "/portfolio/css/app.705924e5.css", revision: null },
        { url: "/portfolio/css/chunk-vendors.de7f411d.css", revision: null },
        {
          url: "/portfolio/fonts/barlow-condensed-all-400-normal.735372a7.woff",
          revision: null,
        },
        {
          url: "/portfolio/fonts/barlow-condensed-latin-400-normal.41be664a.woff2",
          revision: null,
        },
        {
          url: "/portfolio/fonts/barlow-condensed-latin-ext-400-normal.48e8b69b.woff2",
          revision: null,
        },
        {
          url: "/portfolio/fonts/league-spartan-all-400-normal.c6d190b0.woff",
          revision: null,
        },
        {
          url: "/portfolio/fonts/league-spartan-all-700-normal.02d1bed0.woff",
          revision: null,
        },
        {
          url: "/portfolio/fonts/league-spartan-latin-400-normal.f62736e9.woff2",
          revision: null,
        },
        {
          url: "/portfolio/fonts/league-spartan-latin-700-normal.2702702f.woff2",
          revision: null,
        },
        {
          url: "/portfolio/fonts/league-spartan-latin-ext-400-normal.c0c0b18c.woff2",
          revision: null,
        },
        {
          url: "/portfolio/fonts/league-spartan-latin-ext-700-normal.26f9bba1.woff2",
          revision: null,
        },
        {
          url: "/portfolio/img-brand.ico",
          revision: "b8e1cd01a44d2c3e6d51bdf8080e7c7a",
        },
        {
          url: "/portfolio/img-brand.png",
          revision: "baac8527e45444e1f9b02b09458b5e57",
        },
        { url: "/portfolio/img/angular.74e49f8c.svg", revision: null },
        { url: "/portfolio/img/bootstrap.86295ace.svg", revision: null },
        { url: "/portfolio/img/css.892d68fc.svg", revision: null },
        { url: "/portfolio/img/html.1758920c.svg", revision: null },
        { url: "/portfolio/img/img-boolflix.486b487b.jpeg", revision: null },
        { url: "/portfolio/img/img-brand.c99f8189.png", revision: null },
        { url: "/portfolio/img/img-campo-minato.75171a4a.jpg", revision: null },
        { url: "/portfolio/img/img-deliverboo.2edf2c88.jpg", revision: null },
        {
          url: "/portfolio/img/img-morra-cinese.e004ec1e.jpeg",
          revision: null,
        },
        { url: "/portfolio/img/img-playstation.45b18b3c.jpeg", revision: null },
        { url: "/portfolio/img/img-profail-1.169378e5.png", revision: null },
        {
          url: "/portfolio/img/img-react-shop-card.8367d604.jpg",
          revision: null,
        },
        { url: "/portfolio/img/img-spotify.aa2fc784.jpeg", revision: null },
        { url: "/portfolio/img/img-whatsapp.3736dbfc.jpeg", revision: null },
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
          revision: "f615589c5ed2e727c5f88bf4faf33419",
        },
        { url: "/portfolio/js/app.cad2e39b.js", revision: null },
        { url: "/portfolio/js/chunk-vendors.cc22e367.js", revision: null },
        {
          url: "/portfolio/manifest.json",
          revision: "7f3e20e413ff7b7ea109040ea894c9f4",
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
