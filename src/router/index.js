import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Discover from "../views/Discover.vue";
import Login from "../views/Auth/Login.vue";
import MPodcasts from "../views/MPodcasts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/discover",
    name: "Discover",
    component: Discover,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Auth/Register.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Search.vue"),
  },
  {
    path: "/podcast/:id",
    name: "Podcast",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Podcast.vue"),
  },
  {
    path: "/profile/:username",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Profile.vue"),
  },
  {
    path: "/create",
    name: "Create",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/CreatePodcast.vue"),
  },
  {
    path: "/mypods",
    name: "Podcast",
    component: MPodcasts,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
