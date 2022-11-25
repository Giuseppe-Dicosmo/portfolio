import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactMe from "../views/ContactMe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Giuseppe Dicosmo | Full Stack Web Developer",
    },
  },
  {
    path: "/contactMe",
    name: "contactMe",
    component: ContactMe,
    meta: {
      title: "Contattami",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  next();
});

export default router;
