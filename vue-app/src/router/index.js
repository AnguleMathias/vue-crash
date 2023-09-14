import { createRouter, createWebHistory } from "vue-router";

import Body from "../components/BodyComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Body,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
