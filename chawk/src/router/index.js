/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/home.vue";
import CheckOut from "@/views/checkout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    
  },
  {
    path: "/checkout",
    name: "CheckOut",
    component: CheckOut,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
