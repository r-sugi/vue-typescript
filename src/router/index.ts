import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Users from "@/views/Users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/users",
    component: Users
  },
  {
    path: "/about",
    component: () => import("@/views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
